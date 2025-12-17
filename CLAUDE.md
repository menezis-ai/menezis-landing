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
- **Styling**: Tailwind CSS 4 with `@theme` directive
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (sans), JetBrains Mono (mono), Inconsolata (terminal)

### Design System
Theme colors defined in `globals.css`:
- `terminal-green`: #00FF41 (primary accent)
- `alert-amber`: #FFB000 (warnings/highlights)
- `electric-blue`: #007AFF (info/links)
- Background: #050505 with subtle grid pattern overlay

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

## Component Architecture

- `src/app/page.tsx` - Single-page landing with 5 sections (Hero, Value Prop, Core Architecture, Arsenal, Pricing)
- `src/app/layout.tsx` - Root layout with font loading via next/font
- `src/components/ui/Terminal.tsx` - Hero animation with typing effect and state machine (IDLE → TYPING → PROCESSING → JUDGMENT → COMPLETE)
- `src/components/ui/TechCard.tsx` - Reusable card with variant-based theming
- `src/components/ui/BentoGrid.tsx`, `McpToolGrid.tsx`, `PricingTable.tsx` - Layout components

## Related Repositories

- `github.com/JulienDbrt/sigilum` - Core platform (Go + Node.js)
- Dashboard uses same design tokens (colors, fonts)
