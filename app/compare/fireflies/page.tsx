"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Comparison",
    title: "Sythio vs Fireflies.ai",
    subtitle:
      "Fireflies.ai sends a bot to join your meetings and transcribe them. Sythio works with any audio and transforms it into 9 structured outputs \u2014 no bot required.",
    trySythio: "Try Sythio Free",
    seeHow: "See How It Works",
    twoApproaches: "Two approaches",
    coreDifference: "The Core Difference",
    competitorApproach: "Fireflies.ai\u2019s approach",
    competitorTitle: "Meeting bot",
    competitorDesc:
      "Fireflies sends an AI assistant \u2014 named Fred \u2014 to join your scheduled meetings on Zoom, Teams, or Google Meet. It records the meeting, generates a transcript, and provides a summary with action items. It is purpose-built for meeting workflows with calendar and CRM integrations.",
    competitorItem1: "Bot joins meetings automatically",
    competitorItem2: "Transcript + AI summary",
    competitorItem3: "Action items from conversations",
    competitorItem4: "CRM and calendar integrations",
    sythioApproach: "Sythio\u2019s approach",
    sythioTitle: "Audio intelligence for anything",
    sythioDesc:
      "Sythio does not need to join your meetings. Record with any device, upload any audio file, and Sythio transforms it into 9 structured formats. It works with meetings, but also voice notes, lectures, brainstorming sessions, client calls, and any other audio you capture throughout your day.",
    sythioItem1: "9 structured output formats",
    sythioItem2: "Works with any audio source",
    sythioItem3: "No bot in your meetings",
    sythioItem4: "Speaker detection with attribution",
    comparisonTitle: "Feature-by-Feature Comparison",
    comparisonSubtitle: "An honest look at what each tool offers.",
    thFeature: "Feature",
    whenTitle: "When to Choose Sythio",
    whenSubtitle: "Sythio is the better fit when your audio life goes beyond scheduled meetings.",
    when1Title: "You don\u2019t want a bot in your meetings",
    when1Desc:
      "Some participants find meeting bots intrusive or distracting. Sythio works from a recording you already have \u2014 no bot presence, no permissions needed from other attendees.",
    when2Title: "Your audio isn\u2019t limited to meetings",
    when2Desc:
      "Voice notes on your commute, lecture recordings, interview tapes, brainstorming sessions \u2014 Sythio processes any audio, not just scheduled calendar events.",
    when3Title: "You want more than a transcript and a summary",
    when3Desc:
      "Fireflies gives you a transcript and a summary. Sythio gives you 9 structured formats \u2014 including action plans, executive reports, follow-up messages, and study notes.",
    when4Title: "You value structured outputs over raw transcription",
    when4Desc:
      "If you want your audio turned into organized, actionable information \u2014 not a long text document \u2014 Sythio\u2019s multi-output approach is purpose-built for that.",
    moreComparisons: "More Comparisons",
    vsOtter: "vs Otter.ai",
    vsTldv: "vs tl;dv",
    allFeatures: "All Features",
    pricing: "Pricing",
    ctaTitle1: "Audio intelligence",
    ctaTitle2: "without the meeting bot",
    ctaSubtitle:
      "Try Sythio free and experience what happens when your audio is truly transformed \u2014 not just transcribed and summarized.",
    startFree: "Start Free",
    exploreFeatures: "Explore Features",
    freePlan: "Free plan includes 5 recordings per month. No credit card needed.",
    "row.primaryOutput": "Primary output",
    "row.primaryOutput.sythio": "9 structured formats",
    "row.primaryOutput.competitor": "Transcript + summary",
    "row.howItWorks": "How it works",
    "row.howItWorks.sythio": "Upload or record any audio",
    "row.howItWorks.competitor": "Bot joins your meetings",
    "row.audioSources": "Audio sources",
    "row.audioSources.sythio": "\u2713 Any audio \u2014 meetings, voice notes, lectures",
    "row.audioSources.competitor": "Meetings (Zoom, Teams, Meet)",
    "row.summaries": "Summaries",
    "row.summaries.sythio": "\u2713 From audio directly",
    "row.summaries.competitor": "\u2713 AI-generated from transcript",
    "row.taskExtraction": "Task extraction",
    "row.taskExtraction.sythio": "\u2713 Automatic with speaker attribution",
    "row.taskExtraction.competitor": "\u2713 Action items from transcript",
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
    "row.keyPoints.competitor": "\u2713 Highlights",
    "row.ideas": "Ideas extraction",
    "row.ideas.sythio": "\u2713 Captured and categorized",
    "row.ideas.competitor": "\u2014",
    "row.noMeeting": "Works without meeting integration",
    "row.noMeeting.sythio": "\u2713 Upload any audio file",
    "row.noMeeting.competitor": "Requires calendar integration",
    "row.voiceNotes": "Voice notes & brainstorms",
    "row.voiceNotes.sythio": "\u2713 Built for any audio",
    "row.voiceNotes.competitor": "\u2014",
    "row.freePlan": "Free plan",
    "row.freePlan.sythio": "$0 \u2014 5 recordings/mo",
    "row.freePlan.competitor": "$0 \u2014 limited credits",
    "row.proPlan": "Pro plan",
    "row.proPlan.sythio": "$12/mo",
    "row.proPlan.competitor": "$18/mo",
  },
  es: {
    label: "Comparaci\u00f3n",
    title: "Sythio vs Fireflies.ai",
    subtitle:
      "Fireflies.ai env\u00eda un bot a tus reuniones para transcribirlas. Sythio funciona con cualquier audio y lo transforma en 9 resultados estructurados \u2014 sin bot necesario.",
    trySythio: "Prueba Sythio Gratis",
    seeHow: "Ver C\u00f3mo Funciona",
    twoApproaches: "Dos enfoques",
    coreDifference: "La Diferencia Principal",
    competitorApproach: "El enfoque de Fireflies.ai",
    competitorTitle: "Bot de reuniones",
    competitorDesc:
      "Fireflies env\u00eda un asistente de IA \u2014 llamado Fred \u2014 a tus reuniones programadas en Zoom, Teams o Google Meet. Graba la reuni\u00f3n, genera una transcripci\u00f3n y proporciona un resumen con elementos de acci\u00f3n. Est\u00e1 dise\u00f1ado para flujos de trabajo de reuniones con integraciones de calendario y CRM.",
    competitorItem1: "El bot se une a reuniones autom\u00e1ticamente",
    competitorItem2: "Transcripci\u00f3n + resumen IA",
    competitorItem3: "Elementos de acci\u00f3n de conversaciones",
    competitorItem4: "Integraciones CRM y calendario",
    sythioApproach: "El enfoque de Sythio",
    sythioTitle: "Inteligencia de audio para todo",
    sythioDesc:
      "Sythio no necesita unirse a tus reuniones. Graba con cualquier dispositivo, sube cualquier archivo de audio y Sythio lo transforma en 9 formatos estructurados. Funciona con reuniones, pero tambi\u00e9n con notas de voz, clases, sesiones de lluvia de ideas, llamadas con clientes y cualquier otro audio que captures durante tu d\u00eda.",
    sythioItem1: "9 formatos de resultados estructurados",
    sythioItem2: "Funciona con cualquier fuente de audio",
    sythioItem3: "Sin bot en tus reuniones",
    sythioItem4: "Detecci\u00f3n de hablantes con atribuci\u00f3n",
    comparisonTitle: "Comparaci\u00f3n Caracter\u00edstica por Caracter\u00edstica",
    comparisonSubtitle: "Una mirada honesta a lo que ofrece cada herramienta.",
    thFeature: "Caracter\u00edstica",
    whenTitle: "Cu\u00e1ndo Elegir Sythio",
    whenSubtitle: "Sythio es la mejor opci\u00f3n cuando tu vida de audio va m\u00e1s all\u00e1 de reuniones programadas.",
    when1Title: "No quieres un bot en tus reuniones",
    when1Desc:
      "Algunos participantes encuentran los bots de reuniones intrusivos o distractores. Sythio trabaja con una grabaci\u00f3n que ya tienes \u2014 sin presencia de bot, sin permisos necesarios de otros asistentes.",
    when2Title: "Tu audio no se limita a reuniones",
    when2Desc:
      "Notas de voz en el camino, grabaciones de clases, entrevistas, sesiones de lluvia de ideas \u2014 Sythio procesa cualquier audio, no solo eventos de calendario programados.",
    when3Title: "Quieres m\u00e1s que una transcripci\u00f3n y un resumen",
    when3Desc:
      "Fireflies te da una transcripci\u00f3n y un resumen. Sythio te da 9 formatos estructurados \u2014 incluyendo planes de acci\u00f3n, informes ejecutivos, mensajes de seguimiento y notas de estudio.",
    when4Title: "Valoras resultados estructurados sobre transcripci\u00f3n sin procesar",
    when4Desc:
      "Si quieres que tu audio se convierta en informaci\u00f3n organizada y accionable \u2014 no un documento largo de texto \u2014 el enfoque multi-resultado de Sythio est\u00e1 dise\u00f1ado para eso.",
    moreComparisons: "M\u00e1s Comparaciones",
    vsOtter: "vs Otter.ai",
    vsTldv: "vs tl;dv",
    allFeatures: "Todas las Funciones",
    pricing: "Precios",
    ctaTitle1: "Inteligencia de audio",
    ctaTitle2: "sin el bot de reuniones",
    ctaSubtitle:
      "Prueba Sythio gratis y experimenta lo que sucede cuando tu audio es verdaderamente transformado \u2014 no solo transcrito y resumido.",
    startFree: "Comenzar Gratis",
    exploreFeatures: "Explorar Funciones",
    freePlan: "El plan gratuito incluye 5 grabaciones al mes. Sin tarjeta de cr\u00e9dito.",
    "row.primaryOutput": "Resultado principal",
    "row.primaryOutput.sythio": "9 formatos estructurados",
    "row.primaryOutput.competitor": "Transcripci\u00f3n + resumen",
    "row.howItWorks": "C\u00f3mo funciona",
    "row.howItWorks.sythio": "Sube o graba cualquier audio",
    "row.howItWorks.competitor": "El bot se une a tus reuniones",
    "row.audioSources": "Fuentes de audio",
    "row.audioSources.sythio": "\u2713 Cualquier audio \u2014 reuniones, notas de voz, clases",
    "row.audioSources.competitor": "Reuniones (Zoom, Teams, Meet)",
    "row.summaries": "Res\u00famenes",
    "row.summaries.sythio": "\u2713 Directamente del audio",
    "row.summaries.competitor": "\u2713 Generado por IA desde la transcripci\u00f3n",
    "row.taskExtraction": "Extracci\u00f3n de tareas",
    "row.taskExtraction.sythio": "\u2713 Autom\u00e1tica con atribuci\u00f3n de hablante",
    "row.taskExtraction.competitor": "\u2713 Elementos de acci\u00f3n desde la transcripci\u00f3n",
    "row.actionPlans": "Planes de acci\u00f3n",
    "row.actionPlans.sythio": "\u2713 Estructurados y priorizados",
    "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Informes ejecutivos",
    "row.executiveReports.sythio": "\u2713 Informes compartibles",
    "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "Detecci\u00f3n de hablantes",
    "row.speakerDetection.sythio": "\u2713 Con atribuci\u00f3n de tareas",
    "row.speakerDetection.competitor": "\u2713 Etiquetas de hablante",
    "row.studyNotes": "Notas de estudio",
    "row.studyNotes.sythio": "\u2713 Estructuradas para revisi\u00f3n",
    "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Mensajes de seguimiento",
    "row.followUp.sythio": "\u2713 Borradores listos para enviar",
    "row.followUp.competitor": "\u2014",
    "row.cleanText": "Texto limpio",
    "row.cleanText.sythio": "\u2713 Prosa pulida del audio",
    "row.cleanText.competitor": "\u2014",
    "row.keyPoints": "Puntos clave",
    "row.keyPoints.sythio": "\u2713 Extra\u00eddos y organizados",
    "row.keyPoints.competitor": "\u2713 Destacados",
    "row.ideas": "Extracci\u00f3n de ideas",
    "row.ideas.sythio": "\u2713 Capturadas y categorizadas",
    "row.ideas.competitor": "\u2014",
    "row.noMeeting": "Funciona sin integraci\u00f3n de reuniones",
    "row.noMeeting.sythio": "\u2713 Sube cualquier archivo de audio",
    "row.noMeeting.competitor": "Requiere integraci\u00f3n de calendario",
    "row.voiceNotes": "Notas de voz y lluvia de ideas",
    "row.voiceNotes.sythio": "\u2713 Dise\u00f1ado para cualquier audio",
    "row.voiceNotes.competitor": "\u2014",
    "row.freePlan": "Plan gratuito",
    "row.freePlan.sythio": "$0 \u2014 5 grabaciones/mes",
    "row.freePlan.competitor": "$0 \u2014 cr\u00e9ditos limitados",
    "row.proPlan": "Plan Pro",
    "row.proPlan.sythio": "$12/mes",
    "row.proPlan.competitor": "$18/mes",
  },
  fr: {
    label: "Comparaison",
    title: "Sythio vs Fireflies.ai",
    subtitle:
      "Fireflies.ai envoie un bot rejoindre vos r\u00e9unions et les transcrire. Sythio fonctionne avec tout audio et le transforme en 9 r\u00e9sultats structur\u00e9s \u2014 sans bot n\u00e9cessaire.",
    trySythio: "Essayer Sythio Gratuitement",
    seeHow: "Voir Comment \u00c7a Marche",
    twoApproaches: "Deux approches",
    coreDifference: "La Diff\u00e9rence Fondamentale",
    competitorApproach: "L\u2019approche de Fireflies.ai",
    competitorTitle: "Bot de r\u00e9union",
    competitorDesc:
      "Fireflies envoie un assistant IA \u2014 nomm\u00e9 Fred \u2014 rejoindre vos r\u00e9unions planifi\u00e9es sur Zoom, Teams ou Google Meet. Il enregistre la r\u00e9union, g\u00e9n\u00e8re une transcription et fournit un r\u00e9sum\u00e9 avec des \u00e9l\u00e9ments d\u2019action. Il est con\u00e7u pour les flux de travail de r\u00e9union avec des int\u00e9grations calendrier et CRM.",
    competitorItem1: "Le bot rejoint les r\u00e9unions automatiquement",
    competitorItem2: "Transcription + r\u00e9sum\u00e9 IA",
    competitorItem3: "\u00c9l\u00e9ments d\u2019action des conversations",
    competitorItem4: "Int\u00e9grations CRM et calendrier",
    sythioApproach: "L\u2019approche de Sythio",
    sythioTitle: "Intelligence audio pour tout",
    sythioDesc:
      "Sythio n\u2019a pas besoin de rejoindre vos r\u00e9unions. Enregistrez avec n\u2019importe quel appareil, t\u00e9l\u00e9versez n\u2019importe quel fichier audio et Sythio le transforme en 9 formats structur\u00e9s. Il fonctionne avec les r\u00e9unions, mais aussi les notes vocales, les cours, les sessions de brainstorming, les appels clients et tout autre audio que vous capturez.",
    sythioItem1: "9 formats de r\u00e9sultats structur\u00e9s",
    sythioItem2: "Fonctionne avec toute source audio",
    sythioItem3: "Pas de bot dans vos r\u00e9unions",
    sythioItem4: "D\u00e9tection des intervenants avec attribution",
    comparisonTitle: "Comparaison Fonctionnalit\u00e9 par Fonctionnalit\u00e9",
    comparisonSubtitle: "Un regard honn\u00eate sur ce que chaque outil propose.",
    thFeature: "Fonctionnalit\u00e9",
    whenTitle: "Quand Choisir Sythio",
    whenSubtitle: "Sythio est le meilleur choix quand votre vie audio va au-del\u00e0 des r\u00e9unions planifi\u00e9es.",
    when1Title: "Vous ne voulez pas de bot dans vos r\u00e9unions",
    when1Desc:
      "Certains participants trouvent les bots de r\u00e9union intrusifs ou distrayants. Sythio travaille \u00e0 partir d\u2019un enregistrement que vous avez d\u00e9j\u00e0 \u2014 pas de pr\u00e9sence de bot, pas de permissions n\u00e9cessaires des autres participants.",
    when2Title: "Votre audio ne se limite pas aux r\u00e9unions",
    when2Desc:
      "Notes vocales en d\u00e9placement, enregistrements de cours, entretiens, sessions de brainstorming \u2014 Sythio traite tout audio, pas seulement les \u00e9v\u00e9nements planifi\u00e9s.",
    when3Title: "Vous voulez plus qu\u2019une transcription et un r\u00e9sum\u00e9",
    when3Desc:
      "Fireflies vous donne une transcription et un r\u00e9sum\u00e9. Sythio vous donne 9 formats structur\u00e9s \u2014 incluant plans d\u2019action, rapports ex\u00e9cutifs, messages de suivi et notes d\u2019\u00e9tude.",
    when4Title: "Vous pr\u00e9f\u00e9rez des r\u00e9sultats structur\u00e9s \u00e0 la transcription brute",
    when4Desc:
      "Si vous voulez que votre audio soit transform\u00e9 en information organis\u00e9e et exploitable \u2014 pas un long document texte \u2014 l\u2019approche multi-r\u00e9sultats de Sythio est con\u00e7ue pour cela.",
    moreComparisons: "Plus de Comparaisons",
    vsOtter: "vs Otter.ai",
    vsTldv: "vs tl;dv",
    allFeatures: "Toutes les Fonctionnalit\u00e9s",
    pricing: "Tarifs",
    ctaTitle1: "Intelligence audio",
    ctaTitle2: "sans le bot de r\u00e9union",
    ctaSubtitle:
      "Essayez Sythio gratuitement et d\u00e9couvrez ce qui se passe quand votre audio est vraiment transform\u00e9 \u2014 pas juste transcrit et r\u00e9sum\u00e9.",
    startFree: "Commencer Gratuitement",
    exploreFeatures: "Explorer les Fonctionnalit\u00e9s",
    freePlan: "Le plan gratuit inclut 5 enregistrements par mois. Sans carte de cr\u00e9dit.",
    "row.primaryOutput": "R\u00e9sultat principal",
    "row.primaryOutput.sythio": "9 formats structur\u00e9s",
    "row.primaryOutput.competitor": "Transcription + r\u00e9sum\u00e9",
    "row.howItWorks": "Comment \u00e7a fonctionne",
    "row.howItWorks.sythio": "T\u00e9l\u00e9versez ou enregistrez tout audio",
    "row.howItWorks.competitor": "Le bot rejoint vos r\u00e9unions",
    "row.audioSources": "Sources audio",
    "row.audioSources.sythio": "\u2713 Tout audio \u2014 r\u00e9unions, notes vocales, cours",
    "row.audioSources.competitor": "R\u00e9unions (Zoom, Teams, Meet)",
    "row.summaries": "R\u00e9sum\u00e9s",
    "row.summaries.sythio": "\u2713 Directement de l\u2019audio",
    "row.summaries.competitor": "\u2713 G\u00e9n\u00e9r\u00e9 par IA depuis la transcription",
    "row.taskExtraction": "Extraction de t\u00e2ches",
    "row.taskExtraction.sythio": "\u2713 Automatique avec attribution d\u2019intervenant",
    "row.taskExtraction.competitor": "\u2713 \u00c9l\u00e9ments d\u2019action depuis la transcription",
    "row.actionPlans": "Plans d\u2019action",
    "row.actionPlans.sythio": "\u2713 Structur\u00e9s et prioris\u00e9s",
    "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Rapports ex\u00e9cutifs",
    "row.executiveReports.sythio": "\u2713 Rapports partageables",
    "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "D\u00e9tection des intervenants",
    "row.speakerDetection.sythio": "\u2713 Avec attribution de t\u00e2ches",
    "row.speakerDetection.competitor": "\u2713 \u00c9tiquettes d\u2019intervenant",
    "row.studyNotes": "Notes d\u2019\u00e9tude",
    "row.studyNotes.sythio": "\u2713 Structur\u00e9es pour la r\u00e9vision",
    "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Messages de suivi",
    "row.followUp.sythio": "\u2713 Brouillons pr\u00eats \u00e0 envoyer",
    "row.followUp.competitor": "\u2014",
    "row.cleanText": "Texte nettoy\u00e9",
    "row.cleanText.sythio": "\u2713 Prose soign\u00e9e de l\u2019audio",
    "row.cleanText.competitor": "\u2014",
    "row.keyPoints": "Points cl\u00e9s",
    "row.keyPoints.sythio": "\u2713 Extraits et organis\u00e9s",
    "row.keyPoints.competitor": "\u2713 Temps forts",
    "row.ideas": "Extraction d\u2019id\u00e9es",
    "row.ideas.sythio": "\u2713 Captur\u00e9es et cat\u00e9goris\u00e9es",
    "row.ideas.competitor": "\u2014",
    "row.noMeeting": "Fonctionne sans int\u00e9gration de r\u00e9union",
    "row.noMeeting.sythio": "\u2713 T\u00e9l\u00e9versez tout fichier audio",
    "row.noMeeting.competitor": "N\u00e9cessite une int\u00e9gration calendrier",
    "row.voiceNotes": "Notes vocales et brainstorming",
    "row.voiceNotes.sythio": "\u2713 Con\u00e7u pour tout audio",
    "row.voiceNotes.competitor": "\u2014",
    "row.freePlan": "Plan gratuit",
    "row.freePlan.sythio": "$0 \u2014 5 enregistrements/mois",
    "row.freePlan.competitor": "$0 \u2014 cr\u00e9dits limit\u00e9s",
    "row.proPlan": "Plan Pro",
    "row.proPlan.sythio": "$12/mois",
    "row.proPlan.competitor": "$18/mois",
  },
  pt: {
    label: "Compara\u00e7\u00e3o",
    title: "Sythio vs Fireflies.ai",
    subtitle:
      "Fireflies.ai envia um bot para participar das suas reuni\u00f5es e transcrev\u00ea-las. Sythio funciona com qualquer \u00e1udio e o transforma em 9 resultados estruturados \u2014 sem bot necess\u00e1rio.",
    trySythio: "Experimente Sythio Gr\u00e1tis",
    seeHow: "Veja Como Funciona",
    twoApproaches: "Duas abordagens",
    coreDifference: "A Diferen\u00e7a Principal",
    competitorApproach: "A abordagem do Fireflies.ai",
    competitorTitle: "Bot de reuni\u00f5es",
    competitorDesc:
      "Fireflies envia um assistente de IA \u2014 chamado Fred \u2014 para participar das suas reuni\u00f5es agendadas no Zoom, Teams ou Google Meet. Ele grava a reuni\u00e3o, gera uma transcri\u00e7\u00e3o e fornece um resumo com itens de a\u00e7\u00e3o. \u00c9 feito para fluxos de trabalho de reuni\u00f5es com integra\u00e7\u00f5es de calend\u00e1rio e CRM.",
    competitorItem1: "Bot entra nas reuni\u00f5es automaticamente",
    competitorItem2: "Transcri\u00e7\u00e3o + resumo IA",
    competitorItem3: "Itens de a\u00e7\u00e3o das conversas",
    competitorItem4: "Integra\u00e7\u00f5es CRM e calend\u00e1rio",
    sythioApproach: "A abordagem do Sythio",
    sythioTitle: "Intelig\u00eancia de \u00e1udio para tudo",
    sythioDesc:
      "Sythio n\u00e3o precisa entrar nas suas reuni\u00f5es. Grave com qualquer dispositivo, envie qualquer arquivo de \u00e1udio e Sythio o transforma em 9 formatos estruturados. Funciona com reuni\u00f5es, mas tamb\u00e9m com notas de voz, aulas, sess\u00f5es de brainstorming, liga\u00e7\u00f5es com clientes e qualquer outro \u00e1udio que voc\u00ea capture.",
    sythioItem1: "9 formatos de resultados estruturados",
    sythioItem2: "Funciona com qualquer fonte de \u00e1udio",
    sythioItem3: "Sem bot nas suas reuni\u00f5es",
    sythioItem4: "Detec\u00e7\u00e3o de falantes com atribui\u00e7\u00e3o",
    comparisonTitle: "Compara\u00e7\u00e3o Recurso por Recurso",
    comparisonSubtitle: "Uma vis\u00e3o honesta do que cada ferramenta oferece.",
    thFeature: "Recurso",
    whenTitle: "Quando Escolher Sythio",
    whenSubtitle: "Sythio \u00e9 a melhor op\u00e7\u00e3o quando sua vida de \u00e1udio vai al\u00e9m de reuni\u00f5es agendadas.",
    when1Title: "Voc\u00ea n\u00e3o quer um bot nas suas reuni\u00f5es",
    when1Desc:
      "Alguns participantes acham os bots de reuni\u00e3o intrusivos ou distrativos. Sythio trabalha com uma grava\u00e7\u00e3o que voc\u00ea j\u00e1 tem \u2014 sem presen\u00e7a de bot, sem permiss\u00f5es necess\u00e1rias de outros participantes.",
    when2Title: "Seu \u00e1udio n\u00e3o se limita a reuni\u00f5es",
    when2Desc:
      "Notas de voz no caminho, grava\u00e7\u00f5es de aulas, entrevistas, sess\u00f5es de brainstorming \u2014 Sythio processa qualquer \u00e1udio, n\u00e3o apenas eventos agendados.",
    when3Title: "Voc\u00ea quer mais do que uma transcri\u00e7\u00e3o e um resumo",
    when3Desc:
      "Fireflies te d\u00e1 uma transcri\u00e7\u00e3o e um resumo. Sythio te d\u00e1 9 formatos estruturados \u2014 incluindo planos de a\u00e7\u00e3o, relat\u00f3rios executivos, mensagens de acompanhamento e notas de estudo.",
    when4Title: "Voc\u00ea valoriza resultados estruturados acima da transcri\u00e7\u00e3o bruta",
    when4Desc:
      "Se voc\u00ea quer que seu \u00e1udio se torne informa\u00e7\u00e3o organizada e acion\u00e1vel \u2014 n\u00e3o um documento longo de texto \u2014 a abordagem multi-resultado do Sythio \u00e9 feita para isso.",
    moreComparisons: "Mais Compara\u00e7\u00f5es",
    vsOtter: "vs Otter.ai",
    vsTldv: "vs tl;dv",
    allFeatures: "Todos os Recursos",
    pricing: "Pre\u00e7os",
    ctaTitle1: "Intelig\u00eancia de \u00e1udio",
    ctaTitle2: "sem o bot de reuni\u00f5es",
    ctaSubtitle:
      "Experimente Sythio gr\u00e1tis e descubra o que acontece quando seu \u00e1udio \u00e9 verdadeiramente transformado \u2014 n\u00e3o apenas transcrito e resumido.",
    startFree: "Comece Gr\u00e1tis",
    exploreFeatures: "Explorar Recursos",
    freePlan: "O plano gratuito inclui 5 grava\u00e7\u00f5es por m\u00eas. Sem cart\u00e3o de cr\u00e9dito.",
    "row.primaryOutput": "Resultado principal",
    "row.primaryOutput.sythio": "9 formatos estruturados",
    "row.primaryOutput.competitor": "Transcri\u00e7\u00e3o + resumo",
    "row.howItWorks": "Como funciona",
    "row.howItWorks.sythio": "Envie ou grave qualquer \u00e1udio",
    "row.howItWorks.competitor": "Bot entra nas suas reuni\u00f5es",
    "row.audioSources": "Fontes de \u00e1udio",
    "row.audioSources.sythio": "\u2713 Qualquer \u00e1udio \u2014 reuni\u00f5es, notas de voz, aulas",
    "row.audioSources.competitor": "Reuni\u00f5es (Zoom, Teams, Meet)",
    "row.summaries": "Resumos",
    "row.summaries.sythio": "\u2713 Diretamente do \u00e1udio",
    "row.summaries.competitor": "\u2713 Gerado por IA da transcri\u00e7\u00e3o",
    "row.taskExtraction": "Extra\u00e7\u00e3o de tarefas",
    "row.taskExtraction.sythio": "\u2713 Autom\u00e1tica com atribui\u00e7\u00e3o de falante",
    "row.taskExtraction.competitor": "\u2713 Itens de a\u00e7\u00e3o da transcri\u00e7\u00e3o",
    "row.actionPlans": "Planos de a\u00e7\u00e3o",
    "row.actionPlans.sythio": "\u2713 Estruturados e priorizados",
    "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Relat\u00f3rios executivos",
    "row.executiveReports.sythio": "\u2713 Relat\u00f3rios compartilh\u00e1veis",
    "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "Detec\u00e7\u00e3o de falantes",
    "row.speakerDetection.sythio": "\u2713 Com atribui\u00e7\u00e3o de tarefas",
    "row.speakerDetection.competitor": "\u2713 R\u00f3tulos de falante",
    "row.studyNotes": "Notas de estudo",
    "row.studyNotes.sythio": "\u2713 Estruturadas para revis\u00e3o",
    "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Mensagens de acompanhamento",
    "row.followUp.sythio": "\u2713 Rascunhos prontos para enviar",
    "row.followUp.competitor": "\u2014",
    "row.cleanText": "Texto limpo",
    "row.cleanText.sythio": "\u2713 Prosa polida do \u00e1udio",
    "row.cleanText.competitor": "\u2014",
    "row.keyPoints": "Pontos-chave",
    "row.keyPoints.sythio": "\u2713 Extra\u00eddos e organizados",
    "row.keyPoints.competitor": "\u2713 Destaques",
    "row.ideas": "Extra\u00e7\u00e3o de ideias",
    "row.ideas.sythio": "\u2713 Capturadas e categorizadas",
    "row.ideas.competitor": "\u2014",
    "row.noMeeting": "Funciona sem integra\u00e7\u00e3o de reuni\u00f5es",
    "row.noMeeting.sythio": "\u2713 Envie qualquer arquivo de \u00e1udio",
    "row.noMeeting.competitor": "Requer integra\u00e7\u00e3o de calend\u00e1rio",
    "row.voiceNotes": "Notas de voz e brainstorming",
    "row.voiceNotes.sythio": "\u2713 Feito para qualquer \u00e1udio",
    "row.voiceNotes.competitor": "\u2014",
    "row.freePlan": "Plano gratuito",
    "row.freePlan.sythio": "$0 \u2014 5 grava\u00e7\u00f5es/m\u00eas",
    "row.freePlan.competitor": "$0 \u2014 cr\u00e9ditos limitados",
    "row.proPlan": "Plano Pro",
    "row.proPlan.sythio": "$12/m\u00eas",
    "row.proPlan.competitor": "$18/m\u00eas",
  },
  it: {
    label: "Confronto",
    title: "Sythio vs Fireflies.ai",
    subtitle:
      "Fireflies.ai invia un bot alle tue riunioni per trascriverle. Sythio funziona con qualsiasi audio e lo trasforma in 9 risultati strutturati \u2014 nessun bot necessario.",
    trySythio: "Prova Sythio Gratis",
    seeHow: "Scopri Come Funziona",
    twoApproaches: "Due approcci",
    coreDifference: "La Differenza Fondamentale",
    competitorApproach: "L\u2019approccio di Fireflies.ai",
    competitorTitle: "Bot per riunioni",
    competitorDesc:
      "Fireflies invia un assistente IA \u2014 chiamato Fred \u2014 alle tue riunioni programmate su Zoom, Teams o Google Meet. Registra la riunione, genera una trascrizione e fornisce un riassunto con elementi d\u2019azione. \u00c8 progettato per i flussi di lavoro delle riunioni con integrazioni calendario e CRM.",
    competitorItem1: "Il bot partecipa alle riunioni automaticamente",
    competitorItem2: "Trascrizione + riassunto IA",
    competitorItem3: "Elementi d\u2019azione dalle conversazioni",
    competitorItem4: "Integrazioni CRM e calendario",
    sythioApproach: "L\u2019approccio di Sythio",
    sythioTitle: "Intelligenza audio per tutto",
    sythioDesc:
      "Sythio non ha bisogno di partecipare alle tue riunioni. Registra con qualsiasi dispositivo, carica qualsiasi file audio e Sythio lo trasforma in 9 formati strutturati. Funziona con le riunioni, ma anche con note vocali, lezioni, sessioni di brainstorming, chiamate clienti e qualsiasi altro audio che catturi.",
    sythioItem1: "9 formati di risultati strutturati",
    sythioItem2: "Funziona con qualsiasi fonte audio",
    sythioItem3: "Nessun bot nelle tue riunioni",
    sythioItem4: "Rilevamento parlanti con attribuzione",
    comparisonTitle: "Confronto Funzionalit\u00e0 per Funzionalit\u00e0",
    comparisonSubtitle: "Uno sguardo onesto su ci\u00f2 che offre ogni strumento.",
    thFeature: "Funzionalit\u00e0",
    whenTitle: "Quando Scegliere Sythio",
    whenSubtitle: "Sythio \u00e8 la scelta migliore quando la tua vita audio va oltre le riunioni programmate.",
    when1Title: "Non vuoi un bot nelle tue riunioni",
    when1Desc:
      "Alcuni partecipanti trovano i bot delle riunioni invadenti o distraenti. Sythio lavora con una registrazione che hai gi\u00e0 \u2014 nessuna presenza di bot, nessun permesso necessario dagli altri partecipanti.",
    when2Title: "Il tuo audio non si limita alle riunioni",
    when2Desc:
      "Note vocali in viaggio, registrazioni di lezioni, interviste, sessioni di brainstorming \u2014 Sythio elabora qualsiasi audio, non solo eventi in calendario.",
    when3Title: "Vuoi pi\u00f9 di una trascrizione e un riassunto",
    when3Desc:
      "Fireflies ti d\u00e0 una trascrizione e un riassunto. Sythio ti d\u00e0 9 formati strutturati \u2014 inclusi piani d\u2019azione, report esecutivi, messaggi di follow-up e note di studio.",
    when4Title: "Preferisci risultati strutturati alla trascrizione grezza",
    when4Desc:
      "Se vuoi che il tuo audio diventi informazione organizzata e azionabile \u2014 non un lungo documento di testo \u2014 l\u2019approccio multi-risultato di Sythio \u00e8 progettato per questo.",
    moreComparisons: "Altri Confronti",
    vsOtter: "vs Otter.ai",
    vsTldv: "vs tl;dv",
    allFeatures: "Tutte le Funzionalit\u00e0",
    pricing: "Prezzi",
    ctaTitle1: "Intelligenza audio",
    ctaTitle2: "senza il bot di riunione",
    ctaSubtitle:
      "Prova Sythio gratis e scopri cosa succede quando il tuo audio viene veramente trasformato \u2014 non solo trascritto e riassunto.",
    startFree: "Inizia Gratis",
    exploreFeatures: "Esplora le Funzionalit\u00e0",
    freePlan: "Il piano gratuito include 5 registrazioni al mese. Nessuna carta di credito richiesta.",
    "row.primaryOutput": "Risultato principale",
    "row.primaryOutput.sythio": "9 formati strutturati",
    "row.primaryOutput.competitor": "Trascrizione + riassunto",
    "row.howItWorks": "Come funziona",
    "row.howItWorks.sythio": "Carica o registra qualsiasi audio",
    "row.howItWorks.competitor": "Il bot partecipa alle tue riunioni",
    "row.audioSources": "Fonti audio",
    "row.audioSources.sythio": "\u2713 Qualsiasi audio \u2014 riunioni, note vocali, lezioni",
    "row.audioSources.competitor": "Riunioni (Zoom, Teams, Meet)",
    "row.summaries": "Riassunti",
    "row.summaries.sythio": "\u2713 Direttamente dall\u2019audio",
    "row.summaries.competitor": "\u2713 Generato dall\u2019IA dalla trascrizione",
    "row.taskExtraction": "Estrazione attivit\u00e0",
    "row.taskExtraction.sythio": "\u2713 Automatica con attribuzione parlante",
    "row.taskExtraction.competitor": "\u2713 Elementi d\u2019azione dalla trascrizione",
    "row.actionPlans": "Piani d\u2019azione",
    "row.actionPlans.sythio": "\u2713 Strutturati e prioritizzati",
    "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Report esecutivi",
    "row.executiveReports.sythio": "\u2713 Report condivisibili",
    "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "Rilevamento parlanti",
    "row.speakerDetection.sythio": "\u2713 Con attribuzione attivit\u00e0",
    "row.speakerDetection.competitor": "\u2713 Etichette parlante",
    "row.studyNotes": "Note di studio",
    "row.studyNotes.sythio": "\u2713 Strutturate per la revisione",
    "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Messaggi di follow-up",
    "row.followUp.sythio": "\u2713 Bozze pronte da inviare",
    "row.followUp.competitor": "\u2014",
    "row.cleanText": "Testo pulito",
    "row.cleanText.sythio": "\u2713 Prosa curata dall\u2019audio",
    "row.cleanText.competitor": "\u2014",
    "row.keyPoints": "Punti chiave",
    "row.keyPoints.sythio": "\u2713 Estratti e organizzati",
    "row.keyPoints.competitor": "\u2713 In evidenza",
    "row.ideas": "Estrazione idee",
    "row.ideas.sythio": "\u2713 Catturate e categorizzate",
    "row.ideas.competitor": "\u2014",
    "row.noMeeting": "Funziona senza integrazione riunioni",
    "row.noMeeting.sythio": "\u2713 Carica qualsiasi file audio",
    "row.noMeeting.competitor": "Richiede integrazione calendario",
    "row.voiceNotes": "Note vocali e brainstorming",
    "row.voiceNotes.sythio": "\u2713 Progettato per qualsiasi audio",
    "row.voiceNotes.competitor": "\u2014",
    "row.freePlan": "Piano gratuito",
    "row.freePlan.sythio": "$0 \u2014 5 registrazioni/mese",
    "row.freePlan.competitor": "$0 \u2014 crediti limitati",
    "row.proPlan": "Piano Pro",
    "row.proPlan.sythio": "$12/mese",
    "row.proPlan.competitor": "$18/mese",
  },
};

