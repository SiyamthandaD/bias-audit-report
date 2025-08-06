// src/components/MitigationStrategies.js
import React from 'react';

const MitigationStrategies = ({ selectedDataset, selectedModel }) => {
  // Dataset-specific strategies
  const datasetStrategies = {
    recruiting: [
      { strategy: 'Gender-balanced sampling', effectiveness: 'High', effort: 'Medium', description: 'Oversample female and non-binary candidates to balance gender representation' },
      { strategy: 'Education diversity', effectiveness: 'Medium', effort: 'High', description: 'Collect more data from non-CS degree holders' },
      { strategy: 'Age reweighting', effectiveness: 'Medium', effort: 'Low', description: 'Assign higher weights to underrepresented age groups' }
    ],
    loan: [
      { strategy: 'Racial oversampling', effectiveness: 'High', effort: 'Medium', description: 'Increase representation of minority racial groups' },
      { strategy: 'Income stratification', effectiveness: 'High', effort: 'High', description: 'Collect balanced data across income levels' },
      { strategy: 'Geographic expansion', effectiveness: 'Medium', effort: 'High', description: 'Include more rural applicants in dataset' }
    ],
    healthcare: [
      { strategy: 'Insurance status balance', effectiveness: 'High', effort: 'High', description: 'Collect more data from public insurance and uninsured patients' },
      { strategy: 'Racial equity sampling', effectiveness: 'High', effort: 'Medium', description: 'Ensure proportional representation of racial groups' },
      { strategy: 'Age group reweighting', effectiveness: 'Medium', effort: 'Low', description: 'Adjust weights to balance age distribution' }
    ]
  };

  // Model-specific strategies
  const modelStrategies = {
    'resume-screener': [
      { strategy: 'Gender fairness constraints', effectiveness: 'High', effort: 'High', description: 'Add fairness constraints during model training to reduce gender bias' },
      { strategy: 'Demographic parity post-processing', effectiveness: 'Medium', effort: 'Medium', description: 'Adjust model outputs to meet demographic parity criteria' },
      { strategy: 'Adversarial debiasing', effectiveness: 'High', effort: 'High', description: 'Use adversarial learning to remove gender bias from embeddings' }
    ],
    'credit-scoring': [
      { strategy: 'Racial fairness regularization', effectiveness: 'High', effort: 'High', description: 'Add regularization terms to penalize racial disparities' },
      { strategy: 'Equalized odds post-processing', effectiveness: 'Medium', effort: 'Medium', description: 'Adjust decision thresholds to achieve equalized odds' },
      { strategy: 'Feature blinding', effectiveness: 'Medium', effort: 'Medium', description: 'Remove or obscure proxy features for race' }
    ],
    'diagnostic': [
      { strategy: 'Insurance status constraints', effectiveness: 'High', effort: 'High', description: 'Incorporate fairness constraints for insurance status' },
      { strategy: 'Calibration by group', effectiveness: 'Medium', effort: 'Medium', description: 'Ensure model is equally calibrated across insurance groups' },
      { strategy: 'Bias-aware loss function', effectiveness: 'High', effort: 'High', description: 'Modify loss function to account for disparate impacts' }
    ]
  };

  const evaluationStrategies = [
    { strategy: 'Disaggregated Evaluation', description: 'Evaluate model performance separately for each protected group' },
    { strategy: 'Bias Metrics', description: 'Implement continuous monitoring of bias metrics in production' },
    { strategy: 'Third-party Audits', description: 'Engage independent auditors to assess model fairness periodically' }
  ];

  const actionPlans = {
    recruiting: [
      {
        timeframe: 'Immediate actions (1-2 weeks)',
        items: [
          'Implement gender-balanced sampling in training data',
          'Add gender fairness constraints to model training',
          'Set up disaggregated evaluation by gender'
        ]
      },
      {
        timeframe: 'Medium-term actions (1-3 months)',
        items: [
          'Launch diversity-focused data collection for education backgrounds',
          'Implement adversarial debiasing for gender',
          'Develop bias dashboard for continuous monitoring'
        ]
      },
      {
        timeframe: 'Long-term actions (3-6 months)',
        items: [
          'Establish diversity requirements for dataset composition',
          'Implement third-party audit process',
          'Develop hiring bias mitigation playbook'
        ]
      }
    ],
    loan: [
      {
        timeframe: 'Immediate actions (1-2 weeks)',
        items: [
          'Implement racial oversampling in training data',
          'Add racial fairness regularization to model',
          'Set up disaggregated evaluation by race'
        ]
      },
      {
        timeframe: 'Medium-term actions (1-3 months)',
        items: [
          'Launch targeted data collection for underrepresented groups',
          'Implement equalized odds post-processing',
          'Develop fairness monitoring system'
        ]
      },
      {
        timeframe: 'Long-term actions (3-6 months)',
        items: [
          'Establish equitable lending data standards',
          'Implement third-party fairness audits',
          'Develop responsible credit scoring framework'
        ]
      }
    ],
    healthcare: [
      {
        timeframe: 'Immediate actions (1-2 weeks)',
        items: [
          'Implement insurance status balancing in data',
          'Add insurance status constraints to model',
          'Set up disaggregated evaluation by insurance status'
        ]
      },
      {
        timeframe: 'Medium-term actions (1-3 months)',
        items: [
          'Launch targeted data collection for uninsured patients',
          'Implement calibration by insurance group',
          'Develop healthcare equity dashboard'
        ]
      },
      {
        timeframe: 'Long-term actions (3-6 months)',
        items: [
          'Establish healthcare data equity standards',
          'Implement independent healthcare AI audits',
          'Develop bias mitigation guidelines for medical AI'
        ]
      }
    ]
  };

  // Add group-specific mitigation focus
  const groupFocusStrategies = {
    recruiting: [
      { group: 'Female candidates', strategy: 'Gender-balanced sampling', priority: 'High' },
      { group: 'Non-CS degree holders', strategy: 'Education diversity collection', priority: 'Medium' },
      { group: 'Older applicants', strategy: 'Age-based reweighting', priority: 'Medium' }
    ],
    loan: [
      { group: 'Black applicants', strategy: 'Racial oversampling', priority: 'Critical' },
      { group: 'Low-income applicants', strategy: 'Income stratification', priority: 'High' },
      { group: 'Rural applicants', strategy: 'Geographic expansion', priority: 'Medium' }
    ],
    healthcare: [
      { group: 'Uninsured patients', strategy: 'Insurance status balance', priority: 'High' },
      { group: 'Black patients', strategy: 'Racial equity sampling', priority: 'High' },
      { group: 'Younger patients', strategy: 'Age group reweighting', priority: 'Medium' }
    ]
  };

  const currentDatasetStrategies = datasetStrategies[selectedDataset.id] || datasetStrategies.recruiting;
  const currentModelStrategies = modelStrategies[selectedModel.id] || modelStrategies['resume-screener'];
  const currentActionPlan = actionPlans[selectedDataset.id] || actionPlans.recruiting;
  const currentGroupFocus = groupFocusStrategies[selectedDataset.id] || groupFocusStrategies.recruiting;

  return (
    <div className="mitigation-strategies">
      <div className="card">
        <h2>Dataset-level Mitigation Strategies for {selectedDataset.name}</h2>
        <p>
          These approaches address bias at the data level, before model training begins.
          They aim to create a more balanced and representative dataset.
        </p>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Strategy</th>
                <th>Effectiveness</th>
                <th>Effort</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {currentDatasetStrategies.map((item, index) => (
                <tr key={index}>
                  <td>{item.strategy}</td>
                  <td>{item.effectiveness}</td>
                  <td>{item.effort}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2>Model-level Mitigation Strategies for {selectedModel.name}</h2>
        <p>
          These techniques modify the model training process or architecture to reduce bias.
          They work with the existing data distribution but adjust how the model learns from it.
        </p>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Strategy</th>
                <th>Effectiveness</th>
                <th>Effort</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {currentModelStrategies.map((item, index) => (
                <tr key={index}>
                  <td>{item.strategy}</td>
                  <td>{item.effectiveness}</td>
                  <td>{item.effort}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2>Group-Specific Mitigation Focus</h2>
        <p>
          These strategies specifically target the most affected demographic groups
          identified in the dataset and model analysis.
        </p>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Affected Group</th>
                <th>Recommended Strategy</th>
                <th>Priority</th>
                <th>Expected Impact</th>
              </tr>
            </thead>
            <tbody>
              {currentGroupFocus.map((item, index) => (
                <tr key={index}>
                  <td>{item.group}</td>
                  <td>{item.strategy}</td>
                  <td>
                    <span className={`status-indicator status-${item.priority.toLowerCase()}`}>
                      {item.priority.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    {item.priority === 'Critical' && 'High reduction in disparity'}
                    {item.priority === 'High' && 'Moderate reduction in disparity'}
                    {item.priority === 'Medium' && 'Potential improvement in fairness'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2>Evaluation & Monitoring Strategies</h2>
        <p>
          These approaches ensure ongoing fairness after deployment by implementing
          robust evaluation frameworks and monitoring systems.
        </p>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Strategy</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {evaluationStrategies.map((item, index) => (
                <tr key={index}>
                  <td>{item.strategy}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2>Recommended Action Plan for {selectedModel.name}</h2>
        {currentActionPlan.map((phase, index) => (
          <div key={index}>
            <h3>{phase.timeframe}</h3>
            <ul>
              {phase.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MitigationStrategies;