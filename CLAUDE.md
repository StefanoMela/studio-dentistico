# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server at http://localhost:3000
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

There are no tests configured in this project.

## Architecture

This is a **Next.js 16 App Router** static website for Studio Dentistico Sparano (a Milan dental clinic). All content is in Italian. All pages are statically pre-rendered — no API routes or server-side processing.

### Pages

| Route | File | Content |
|-------|------|---------|
| `/` | `app/page.tsx` | Landing: hero, value props, featured treatments, CTA |
| `/trattamenti` | `app/trattamenti/page.tsx` | 6 treatment categories with anchor links (`#estetica`, `#implantologia`, etc.) |
| `/chi-siamo` | `app/chi-siamo/page.tsx` | Team, history (founded 2003), statistics, values |
| `/contatti` | `app/contatti/page.tsx` | Address, hours, phone/email, transit directions |
| `/cookie-policy` | `app/cookie-policy/page.tsx` | GDPR-compliant legal document |

### Components

- `components/layout/Header.tsx` — Client component; sticky scroll, hamburger mobile menu, active route detection via `usePathname`
- `components/layout/Footer.tsx` — Server component; auto-calculated year
- `components/layout/CookieBanner.tsx` — Client component; stores consent in `localStorage` key `cookie_consent` (`"accepted"` | `"rejected"`), 800ms delay on mount
- `components/ui/index.tsx` — Reusable server components: `Button` (variants: `primary`/`secondary`/`ghost`), `Section`, `SectionHeader`, `Card`, `IconWrapper`

### Styling

Tailwind CSS v4 with custom design tokens defined in `app/globals.css` via `@theme`:

- Primary blue: `--color-primary` (`#1b4fbe`)
- Accent/CTA: `--color-accent` (`#cb717a`, rose/salmon)
- Dark text: `--color-dark` (`#1a2753`)
- Alternate surface: `--color-surface-alt` (`#f2f3f9`)

Fonts are self-hosted via `@fontsource` (no Google Fonts, for GDPR compliance):
- **Playfair Display** — headings/display
- **DM Sans** — body/UI

CSS animations (`fadeUp`, `fadeIn`, `slideDown`) and delay utilities (`delay-100` through `delay-500`) are defined in `globals.css`.

### SEO & Metadata

Root metadata is in `app/layout.tsx`. Each page exports its own `metadata` object overriding `title`, `description`, and `openGraph.url`. The metadata base URL is `https://studiodentisticosparano.it`.
