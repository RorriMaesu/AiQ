import React from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = ({ progress }) => (
  <div
    className="progress-track"
    role="progressbar"
    aria-valuenow={Math.round(progress)}
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Quiz progress"
  >
    <span className="progress-value" style={{ width: `${progress}%` }} />
  </div>
);

export default ProgressBar;
