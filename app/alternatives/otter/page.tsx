"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Alternatives", title: "Looking for an Otter.ai alternative?",
    subtitle: "Otter.ai is a solid transcription tool, but it\u2019s not the only option. Whether you need more output formats, better pricing, or audio-first flexibility, here are the best Otter.ai alternatives in 2026.",
    trySythio: "Try Sythio Free", compareBtn: "Sythio vs Otter.ai",
    frustrations: "Common frustrations", whySwitchTitle: "Why People Switch from Otter.ai",
    switch1Title: "Transcription-only output", switch1Desc: "Otter.ai gives you a transcript and a basic summary. But if you need tasks, action plans, follow-up messages, or executive reports, you have to create those manually from the transcript.",
    switch2Title: "Expensive for what you get", switch2Desc: "At $16.99/month for the Pro plan, Otter.ai charges a premium for what is primarily transcription with AI summaries layered on top. Several alternatives offer more output formats at a lower price.",
    switch3Title: "No multi-output transformation", switch3Desc: "Modern audio tools can generate multiple structured outputs from a single recording. Otter.ai still follows the legacy model: record, transcribe, and leave the rest to you.",
    switch4Title: "Meeting-focused, not audio-first", switch4Desc: "Otter.ai is built around meetings. If you record voice notes, lectures, brainstorming sessions, or client calls outside of Zoom/Meet/Teams, it may not be the best fit.",
    criteriaLabel: "Evaluation criteria", criteriaTitle: "What to Look for in an Otter.ai Alternative", criteriaSubtitle: "Not all alternatives are created equal. Here\u2019s what matters.",
    criteria1Title: "Multiple output formats", criteria1Desc: "Beyond transcription \u2014 look for summaries, tasks, action plans, and reports from a single recording.",
    criteria2Title: "Audio-first flexibility", criteria2Desc: "The tool should work with any audio source, not just calendar-connected meetings.",
    criteria3Title: "Speaker detection", criteria3Desc: "Knowing who said what is essential for accountability and follow-up.",
    criteria4Title: "Fair pricing", criteria4Desc: "Compare what you get per dollar. More outputs at a lower price means better value.",
    criteria5Title: "Ease of use", criteria5Desc: "Record or upload, and get results in seconds. No complex setup or bot configuration needed.",
    criteria6Title: "Privacy and control", criteria6Desc: "Your audio should stay secure. Look for tools with clear privacy policies and data handling.",
    topPicks: "Top picks for 2026", bestAltsTitle: "Best Otter.ai Alternatives",
    bestFor: "Best for:", seeHow: "See how Sythio works", compareSythioVs: "Compare Sythio vs",
    sythioTagline: "AI audio intelligence that turns any recording into 9 structured outputs.",
    sythioBestFor: "Anyone who needs more than a transcript \u2014 tasks, action plans, reports, follow-ups, and more from a single recording.",
    sythioF1: "9 structured output formats from one recording", sythioF2: "Speaker detection with task attribution", sythioF3: "Works with any audio source (meetings, voice notes, lectures)", sythioF4: "Action plans, executive reports, follow-up messages", sythioF5: "Clean text, key points, and ideas extraction",
    firefliesTagline: "AI meeting assistant that records, transcribes, and summarizes meetings.", firefliesBestFor: "Teams focused on meeting documentation with CRM integrations.", firefliesF1: "Automated meeting recording via bot", firefliesF2: "Searchable transcript library", firefliesF3: "CRM and collaboration integrations",
    tldvTagline: "Video meeting recorder with AI-powered highlights and summaries.", tldvBestFor: "Sales and product teams who record video calls and need timestamped highlights.", tldvF1: "Records Google Meet, Zoom, and Teams", tldvF2: "AI-generated summaries and highlights", tldvF3: "Clips and reels from meetings",
    nottaTagline: "Real-time transcription tool with multi-language support.", nottaBestFor: "Users who need fast, accurate transcription across multiple languages.", nottaF1: "Real-time transcription in 100+ languages", nottaF2: "Audio and video file transcription", nottaF3: "Calendar integrations for meetings",
    audiopenTagline: "Turns rambling voice notes into polished text.", audiopenBestFor: "Individual creators and thinkers who capture ideas via voice notes.", audiopenF1: "Voice-to-polished-text conversion", audiopenF2: "Multiple writing styles and tones", audiopenF3: "Simple, distraction-free interface",
    quickCompTitle: "Quick Comparison", quickCompSubtitle: "How the top Otter.ai alternatives stack up at a glance.",
    thFeature: "Feature",
    "row.primaryOutput": "Primary output", "row.audioFirst": "Audio-first design", "row.taskExtraction": "Task extraction", "row.actionPlans": "Action plans", "row.speakerDetection": "Speaker detection", "row.voiceNotes": "Voice notes support", "row.freePlan": "Free plan", "row.startingPrice": "Starting price",
    ctaTitle: "Ready to go beyond transcription?",
    ctaSubtitle: "Try Sythio free and discover what it\u2019s like to get 9 structured outputs from a single recording \u2014 not just a transcript.",
    startFree: "Start Free", exploreFeatures: "Explore Features",
    freePlan: "Free plan includes 5 recordings per month. No credit card needed.",
  },
  es: {
    label: "Alternativas", title: "\u00bfBuscas una alternativa a Otter.ai?",
    subtitle: "Otter.ai es una herramienta de transcripci\u00f3n s\u00f3lida, pero no es la \u00fanica opci\u00f3n. Ya sea que necesites m\u00e1s formatos de salida, mejores precios o flexibilidad audio-primero, aqu\u00ed est\u00e1n las mejores alternativas a Otter.ai en 2026.",
    trySythio: "Prueba Sythio Gratis", compareBtn: "Sythio vs Otter.ai",
    frustrations: "Frustraciones comunes", whySwitchTitle: "Por Qu\u00e9 la Gente Cambia de Otter.ai",
    switch1Title: "Solo transcripci\u00f3n como resultado", switch1Desc: "Otter.ai te da una transcripci\u00f3n y un resumen b\u00e1sico. Pero si necesitas tareas, planes de acci\u00f3n, mensajes de seguimiento o informes ejecutivos, debes crearlos manualmente desde la transcripci\u00f3n.",
    switch2Title: "Caro para lo que ofrece", switch2Desc: "A $16.99/mes por el plan Pro, Otter.ai cobra un precio premium por lo que es principalmente transcripci\u00f3n con res\u00famenes IA agregados. Varias alternativas ofrecen m\u00e1s formatos a menor precio.",
    switch3Title: "Sin transformaci\u00f3n multi-resultado", switch3Desc: "Las herramientas modernas de audio pueden generar m\u00faltiples resultados estructurados de una sola grabaci\u00f3n. Otter.ai a\u00fan sigue el modelo heredado: grabar, transcribir y dejarte el resto.",
    switch4Title: "Enfocado en reuniones, no audio-primero", switch4Desc: "Otter.ai est\u00e1 dise\u00f1ado para reuniones. Si grabas notas de voz, clases, lluvia de ideas o llamadas fuera de Zoom/Meet/Teams, puede no ser la mejor opci\u00f3n.",
    criteriaLabel: "Criterios de evaluaci\u00f3n", criteriaTitle: "Qu\u00e9 Buscar en una Alternativa a Otter.ai", criteriaSubtitle: "No todas las alternativas son iguales. Esto es lo que importa.",
    criteria1Title: "M\u00faltiples formatos de salida", criteria1Desc: "M\u00e1s all\u00e1 de la transcripci\u00f3n \u2014 busca res\u00famenes, tareas, planes de acci\u00f3n e informes de una sola grabaci\u00f3n.",
    criteria2Title: "Flexibilidad audio-primero", criteria2Desc: "La herramienta debe funcionar con cualquier fuente de audio, no solo reuniones conectadas al calendario.",
    criteria3Title: "Detecci\u00f3n de hablantes", criteria3Desc: "Saber qui\u00e9n dijo qu\u00e9 es esencial para la responsabilidad y el seguimiento.",
    criteria4Title: "Precios justos", criteria4Desc: "Compara lo que obtienes por d\u00f3lar. M\u00e1s resultados a menor precio significa mejor valor.",
    criteria5Title: "Facilidad de uso", criteria5Desc: "Graba o sube, y obt\u00e9n resultados en segundos. Sin configuraci\u00f3n compleja ni bots.",
    criteria6Title: "Privacidad y control", criteria6Desc: "Tu audio debe estar seguro. Busca herramientas con pol\u00edticas de privacidad claras.",
    topPicks: "Mejores opciones para 2026", bestAltsTitle: "Mejores Alternativas a Otter.ai",
    bestFor: "Mejor para:", seeHow: "Ver c\u00f3mo funciona Sythio", compareSythioVs: "Comparar Sythio vs",
    sythioTagline: "Inteligencia de audio IA que convierte cualquier grabaci\u00f3n en 9 resultados estructurados.",
    sythioBestFor: "Cualquier persona que necesite m\u00e1s que una transcripci\u00f3n \u2014 tareas, planes de acci\u00f3n, informes, seguimientos y m\u00e1s de una sola grabaci\u00f3n.",
    sythioF1: "9 formatos de resultados estructurados de una grabaci\u00f3n", sythioF2: "Detecci\u00f3n de hablantes con atribuci\u00f3n de tareas", sythioF3: "Funciona con cualquier fuente de audio (reuniones, notas de voz, clases)", sythioF4: "Planes de acci\u00f3n, informes ejecutivos, mensajes de seguimiento", sythioF5: "Texto limpio, puntos clave y extracci\u00f3n de ideas",
    firefliesTagline: "Asistente de reuniones IA que graba, transcribe y resume reuniones.", firefliesBestFor: "Equipos enfocados en documentaci\u00f3n de reuniones con integraciones CRM.", firefliesF1: "Grabaci\u00f3n autom\u00e1tica de reuniones via bot", firefliesF2: "Biblioteca de transcripciones buscable", firefliesF3: "Integraciones CRM y colaboraci\u00f3n",
    tldvTagline: "Grabador de videoconferencias con destacados y res\u00famenes impulsados por IA.", tldvBestFor: "Equipos de ventas y producto que graban videollamadas y necesitan destacados con marcas de tiempo.", tldvF1: "Graba Google Meet, Zoom y Teams", tldvF2: "Res\u00famenes y destacados generados por IA", tldvF3: "Clips y reels de reuniones",
    nottaTagline: "Herramienta de transcripci\u00f3n en tiempo real con soporte multiling\u00fce.", nottaBestFor: "Usuarios que necesitan transcripci\u00f3n r\u00e1pida y precisa en m\u00faltiples idiomas.", nottaF1: "Transcripci\u00f3n en tiempo real en 100+ idiomas", nottaF2: "Transcripci\u00f3n de archivos de audio y video", nottaF3: "Integraciones de calendario para reuniones",
    audiopenTagline: "Convierte notas de voz desordenadas en texto pulido.", audiopenBestFor: "Creadores y pensadores individuales que capturan ideas con notas de voz.", audiopenF1: "Conversi\u00f3n de voz a texto pulido", audiopenF2: "M\u00faltiples estilos y tonos de escritura", audiopenF3: "Interfaz simple y sin distracciones",
    quickCompTitle: "Comparaci\u00f3n R\u00e1pida", quickCompSubtitle: "C\u00f3mo se comparan las mejores alternativas a Otter.ai de un vistazo.",
    thFeature: "Caracter\u00edstica",
    "row.primaryOutput": "Resultado principal", "row.audioFirst": "Dise\u00f1o audio-primero", "row.taskExtraction": "Extracci\u00f3n de tareas", "row.actionPlans": "Planes de acci\u00f3n", "row.speakerDetection": "Detecci\u00f3n de hablantes", "row.voiceNotes": "Soporte notas de voz", "row.freePlan": "Plan gratuito", "row.startingPrice": "Precio inicial",
    ctaTitle: "\u00bfListo para ir m\u00e1s all\u00e1 de la transcripci\u00f3n?",
    ctaSubtitle: "Prueba Sythio gratis y descubre c\u00f3mo es obtener 9 resultados estructurados de una sola grabaci\u00f3n \u2014 no solo una transcripci\u00f3n.",
    startFree: "Comenzar Gratis", exploreFeatures: "Explorar Funciones",
    freePlan: "El plan gratuito incluye 5 grabaciones al mes. Sin tarjeta de cr\u00e9dito.",
  },
  fr: {
    label: "Alternatives", title: "Vous cherchez une alternative \u00e0 Otter.ai ?",
    subtitle: "Otter.ai est un outil de transcription solide, mais ce n\u2019est pas la seule option. Que vous ayez besoin de plus de formats, de meilleurs tarifs ou d\u2019une flexibilit\u00e9 audio-first, voici les meilleures alternatives \u00e0 Otter.ai en 2026.",
    trySythio: "Essayer Sythio Gratuitement", compareBtn: "Sythio vs Otter.ai",
    frustrations: "Frustrations courantes", whySwitchTitle: "Pourquoi les Gens Quittent Otter.ai",
    switch1Title: "Uniquement de la transcription", switch1Desc: "Otter.ai vous donne une transcription et un r\u00e9sum\u00e9 basique. Mais si vous avez besoin de t\u00e2ches, plans d\u2019action, messages de suivi ou rapports ex\u00e9cutifs, vous devez les cr\u00e9er manuellement.",
    switch2Title: "Cher pour ce que vous obtenez", switch2Desc: "\u00c0 16,99 $/mois pour le plan Pro, Otter.ai facture un prix \u00e9lev\u00e9 pour ce qui est principalement de la transcription avec des r\u00e9sum\u00e9s IA. Plusieurs alternatives offrent plus de formats \u00e0 un prix inf\u00e9rieur.",
    switch3Title: "Pas de transformation multi-r\u00e9sultats", switch3Desc: "Les outils audio modernes peuvent g\u00e9n\u00e9rer plusieurs r\u00e9sultats structur\u00e9s \u00e0 partir d\u2019un seul enregistrement. Otter.ai suit encore le mod\u00e8le classique : enregistrer, transcrire et vous laisser le reste.",
    switch4Title: "Centr\u00e9 sur les r\u00e9unions, pas audio-first", switch4Desc: "Otter.ai est construit autour des r\u00e9unions. Si vous enregistrez des notes vocales, cours, brainstormings ou appels hors Zoom/Meet/Teams, ce n\u2019est peut-\u00eatre pas le meilleur choix.",
    criteriaLabel: "Crit\u00e8res d\u2019\u00e9valuation", criteriaTitle: "Que Chercher dans une Alternative \u00e0 Otter.ai", criteriaSubtitle: "Toutes les alternatives ne se valent pas. Voici ce qui compte.",
    criteria1Title: "Formats de sortie multiples", criteria1Desc: "Au-del\u00e0 de la transcription \u2014 cherchez r\u00e9sum\u00e9s, t\u00e2ches, plans d\u2019action et rapports d\u2019un seul enregistrement.",
    criteria2Title: "Flexibilit\u00e9 audio-first", criteria2Desc: "L\u2019outil doit fonctionner avec toute source audio, pas seulement les r\u00e9unions connect\u00e9es au calendrier.",
    criteria3Title: "D\u00e9tection des intervenants", criteria3Desc: "Savoir qui a dit quoi est essentiel pour la responsabilit\u00e9 et le suivi.",
    criteria4Title: "Tarifs justes", criteria4Desc: "Comparez ce que vous obtenez par dollar. Plus de r\u00e9sultats \u00e0 un prix inf\u00e9rieur signifie une meilleure valeur.",
    criteria5Title: "Facilit\u00e9 d\u2019utilisation", criteria5Desc: "Enregistrez ou t\u00e9l\u00e9versez, et obtenez des r\u00e9sultats en secondes. Pas de configuration complexe.",
    criteria6Title: "Confidentialit\u00e9 et contr\u00f4le", criteria6Desc: "Votre audio doit rester s\u00e9curis\u00e9. Cherchez des outils avec des politiques de confidentialit\u00e9 claires.",
    topPicks: "Meilleurs choix pour 2026", bestAltsTitle: "Meilleures Alternatives \u00e0 Otter.ai",
    bestFor: "Id\u00e9al pour :", seeHow: "Voir comment Sythio fonctionne", compareSythioVs: "Comparer Sythio vs",
    sythioTagline: "Intelligence audio IA qui transforme tout enregistrement en 9 r\u00e9sultats structur\u00e9s.",
    sythioBestFor: "Toute personne ayant besoin de plus qu\u2019une transcription \u2014 t\u00e2ches, plans d\u2019action, rapports, suivis et plus \u00e0 partir d\u2019un seul enregistrement.",
    sythioF1: "9 formats de r\u00e9sultats structur\u00e9s d\u2019un enregistrement", sythioF2: "D\u00e9tection des intervenants avec attribution de t\u00e2ches", sythioF3: "Fonctionne avec toute source audio (r\u00e9unions, notes vocales, cours)", sythioF4: "Plans d\u2019action, rapports ex\u00e9cutifs, messages de suivi", sythioF5: "Texte nettoy\u00e9, points cl\u00e9s et extraction d\u2019id\u00e9es",
    firefliesTagline: "Assistant de r\u00e9union IA qui enregistre, transcrit et r\u00e9sume les r\u00e9unions.", firefliesBestFor: "\u00c9quipes focalis\u00e9es sur la documentation de r\u00e9unions avec int\u00e9grations CRM.", firefliesF1: "Enregistrement automatique de r\u00e9unions via bot", firefliesF2: "Biblioth\u00e8que de transcriptions consultable", firefliesF3: "Int\u00e9grations CRM et collaboration",
    tldvTagline: "Enregistreur de visioconf\u00e9rences avec temps forts et r\u00e9sum\u00e9s IA.", tldvBestFor: "\u00c9quipes commerciales et produit qui enregistrent des appels vid\u00e9o et ont besoin de temps forts horodat\u00e9s.", tldvF1: "Enregistre Google Meet, Zoom et Teams", tldvF2: "R\u00e9sum\u00e9s et temps forts g\u00e9n\u00e9r\u00e9s par IA", tldvF3: "Clips et reels de r\u00e9unions",
    nottaTagline: "Outil de transcription en temps r\u00e9el avec support multilingue.", nottaBestFor: "Utilisateurs ayant besoin d\u2019une transcription rapide et pr\u00e9cise dans plusieurs langues.", nottaF1: "Transcription en temps r\u00e9el dans 100+ langues", nottaF2: "Transcription de fichiers audio et vid\u00e9o", nottaF3: "Int\u00e9grations calendrier pour les r\u00e9unions",
    audiopenTagline: "Transforme les m\u00e9mos vocaux d\u00e9cousus en texte soign\u00e9.", audiopenBestFor: "Cr\u00e9ateurs et penseurs individuels qui capturent des id\u00e9es par la voix.", audiopenF1: "Conversion voix vers texte soign\u00e9", audiopenF2: "Multiples styles et tons d\u2019\u00e9criture", audiopenF3: "Interface simple et sans distractions",
    quickCompTitle: "Comparaison Rapide", quickCompSubtitle: "Comment les meilleures alternatives \u00e0 Otter.ai se comparent en un coup d\u2019\u0153il.",
    thFeature: "Fonctionnalit\u00e9",
    "row.primaryOutput": "R\u00e9sultat principal", "row.audioFirst": "Conception audio-first", "row.taskExtraction": "Extraction de t\u00e2ches", "row.actionPlans": "Plans d\u2019action", "row.speakerDetection": "D\u00e9tection intervenants", "row.voiceNotes": "Support notes vocales", "row.freePlan": "Plan gratuit", "row.startingPrice": "Prix de d\u00e9part",
    ctaTitle: "Pr\u00eat \u00e0 aller au-del\u00e0 de la transcription ?",
    ctaSubtitle: "Essayez Sythio gratuitement et d\u00e9couvrez ce que c\u2019est que d\u2019obtenir 9 r\u00e9sultats structur\u00e9s d\u2019un seul enregistrement \u2014 pas juste une transcription.",
    startFree: "Commencer Gratuitement", exploreFeatures: "Explorer les Fonctionnalit\u00e9s",
    freePlan: "Le plan gratuit inclut 5 enregistrements par mois. Sans carte de cr\u00e9dit.",
  },
  pt: {
    label: "Alternativas", title: "Procurando uma alternativa ao Otter.ai?",
    subtitle: "Otter.ai \u00e9 uma ferramenta de transcri\u00e7\u00e3o s\u00f3lida, mas n\u00e3o \u00e9 a \u00fanica op\u00e7\u00e3o. Se voc\u00ea precisa de mais formatos, melhores pre\u00e7os ou flexibilidade \u00e1udio-primeiro, aqui est\u00e3o as melhores alternativas ao Otter.ai em 2026.",
    trySythio: "Experimente Sythio Gr\u00e1tis", compareBtn: "Sythio vs Otter.ai",
    frustrations: "Frustra\u00e7\u00f5es comuns", whySwitchTitle: "Por Que as Pessoas Trocam o Otter.ai",
    switch1Title: "Apenas transcri\u00e7\u00e3o como resultado", switch1Desc: "Otter.ai te d\u00e1 uma transcri\u00e7\u00e3o e um resumo b\u00e1sico. Mas se voc\u00ea precisa de tarefas, planos de a\u00e7\u00e3o, mensagens de acompanhamento ou relat\u00f3rios executivos, tem que cri\u00e1-los manualmente.",
    switch2Title: "Caro pelo que oferece", switch2Desc: "A $16.99/m\u00eas pelo plano Pro, Otter.ai cobra um pre\u00e7o premium pelo que \u00e9 principalmente transcri\u00e7\u00e3o com resumos IA. V\u00e1rias alternativas oferecem mais formatos a um pre\u00e7o menor.",
    switch3Title: "Sem transforma\u00e7\u00e3o multi-resultado", switch3Desc: "Ferramentas modernas de \u00e1udio podem gerar m\u00faltiplos resultados estruturados de uma \u00fanica grava\u00e7\u00e3o. Otter.ai ainda segue o modelo legado: gravar, transcrever e deixar o resto para voc\u00ea.",
    switch4Title: "Focado em reuni\u00f5es, n\u00e3o \u00e1udio-primeiro", switch4Desc: "Otter.ai \u00e9 constru\u00eddo para reuni\u00f5es. Se voc\u00ea grava notas de voz, aulas, brainstormings ou liga\u00e7\u00f5es fora do Zoom/Meet/Teams, pode n\u00e3o ser a melhor op\u00e7\u00e3o.",
    criteriaLabel: "Crit\u00e9rios de avalia\u00e7\u00e3o", criteriaTitle: "O Que Buscar em uma Alternativa ao Otter.ai", criteriaSubtitle: "Nem todas as alternativas s\u00e3o iguais. Isto \u00e9 o que importa.",
    criteria1Title: "M\u00faltiplos formatos de sa\u00edda", criteria1Desc: "Al\u00e9m da transcri\u00e7\u00e3o \u2014 busque resumos, tarefas, planos de a\u00e7\u00e3o e relat\u00f3rios de uma \u00fanica grava\u00e7\u00e3o.",
    criteria2Title: "Flexibilidade \u00e1udio-primeiro", criteria2Desc: "A ferramenta deve funcionar com qualquer fonte de \u00e1udio, n\u00e3o apenas reuni\u00f5es conectadas ao calend\u00e1rio.",
    criteria3Title: "Detec\u00e7\u00e3o de falantes", criteria3Desc: "Saber quem disse o qu\u00ea \u00e9 essencial para responsabilidade e acompanhamento.",
    criteria4Title: "Pre\u00e7os justos", criteria4Desc: "Compare o que voc\u00ea obt\u00e9m por d\u00f3lar. Mais resultados a menor pre\u00e7o significa melhor valor.",
    criteria5Title: "Facilidade de uso", criteria5Desc: "Grave ou envie, e obtenha resultados em segundos. Sem configura\u00e7\u00e3o complexa.",
    criteria6Title: "Privacidade e controle", criteria6Desc: "Seu \u00e1udio deve permanecer seguro. Busque ferramentas com pol\u00edticas de privacidade claras.",
    topPicks: "Melhores op\u00e7\u00f5es para 2026", bestAltsTitle: "Melhores Alternativas ao Otter.ai",
    bestFor: "Melhor para:", seeHow: "Veja como Sythio funciona", compareSythioVs: "Comparar Sythio vs",
    sythioTagline: "Intelig\u00eancia de \u00e1udio IA que transforma qualquer grava\u00e7\u00e3o em 9 resultados estruturados.",
    sythioBestFor: "Qualquer pessoa que precise de mais do que uma transcri\u00e7\u00e3o \u2014 tarefas, planos de a\u00e7\u00e3o, relat\u00f3rios, acompanhamentos e mais de uma \u00fanica grava\u00e7\u00e3o.",
    sythioF1: "9 formatos de resultados de uma grava\u00e7\u00e3o", sythioF2: "Detec\u00e7\u00e3o de falantes com atribui\u00e7\u00e3o de tarefas", sythioF3: "Funciona com qualquer fonte de \u00e1udio (reuni\u00f5es, notas de voz, aulas)", sythioF4: "Planos de a\u00e7\u00e3o, relat\u00f3rios executivos, mensagens de acompanhamento", sythioF5: "Texto limpo, pontos-chave e extra\u00e7\u00e3o de ideias",
    firefliesTagline: "Assistente de reuni\u00f5es IA que grava, transcreve e resume reuni\u00f5es.", firefliesBestFor: "Equipes focadas em documenta\u00e7\u00e3o de reuni\u00f5es com integra\u00e7\u00f5es CRM.", firefliesF1: "Grava\u00e7\u00e3o autom\u00e1tica de reuni\u00f5es via bot", firefliesF2: "Biblioteca de transcri\u00e7\u00f5es pesquis\u00e1vel", firefliesF3: "Integra\u00e7\u00f5es CRM e colabora\u00e7\u00e3o",
    tldvTagline: "Gravador de videoconfer\u00eancias com destaques e resumos IA.", tldvBestFor: "Equipes de vendas e produto que gravam videochamadas e precisam de destaques com marcas de tempo.", tldvF1: "Grava Google Meet, Zoom e Teams", tldvF2: "Resumos e destaques gerados por IA", tldvF3: "Clips e reels de reuni\u00f5es",
    nottaTagline: "Ferramenta de transcri\u00e7\u00e3o em tempo real com suporte multilingual.", nottaBestFor: "Usu\u00e1rios que precisam de transcri\u00e7\u00e3o r\u00e1pida e precisa em m\u00faltiplos idiomas.", nottaF1: "Transcri\u00e7\u00e3o em tempo real em 100+ idiomas", nottaF2: "Transcri\u00e7\u00e3o de arquivos de \u00e1udio e v\u00eddeo", nottaF3: "Integra\u00e7\u00f5es de calend\u00e1rio para reuni\u00f5es",
    audiopenTagline: "Transforma notas de voz desorganizadas em texto polido.", audiopenBestFor: "Criadores e pensadores individuais que capturam ideias por notas de voz.", audiopenF1: "Convers\u00e3o de voz para texto polido", audiopenF2: "M\u00faltiplos estilos e tons de escrita", audiopenF3: "Interface simples e sem distra\u00e7\u00f5es",
    quickCompTitle: "Compara\u00e7\u00e3o R\u00e1pida", quickCompSubtitle: "Como as melhores alternativas ao Otter.ai se comparam de relance.",
    thFeature: "Recurso",
    "row.primaryOutput": "Resultado principal", "row.audioFirst": "Design \u00e1udio-primeiro", "row.taskExtraction": "Extra\u00e7\u00e3o de tarefas", "row.actionPlans": "Planos de a\u00e7\u00e3o", "row.speakerDetection": "Detec\u00e7\u00e3o de falantes", "row.voiceNotes": "Suporte notas de voz", "row.freePlan": "Plano gratuito", "row.startingPrice": "Pre\u00e7o inicial",
    ctaTitle: "Pronto para ir al\u00e9m da transcri\u00e7\u00e3o?",
    ctaSubtitle: "Experimente Sythio gr\u00e1tis e descubra como \u00e9 obter 9 resultados estruturados de uma \u00fanica grava\u00e7\u00e3o \u2014 n\u00e3o apenas uma transcri\u00e7\u00e3o.",
    startFree: "Comece Gr\u00e1tis", exploreFeatures: "Explorar Recursos",
    freePlan: "O plano gratuito inclui 5 grava\u00e7\u00f5es por m\u00eas. Sem cart\u00e3o de cr\u00e9dito.",
  },
  it: {
    label: "Alternative", title: "Cerchi un\u2019alternativa a Otter.ai?",
    subtitle: "Otter.ai \u00e8 un solido strumento di trascrizione, ma non \u00e8 l\u2019unica opzione. Se hai bisogno di pi\u00f9 formati, prezzi migliori o flessibilit\u00e0 audio-first, ecco le migliori alternative a Otter.ai nel 2026.",
    trySythio: "Prova Sythio Gratis", compareBtn: "Sythio vs Otter.ai",
    frustrations: "Frustrazioni comuni", whySwitchTitle: "Perch\u00e9 le Persone Lasciano Otter.ai",
    switch1Title: "Solo trascrizione come risultato", switch1Desc: "Otter.ai ti d\u00e0 una trascrizione e un riassunto base. Ma se hai bisogno di attivit\u00e0, piani d\u2019azione, messaggi di follow-up o report esecutivi, devi crearli manualmente.",
    switch2Title: "Costoso per ci\u00f2 che offre", switch2Desc: "A $16.99/mese per il piano Pro, Otter.ai ha un prezzo premium per ci\u00f2 che \u00e8 principalmente trascrizione con riassunti IA. Diverse alternative offrono pi\u00f9 formati a un prezzo inferiore.",
    switch3Title: "Nessuna trasformazione multi-risultato", switch3Desc: "Gli strumenti audio moderni possono generare pi\u00f9 risultati strutturati da una singola registrazione. Otter.ai segue ancora il modello classico: registra, trascrivi e il resto tocca a te.",
    switch4Title: "Focalizzato sulle riunioni, non audio-first", switch4Desc: "Otter.ai \u00e8 costruito attorno alle riunioni. Se registri note vocali, lezioni, brainstorming o chiamate fuori da Zoom/Meet/Teams, potrebbe non essere la scelta migliore.",
    criteriaLabel: "Criteri di valutazione", criteriaTitle: "Cosa Cercare in un\u2019Alternativa a Otter.ai", criteriaSubtitle: "Non tutte le alternative sono uguali. Ecco cosa conta.",
    criteria1Title: "Formati di output multipli", criteria1Desc: "Oltre la trascrizione \u2014 cerca riassunti, attivit\u00e0, piani d\u2019azione e report da una singola registrazione.",
    criteria2Title: "Flessibilit\u00e0 audio-first", criteria2Desc: "Lo strumento deve funzionare con qualsiasi fonte audio, non solo riunioni collegate al calendario.",
    criteria3Title: "Rilevamento parlanti", criteria3Desc: "Sapere chi ha detto cosa \u00e8 essenziale per la responsabilit\u00e0 e il follow-up.",
    criteria4Title: "Prezzi equi", criteria4Desc: "Confronta cosa ottieni per dollaro. Pi\u00f9 risultati a un prezzo inferiore significa miglior valore.",
    criteria5Title: "Facilit\u00e0 d\u2019uso", criteria5Desc: "Registra o carica, e ottieni risultati in secondi. Nessuna configurazione complessa.",
    criteria6Title: "Privacy e controllo", criteria6Desc: "Il tuo audio deve restare sicuro. Cerca strumenti con politiche di privacy chiare.",
    topPicks: "Migliori scelte per il 2026", bestAltsTitle: "Migliori Alternative a Otter.ai",
    bestFor: "Ideale per:", seeHow: "Scopri come funziona Sythio", compareSythioVs: "Confronta Sythio vs",
    sythioTagline: "Intelligenza audio IA che trasforma qualsiasi registrazione in 9 risultati strutturati.",
    sythioBestFor: "Chiunque abbia bisogno di pi\u00f9 di una trascrizione \u2014 attivit\u00e0, piani d\u2019azione, report, follow-up e altro da una singola registrazione.",
    sythioF1: "9 formati di risultati da una registrazione", sythioF2: "Rilevamento parlanti con attribuzione attivit\u00e0", sythioF3: "Funziona con qualsiasi fonte audio (riunioni, note vocali, lezioni)", sythioF4: "Piani d\u2019azione, report esecutivi, messaggi di follow-up", sythioF5: "Testo pulito, punti chiave ed estrazione idee",
    firefliesTagline: "Assistente riunioni IA che registra, trascrive e riassume le riunioni.", firefliesBestFor: "Team focalizzati sulla documentazione riunioni con integrazioni CRM.", firefliesF1: "Registrazione automatica riunioni via bot", firefliesF2: "Libreria trascrizioni ricercabile", firefliesF3: "Integrazioni CRM e collaborazione",
    tldvTagline: "Registratore videoconferenze con punti salienti e riassunti IA.", tldvBestFor: "Team vendite e prodotto che registrano videochiamate e hanno bisogno di punti salienti con marcature temporali.", tldvF1: "Registra Google Meet, Zoom e Teams", tldvF2: "Riassunti e punti salienti generati dall\u2019IA", tldvF3: "Clip e reel dalle riunioni",
    nottaTagline: "Strumento di trascrizione in tempo reale con supporto multilingue.", nottaBestFor: "Utenti che hanno bisogno di trascrizione rapida e precisa in pi\u00f9 lingue.", nottaF1: "Trascrizione in tempo reale in 100+ lingue", nottaF2: "Trascrizione file audio e video", nottaF3: "Integrazioni calendario per riunioni",
    audiopenTagline: "Trasforma memo vocali disordinati in testo curato.", audiopenBestFor: "Creatori e pensatori individuali che catturano idee con note vocali.", audiopenF1: "Conversione voce-testo curato", audiopenF2: "Molteplici stili e toni di scrittura", audiopenF3: "Interfaccia semplice e senza distrazioni",
    quickCompTitle: "Confronto Rapido", quickCompSubtitle: "Come si confrontano le migliori alternative a Otter.ai a colpo d\u2019occhio.",
    thFeature: "Funzionalit\u00e0",
    "row.primaryOutput": "Risultato principale", "row.audioFirst": "Design audio-first", "row.taskExtraction": "Estrazione attivit\u00e0", "row.actionPlans": "Piani d\u2019azione", "row.speakerDetection": "Rilevamento parlanti", "row.voiceNotes": "Supporto note vocali", "row.freePlan": "Piano gratuito", "row.startingPrice": "Prezzo iniziale",
    ctaTitle: "Pronto ad andare oltre la trascrizione?",
    ctaSubtitle: "Prova Sythio gratis e scopri com\u2019\u00e8 ottenere 9 risultati strutturati da una singola registrazione \u2014 non solo una trascrizione.",
    startFree: "Inizia Gratis", exploreFeatures: "Esplora le Funzionalit\u00e0",
    freePlan: "Il piano gratuito include 5 registrazioni al mese. Nessuna carta di credito richiesta.",
  },
};

