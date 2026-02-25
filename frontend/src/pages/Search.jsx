import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/Search.css';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  // Precision farming knowledge base
  const knowledgeBase = {
    all: [
      {
        id: 1,
        title: "What is Precision Farming?",
        category: "basics",
        description: "Precision farming, also known as precision agriculture, is a management strategy that uses information technology (IT) and various items of equipment including GPS guidance, control systems, sensors, robotics, drones, and software.",
        content: "Precision farming is an approach that gathers, processes and analyzes temporal, spatial and individual data, and combines it with other information, to support management decisions to improve resource use efficiency, productivity, quality, profitability and sustainability of agricultural production. It enables farmers to make data-driven decisions about crop and soil management.",
        image: "🎯",
        tags: ["basics", "definition", "agriculture", "technology"]
      },
      {
        id: 2,
        title: "Types of Precision Farming",
        category: "types",
        description: "Precision farming encompasses several distinct types and approaches tailored to different farming needs.",
        content: "Major types include: 1) Variable Rate Application (VRA) - applying inputs at variable rates based on field variability, 2) Remote Sensing - using drones and satellites to monitor crop health, 3) GPS-Guided Farming - using GPS for accurate field mapping and navigation, 4) IoT Sensors - deploying soil and weather sensors for real-time monitoring, 5) Data Analytics - using big data to predict yields and optimize management.",
        image: "🌐",
        tags: ["types", "vra", "remote-sensing", "gps", "iot"]
      },
      {
        id: 3,
        title: "Benefits of Precision Farming",
        category: "benefits",
        description: "Precision farming offers numerous advantages for modern agriculture.",
        content: "Key benefits include: • 20-30% increase in crop yields through optimized management • 30-40% reduction in water usage with smart irrigation • 25-35% decrease in fertilizer and pesticide costs • Improved soil health and sustainability • Better resource allocation and reduced environmental impact • Enhanced profitability through reduced input costs • Real-time monitoring and quick problem detection • Scalability for farms of all sizes",
        image: "📈",
        tags: ["benefits", "yield", "cost-reduction", "sustainability"]
      },
      {
        id: 4,
        title: "IoT Sensors in Farming",
        category: "technology",
        description: "Internet of Things (IoT) sensors revolutionize farm monitoring capabilities.",
        content: "IoT sensors monitor: • Soil Moisture: Optimal watering decisions, prevents under/over-watering • Temperature: Crop stress detection and microclimate mapping • Humidity: Disease prevention and frost warnings • Soil Nutrients: pH, nitrogen, phosphorus, potassium levels • Light Intensity: Photosynthesis optimization • Weather Data: Wind speed, rainfall, atmospheric pressure. These sensors enable 24/7 real-time monitoring, reducing guesswork and enabling proactive management decisions.",
        image: "📡",
        tags: ["iot", "sensors", "monitoring", "technology", "real-time"]
      },
      {
        id: 5,
        title: "Automated Irrigation Systems",
        category: "technology",
        description: "Smart irrigation optimizes water delivery based on real-time data.",
        content: "Automated irrigation systems use sensor data to: • Determine precise water requirements for each field zone • Adjust water delivery based on soil moisture levels • Predict water needs based on weather forecasts • Reduce water waste and improve crop health • Lower irrigation costs by 30-40% through efficient application • Integrate with weather stations for weather-based irrigation scheduling • Enable remote monitoring and control via mobile apps",
        image: "💧",
        tags: ["irrigation", "water-management", "automation", "efficiency"]
      },
      {
        id: 6,
        title: "Organic Farming Integration",
        category: "sustainable",
        description: "Combining precision tools with organic practices for sustainable agriculture.",
        content: "Integration strategies: • Use sensors to optimize organic input application (compost, biofertilizers) • Monitor soil health indicators organically • Implement integrated pest management with precision monitoring • Reduce chemical usage through targeted, data-driven applications • Improve soil biology through precision organic amendments • Maintain organic certification while improving efficiency • Track crop health without synthetic chemicals • Balance productivity with environmental stewardship",
        image: "🌱",
        tags: ["organic", "sustainable", "environment", "health"]
      },
      {
        id: 7,
        title: "GPS and Mapping Technology",
        category: "technology",
        description: "Global Positioning System enables accurate field mapping and navigation.",
        content: "GPS applications in farming: • Accurate field boundary mapping for precision management • Yield mapping to identify productivity variations • Controlled traffic farming to reduce soil compaction • Precise application of inputs in variable zones • Historical data collection for trend analysis • Integration with GIS for comprehensive farm planning • Automated guidance systems for efficient fieldwork • Record-keeping for compliance and analysis",
        image: "🗺️",
        tags: ["gps", "mapping", "navigation", "technology", "data"]
      },
      {
        id: 8,
        title: "Data Analytics and Decision Support",
        category: "analytics",
        description: "Advanced analytics transform raw farm data into actionable insights.",
        content: "Data analytics tools provide: • Predictive models for yield forecasting • Disease and pest risk assessment • Optimal planting and harvesting timing • Fertilizer and pesticide recommendations • Soil health trending and improvement strategies • ROI analysis for different management scenarios • Pattern recognition for recurring farm challenges • Benchmarking against similar farms",
        image: "📊",
        tags: ["analytics", "data", "decision-support", "prediction"]
      },
      {
        id: 9,
        title: "Drone Technology in Agriculture",
        category: "technology",
        description: "Unmanned aerial vehicles provide valuable crop monitoring capabilities.",
        content: "Drone applications: • Multispectral imaging to assess crop health and stress • Thermal imaging to detect irrigation problems • High-resolution mapping for precise field analysis • Spray application for targeted pesticide/fertilizer use • Crop counting and stand evaluation • Early disease and pest detection • Real-time field monitoring reducing ground trips • Cost-effective alternative to satellite imagery",
        image: "🚁",
        tags: ["drones", "aerial-imaging", "monitoring", "technology"]
      },
      {
        id: 10,
        title: "Cost-Benefit Analysis",
        category: "economics",
        description: "Understanding the financial impact of precision farming investments.",
        content: "ROI considerations: • Initial investment: $50,000-$150,000 for complete system • Payback period: 2-4 years through input cost savings • Increased yields generate 20-30% additional revenue • Reduced water costs save $5,000-$20,000 annually • Fertilizer savings of $10,000-$40,000 per year • Labor efficiency improvements and time savings • Long-term soil health increases farm value • Scalability reduces per-acre costs significantly",
        image: "💰",
        tags: ["economics", "cost-benefit", "roi", "investment"]
      },
      {
        id: 11,
        title: "Soil Health Monitoring",
        category: "sustainable",
        description: "Real-time assessment of soil quality and biological activity.",
        content: "Soil monitoring parameters: • Physical properties: texture, compaction, structure • Chemical properties: pH, nutrient levels, organic matter • Biological indicators: microbial activity, earthworms • Moisture retention and drainage capacity • Salinity levels in irrigated areas • Temporal variations and improvement trends • Zone-specific management recommendations • Organic matter buildup over time",
        image: "🌍",
        tags: ["soil", "health", "sustainable", "monitoring"]
      },
      {
        id: 12,
        title: "Pest and Disease Management",
        category: "management",
        description: "Integrated approach to pest control using precision monitoring.",
        content: "Precision pest management: • Early detection through regular drone surveillance • Temperature and humidity monitoring for disease prediction • Targeted spraying only in affected zones, reducing chemical use • Scouting optimization using sensor data • Weather-based spray timing for better efficacy • Reduced spraying costs through targeted application • Beneficial insect habitat monitoring • Resistance management through data-driven rotations",
        image: "🐛",
        tags: ["pest-management", "disease", "health", "control"]
      },
      {
        id: 13,
        title: "Weather Integration and Forecasting",
        category: "technology",
        description: "Utilizing weather data for optimized farming decisions.",
        content: "Weather integration: • Real-time weather station data on farm • Integration with regional weather forecasts • Frost warning systems for crop protection • Optimal spraying window identification • Irrigation scheduling based on rainfall predictions • Disease and pest forecasting models • Wind direction for targeted application • Long-range seasonal forecasting for planning",
        image: "⛅",
        tags: ["weather", "forecasting", "climate", "planning"]
      },
      {
        id: 14,
        title: "Farmer Livelihoods and Income",
        category: "social",
        description: "How precision farming improves farmer income and quality of life.",
        content: "Income improvement mechanisms: • 25-35% yield increase through optimization • 30-40% input cost reduction enhancing margins • Premium prices for certified sustainable produce • Reduced labor requirements improving efficiency • Diversification opportunities with data insights • Risk reduction through predictive management • Better market positioning with quality improvements • Long-term farm sustainability ensuring generational success",
        image: "👨‍🌾",
        tags: ["livelihood", "income", "social", "wellbeing"]
      },
      {
        id: 15,
        title: "Implementation Guide",
        category: "implementation",
        description: "Step-by-step approach to implementing precision farming on your farm.",
        content: "Implementation steps: 1) Assessment: Evaluate farm size, crop types, and goals 2) Technology Selection: Choose appropriate sensors and systems 3) Pilot Program: Start with small area to test and learn 4) Infrastructure Setup: Install sensors, irrigation, and connectivity 5) Data Collection: Begin gathering baseline data 6) Analysis and Learning: Process data for insights 7) Decision Making: Adjust management based on findings 8) Scaling Up: Gradually expand system across farm 9) Training: Ensure farmer knowledge of systems 10) Continuous Improvement: Regular updates and optimization",
        image: "🛠️",
        tags: ["implementation", "guide", "steps", "setup"]
      },
      {
        id: 16,
        title: "Precision Viticulture (Vineyards)",
        category: "types",
        description: "Specialized precision farming for grape and wine production.",
        content: "Vineyard-specific applications: • Variability mapping within vineyards for zone management • Canopy monitoring for harvest timing optimization • Soil water status mapping for irrigation • Selective harvesting based on fruit maturity sensors • Vintage prediction using weather and growth models • Disease pressure monitoring (powdery mildew, downy mildew) • Labor optimization through targeted pruning guidance • Premium quality wine through precision maturity management",
        image: "🍇",
        tags: ["viticulture", "specialty", "wine", "precision"]
      },
      {
        id: 17,
        title: "Precision Horticulture",
        category: "types",
        description: "Application of precision farming to fruit, vegetable, and ornamental crops.",
        content: "Horticultural applications: • Greenhouse microclimate control with sensors • Irrigation scheduling for high-value crops • Fertilizer application optimization • Harvest maturity prediction using color/firmness sensors • Pest and disease early warning systems • Post-harvest quality optimization • Reduced chemical residues through targeted applications • Consistent quality and yield for market demands",
        image: "🍎",
        tags: ["horticulture", "specialty", "fruits", "vegetables"]
      },
      {
        id: 18,
        title: "Environmental Impact",
        category: "sustainable",
        description: "Precision farming's contribution to environmental sustainability.",
        content: "Environmental benefits: • Reduced water consumption by 30-40% through smart irrigation • Lower chemical pollution through targeted applications • Improved air quality with reduced machinery use • Enhanced soil carbon sequestration • Reduced greenhouse gas emissions • Better water quality through reduced runoff • Increased biodiversity with optimized habitat management • Carbon footprint reduction of 20-30% per unit of production",
        image: "♻️",
        tags: ["environment", "sustainability", "conservation", "climate"]
      },
      {
        id: 19,
        title: "Market Trends and Future",
        category: "trends",
        description: "Current market trends and future developments in precision agriculture.",
        content: "Market insights: • Global precision agriculture market: $5.5 billion (2023), growing 12-15% annually • AI/Machine learning integration for predictive analytics • Blockchain for supply chain transparency • Autonomous farm equipment advancement • 5G connectivity for real-time data transmission • Climate-smart agriculture emerging as key focus • Consolidation of agritech companies • Increasing farmer adoption rates especially in developing regions",
        image: "📱",
        tags: ["trends", "future", "market", "technology"]
      },
      {
        id: 20,
        title: "Challenges and Solutions",
        category: "challenges",
        description: "Common challenges in implementing precision farming and solutions.",
        content: "Key challenges: • HIGH COST: Solution - Start with essential systems, scale gradually • CONNECTIVITY: Solution - Use LoRaWAN, Satellite connectivity options • EXPERTISE GAP: Solution - Training programs, user-friendly interfaces • DATA MANAGEMENT: Solution - Cloud platforms with analytics tools • FARM SIZE: Solution - Scalable solutions for small/medium farms • CROP TYPES: Solution - Systems adaptable to various crops • DIGITAL DIVIDE: Solution - Government subsidies, cooperative sharing • INTEGRATION: Solution - APIs connecting different systems",
        image: "⚠️",
        tags: ["challenges", "solutions", "obstacles", "adoption"]
      }
    ]
  };

  // Categories
  const categories = [
    { id: 'all', label: 'All Topics', icon: '🔍' },
    { id: 'basics', label: 'Basics', icon: '📚' },
    { id: 'types', label: 'Types', icon: '📋' },
    { id: 'benefits', label: 'Benefits', icon: '⭐' },
    { id: 'technology', label: 'Technology', icon: '🔧' },
    { id: 'sustainable', label: 'Sustainable', icon: '🌿' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'economics', label: 'Economics', icon: '💼' },
    { id: 'management', label: 'Management', icon: '🎯' },
    { id: 'implementation', label: 'Implementation', icon: '🚀' },
    { id: 'trends', label: 'Trends', icon: '📈' },
    { id: 'challenges', label: 'Challenges', icon: '🔍' }
  ];

  // Handle search
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let results = knowledgeBase.all;

      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        results = results.filter(item =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.content.toLowerCase().includes(query) ||
          item.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }

      // Filter by category
      if (selectedCategory !== 'all') {
        results = results.filter(item => item.category === selectedCategory);
      }

      setSearchResults(results);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="search-page">
      {/* Header */}
      <section className="search-header">
        <h1>Precision Farming Knowledge Base</h1>
        <p>Search and explore comprehensive information about precision and organic farming</p>
      </section>

      {/* Search Bar */}
      <section className="search-container">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search precision farming, types, benefits, technology, sustainable practices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-clear" onClick={() => setSearchQuery('')} style={{ display: searchQuery ? 'block' : 'none' }}>
            ✕
          </button>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
              title={cat.label}
            >
              <span className="category-icon">{cat.icon}</span>
              <span className="category-label">{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Results Info */}
      <section className="results-info">
        <div className="info-content">
          <span className="result-count">{searchResults.length} results found</span>
          {searchQuery && <span className="search-term">for "{searchQuery}"</span>}
          {selectedCategory !== 'all' && (
            <span className="category-badge">
              in {categories.find(c => c.id === selectedCategory)?.label}
            </span>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="search-results">
        {isLoading && <div className="loading">Searching...</div>}

        {!isLoading && searchResults.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No Results Found</h3>
            <p>Try different keywords or browse by category</p>
            <button className="reset-btn" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
              Clear Filters
            </button>
          </div>
        )}

        {!isLoading && searchResults.length > 0 && (
          <div className="results-grid">
            {searchResults.map(result => (
              <div key={result.id} className="result-card">
                <div className="result-header">
                  <span className="result-icon">{result.image}</span>
                  <h2 className="result-title">{result.title}</h2>
                </div>

                <p className="result-description">{result.description}</p>

                <div className="result-content">
                  {result.content}
                </div>

                <div className="result-tags">
                  {result.tags.map(tag => (
                    <span
                      key={tag}
                      className="tag"
                      onClick={() => setSearchQuery(tag)}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="result-category">
                  <span className="category-badge-small">{result.category.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Quick Tips */}
      <section className="quick-tips">
        <h3>💡 Search Tips</h3>
        <ul>
          <li>Use specific keywords like "sensors", "irrigation", "organic", "ROI"</li>
          <li>Click on tags to filter related content</li>
          <li>Browse categories to explore topics systematically</li>
          <li>Search covers all aspects from basics to implementation</li>
          <li>Results update in real-time as you type</li>
        </ul>
      </section>
    </div>
  );
}

export default Search;

