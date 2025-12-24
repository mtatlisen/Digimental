# ⚠️ Optional Enhancements

## Background Video (Optional)

The original HTML referenced a hero video (`hero-video.mp4`) that wasn't included. 

### Option 1: Add Video Background (Recommended for production)
1. Add your video file to `/workspace/public/hero-video.mp4`
2. Update `src/pages/index.astro` to uncomment the video section

```astro
<!-- Uncomment this in src/pages/index.astro -->
<video 
    autoplay 
    muted 
    loop 
    playsinline
    class="absolute w-full h-full object-cover"
>
    <source src="/hero-video.mp4" type="video/mp4" />
</video>
```

### Option 2: Use Gradient Background (Current)
The site currently uses gradient backgrounds which:
- ✅ Load instantly (no video download)
- ✅ Work everywhere
- ✅ Look modern and professional
- ✅ Better performance

### Option 3: Add Image Background
Place an image in `public/hero-bg.jpg` and update:

```astro
<div class="absolute inset-0 z-0">
    <img 
        src="/hero-bg.jpg" 
        alt="Hero background" 
        class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />
</div>
```

---

## Other Potential Enhancements

### 1. Add Product Details Pages
Create individual pages for each product:

```astro
// src/pages/products/[id].astro
---
import Layout from '../../layouts/Layout.astro';
import { products } from '../../data/products';

export function getStaticPaths() {
  return products.map(product => ({
    params: { id: product.id },
    props: { product },
  }));
}

const { product } = Astro.props;
---

<Layout title={product.name}>
  <div class="pt-24 px-6">
    <div class="max-w-4xl mx-auto">
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      {/* Add more details */}
    </div>
  </div>
</Layout>
```

### 2. Add Image Optimization
Install Astro Image:

```bash
npm install @astrojs/image
```

Then use optimized images:
```astro
---
import { Image } from 'astro:assets';
---

<Image 
  src={product.img} 
  alt={product.name}
  width={800}
  height={800}
  loading="lazy"
/>
```

### 3. Add Analytics

#### Google Analytics
```astro
<!-- In src/layouts/Layout.astro <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### Plausible (Privacy-friendly)
```astro
<script defer data-domain="deposit.com.tr" src="https://plausible.io/js/script.js"></script>
```

### 4. Add Search Functionality

```bash
npm install @astrojs/search
```

### 5. Add Contact Form Backend

#### Option A: Formspree
```tsx
// In ContactForm.tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* Your form fields */}
</form>
```

#### Option B: Netlify Forms
```tsx
<form name="contact" method="POST" data-netlify="true">
  {/* Your form fields */}
</form>
```

#### Option C: API Route
Create `src/pages/api/contact.ts`:
```typescript
export async function post({ request }) {
  const data = await request.formData();
  // Send email via SendGrid, etc.
  return { success: true };
}
```

### 6. Add Blog/News Section

Create `src/pages/blog/` and `src/content/blog/` for articles about:
- Deposit return systems
- Sustainability news
- Product announcements
- Case studies

### 7. Add Internationalization (i18n)

```bash
npm install @astrojs/i18n
```

Support multiple languages:
- Turkish (default)
- English
- German (for EU markets)

### 8. Add Product Comparison

Create a comparison tool to compare multiple products side-by-side.

### 9. Add Customer Testimonials

Create a testimonials section with:
- Customer logos
- Success stories
- Statistics

### 10. Add FAQ Section

Create `src/pages/faq.astro` with common questions about:
- Deposit systems
- Installation
- Maintenance
- Pricing

---

## Performance Enhancements

### 1. Add Service Worker (PWA)
```bash
npm install @vite-pwa/astro
```

### 2. Optimize Fonts
Self-host Inter font instead of Google Fonts:
```bash
npm install @fontsource/inter
```

### 3. Add Critical CSS
Inline critical CSS for faster first paint.

### 4. Add Resource Hints
```astro
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://revego.net">
```

---

## SEO Enhancements

### 1. Add Sitemap
```bash
npm install @astrojs/sitemap
```

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://deposit.com.tr',
  integrations: [sitemap()],
});
```

### 2. Add robots.txt
```txt
# public/robots.txt
User-agent: *
Allow: /
Sitemap: https://deposit.com.tr/sitemap.xml
```

### 3. Add Schema.org Markup
```astro
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DIM - Deposit.com.tr",
  "url": "https://deposit.com.tr",
  "logo": "https://deposit.com.tr/logo.png"
}
</script>
```

---

## Security Enhancements

### 1. Add Security Headers
In your hosting platform, add:
```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### 2. Content Security Policy
```astro
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline';">
```

---

## All enhancements are optional!

The current site is **production-ready** as-is. These enhancements can be added based on:
- Business requirements
- User feedback
- Analytics data
- Future needs

**Priority recommendation:**
1. ✅ Deploy current version first
2. ✅ Add analytics to track usage
3. ✅ Add contact form backend
4. Consider other enhancements based on data

---

**The optimized website is complete and ready to deploy! 🚀**
