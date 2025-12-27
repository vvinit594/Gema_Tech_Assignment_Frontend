import React from 'react';

const ScoreBadge = ({ score }) => {
  const getScoreLevel = (score) => {
    if (score >= 8) return { level: 'Excellent', color: '#4CAF50' };
    if (score >= 6) return { level: 'Good', color: '#8B1538' };
    if (score >= 4) return { level: 'Satisfactory', color: '#FF9800' };
    return { level: 'Needs Improvement', color: '#F44336' };
  };

  const { level, color } = getScoreLevel(score);

  return (
    <div className="score-badge" style={{ borderColor: color }}>
      <span className="badge-dot" style={{ backgroundColor: color }}></span>
      <span className="badge-text">{level}</span>
    </div>
  );
};

export default ScoreBadge;
