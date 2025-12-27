import React from 'react';

const Header = ({ studentName, testDate, testType }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="report-header">
      <h1>Speaking Assessment Report</h1>
      <p>Comprehensive evaluation of speaking skills</p>
      <div className="student-info">
        <div className="info-item">
          <span className="info-label">Student Name</span>
          <span className="info-value">{studentName}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Test Date</span>
          <span className="info-value">{formatDate(testDate)}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Assessment Type</span>
          <span className="info-value">{testType}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
