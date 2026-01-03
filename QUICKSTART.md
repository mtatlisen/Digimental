# Carbon Agent Website - Quick Start Guide

## 🎯 What Was Converted

Successfully converted **8 complete HTML pages** into a modern Astro website:

1. ✅ Homepage (landing page)
2. ✅ Platform overview
3. ✅ Pricing page with tiers
4. ✅ Customer references & testimonials
5. ✅ Blog listing
6. ✅ About/Company page
7. ✅ Contact page with form

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
# Visit http://localhost:4321
```

### Build
```bash
npm run build
# Output in /dist folder
```

### Preview Production Build
```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.astro    # Navigation header (used on all pages)
│   └── Footer.astro    # Site footer (used on all pages)
├── layouts/            # Page layouts
│   └── Layout.astro    # Base HTML layout with meta tags
└── pages/              # All website pages (auto-routing)
    ├── index.astro     # Homepage (/)
    ├── about.astro     # About page (/about)
    ├── blog.astro      # Blog listing (/blog)
    ├── contact.astro   # Contact form (/contact)
    ├── customers.astro # Customer stories (/customers)
    ├── platform.astro  # Platform features (/platform)
    └── pricing.astro   # Pricing tiers (/pricing)
```

## 🎨 Styling

- **Tailwind CSS** with custom configuration
- **Dark mode** support (class-based)
- **Google Fonts**: Inter & Noto Sans
- **Icons**: Material Symbols Outlined

### Brand Colors
```javascript
primary: '#0bda95'
background-light: '#f5f8f7'
background-dark: '#10221c'
surface-light: '#ffffff'
surface-dark: '#1a362e'
```

## 📝 Page Details

### Home (`/`)
- Hero with animated badge
- Feature grid (3 cards)
- Social proof logos
- Call-to-action sections

### Platform (`/platform`)
- Feature showcase (6 cards)
- Background hero image
- Capabilities overview

### Pricing (`/pricing`)
- 3 pricing tiers
- Billing toggle (Monthly/Annual)
- FAQ accordion

### Customers (`/customers`)
- Stats cards
- Testimonial carousel
- Logo grid
- Case study links

### Blog (`/blog`)
- Featured article
- Article grid (3 posts)
- Newsletter signup

### About (`/about`)
- Mission statement
- Value propositions (3 cards)
- Team/company info

### Contact (`/contact`)
- Contact form
- Information cards
- Map image
- FAQ section

## ✨ Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark mode ready
- ✅ SEO-friendly HTML structure
- ✅ Fast static site generation
- ✅ Clean, semantic markup
- ✅ Accessible navigation
- ✅ Professional business design
- ✅ Smooth transitions & hover effects

## 🔧 Customization

### Adding a New Page
1. Create `src/pages/newpage.astro`
2. Import Layout: `import Layout from '../layouts/Layout.astro'`
3. Import components: `import Header from '../components/Header.astro'`
4. Build your page content
5. Auto-routes to `/newpage`

### Modifying Colors
Edit `tailwind.config.mjs`:
```javascript
colors: {
  primary: '#0bda95', // Change this
  // ... other colors
}
```

### Updating Navigation
Edit `src/components/Header.astro` to add/remove menu items.

## 📦 Build Output

- **Location**: `/dist` folder
- **Format**: Static HTML files
- **Deployment**: Deploy dist folder to any static host (Netlify, Vercel, GitHub Pages, etc.)

## 🌐 Deployment Options

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### Vercel
```bash
vercel
# Automatically detects Astro
```

### GitHub Pages
```yaml
# .github/workflows/deploy.yml
- run: npm run build
- uses: actions/upload-pages-artifact@v2
  with:
    path: ./dist
```

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Material Symbols](https://fonts.google.com/icons)

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf dist node_modules .astro
npm install
npm run build
```

### Dev Server Issues
```bash
# Kill any running processes on port 4321
lsof -ti:4321 | xargs kill -9
npm run dev
```

## 📊 Performance

- ⚡ Fast build times (~1 second)
- 🎯 7 static pages generated
- 📦 Optimized CSS output
- 🖼️ External images (Google Cloud)

## ✅ Quality Checklist

- [x] All pages build successfully
- [x] No TypeScript errors
- [x] Responsive design
- [x] Dark mode support
- [x] Accessible HTML
- [x] SEO meta tags
- [x] Fast load times
- [x] Clean code structure

---

**Need Help?** Check `CONVERSION_SUMMARY.md` for detailed information about the conversion process and next steps.
