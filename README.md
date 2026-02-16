# Primari Corpora Website

A modern, premium corporate website for PT Primari Corpora - Indonesia's premier supplier of industrial materials.

## 🎯 Features

- **Modern Design**: Professional industrial aesthetic with charcoal + gold color scheme
- **Multi-page Structure**: Home, Products, Projects, Partners, Contact
- **Dynamic Product Categories**: Minerals, Oxides, Chemicals, Equipment, Machinery
- **Working Contact Form**: Integrated with Resend for email delivery
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags, semantic HTML, clean URLs
- **TypeScript**: Full type safety throughout the codebase

## 🛠️ Tech Stack

- **Framework**: SvelteKit 2.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom configuration)
- **Fonts**: Outfit (display), Inter (body), Source Code Pro (monospace)
- **Email**: Resend API
- **Deployment**: Node.js adapter (ready for Vercel/Netlify)

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Setup Steps

1. **Clone or extract the project**
   ```bash
   cd primaricorp-redesign
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Resend API key:
   ```
   RESEND_API_KEY=your_actual_resend_api_key
   ```

4. **Run development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173)

## 🚀 Building for Production

```bash
# Build the application
pnpm build

# Preview production build
pnpm preview

# For production deployment
node build
```

## 📧 Email Configuration

The contact form uses [Resend](https://resend.com) for email delivery.

### Setup Resend:

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (or use the free onboarding@resend.dev for testing)
3. Generate an API key
4. Add the API key to your `.env` file

### Update Email Recipients:

Edit `src/routes/api/contact/+server.ts`:
```typescript
to: ['admin@primaricorp.com'], // Change to your email
```

### Update Sender Email:

Once you verify your domain in Resend:
```typescript
from: 'contact@primaricorp.com', // Use your verified domain
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  charcoal: {
    900: '#0A0A0A',
    800: '#1A1A1A',
    700: '#2A2A2A',
  },
  gold: {
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
  },
  // Add your custom colors
}
```

### Typography

Fonts are defined in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Outfit', 'system-ui', 'sans-serif'],
  mono: ['Source Code Pro', 'monospace'],
}
```

### Content

- **Home page**: `src/routes/+page.svelte`
- **Product data**: `src/routes/products/[category]/+page.ts`
- **Project data**: `src/routes/projects/+page.svelte`
- **Contact info**: `src/routes/contact/+page.svelte`

## 📁 Project Structure

```
primaricorp-redesign/
├── src/
│   ├── lib/
│   │   └── components/
│   │       ├── Navigation.svelte
│   │       ├── Footer.svelte
│   │       ├── Button.svelte
│   │       ├── ProductCard.svelte
│   │       ├── SectionHeader.svelte
│   │       └── StatCounter.svelte
│   ├── routes/
│   │   ├── +page.svelte              (Home)
│   │   ├── +layout.svelte            (Layout wrapper)
│   │   ├── products/
│   │   │   ├── +page.svelte          (Products overview)
│   │   │   └── [category]/
│   │   │       ├── +page.svelte      (Dynamic category pages)
│   │   │       └── +page.ts          (Category data)
│   │   ├── projects/
│   │   │   └── +page.svelte
│   │   ├── partners/
│   │   │   └── +page.svelte
│   │   ├── contact/
│   │   │   └── +page.svelte
│   │   └── api/
│   │       └── contact/
│   │           └── +server.ts        (Email API)
│   ├── app.css                        (Global styles)
│   └── app.html                       (HTML template)
├── static/                            (Images & static files)
├── tailwind.config.js
├── svelte.config.js
├── vite.config.js
└── package.json
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add `RESEND_API_KEY` environment variable
4. Deploy

### Netlify

1. Push code to GitHub
2. Import project in Netlify
3. Build command: `pnpm build`
4. Publish directory: `build`
5. Add `RESEND_API_KEY` environment variable

### VPS/Server (Node.js)

1. Build the project: `pnpm build`
2. Copy `build` folder to server
3. Install dependencies: `npm install --production`
4. Set environment variables
5. Run: `node build`

## 📝 Environment Variables

Required environment variables:

- `RESEND_API_KEY` - Your Resend API key for contact form emails

## 🔧 Development Commands

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Check TypeScript
pnpm check

# Format code
pnpm format

# Lint code
pnpm lint
```

## 📄 License

Proprietary - PT Primari Corpora

## 📞 Support

For support with this website:
- **Email**: admin@primaricorp.com
- **Phone**: +62 21 3972 1586

## ✅ SEO Checklist

- [x] Semantic HTML structure
- [x] Meta descriptions on all pages
- [x] Proper heading hierarchy
- [x] Alt text for all images
- [x] Clean, descriptive URLs
- [ ] Add sitemap.xml (recommended)
- [ ] Add robots.txt (recommended)
- [ ] Add Google Analytics (optional)
- [ ] Submit to Google Search Console (recommended)

## 🚀 Future Enhancements

Recommended additions:
- [ ] Google Analytics integration
- [ ] Product search functionality
- [ ] Multilingual support (Indonesian/English)
- [ ] WhatsApp float button
- [ ] Blog/news section
- [ ] Product comparison tool
- [ ] Customer testimonials
- [ ] Live chat integration

## 📊 Performance

Built with performance in mind:
- Optimized images
- Minimal JavaScript
- CSS purging with Tailwind
- Server-side rendering (SSR)
- Modern font loading

---

**Built with ❤️ for PT Primari Corpora**
