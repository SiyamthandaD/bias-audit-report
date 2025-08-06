// src/App.js
import React, { useState } from "react";
import "./App.css";
import ReportDashboard from "./components/ReportDashboard";
import DatasetAnalysis from "./components/DatasetAnalysis";
import ModelAnalysis from "./components/ModelAnalysis";
import MitigationStrategies from "./components/MitigationStrategies";
import About from "./components/About";

// Sample datasets and models
const datasets = [
  {
    id: "recruiting",
    name: "Tech Hiring Dataset",
    description: "Candidate evaluation data from tech company recruiting",
    biasFactors: ["Gender", "Education Background", "Age"],
    size: "85,000 records"
  },
  {
    id: "loan",
    name: "Loan Approval Dataset",
    description: "Historical loan application data from a bank",
    biasFactors: ["Race", "Income Level", "Geography"],
    size: "120,000 records"
  },
  {
    id: "healthcare",
    name: "Healthcare Access Dataset",
    description: "Patient treatment recommendation data",
    biasFactors: ["Insurance Status", "Race", "Age"],
    size: "95,000 records"
  },
  {
    id: "social-media",
    name: "Social Media Content Dataset",
    description: "User-generated content for content moderation",
    biasFactors: ["Demographics", "Political Affiliation", "Language"],
    size: "500,000 records"
  },
  {
    id: "criminal-justice",
    name: "Criminal Justice Recidivism Dataset",
    description: "Data used to predict likelihood of re-offending",
    biasFactors: ["Race", "Socioeconomic Status", "Prior Arrests"],
    size: "70,000 records"
  },
  {
    id: "housing-prices",
    name: "Housing Price Prediction Dataset",
    description: "Real estate data for predicting property values",
    biasFactors: ["Neighborhood Income", "Redlining History", "Property Type"],
    size: "150,000 records"
  },
  {
    id: "customer-sentiment",
    name: "Customer Sentiment Analysis Dataset",
    description: "Customer reviews and feedback for sentiment analysis",
    biasFactors: ["Region", "Product Category", "Reviewer Demographics"],
    size: "200,000 records"
  },
  {
    id: "education-performance",
    name: "Student Performance Dataset",
    description: "Student demographic and academic performance data",
    biasFactors: ["Parental Education", "Family Income", "Ethnicity"],
    size: "60,000 records"
  },
  {
    id: "ad-targeting",
    name: "Online Ad Targeting Dataset",
    description: "User Browse behavior and demographic data for ad delivery",
    biasFactors: ["Gender", "Age", "Interests"],
    size: "1,000,000 records"
  }
];

const models = [
  {
    id: "resume-screener",
    name: "Resume Screening Model",
    description: "AI model for filtering job applications",
    type: "Natural Language Processing"
  },
  {
    id: "credit-scoring",
    name: "Credit Scoring Model",
    description: "Predicts creditworthiness of applicants",
    type: "Classification"
  },
  {
    id: "diagnostic",
    name: "Medical Diagnostic Model",
    description: "Predicts likelihood of medical conditions",
    type: "Healthcare AI"
  },
  {
    id: "content-moderation",
    name: "Content Moderation Model",
    description: "Flags inappropriate or harmful online content",
    type: "Natural Language Processing"
  },
  {
    id: "predictive-policing",
    name: "Predictive Policing Model",
    description: "Predicts crime hotspots and allocates police resources",
    type: "Predictive Analytics"
  },
  {
    id: "housing-appraisal",
    name: "Automated Housing Appraisal Model",
    description: "Estimates property values based on various features",
    type: "Regression"
  },
  {
    id: "personalized-recommender",
    name: "Personalized Recommendation Model",
    description: "Suggests products, movies, or content to users",
    type: "Recommender System"
  },
  {
    id: "student-risk-assessment",
    name: "Student Attrition Risk Model",
    description: "Identifies students at risk of dropping out",
    type: "Classification"
  },
  {
    id: "loan-underwriting",
    name: "Automated Loan Underwriting Model",
    description: "Automates the loan approval process based on applicant data",
    type: "Financial AI"
  }
];

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedDataset, setSelectedDataset] = useState(datasets[0]);
  const [selectedModel, setSelectedModel] = useState(models[0]);

  const renderTab = () => {
    const commonProps = {
      selectedDataset,
      selectedModel,
      onDatasetChange: setSelectedDataset,
      onModelChange: setSelectedModel,
      datasets,
      models
    };

    switch (activeTab) {
      case "dataset":
        return <DatasetAnalysis {...commonProps} />;
      case "model":
        return <ModelAnalysis {...commonProps} />;
      case "mitigation":
        return <MitigationStrategies {...commonProps} />;
      case "about":
        return <About />;
      default:
        return <ReportDashboard {...commonProps} />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Bias Audit Report</h1>
        <p>Ethical Analysis of Machine Learning Systems</p>
        <div className="selection-banner">
          <div className="selection-item">
            <label>Dataset:</label>
            <select
              value={selectedDataset.id}
              onChange={(e) => {
                const dataset = datasets.find((d) => d.id === e.target.value);
                setSelectedDataset(dataset);
              }}>
              {datasets.map((dataset) => (
                <option key={dataset.id} value={dataset.id}>
                  {dataset.name}
                </option>
              ))}
            </select>
          </div>
          <div className="selection-item">
            <label>Model:</label>
            <select
              value={selectedModel.id}
              onChange={(e) => {
                const model = models.find((m) => m.id === e.target.value);
                setSelectedModel(model);
              }}>
              {models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <nav className="app-nav">
        <button onClick={() => setActiveTab("dashboard")} className={activeTab === "dashboard" ? "active" : ""}>
          Dashboard
        </button>
        <button onClick={() => setActiveTab("dataset")} className={activeTab === "dataset" ? "active" : ""}>
          Dataset Analysis
        </button>
        <button onClick={() => setActiveTab("model")} className={activeTab === "model" ? "active" : ""}>
          Model Analysis
        </button>
        <button onClick={() => setActiveTab("mitigation")} className={activeTab === "mitigation" ? "active" : ""}>
          Mitigation Strategies
        </button>
        <button onClick={() => setActiveTab("about")} className={activeTab === "about" ? "active" : ""}>
          About
        </button>
      </nav>

      <main className="app-content">{renderTab()}</main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} | Made with ❤️ by Siyamthanda Dlakavu | Ethical AI Initiative</p>
      </footer>
    </div>
  );
}

export default App;
