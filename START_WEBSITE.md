# 🌱 FarmIO - Quick Start Guide

## ✅ Step-by-Step Instructions to Run the Website

### Method 1: Using Terminal (Recommended)

1. **Open Terminal** in the project folder:
   ```bash
   cd /Users/honeyreddy/IdeaProjects/Csp-project
   ```

2. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and go to the URL shown in the terminal output (usually):
   - **http://localhost:5173** (default)
   - or **http://localhost:5174** (if 5173 is busy)
   - or check the terminal for the actual URL

### Method 2: Using the Launcher

1. **Start the server first** (see Method 1, step 3)
2. **Open the file**: `LAUNCH.html` in your browser
3. The launcher will automatically detect the server and provide a button to open the website

---

## 🔧 Troubleshooting

### Issue: "Page not opening" or "Blank page"

**Solution:**
```bash
# Stop any running servers (press Ctrl+C in terminal)
# Clean ports
lsof -ti:5173 | xargs kill -9
lsof -ti:5174 | xargs kill -9

# Restart the server
npm run dev
```

### Issue: "Port already in use"

**Solution:**
- Vite will automatically use the next available port
- Check the terminal output for the actual URL
- Or manually specify a port in `vite.config.js`

### Issue: Dependencies not found

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📋 Available Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm start          # Start backend server
```

---

## 🌐 URLs

Once the server is running:

- **Development**: http://localhost:5173
- **Alternative ports**: 5174, 5175 (auto-assigned if 5173 is busy)

---

## 📞 Still Having Issues?

1. Make sure Node.js is installed: `node --version`
2. Make sure npm is installed: `npm --version`
3. Check that you're in the correct directory
4. Look for error messages in the terminal
5. Open `LAUNCH.html` for automatic server detection

---

## 🎯 Quick Commands Cheat Sheet

```bash
# Navigate to project
cd /Users/honeyreddy/IdeaProjects/Csp-project

# Start everything
npm run dev

# Open in browser
# → Go to http://localhost:5173
```

**That's it! Your FarmIO platform should now be running! 🎉**

