"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Comparison",
    title: "Sythio vs Otter.ai",
    subtitle:
      "Otter.ai is a well-known transcription tool that does its job well. Sythio takes a different approach entirely \u2014 transforming audio into 9 structured outputs, not just a text transcript.",
    trySythio: "Try Sythio Free",
    seeHow: "See How It Works",
    twoApproaches: "Two approaches",
    coreDifference: "The Core Difference",
    otterApproach: "Otter.ai\u2019s approach",
    otterTitle: "Transcription-first",
    otterDesc:
      "Otter.ai is designed to turn spoken words into written text. It does this well \u2014 real-time transcription, speaker identification, and searchable transcripts. The primary output is a text transcript, with AI-generated summaries available as a secondary feature.",
    otterItem1: "Real-time transcription",
    otterItem2: "Meeting integrations (Zoom, Teams, Meet)",
    otterItem3: "Searchable transcript library",
    otterItem4: "AI-generated summary from transcript",
    sythioApproach: "Sythio\u2019s approach",
    sythioTitle: "Multi-output transformation",
    sythioDesc:
      "Sythio was built on the belief that a transcript is just the beginning. One recording becomes 9 structured outputs \u2014 summaries, tasks, action plans, executive reports, follow-up messages, study notes, clean text, key points, and ideas. Each is purpose-built for a different need.",
    sythioItem1: "9 structured output formats",
    sythioItem2: "Speaker detection with task attribution",
    sythioItem3: "Works with any audio source",
    sythioItem4: "Built for action, not just documentation",
    comparisonTitle: "Feature-by-Feature Comparison",
    comparisonSubtitle: "An honest look at what each tool offers.",
    thFeature: "Feature",
    whenTitle: "When to Choose Sythio",
    whenSubtitle: "Sythio is the better fit when you need more than a transcript.",
    when1Title: "You need action, not just documentation",
    when1Desc:
      "If you leave meetings wanting a clear task list, a follow-up message to send, or a structured action plan \u2014 not just a wall of text \u2014 Sythio delivers exactly that.",
    when2Title: "You work with diverse audio, not just meetings",
    when2Desc:
      "Voice notes while commuting, lecture recordings, brainstorming sessions, client calls \u2014 Sythio handles any audio source and transforms it into the right format.",
    when3Title: "You want speaker-attributed outputs",
    when3Desc:
      "Knowing who said what matters for accountability. Sythio attributes tasks and decisions to specific speakers, so the right person sees the right follow-up.",
    when4Title: "You want multiple outputs without extra work",
    when4Desc:
      "One recording, nine formats. No re-processing, no manual formatting. Record once and get everything you need in seconds.",
    moreComparisons: "More Comparisons",
    vsFireflies: "vs Fireflies.ai",
    vsTldv: "vs tl;dv",
    allFeatures: "All Features",
    pricing: "Pricing",
    ctaTitle: "Go beyond transcription",
    ctaSubtitle:
      "Try Sythio free and see the difference between getting a transcript and getting 9 structured, actionable outputs from your audio.",
    startFree: "Start Free",
    exploreFeatures: "Explore Features",
    freePlan: "Free plan includes 5 recordings per month. No credit card needed.",
    // Table rows
    "row.primaryOutput": "Primary output",
    "row.primaryOutput.sythio": "9 structured formats",
    "row.primaryOutput.otter": "Transcript",
    "row.summaries": "Summaries",
    "row.summaries.sythio": "\u2713 From audio directly",
    "row.summaries.otter": "\u2713 From transcript",
    "row.taskExtraction": "Task extraction",
    "row.taskExtraction.sythio": "\u2713 Automatic with attribution",
    "row.taskExtraction.otter": "\u2014",
    "row.actionPlans": "Action plans",
    "row.actionPlans.sythio": "\u2713 Structured and prioritized",
    "row.actionPlans.otter": "\u2014",
    "row.executiveReports": "Executive reports",
    "row.executiveReports.sythio": "\u2713 Shareable reports",
    "row.executiveReports.otter": "\u2014",
    "row.speakerDetection": "Speaker detection",
    "row.speakerDetection.sythio": "\u2713 With task attribution",
    "row.speakerDetection.otter": "\u2713 Speaker labels",
    "row.studyNotes": "Study notes",
    "row.studyNotes.sythio": "\u2713 Structured for review",
    "row.studyNotes.otter": "\u2014",
    "row.followUp": "Follow-up messages",
    "row.followUp.sythio": "\u2713 Ready-to-send drafts",
    "row.followUp.otter": "\u2014",
    "row.cleanText": "Clean text",
    "row.cleanText.sythio": "\u2713 Polished prose from audio",
    "row.cleanText.otter": "\u2014",
    "row.keyPoints": "Key points",
    "row.keyPoints.sythio": "\u2713 Extracted and organized",
    "row.keyPoints.otter": "\u2014",
    "row.ideas": "Ideas extraction",
    "row.ideas.sythio": "\u2713 Captured and categorized",
    "row.ideas.otter": "\u2014",
    "row.audioFirst": "Audio-first design",
    "row.audioFirst.sythio": "\u2713 Any audio source",
    "row.audioFirst.otter": "Meeting-focused",
    "row.freePlan": "Free plan",
    "row.freePlan.sythio": "$0 \u2014 5 recordings/mo",
    "row.freePlan.otter": "$0 \u2014 limited minutes",
    "row.proPlan": "Paid plan",
    "row.proPlan.sythio": "$12/mo",
    "row.proPlan.otter": "$16.99/mo",
  },
  es: {
    label: "Comparaci\u00f3n",
    title: "Sythio vs Otter.ai",
    subtitle:
      "Otter.ai es una conocida herramienta de transcripci\u00f3n que hace bien su trabajo. Sythio adopta un enfoque completamente diferente: transforma el audio en 9 resultados estructurados, no solo en una transcripci\u00f3n de texto.",
    trySythio: "Prueba Sythio Gratis",
    seeHow: "Ver C\u00f3mo Funciona",
    twoApproaches: "Dos enfoques",
    coreDifference: "La Diferencia Principal",
    otterApproach: "El enfoque de Otter.ai",
    otterTitle: "Transcripci\u00f3n primero",
    otterDesc:
      "Otter.ai est\u00e1 dise\u00f1ado para convertir palabras habladas en texto escrito. Lo hace bien: transcripci\u00f3n en tiempo real, identificaci\u00f3n de hablantes y transcripciones buscables. El resultado principal es una transcripci\u00f3n de texto, con res\u00famenes generados por IA como funci\u00f3n secundaria.",
    otterItem1: "Transcripci\u00f3n en tiempo real",
    otterItem2: "Integraciones de reuniones (Zoom, Teams, Meet)",
    otterItem3: "Biblioteca de transcripciones buscable",
    otterItem4: "Resumen generado por IA desde la transcripci\u00f3n",
    sythioApproach: "El enfoque de Sythio",
    sythioTitle: "Transformaci\u00f3n multi-resultado",
    sythioDesc:
      "Sythio fue creado con la convicci\u00f3n de que una transcripci\u00f3n es solo el comienzo. Una grabaci\u00f3n se convierte en 9 resultados estructurados: res\u00famenes, tareas, planes de acci\u00f3n, informes ejecutivos, mensajes de seguimiento, notas de estudio, texto limpio, puntos clave e ideas. Cada uno est\u00e1 dise\u00f1ado para una necesidad diferente.",
    sythioItem1: "9 formatos de resultados estructurados",
    sythioItem2: "Detecci\u00f3n de hablantes con atribuci\u00f3n de tareas",
    sythioItem3: "Funciona con cualquier fuente de audio",
    sythioItem4: "Dise\u00f1ado para la acci\u00f3n, no solo documentaci\u00f3n",
    comparisonTitle: "Comparaci\u00f3n Caracter\u00edstica por Caracter\u00edstica",
    comparisonSubtitle: "Una mirada honesta a lo que ofrece cada herramienta.",
    thFeature: "Caracter\u00edstica",
    whenTitle: "Cu\u00e1ndo Elegir Sythio",
    whenSubtitle: "Sythio es la mejor opci\u00f3n cuando necesitas m\u00e1s que una transcripci\u00f3n.",
    when1Title: "Necesitas acci\u00f3n, no solo documentaci\u00f3n",
    when1Desc:
      "Si sales de reuniones queriendo una lista clara de tareas, un mensaje de seguimiento o un plan de acci\u00f3n estructurado \u2014 no solo un muro de texto \u2014 Sythio entrega exactamente eso.",
    when2Title: "Trabajas con audio diverso, no solo reuniones",
    when2Desc:
      "Notas de voz mientras conduces, grabaciones de clases, sesiones de lluvia de ideas, llamadas con clientes \u2014 Sythio maneja cualquier fuente de audio y la transforma en el formato adecuado.",
    when3Title: "Quieres resultados atribuidos por hablante",
    when3Desc:
      "Saber qui\u00e9n dijo qu\u00e9 importa para la responsabilidad. Sythio atribuye tareas y decisiones a hablantes espec\u00edficos, para que la persona correcta vea el seguimiento correcto.",
    when4Title: "Quieres m\u00faltiples resultados sin trabajo extra",
    when4Desc:
      "Una grabaci\u00f3n, nueve formatos. Sin reprocesamiento, sin formateo manual. Graba una vez y obt\u00e9n todo lo que necesitas en segundos.",
    moreComparisons: "M\u00e1s Comparaciones",
    vsFireflies: "vs Fireflies.ai",
    vsTldv: "vs tl;dv",
    allFeatures: "Todas las Funciones",
    pricing: "Precios",
    ctaTitle: "Ve m\u00e1s all\u00e1 de la transcripci\u00f3n",
    ctaSubtitle:
      "Prueba Sythio gratis y descubre la diferencia entre obtener una transcripci\u00f3n y obtener 9 resultados estructurados y accionables de tu audio.",
    startFree: "Comenzar Gratis",
    exploreFeatures: "Explorar Funciones",
    freePlan: "El plan gratuito incluye 5 grabaciones al mes. Sin tarjeta de cr\u00e9dito.",
    "row.primaryOutput": "Resultado principal",
    "row.primaryOutput.sythio": "9 formatos estructurados",
    "row.primaryOutput.otter": "Transcripci\u00f3n",
    "row.summaries": "Res\u00famenes",
    "row.summaries.sythio": "\u2713 Directamente del audio",
    "row.summaries.otter": "\u2713 Desde la transcripci\u00f3n",
    "row.taskExtraction": "Extracci\u00f3n de tareas",
    "row.taskExtraction.sythio": "\u2713 Autom\u00e1tica con atribuci\u00f3n",
    "row.taskExtraction.otter": "\u2014",
    "row.actionPlans": "Planes de acci\u00f3n",
    "row.actionPlans.sythio": "\u2713 Estructurados y priorizados",
    "row.actionPlans.otter": "\u2014",
    "row.executiveReports": "Informes ejecutivos",
    "row.executiveReports.sythio": "\u2713 Informes compartibles",
    "row.executiveReports.otter": "\u2014",
    "row.speakerDetection": "Detecci\u00f3n de hablantes",
    "row.speakerDetection.sythio": "\u2713 Con atribuci\u00f3n de tareas",
    "row.speakerDetection.otter": "\u2713 Etiquetas de hablante",
    "row.studyNotes": "Notas de estudio",
    "row.studyNotes.sythio": "\u2713 Estructuradas para revisi\u00f3n",
    "row.studyNotes.otter": "\u2014",
    "row.followUp": "Mensajes de seguimiento",
    "row.followUp.sythio": "\u2713 Borradores listos para enviar",
    "row.followUp.otter": "\u2014",
    "row.cleanText": "Texto limpio",
    "row.cleanText.sythio": "\u2713 Prosa pulida del audio",
    "row.cleanText.otter": "\u2014",
    "row.keyPoints": "Puntos clave",
    "row.keyPoints.sythio": "\u2713 Extra\u00eddos y organizados",
    "row.keyPoints.otter": "\u2014",
    "row.ideas": "Extracci\u00f3n de ideas",
    "row.ideas.sythio": "\u2713 Capturadas y categorizadas",
    "row.ideas.otter": "\u2014",
    "row.audioFirst": "Dise\u00f1o audio-primero",
    "row.audioFirst.sythio": "\u2713 Cualquier fuente de audio",
    "row.audioFirst.otter": "Enfocado en reuniones",
    "row.freePlan": "Plan gratuito",
    "row.freePlan.sythio": "$0 \u2014 5 grabaciones/mes",
    "row.freePlan.otter": "$0 \u2014 minutos limitados",
    "row.proPlan": "Plan de pago",
    "row.proPlan.sythio": "$12/mes",
    "row.proPlan.otter": "$16.99/mes",
  },
  fr: {
    label: "Comparaison",
    title: "Sythio vs Otter.ai",
    subtitle:
      "Otter.ai est un outil de transcription reconnu qui fait bien son travail. Sythio adopte une approche enti\u00e8rement diff\u00e9rente : transformer l\u2019audio en 9 r\u00e9sultats structur\u00e9s, pas seulement une transcription textuelle.",
    trySythio: "Essayer Sythio Gratuitement",
    seeHow: "Voir Comment \u00c7a Marche",
    twoApproaches: "Deux approches",
    coreDifference: "La Diff\u00e9rence Fondamentale",
    otterApproach: "L\u2019approche d\u2019Otter.ai",
    otterTitle: "Transcription d\u2019abord",
    otterDesc:
      "Otter.ai est con\u00e7u pour convertir les paroles en texte \u00e9crit. Il le fait bien : transcription en temps r\u00e9el, identification des intervenants et transcriptions consultables. Le r\u00e9sultat principal est une transcription textuelle, avec des r\u00e9sum\u00e9s g\u00e9n\u00e9r\u00e9s par IA en fonctionnalit\u00e9 secondaire.",
    otterItem1: "Transcription en temps r\u00e9el",
    otterItem2: "Int\u00e9grations de r\u00e9unions (Zoom, Teams, Meet)",
    otterItem3: "Biblioth\u00e8que de transcriptions consultable",
    otterItem4: "R\u00e9sum\u00e9 g\u00e9n\u00e9r\u00e9 par IA depuis la transcription",
    sythioApproach: "L\u2019approche de Sythio",
    sythioTitle: "Transformation multi-r\u00e9sultats",
    sythioDesc:
      "Sythio a \u00e9t\u00e9 cr\u00e9\u00e9 avec la conviction qu\u2019une transcription n\u2019est que le d\u00e9but. Un enregistrement devient 9 r\u00e9sultats structur\u00e9s : r\u00e9sum\u00e9s, t\u00e2ches, plans d\u2019action, rapports ex\u00e9cutifs, messages de suivi, notes d\u2019\u00e9tude, texte nettoy\u00e9, points cl\u00e9s et id\u00e9es. Chacun est con\u00e7u pour un besoin diff\u00e9rent.",
    sythioItem1: "9 formats de r\u00e9sultats structur\u00e9s",
    sythioItem2: "D\u00e9tection des intervenants avec attribution de t\u00e2ches",
    sythioItem3: "Fonctionne avec toute source audio",
    sythioItem4: "Con\u00e7u pour l\u2019action, pas seulement la documentation",
    comparisonTitle: "Comparaison Fonctionnalit\u00e9 par Fonctionnalit\u00e9",
    comparisonSubtitle: "Un regard honn\u00eate sur ce que chaque outil propose.",
    thFeature: "Fonctionnalit\u00e9",
    whenTitle: "Quand Choisir Sythio",
    whenSubtitle: "Sythio est le meilleur choix quand vous avez besoin de plus qu\u2019une transcription.",
    when1Title: "Vous avez besoin d\u2019action, pas seulement de documentation",
    when1Desc:
      "Si vous sortez de r\u00e9unions en voulant une liste de t\u00e2ches claire, un message de suivi \u00e0 envoyer ou un plan d\u2019action structur\u00e9 \u2014 pas juste un mur de texte \u2014 Sythio livre exactement cela.",
    when2Title: "Vous travaillez avec des audios divers, pas seulement des r\u00e9unions",
    when2Desc:
      "Notes vocales en voiture, enregistrements de cours, sessions de brainstorming, appels clients \u2014 Sythio g\u00e8re toute source audio et la transforme dans le bon format.",
    when3Title: "Vous voulez des r\u00e9sultats attribu\u00e9s par intervenant",
    when3Desc:
      "Savoir qui a dit quoi est important pour la responsabilit\u00e9. Sythio attribue les t\u00e2ches et d\u00e9cisions \u00e0 des intervenants sp\u00e9cifiques, pour que la bonne personne voie le bon suivi.",
    when4Title: "Vous voulez plusieurs r\u00e9sultats sans effort suppl\u00e9mentaire",
    when4Desc:
      "Un enregistrement, neuf formats. Pas de retraitement, pas de mise en forme manuelle. Enregistrez une fois et obtenez tout ce dont vous avez besoin en quelques secondes.",
    moreComparisons: "Plus de Comparaisons",
    vsFireflies: "vs Fireflies.ai",
    vsTldv: "vs tl;dv",
    allFeatures: "Toutes les Fonctionnalit\u00e9s",
    pricing: "Tarifs",
    ctaTitle: "Allez au-del\u00e0 de la transcription",
    ctaSubtitle:
      "Essayez Sythio gratuitement et d\u00e9couvrez la diff\u00e9rence entre obtenir une transcription et obtenir 9 r\u00e9sultats structur\u00e9s et exploitables de votre audio.",
    startFree: "Commencer Gratuitement",
    exploreFeatures: "Explorer les Fonctionnalit\u00e9s",
    freePlan: "Le plan gratuit inclut 5 enregistrements par mois. Sans carte de cr\u00e9dit.",
    "row.primaryOutput": "R\u00e9sultat principal",
    "row.primaryOutput.sythio": "9 formats structur\u00e9s",
    "row.primaryOutput.otter": "Transcription",
    "row.summaries": "R\u00e9sum\u00e9s",
    "row.summaries.sythio": "\u2713 Directement de l\u2019audio",
    "row.summaries.otter": "\u2713 Depuis la transcription",
    "row.taskExtraction": "Extraction de t\u00e2ches",
    "row.taskExtraction.sythio": "\u2713 Automatique avec attribution",
    "row.taskExtraction.otter": "\u2014",
    "row.actionPlans": "Plans d\u2019action",
    "row.actionPlans.sythio": "\u2713 Structur\u00e9s et prioris\u00e9s",
    "row.actionPlans.otter": "\u2014",
    "row.executiveReports": "Rapports ex\u00e9cutifs",
    "row.executiveReports.sythio": "\u2713 Rapports partageables",
    "row.executiveReports.otter": "\u2014",
    "row.speakerDetection": "D\u00e9tection des intervenants",
    "row.speakerDetection.sythio": "\u2713 Avec attribution de t\u00e2ches",
    "row.speakerDetection.otter": "\u2713 \u00c9tiquettes d\u2019intervenant",
    "row.studyNotes": "Notes d\u2019\u00e9tude",
    "row.studyNotes.sythio": "\u2713 Structur\u00e9es pour la r\u00e9vision",
    "row.studyNotes.otter": "\u2014",
    "row.followUp": "Messages de suivi",
    "row.followUp.sythio": "\u2713 Brouillons pr\u00eats \u00e0 envoyer",
    "row.followUp.otter": "\u2014",
    "row.cleanText": "Texte nettoy\u00e9",
    "row.cleanText.sythio": "\u2713 Prose soign\u00e9e de l\u2019audio",
    "row.cleanText.otter": "\u2014",
    "row.keyPoints": "Points cl\u00e9s",
    "row.keyPoints.sythio": "\u2713 Extraits et organis\u00e9s",
    "row.keyPoints.otter": "\u2014",
    "row.ideas": "Extraction d\u2019id\u00e9es",
    "row.ideas.sythio": "\u2713 Captur\u00e9es et cat\u00e9goris\u00e9es",
    "row.ideas.otter": "\u2014",
    "row.audioFirst": "Conception audio-first",
    "row.audioFirst.sythio": "\u2713 Toute source audio",
    "row.audioFirst.otter": "Centr\u00e9 sur les r\u00e9unions",
    "row.freePlan": "Plan gratuit",
    "row.freePlan.sythio": "$0 \u2014 5 enregistrements/mois",
    "row.freePlan.otter": "$0 \u2014 minutes limit\u00e9es",
    "row.proPlan": "Plan de pago",
    "row.proPlan.sythio": "$12/mois",
    "row.proPlan.otter": "$16.99/mois",
  },
  pt: {
    label: "Compara\u00e7\u00e3o",
    title: "Sythio vs Otter.ai",
    subtitle:
      "Otter.ai \u00e9 uma ferramenta de transcri\u00e7\u00e3o conhecida que faz bem o seu trabalho. Sythio adota uma abordagem completamente diferente: transforma \u00e1udio em 9 resultados estruturados, n\u00e3o apenas uma transcri\u00e7\u00e3o de texto.",
    trySythio: "Experimente Sythio Gr\u00e1tis",
    seeHow: "Veja Como Funciona",
    twoApproaches: "Duas abordagens",
    coreDifference: "A Diferen\u00e7a Principal",
    otterApproach: "A abordagem do Otter.ai",
    otterTitle: "Transcri\u00e7\u00e3o em primeiro lugar",
    otterDesc:
      "Otter.ai foi projetado para converter palavras faladas em texto escrito. Ele faz isso bem: transcri\u00e7\u00e3o em tempo real, identifica\u00e7\u00e3o de falantes e transcri\u00e7\u00f5es pesquis\u00e1veis. O resultado principal \u00e9 uma transcri\u00e7\u00e3o de texto, com resumos gerados por IA como recurso secund\u00e1rio.",
    otterItem1: "Transcri\u00e7\u00e3o em tempo real",
    otterItem2: "Integra\u00e7\u00f5es de reuni\u00f5es (Zoom, Teams, Meet)",
    otterItem3: "Biblioteca de transcri\u00e7\u00f5es pesquis\u00e1vel",
    otterItem4: "Resumo gerado por IA a partir da transcri\u00e7\u00e3o",
    sythioApproach: "A abordagem do Sythio",
    sythioTitle: "Transforma\u00e7\u00e3o multi-resultado",
    sythioDesc:
      "Sythio foi criado com a cren\u00e7a de que uma transcri\u00e7\u00e3o \u00e9 apenas o come\u00e7o. Uma grava\u00e7\u00e3o se torna 9 resultados estruturados: resumos, tarefas, planos de a\u00e7\u00e3o, relat\u00f3rios executivos, mensagens de acompanhamento, notas de estudo, texto limpo, pontos-chave e ideias. Cada um \u00e9 projetado para uma necessidade diferente.",
    sythioItem1: "9 formatos de resultados estruturados",
    sythioItem2: "Detec\u00e7\u00e3o de falantes com atribui\u00e7\u00e3o de tarefas",
    sythioItem3: "Funciona com qualquer fonte de \u00e1udio",
    sythioItem4: "Feito para a\u00e7\u00e3o, n\u00e3o apenas documenta\u00e7\u00e3o",
    comparisonTitle: "Compara\u00e7\u00e3o Recurso por Recurso",
    comparisonSubtitle: "Uma vis\u00e3o honesta do que cada ferramenta oferece.",
    thFeature: "Recurso",
    whenTitle: "Quando Escolher Sythio",
    whenSubtitle: "Sythio \u00e9 a melhor op\u00e7\u00e3o quando voc\u00ea precisa de mais do que uma transcri\u00e7\u00e3o.",
    when1Title: "Voc\u00ea precisa de a\u00e7\u00e3o, n\u00e3o apenas documenta\u00e7\u00e3o",
    when1Desc:
      "Se voc\u00ea sai de reuni\u00f5es querendo uma lista clara de tarefas, uma mensagem de acompanhamento ou um plano de a\u00e7\u00e3o estruturado \u2014 n\u00e3o apenas um muro de texto \u2014 Sythio entrega exatamente isso.",
    when2Title: "Voc\u00ea trabalha com \u00e1udio diverso, n\u00e3o apenas reuni\u00f5es",
    when2Desc:
      "Notas de voz no carro, grava\u00e7\u00f5es de aulas, sess\u00f5es de brainstorming, liga\u00e7\u00f5es com clientes \u2014 Sythio lida com qualquer fonte de \u00e1udio e a transforma no formato certo.",
    when3Title: "Voc\u00ea quer resultados atribu\u00eddos por falante",
    when3Desc:
      "Saber quem disse o qu\u00ea importa para a responsabilidade. Sythio atribui tarefas e decis\u00f5es a falantes espec\u00edficos, para que a pessoa certa veja o acompanhamento correto.",
    when4Title: "Voc\u00ea quer m\u00faltiplos resultados sem trabalho extra",
    when4Desc:
      "Uma grava\u00e7\u00e3o, nove formatos. Sem reprocessamento, sem formata\u00e7\u00e3o manual. Grave uma vez e obtenha tudo o que precisa em segundos.",
    moreComparisons: "Mais Compara\u00e7\u00f5es",
    vsFireflies: "vs Fireflies.ai",
    vsTldv: "vs tl;dv",
    allFeatures: "Todos os Recursos",
    pricing: "Pre\u00e7os",
    ctaTitle: "V\u00e1 al\u00e9m da transcri\u00e7\u00e3o",
    ctaSubtitle:
      "Experimente Sythio gr\u00e1tis e veja a diferen\u00e7a entre obter uma transcri\u00e7\u00e3o e obter 9 resultados estruturados e acion\u00e1veis do seu \u00e1udio.",
    startFree: "Comece Gr\u00e1tis",
    exploreFeatures: "Explorar Recursos",
    freePlan: "O plano gratuito inclui 5 grava\u00e7\u00f5es por m\u00eas. Sem cart\u00e3o de cr\u00e9dito.",
    "row.primaryOutput": "Resultado principal",
    "row.primaryOutput.sythio": "9 formatos estruturados",
    "row.primaryOutput.otter": "Transcri\u00e7\u00e3o",
    "row.summaries": "Resumos",
    "row.summaries.sythio": "\u2713 Diretamente do \u00e1udio",
    "row.summaries.otter": "\u2713 Da transcri\u00e7\u00e3o",
    "row.taskExtraction": "Extra\u00e7\u00e3o de tarefas",
    "row.taskExtraction.sythio": "\u2713 Autom\u00e1tica com atribui\u00e7\u00e3o",
    "row.taskExtraction.otter": "\u2014",
    "row.actionPlans": "Planos de a\u00e7\u00e3o",
    "row.actionPlans.sythio": "\u2713 Estruturados e priorizados",
    "row.actionPlans.otter": "\u2014",
    "row.executiveReports": "Relat\u00f3rios executivos",
    "row.executiveReports.sythio": "\u2713 Relat\u00f3rios compartilh\u00e1veis",
    "row.executiveReports.otter": "\u2014",
    "row.speakerDetection": "Detec\u00e7\u00e3o de falantes",
    "row.speakerDetection.sythio": "\u2713 Com atribui\u00e7\u00e3o de tarefas",
    "row.speakerDetection.otter": "\u2713 R\u00f3tulos de falante",
    "row.studyNotes": "Notas de estudo",
    "row.studyNotes.sythio": "\u2713 Estruturadas para revis\u00e3o",
    "row.studyNotes.otter": "\u2014",
    "row.followUp": "Mensagens de acompanhamento",
    "row.followUp.sythio": "\u2713 Rascunhos prontos para enviar",
    "row.followUp.otter": "\u2014",
    "row.cleanText": "Texto limpo",
    "row.cleanText.sythio": "\u2713 Prosa polida do \u00e1udio",
    "row.cleanText.otter": "\u2014",
    "row.keyPoints": "Pontos-chave",
    "row.keyPoints.sythio": "\u2713 Extra\u00eddos e organizados",
    "row.keyPoints.otter": "\u2014",
    "row.ideas": "Extra\u00e7\u00e3o de ideias",
    "row.ideas.sythio": "\u2713 Capturadas e categorizadas",
    "row.ideas.otter": "\u2014",
    "row.audioFirst": "Design \u00e1udio-primeiro",
    "row.audioFirst.sythio": "\u2713 Qualquer fonte de \u00e1udio",
    "row.audioFirst.otter": "Focado em reuni\u00f5es",
    "row.freePlan": "Plano gratuito",
    "row.freePlan.sythio": "$0 \u2014 5 grava\u00e7\u00f5es/m\u00eas",
    "row.freePlan.otter": "$0 \u2014 minutos limitados",
    "row.proPlan": "Plano pago",
    "row.proPlan.sythio": "$12/m\u00eas",
    "row.proPlan.otter": "$16.99/m\u00eas",
  },
  it: {
    label: "Confronto",
    title: "Sythio vs Otter.ai",
    subtitle:
      "Otter.ai \u00e8 uno strumento di trascrizione noto che fa bene il suo lavoro. Sythio adotta un approccio completamente diverso: trasforma l\u2019audio in 9 risultati strutturati, non solo una trascrizione testuale.",
    trySythio: "Prova Sythio Gratis",
    seeHow: "Scopri Come Funziona",
    twoApproaches: "Due approcci",
    coreDifference: "La Differenza Fondamentale",
    otterApproach: "L\u2019approccio di Otter.ai",
    otterTitle: "Prima la trascrizione",
    otterDesc:
      "Otter.ai \u00e8 progettato per convertire le parole parlate in testo scritto. Lo fa bene: trascrizione in tempo reale, identificazione dei parlanti e trascrizioni ricercabili. Il risultato principale \u00e8 una trascrizione testuale, con riassunti generati dall\u2019IA come funzionalit\u00e0 secondaria.",
    otterItem1: "Trascrizione in tempo reale",
    otterItem2: "Integrazioni per riunioni (Zoom, Teams, Meet)",
    otterItem3: "Libreria di trascrizioni ricercabile",
    otterItem4: "Riassunto generato dall\u2019IA dalla trascrizione",
    sythioApproach: "L\u2019approccio di Sythio",
    sythioTitle: "Trasformazione multi-risultato",
    sythioDesc:
      "Sythio \u00e8 stato creato con la convinzione che una trascrizione \u00e8 solo l\u2019inizio. Una registrazione diventa 9 risultati strutturati: riassunti, attivit\u00e0, piani d\u2019azione, report esecutivi, messaggi di follow-up, note di studio, testo pulito, punti chiave e idee. Ognuno \u00e8 progettato per un\u2019esigenza diversa.",
    sythioItem1: "9 formati di risultati strutturati",
    sythioItem2: "Rilevamento parlanti con attribuzione attivit\u00e0",
    sythioItem3: "Funziona con qualsiasi fonte audio",
    sythioItem4: "Progettato per l\u2019azione, non solo la documentazione",
    comparisonTitle: "Confronto Funzionalit\u00e0 per Funzionalit\u00e0",
    comparisonSubtitle: "Uno sguardo onesto su ci\u00f2 che offre ogni strumento.",
    thFeature: "Funzionalit\u00e0",
    whenTitle: "Quando Scegliere Sythio",
    whenSubtitle: "Sythio \u00e8 la scelta migliore quando hai bisogno di pi\u00f9 di una trascrizione.",
    when1Title: "Hai bisogno di azione, non solo documentazione",
    when1Desc:
      "Se esci dalle riunioni desiderando una lista chiara di attivit\u00e0, un messaggio di follow-up da inviare o un piano d\u2019azione strutturato \u2014 non solo un muro di testo \u2014 Sythio offre esattamente questo.",
    when2Title: "Lavori con audio diversi, non solo riunioni",
    when2Desc:
      "Note vocali in auto, registrazioni di lezioni, sessioni di brainstorming, chiamate con clienti \u2014 Sythio gestisce qualsiasi fonte audio e la trasforma nel formato giusto.",
    when3Title: "Vuoi risultati attribuiti per parlante",
    when3Desc:
      "Sapere chi ha detto cosa \u00e8 importante per la responsabilit\u00e0. Sythio attribuisce attivit\u00e0 e decisioni a parlanti specifici, cos\u00ec la persona giusta vede il follow-up giusto.",
    when4Title: "Vuoi pi\u00f9 risultati senza lavoro extra",
    when4Desc:
      "Una registrazione, nove formati. Nessuna rielaborazione, nessuna formattazione manuale. Registra una volta e ottieni tutto ci\u00f2 di cui hai bisogno in pochi secondi.",
    moreComparisons: "Altri Confronti",
    vsFireflies: "vs Fireflies.ai",
    vsTldv: "vs tl;dv",
    allFeatures: "Tutte le Funzionalit\u00e0",
    pricing: "Prezzi",
    ctaTitle: "Vai oltre la trascrizione",
    ctaSubtitle:
      "Prova Sythio gratis e scopri la differenza tra ottenere una trascrizione e ottenere 9 risultati strutturati e azionabili dal tuo audio.",
    startFree: "Inizia Gratis",
    exploreFeatures: "Esplora le Funzionalit\u00e0",
    freePlan: "Il piano gratuito include 5 registrazioni al mese. Nessuna carta di credito richiesta.",
    "row.primaryOutput": "Risultato principale",
    "row.primaryOutput.sythio": "9 formati strutturati",
    "row.primaryOutput.otter": "Trascrizione",
    "row.summaries": "Riassunti",
    "row.summaries.sythio": "\u2713 Direttamente dall\u2019audio",
    "row.summaries.otter": "\u2713 Dalla trascrizione",
    "row.taskExtraction": "Estrazione attivit\u00e0",
    "row.taskExtraction.sythio": "\u2713 Automatica con attribuzione",
    "row.taskExtraction.otter": "\u2014",
    "row.actionPlans": "Piani d\u2019azione",
    "row.actionPlans.sythio": "\u2713 Strutturati e prioritizzati",
    "row.actionPlans.otter": "\u2014",
    "row.executiveReports": "Report esecutivi",
    "row.executiveReports.sythio": "\u2713 Report condivisibili",
    "row.executiveReports.otter": "\u2014",
    "row.speakerDetection": "Rilevamento parlanti",
    "row.speakerDetection.sythio": "\u2713 Con attribuzione attivit\u00e0",
    "row.speakerDetection.otter": "\u2713 Etichette parlante",
    "row.studyNotes": "Note di studio",
    "row.studyNotes.sythio": "\u2713 Strutturate per la revisione",
    "row.studyNotes.otter": "\u2014",
    "row.followUp": "Messaggi di follow-up",
    "row.followUp.sythio": "\u2713 Bozze pronte da inviare",
    "row.followUp.otter": "\u2014",
    "row.cleanText": "Testo pulito",
    "row.cleanText.sythio": "\u2713 Prosa curata dall\u2019audio",
    "row.cleanText.otter": "\u2014",
    "row.keyPoints": "Punti chiave",
    "row.keyPoints.sythio": "\u2713 Estratti e organizzati",
    "row.keyPoints.otter": "\u2014",
    "row.ideas": "Estrazione idee",
    "row.ideas.sythio": "\u2713 Catturate e categorizzate",
    "row.ideas.otter": "\u2014",
    "row.audioFirst": "Design audio-first",
    "row.audioFirst.sythio": "\u2713 Qualsiasi fonte audio",
    "row.audioFirst.otter": "Focalizzato sulle riunioni",
    "row.freePlan": "Piano gratuito",
    "row.freePlan.sythio": "$0 \u2014 5 registrazioni/mese",
    "row.freePlan.otter": "$0 \u2014 minuti limitati",
    "row.proPlan": "Piano a pagamento",
    "row.proPlan.sythio": "$12/mese",
    "row.proPlan.otter": "$16.99/mese",
  },
};

