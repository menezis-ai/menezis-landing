# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

**Menezis Landing Page** - Public marketing website for Menezis AI-Driven Cloud Infrastructure.

Built with Next.js 16 as a **static site generator** (not a runtime). Output is pure HTML/CSS/JS deployed to Cloudflare Pages.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Development server (localhost:3000)
npm run build        # Build static HTML to /out/
npm run lint         # ESLint
```

## Architecture

### Static Export Strategy
- `output: "export"` in next.config.ts
- No server-side code in production
- React used as **compiler only**, not runtime
- Result: Pure HTML files served by CDN

### Tech Stack
- **Framework**: Next.js 16 (static export mode)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, JetBrains Mono, Inconsolata

### Design System (shared with Dashboard)
- **Primary**: terminal-green (#00ff88)
- **Alert**: alert-amber
- **Info**: electric-blue
- **Background**: Dark theme with grid pattern

### Key Patterns
- **Path alias**: `@/*` maps to `./src/*`
- **CSS-in-Tailwind**: Custom theme colors defined in `globals.css` using `@theme` directive
- **Component variants**: TechCard uses variant props for color theming
- **i18n**: Client-side language switching (en/fr/es)

### Deployment
- **Host**: Cloudflare Pages
- **Domain**: menezis.io
- **Build command**: `npm run build`
- **Output directory**: `out`

## Key Files

- `src/app/page.tsx` - Main landing page
- `src/app/globals.css` - Tailwind theme + custom colors
- `src/components/ui/` - Reusable components
- `next.config.ts` - Static export configuration

## Related Repositories

- `github.com/JulienDbrt/sigilum` - Core platform (Go + Node.js)
- Dashboard uses same design tokens (colors, fonts)
