"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Comparison", title: "Sythio vs AudioPen",
    subtitle: "AudioPen is a simple voice-to-text tool that cleans up your spoken thoughts into neat notes. Sythio takes a different approach \u2014 transforming audio into 9 structured outputs, not just a single cleaned-up text.",
    trySythio: "Try Sythio Free", seeHow: "See How It Works",
    twoApproaches: "Two approaches", coreDifference: "The Core Difference",
    competitorApproach: "AudioPen\u2019s approach", competitorTitle: "Voice-to-text simplicity",
    competitorDesc: "AudioPen is designed for a single purpose: turning rambling voice memos into clean, readable text notes. You speak, it rewrites your words into polished prose. It is a straightforward tool that does one thing well \u2014 converting messy speech into a tidy note.",
    competitorItem1: "Voice memo to clean text", competitorItem2: "Simple, minimal interface", competitorItem3: "Single-output focus", competitorItem4: "Personal note-taking use case",
    sythioApproach: "Sythio\u2019s approach", sythioTitle: "Multi-output transformation",
    sythioDesc: "Sythio was built on the belief that audio contains far more value than a single text note. One recording becomes 9 structured outputs \u2014 summaries, tasks, action plans, executive reports, follow-up messages, study notes, clean text, key points, and ideas. Each is purpose-built for a different need.",
    sythioItem1: "9 structured output formats", sythioItem2: "Speaker detection with task attribution", sythioItem3: "Works with any audio source", sythioItem4: "Built for action, not just note-taking",
    comparisonTitle: "Feature-by-Feature Comparison", comparisonSubtitle: "An honest look at what each tool offers.", thFeature: "Feature",
    whenTitle: "When to Choose Sythio", whenSubtitle: "Sythio is the better fit when you need more than a cleaned-up note.",
    when1Title: "You need structured outputs, not just clean text", when1Desc: "AudioPen gives you one output: a polished text note. Sythio gives you 9 formats \u2014 summaries, tasks, action plans, reports, follow-up messages, and more \u2014 all from the same recording.",
    when2Title: "You work with multi-speaker audio", when2Desc: "AudioPen is designed for solo voice memos. Sythio handles meetings, interviews, and group conversations with speaker detection and task attribution for each participant.",
    when3Title: "You want actionable results, not just documentation", when3Desc: "A clean note is nice, but it still requires you to manually extract tasks and next steps. Sythio does that automatically \u2014 giving you prioritized action plans and ready-to-send follow-ups.",
    when4Title: "You process diverse audio beyond voice memos", when4Desc: "Lectures, client calls, brainstorming sessions, team meetings \u2014 Sythio transforms any audio source into structured outputs. AudioPen is built specifically for personal voice notes.",
    moreComparisons: "More Comparisons", vsOtter: "vs Otter.ai", vsFireflies: "vs Fireflies.ai", vsNotta: "vs Notta.ai", allComparisons: "All Comparisons",
    ctaTitle: "More than a voice note",
    ctaSubtitle: "Try Sythio free and see the difference between getting a single text note and getting 9 structured, actionable outputs from your audio.",
    startFree: "Start Free", exploreFeatures: "Explore Features",
    freePlan: "Free plan includes 5 recordings per month. No credit card needed.",
    "row.primaryOutput": "Primary output", "row.primaryOutput.sythio": "9 structured formats", "row.primaryOutput.competitor": "Cleaned text note",
    "row.summaries": "Summaries", "row.summaries.sythio": "\u2713 From audio directly", "row.summaries.competitor": "\u2014",
    "row.taskExtraction": "Task extraction", "row.taskExtraction.sythio": "\u2713 Automatic with attribution", "row.taskExtraction.competitor": "\u2014",
    "row.actionPlans": "Action plans", "row.actionPlans.sythio": "\u2713 Structured and prioritized", "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Executive reports", "row.executiveReports.sythio": "\u2713 Shareable reports", "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "Speaker detection", "row.speakerDetection.sythio": "\u2713 With task attribution", "row.speakerDetection.competitor": "\u2014",
    "row.studyNotes": "Study notes", "row.studyNotes.sythio": "\u2713 Structured for review", "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Follow-up messages", "row.followUp.sythio": "\u2713 Ready-to-send drafts", "row.followUp.competitor": "\u2014",
    "row.cleanText": "Clean text", "row.cleanText.sythio": "\u2713 Polished prose from audio", "row.cleanText.competitor": "\u2713 Rewritten text note",
    "row.keyPoints": "Key points", "row.keyPoints.sythio": "\u2713 Extracted and organized", "row.keyPoints.competitor": "\u2014",
    "row.ideas": "Ideas extraction", "row.ideas.sythio": "\u2713 Captured and categorized", "row.ideas.competitor": "\u2014",
    "row.multiSpeaker": "Multi-speaker audio", "row.multiSpeaker.sythio": "\u2713 Built for conversations", "row.multiSpeaker.competitor": "Single-speaker focused",
    "row.audioSources": "Audio sources", "row.audioSources.sythio": "\u2713 Any audio \u2014 meetings, lectures, calls", "row.audioSources.competitor": "Voice memos",
    "row.freePlan": "Free plan", "row.freePlan.sythio": "$0 \u2014 5 recordings/mo", "row.freePlan.competitor": "$0 \u2014 limited notes",
    "row.proPlan": "Paid plan", "row.proPlan.sythio": "$12/mo", "row.proPlan.competitor": "$99/yr",
  },
  es: {
    label: "Comparaci\u00f3n", title: "Sythio vs AudioPen",
    subtitle: "AudioPen es una herramienta simple de voz a texto que convierte tus pensamientos hablados en notas ordenadas. Sythio adopta un enfoque diferente \u2014 transforma el audio en 9 resultados estructurados, no solo un texto limpio.",
    trySythio: "Prueba Sythio Gratis", seeHow: "Ver C\u00f3mo Funciona",
    twoApproaches: "Dos enfoques", coreDifference: "La Diferencia Principal",
    competitorApproach: "El enfoque de AudioPen", competitorTitle: "Simplicidad de voz a texto",
    competitorDesc: "AudioPen est\u00e1 dise\u00f1ado con un \u00fanico prop\u00f3sito: convertir notas de voz desordenadas en texto limpio y legible. Hablas, y reescribe tus palabras en prosa pulida. Es una herramienta sencilla que hace una cosa bien \u2014 convertir habla desordenada en una nota ordenada.",
    competitorItem1: "Nota de voz a texto limpio", competitorItem2: "Interfaz simple y minimalista", competitorItem3: "Enfoque de un solo resultado", competitorItem4: "Caso de uso de toma de notas personal",
    sythioApproach: "El enfoque de Sythio", sythioTitle: "Transformaci\u00f3n multi-resultado",
    sythioDesc: "Sythio fue creado con la convicci\u00f3n de que el audio contiene mucho m\u00e1s valor que una sola nota de texto. Una grabaci\u00f3n se convierte en 9 resultados estructurados: res\u00famenes, tareas, planes de acci\u00f3n, informes ejecutivos, mensajes de seguimiento, notas de estudio, texto limpio, puntos clave e ideas. Cada uno dise\u00f1ado para una necesidad diferente.",
    sythioItem1: "9 formatos de resultados estructurados", sythioItem2: "Detecci\u00f3n de hablantes con atribuci\u00f3n de tareas", sythioItem3: "Funciona con cualquier fuente de audio", sythioItem4: "Dise\u00f1ado para la acci\u00f3n, no solo para tomar notas",
    comparisonTitle: "Comparaci\u00f3n Caracter\u00edstica por Caracter\u00edstica", comparisonSubtitle: "Una mirada honesta a lo que ofrece cada herramienta.", thFeature: "Caracter\u00edstica",
    whenTitle: "Cu\u00e1ndo Elegir Sythio", whenSubtitle: "Sythio es la mejor opci\u00f3n cuando necesitas m\u00e1s que una nota limpia.",
    when1Title: "Necesitas resultados estructurados, no solo texto limpio", when1Desc: "AudioPen te da un resultado: una nota de texto pulida. Sythio te da 9 formatos \u2014 res\u00famenes, tareas, planes de acci\u00f3n, informes, mensajes de seguimiento y m\u00e1s \u2014 todo desde la misma grabaci\u00f3n.",
    when2Title: "Trabajas con audio de m\u00faltiples hablantes", when2Desc: "AudioPen est\u00e1 dise\u00f1ado para notas de voz individuales. Sythio maneja reuniones, entrevistas y conversaciones grupales con detecci\u00f3n de hablantes y atribuci\u00f3n de tareas para cada participante.",
    when3Title: "Quieres resultados accionables, no solo documentaci\u00f3n", when3Desc: "Una nota limpia est\u00e1 bien, pero a\u00fan requiere que extraigas tareas y pr\u00f3ximos pasos manualmente. Sythio lo hace autom\u00e1ticamente \u2014 d\u00e1ndote planes de acci\u00f3n priorizados y seguimientos listos para enviar.",
    when4Title: "Procesas audio diverso m\u00e1s all\u00e1 de notas de voz", when4Desc: "Clases, llamadas con clientes, sesiones de lluvia de ideas, reuniones de equipo \u2014 Sythio transforma cualquier fuente de audio en resultados estructurados. AudioPen est\u00e1 dise\u00f1ado espec\u00edficamente para notas de voz personales.",
    moreComparisons: "M\u00e1s Comparaciones", vsOtter: "vs Otter.ai", vsFireflies: "vs Fireflies.ai", vsNotta: "vs Notta.ai", allComparisons: "Todas las Comparaciones",
    ctaTitle: "M\u00e1s que una nota de voz",
    ctaSubtitle: "Prueba Sythio gratis y descubre la diferencia entre obtener una sola nota de texto y obtener 9 resultados estructurados y accionables de tu audio.",
    startFree: "Comenzar Gratis", exploreFeatures: "Explorar Funciones",
    freePlan: "El plan gratuito incluye 5 grabaciones al mes. Sin tarjeta de cr\u00e9dito.",
    "row.primaryOutput": "Resultado principal", "row.primaryOutput.sythio": "9 formatos estructurados", "row.primaryOutput.competitor": "Nota de texto limpia",
    "row.summaries": "Res\u00famenes", "row.summaries.sythio": "\u2713 Directamente del audio", "row.summaries.competitor": "\u2014",
    "row.taskExtraction": "Extracci\u00f3n de tareas", "row.taskExtraction.sythio": "\u2713 Autom\u00e1tica con atribuci\u00f3n", "row.taskExtraction.competitor": "\u2014",
    "row.actionPlans": "Planes de acci\u00f3n", "row.actionPlans.sythio": "\u2713 Estructurados y priorizados", "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Informes ejecutivos", "row.executiveReports.sythio": "\u2713 Informes compartibles", "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "Detecci\u00f3n de hablantes", "row.speakerDetection.sythio": "\u2713 Con atribuci\u00f3n de tareas", "row.speakerDetection.competitor": "\u2014",
    "row.studyNotes": "Notas de estudio", "row.studyNotes.sythio": "\u2713 Estructuradas para revisi\u00f3n", "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Mensajes de seguimiento", "row.followUp.sythio": "\u2713 Borradores listos para enviar", "row.followUp.competitor": "\u2014",
    "row.cleanText": "Texto limpio", "row.cleanText.sythio": "\u2713 Prosa pulida del audio", "row.cleanText.competitor": "\u2713 Nota de texto reescrita",
    "row.keyPoints": "Puntos clave", "row.keyPoints.sythio": "\u2713 Extra\u00eddos y organizados", "row.keyPoints.competitor": "\u2014",
    "row.ideas": "Extracci\u00f3n de ideas", "row.ideas.sythio": "\u2713 Capturadas y categorizadas", "row.ideas.competitor": "\u2014",
    "row.multiSpeaker": "Audio multi-hablante", "row.multiSpeaker.sythio": "\u2713 Dise\u00f1ado para conversaciones", "row.multiSpeaker.competitor": "Enfocado en un solo hablante",
    "row.audioSources": "Fuentes de audio", "row.audioSources.sythio": "\u2713 Cualquier audio \u2014 reuniones, clases, llamadas", "row.audioSources.competitor": "Notas de voz",
    "row.freePlan": "Plan gratuito", "row.freePlan.sythio": "$0 \u2014 5 grabaciones/mes", "row.freePlan.competitor": "$0 \u2014 notas limitadas",
    "row.proPlan": "Plan de pago", "row.proPlan.sythio": "$12/mes", "row.proPlan.competitor": "$99/a\u00f1o",
  },
  fr: {
    label: "Comparaison", title: "Sythio vs AudioPen",
    subtitle: "AudioPen est un outil simple de voix-vers-texte qui transforme vos pens\u00e9es parl\u00e9es en notes soign\u00e9es. Sythio adopte une approche diff\u00e9rente \u2014 transformant l\u2019audio en 9 r\u00e9sultats structur\u00e9s, pas seulement un texte nettoy\u00e9.",
    trySythio: "Essayer Sythio Gratuitement", seeHow: "Voir Comment \u00c7a Marche",
    twoApproaches: "Deux approches", coreDifference: "La Diff\u00e9rence Fondamentale",
    competitorApproach: "L\u2019approche d\u2019AudioPen", competitorTitle: "Simplicit\u00e9 voix-vers-texte",
    competitorDesc: "AudioPen est con\u00e7u dans un seul but : transformer des m\u00e9mos vocaux d\u00e9cousus en notes textuelles propres et lisibles. Vous parlez, il r\u00e9\u00e9crit vos mots en prose soign\u00e9e. C\u2019est un outil simple qui fait une seule chose bien \u2014 convertir un discours d\u00e9sordonn\u00e9 en note rang\u00e9e.",
    competitorItem1: "M\u00e9mo vocal vers texte propre", competitorItem2: "Interface simple et minimale", competitorItem3: "Un seul r\u00e9sultat", competitorItem4: "Prise de notes personnelle",
    sythioApproach: "L\u2019approche de Sythio", sythioTitle: "Transformation multi-r\u00e9sultats",
    sythioDesc: "Sythio a \u00e9t\u00e9 cr\u00e9\u00e9 avec la conviction que l\u2019audio contient bien plus de valeur qu\u2019une simple note texte. Un enregistrement devient 9 r\u00e9sultats structur\u00e9s : r\u00e9sum\u00e9s, t\u00e2ches, plans d\u2019action, rapports ex\u00e9cutifs, messages de suivi, notes d\u2019\u00e9tude, texte nettoy\u00e9, points cl\u00e9s et id\u00e9es. Chacun est con\u00e7u pour un besoin diff\u00e9rent.",
    sythioItem1: "9 formats de r\u00e9sultats structur\u00e9s", sythioItem2: "D\u00e9tection des intervenants avec attribution de t\u00e2ches", sythioItem3: "Fonctionne avec toute source audio", sythioItem4: "Con\u00e7u pour l\u2019action, pas seulement la prise de notes",
    comparisonTitle: "Comparaison Fonctionnalit\u00e9 par Fonctionnalit\u00e9", comparisonSubtitle: "Un regard honn\u00eate sur ce que chaque outil propose.", thFeature: "Fonctionnalit\u00e9",
    whenTitle: "Quand Choisir Sythio", whenSubtitle: "Sythio est le meilleur choix quand vous avez besoin de plus qu\u2019une note nettoy\u00e9e.",
    when1Title: "Vous avez besoin de r\u00e9sultats structur\u00e9s, pas juste de texte propre", when1Desc: "AudioPen vous donne un r\u00e9sultat : une note texte soign\u00e9e. Sythio vous donne 9 formats \u2014 r\u00e9sum\u00e9s, t\u00e2ches, plans d\u2019action, rapports, messages de suivi et plus \u2014 le tout \u00e0 partir du m\u00eame enregistrement.",
    when2Title: "Vous travaillez avec de l\u2019audio multi-intervenants", when2Desc: "AudioPen est con\u00e7u pour les m\u00e9mos vocaux en solo. Sythio g\u00e8re les r\u00e9unions, entretiens et conversations de groupe avec d\u00e9tection des intervenants et attribution de t\u00e2ches pour chaque participant.",
    when3Title: "Vous voulez des r\u00e9sultats exploitables, pas juste de la documentation", when3Desc: "Une note propre c\u2019est bien, mais il faut encore extraire manuellement les t\u00e2ches et prochaines \u00e9tapes. Sythio le fait automatiquement \u2014 en vous donnant des plans d\u2019action prioris\u00e9s et des suivis pr\u00eats \u00e0 envoyer.",
    when4Title: "Vous traitez des audios vari\u00e9s au-del\u00e0 des m\u00e9mos vocaux", when4Desc: "Cours, appels clients, sessions de brainstorming, r\u00e9unions d\u2019\u00e9quipe \u2014 Sythio transforme toute source audio en r\u00e9sultats structur\u00e9s. AudioPen est sp\u00e9cifiquement con\u00e7u pour les notes vocales personnelles.",
    moreComparisons: "Plus de Comparaisons", vsOtter: "vs Otter.ai", vsFireflies: "vs Fireflies.ai", vsNotta: "vs Notta.ai", allComparisons: "Toutes les Comparaisons",
    ctaTitle: "Plus qu\u2019une note vocale",
    ctaSubtitle: "Essayez Sythio gratuitement et d\u00e9couvrez la diff\u00e9rence entre obtenir une simple note texte et obtenir 9 r\u00e9sultats structur\u00e9s et exploitables de votre audio.",
    startFree: "Commencer Gratuitement", exploreFeatures: "Explorer les Fonctionnalit\u00e9s",
    freePlan: "Le plan gratuit inclut 5 enregistrements par mois. Sans carte de cr\u00e9dit.",
    "row.primaryOutput": "R\u00e9sultat principal", "row.primaryOutput.sythio": "9 formats structur\u00e9s", "row.primaryOutput.competitor": "Note texte nettoy\u00e9e",
    "row.summaries": "R\u00e9sum\u00e9s", "row.summaries.sythio": "\u2713 Directement de l\u2019audio", "row.summaries.competitor": "\u2014",
    "row.taskExtraction": "Extraction de t\u00e2ches", "row.taskExtraction.sythio": "\u2713 Automatique avec attribution", "row.taskExtraction.competitor": "\u2014",
    "row.actionPlans": "Plans d\u2019action", "row.actionPlans.sythio": "\u2713 Structur\u00e9s et prioris\u00e9s", "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Rapports ex\u00e9cutifs", "row.executiveReports.sythio": "\u2713 Rapports partageables", "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "D\u00e9tection des intervenants", "row.speakerDetection.sythio": "\u2713 Avec attribution de t\u00e2ches", "row.speakerDetection.competitor": "\u2014",
    "row.studyNotes": "Notes d\u2019\u00e9tude", "row.studyNotes.sythio": "\u2713 Structur\u00e9es pour la r\u00e9vision", "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Messages de suivi", "row.followUp.sythio": "\u2713 Brouillons pr\u00eats \u00e0 envoyer", "row.followUp.competitor": "\u2014",
    "row.cleanText": "Texte nettoy\u00e9", "row.cleanText.sythio": "\u2713 Prose soign\u00e9e de l\u2019audio", "row.cleanText.competitor": "\u2713 Note texte r\u00e9\u00e9crite",
    "row.keyPoints": "Points cl\u00e9s", "row.keyPoints.sythio": "\u2713 Extraits et organis\u00e9s", "row.keyPoints.competitor": "\u2014",
    "row.ideas": "Extraction d\u2019id\u00e9es", "row.ideas.sythio": "\u2713 Captur\u00e9es et cat\u00e9goris\u00e9es", "row.ideas.competitor": "\u2014",
    "row.multiSpeaker": "Audio multi-intervenants", "row.multiSpeaker.sythio": "\u2713 Con\u00e7u pour les conversations", "row.multiSpeaker.competitor": "Un seul intervenant",
    "row.audioSources": "Sources audio", "row.audioSources.sythio": "\u2713 Tout audio \u2014 r\u00e9unions, cours, appels", "row.audioSources.competitor": "M\u00e9mos vocaux",
    "row.freePlan": "Plan gratuit", "row.freePlan.sythio": "$0 \u2014 5 enregistrements/mois", "row.freePlan.competitor": "$0 \u2014 notes limit\u00e9es",
    "row.proPlan": "Plan de pago", "row.proPlan.sythio": "$12/mois", "row.proPlan.competitor": "$99/an",
  },
  pt: {
    label: "Compara\u00e7\u00e3o", title: "Sythio vs AudioPen",
    subtitle: "AudioPen \u00e9 uma ferramenta simples de voz para texto que transforma seus pensamentos falados em notas organizadas. Sythio adota uma abordagem diferente \u2014 transforma \u00e1udio em 9 resultados estruturados, n\u00e3o apenas um texto limpo.",
    trySythio: "Experimente Sythio Gr\u00e1tis", seeHow: "Veja Como Funciona",
    twoApproaches: "Duas abordagens", coreDifference: "A Diferen\u00e7a Principal",
    competitorApproach: "A abordagem do AudioPen", competitorTitle: "Simplicidade de voz para texto",
    competitorDesc: "AudioPen foi projetado com um \u00fanico prop\u00f3sito: transformar notas de voz desorganizadas em texto limpo e leg\u00edvel. Voc\u00ea fala, ele reescreve suas palavras em prosa polida. \u00c9 uma ferramenta direta que faz uma coisa bem \u2014 converter fala desordenada em uma nota organizada.",
    competitorItem1: "Nota de voz para texto limpo", competitorItem2: "Interface simples e minimalista", competitorItem3: "Foco em um \u00fanico resultado", competitorItem4: "Caso de uso de anota\u00e7\u00f5es pessoais",
    sythioApproach: "A abordagem do Sythio", sythioTitle: "Transforma\u00e7\u00e3o multi-resultado",
    sythioDesc: "Sythio foi criado com a cren\u00e7a de que o \u00e1udio cont\u00e9m muito mais valor do que uma \u00fanica nota de texto. Uma grava\u00e7\u00e3o se torna 9 resultados estruturados: resumos, tarefas, planos de a\u00e7\u00e3o, relat\u00f3rios executivos, mensagens de acompanhamento, notas de estudo, texto limpo, pontos-chave e ideias. Cada um projetado para uma necessidade diferente.",
    sythioItem1: "9 formatos de resultados estruturados", sythioItem2: "Detec\u00e7\u00e3o de falantes com atribui\u00e7\u00e3o de tarefas", sythioItem3: "Funciona com qualquer fonte de \u00e1udio", sythioItem4: "Feito para a\u00e7\u00e3o, n\u00e3o apenas anota\u00e7\u00f5es",
    comparisonTitle: "Compara\u00e7\u00e3o Recurso por Recurso", comparisonSubtitle: "Uma vis\u00e3o honesta do que cada ferramenta oferece.", thFeature: "Recurso",
    whenTitle: "Quando Escolher Sythio", whenSubtitle: "Sythio \u00e9 a melhor op\u00e7\u00e3o quando voc\u00ea precisa de mais do que uma nota limpa.",
    when1Title: "Voc\u00ea precisa de resultados estruturados, n\u00e3o apenas texto limpo", when1Desc: "AudioPen te d\u00e1 um resultado: uma nota de texto polida. Sythio te d\u00e1 9 formatos \u2014 resumos, tarefas, planos de a\u00e7\u00e3o, relat\u00f3rios, mensagens de acompanhamento e mais \u2014 tudo da mesma grava\u00e7\u00e3o.",
    when2Title: "Voc\u00ea trabalha com \u00e1udio de m\u00faltiplos falantes", when2Desc: "AudioPen \u00e9 projetado para notas de voz individuais. Sythio lida com reuni\u00f5es, entrevistas e conversas em grupo com detec\u00e7\u00e3o de falantes e atribui\u00e7\u00e3o de tarefas para cada participante.",
    when3Title: "Voc\u00ea quer resultados acion\u00e1veis, n\u00e3o apenas documenta\u00e7\u00e3o", when3Desc: "Uma nota limpa \u00e9 legal, mas ainda exige que voc\u00ea extraia tarefas e pr\u00f3ximos passos manualmente. Sythio faz isso automaticamente \u2014 dando planos de a\u00e7\u00e3o priorizados e acompanhamentos prontos para enviar.",
    when4Title: "Voc\u00ea processa \u00e1udio diverso al\u00e9m de notas de voz", when4Desc: "Aulas, liga\u00e7\u00f5es com clientes, sess\u00f5es de brainstorming, reuni\u00f5es de equipe \u2014 Sythio transforma qualquer fonte de \u00e1udio em resultados estruturados. AudioPen \u00e9 feito especificamente para notas de voz pessoais.",
    moreComparisons: "Mais Compara\u00e7\u00f5es", vsOtter: "vs Otter.ai", vsFireflies: "vs Fireflies.ai", vsNotta: "vs Notta.ai", allComparisons: "Todas as Compara\u00e7\u00f5es",
    ctaTitle: "Mais do que uma nota de voz",
    ctaSubtitle: "Experimente Sythio gr\u00e1tis e veja a diferen\u00e7a entre obter uma \u00fanica nota de texto e obter 9 resultados estruturados e acion\u00e1veis do seu \u00e1udio.",
    startFree: "Comece Gr\u00e1tis", exploreFeatures: "Explorar Recursos",
    freePlan: "O plano gratuito inclui 5 grava\u00e7\u00f5es por m\u00eas. Sem cart\u00e3o de cr\u00e9dito.",
    "row.primaryOutput": "Resultado principal", "row.primaryOutput.sythio": "9 formatos estruturados", "row.primaryOutput.competitor": "Nota de texto limpa",
    "row.summaries": "Resumos", "row.summaries.sythio": "\u2713 Diretamente do \u00e1udio", "row.summaries.competitor": "\u2014",
    "row.taskExtraction": "Extra\u00e7\u00e3o de tarefas", "row.taskExtraction.sythio": "\u2713 Autom\u00e1tica com atribui\u00e7\u00e3o", "row.taskExtraction.competitor": "\u2014",
    "row.actionPlans": "Planos de a\u00e7\u00e3o", "row.actionPlans.sythio": "\u2713 Estruturados e priorizados", "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Relat\u00f3rios executivos", "row.executiveReports.sythio": "\u2713 Relat\u00f3rios compartilh\u00e1veis", "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "Detec\u00e7\u00e3o de falantes", "row.speakerDetection.sythio": "\u2713 Com atribui\u00e7\u00e3o de tarefas", "row.speakerDetection.competitor": "\u2014",
    "row.studyNotes": "Notas de estudo", "row.studyNotes.sythio": "\u2713 Estruturadas para revis\u00e3o", "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Mensagens de acompanhamento", "row.followUp.sythio": "\u2713 Rascunhos prontos para enviar", "row.followUp.competitor": "\u2014",
    "row.cleanText": "Texto limpo", "row.cleanText.sythio": "\u2713 Prosa polida do \u00e1udio", "row.cleanText.competitor": "\u2713 Nota de texto reescrita",
    "row.keyPoints": "Pontos-chave", "row.keyPoints.sythio": "\u2713 Extra\u00eddos e organizados", "row.keyPoints.competitor": "\u2014",
    "row.ideas": "Extra\u00e7\u00e3o de ideias", "row.ideas.sythio": "\u2713 Capturadas e categorizadas", "row.ideas.competitor": "\u2014",
    "row.multiSpeaker": "\u00c1udio multi-falante", "row.multiSpeaker.sythio": "\u2713 Feito para conversas", "row.multiSpeaker.competitor": "Focado em um \u00fanico falante",
    "row.audioSources": "Fontes de \u00e1udio", "row.audioSources.sythio": "\u2713 Qualquer \u00e1udio \u2014 reuni\u00f5es, aulas, liga\u00e7\u00f5es", "row.audioSources.competitor": "Notas de voz",
    "row.freePlan": "Plano gratuito", "row.freePlan.sythio": "$0 \u2014 5 grava\u00e7\u00f5es/m\u00eas", "row.freePlan.competitor": "$0 \u2014 notas limitadas",
    "row.proPlan": "Plano pago", "row.proPlan.sythio": "$12/m\u00eas", "row.proPlan.competitor": "$99/ano",
  },
  it: {
    label: "Confronto", title: "Sythio vs AudioPen",
    subtitle: "AudioPen \u00e8 uno strumento semplice di voce-a-testo che trasforma i tuoi pensieri parlati in note ordinate. Sythio adotta un approccio diverso \u2014 trasforma l\u2019audio in 9 risultati strutturati, non solo un testo pulito.",
    trySythio: "Prova Sythio Gratis", seeHow: "Scopri Come Funziona",
    twoApproaches: "Due approcci", coreDifference: "La Differenza Fondamentale",
    competitorApproach: "L\u2019approccio di AudioPen", competitorTitle: "Semplicit\u00e0 voce-a-testo",
    competitorDesc: "AudioPen \u00e8 progettato per un unico scopo: trasformare memo vocali disordinati in note testuali pulite e leggibili. Parli, e riscrive le tue parole in prosa curata. \u00c8 uno strumento diretto che fa una cosa bene \u2014 convertire un discorso disordinato in una nota ordinata.",
    competitorItem1: "Memo vocale a testo pulito", competitorItem2: "Interfaccia semplice e minimale", competitorItem3: "Un solo risultato", competitorItem4: "Appunti personali",
    sythioApproach: "L\u2019approccio di Sythio", sythioTitle: "Trasformazione multi-risultato",
    sythioDesc: "Sythio \u00e8 stato creato con la convinzione che l\u2019audio contiene molto pi\u00f9 valore di una singola nota di testo. Una registrazione diventa 9 risultati strutturati: riassunti, attivit\u00e0, piani d\u2019azione, report esecutivi, messaggi di follow-up, note di studio, testo pulito, punti chiave e idee. Ognuno progettato per un\u2019esigenza diversa.",
    sythioItem1: "9 formati di risultati strutturati", sythioItem2: "Rilevamento parlanti con attribuzione attivit\u00e0", sythioItem3: "Funziona con qualsiasi fonte audio", sythioItem4: "Progettato per l\u2019azione, non solo per prendere appunti",
    comparisonTitle: "Confronto Funzionalit\u00e0 per Funzionalit\u00e0", comparisonSubtitle: "Uno sguardo onesto su ci\u00f2 che offre ogni strumento.", thFeature: "Funzionalit\u00e0",
    whenTitle: "Quando Scegliere Sythio", whenSubtitle: "Sythio \u00e8 la scelta migliore quando hai bisogno di pi\u00f9 di una nota pulita.",
    when1Title: "Hai bisogno di risultati strutturati, non solo testo pulito", when1Desc: "AudioPen ti d\u00e0 un risultato: una nota di testo curata. Sythio ti d\u00e0 9 formati \u2014 riassunti, attivit\u00e0, piani d\u2019azione, report, messaggi di follow-up e altro \u2014 tutto dalla stessa registrazione.",
    when2Title: "Lavori con audio multi-parlante", when2Desc: "AudioPen \u00e8 progettato per memo vocali individuali. Sythio gestisce riunioni, interviste e conversazioni di gruppo con rilevamento parlanti e attribuzione attivit\u00e0 per ogni partecipante.",
    when3Title: "Vuoi risultati azionabili, non solo documentazione", when3Desc: "Una nota pulita va bene, ma richiede ancora di estrarre manualmente attivit\u00e0 e prossimi passi. Sythio lo fa automaticamente \u2014 dandoti piani d\u2019azione prioritizzati e follow-up pronti da inviare.",
    when4Title: "Elabori audio diversi oltre i memo vocali", when4Desc: "Lezioni, chiamate clienti, sessioni di brainstorming, riunioni di team \u2014 Sythio trasforma qualsiasi fonte audio in risultati strutturati. AudioPen \u00e8 specificamente progettato per note vocali personali.",
    moreComparisons: "Altri Confronti", vsOtter: "vs Otter.ai", vsFireflies: "vs Fireflies.ai", vsNotta: "vs Notta.ai", allComparisons: "Tutti i Confronti",
    ctaTitle: "Pi\u00f9 di una nota vocale",
    ctaSubtitle: "Prova Sythio gratis e scopri la differenza tra ottenere una singola nota di testo e ottenere 9 risultati strutturati e azionabili dal tuo audio.",
    startFree: "Inizia Gratis", exploreFeatures: "Esplora le Funzionalit\u00e0",
    freePlan: "Il piano gratuito include 5 registrazioni al mese. Nessuna carta di credito richiesta.",
    "row.primaryOutput": "Risultato principale", "row.primaryOutput.sythio": "9 formati strutturati", "row.primaryOutput.competitor": "Nota di testo pulita",
    "row.summaries": "Riassunti", "row.summaries.sythio": "\u2713 Direttamente dall\u2019audio", "row.summaries.competitor": "\u2014",
    "row.taskExtraction": "Estrazione attivit\u00e0", "row.taskExtraction.sythio": "\u2713 Automatica con attribuzione", "row.taskExtraction.competitor": "\u2014",
    "row.actionPlans": "Piani d\u2019azione", "row.actionPlans.sythio": "\u2713 Strutturati e prioritizzati", "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Report esecutivi", "row.executiveReports.sythio": "\u2713 Report condivisibili", "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "Rilevamento parlanti", "row.speakerDetection.sythio": "\u2713 Con attribuzione attivit\u00e0", "row.speakerDetection.competitor": "\u2014",
    "row.studyNotes": "Note di studio", "row.studyNotes.sythio": "\u2713 Strutturate per la revisione", "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Messaggi di follow-up", "row.followUp.sythio": "\u2713 Bozze pronte da inviare", "row.followUp.competitor": "\u2014",
    "row.cleanText": "Testo pulito", "row.cleanText.sythio": "\u2713 Prosa curata dall\u2019audio", "row.cleanText.competitor": "\u2713 Nota testo riscritta",
    "row.keyPoints": "Punti chiave", "row.keyPoints.sythio": "\u2713 Estratti e organizzati", "row.keyPoints.competitor": "\u2014",
    "row.ideas": "Estrazione idee", "row.ideas.sythio": "\u2713 Catturate e categorizzate", "row.ideas.competitor": "\u2014",
    "row.multiSpeaker": "Audio multi-parlante", "row.multiSpeaker.sythio": "\u2713 Progettato per conversazioni", "row.multiSpeaker.competitor": "Focalizzato su un parlante",
    "row.audioSources": "Fonti audio", "row.audioSources.sythio": "\u2713 Qualsiasi audio \u2014 riunioni, lezioni, chiamate", "row.audioSources.competitor": "Memo vocali",
    "row.freePlan": "Piano gratuito", "row.freePlan.sythio": "$0 \u2014 5 registrazioni/mese", "row.freePlan.competitor": "$0 \u2014 note limitate",
    "row.proPlan": "Piano a pagamento", "row.proPlan.sythio": "$12/mese", "row.proPlan.competitor": "$99/anno",
  },
};

