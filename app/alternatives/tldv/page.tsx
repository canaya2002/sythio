"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Alternatives", title: "Looking for a tl;dv alternative?",
    subtitle: "tl;dv is a great video meeting recorder, but it\u2019s not the right fit for everyone. If you need audio-first flexibility, more output formats, or support beyond video calls, here are the best tl;dv alternatives in 2026.",
    trySythio: "Try Sythio Free", compareBtn: "Sythio vs tl;dv",
    frustrations: "Common frustrations", whySwitchTitle: "Why People Switch from tl;dv",
    switch1Title: "Video-only focus", switch1Desc: "tl;dv is designed specifically for video meetings on Google Meet, Zoom, and Teams. If you record voice notes, process audio files, or capture in-person conversations, tl;dv simply does not support those use cases.",
    switch2Title: "No audio file support", switch2Desc: "You cannot upload an audio file to tl;dv for processing. It only works with live video meetings. This makes it unusable for podcasters, researchers, students, and anyone working with recorded audio.",
    switch3Title: "Limited output formats", switch3Desc: "tl;dv gives you video highlights, clips, and basic summaries. But if you need structured action plans, executive reports, follow-up messages, or task lists, you will need to create those manually.",
    switch4Title: "Higher price point", switch4Desc: "At $20/month for the Pro plan, tl;dv is one of the more expensive options in this space. Alternatives that offer more output formats and broader audio support can deliver significantly more value.",
    criteriaLabel: "Evaluation criteria", criteriaTitle: "What to Look for in a tl;dv Alternative", criteriaSubtitle: "If tl;dv falls short for your workflow, here\u2019s what to prioritize.",
    criteria1Title: "Audio file support", criteria1Desc: "Upload recordings, voice memos, podcast episodes, or lecture audio. Not just live video meetings.",
    criteria2Title: "Multiple output formats", criteria2Desc: "Beyond clips and summaries \u2014 look for tasks, action plans, reports, follow-ups, and structured notes.",
    criteria3Title: "Any audio source", criteria3Desc: "The tool should work with voice notes, in-person recordings, phone calls, and uploaded files.",
    criteria4Title: "Speaker detection", criteria4Desc: "Accurate speaker identification matters for multi-person recordings, regardless of the source.",
    criteria5Title: "Affordable pricing", criteria5Desc: "Compare what you get per dollar. Broader functionality at a lower price is better value.",
    criteria6Title: "Fast, simple workflow", criteria6Desc: "Record or upload, and get structured results in seconds. No complex setup or calendar sync needed.",
    topPicks: "Top picks for 2026", bestAltsTitle: "Best tl;dv Alternatives",
    bestFor: "Best for:", seeHow: "See how Sythio works", compareSythioVs: "Compare Sythio vs",
    sythioTagline: "AI audio intelligence that turns any recording into 9 structured outputs.", sythioBestFor: "Anyone who needs structured outputs from any audio source \u2014 meetings, voice notes, lectures, and more. Not limited to video calls.",
    sythioF1: "9 structured output formats from one recording", sythioF2: "Works with any audio source, not just video meetings", sythioF3: "Speaker detection with task attribution", sythioF4: "Action plans, executive reports, follow-up messages", sythioF5: "Clean text, key points, and ideas extraction",
    otterTagline: "AI-powered transcription tool with real-time meeting captions and searchable transcripts.", otterBestFor: "Users who prioritize accurate, real-time transcription with a searchable library.", otterF1: "Real-time transcription and live captions", otterF2: "Searchable transcript library", otterF3: "Speaker identification and labeling",
    firefliesTagline: "AI meeting assistant that records, transcribes, and summarizes meetings.", firefliesBestFor: "Teams focused on meeting documentation with CRM integrations.", firefliesF1: "Automated meeting recording via bot", firefliesF2: "Searchable transcript library", firefliesF3: "CRM and collaboration integrations",
    nottaTagline: "Real-time transcription tool with multi-language support.", nottaBestFor: "Users who need fast, accurate transcription across multiple languages.", nottaF1: "Real-time transcription in 100+ languages", nottaF2: "Audio and video file transcription", nottaF3: "Calendar integrations for meetings",
    audiopenTagline: "Turns rambling voice notes into polished text.", audiopenBestFor: "Individual creators and thinkers who capture ideas via voice notes.", audiopenF1: "Voice-to-polished-text conversion", audiopenF2: "Multiple writing styles and tones", audiopenF3: "Simple, distraction-free interface",
    quickCompTitle: "Quick Comparison", quickCompSubtitle: "How the top tl;dv alternatives stack up at a glance.", thFeature: "Feature",
    "row.primaryOutput": "Primary output", "row.audioFile": "Audio file support", "row.voiceNotes": "Voice notes support", "row.taskExtraction": "Task extraction", "row.actionPlans": "Action plans", "row.executiveReports": "Executive reports", "row.speakerDetection": "Speaker detection", "row.freePlan": "Free plan", "row.startingPrice": "Starting price",
    ctaTitle: "Beyond video meetings",
    ctaSubtitle: "Try Sythio free and get 9 structured outputs from any audio source \u2014 voice notes, meetings, lectures, and more. No video-only limitations.",
    startFree: "Start Free", exploreFeatures: "Explore Features", freePlan: "Free plan includes 5 recordings per month. No credit card needed.",
  },
  es: {
    label: "Alternativas", title: "\u00bfBuscas una alternativa a tl;dv?",
    subtitle: "tl;dv es un gran grabador de videoconferencias, pero no es la opci\u00f3n correcta para todos. Si necesitas flexibilidad audio-primero, m\u00e1s formatos o soporte m\u00e1s all\u00e1 de videollamadas, aqu\u00ed est\u00e1n las mejores alternativas a tl;dv en 2026.",
    trySythio: "Prueba Sythio Gratis", compareBtn: "Sythio vs tl;dv",
    frustrations: "Frustraciones comunes", whySwitchTitle: "Por Qu\u00e9 la Gente Cambia de tl;dv",
    switch1Title: "Solo enfoque en video", switch1Desc: "tl;dv est\u00e1 dise\u00f1ado espec\u00edficamente para videoconferencias en Google Meet, Zoom y Teams. Si grabas notas de voz, procesas archivos de audio o capturas conversaciones en persona, tl;dv simplemente no soporta esos casos de uso.",
    switch2Title: "Sin soporte para archivos de audio", switch2Desc: "No puedes subir un archivo de audio a tl;dv para procesarlo. Solo funciona con videoconferencias en vivo. Esto lo hace inutilizable para podcasters, investigadores, estudiantes y cualquiera que trabaje con audio grabado.",
    switch3Title: "Formatos de salida limitados", switch3Desc: "tl;dv te da destacados de video, clips y res\u00famenes b\u00e1sicos. Pero si necesitas planes de acci\u00f3n estructurados, informes ejecutivos, mensajes de seguimiento o listas de tareas, deber\u00e1s crearlos manualmente.",
    switch4Title: "Precio m\u00e1s alto", switch4Desc: "A $20/mes por el plan Pro, tl;dv es una de las opciones m\u00e1s caras. Alternativas que ofrecen m\u00e1s formatos y soporte de audio m\u00e1s amplio pueden entregar significativamente m\u00e1s valor.",
    criteriaLabel: "Criterios de evaluaci\u00f3n", criteriaTitle: "Qu\u00e9 Buscar en una Alternativa a tl;dv", criteriaSubtitle: "Si tl;dv se queda corto para tu flujo de trabajo, esto es lo que debes priorizar.",
    criteria1Title: "Soporte para archivos de audio", criteria1Desc: "Sube grabaciones, notas de voz, episodios de podcast o audio de clases. No solo videoconferencias en vivo.",
    criteria2Title: "M\u00faltiples formatos de salida", criteria2Desc: "M\u00e1s all\u00e1 de clips y res\u00famenes \u2014 busca tareas, planes de acci\u00f3n, informes, seguimientos y notas estructuradas.",
    criteria3Title: "Cualquier fuente de audio", criteria3Desc: "La herramienta debe funcionar con notas de voz, grabaciones presenciales, llamadas telef\u00f3nicas y archivos subidos.",
    criteria4Title: "Detecci\u00f3n de hablantes", criteria4Desc: "La identificaci\u00f3n precisa de hablantes importa para grabaciones con m\u00faltiples personas, sin importar la fuente.",
    criteria5Title: "Precios accesibles", criteria5Desc: "Compara lo que obtienes por d\u00f3lar. Funcionalidad m\u00e1s amplia a menor precio es mejor valor.",
    criteria6Title: "Flujo de trabajo r\u00e1pido y simple", criteria6Desc: "Graba o sube, y obt\u00e9n resultados estructurados en segundos. Sin configuraci\u00f3n compleja ni sincronizaci\u00f3n de calendario.",
    topPicks: "Mejores opciones para 2026", bestAltsTitle: "Mejores Alternativas a tl;dv",
    bestFor: "Mejor para:", seeHow: "Ver c\u00f3mo funciona Sythio", compareSythioVs: "Comparar Sythio vs",
    sythioTagline: "Inteligencia de audio IA que convierte cualquier grabaci\u00f3n en 9 resultados estructurados.", sythioBestFor: "Cualquier persona que necesite resultados estructurados de cualquier fuente de audio \u2014 reuniones, notas de voz, clases y m\u00e1s. No limitado a videollamadas.",
    sythioF1: "9 formatos de resultados de una grabaci\u00f3n", sythioF2: "Funciona con cualquier fuente de audio, no solo videoconferencias", sythioF3: "Detecci\u00f3n de hablantes con atribuci\u00f3n de tareas", sythioF4: "Planes de acci\u00f3n, informes ejecutivos, mensajes de seguimiento", sythioF5: "Texto limpio, puntos clave y extracci\u00f3n de ideas",
    otterTagline: "Herramienta de transcripci\u00f3n IA con subt\u00edtulos en tiempo real y transcripciones buscables.", otterBestFor: "Usuarios que priorizan transcripci\u00f3n precisa en tiempo real con biblioteca buscable.", otterF1: "Transcripci\u00f3n en tiempo real y subt\u00edtulos en vivo", otterF2: "Biblioteca de transcripciones buscable", otterF3: "Identificaci\u00f3n y etiquetado de hablantes",
    firefliesTagline: "Asistente de reuniones IA que graba, transcribe y resume reuniones.", firefliesBestFor: "Equipos enfocados en documentaci\u00f3n de reuniones con integraciones CRM.", firefliesF1: "Grabaci\u00f3n autom\u00e1tica de reuniones via bot", firefliesF2: "Biblioteca de transcripciones buscable", firefliesF3: "Integraciones CRM y colaboraci\u00f3n",
    nottaTagline: "Herramienta de transcripci\u00f3n en tiempo real con soporte multiling\u00fce.", nottaBestFor: "Usuarios que necesitan transcripci\u00f3n r\u00e1pida y precisa en m\u00faltiples idiomas.", nottaF1: "Transcripci\u00f3n en tiempo real en 100+ idiomas", nottaF2: "Transcripci\u00f3n de archivos de audio y video", nottaF3: "Integraciones de calendario para reuniones",
    audiopenTagline: "Convierte notas de voz desordenadas en texto pulido.", audiopenBestFor: "Creadores y pensadores individuales que capturan ideas con notas de voz.", audiopenF1: "Conversi\u00f3n de voz a texto pulido", audiopenF2: "M\u00faltiples estilos y tonos de escritura", audiopenF3: "Interfaz simple y sin distracciones",
    quickCompTitle: "Comparaci\u00f3n R\u00e1pida", quickCompSubtitle: "C\u00f3mo se comparan las mejores alternativas a tl;dv de un vistazo.", thFeature: "Caracter\u00edstica",
    "row.primaryOutput": "Resultado principal", "row.audioFile": "Soporte archivos audio", "row.voiceNotes": "Soporte notas de voz", "row.taskExtraction": "Extracci\u00f3n de tareas", "row.actionPlans": "Planes de acci\u00f3n", "row.executiveReports": "Informes ejecutivos", "row.speakerDetection": "Detecci\u00f3n de hablantes", "row.freePlan": "Plan gratuito", "row.startingPrice": "Precio inicial",
    ctaTitle: "M\u00e1s all\u00e1 de las videoconferencias",
    ctaSubtitle: "Prueba Sythio gratis y obt\u00e9n 9 resultados estructurados de cualquier fuente de audio \u2014 notas de voz, reuniones, clases y m\u00e1s. Sin limitaciones de solo video.",
    startFree: "Comenzar Gratis", exploreFeatures: "Explorar Funciones", freePlan: "El plan gratuito incluye 5 grabaciones al mes. Sin tarjeta de cr\u00e9dito.",
  },
  fr: {
    label: "Alternatives", title: "Vous cherchez une alternative \u00e0 tl;dv ?",
    subtitle: "tl;dv est un excellent enregistreur de visioconf\u00e9rences, mais il ne convient pas \u00e0 tous. Si vous avez besoin de flexibilit\u00e9 audio-first, de plus de formats ou de support au-del\u00e0 des appels vid\u00e9o, voici les meilleures alternatives \u00e0 tl;dv en 2026.",
    trySythio: "Essayer Sythio Gratuitement", compareBtn: "Sythio vs tl;dv",
    frustrations: "Frustrations courantes", whySwitchTitle: "Pourquoi les Gens Quittent tl;dv",
    switch1Title: "Focus vid\u00e9o uniquement", switch1Desc: "tl;dv est con\u00e7u sp\u00e9cifiquement pour les visioconf\u00e9rences sur Google Meet, Zoom et Teams. Si vous enregistrez des notes vocales, traitez des fichiers audio ou capturez des conversations en personne, tl;dv ne supporte tout simplement pas ces cas d\u2019usage.",
    switch2Title: "Pas de support fichiers audio", switch2Desc: "Vous ne pouvez pas t\u00e9l\u00e9verser un fichier audio sur tl;dv pour le traiter. Il ne fonctionne qu\u2019avec des visioconf\u00e9rences en direct. Cela le rend inutilisable pour les podcasteurs, chercheurs, \u00e9tudiants et quiconque travaille avec de l\u2019audio enregistr\u00e9.",
    switch3Title: "Formats de sortie limit\u00e9s", switch3Desc: "tl;dv vous donne des temps forts vid\u00e9o, clips et r\u00e9sum\u00e9s basiques. Mais si vous avez besoin de plans d\u2019action structur\u00e9s, rapports ex\u00e9cutifs, messages de suivi ou listes de t\u00e2ches, vous devrez les cr\u00e9er manuellement.",
    switch4Title: "Prix plus \u00e9lev\u00e9", switch4Desc: "\u00c0 20 $/mois pour le plan Pro, tl;dv est l\u2019une des options les plus ch\u00e8res. Des alternatives offrant plus de formats et un support audio plus large peuvent offrir une valeur nettement sup\u00e9rieure.",
    criteriaLabel: "Crit\u00e8res d\u2019\u00e9valuation", criteriaTitle: "Que Chercher dans une Alternative \u00e0 tl;dv", criteriaSubtitle: "Si tl;dv ne suffit pas pour votre flux de travail, voici ce qu\u2019il faut prioriser.",
    criteria1Title: "Support fichiers audio", criteria1Desc: "T\u00e9l\u00e9versez enregistrements, m\u00e9mos vocaux, \u00e9pisodes de podcast ou audio de cours. Pas seulement des visioconf\u00e9rences en direct.",
    criteria2Title: "Formats de sortie multiples", criteria2Desc: "Au-del\u00e0 des clips et r\u00e9sum\u00e9s \u2014 cherchez t\u00e2ches, plans d\u2019action, rapports, suivis et notes structur\u00e9es.",
    criteria3Title: "Toute source audio", criteria3Desc: "L\u2019outil doit fonctionner avec notes vocales, enregistrements en personne, appels t\u00e9l\u00e9phoniques et fichiers t\u00e9l\u00e9vers\u00e9s.",
    criteria4Title: "D\u00e9tection des intervenants", criteria4Desc: "L\u2019identification pr\u00e9cise des intervenants compte pour les enregistrements multi-personnes, quelle que soit la source.",
    criteria5Title: "Tarifs abordables", criteria5Desc: "Comparez ce que vous obtenez par dollar. Plus de fonctionnalit\u00e9s \u00e0 un prix inf\u00e9rieur est une meilleure valeur.",
    criteria6Title: "Flux de travail rapide et simple", criteria6Desc: "Enregistrez ou t\u00e9l\u00e9versez, et obtenez des r\u00e9sultats structur\u00e9s en secondes. Pas de configuration complexe.",
    topPicks: "Meilleurs choix pour 2026", bestAltsTitle: "Meilleures Alternatives \u00e0 tl;dv",
    bestFor: "Id\u00e9al pour :", seeHow: "Voir comment Sythio fonctionne", compareSythioVs: "Comparer Sythio vs",
    sythioTagline: "Intelligence audio IA qui transforme tout enregistrement en 9 r\u00e9sultats structur\u00e9s.", sythioBestFor: "Toute personne ayant besoin de r\u00e9sultats structur\u00e9s de toute source audio \u2014 r\u00e9unions, notes vocales, cours et plus. Pas limit\u00e9 aux appels vid\u00e9o.",
    sythioF1: "9 formats de r\u00e9sultats d\u2019un enregistrement", sythioF2: "Fonctionne avec toute source audio, pas seulement les visioconf\u00e9rences", sythioF3: "D\u00e9tection intervenants avec attribution t\u00e2ches", sythioF4: "Plans d\u2019action, rapports ex\u00e9cutifs, messages de suivi", sythioF5: "Texte nettoy\u00e9, points cl\u00e9s et extraction d\u2019id\u00e9es",
    otterTagline: "Outil de transcription IA avec sous-titres en temps r\u00e9el et transcriptions consultables.", otterBestFor: "Utilisateurs qui priorisent la transcription pr\u00e9cise en temps r\u00e9el.", otterF1: "Transcription en temps r\u00e9el et sous-titres en direct", otterF2: "Biblioth\u00e8que de transcriptions consultable", otterF3: "Identification et \u00e9tiquetage des intervenants",
    firefliesTagline: "Assistant de r\u00e9union IA qui enregistre, transcrit et r\u00e9sume les r\u00e9unions.", firefliesBestFor: "\u00c9quipes focalis\u00e9es sur la documentation de r\u00e9unions avec int\u00e9grations CRM.", firefliesF1: "Enregistrement automatique de r\u00e9unions via bot", firefliesF2: "Biblioth\u00e8que de transcriptions consultable", firefliesF3: "Int\u00e9grations CRM et collaboration",
    nottaTagline: "Outil de transcription en temps r\u00e9el avec support multilingue.", nottaBestFor: "Utilisateurs ayant besoin d\u2019une transcription rapide et pr\u00e9cise dans plusieurs langues.", nottaF1: "Transcription en temps r\u00e9el dans 100+ langues", nottaF2: "Transcription de fichiers audio et vid\u00e9o", nottaF3: "Int\u00e9grations calendrier pour les r\u00e9unions",
    audiopenTagline: "Transforme les m\u00e9mos vocaux d\u00e9cousus en texte soign\u00e9.", audiopenBestFor: "Cr\u00e9ateurs et penseurs individuels qui capturent des id\u00e9es par la voix.", audiopenF1: "Conversion voix vers texte soign\u00e9", audiopenF2: "Multiples styles et tons d\u2019\u00e9criture", audiopenF3: "Interface simple et sans distractions",
    quickCompTitle: "Comparaison Rapide", quickCompSubtitle: "Comment les meilleures alternatives \u00e0 tl;dv se comparent en un coup d\u2019\u0153il.", thFeature: "Fonctionnalit\u00e9",
    "row.primaryOutput": "R\u00e9sultat principal", "row.audioFile": "Support fichiers audio", "row.voiceNotes": "Support notes vocales", "row.taskExtraction": "Extraction de t\u00e2ches", "row.actionPlans": "Plans d\u2019action", "row.executiveReports": "Rapports ex\u00e9cutifs", "row.speakerDetection": "D\u00e9tection intervenants", "row.freePlan": "Plan gratuit", "row.startingPrice": "Prix de d\u00e9part",
    ctaTitle: "Au-del\u00e0 des visioconf\u00e9rences",
    ctaSubtitle: "Essayez Sythio gratuitement et obtenez 9 r\u00e9sultats structur\u00e9s de toute source audio \u2014 notes vocales, r\u00e9unions, cours et plus. Sans limitations vid\u00e9o uniquement.",
    startFree: "Commencer Gratuitement", exploreFeatures: "Explorer les Fonctionnalit\u00e9s", freePlan: "Le plan gratuit inclut 5 enregistrements par mois. Sans carte de cr\u00e9dit.",
  },
  pt: {
    label: "Alternativas", title: "Procurando uma alternativa ao tl;dv?",
    subtitle: "tl;dv \u00e9 um \u00f3timo gravador de videoconfer\u00eancias, mas n\u00e3o \u00e9 a op\u00e7\u00e3o certa para todos. Se voc\u00ea precisa de flexibilidade \u00e1udio-primeiro, mais formatos ou suporte al\u00e9m de videochamadas, aqui est\u00e3o as melhores alternativas ao tl;dv em 2026.",
    trySythio: "Experimente Sythio Gr\u00e1tis", compareBtn: "Sythio vs tl;dv",
    frustrations: "Frustra\u00e7\u00f5es comuns", whySwitchTitle: "Por Que as Pessoas Trocam o tl;dv",
    switch1Title: "Foco apenas em v\u00eddeo", switch1Desc: "tl;dv \u00e9 projetado especificamente para videoconfer\u00eancias no Google Meet, Zoom e Teams. Se voc\u00ea grava notas de voz, processa arquivos de \u00e1udio ou captura conversas presenciais, tl;dv simplesmente n\u00e3o suporta esses casos de uso.",
    switch2Title: "Sem suporte para arquivos de \u00e1udio", switch2Desc: "Voc\u00ea n\u00e3o pode enviar um arquivo de \u00e1udio ao tl;dv para processamento. S\u00f3 funciona com videoconfer\u00eancias ao vivo. Isso o torna inutiliz\u00e1vel para podcasters, pesquisadores, estudantes e qualquer pessoa que trabalhe com \u00e1udio gravado.",
    switch3Title: "Formatos de sa\u00edda limitados", switch3Desc: "tl;dv te d\u00e1 destaques de v\u00eddeo, clips e resumos b\u00e1sicos. Mas se voc\u00ea precisa de planos de a\u00e7\u00e3o estruturados, relat\u00f3rios executivos, mensagens de acompanhamento ou listas de tarefas, ter\u00e1 que cri\u00e1-los manualmente.",
    switch4Title: "Pre\u00e7o mais alto", switch4Desc: "A $20/m\u00eas pelo plano Pro, tl;dv \u00e9 uma das op\u00e7\u00f5es mais caras. Alternativas que oferecem mais formatos e suporte de \u00e1udio mais amplo podem entregar significativamente mais valor.",
    criteriaLabel: "Crit\u00e9rios de avalia\u00e7\u00e3o", criteriaTitle: "O Que Buscar em uma Alternativa ao tl;dv", criteriaSubtitle: "Se tl;dv n\u00e3o atende seu fluxo de trabalho, isto \u00e9 o que priorizar.",
    criteria1Title: "Suporte a arquivos de \u00e1udio", criteria1Desc: "Envie grava\u00e7\u00f5es, notas de voz, epis\u00f3dios de podcast ou \u00e1udio de aulas. N\u00e3o apenas videoconfer\u00eancias ao vivo.",
    criteria2Title: "M\u00faltiplos formatos de sa\u00edda", criteria2Desc: "Al\u00e9m de clips e resumos \u2014 busque tarefas, planos de a\u00e7\u00e3o, relat\u00f3rios, acompanhamentos e notas estruturadas.",
    criteria3Title: "Qualquer fonte de \u00e1udio", criteria3Desc: "A ferramenta deve funcionar com notas de voz, grava\u00e7\u00f5es presenciais, liga\u00e7\u00f5es telef\u00f4nicas e arquivos enviados.",
    criteria4Title: "Detec\u00e7\u00e3o de falantes", criteria4Desc: "Identifica\u00e7\u00e3o precisa de falantes importa para grava\u00e7\u00f5es com m\u00faltiplas pessoas, independente da fonte.",
    criteria5Title: "Pre\u00e7os acess\u00edveis", criteria5Desc: "Compare o que voc\u00ea obt\u00e9m por d\u00f3lar. Funcionalidade mais ampla a pre\u00e7o menor \u00e9 melhor valor.",
    criteria6Title: "Fluxo de trabalho r\u00e1pido e simples", criteria6Desc: "Grave ou envie, e obtenha resultados estruturados em segundos. Sem configura\u00e7\u00e3o complexa.",
    topPicks: "Melhores op\u00e7\u00f5es para 2026", bestAltsTitle: "Melhores Alternativas ao tl;dv",
    bestFor: "Melhor para:", seeHow: "Veja como Sythio funciona", compareSythioVs: "Comparar Sythio vs",
    sythioTagline: "Intelig\u00eancia de \u00e1udio IA que transforma qualquer grava\u00e7\u00e3o em 9 resultados estruturados.", sythioBestFor: "Qualquer pessoa que precise de resultados estruturados de qualquer fonte de \u00e1udio \u2014 reuni\u00f5es, notas de voz, aulas e mais. N\u00e3o limitado a videochamadas.",
    sythioF1: "9 formatos de resultados de uma grava\u00e7\u00e3o", sythioF2: "Funciona com qualquer fonte de \u00e1udio, n\u00e3o apenas videoconfer\u00eancias", sythioF3: "Detec\u00e7\u00e3o de falantes com atribui\u00e7\u00e3o de tarefas", sythioF4: "Planos de a\u00e7\u00e3o, relat\u00f3rios executivos, mensagens de acompanhamento", sythioF5: "Texto limpo, pontos-chave e extra\u00e7\u00e3o de ideias",
    otterTagline: "Ferramenta de transcri\u00e7\u00e3o IA com legendas em tempo real e transcri\u00e7\u00f5es pesquis\u00e1veis.", otterBestFor: "Usu\u00e1rios que priorizam transcri\u00e7\u00e3o precisa em tempo real com biblioteca pesquis\u00e1vel.", otterF1: "Transcri\u00e7\u00e3o em tempo real e legendas ao vivo", otterF2: "Biblioteca de transcri\u00e7\u00f5es pesquis\u00e1vel", otterF3: "Identifica\u00e7\u00e3o e rotulagem de falantes",
    firefliesTagline: "Assistente de reuni\u00f5es IA que grava, transcreve e resume reuni\u00f5es.", firefliesBestFor: "Equipes focadas em documenta\u00e7\u00e3o de reuni\u00f5es com integra\u00e7\u00f5es CRM.", firefliesF1: "Grava\u00e7\u00e3o autom\u00e1tica de reuni\u00f5es via bot", firefliesF2: "Biblioteca de transcri\u00e7\u00f5es pesquis\u00e1vel", firefliesF3: "Integra\u00e7\u00f5es CRM e colabora\u00e7\u00e3o",
    nottaTagline: "Ferramenta de transcri\u00e7\u00e3o em tempo real com suporte multilingual.", nottaBestFor: "Usu\u00e1rios que precisam de transcri\u00e7\u00e3o r\u00e1pida e precisa em m\u00faltiplos idiomas.", nottaF1: "Transcri\u00e7\u00e3o em tempo real em 100+ idiomas", nottaF2: "Transcri\u00e7\u00e3o de arquivos de \u00e1udio e v\u00eddeo", nottaF3: "Integra\u00e7\u00f5es de calend\u00e1rio para reuni\u00f5es",
    audiopenTagline: "Transforma notas de voz desorganizadas em texto polido.", audiopenBestFor: "Criadores e pensadores individuais que capturam ideias por notas de voz.", audiopenF1: "Convers\u00e3o de voz para texto polido", audiopenF2: "M\u00faltiplos estilos e tons de escrita", audiopenF3: "Interface simples e sem distra\u00e7\u00f5es",
    quickCompTitle: "Compara\u00e7\u00e3o R\u00e1pida", quickCompSubtitle: "Como as melhores alternativas ao tl;dv se comparam de relance.", thFeature: "Recurso",
    "row.primaryOutput": "Resultado principal", "row.audioFile": "Suporte arquivos \u00e1udio", "row.voiceNotes": "Suporte notas de voz", "row.taskExtraction": "Extra\u00e7\u00e3o de tarefas", "row.actionPlans": "Planos de a\u00e7\u00e3o", "row.executiveReports": "Relat\u00f3rios executivos", "row.speakerDetection": "Detec\u00e7\u00e3o de falantes", "row.freePlan": "Plano gratuito", "row.startingPrice": "Pre\u00e7o inicial",
    ctaTitle: "Al\u00e9m das videoconfer\u00eancias",
    ctaSubtitle: "Experimente Sythio gr\u00e1tis e obtenha 9 resultados estruturados de qualquer fonte de \u00e1udio \u2014 notas de voz, reuni\u00f5es, aulas e mais. Sem limita\u00e7\u00f5es de apenas v\u00eddeo.",
    startFree: "Comece Gr\u00e1tis", exploreFeatures: "Explorar Recursos", freePlan: "O plano gratuito inclui 5 grava\u00e7\u00f5es por m\u00eas. Sem cart\u00e3o de cr\u00e9dito.",
  },
  it: {
    label: "Alternative", title: "Cerchi un\u2019alternativa a tl;dv?",
    subtitle: "tl;dv \u00e8 un ottimo registratore di videoconferenze, ma non \u00e8 la scelta giusta per tutti. Se hai bisogno di flessibilit\u00e0 audio-first, pi\u00f9 formati o supporto oltre le videochiamate, ecco le migliori alternative a tl;dv nel 2026.",
    trySythio: "Prova Sythio Gratis", compareBtn: "Sythio vs tl;dv",
    frustrations: "Frustrazioni comuni", whySwitchTitle: "Perch\u00e9 le Persone Lasciano tl;dv",
    switch1Title: "Focus solo video", switch1Desc: "tl;dv \u00e8 progettato specificamente per videoconferenze su Google Meet, Zoom e Teams. Se registri note vocali, elabori file audio o catturi conversazioni di persona, tl;dv semplicemente non supporta questi casi d\u2019uso.",
    switch2Title: "Nessun supporto file audio", switch2Desc: "Non puoi caricare un file audio su tl;dv per elaborarlo. Funziona solo con videoconferenze in diretta. Questo lo rende inutilizzabile per podcaster, ricercatori, studenti e chiunque lavori con audio registrato.",
    switch3Title: "Formati di output limitati", switch3Desc: "tl;dv ti d\u00e0 punti salienti video, clip e riassunti base. Ma se hai bisogno di piani d\u2019azione strutturati, report esecutivi, messaggi di follow-up o liste di attivit\u00e0, dovrai crearli manualmente.",
    switch4Title: "Prezzo pi\u00f9 alto", switch4Desc: "A $20/mese per il piano Pro, tl;dv \u00e8 una delle opzioni pi\u00f9 costose. Alternative che offrono pi\u00f9 formati e supporto audio pi\u00f9 ampio possono offrire un valore significativamente superiore.",
    criteriaLabel: "Criteri di valutazione", criteriaTitle: "Cosa Cercare in un\u2019Alternativa a tl;dv", criteriaSubtitle: "Se tl;dv non basta per il tuo flusso di lavoro, ecco cosa dare priorit\u00e0.",
    criteria1Title: "Supporto file audio", criteria1Desc: "Carica registrazioni, memo vocali, episodi podcast o audio di lezioni. Non solo videoconferenze in diretta.",
    criteria2Title: "Formati di output multipli", criteria2Desc: "Oltre clip e riassunti \u2014 cerca attivit\u00e0, piani d\u2019azione, report, follow-up e note strutturate.",
    criteria3Title: "Qualsiasi fonte audio", criteria3Desc: "Lo strumento deve funzionare con note vocali, registrazioni di persona, chiamate telefoniche e file caricati.",
    criteria4Title: "Rilevamento parlanti", criteria4Desc: "L\u2019identificazione precisa dei parlanti conta per registrazioni multi-persona, indipendentemente dalla fonte.",
    criteria5Title: "Prezzi accessibili", criteria5Desc: "Confronta cosa ottieni per dollaro. Funzionalit\u00e0 pi\u00f9 ampia a prezzo inferiore \u00e8 miglior valore.",
    criteria6Title: "Flusso di lavoro rapido e semplice", criteria6Desc: "Registra o carica, e ottieni risultati strutturati in secondi. Nessuna configurazione complessa.",
    topPicks: "Migliori scelte per il 2026", bestAltsTitle: "Migliori Alternative a tl;dv",
    bestFor: "Ideale per:", seeHow: "Scopri come funziona Sythio", compareSythioVs: "Confronta Sythio vs",
    sythioTagline: "Intelligenza audio IA che trasforma qualsiasi registrazione in 9 risultati strutturati.", sythioBestFor: "Chiunque abbia bisogno di risultati strutturati da qualsiasi fonte audio \u2014 riunioni, note vocali, lezioni e altro. Non limitato alle videochiamate.",
    sythioF1: "9 formati di risultati da una registrazione", sythioF2: "Funziona con qualsiasi fonte audio, non solo videoconferenze", sythioF3: "Rilevamento parlanti con attribuzione attivit\u00e0", sythioF4: "Piani d\u2019azione, report esecutivi, messaggi di follow-up", sythioF5: "Testo pulito, punti chiave ed estrazione idee",
    otterTagline: "Strumento trascrizione IA con sottotitoli in tempo reale e trascrizioni ricercabili.", otterBestFor: "Utenti che danno priorit\u00e0 alla trascrizione precisa in tempo reale.", otterF1: "Trascrizione in tempo reale e sottotitoli in diretta", otterF2: "Libreria trascrizioni ricercabile", otterF3: "Identificazione ed etichettatura parlanti",
    firefliesTagline: "Assistente riunioni IA che registra, trascrive e riassume le riunioni.", firefliesBestFor: "Team focalizzati sulla documentazione riunioni con integrazioni CRM.", firefliesF1: "Registrazione automatica riunioni via bot", firefliesF2: "Libreria trascrizioni ricercabile", firefliesF3: "Integrazioni CRM e collaborazione",
    nottaTagline: "Strumento di trascrizione in tempo reale con supporto multilingue.", nottaBestFor: "Utenti che hanno bisogno di trascrizione rapida e precisa in pi\u00f9 lingue.", nottaF1: "Trascrizione in tempo reale in 100+ lingue", nottaF2: "Trascrizione file audio e video", nottaF3: "Integrazioni calendario per riunioni",
    audiopenTagline: "Trasforma memo vocali disordinati in testo curato.", audiopenBestFor: "Creatori e pensatori individuali che catturano idee con note vocali.", audiopenF1: "Conversione voce-testo curato", audiopenF2: "Molteplici stili e toni di scrittura", audiopenF3: "Interfaccia semplice e senza distrazioni",
    quickCompTitle: "Confronto Rapido", quickCompSubtitle: "Come si confrontano le migliori alternative a tl;dv a colpo d\u2019occhio.", thFeature: "Funzionalit\u00e0",
    "row.primaryOutput": "Risultato principale", "row.audioFile": "Supporto file audio", "row.voiceNotes": "Supporto note vocali", "row.taskExtraction": "Estrazione attivit\u00e0", "row.actionPlans": "Piani d\u2019azione", "row.executiveReports": "Report esecutivi", "row.speakerDetection": "Rilevamento parlanti", "row.freePlan": "Piano gratuito", "row.startingPrice": "Prezzo iniziale",
    ctaTitle: "Oltre le videoconferenze",
    ctaSubtitle: "Prova Sythio gratis e ottieni 9 risultati strutturati da qualsiasi fonte audio \u2014 note vocali, riunioni, lezioni e altro. Senza limitazioni video.",
    startFree: "Inizia Gratis", exploreFeatures: "Esplora le Funzionalit\u00e0", freePlan: "Il piano gratuito include 5 registrazioni al mese. Nessuna carta di credito richiesta.",
  },
};

