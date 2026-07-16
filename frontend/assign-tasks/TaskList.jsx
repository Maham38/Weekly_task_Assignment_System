export default function TaskList({ tasks }) {
  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Assigned Tasks</h3>
        </div>

        <div className="card-body">
          {tasks.length === 0 ? (
            <div className="alert alert-info mb-0">
              No tasks assigned.
            </div>
          ) : (
            <ul className="list-group">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div>
                    <h5 className="mb-1">{task.title}</h5>

                    <p className="mb-1 text-muted">
                      <strong>Assigned To:</strong> {task.assignee_name}
                    </p>

                    <p className="mb-1">
                      <strong>Type:</strong>{" "}
                      <span className="badge bg-secondary">
                        {task.assignee_type}
                      </span>
                    </p>

                    <p className="mb-1">
                      <strong>Week:</strong> {task.week}
                    </p>

                    <p className="mb-0">
                      <strong>Due Date:</strong> {task.due_date}
                    </p>
                  </div>

                  <span
                    className={`badge ${
                      task.status === "Completed"
                        ? "bg-success"
                        : task.status === "In Progress"
                        ? "bg-warning text-dark"
                        : "bg-danger"
                    }`}
                  >
                    {task.status}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}