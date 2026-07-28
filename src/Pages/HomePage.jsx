import React, { useState } from "react";
import IntroCard from "./Card_1";
import MinigameCard from "./Card_2";
import GiftCard from "./Card_3";
import MemoryLane from "./Card_4";
import SecretLetter from "./Card_5";
import MusicCard from "./Card_6";
import GiftBox from "./Card_7";
import "./CSS/HomePage.css";
import mySong from "../assets/our-song.mp3";
const Home = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="birthday-page">
      {/* Floating Background Hearts */}
      <div className="heart" style={{ left: "10%", animationDelay: "0s" }}>❤️</div>
      <div className="heart" style={{ left: "25%", animationDelay: "2s" }}>💖</div>
      <div className="heart" style={{ left: "45%", animationDelay: "4s" }}>💕</div>
      <div className="heart" style={{ left: "65%", animationDelay: "1s" }}>💗</div>
      <div className="heart" style={{ left: "85%", animationDelay: "3s" }}>💝</div>

      <div className="container">
        {step === 1 && <IntroCard onNext={() => setStep(2)} />}
        {step === 2 && <MinigameCard onComplete={() => setStep(3)} />}
        {step === 3 &&  <GiftCard onComplete={() => setStep(4)} />}        
        {step === 4 &&  <SecretLetter onNext={() => setStep(5)} />}
        {step === 5 &&  <MusicCard audioFile={mySong} onNext={() => setStep(6)} />}
        {step === 6 &&  <GiftBox />}
      </div>
    </div>
  );
};

export default Home;