export default function TldvAlternativesPage() {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;

  const alternatives = [
    { rank: 1, name: "Sythio", tagline: c.sythioTagline, bestFor: c.sythioBestFor, pricing: "Free (5 recordings/mo) | Pro $12/mo", compareHref: "/product", highlighted: true, features: [c.sythioF1, c.sythioF2, c.sythioF3, c.sythioF4, c.sythioF5] },
    { rank: 2, name: "Otter.ai", tagline: c.otterTagline, bestFor: c.otterBestFor, pricing: "Free (limited) | Pro $16.99/mo", compareHref: "/compare/otter", highlighted: false, features: [c.otterF1, c.otterF2, c.otterF3] },
    { rank: 3, name: "Fireflies.ai", tagline: c.firefliesTagline, bestFor: c.firefliesBestFor, pricing: "Free (limited) | Pro $18/mo", compareHref: "/compare/fireflies", highlighted: false, features: [c.firefliesF1, c.firefliesF2, c.firefliesF3] },
    { rank: 4, name: "Notta", tagline: c.nottaTagline, bestFor: c.nottaBestFor, pricing: "Free (limited) | Pro $14.99/mo", compareHref: null, highlighted: false, features: [c.nottaF1, c.nottaF2, c.nottaF3] },
    { rank: 5, name: "AudioPen", tagline: c.audiopenTagline, bestFor: c.audiopenBestFor, pricing: "Free (limited) | Prime $99/year", compareHref: null, highlighted: false, features: [c.audiopenF1, c.audiopenF2, c.audiopenF3] },
  ];

  const comparisonRows = [
    { feature: c["row.primaryOutput"], sythio: "9 structured formats", otter: "Transcript + summary", fireflies: "Transcript + summary", notta: "Transcript", audiopen: "Polished text" },
    { feature: c["row.audioFile"], sythio: "\u2713", otter: "\u2713", fireflies: "\u2014", notta: "\u2713", audiopen: "\u2713" },
    { feature: c["row.voiceNotes"], sythio: "\u2713", otter: "\u2014", fireflies: "\u2014", notta: "\u2713", audiopen: "\u2713" },
    { feature: c["row.taskExtraction"], sythio: "\u2713", otter: "\u2014", fireflies: "\u2713", notta: "\u2014", audiopen: "\u2014" },
    { feature: c["row.actionPlans"], sythio: "\u2713", otter: "\u2014", fireflies: "\u2014", notta: "\u2014", audiopen: "\u2014" },
    { feature: c["row.executiveReports"], sythio: "\u2713", otter: "\u2014", fireflies: "\u2014", notta: "\u2014", audiopen: "\u2014" },
    { feature: c["row.speakerDetection"], sythio: "\u2713", otter: "\u2713", fireflies: "\u2713", notta: "\u2713", audiopen: "\u2014" },
    { feature: c["row.freePlan"], sythio: "5 recordings/mo", otter: "Limited minutes", fireflies: "Limited minutes", notta: "Limited minutes", audiopen: "Limited notes" },
    { feature: c["row.startingPrice"], sythio: "$12/mo", otter: "$16.99/mo", fireflies: "$18/mo", notta: "$14.99/mo", audiopen: "$99/year" },
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
        <TextReveal tag="h1"><h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">{c.title}</h1></TextReveal>
        <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">{c.subtitle}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <MagneticHover><Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{c.trySythio}</Link></MagneticHover>
          <Link href="/compare/tldv" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{c.compareBtn}</Link>
        </div>
      </div></div></section>

      <section className="py-32 md:py-44 bg-white"><div className="max-w-7xl mx-auto px-6"><div className="max-w-3xl mx-auto">
        <div className="text-center mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.frustrations}</p><TextReveal tag="h2"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.whySwitchTitle}</h2></TextReveal></div>
        <div className="space-y-6">{[{title:c.switch1Title,description:c.switch1Desc},{title:c.switch2Title,description:c.switch2Desc},{title:c.switch3Title,description:c.switch3Desc},{title:c.switch4Title,description:c.switch4Desc}].map((item)=>(<div key={item.title} className="p-6 rounded-2xl bg-background border border-border-light"><h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted leading-relaxed">{item.description}</p></div>))}</div>
      </div></div></section>

      <section className="py-32 md:py-44 animated-gradient-bg relative overflow-hidden bg-background"><div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.criteriaLabel}</p><TextReveal tag="h2"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{c.criteriaTitle}</h2></TextReveal><p className="mt-4 text-lg text-muted max-w-xl mx-auto">{c.criteriaSubtitle}</p></div>
        <GsapStagger stagger={0.08}><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">{[{title:c.criteria1Title,description:c.criteria1Desc},{title:c.criteria2Title,description:c.criteria2Desc},{title:c.criteria3Title,description:c.criteria3Desc},{title:c.criteria4Title,description:c.criteria4Desc},{title:c.criteria5Title,description:c.criteria5Desc},{title:c.criteria6Title,description:c.criteria6Desc}].map((item)=>(<ScrollScale key={item.title}><div className="p-6 rounded-2xl bg-white border border-border-light"><h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted leading-relaxed">{item.description}</p></div></ScrollScale>))}</div></GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-white"><div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.topPicks}</p><TextReveal tag="h2"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.bestAltsTitle}</h2></TextReveal></div>
        <GsapStagger stagger={0.08}><div className="max-w-4xl mx-auto space-y-8">{alternatives.map((alt)=>(<ScrollScale key={alt.name}><div className={alt.highlighted?"p-8 rounded-2xl bg-foreground text-white":"p-8 rounded-2xl bg-background border border-border-light"}>
          <div className="flex items-start justify-between mb-4"><div><p className={alt.highlighted?"text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-2":"text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-2"}>#{alt.rank}</p><h3 className={alt.highlighted?"text-xl font-semibold text-white":"text-xl font-semibold text-foreground"}>{alt.name}</h3></div><span className={alt.highlighted?"text-xs font-medium text-white/60 bg-white/10 px-3 py-1 rounded-full":"text-xs font-medium text-muted-light bg-white px-3 py-1 rounded-full border border-border-light"}>{alt.pricing}</span></div>
          <p className={alt.highlighted?"text-sm text-white/70 leading-relaxed mb-4":"text-sm text-muted leading-relaxed mb-4"}>{alt.tagline}</p>
          <p className={alt.highlighted?"text-sm text-white/80 mb-6":"text-sm text-foreground mb-6"}><span className="font-medium">{c.bestFor}</span> {alt.bestFor}</p>
          <ul className="space-y-3 mb-6">{alt.features.map((feature)=>(<li key={feature} className="flex items-start gap-3"><div className={alt.highlighted?"mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0":"mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-light shrink-0"}/><span className={alt.highlighted?"text-sm text-white/80":"text-sm text-muted"}>{feature}</span></li>))}</ul>
          {alt.compareHref&&(<Link href={alt.compareHref} className={alt.highlighted?"inline-flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors":"inline-flex items-center text-sm font-medium text-foreground hover:text-accent-muted transition-colors"}>{alt.highlighted?c.seeHow:`${c.compareSythioVs} ${alt.name}`}<span className="ml-1">&rarr;</span></Link>)}
        </div></ScrollScale>))}</div></GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 animated-gradient-bg relative overflow-hidden bg-background"><div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16"><TextReveal tag="h2"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{c.quickCompTitle}</h2></TextReveal><p className="mt-4 text-lg text-muted max-w-xl mx-auto">{c.quickCompSubtitle}</p></div>
        <div className="max-w-5xl mx-auto"><div className="bg-white rounded-2xl border border-border-light overflow-x-auto"><table className="w-full min-w-[640px]">
          <thead><tr className="border-b border-border-light"><th className="text-left p-4 text-sm font-semibold text-foreground">{c.thFeature}</th><th className="text-center p-4 text-sm font-semibold text-foreground">Sythio</th><th className="text-center p-4 text-sm font-semibold text-muted">Otter.ai</th><th className="text-center p-4 text-sm font-semibold text-muted">Fireflies</th><th className="text-center p-4 text-sm font-semibold text-muted">Notta</th><th className="text-center p-4 text-sm font-semibold text-muted">AudioPen</th></tr></thead>
          <tbody>{comparisonRows.map((row)=>(<tr key={row.feature} className="border-b border-border-light last:border-0"><td className="p-4 text-sm text-muted">{row.feature}</td><td className="p-4 text-center text-sm text-foreground">{row.sythio}</td><td className="p-4 text-center text-sm text-muted">{row.otter}</td><td className="p-4 text-center text-sm text-muted">{row.fireflies}</td><td className="p-4 text-center text-sm text-muted">{row.notta}</td><td className="p-4 text-center text-sm text-muted">{row.audiopen}</td></tr>))}</tbody>
        </table></div></div>
      </div></section>

      <section className="py-32 md:py-44 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none"/>
        <div className="max-w-7xl mx-auto px-6 relative"><div className="text-center max-w-3xl mx-auto">
          <TextReveal tag="h2"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.ctaTitle}</h2></TextReveal>
          <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">{c.ctaSubtitle}</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticHover><Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{c.startFree}</Link></MagneticHover>
            <MagneticHover><Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{c.exploreFeatures}</Link></MagneticHover>
          </div>
          <p className="mt-6 text-sm text-muted-light">{c.freePlan}</p>
        </div></div>
      </section>
    </PageReveal>
  );
}
