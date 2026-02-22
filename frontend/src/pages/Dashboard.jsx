import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../styles/Dashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [sensorHistory, setSensorHistory] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedSensor, setSelectedSensor] = useState(1);

  useEffect(() => {
    // Fetch dashboard data
    Promise.all([
      fetch('/api/dashboard').then(res => res.json()),
      fetch('/api/sensor-history/1').then(res => res.json()),
      fetch('/api/sensor-history/2').then(res => res.json()),
      fetch('/api/sensor-history/3').then(res => res.json()),
    ])
    .then(([dashboard, history1, history2, history3]) => {
      setDashboardData(dashboard);
      setSensorHistory({ 1: history1, 2: history2, 3: history3 });
      setLoading(false);
    })
    .catch(err => {
      console.error('Error fetching data:', err);
      setLoading(false);
    });
  }, []);

  if (loading || !dashboardData) {
    return <div className="loading">Loading dashboard...</div>;
  }

  const getSensorColor = (status) => {
    switch(status) {
      case 'optimal': return '#27AE60';
      case 'low': return '#E67E22';
      case 'high': return '#E74C3C';
      default: return '#95A5A6';
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const getChartData = () => {
    const data = sensorHistory[selectedSensor];
    if (!data) return null;

    return {
      labels: data.labels,
      datasets: [
        {
          label: `Sensor ${selectedSensor} - 24 Hour History`,
          data: data.data,
          borderColor: '#4ECDC4',
          backgroundColor: 'rgba(78, 205, 196, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
      ],
    };
  };

  const analyticsChartData = {
    labels: ['Soil Health', 'Water Usage', 'Chemical Usage', 'Crop Health', 'Sustainability'],
    datasets: [
      {
        label: 'Score (%)',
        data: [78, 85, 65, 82, 88],
        backgroundColor: [
          'rgba(52, 152, 219, 0.7)',
          'rgba(46, 204, 113, 0.7)',
          'rgba(155, 89, 182, 0.7)',
          'rgba(241, 196, 15, 0.7)',
          'rgba(231, 76, 60, 0.7)',
        ],
      },
    ],
  };

  return (
    <div className="dashboard">
      <section className="dashboard-header">
        <h1>Farm Management Dashboard</h1>
        <p className="subtitle">Real-time IoT monitoring and farm analytics</p>
      </section>

      {/* Key Metrics */}
      <section className="metrics-section">
        <h2>Key Metrics</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-icon">🌾</div>
            <h3>Total Farm Size</h3>
            <p className="metric-value">{dashboardData.farmAnalytics.totalFarmSize} acres</p>
          </div>
          <div className="metric-card">
            <div className="metric-icon">📡</div>
            <h3>Active Sensors</h3>
            <p className="metric-value">{dashboardData.farmAnalytics.activeSensors}</p>
          </div>
          <div className="metric-card">
            <div className="metric-icon">💧</div>
            <h3>Water Savings</h3>
            <p className="metric-value">{dashboardData.farmAnalytics.waterSavings}</p>
          </div>
          <div className="metric-card">
            <div className="metric-icon">💰</div>
            <h3>Cost Reduction</h3>
            <p className="metric-value">{dashboardData.farmAnalytics.costReduction}</p>
          </div>
          <div className="metric-card">
            <div className="metric-icon">📈</div>
            <h3>Yield Improvement</h3>
            <p className="metric-value">{dashboardData.farmAnalytics.yieldImprovement}</p>
          </div>
          <div className="metric-card">
            <div className="metric-icon">🏆</div>
            <h3>Soil Health Score</h3>
            <p className="metric-value">{dashboardData.farmAnalytics.soilHealthScore}%</p>
          </div>
        </div>
      </section>

      {/* Sensor Data */}
      <section className="sensors-section">
        <h2>Real-time Sensor Data</h2>
        <div className="sensors-grid">
          {dashboardData.sensors.map(sensor => (
            <div key={sensor.id} className="sensor-card">
              <div className="sensor-header">
                <h3>{sensor.name}</h3>
                <span
                  className="status-badge"
                  style={{ backgroundColor: getSensorColor(sensor.status) }}
                >
                  {sensor.status.toUpperCase()}
                </span>
              </div>
              <div className="sensor-value">
                <span className="value">{sensor.currentValue}</span>
                <span className="unit">{sensor.unit}</span>
              </div>
              <div className="sensor-location">📍 {sensor.location}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sensor History Chart */}
      <section className="chart-section">
        <h2>Sensor History - 24 Hours</h2>
        <div className="chart-selector">
          <label>Select Sensor:</label>
          <select value={selectedSensor} onChange={(e) => setSelectedSensor(parseInt(e.target.value))}>
            <option value={1}>Soil Moisture</option>
            <option value={2}>Temperature</option>
            <option value={3}>Humidity</option>
          </select>
        </div>
        <div className="chart-container">
          {getChartData() && <Line data={getChartData()} options={chartOptions} />}
        </div>
      </section>

      {/* Analytics Chart */}
      <section className="chart-section">
        <h2>Farm Analytics</h2>
        <div className="chart-container">
          <Bar data={analyticsChartData} options={chartOptions} />
        </div>
      </section>

      {/* Irrigation Systems */}
      <section className="irrigation-section">
        <h2>Automated Irrigation Systems</h2>
        <div className="irrigation-grid">
          {dashboardData.irrigationSystems.map(system => (
            <div key={system.id} className="irrigation-card">
              <div className="irrigation-header">
                <h3>{system.name}</h3>
                <span
                  className={`status-badge ${system.status}`}
                  style={{
                    backgroundColor: system.status === 'active' ? '#27AE60' : '#95A5A6'
                  }}
                >
                  {system.status.toUpperCase()}
                </span>
              </div>
              <div className="irrigation-info">
                <div className="info-row">
                  <span className="label">Water Usage:</span>
                  <span className="value">{system.waterUsage} L</span>
                </div>
                <div className="info-row">
                  <span className="label">Last Activated:</span>
                  <span className="value">{system.lastActivated}</span>
                </div>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${(system.waterUsage / 1500) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Farm Status Overview */}
      <section className="status-section">
        <h2>Overall Farm Status</h2>
        <div className="status-overview">
          <div className="status-item">
            <h4>🌱 Crop Status</h4>
            <p>Healthy growth detected across all fields</p>
          </div>
          <div className="status-item">
            <h4>💧 Water Management</h4>
            <p>Optimal moisture levels maintained with 35% water savings</p>
          </div>
          <div className="status-item">
            <h4>🐛 Pest Management</h4>
            <p>No significant pest activity detected</p>
          </div>
          <div className="status-item">
            <h4>📊 Productivity</h4>
            <p>On track for 28% yield improvement vs. last season</p>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="recommendations-section">
        <h2>AI-Powered Recommendations</h2>
        <div className="recommendations-list">
          <div className="recommendation">
            <span className="priority-high">⚠️ High Priority</span>
            <p>Field B soil moisture is below optimal. Activate irrigation system within 2 hours to prevent crop stress.</p>
          </div>
          <div className="recommendation">
            <span className="priority-medium">ℹ️ Medium Priority</span>
            <p>Temperature forecast shows 35°C tomorrow. Consider shade cloth deployment in Field A.</p>
          </div>
          <div className="recommendation">
            <span className="priority-low">✓ Low Priority</span>
            <p>Nitrogen levels adequate for next 5 days. Schedule fertilizer application for day 6.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

