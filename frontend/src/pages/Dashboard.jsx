import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

import DashboardCards from "../components/DashboardCards";
import FeedbackChart from "../components/FeedbackChart";
import WeeklyChart from "../components/WeeklyChart";
import RatingChart from "../components/RatingChart";
import FeedbackTable from "../components/FeedbackTable";

function Dashboard() {
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
    }
  };

  const totalFeedback = feedbacks.length;

  const averageRating =
    totalFeedback > 0
      ? (
          feedbacks.reduce((sum, item) => sum + item.rating, 0) /
          totalFeedback
        ).toFixed(1)
      : 0;

  const pending = feedbacks.filter(
    (item) => item.status === "Pending"
  ).length;

  const approved = feedbacks.filter(
    (item) => item.status === "Approved"
  ).length;

  return (
    <div className="dashboard">

      {/* Header */}

      <div className="dashboard-header">

        <div>
          <h1>📊 Feedback Dashboard</h1>
          <p>Welcome to the SafeX Weekly Task Assignment System</p>
        </div>

        <div className="dashboard-buttons">

          <Link to="/feedback">
            <button className="primary-btn">
              + Submit Feedback
            </button>
          </Link>

          <Link to="/history">
            <button className="secondary-btn">
              View History
            </button>
          </Link>

        </div>

      </div>

      {/* Cards */}

      <DashboardCards
        totalFeedback={totalFeedback}
        averageRating={averageRating}
        pending={pending}
        approved={approved}
      />

      {/* Charts */}

      <div className="charts-grid">

        <FeedbackChart feedbacks={feedbacks} />

        <WeeklyChart feedbacks={feedbacks} />

      </div>

      <div style={{ marginTop: "25px" }}>

        <RatingChart feedbacks={feedbacks} />

      </div>

      {/* Statistics */}

      <div className="card">

        <h2>Live Statistics</h2>

        <table>

          <thead>

            <tr>

              <th>Total Feedback</th>

              <th>Average Rating</th>

              <th>Pending</th>

              <th>Approved</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>{totalFeedback}</td>

              <td>{averageRating} ⭐</td>

              <td>{pending}</td>

              <td>{approved}</td>

            </tr>

          </tbody>

        </table>

      </div>

      {/* Recent Feedback */}

      <FeedbackTable feedbacks={feedbacks} />

    </div>
  );
}

export default Dashboard;