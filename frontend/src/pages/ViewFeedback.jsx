import { useEffect, useState } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import API from "../services/api";

function ViewFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const loadFeedbacks = async () => {
    try {
      const res = await API.get("/feedback"); // ✅ Correct route
      setFeedbacks(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load feedbacks.");
    }
  };

  const deleteFeedback = async (id) => {
    try {
      await API.delete(`/feedback/${id}`);
      toast.success("Feedback Deleted Successfully");
      loadFeedbacks();
    } catch (error) {
      console.error(error);
      toast.error("Delete Failed");
    }
  };

  const filtered = feedbacks.filter((item) =>
    item.internName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card">
      <h1>Feedback History</h1>

      <div className="search-box">
        <FaSearch />
        <input
          type="text"
          placeholder="Search by Intern Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="empty-text">No Feedback Found.</p>
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
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item) => (
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
                  <button
                    className="delete-btn"
                    onClick={() => deleteFeedback(item.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewFeedback;