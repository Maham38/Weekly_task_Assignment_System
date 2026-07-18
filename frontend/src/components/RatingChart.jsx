import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function RatingChart({ feedbacks }) {

  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];

  const data = weeks.map((week) => {

    const weekFeedbacks = feedbacks.filter(
      (item) => item.week === week
    );

    const average =
      weekFeedbacks.length > 0
        ? (
            weekFeedbacks.reduce(
              (sum, item) => sum + item.rating,
              0
            ) / weekFeedbacks.length
          ).toFixed(1)
        : 0;

    return {
      week,
      rating: Number(average),
    };
  });

  return (
    <div className="card">

      <h2>Average Rating Trend</h2>

      <ResponsiveContainer width="100%" height={320}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="week" />

          <YAxis domain={[0, 5]} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="rating"
            stroke="#22c55e"
            strokeWidth={4}
            dot={{ r: 6 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default RatingChart;