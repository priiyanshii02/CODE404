# 🚀 Deployment Guide

This guide will help you deploy CASE 404: The Vanishing Prototype to various platforms.

## Table of Contents
- [Vercel (Recommended)](#vercel-recommended)
- [Netlify](#netlify)
- [GitHub Pages](#github-pages)
- [Docker](#docker)
- [Self-Hosted](#self-hosted)

---

## Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and offers the best integration.

### Method 1: GitHub Integration (Automatic)

1. **Visit [vercel.com](https://vercel.com)**
2. **Sign in** with your GitHub account
3. **Click "Add New Project"**
4. **Import** your repository: `priiyanshii02/CODE404`
5. **Configure:**
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. **Click "Deploy"**

That's it! Vercel will automatically:
- Deploy your site
- Assign a URL (e.g., `code404.vercel.app`)
- Set up automatic deployments on push
- Enable preview deployments for PRs

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd CODE404
vercel

# Deploy to production
vercel --prod
```

### Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

---

## Netlify

### Method 1: Git Integration

1. **Visit [netlify.com](https://netlify.com)**
2. **Click "New site from Git"**
3. **Connect** to GitHub and select your repository
4. **Configure:**
   ```
   Build command: npm run build
   Publish directory: .next
   ```
5. **Deploy**

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### netlify.toml Configuration

Create a `netlify.toml` file:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## GitHub Pages

GitHub Pages doesn't natively support Next.js server-side features, but you can export as a static site.

### 1. Update next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/CODE404',
}

module.exports = nextConfig
```

### 2. Build and Deploy

```bash
# Build static export
npm run build

# The static files will be in 'out' directory
```

### 3. Deploy with GitHub Actions

Create `.github/workflows/pages.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v1
        with:
          path: ./out
  
  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v1
```

---

## Docker

### Dockerfile

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
```

### Build and Run

```bash
# Build image
docker build -t case404 .

# Run container
docker run -p 3000:3000 case404
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

---

## Self-Hosted

### Prerequisites
- Node.js 18+
- PM2 (process manager)
- Nginx (reverse proxy)

### 1. Build the Application

```bash
npm install
npm run build
```

### 2. Install PM2

```bash
npm install -g pm2
```

### 3. Create PM2 Ecosystem File

Create `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [{
    name: 'case404',
    script: 'npm',
    args: 'start',
    cwd: '/path/to/CODE404',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

### 4. Start with PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 5. Configure Nginx

Create `/etc/nginx/sites-available/case404`:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/case404 /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 6. SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## Environment Variables

Before deploying, set up environment variables:

### Vercel
1. Go to Project Settings → Environment Variables
2. Add variables from `.env.example`

### Netlify
1. Go to Site Settings → Environment Variables
2. Add variables

### Self-Hosted
Create `.env.production.local`:
```bash
cp .env.example .env.production.local
# Edit with production values
```

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All images display
- [ ] Registration links work
- [ ] Mobile responsive
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Analytics tracking (if configured)
- [ ] SEO meta tags correct
- [ ] Performance optimized

---

## Monitoring

### Vercel
- Built-in analytics dashboard
- Real-time logs
- Performance insights

### Self-Hosted
Use PM2 monitoring:
```bash
pm2 monit
pm2 logs case404
```

---

## Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Change port in package.json
"start": "next start -p 3001"
```

### Image Loading Issues
- Ensure `next.config.js` has correct image domains
- Check if images exist in `public/` directory

---

## Need Help?

- 📖 [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- 🔧 [Vercel Documentation](https://vercel.com/docs)
- 📧 Email: victors@example.com

---

**Happy Deploying! 🚀**
