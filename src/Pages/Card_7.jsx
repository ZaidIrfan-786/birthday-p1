import React, { useState } from "react";
import "./CSS/Card_7.css";

// Import your local sticker here
import mySticker from "../assets/Cat.webp"; 

const GiftBox = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card gift-box-card">
      <h2>Gift Box 🎁</h2>
      <p className="subtitle">
        {isOpen ? "Ta-da! Here is your Gift😁" : "Click the box to open your gift!"}
      </p>

      {/* Gift Container */}
      <div 
        className="gift-container"
        onClick={() => setIsOpen(true)}
      >
        {!isOpen ? (
          /* Closed Box */
          <div className="closed-gift">
            <span className="gift-emoji">🎁</span>
            <p className="click-hint">Tap to Open!</p>
          </div>
        ) : (
          /* Single Local Sticker View */
          <div className="sticker-container pop-up">
            <img 
              src={mySticker} 
              alt="Gift Sticker" 
              className="local-sticker" 
            />
          </div>
        )}
      </div>

      {/* Next Step Button (Shows after opening) */}
      {isOpen && (
        <button className="next-btn fade-in" onClick={onNext}>
          Thank You!
        </button>
      )}
    </div>
  );
};

export default GiftBox;