export default function OtterComparePage() {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;

  const comparisonRows = [
    { feature: c["row.primaryOutput"], sythio: c["row.primaryOutput.sythio"], otter: c["row.primaryOutput.otter"] },
    { feature: c["row.summaries"], sythio: c["row.summaries.sythio"], otter: c["row.summaries.otter"] },
    { feature: c["row.taskExtraction"], sythio: c["row.taskExtraction.sythio"], otter: c["row.taskExtraction.otter"] },
    { feature: c["row.actionPlans"], sythio: c["row.actionPlans.sythio"], otter: c["row.actionPlans.otter"] },
    { feature: c["row.executiveReports"], sythio: c["row.executiveReports.sythio"], otter: c["row.executiveReports.otter"] },
    { feature: c["row.speakerDetection"], sythio: c["row.speakerDetection.sythio"], otter: c["row.speakerDetection.otter"] },
    { feature: c["row.studyNotes"], sythio: c["row.studyNotes.sythio"], otter: c["row.studyNotes.otter"] },
    { feature: c["row.followUp"], sythio: c["row.followUp.sythio"], otter: c["row.followUp.otter"] },
    { feature: c["row.cleanText"], sythio: c["row.cleanText.sythio"], otter: c["row.cleanText.otter"] },
    { feature: c["row.keyPoints"], sythio: c["row.keyPoints.sythio"], otter: c["row.keyPoints.otter"] },
    { feature: c["row.ideas"], sythio: c["row.ideas.sythio"], otter: c["row.ideas.otter"] },
    { feature: c["row.audioFirst"], sythio: c["row.audioFirst.sythio"], otter: c["row.audioFirst.otter"] },
    { feature: c["row.freePlan"], sythio: c["row.freePlan.sythio"], otter: c["row.freePlan.otter"] },
    { feature: c["row.proPlan"], sythio: c["row.proPlan.sythio"], otter: c["row.proPlan.otter"] },
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
                    {c.otterApproach}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {c.otterTitle}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {c.otterDesc}
                  </p>
                  <ul className="space-y-3">
                    {[c.otterItem1, c.otterItem2, c.otterItem3, c.otterItem4].map((item) => (
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
                      Otter.ai
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
                        {row.otter}
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
                { label: c.vsFireflies, href: "/compare/fireflies" },
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
                {c.ctaTitle}
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
