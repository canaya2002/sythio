"use client";

import Link from "next/link";
import { useLanguage } from "../components/i18n/language-context";
import type { Locale } from "../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Audio to Transcript",
    title: "Audio to Transcript — Fast, Accurate AI Speech to Text",
    subtitle:
      "Convert any audio recording into accurate, readable text with AI. Speaker detection identifies who said what. Then go beyond basic transcription — get summaries, tasks, action plans, and more from the same audio.",
    accuracyLabel: "Accurate Transcription",
    accuracyTitle: "Fast, Accurate Transcription You Can Trust",
    accuracySubtitle:
      "Sythio uses advanced AI to transcribe audio with high accuracy across accents, environments, and audio quality levels. No manual cleanup needed.",
    speedTitle: "Seconds, Not Hours",
    speedDesc:
      "A 60-minute recording is transcribed in seconds, not the hours it takes to do it manually. Spend your time on work that matters.",
    accuracyFeatTitle: "High Accuracy",
    accuracyFeatDesc:
      "Advanced AI models handle accents, background noise, overlapping speech, and technical terminology with consistently high accuracy.",
    formatsTitle: "Any Format",
    formatsDesc:
      "MP3, WAV, M4A, AAC, FLAC, OGG — upload any common audio format. No conversion needed. Just drop your file and get a transcript.",
    speakerLabel: "Speaker Detection",
    speakerTitle: "Who Said What — Automatically",
    speakerSubtitle:
      "When your recording has multiple speakers, Sythio identifies and labels each one. Every statement is attributed to the right person throughout the transcript.",
    speakerFeat1Title: "Automatic Detection",
    speakerFeat1Desc:
      "Speaker detection works automatically — no setup, no pre-registration of voices. Sythio distinguishes speakers from the audio itself.",
    speakerFeat2Title: "Clear Attribution",
    speakerFeat2Desc:
      "Each speaker is labeled consistently throughout the transcript. Quotes, statements, and key moments are connected to the correct person.",
    speakerFeat3Title: "Any Number of Speakers",
    speakerFeat3Desc:
      "Two people on a call or ten people in a meeting — speaker detection scales to match the recording. Every voice is tracked.",
    beyondLabel: "Beyond Transcription",
    beyondTitle: "Transcription Is Just the Start",
    beyondSubtitle:
      "Most tools stop at speech-to-text. Sythio goes further — the same audio that produces your transcript also generates 9 structured output formats. One recording, unlimited usefulness.",
    beyond1Title: "Summaries",
    beyond1Desc:
      "A concise overview of the recording — decisions, topics, and key takeaways distilled into a readable summary.",
    beyond2Title: "Tasks",
    beyond2Desc:
      "Every commitment and action item extracted, with owners attributed when speakers are detected.",
    beyond3Title: "Action Plans",
    beyond3Desc:
      "Structured, phased plans with priorities and responsibilities — built from the conversation.",
    beyond4Title: "Key Points",
    beyond4Desc:
      "The essential insights and conclusions, distilled into clear, scannable bullet points.",
    beyond5Title: "Reports",
    beyond5Desc:
      "Professional reports formatted and ready to share with stakeholders or teams.",
    beyond6Title: "Messages",
    beyond6Desc:
      "Follow-up messages and communications drafted from the recording content, ready to send.",
    beyond7Title: "Study Notes",
    beyond7Desc:
      "Organized notes structured for learning — headings, subpoints, and logical groupings.",
    beyond8Title: "Clean Text",
    beyond8Desc:
      "Polished, readable text with filler words removed and grammar corrected.",
    beyond9Title: "Ideas",
    beyond9Desc:
      "Individual ideas extracted and listed separately — brainstorms turned into actionable concepts.",
    supportedLabel: "Supported Formats",
    supportedTitle: "Works with Any Audio",
    supportedSubtitle:
      "Upload recordings in any common format. No conversion, no special software, no extra steps.",
    format1: "MP3 — The universal format. Works with any podcast, recording app, or download.",
    format2: "WAV — High-quality uncompressed audio. Full fidelity transcription.",
    format3: "M4A — Default format for iPhone voice memos and many recording apps.",
    format4: "AAC — Common in streaming, broadcasting, and video extracted audio.",
    format5: "FLAC — Lossless audio for maximum quality and accuracy.",
    format6: "OGG — Open format supported by many platforms and recording tools.",
    rel1Name: "AI Summaries",
    rel2Name: "Audio to Tasks",
    rel3Name: "Speaker Detection",
    rel4Name: "Clean Text",
    ctaTitle: "Stop Transcribing Manually. Start in Seconds.",
    ctaSubtitle:
      "Every recording becomes an accurate transcript — plus summaries, tasks, and 7 more output formats. All from the same audio.",
  },
  es: {
    label: "Audio a Transcripcion",
    title: "Audio a transcripcion — IA rapida y precisa de voz a texto",
    subtitle:
      "Convierte cualquier grabacion de audio en texto preciso y legible con IA. La deteccion de hablantes identifica quien dijo que. Luego ve mas alla de la transcripcion basica — obtiene resumenes, tareas, planes de accion y mas del mismo audio.",
    accuracyLabel: "Transcripcion precisa",
    accuracyTitle: "Transcripcion rapida y precisa en la que puedes confiar",
    accuracySubtitle:
      "Sythio usa IA avanzada para transcribir audio con alta precision en diferentes acentos, entornos y niveles de calidad de audio. Sin limpieza manual necesaria.",
    speedTitle: "Segundos, no horas",
    speedDesc:
      "Una grabacion de 60 minutos se transcribe en segundos, no en las horas que toma hacerlo manualmente. Dedica tu tiempo a trabajo que importa.",
    accuracyFeatTitle: "Alta precision",
    accuracyFeatDesc:
      "Modelos de IA avanzados manejan acentos, ruido de fondo, habla superpuesta y terminologia tecnica con precision consistentemente alta.",
    formatsTitle: "Cualquier formato",
    formatsDesc:
      "MP3, WAV, M4A, AAC, FLAC, OGG — sube cualquier formato de audio comun. Sin conversion necesaria. Solo arrastra tu archivo y obtiene una transcripcion.",
    speakerLabel: "Deteccion de hablantes",
    speakerTitle: "Quien dijo que — automaticamente",
    speakerSubtitle:
      "Cuando tu grabacion tiene multiples hablantes, Sythio identifica y etiqueta a cada uno. Cada declaracion se atribuye a la persona correcta en toda la transcripcion.",
    speakerFeat1Title: "Deteccion automatica",
    speakerFeat1Desc:
      "La deteccion de hablantes funciona automaticamente — sin configuracion, sin registro previo de voces. Sythio distingue a los hablantes del propio audio.",
    speakerFeat2Title: "Atribucion clara",
    speakerFeat2Desc:
      "Cada hablante esta etiquetado de forma consistente en toda la transcripcion. Citas, declaraciones y momentos clave se conectan con la persona correcta.",
    speakerFeat3Title: "Cualquier numero de hablantes",
    speakerFeat3Desc:
      "Dos personas en una llamada o diez en una reunion — la deteccion de hablantes se escala para coincidir con la grabacion. Cada voz es rastreada.",
    beyondLabel: "Mas alla de la transcripcion",
    beyondTitle: "La transcripcion es solo el comienzo",
    beyondSubtitle:
      "La mayoria de herramientas se detienen en voz a texto. Sythio va mas lejos — el mismo audio que produce tu transcripcion tambien genera 9 formatos de salida estructurados. Una grabacion, utilidad ilimitada.",
    beyond1Title: "Resumenes",
    beyond1Desc:
      "Una vision concisa de la grabacion — decisiones, temas y conclusiones clave destilados en un resumen legible.",
    beyond2Title: "Tareas",
    beyond2Desc:
      "Cada compromiso y elemento de accion extraido, con responsables atribuidos cuando se detectan hablantes.",
    beyond3Title: "Planes de accion",
    beyond3Desc:
      "Planes estructurados y por fases con prioridades y responsabilidades — construidos desde la conversacion.",
    beyond4Title: "Puntos clave",
    beyond4Desc:
      "Las ideas y conclusiones esenciales, destiladas en puntos claros y escaneables.",
    beyond5Title: "Informes",
    beyond5Desc:
      "Informes profesionales formateados y listos para compartir con partes interesadas o equipos.",
    beyond6Title: "Mensajes",
    beyond6Desc:
      "Mensajes de seguimiento y comunicaciones redactados del contenido de la grabacion, listos para enviar.",
    beyond7Title: "Notas de estudio",
    beyond7Desc:
      "Notas organizadas estructuradas para el aprendizaje — titulos, subpuntos y agrupaciones logicas.",
    beyond8Title: "Texto limpio",
    beyond8Desc:
      "Texto pulido y legible con muletillas eliminadas y gramatica corregida.",
    beyond9Title: "Ideas",
    beyond9Desc:
      "Ideas individuales extraidas y listadas por separado — lluvias de ideas convertidas en conceptos accionables.",
    supportedLabel: "Formatos soportados",
    supportedTitle: "Funciona con cualquier audio",
    supportedSubtitle:
      "Sube grabaciones en cualquier formato comun. Sin conversion, sin software especial, sin pasos extra.",
    format1: "MP3 — El formato universal. Funciona con cualquier podcast, app de grabacion o descarga.",
    format2: "WAV — Audio sin comprimir de alta calidad. Transcripcion con total fidelidad.",
    format3: "M4A — Formato predeterminado para memos de voz de iPhone y muchas apps de grabacion.",
    format4: "AAC — Comun en streaming, transmision y audio extraido de video.",
    format5: "FLAC — Audio sin perdida para maxima calidad y precision.",
    format6: "OGG — Formato abierto soportado por muchas plataformas y herramientas de grabacion.",
    rel1Name: "Resumenes con IA",
    rel2Name: "Audio a Tareas",
    rel3Name: "Deteccion de hablantes",
    rel4Name: "Texto limpio",
    ctaTitle: "Deja de transcribir manualmente. Empieza en segundos.",
    ctaSubtitle:
      "Cada grabacion se convierte en una transcripcion precisa — mas resumenes, tareas y 7 formatos de salida mas. Todo del mismo audio.",
  },
  fr: {
    label: "Audio en Transcription",
    title: "Audio en transcription — IA rapide et precise de voix a texte",
    subtitle:
      "Convertissez n'importe quel enregistrement audio en texte precis et lisible avec l'IA. La detection des locuteurs identifie qui a dit quoi. Puis allez au-dela de la transcription basique — obtenez resumes, taches, plans d'action et plus du meme audio.",
    accuracyLabel: "Transcription precise",
    accuracyTitle: "Transcription rapide et precise sur laquelle vous pouvez compter",
    accuracySubtitle:
      "Sythio utilise une IA avancee pour transcrire l'audio avec une haute precision a travers les accents, environnements et niveaux de qualite audio. Aucun nettoyage manuel necessaire.",
    speedTitle: "Secondes, pas heures",
    speedDesc:
      "Un enregistrement de 60 minutes est transcrit en quelques secondes, pas les heures que prend la transcription manuelle. Consacrez votre temps au travail qui compte.",
    accuracyFeatTitle: "Haute precision",
    accuracyFeatDesc:
      "Les modeles d'IA avancee gerent les accents, le bruit de fond, les paroles superposees et la terminologie technique avec une precision constamment elevee.",
    formatsTitle: "Tout format",
    formatsDesc:
      "MP3, WAV, M4A, AAC, FLAC, OGG — telechargez n'importe quel format audio courant. Pas de conversion necessaire. Deposez votre fichier et obtenez une transcription.",
    speakerLabel: "Detection des locuteurs",
    speakerTitle: "Qui a dit quoi — automatiquement",
    speakerSubtitle:
      "Quand votre enregistrement a plusieurs locuteurs, Sythio identifie et etiquette chacun. Chaque declaration est attribuee a la bonne personne tout au long de la transcription.",
    speakerFeat1Title: "Detection automatique",
    speakerFeat1Desc:
      "La detection des locuteurs fonctionne automatiquement — pas de configuration, pas d'enregistrement prealable des voix. Sythio distingue les locuteurs a partir de l'audio.",
    speakerFeat2Title: "Attribution claire",
    speakerFeat2Desc:
      "Chaque locuteur est etiquete de maniere coherente dans toute la transcription. Citations, declarations et moments cles sont connectes a la bonne personne.",
    speakerFeat3Title: "Tout nombre de locuteurs",
    speakerFeat3Desc:
      "Deux personnes en appel ou dix en reunion — la detection des locuteurs s'adapte a l'enregistrement. Chaque voix est suivie.",
    beyondLabel: "Au-dela de la transcription",
    beyondTitle: "La transcription n'est que le debut",
    beyondSubtitle:
      "La plupart des outils s'arretent a la voix au texte. Sythio va plus loin — le meme audio qui produit votre transcription genere aussi 9 formats de sortie structures. Un enregistrement, une utilite illimitee.",
    beyond1Title: "Resumes",
    beyond1Desc:
      "Un apercu concis de l'enregistrement — decisions, sujets et conclusions cles distilles en un resume lisible.",
    beyond2Title: "Taches",
    beyond2Desc:
      "Chaque engagement et element d'action extrait, avec les responsables attribues quand les locuteurs sont detectes.",
    beyond3Title: "Plans d'action",
    beyond3Desc:
      "Plans structures et par phases avec priorites et responsabilites — construits a partir de la conversation.",
    beyond4Title: "Points cles",
    beyond4Desc:
      "Les idees et conclusions essentielles, distillees en points clairs et faciles a parcourir.",
    beyond5Title: "Rapports",
    beyond5Desc:
      "Rapports professionnels formates et prets a partager avec les parties prenantes ou les equipes.",
    beyond6Title: "Messages",
    beyond6Desc:
      "Messages de suivi et communications rediges a partir du contenu de l'enregistrement, prets a envoyer.",
    beyond7Title: "Notes d'etude",
    beyond7Desc:
      "Notes organisees structurees pour l'apprentissage — titres, sous-points et regroupements logiques.",
    beyond8Title: "Texte nettoye",
    beyond8Desc:
      "Texte poli et lisible avec les mots de remplissage supprimes et la grammaire corrigee.",
    beyond9Title: "Idees",
    beyond9Desc:
      "Idees individuelles extraites et listees separement — brainstormings transformes en concepts exploitables.",
    supportedLabel: "Formats supportes",
    supportedTitle: "Fonctionne avec tout audio",
    supportedSubtitle:
      "Telechargez des enregistrements dans n'importe quel format courant. Pas de conversion, pas de logiciel special, pas d'etapes supplementaires.",
    format1: "MP3 — Le format universel. Fonctionne avec tout podcast, app d'enregistrement ou telechargement.",
    format2: "WAV — Audio non compresse de haute qualite. Transcription en pleine fidelite.",
    format3: "M4A — Format par defaut des memos vocaux iPhone et de nombreuses apps d'enregistrement.",
    format4: "AAC — Courant en streaming, diffusion et audio extrait de video.",
    format5: "FLAC — Audio sans perte pour une qualite et une precision maximales.",
    format6: "OGG — Format ouvert supporte par de nombreuses plateformes et outils d'enregistrement.",
    rel1Name: "Resumes IA",
    rel2Name: "Audio en Taches",
    rel3Name: "Detection des locuteurs",
    rel4Name: "Texte nettoye",
    ctaTitle: "Arretez de transcrire manuellement. Commencez en secondes.",
    ctaSubtitle:
      "Chaque enregistrement devient une transcription precise — plus des resumes, taches et 7 autres formats de sortie. Tout du meme audio.",
  },
  pt: {
    label: "Audio para Transcricao",
    title: "Audio para transcricao — IA rapida e precisa de voz para texto",
    subtitle:
      "Converta qualquer gravacao de audio em texto preciso e legivel com IA. A deteccao de falantes identifica quem disse o que. Depois va alem da transcricao basica — obtenha resumos, tarefas, planos de acao e mais do mesmo audio.",
    accuracyLabel: "Transcricao precisa",
    accuracyTitle: "Transcricao rapida e precisa em que voce pode confiar",
    accuracySubtitle:
      "O Sythio usa IA avancada para transcrever audio com alta precisao em diferentes sotaques, ambientes e niveis de qualidade de audio. Sem limpeza manual necessaria.",
    speedTitle: "Segundos, nao horas",
    speedDesc:
      "Uma gravacao de 60 minutos e transcrita em segundos, nao nas horas que leva para fazer manualmente. Dedique seu tempo ao trabalho que importa.",
    accuracyFeatTitle: "Alta precisao",
    accuracyFeatDesc:
      "Modelos de IA avancada lidam com sotaques, ruido de fundo, fala sobreposta e terminologia tecnica com precisao consistentemente alta.",
    formatsTitle: "Qualquer formato",
    formatsDesc:
      "MP3, WAV, M4A, AAC, FLAC, OGG — envie qualquer formato de audio comum. Sem conversao necessaria. Apenas arraste seu arquivo e obtenha uma transcricao.",
    speakerLabel: "Deteccao de falantes",
    speakerTitle: "Quem disse o que — automaticamente",
    speakerSubtitle:
      "Quando sua gravacao tem multiplos falantes, o Sythio identifica e rotula cada um. Cada declaracao e atribuida a pessoa correta ao longo de toda a transcricao.",
    speakerFeat1Title: "Deteccao automatica",
    speakerFeat1Desc:
      "A deteccao de falantes funciona automaticamente — sem configuracao, sem registro previo de vozes. O Sythio distingue os falantes a partir do proprio audio.",
    speakerFeat2Title: "Atribuicao clara",
    speakerFeat2Desc:
      "Cada falante e rotulado de forma consistente em toda a transcricao. Citacoes, declaracoes e momentos-chave sao conectados a pessoa correta.",
    speakerFeat3Title: "Qualquer numero de falantes",
    speakerFeat3Desc:
      "Duas pessoas em uma chamada ou dez em uma reuniao — a deteccao de falantes se escala para corresponder a gravacao. Cada voz e rastreada.",
    beyondLabel: "Alem da transcricao",
    beyondTitle: "A transcricao e apenas o comeco",
    beyondSubtitle:
      "A maioria das ferramentas para em voz para texto. O Sythio vai alem — o mesmo audio que produz sua transcricao tambem gera 9 formatos de saida estruturados. Uma gravacao, utilidade ilimitada.",
    beyond1Title: "Resumos",
    beyond1Desc:
      "Uma visao concisa da gravacao — decisoes, temas e conclusoes-chave destilados em um resumo legivel.",
    beyond2Title: "Tarefas",
    beyond2Desc:
      "Cada compromisso e item de acao extraido, com responsaveis atribuidos quando falantes sao detectados.",
    beyond3Title: "Planos de acao",
    beyond3Desc:
      "Planos estruturados e faseados com prioridades e responsabilidades — construidos a partir da conversa.",
    beyond4Title: "Pontos-chave",
    beyond4Desc:
      "As ideias e conclusoes essenciais, destiladas em pontos claros e escaneveis.",
    beyond5Title: "Relatorios",
    beyond5Desc:
      "Relatorios profissionais formatados e prontos para compartilhar com partes interessadas ou equipes.",
    beyond6Title: "Mensagens",
    beyond6Desc:
      "Mensagens de acompanhamento e comunicacoes redigidas a partir do conteudo da gravacao, prontas para enviar.",
    beyond7Title: "Notas de estudo",
    beyond7Desc:
      "Notas organizadas estruturadas para aprendizado — titulos, subpontos e agrupamentos logicos.",
    beyond8Title: "Texto limpo",
    beyond8Desc:
      "Texto polido e legivel com palavras de preenchimento removidas e gramatica corrigida.",
    beyond9Title: "Ideias",
    beyond9Desc:
      "Ideias individuais extraidas e listadas separadamente — brainstorms transformados em conceitos acionaveis.",
    supportedLabel: "Formatos suportados",
    supportedTitle: "Funciona com qualquer audio",
    supportedSubtitle:
      "Envie gravacoes em qualquer formato comum. Sem conversao, sem software especial, sem passos extras.",
    format1: "MP3 — O formato universal. Funciona com qualquer podcast, app de gravacao ou download.",
    format2: "WAV — Audio nao comprimido de alta qualidade. Transcricao com total fidelidade.",
    format3: "M4A — Formato padrao para memos de voz do iPhone e muitos apps de gravacao.",
    format4: "AAC — Comum em streaming, transmissao e audio extraido de video.",
    format5: "FLAC — Audio sem perdas para maxima qualidade e precisao.",
    format6: "OGG — Formato aberto suportado por muitas plataformas e ferramentas de gravacao.",
    rel1Name: "Resumos com IA",
    rel2Name: "Audio para Tarefas",
    rel3Name: "Deteccao de falantes",
    rel4Name: "Texto limpo",
    ctaTitle: "Pare de transcrever manualmente. Comece em segundos.",
    ctaSubtitle:
      "Cada gravacao se torna uma transcricao precisa — mais resumos, tarefas e 7 outros formatos de saida. Tudo do mesmo audio.",
  },
  it: {
    label: "Audio in Trascrizione",
    title: "Audio in trascrizione — IA veloce e precisa da voce a testo",
    subtitle:
      "Converti qualsiasi registrazione audio in testo preciso e leggibile con l'IA. Il rilevamento dei parlanti identifica chi ha detto cosa. Poi vai oltre la trascrizione base — ottieni riassunti, attivita, piani d'azione e altro dallo stesso audio.",
    accuracyLabel: "Trascrizione precisa",
    accuracyTitle: "Trascrizione veloce e precisa di cui ti puoi fidare",
    accuracySubtitle:
      "Sythio usa IA avanzata per trascrivere audio con alta precisione attraverso accenti, ambienti e livelli di qualita audio. Nessuna pulizia manuale necessaria.",
    speedTitle: "Secondi, non ore",
    speedDesc:
      "Una registrazione di 60 minuti viene trascritta in pochi secondi, non le ore necessarie per farlo manualmente. Dedica il tuo tempo al lavoro che conta.",
    accuracyFeatTitle: "Alta precisione",
    accuracyFeatDesc:
      "Modelli di IA avanzata gestiscono accenti, rumore di fondo, parlato sovrapposto e terminologia tecnica con precisione costantemente elevata.",
    formatsTitle: "Qualsiasi formato",
    formatsDesc:
      "MP3, WAV, M4A, AAC, FLAC, OGG — carica qualsiasi formato audio comune. Nessuna conversione necessaria. Trascina il tuo file e ottieni una trascrizione.",
    speakerLabel: "Rilevamento parlanti",
    speakerTitle: "Chi ha detto cosa — automaticamente",
    speakerSubtitle:
      "Quando la tua registrazione ha piu parlanti, Sythio identifica ed etichetta ciascuno. Ogni dichiarazione viene attribuita alla persona giusta in tutta la trascrizione.",
    speakerFeat1Title: "Rilevamento automatico",
    speakerFeat1Desc:
      "Il rilevamento dei parlanti funziona automaticamente — nessuna configurazione, nessuna registrazione preventiva delle voci. Sythio distingue i parlanti dall'audio stesso.",
    speakerFeat2Title: "Attribuzione chiara",
    speakerFeat2Desc:
      "Ogni parlante e etichettato in modo coerente in tutta la trascrizione. Citazioni, dichiarazioni e momenti chiave sono collegati alla persona giusta.",
    speakerFeat3Title: "Qualsiasi numero di parlanti",
    speakerFeat3Desc:
      "Due persone in una chiamata o dieci in una riunione — il rilevamento dei parlanti si scala per corrispondere alla registrazione. Ogni voce viene tracciata.",
    beyondLabel: "Oltre la trascrizione",
    beyondTitle: "La trascrizione e solo l'inizio",
    beyondSubtitle:
      "La maggior parte degli strumenti si ferma al voce-a-testo. Sythio va oltre — lo stesso audio che produce la tua trascrizione genera anche 9 formati di output strutturati. Una registrazione, utilita illimitata.",
    beyond1Title: "Riassunti",
    beyond1Desc:
      "Una panoramica concisa della registrazione — decisioni, argomenti e conclusioni chiave distillati in un riassunto leggibile.",
    beyond2Title: "Attivita",
    beyond2Desc:
      "Ogni impegno e elemento d'azione estratto, con responsabili attribuiti quando i parlanti vengono rilevati.",
    beyond3Title: "Piani d'azione",
    beyond3Desc:
      "Piani strutturati e per fasi con priorita e responsabilita — costruiti dalla conversazione.",
    beyond4Title: "Punti chiave",
    beyond4Desc:
      "Le idee e le conclusioni essenziali, distillate in punti chiari e facili da scansionare.",
    beyond5Title: "Report",
    beyond5Desc:
      "Report professionali formattati e pronti da condividere con stakeholder o team.",
    beyond6Title: "Messaggi",
    beyond6Desc:
      "Messaggi di follow-up e comunicazioni redatti dal contenuto della registrazione, pronti da inviare.",
    beyond7Title: "Note di studio",
    beyond7Desc:
      "Note organizzate strutturate per l'apprendimento — intestazioni, sottopunti e raggruppamenti logici.",
    beyond8Title: "Testo pulito",
    beyond8Desc:
      "Testo raffinato e leggibile con parole riempitive rimosse e grammatica corretta.",
    beyond9Title: "Idee",
    beyond9Desc:
      "Idee individuali estratte e elencate separatamente — brainstorm trasformati in concetti azionabili.",
    supportedLabel: "Formati supportati",
    supportedTitle: "Funziona con qualsiasi audio",
    supportedSubtitle:
      "Carica registrazioni in qualsiasi formato comune. Nessuna conversione, nessun software speciale, nessun passaggio extra.",
    format1: "MP3 — Il formato universale. Funziona con qualsiasi podcast, app di registrazione o download.",
    format2: "WAV — Audio non compresso di alta qualita. Trascrizione a piena fedelta.",
    format3: "M4A — Formato predefinito per i memo vocali iPhone e molte app di registrazione.",
    format4: "AAC — Comune nello streaming, broadcasting e audio estratto da video.",
    format5: "FLAC — Audio lossless per massima qualita e precisione.",
    format6: "OGG — Formato aperto supportato da molte piattaforme e strumenti di registrazione.",
    rel1Name: "Riassunti IA",
    rel2Name: "Audio in Attivita",
    rel3Name: "Rilevamento parlanti",
    rel4Name: "Testo pulito",
    ctaTitle: "Smetti di trascrivere manualmente. Inizia in secondi.",
    ctaSubtitle:
      "Ogni registrazione diventa una trascrizione precisa — piu riassunti, attivita e 7 altri formati di output. Tutto dallo stesso audio.",
  },
};

