"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Comparison", title: "Sythio vs Notta.ai",
    subtitle: "Notta.ai is a multilingual transcription tool that excels at turning speech into text across dozens of languages. Sythio takes a different approach \u2014 transforming audio into 9 structured outputs, not just a transcript in your language.",
    trySythio: "Try Sythio Free", seeHow: "See How It Works",
    twoApproaches: "Two approaches", coreDifference: "The Core Difference",
    competitorApproach: "Notta.ai\u2019s approach", competitorTitle: "Multilingual transcription",
    competitorDesc: "Notta.ai is built around transcription accuracy across 58+ languages. It provides real-time transcription, recorded audio conversion, and AI-powered summaries. Its strength lies in language breadth and transcription quality, with meeting integrations and a searchable transcript library.",
    competitorItem1: "58+ language transcription", competitorItem2: "Real-time live captions", competitorItem3: "Meeting integrations (Zoom, Teams, Meet)", competitorItem4: "AI summary from transcript",
    sythioApproach: "Sythio\u2019s approach", sythioTitle: "Multi-output transformation",
    sythioDesc: "Sythio was built on the belief that a transcript is just the beginning. One recording becomes 9 structured outputs \u2014 summaries, tasks, action plans, executive reports, follow-up messages, study notes, clean text, key points, and ideas. The focus is on what you do with audio, not just converting it to text.",
    sythioItem1: "9 structured output formats", sythioItem2: "Speaker detection with task attribution", sythioItem3: "Works with any audio source", sythioItem4: "Built for action, not just documentation",
    comparisonTitle: "Feature-by-Feature Comparison", comparisonSubtitle: "An honest look at what each tool offers.", thFeature: "Feature",
    whenTitle: "When to Choose Sythio", whenSubtitle: "Sythio is the better fit when you need your audio transformed, not just transcribed.",
    when1Title: "You need action, not just a transcript", when1Desc: "Notta gives you an accurate transcript and a summary. Sythio gives you 9 structured outputs \u2014 including task lists, action plans, executive reports, and follow-up messages \u2014 so you can act immediately.",
    when2Title: "You want speaker-attributed tasks and decisions", when2Desc: "Both tools detect speakers, but Sythio goes further. It attributes tasks and decisions to specific people, so the right person sees the right follow-up \u2014 not just a label on a transcript.",
    when3Title: "You process audio beyond meetings and recordings", when3Desc: "Voice notes on the go, lecture recordings, brainstorming sessions, client calls \u2014 Sythio handles any audio source and turns it into structured, usable outputs for every context.",
    when4Title: "You want multiple formats without extra work", when4Desc: "One recording, nine outputs. No re-processing, no manual formatting. Record once and get summaries, tasks, action plans, reports, and more \u2014 all generated in seconds.",
    moreComparisons: "More Comparisons", vsOtter: "vs Otter.ai", vsFireflies: "vs Fireflies.ai", vsAudioPen: "vs AudioPen", allComparisons: "All Comparisons",
    ctaTitle: "Go beyond transcription",
    ctaSubtitle: "Try Sythio free and see the difference between getting a transcript and getting 9 structured, actionable outputs from your audio.",
    startFree: "Start Free", exploreFeatures: "Explore Features",
    freePlan: "Free plan includes 5 recordings per month. No credit card needed.",
    "row.primaryOutput": "Primary output", "row.primaryOutput.sythio": "9 structured formats", "row.primaryOutput.competitor": "Transcript",
    "row.multilingual": "Multilingual transcription", "row.multilingual.sythio": "\u2713 Supported", "row.multilingual.competitor": "\u2713 58+ languages",
    "row.summaries": "Summaries", "row.summaries.sythio": "\u2713 From audio directly", "row.summaries.competitor": "\u2713 AI-generated from transcript",
    "row.taskExtraction": "Task extraction", "row.taskExtraction.sythio": "\u2713 Automatic with attribution", "row.taskExtraction.competitor": "\u2014",
    "row.actionPlans": "Action plans", "row.actionPlans.sythio": "\u2713 Structured and prioritized", "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Executive reports", "row.executiveReports.sythio": "\u2713 Shareable reports", "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "Speaker detection", "row.speakerDetection.sythio": "\u2713 With task attribution", "row.speakerDetection.competitor": "\u2713 Speaker labels",
    "row.studyNotes": "Study notes", "row.studyNotes.sythio": "\u2713 Structured for review", "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Follow-up messages", "row.followUp.sythio": "\u2713 Ready-to-send drafts", "row.followUp.competitor": "\u2014",
    "row.cleanText": "Clean text", "row.cleanText.sythio": "\u2713 Polished prose from audio", "row.cleanText.competitor": "\u2014",
    "row.keyPoints": "Key points", "row.keyPoints.sythio": "\u2713 Extracted and organized", "row.keyPoints.competitor": "\u2713 Highlights",
    "row.ideas": "Ideas extraction", "row.ideas.sythio": "\u2713 Captured and categorized", "row.ideas.competitor": "\u2014",
    "row.realtime": "Real-time transcription", "row.realtime.sythio": "\u2014", "row.realtime.competitor": "\u2713 Live captions",
    "row.audioFirst": "Audio-first design", "row.audioFirst.sythio": "\u2713 Any audio source", "row.audioFirst.competitor": "Meeting and recording focused",
    "row.freePlan": "Free plan", "row.freePlan.sythio": "$0 \u2014 5 recordings/mo", "row.freePlan.competitor": "$0 \u2014 limited minutes",
    "row.proPlan": "Paid plan", "row.proPlan.sythio": "$15/mo", "row.proPlan.competitor": "$14.99/mo",
  },
  es: {
    label: "Comparaci\u00f3n", title: "Sythio vs Notta.ai",
    subtitle: "Notta.ai es una herramienta de transcripci\u00f3n multiling\u00fce que destaca al convertir voz en texto en docenas de idiomas. Sythio adopta un enfoque diferente \u2014 transforma el audio en 9 resultados estructurados, no solo una transcripci\u00f3n en tu idioma.",
    trySythio: "Prueba Sythio Gratis", seeHow: "Ver C\u00f3mo Funciona",
    twoApproaches: "Dos enfoques", coreDifference: "La Diferencia Principal",
    competitorApproach: "El enfoque de Notta.ai", competitorTitle: "Transcripci\u00f3n multiling\u00fce",
    competitorDesc: "Notta.ai est\u00e1 dise\u00f1ado alrededor de la precisi\u00f3n de transcripci\u00f3n en m\u00e1s de 58 idiomas. Proporciona transcripci\u00f3n en tiempo real, conversi\u00f3n de audio grabado y res\u00famenes con IA. Su fortaleza radica en la amplitud de idiomas y la calidad de transcripci\u00f3n, con integraciones de reuniones y una biblioteca de transcripciones buscable.",
    competitorItem1: "Transcripci\u00f3n en 58+ idiomas", competitorItem2: "Subt\u00edtulos en vivo en tiempo real", competitorItem3: "Integraciones de reuniones (Zoom, Teams, Meet)", competitorItem4: "Resumen IA desde la transcripci\u00f3n",
    sythioApproach: "El enfoque de Sythio", sythioTitle: "Transformaci\u00f3n multi-resultado",
    sythioDesc: "Sythio fue creado con la convicci\u00f3n de que una transcripci\u00f3n es solo el comienzo. Una grabaci\u00f3n se convierte en 9 resultados estructurados: res\u00famenes, tareas, planes de acci\u00f3n, informes ejecutivos, mensajes de seguimiento, notas de estudio, texto limpio, puntos clave e ideas. El enfoque est\u00e1 en lo que haces con el audio, no solo en convertirlo a texto.",
    sythioItem1: "9 formatos de resultados estructurados", sythioItem2: "Detecci\u00f3n de hablantes con atribuci\u00f3n de tareas", sythioItem3: "Funciona con cualquier fuente de audio", sythioItem4: "Dise\u00f1ado para la acci\u00f3n, no solo documentaci\u00f3n",
    comparisonTitle: "Comparaci\u00f3n Caracter\u00edstica por Caracter\u00edstica", comparisonSubtitle: "Una mirada honesta a lo que ofrece cada herramienta.", thFeature: "Caracter\u00edstica",
    whenTitle: "Cu\u00e1ndo Elegir Sythio", whenSubtitle: "Sythio es la mejor opci\u00f3n cuando necesitas que tu audio sea transformado, no solo transcrito.",
    when1Title: "Necesitas acci\u00f3n, no solo una transcripci\u00f3n", when1Desc: "Notta te da una transcripci\u00f3n precisa y un resumen. Sythio te da 9 resultados estructurados \u2014 incluyendo listas de tareas, planes de acci\u00f3n, informes ejecutivos y mensajes de seguimiento \u2014 para que puedas actuar inmediatamente.",
    when2Title: "Quieres tareas y decisiones atribuidas por hablante", when2Desc: "Ambas herramientas detectan hablantes, pero Sythio va m\u00e1s all\u00e1. Atribuye tareas y decisiones a personas espec\u00edficas, para que la persona correcta vea el seguimiento correcto \u2014 no solo una etiqueta en una transcripci\u00f3n.",
    when3Title: "Procesas audio m\u00e1s all\u00e1 de reuniones y grabaciones", when3Desc: "Notas de voz en movimiento, grabaciones de clases, sesiones de lluvia de ideas, llamadas con clientes \u2014 Sythio maneja cualquier fuente de audio y la convierte en resultados estructurados y utilizables para cada contexto.",
    when4Title: "Quieres m\u00faltiples formatos sin trabajo extra", when4Desc: "Una grabaci\u00f3n, nueve resultados. Sin reprocesamiento, sin formateo manual. Graba una vez y obt\u00e9n res\u00famenes, tareas, planes de acci\u00f3n, informes y m\u00e1s \u2014 todo generado en segundos.",
    moreComparisons: "M\u00e1s Comparaciones", vsOtter: "vs Otter.ai", vsFireflies: "vs Fireflies.ai", vsAudioPen: "vs AudioPen", allComparisons: "Todas las Comparaciones",
    ctaTitle: "Ve m\u00e1s all\u00e1 de la transcripci\u00f3n",
    ctaSubtitle: "Prueba Sythio gratis y descubre la diferencia entre obtener una transcripci\u00f3n y obtener 9 resultados estructurados y accionables de tu audio.",
    startFree: "Comenzar Gratis", exploreFeatures: "Explorar Funciones",
    freePlan: "El plan gratuito incluye 5 grabaciones al mes. Sin tarjeta de cr\u00e9dito.",
    "row.primaryOutput": "Resultado principal", "row.primaryOutput.sythio": "9 formatos estructurados", "row.primaryOutput.competitor": "Transcripci\u00f3n",
    "row.multilingual": "Transcripci\u00f3n multiling\u00fce", "row.multilingual.sythio": "\u2713 Soportado", "row.multilingual.competitor": "\u2713 58+ idiomas",
    "row.summaries": "Res\u00famenes", "row.summaries.sythio": "\u2713 Directamente del audio", "row.summaries.competitor": "\u2713 Generado por IA desde la transcripci\u00f3n",
    "row.taskExtraction": "Extracci\u00f3n de tareas", "row.taskExtraction.sythio": "\u2713 Autom\u00e1tica con atribuci\u00f3n", "row.taskExtraction.competitor": "\u2014",
    "row.actionPlans": "Planes de acci\u00f3n", "row.actionPlans.sythio": "\u2713 Estructurados y priorizados", "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Informes ejecutivos", "row.executiveReports.sythio": "\u2713 Informes compartibles", "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "Detecci\u00f3n de hablantes", "row.speakerDetection.sythio": "\u2713 Con atribuci\u00f3n de tareas", "row.speakerDetection.competitor": "\u2713 Etiquetas de hablante",
    "row.studyNotes": "Notas de estudio", "row.studyNotes.sythio": "\u2713 Estructuradas para revisi\u00f3n", "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Mensajes de seguimiento", "row.followUp.sythio": "\u2713 Borradores listos para enviar", "row.followUp.competitor": "\u2014",
    "row.cleanText": "Texto limpio", "row.cleanText.sythio": "\u2713 Prosa pulida del audio", "row.cleanText.competitor": "\u2014",
    "row.keyPoints": "Puntos clave", "row.keyPoints.sythio": "\u2713 Extra\u00eddos y organizados", "row.keyPoints.competitor": "\u2713 Destacados",
    "row.ideas": "Extracci\u00f3n de ideas", "row.ideas.sythio": "\u2713 Capturadas y categorizadas", "row.ideas.competitor": "\u2014",
    "row.realtime": "Transcripci\u00f3n en tiempo real", "row.realtime.sythio": "\u2014", "row.realtime.competitor": "\u2713 Subt\u00edtulos en vivo",
    "row.audioFirst": "Dise\u00f1o audio-primero", "row.audioFirst.sythio": "\u2713 Cualquier fuente de audio", "row.audioFirst.competitor": "Enfocado en reuniones y grabaciones",
    "row.freePlan": "Plan gratuito", "row.freePlan.sythio": "$0 \u2014 5 grabaciones/mes", "row.freePlan.competitor": "$0 \u2014 minutos limitados",
    "row.proPlan": "Plan de pago", "row.proPlan.sythio": "$15/mes", "row.proPlan.competitor": "$14.99/mes",
  },
  fr: {
    label: "Comparaison", title: "Sythio vs Notta.ai",
    subtitle: "Notta.ai est un outil de transcription multilingue qui excelle \u00e0 convertir la parole en texte dans des dizaines de langues. Sythio adopte une approche diff\u00e9rente \u2014 transformant l\u2019audio en 9 r\u00e9sultats structur\u00e9s, pas seulement une transcription dans votre langue.",
    trySythio: "Essayer Sythio Gratuitement", seeHow: "Voir Comment \u00c7a Marche",
    twoApproaches: "Deux approches", coreDifference: "La Diff\u00e9rence Fondamentale",
    competitorApproach: "L\u2019approche de Notta.ai", competitorTitle: "Transcription multilingue",
    competitorDesc: "Notta.ai est con\u00e7u autour de la pr\u00e9cision de transcription dans plus de 58 langues. Il fournit la transcription en temps r\u00e9el, la conversion audio enregistr\u00e9 et des r\u00e9sum\u00e9s IA. Sa force r\u00e9side dans l\u2019\u00e9tendue linguistique et la qualit\u00e9 de transcription, avec des int\u00e9grations de r\u00e9union et une biblioth\u00e8que de transcriptions consultable.",
    competitorItem1: "Transcription en 58+ langues", competitorItem2: "Sous-titres en direct en temps r\u00e9el", competitorItem3: "Int\u00e9grations de r\u00e9unions (Zoom, Teams, Meet)", competitorItem4: "R\u00e9sum\u00e9 IA depuis la transcription",
    sythioApproach: "L\u2019approche de Sythio", sythioTitle: "Transformation multi-r\u00e9sultats",
    sythioDesc: "Sythio a \u00e9t\u00e9 cr\u00e9\u00e9 avec la conviction qu\u2019une transcription n\u2019est que le d\u00e9but. Un enregistrement devient 9 r\u00e9sultats structur\u00e9s : r\u00e9sum\u00e9s, t\u00e2ches, plans d\u2019action, rapports ex\u00e9cutifs, messages de suivi, notes d\u2019\u00e9tude, texte nettoy\u00e9, points cl\u00e9s et id\u00e9es. L\u2019accent est mis sur ce que vous faites avec l\u2019audio, pas seulement le convertir en texte.",
    sythioItem1: "9 formats de r\u00e9sultats structur\u00e9s", sythioItem2: "D\u00e9tection des intervenants avec attribution de t\u00e2ches", sythioItem3: "Fonctionne avec toute source audio", sythioItem4: "Con\u00e7u pour l\u2019action, pas seulement la documentation",
    comparisonTitle: "Comparaison Fonctionnalit\u00e9 par Fonctionnalit\u00e9", comparisonSubtitle: "Un regard honn\u00eate sur ce que chaque outil propose.", thFeature: "Fonctionnalit\u00e9",
    whenTitle: "Quand Choisir Sythio", whenSubtitle: "Sythio est le meilleur choix quand vous avez besoin que votre audio soit transform\u00e9, pas juste transcrit.",
    when1Title: "Vous avez besoin d\u2019action, pas juste d\u2019une transcription", when1Desc: "Notta vous donne une transcription pr\u00e9cise et un r\u00e9sum\u00e9. Sythio vous donne 9 r\u00e9sultats structur\u00e9s \u2014 incluant listes de t\u00e2ches, plans d\u2019action, rapports ex\u00e9cutifs et messages de suivi \u2014 pour que vous puissiez agir imm\u00e9diatement.",
    when2Title: "Vous voulez des t\u00e2ches et d\u00e9cisions attribu\u00e9es par intervenant", when2Desc: "Les deux outils d\u00e9tectent les intervenants, mais Sythio va plus loin. Il attribue t\u00e2ches et d\u00e9cisions \u00e0 des personnes sp\u00e9cifiques, pour que la bonne personne voie le bon suivi \u2014 pas juste une \u00e9tiquette sur une transcription.",
    when3Title: "Vous traitez de l\u2019audio au-del\u00e0 des r\u00e9unions", when3Desc: "Notes vocales en d\u00e9placement, enregistrements de cours, sessions de brainstorming, appels clients \u2014 Sythio g\u00e8re toute source audio et la transforme en r\u00e9sultats structur\u00e9s et utilisables pour chaque contexte.",
    when4Title: "Vous voulez plusieurs formats sans effort suppl\u00e9mentaire", when4Desc: "Un enregistrement, neuf r\u00e9sultats. Pas de retraitement, pas de mise en forme manuelle. Enregistrez une fois et obtenez r\u00e9sum\u00e9s, t\u00e2ches, plans d\u2019action, rapports et plus \u2014 g\u00e9n\u00e9r\u00e9s en secondes.",
    moreComparisons: "Plus de Comparaisons", vsOtter: "vs Otter.ai", vsFireflies: "vs Fireflies.ai", vsAudioPen: "vs AudioPen", allComparisons: "Toutes les Comparaisons",
    ctaTitle: "Allez au-del\u00e0 de la transcription",
    ctaSubtitle: "Essayez Sythio gratuitement et d\u00e9couvrez la diff\u00e9rence entre obtenir une transcription et obtenir 9 r\u00e9sultats structur\u00e9s et exploitables de votre audio.",
    startFree: "Commencer Gratuitement", exploreFeatures: "Explorer les Fonctionnalit\u00e9s",
    freePlan: "Le plan gratuit inclut 5 enregistrements par mois. Sans carte de cr\u00e9dit.",
    "row.primaryOutput": "R\u00e9sultat principal", "row.primaryOutput.sythio": "9 formats structur\u00e9s", "row.primaryOutput.competitor": "Transcription",
    "row.multilingual": "Transcription multilingue", "row.multilingual.sythio": "\u2713 Support\u00e9", "row.multilingual.competitor": "\u2713 58+ langues",
    "row.summaries": "R\u00e9sum\u00e9s", "row.summaries.sythio": "\u2713 Directement de l\u2019audio", "row.summaries.competitor": "\u2713 G\u00e9n\u00e9r\u00e9 par IA depuis la transcription",
    "row.taskExtraction": "Extraction de t\u00e2ches", "row.taskExtraction.sythio": "\u2713 Automatique avec attribution", "row.taskExtraction.competitor": "\u2014",
    "row.actionPlans": "Plans d\u2019action", "row.actionPlans.sythio": "\u2713 Structur\u00e9s et prioris\u00e9s", "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Rapports ex\u00e9cutifs", "row.executiveReports.sythio": "\u2713 Rapports partageables", "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "D\u00e9tection des intervenants", "row.speakerDetection.sythio": "\u2713 Avec attribution de t\u00e2ches", "row.speakerDetection.competitor": "\u2713 \u00c9tiquettes d\u2019intervenant",
    "row.studyNotes": "Notes d\u2019\u00e9tude", "row.studyNotes.sythio": "\u2713 Structur\u00e9es pour la r\u00e9vision", "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Messages de suivi", "row.followUp.sythio": "\u2713 Brouillons pr\u00eats \u00e0 envoyer", "row.followUp.competitor": "\u2014",
    "row.cleanText": "Texte nettoy\u00e9", "row.cleanText.sythio": "\u2713 Prose soign\u00e9e de l\u2019audio", "row.cleanText.competitor": "\u2014",
    "row.keyPoints": "Points cl\u00e9s", "row.keyPoints.sythio": "\u2713 Extraits et organis\u00e9s", "row.keyPoints.competitor": "\u2713 Temps forts",
    "row.ideas": "Extraction d\u2019id\u00e9es", "row.ideas.sythio": "\u2713 Captur\u00e9es et cat\u00e9goris\u00e9es", "row.ideas.competitor": "\u2014",
    "row.realtime": "Transcription en temps r\u00e9el", "row.realtime.sythio": "\u2014", "row.realtime.competitor": "\u2713 Sous-titres en direct",
    "row.audioFirst": "Conception audio-first", "row.audioFirst.sythio": "\u2713 Toute source audio", "row.audioFirst.competitor": "Centr\u00e9 sur les r\u00e9unions et enregistrements",
    "row.freePlan": "Plan gratuit", "row.freePlan.sythio": "$0 \u2014 5 enregistrements/mois", "row.freePlan.competitor": "$0 \u2014 minutes limit\u00e9es",
    "row.proPlan": "Plan de pago", "row.proPlan.sythio": "$15/mois", "row.proPlan.competitor": "$14.99/mois",
  },
  pt: {
    label: "Compara\u00e7\u00e3o", title: "Sythio vs Notta.ai",
    subtitle: "Notta.ai \u00e9 uma ferramenta de transcri\u00e7\u00e3o multilingual que se destaca em converter fala em texto em dezenas de idiomas. Sythio adota uma abordagem diferente \u2014 transforma \u00e1udio em 9 resultados estruturados, n\u00e3o apenas uma transcri\u00e7\u00e3o no seu idioma.",
    trySythio: "Experimente Sythio Gr\u00e1tis", seeHow: "Veja Como Funciona",
    twoApproaches: "Duas abordagens", coreDifference: "A Diferen\u00e7a Principal",
    competitorApproach: "A abordagem do Notta.ai", competitorTitle: "Transcri\u00e7\u00e3o multilingual",
    competitorDesc: "Notta.ai \u00e9 constru\u00eddo em torno da precis\u00e3o de transcri\u00e7\u00e3o em mais de 58 idiomas. Fornece transcri\u00e7\u00e3o em tempo real, convers\u00e3o de \u00e1udio gravado e resumos com IA. Sua for\u00e7a est\u00e1 na amplitude de idiomas e qualidade de transcri\u00e7\u00e3o, com integra\u00e7\u00f5es de reuni\u00f5es e biblioteca de transcri\u00e7\u00f5es pesquis\u00e1vel.",
    competitorItem1: "Transcri\u00e7\u00e3o em 58+ idiomas", competitorItem2: "Legendas ao vivo em tempo real", competitorItem3: "Integra\u00e7\u00f5es de reuni\u00f5es (Zoom, Teams, Meet)", competitorItem4: "Resumo IA da transcri\u00e7\u00e3o",
    sythioApproach: "A abordagem do Sythio", sythioTitle: "Transforma\u00e7\u00e3o multi-resultado",
    sythioDesc: "Sythio foi criado com a cren\u00e7a de que uma transcri\u00e7\u00e3o \u00e9 apenas o come\u00e7o. Uma grava\u00e7\u00e3o se torna 9 resultados estruturados: resumos, tarefas, planos de a\u00e7\u00e3o, relat\u00f3rios executivos, mensagens de acompanhamento, notas de estudo, texto limpo, pontos-chave e ideias. O foco \u00e9 no que voc\u00ea faz com o \u00e1udio, n\u00e3o apenas convert\u00ea-lo em texto.",
    sythioItem1: "9 formatos de resultados estruturados", sythioItem2: "Detec\u00e7\u00e3o de falantes com atribui\u00e7\u00e3o de tarefas", sythioItem3: "Funciona com qualquer fonte de \u00e1udio", sythioItem4: "Feito para a\u00e7\u00e3o, n\u00e3o apenas documenta\u00e7\u00e3o",
    comparisonTitle: "Compara\u00e7\u00e3o Recurso por Recurso", comparisonSubtitle: "Uma vis\u00e3o honesta do que cada ferramenta oferece.", thFeature: "Recurso",
    whenTitle: "Quando Escolher Sythio", whenSubtitle: "Sythio \u00e9 a melhor op\u00e7\u00e3o quando voc\u00ea precisa que seu \u00e1udio seja transformado, n\u00e3o apenas transcrito.",
    when1Title: "Voc\u00ea precisa de a\u00e7\u00e3o, n\u00e3o apenas uma transcri\u00e7\u00e3o", when1Desc: "Notta te d\u00e1 uma transcri\u00e7\u00e3o precisa e um resumo. Sythio te d\u00e1 9 resultados estruturados \u2014 incluindo listas de tarefas, planos de a\u00e7\u00e3o, relat\u00f3rios executivos e mensagens de acompanhamento \u2014 para que voc\u00ea possa agir imediatamente.",
    when2Title: "Voc\u00ea quer tarefas e decis\u00f5es atribu\u00eddas por falante", when2Desc: "Ambas as ferramentas detectam falantes, mas Sythio vai al\u00e9m. Atribui tarefas e decis\u00f5es a pessoas espec\u00edficas, para que a pessoa certa veja o acompanhamento correto \u2014 n\u00e3o apenas um r\u00f3tulo na transcri\u00e7\u00e3o.",
    when3Title: "Voc\u00ea processa \u00e1udio al\u00e9m de reuni\u00f5es e grava\u00e7\u00f5es", when3Desc: "Notas de voz em movimento, grava\u00e7\u00f5es de aulas, sess\u00f5es de brainstorming, liga\u00e7\u00f5es com clientes \u2014 Sythio lida com qualquer fonte de \u00e1udio e a transforma em resultados estruturados e utiliz\u00e1veis para cada contexto.",
    when4Title: "Voc\u00ea quer m\u00faltiplos formatos sem trabalho extra", when4Desc: "Uma grava\u00e7\u00e3o, nove resultados. Sem reprocessamento, sem formata\u00e7\u00e3o manual. Grave uma vez e obtenha resumos, tarefas, planos de a\u00e7\u00e3o, relat\u00f3rios e mais \u2014 tudo gerado em segundos.",
    moreComparisons: "Mais Compara\u00e7\u00f5es", vsOtter: "vs Otter.ai", vsFireflies: "vs Fireflies.ai", vsAudioPen: "vs AudioPen", allComparisons: "Todas as Compara\u00e7\u00f5es",
    ctaTitle: "V\u00e1 al\u00e9m da transcri\u00e7\u00e3o",
    ctaSubtitle: "Experimente Sythio gr\u00e1tis e veja a diferen\u00e7a entre obter uma transcri\u00e7\u00e3o e obter 9 resultados estruturados e acion\u00e1veis do seu \u00e1udio.",
    startFree: "Comece Gr\u00e1tis", exploreFeatures: "Explorar Recursos",
    freePlan: "O plano gratuito inclui 5 grava\u00e7\u00f5es por m\u00eas. Sem cart\u00e3o de cr\u00e9dito.",
    "row.primaryOutput": "Resultado principal", "row.primaryOutput.sythio": "9 formatos estruturados", "row.primaryOutput.competitor": "Transcri\u00e7\u00e3o",
    "row.multilingual": "Transcri\u00e7\u00e3o multilingual", "row.multilingual.sythio": "\u2713 Suportado", "row.multilingual.competitor": "\u2713 58+ idiomas",
    "row.summaries": "Resumos", "row.summaries.sythio": "\u2713 Diretamente do \u00e1udio", "row.summaries.competitor": "\u2713 Gerado por IA da transcri\u00e7\u00e3o",
    "row.taskExtraction": "Extra\u00e7\u00e3o de tarefas", "row.taskExtraction.sythio": "\u2713 Autom\u00e1tica com atribui\u00e7\u00e3o", "row.taskExtraction.competitor": "\u2014",
    "row.actionPlans": "Planos de a\u00e7\u00e3o", "row.actionPlans.sythio": "\u2713 Estruturados e priorizados", "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Relat\u00f3rios executivos", "row.executiveReports.sythio": "\u2713 Relat\u00f3rios compartilh\u00e1veis", "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "Detec\u00e7\u00e3o de falantes", "row.speakerDetection.sythio": "\u2713 Com atribui\u00e7\u00e3o de tarefas", "row.speakerDetection.competitor": "\u2713 R\u00f3tulos de falante",
    "row.studyNotes": "Notas de estudo", "row.studyNotes.sythio": "\u2713 Estruturadas para revis\u00e3o", "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Mensagens de acompanhamento", "row.followUp.sythio": "\u2713 Rascunhos prontos para enviar", "row.followUp.competitor": "\u2014",
    "row.cleanText": "Texto limpo", "row.cleanText.sythio": "\u2713 Prosa polida do \u00e1udio", "row.cleanText.competitor": "\u2014",
    "row.keyPoints": "Pontos-chave", "row.keyPoints.sythio": "\u2713 Extra\u00eddos e organizados", "row.keyPoints.competitor": "\u2713 Destaques",
    "row.ideas": "Extra\u00e7\u00e3o de ideias", "row.ideas.sythio": "\u2713 Capturadas e categorizadas", "row.ideas.competitor": "\u2014",
    "row.realtime": "Transcri\u00e7\u00e3o em tempo real", "row.realtime.sythio": "\u2014", "row.realtime.competitor": "\u2713 Legendas ao vivo",
    "row.audioFirst": "Design \u00e1udio-primeiro", "row.audioFirst.sythio": "\u2713 Qualquer fonte de \u00e1udio", "row.audioFirst.competitor": "Focado em reuni\u00f5es e grava\u00e7\u00f5es",
    "row.freePlan": "Plano gratuito", "row.freePlan.sythio": "$0 \u2014 5 grava\u00e7\u00f5es/m\u00eas", "row.freePlan.competitor": "$0 \u2014 minutos limitados",
    "row.proPlan": "Plano pago", "row.proPlan.sythio": "$15/m\u00eas", "row.proPlan.competitor": "$14.99/m\u00eas",
  },
  it: {
    label: "Confronto", title: "Sythio vs Notta.ai",
    subtitle: "Notta.ai \u00e8 uno strumento di trascrizione multilingue che eccelle nel convertire il parlato in testo in decine di lingue. Sythio adotta un approccio diverso \u2014 trasforma l\u2019audio in 9 risultati strutturati, non solo una trascrizione nella tua lingua.",
    trySythio: "Prova Sythio Gratis", seeHow: "Scopri Come Funziona",
    twoApproaches: "Due approcci", coreDifference: "La Differenza Fondamentale",
    competitorApproach: "L\u2019approccio di Notta.ai", competitorTitle: "Trascrizione multilingue",
    competitorDesc: "Notta.ai \u00e8 costruito attorno alla precisione di trascrizione in oltre 58 lingue. Fornisce trascrizione in tempo reale, conversione audio registrato e riassunti con IA. Il suo punto di forza \u00e8 l\u2019ampiezza linguistica e la qualit\u00e0 della trascrizione, con integrazioni per riunioni e una libreria di trascrizioni ricercabile.",
    competitorItem1: "Trascrizione in 58+ lingue", competitorItem2: "Sottotitoli in diretta in tempo reale", competitorItem3: "Integrazioni per riunioni (Zoom, Teams, Meet)", competitorItem4: "Riassunto IA dalla trascrizione",
    sythioApproach: "L\u2019approccio di Sythio", sythioTitle: "Trasformazione multi-risultato",
    sythioDesc: "Sythio \u00e8 stato creato con la convinzione che una trascrizione \u00e8 solo l\u2019inizio. Una registrazione diventa 9 risultati strutturati: riassunti, attivit\u00e0, piani d\u2019azione, report esecutivi, messaggi di follow-up, note di studio, testo pulito, punti chiave e idee. L\u2019attenzione \u00e8 su cosa fai con l\u2019audio, non solo convertirlo in testo.",
    sythioItem1: "9 formati di risultati strutturati", sythioItem2: "Rilevamento parlanti con attribuzione attivit\u00e0", sythioItem3: "Funziona con qualsiasi fonte audio", sythioItem4: "Progettato per l\u2019azione, non solo la documentazione",
    comparisonTitle: "Confronto Funzionalit\u00e0 per Funzionalit\u00e0", comparisonSubtitle: "Uno sguardo onesto su ci\u00f2 che offre ogni strumento.", thFeature: "Funzionalit\u00e0",
    whenTitle: "Quando Scegliere Sythio", whenSubtitle: "Sythio \u00e8 la scelta migliore quando hai bisogno che il tuo audio venga trasformato, non solo trascritto.",
    when1Title: "Hai bisogno di azione, non solo di una trascrizione", when1Desc: "Notta ti d\u00e0 una trascrizione precisa e un riassunto. Sythio ti d\u00e0 9 risultati strutturati \u2014 incluse liste di attivit\u00e0, piani d\u2019azione, report esecutivi e messaggi di follow-up \u2014 cos\u00ec puoi agire immediatamente.",
    when2Title: "Vuoi attivit\u00e0 e decisioni attribuite per parlante", when2Desc: "Entrambi gli strumenti rilevano i parlanti, ma Sythio va oltre. Attribuisce attivit\u00e0 e decisioni a persone specifiche, cos\u00ec la persona giusta vede il follow-up giusto \u2014 non solo un\u2019etichetta su una trascrizione.",
    when3Title: "Elabori audio oltre riunioni e registrazioni", when3Desc: "Note vocali in viaggio, registrazioni di lezioni, sessioni di brainstorming, chiamate clienti \u2014 Sythio gestisce qualsiasi fonte audio e la trasforma in risultati strutturati e utilizzabili per ogni contesto.",
    when4Title: "Vuoi pi\u00f9 formati senza lavoro extra", when4Desc: "Una registrazione, nove risultati. Nessuna rielaborazione, nessuna formattazione manuale. Registra una volta e ottieni riassunti, attivit\u00e0, piani d\u2019azione, report e altro \u2014 tutto generato in secondi.",
    moreComparisons: "Altri Confronti", vsOtter: "vs Otter.ai", vsFireflies: "vs Fireflies.ai", vsAudioPen: "vs AudioPen", allComparisons: "Tutti i Confronti",
    ctaTitle: "Vai oltre la trascrizione",
    ctaSubtitle: "Prova Sythio gratis e scopri la differenza tra ottenere una trascrizione e ottenere 9 risultati strutturati e azionabili dal tuo audio.",
    startFree: "Inizia Gratis", exploreFeatures: "Esplora le Funzionalit\u00e0",
    freePlan: "Il piano gratuito include 5 registrazioni al mese. Nessuna carta di credito richiesta.",
    "row.primaryOutput": "Risultato principale", "row.primaryOutput.sythio": "9 formati strutturati", "row.primaryOutput.competitor": "Trascrizione",
    "row.multilingual": "Trascrizione multilingue", "row.multilingual.sythio": "\u2713 Supportato", "row.multilingual.competitor": "\u2713 58+ lingue",
    "row.summaries": "Riassunti", "row.summaries.sythio": "\u2713 Direttamente dall\u2019audio", "row.summaries.competitor": "\u2713 Generato dall\u2019IA dalla trascrizione",
    "row.taskExtraction": "Estrazione attivit\u00e0", "row.taskExtraction.sythio": "\u2713 Automatica con attribuzione", "row.taskExtraction.competitor": "\u2014",
    "row.actionPlans": "Piani d\u2019azione", "row.actionPlans.sythio": "\u2713 Strutturati e prioritizzati", "row.actionPlans.competitor": "\u2014",
    "row.executiveReports": "Report esecutivi", "row.executiveReports.sythio": "\u2713 Report condivisibili", "row.executiveReports.competitor": "\u2014",
    "row.speakerDetection": "Rilevamento parlanti", "row.speakerDetection.sythio": "\u2713 Con attribuzione attivit\u00e0", "row.speakerDetection.competitor": "\u2713 Etichette parlante",
    "row.studyNotes": "Note di studio", "row.studyNotes.sythio": "\u2713 Strutturate per la revisione", "row.studyNotes.competitor": "\u2014",
    "row.followUp": "Messaggi di follow-up", "row.followUp.sythio": "\u2713 Bozze pronte da inviare", "row.followUp.competitor": "\u2014",
    "row.cleanText": "Testo pulito", "row.cleanText.sythio": "\u2713 Prosa curata dall\u2019audio", "row.cleanText.competitor": "\u2014",
    "row.keyPoints": "Punti chiave", "row.keyPoints.sythio": "\u2713 Estratti e organizzati", "row.keyPoints.competitor": "\u2713 In evidenza",
    "row.ideas": "Estrazione idee", "row.ideas.sythio": "\u2713 Catturate e categorizzate", "row.ideas.competitor": "\u2014",
    "row.realtime": "Trascrizione in tempo reale", "row.realtime.sythio": "\u2014", "row.realtime.competitor": "\u2713 Sottotitoli in diretta",
    "row.audioFirst": "Design audio-first", "row.audioFirst.sythio": "\u2713 Qualsiasi fonte audio", "row.audioFirst.competitor": "Focalizzato su riunioni e registrazioni",
    "row.freePlan": "Piano gratuito", "row.freePlan.sythio": "$0 \u2014 5 registrazioni/mese", "row.freePlan.competitor": "$0 \u2014 minuti limitati",
    "row.proPlan": "Piano a pagamento", "row.proPlan.sythio": "$15/mese", "row.proPlan.competitor": "$14.99/mese",
  },
};

