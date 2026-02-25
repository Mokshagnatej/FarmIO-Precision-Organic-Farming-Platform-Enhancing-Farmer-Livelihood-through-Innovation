# 🚀 WEBSITE ACCESS GUIDE

## ✅ IMMEDIATE ACCESS - Standalone Version

**The website is NOW OPEN in your browser!**

I've opened `STANDALONE.html` which shows the complete FarmIO website with:
- ✓ All pages (Home, About, Technology, Dashboard, Gallery, Contact)
- ✓ Beautiful design and animations
- ✓ Key metrics dashboard
- ✓ Smooth navigation
- ✓ Works without any server!

---

## 🔥 For Full Interactive Features

To run the complete React version with full interactivity:

### Option 1: Using Terminal (EASIEST)

1. Open **Terminal** app on your Mac
2. Paste this command and press Enter:
   ```bash
   cd /Users/honeyreddy/IdeaProjects/Csp-project && npm run dev
   ```
3. Wait 5-10 seconds
4. Look for a line that says: `➜  Local:   http://localhost:5173/`
5. Open that URL in your browser

### Option 2: Using IntelliJ IDEA

1. Open your project in IntelliJ IDEA
2. Open the file `package.json`
3. Find the line: `"dev": "vite --host",`
4. Click the green ▶️ play button next to it
5. IntelliJ will start the server and show the URL

### Option 3: Direct Command

Open Terminal and run:
```bash
cd /Users/honeyreddy/IdeaProjects/Csp-project
npx vite --host
```

---

## 📂 Available HTML Files

You can open these files directly in your browser (double-click):

1. **STANDALONE.html** - Full website (no server needed) ⭐ RECOMMENDED
2. **LAUNCH.html** - Server launcher/checker
3. **frontend/public/landing.html** - Landing page

---

## 🌐 Expected URLs

Once the dev server is running:
- http://localhost:5173 (primary)
- http://localhost:5174 (if 5173 is busy)
- http://localhost:5175 (if 5174 is busy)

---

## ⚡ Quick Commands Reference

```bash
# Navigate to project
cd /Users/honeyreddy/IdeaProjects/Csp-project

# Start development server
npm run dev

# Alternative (if npm run dev doesn't work)
npx vite --host

# Kill existing servers
lsof -ti:5173 | xargs kill -9

# Check if server is running
lsof -i :5173
```

---

## 🎯 CURRENT STATUS

✅ **Standalone website is WORKING and OPEN in your browser**
- File: `/Users/honeyreddy/IdeaProjects/Csp-project/STANDALONE.html`
- Features: All pages, navigation, dashboard, animations
- No server required!

📌 For the interactive React version with real-time data, follow "Option 1" above.

---

## 📞 Troubleshooting

**If terminal commands don't work:**
1. Make sure you're in the correct folder
2. Check that Node.js is installed: Open Terminal and type `node --version`
3. If Node.js is not installed, download from: https://nodejs.org/

**If the standalone page doesn't look right:**
- Try refreshing the browser (Cmd + R)
- Try a different browser (Chrome, Firefox, Safari)

---

**🎉 Your FarmIO website is ready to use!**

