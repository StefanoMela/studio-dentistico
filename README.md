# Studio Dentistico Sparano — Sito Vetrina

Sito vetrina per studio dentistico realizzato con **Next.js 16 (App Router)**, **TypeScript** e **Tailwind CSS v4**. Font auto-ospitati via `@fontsource` (nessuna dipendenza da Google Fonts).

## Stack

| Tecnologia | Versione |
|---|---|
| Next.js | 16 (App Router) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| Font | Playfair Display + DM Sans (`@fontsource`, self-hosted) |

## Struttura del progetto

```
studio-dentistico/
├── app/
│   ├── layout.tsx              # Root layout: font, header, footer, cookie banner
│   ├── globals.css             # CSS variables, animazioni, stili globali
│   ├── page.tsx                # / → Home
│   ├── trattamenti/page.tsx    # /trattamenti
│   ├── chi-siamo/page.tsx      # /chi-siamo
│   ├── contatti/page.tsx       # /contatti (no form)
│   └── cookie-policy/page.tsx  # /cookie-policy
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Header sticky + hamburger mobile
│   │   ├── Footer.tsx          # Footer con link e recapiti
│   │   └── CookieBanner.tsx    # Banner cookie con localStorage
│   └── ui/
│       └── index.tsx           # Button, Section, SectionHeader, Card, IconWrapper
└── public/
```

## Installazione e avvio

```bash
# 1. Entra nella cartella
cd studio-dentistico

# 2. Installa le dipendenze
npm install

# 3. Avvia il server di sviluppo
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## Script disponibili

```bash
npm run dev      # Server di sviluppo con hot-reload
npm run build    # Build di produzione
npm run start    # Server di produzione (richiede build)
npm run lint     # ESLint
```

## Pagine

| Route | Descrizione |
|---|---|
| `/` | Home: hero, highlights, trattamenti in evidenza, CTA |
| `/trattamenti` | 6 categorie di trattamenti con anchor link (#estetica, #implantologia…) |
| `/chi-siamo` | Team, storia, statistiche e valori dello studio |
| `/contatti` | Indirizzo, orari, telefono, email, link Google Maps (no form) |
| `/cookie-policy` | Informativa cookie completa in italiano (GDPR) |

## Funzionalità principali

- **Cookie banner** persistente: scelta salvata in `localStorage` (chiave `cookie_consent`, valori `accepted` / `rejected`). Il banner non ricompare fino a cancellazione manuale dello storage.
- **Header sticky responsive** con menu hamburger animato su mobile.
- **Metadata SEO + Open Graph** su ogni pagina (`title`, `description`, `og:*`).
- **HTML semantico**: heading order corretto, `<nav aria-label>`, `<address>`, `<dl>`, `aria-current="page"`, `aria-expanded`, `aria-label`.
- **Accessibilità**: `focus-visible` visibile, contrasti WCAG 2.1 AA, nessun testo solo per colore.
- **Mobile-first**: tutti i componenti progettati per mobile, con breakpoint `md:` e `lg:`.
- **Animazioni CSS pure** (fadeUp, slideDown, fadeIn) — zero dipendenze runtime extra.
- **Font self-hosted** via `@fontsource`: nessuna richiesta a Google Fonts, GDPR-friendly.

## Personalizzazione

### Dati studio (indirizzo, telefono, P.IVA…)
- `components/layout/Footer.tsx`
- `app/contatti/page.tsx`
- `app/cookie-policy/page.tsx`

### Palette colori e font
Tutti i token sono in `app/globals.css` nella sezione `@theme { }`.

```css
@theme {
  --color-sage-dark: #5c7a5e;   /* colore principale */
  --color-charcoal: #2a2a2a;    /* testo */
  --color-ivory: #faf8f4;       /* sfondo */
  /* … */
}
```

### Cookie banner
Chiave localStorage: `cookie_consent`
Valori possibili: `"accepted"` | `"rejected"`

Per azzerare la scelta in sviluppo: DevTools → Application → Local Storage → elimina la chiave.

## Deploy su Vercel (zero-config)

```bash
npx vercel
```

Il progetto è interamente statico (`○ Static`) — compatibile anche con Netlify, Cloudflare Pages o qualsiasi CDN.
