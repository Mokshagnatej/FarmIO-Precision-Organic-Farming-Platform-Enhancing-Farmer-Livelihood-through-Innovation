import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Project Data
const projectData = {
  title: "Enhancing Farmer Livelihood through Precision and Organic Farming Intervention",
  abstract: "The project addresses high input costs, soil degradation, and low farmer income caused by excessive chemical use. It promotes a combination of precision farming tools and organic practices through demonstrations and basic monitoring. The expected outcomes include improved soil health, reduced production costs, higher yields, and enhanced farmer livelihoods through sustainable agriculture.",
  scope: "The scope of this project involves the design and implementation of an IoT-based infrastructure to support precision and organic farming practices. It includes deploying sensors for real-time monitoring of soil moisture, temperature, and humidity, along with automated irrigation systems to optimize water and resource usage. The project also integrates organic farming methods to improve soil health and promote sustainable cultivation. A web-based platform will be developed to visualize and manage farm data efficiently. The system is designed to be scalable and cost-effective, making it suitable for small and medium-scale farmers to enhance productivity, reduce input costs, and improve overall livelihood security."
};

// API Routes
app.get('/api/project', (req, res) => {
  res.json(projectData);
});

// Dashboard data with sensor readings
app.get('/api/dashboard', (req, res) => {
  const dashboardData = {
    sensors: [
      {
        id: 1,
        name: "Soil Moisture Sensor - Field A",
        type: "moisture",
        currentValue: 65,
        unit: "%",
        status: "optimal",
        location: "Field A"
      },
      {
        id: 2,
        name: "Temperature Sensor - Field A",
        type: "temperature",
        currentValue: 28.5,
        unit: "°C",
        status: "optimal",
        location: "Field A"
      },
      {
        id: 3,
        name: "Humidity Sensor - Field A",
        type: "humidity",
        currentValue: 72,
        unit: "%",
        status: "optimal",
        location: "Field A"
      },
      {
        id: 4,
        name: "Soil Moisture Sensor - Field B",
        type: "moisture",
        currentValue: 48,
        unit: "%",
        status: "low",
        location: "Field B"
      },
      {
        id: 5,
        name: "Temperature Sensor - Field B",
        type: "temperature",
        currentValue: 30.2,
        unit: "°C",
        status: "high",
        location: "Field B"
      },
      {
        id: 6,
        name: "Humidity Sensor - Field B",
        type: "humidity",
        currentValue: 58,
        unit: "%",
        status: "optimal",
        location: "Field B"
      }
    ],
    irrigationSystems: [
      {
        id: 1,
        name: "Automated Irrigation - Field A",
        status: "active",
        waterUsage: 1250,
        lastActivated: "2 hours ago"
      },
      {
        id: 2,
        name: "Automated Irrigation - Field B",
        status: "inactive",
        waterUsage: 890,
        lastActivated: "5 hours ago"
      }
    ],
    farmAnalytics: {
      totalFarmSize: 50,
      unit: "acres",
      activeSensors: 6,
      irrigationSystems: 2,
      soilHealthScore: 78,
      waterSavings: "35%",
      costReduction: "42%",
      yieldImprovement: "28%"
    }
  };
  res.json(dashboardData);
});

// Historical data for charts
app.get('/api/sensor-history/:sensorId', (req, res) => {
  const sensorId = req.params.sensorId;
  const mockHistory = {
    1: { // Soil Moisture
      labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
      data: [55, 58, 62, 68, 70, 65, 60]
    },
    2: { // Temperature
      labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
      data: [20, 22, 25, 30, 32, 28.5, 24]
    },
    3: { // Humidity
      labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
      data: [85, 82, 78, 70, 65, 72, 80]
    }
  };
  res.json(mockHistory[sensorId] || { labels: [], data: [] });
});

