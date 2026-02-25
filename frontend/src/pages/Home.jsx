import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Enhancing Farmer Livelihood</h1>
          <p className="subtitle">Through Precision and Organic Farming Innovation</p>
          <div className="hero-description">
            <p>Transforming agriculture with IoT-powered sensors, automated systems, and sustainable practices.</p>
            <p className="highlight">Improving soil health • Reducing costs • Increasing yields • Securing livelihoods</p>
          </div>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">Learn More</Link>
            <Link to="/dashboard" className="btn btn-secondary">View Dashboard</Link>
          </div>
        </div>
        <div className="hero-illustration">
          <svg viewBox="0 0 500 400" className="hero-svg">
            {/* Sun */}
            <circle cx="450" cy="50" r="35" fill="#FFD700" opacity="0.8"/>

            {/* Farm */}
            <rect x="50" y="200" width="400" height="150" fill="#8B7355" opacity="0.3"/>
            <path d="M 50 200 Q 250 150 450 200" fill="#90EE90" opacity="0.6"/>

            {/* Crops - left field */}
            <g className="crops">
              <path d="M 80 200 L 85 170 L 90 200" stroke="#228B22" strokeWidth="2" fill="none"/>
              <path d="M 120 200 L 125 170 L 130 200" stroke="#228B22" strokeWidth="2" fill="none"/>
              <path d="M 160 200 L 165 170 L 170 200" stroke="#228B22" strokeWidth="2" fill="none"/>
            </g>

            {/* IoT Sensors */}
            <g className="sensors">
              {/* Sensor 1 */}
              <circle cx="100" cy="180" r="6" fill="#FF6B6B" className="sensor-point"/>
              <line x1="100" y1="180" x2="100" y2="160" stroke="#FF6B6B" strokeWidth="1.5" className="sensor-line"/>

              {/* Sensor 2 */}
              <circle cx="200" cy="185" r="6" fill="#4ECDC4" className="sensor-point"/>
              <line x1="200" y1="185" x2="200" y2="165" stroke="#4ECDC4" strokeWidth="1.5" className="sensor-line"/>

              {/* Sensor 3 */}
              <circle cx="300" cy="180" r="6" fill="#45B7D1" className="sensor-point"/>
              <line x1="300" y1="180" x2="300" y2="160" stroke="#45B7D1" strokeWidth="1.5" className="sensor-line"/>
            </g>

            {/* Irrigation System */}
            <g className="irrigation">
              <line x1="60" y1="210" x2="420" y2="210" stroke="#6495ED" strokeWidth="3"/>
              <circle cx="100" cy="210" r="3" fill="#1E90FF"/>
              <circle cx="200" cy="210" r="3" fill="#1E90FF"/>
              <circle cx="300" cy="210" r="3" fill="#1E90FF"/>
              <circle cx="400" cy="210" r="3" fill="#1E90FF"/>
            </g>

            {/* Cloud */}
            <ellipse cx="450" cy="100" rx="40" ry="25" fill="#E0E0E0" opacity="0.7"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Real-time Monitoring</h3>
            <p>IoT sensors track soil moisture, temperature, and humidity 24/7 for data-driven decisions.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💧</div>
            <h3>Automated Irrigation</h3>
            <p>Smart irrigation systems optimize water usage, reducing consumption by up to 40%.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>Organic Integration</h3>
            <p>Combines precision farming with sustainable organic practices for healthy soil.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Yield Improvement</h3>
            <p>Expected 25-30% increase in agricultural yield through optimized farming.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Cost Reduction</h3>
            <p>Reduce input costs by 40% through efficient resource management and organic methods.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Livelihood Security</h3>
            <p>Enhanced income stability and food security for small and medium-scale farmers.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact">
        <h2>Project Impact</h2>
        <div className="impact-metrics">
          <div className="metric">
            <h3>40%</h3>
            <p>Water Savings</p>
          </div>
          <div className="metric">
            <h3>42%</h3>
            <p>Cost Reduction</p>
          </div>
          <div className="metric">
            <h3>28%</h3>
            <p>Yield Improvement</p>
          </div>
          <div className="metric">
            <h3>78%</h3>
            <p>Soil Health Score</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Transform Your Farm?</h2>
        <p>Join the precision farming revolution with FarmIO</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary btn-large">Get Started</Link>
          <Link to="/search" className="btn btn-secondary btn-large">📚 Explore Knowledge Base</Link>
        </div>
      </section>

      {/* Knowledge Base Preview */}
      <section className="knowledge-preview">
        <h2>Precision Farming Knowledge Base</h2>
        <p className="section-subtitle">Learn everything about precision farming, IoT sensors, organic integration, and sustainable practices</p>
        <div className="knowledge-cards">
          <div className="knowledge-card">
            <span className="knowledge-icon">🔍</span>
            <h3>Smart Search</h3>
            <p>Find answers to questions about precision farming, types, benefits, and implementation</p>
          </div>
          <div className="knowledge-card">
            <span className="knowledge-icon">📚</span>
            <h3>Comprehensive Database</h3>
            <p>20+ topics covering everything from basics to advanced analytics and challenges</p>
          </div>
          <div className="knowledge-card">
            <span className="knowledge-icon">🏷️</span>
            <h3>Tagged Content</h3>
            <p>Browse by category or search by tags for quick access to relevant information</p>
          </div>
          <div className="knowledge-card">
            <span className="knowledge-icon">💡</span>
            <h3>Real Insights</h3>
            <p>Get practical knowledge about ROI, implementation guides, and success stories</p>
          </div>
        </div>
        <Link to="/search" className="btn btn-primary btn-large">Go to Knowledge Base →</Link>
      </section>
    </div>
  );
}

export default Home;

