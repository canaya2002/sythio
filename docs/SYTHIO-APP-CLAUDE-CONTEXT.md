# Claude Code Context for sythio.app (Client App)

> **Copy this entire file as CLAUDE.md in the sythio.app project root.**
> It ensures both projects (landing page + client app) work in perfect coordination.

---

## Project Identity

- **Product name:** Sythio
- **Tagline:** "Voice Notes AI App — 9 Outputs from One Recording"
- **Landing page:** https://sythio.com (marketing, SEO, content)
- **Client app:** https://sythio.app (product, where users record/upload/process audio)
- **Founder:** Carlos Anaya Ruiz
- **Category:** Productivity / AI Audio Intelligence

---

## Domain Architecture — How the Two Sites Work Together

```
sythio.com (landing page)          sythio.app (client app)
┌──────────────────────┐           ┌──────────────────────┐
│  Marketing / SEO     │           │  Product / Dashboard  │
│  Blog / Content      │  ──CTA──▶│  Auth (login/signup)  │
│  Pricing display     │           │  Audio processing     │
│  Comparisons         │           │  User library         │
│  Feature pages       │           │  Settings / Billing   │
│  JSON-LD schemas     │◀──link──│  "Visit website" link │
└──────────────────────┘           └──────────────────────┘
```

**Rules:**
- All "Get Started", "Start Using Sythio", "Try Free" CTAs on sythio.com point to `https://sythio.app`
- sythio.app should link BACK to `https://sythio.com` in footer/logo for SEO juice (backlink)
- Both sites share the same Google Analytics property (GA4: G-JHHW34MEYN) and GTM container (GTM-TL52VWSG)
- Both sites share the same brand identity (colors, fonts, tone)

---

## Brand Design System

### Colors (CSS custom properties from the landing page)
```css
--background: #fafafa;
--foreground: #0a0a0a;
--muted: #6b7280;
--muted-light: #9ca3af;
--border: #d1d5db;
--border-light: #e5e7eb;
--accent-muted: #374151;
```

### Fonts
- **Primary:** Geist Sans (variable: `--font-geist-sans`)
- **Monospace:** Geist Mono (variable: `--font-geist-mono`)
- Both from Google Fonts via `next/font`

### Design Tokens
- Border radius: `rounded-xl` to `rounded-3xl` (8px to 24px)
- Shadows: Subtle, layered (`shadow-sm`, custom multi-layer shadows)
- Spacing: Consistent 4px grid (Tailwind defaults)
- Animations: Smooth, purposeful (300ms transitions)
- Buttons: `rounded-full` with `h-9` (nav), `h-11` (mobile), `h-14` (hero CTAs)
- Dark button: `bg-foreground text-white hover:bg-accent-muted`
- Light button: `border border-border text-foreground hover:bg-foreground hover:text-white`

### Tone of Voice
- Clean, direct, confident
- No fluff, no hype words
- Professional but approachable
- Short sentences, clear value props

---

## Product Definition — What Sythio Does

### Core Feature: One Audio → 9 Outputs
Users record or upload audio, and Sythio processes it into multiple structured outputs:

1. **Summary** — Concise overview of what was said
2. **Tasks** — Extracted action items with owners
3. **Action Plan** — Step-by-step plan from discussion
4. **Clean Text** — Polished transcript without filler
5. **Report** — Executive-ready document
6. **Message** — Ready-to-send follow-up message
7. **Study Notes** — Organized notes for learning
8. **Key Points** — Bullet-point highlights
9. **Ideas** — Creative insights captured

### Speaker Detection
- Automatic multi-speaker identification
- Speaker name attribution
- Per-speaker output segmentation

### Pricing Tiers
| Tier | Price | Limits |
|------|-------|--------|
| Free | $0/mo | 5 recordings/month, 3 output formats, basic speaker detection |
| Premium | $12/mo | Unlimited recordings, all 9 outputs, advanced speaker detection, searchable library |
| Enterprise | Custom | Team workspace, API access, custom templates, dedicated support |

---

## SEO Coordination

