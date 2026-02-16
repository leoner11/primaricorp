# Deployment Guide

## Quick Start (Local Development)

```bash
# 1. Install dependencies
pnpm install

# 2. Create .env file
cp .env.example .env
# Edit .env and add your RESEND_API_KEY

# 3. Run development server
pnpm dev

# Visit http://localhost:5173
```

## Production Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel:**
- Zero configuration
- Automatic deployments from Git
- Free SSL certificates
- Excellent performance
- Built-in analytics

**Steps:**

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)

3. Click "New Project"

4. Import your GitHub repository

5. Configure:
   - **Framework Preset**: SvelteKit
   - **Build Command**: `pnpm build` (auto-detected)
   - **Output Directory**: `build` (auto-detected)

6. Add Environment Variable:
   - Key: `RESEND_API_KEY`
   - Value: Your Resend API key

7. Click "Deploy"

**Done!** Your site will be live at `your-project.vercel.app`

### Option 2: Netlify

**Steps:**

1. Push code to GitHub (same as Vercel)

2. Go to [netlify.com](https://netlify.com)

3. Click "New site from Git"

4. Connect your GitHub repository

5. Configure:
   - **Build command**: `pnpm build`
   - **Publish directory**: `build`

6. Add Environment Variable:
   - Go to Site settings > Environment variables
   - Add `RESEND_API_KEY`

7. Deploy

### Option 3: VPS/Server (Node.js)

**Requirements:**
- VPS with Node.js 18+
- nginx (recommended) or Apache
- PM2 for process management

**Steps:**

1. **Build the project locally:**
   ```bash
   pnpm build
   ```

2. **Upload to server:**
   ```bash
   # Upload build folder, package.json, and package-lock.json
   scp -r build package.json package-lock.json user@your-server:/var/www/primaricorp
   ```

3. **SSH into server:**
   ```bash
   ssh user@your-server
   cd /var/www/primaricorp
   ```

4. **Install production dependencies:**
   ```bash
   npm install --production
   ```

5. **Create .env file:**
   ```bash
   nano .env
   # Add: RESEND_API_KEY=your_key_here
   ```

6. **Install PM2:**
   ```bash
   npm install -g pm2
   ```

7. **Start the application:**
   ```bash
   pm2 start build/index.js --name primaricorp
   pm2 save
   pm2 startup
   ```

8. **Configure nginx as reverse proxy:**
   ```nginx
   server {
       listen 80;
       server_name primaricorp.com www.primaricorp.com;

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

9. **Enable site and restart nginx:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/primaricorp /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

10. **Setup SSL with Let's Encrypt:**
    ```bash
    sudo certbot --nginx -d primaricorp.com -d www.primaricorp.com
    ```

## Email Configuration (Resend)

### 1. Sign up for Resend

1. Go to [resend.com](https://resend.com)
2. Create an account
3. Verify your email

### 2. Add and Verify Your Domain

**For production (recommended):**

1. In Resend dashboard, go to "Domains"
2. Click "Add Domain"
3. Enter your domain (e.g., `primaricorp.com`)
4. Add the DNS records they provide to your domain registrar
5. Wait for verification (usually 5-60 minutes)

**DNS Records you'll need to add:**
- SPF record
- DKIM record
- DMARC record (optional but recommended)

### 3. Update Email Sender

Once domain is verified, update `src/routes/api/contact/+server.ts`:

```typescript
from: 'contact@primaricorp.com', // Use your verified domain
```

### 4. Get API Key

1. In Resend dashboard, go to "API Keys"
2. Click "Create API Key"
3. Copy the key
4. Add to your deployment environment variables

**For testing (no domain needed):**
- Use `onboarding@resend.dev` as sender
- Limited to sending to your own email
- Perfect for development/testing

## Custom Domain Setup

### Vercel

1. Go to your project settings
2. Click "Domains"
3. Add your domain (e.g., `primaricorp.com`)
4. Update your DNS:
   - **A Record**: Point to Vercel IP
   - Or **CNAME**: Point to `cname.vercel-dns.com`
5. Vercel handles SSL automatically

### Netlify

1. Go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain
4. Update DNS as instructed
5. Netlify handles SSL automatically

## Environment Variables

**Required:**
- `RESEND_API_KEY` - Your Resend API key

**Optional (for future):**
- `PUBLIC_GOOGLE_ANALYTICS_ID` - If adding analytics
- `DATABASE_URL` - If adding a database later

## Pre-Deployment Checklist

- [ ] Update contact email in `src/routes/api/contact/+server.ts`
- [ ] Update WhatsApp number in `src/lib/components/WhatsAppFloat.svelte`
- [ ] Test contact form locally
- [ ] Verify all images are optimized
- [ ] Update meta descriptions for SEO
- [ ] Configure Resend with your domain
- [ ] Add RESEND_API_KEY to environment variables
- [ ] Test build: `pnpm build`
- [ ] Test production preview: `pnpm preview`

## Post-Deployment

### 1. Test Everything

- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Test WhatsApp button
- [ ] Verify all images load
- [ ] Check all product category pages

### 2. SEO Setup

- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Create sitemap.xml (optional)
- [ ] Create robots.txt (optional)

### 3. Analytics (Optional)

- [ ] Add Google Analytics
- [ ] Add Facebook Pixel (if using ads)
- [ ] Set up conversion tracking

### 4. Performance

- [ ] Test with Google PageSpeed Insights
- [ ] Check GTmetrix score
- [ ] Verify Core Web Vitals

## Troubleshooting

### Contact Form Not Working

1. **Check API key:**
   ```bash
   # Verify environment variable is set
   echo $RESEND_API_KEY
   ```

2. **Check email format:**
   - Make sure sender email matches verified domain
   - Or use `onboarding@resend.dev` for testing

3. **Check server logs:**
   ```bash
   pm2 logs primaricorp
   ```

### Build Failures

1. **Clear cache:**
   ```bash
   rm -rf .svelte-kit node_modules
   pnpm install
   ```

2. **Check Node version:**
   ```bash
   node --version  # Should be 18+
   ```

### Images Not Loading

1. Verify images are in `static/` folder
2. Check file names match exactly (case-sensitive)
3. Verify file formats are supported (.jpg, .png, .webp)

## Performance Optimization

### Image Optimization

Convert images to WebP:
```bash
# Install sharp
npm install -g sharp-cli

# Convert images
for file in static/*.jpg; do
  sharp -i "$file" -o "${file%.jpg}.webp"
done
```

### Enable Compression

For nginx:
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

## Monitoring

### Setup Uptime Monitoring

Free options:
- UptimeRobot
- StatusCake
- Pingdom (free tier)

### Error Tracking (Optional)

- Sentry
- LogRocket
- Rollbar

## Support

If you encounter issues:
1. Check this guide first
2. Review README.md
3. Check build logs
4. Contact: admin@primaricorp.com

---

**Ready to deploy? Choose your platform and follow the steps above!**
