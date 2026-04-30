# Sythio — Contexto General de la Página Web

> Documento de contexto detallado: qué información contiene cada página del sitio, sección por sección.
> Última actualización: 2026-04-29

---

## 1. Visión global del sitio

**Sythio** es un producto de "audio intelligence" / "voice-to-structure": el usuario graba (o sube) audio una sola vez y Sythio devuelve **9 outputs estructurados distintos** (resumen, tareas, plan de acción, texto limpio, reporte, mensaje, notas de estudio, puntos clave, ideas), con detección de hablantes incluida.

**Propuesta central (homepage thesis):** *Speak once → Get everything*. No es transcripción; es transformación.

**Stack y arquitectura:**
- Next.js (App Router) — `app/<ruta>/page.tsx` por cada ruta.
- Componentes de sección reutilizables en `app/components/sections/`.
- i18n en 5 idiomas (EN, ES, FR, PT, IT) vía `app/components/i18n/translations.ts`. Hoy es client-side; las traducciones de rutas (`/es/producto`) están planeadas (Tier 3).
- SEO server-rendered: cada página lleva metadata, OG image (`opengraph-image.tsx`), JSON-LD y un `HomeSEOContent` / SEO content para crawlers.
- Tracking: GTM (`GTM-TL52VWSG`), Vercel Analytics, eventos GA4.

**CTA principal en todo el sitio:** botón → `https://sythio.app` (la app real).
**CTA secundario:** `/product` o `/pricing`.

**Idiomas soportados:** Inglés (default y canónico), Español, Francés, Portugués, Italiano.

---

## 2. Navegación y footer (presentes en todas las páginas)

### Navbar global (`app/components/navbar.tsx`)
- Product
- Features
- Use Cases
- Pricing
- Blog
- (En menú móvil/secundario): About, FAQ, Contact
- Selector de idioma
- CTA: "Start Free" → `https://sythio.app`

### Footer (`app/components/footer.tsx`) — agrupado en columnas
- **Product:** Product · Features · Pricing · Integrations · Enterprise · Security
- **Use Cases:** Voice Notes · Meetings · Lectures · Brainstorming · Client Calls · Podcasts · Interviews
- **Resources:** Blog · Compare · Glossary · Case Studies · FAQ
- **Company:** About · Contact · Privacy · Terms · Cookies
- Links sociales y selector de idioma

---

## 3. Páginas core

### `/` — Homepage
**H1 (rotativo + estático):** "Speak once / Get everything" + tagline gradient
**Subtítulo:** "Sythio transforma tu audio en resúmenes, tareas, planes de acción y outputs estructurados — para que nada de lo que dices se pierda."

Secciones (en orden, cada una es un componente en `app/components/sections/`):

1. **Hero** — Título rotativo (Speak/Record/Capture/Share — once/freely/anything/always), CTAs principales, mockup MacBook con transcripción + iPhone con la app móvil mostrando "3 grabaciones hoy", badges flotantes (Processing complete, Audio analyzed).
2. **Problem** — El "antes": 47 notas de voz sin escuchar, caos de grabaciones sin estructura. Plantea el dolor.
3. **HowItWorks** — Proceso en 3 pasos: Grabar → Analizar → Obtener output.
4. **MultipleOutcomes** — La sección clave: muestra los 9 outputs que produce un solo audio (Summary, Tasks, Action Plan, Clean Text, Report, Message, Study Notes, Key Points, Ideas).
5. **SpeakerDetection** — Identificación de quién dijo qué, con mockup de transcripción multi-hablante y métricas de precisión.
6. **Integrations** — Vista breve de exports e integraciones (PDF, Markdown, email, futuras: Notion, Slack, etc.).
7. **Collaboration** — Workspaces de equipo, librería compartida, permisos.
8. **ExportFeatures** — Formatos de salida (PDF, Markdown, Text, copy-to-clipboard, API).
9. **Security** — Mensaje resumen de cifrado, privacidad y compliance.
10. **UseCases** — Vista previa de casos de uso (preview, no la versión completa).
11. **ProductExperience** — Cómo se siente usar el producto en la práctica.
12. **FinalCTA** — "Start Using Sythio" — cierre.