export default function FirefliesComparePage() {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;

  const comparisonRows = [
    { feature: c["row.primaryOutput"], sythio: c["row.primaryOutput.sythio"], fireflies: c["row.primaryOutput.competitor"] },
    { feature: c["row.howItWorks"], sythio: c["row.howItWorks.sythio"], fireflies: c["row.howItWorks.competitor"] },
    { feature: c["row.audioSources"], sythio: c["row.audioSources.sythio"], fireflies: c["row.audioSources.competitor"] },
    { feature: c["row.summaries"], sythio: c["row.summaries.sythio"], fireflies: c["row.summaries.competitor"] },
    { feature: c["row.taskExtraction"], sythio: c["row.taskExtraction.sythio"], fireflies: c["row.taskExtraction.competitor"] },
    { feature: c["row.actionPlans"], sythio: c["row.actionPlans.sythio"], fireflies: c["row.actionPlans.competitor"] },
    { feature: c["row.executiveReports"], sythio: c["row.executiveReports.sythio"], fireflies: c["row.executiveReports.competitor"] },
    { feature: c["row.speakerDetection"], sythio: c["row.speakerDetection.sythio"], fireflies: c["row.speakerDetection.competitor"] },
    { feature: c["row.studyNotes"], sythio: c["row.studyNotes.sythio"], fireflies: c["row.studyNotes.competitor"] },
    { feature: c["row.followUp"], sythio: c["row.followUp.sythio"], fireflies: c["row.followUp.competitor"] },
    { feature: c["row.cleanText"], sythio: c["row.cleanText.sythio"], fireflies: c["row.cleanText.competitor"] },
    { feature: c["row.keyPoints"], sythio: c["row.keyPoints.sythio"], fireflies: c["row.keyPoints.competitor"] },
    { feature: c["row.ideas"], sythio: c["row.ideas.sythio"], fireflies: c["row.ideas.competitor"] },
    { feature: c["row.noMeeting"], sythio: c["row.noMeeting.sythio"], fireflies: c["row.noMeeting.competitor"] },
    { feature: c["row.voiceNotes"], sythio: c["row.voiceNotes.sythio"], fireflies: c["row.voiceNotes.competitor"] },
    { feature: c["row.freePlan"], sythio: c["row.freePlan.sythio"], fireflies: c["row.freePlan.competitor"] },
    { feature: c["row.proPlan"], sythio: c["row.proPlan.sythio"], fireflies: c["row.proPlan.competitor"] },
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.label}
            </p>
            <TextReveal>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                {c.title}
              </h1>
            </TextReveal>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              {c.subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <MagneticHover>
                <Link
                  href="/pricing"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  {c.trySythio}
                </Link>
              </MagneticHover>
              <Link
                href="/product"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
              >
                {c.seeHow}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Difference */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.twoApproaches}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.coreDifference}
              </h2>
            </TextReveal>
          </div>

          <GsapStagger stagger={0.08}>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ScrollScale>
                <div className="h-full p-7 rounded-2xl bg-background border border-border-light">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">
                    {c.competitorApproach}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {c.competitorTitle}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {c.competitorDesc}
                  </p>
                  <ul className="space-y-3">
                    {[c.competitorItem1, c.competitorItem2, c.competitorItem3, c.competitorItem4].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-light shrink-0" />
                        <span className="text-sm text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollScale>

              <ScrollScale>
                <div className="h-full p-7 rounded-2xl bg-foreground text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">
                    {c.sythioApproach}
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {c.sythioTitle}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {c.sythioDesc}
                  </p>
                  <ul className="space-y-3">
                    {[c.sythioItem1, c.sythioItem2, c.sythioItem3, c.sythioItem4].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="text-sm text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollScale>
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {c.comparisonTitle}
              </h2>
            </TextReveal>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              {c.comparisonSubtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-border-light overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border-light">
                    <th className="text-left p-4 text-sm font-semibold text-foreground">
                      {c.thFeature}
                    </th>
                    <th className="text-center p-4 text-sm font-semibold text-foreground">
                      Sythio
                    </th>
                    <th className="text-center p-4 text-sm font-semibold text-muted">
                      Fireflies.ai
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-border-light last:border-0"
                    >
                      <td className="p-4 text-sm text-muted">{row.feature}</td>
                      <td className="p-4 text-center text-sm text-foreground">
                        {row.sythio}
                      </td>
                      <td className="p-4 text-center text-sm text-muted">
                        {row.fireflies}
                      </td>
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
              <TextReveal>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  {c.whenTitle}
                </h2>
              </TextReveal>
              <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
                {c.whenSubtitle}
              </p>
            </div>

            <GsapStagger stagger={0.08}>
              <div className="space-y-6">
                {[
                  { title: c.when1Title, description: c.when1Desc },
                  { title: c.when2Title, description: c.when2Desc },
                  { title: c.when3Title, description: c.when3Desc },
                  { title: c.when4Title, description: c.when4Desc },
                ].map((item) => (
                  <ScrollScale key={item.title}>
                    <div className="p-6 rounded-2xl bg-background border border-border-light">
                      <h3 className="text-base font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </ScrollScale>
                ))}
              </div>
            </GsapStagger>
          </div>
        </div>
      </section>

      {/* Related Comparisons */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <TextReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {c.moreComparisons}
              </h2>
            </TextReveal>
          </div>

          <GsapStagger stagger={0.08}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: c.vsOtter, href: "/compare/otter" },
                { label: c.vsTldv, href: "/compare/tldv" },
                { label: c.allFeatures, href: "/features" },
                { label: c.pricing, href: "/pricing" },
              ].map((link) => (
                <ScrollScale key={link.label}>
                  <Link
                    href={link.href}
                    className="group p-5 rounded-xl bg-white border border-border-light hover:border-border hover:shadow-md transition-all duration-300 text-center block"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="hero-orb hero-orb-2" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.ctaTitle1}
                <br />
                {c.ctaTitle2}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              {c.ctaSubtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticHover>
                <Link
                  href="/pricing"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  {c.startFree}
                </Link>
              </MagneticHover>
              <Link
                href="/features"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
              >
                {c.exploreFeatures}
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-light">
              {c.freePlan}
            </p>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