// Technology components data
app.get('/api/technology', (req, res) => {
  const technologyData = {
    iotInfrastructure: [
      {
        id: 1,
        name: "Soil Moisture Sensors",
        description: "Real-time monitoring of soil moisture levels to optimize irrigation",
        image: "sensor-moisture.svg"
      },
      {
        id: 2,
        name: "Temperature Sensors",
        description: "Continuous temperature tracking for climate adaptation",
        image: "sensor-temperature.svg"
      },
      {
        id: 3,
        name: "Humidity Sensors",
        description: "Environmental humidity monitoring for precision farming",
        image: "sensor-humidity.svg"
      },
      {
        id: 4,
        name: "Automated Irrigation System",
        description: "Smart irrigation based on real-time sensor data",
        image: "irrigation.svg"
      }
    ],
    benefits: [
      {
        id: 1,
        title: "Improved Soil Health",
        description: "Organic practices combined with data-driven farming enhance soil quality and biodiversity"
      },
      {
        id: 2,
        title: "Reduced Production Costs",
        description: "Precision farming reduces chemical usage and water waste by up to 40%"
      },
      {
        id: 3,
        title: "Higher Yields",
        description: "Optimized farming practices result in 25-30% yield improvements"
      },
      {
        id: 4,
        title: "Enhanced Livelihood Security",
        description: "Improved income stability through sustainable and profitable agriculture"
      }
    ]
  };
  res.json(technologyData);
});

// Gallery endpoint (mock data - can be extended with Google Images API)
app.get('/api/gallery', (req, res) => {
  const galleryData = {
    images: [
      {
        id: 1,
        title: "Precision Farming Irrigation",
        description: "Modern IoT-based irrigation system in action",
        url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=500&fit=crop",
        category: "irrigation"
      },
      {
        id: 2,
        title: "Organic Farming Practice",
        description: "Sustainable organic cultivation techniques",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=500&fit=crop",
        category: "organic"
      },
      {
        id: 3,
        title: "Soil Monitoring",
        description: "Advanced soil quality monitoring equipment",
        url: "https://images.unsplash.com/photo-1537762046a4-e44b8b8e9aca?w=500&h=500&fit=crop",
        category: "technology"
      },
      {
        id: 4,
        title: "Smart Farming Technology",
        description: "IoT sensors deployed in the field",
        url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=500&h=500&fit=crop",
        category: "technology"
      },
      {
        id: 5,
        title: "Sustainable Agriculture",
        description: "Green farming practices for environmental conservation",
        url: "https://images.unsplash.com/photo-1500382017468-7049ffd0c72c?w=500&h=500&fit=crop",
        category: "sustainable"
      },
      {
        id: 6,
        title: "Crop Monitoring",
        description: "Real-time crop health assessment using IoT",
        url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=500&h=500&fit=crop",
        category: "monitoring"
      },
      {
        id: 7,
        title: "Farm Management",
        description: "Comprehensive farm data visualization and management",
        url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=500&fit=crop",
        category: "management"
      },
      {
        id: 8,
        title: "Precision Agriculture",
        description: "Data-driven farming decisions for optimal results",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=500&fit=crop",
        category: "precision"
      }
    ]
  };
  res.json(galleryData);
});

// Contact/Inquiry endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message, subject } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Mock response - in production, this would save to database and send email
  console.log('Contact inquiry received:', { name, email, subject, message });

  res.json({
    success: true,
    message: 'Your inquiry has been received. We will contact you soon.',
    timestamp: new Date()
  });
});

