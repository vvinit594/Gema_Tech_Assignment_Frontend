import React from 'react';
import { getFeedbackByScore } from '../utils/feedbackLogic';

const FeedbackSection = ({ scores }) => {
  const skills = ['pronunciation', 'fluency', 'vocabulary', 'grammar'];

  return (
    <div className="feedback-section">
      <h2>Descriptive Feedback</h2>
      <div className="feedback-content">
        {/* Overall Feedback */}
        <div className="feedback-item">
          <h3>Overall Performance</h3>
          <p>{getFeedbackByScore(scores.overall, 'overall')}</p>
        </div>

        {/* Individual Skill Feedbacks */}
        {skills.map((skill, index) => (
          <div key={index} className="feedback-item">
            <h3>{skill.charAt(0).toUpperCase() + skill.slice(1)}</h3>
            <p>{getFeedbackByScore(scores[skill], skill)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSection;
