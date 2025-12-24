# Deployment Guide

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment Options

### 1. Vercel (Recommended)

**Steps:**
1. Push code to GitHub
2. Import project to Vercel
3. Vercel auto-detects Astro
4. Deploy! ✨

**Build Settings:**
- Framework: Astro
- Build Command: `npm run build`
- Output Directory: `dist`

**Vercel CLI:**
```bash
npm i -g vercel
vercel
```

### 2. Netlify

**Steps:**
1. Push code to GitHub
2. Import to Netlify
3. Configure build settings
4. Deploy!

**Build Settings:**
- Build Command: `npm run build`
- Publish Directory: `dist`

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### 3. GitHub Pages

**Steps:**
1. Add GitHub Actions workflow
2. Push to `main` branch
3. Enable GitHub Pages

**`.github/workflows/deploy.yml`:**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Cloudflare Pages

**Steps:**
1. Push to GitHub
2. Connect to Cloudflare Pages
3. Configure build
4. Deploy!

**Build Settings:**
- Build Command: `npm run build`
- Build Output Directory: `dist`

### 5. Static Hosting (AWS S3, etc.)

```bash
# Build
npm run build

# Upload dist/ folder to:
# - AWS S3 + CloudFront
# - Google Cloud Storage
# - Azure Blob Storage
# - Any static hosting
```

## 🔧 Environment Variables

If you add environment variables later:

```env
PUBLIC_API_URL=https://api.example.com
PUBLIC_SITE_URL=https://deposit.com.tr
```

**Note:** Astro requires `PUBLIC_` prefix for client-side variables.

## ✅ Pre-Deployment Checklist

- [ ] Update meta descriptions and titles
- [ ] Test all pages work correctly
- [ ] Verify contact form functionality
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Optimize images (if local images added)
- [ ] Set up analytics (optional)
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Test production build locally (`npm run preview`)

## 🌐 Custom Domain Setup

### Vercel/Netlify:
1. Go to domain settings
2. Add custom domain: `deposit.com.tr`
3. Update DNS records (provided by platform)
4. SSL auto-configured ✅

### Cloudflare Pages:
1. Add custom domain in Pages settings
2. DNS auto-configured if domain in Cloudflare
3. SSL auto-enabled ✅

## 📊 Performance Monitoring

### Free Options:
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://www.webpagetest.org/

### Analytics:
```bash
# Add analytics package
npm install @astrojs/partytown

# Or use simple solutions:
# - Google Analytics
# - Plausible (privacy-friendly)
# - Umami (self-hosted)
```

## 🔒 Security Headers

Add these to your hosting platform:

```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## 📝 Post-Deployment

1. **Submit to Search Engines:**
   - Google Search Console
   - Bing Webmaster Tools

2. **Create sitemap.xml** (if needed):
```bash
npm install @astrojs/sitemap
```

3. **Add robots.txt** to `public/`:
```txt
User-agent: *
Allow: /
Sitemap: https://deposit.com.tr/sitemap.xml
```

## 🆘 Troubleshooting

**Build fails:**
- Check Node version (requires 18+)
- Delete `node_modules` and reinstall
- Check for TypeScript errors

**Assets not loading:**
- Verify asset paths are relative
- Check `astro.config.mjs` settings

**Styles missing:**
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.mjs` content paths

## 📞 Support

For deployment issues:
- Astro Docs: https://docs.astro.build/
- Astro Discord: https://astro.build/chat

---

**Recommended**: Deploy to **Vercel** for the easiest setup and best performance.
