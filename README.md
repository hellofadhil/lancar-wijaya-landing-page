# CV Lancar Wijaya Sentosa - Professional Logistics Landing Page

A modern, responsive logistics company landing page built with Next.js 16, TailwindCSS 4, shadcn/ui, and Magic UI animations.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern Animations**: Smooth transitions and entrance animations powered by Magic UI patterns
- **Professional Sections**:
  - Hero Section with gradient background and CTA buttons
  - Strategic Partnership showcase
  - Value Proposition (4 key benefits)
  - Operational Routes with interactive cards
  - Fleet Overview (Engkel Fuso, Tronton, Gandengan)
  - Client Testimonials with ratings
  - Contact Form and Location information
  - Sticky Navigation Header

- **Color System**: Navy blue primary with orange accent for maximum contrast and readability
- **Accessibility**: Semantic HTML, proper ARIA attributes, and keyboard navigation
- **Performance**: Optimized images, lazy loading, and efficient CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS 4 with custom theme
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Custom CSS animations + Magic UI patterns
- **Language**: TypeScript

## 📁 Project Structure

```
app/
├── page.tsx                 # Main landing page
├── layout.tsx              # Root layout with metadata
└── globals.css             # Global styles with custom animations

components/
├── header.tsx              # Navigation header
├── hero-section.tsx        # Hero with CTA
├── partnership-section.tsx # Partnership showcase
├── value-section.tsx       # Value propositions
├── routes-section.tsx      # Operational routes
├── fleet-section.tsx       # Armada/Fleet overview
├── testimonials-section.tsx # Client testimonials
├── contact-section.tsx     # Contact & form
└── footer.tsx              # Footer with links

lib/
└── animations.ts           # Reusable animation utilities
```

## 🎨 Design System

### Colors
- **Primary**: Navy Blue (`oklch(0.2 0.1 262.8)`)
- **Accent**: Warm Orange (`oklch(0.65 0.2 30)`)
- **Neutral**: Grays and whites for hierarchy

### Typography
- **Font**: Geist (sans-serif) for both headings and body
- **Headings**: Bold, large sizes (3xl-7xl)
- **Body**: Regular weight with 1.4-1.6 line-height

### Animations
- `fadeInUp`: Fade with upward slide
- `slideInRight`: Slide from left
- `slideInLeft`: Slide from right
- `scaleIn`: Zoom entrance
- `pulse-glow`: Pulsing glow effect

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ with pnpm package manager

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit `http://localhost:3000` to see the application.

## 📱 Sections Overview

### 1. Hero Section
Eye-catching introduction with:
- Dynamic gradient background
- Company headline and subtitle
- Dual CTA buttons (Request Shipping, WhatsApp)
- Animated visual elements

### 2. Partnership Section
Highlights official partnership with PT Maspion:
- 3 partnership benefit cards
- Trust metrics and statistics
- Intersection observer animations

### 3. Value Section
4 key benefits cards:
- Security guarantee
- National partnership network
- Complete fleet
- Fast & reliable service

### 4. Routes Section
Interactive route showcase:
- 4 main operational routes
- Active route details panel
- Frequency and specialty information

### 5. Fleet Section
Vehicle type showcase:
- Engkel Fuso (5-6 ton)
- Tronton (20-25 ton)
- Gandengan (30+ ton)
- Specifications and capabilities

### 6. Testimonials Section
Client success stories:
- 4 testimonial cards with star ratings
- Trust metrics
- Professional references

### 7. Contact Section
Multiple contact options:
- Contact form with validation fields
- Office hours
- Phone, email, address
- WhatsApp integration

## 🎭 Animation Details

All sections use intersection observer patterns to trigger animations when in viewport:

```typescript
// Example: Staggered entrance animations
- Start: Opacity 0, transformed position
- OnScroll: Transition to visible state
- Duration: 0.6s - 1.0s with stagger delays
- Easing: ease-out for natural motion
```

## 🔧 Customization

### Update Colors
Edit `/app/globals.css` CSS variables:
```css
--primary: oklch(...) /* Main brand color */
--accent: oklch(...) /* Highlight color */
```

### Update Content
Each section component has simple prop-based content. Update text directly in:
- `components/[section]-section.tsx`

### Modify Animations
Global animations defined in:
- `/app/globals.css` - `@keyframes` definitions
- `/lib/animations.ts` - Reusable animation configs

## 📊 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

All components use Tailwind's `md:` and `lg:` prefixes for responsive design.

## ♿ Accessibility

- Semantic HTML elements (`<main>`, `<section>`, `<nav>`)
- ARIA labels and roles where appropriate
- Color contrast ratios meet WCAG AA standards
- Keyboard navigation support
- Screen reader friendly text

## 📝 License

This project is created for CV Lancar Wijaya Sentosa.

## 🤝 Support

For questions or modifications, refer to:
- Next.js: [nextjs.org](https://nextjs.org)
- TailwindCSS: [tailwindcss.com](https://tailwindcss.com)
- shadcn/ui: [ui.shadcn.com](https://ui.shadcn.com)