**Intención SEO:** Brand + categoría "AI voice notes". Keywords del `<head>`: voice notes AI, AI voice notes app, audio summarizer, speaker detection, Otter alternative, Fireflies alternative, etc.

---

### `/product` — Product deep dive
**H1 rotativo:** "Your recording becomes / creates / unlocks / reveals…"
**Tagline:** "Convierte audio en el output que más importa: resúmenes, tareas, planes de acción, reportes — o algo completamente custom."

Secciones:
1. **Hero** — Verbos rotativos + dos mockups (browser dashboard + móvil).
2. **Output Modes** — Grid de 9 cards con cada tipo de output.
3. **Speaker Deep Dive** — Detección de hablantes con transcripción de ejemplo.
4. **Reuse Audio** — Procesar una vez, reutilizar muchas veces.
5. **Detailed Features** — Mockups de checklist, mensaje, plan de acción, study notes, dashboard.
6. **Workflow** — 4 beneficios (rápido, exports, librería, UX) + iPhone frame.
7. **Product CTA** — "Start Using Sythio" → `/pricing`.

**Intención:** Usuario que ya conoce Sythio y quiere ver de qué es capaz el producto en profundidad.

---

### `/features` — Catálogo de features
**H1 rotativo:** "Explore what Sythio can do / generate / organize / capture"

Secciones:
1. **Hero** — Mensaje + grid de 12 features.
2. **Feature Grid** — 12 cards: AI Summaries, Task Extraction, Action Plans, Speaker Detection, Clean Text, Reports, Messages, Study Notes, Ideas, Key Points, Exports, History. Cada card linkea a su página dedicada.
3. **Speaker Detection Highlight** — Spotlight con mockup.
4. **Output Showcase** — Mockups lado a lado de cada output.
5. **Mobile Experience** — Cómo se ven las features en iPhone.
6. **Features CTA** — "Get Started" + "Explore Use Cases".

**Intención:** Hub de features. Cada card es un punto de entrada SEO a una página de feature.

---

### `/pricing` — Precios
**H1 rotativo:** "Transparent / Honest / Fair / Clear pricing"
**Tagline:** "Cada plan tiene todo el poder de Sythio. La diferencia está en límites de uso y soporte."

Secciones:
1. **Hero** — Filosofía de pricing.
2. **Tres planes:**
   - **Free** — $0/mes, 5 grabaciones/mes, features clave incluidas.
   - **Premium** (destacado) — $15/mes por usuario, grabaciones ilimitadas, todas las features.
   - **Enterprise** — Pricing custom para equipos 10+, SSO, soporte dedicado, outputs custom.
3. **What every plan gets** — 4 features universales (procesamiento AI, detección de hablantes, múltiples outputs, seguridad).
4. **FAQ Accordion** — 5 preguntas comunes de pricing.
5. **CTA** — "Get Started" + "Explore Product".

**Intención:** Página de conversión / decisión de compra.

---

### `/use-cases` — Hub de casos de uso
**H1 rotativo:** "Audio intelligence for meetings / voice notes / lectures / brainstorming"

Secciones:
1. **Hero** — 8 pills flotantes con casos de uso.
2. **Stats Bar** — 9 outputs · 30s procesamiento · 10+ casos de uso · 5 audiencias.
3. **Use Case Grid** — 8 cards alternados con mockup:
   - Meetings → Meeting summaries
   - Voice Notes → Idea capture
   - Brainstorming → Organized output
   - Lectures → Study notes
   - Client Calls → Follow-up templates
   - Follow-ups → Email drafts
   - Brain Dumps → Organized thoughts
   - Decisions → Decision log
4. **CTA** — "Get Started" + "Explore Features".

---

### `/faq` — Preguntas frecuentes
**H1 rotativo:** "Frequently asked questions / topics / answers / insights"

1. **Hero** — Intro con 3 cards Q&A flotantes animadas.
2. **Accordion** — 10 preguntas (la primera abierta por default).
3. **Related Links** — 3 cards: Product · Features · Pricing.
4. **CTA principal** — "Get Started".

---

### `/about` — Sobre Sythio
**H1 rotativo:** "Why Sythio exists / matters / works / transforms"
**Tagline:** "Claridad desde el caos. Estructura desde el habla."