export default function OtterAlternativesPage() {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;

  const alternatives = [
    { rank: 1, name: "Sythio", tagline: c.sythioTagline, bestFor: c.sythioBestFor, pricing: "Free (5 recordings/mo) | Pro $15/mo", compareHref: "/product", highlighted: true, features: [c.sythioF1, c.sythioF2, c.sythioF3, c.sythioF4, c.sythioF5] },
    { rank: 2, name: "Fireflies.ai", tagline: c.firefliesTagline, bestFor: c.firefliesBestFor, pricing: "Free (limited) | Pro $18/mo", compareHref: "/compare/fireflies", highlighted: false, features: [c.firefliesF1, c.firefliesF2, c.firefliesF3] },
    { rank: 3, name: "tl;dv", tagline: c.tldvTagline, bestFor: c.tldvBestFor, pricing: "Free (limited) | Pro $20/mo", compareHref: "/compare/tldv", highlighted: false, features: [c.tldvF1, c.tldvF2, c.tldvF3] },
    { rank: 4, name: "Notta", tagline: c.nottaTagline, bestFor: c.nottaBestFor, pricing: "Free (limited) | Pro $14.99/mo", compareHref: null, highlighted: false, features: [c.nottaF1, c.nottaF2, c.nottaF3] },
    { rank: 5, name: "AudioPen", tagline: c.audiopenTagline, bestFor: c.audiopenBestFor, pricing: "Free (limited) | Prime $99/year", compareHref: null, highlighted: false, features: [c.audiopenF1, c.audiopenF2, c.audiopenF3] },
  ];

  const comparisonRows = [
    { feature: c["row.primaryOutput"], sythio: "9 structured formats", fireflies: "Transcript + summary", tldv: "Video highlights", notta: "Transcript", audiopen: "Polished text" },
    { feature: c["row.audioFirst"], sythio: "\u2713", fireflies: "Meeting-only", tldv: "Video-only", notta: "\u2713", audiopen: "\u2713" },
    { feature: c["row.taskExtraction"], sythio: "\u2713", fireflies: "\u2713", tldv: "\u2014", notta: "\u2014", audiopen: "\u2014" },
    { feature: c["row.actionPlans"], sythio: "\u2713", fireflies: "\u2014", tldv: "\u2014", notta: "\u2014", audiopen: "\u2014" },
    { feature: c["row.speakerDetection"], sythio: "\u2713", fireflies: "\u2713", tldv: "\u2713", notta: "\u2713", audiopen: "\u2014" },
    { feature: c["row.voiceNotes"], sythio: "\u2713", fireflies: "\u2014", tldv: "\u2014", notta: "\u2713", audiopen: "\u2713" },
    { feature: c["row.freePlan"], sythio: "5 recordings/mo", fireflies: "Limited minutes", tldv: "Limited recordings", notta: "Limited minutes", audiopen: "Limited notes" },
    { feature: c["row.startingPrice"], sythio: "$15/mo", fireflies: "$18/mo", tldv: "$20/mo", notta: "$14.99/mo", audiopen: "$99/year" },
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
          <Link href="/compare/otter" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{c.compareBtn}</Link>
        </div>
      </div></div></section>

      <section className="py-24 md:py-32 bg-white"><div className="max-w-7xl mx-auto px-6"><div className="max-w-3xl mx-auto">
        <div className="text-center mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.frustrations}</p><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.whySwitchTitle}</h2></div>
        <div className="space-y-6">{[{title:c.switch1Title,description:c.switch1Desc},{title:c.switch2Title,description:c.switch2Desc},{title:c.switch3Title,description:c.switch3Desc},{title:c.switch4Title,description:c.switch4Desc}].map((item)=>(<div key={item.title} className="p-6 rounded-2xl bg-background border border-border-light"><h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted leading-relaxed">{item.description}</p></div>))}</div>
      </div></div></section>

      <section className="py-24 md:py-32 bg-background"><div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.criteriaLabel}</p><h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{c.criteriaTitle}</h2><p className="mt-4 text-lg text-muted max-w-xl mx-auto">{c.criteriaSubtitle}</p></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">{[{title:c.criteria1Title,description:c.criteria1Desc},{title:c.criteria2Title,description:c.criteria2Desc},{title:c.criteria3Title,description:c.criteria3Desc},{title:c.criteria4Title,description:c.criteria4Desc},{title:c.criteria5Title,description:c.criteria5Desc},{title:c.criteria6Title,description:c.criteria6Desc}].map((item)=>(<div key={item.title} className="p-6 rounded-2xl bg-white border border-border-light"><h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted leading-relaxed">{item.description}</p></div>))}</div>
      </div></section>

      <section className="py-24 md:py-32 bg-white"><div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.topPicks}</p><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.bestAltsTitle}</h2></div>
        <div className="max-w-4xl mx-auto space-y-8">{alternatives.map((alt)=>(<div key={alt.name} className={alt.highlighted?"p-8 rounded-2xl bg-foreground text-white":"p-8 rounded-2xl bg-background border border-border-light"}>
          <div className="flex items-start justify-between mb-4"><div><p className={alt.highlighted?"text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-2":"text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-2"}>#{alt.rank}</p><h3 className={alt.highlighted?"text-xl font-semibold text-white":"text-xl font-semibold text-foreground"}>{alt.name}</h3></div><span className={alt.highlighted?"text-xs font-medium text-white/60 bg-white/10 px-3 py-1 rounded-full":"text-xs font-medium text-muted-light bg-white px-3 py-1 rounded-full border border-border-light"}>{alt.pricing}</span></div>
          <p className={alt.highlighted?"text-sm text-white/70 leading-relaxed mb-4":"text-sm text-muted leading-relaxed mb-4"}>{alt.tagline}</p>
          <p className={alt.highlighted?"text-sm text-white/80 mb-6":"text-sm text-foreground mb-6"}><span className="font-medium">{c.bestFor}</span> {alt.bestFor}</p>
          <ul className="space-y-3 mb-6">{alt.features.map((feature)=>(<li key={feature} className="flex items-start gap-3"><div className={alt.highlighted?"mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0":"mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-light shrink-0"}/><span className={alt.highlighted?"text-sm text-white/80":"text-sm text-muted"}>{feature}</span></li>))}</ul>
          {alt.compareHref&&(<Link href={alt.compareHref} className={alt.highlighted?"inline-flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors":"inline-flex items-center text-sm font-medium text-foreground hover:text-accent-muted transition-colors"}>{alt.highlighted?c.seeHow:`${c.compareSythioVs} ${alt.name}`}<span className="ml-1">&rarr;</span></Link>)}
        </div>))}</div>
      </div></section>

      <section className="py-24 md:py-32 bg-background"><div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{c.quickCompTitle}</h2><p className="mt-4 text-lg text-muted max-w-xl mx-auto">{c.quickCompSubtitle}</p></div>
        <div className="max-w-5xl mx-auto"><div className="bg-white rounded-2xl border border-border-light overflow-x-auto"><table className="w-full min-w-[640px]">
          <thead><tr className="border-b border-border-light"><th className="text-left p-4 text-sm font-semibold text-foreground">{c.thFeature}</th><th className="text-center p-4 text-sm font-semibold text-foreground">Sythio</th><th className="text-center p-4 text-sm font-semibold text-muted">Fireflies</th><th className="text-center p-4 text-sm font-semibold text-muted">tl;dv</th><th className="text-center p-4 text-sm font-semibold text-muted">Notta</th><th className="text-center p-4 text-sm font-semibold text-muted">AudioPen</th></tr></thead>
          <tbody>{comparisonRows.map((row)=>(<tr key={row.feature} className="border-b border-border-light last:border-0"><td className="p-4 text-sm text-muted">{row.feature}</td><td className="p-4 text-center text-sm text-foreground">{row.sythio}</td><td className="p-4 text-center text-sm text-muted">{row.fireflies}</td><td className="p-4 text-center text-sm text-muted">{row.tldv}</td><td className="p-4 text-center text-sm text-muted">{row.notta}</td><td className="p-4 text-center text-sm text-muted">{row.audiopen}</td></tr>))}</tbody>
        </table></div></div>
      </div></section>

      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none"/>
        <div className="max-w-7xl mx-auto px-6 relative"><div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.ctaTitle}</h2>
          <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">{c.ctaSubtitle}</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{c.startFree}</Link>
            <Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{c.exploreFeatures}</Link>
          </div>
          <p className="mt-6 text-sm text-muted-light">{c.freePlan}</p>
        </div></div>
      </section>
    </PageReveal>
  );
}
