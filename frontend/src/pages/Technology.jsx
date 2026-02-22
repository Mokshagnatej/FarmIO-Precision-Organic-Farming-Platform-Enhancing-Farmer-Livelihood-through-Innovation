import React, { useState, useEffect } from 'react';
import '../styles/Technology.css';

function Technology() {
  const [techData, setTechData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('iot');

  useEffect(() => {
    fetch('/api/technology')
      .then(res => res.json())
      .then(data => {
        setTechData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching technology data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="technology">
      <section className="tech-header">
        <h1>Technology Stack</h1>
        <p className="subtitle">Comprehensive IoT-Based Infrastructure for Precision Farming</p>
      </section>

      <div className="tab-buttons">
        <button
          className={`tab-btn ${activeTab === 'iot' ? 'active' : ''}`}
          onClick={() => setActiveTab('iot')}
        >
          IoT Infrastructure
        </button>
        <button
          className={`tab-btn ${activeTab === 'benefits' ? 'active' : ''}`}
          onClick={() => setActiveTab('benefits')}
        >
          Benefits & Outcomes
        </button>
        <button
          className={`tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
          onClick={() => setActiveTab('architecture')}
        >
          System Architecture
        </button>
      </div>

      {activeTab === 'iot' && techData && (
        <section className="tech-section">
          <h2>IoT Infrastructure Components</h2>
          <p className="section-intro">Our intelligent sensor network enables real-time farm monitoring and automated decision-making.</p>

          <div className="components-grid">
            {techData.iotInfrastructure.map(component => (
              <div key={component.id} className="component-card">
                <div className="component-icon">
                  {component.id === 1 && '💧'}
                  {component.id === 2 && '🌡️'}
                  {component.id === 3 && '💨'}
                  {component.id === 4 && '🚿'}
                </div>
                <h3>{component.name}</h3>
                <p>{component.description}</p>
              </div>
            ))}
          </div>

          <section className="sensor-specifications">
            <h3>Sensor Specifications</h3>
            <div className="specs-table">
              <table>
                <thead>
                  <tr>
                    <th>Sensor Type</th>
                    <th>Range</th>
                    <th>Accuracy</th>
                    <th>Update Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Soil Moisture</td>
                    <td>0-100%</td>
                    <td>±3%</td>
                    <td>Every 15 minutes</td>
                  </tr>
                  <tr>
                    <td>Temperature</td>
                    <td>-40°C to +80°C</td>
                    <td>±0.5°C</td>
                    <td>Every 10 minutes</td>
                  </tr>
                  <tr>
                    <td>Humidity</td>
                    <td>0-100%</td>
                    <td>±2%</td>
                    <td>Every 15 minutes</td>
                  </tr>
                  <tr>
                    <td>Water Flow</td>
                    <td>0-500 L/min</td>
                    <td>±2 L/min</td>
                    <td>Real-time</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>
      )}

      {activeTab === 'benefits' && techData && (
        <section className="tech-section">
          <h2>Key Benefits & Expected Outcomes</h2>

          <div className="benefits-grid">
            {techData.benefits.map(benefit => (
              <div key={benefit.id} className="benefit-card">
                <div className="benefit-number">{benefit.id}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

          <section className="impact-comparison">
            <h3>Before vs. After Implementation</h3>
            <div className="comparison-table">
              <div className="comparison-row">
                <div className="comparison-item">
                  <h4>Before</h4>
                  <ul>
                    <li>Manual monitoring</li>
                    <li>High chemical usage</li>
                    <li>Inefficient water use</li>
                    <li>Unpredictable yields</li>
                    <li>Low income</li>
                  </ul>
                </div>
                <div className="comparison-arrow">→</div>
                <div className="comparison-item">
                  <h4>After</h4>
                  <ul>
                    <li>Real-time IoT monitoring</li>
                    <li>Optimized input usage</li>
                    <li>40% water savings</li>
                    <li>28% yield increase</li>
                    <li>Stable income growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </section>
      )}

      {activeTab === 'architecture' && (
        <section className="tech-section">
          <h2>System Architecture</h2>

          <div className="architecture-diagram">
            <svg viewBox="0 0 1000 600" className="arch-svg">
              {/* Layer 1: Sensors */}
              <g className="layer layer1">
                <text x="50" y="30" fontSize="16" fontWeight="bold" fill="#333">Sensor Layer</text>
                <rect x="50" y="50" width="100" height="80" fill="#FFE5E5" stroke="#FF6B6B" strokeWidth="2" rx="5"/>
                <text x="100" y="95" textAnchor="middle" fontSize="12">Soil Sensors</text>

                <rect x="200" y="50" width="100" height="80" fill="#E5F5FF" stroke="#4ECDC4" strokeWidth="2" rx="5"/>
                <text x="250" y="95" textAnchor="middle" fontSize="12">Temperature</text>

                <rect x="350" y="50" width="100" height="80" fill="#FFF5E5" stroke="#FFB700" strokeWidth="2" rx="5"/>
                <text x="400" y="95" textAnchor="middle" fontSize="12">Humidity</text>

                <rect x="500" y="50" width="100" height="80" fill="#E5FFE5" stroke="#45B7D1" strokeWidth="2" rx="5"/>
                <text x="550" y="95" textAnchor="middle" fontSize="12">Water Flow</text>
              </g>

              {/* Layer 2: Gateway */}
              <g className="layer layer2">
                <text x="50" y="180" fontSize="16" fontWeight="bold" fill="#333">Gateway & Processing</text>
                <rect x="150" y="200" width="350" height="80" fill="#E8E5FF" stroke="#9B59B6" strokeWidth="2" rx="5"/>
                <text x="325" y="245" textAnchor="middle" fontSize="14" fontWeight="bold">IoT Gateway & Edge Processing</text>
              </g>

              {/* Arrows down */}
              <line x1="325" y1="130" x2="325" y2="200" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Layer 3: Cloud & Data */}
              <g className="layer layer3">
                <text x="50" y="330" fontSize="16" fontWeight="bold" fill="#333">Cloud Infrastructure</text>
                <rect x="100" y="350" width="200" height="80" fill="#F0E5FF" stroke="#8E44AD" strokeWidth="2" rx="5"/>
                <text x="200" y="395" textAnchor="middle" fontSize="12">Data Storage</text>

                <rect x="350" y="350" width="200" height="80" fill="#E5FFEE" stroke="#27AE60" strokeWidth="2" rx="5"/>
                <text x="450" y="395" textAnchor="middle" fontSize="12">Processing Engine</text>
              </g>

              {/* Arrow down */}
              <line x1="325" y1="280" x2="325" y2="350" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Layer 4: Application */}
              <g className="layer layer4">
                <text x="50" y="500" fontSize="16" fontWeight="bold" fill="#333">Application Layer</text>
                <rect x="100" y="520" width="450" height="60" fill="#FFF5E5" stroke="#E67E22" strokeWidth="2" rx="5"/>
                <text x="325" y="555" textAnchor="middle" fontSize="14" fontWeight="bold">Web Dashboard • Mobile App • Analytics Platform</text>
              </g>

              {/* Arrow down */}
              <line x1="325" y1="430" x2="325" y2="520" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Arrow marker definition */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#666"/>
                </marker>
              </defs>
            </svg>
          </div>

          <section className="architecture-details">
            <h3>How It Works</h3>
            <ol className="process-list">
              <li>
                <strong>Sensor Data Collection:</strong> IoT sensors continuously monitor environmental parameters and transmit data every 10-15 minutes.
              </li>
              <li>
                <strong>Edge Processing:</strong> Gateway devices process raw data locally for immediate actions (e.g., triggering irrigation).
              </li>
              <li>
                <strong>Cloud Storage & Analysis:</strong> Data is securely stored and analyzed for historical trends and AI-driven insights.
              </li>
              <li>
                <strong>Automated Decision Making:</strong> Algorithms recommend irrigation schedules, fertilizer application, and pest management.
              </li>
              <li>
                <strong>Farmer Visualization:</strong> Farmers access insights through intuitive web and mobile dashboards.
              </li>
            </ol>
          </section>
        </section>
      )}
    </div>
  );
}

export default Technology;