export default function AudioToTranscriptPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

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
                  {s("common.startFree")}
                </Link>
              </MagneticHover>
              <Link
                href="/product"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
              >
                {s("common.seeHowItWorks")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accurate Transcription */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            {c.accuracyLabel}
          </p>
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.accuracyTitle}
            </h2>
          </TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            {c.accuracySubtitle}
          </p>

          <GsapStagger stagger={0.08}>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                { title: c.speedTitle, description: c.speedDesc },
                { title: c.accuracyFeatTitle, description: c.accuracyFeatDesc },
                { title: c.formatsTitle, description: c.formatsDesc },
              ].map((item) => (
                <ScrollScale key={item.title}>
                  <div className="group p-8 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* Speaker Detection */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            {c.speakerLabel}
          </p>
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.speakerTitle}
            </h2>
          </TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            {c.speakerSubtitle}
          </p>

          <GsapStagger stagger={0.08}>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                { title: c.speakerFeat1Title, description: c.speakerFeat1Desc },
                { title: c.speakerFeat2Title, description: c.speakerFeat2Desc },
                { title: c.speakerFeat3Title, description: c.speakerFeat3Desc },
              ].map((item) => (
                <ScrollScale key={item.title}>
                  <div className="p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                    <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* Beyond Transcription */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            {c.beyondLabel}
          </p>
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.beyondTitle}
            </h2>
          </TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            {c.beyondSubtitle}
          </p>

          <GsapStagger stagger={0.06}>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: c.beyond1Title, description: c.beyond1Desc },
                { title: c.beyond2Title, description: c.beyond2Desc },
                { title: c.beyond3Title, description: c.beyond3Desc },
                { title: c.beyond4Title, description: c.beyond4Desc },
                { title: c.beyond5Title, description: c.beyond5Desc },
                { title: c.beyond6Title, description: c.beyond6Desc },
                { title: c.beyond7Title, description: c.beyond7Desc },
                { title: c.beyond8Title, description: c.beyond8Desc },
                { title: c.beyond9Title, description: c.beyond9Desc },
              ].map((item) => (
                <ScrollScale key={item.title}>
                  <div className="p-6 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                    <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            {c.supportedLabel}
          </p>
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.supportedTitle}
            </h2>
          </TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            {c.supportedSubtitle}
          </p>

          <GsapStagger stagger={0.06}>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[c.format1, c.format2, c.format3, c.format4, c.format5, c.format6].map((fmt) => (
                <ScrollScale key={fmt}>
                  <div className="p-6 rounded-2xl bg-white border border-border-light">
                    <p className="text-sm text-muted leading-relaxed">{fmt}</p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* Related */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal tag="h2" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">{s("common.related")}</TextReveal>
          <GsapStagger stagger={0.08} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollScale>
              <Link href="/features/ai-summaries" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel1Name}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/audio-to-tasks" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.label}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel2Name}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/features/speaker-detection" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel3Name}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/features/clean-text" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel4Name}</p>
              </Link>
            </ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-44 bg-background overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-50 via-violet-50 to-transparent opacity-60 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.ctaTitle}
            </h2>
          </TextReveal>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {c.ctaSubtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticHover>
              <Link
                href="/pricing"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                {s("common.startFree")}
              </Link>
            </MagneticHover>
            <MagneticHover>
              <Link
                href="/product"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
              >
                {s("common.exploreProduct")}
              </Link>
            </MagneticHover>
          </div>
          <p className="mt-6 text-sm text-muted">{s("common.freePlan")}</p>
        </div>
      </section>
    </PageReveal>
  );
}
