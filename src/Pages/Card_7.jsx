
import React, { useState } from "react";
import "./CSS/Card_7.css";
import mySticker from "../assets/Cat.webp";

const GiftBox = ({ onRestart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNote, setShowNote] = useState(false);

  return (
    <div className="card gift-box-card">
      {!isOpen ? (
        <>
          <p className="ending-tag">YOUR FINAL SURPRISE ✨</p>
          <h2>One last little gift... 🎀</h2>
          <p className="subtitle">
            I saved something special for you.
          </p>

          <button
            className="final-gift"
            onClick={() => setIsOpen(true)}
            aria-label="Open your birthday gift"
          >
            <span className="gift-emoji">🎁</span>
            <span>Open your gift</span>
          </button>
        </>
      ) : !showNote ? (
        <>
          <p className="ending-tag">SURPRISE UNLOCKED 💗</p>
          <h2>A little gift for you!</h2>

          <div className="sticker-container pop-up">
            <img
              src={mySticker}
              alt="A cute birthday gift"
              className="local-sticker"
            />
          </div>

          <p className="subtitle">
            Hehe, did you like your surprise? 🥹
          </p>

          <button
            className="next-btn"
            onClick={() => setShowNote(true)}
          >
            One last thing... 💌
          </button>
        </>
      ) : (
        <div className="final-note pop-up">
          <div className="envelope-icon">💌</div>

          <p className="ending-tag">A LITTLE NOTE FROM ME</p>
          <h2>To my beloved person ♡</h2>

          <div className="letter-paper">
            <p>
              Happy Birthday, my love! 🎂💗
            </p>

            <p>
              I hope this new chapter of your life brings
              you happiness, peace, laughter, and countless
              beautiful moments.
            </p>

            <p>
              I made this little fun moment just for you, and
              I hope it made you smile. You deserve to feel
              celebrated today and every day.
            </p>

            <p className="letter-signoff">
              With lots of love, always ♡
            </p>
          </div>

          <div className="ending-hearts" aria-hidden="true">
            💗 ✨ 💕 ✨ 💗
          </div>

          <p className="ending-footer">
            End of the website. Never the end of the memories. ♡
          </p>

          <button
            className="next-btn"
            onClick={onRestart}
          >
            Relive the surprise ↻
          </button>
        </div>
      )}
    </div>
  );
};

export default GiftBox;
