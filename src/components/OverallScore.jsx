import React from 'react';
import ScoreBadge from './ScoreBadge';

const OverallScore = ({ score }) => {
  return (
    <div className="overall-score-section">
      <h2>Overall Score</h2>
      <div className="score-circle">
        <div className="score-value">{score}</div>
        <div className="score-max">/ 9</div>
      </div>
      <ScoreBadge score={score} />
      <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>
        Based on comprehensive evaluation of all speaking skills
      </p>
    </div>
  );
};

export default OverallScore;
