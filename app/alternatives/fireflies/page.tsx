"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Alternatives", title: "Looking for a Fireflies.ai alternative?",
    subtitle: "Fireflies.ai is a popular meeting assistant, but its bot-based approach isn\u2019t for everyone. Whether you need broader audio support, more output formats, or a less intrusive workflow, here are the best Fireflies.ai alternatives in 2026.",
    trySythio: "Try Sythio Free", compareBtn: "Sythio vs Fireflies.ai",
    frustrations: "Common frustrations", whySwitchTitle: "Why People Switch from Fireflies.ai",
    switch1Title: "The meeting bot feels intrusive", switch1Desc: "Fireflies.ai joins meetings as a visible bot participant. Many users report that clients and colleagues find this awkward or unprofessional, especially in sensitive conversations or smaller meetings.",
    switch2Title: "No voice notes or non-meeting audio support", switch2Desc: "Fireflies is built around scheduled meetings. If you want to capture voice notes on the go, transcribe a lecture, or process an uploaded audio file, you need a different tool entirely.",
    switch3Title: "Limited output formats", switch3Desc: "Fireflies generates transcripts and basic summaries. But if you need structured action plans, executive reports, follow-up messages, or study notes, you have to create them yourself from the raw transcript.",
    switch4Title: "Higher price for focused functionality", switch4Desc: "At $18/month for the Pro plan, Fireflies.ai charges a premium for meeting-centric features. Alternatives that offer more output formats from broader audio sources can deliver better value per dollar.",
    criteriaLabel: "Evaluation criteria", criteriaTitle: "What to Look for in a Fireflies.ai Alternative", criteriaSubtitle: "The right alternative depends on your workflow. Here\u2019s what to prioritize.",
    criteria1Title: "No intrusive meeting bot", criteria1Desc: "Look for tools that work without joining your meetings as a visible participant. Record natively or upload audio after.",
    criteria2Title: "Any audio source", criteria2Desc: "The best alternative handles meetings, voice notes, lectures, and uploaded files equally well.",
    criteria3Title: "Multiple output formats", criteria3Desc: "Beyond transcripts and summaries \u2014 look for tasks, action plans, reports, and follow-up messages.",
    criteria4Title: "Speaker detection", criteria4Desc: "Knowing who said what matters for accountability. Make sure it works accurately across different audio sources.",
    criteria5Title: "Simple workflow", criteria5Desc: "No bot configuration, no calendar sync required. Record or upload, and get results instantly.",
    criteria6Title: "Better value", criteria6Desc: "Compare outputs per dollar. More formats and broader audio support at a lower price is the goal.",
    topPicks: "Top picks for 2026", bestAltsTitle: "Best Fireflies.ai Alternatives",
    bestFor: "Best for:", seeHow: "See how Sythio works", compareSythioVs: "Compare Sythio vs",
    sythioTagline: "AI audio intelligence that turns any recording into 9 structured outputs.", sythioBestFor: "Anyone who needs structured outputs from any audio source \u2014 not just meetings. Tasks, action plans, reports, follow-ups, and more from a single recording.",
    sythioF1: "9 structured output formats from one recording", sythioF2: "Works with any audio source \u2014 no meeting bot required", sythioF3: "Speaker detection with task attribution", sythioF4: "Action plans, executive reports, follow-up messages", sythioF5: "Clean text, key points, and ideas extraction",
    otterTagline: "AI-powered transcription tool with real-time meeting captions and searchable transcripts.", otterBestFor: "Users who prioritize accurate, real-time transcription with a searchable library.", otterF1: "Real-time transcription and live captions", otterF2: "Searchable transcript library", otterF3: "Speaker identification and labeling",
    tldvTagline: "Video meeting recorder with AI-powered highlights and summaries.", tldvBestFor: "Sales and product teams who record video calls and need timestamped highlights.", tldvF1: "Records Google Meet, Zoom, and Teams", tldvF2: "AI-generated summaries and highlights", tldvF3: "Clips and reels from meetings",
    nottaTagline: "Real-time transcription tool with multi-language support.", nottaBestFor: "Users who need fast, accurate transcription across multiple languages.", nottaF1: "Real-time transcription in 100+ languages", nottaF2: "Audio and video file transcription", nottaF3: "Calendar integrations for meetings",
    audiopenTagline: "Turns rambling voice notes into polished text.", audiopenBestFor: "Individual creators and thinkers who capture ideas via voice notes.", audiopenF1: "Voice-to-polished-text conversion", audiopenF2: "Multiple writing styles and tones", audiopenF3: "Simple, distraction-free interface",
    quickCompTitle: "Quick Comparison", quickCompSubtitle: "How the top Fireflies.ai alternatives stack up at a glance.", thFeature: "Feature",
    "row.primaryOutput": "Primary output", "row.audioFirst": "Audio-first design", "row.noBot": "No meeting bot needed", "row.taskExtraction": "Task extraction", "row.actionPlans": "Action plans", "row.speakerDetection": "Speaker detection", "row.voiceNotes": "Voice notes support", "row.freePlan": "Free plan", "row.startingPrice": "Starting price",
    ctaTitle: "Audio intelligence without the meeting bot",
    ctaSubtitle: "Try Sythio free and get 9 structured outputs from any audio source \u2014 no intrusive bots, no meeting-only limitations.",
    startFree: "Start Free", exploreFeatures: "Explore Features", freePlan: "Free plan includes 5 recordings per month. No credit card needed.",
  },
  es: {
    label: "Alternativas", title: "\u00bfBuscas una alternativa a Fireflies.ai?",
    subtitle: "Fireflies.ai es un asistente de reuniones popular, pero su enfoque basado en bot no es para todos. Ya sea que necesites soporte de audio m\u00e1s amplio, m\u00e1s formatos o un flujo de trabajo menos intrusivo, aqu\u00ed est\u00e1n las mejores alternativas a Fireflies.ai en 2026.",
    trySythio: "Prueba Sythio Gratis", compareBtn: "Sythio vs Fireflies.ai",
    frustrations: "Frustraciones comunes", whySwitchTitle: "Por Qu\u00e9 la Gente Cambia de Fireflies.ai",
    switch1Title: "El bot de reuniones se siente intrusivo", switch1Desc: "Fireflies.ai se une a las reuniones como un participante bot visible. Muchos usuarios reportan que clientes y colegas lo encuentran inc\u00f3modo o poco profesional, especialmente en conversaciones sensibles o reuniones peque\u00f1as.",
    switch2Title: "Sin soporte para notas de voz o audio fuera de reuniones", switch2Desc: "Fireflies est\u00e1 dise\u00f1ado para reuniones programadas. Si quieres capturar notas de voz en movimiento, transcribir una clase o procesar un archivo de audio subido, necesitas una herramienta diferente.",
    switch3Title: "Formatos de salida limitados", switch3Desc: "Fireflies genera transcripciones y res\u00famenes b\u00e1sicos. Pero si necesitas planes de acci\u00f3n estructurados, informes ejecutivos, mensajes de seguimiento o notas de estudio, debes crearlos t\u00fa mismo.",
    switch4Title: "Precio alto para funcionalidad enfocada", switch4Desc: "A $18/mes por el plan Pro, Fireflies.ai cobra un premium por funciones centradas en reuniones. Alternativas que ofrecen m\u00e1s formatos de fuentes de audio m\u00e1s amplias pueden ofrecer mejor valor.",
    criteriaLabel: "Criterios de evaluaci\u00f3n", criteriaTitle: "Qu\u00e9 Buscar en una Alternativa a Fireflies.ai", criteriaSubtitle: "La alternativa correcta depende de tu flujo de trabajo. Esto es lo que debes priorizar.",
    criteria1Title: "Sin bot de reuniones intrusivo", criteria1Desc: "Busca herramientas que funcionen sin unirse a tus reuniones como participante visible. Graba nativamente o sube audio despu\u00e9s.",
    criteria2Title: "Cualquier fuente de audio", criteria2Desc: "La mejor alternativa maneja reuniones, notas de voz, clases y archivos subidos igualmente bien.",
    criteria3Title: "M\u00faltiples formatos de salida", criteria3Desc: "M\u00e1s all\u00e1 de transcripciones y res\u00famenes \u2014 busca tareas, planes de acci\u00f3n, informes y mensajes de seguimiento.",
    criteria4Title: "Detecci\u00f3n de hablantes", criteria4Desc: "Saber qui\u00e9n dijo qu\u00e9 importa para la responsabilidad. Aseg\u00farate de que funcione con precisi\u00f3n en diferentes fuentes de audio.",
    criteria5Title: "Flujo de trabajo simple", criteria5Desc: "Sin configuraci\u00f3n de bot, sin sincronizaci\u00f3n de calendario necesaria. Graba o sube, y obt\u00e9n resultados al instante.",
    criteria6Title: "Mejor valor", criteria6Desc: "Compara resultados por d\u00f3lar. M\u00e1s formatos y soporte de audio m\u00e1s amplio a menor precio es el objetivo.",
    topPicks: "Mejores opciones para 2026", bestAltsTitle: "Mejores Alternativas a Fireflies.ai",
    bestFor: "Mejor para:", seeHow: "Ver c\u00f3mo funciona Sythio", compareSythioVs: "Comparar Sythio vs",
    sythioTagline: "Inteligencia de audio IA que convierte cualquier grabaci\u00f3n en 9 resultados estructurados.", sythioBestFor: "Cualquier persona que necesite resultados estructurados de cualquier fuente de audio \u2014 no solo reuniones. Tareas, planes de acci\u00f3n, informes, seguimientos y m\u00e1s de una sola grabaci\u00f3n.",
    sythioF1: "9 formatos de resultados de una grabaci\u00f3n", sythioF2: "Funciona con cualquier fuente de audio \u2014 sin bot necesario", sythioF3: "Detecci\u00f3n de hablantes con atribuci\u00f3n de tareas", sythioF4: "Planes de acci\u00f3n, informes ejecutivos, mensajes de seguimiento", sythioF5: "Texto limpio, puntos clave y extracci\u00f3n de ideas",
    otterTagline: "Herramienta de transcripci\u00f3n con subt\u00edtulos en tiempo real y transcripciones buscables.", otterBestFor: "Usuarios que priorizan transcripci\u00f3n precisa en tiempo real con biblioteca buscable.", otterF1: "Transcripci\u00f3n en tiempo real y subt\u00edtulos en vivo", otterF2: "Biblioteca de transcripciones buscable", otterF3: "Identificaci\u00f3n y etiquetado de hablantes",
    tldvTagline: "Grabador de videoconferencias con destacados y res\u00famenes IA.", tldvBestFor: "Equipos de ventas y producto que graban videollamadas y necesitan destacados con marcas de tiempo.", tldvF1: "Graba Google Meet, Zoom y Teams", tldvF2: "Res\u00famenes y destacados generados por IA", tldvF3: "Clips y reels de reuniones",
    nottaTagline: "Herramienta de transcripci\u00f3n en tiempo real con soporte multiling\u00fce.", nottaBestFor: "Usuarios que necesitan transcripci\u00f3n r\u00e1pida y precisa en m\u00faltiples idiomas.", nottaF1: "Transcripci\u00f3n en tiempo real en 100+ idiomas", nottaF2: "Transcripci\u00f3n de archivos de audio y video", nottaF3: "Integraciones de calendario para reuniones",
    audiopenTagline: "Convierte notas de voz desordenadas en texto pulido.", audiopenBestFor: "Creadores y pensadores individuales que capturan ideas con notas de voz.", audiopenF1: "Conversi\u00f3n de voz a texto pulido", audiopenF2: "M\u00faltiples estilos y tonos de escritura", audiopenF3: "Interfaz simple y sin distracciones",
    quickCompTitle: "Comparaci\u00f3n R\u00e1pida", quickCompSubtitle: "C\u00f3mo se comparan las mejores alternativas a Fireflies.ai de un vistazo.", thFeature: "Caracter\u00edstica",
    "row.primaryOutput": "Resultado principal", "row.audioFirst": "Dise\u00f1o audio-primero", "row.noBot": "Sin bot de reuniones", "row.taskExtraction": "Extracci\u00f3n de tareas", "row.actionPlans": "Planes de acci\u00f3n", "row.speakerDetection": "Detecci\u00f3n de hablantes", "row.voiceNotes": "Soporte notas de voz", "row.freePlan": "Plan gratuito", "row.startingPrice": "Precio inicial",
    ctaTitle: "Inteligencia de audio sin el bot de reuniones",
    ctaSubtitle: "Prueba Sythio gratis y obt\u00e9n 9 resultados estructurados de cualquier fuente de audio \u2014 sin bots intrusivos, sin limitaciones de solo reuniones.",
    startFree: "Comenzar Gratis", exploreFeatures: "Explorar Funciones", freePlan: "El plan gratuito incluye 5 grabaciones al mes. Sin tarjeta de cr\u00e9dito.",
  },
  fr: {
    label: "Alternatives", title: "Vous cherchez une alternative \u00e0 Fireflies.ai ?",
    subtitle: "Fireflies.ai est un assistant de r\u00e9union populaire, mais son approche par bot ne convient pas \u00e0 tous. Que vous ayez besoin d\u2019un support audio plus large, de plus de formats ou d\u2019un flux de travail moins intrusif, voici les meilleures alternatives \u00e0 Fireflies.ai en 2026.",
    trySythio: "Essayer Sythio Gratuitement", compareBtn: "Sythio vs Fireflies.ai",
    frustrations: "Frustrations courantes", whySwitchTitle: "Pourquoi les Gens Quittent Fireflies.ai",
    switch1Title: "Le bot de r\u00e9union est intrusif", switch1Desc: "Fireflies.ai rejoint les r\u00e9unions en tant que participant bot visible. Beaucoup d\u2019utilisateurs rapportent que clients et coll\u00e8gues trouvent cela g\u00eanant ou peu professionnel.",
    switch2Title: "Pas de support notes vocales ou audio hors r\u00e9union", switch2Desc: "Fireflies est con\u00e7u pour les r\u00e9unions planifi\u00e9es. Si vous voulez capturer des notes vocales, transcrire un cours ou traiter un fichier audio, vous avez besoin d\u2019un autre outil.",
    switch3Title: "Formats de sortie limit\u00e9s", switch3Desc: "Fireflies g\u00e9n\u00e8re des transcriptions et r\u00e9sum\u00e9s basiques. Mais si vous avez besoin de plans d\u2019action structur\u00e9s, rapports ex\u00e9cutifs, messages de suivi ou notes d\u2019\u00e9tude, vous devez les cr\u00e9er vous-m\u00eame.",
    switch4Title: "Prix \u00e9lev\u00e9 pour des fonctionnalit\u00e9s cibl\u00e9es", switch4Desc: "\u00c0 18 $/mois pour le plan Pro, Fireflies.ai facture un premium pour des fonctionnalit\u00e9s centr\u00e9es sur les r\u00e9unions. Des alternatives offrant plus de formats peuvent offrir un meilleur rapport qualit\u00e9-prix.",
    criteriaLabel: "Crit\u00e8res d\u2019\u00e9valuation", criteriaTitle: "Que Chercher dans une Alternative \u00e0 Fireflies.ai", criteriaSubtitle: "La bonne alternative d\u00e9pend de votre flux de travail. Voici ce qu\u2019il faut prioriser.",
    criteria1Title: "Pas de bot intrusif", criteria1Desc: "Cherchez des outils qui fonctionnent sans rejoindre vos r\u00e9unions comme participant visible.",
    criteria2Title: "Toute source audio", criteria2Desc: "La meilleure alternative g\u00e8re r\u00e9unions, notes vocales, cours et fichiers t\u00e9l\u00e9vers\u00e9s aussi bien.",
    criteria3Title: "Formats de sortie multiples", criteria3Desc: "Au-del\u00e0 des transcriptions et r\u00e9sum\u00e9s \u2014 cherchez t\u00e2ches, plans d\u2019action, rapports et messages de suivi.",
    criteria4Title: "D\u00e9tection des intervenants", criteria4Desc: "Savoir qui a dit quoi compte pour la responsabilit\u00e9. Assurez-vous que \u00e7a fonctionne avec diff\u00e9rentes sources audio.",
    criteria5Title: "Flux de travail simple", criteria5Desc: "Pas de configuration de bot, pas de synchronisation calendrier requise. Enregistrez ou t\u00e9l\u00e9versez, obtenez des r\u00e9sultats instantan\u00e9ment.",
    criteria6Title: "Meilleure valeur", criteria6Desc: "Comparez les r\u00e9sultats par dollar. Plus de formats et un support audio plus large \u00e0 un prix inf\u00e9rieur est l\u2019objectif.",
    topPicks: "Meilleurs choix pour 2026", bestAltsTitle: "Meilleures Alternatives \u00e0 Fireflies.ai",
    bestFor: "Id\u00e9al pour :", seeHow: "Voir comment Sythio fonctionne", compareSythioVs: "Comparer Sythio vs",
    sythioTagline: "Intelligence audio IA qui transforme tout enregistrement en 9 r\u00e9sultats structur\u00e9s.", sythioBestFor: "Toute personne ayant besoin de r\u00e9sultats structur\u00e9s de toute source audio \u2014 pas seulement les r\u00e9unions.",
    sythioF1: "9 formats de r\u00e9sultats d\u2019un enregistrement", sythioF2: "Fonctionne avec toute source audio \u2014 sans bot", sythioF3: "D\u00e9tection intervenants avec attribution t\u00e2ches", sythioF4: "Plans d\u2019action, rapports ex\u00e9cutifs, messages de suivi", sythioF5: "Texte nettoy\u00e9, points cl\u00e9s et extraction d\u2019id\u00e9es",
    otterTagline: "Outil de transcription IA avec sous-titres en temps r\u00e9el et transcriptions consultables.", otterBestFor: "Utilisateurs qui priorisent la transcription pr\u00e9cise en temps r\u00e9el.", otterF1: "Transcription en temps r\u00e9el et sous-titres en direct", otterF2: "Biblioth\u00e8que de transcriptions consultable", otterF3: "Identification et \u00e9tiquetage des intervenants",
    tldvTagline: "Enregistreur de visioconf\u00e9rences avec temps forts et r\u00e9sum\u00e9s IA.", tldvBestFor: "\u00c9quipes commerciales et produit qui enregistrent des appels vid\u00e9o.", tldvF1: "Enregistre Google Meet, Zoom et Teams", tldvF2: "R\u00e9sum\u00e9s et temps forts g\u00e9n\u00e9r\u00e9s par IA", tldvF3: "Clips et reels de r\u00e9unions",
    nottaTagline: "Outil de transcription en temps r\u00e9el avec support multilingue.", nottaBestFor: "Utilisateurs ayant besoin de transcription rapide et pr\u00e9cise dans plusieurs langues.", nottaF1: "Transcription en temps r\u00e9el dans 100+ langues", nottaF2: "Transcription de fichiers audio et vid\u00e9o", nottaF3: "Int\u00e9grations calendrier pour les r\u00e9unions",
    audiopenTagline: "Transforme les m\u00e9mos vocaux d\u00e9cousus en texte soign\u00e9.", audiopenBestFor: "Cr\u00e9ateurs et penseurs individuels qui capturent des id\u00e9es par la voix.", audiopenF1: "Conversion voix vers texte soign\u00e9", audiopenF2: "Multiples styles et tons d\u2019\u00e9criture", audiopenF3: "Interface simple et sans distractions",
    quickCompTitle: "Comparaison Rapide", quickCompSubtitle: "Comment les meilleures alternatives \u00e0 Fireflies.ai se comparent en un coup d\u2019\u0153il.", thFeature: "Fonctionnalit\u00e9",
    "row.primaryOutput": "R\u00e9sultat principal", "row.audioFirst": "Conception audio-first", "row.noBot": "Sans bot de r\u00e9union", "row.taskExtraction": "Extraction de t\u00e2ches", "row.actionPlans": "Plans d\u2019action", "row.speakerDetection": "D\u00e9tection intervenants", "row.voiceNotes": "Support notes vocales", "row.freePlan": "Plan gratuit", "row.startingPrice": "Prix de d\u00e9part",
    ctaTitle: "Intelligence audio sans le bot de r\u00e9union",
    ctaSubtitle: "Essayez Sythio gratuitement et obtenez 9 r\u00e9sultats structur\u00e9s de toute source audio \u2014 sans bots intrusifs, sans limitations aux r\u00e9unions.",
    startFree: "Commencer Gratuitement", exploreFeatures: "Explorer les Fonctionnalit\u00e9s", freePlan: "Le plan gratuit inclut 5 enregistrements par mois. Sans carte de cr\u00e9dit.",
  },
  pt: {
    label: "Alternativas", title: "Procurando uma alternativa ao Fireflies.ai?",
    subtitle: "Fireflies.ai \u00e9 um assistente de reuni\u00f5es popular, mas sua abordagem baseada em bot n\u00e3o \u00e9 para todos. Se voc\u00ea precisa de suporte de \u00e1udio mais amplo, mais formatos ou um fluxo menos intrusivo, aqui est\u00e3o as melhores alternativas ao Fireflies.ai em 2026.",
    trySythio: "Experimente Sythio Gr\u00e1tis", compareBtn: "Sythio vs Fireflies.ai",
    frustrations: "Frustra\u00e7\u00f5es comuns", whySwitchTitle: "Por Que as Pessoas Trocam o Fireflies.ai",
    switch1Title: "O bot de reuni\u00f5es parece intrusivo", switch1Desc: "Fireflies.ai entra nas reuni\u00f5es como participante bot vis\u00edvel. Muitos usu\u00e1rios relatam que clientes e colegas acham isso estranho ou pouco profissional.",
    switch2Title: "Sem suporte para notas de voz ou \u00e1udio fora de reuni\u00f5es", switch2Desc: "Fireflies \u00e9 constru\u00eddo para reuni\u00f5es agendadas. Se voc\u00ea quer capturar notas de voz, transcrever uma aula ou processar um arquivo de \u00e1udio, precisa de outra ferramenta.",
    switch3Title: "Formatos de sa\u00edda limitados", switch3Desc: "Fireflies gera transcri\u00e7\u00f5es e resumos b\u00e1sicos. Mas se voc\u00ea precisa de planos de a\u00e7\u00e3o estruturados, relat\u00f3rios executivos, mensagens de acompanhamento ou notas de estudo, tem que cri\u00e1-los sozinho.",
    switch4Title: "Pre\u00e7o alto para funcionalidade focada", switch4Desc: "A $18/m\u00eas pelo plano Pro, Fireflies.ai cobra um premium por recursos centrados em reuni\u00f5es. Alternativas que oferecem mais formatos de fontes de \u00e1udio mais amplas podem entregar melhor valor.",
    criteriaLabel: "Crit\u00e9rios de avalia\u00e7\u00e3o", criteriaTitle: "O Que Buscar em uma Alternativa ao Fireflies.ai", criteriaSubtitle: "A alternativa certa depende do seu fluxo de trabalho. Isto \u00e9 o que priorizar.",
    criteria1Title: "Sem bot de reuni\u00f5es intrusivo", criteria1Desc: "Busque ferramentas que funcionem sem entrar nas suas reuni\u00f5es como participante vis\u00edvel.",
    criteria2Title: "Qualquer fonte de \u00e1udio", criteria2Desc: "A melhor alternativa lida com reuni\u00f5es, notas de voz, aulas e arquivos enviados igualmente bem.",
    criteria3Title: "M\u00faltiplos formatos de sa\u00edda", criteria3Desc: "Al\u00e9m de transcri\u00e7\u00f5es e resumos \u2014 busque tarefas, planos de a\u00e7\u00e3o, relat\u00f3rios e mensagens de acompanhamento.",
    criteria4Title: "Detec\u00e7\u00e3o de falantes", criteria4Desc: "Saber quem disse o qu\u00ea importa para responsabilidade. Certifique-se de que funciona com precis\u00e3o em diferentes fontes de \u00e1udio.",
    criteria5Title: "Fluxo de trabalho simples", criteria5Desc: "Sem configura\u00e7\u00e3o de bot, sem sincroniza\u00e7\u00e3o de calend\u00e1rio necess\u00e1ria. Grave ou envie, e obtenha resultados instantaneamente.",
    criteria6Title: "Melhor valor", criteria6Desc: "Compare resultados por d\u00f3lar. Mais formatos e suporte de \u00e1udio mais amplo a menor pre\u00e7o \u00e9 o objetivo.",
    topPicks: "Melhores op\u00e7\u00f5es para 2026", bestAltsTitle: "Melhores Alternativas ao Fireflies.ai",
    bestFor: "Melhor para:", seeHow: "Veja como Sythio funciona", compareSythioVs: "Comparar Sythio vs",
    sythioTagline: "Intelig\u00eancia de \u00e1udio IA que transforma qualquer grava\u00e7\u00e3o em 9 resultados estruturados.", sythioBestFor: "Qualquer pessoa que precise de resultados estruturados de qualquer fonte de \u00e1udio \u2014 n\u00e3o apenas reuni\u00f5es.",
    sythioF1: "9 formatos de resultados de uma grava\u00e7\u00e3o", sythioF2: "Funciona com qualquer fonte de \u00e1udio \u2014 sem bot", sythioF3: "Detec\u00e7\u00e3o de falantes com atribui\u00e7\u00e3o de tarefas", sythioF4: "Planos de a\u00e7\u00e3o, relat\u00f3rios executivos, mensagens de acompanhamento", sythioF5: "Texto limpo, pontos-chave e extra\u00e7\u00e3o de ideias",
    otterTagline: "Ferramenta de transcri\u00e7\u00e3o IA com legendas em tempo real e transcri\u00e7\u00f5es pesquis\u00e1veis.", otterBestFor: "Usu\u00e1rios que priorizam transcri\u00e7\u00e3o precisa em tempo real com biblioteca pesquis\u00e1vel.", otterF1: "Transcri\u00e7\u00e3o em tempo real e legendas ao vivo", otterF2: "Biblioteca de transcri\u00e7\u00f5es pesquis\u00e1vel", otterF3: "Identifica\u00e7\u00e3o e rotulagem de falantes",
    tldvTagline: "Gravador de videoconfer\u00eancias com destaques e resumos IA.", tldvBestFor: "Equipes de vendas e produto que gravam videochamadas e precisam de destaques com marcas de tempo.", tldvF1: "Grava Google Meet, Zoom e Teams", tldvF2: "Resumos e destaques gerados por IA", tldvF3: "Clips e reels de reuni\u00f5es",
    nottaTagline: "Ferramenta de transcri\u00e7\u00e3o em tempo real com suporte multilingual.", nottaBestFor: "Usu\u00e1rios que precisam de transcri\u00e7\u00e3o r\u00e1pida e precisa em m\u00faltiplos idiomas.", nottaF1: "Transcri\u00e7\u00e3o em tempo real em 100+ idiomas", nottaF2: "Transcri\u00e7\u00e3o de arquivos de \u00e1udio e v\u00eddeo", nottaF3: "Integra\u00e7\u00f5es de calend\u00e1rio para reuni\u00f5es",
    audiopenTagline: "Transforma notas de voz desorganizadas em texto polido.", audiopenBestFor: "Criadores e pensadores individuais que capturam ideias por notas de voz.", audiopenF1: "Convers\u00e3o de voz para texto polido", audiopenF2: "M\u00faltiplos estilos e tons de escrita", audiopenF3: "Interface simples e sem distra\u00e7\u00f5es",
    quickCompTitle: "Compara\u00e7\u00e3o R\u00e1pida", quickCompSubtitle: "Como as melhores alternativas ao Fireflies.ai se comparam de relance.", thFeature: "Recurso",
    "row.primaryOutput": "Resultado principal", "row.audioFirst": "Design \u00e1udio-primeiro", "row.noBot": "Sem bot de reuni\u00f5es", "row.taskExtraction": "Extra\u00e7\u00e3o de tarefas", "row.actionPlans": "Planos de a\u00e7\u00e3o", "row.speakerDetection": "Detec\u00e7\u00e3o de falantes", "row.voiceNotes": "Suporte notas de voz", "row.freePlan": "Plano gratuito", "row.startingPrice": "Pre\u00e7o inicial",
    ctaTitle: "Intelig\u00eancia de \u00e1udio sem o bot de reuni\u00f5es",
    ctaSubtitle: "Experimente Sythio gr\u00e1tis e obtenha 9 resultados estruturados de qualquer fonte de \u00e1udio \u2014 sem bots intrusivos, sem limita\u00e7\u00f5es de apenas reuni\u00f5es.",
    startFree: "Comece Gr\u00e1tis", exploreFeatures: "Explorar Recursos", freePlan: "O plano gratuito inclui 5 grava\u00e7\u00f5es por m\u00eas. Sem cart\u00e3o de cr\u00e9dito.",
  },
  it: {
    label: "Alternative", title: "Cerchi un\u2019alternativa a Fireflies.ai?",
    subtitle: "Fireflies.ai \u00e8 un assistente riunioni popolare, ma il suo approccio basato su bot non \u00e8 per tutti. Se hai bisogno di supporto audio pi\u00f9 ampio, pi\u00f9 formati o un flusso meno intrusivo, ecco le migliori alternative a Fireflies.ai nel 2026.",
    trySythio: "Prova Sythio Gratis", compareBtn: "Sythio vs Fireflies.ai",
    frustrations: "Frustrazioni comuni", whySwitchTitle: "Perch\u00e9 le Persone Lasciano Fireflies.ai",
    switch1Title: "Il bot di riunione \u00e8 invadente", switch1Desc: "Fireflies.ai partecipa alle riunioni come bot visibile. Molti utenti segnalano che clienti e colleghi lo trovano imbarazzante o poco professionale.",
    switch2Title: "Nessun supporto per note vocali o audio extra-riunione", switch2Desc: "Fireflies \u00e8 costruito per riunioni programmate. Se vuoi catturare note vocali, trascrivere una lezione o elaborare un file audio caricato, hai bisogno di un altro strumento.",
    switch3Title: "Formati di output limitati", switch3Desc: "Fireflies genera trascrizioni e riassunti base. Ma se hai bisogno di piani d\u2019azione strutturati, report esecutivi, messaggi di follow-up o note di studio, devi crearli da solo.",
    switch4Title: "Prezzo alto per funzionalit\u00e0 mirata", switch4Desc: "A $18/mese per il piano Pro, Fireflies.ai ha un prezzo premium per funzionalit\u00e0 centrate sulle riunioni. Alternative che offrono pi\u00f9 formati da fonti audio pi\u00f9 ampie possono offrire un valore migliore.",
    criteriaLabel: "Criteri di valutazione", criteriaTitle: "Cosa Cercare in un\u2019Alternativa a Fireflies.ai", criteriaSubtitle: "L\u2019alternativa giusta dipende dal tuo flusso di lavoro. Ecco cosa dare priorit\u00e0.",
    criteria1Title: "Nessun bot invadente", criteria1Desc: "Cerca strumenti che funzionano senza partecipare alle tue riunioni come partecipante visibile.",
    criteria2Title: "Qualsiasi fonte audio", criteria2Desc: "La migliore alternativa gestisce riunioni, note vocali, lezioni e file caricati ugualmente bene.",
    criteria3Title: "Formati di output multipli", criteria3Desc: "Oltre trascrizioni e riassunti \u2014 cerca attivit\u00e0, piani d\u2019azione, report e messaggi di follow-up.",
    criteria4Title: "Rilevamento parlanti", criteria4Desc: "Sapere chi ha detto cosa conta per la responsabilit\u00e0. Assicurati che funzioni con precisione su diverse fonti audio.",
    criteria5Title: "Flusso di lavoro semplice", criteria5Desc: "Nessuna configurazione bot, nessuna sincronizzazione calendario richiesta. Registra o carica, ottieni risultati istantaneamente.",
    criteria6Title: "Miglior valore", criteria6Desc: "Confronta risultati per dollaro. Pi\u00f9 formati e supporto audio pi\u00f9 ampio a prezzo inferiore \u00e8 l\u2019obiettivo.",
    topPicks: "Migliori scelte per il 2026", bestAltsTitle: "Migliori Alternative a Fireflies.ai",
    bestFor: "Ideale per:", seeHow: "Scopri come funziona Sythio", compareSythioVs: "Confronta Sythio vs",
    sythioTagline: "Intelligenza audio IA che trasforma qualsiasi registrazione in 9 risultati strutturati.", sythioBestFor: "Chiunque abbia bisogno di risultati strutturati da qualsiasi fonte audio \u2014 non solo riunioni.",
    sythioF1: "9 formati di risultati da una registrazione", sythioF2: "Funziona con qualsiasi fonte audio \u2014 senza bot", sythioF3: "Rilevamento parlanti con attribuzione attivit\u00e0", sythioF4: "Piani d\u2019azione, report esecutivi, messaggi di follow-up", sythioF5: "Testo pulito, punti chiave ed estrazione idee",
    otterTagline: "Strumento trascrizione IA con sottotitoli in tempo reale e trascrizioni ricercabili.", otterBestFor: "Utenti che danno priorit\u00e0 alla trascrizione precisa in tempo reale con libreria ricercabile.", otterF1: "Trascrizione in tempo reale e sottotitoli in diretta", otterF2: "Libreria trascrizioni ricercabile", otterF3: "Identificazione ed etichettatura parlanti",
    tldvTagline: "Registratore videoconferenze con punti salienti e riassunti IA.", tldvBestFor: "Team vendite e prodotto che registrano videochiamate.", tldvF1: "Registra Google Meet, Zoom e Teams", tldvF2: "Riassunti e punti salienti generati dall\u2019IA", tldvF3: "Clip e reel dalle riunioni",
    nottaTagline: "Strumento di trascrizione in tempo reale con supporto multilingue.", nottaBestFor: "Utenti che hanno bisogno di trascrizione rapida e precisa in pi\u00f9 lingue.", nottaF1: "Trascrizione in tempo reale in 100+ lingue", nottaF2: "Trascrizione file audio e video", nottaF3: "Integrazioni calendario per riunioni",
    audiopenTagline: "Trasforma memo vocali disordinati in testo curato.", audiopenBestFor: "Creatori e pensatori individuali che catturano idee con note vocali.", audiopenF1: "Conversione voce-testo curato", audiopenF2: "Molteplici stili e toni di scrittura", audiopenF3: "Interfaccia semplice e senza distrazioni",
    quickCompTitle: "Confronto Rapido", quickCompSubtitle: "Come si confrontano le migliori alternative a Fireflies.ai a colpo d\u2019occhio.", thFeature: "Funzionalit\u00e0",
    "row.primaryOutput": "Risultato principale", "row.audioFirst": "Design audio-first", "row.noBot": "Senza bot riunione", "row.taskExtraction": "Estrazione attivit\u00e0", "row.actionPlans": "Piani d\u2019azione", "row.speakerDetection": "Rilevamento parlanti", "row.voiceNotes": "Supporto note vocali", "row.freePlan": "Piano gratuito", "row.startingPrice": "Prezzo iniziale",
    ctaTitle: "Intelligenza audio senza il bot di riunione",
    ctaSubtitle: "Prova Sythio gratis e ottieni 9 risultati strutturati da qualsiasi fonte audio \u2014 senza bot invadenti, senza limitazioni alle sole riunioni.",
    startFree: "Inizia Gratis", exploreFeatures: "Esplora le Funzionalit\u00e0", freePlan: "Il piano gratuito include 5 registrazioni al mese. Nessuna carta di credito richiesta.",
  },
};

