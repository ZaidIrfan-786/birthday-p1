import React from "react";

const IntroCard = ({ onNext }) => {
  return (
    <div className="card">
      <h1>Hey beautiful!</h1>
      <br />
      <p>
        Today is a special day because someone truly amazing was born.
        Thank you for being such a wonderful friend and making every moment
        brighter.
      </p>
      <p>
        I hope your year is filled with happiness, success, laughter, good
        health, and lots of unforgettable memories.
      </p>
      <button onClick={onNext}>Open Your Surprise</button>
      <div className="signature">
        — From Someone Who Thinks You're Amazing ❤️
      </div>
    </div>
  );
};

export default IntroCard;