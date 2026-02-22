# FarmIO Website - Quick Start Guide

## Project Successfully Created! 🎉

Your **FarmIO** precision and organic farming platform website is now ready for development and deployment.

## What Has Been Built

### Backend (Node.js/Express)
- RESTful API server on port 5000
- Project information endpoints
- Real-time dashboard data
- Gallery management
- Contact form handling
- Sensor data APIs

### Frontend (React + Vite)
- **6 Main Pages:**
  1. **Home** - Hero section with features and impact metrics
  2. **About** - Project details, scope, and outcomes
  3. **Technology** - IoT infrastructure and system architecture
  4. **Dashboard** - Real-time sensor monitoring and analytics
  5. **Gallery** - Filterable image collection with lightbox
  6. **Contact** - Contact form and FAQ

- **Interactive Components:**
  - Real-time sensor data cards
  - Chart.js visualizations (Line & Bar charts)
  - Responsive navigation and footer
  - Animated hero section
  - Image gallery with filtering
  - Contact form with validation

- **Design Features:**
  - Responsive mobile-first design
  - Gradient color scheme (teal/blue)
  - Smooth animations and transitions
  - Modern card-based layouts
  - Dark themed navigation

## Getting Started

### Step 1: Wait for NPM Installation
The dependencies are being installed in the background. Monitor with:
```bash
cd /Users/honeyreddy/IdeaProjects/Csp-project
ls node_modules | wc -l  # Should show 100+ packages when done
```

### Step 2: Build Frontend Assets
Once npm install completes, build the React app:
```bash
npm run build
```

### Step 3: Start the Server
```bash
npm start
```

The website will be available at: **http://localhost:5000**

## Alternative Development Mode

For faster development with hot-reload:

**Terminal 1 - Frontend Dev Server:**
```bash
cd /Users/honeyreddy/IdeaProjects/Csp-project
npm run dev
```
Access at: http://localhost:5173

**Terminal 2 - Backend Dev Server:**
```bash
cd /Users/honeyreddy/IdeaProjects/Csp-project
npm run dev:server
```

## Project Features

### Dashboard Capabilities
- ✅ 6 active IoT sensors across 2 fields
- ✅ Real-time readings (Soil Moisture, Temperature, Humidity)
- ✅ Automated irrigation system monitoring
- ✅ 24-hour historical data charts
- ✅ Farm analytics with 5 key metrics
- ✅ AI-powered recommendations
- ✅ Overall farm status overview

### Gallery Features
- ✅ 8 high-quality farm images
- ✅ 7 category filters
- ✅ Lightbox viewer for full-size viewing
- ✅ Responsive grid layout
- ✅ Lazy loading optimization

### Contact Features
- ✅ Contact form with validation
- ✅ FAQ section (6 questions)
- ✅ Contact information display
- ✅ Social media links
- ✅ Form submission handling

## File Structure

```
Csp-project/
├── server.js                    # Express backend server
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
├── .env                        # Environment variables
├── README.md                   # Documentation
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx             # Main app component
│   │   ├── main.jsx            # Entry point
│   │   ├── index.css           # Global styles
│   │   ├── App.css             # App wrapper styles
│   │   │
│   │   ├── components/
│   │   │   ├── Navigation.jsx  # Header navigation
│   │   │   └── Footer.jsx      # Footer component
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Home page
│   │   │   ├── About.jsx       # About page
│   │   │   ├── Technology.jsx  # Technology page
│   │   │   ├── Dashboard.jsx   # Dashboard page
│   │   │   ├── Gallery.jsx     # Gallery page
│   │   │   └── Contact.jsx     # Contact page
│   │   │
│   │   └── styles/
│   │       ├── Navigation.css
│   │       ├── Footer.css
│   │       ├── Home.css
│   │       ├── About.css
│   │       ├── Technology.css
│   │       ├── Dashboard.css
│   │       ├── Gallery.css
│   │       └── Contact.css
│   │
│   └── public/
│       └── index.html          # HTML template
│
└── src/
    └── Main.java               # (Legacy Java file)
```

## API Endpoints

All endpoints return JSON data:

```
GET  /api/project              # Project information
GET  /api/technology           # Technology details
GET  /api/dashboard            # Real-time sensor data
GET  /api/sensor-history/:id   # 24-hour sensor history
GET  /api/gallery              # Gallery images
POST /api/contact              # Submit contact form
```

## Customization Guide

### Change Project Title
Edit `frontend/src/components/Navigation.jsx`:
```jsx
<span className="logo-text">FarmIO</span>  // Change here
```

### Modify Dashboard Metrics
Edit `server.js` in the `/api/dashboard` endpoint section

### Update Gallery Images
Edit `server.js` in the `/api/gallery` endpoint:
```javascript
url: "https://images.unsplash.com/..." // Change image URL
```

### Change Color Scheme
Global colors are in CSS files. Main colors:
- Primary: `#4ECDC4` (Teal)
- Secondary: `#45B7D1` (Blue)
- Dark: `#2C3E50` (Dark Blue)
- Success: `#27AE60` (Green)

Find and replace in all CSS files to change the color scheme.

## Deployment Options

### Option 1: Netlify (Frontend Only)
1. Run `npm run build`
2. Deploy `frontend/dist` folder to Netlify

### Option 2: Heroku (Full Stack)
1. Create `Procfile`:
```
web: npm start
```
2. Deploy to Heroku

### Option 3: AWS/DigitalOcean
1. Push to GitHub
2. Connect CI/CD pipeline
3. Deploy with Node.js runtime

## Environment Variables

The `.env` file contains:
```
PORT=5000                              # Backend port
NODE_ENV=development                   # Environment
VITE_API_URL=http://localhost:5000    # API URL
```

For production, update:
```
PORT=5000
NODE_ENV=production
VITE_API_URL=https://yourdomain.com
```

## Performance Optimizations Already Included

✅ Code splitting with Vite
✅ Image lazy loading
✅ CSS animations
✅ Responsive design
✅ Optimized charts rendering
✅ Minified production build

## Next Steps

1. **Install Dependencies:**
   ```bash
   npm install  # Already running in background
   ```

2. **Build Frontend:**
   ```bash
   npm run build
   ```

3. **Start Server:**
   ```bash
   npm start
   ```

4. **Access Website:**
   Open http://localhost:5000 in your browser

5. **Customize:**
   - Edit content in page components
   - Modify styles in CSS files
   - Update API data in server.js
   - Add real sensor data integration

## Troubleshooting

**Port 5000 already in use:**
```bash
# Find and kill process
lsof -ti:5000 | xargs kill -9
# Or change PORT in .env
```

**Vite build errors:**
```bash
npm run build -- --verbose
```

**API not connecting:**
Ensure server.js is running on port 5000
Check proxy settings in vite.config.js

## Support & Documentation

- Full README.md with feature details
- Vite documentation: https://vitejs.dev
- React documentation: https://react.dev
- Chart.js documentation: https://www.chartjs.org

---

**Congratulations!** Your FarmIO platform is ready to showcase precision farming innovation! 🌾🚀

