# Sythio Master Strategy

## 1. Category Ownership

Sythio must own the category: **"voice-to-structure" / "audio intelligence"**.

Not transcription. Not meeting notes. Not generic AI productivity.

**Category definition:** Tools that transform raw audio into multiple structured, actionable outputs from a single recording.

**Positioning thesis:** Sythio is the premium voice-first product that turns audio into useful, structured, actionable outputs. One recording becomes summaries, tasks, action plans, reports, messages, study notes, clean text, key points, and ideas.

---

## 2. Homepage Thesis

The homepage must answer in under 10 seconds:
1. **What goes in** — your voice / audio recordings
2. **What comes out** — structured outputs (summaries, tasks, action plans, etc.)
3. **Why Sythio** — one recording, nine outcomes. Not transcription. Transformation.
4. **Why it's better** — premium, elegant, calm, intelligent. Voice becomes structure.

The homepage flow: Hero (input→output) → Problem (before/after) → How it works (3 steps) → Output modes (9 formats) → Speaker detection → Use cases → Experience → CTA.

---

## 3. What Sythio Must NOT Say

- "AI-powered note-taking assistant"
- "Revolutionize your workflow"
- "Supercharge your productivity"
- "The future of meetings"
- Generic transcription positioning
- Vague "AI does everything" language
- Fake user numbers or testimonials
- Claims about integrations that don't exist

---

## 4. Website Architecture Required

### Core Pages (exist, need improvement)
- `/` — Homepage
- `/product` — Product deep dive
- `/features` — Features overview
- `/pricing` — Pricing
- `/faq` — FAQ
- `/about` — About
- `/contact` — Contact

### Feature Pages (new — Tier 2)
- `/features/ai-summaries`
- `/features/speaker-detection`
- `/features/task-extraction`
- `/features/action-plans`
- `/features/clean-text`
- `/features/reports`
- `/features/study-notes`
- `/features/key-points`
- `/features/ideas`
- `/features/messages`

### Use Case Pages (new — Tier 2)
- `/use-cases/meetings`
- `/use-cases/voice-notes`
- `/use-cases/lectures`
- `/use-cases/brainstorming`
- `/use-cases/client-calls`
- `/use-cases/sales-calls`
- `/use-cases/research-interviews`

### Audience Pages (new — Tier 2)
- `/for/students`
- `/for/founders`
- `/for/project-managers`
- `/for/consultants`
- `/for/sales`
- `/for/lawyers`
- `/for/creators`

### Comparison Pages (new — Tier 2)
- `/compare` — Hub
- `/compare/otter`
- `/compare/fireflies`
- `/compare/tldv`
- `/compare/plaud`
- `/compare/granola`

### Outcome/Transformation Pages (new — Tier 2)
- `/audio-to-summary`
- `/audio-to-tasks`
- `/audio-to-action-plan`
- `/audio-to-report`
- `/audio-to-study-notes`
- `/audio-to-clean-text`
- `/audio-to-message`

### Content Hub (future — Tier 3)
- `/blog`
- `/resources`
- `/guides`

---

## 5. Content Pillars

1. **Voice-to-Structure** — How audio becomes structured output
2. **Audio Intelligence** — Speaker detection, context understanding, multi-output
3. **Professional Productivity** — Meeting notes, client calls, follow-ups
4. **Learning & Education** — Study notes, lecture summaries, knowledge capture
5. **Premium Simplicity** — Clean UX, minimal interface, calm product experience

---

## 6. SEO Rendering Requirements

- All critical page content must render in initial HTML (SSR)
- English content renders server-side via React SSR (client components still SSR with initial state)
- H1s must be stable, keyword-rich, and not dependent on animated text
- RotatingText can exist as visual enhancement but must not be the sole H1 content
- Future: Route-based i18n (`/es/`, `/fr/`) for multilingual SEO

---

## 7. International SEO Model

### Current State
- 5 languages (EN, ES, FR, PT, IT) client-side only
- No locale routes, no hreflang, no server-side translation

### Target State (Tier 3)
- Route-based locale handling: `/es/producto`, `/fr/produit`
- hreflang alternates on all pages
- Dynamic `<html lang>` per locale
- Translated metadata per locale
- English as canonical default

### Interim (Now)
- Ensure English SSR is clean and complete
- Prepare architecture for future locale routing
- Keep client-side i18n functional for users

---

## 8. Conversion Model

### Current: Broken
- CTAs lead to `/pricing` or `/contact`
- No signup flow exists
- Contact form has no backend
- Dead-end conversion paths

### Target
- Primary CTA: "Start Free" → signup flow (when product exists)
- Secondary CTA: "See How It Works" → `/product`
- Tertiary CTA: "Explore Outputs" → `/features`
- All pricing buttons → signup (not contact)
- Contact form → functional backend (scaffold with TODO)

### Interim (Now)
- Scaffold a waitlist/early access flow
- Make CTAs internally consistent
- Ensure every CTA has a logical destination
- No dead ends

---

## 9. Top Priorities by Impact

### Tier 1 — Must fix now
1. Analytics scaffolding (GA4 + events)
2. Security headers in next.config.ts
3. Stable H1s on all pages
4. Improved metadata per page
5. BreadcrumbList schema
6. CTA coherence (no dead ends)

### Tier 2 — Build next
7. Individual feature pages (10)
8. Individual use case pages (7)
9. Comparison pages (5)
10. Audience pages (7)
11. Outcome/transformation pages (7)
12. Stronger internal linking
13. Blog architecture scaffold

### Tier 3 — Scale layer
14. Route-based i18n with hreflang
15. Resources/templates hub
16. Advanced per-page schema
17. Programmatic SEO templates
18. Digital PR strategy
19. Backlink acquisition

---

## 10. Phased Execution Plan

### Phase 1 (Now): Foundation
- Fix technical SEO infrastructure
- Stabilize H1s and metadata
- Add analytics scaffolding
- Improve schema
- Create 20+ new strategic pages
- Update sitemap

### Phase 2 (30 days): Content depth
- Launch blog with 10 initial posts
- Complete all feature pages
- Complete all use case pages
- Complete comparison pages
- Implement contextual internal linking across all pages

### Phase 3 (90 days): Market expansion
- Route-based i18n for ES, FR, PT, IT
- Audience pages for all segments
- Resources hub with downloadable content
- Integration pages (when integrations exist)
- Digital PR campaign

### Phase 4 (6-12 months): Category leadership
- 100+ indexed pages
- Programmatic SEO for long-tail
- User-generated content (case studies, stories)
- YouTube content strategy
- Advanced conversion optimization
