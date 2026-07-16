import { useState } from "react";
import { createTask } from "./api";

const initial = {
  title: "",
  description: "",
  assignee_type: "Group",
  assignee_name: "",
  week: "Week 1",
  due_date: "",
};

export default function TaskForm({ onCreated }) {
  const [form, setForm] = useState(initial);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      await createTask(form);
      setForm(initial);
      setMessage("Task assigned successfully.");
      onCreated?.();
    } catch (error) {
      setMessage(error.message || "Could not assign the task.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit}>
      <h2 className="h4 fw-bold mb-4">Assign weekly task</h2>

      <div className="mb-3">
        <label className="form-label">Task title</label>
        <input
          className="form-control"
          name="title"
          value={form.title}
          onChange={updateField}
          placeholder="e.g. Create a safety audit report"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          name="description"
          value={form.description}
          onChange={updateField}
          rows="3"
          placeholder="Add instructions and expected deliverables"
        />
      </div>

      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Assign to</label>
          <select
            className="form-select"
            name="assignee_type"
            value={form.assignee_type}
            onChange={updateField}
          >
            <option value="Group">Group</option>
            <option value="Intern">Intern</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Intern or group name</label>
          <input
            className="form-control"
            name="assignee_name"
            value={form.assignee_name}
            onChange={updateField}
            placeholder="e.g. Group Alpha"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Week</label>
          <input
            className="form-control"
            name="week"
            value={form.week}
            onChange={updateField}
            placeholder="e.g. Week 1"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Due date</label>
          <input
            className="form-control"
            type="date"
            name="due_date"
            value={form.due_date}
            onChange={updateField}
            required
          />
        </div>
      </div>

      <button
        className="btn btn-primary w-100 mt-4"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Assigning..." : "Assign task"}
      </button>

      {message && (
        <div className="alert alert-info mt-3 mb-0" role="alert">
          {message}
        </div>
      )}
    </form>
  );
}