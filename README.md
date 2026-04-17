# Card Crafters - Premium Digital Services Platform

A production-ready, SEO-optimized Next.js website for Card Crafters - a premium digital services business offering streaming subscriptions, gift cards, bill payments, and shopping assistance.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** strict mode for type safety
- **Tailwind CSS** for responsive design
- **Premium Dark Theme** with gold accents
- **SEO Optimized** with metadata and Open Graph tags
- **Dynamic Service Pages** with slug-based routing
- **Fully Responsive** design (mobile-first)
- **Component-Based Architecture** for reusability
- **Clean URLs** without `.html` extensions
- **Fast Performance** optimized for production

## 📁 Project Structure

```
card-crafters/
├── app/
│   ├── layout.tsx                 # Root layout with fonts & metadata
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles & theme
│   ├── not-found.tsx              # 404 page
│   ├── about/
│   │   └── page.tsx               # About page
│   ├── services/
│   │   ├── page.tsx               # Services listing
│   │   └── [slug]/
│   │       └── page.tsx           # Dynamic service detail pages
│   ├── contact/
│   │   └── page.tsx               # Contact form
│   ├── faq/
│   │   └── page.tsx               # FAQ page
│   ├── checkout/
│   │   └── page.tsx               # Checkout/order page
│   ├── privacy/
│   │   └── page.tsx               # Privacy policy
│   └── terms/
│       └── page.tsx               # Terms of service
├── components/
│   ├── Navbar.tsx                 # Navigation bar
│   ├── Footer.tsx                 # Footer
│   ├── Button.tsx                 # Button component
│   ├── Card.tsx                   # Card component
│   ├── Section.tsx                # Section wrapper
│   ├── ServiceCard.tsx            # Service card component
│   ├── Feature.tsx                # Feature component
│   ├── Testimonial.tsx            # Testimonial component
│   └── FAQItem.tsx                # FAQ item component
├── lib/
│   └── services.ts                # Services data & utilities
├── public/
│   ├── images/                    # Image assets
│   └── products/                  # Product images
├── styles/
│   └── services.css               # Legacy styles (if needed)
├── next.config.js                 # Next.js configuration
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.ts             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
├── package.json                   # Dependencies
└── README.md                       # This file
```

## 🎨 Design System

### Colors

- **Background**: Dark charcoal (`#0f1419` - `#070709`)
- **Surfaces**: Slightly lighter gray (`#1a1f2e`)
- **Text Primary**: Off-white (`#f3f4f6`)
- **Text Secondary**: Muted gray (`#9ca3af`)
- **Accent**: Gold (`#faca15`)
- **Accent Hover**: Bright gold (`#facc15`)

### Typography

- **Display Font**: Sora (headings)
- **Body Font**: Manrope (content)
- **Weights**: 400, 500, 600, 700, 800

### Spacing & Effects

- Clean padding/margins with consistent spacing
- Soft borders with opacity
- Subtle shadows and glow effects
- Smooth animations and transitions

## 🔧 Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation Steps

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run development server**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to view the site.

3. **Build for production**

   ```bash
   npm run build
   npm start
   ```

4. **Type checking**
   ```bash
   npm run type-check
   ```

## 📄 Pages Overview

### Home (`/`)

- Hero section with CTAs
- Trust indicators
- Service categories overview
- How it works (3-step process)
- Featured services
- Why choose us section
- FAQ preview
- Testimonials

### About (`/about`)

- Company story
- Core values
- Team information
- Statistics and achievements
- Call to action

### Services (`/services`)

- Browse all services by category
- Service cards with pricing
- Delivery time information
- Quick-access category filters

### Service Detail (`/services/[slug]`)

- Detailed service information
- What customers provide
- Service features and benefits
- How the process works
- Related services
- Call to action

### Contact (`/contact`)

- Contact form
- Contact information
- Support channels
- Response time expectations

### FAQ (`/faq`)

- Expandable FAQ items
- Support contact options
- Quick-answer section

### Checkout (`/checkout`)

- Multi-step checkout process
- Order summary
- Secure payment form
- Service selection

### Legal Pages

- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)

## 📊 Services Data Structure

Services are defined in `lib/services.ts` with the following properties:

```typescript
interface Service {
  id: string;
  name: string;
  slug: string;
  category: "streaming" | "gift-cards" | "bill-payments" | "shopping";
  categoryLabel: string;
  description: string;
  longDescription: string;
  whatYouProvide: string[];
  deliveryTime: string;
  price?: string;
  features: string[];
  relatedServices?: string[];
}
```

### Service Categories

1. **Streaming Services** - Netflix, Disney+, Apple TV+, HBO, Prime Video
2. **Gift Cards** - Amazon, Google Play, Steam
3. **Bill Payments** - Utilities, Internet, Subscriptions
4. **Shopping & Sourcing** - Online shopping, International shipping

## 🧩 Component System

### Core Components

- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Multi-column footer with links and info
- **Button** - Variants: primary, secondary, ghost; Sizes: sm, md, lg
- **Card** - Premium card with hover effects
- **Section** - Reusable section wrapper with optional title
- **ServiceCard** - Card component for displaying services
- **Feature** - Feature box with icon and description
- **Testimonial** - Customer testimonial with rating
- **FAQItem** - Expandable FAQ item

## 🔍 SEO Features

- Metadata per page (title, description, Open Graph)
- Structured data ready
- Clean URLs without extensions
- Mobile-friendly responsive design
- Fast page load times
- Optimized images
- Semantic HTML

## ⚙️ Configuration Files

### `next.config.js`

- Strict TypeScript checking
- Image optimization

### `tsconfig.json`

- Strict mode enabled
- Path alias: `@/*` for imports

### `tailwind.config.ts`

- Custom color palette
- Extended spacing
- Custom animations
- Dark theme colors

### `package.json`

- Scripts for dev, build, start, lint
- Dependencies: React, Next.js
- Dev dependencies: TypeScript, Tailwind, PostCSS

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Traditional Hosting

```bash
npm run build
# Upload 'out' directory contents
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Responsive typography and spacing
- Touch-friendly interface
- Optimized for all screen sizes

## 🛡️ Security

- Secure payment forms (placeholder, implement with payment provider)
- HTTPS ready
- CSP headers recommended
- XSS protection via React
- CSRF token support ready

## 📈 Performance

- Static generation where possible
- Image optimization
- Code splitting
- Minified production builds
- CSS modules support
- SEO-optimized

## 🔐 Privacy & Legal

- GDPR-ready structure
- Privacy Policy page
- Terms of Service page
- Cookie consent ready
- Data protection measures

## 🤝 Support & Contact

For questions or support:

- Email: support@cardcrafters.com
- Phone: +1 (555) 123-4567
- Live Chat: Available 24/7

## 📝 License

This project is proprietary to Card Crafters. All rights reserved.

## 🎯 Future Enhancements

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] User authentication and accounts
- [ ] Order tracking system
- [ ] Email notifications
- [ ] SMS alerts
- [ ] Analytics integration
- [ ] Testimonials/Reviews system
- [ ] Blog section
- [ ] Multi-language support
- [ ] Dark mode toggle (already dark-themed)

## 🐛 Troubleshooting

### Build Issues

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use

```bash
npm run dev -- -p 3001
```

### TypeScript Errors

```bash
npm run type-check
```

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
