import { FaStar } from "react-icons/fa";

function RatingStars({ rating }) {
  return (
    <div style={{ color: "#f59e0b" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          opacity={star <= rating ? 1 : 0.3}
        />
      ))}
    </div>
  );
}

export default RatingStars;