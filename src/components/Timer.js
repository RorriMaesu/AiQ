import React from 'react';
import '../styles/Timer.css';

const Timer = ({ timeLeft }) => {
  // Calculate color based on time left
  const getTimerColor = () => {
    if (timeLeft > 30) return 'green';
    if (timeLeft > 10) return 'orange';
    return 'red';
  };

  return (
    <div className="timer-container">
      <div 
        className="timer" 
        style={{ color: getTimerColor() }}
      >
        {timeLeft}
      </div>
      <div className="timer-label">seconds</div>
    </div>
  );
};

export default Timer;
