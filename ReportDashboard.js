// src/components/ReportDashboard.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ReportDashboard = ({ selectedDataset, selectedModel }) => {
  // Dynamic data based on selected dataset and model
  const datasetBiasData = {
    recruiting: {
      labels: ['Gender', 'Education', 'Age'],
      datasets: [{
        label: 'Bias Score (Lower is better)',
        data: [0.75, 0.62, 0.55],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    },
    loan: {
      labels: ['Race', 'Income', 'Geography'],
      datasets: [{
        label: 'Bias Score (Lower is better)',
        data: [0.72, 0.85, 0.45],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    },
    healthcare: {
      labels: ['Insurance', 'Race', 'Age'],
      datasets: [{
        label: 'Bias Score (Lower is better)',
        data: [0.65, 0.58, 0.35],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    },
    'social-media': {
      labels: ['Demographics', 'Political Affiliation', 'Language'],
      datasets: [{
        label: 'Bias Score (Lower is better)',
        data: [0.78, 0.65, 0.50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    },
    'criminal-justice': {
      labels: ['Race', 'Socioeconomic Status', 'Prior Arrests'],
      datasets: [{
        label: 'Bias Score (Lower is better)',
        data: [0.88, 0.75, 0.70],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    },
    'housing-prices': {
      labels: ['Neighborhood Income', 'Redlining History', 'Property Type'],
      datasets: [{
        label: 'Bias Score (Lower is better)',
        data: [0.60, 0.80, 0.40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    },
    'customer-sentiment': {
      labels: ['Region', 'Product Category', 'Reviewer Demographics'],
      datasets: [{
        label: 'Bias Score (Lower is better)',
        data: [0.55, 0.48, 0.70],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    },
    'education-performance': {
      labels: ['Parental Education', 'Family Income', 'Ethnicity'],
      datasets: [{
        label: 'Bias Score (Lower is better)',
        data: [0.68, 0.72, 0.65],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    },
    'ad-targeting': {
      labels: ['Gender', 'Age', 'Interests'],
      datasets: [{
        label: 'Bias Score (Lower is better)',
        data: [0.70, 0.60, 0.50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    }
  };

  const modelPerformanceData = {
    'resume-screener': {
      labels: ['Overall Accuracy', 'Precision', 'Recall', 'F1 Score'],
      datasets: [{
        label: 'Performance Metrics',
        data: [0.82, 0.75, 0.88, 0.81],
        backgroundColor: 'rgba(79, 195, 247, 0.7)',
        borderColor: 'rgba(79, 195, 247, 1)',
        borderWidth: 1
      }]
    },
    'credit-scoring': {
      labels: ['Overall Accuracy', 'Precision', 'Recall', 'F1 Score'],
      datasets: [{
        label: 'Performance Metrics',
        data: [0.75, 0.68, 0.80, 0.74],
        backgroundColor: 'rgba(79, 195, 247, 0.7)',
        borderColor: 'rgba(79, 195, 247, 1)',
        borderWidth: 1
      }]
    },
    'diagnostic': {
      labels: ['Overall Accuracy', 'Sensitivity', 'Specificity', 'F1 Score'],
      datasets: [{
        label: 'Performance Metrics',
        data: [0.88, 0.82, 0.90, 0.85],
        backgroundColor: 'rgba(79, 195, 247, 0.7)',
        borderColor: 'rgba(79, 195, 247, 1)',
        borderWidth: 1
      }]
    },
    'facial-recognition': {
      labels: ['Overall Accuracy', 'Precision', 'Recall', 'F1 Score'],
      datasets: [{
        label: 'Performance Metrics',
        data: [0.92, 0.90, 0.93, 0.91],
        backgroundColor: 'rgba(79, 195, 247, 0.7)',
        borderColor: 'rgba(79, 195, 247, 1)',
        borderWidth: 1
      }]
    },
    'content-moderation': {
      labels: ['Overall Accuracy', 'Precision', 'Recall', 'F1 Score'],
      datasets: [{
        label: 'Performance Metrics',
        data: [0.85, 0.80, 0.88, 0.84],
        backgroundColor: 'rgba(79, 195, 247, 0.7)',
        borderColor: 'rgba(79, 195, 247, 1)',
        borderWidth: 1
      }]
    },
    'predictive-policing': {
      labels: ['Overall Accuracy', 'Precision', 'Recall', 'F1 Score'],
      datasets: [{
        label: 'Performance Metrics',
        data: [0.70, 0.65, 0.72, 0.68],
        backgroundColor: 'rgba(79, 195, 247, 0.7)',
        borderColor: 'rgba(79, 195, 247, 1)',
        borderWidth: 1
      }]
    },
    'housing-appraisal': {
      labels: ['R-squared', 'MAE', 'RMSE'],
      datasets: [{
        label: 'Performance Metrics',
        data: [0.85, 15000, 20000], // Example data for R-squared, Mean Absolute Error, Root Mean Squared Error
        backgroundColor: 'rgba(79, 195, 247, 0.7)',
        borderColor: 'rgba(79, 195, 247, 1)',
        borderWidth: 1
      }]
    },
    'personalized-recommender': {
      labels: ['Precision@k', 'Recall@k', 'Diversity Score'],
      datasets: [{
        label: 'Performance Metrics',
        data: [0.78, 0.70, 0.65],
        backgroundColor: 'rgba(79, 195, 247, 0.7)',
        borderColor: 'rgba(79, 195, 247, 1)',
        borderWidth: 1
      }]
    },
    'student-risk-assessment': {
      labels: ['Overall Accuracy', 'Precision', 'Recall', 'F1 Score'],
      datasets: [{
        label: 'Performance Metrics',
        data: [0.80, 0.72, 0.85, 0.78],
        backgroundColor: 'rgba(79, 195, 247, 0.7)',
        borderColor: 'rgba(79, 195, 247, 1)',
        borderWidth: 1
      }]
    },
    'automated-loan-underwriting': {
      labels: ['Approval Rate', 'False Positive Rate', 'False Negative Rate'],
      datasets: [{
        label: 'Performance Metrics',
        data: [0.70, 0.15, 0.10],
        backgroundColor: 'rgba(79, 195, 247, 0.7)',
        borderColor: 'rgba(79, 195, 247, 1)',
        borderWidth: 1
      }]
    }
  };

  const biasDistributionData = {
    recruiting: {
      labels: ['Gender Bias', 'Education Bias', 'Age Bias', 'Other'],
      datasets: [{
        data: [40, 30, 20, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }]
    },
    loan: {
      labels: ['Race Bias', 'Income Bias', 'Geography Bias', 'Other'],
      datasets: [{
        data: [50, 35, 10, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }]
    },
    healthcare: {
      labels: ['Insurance Bias', 'Race Bias', 'Age Bias', 'Other'],
      datasets: [{
        data: [35, 40, 20, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }]
    },
    'social-media': {
      labels: ['Demographic Bias', 'Political Bias', 'Language Bias', 'Other'],
      datasets: [{
        data: [45, 30, 20, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }]
    },
    'criminal-justice': {
      labels: ['Race Bias', 'Socioeconomic Bias', 'Prior Arrests Bias', 'Other'],
      datasets: [{
        data: [55, 30, 10, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }]
    },
    'housing-prices': {
      labels: ['Neighborhood Income Bias', 'Redlining History Bias', 'Property Type Bias', 'Other'],
      datasets: [{
        data: [30, 50, 15, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }]
    },
    'customer-sentiment': {
      labels: ['Region Bias', 'Product Category Bias', 'Reviewer Demographics Bias', 'Other'],
      datasets: [{
        data: [30, 25, 40, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }]
    },
    'education-performance': {
      labels: ['Parental Education Bias', 'Family Income Bias', 'Ethnicity Bias', 'Other'],
      datasets: [{
        data: [35, 40, 20, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }]
    },
    'ad-targeting': {
      labels: ['Gender Bias', 'Age Bias', 'Interests Bias', 'Other'],
      datasets: [{
        data: [40, 30, 25, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }]
    }
  };


  const currentDatasetBias = datasetBiasData[selectedDataset.id];
  const currentModelPerformance = modelPerformanceData[selectedModel.id];
  const currentBiasDistribution = biasDistributionData[selectedDataset.id];

  // Dummy data for summary statistics - replace with actual calculations if available
  const overallBiasScore = currentDatasetBias ? (currentDatasetBias.datasets[0].data.reduce((a, b) => a + b, 0) / currentDatasetBias.datasets[0].data.length).toFixed(2) : 'N/A';
  const overallModelFairness = currentModelPerformance ? (currentModelPerformance.datasets[0].data.reduce((a, b) => a + b, 0) / currentModelPerformance.datasets[0].data.length).toFixed(2) : 'N/A';
  const criticalBiasFactors = currentDatasetBias ? currentDatasetBias.datasets[0].data.filter(score => score >= 0.7).length : 0;

  return (
    <div className="report-dashboard">
      <h2>Overall Bias Report</h2>

      <div className="summary-stats">
        <div className="stat-card">
          <h3>Overall Dataset Bias Score</h3>
          <p className="score">{overallBiasScore}</p>
        </div>
        <div className="stat-card">
          <h3>Overall Model Fairness Score</h3>
          <p className="score">{overallModelFairness}</p>
        </div>
        <div className="stat-card">
          <h3>Critical Bias Factors</h3>
          <p className="score">{criticalBiasFactors}</p>
        </div>
      </div>

      <div className="card">
        <h2>Dataset Bias Overview</h2>
        <div className="chart-container">
          <Bar
            data={currentDatasetBias}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  max: 1,
                  title: {
                    display: true,
                    text: 'Bias Score (0-1)'
                  }
                }
              }
            }}
          />
        </div>
        <p>
          Higher scores indicate greater bias. The threshold for concern is 0.5 (yellow line).
          Scores above 0.7 (red line) require immediate attention.
        </p>
      </div>

      <div className="card">
        <h2>Bias Distribution</h2>
        <div className="chart-container" style={{ height: '300px' }}>
          <Pie
            data={currentBiasDistribution}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>

      <div className="card">
        <h2>Model Performance Metrics</h2>
        <div className="chart-container">
          <Bar
            data={currentModelPerformance}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  max: 1,
                  title: {
                    display: true,
                    text: 'Score (0-1)'
                  }
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportDashboard;