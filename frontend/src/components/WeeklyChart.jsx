import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function WeeklyChart({ feedbacks }) {

  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];

  const data = weeks.map((week) => ({
    week,
    feedback: feedbacks.filter(
      (item) => item.week === week
    ).length,
  }));

  return (
    <div className="card">

      <h2>Weekly Feedback</h2>

      <ResponsiveContainer width="100%" height={320}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="week" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="feedback"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default WeeklyChart;