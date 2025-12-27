import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import OverallScore from './components/OverallScore';
import SkillsSection from './components/SkillsSection';
import SkillsChart from './components/SkillsChart';
import FeedbackSection from './components/FeedbackSection';

// API Configuration
const API_BASE_URL = 'http://localhost:3001';

function App() {
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch student data from backend API
    const fetchReportData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/student/report`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch report data');
        }
        
        const result = await response.json();
        setReportData(result.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching report:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, []);

  if (loading) {
    return (
      <div className="app-container">
        <div className="loading-container">
          <div className="spinner"></div>
          <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
            Loading Assessment Report...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <div className="loading-container">
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '15px',
            maxWidth: '500px',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#F44336', marginBottom: '1rem' }}>⚠️ Error</h2>
            <p style={{ color: '#666' }}>{error}</p>
            <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '1rem' }}>
              Please make sure the backend server is running on port 3001
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!reportData) {
    return (
      <div className="app-container">
        <div className="loading-container">
          <p style={{ fontSize: '1.2rem' }}>
            No data available
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="report-container">
        <Header 
          studentName={reportData.student.name}
          testDate={reportData.student.testDate}
          testType={reportData.student.testType}
        />
        
        <OverallScore score={reportData.scores.overall} />
        
        <SkillsChart scores={reportData.scores} />
        
        <SkillsSection scores={reportData.scores} />
        
        <FeedbackSection scores={reportData.scores} />
      </div>
    </div>
  );
}

export default App;

