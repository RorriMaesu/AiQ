import React from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = ({ progress, answeredProgress = 0 }) => (
  <div
    className="progress-track"
    role="progressbar"
    aria-valuenow={Math.round(progress)}
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Quiz progress"
  >
    <span className="answered-progress" style={{ width: `${answeredProgress}%` }} />
    <span className="current-progress" style={{ width: `${progress}%` }} />
  </div>
);

export default ProgressBar;
