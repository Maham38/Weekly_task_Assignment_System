import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#22c55e", "#f59e0b"];

function FeedbackChart({ feedbacks }) {

  const approved = feedbacks.filter(
    (item) => item.status === "Approved"
  ).length;

  const pending = feedbacks.filter(
    (item) => item.status === "Pending"
  ).length;

  const data = [
    { name: "Approved", value: approved },
    { name: "Pending", value: pending },
  ];

  return (
    <div className="card">

      <h2>Feedback Status</h2>

      <ResponsiveContainer width="100%" height={300}>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default FeedbackChart;