1. **Hero** — Visualización animada waveform-to-structure.
2. **Mission** — 3 párrafos sobre por qué existe Sythio.
3. **Values** — 4 cards: Clarity, Voice, Structure, Privacy.
4. **Pull Quote** — Cita inspiracional.
5. **CTA** — "Explore Product" + "View Pricing".

---

### `/contact` — Contacto
**H1 rotativo:** "Get in touch / contact / sync / conversation"

1. **Hero** — 3 cards flotantes con métodos de email.
2. **Category Cards (4):** General (hello@), Support (support@), Partnerships (partners@), Press (press@).
3. **Contact Form** — Nombre, email, asunto, mensaje. Tiene estado de éxito animado pero **no tiene backend funcional aún** (TODO conocido).
4. **Response time badge** — "Respondemos en 24h".

---

### `/enterprise` — Plan empresa
**H1:** "AI Audio Intelligence for Your Entire Organization"

1. **Hero** — CTA "Contact Sales".
2. **Built for Teams (4):** Workspaces, Shared Audio Library, Role-Based Access, Collaboration.
3. **Enterprise Security (4):** SSO/SAML, AES-256+TLS 1.3, Audit Logs, Data Residency.
4. **Integrations (6):** Slack, Notion, Salesforce, Google Workspace, Microsoft 365, API/Webhooks.
5. **Custom Solutions (4):** Custom outputs, Account Manager, Priority Support, Custom Onboarding.
6. **Pricing custom** — "Contact Sales".
7. **CTA final.**

---

### `/security` — Seguridad
**H1:** "Your Audio Data, Fully Protected"

1. **Hero** — Promesa + trust badge.
2. **Data Protection (4):** TLS 1.3 in transit, AES-256 at rest, Encrypted backups, Key management.
3. **Privacy by Design (3):** No training on your data, Delete anytime, No third-party sharing.
4. **Compliance (3):** GDPR, SOC 2 Type II, DPAs.
5. **Infrastructure (3):** Cloud security (SOC 2 + ISO 27001), Access controls (least privilege, MFA), Continuous monitoring 24/7.
6. **Your Rights (4):** Access, Deletion, Portability, Export.
7. **CTA** — "Start Free" + link a Privacy Policy.

---

### `/integrations` — Integraciones
**H1:** "Sythio works where you work"

1. **Hero**.
2. **Export Formats (4):** PDF, Text, Markdown, Clipboard.
3. **Integration Grid (8):**
   - **Disponible ahora:** Email.
   - **Coming soon:** Notion, Slack, Google Docs, Zapier, Calendar, Trello/Asana, API.
4. **API Access** — Sección dedicada con mockup de código (REST + webhooks).
5. **CTA** — "Get Started" + "Explore Features".

---

### `/glossary` — Glosario
**H1:** "Understanding Audio Intelligence"

Glosario de 40+ términos: Acoustic Model, Action Plan Generation, Audio Intelligence, Audio Library, Audio Processing Pipeline, Audio Summarization, Audio-to-Text, Clean Text Processing, Speaker Diarization, etc. Cada término tiene definición + link opcional a la página relevante.

**Intención:** SEO long-tail + onboarding educativo.

---

### `/case-studies` — Casos de estudio
**H1:** "Real Results from Real Users"
**Subtítulo rotativo:** "Trusted by founders / consultants / sales teams / students / managers"

5 cards de casos reales:
- **Sarah (Founder)** — 3h ahorradas/semana con resúmenes + extracción de tareas.
- **James (Consultant)** — 5x más rápido documentando con reports + clean text.
- **Mike (Sales)** — 2h más vendiendo/semana (call summaries + follow-ups).
- **Priya (Student)** — Mejora de calificaciones con notas de estudio automatizadas.
- **David (PM)** — Mejor alineación del equipo con documentación de decisiones.

**Intención:** Social proof, ROI, validación por persona.

---

### `/blog` — Blog
**Estructura:** Index lista todos los posts con artículo destacado, badges de categoría y fechas. Posts dinámicos vía `/blog/[slug]/page.tsx`. Contenido en `app/blog/content/<slug>.tsx`.

**Posts actuales (17):**
- ai-for-sales-calls
- ai-lecture-notes-students
- audio-data-security-privacy
- audio-to-action-plan
- best-ai-voice-note-apps-comparison-2026
- best-ai-voice-notes-apps
- beyond-transcription
- guide-audio-intelligence
- interview-transcription-tools
- meeting-notes-ai
- meeting-notes-vs-recordings
- meeting-recordings-unlistened
- otter-vs-fireflies
- podcast-transcription-automation
- record-meetings-zoom-teams-meet
- speaker-detection-explained
- speaker-diarization-explained
- speech-to-text-vs-transcription
- too-many-voice-memos
- voice-notes-vs-typed-notes

**Intención:** SEO long-tail, thought leadership, contenido de comparación con competidores.

---

## 4. Páginas de feature (`/features/<feature>`)

Plantilla común: Hero con texto rotativo → diferenciadores (3-4 cards) → workflow 3 pasos → casos de uso específicos → cross-link a features relacionadas → CTA a pricing/product.

| Ruta | Título / mensaje principal |
|------|----------------------------|
| `/features/ai-summaries` | "Audio Summaries That Capture What Matters" — no es transcript corto, es overview claro de qué se discutió, decidió y siguió. |
| `/features/speaker-detection` | "Know Who Said What" — identifica y trackea cada hablante en todos los outputs. |
| `/features/task-extraction` | "Turn Conversations into Action" — extrae action items, owners y deadlines. |
| `/features/action-plans` | "From Decisions to Steps" — planes paso a paso con dependencias. |
| `/features/clean-text` | "Polished Transcription" — texto publicable: filler words quitados, gramática corregida. |
| `/features/reports` | "Executive-Ready Documentation" — reportes formateados para clientes/archivos. |
| `/features/study-notes` | "Learn Faster with AI Notes" — clases → guías de estudio con conceptos clave. |
| `/features/key-points` | "The Essential Takeaways" — puntos más importantes de cualquier conversación. |
| `/features/ideas` | "Capture Creative Sparks" — voice notes y brainstorms organizados como ideas accionables. |
| `/features/messages` | "Ready-to-Send Follow-Ups" — mensajes profesionales de follow-up generados al instante. |

---

## 5. Páginas de caso de uso (`/use-cases/<caso>`)

Plantilla: hero específico → problema sin Sythio → cómo Sythio lo resuelve → ejemplos de output → casos de uso relacionados → CTA.

| Ruta | Foco |
|------|------|
| `/use-cases/meetings` | Decisiones, action items, alineación post-meeting. |
| `/use-cases/voice-notes` | Captura rápida → output organizado (voz a tarea/recordatorio). |
| `/use-cases/lectures` | Estudio: clases → notas estructuradas. |
| `/use-cases/brainstorming` | Captura y organización de ideas. |
| `/use-cases/client-calls` | Documentación, follow-ups, entregables al cliente. |
| `/use-cases/interviews` | Notas de entrevistas, hiring, candidate notes. |
| `/use-cases/podcasts` | Resúmenes de episodio, show notes, transcripts. |

---

## 6. Páginas de audiencia (`/for/<persona>`)

Landing dedicado para cada perfil profesional.

| Ruta | Persona — foco |
|------|----------------|
| `/for/students` | Notas de estudio, captura de clases, prep de exámenes. |
| `/for/founders` | Documentación de meetings, tracking de decisiones, alineación de equipo. |
| `/for/project-managers` | Status tracking, asignación de tareas, documentación de entregables. |
| `/for/consultants` | Documentación de cliente, generación de reportes, follow-ups. |
| `/for/salespeople` | Resúmenes de llamadas, follow-ups, integración CRM. |
| `/for/lawyers` | Notas de entrevistas/depos, documentación de casos, compliance. |

---

## 7. Páginas de comparación

### `/compare/<competidor>`
Plantilla: tabla comparativa Sythio vs. competidor, pros/cons, pricing, ideal-para-quién.

