import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillsChart = ({ scores }) => {
  const data = {
    labels: ['Pronunciation', 'Fluency', 'Vocabulary', 'Grammar'],
    datasets: [
      {
        label: 'Your Scores',
        data: [
          scores.pronunciation,
          scores.fluency,
          scores.vocabulary,
          scores.grammar
        ],
        backgroundColor: 'rgba(139, 21, 56, 0.2)',
        borderColor: 'rgba(139, 21, 56, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(139, 21, 56, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(139, 21, 56, 1)',
        pointRadius: 5,
        pointHoverRadius: 7,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      r: {
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        pointLabels: {
          font: {
            size: 14,
            weight: '600',
            family: 'sans-serif'
          },
          color: '#2C2C2C'
        },
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 9,
          stepSize: 1,
          backdropColor: 'transparent',
          color: '#666666',
          font: {
            size: 12
          }
        },
        suggestedMin: 0,
        suggestedMax: 9
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 14,
            family: 'sans-serif'
          },
          color: '#2C2C2C',
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(139, 21, 56, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        cornerRadius: 8,
        titleFont: {
          size: 14,
          weight: '600'
        },
        bodyFont: {
          size: 13
        },
        callbacks: {
          label: function(context) {
            return ` Score: ${context.parsed.r} / 9`;
          }
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Skills Overview</h2>
      <div className="chart-wrapper">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default SkillsChart;