// Search API - Precision Farming Knowledge Base
app.get('/api/search', (req, res) => {
  const query = req.query.q ? req.query.q.toLowerCase() : '';
  const category = req.query.category || 'all';

  const knowledgeBase = [
    {
      id: 1,
      title: "What is Precision Farming?",
      category: "basics",
      description: "Precision farming, also known as precision agriculture, is a management strategy that uses information technology (IT) and various items of equipment including GPS guidance, control systems, sensors, robotics, drones, and software.",
      content: "Precision farming is an approach that gathers, processes and analyzes temporal, spatial and individual data, and combines it with other information, to support management decisions to improve resource use efficiency, productivity, quality, profitability and sustainability of agricultural production.",
      tags: ["basics", "definition", "agriculture", "technology"]
    },
    {
      id: 2,
      title: "Types of Precision Farming",
      category: "types",
      description: "Major types include Variable Rate Application, Remote Sensing, GPS-Guided Farming, IoT Sensors, and Data Analytics",
      content: "1) Variable Rate Application (VRA) - applying inputs at variable rates 2) Remote Sensing - using drones and satellites 3) GPS-Guided Farming - using GPS for navigation 4) IoT Sensors - deploying sensors 5) Data Analytics - using big data",
      tags: ["types", "vra", "remote-sensing", "gps", "iot"]
    },
    {
      id: 3,
      title: "Benefits of Precision Farming",
      category: "benefits",
      description: "Key benefits include increased yields and reduced input costs",
      content: "• 20-30% increase in crop yields • 30-40% reduction in water usage • 25-35% decrease in costs • Improved soil health • Better resource allocation • Enhanced profitability",
      tags: ["benefits", "yield", "cost-reduction", "sustainability"]
    },
    {
      id: 4,
      title: "IoT Sensors in Farming",
      category: "technology",
      description: "Internet of Things sensors revolutionize farm monitoring capabilities with 24/7 real-time data",
      content: "IoT sensors monitor: • Soil Moisture • Temperature • Humidity • Soil Nutrients • Light Intensity • Weather Data",
      tags: ["iot", "sensors", "monitoring", "technology", "real-time"]
    },
    {
      id: 5,
      title: "Automated Irrigation Systems",
      category: "technology",
      description: "Smart irrigation optimizes water delivery based on real-time sensor data",
      content: "Automated systems use sensor data to determine water requirements, adjust delivery, reduce waste by 30-40%, and integrate with weather forecasts",
      tags: ["irrigation", "water-management", "automation", "efficiency"]
    },
    {
      id: 6,
      title: "Organic Farming Integration",
      category: "sustainable",
      description: "Combining precision tools with organic practices for sustainable agriculture",
      content: "Integration strategies: Use sensors to optimize organic inputs, monitor soil health organically, implement integrated pest management, reduce chemical usage",
      tags: ["organic", "sustainable", "environment", "health"]
    },
    {
      id: 7,
      title: "GPS and Mapping Technology",
      category: "technology",
      description: "Global Positioning System enables accurate field mapping and navigation",
      content: "GPS applications: accurate field mapping, yield mapping, controlled traffic farming, precise input application, historical data collection, integrated with GIS",
      tags: ["gps", "mapping", "navigation", "technology", "data"]
    },
    {
      id: 8,
      title: "Data Analytics and Decision Support",
      category: "analytics",
      description: "Advanced analytics transform raw farm data into actionable insights",
      content: "Data analytics provide: predictive yield models, disease assessment, optimal timing, ROI analysis, pattern recognition, benchmarking",
      tags: ["analytics", "data", "decision-support", "prediction"]
    },
    {
      id: 9,
      title: "Drone Technology in Agriculture",
      category: "technology",
      description: "Unmanned aerial vehicles provide valuable crop monitoring capabilities",
      content: "Drone applications: multispectral imaging, thermal imaging, high-resolution mapping, spray application, crop counting, early detection",
      tags: ["drones", "aerial-imaging", "monitoring", "technology"]
    },
    {
      id: 10,
      title: "Cost-Benefit Analysis",
      category: "economics",
      description: "Understanding the financial impact of precision farming investments with ROI of 2-4 years",
      content: "ROI considerations: Initial investment $50K-150K, Payback 2-4 years, 20-30% additional revenue, $5K-20K annual water savings, $10K-40K fertilizer savings",
      tags: ["economics", "cost-benefit", "roi", "investment"]
    }
  ];

  let results = knowledgeBase;

  // Filter by search query
  if (query.trim()) {
    results = results.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // Filter by category
  if (category !== 'all') {
    results = results.filter(item => item.category === category);
  }

  res.json({
    success: true,
    query: query,
    category: category,
    resultsCount: results.length,
    results: results
  });
});

// Serve built assets (Vite output)
const distPath = path.join(__dirname, 'frontend/dist');
app.use(express.static(distPath));

// SPA fallback - serve built index.html when available
app.get('*', (req, res) => {
  const distIndexPath = path.join(distPath, 'index.html');

  if (fs.existsSync(distIndexPath)) {
    res.sendFile(distIndexPath);
    return;
  }

  res.send(
    '<html><body style="font-family: Arial, sans-serif; padding: 24px;">' +
      '<h1>FarmIO Platform</h1>' +
      '<p>The frontend build was not found. Run <code>npm run build</code> and restart the server, or run the Vite dev server with <code>npm run dev</code>.</p>' +
    '</body></html>'
  );
});

const requestedPort = Number(process.env.PORT) || 5050;
const PORT = requestedPort === 5000 ? 5050 : requestedPort;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

