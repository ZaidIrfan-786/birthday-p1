import React, { useState } from "react";

const MinigameCard = ({ onComplete }) => {
  const [heartClicks, setHeartClicks] = useState(0);
  const [heartPos, setHeartPos] = useState({ top: 50, left: 50 });

  const moveHeart = () => {
    if (heartClicks < 5) {
      setHeartClicks((prev) => prev + 1);
    }

    setHeartPos({
      top: Math.random() * 70 + 10, // 10% - 80%
      left: Math.random() * 70 + 10, // 10% - 80%
    });
  };

  return (
    <div className="card">
      <h1>First, catch my heart!</h1>
      <br />
      <p>Click the floating heart five times to unlock your gift.</p>
      <p>Total clicks: {heartClicks} / 5</p>

      {/* Relative wrapper container */}
      <div
        style={{
          position: "relative",
          height: "300px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          onClick={moveHeart}
          style={{
            position: "absolute",
            fontSize: "1.4rem",
            top: `${heartPos.top}%`,
            left: `${heartPos.left}%`,
            cursor: "pointer",
            userSelect: "none",
            transition: "all 0.3s ease",
            transform: "translate(-50%, -50%)",
          }}
        >
          💖
        </div>
      </div>

      {heartClicks >= 5 && (
        <button onClick={onComplete}>Open Your Surprise 🎁</button>
      )}
    </div>
  );
};

export default MinigameCard;