### What sythio.com Handles (DO NOT duplicate)
- All blog content and articles
- Feature marketing pages (/features/*)
- Use case pages (/use-cases/*)
- Competitor comparison pages (/compare/*)
- Alternative pages (/alternatives/*)
- Audience pages (/for/students, /for/founders, etc.)
- Glossary, case studies
- Product marketing page
- Pricing display page
- JSON-LD Organization, WebSite, and SoftwareApplication schemas
- Sitemap with 100+ URLs
- Multi-language hreflang (en, es, fr, pt, it)
- AI crawler rules (GPTBot, ClaudeBot, etc.)

### What sythio.app Should Handle
- Its own `robots.txt` — allow crawling of public pages (login, signup, pricing-related pages if any), block private dashboard/user content
- Its own `sitemap.xml` — only public pages (login, signup, about if exists)
- Meta tags for login/signup pages with:
  - `<title>Log in to Sythio | Voice Notes AI App</title>`
  - `<title>Sign up for Sythio | Free Voice Notes AI App</title>`
- Canonical URLs pointing to itself (`https://sythio.app/...`)
- `noindex` on authenticated/dashboard pages (user-specific content)
- Organization schema referencing `https://sythio.com/#organization` as the same entity

### Cross-Domain SEO Signals
```html
<!-- In sythio.app's footer or relevant page -->
<a href="https://sythio.com">Sythio Website</a>
<a href="https://sythio.com/blog">Blog</a>
<a href="https://sythio.com/pricing">Pricing</a>
```

The landing page's SoftwareApplication schema already includes:
```json
{
  "@type": "SoftwareApplication",
  "url": "https://sythio.com",
  "installUrl": "https://sythio.app"
}
```

---

## Analytics Configuration

### Shared Tracking (use the same IDs)
```
Google Analytics 4: G-JHHW34MEYN
Google Tag Manager: GTM-TL52VWSG
```

### Recommended Events for sythio.app
```typescript
// Auth events
trackEvent('signup_start', { method: 'email' | 'google' | 'apple' });
trackEvent('signup_complete', { method: string, plan: 'free' | 'premium' });
trackEvent('login', { method: string });

// Core product events
trackEvent('recording_start', { source: 'mic' | 'upload' });
trackEvent('recording_complete', { duration_seconds: number, speakers: number });
trackEvent('output_generated', { type: 'summary' | 'tasks' | 'action_plan' | ... });
trackEvent('output_exported', { type: string, format: 'pdf' | 'text' | 'clipboard' });

// Engagement events
trackEvent('library_search', { query: string });
trackEvent('speaker_renamed', {});
trackEvent('recording_deleted', {});

// Conversion events
trackEvent('upgrade_prompt_shown', { trigger: string });
trackEvent('upgrade_started', { from: 'free', to: 'premium' });
trackEvent('upgrade_complete', { plan: string, price: number });
trackEvent('subscription_cancelled', { plan: string, reason?: string });
```

---

## Internationalization (i18n)

### Supported Languages (must match landing page)
| Code | Language | Flag |
|------|----------|------|
| en | English | US |
| es | Espanol | ES |
| fr | Francais | FR |
| pt | Portugues | BR |
| it | Italiano | IT |

### Implementation Notes
- Landing page uses URL prefix routing (`/es/`, `/fr/`, etc.) with middleware rewriting
- sythio.app should support the same 5 languages
- Language preference should sync via cookie: `NEXT_LOCALE`
- Also check `localStorage.getItem('sythio-locale')` as fallback
- When a user arrives from sythio.com with a language set, respect that preference

---

## Contact & Support Emails
```
support@sythio.com    — Customer support
hello@sythio.com      — General inquiries
partners@sythio.com   — Partnership inquiries
press@sythio.com      — Press/media
privacy@sythio.com    — Privacy/data requests
```

---

## Social Media Profiles
```
Instagram:  https://www.instagram.com/sythio.ai/
LinkedIn:   https://www.linkedin.com/company/sythioai
Facebook:   https://www.facebook.com/sythio
TikTok:     https://www.tiktok.com/@sythio.ai
GitHub:     https://github.com/sythio
```

---

## Technical Compatibility Notes

### If sythio.app uses Next.js:
- Use the same Geist font setup for visual consistency
- Implement the same CSS custom properties for colors
- Follow the same Tailwind patterns for component styling
- Use `next/font/google` for font loading

### Security Headers (match the landing page)
```typescript
// next.config.ts headers section
{
  key: 'Strict-Transport-Security',
  value: 'max-age=63072000; includeSubDomains; preload',
},
{
  key: 'X-Content-Type-Options',
  value: 'nosniff',
},
{
  key: 'X-Frame-Options',
  value: 'SAMEORIGIN',
},
{
  key: 'X-DNS-Prefetch-Control',
  value: 'on',
},
{
  key: 'Referrer-Policy',
  value: 'origin-when-cross-origin',
},
```

### PWA Manifest Coordination
Landing page manifest uses:
```json
{
  "name": "Sythio",
  "short_name": "Sythio",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#0a0a0a",
  "background_color": "#fafafa"
}
```
sythio.app should use the same colors/branding but its own start_url.

---

## Key Rules for Claude Code on sythio.app

1. **Never duplicate marketing content** — Blog, features, comparisons live on sythio.com only
2. **Always link back to sythio.com** — Footer links to website, blog, pricing for SEO
3. **Match the design language** — Same colors, fonts, border radius, shadow patterns
4. **Use the same analytics IDs** — Shared GA4 + GTM for unified funnel tracking
5. **Respect language preferences** — Sync via NEXT_LOCALE cookie across domains
6. **Keep auth pages indexable** — Login/signup pages should be crawlable with proper meta
7. **noindex dashboard** — All authenticated user content must be noindexed
8. **Share Organization identity** — Reference `https://sythio.com/#organization` in any JSON-LD
9. **Feature parity with marketing claims** — The 9 outputs, speaker detection, export formats described on sythio.com must actually exist in the app
10. **Free plan limits must match** — 5 recordings/month, 3 outputs as stated on pricing page

---

## Landing Page File Structure Reference (sythio.com)
```
sythio.com/
├── app/
│   ├── layout.tsx (root layout, metadata, JSON-LD)
│   ├── page.tsx (homepage with sections)
│   ├── globals.css (design tokens, animations)
│   ├── robots.ts, sitemap.ts, manifest.ts
│   ├── components/
│   │   ├── navbar.tsx (CTAs → sythio.app)
│   │   ├── footer.tsx (internal links)
│   │   ├── json-ld.tsx (Organization, WebSite, SoftwareApp schemas)
│   │   ├── sections/ (hero, problem, how-it-works, etc.)
│   │   └── i18n/ (language context, translations for 5 locales)
│   ├── blog/ (20+ articles)
│   ├── features/ (10 feature pages)
│   ├── audio-to-*/ (10 transformation pages)
│   ├── use-cases/ (7 use case pages)
│   ├── compare/ (5 competitor comparisons)
│   ├── for/ (6 audience pages)
│   └── pricing/, product/, about/, faq/, contact/, etc.
├── public/ (logo.png, og-image.png, favicon.ico)
└── next.config.ts (security headers, image optimization)
```
