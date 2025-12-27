import React from 'react';
import ProgressBar from './ProgressBar';
import { getFeedbackByScore } from '../utils/feedbackLogic';

const SkillCard = ({ skillName, score }) => {
  const feedback = getFeedbackByScore(score, skillName);

  return (
    <div className="skill-card">
      <div className="skill-header">
        <h3 className="skill-name">{skillName}</h3>
        <span className="skill-score">{score}</span>
      </div>
      <ProgressBar score={score} />
      <p className="skill-feedback">{feedback}</p>
    </div>
  );
};

const SkillsSection = ({ scores }) => {
  const skills = [
    { name: 'Pronunciation', score: scores.pronunciation },
    { name: 'Fluency', score: scores.fluency },
    { name: 'Vocabulary', score: scores.vocabulary },
    { name: 'Grammar', score: scores.grammar }
  ];

  return (
    <div className="skills-section">
      <h2>Skill-wise Assessment</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard 
            key={index} 
            skillName={skill.name} 
            score={skill.score} 
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
