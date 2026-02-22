#!/bin/bash

# FarmIO Server Startup Script

echo "🌾 Starting FarmIO Server..."
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

# Kill any existing server on port 5000
lsof -ti:5000 | xargs kill -9 2>/dev/null

# Wait a moment
sleep 2

# Start the server
echo "✅ Starting Node.js server on port 5000..."
node server.js

echo ""
echo "🚀 Server running at: http://localhost:5000"
echo "📊 Press Ctrl+C to stop the server"

