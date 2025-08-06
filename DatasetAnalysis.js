// src/components/DatasetAnalysis.js
import React from 'react';

const DatasetAnalysis = ({ selectedDataset }) => {
  // Dataset-specific bias data
  const datasetBiasData = {
    recruiting: [
      { attribute: 'Gender', representation: '75% Male, 25% Female', biasScore: 0.75, status: 'critical' },
      { attribute: 'Education', representation: '82% CS Degrees', biasScore: 0.62, status: 'warning' },
      { attribute: 'Age', representation: '85% 20-35 years', biasScore: 0.55, status: 'warning' }
    ],
    loan: [
      { attribute: 'Race', representation: '70% White, 15% Black, 15% Other', biasScore: 0.72, status: 'critical' },
      { attribute: 'Income', representation: '60% High income, 30% Medium, 10% Low', biasScore: 0.85, status: 'critical' },
      { attribute: 'Geography', representation: '75% Urban, 25% Rural', biasScore: 0.45, status: 'ok' }
    ],
    healthcare: [
      { attribute: 'Insurance', representation: '65% Private, 35% Public/None', biasScore: 0.65, status: 'warning' },
      { attribute: 'Race', representation: '60% White, 25% Black, 15% Other', biasScore: 0.58, status: 'warning' },
      { attribute: 'Age', representation: '40% <40, 60% 40+', biasScore: 0.35, status: 'ok' }
    ],
    'social-media': [
      { attribute: 'Demographics', representation: 'Varies', biasScore: 0.78, status: 'critical' },
      { attribute: 'Political Affiliation', representation: 'Varies', biasScore: 0.65, status: 'warning' },
      { attribute: 'Language', representation: 'English primary', biasScore: 0.50, status: 'warning' }
    ],
    'criminal-justice': [
      { attribute: 'Race', representation: 'Overrepresentation of minorities', biasScore: 0.88, status: 'critical' },
      { attribute: 'Socioeconomic Status', representation: 'Lower income overrepresented', biasScore: 0.75, status: 'critical' },
      { attribute: 'Prior Arrests', representation: 'Highly correlated with race', biasScore: 0.70, status: 'critical' }
    ],
    'housing-prices': [
      { attribute: 'Neighborhood Income', representation: 'Disparities by income', biasScore: 0.60, status: 'warning' },
      { attribute: 'Redlining History', representation: 'Historical biases present', biasScore: 0.80, status: 'critical' },
      { attribute: 'Property Type', representation: 'Limited data for certain types', biasScore: 0.40, status: 'ok' }
    ],
    'customer-sentiment': [
      { attribute: 'Region', representation: 'Uneven geographical distribution', biasScore: 0.55, status: 'warning' },
      { attribute: 'Product Category', representation: 'Bias towards popular products', biasScore: 0.48, status: 'ok' },
      { attribute: 'Reviewer Demographics', representation: 'Lack of diversity', biasScore: 0.70, status: 'critical' }
    ],
    'education-performance': [
      { attribute: 'Parental Education', representation: 'Higher education overrepresented', biasScore: 0.68, status: 'warning' },
      { attribute: 'Family Income', representation: 'Low income underrepresented', biasScore: 0.72, status: 'critical' },
      { attribute: 'Ethnicity', representation: 'Minority groups underrepresented', biasScore: 0.65, status: 'warning' }
    ],
    'ad-targeting': [
      { attribute: 'Gender', representation: 'Stereotypical targeting', biasScore: 0.70, status: 'critical' },
      { attribute: 'Age', representation: 'Age-based discrimination', biasScore: 0.60, status: 'warning' },
      { attribute: 'Interests', representation: 'Limited diverse interests', biasScore: 0.50, status: 'warning' }
    ]
  };

  const dataQualityMetrics = {
    recruiting: [
      { metric: 'Completeness', score: '92%', status: 'ok' },
      { metric: 'Consistency', score: '85%', status: 'warning' },
      { metric: 'Balance', score: '68%', status: 'warning' },
      { metric: 'Representativeness', score: '58%', status: 'critical' }
    ],
    loan: [
      { metric: 'Completeness', score: '88%', status: 'warning' },
      { metric: 'Consistency', score: '82%', status: 'warning' },
      { metric: 'Balance', score: '55%', status: 'critical' },
      { metric: 'Representativeness', score: '62%', status: 'critical' }
    ],
    healthcare: [
      { metric: 'Completeness', score: '95%', status: 'ok' },
      { metric: 'Consistency', score: '90%', status: 'ok' },
      { metric: 'Balance', score: '70%', status: 'warning' },
      { metric: 'Representativeness', score: '65%', status: 'warning' }
    ],
    'social-media': [
      { metric: 'Completeness', score: '90%', status: 'ok' },
      { metric: 'Consistency', score: '80%', status: 'warning' },
      { metric: 'Balance', score: '60%', status: 'critical' },
      { metric: 'Representativeness', score: '50%', status: 'critical' }
    ],
    'criminal-justice': [
      { metric: 'Completeness', score: '85%', status: 'warning' },
      { metric: 'Consistency', score: '78%', status: 'warning' },
      { metric: 'Balance', score: '45%', status: 'critical' },
      { metric: 'Representativeness', score: '40%', status: 'critical' }
    ],
    'housing-prices': [
      { metric: 'Completeness', score: '93%', status: 'ok' },
      { metric: 'Consistency', score: '88%', status: 'ok' },
      { metric: 'Balance', score: '65%', status: 'warning' },
      { metric: 'Representativeness', score: '55%', status: 'critical' }
    ],
    'customer-sentiment': [
      { metric: 'Completeness', score: '90%', status: 'ok' },
      { metric: 'Consistency', score: '85%', status: 'warning' },
      { metric: 'Balance', score: '60%', status: 'critical' },
      { metric: 'Representativeness', score: '50%', status: 'critical' }
    ],
    'education-performance': [
      { metric: 'Completeness', score: '91%', status: 'ok' },
      { metric: 'Consistency', score: '86%', status: 'warning' },
      { metric: 'Balance', score: '58%', status: 'critical' },
      { metric: 'Representativeness', score: '62%', status: 'warning' }
    ],
    'ad-targeting': [
      { metric: 'Completeness', score: '90%', status: 'ok' },
      { metric: 'Consistency', score: '80%', status: 'warning' },
      { metric: 'Balance', score: '55%', status: 'critical' },
      { metric: 'Representativeness', score: '45%', status: 'critical' }
    ]
  };

  const affectedDemographicsData = {
    recruiting: [
      { group: 'Female Candidates', impact: 'Lower interview rates', risk: 'Critical', action: 'Immediate oversampling required' },
      { group: 'Older Applicants', impact: 'Fewer initial screenings', risk: 'High', action: 'Targeted data collection recommended' }
    ],
    loan: [
      { group: 'Black Applicants', impact: 'Higher rejection rates, unfavorable terms', risk: 'Critical', action: 'Immediate oversampling required' },
      { group: 'Low-Income Households', impact: 'Disproportionately denied loans', risk: 'Critical', action: 'Targeted data collection and reweighting' }
    ],
    healthcare: [
      { group: 'Uninsured Patients', impact: 'Delayed diagnoses, less aggressive treatment plans', risk: 'Critical', action: 'Targeted data collection from public health clinics' },
      { group: 'Minority Racial Groups', impact: 'Under-diagnosis for certain conditions', risk: 'High', action: 'Implement fair sampling strategies' }
    ],
    'social-media': [
      { group: 'Minority Political Views', impact: 'Content disproportionately flagged', risk: 'Critical', action: 'Review and balance labeling guidelines' },
      { group: 'Non-English Speakers', impact: 'Higher rates of content removal', risk: 'High', action: 'Expand linguistic diversity in training data' }
    ],
    'criminal-justice': [
      { group: 'Black Individuals', impact: 'Higher predicted recidivism rates', risk: 'Critical', action: 'Re-evaluate feature definitions and rebalance data' },
      { group: 'Low-Income Communities', impact: 'Increased surveillance and policing', risk: 'Critical', action: 'Analyze geographical data for bias' }
    ],
    'housing-prices': [
      { group: 'Historically Redlined Areas', impact: 'Undervaluation of properties', risk: 'Critical', action: 'Incorporate socio-economic indicators and historical context' },
      { group: 'Lower-Income Neighborhoods', impact: 'Inaccurate price predictions', risk: 'High', action: 'Collect more granular data for diverse neighborhoods' }
    ],
    'customer-sentiment': [
      { group: 'Specific Geographic Regions', impact: 'Sentiment misinterpretation', risk: 'High', action: 'Ensure regional linguistic nuances are captured' },
      { group: 'Older Customers', impact: 'Feedback often overlooked', risk: 'Medium', action: 'Focus on diverse demographic feedback collection' }
    ],
    'education-performance': [
      { group: 'Low-Income Students', impact: 'Lower predicted performance', risk: 'Critical', action: 'Examine feature correlation with socioeconomic status' },
      { group: 'Minority Ethnic Groups', impact: 'Underestimated potential', risk: 'High', action: 'Diversify data collection across ethnic backgrounds' }
    ],
    'ad-targeting': [
      { group: 'Female Users', impact: 'Limited exposure to high-paying job ads', risk: 'Critical', action: 'Audit ad delivery for gender bias' },
      { group: 'Older Adults', impact: 'Exclusion from relevant product ads', risk: 'High', action: 'Broaden age targeting criteria and data' }
    ]
  };

  const keyFindingsData = {
    recruiting: [
      'Significant gender imbalance in resume screening leading to lower progression rates for female candidates',
      'Over-reliance on specific educational backgrounds, disadvantaging diverse skill sets',
      'Age demographic skew impacts fairness for both younger and older applicants'
    ],
    loan: [
      'Racial bias in loan approval rates, with minority groups facing higher rejection',
      'Income level highly correlated with approval, disproportionately affecting low-income applicants',
      'Geographical bias observed, with rural areas receiving less favorable loan terms'
    ],
    healthcare: [
      'Disparities in treatment recommendations based on insurance status, favoring privately insured patients',
      'Racial bias in diagnostic accuracy for certain medical conditions',
      'Age-related bias in predictive models, impacting care for elderly patients'
    ],
    'social-media': [
      'Algorithmic bias in content moderation, leading to disproportionate flagging of minority viewpoints',
      'Underrepresentation of non-English content in training data, causing unfair moderation outcomes',
      'Demographic biases influencing content reach and visibility'
    ],
    'criminal-justice': [
      'Algorithmic bias leading to higher predicted recidivism rates for racial minorities',
      'Geographical bias in policing predictions, over-policing certain neighborhoods',
      'Features highly correlated with protected attributes driving biased outcomes'
    ],
    'housing-prices': [
      'Systematic undervaluation of properties in historically redlined or minority neighborhoods',
      'Bias in feature importance, overlooking unique characteristics of diverse housing markets',
      'Lack of data granularity in certain urban or rural areas leading to inaccurate appraisals'
    ],
    'customer-sentiment': [
      'Bias in sentiment analysis models towards dominant linguistic patterns, misinterpreting diverse expressions',
      'Underrepresentation of certain customer segments in training data, leading to less accurate sentiment analysis for those groups',
      'Geographical bias affecting product recommendations and customer service routing'
    ],
    'education-performance': [
      'Predictive models showing bias against students from lower socioeconomic backgrounds',
      'Racial/ethnic disparities in predicted academic performance and intervention recommendations',
      'Curriculum content bias affecting engagement and performance for diverse student populations'
    ],
    'ad-targeting': [
      'Gender stereotypes reinforced through biased ad delivery for certain products or job opportunities',
      'Age-based discrimination leading to exclusion of relevant advertisements for specific age groups',
      'Algorithmic bias in interest profiling, narrowing exposure to diverse content or opportunities'
    ]
  };

  const currentBiasData = datasetBiasData[selectedDataset.id] || [];
  const currentDataQualityMetrics = dataQualityMetrics[selectedDataset.id] || [];
  const currentAffectedDemographics = affectedDemographicsData[selectedDataset.id] || [];
  const currentKeyFindings = keyFindingsData[selectedDataset.id] || [];

  return (
    <div className="dataset-analysis">
      <h2>Dataset Analysis for {selectedDataset.name}</h2>
      <p>{selectedDataset.description}</p>

      <div className="card">
        <h3>Bias Factors Identified</h3>
        <p>
          This section details the attributes within the dataset that show significant
          disparities or imbalances, indicating potential sources of bias.
        </p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Representation</th>
                <th>Bias Score</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentBiasData.map((data, index) => (
                <tr key={index}>
                  <td>{data.attribute}</td>
                  <td>{data.representation}</td>
                  <td>{(data.biasScore * 100).toFixed(0)}%</td>
                  <td>
                    <span className={`status-indicator status-${data.status}`}>
                      {data.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h3>Data Quality Metrics</h3>
        <p>
          Assessment of the dataset's quality, completeness, and consistency, which can
          impact model fairness and performance.
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
              {currentDataQualityMetrics.map((metric, index) => (
                <tr key={index}>
                  <td>{metric.metric}</td>
                  <td>{metric.score}</td>
                  <td>
                    <span className={`status-indicator status-${metric.status}`}>
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
        <h2>Affected Demographic Groups</h2>
        <p>
          Identification of demographic groups disproportionately impacted by dataset biases,
          along with recommended actions for data collection and balancing.
        </p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Demographic Group</th>
                <th>Impact</th>
                <th>Risk Level</th>
                <th>Recommended Action</th>
              </tr>
            </thead>
            <tbody>
              {currentAffectedDemographics.map((demo, index) => (
                <tr key={index}>
                  <td>{demo.group}</td>
                  <td>{demo.impact}</td>
                  <td>
                    <span className={`status-indicator status-${demo.risk === 'Critical' ? 'critical' : demo.risk.toLowerCase()}`}>
                      {demo.risk.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    {demo.risk === 'Critical' && 'Immediate oversampling required'
                      || demo.risk === 'High' && 'Targeted data collection recommended'
                      || demo.risk === 'Medium' && 'Consider reweighting strategy'}
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

export default DatasetAnalysis;