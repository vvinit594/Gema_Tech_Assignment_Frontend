/**
 * Generate feedback based on score ranges
 * Score ranges:
 * 8-9: Excellent
 * 6-7: Good
 * 4-5: Satisfactory
 * 0-3: Needs Improvement
 */

export const getFeedbackByScore = (score, skillName) => {
  if (score >= 8) {
    return getFeedbackExcellent(skillName);
  } else if (score >= 6) {
    return getFeedbackGood(skillName);
  } else if (score >= 4) {
    return getFeedbackSatisfactory(skillName);
  } else {
    return getFeedbackNeedsImprovement(skillName);
  }
};

const getFeedbackExcellent = (skillName) => {
  const feedbacks = {
    pronunciation: "Excellent pronunciation with clear articulation and natural intonation. You demonstrate strong control over phonetic elements and speak with confidence.",
    fluency: "Excellent fluency with smooth and natural speech flow. You maintain consistent pace, use appropriate pauses, and demonstrate strong command of spoken language.",
    vocabulary: "Excellent vocabulary range with precise and sophisticated word choice. You effectively use a wide variety of expressions and demonstrate strong lexical resource.",
    grammar: "Excellent grammatical control with accurate and varied sentence structures. You demonstrate mastery of complex grammar patterns with minimal errors.",
    overall: "Outstanding performance across all areas. You demonstrate advanced speaking skills with strong control over pronunciation, fluency, vocabulary, and grammar."
  };
  return feedbacks[skillName.toLowerCase()] || feedbacks.overall;
};

const getFeedbackGood = (skillName) => {
  const feedbacks = {
    pronunciation: "Good pronunciation with generally clear articulation. Minor inaccuracies may occur occasionally, but they don't hinder communication.",
    fluency: "Good fluency with generally smooth speech. Occasional hesitations may occur, but you maintain good overall pace and coherence.",
    vocabulary: "Good vocabulary range with appropriate word choice for most contexts. You use a reasonable variety of expressions with minor limitations.",
    grammar: "Good grammatical control with mostly accurate structures. Some minor errors may occur, but they don't impede understanding.",
    overall: "Good performance overall. You demonstrate solid speaking skills with effective communication across all areas."
  };
  return feedbacks[skillName.toLowerCase()] || feedbacks.overall;
};

const getFeedbackSatisfactory = (skillName) => {
  const feedbacks = {
    pronunciation: "Satisfactory pronunciation, though some sounds may be unclear or mispronounced. Regular practice will help improve clarity and natural intonation.",
    fluency: "Satisfactory fluency with noticeable pauses and hesitations. More practice will help develop smoother speech flow and better pace control.",
    vocabulary: "Satisfactory vocabulary, but range is somewhat limited. Expanding your word bank and learning more expressions will enhance your speaking ability.",
    grammar: "Satisfactory grammar usage, but with frequent errors that sometimes affect clarity. Focus on mastering basic structures before advancing to complex ones.",
    overall: "Satisfactory performance. With consistent practice and focused improvement in key areas, you can significantly enhance your speaking skills."
  };
  return feedbacks[skillName.toLowerCase()] || feedbacks.overall;
};

const getFeedbackNeedsImprovement = (skillName) => {
  const feedbacks = {
    pronunciation: "Pronunciation needs significant improvement. Many sounds are unclear or incorrect, which affects comprehension. Focus on phonetic training and listening practice.",
    fluency: "Fluency needs considerable improvement. Frequent long pauses and hesitations disrupt communication flow. Regular speaking practice is essential.",
    vocabulary: "Vocabulary is very limited and needs substantial expansion. Learn more words and expressions to effectively communicate ideas.",
    grammar: "Grammar needs significant improvement. Frequent errors make communication difficult. Focus on learning and practicing basic grammar structures.",
    overall: "Speaking skills need considerable improvement. Dedicated practice and focused learning in all areas will help build a stronger foundation."
  };
  return feedbacks[skillName.toLowerCase()] || feedbacks.overall;
};

export const getScoreColor = (score) => {
  if (score >= 8) return '#4CAF50'; // Green
  if (score >= 6) return '#8B1538'; // Maroon
  if (score >= 4) return '#FF9800'; // Orange
  return '#F44336'; // Red
};

export const getScorePercentage = (score, maxScore = 9) => {
  return (score / maxScore) * 100;
};
