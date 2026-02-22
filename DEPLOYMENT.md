# FarmIO Deployment Guide

## Local Development Setup

### Prerequisites
- Node.js v16+ installed
- npm or yarn package manager
- Git (optional)

### Initial Setup

```bash
# Navigate to project directory
cd /Users/honeyreddy/IdeaProjects/Csp-project

# Install dependencies (if not already done)
npm install

# Build the frontend
npm run build

# Start the development server
npm start
```

Access the website at: **http://localhost:5000**

## Production Deployment

### Option 1: Deploy to Heroku (Recommended for Beginners)

1. **Create Heroku Account:**
   - Visit https://www.heroku.com
   - Sign up for a free account

2. **Install Heroku CLI:**
   ```bash
   brew tap heroku/brew && brew install heroku
   ```

3. **Login to Heroku:**
   ```bash
   heroku login
   ```

4. **Create Heroku App:**
   ```bash
   heroku create farmio-project
   ```

5. **Add Procfile** (already created):
   ```
   web: npm start
   ```

6. **Deploy:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push heroku main
   ```

7. **Open Your App:**
   ```bash
   heroku open
   ```

### Option 2: Deploy to DigitalOcean (More Control)

1. **Create DigitalOcean Droplet:**
   - Visit https://www.digitalocean.com
   - Create a new Ubuntu 22.04 droplet
   - SSH into your droplet

2. **Setup Node Environment:**
   ```bash
   sudo apt update
   sudo apt install -y nodejs npm nginx git
   ```

3. **Clone Your Repository:**
   ```bash
   git clone <your-repo-url>
   cd csp-project
   npm install
   npm run build
   ```

4. **Setup PM2 for Process Management:**
   ```bash
   sudo npm install -g pm2
   pm2 start server.js --name "farmio"
   pm2 startup
   pm2 save
   ```

5. **Setup Nginx as Reverse Proxy:**
   Create `/etc/nginx/sites-available/farmio`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Enable the Site:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/farmio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **Setup SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

### Option 3: Deploy to AWS (EC2)

1. **Launch EC2 Instance:**
   - Choose Ubuntu 22.04 LTS AMI
   - t2.micro (free tier eligible)
   - Open ports 22, 80, 443 in security group

2. **Connect via SSH:**
   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

3. **Install Dependencies:**
   ```bash
   sudo apt update
   sudo apt install -y nodejs npm nginx git
   ```

4. **Deploy Application:**
   ```bash
   cd /home/ubuntu
   git clone <your-repo>
   cd csp-project
   npm install
   npm run build
   ```

5. **Configure Nginx and PM2** (same as DigitalOcean steps 4-7)

### Option 4: Deploy to Netlify (Frontend Only)

Perfect if you want to decouple frontend and backend:

1. **Build Frontend:**
   ```bash
   npm run build
   ```

2. **Connect to Netlify:**
   - Drag and drop `frontend/dist` folder to Netlify
   - Or connect GitHub repository

3. **Update API_URL:**
   Set environment variable:
   ```
   VITE_API_URL=https://your-api-domain.com
   ```

4. **Deploy Backend Separately** (using one of the methods above)

## Environment Configuration

### Development (.env)
```
PORT=5000
NODE_ENV=development
VITE_API_URL=http://localhost:5000
```

### Production (.env.production)
```
PORT=5000
NODE_ENV=production
VITE_API_URL=https://yourdomain.com
```

## Domain Configuration

### Add Custom Domain

**Heroku:**
```bash
heroku domains:add yourdomain.com
```

**DigitalOcean/AWS:**
- Update your domain's DNS records
- Point A record to your server's IP address

**Netlify:**
- Domain management in Netlify dashboard

## Database Integration (Optional)

To add persistent data storage:

### MongoDB Connection
```bash
npm install mongoose
```

Update `server.js` to connect to MongoDB:
```javascript
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

### PostgreSQL Connection
```bash
npm install pg
```

## Performance Optimization

### Enable Compression
```javascript
// In server.js
const compression = require('compression');
app.use(compression());
```

### Cache Static Assets
```javascript
app.use(express.static(path.join(__dirname, 'frontend/dist'), {
  maxAge: '1d'
}));
```

### Database Indexing
Create indexes on frequently queried fields for faster queries.

## Monitoring & Logging

### Application Monitoring
```bash
npm install pm2-logrotate
pm2 install pm2-logrotate
```

### Log Files
- PM2 logs: `~/.pm2/logs/`
- Nginx logs: `/var/log/nginx/`

### Health Check Endpoint
Add to `server.js`:
```javascript
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});
```

## Backup & Recovery

### Backup Database
```bash
# MongoDB
mongodump --uri="<connection-string>" --out=./backup

# PostgreSQL
pg_dump -U username -h localhost dbname > backup.sql
```

### Backup Application
```bash
tar -czf farmio-backup.tar.gz /path/to/csp-project
```

## Security Best Practices

1. **Use HTTPS:**
   - Always use SSL/TLS certificates
   - Automatic renewal with Let's Encrypt

2. **Environment Variables:**
   - Never commit `.env` to git
   - Use `.env.example` as reference

3. **Rate Limiting:**
   ```bash
   npm install express-rate-limit
   ```

4. **Input Validation:**
   ```bash
   npm install joi
   ```

5. **CORS Configuration:**
   Update `server.js`:
   ```javascript
   app.use(cors({
     origin: process.env.ALLOWED_ORIGINS?.split(',')
   }));
   ```

## Maintenance

### Regular Updates
```bash
npm update
npm audit fix
```

### Monitoring Uptime
- Set up monitoring service (StatusPage, UptimeRobot)
- Configure alerts for downtime

### Database Maintenance
- Regular backups
- Index optimization
- Query performance monitoring

## Cost Estimation

| Platform | Free Tier | Monthly Cost |
|----------|-----------|-------------|
| Heroku | 550 hours | $7+ |
| DigitalOcean | - | $6+ (droplet) |
| AWS | 1 year free | $10+ (EC2 t2.micro) |
| Netlify | Yes | $0-19 |
| MongoDB Atlas | 512MB | $0-57+ |

## Troubleshooting

### Port Already in Use
```bash
lsof -ti:5000 | xargs kill -9
```

### Deployment Failing
```bash
# Check logs
pm2 logs

# Rebuild and restart
npm run build
pm2 restart all
```

### API Connection Issues
- Verify CORS settings
- Check environment variables
- Test with: `curl http://localhost:5000/api/project`

## Rollback Procedure

### With Git
```bash
git log --oneline
git reset --hard <commit-hash>
git push --force
```

### With PM2
```bash
pm2 save
pm2 restart all
```

## Support & Resources

- Heroku: https://devcenter.heroku.com/
- DigitalOcean: https://www.digitalocean.com/docs/
- AWS: https://aws.amazon.com/documentation/
- Node.js: https://nodejs.org/docs/

---

**Deployment Complete!** Your FarmIO platform is now live! 🌍✅

