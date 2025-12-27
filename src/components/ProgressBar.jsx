import React from 'react';
import { getScorePercentage } from '../utils/feedbackLogic';

const ProgressBar = ({ score, maxScore = 9 }) => {
  const percentage = getScorePercentage(score, maxScore);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
