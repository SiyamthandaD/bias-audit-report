// src/components/About.js
import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="card">
        <h2>About the Bias Audit Report</h2>
        <p>
          This Bias Audit Report is designed to help organizations identify, measure, and mitigate biases in their
          machine learning systems. The report provides a comprehensive analysis of both dataset and model biases, along
          with concrete strategies for improvement.
        </p>

        <h3>Methodology</h3>
        <p>Our audit process follows industry best practices for algorithmic fairness assessment:</p>
        <ul>
          <li>Identification of protected attributes and potential bias dimensions</li>
          <li>Statistical analysis of dataset composition and representation</li>
          <li>Disaggregated model performance evaluation across demographic groups</li>
          <li>Calculation of quantitative fairness metrics</li>
          <li>Root cause analysis of identified biases</li>
          <li>Evidence-based mitigation recommendations</li>
        </ul>

        <h3>Interpretation Guide</h3>
        <p>
          <strong>Bias Scores:</strong> Range from 0 (no bias) to 1 (maximum bias). Scores above 0.5 indicate concerning
          levels of bias that should be addressed.
        </p>
        <p>
          <strong>Status Indicators:</strong>
        </p>
        <ul>
          <li>
            <span className="status-indicator status-ok">OK</span> - Within acceptable thresholds
          </li>
          <li>
            <span className="status-indicator status-warning">WARNING</span> - Requires attention
          </li>
          <li>
            <span className="status-indicator status-critical">CRITICAL</span> - Immediate action needed
          </li>
        </ul>
      </div>

      <div className="card">
        <h2>Team</h2>
        <div className="team-members">
          <div className="team-member">
            <h3>Keamogetsoe Sele</h3>
            <p>Lead Data Ethicist</p>
            <p>PhD in Fair Machine Learning, Stanford</p>
          </div>
          <div className="team-member">
            <h3>Siyamthanda Dlakavu</h3>
            <p>Lead Data Ethicist</p>
            <p>PhD in Fair Machine Learning, Stanford</p>
          </div>
          <div className="team-member">
            <h3>Cynthia Motaung</h3>
            <p>Senior Data Scientist</p>
            <p>Specializes in Bias Mitigation Techniques</p>
          </div>
          <div className="team-member">
            <h3>Mlungisi Mvubu</h3>
            <p>Policy Analyst</p>
            <p>AI Ethics & Regulatory Compliance</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Resources</h2>
        <ul>
          <li>
            <a href="https://www.fairmlbook.org" target="_blank" rel="noopener noreferrer">
              Fairness and Machine Learning
            </a>{" "}
            - Comprehensive textbook on algorithmic fairness
          </li>
          <li>
            <a href="https://ai.google/responsibility" target="_blank" rel="noopener noreferrer">
              Google Responsible AI Practices
            </a>{" "}
            - Framework for developing ethical AI systems
          </li>
          <li>
            <a href="https://www.aclweb.org/anthology/Q19-1036.pdf" target="_blank" rel="noopener noreferrer">
              Survey on Bias in NLP
            </a>{" "}
            - Academic paper on bias in language models
          </li>
          <li>
            <a href="https://www.microsoft.com/en-us/ai/responsible-ai" target="_blank" rel="noopener noreferrer">
              Microsoft Responsible AI Resources
            </a>{" "}
            - Tools and guidelines for fair AI development
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
