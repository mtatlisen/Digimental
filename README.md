# DIM - Deposit.com.tr Website

Modern, optimized website for deposit return machine systems (Depozito İade Makineleri) in Turkey.

> 📚 **New here?** Start with [QUICKSTART.md](./QUICKSTART.md) or see [INDEX.md](./INDEX.md) for all documentation.

## 🚀 Features

- **Modern Stack**: Built with Astro 5 for optimal performance
- **Fast Loading**: Static site generation with minimal JavaScript
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **SEO Optimized**: Proper meta tags and semantic HTML
- **TypeScript**: Type-safe code for better maintainability
- **Interactive Components**: React for interactive elements (contact form, filters)

## 📦 Tech Stack

- **Astro 5**: Static site generator
- **React 18**: Interactive components
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type safety

## 🏗️ Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ProductCard.astro
│   │   ├── BrandCard.astro
│   │   └── ContactForm.tsx
│   ├── data/
│   │   ├── products.ts
│   │   └── brands.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── products.astro
│       ├── brands.astro
│       └── contact.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🚦 Commands

| Command           | Action                                       |
|:------------------|:---------------------------------------------|
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |

## 🎯 Pages

- **Home (`/`)**: Hero section, featured products, brands overview
- **Products (`/products`)**: All products with brand filtering
- **Brands (`/brands`)**: Detailed brand information with their products
- **Contact (`/contact`)**: Contact form and information

## 🏷️ Brands

- **REVEGO** (🇹🇷): Turkish manufacturer, iF 2025 award winner
- **RVM Systems** (🇸🇪): Swedish leader, 17B+ containers processed
- **Ripet** (🇮🇹): Italian innovator with RiPress technology
- **Anker Andersen** (🇩🇰): Industrial solutions, 300/min speed

## ⚡ Performance Optimizations

1. **Static Generation**: All pages pre-rendered at build time
2. **Image Optimization**: Lazy loading with native `loading="lazy"`
3. **Minimal JavaScript**: Only interactive components use client-side JS
4. **CSS Optimization**: Tailwind CSS with purging unused styles
5. **Font Optimization**: Google Fonts with `display=swap`
6. **Code Splitting**: Automatic with Astro

## 🎨 Design Features

- Dark theme with emerald accent colors
- Smooth animations and transitions
- Gradient text effects
- Card hover effects
- Mobile-responsive navigation
- Accessible UI components

## 📝 Adding New Products

Edit `src/data/products.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  brand: 'Brand Name',
  capacity: 'Capacity info',
  speed: 'Speed info',
  materials: 'Material types',
  img: 'Image URL',
  featured: true/false,
  tag: 'Optional tag'
}
```

## 🔧 Configuration

### Astro Config (`astro.config.mjs`)
- Tailwind CSS integration
- React integration for interactive components
- Static output mode

### Tailwind Config (`tailwind.config.mjs`)
- Custom animations (fade-in, fade-in-up)
- Extended color palette
- Inter font family

## 📄 License

Private - All rights reserved © 2025 DIM

---

Built with ❤️ using Astro
