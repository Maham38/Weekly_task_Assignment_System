import { useState } from "react";
import { toast } from "react-toastify";
import API from "../services/api";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    submissionId: "",
    internName: "",
    week: "",
    task: "",
    rating: "",
    strengths: "",
    improvements: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/feedback", formData);

      toast.success("Feedback Submitted Successfully!");

      setFormData({
        submissionId: "",
        internName: "",
        week: "",
        task: "",
        rating: "",
        strengths: "",
        improvements: "",
        comments: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit feedback");
    }
  };

  return (
    <div className="feedback-container">
      <h1>Submit Feedback</h1>

      <form className="feedback-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Submission ID</label>
          <input
            type="text"
            name="submissionId"
            value={formData.submissionId}
            onChange={handleChange}
            placeholder="FB-001"
            required
          />
        </div>

        <div className="form-group">
          <label>Intern Name</label>
          <input
            type="text"
            name="internName"
            value={formData.internName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Week</label>
          <select
            name="week"
            value={formData.week}
            onChange={handleChange}
            required
          >
            <option value="">Select Week</option>
            <option>Week 1</option>
            <option>Week 2</option>
            <option>Week 3</option>
            <option>Week 4</option>
          </select>
        </div>

        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            name="task"
            value={formData.task}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label>Strengths</label>
          <textarea
            name="strengths"
            value={formData.strengths}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label>Areas for Improvement</label>
          <textarea
            name="improvements"
            value={formData.improvements}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label>Additional Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>

        <div className="full-width">
          <button className="submit-btn" type="submit">
            Submit Feedback
          </button>
        </div>

      </form>
    </div>
  );
}

export default FeedbackForm;