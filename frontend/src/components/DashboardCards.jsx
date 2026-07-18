import {
  FaClipboardList,
  FaStar,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

function DashboardCards({
  totalFeedback,
  averageRating,
  approved,
  pending,
}) {
  const cards = [
    {
      title: "Total Feedback",
      value: totalFeedback,
      icon: <FaClipboardList />,
      color: "#2563eb",
    },
    {
      title: "Average Rating",
      value: `${averageRating} ⭐`,
      icon: <FaStar />,
      color: "#f59e0b",
    },
    {
      title: "Approved",
      value: approved,
      icon: <FaCheckCircle />,
      color: "#22c55e",
    },
    {
      title: "Pending",
      value: pending,
      icon: <FaClock />,
      color: "#ef4444",
    },
  ];

  return (
    <div className="dashboard-cards">
      {cards.map((card, index) => (
        <div className="dashboard-card" key={index}>
          <div
            className="card-icon"
            style={{ background: card.color }}
          >
            {card.icon}
          </div>

          <div className="card-details">
            <h4>{card.title}</h4>
            <h2>{card.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;