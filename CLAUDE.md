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
```

## Architecture

### Static Export Strategy
- `output: "export"` in next.config.ts
- No server-side code in production
- React used as **compiler only**, not runtime
- Result: Pure HTML files served by CDN

### Tech Stack
- **Framework**: Next.js 16 + React 19 (static export mode)
- **Styling**: Tailwind CSS 4 with `@theme` directive in globals.css
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (sans), JetBrains Mono (mono), Inconsolata (terminal)

### Design System
Theme colors defined in `globals.css` via `@theme`:
- `terminal-green`: #00FF41 (primary accent)
- `alert-amber`: #FFB000 (warnings/highlights)
- `electric-blue`: #007AFF (info/links)
- Background: #050505 with subtle grid pattern overlay

Custom CSS utilities in globals.css:
- `.glass-panel` - Frosted glass effect with backdrop blur
- `.tech-border` - Subtle white border
- `.font-terminal-custom` - JetBrains Mono with fallbacks
- `.tech-text-shadow` - Green glow effect

### Key Patterns
- **Path alias**: `@/*` → `./src/*`
- **cn() utility**: `src/lib/utils.ts` - combines clsx + tailwind-merge for className composition
- **Component variants**: TechCard accepts `variant` prop ("default" | "alert" | "success" | "info") for theming
- **All pages are client components**: `"use client"` directive required for Framer Motion animations

### Deployment
- **Host**: Cloudflare Pages
- **Domain**: menezis.ai
- **Build command**: `npm run build`
- **Output directory**: `out`

## Page Structure

### Landing Page (`/`)
- `src/app/page.tsx` - Single-page with 6 sections: Hero, Value Prop, Core Architecture, Arsenal, Pricing, FAQ
- `src/app/layout.tsx` - Root layout with font loading, SEO metadata, and StructuredData component

### Documentation (`/docs/*`)
- `src/app/docs/layout.tsx` - Shared docs layout with sticky header navigation
- `src/app/docs/page.tsx` - Overview
- `src/app/docs/install/page.tsx` - Installation guide
- `src/app/docs/quickstart/page.tsx` - Getting started
- `src/app/docs/tools/page.tsx` - MCP tools reference
- `src/app/docs/security/page.tsx` - Security features
- `src/app/docs/pricing/page.tsx` - Pricing details

### Other Pages
- `src/app/legal/page.tsx` - Legal information

### SEO Files
- `src/app/sitemap.ts` - Dynamic sitemap generation
- `src/app/robots.ts` - Robots.txt configuration
- `src/app/structured-data.tsx` - JSON-LD schemas (Organization, Software, Pricing, FAQ)

## Component Architecture

### UI Components (`src/components/ui/`)
- `Terminal.tsx` - Hero animation with typing effect and state machine (IDLE → TYPING → PROCESSING → JUDGMENT → COMPLETE)
- `TechCard.tsx` - Reusable card with variant-based theming via `variantColors` and `iconStyles` maps
- `Container.tsx`, `Section.tsx` - Layout primitives
- `BentoGrid.tsx` - CSS grid wrapper for card layouts
- `McpToolGrid.tsx` - Grid display for MCP tools
- `PricingTable.tsx` - Pricing tier comparison
- `FAQ.tsx` - Accordion FAQ component
- `GhostPreviewModal.tsx` - Modal preview for demo deployment
- `ApiDocList.tsx` - API documentation listing

## Related Repositories

- `github.com/JulienDbrt/sigilum` - Core platform (Go + Node.js)
- Dashboard uses same design tokens (colors, fonts)
