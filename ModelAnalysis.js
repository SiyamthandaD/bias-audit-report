// src/components/ModelAnalysis.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ModelAnalysis = ({ selectedModel, selectedDataset }) => {
  // Model-specific performance data - NOW WITH BEFORE AND AFTER MITIGATION
  const performanceByGroupData = {
    'resume-screener': {
      labels: ['Male', 'Female', 'Non-binary'],
      datasets: [
        {
          label: 'Interview Rate (Before Mitigation)',
          data: [0.82, 0.65, 0.58], // Original data
          backgroundColor: 'rgba(74, 111, 165, 0.5)',
          borderColor: 'rgba(22, 96, 136, 1)',
          borderWidth: 1,
        },
        {
          label: 'Interview Rate (After Mitigation)',
          data: [0.78, 0.70, 0.65], // Simulated improved data
          backgroundColor: 'rgba(42, 157, 143, 0.7)', // Success color
          borderColor: 'rgba(42, 157, 143, 1)',
          borderWidth: 1,
        },
        {
          label: 'False Positive Rate (Before Mitigation)',
          data: [0.12, 0.25, 0.28], // Original data
          backgroundColor: 'rgba(230, 57, 70, 0.5)',
          borderColor: 'rgba(166, 28, 42, 1)',
          borderWidth: 1,
        },
        {
          label: 'False Positive Rate (After Mitigation)',
          data: [0.10, 0.20, 0.22], // Simulated improved data
          backgroundColor: 'rgba(255, 159, 64, 0.7)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
        }
      ]
    },
    'credit-scoring': {
      labels: ['White', 'Black', 'Hispanic', 'Asian'],
      datasets: [
        {
          label: 'Approval Rate (Before Mitigation)',
          data: [0.78, 0.52, 0.55, 0.72],
          backgroundColor: 'rgba(74, 111, 165, 0.5)',
          borderColor: 'rgba(22, 96, 136, 1)',
          borderWidth: 1,
        },
        {
          label: 'Approval Rate (After Mitigation)',
          data: [0.75, 0.60, 0.62, 0.70],
          backgroundColor: 'rgba(42, 157, 143, 0.7)',
          borderColor: 'rgba(42, 157, 143, 1)',
          borderWidth: 1,
        },
        {
          label: 'False Positive Rate (Before Mitigation)',
          data: [0.15, 0.28, 0.25, 0.18],
          backgroundColor: 'rgba(230, 57, 70, 0.5)',
          borderColor: 'rgba(166, 28, 42, 1)',
          borderWidth: 1,
        },
        {
          label: 'False Positive Rate (After Mitigation)',
          data: [0.13, 0.20, 0.18, 0.16],
          backgroundColor: 'rgba(255, 159, 64, 0.7)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
        }
      ]
    },
    'diagnostic': {
      labels: ['Private Insurance', 'Public Insurance', 'Uninsured'],
      datasets: [
        {
          label: 'Positive Diagnosis Rate (Before Mitigation)',
          data: [0.45, 0.32, 0.18],
          backgroundColor: 'rgba(74, 111, 165, 0.5)',
          borderColor: 'rgba(22, 96, 136, 1)',
          borderWidth: 1,
        },
        {
          label: 'Positive Diagnosis Rate (After Mitigation)',
          data: [0.42, 0.38, 0.25],
          backgroundColor: 'rgba(42, 157, 143, 0.7)',
          borderColor: 'rgba(42, 157, 143, 1)',
          borderWidth: 1,
        },
        {
          label: 'False Negative Rate (Before Mitigation)',
          data: [0.08, 0.15, 0.25],
          backgroundColor: 'rgba(230, 57, 70, 0.5)',
          borderColor: 'rgba(166, 28, 42, 1)',
          borderWidth: 1,
        },
        {
          label: 'False Negative Rate (After Mitigation)',
          data: [0.06, 0.10, 0.18],
          backgroundColor: 'rgba(255, 159, 64, 0.7)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
        }
      ]
    },
    'facial-recognition': {
      labels: ['Male', 'Female', 'Darker Skin Tones', 'Lighter Skin Tones'],
      datasets: [
        {
          label: 'Accuracy (Before Mitigation)',
          data: [0.98, 0.85, 0.70, 0.95],
          backgroundColor: 'rgba(74, 111, 165, 0.5)',
          borderColor: 'rgba(22, 96, 136, 1)',
          borderWidth: 1,
        },
        {
          label: 'Accuracy (After Mitigation)',
          data: [0.97, 0.90, 0.85, 0.96],
          backgroundColor: 'rgba(42, 157, 143, 0.7)',
          borderColor: 'rgba(42, 157, 143, 1)',
          borderWidth: 1,
        },
        {
          label: 'False Match Rate (Before Mitigation)',
          data: [0.01, 0.05, 0.15, 0.02],
          backgroundColor: 'rgba(230, 57, 70, 0.5)',
          borderColor: 'rgba(166, 28, 42, 1)',
          borderWidth: 1,
        },
        {
          label: 'False Match Rate (After Mitigation)',
          data: [0.01, 0.03, 0.08, 0.02],
          backgroundColor: 'rgba(255, 159, 64, 0.7)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
        }
      ]
    },
    'content-moderation': {
      labels: ['Hate Speech (General)', 'Hate Speech (Minority Groups)'],
      datasets: [
        {
          label: 'False Positive Rate (Before Mitigation)',
          data: [0.05, 0.15],
          backgroundColor: 'rgba(230, 57, 70, 0.5)',
          borderColor: 'rgba(166, 28, 42, 1)',
          borderWidth: 1,
        },
        {
          label: 'False Positive Rate (After Mitigation)',
          data: [0.03, 0.08],
          backgroundColor: 'rgba(255, 159, 64, 0.7)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
        }
      ]
    },
    'predictive-policing': {
      labels: ['Low-Income Areas', 'High-Income Areas', 'Minority Neighborhoods', 'Majority Neighborhoods'],
      datasets: [
        {
          label: 'Predicted Crime Rate (Before Mitigation)',
          data: [0.70, 0.20, 0.65, 0.25],
          backgroundColor: 'rgba(74, 111, 165, 0.5)',
          borderColor: 'rgba(22, 96, 136, 1)',
          borderWidth: 1,
        },
        {
          label: 'Predicted Crime Rate (After Mitigation)',
          data: [0.55, 0.30, 0.50, 0.35],
          backgroundColor: 'rgba(42, 157, 143, 0.7)',
          borderColor: 'rgba(42, 157, 143, 1)',
          borderWidth: 1,
        },
        {
          label: 'False Arrest Rate (Before Mitigation)',
          data: [0.15, 0.05, 0.12, 0.03],
          backgroundColor: 'rgba(230, 57, 70, 0.5)',
          borderColor: 'rgba(166, 28, 42, 1)',
          borderWidth: 1,
        },
        {
          label: 'False Arrest Rate (After Mitigation)',
          data: [0.10, 0.04, 0.08, 0.03],
          backgroundColor: 'rgba(255, 159, 64, 0.7)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
        }
      ]
    },
    'housing-appraisal': {
      labels: ['Redlined Neighborhoods', 'Non-Redlined Neighborhoods', 'Minority Owners', 'Majority Owners'],
      datasets: [
        {
          label: 'Appraisal Bias (Underestimation) (Before Mitigation)',
          data: [0.20, 0.05, 0.18, 0.03], // Example: 0.20 means 20% underestimation
          backgroundColor: 'rgba(230, 57, 70, 0.5)',
          borderColor: 'rgba(166, 28, 42, 1)',
          borderWidth: 1,
        },
        {
          label: 'Appraisal Bias (Underestimation) (After Mitigation)',
          data: [0.10, 0.03, 0.08, 0.02],
          backgroundColor: 'rgba(255, 159, 64, 0.7)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
        }
      ]
    },
    'personalized-recommender': {
      labels: ['Gender', 'Age Group', 'Minority Interests', 'Majority Interests'],
      datasets: [
        {
          label: 'Content Diversity Score (Before Mitigation)',
          data: [0.60, 0.55, 0.30, 0.80], // Lower score means less diversity
          backgroundColor: 'rgba(74, 111, 165, 0.5)',
          borderColor: 'rgba(22, 96, 136, 1)',
          borderWidth: 1,
        },
        {
          label: 'Content Diversity Score (After Mitigation)',
          data: [0.75, 0.70, 0.60, 0.85],
          backgroundColor: 'rgba(42, 157, 143, 0.7)',
          borderColor: 'rgba(42, 157, 143, 1)',
          borderWidth: 1,
        }
      ]
    },
    'student-risk-assessment': {
      labels: ['Low-Income Students', 'High-Income Students', 'Minority Ethnic Groups', 'Majority Ethnic Groups'],
      datasets: [
        {
          label: 'False Positive (At-Risk) Rate (Before Mitigation)',
          data: [0.20, 0.05, 0.18, 0.04],
          backgroundColor: 'rgba(230, 57, 70, 0.5)',
          borderColor: 'rgba(166, 28, 42, 1)',
          borderWidth: 1,
        },
        {
          label: 'False Positive (At-Risk) Rate (After Mitigation)',
          data: [0.12, 0.03, 0.10, 0.03],
          backgroundColor: 'rgba(255, 159, 64, 0.7)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
        }
      ]
    },
    'automated-loan-underwriting': {
      labels: ['Gender (Female)', 'Gender (Male)', 'Race (Minority)', 'Race (Majority)'],
      datasets: [
        {
          label: 'Approval Disparity (Before Mitigation)',
          data: [0.15, 0.05, 0.20, 0.03], // Difference in approval rate compared to overall average
          backgroundColor: 'rgba(230, 57, 70, 0.5)',
          borderColor: 'rgba(166, 28, 42, 1)',
          borderWidth: 1,
        },
        {
          label: 'Approval Disparity (After Mitigation)',
          data: [0.08, 0.02, 0.10, 0.02],
          backgroundColor: 'rgba(255, 159, 64, 0.7)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
        }
      ]
    }
  };

  const modelFairnessMetrics = {
    'resume-screener': [
      { metric: 'Demographic Parity', score: '0.65', status: 'warning' },
      { metric: 'Equal Opportunity', score: '0.70', status: 'ok' },
      { metric: 'Predictive Equality', score: '0.60', status: 'warning' }
    ],
    'credit-scoring': [
      { metric: 'Demographic Parity', score: '0.55', status: 'critical' },
      { metric: 'Equal Opportunity', score: '0.62', status: 'warning' },
      { metric: 'Predictive Equality', score: '0.58', status: 'critical' }
    ],
    'diagnostic': [
      { metric: 'Demographic Parity', score: '0.70', status: 'ok' },
      { metric: 'Equal Opportunity', score: '0.60', status: 'warning' },
      { metric: 'Predictive Equality', score: '0.65', status: 'warning' }
    ],
    'facial-recognition': [
      { metric: 'Demographic Parity', score: '0.50', status: 'critical' },
      { metric: 'Equal Opportunity', score: '0.45', status: 'critical' },
      { metric: 'Predictive Equality', score: '0.60', status: 'warning' }
    ],
    'content-moderation': [
      { metric: 'Demographic Parity', score: '0.60', status: 'warning' },
      { metric: 'False Positive Rate Parity', score: '0.55', status: 'critical' }
    ],
    'predictive-policing': [
      { metric: 'Demographic Parity', score: '0.40', status: 'critical' },
      { metric: 'Equalized Odds', score: '0.45', status: 'critical' },
      { metric: 'Predictive Parity', score: '0.50', status: 'critical' }
    ],
    'housing-appraisal': [
      { metric: 'Disparate Impact', score: '0.35', status: 'critical' },
      { metric: 'Fairness Through Unawareness', score: '0.70', status: 'ok' }
    ],
    'personalized-recommender': [
      { metric: 'Diversity Score', score: '0.50', status: 'warning' },
      { metric: 'Exposure Parity', score: '0.45', status: 'critical' }
    ],
    'student-risk-assessment': [
      { metric: 'Equal Opportunity', score: '0.55', status: 'critical' },
      { metric: 'Predictive Parity', score: '0.60', status: 'warning' }
    ],
    'automated-loan-underwriting': [
      { metric: 'Disparate Treatment', score: '0.30', status: 'critical' },
      { metric: 'Adverse Impact Ratio', score: '0.75', status: 'warning' }
    ]
  };

  const highDisparityGroups = {
    'resume-screener': [
      { group: 'Female', metric: 'Interview Rate', disparity: '-17% (Female vs Male)', urgency: 'Critical' },
      { group: 'Non-binary', metric: 'Interview Rate', disparity: '-24% (Non-binary vs Male)', urgency: 'Critical' },
      { group: 'Female', metric: 'False Positive Rate', disparity: '+13% (Female vs Male)', urgency: 'Critical' }
    ],
    'credit-scoring': [
      { group: 'Black', metric: 'Approval Rate', disparity: '-26% (Black vs White)', urgency: 'Critical' },
      { group: 'Hispanic', metric: 'Approval Rate', disparity: '-23% (Hispanic vs White)', urgency: 'Critical' },
      { group: 'Black', metric: 'False Positive Rate', disparity: '+13% (Black vs White)', urgency: 'Critical' }
    ],
    'diagnostic': [
      { group: 'Uninsured', metric: 'Positive Diagnosis Rate', disparity: '-27% (Uninsured vs Private)', urgency: 'Critical' },
      { group: 'Public Insurance', metric: 'Positive Diagnosis Rate', disparity: '-13% (Public vs Private)', urgency: 'High' },
      { group: 'Uninsured', metric: 'False Negative Rate', disparity: '+17% (Uninsured vs Private)', urgency: 'Critical' }
    ],
    'facial-recognition': [
      { group: 'Darker Skin Tones', metric: 'Accuracy', disparity: '-28% (Darker vs Lighter)', urgency: 'Critical' },
      { group: 'Female', metric: 'Accuracy', disparity: '-13% (Female vs Male)', urgency: 'High' },
      { group: 'Darker Skin Tones', metric: 'False Match Rate', disparity: '+13% (Darker vs Lighter)', urgency: 'Critical' }
    ],
    'content-moderation': [
      { group: 'Minority Group Content', metric: 'False Positive Rate', disparity: '+10% (Minority vs General)', urgency: 'Critical' }
    ],
    'predictive-policing': [
      { group: 'Low-Income Areas', metric: 'Predicted Crime Rate', disparity: '+50%', urgency: 'Critical' },
      { group: 'Minority Neighborhoods', metric: 'False Arrest Rate', disparity: '+9%', urgency: 'Critical' }
    ],
    'housing-appraisal': [
      { group: 'Redlined Neighborhoods', metric: 'Appraisal Bias', disparity: '+15% Underestimation', urgency: 'Critical' },
      { group: 'Minority Owners', metric: 'Appraisal Bias', disparity: '+10% Underestimation', urgency: 'Critical' }
    ],
    'personalized-recommender': [
      { group: 'Minority Interests', metric: 'Content Diversity', disparity: '-50%', urgency: 'Critical' },
      { group: 'Older Age Group', metric: 'Content Diversity', disparity: '-15%', urgency: 'High' }
    ],
    'student-risk-assessment': [
      { group: 'Low-Income Students', metric: 'False Positive Rate', disparity: '+15%', urgency: 'Critical' },
      { group: 'Minority Ethnic Groups', metric: 'False Positive Rate', disparity: '+14%', urgency: 'Critical' }
    ],
    'automated-loan-underwriting': [
      { group: 'Female Applicants', metric: 'Approval Disparity', disparity: '+10%', urgency: 'Critical' },
      { group: 'Minority Race Applicants', metric: 'Approval Disparity', disparity: '+17%', urgency: 'Critical' }
    ]
  };

  const keyFindingsData = {
    'resume-screener': [
      'Significant bias against female and non-binary candidates, leading to lower interview rates and higher false positive rates for these groups.',
      'Model performance shows a notable disparity across different educational backgrounds, potentially penalizing non-traditional career paths.'
    ],
    'credit-scoring': [
      'Clear racial bias in credit approval, with significantly lower rates and higher false positive rates for Black and Hispanic applicants.',
      'Income level remains a strong determinant for creditworthiness, reflecting historical economic disparities.'
    ],
    'diagnostic': [
      'Disparities in diagnosis rates and false negative rates based on insurance status, indicating potential access to care biases reflected in the model.',
      'Racial biases observed in the accuracy of diagnoses for certain medical conditions.'
    ],
    'facial-recognition': [
      'Lower accuracy and higher false match rates for individuals with darker skin tones and for female subjects, highlighting a critical fairness issue.',
      'Performance varies significantly across different demographic groups, raising concerns about equitable use.'
    ],
    'content-moderation': [
      'Higher false positive rates for content from minority groups, leading to disproportionate moderation and censorship.',
      'Model exhibits challenges in understanding context and nuance in diverse linguistic expressions.'
    ],
    'predictive-policing': [
      'Model disproportionately predicts higher crime rates in low-income and minority neighborhoods, reinforcing existing biases.',
      'Elevated false arrest rates in certain demographic areas, indicating potential for unjust targeting.'
    ],
    'housing-appraisal': [
      'Automated appraisals consistently undervalue properties in historically redlined neighborhoods and those owned by minorities.',
      'Model lacks robustness in evaluating unique characteristics of properties in diverse socio-economic areas.'
    ],
    'personalized-recommender': [
      'Recommendations show limited diversity for users with minority interests or from certain age groups.',
      'Algorithmic amplification of popular content, potentially creating filter bubbles and limiting exposure to diverse perspectives.'
    ],
    'student-risk-assessment': [
      'Models exhibit a higher false positive rate for students from low-income backgrounds and minority ethnic groups, incorrectly labeling them as "at-risk".',
      'Predictions are heavily influenced by socioeconomic factors, potentially exacerbating educational inequalities.'
    ],
    'automated-loan-underwriting': [
      'Significant disparities in loan approval rates based on gender and race, with adverse impact observed for female and minority applicants.',
      'The models decision-making process lacks transparency, making it difficult to pinpoint the source of observed biases.',
    ],
  };

  const currentPerformanceData = performanceByGroupData[selectedModel.id];
  const currentFairnessMetrics = modelFairnessMetrics[selectedModel.id] || [];
  const currentHighDisparityGroups = highDisparityGroups[selectedModel.id] || [];
  const currentKeyFindings = keyFindingsData[selectedModel.id] || [];

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Model Performance by Group (Before & After Mitigation)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 1,
        title: {
          display: true,
          text: 'Rate / Score',
        },
      },
    },
  };

  return (
    <div className="model-analysis">
      <h2>Model Analysis for {selectedModel.name}</h2>
      <p>{selectedModel.description}</p>

      <div className="card">
        <h3>Performance by Demographic/Group</h3>
        <p>
          This chart illustrates how the model performs across different demographic
          or sensitive groups, highlighting any significant disparities.
        </p>
        <div className="chart-container" style={{ height: '400px' }}>
          {currentPerformanceData ? (
            <Bar data={currentPerformanceData} options={chartOptions} />
          ) : (
            <p>No performance data available for this model.</p>
          )}
        </div>
      </div>

      <div className="card">
        <h3>Fairness Metrics</h3>
        <p>
          Quantitative metrics assessing the model's fairness based on various
          definitions of algorithmic fairness.
        </p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Score</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentFairnessMetrics.map((metric, index) => (
                <tr key={index}>
                  <td>{metric.metric}</td>
                  <td>{metric.score}</td>
                  <td>
                    <span className={`status-indicator status-${metric.status === 'critical' ? 'critical' : metric.status.toLowerCase()}`}>
                      {metric.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2>Groups with High Disparity</h2>
        <p>
          Identifies specific groups experiencing the most significant disparities in model outcomes.
          Immediate mitigation strategies should prioritize these affected populations.
        </p>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Affected Group</th>
                <th>Performance Metric</th>
                <th>Disparity</th>
                <th>Urgency</th>
              </tr>
            </thead>
            <tbody>
              {currentHighDisparityGroups.map((group, index) => (
                <tr key={index}>
                  <td>{group.group}</td>
                  <td>{group.metric}</td>
                  <td>{group.disparity}</td>
                  <td>
                    {group.disparity.includes('+') ? (
                      <span className="status-indicator status-critical">CRITICAL</span>
                    ) : (
                      <span className="status-indicator status-warning">WARNING</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2>Key Findings</h2>
        <ul>
          {currentKeyFindings.map((finding, index) => (
            <li key={index}>
              <strong>{finding.split(':')[0]}:</strong>{finding.split(':')[1]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModelAnalysis;