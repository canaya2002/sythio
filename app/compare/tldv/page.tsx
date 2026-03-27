"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Comparison",
    title: "Sythio vs tl;dv",
    subtitle: "tl;dv is a powerful video meeting recorder with transcription and summaries. Sythio takes a different path \u2014 transforming any audio into 9 structured outputs for people who need more than meeting playback.",
    trySythio: "Try Sythio Free",
    seeHow: "See How It Works",
    twoApproaches: "Two approaches",
    coreDifference: "The Core Difference",
    competitorApproach: "tl;dv\u2019s approach",
    competitorTitle: "Video meeting recorder",
    competitorDesc: "tl;dv records your video meetings and makes them searchable. It creates transcripts, generates summaries, and lets you clip and share important moments from calls. Its strength is in video meeting documentation \u2014 reviewing, clipping, and sharing what was discussed on camera.",
    competitorItem1: "Video meeting recording",
    competitorItem2: "Timestamped transcripts",
    competitorItem3: "AI summaries with action items",
    competitorItem4: "Shareable video clips and highlights",
    sythioApproach: "Sythio\u2019s approach",
    sythioTitle: "Multi-output audio intelligence",
    sythioDesc: "Sythio is not a video recorder. It is an audio intelligence platform that transforms any spoken content \u2014 meetings, voice notes, lectures, brainstorms, client calls \u2014 into 9 structured output formats. Where tl;dv helps you review what happened, Sythio helps you act on it.",
    sythioItem1: "9 structured output formats",
    sythioItem2: "Any audio source, not just meetings",
    sythioItem3: "Action plans, reports, and follow-ups",
    sythioItem4: "Built for transformation, not playback",
    comparisonTitle: "Feature-by-Feature Comparison",
    comparisonSubtitle: "An honest look at what each tool offers.",
    thFeature: "Feature",
    whenTitle: "When to Choose Sythio",
    whenSubtitle: "Sythio is the better fit when you need structured outputs from any audio, not just meeting recordings.",
    when1Title: "Your audio goes beyond video meetings",
    when1Desc: "tl;dv is built for video calls. If you also capture voice notes, record lectures, brainstorm out loud, or have phone conversations you want to process \u2014 Sythio handles all of it.",
    when2Title: "You want structured outputs, not video playback",
    when2Desc: "tl;dv excels at letting you review meetings on video. Sythio is built for people who want to skip the playback and go straight to organized summaries, task lists, action plans, and reports.",
    when3Title: "You need action plans and executive reports",
    when3Desc: "Sythio creates outputs that tl;dv does not \u2014 structured action plans, executive reports ready for stakeholders, follow-up messages you can send immediately, and study notes for learning.",
    when4Title: "You prefer audio-first workflows",
    when4Desc: "If you think in voice, capture ideas by speaking, and want those thoughts organized \u2014 Sythio was designed for exactly that kind of audio-first productivity.",
    tldvBetterTitle: "When tl;dv Might Be the Right Choice",
    tldvBetterSubtitle: "We believe in honest comparisons. Here is where tl;dv shines.",
    tldvBetter1Title: "You need video recording",
    tldvBetter1Desc: "If you need to record the video of your meetings \u2014 not just the audio \u2014 tl;dv is built for that. Sythio is audio-only and does not capture video.",
    tldvBetter2Title: "You want shareable video clips",
    tldvBetter2Desc: "tl;dv lets you clip specific moments from meetings and share them as video snippets. This is a unique strength for teams that need to share visual context.",
    moreComparisons: "More Comparisons",
    vsOtter: "vs Otter.ai",
    vsFireflies: "vs Fireflies.ai",
    allFeatures: "All Features",
    pricing: "Pricing",
    ctaTitle1: "Transform audio, not just",
    ctaTitle2: "record it",
    ctaSubtitle: "Try Sythio free and see what your audio becomes when it is transformed into structured, actionable outputs \u2014 not just a recording to replay.",
    startFree: "Start Free",
    exploreFeatures: "Explore Features",
    freePlan: "Free plan includes 5 recordings per month. No credit card needed.",
    "row.primaryOutput": "Primary output",
    "row.primaryOutput.sythio": "9 structured formats",
    "row.primaryOutput.competitor": "Video recording + transcript",
    "row.inputType": "Input type",
    "row.inputType.sythio": "Any audio source",
    "row.inputType.competitor": "Video meetings only",
    "row.summaries": "Summaries",
    "row.summaries.sythio": "\u2713 From audio directly",
    "row.summaries.competitor": "\u2713 AI-generated from transcript",
    "row.taskExtraction": "Task extraction",
    "row.taskExtraction.sythio": "\u2713 Automatic with speaker attribution",
    "row.taskExtraction.competitor": "\u2713 Basic action items",
    "row.actionPlans": "Action plans",
    "row.actionPlans.sythio": "\u2713 Structured and prioritized",
    "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Executive reports",
    "row.executiveReports.sythio": "\u2713 Shareable reports",
    "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "Speaker detection",
    "row.speakerDetection.sythio": "\u2713 With task attribution",
    "row.speakerDetection.competitor": "\u2713 Speaker labels",
    "row.studyNotes": "Study notes",
    "row.studyNotes.sythio": "\u2713 Structured for review",
    "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Follow-up messages",
    "row.followUp.sythio": "\u2713 Ready-to-send drafts",
    "row.followUp.competitor": "\u2014",
    "row.cleanText": "Clean text",
    "row.cleanText.sythio": "\u2713 Polished prose from audio",
    "row.cleanText.competitor": "\u2014",
    "row.keyPoints": "Key points",
    "row.keyPoints.sythio": "\u2713 Extracted and organized",
    "row.keyPoints.competitor": "\u2713 Highlights and timestamps",
    "row.ideas": "Ideas extraction",
    "row.ideas.sythio": "\u2713 Captured and categorized",
    "row.ideas.competitor": "\u2014",
    "row.videoRecording": "Video recording",
    "row.videoRecording.sythio": "\u2014 Audio-focused",
    "row.videoRecording.competitor": "\u2713 Full video recording",
    "row.timestampedClips": "Timestamped clips",
    "row.timestampedClips.sythio": "\u2014",
    "row.timestampedClips.competitor": "\u2713 Shareable video clips",
    "row.voiceNotes": "Voice notes & brainstorms",
    "row.voiceNotes.sythio": "\u2713 Built for any audio",
    "row.voiceNotes.competitor": "\u2014",
    "row.lectures": "Lectures & study sessions",
    "row.lectures.sythio": "\u2713 With study notes output",
    "row.lectures.competitor": "\u2014",
    "row.freePlan": "Free plan",
    "row.freePlan.sythio": "$0 \u2014 5 recordings/mo",
    "row.freePlan.competitor": "$0 \u2014 limited recordings",
    "row.proPlan": "Pro plan",
    "row.proPlan.sythio": "$12/mo",
    "row.proPlan.competitor": "$18/mo",
  },
  es: {
    label: "Comparaci\u00f3n",
    title: "Sythio vs tl;dv",
    subtitle: "tl;dv es un potente grabador de videoconferencias con transcripci\u00f3n y res\u00famenes. Sythio toma un camino diferente \u2014 transforma cualquier audio en 9 resultados estructurados para personas que necesitan m\u00e1s que reproducci\u00f3n de reuniones.",
    trySythio: "Prueba Sythio Gratis",
    seeHow: "Ver C\u00f3mo Funciona",
    twoApproaches: "Dos enfoques",
    coreDifference: "La Diferencia Principal",
    competitorApproach: "El enfoque de tl;dv",
    competitorTitle: "Grabador de videoconferencias",
    competitorDesc: "tl;dv graba tus videoconferencias y las hace buscables. Crea transcripciones, genera res\u00famenes y te permite recortar y compartir momentos importantes de las llamadas. Su fortaleza est\u00e1 en la documentaci\u00f3n de reuniones en video \u2014 revisar, recortar y compartir lo discutido en c\u00e1mara.",
    competitorItem1: "Grabaci\u00f3n de videoconferencias",
    competitorItem2: "Transcripciones con marcas de tiempo",
    competitorItem3: "Res\u00famenes IA con elementos de acci\u00f3n",
    competitorItem4: "Clips de video compartibles y destacados",
    sythioApproach: "El enfoque de Sythio",
    sythioTitle: "Inteligencia de audio multi-resultado",
    sythioDesc: "Sythio no es un grabador de video. Es una plataforma de inteligencia de audio que transforma cualquier contenido hablado \u2014 reuniones, notas de voz, clases, lluvia de ideas, llamadas con clientes \u2014 en 9 formatos de resultados estructurados. Donde tl;dv te ayuda a revisar lo que pas\u00f3, Sythio te ayuda a actuar al respecto.",
    sythioItem1: "9 formatos de resultados estructurados",
    sythioItem2: "Cualquier fuente de audio, no solo reuniones",
    sythioItem3: "Planes de acci\u00f3n, informes y seguimientos",
    sythioItem4: "Dise\u00f1ado para transformar, no para reproducir",
    comparisonTitle: "Comparaci\u00f3n Caracter\u00edstica por Caracter\u00edstica",
    comparisonSubtitle: "Una mirada honesta a lo que ofrece cada herramienta.",
    thFeature: "Caracter\u00edstica",
    whenTitle: "Cu\u00e1ndo Elegir Sythio",
    whenSubtitle: "Sythio es la mejor opci\u00f3n cuando necesitas resultados estructurados de cualquier audio, no solo grabaciones de reuniones.",
    when1Title: "Tu audio va m\u00e1s all\u00e1 de videoconferencias",
    when1Desc: "tl;dv est\u00e1 dise\u00f1ado para videollamadas. Si tambi\u00e9n capturas notas de voz, grabas clases, haces lluvia de ideas en voz alta o tienes conversaciones telef\u00f3nicas que quieres procesar \u2014 Sythio maneja todo eso.",
    when2Title: "Quieres resultados estructurados, no reproducci\u00f3n de video",
    when2Desc: "tl;dv sobresale al permitirte revisar reuniones en video. Sythio est\u00e1 dise\u00f1ado para personas que quieren saltarse la reproducci\u00f3n e ir directamente a res\u00famenes organizados, listas de tareas, planes de acci\u00f3n e informes.",
    when3Title: "Necesitas planes de acci\u00f3n e informes ejecutivos",
    when3Desc: "Sythio crea resultados que tl;dv no ofrece \u2014 planes de acci\u00f3n estructurados, informes ejecutivos listos para las partes interesadas, mensajes de seguimiento que puedes enviar inmediatamente y notas de estudio para aprendizaje.",
    when4Title: "Prefieres flujos de trabajo audio-primero",
    when4Desc: "Si piensas con la voz, capturas ideas hablando y quieres que esos pensamientos se organicen \u2014 Sythio fue dise\u00f1ado exactamente para ese tipo de productividad audio-primero.",
    tldvBetterTitle: "Cu\u00e1ndo tl;dv Puede Ser la Mejor Opci\u00f3n",
    tldvBetterSubtitle: "Creemos en comparaciones honestas. Aqu\u00ed es donde brilla tl;dv.",
    tldvBetter1Title: "Necesitas grabaci\u00f3n de video",
    tldvBetter1Desc: "Si necesitas grabar el video de tus reuniones \u2014 no solo el audio \u2014 tl;dv est\u00e1 dise\u00f1ado para eso. Sythio es solo audio y no captura video.",
    tldvBetter2Title: "Quieres clips de video compartibles",
    tldvBetter2Desc: "tl;dv te permite recortar momentos espec\u00edficos de reuniones y compartirlos como fragmentos de video. Es una fortaleza \u00fanica para equipos que necesitan compartir contexto visual.",
    moreComparisons: "M\u00e1s Comparaciones",
    vsOtter: "vs Otter.ai",
    vsFireflies: "vs Fireflies.ai",
    allFeatures: "Todas las Funciones",
    pricing: "Precios",
    ctaTitle1: "Transforma el audio, no solo",
    ctaTitle2: "lo grabes",
    ctaSubtitle: "Prueba Sythio gratis y descubre en qu\u00e9 se convierte tu audio cuando se transforma en resultados estructurados y accionables \u2014 no solo una grabaci\u00f3n para reproducir.",
    startFree: "Comenzar Gratis",
    exploreFeatures: "Explorar Funciones",
    freePlan: "El plan gratuito incluye 5 grabaciones al mes. Sin tarjeta de cr\u00e9dito.",
    "row.primaryOutput": "Resultado principal", "row.primaryOutput.sythio": "9 formatos estructurados", "row.primaryOutput.competitor": "Grabaci\u00f3n de video + transcripci\u00f3n",
    "row.inputType": "Tipo de entrada", "row.inputType.sythio": "Cualquier fuente de audio", "row.inputType.competitor": "Solo videoconferencias",
    "row.summaries": "Res\u00famenes", "row.summaries.sythio": "\u2713 Directamente del audio", "row.summaries.competitor": "\u2713 Generado por IA desde la transcripci\u00f3n",
    "row.taskExtraction": "Extracci\u00f3n de tareas", "row.taskExtraction.sythio": "\u2713 Autom\u00e1tica con atribuci\u00f3n de hablante", "row.taskExtraction.competitor": "\u2713 Elementos de acci\u00f3n b\u00e1sicos",
    "row.actionPlans": "Planes de acci\u00f3n", "row.actionPlans.sythio": "\u2713 Estructurados y priorizados", "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Informes ejecutivos", "row.executiveReports.sythio": "\u2713 Informes compartibles", "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "Detecci\u00f3n de hablantes", "row.speakerDetection.sythio": "\u2713 Con atribuci\u00f3n de tareas", "row.speakerDetection.competitor": "\u2713 Etiquetas de hablante",
    "row.studyNotes": "Notas de estudio", "row.studyNotes.sythio": "\u2713 Estructuradas para revisi\u00f3n", "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Mensajes de seguimiento", "row.followUp.sythio": "\u2713 Borradores listos para enviar", "row.followUp.competitor": "\u2014",
    "row.cleanText": "Texto limpio", "row.cleanText.sythio": "\u2713 Prosa pulida del audio", "row.cleanText.competitor": "\u2014",
    "row.keyPoints": "Puntos clave", "row.keyPoints.sythio": "\u2713 Extra\u00eddos y organizados", "row.keyPoints.competitor": "\u2713 Destacados y marcas de tiempo",
    "row.ideas": "Extracci\u00f3n de ideas", "row.ideas.sythio": "\u2713 Capturadas y categorizadas", "row.ideas.competitor": "\u2014",
    "row.videoRecording": "Grabaci\u00f3n de video", "row.videoRecording.sythio": "\u2014 Enfocado en audio", "row.videoRecording.competitor": "\u2713 Grabaci\u00f3n de video completa",
    "row.timestampedClips": "Clips con marcas de tiempo", "row.timestampedClips.sythio": "\u2014", "row.timestampedClips.competitor": "\u2713 Clips de video compartibles",
    "row.voiceNotes": "Notas de voz y lluvia de ideas", "row.voiceNotes.sythio": "\u2713 Dise\u00f1ado para cualquier audio", "row.voiceNotes.competitor": "\u2014",
    "row.lectures": "Clases y sesiones de estudio", "row.lectures.sythio": "\u2713 Con resultado de notas de estudio", "row.lectures.competitor": "\u2014",
    "row.freePlan": "Plan gratuito", "row.freePlan.sythio": "$0 \u2014 5 grabaciones/mes", "row.freePlan.competitor": "$0 \u2014 grabaciones limitadas",
    "row.proPlan": "Plan Pro", "row.proPlan.sythio": "$12/mes", "row.proPlan.competitor": "$18/mes",
  },
  fr: {
    label: "Comparaison",
    title: "Sythio vs tl;dv",
    subtitle: "tl;dv est un puissant enregistreur de visioconf\u00e9rences avec transcription et r\u00e9sum\u00e9s. Sythio prend un chemin diff\u00e9rent \u2014 transformant tout audio en 9 r\u00e9sultats structur\u00e9s pour ceux qui ont besoin de plus que la relecture de r\u00e9unions.",
    trySythio: "Essayer Sythio Gratuitement",
    seeHow: "Voir Comment \u00c7a Marche",
    twoApproaches: "Deux approches",
    coreDifference: "La Diff\u00e9rence Fondamentale",
    competitorApproach: "L\u2019approche de tl;dv",
    competitorTitle: "Enregistreur de visioconf\u00e9rences",
    competitorDesc: "tl;dv enregistre vos visioconf\u00e9rences et les rend consultables. Il cr\u00e9e des transcriptions, g\u00e9n\u00e8re des r\u00e9sum\u00e9s et vous permet de d\u00e9couper et partager les moments importants des appels. Sa force est dans la documentation de r\u00e9unions vid\u00e9o \u2014 revoir, d\u00e9couper et partager ce qui a \u00e9t\u00e9 discut\u00e9 \u00e0 l\u2019\u00e9cran.",
    competitorItem1: "Enregistrement de visioconf\u00e9rences",
    competitorItem2: "Transcriptions horodat\u00e9es",
    competitorItem3: "R\u00e9sum\u00e9s IA avec \u00e9l\u00e9ments d\u2019action",
    competitorItem4: "Clips vid\u00e9o partageables et temps forts",
    sythioApproach: "L\u2019approche de Sythio",
    sythioTitle: "Intelligence audio multi-r\u00e9sultats",
    sythioDesc: "Sythio n\u2019est pas un enregistreur vid\u00e9o. C\u2019est une plateforme d\u2019intelligence audio qui transforme tout contenu parl\u00e9 \u2014 r\u00e9unions, notes vocales, cours, brainstormings, appels clients \u2014 en 9 formats de r\u00e9sultats structur\u00e9s. L\u00e0 o\u00f9 tl;dv vous aide \u00e0 revoir ce qui s\u2019est pass\u00e9, Sythio vous aide \u00e0 agir.",
    sythioItem1: "9 formats de r\u00e9sultats structur\u00e9s",
    sythioItem2: "Toute source audio, pas seulement les r\u00e9unions",
    sythioItem3: "Plans d\u2019action, rapports et suivis",
    sythioItem4: "Con\u00e7u pour la transformation, pas la relecture",
    comparisonTitle: "Comparaison Fonctionnalit\u00e9 par Fonctionnalit\u00e9",
    comparisonSubtitle: "Un regard honn\u00eate sur ce que chaque outil propose.",
    thFeature: "Fonctionnalit\u00e9",
    whenTitle: "Quand Choisir Sythio",
    whenSubtitle: "Sythio est le meilleur choix quand vous avez besoin de r\u00e9sultats structur\u00e9s de tout audio, pas seulement d\u2019enregistrements de r\u00e9unions.",
    when1Title: "Votre audio va au-del\u00e0 des visioconf\u00e9rences",
    when1Desc: "tl;dv est con\u00e7u pour les appels vid\u00e9o. Si vous capturez aussi des notes vocales, enregistrez des cours, faites du brainstorming \u00e0 voix haute ou avez des conversations t\u00e9l\u00e9phoniques \u00e0 traiter \u2014 Sythio g\u00e8re tout cela.",
    when2Title: "Vous voulez des r\u00e9sultats structur\u00e9s, pas de la relecture vid\u00e9o",
    when2Desc: "tl;dv excelle \u00e0 vous permettre de revoir les r\u00e9unions en vid\u00e9o. Sythio est con\u00e7u pour ceux qui veulent sauter la relecture et aller directement aux r\u00e9sum\u00e9s organis\u00e9s, listes de t\u00e2ches, plans d\u2019action et rapports.",
    when3Title: "Vous avez besoin de plans d\u2019action et de rapports ex\u00e9cutifs",
    when3Desc: "Sythio cr\u00e9e des r\u00e9sultats que tl;dv ne propose pas \u2014 des plans d\u2019action structur\u00e9s, des rapports ex\u00e9cutifs pr\u00eats pour les parties prenantes, des messages de suivi que vous pouvez envoyer imm\u00e9diatement et des notes d\u2019\u00e9tude.",
    when4Title: "Vous pr\u00e9f\u00e9rez les flux de travail audio-first",
    when4Desc: "Si vous pensez par la voix, capturez des id\u00e9es en parlant et voulez que ces pens\u00e9es soient organis\u00e9es \u2014 Sythio a \u00e9t\u00e9 con\u00e7u exactement pour ce type de productivit\u00e9 audio-first.",
    tldvBetterTitle: "Quand tl;dv Peut \u00catre le Bon Choix",
    tldvBetterSubtitle: "Nous croyons aux comparaisons honn\u00eates. Voici o\u00f9 tl;dv brille.",
    tldvBetter1Title: "Vous avez besoin d\u2019enregistrement vid\u00e9o",
    tldvBetter1Desc: "Si vous devez enregistrer la vid\u00e9o de vos r\u00e9unions \u2014 pas seulement l\u2019audio \u2014 tl;dv est fait pour cela. Sythio est audio uniquement et ne capture pas la vid\u00e9o.",
    tldvBetter2Title: "Vous voulez des clips vid\u00e9o partageables",
    tldvBetter2Desc: "tl;dv vous permet de d\u00e9couper des moments sp\u00e9cifiques de r\u00e9unions et de les partager comme extraits vid\u00e9o. C\u2019est un atout unique pour les \u00e9quipes qui doivent partager du contexte visuel.",
    moreComparisons: "Plus de Comparaisons",
    vsOtter: "vs Otter.ai",
    vsFireflies: "vs Fireflies.ai",
    allFeatures: "Toutes les Fonctionnalit\u00e9s",
    pricing: "Tarifs",
    ctaTitle1: "Transformez l\u2019audio, ne faites pas que",
    ctaTitle2: "l\u2019enregistrer",
    ctaSubtitle: "Essayez Sythio gratuitement et d\u00e9couvrez ce que devient votre audio quand il est transform\u00e9 en r\u00e9sultats structur\u00e9s et exploitables \u2014 pas juste un enregistrement \u00e0 reli\u00e9couter.",
    startFree: "Commencer Gratuitement",
    exploreFeatures: "Explorer les Fonctionnalit\u00e9s",
    freePlan: "Le plan gratuit inclut 5 enregistrements par mois. Sans carte de cr\u00e9dit.",
    "row.primaryOutput": "R\u00e9sultat principal", "row.primaryOutput.sythio": "9 formats structur\u00e9s", "row.primaryOutput.competitor": "Enregistrement vid\u00e9o + transcription",
    "row.inputType": "Type d\u2019entr\u00e9e", "row.inputType.sythio": "Toute source audio", "row.inputType.competitor": "Visioconf\u00e9rences uniquement",
    "row.summaries": "R\u00e9sum\u00e9s", "row.summaries.sythio": "\u2713 Directement de l\u2019audio", "row.summaries.competitor": "\u2713 G\u00e9n\u00e9r\u00e9 par IA depuis la transcription",
    "row.taskExtraction": "Extraction de t\u00e2ches", "row.taskExtraction.sythio": "\u2713 Automatique avec attribution d\u2019intervenant", "row.taskExtraction.competitor": "\u2713 \u00c9l\u00e9ments d\u2019action basiques",
    "row.actionPlans": "Plans d\u2019action", "row.actionPlans.sythio": "\u2713 Structur\u00e9s et prioris\u00e9s", "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Rapports ex\u00e9cutifs", "row.executiveReports.sythio": "\u2713 Rapports partageables", "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "D\u00e9tection des intervenants", "row.speakerDetection.sythio": "\u2713 Avec attribution de t\u00e2ches", "row.speakerDetection.competitor": "\u2713 \u00c9tiquettes d\u2019intervenant",
    "row.studyNotes": "Notes d\u2019\u00e9tude", "row.studyNotes.sythio": "\u2713 Structur\u00e9es pour la r\u00e9vision", "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Messages de suivi", "row.followUp.sythio": "\u2713 Brouillons pr\u00eats \u00e0 envoyer", "row.followUp.competitor": "\u2014",
    "row.cleanText": "Texte nettoy\u00e9", "row.cleanText.sythio": "\u2713 Prose soign\u00e9e de l\u2019audio", "row.cleanText.competitor": "\u2014",
    "row.keyPoints": "Points cl\u00e9s", "row.keyPoints.sythio": "\u2713 Extraits et organis\u00e9s", "row.keyPoints.competitor": "\u2713 Temps forts et horodatages",
    "row.ideas": "Extraction d\u2019id\u00e9es", "row.ideas.sythio": "\u2713 Captur\u00e9es et cat\u00e9goris\u00e9es", "row.ideas.competitor": "\u2014",
    "row.videoRecording": "Enregistrement vid\u00e9o", "row.videoRecording.sythio": "\u2014 Centr\u00e9 sur l\u2019audio", "row.videoRecording.competitor": "\u2713 Enregistrement vid\u00e9o complet",
    "row.timestampedClips": "Clips horodat\u00e9s", "row.timestampedClips.sythio": "\u2014", "row.timestampedClips.competitor": "\u2713 Clips vid\u00e9o partageables",
    "row.voiceNotes": "Notes vocales et brainstorming", "row.voiceNotes.sythio": "\u2713 Con\u00e7u pour tout audio", "row.voiceNotes.competitor": "\u2014",
    "row.lectures": "Cours et sessions d\u2019\u00e9tude", "row.lectures.sythio": "\u2713 Avec r\u00e9sultat notes d\u2019\u00e9tude", "row.lectures.competitor": "\u2014",
    "row.freePlan": "Plan gratuit", "row.freePlan.sythio": "$0 \u2014 5 enregistrements/mois", "row.freePlan.competitor": "$0 \u2014 enregistrements limit\u00e9s",
    "row.proPlan": "Plan Pro", "row.proPlan.sythio": "$12/mois", "row.proPlan.competitor": "$18/mois",
  },
  pt: {
    label: "Compara\u00e7\u00e3o",
    title: "Sythio vs tl;dv",
    subtitle: "tl;dv \u00e9 um poderoso gravador de videoconfer\u00eancias com transcri\u00e7\u00e3o e resumos. Sythio segue um caminho diferente \u2014 transformando qualquer \u00e1udio em 9 resultados estruturados para quem precisa de mais do que reproduzir reuni\u00f5es.",
    trySythio: "Experimente Sythio Gr\u00e1tis",
    seeHow: "Veja Como Funciona",
    twoApproaches: "Duas abordagens",
    coreDifference: "A Diferen\u00e7a Principal",
    competitorApproach: "A abordagem do tl;dv",
    competitorTitle: "Gravador de videoconfer\u00eancias",
    competitorDesc: "tl;dv grava suas videoconfer\u00eancias e as torna pesquis\u00e1veis. Cria transcri\u00e7\u00f5es, gera resumos e permite recortar e compartilhar momentos importantes das chamadas. Sua for\u00e7a est\u00e1 na documenta\u00e7\u00e3o de reuni\u00f5es em v\u00eddeo \u2014 revisar, recortar e compartilhar o que foi discutido na c\u00e2mera.",
    competitorItem1: "Grava\u00e7\u00e3o de videoconfer\u00eancias",
    competitorItem2: "Transcri\u00e7\u00f5es com marcas de tempo",
    competitorItem3: "Resumos IA com itens de a\u00e7\u00e3o",
    competitorItem4: "Clips de v\u00eddeo compartilh\u00e1veis e destaques",
    sythioApproach: "A abordagem do Sythio",
    sythioTitle: "Intelig\u00eancia de \u00e1udio multi-resultado",
    sythioDesc: "Sythio n\u00e3o \u00e9 um gravador de v\u00eddeo. \u00c9 uma plataforma de intelig\u00eancia de \u00e1udio que transforma qualquer conte\u00fado falado \u2014 reuni\u00f5es, notas de voz, aulas, brainstormings, liga\u00e7\u00f5es com clientes \u2014 em 9 formatos de resultados estruturados. Onde tl;dv ajuda a revisar o que aconteceu, Sythio ajuda a agir.",
    sythioItem1: "9 formatos de resultados estruturados",
    sythioItem2: "Qualquer fonte de \u00e1udio, n\u00e3o apenas reuni\u00f5es",
    sythioItem3: "Planos de a\u00e7\u00e3o, relat\u00f3rios e acompanhamentos",
    sythioItem4: "Feito para transforma\u00e7\u00e3o, n\u00e3o reprodu\u00e7\u00e3o",
    comparisonTitle: "Compara\u00e7\u00e3o Recurso por Recurso",
    comparisonSubtitle: "Uma vis\u00e3o honesta do que cada ferramenta oferece.",
    thFeature: "Recurso",
    whenTitle: "Quando Escolher Sythio",
    whenSubtitle: "Sythio \u00e9 a melhor op\u00e7\u00e3o quando voc\u00ea precisa de resultados estruturados de qualquer \u00e1udio, n\u00e3o apenas grava\u00e7\u00f5es de reuni\u00f5es.",
    when1Title: "Seu \u00e1udio vai al\u00e9m de videoconfer\u00eancias",
    when1Desc: "tl;dv \u00e9 feito para chamadas de v\u00eddeo. Se voc\u00ea tamb\u00e9m captura notas de voz, grava aulas, faz brainstorming em voz alta ou tem conversas telef\u00f4nicas para processar \u2014 Sythio lida com tudo isso.",
    when2Title: "Voc\u00ea quer resultados estruturados, n\u00e3o reprodu\u00e7\u00e3o de v\u00eddeo",
    when2Desc: "tl;dv se destaca ao permitir que voc\u00ea revise reuni\u00f5es em v\u00eddeo. Sythio \u00e9 feito para quem quer pular a reprodu\u00e7\u00e3o e ir direto a resumos organizados, listas de tarefas, planos de a\u00e7\u00e3o e relat\u00f3rios.",
    when3Title: "Voc\u00ea precisa de planos de a\u00e7\u00e3o e relat\u00f3rios executivos",
    when3Desc: "Sythio cria resultados que tl;dv n\u00e3o oferece \u2014 planos de a\u00e7\u00e3o estruturados, relat\u00f3rios executivos prontos para stakeholders, mensagens de acompanhamento para enviar imediatamente e notas de estudo.",
    when4Title: "Voc\u00ea prefere fluxos de trabalho \u00e1udio-primeiro",
    when4Desc: "Se voc\u00ea pensa por voz, captura ideias falando e quer que esses pensamentos sejam organizados \u2014 Sythio foi projetado exatamente para esse tipo de produtividade \u00e1udio-primeiro.",
    tldvBetterTitle: "Quando tl;dv Pode Ser a Melhor Escolha",
    tldvBetterSubtitle: "Acreditamos em compara\u00e7\u00f5es honestas. Aqui \u00e9 onde tl;dv brilha.",
    tldvBetter1Title: "Voc\u00ea precisa de grava\u00e7\u00e3o de v\u00eddeo",
    tldvBetter1Desc: "Se voc\u00ea precisa gravar o v\u00eddeo das suas reuni\u00f5es \u2014 n\u00e3o apenas o \u00e1udio \u2014 tl;dv \u00e9 feito para isso. Sythio \u00e9 apenas \u00e1udio e n\u00e3o captura v\u00eddeo.",
    tldvBetter2Title: "Voc\u00ea quer clips de v\u00eddeo compartilh\u00e1veis",
    tldvBetter2Desc: "tl;dv permite recortar momentos espec\u00edficos de reuni\u00f5es e compartilh\u00e1-los como trechos de v\u00eddeo. \u00c9 uma for\u00e7a \u00fanica para equipes que precisam compartilhar contexto visual.",
    moreComparisons: "Mais Compara\u00e7\u00f5es",
    vsOtter: "vs Otter.ai",
    vsFireflies: "vs Fireflies.ai",
    allFeatures: "Todos os Recursos",
    pricing: "Pre\u00e7os",
    ctaTitle1: "Transforme o \u00e1udio, n\u00e3o apenas",
    ctaTitle2: "grave",
    ctaSubtitle: "Experimente Sythio gr\u00e1tis e veja no que seu \u00e1udio se torna quando \u00e9 transformado em resultados estruturados e acion\u00e1veis \u2014 n\u00e3o apenas uma grava\u00e7\u00e3o para reproduzir.",
    startFree: "Comece Gr\u00e1tis",
    exploreFeatures: "Explorar Recursos",
    freePlan: "O plano gratuito inclui 5 grava\u00e7\u00f5es por m\u00eas. Sem cart\u00e3o de cr\u00e9dito.",
    "row.primaryOutput": "Resultado principal", "row.primaryOutput.sythio": "9 formatos estruturados", "row.primaryOutput.competitor": "Grava\u00e7\u00e3o de v\u00eddeo + transcri\u00e7\u00e3o",
    "row.inputType": "Tipo de entrada", "row.inputType.sythio": "Qualquer fonte de \u00e1udio", "row.inputType.competitor": "Apenas videoconfer\u00eancias",
    "row.summaries": "Resumos", "row.summaries.sythio": "\u2713 Diretamente do \u00e1udio", "row.summaries.competitor": "\u2713 Gerado por IA da transcri\u00e7\u00e3o",
    "row.taskExtraction": "Extra\u00e7\u00e3o de tarefas", "row.taskExtraction.sythio": "\u2713 Autom\u00e1tica com atribui\u00e7\u00e3o de falante", "row.taskExtraction.competitor": "\u2713 Itens de a\u00e7\u00e3o b\u00e1sicos",
    "row.actionPlans": "Planos de a\u00e7\u00e3o", "row.actionPlans.sythio": "\u2713 Estruturados e priorizados", "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Relat\u00f3rios executivos", "row.executiveReports.sythio": "\u2713 Relat\u00f3rios compartilh\u00e1veis", "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "Detec\u00e7\u00e3o de falantes", "row.speakerDetection.sythio": "\u2713 Com atribui\u00e7\u00e3o de tarefas", "row.speakerDetection.competitor": "\u2713 R\u00f3tulos de falante",
    "row.studyNotes": "Notas de estudo", "row.studyNotes.sythio": "\u2713 Estruturadas para revis\u00e3o", "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Mensagens de acompanhamento", "row.followUp.sythio": "\u2713 Rascunhos prontos para enviar", "row.followUp.competitor": "\u2014",
    "row.cleanText": "Texto limpo", "row.cleanText.sythio": "\u2713 Prosa polida do \u00e1udio", "row.cleanText.competitor": "\u2014",
    "row.keyPoints": "Pontos-chave", "row.keyPoints.sythio": "\u2713 Extra\u00eddos e organizados", "row.keyPoints.competitor": "\u2713 Destaques e marcas de tempo",
    "row.ideas": "Extra\u00e7\u00e3o de ideias", "row.ideas.sythio": "\u2713 Capturadas e categorizadas", "row.ideas.competitor": "\u2014",
    "row.videoRecording": "Grava\u00e7\u00e3o de v\u00eddeo", "row.videoRecording.sythio": "\u2014 Focado em \u00e1udio", "row.videoRecording.competitor": "\u2713 Grava\u00e7\u00e3o de v\u00eddeo completa",
    "row.timestampedClips": "Clips com marcas de tempo", "row.timestampedClips.sythio": "\u2014", "row.timestampedClips.competitor": "\u2713 Clips de v\u00eddeo compartilh\u00e1veis",
    "row.voiceNotes": "Notas de voz e brainstorming", "row.voiceNotes.sythio": "\u2713 Feito para qualquer \u00e1udio", "row.voiceNotes.competitor": "\u2014",
    "row.lectures": "Aulas e sess\u00f5es de estudo", "row.lectures.sythio": "\u2713 Com resultado de notas de estudo", "row.lectures.competitor": "\u2014",
    "row.freePlan": "Plano gratuito", "row.freePlan.sythio": "$0 \u2014 5 grava\u00e7\u00f5es/m\u00eas", "row.freePlan.competitor": "$0 \u2014 grava\u00e7\u00f5es limitadas",
    "row.proPlan": "Plano Pro", "row.proPlan.sythio": "$12/m\u00eas", "row.proPlan.competitor": "$18/m\u00eas",
  },
  it: {
    label: "Confronto",
    title: "Sythio vs tl;dv",
    subtitle: "tl;dv \u00e8 un potente registratore di videoconferenze con trascrizione e riassunti. Sythio prende un percorso diverso \u2014 trasformando qualsiasi audio in 9 risultati strutturati per chi ha bisogno di pi\u00f9 della semplice riproduzione di riunioni.",
    trySythio: "Prova Sythio Gratis",
    seeHow: "Scopri Come Funziona",
    twoApproaches: "Due approcci",
    coreDifference: "La Differenza Fondamentale",
    competitorApproach: "L\u2019approccio di tl;dv",
    competitorTitle: "Registratore di videoconferenze",
    competitorDesc: "tl;dv registra le tue videoconferenze e le rende ricercabili. Crea trascrizioni, genera riassunti e ti permette di ritagliare e condividere momenti importanti delle chiamate. Il suo punto di forza \u00e8 nella documentazione delle riunioni video \u2014 rivedere, ritagliare e condividere ci\u00f2 che \u00e8 stato discusso in camera.",
    competitorItem1: "Registrazione di videoconferenze",
    competitorItem2: "Trascrizioni con marcature temporali",
    competitorItem3: "Riassunti IA con elementi d\u2019azione",
    competitorItem4: "Clip video condivisibili e punti salienti",
    sythioApproach: "L\u2019approccio di Sythio",
    sythioTitle: "Intelligenza audio multi-risultato",
    sythioDesc: "Sythio non \u00e8 un registratore video. \u00c8 una piattaforma di intelligenza audio che trasforma qualsiasi contenuto parlato \u2014 riunioni, note vocali, lezioni, brainstorming, chiamate clienti \u2014 in 9 formati di risultati strutturati. Dove tl;dv ti aiuta a rivedere cosa \u00e8 successo, Sythio ti aiuta ad agire.",
    sythioItem1: "9 formati di risultati strutturati",
    sythioItem2: "Qualsiasi fonte audio, non solo riunioni",
    sythioItem3: "Piani d\u2019azione, report e follow-up",
    sythioItem4: "Progettato per trasformare, non riprodurre",
    comparisonTitle: "Confronto Funzionalit\u00e0 per Funzionalit\u00e0",
    comparisonSubtitle: "Uno sguardo onesto su ci\u00f2 che offre ogni strumento.",
    thFeature: "Funzionalit\u00e0",
    whenTitle: "Quando Scegliere Sythio",
    whenSubtitle: "Sythio \u00e8 la scelta migliore quando hai bisogno di risultati strutturati da qualsiasi audio, non solo registrazioni di riunioni.",
    when1Title: "Il tuo audio va oltre le videoconferenze",
    when1Desc: "tl;dv \u00e8 progettato per le videochiamate. Se catturi anche note vocali, registri lezioni, fai brainstorming a voce alta o hai conversazioni telefoniche da elaborare \u2014 Sythio gestisce tutto questo.",
    when2Title: "Vuoi risultati strutturati, non riproduzione video",
    when2Desc: "tl;dv eccelle nel permetterti di rivedere le riunioni in video. Sythio \u00e8 progettato per chi vuole saltare la riproduzione e andare direttamente a riassunti organizzati, liste di attivit\u00e0, piani d\u2019azione e report.",
    when3Title: "Hai bisogno di piani d\u2019azione e report esecutivi",
    when3Desc: "Sythio crea risultati che tl;dv non offre \u2014 piani d\u2019azione strutturati, report esecutivi pronti per gli stakeholder, messaggi di follow-up da inviare immediatamente e note di studio.",
    when4Title: "Preferisci flussi di lavoro audio-first",
    when4Desc: "Se pensi con la voce, catturi idee parlando e vuoi che quei pensieri siano organizzati \u2014 Sythio \u00e8 stato progettato esattamente per quel tipo di produttivit\u00e0 audio-first.",
    tldvBetterTitle: "Quando tl;dv Pu\u00f2 Essere la Scelta Giusta",
    tldvBetterSubtitle: "Crediamo nei confronti onesti. Ecco dove brilla tl;dv.",
    tldvBetter1Title: "Hai bisogno di registrazione video",
    tldvBetter1Desc: "Se devi registrare il video delle tue riunioni \u2014 non solo l\u2019audio \u2014 tl;dv \u00e8 fatto per questo. Sythio \u00e8 solo audio e non cattura video.",
    tldvBetter2Title: "Vuoi clip video condivisibili",
    tldvBetter2Desc: "tl;dv ti permette di ritagliare momenti specifici dalle riunioni e condividerli come frammenti video. \u00c8 un punto di forza unico per i team che devono condividere contesto visivo.",
    moreComparisons: "Altri Confronti",
    vsOtter: "vs Otter.ai",
    vsFireflies: "vs Fireflies.ai",
    allFeatures: "Tutte le Funzionalit\u00e0",
    pricing: "Prezzi",
    ctaTitle1: "Trasforma l\u2019audio, non solo",
    ctaTitle2: "registrarlo",
    ctaSubtitle: "Prova Sythio gratis e scopri cosa diventa il tuo audio quando viene trasformato in risultati strutturati e azionabili \u2014 non solo una registrazione da riprodurre.",
    startFree: "Inizia Gratis",
    exploreFeatures: "Esplora le Funzionalit\u00e0",
    freePlan: "Il piano gratuito include 5 registrazioni al mese. Nessuna carta di credito richiesta.",
    "row.primaryOutput": "Risultato principale", "row.primaryOutput.sythio": "9 formati strutturati", "row.primaryOutput.competitor": "Registrazione video + trascrizione",
    "row.inputType": "Tipo di input", "row.inputType.sythio": "Qualsiasi fonte audio", "row.inputType.competitor": "Solo videoconferenze",
    "row.summaries": "Riassunti", "row.summaries.sythio": "\u2713 Direttamente dall\u2019audio", "row.summaries.competitor": "\u2713 Generato dall\u2019IA dalla trascrizione",
    "row.taskExtraction": "Estrazione attivit\u00e0", "row.taskExtraction.sythio": "\u2713 Automatica con attribuzione parlante", "row.taskExtraction.competitor": "\u2713 Elementi d\u2019azione di base",
    "row.actionPlans": "Piani d\u2019azione", "row.actionPlans.sythio": "\u2713 Strutturati e prioritizzati", "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Report esecutivi", "row.executiveReports.sythio": "\u2713 Report condivisibili", "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "Rilevamento parlanti", "row.speakerDetection.sythio": "\u2713 Con attribuzione attivit\u00e0", "row.speakerDetection.competitor": "\u2713 Etichette parlante",
    "row.studyNotes": "Note di studio", "row.studyNotes.sythio": "\u2713 Strutturate per la revisione", "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Messaggi di follow-up", "row.followUp.sythio": "\u2713 Bozze pronte da inviare", "row.followUp.competitor": "\u2014",
    "row.cleanText": "Testo pulito", "row.cleanText.sythio": "\u2713 Prosa curata dall\u2019audio", "row.cleanText.competitor": "\u2014",
    "row.keyPoints": "Punti chiave", "row.keyPoints.sythio": "\u2713 Estratti e organizzati", "row.keyPoints.competitor": "\u2713 In evidenza e marcature temporali",
    "row.ideas": "Estrazione idee", "row.ideas.sythio": "\u2713 Catturate e categorizzate", "row.ideas.competitor": "\u2014",
    "row.videoRecording": "Registrazione video", "row.videoRecording.sythio": "\u2014 Focalizzato sull\u2019audio", "row.videoRecording.competitor": "\u2713 Registrazione video completa",
    "row.timestampedClips": "Clip con marcature temporali", "row.timestampedClips.sythio": "\u2014", "row.timestampedClips.competitor": "\u2713 Clip video condivisibili",
    "row.voiceNotes": "Note vocali e brainstorming", "row.voiceNotes.sythio": "\u2713 Progettato per qualsiasi audio", "row.voiceNotes.competitor": "\u2014",
    "row.lectures": "Lezioni e sessioni di studio", "row.lectures.sythio": "\u2713 Con risultato note di studio", "row.lectures.competitor": "\u2014",
    "row.freePlan": "Piano gratuito", "row.freePlan.sythio": "$0 \u2014 5 registrazioni/mese", "row.freePlan.competitor": "$0 \u2014 registrazioni limitate",
    "row.proPlan": "Piano Pro", "row.proPlan.sythio": "$12/mese", "row.proPlan.competitor": "$18/mese",
  },
};

export default function TldvComparePage() {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;

  const comparisonRows = [
    { feature: c["row.primaryOutput"], sythio: c["row.primaryOutput.sythio"], tldv: c["row.primaryOutput.competitor"] },
    { feature: c["row.inputType"], sythio: c["row.inputType.sythio"], tldv: c["row.inputType.competitor"] },
    { feature: c["row.summaries"], sythio: c["row.summaries.sythio"], tldv: c["row.summaries.competitor"] },
    { feature: c["row.taskExtraction"], sythio: c["row.taskExtraction.sythio"], tldv: c["row.taskExtraction.competitor"] },
    { feature: c["row.actionPlans"], sythio: c["row.actionPlans.sythio"], tldv: c["row.actionPlans.competitor"] },
    { feature: c["row.executiveReports"], sythio: c["row.executiveReports.sythio"], tldv: c["row.executiveReports.competitor"] },
    { feature: c["row.speakerDetection"], sythio: c["row.speakerDetection.sythio"], tldv: c["row.speakerDetection.competitor"] },
    { feature: c["row.studyNotes"], sythio: c["row.studyNotes.sythio"], tldv: c["row.studyNotes.competitor"] },
    { feature: c["row.followUp"], sythio: c["row.followUp.sythio"], tldv: c["row.followUp.competitor"] },
    { feature: c["row.cleanText"], sythio: c["row.cleanText.sythio"], tldv: c["row.cleanText.competitor"] },
    { feature: c["row.keyPoints"], sythio: c["row.keyPoints.sythio"], tldv: c["row.keyPoints.competitor"] },
    { feature: c["row.ideas"], sythio: c["row.ideas.sythio"], tldv: c["row.ideas.competitor"] },
    { feature: c["row.videoRecording"], sythio: c["row.videoRecording.sythio"], tldv: c["row.videoRecording.competitor"] },
    { feature: c["row.timestampedClips"], sythio: c["row.timestampedClips.sythio"], tldv: c["row.timestampedClips.competitor"] },
    { feature: c["row.voiceNotes"], sythio: c["row.voiceNotes.sythio"], tldv: c["row.voiceNotes.competitor"] },
    { feature: c["row.lectures"], sythio: c["row.lectures.sythio"], tldv: c["row.lectures.competitor"] },
    { feature: c["row.freePlan"], sythio: c["row.freePlan.sythio"], tldv: c["row.freePlan.competitor"] },
    { feature: c["row.proPlan"], sythio: c["row.proPlan.sythio"], tldv: c["row.proPlan.competitor"] },
  ];

  return (
    <PageReveal>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-animated-bg overflow-hidden">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.label}</p>
            <TextReveal><h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">{c.title}</h1></TextReveal>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">{c.subtitle}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <MagneticHover><Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{c.trySythio}</Link></MagneticHover>
              <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{c.seeHow}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Difference */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.twoApproaches}</p>
            <TextReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.coreDifference}</h2></TextReveal>
          </div>
          <GsapStagger stagger={0.08}>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ScrollScale><div className="p-8 rounded-2xl bg-background border border-border-light">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.competitorApproach}</p>
                <h3 className="text-xl font-semibold text-foreground mb-4">{c.competitorTitle}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">{c.competitorDesc}</p>
                <ul className="space-y-3">
                  {[c.competitorItem1, c.competitorItem2, c.competitorItem3, c.competitorItem4].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-light shrink-0" />
                      <span className="text-sm text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div></ScrollScale>
              <ScrollScale><div className="p-8 rounded-2xl bg-foreground text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">{c.sythioApproach}</p>
                <h3 className="text-xl font-semibold text-white mb-4">{c.sythioTitle}</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6">{c.sythioDesc}</p>
                <ul className="space-y-3">
                  {[c.sythioItem1, c.sythioItem2, c.sythioItem3, c.sythioItem4].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span className="text-sm text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div></ScrollScale>
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <TextReveal><h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{c.comparisonTitle}</h2></TextReveal>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">{c.comparisonSubtitle}</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-border-light overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border-light">
                    <th className="text-left p-4 text-sm font-semibold text-foreground">{c.thFeature}</th>
                    <th className="text-center p-4 text-sm font-semibold text-foreground">Sythio</th>
                    <th className="text-center p-4 text-sm font-semibold text-muted">tl;dv</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-border-light last:border-0">
                      <td className="p-4 text-sm text-muted">{row.feature}</td>
                      <td className="p-4 text-center text-sm text-foreground">{row.sythio}</td>
                      <td className="p-4 text-center text-sm text-muted">{row.tldv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* When to Choose Sythio */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <TextReveal><h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{c.whenTitle}</h2></TextReveal>
              <p className="mt-4 text-lg text-muted max-w-xl mx-auto">{c.whenSubtitle}</p>
            </div>
            <GsapStagger stagger={0.08}><div className="space-y-6">
              {[
                { title: c.when1Title, description: c.when1Desc },
                { title: c.when2Title, description: c.when2Desc },
                { title: c.when3Title, description: c.when3Desc },
                { title: c.when4Title, description: c.when4Desc },
              ].map((item) => (
                <ScrollScale key={item.title}><div className="p-6 rounded-2xl bg-background border border-border-light">
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div></ScrollScale>
              ))}
            </div></GsapStagger>
          </div>
        </div>
      </section>

      {/* When tl;dv Might Be Better */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <TextReveal><h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{c.tldvBetterTitle}</h2></TextReveal>
              <p className="mt-4 text-lg text-muted max-w-xl mx-auto">{c.tldvBetterSubtitle}</p>
            </div>
            <GsapStagger stagger={0.08}><div className="space-y-6">
              {[
                { title: c.tldvBetter1Title, description: c.tldvBetter1Desc },
                { title: c.tldvBetter2Title, description: c.tldvBetter2Desc },
              ].map((item) => (
                <ScrollScale key={item.title}><div className="p-6 rounded-2xl bg-white border border-border-light">
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div></ScrollScale>
              ))}
            </div></GsapStagger>
          </div>
        </div>
      </section>

      {/* Related Comparisons */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <TextReveal><h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{c.moreComparisons}</h2></TextReveal>
          </div>
          <GsapStagger stagger={0.08}><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: c.vsOtter, href: "/compare/otter" },
              { label: c.vsFireflies, href: "/compare/fireflies" },
              { label: c.allFeatures, href: "/features" },
              { label: c.pricing, href: "/pricing" },
            ].map((link) => (
              <ScrollScale key={link.label}><Link href={link.href} className="group p-5 rounded-xl bg-background border border-border-light hover:border-border hover:shadow-md transition-all duration-300 text-center block">
                <span className="text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">{link.label}</span>
              </Link></ScrollScale>
            ))}
          </div></GsapStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="hero-orb hero-orb-2" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <TextReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.ctaTitle1}
              <br />
              {c.ctaTitle2}
            </h2></TextReveal>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">{c.ctaSubtitle}</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticHover><Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{c.startFree}</Link></MagneticHover>
              <Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{c.exploreFeatures}</Link>
            </div>
            <p className="mt-6 text-sm text-muted-light">{c.freePlan}</p>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