export default function AudioPenComparePage() {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;

  const comparisonRows = [
    { feature: c["row.primaryOutput"], sythio: c["row.primaryOutput.sythio"], audiopen: c["row.primaryOutput.competitor"] },
    { feature: c["row.summaries"], sythio: c["row.summaries.sythio"], audiopen: c["row.summaries.competitor"] },
    { feature: c["row.taskExtraction"], sythio: c["row.taskExtraction.sythio"], audiopen: c["row.taskExtraction.competitor"] },
    { feature: c["row.actionPlans"], sythio: c["row.actionPlans.sythio"], audiopen: c["row.actionPlans.competitor"] },
    { feature: c["row.executiveReports"], sythio: c["row.executiveReports.sythio"], audiopen: c["row.executiveReports.competitor"] },
    { feature: c["row.speakerDetection"], sythio: c["row.speakerDetection.sythio"], audiopen: c["row.speakerDetection.competitor"] },
    { feature: c["row.studyNotes"], sythio: c["row.studyNotes.sythio"], audiopen: c["row.studyNotes.competitor"] },
    { feature: c["row.followUp"], sythio: c["row.followUp.sythio"], audiopen: c["row.followUp.competitor"] },
    { feature: c["row.cleanText"], sythio: c["row.cleanText.sythio"], audiopen: c["row.cleanText.competitor"] },
    { feature: c["row.keyPoints"], sythio: c["row.keyPoints.sythio"], audiopen: c["row.keyPoints.competitor"] },
    { feature: c["row.ideas"], sythio: c["row.ideas.sythio"], audiopen: c["row.ideas.competitor"] },
    { feature: c["row.multiSpeaker"], sythio: c["row.multiSpeaker.sythio"], audiopen: c["row.multiSpeaker.competitor"] },
    { feature: c["row.audioSources"], sythio: c["row.audioSources.sythio"], audiopen: c["row.audioSources.competitor"] },
    { feature: c["row.freePlan"], sythio: c["row.freePlan.sythio"], audiopen: c["row.freePlan.competitor"] },
    { feature: c["row.proPlan"], sythio: c["row.proPlan.sythio"], audiopen: c["row.proPlan.competitor"] },
  ];

  return (
    <PageReveal>
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

      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.twoApproaches}</p>
            <TextReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.coreDifference}</h2></TextReveal>
          </div>
          <GsapStagger stagger={0.08}><div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollScale><div className="h-full p-8 rounded-2xl bg-background border border-border-light">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.competitorApproach}</p>
              <h3 className="text-xl font-semibold text-foreground mb-4">{c.competitorTitle}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">{c.competitorDesc}</p>
              <ul className="space-y-3">
                {[c.competitorItem1, c.competitorItem2, c.competitorItem3, c.competitorItem4].map((item) => (
                  <li key={item} className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-light shrink-0" /><span className="text-sm text-muted">{item}</span></li>
                ))}
              </ul>
            </div></ScrollScale>
            <ScrollScale><div className="h-full p-8 rounded-2xl bg-foreground text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">{c.sythioApproach}</p>
              <h3 className="text-xl font-semibold text-white mb-4">{c.sythioTitle}</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">{c.sythioDesc}</p>
              <ul className="space-y-3">
                {[c.sythioItem1, c.sythioItem2, c.sythioItem3, c.sythioItem4].map((item) => (
                  <li key={item} className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" /><span className="text-sm text-white/80">{item}</span></li>
                ))}
              </ul>
            </div></ScrollScale>
          </div></GsapStagger>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <TextReveal><h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{c.comparisonTitle}</h2></TextReveal>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">{c.comparisonSubtitle}</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ScrollScale><div className="h-full bg-white rounded-2xl border border-border-light overflow-hidden">
              <table className="w-full">
                <thead><tr className="border-b border-border-light"><th className="text-left p-4 text-sm font-semibold text-foreground">{c.thFeature}</th><th className="text-center p-4 text-sm font-semibold text-foreground">Sythio</th><th className="text-center p-4 text-sm font-semibold text-muted">AudioPen</th></tr></thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-border-light last:border-0">
                      <td className="p-4 text-sm text-muted">{row.feature}</td>
                      <td className="p-4 text-center text-sm text-foreground">{row.sythio}</td>
                      <td className="p-4 text-center text-sm text-muted">{row.audiopen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div></ScrollScale>
          </div>
        </div>
      </section>

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

      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <TextReveal><h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{c.moreComparisons}</h2></TextReveal>
          </div>
          <GsapStagger stagger={0.08}><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: c.vsOtter, href: "/compare/otter" },
              { label: c.vsFireflies, href: "/compare/fireflies" },
              { label: c.vsNotta, href: "/compare/notta" },
              { label: c.allComparisons, href: "/compare" },
            ].map((link) => (
              <ScrollScale key={link.label}><Link href={link.href} className="group p-5 rounded-xl bg-white border border-border-light hover:border-border hover:shadow-md transition-all duration-300 text-center block">
                <span className="text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">{link.label}</span>
              </Link></ScrollScale>
            ))}
          </div></GsapStagger>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="hero-orb hero-orb-2" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <TextReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.ctaTitle}</h2></TextReveal>
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