- `/compare/otter` — Sythio vs Otter.ai
- `/compare/fireflies` — Sythio vs Fireflies
- `/compare/tldv` — Sythio vs tl;dv
- `/compare/notta` — Sythio vs Notta
- `/compare/audiopen` — Sythio vs Audiopen

### `/alternatives/<competidor>`
Mismo template pero posicionado como "alternativa a X" (intención SEO distinta).

- `/alternatives/otter`
- `/alternatives/fireflies`
- `/alternatives/tldv`

---

## 8. Páginas de transformación / outcome (root-level)

Páginas SEO de alta intención que enfocan una transformación específica audio→output.

| Ruta | Output |
|------|--------|
| `/audio-to-summary` | Resumen |
| `/audio-to-tasks` | Lista de tareas / action items |
| `/audio-to-action-plan` | Plan de acción estructurado |
| `/audio-to-report` | Reporte profesional |
| `/audio-to-study-notes` | Notas de estudio |
| `/audio-to-clean-text` | Texto limpio publicable |
| `/audio-to-messages` | Mensajes de follow-up |
| `/audio-to-key-points` | Puntos clave |
| `/audio-to-ideas` | Ideas organizadas |
| `/audio-to-transcript` | Transcripción |

Cada página enfatiza un output específico + casos de uso + beneficios. Capturan keywords tipo "convert audio to X" / "audio to X tool".

---

## 9. Páginas legales

- `/privacy-policy` — Documentación de privacidad GDPR completa.
- `/terms` — Términos de servicio.
- `/cookie-policy` — Consent y disclosure de cookies.

---

## 10. Pillars de contenido y modelo hub-and-spoke

Cada pillar tiene una hub page y varias spoke pages:

1. **Audio-to-Structure (core)** — Hub: `/product`. Spokes: features de output + páginas `/audio-to-*`.
2. **Speaker Intelligence** — Hub: `/features/speaker-detection`. Spokes: meetings, client-calls, key-points, compare/otter.
3. **Professional Use Cases** — Hub: `/use-cases`. Spokes: cada caso + páginas `/for/*`.
4. **Learning & Education** — Hub: `/use-cases/lectures`. Spokes: study-notes, for/students, key-points, ideas.
5. **Market Positioning** — Hub: `/compare`. Spokes: cada `/compare/*` y `/alternatives/*`.

**Reglas de cross-linking:**
- Cada página linkea ≥ 2 páginas de contenido relacionadas (in-body).
- Cada página linkea a pricing vía CTA.
- Hub → todas sus spokes; spokes → hub + spokes hermanas relevantes.

---

## 11. Notas operativas y estado actual

- **CTAs:** Hoy todos los "Start Free" apuntan a `https://sythio.app`. Antes apuntaban a `/pricing` o `/contact` (dead-ends), ya corregido.
- **Contact form:** UI lista con success state, **falta backend funcional** (TODO).
- **i18n:** 5 idiomas client-side. Aún sin rutas localizadas (`/es/`, `/fr/`) ni hreflang completo — planeado para Tier 3.
- **Analytics:** GTM + Vercel Analytics activos. GA4 con eventos custom scaffolded.
- **Schema.org:** Organization, WebSite y SoftwareApplication renderizados desde el layout. BreadcrumbList por página = pendiente en algunas rutas.
- **Sitemap & robots:** generados dinámicamente (`app/sitemap.ts`, `app/robots.ts`).
- **OG images:** cada página clave tiene su propio `opengraph-image.tsx`.

---

## 12. Resumen ejecutivo

| Dimensión | Estado |
|-----------|--------|
| **Total de rutas mapeadas** | 60+ páginas |
| **Estructura** | Hub-and-spoke por pillar de contenido |
| **Funnel** | Awareness (home) → Features → Use Cases → Pricing → App |
| **i18n** | 5 idiomas (EN canónico) — client-side |
| **SEO** | Metadata por página, JSON-LD global, OG images, sitemap dinámico |
| **Patrón de diseño** | Hero + section cards + mockups + CTA — consistente en todo el sitio |
| **Tono de marca** | Premium, calmado, sharp, mínimo. Voz se vuelve estructura. |

El sitio prioriza mensaje claro de valor, social proof (case studies), cobertura completa de features y embudos de conversión, manteniendo una estética premium y design-forward.
