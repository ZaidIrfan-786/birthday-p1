import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./CSS/Card_6.css";
import photo from "../assets/Rain.webp"; // Replace with your actual cover image path

const MusicCard = ({
  songTitle = "Our Favorite Song",
  artist = "Best Friend",
  coverImage = photo,
  audioFile,
  onNext,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  // Toggle Play/Pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update time as audio plays
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Set duration once metadata is loaded
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Scrub through song via progress bar
  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Reset state when audio ends
  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Format seconds to MM:SS
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="music-card-wrapper">
      <div className="glass-card">
        <h2 className="music-card-heading">
          A Song That Reminds Me of You 🎵
        </h2>

        {/* Album Cover Container with Pulse Effect */}
        <div className={`album-cover-wrapper ${isPlaying ? "playing" : ""}`}>
          <img
            src={coverImage}
            alt={`${songTitle} album artwork`}
            className="album-cover"
          />
        </div>

        {/* Song Details */}
        <div className="song-info">
          <h3 className="song-title">{songTitle}</h3>
          <p className="artist-name">{artist}</p>
        </div>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={audioFile}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
        />

        {/* Custom Controls & Progress */}
        <div className="player-controls">
          <div className="progress-container">
            <span className="time-text">{formatTime(currentTime)}</span>
            <input
              type="range"
              className="progress-bar"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
            />
            <span className="time-text">{formatTime(duration)}</span>
          </div>

          <button
            className="play-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              // Pause Icon
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              // Play Icon
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        {/* Optional Next Button to fit your multi-step flow */}
        {onNext && (
          <button className="next-card-btn" onClick={onNext}>
            Continue Memory Lane 💕
          </button>
        )}
      </div>
    </div>
  );
};

MusicCard.propTypes = {
  songTitle: PropTypes.string,
  artist: PropTypes.string,
  coverImage: PropTypes.string.isRequired,
  audioFile: PropTypes.string.isRequired,
  onNext: PropTypes.func,
};

export default MusicCard;