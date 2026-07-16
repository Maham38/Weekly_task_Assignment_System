import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { listTasks } from "./api";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function AssignTasks() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      setError("");
      const data = await listTasks();
      setTasks(data);
    } catch {
      setError("Could not load tasks. Check that the backend is running.");
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <main className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge text-bg-primary mb-2">SafeX Solutions</span>
          <h1 className="fw-bold">Weekly Task Assignment</h1>
          <p className="text-secondary mb-0">
            Create, assign, and track intern and group tasks.
          </p>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <TaskForm onCreated={load} />
              </div>
           

              <div className="card-body p-4">
                <TaskList tasks={tasks} />
              </div>
            
        </div>
      </div>
    </main>
  );
}