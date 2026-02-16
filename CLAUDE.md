# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Menezis Landing Page** - Public marketing website for Menezis AI-Driven Cloud Infrastructure.

Built with Next.js 16 as a **static site generator** (not a runtime). Output is pure HTML/CSS/JS deployed to Cloudflare Pages.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Development server (localhost:3000)
npm run build        # Build static HTML to /out/
npm run lint         # ESLint
npx tsc --noEmit     # Type check (no emit)
```

Pre-commit hooks (Husky + lint-staged) automatically run ESLint with `--fix` on staged `.ts`/`.tsx` files.

No test framework is configured. There are no tests to run.

## Architecture

### Static Export Strategy
- `output: "export"` in next.config.ts — **no API routes, no SSR, no `getServerSideProps`**
- Images must use `unoptimized: true` (no Next.js Image Optimization)
- React is used as a **compiler only**, not a runtime
- Result: Pure HTML files served by CDN

### Tech Stack
- **Framework**: Next.js 16 + React 19 (static export mode)
- **Styling**: Tailwind CSS 4 with `@theme` directive in globals.css
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (sans), JetBrains Mono (mono), Inconsolata (terminal)
- **ESLint**: Flat config (`eslint.config.mjs`) using `eslint-config-next` core-web-vitals + typescript presets

### Design System
Theme colors defined in `globals.css` via `@theme`:
- `terminal-green`: #00FF41 (primary accent)
- `alert-amber`: #FFB000 (warnings/highlights)
- `electric-blue`: #007AFF (info/links)
- Background: #050505

Custom CSS utilities in globals.css:
- `.glass-panel` - Frosted glass effect with backdrop blur
- `.tech-border` - Subtle white border
- `.font-terminal-custom` - JetBrains Mono with fallbacks
- `.tech-text-shadow` - Green glow effect

### Key Patterns
- **Path alias**: `@/*` → `./src/*`
- **cn() utility**: `src/lib/utils.ts` - combines clsx + tailwind-merge for className composition
- **All pages are client components**: `"use client"` directive required for Framer Motion animations
- **Layout wrappers**: `Container` (max-w-7xl centered) and `Section` (py-16/24 with overflow-hidden) are used throughout all pages
- **Lazy loading**: Homepage uses `next/dynamic` to defer below-fold components (McpToolGrid, PricingTable, FAQ) with skeleton placeholders
- **Responsive dual rendering**: Some components (e.g., Terminal) render completely separate mobile vs desktop versions with `md:hidden`/`hidden md:block`
- **Component variants**: TechCard accepts `variant` prop ("default" | "alert" | "success" | "info") for theming via `variantColors`, `iconStyles`, and `hoverGlow` maps

### Deployment
- **Host**: Cloudflare Pages
- **Domain**: menezis.ai
- **Build command**: `npm run build`
- **Output directory**: `out`
- **Docker**: Multi-stage Dockerfile builds static export then serves via nginx on port 3000 (used for CI validation, not production)

## CI/CD

GitHub Actions workflows run on push/PR to main (uses `ubuntu-latest`, not self-hosted runners):
- **lint.yml**: ESLint + TypeScript type checking (parallel jobs)
- **build.yml**: Static site build → artifact upload → Docker image build validation

Both workflows use concurrency groups with `cancel-in-progress: true`.

## Page Structure

- `/` - Landing page with Hero, Value Prop, Core Architecture, Arsenal, Pricing, FAQ sections
- `/docs/*` - Documentation pages with shared layout (`docs/layout.tsx` has its own header nav + sidebar)
- `/legal` - Legal information
- `/investors` - Investor information

To add a new docs page: create `src/app/docs/<slug>/page.tsx` and add an entry to the `NAV_ITEMS` array in `src/app/docs/layout.tsx`.

### SEO
- `src/app/sitemap.ts` - Dynamic sitemap generation
- `src/app/robots.ts` - Robots.txt configuration
- `src/app/structured-data.tsx` - JSON-LD schemas (Organization, Software, Pricing, FAQ)

## Key Components

- `Terminal.tsx` - Hero animation with typing effect and state machine (IDLE → TYPING → PROCESSING → JUDGMENT → COMPLETE). Has separate mobile (`COMMAND_MOBILE`) and desktop (`COMMAND`) variants.
- `TechCard.tsx` - Reusable card with variant-based theming
- `GhostPreviewModal.tsx` - Modal triggered from Terminal's deployed link

## Related Repositories

- `github.com/JulienDbrt/sigilum` - Core platform (Go + Node.js)
- Dashboard uses same design tokens (colors, fonts)
