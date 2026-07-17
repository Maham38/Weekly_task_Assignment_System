import { useState, useEffect } from "react";
import { submitWork, getStatusForIntern } from "./api";
import "./App.css";

function App() {
  const [internName, setInternName] = useState("Maham");
  const [taskId, setTaskId] = useState("");
  const [workLink, setWorkLink] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [tasksLoading, setTasksLoading] = useState(false);

  const loadStatus = async (name) => {
    if (!name) return;
    setTasksLoading(true);
    try {
      const data = await getStatusForIntern(name);
      setTasks(data);
    } catch {
      setTasks([]);
    } finally {
      setTasksLoading(false);
    }
  };

  useEffect(() => { loadStatus(internName); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!workLink) {
      setError("Add a work link before submitting.");
      return;
    }
    setLoading(true);
    try {
      await submitWork({ intern_name: internName, task_id: taskId, work_link: workLink, notes });
      setTaskId("");
      setWorkLink("");
      setNotes("");
      loadStatus(internName);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <p className="eyebrow">SafeX · Weekly Task Assignment System</p>
      <h1>Upload Work</h1>

      <div className="intern-block">
        <label className="field" style={{ marginBottom: 0 }}>
          <span className="field-label">Intern name</span>
          <input
            value={internName}
            onChange={(e) => setInternName(e.target.value)}
            onBlur={() => loadStatus(internName)}
          />
        </label>
      </div>

      <div className="card">
        <h2>Submit weekly work</h2>
        <form onSubmit={handleSubmit}>
          <label className="field">
            <span className="field-label">Task ID</span>
            <input value={taskId} onChange={(e) => setTaskId(e.target.value)} required />
          </label>
          <label className="field">
            <span className="field-label">Work link</span>
            <input value={workLink} onChange={(e) => setWorkLink(e.target.value)} placeholder="https://..." />
          </label>
          <label className="field">
            <span className="field-label">Notes (optional)</span>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
          </label>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" disabled={loading}>{loading ? "Submitting…" : "Submit work"}</button>
        </form>
      </div>

      <h2 className="section-title">Your tasks</h2>
      {tasksLoading && <p className="empty-note">Loading…</p>}
      {!tasksLoading && tasks.length === 0 && <p className="empty-note">No tasks found for this name.</p>}
      {tasks.length > 0 && (
        <div className="log">
          <div className="log-row head">
            <span>Task</span><span>Due</span><span>Status</span><span>Submitted</span>
          </div>
          {tasks.map((t) => (
            <div className="log-row" key={t.task_id}>
              <span className="task-title">{t.title}</span>
              <span className="due-date">{t.due_date}</span>
              <span className={`status-chip status-${t.status}`}>{t.status}</span>
              <span className="submitted-at">{t.submitted_at ? new Date(t.submitted_at).toLocaleDateString() : "—"}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;