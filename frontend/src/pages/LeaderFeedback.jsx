import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../services/api";

function LeaderFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const loadFeedbacks = async () => {
    try {
      const res = await API.get("/feedback");
      setFeedbacks(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load feedback.");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/feedback/${id}`, { status });

      toast.success("Status Updated Successfully");

      loadFeedbacks();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status.");
    }
  };

  return (
    <div className="card">
      <h1>Leader Feedback Panel</h1>

      <p className="form-subtitle">
        Review submitted feedback and update its status.
      </p>

      {feedbacks.length === 0 ? (
        <p className="empty-text">No Feedback Available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Intern</th>
              <th>Week</th>
              <th>Task</th>
              <th>Rating</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {feedbacks.map((item) => (
              <tr key={item.id}>
                <td>{item.submissionId}</td>
                <td>{item.internName}</td>
                <td>{item.week}</td>
                <td>{item.task}</td>
                <td>{item.rating} ⭐</td>

                <td>
                  <span
                    className={`status ${
                      item.status === "Approved"
                        ? "approved"
                        : item.status === "Rejected"
                        ? "rejected"
                        : item.status === "In Progress"
                        ? "inprogress"
                        : "pending"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td>
                  <div className="action-buttons">
                    <button
                      className="approve-btn"
                      onClick={() =>
                        updateStatus(item.id, "Approved")
                      }
                    >
                      Approve
                    </button>

                    <button
                      className="progress-btn"
                      onClick={() =>
                        updateStatus(item.id, "In Progress")
                      }
                    >
                      Progress
                    </button>

                    <button
                      className="reject-btn"
                      onClick={() =>
                        updateStatus(item.id, "Rejected")
                      }
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LeaderFeedback;