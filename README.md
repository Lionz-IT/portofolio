# Lionz — Personal Portfolio

A high-performance, animation-rich personal portfolio built with **Astro**, **Three.js**, and **GSAP**. Features a monochrome dark aesthetic with interactive elements including a torn-paper hero reveal effect, 3D particle backgrounds, horizontal scroll project showcase, and custom cursor.

**Live:** [lionz.my.id](https://lionz.my.id)

---

## Tech Stack

| Category       | Technology                                          |
| -------------- | --------------------------------------------------- |
| Framework      | [Astro 6](https://astro.build/) (Static Site Gen)   |
| Language       | TypeScript (strict mode)                            |
| 3D Graphics    | [Three.js](https://threejs.org/)                    |
| Animation      | [GSAP](https://gsap.com/) (ScrollTrigger, SplitText)|
| Smooth Scroll  | [Lenis](https://lenis.darkroom.engineering/)        |
| Icons          | [Astro Icon](https://github.com/natemoo-re/astro-icon) + Iconify |
| SEO            | astro-seo + @astrojs/sitemap                        |
| Package Manager| pnpm                                                |

---

## Features

- **Torn-Paper Hero Reveal** — Dual-layer portrait with animated clip-path polygon noise effect on hover
- **3D Particle Background** — 1,400-point Three.js particle cloud with mouse-reactive camera
- **Horizontal Scroll Projects** — GSAP ScrollTrigger pinned horizontal carousel with hover interactions
- **Image Gallery Modal** — Fullscreen horizontal-scroll gallery for projects with screenshots
- **Custom Cursor** — Dot + ring with lerp-based tracking, expands on interactive elements
- **GSAP Scroll Animations** — SplitText character reveal, fade-up, fade-in (all scroll-triggered)
- **Lenis Smooth Scroll** — Integrated with GSAP ticker for buttery scrolling
- **Film Grain Overlay** — Subtle SVG noise texture across the entire viewport
- **Anti-Spambot Email** — Email constructed client-side on hover to prevent scraping
- **Responsive Design** — Optimized for desktop, tablet, and mobile with hamburger nav
- **Astro View Transitions** — Page transitions with proper resource cleanup
- **Performance Optimized** — Manual chunk splitting (Three.js, GSAP), lazy loading, pixel ratio capping

---

## Prerequisites

Make sure the following are installed on your machine:

- **Node.js** — v18.17.1 or higher ([download](https://nodejs.org/))
- **pnpm** — v8 or higher

```bash
# Install pnpm globally (if not installed)
npm install -g pnpm
```

To verify your installation:

```bash
node --version    # v18.17.1+
pnpm --version    # 8.x+
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Lionz-IT/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start development server

```bash
pnpm dev
```

The site will be available at `http://localhost:4321`.

### 4. Build for production

```bash
pnpm build
```

The output will be generated in the `dist/` directory as static files.

### 5. Preview production build

```bash
pnpm preview
```

---

## Project Structure

```
src/
├── assets/                # Static images (profile photo)
├── components/            # Astro components
│   ├── Hero.astro             # Hero with dual-layer torn-paper effect
│   ├── Navbar.astro           # Fixed nav + responsive hamburger menu
│   ├── Marquee.astro          # CSS infinite scroll ticker
│   ├── About.astro            # Bio + personal details grid
│   ├── Works.astro            # Horizontal scroll project cards + gallery modal
│   ├── Stack.astro            # Tech stack by category with icons
│   ├── Experience.astro       # Experience timeline
│   ├── Contact.astro          # CTA + obfuscated email
│   ├── Cursor.astro           # Custom cursor (desktop only)
│   ├── Grain.astro            # SVG noise overlay
│   ├── FloatingSocials.astro  # Fixed social links sidebar
│   └── Footer.astro           # (Currently hidden)
├── data/                  # Content data (typed)
│   ├── projects.ts            # Project entries
│   ├── experience.ts         # Experience entries
│   └── stack.ts               # Tech stack items
├── layouts/
│   ├── BaseLayout.astro       # HTML shell, fonts, SEO, global styles
│   └── SectionLayout.astro    # Reusable section with label + title
├── pages/
│   └── index.astro            # Single page — composes all components
├── scripts/               # Client-side TypeScript
│   ├── lenis.ts               # Smooth scroll + anchor navigation
│   ├── cursor.ts              # Custom cursor tracking
│   ├── hero-particles.ts     # Three.js particle system
│   ├── hero-portrait.ts      # Torn-paper clip-path effect
│   └── animations.ts         # GSAP scroll animations
└── styles/
    ├── tokens.css             # Design tokens (colors, fonts, spacing)
    └── globals.css            # Reset + base styles
```

---

## Customization

### Content

All content is managed through typed data files in `src/data/`:

- **Projects** — `src/data/projects.ts` — Add, edit, or remove portfolio projects
- **Experience** — `src/data/experience.ts` — Update work/community experience
- **Tech Stack** — `src/data/stack.ts` — Modify listed technologies and categories

### Design Tokens

The visual identity is controlled via CSS custom properties in `src/styles/tokens.css`:

```css
:root {
  --color-bg: #0A0A0A;           /* Background */
  --color-surface: #111111;       /* Card surfaces */
  --color-border: #1A1A1A;        /* Borders */
  --color-text: #E8E4DE;          /* Primary text */
  --color-text-secondary: #A3A3A3;/* Secondary text */
  --color-accent: #F5F0EB;        /* Accent / highlight */

  --font-display: 'Bebas Neue', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-serif: 'Cormorant Garamond', serif;
  --font-mono: 'JetBrains Mono', monospace;

  --max-width: 1200px;
  /* ... spacing, transitions, z-index layers */
}
```

### Social Links

Edit `src/components/FloatingSocials.astro` to update the fixed social sidebar.

### Navigation

Edit the `navLinks` array in `src/components/Navbar.astro`.

### SEO & Metadata

Update the default `title` and `description` in `src/layouts/BaseLayout.astro`.
Change `site` in `astro.config.mjs` to match your domain.

---

## Deployment

This project outputs a fully static site (`output: 'static'`). Deploy the `dist/` folder to any static hosting provider:

| Platform       | Guide                                                                 |
| -------------- | --------------------------------------------------------------------- |
| **Vercel**     | [Astro on Vercel](https://docs.astro.build/en/guides/deploy/vercel/)  |
| **Netlify**    | [Astro on Netlify](https://docs.astro.build/en/guides/deploy/netlify/)|
| **GitHub Pages** | [Astro on GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) |
| **Cloudflare Pages** | [Astro on Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/) |

Most platforms will auto-detect the Astro framework. If manual config is needed:

- **Build command:** `pnpm build`
- **Output directory:** `dist`
- **Node version:** 18+

---

## License

This project is for personal use. All rights reserved.
