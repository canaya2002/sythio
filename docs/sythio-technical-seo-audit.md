# Sythio Technical SEO Audit

## Framework & Rendering

- **Framework:** Next.js 16.2.1, App Router
- **React:** 19.2.4
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS 4 + PostCSS
- **Animations:** GSAP 3.14.2 + Framer Motion 12.38.0

### Rendering Model

**Current state:**
- Root layout is a server component (good)
- Homepage (`page.tsx`) is a server component that composes client section components
- ALL other pages are client components (`"use client"`)
- JSON-LD schemas are server-rendered (good)
- Metadata in layout files is server-rendered (good)

**Key finding:** Client components in Next.js App Router ARE server-rendered with their initial state. Since the LanguageProvider initializes with `locale: "en"`, all `s("key")` calls resolve to English during SSR. **English content IS in the initial HTML.**

**Remaining issues:**
1. RotatingText renders invisible measurement spans that pollute H1 content
2. `<html lang="en">` is hardcoded — never changes with locale
3. No locale routes, no hreflang tags
4. Metadata is always English regardless of user locale selection

---

## Metadata

### Root Layout Metadata
- Title template: `%s | Sythio` (good)
- Default title: "Sythio — Turn Voice into Clarity, Action, and Structure" (good)
- Description: Comprehensive, keyword-rich (good)
- OG image: 1200x630 (good)
- Twitter card: summary_large_image (good)
- Canonical: https://sythio.com (good)
- Robots: index, follow (good)

### Per-Page Metadata (via buildMetadata)
- Each page has unique title, description, keywords
- Canonical URLs are correctly set per page
- OG/Twitter cards inherit from builder

### Issues
- Same OG image across all pages (should vary)
- `meta keywords` tag has no SEO value (Google ignores it) but doesn't hurt
- No `alternates.languages` for multilingual

---

## Sitemap & Robots

### sitemap.ts
- 11 pages with proper priorities and frequencies
- `lastModified: new Date()` — always current date (should use actual last modified)
- Missing: All new pages need to be added

### robots.ts
- Allows all, disallows `/api/` and `/_next/`
- Links to sitemap.xml
- Correct and sufficient

---

## Schema Markup

### Currently Implemented
1. **OrganizationSchema** — Good, but missing `sameAs` for social profiles
2. **WebSiteSchema** — Minimal, could add `potentialAction` for site search
3. **SoftwareAppSchema** — Good pricing info, missing `aggregateRating`
4. **FAQSchema** — Properly implemented on FAQ page layout

### Missing
- **BreadcrumbList** — Should exist on all pages
- **Article** — Needed when blog launches
- **HowTo** — Could be valuable on product page
- Per-page specific schemas

---

## next.config.ts

**Current:** Empty (default config only)

**Missing:**
- Security headers (CSP, X-Frame-Options, HSTS, etc.)
- Image optimization configuration
- Redirect rules
- Performance headers

---

## Analytics

**Current:** None

**Required:**
- GA4 integration (scaffold with placeholder ID)
- Event tracking for CTAs, pricing clicks, conversions
- Google Search Console preparation

---

## H1 Structure Issues

| Page | Current H1 | Problem |
|------|-----------|---------|
| Home | RotatingText "Speak/Record/Capture/Share" + "once/freely/anything/always" + "Get everything" | Invisible measurement spans pollute H1 text. Google sees all rotation variants. |
| Product | "Everything your audio" + rotating "becomes/creates/unlocks/reveals" | Same issue — rotating text in H1 |
| Features | "A complete audio" + rotating "intelligence/transformation/clarity/productivity" + "platform" | Same issue |
| Pricing | "Simple," + rotating "transparent/honest/fair/clear" + "pricing" | Same issue |
| Use Cases | "Works the way you" + rotating "work/think/create/learn" | Same issue |
| About | "Why Sythio" + rotating "exists/matters/works/transforms" | Same issue |
| Contact | "Get in" + rotating "touch/contact/sync/conversation" | Same issue |
| FAQ | "Frequently asked" + rotating "questions/topics/answers/insights" | Same issue |

**Fix:** Keep RotatingText visually but ensure H1 has stable primary text. Move rotating part to a `<span>` with `aria-label` or restructure H1 to lead with stable keyword-rich text.

---

## Performance Notes

- Two animation libraries (GSAP + Framer Motion) — acceptable but heavy
- No evidence of `prefers-reduced-motion` handling
- Google Fonts via next/font (optimized)
- No observable layout shift issues from code review
- Image handling: minimal images, mostly CSS/SVG mockups

---

## Critical Fixes Implemented

1. Security headers in next.config.ts
2. Analytics scaffolding (GA4 provider + event utilities)
3. BreadcrumbList schema component
4. Improved per-page metadata
5. New content pages for SEO surface area
6. Updated sitemap with all new pages
7. Internal linking improvements
