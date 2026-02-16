# VITRUVE'S CODEX - Menezis Landing

> "Structure brings Freedom." - Vitruve

## Project Profile

- **Type**: Static marketing site (Next.js 16, static export)
- **Stack**: React 19, Tailwind CSS 4, Framer Motion, Lucide
- **Scope**: No backend, no DB, no API routes, no DI container
- **Applicable Rules**: Naming conventions, dead code, magic values, component patterns, design system consistency

## Established Patterns

| Pattern | Standard | Location |
|---------|----------|----------|
| Path alias | `@/*` -> `./src/*` | tsconfig.json |
| Component naming | PascalCase `.tsx` in `src/components/ui/` | All components |
| className composition | `cn()` from `@/lib/utils` | Most components |
| Layout wrappers | `<Container>` + `<Section>` | All pages |
| Client directive | `"use client"` only when state/effects needed | Page files |
| Lazy loading | `next/dynamic` with skeleton placeholder | Homepage |
| Responsive split | `md:hidden` / `hidden md:block` for complex components | Terminal |
| Design tokens | `@theme` block in `globals.css` | Single source |
| Custom utilities | `.glass-panel`, `.tech-border`, `.font-terminal-custom`, `.tech-text-shadow`, `.crt-scanlines` | globals.css |
| Shared components | `CodeBlock` (copy-to-clipboard code display) | `src/components/ui/CodeBlock.tsx` |
| Animation timings | Named constants at top of component file | Terminal.tsx |

## Architectural Drift Log

### 2026-02-16 - [Patrol #1 - Initial Survey & Rectification]

**Violation:** `src/components/ui/ApiDocList.tsx` - Dead component, never imported
**Standard:** No zombie files in `src/`
**Rectification:** DONE - File deleted

**Violation:** `BentoGridItem` export in `BentoGrid.tsx` - Exported, never used
**Standard:** No dead exports
**Rectification:** DONE - Export removed

**Violation:** `CodeBlock` component duplicated identically in `quickstart/page.tsx` and `install/page.tsx`
**Standard:** Shared components belong in `src/components/ui/`
**Rectification:** DONE - Extracted to `src/components/ui/CodeBlock.tsx`, both pages updated

**Violation:** Copy-to-clipboard handler duplicated in 3 files
**Standard:** Shared logic should be centralized
**Rectification:** DONE - Absorbed into shared `CodeBlock` component (homepage `InstallCommand` kept separate: distinct UI)

**Violation:** `"use client"` on `legal/page.tsx` and `investors/page.tsx` despite zero interactivity
**Standard:** Only mark client when state/effects are used
**Rectification:** DONE - Directives removed, both now server components

**Violation:** `#1A1A1A` hardcoded in Terminal.tsx
**Standard:** All colors in `@theme` or Tailwind defaults
**Rectification:** DONE - Added `--color-terminal-titlebar: #1A1A1A` to `@theme`, using `bg-terminal-titlebar`

**Violation:** Magic timing values in Terminal.tsx (500, 30, 1500, 2000, 200ms)
**Standard:** Animation timings as named constants at top of file
**Rectification:** DONE - Extracted to `CURSOR_BLINK_MS`, `TYPING_BASE_MS`, `TYPING_JITTER_MS`, `PROCESSING_DELAY_MS`, `JUDGMENT_DELAY_MS`, `INITIAL_DELAY_MS`

**Violation:** CRT scanline gradient duplicated between mobile and desktop in Terminal.tsx
**Standard:** Repeated CSS patterns belong in globals.css as utilities
**Rectification:** DONE - Extracted to `.crt-scanlines` utility in globals.css

**Violation:** Inline `style={{ width: '750px', height: '850px' }}` on Terminal desktop container
**Standard:** Prefer Tailwind classes over inline styles
**Rectification:** DONE - Converted to `w-[750px] max-w-full h-[850px]`

**Observation:** z-index values scattered across 4 files (z-50, z-[100], z-10/20/30)
**Status:** DEFERRED - acceptable for current project size

**Observation:** "Last updated: December 2024" in `legal/page.tsx:139`
**Status:** DEFERRED - content team responsibility
