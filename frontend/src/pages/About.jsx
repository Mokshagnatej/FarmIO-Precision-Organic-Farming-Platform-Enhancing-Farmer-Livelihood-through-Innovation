import React, { useState, useEffect } from 'react';
import '../styles/About.css';

function About() {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/project')
      .then(res => res.json())
      .then(data => {
        setProjectData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching project data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="about">
      <section className="about-header">
        <h1>About the Project</h1>
        <p className="subtitle">A comprehensive approach to enhancing farmer livelihood through innovation</p>
      </section>

      {projectData && (
        <>
          <section className="about-section">
            <h2>Project Title</h2>
            <h3 className="project-title">{projectData.title}</h3>
          </section>

          <section className="about-section">
            <h2>Abstract</h2>
            <div className="content-box">
              <p>{projectData.abstract}</p>
              <div className="key-challenges">
                <h4>Key Challenges Addressed:</h4>
                <ul>
                  <li>High input costs in agriculture</li>
                  <li>Soil degradation from excessive chemical use</li>
                  <li>Low farmer income and livelihood insecurity</li>
                  <li>Environmental sustainability concerns</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Project Scope</h2>
            <div className="content-box">
              <p>{projectData.scope}</p>
              <div className="scope-components">
                <h4>Key Components:</h4>
                <div className="components-grid">
                  <div className="component-card">
                    <h5>🌍 IoT Infrastructure</h5>
                    <p>Sensor deployment for real-time environmental monitoring</p>
                  </div>
                  <div className="component-card">
                    <h5>💧 Automated Systems</h5>
                    <p>Intelligent irrigation systems optimizing water usage</p>
                  </div>
                  <div className="component-card">
                    <h5>🌱 Organic Integration</h5>
                    <p>Sustainable farming methods for soil health</p>
                  </div>
                  <div className="component-card">
                    <h5>📊 Web Platform</h5>
                    <p>Dashboard for data visualization and farm management</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Expected Outcomes</h2>
            <div className="outcomes-grid">
              <div className="outcome-card">
                <div className="outcome-number">1</div>
                <h4>Improved Soil Health</h4>
                <p>Enhanced soil quality through organic practices and precision monitoring</p>
              </div>
              <div className="outcome-card">
                <div className="outcome-number">2</div>
                <h4>Reduced Production Costs</h4>
                <p>40-50% reduction in input costs through optimized resource management</p>
              </div>
              <div className="outcome-card">
                <div className="outcome-number">3</div>
                <h4>Higher Yields</h4>
                <p>25-30% improvement in agricultural production and quality</p>
              </div>
              <div className="outcome-card">
                <div className="outcome-number">4</div>
                <h4>Enhanced Livelihoods</h4>
                <p>Improved income stability and food security for farming communities</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Sustainability & Scalability</h2>
            <div className="content-box">
              <p>The FarmIO system is designed with sustainability and scalability at its core:</p>
              <ul className="benefits-list">
                <li><strong>Cost-Effective Solutions:</strong> Affordable for small and medium-scale farmers</li>
                <li><strong>Scalable Technology:</strong> Can be expanded from individual fields to entire regions</li>
                <li><strong>Environmental Impact:</strong> Reduces chemical pollution and promotes biodiversity</li>
                <li><strong>Community Empowerment:</strong> Builds farmer capacity through training and support</li>
                <li><strong>Digital Inclusion:</strong> Provides farmers access to modern agricultural technology</li>
              </ul>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default About;

