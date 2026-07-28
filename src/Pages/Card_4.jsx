// import React from 'react'

// const MemoryLane = () => {
//   return (
//     <div className="card">
//       <h1>Memories</h1>
//       <br />
//       <h3>Did u remember?</h3>
//      <div></div>
//      <div></div>
//      <div></div>
//     </div>
//   )
// }

// export default MemoryLane

import React, { useState } from "react";
import "./CSS/Card_4.css";

const memories = [
  {
    year: "2018",
    title: "Where It All Began",
    description: "The day we first met. Who knew back then how special you'd become to me?",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    year: "2020",
    title: "The Great Road Trip",
    description: "Surviving 12 hours of driving with bad snacks, wrong turns, and the best playlist.",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    year: "2022",
    title: "Late Night Talks",
    description: "Staying up until 4 AM talking about everything and nothing at all.",
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    year: "2024",
    title: "Another Milestone",
    description: "Celebrating another amazing year of your life together. Here's to many more!",
    image: "https://picsum.photos/400/300?random=4",
  },
];

const MemoryLane = ({ onNext }) => {
  const [activeMemory, setActiveMemory] = useState(0);

  return (
    <div className="card-container memory-lane-card">
      <h2 className="title">Down Memory Lane 📸</h2>
      <p className="subtitle">A few of my favorite moments with you</p>

      {/* Memory Timeline Grid */}
      <div className="memory-display">
        <div className="memory-image-wrapper">
          <img
            src={memories[activeMemory].image}
            alt={memories[activeMemory].title}
            className="memory-image"
          />
          <span className="memory-year">{memories[activeMemory].year}</span>
        </div>

        <div className="memory-details">
          <h3>{memories[activeMemory].title}</h3>
          <p>{memories[activeMemory].description}</p>
        </div>
      </div>

      {/* Timeline Controls */}
      <div className="timeline-dots">
        {memories.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeMemory ? "active" : ""}`}
            onClick={() => setActiveMemory(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Navigation Button */}
      <button className="next-btn" onClick={onNext}>
        Continue to Next Surprise ✨
      </button>
    </div>
  );
};

export default MemoryLane;