export default function FirefliesAlternativesPage() {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;

  const alternatives = [
    { rank: 1, name: "Sythio", tagline: c.sythioTagline, bestFor: c.sythioBestFor, pricing: "Free (5 recordings/mo) | Pro $15/mo", compareHref: "/product", highlighted: true, features: [c.sythioF1, c.sythioF2, c.sythioF3, c.sythioF4, c.sythioF5] },
    { rank: 2, name: "Otter.ai", tagline: c.otterTagline, bestFor: c.otterBestFor, pricing: "Free (limited) | Pro $16.99/mo", compareHref: "/compare/otter", highlighted: false, features: [c.otterF1, c.otterF2, c.otterF3] },
    { rank: 3, name: "tl;dv", tagline: c.tldvTagline, bestFor: c.tldvBestFor, pricing: "Free (limited) | Pro $20/mo", compareHref: "/compare/tldv", highlighted: false, features: [c.tldvF1, c.tldvF2, c.tldvF3] },
    { rank: 4, name: "Notta", tagline: c.nottaTagline, bestFor: c.nottaBestFor, pricing: "Free (limited) | Pro $14.99/mo", compareHref: null, highlighted: false, features: [c.nottaF1, c.nottaF2, c.nottaF3] },
    { rank: 5, name: "AudioPen", tagline: c.audiopenTagline, bestFor: c.audiopenBestFor, pricing: "Free (limited) | Prime $99/year", compareHref: null, highlighted: false, features: [c.audiopenF1, c.audiopenF2, c.audiopenF3] },
  ];

  const comparisonRows = [
    { feature: c["row.primaryOutput"], sythio: "9 structured formats", otter: "Transcript + summary", tldv: "Video highlights", notta: "Transcript", audiopen: "Polished text" },
    { feature: c["row.audioFirst"], sythio: "\u2713", otter: "Meeting-focused", tldv: "Video-only", notta: "\u2713", audiopen: "\u2713" },
    { feature: c["row.noBot"], sythio: "\u2713", otter: "\u2713", tldv: "\u2014", notta: "\u2713", audiopen: "\u2713" },
    { feature: c["row.taskExtraction"], sythio: "\u2713", otter: "\u2014", tldv: "\u2014", notta: "\u2014", audiopen: "\u2014" },
    { feature: c["row.actionPlans"], sythio: "\u2713", otter: "\u2014", tldv: "\u2014", notta: "\u2014", audiopen: "\u2014" },
    { feature: c["row.speakerDetection"], sythio: "\u2713", otter: "\u2713", tldv: "\u2713", notta: "\u2713", audiopen: "\u2014" },
    { feature: c["row.voiceNotes"], sythio: "\u2713", otter: "\u2014", tldv: "\u2014", notta: "\u2713", audiopen: "\u2713" },
    { feature: c["row.freePlan"], sythio: "5 recordings/mo", otter: "Limited minutes", tldv: "Limited recordings", notta: "Limited minutes", audiopen: "Limited notes" },
    { feature: c["row.startingPrice"], sythio: "$15/mo", otter: "$16.99/mo", tldv: "$20/mo", notta: "$14.99/mo", audiopen: "$99/year" },
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
          <Link href="/compare/fireflies" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{c.compareBtn}</Link>
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
          <thead><tr className="border-b border-border-light"><th className="text-left p-4 text-sm font-semibold text-foreground">{c.thFeature}</th><th className="text-center p-4 text-sm font-semibold text-foreground">Sythio</th><th className="text-center p-4 text-sm font-semibold text-muted">Otter.ai</th><th className="text-center p-4 text-sm font-semibold text-muted">tl;dv</th><th className="text-center p-4 text-sm font-semibold text-muted">Notta</th><th className="text-center p-4 text-sm font-semibold text-muted">AudioPen</th></tr></thead>
          <tbody>{comparisonRows.map((row)=>(<tr key={row.feature} className="border-b border-border-light last:border-0"><td className="p-4 text-sm text-muted">{row.feature}</td><td className="p-4 text-center text-sm text-foreground">{row.sythio}</td><td className="p-4 text-center text-sm text-muted">{row.otter}</td><td className="p-4 text-center text-sm text-muted">{row.tldv}</td><td className="p-4 text-center text-sm text-muted">{row.notta}</td><td className="p-4 text-center text-sm text-muted">{row.audiopen}</td></tr>))}</tbody>
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
