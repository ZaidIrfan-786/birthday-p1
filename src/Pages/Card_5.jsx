import React, { useState } from "react";
import "./CSS/Card_5.css";// Uses your shared styles
import "./CSS/HomePage.css";// Uses your shared styles

const SecretLetter = ({ name = "Bachhi", onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card secret-letter-card">
      {!isOpen ? (
        /* Closed Envelope View */
        <div className="envelope-wrapper">
          <div className="envelope-icon">
            ✉️
          </div>
          <h2>A Secret Letter For You</h2>
          <p>Click below to unseal your message...</p>
          <button 
            className="btn open-btn" 
            onClick={() => setIsOpen(true)}
          >
            Open Letter 💌
          </button>
        </div>
      ) : (
        /* Revealed Letter Content */
        <div className="letter-content fade-in">
          <h2>Dear {name}, 💌</h2>
          <div className="letter-body">
            <p>
              Thank you for being such an incredible part of my life. Every moment 
              with you brings so much joy and warmth to my heart. 
            </p>
            <p>
              I hope your day is as bright, beautiful, and amazing as you are!
            </p>
          </div>
          
          {/* Optional: Navigation to next step if you have more cards */}
          {onNext && (
            <button className="btn next-btn" onClick={onNext}>
              Continue ❤️
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SecretLetter;