export default function NottaComparePage() {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;

  const comparisonRows = [
    { feature: c["row.primaryOutput"], sythio: c["row.primaryOutput.sythio"], notta: c["row.primaryOutput.competitor"] },
    { feature: c["row.multilingual"], sythio: c["row.multilingual.sythio"], notta: c["row.multilingual.competitor"] },
    { feature: c["row.summaries"], sythio: c["row.summaries.sythio"], notta: c["row.summaries.competitor"] },
    { feature: c["row.taskExtraction"], sythio: c["row.taskExtraction.sythio"], notta: c["row.taskExtraction.competitor"] },
    { feature: c["row.actionPlans"], sythio: c["row.actionPlans.sythio"], notta: c["row.actionPlans.competitor"] },
    { feature: c["row.executiveReports"], sythio: c["row.executiveReports.sythio"], notta: c["row.executiveReports.competitor"] },
    { feature: c["row.speakerDetection"], sythio: c["row.speakerDetection.sythio"], notta: c["row.speakerDetection.competitor"] },
    { feature: c["row.studyNotes"], sythio: c["row.studyNotes.sythio"], notta: c["row.studyNotes.competitor"] },
    { feature: c["row.followUp"], sythio: c["row.followUp.sythio"], notta: c["row.followUp.competitor"] },
    { feature: c["row.cleanText"], sythio: c["row.cleanText.sythio"], notta: c["row.cleanText.competitor"] },
    { feature: c["row.keyPoints"], sythio: c["row.keyPoints.sythio"], notta: c["row.keyPoints.competitor"] },
    { feature: c["row.ideas"], sythio: c["row.ideas.sythio"], notta: c["row.ideas.competitor"] },
    { feature: c["row.realtime"], sythio: c["row.realtime.sythio"], notta: c["row.realtime.competitor"] },
    { feature: c["row.audioFirst"], sythio: c["row.audioFirst.sythio"], notta: c["row.audioFirst.competitor"] },
    { feature: c["row.freePlan"], sythio: c["row.freePlan.sythio"], notta: c["row.freePlan.competitor"] },
    { feature: c["row.proPlan"], sythio: c["row.proPlan.sythio"], notta: c["row.proPlan.competitor"] },
  ];

  return (
    <PageReveal>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-animated-bg overflow-hidden">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6"><div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.label}</p>
        <TextReveal><h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">{c.title}</h1></TextReveal>
        <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">{c.subtitle}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <MagneticHover><Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{c.trySythio}</Link></MagneticHover>
          <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{c.seeHow}</Link>
        </div>
      </div></div></section>

      <section className="py-32 md:py-44 bg-white"><div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.twoApproaches}</p><TextReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.coreDifference}</h2></TextReveal></div>
        <GsapStagger stagger={0.08}><div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollScale><div className="h-full p-8 rounded-2xl bg-background border border-border-light">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.competitorApproach}</p>
            <h3 className="text-xl font-semibold text-foreground mb-4">{c.competitorTitle}</h3>
            <p className="text-sm text-muted leading-relaxed mb-6">{c.competitorDesc}</p>
            <ul className="space-y-3">{[c.competitorItem1, c.competitorItem2, c.competitorItem3, c.competitorItem4].map((item) => (<li key={item} className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-light shrink-0" /><span className="text-sm text-muted">{item}</span></li>))}</ul>
          </div></ScrollScale>
          <ScrollScale><div className="h-full p-8 rounded-2xl bg-foreground text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">{c.sythioApproach}</p>
            <h3 className="text-xl font-semibold text-white mb-4">{c.sythioTitle}</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6">{c.sythioDesc}</p>
            <ul className="space-y-3">{[c.sythioItem1, c.sythioItem2, c.sythioItem3, c.sythioItem4].map((item) => (<li key={item} className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" /><span className="text-sm text-white/80">{item}</span></li>))}</ul>
          </div></ScrollScale>
        </div></GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg"><div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16"><TextReveal><h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{c.comparisonTitle}</h2></TextReveal><p className="mt-4 text-lg text-muted max-w-xl mx-auto">{c.comparisonSubtitle}</p></div>
        <div className="max-w-4xl mx-auto"><div className="bg-white rounded-2xl border border-border-light overflow-hidden"><table className="w-full">
          <thead><tr className="border-b border-border-light"><th className="text-left p-4 text-sm font-semibold text-foreground">{c.thFeature}</th><th className="text-center p-4 text-sm font-semibold text-foreground">Sythio</th><th className="text-center p-4 text-sm font-semibold text-muted">Notta.ai</th></tr></thead>
          <tbody>{comparisonRows.map((row) => (<tr key={row.feature} className="border-b border-border-light last:border-0"><td className="p-4 text-sm text-muted">{row.feature}</td><td className="p-4 text-center text-sm text-foreground">{row.sythio}</td><td className="p-4 text-center text-sm text-muted">{row.notta}</td></tr>))}</tbody>
        </table></div></div>
      </div></section>

      <section className="py-32 md:py-44 bg-white"><div className="max-w-7xl mx-auto px-6"><div className="max-w-3xl mx-auto">
        <div className="text-center mb-16"><TextReveal><h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{c.whenTitle}</h2></TextReveal><p className="mt-4 text-lg text-muted max-w-xl mx-auto">{c.whenSubtitle}</p></div>
        <GsapStagger stagger={0.08}><div className="space-y-6">{[
          { title: c.when1Title, description: c.when1Desc },
          { title: c.when2Title, description: c.when2Desc },
          { title: c.when3Title, description: c.when3Desc },
          { title: c.when4Title, description: c.when4Desc },
        ].map((item) => (<ScrollScale key={item.title}><div className="p-6 rounded-2xl bg-background border border-border-light"><h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted leading-relaxed">{item.description}</p></div></ScrollScale>))}</div></GsapStagger>
      </div></div></section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg"><div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12"><TextReveal><h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{c.moreComparisons}</h2></TextReveal></div>
        <GsapStagger stagger={0.08}><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">{[
          { label: c.vsOtter, href: "/compare/otter" },
          { label: c.vsFireflies, href: "/compare/fireflies" },
          { label: c.vsAudioPen, href: "/compare/audiopen" },
          { label: c.allComparisons, href: "/compare" },
        ].map((link) => (<ScrollScale key={link.label}><Link href={link.href} className="group p-5 rounded-xl bg-white border border-border-light hover:border-border hover:shadow-md transition-all duration-300 text-center block"><span className="text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">{link.label}</span></Link></ScrollScale>))}</div></GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="hero-orb hero-orb-2" />
        <div className="max-w-7xl mx-auto px-6 relative"><div className="text-center max-w-3xl mx-auto">
          <TextReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.ctaTitle}</h2></TextReveal>
          <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">{c.ctaSubtitle}</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticHover><Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{c.startFree}</Link></MagneticHover>
            <Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{c.exploreFeatures}</Link>
          </div>
          <p className="mt-6 text-sm text-muted-light">{c.freePlan}</p>
        </div></div>
      </section>
    </PageReveal>
  );
}
