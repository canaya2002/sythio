/* ─── SEO content for crawlers (Server Component) ─── */
/* This content is visually hidden but fully accessible to search engines */
/* Server-rendered to guarantee indexability by Google and all crawlers */

import Link from "next/link";

type SEOContent = {
  h1: string;
  introP: string;
  howTitle: string;
  howP: string;
  outputsTitle: string;
  outputSummaries: string;
  outputKeyPoints: string;
  outputTasks: string;
  outputActionPlans: string;
  outputCleanText: string;
  outputReports: string;
  outputMessages: string;
  outputStudyNotes: string;
  outputIdeas: string;
  speakerTitle: string;
  speakerP: string;
  useCasesTitle: string;
  ucMeetings: string;
  ucVoiceNotes: string;
  ucBrainstorming: string;
  ucLectures: string;
  ucClientCalls: string;
  whoTitle: string;
  whoStudents: string;
  whoFounders: string;
  whoPMs: string;
  pricingTitle: string;
  pricingP: string;
  compareTitle: string;
  featureSummaries: string;
  featureKeyPoints: string;
  featureTasks: string;
  featureActionPlans: string;
  featureCleanText: string;
  featureReports: string;
  featureMessages: string;
  featureStudyNotes: string;
  featureIdeas: string;
  featureSpeaker: string;
  ucMeetingsLabel: string;
  ucVoiceNotesLabel: string;
  ucBrainstormingLabel: string;
  ucLecturesLabel: string;
  ucClientCallsLabel: string;
  whoStudentsLabel: string;
  whoFoundersLabel: string;
  whoPMsLabel: string;
  pricingLink: string;
};

const content: Record<string, SEOContent> = {
  en: {
    h1: "Sythio \u2014 AI Voice Notes App: Turn Audio into Summaries, Tasks, and Action Plans",
    introP: "Sythio is an AI-powered voice notes app that transforms any audio recording into 9 structured output formats. Unlike traditional transcription tools, Sythio goes beyond converting speech to text \u2014 it analyzes context, detects speakers, and generates summaries, tasks, action plans, executive reports, follow-up messages, study notes, key points, ideas, and clean text from a single recording.",
    howTitle: "How Sythio Works",
    howP: "Record or upload audio from any source \u2014 meetings, voice notes, lectures, brainstorming sessions, or client calls. Sythio processes the audio in under 30 seconds, identifies speakers, understands context, and generates structured outputs tailored to your needs.",
    outputsTitle: "9 Output Formats from One Recording",
    outputSummaries: "Concise overviews of discussions",
    outputKeyPoints: "Essential information extracted",
    outputTasks: "Action items with speaker attribution",
    outputActionPlans: "Structured step-by-step plans",
    outputCleanText: "Polished, readable transcription",
    outputReports: "Presentation-ready documents",
    outputMessages: "Ready-to-send drafts",
    outputStudyNotes: "Organized learning material",
    outputIdeas: "Categorized brainstorming output",
    speakerTitle: "Speaker Detection with Attribution",
    speakerP: "identifies who said what in every recording. Tasks are attributed to specific speakers, decisions are tracked by who made them, and follow-up messages reference the right people.",
    useCasesTitle: "Use Cases",
    ucMeetings: "Automatic summaries, tasks, and reports from every meeting",
    ucVoiceNotes: "Turn fleeting thoughts into organized, structured text",
    ucBrainstorming: "Capture and categorize ideas from group discussions",
    ucLectures: "Study notes, key concepts, and summaries for students",
    ucClientCalls: "Documentation with agreements and follow-ups",
    whoTitle: "Who Uses Sythio",
    whoStudents: "AI-powered lecture notes and study material",
    whoFounders: "Turn voice memos into organized priorities",
    whoPMs: "Meeting action items and accountability",
    pricingTitle: "Pricing",
    pricingP: "Free plan with 5 recordings per month. Premium at $15/month for unlimited recordings and all 9 output formats. Enterprise plans with custom pricing for teams.",
    compareTitle: "Compare Sythio",
    featureSummaries: "AI Summaries",
    featureKeyPoints: "Key Points",
    featureTasks: "Tasks",
    featureActionPlans: "Action Plans",
    featureCleanText: "Clean Text",
    featureReports: "Executive Reports",
    featureMessages: "Follow-up Messages",
    featureStudyNotes: "Study Notes",
    featureIdeas: "Ideas",
    featureSpeaker: "Sythio\u2019s speaker detection",
    ucMeetingsLabel: "Meeting notes",
    ucVoiceNotesLabel: "Voice notes",
    ucBrainstormingLabel: "Brainstorming sessions",
    ucLecturesLabel: "Lectures",
    ucClientCallsLabel: "Client calls",
    whoStudentsLabel: "Students",
    whoFoundersLabel: "Founders",
    whoPMsLabel: "Project managers",
    pricingLink: "Sythio pricing",
  },
  es: {
    h1: "Sythio \u2014 App de notas de voz con IA: Convierte audio en resúmenes, tareas y planes de acción",
    introP: "Sythio es una app de notas de voz con IA que transforma cualquier grabación de audio en 9 formatos de salida estructurados. A diferencia de las herramientas de transcripción tradicionales, Sythio va más allá de convertir voz en texto \u2014 analiza el contexto, detecta hablantes y genera resúmenes, tareas, planes de acción, informes ejecutivos, mensajes de seguimiento, apuntes de estudio, puntos clave, ideas y texto limpio a partir de una sola grabación.",
    howTitle: "Cómo funciona Sythio",
    howP: "Graba o sube audio de cualquier fuente \u2014 reuniones, notas de voz, clases, sesiones de lluvia de ideas o llamadas con clientes. Sythio procesa el audio en menos de 30 segundos, identifica hablantes, comprende el contexto y genera salidas estructuradas adaptadas a tus necesidades.",
    outputsTitle: "9 formatos de salida con una sola grabación",
    outputSummaries: "Resúmenes concisos de las conversaciones",
    outputKeyPoints: "Información esencial extraída",
    outputTasks: "Tareas con atribución por hablante",
    outputActionPlans: "Planes estructurados paso a paso",
    outputCleanText: "Transcripción pulida y legible",
    outputReports: "Documentos listos para presentar",
    outputMessages: "Borradores listos para enviar",
    outputStudyNotes: "Material de estudio organizado",
    outputIdeas: "Lluvia de ideas categorizada",
    speakerTitle: "Detección de hablantes con atribución",
    speakerP: "identifica quién dijo qué en cada grabación. Las tareas se atribuyen a hablantes específicos, las decisiones se rastrean por quién las tomó y los mensajes de seguimiento mencionan a las personas correctas.",
    useCasesTitle: "Casos de uso",
    ucMeetings: "Resúmenes, tareas e informes automáticos de cada reunión",
    ucVoiceNotes: "Convierte ideas fugaces en texto organizado y estructurado",
    ucBrainstorming: "Captura y categoriza ideas de discusiones grupales",
    ucLectures: "Apuntes, conceptos clave y resúmenes para estudiantes",
    ucClientCalls: "Documentación con acuerdos y seguimientos",
    whoTitle: "Quién usa Sythio",
    whoStudents: "Apuntes de clase y material de estudio con IA",
    whoFounders: "Convierte notas de voz en prioridades organizadas",
    whoPMs: "Tareas de reunión y responsabilidad",
    pricingTitle: "Precios",
    pricingP: "Plan gratuito con 5 grabaciones al mes. Premium a $15/mes para grabaciones ilimitadas y los 9 formatos de salida. Planes empresariales con precios personalizados para equipos.",
    compareTitle: "Compara Sythio",
    featureSummaries: "Resúmenes con IA",
    featureKeyPoints: "Puntos clave",
    featureTasks: "Tareas",
    featureActionPlans: "Planes de acción",
    featureCleanText: "Texto limpio",
    featureReports: "Informes ejecutivos",
    featureMessages: "Mensajes de seguimiento",
    featureStudyNotes: "Apuntes de estudio",
    featureIdeas: "Ideas",
    featureSpeaker: "La detección de hablantes de Sythio",
    ucMeetingsLabel: "Notas de reunión",
    ucVoiceNotesLabel: "Notas de voz",
    ucBrainstormingLabel: "Sesiones de lluvia de ideas",
    ucLecturesLabel: "Clases",
    ucClientCallsLabel: "Llamadas con clientes",
    whoStudentsLabel: "Estudiantes",
    whoFoundersLabel: "Fundadores",
    whoPMsLabel: "Project managers",
    pricingLink: "Precios de Sythio",
  },
  fr: {
    h1: "Sythio \u2014 App de notes vocales IA : Transformez l\u2019audio en résumés, tâches et plans d\u2019action",
    introP: "Sythio est une application de notes vocales alimentée par l\u2019IA qui transforme tout enregistrement audio en 9 formats de sortie structurés. Contrairement aux outils de transcription traditionnels, Sythio va au-delà de la conversion de la parole en texte \u2014 il analyse le contexte, détecte les locuteurs et génère des résumés, des tâches, des plans d\u2019action, des rapports exécutifs, des messages de suivi, des notes d\u2019étude, des points clés, des idées et du texte épuré à partir d\u2019un seul enregistrement.",
    howTitle: "Comment fonctionne Sythio",
    howP: "Enregistrez ou importez de l\u2019audio depuis n\u2019importe quelle source \u2014 réunions, notes vocales, cours, séances de brainstorming ou appels clients. Sythio traite l\u2019audio en moins de 30 secondes, identifie les locuteurs, comprend le contexte et génère des sorties structurées adaptées à vos besoins.",
    outputsTitle: "9 formats de sortie à partir d\u2019un seul enregistrement",
    outputSummaries: "Synthèses concises des discussions",
    outputKeyPoints: "Informations essentielles extraites",
    outputTasks: "Tâches avec attribution par locuteur",
    outputActionPlans: "Plans structurés étape par étape",
    outputCleanText: "Transcription soignée et lisible",
    outputReports: "Documents prêts pour la présentation",
    outputMessages: "Brouillons prêts à envoyer",
    outputStudyNotes: "Supports d\u2019apprentissage organisés",
    outputIdeas: "Brainstorming catégorisé",
    speakerTitle: "Détection des locuteurs avec attribution",
    speakerP: "identifie qui a dit quoi dans chaque enregistrement. Les tâches sont attribuées à des locuteurs spécifiques, les décisions sont suivies par qui les a prises et les messages de suivi mentionnent les bonnes personnes.",
    useCasesTitle: "Cas d\u2019utilisation",
    ucMeetings: "Résumés, tâches et rapports automatiques pour chaque réunion",
    ucVoiceNotes: "Transformez des pensées fugaces en texte organisé et structuré",
    ucBrainstorming: "Capturez et catégorisez les idées des discussions de groupe",
    ucLectures: "Notes d\u2019étude, concepts clés et résumés pour les étudiants",
    ucClientCalls: "Documentation avec accords et suivis",
    whoTitle: "Qui utilise Sythio",
    whoStudents: "Notes de cours et supports d\u2019étude alimentés par l\u2019IA",
    whoFounders: "Transformez les mémos vocaux en priorités organisées",
    whoPMs: "Actions de réunion et responsabilisation",
    pricingTitle: "Tarifs",
    pricingP: "Plan gratuit avec 5 enregistrements par mois. Premium à 12 $/mois pour des enregistrements illimités et les 9 formats de sortie. Plans entreprise avec tarification personnalisée pour les équipes.",
    compareTitle: "Comparer Sythio",
    featureSummaries: "Résumés IA",
    featureKeyPoints: "Points clés",
    featureTasks: "Tâches",
    featureActionPlans: "Plans d\u2019action",
    featureCleanText: "Texte épuré",
    featureReports: "Rapports exécutifs",
    featureMessages: "Messages de suivi",
    featureStudyNotes: "Notes d\u2019étude",
    featureIdeas: "Idées",
    featureSpeaker: "La détection de locuteurs de Sythio",
    ucMeetingsLabel: "Notes de réunion",
    ucVoiceNotesLabel: "Notes vocales",
    ucBrainstormingLabel: "Séances de brainstorming",
    ucLecturesLabel: "Cours",
    ucClientCallsLabel: "Appels clients",
    whoStudentsLabel: "Étudiants",
    whoFoundersLabel: "Fondateurs",
    whoPMsLabel: "Chefs de projet",
    pricingLink: "Tarifs de Sythio",
  },
  pt: {
    h1: "Sythio \u2014 App de notas de voz com IA: Transforme áudio em resumos, tarefas e planos de ação",
    introP: "Sythio é um aplicativo de notas de voz com IA que transforma qualquer gravação de áudio em 9 formatos de saída estruturados. Diferente das ferramentas de transcrição tradicionais, o Sythio vai além da conversão de fala em texto \u2014 analisa o contexto, detecta falantes e gera resumos, tarefas, planos de ação, relatórios executivos, mensagens de acompanhamento, notas de estudo, pontos-chave, ideias e texto limpo a partir de uma única gravação.",
    howTitle: "Como o Sythio funciona",
    howP: "Grave ou envie áudio de qualquer fonte \u2014 reuniões, notas de voz, aulas, sessões de brainstorming ou chamadas com clientes. O Sythio processa o áudio em menos de 30 segundos, identifica falantes, compreende o contexto e gera saídas estruturadas adaptadas às suas necessidades.",
    outputsTitle: "9 formatos de saída a partir de uma gravação",
    outputSummaries: "Resumos concisos das conversas",
    outputKeyPoints: "Informações essenciais extraídas",
    outputTasks: "Tarefas com atribuição por falante",
    outputActionPlans: "Planos estruturados passo a passo",
    outputCleanText: "Transcrição polida e legível",
    outputReports: "Documentos prontos para apresentação",
    outputMessages: "Rascunhos prontos para enviar",
    outputStudyNotes: "Material de estudo organizado",
    outputIdeas: "Brainstorming categorizado",
    speakerTitle: "Detecção de falantes com atribuição",
    speakerP: "identifica quem disse o quê em cada gravação. As tarefas são atribuídas a falantes específicos, as decisões são rastreadas por quem as tomou e as mensagens de acompanhamento mencionam as pessoas certas.",
    useCasesTitle: "Casos de uso",
    ucMeetings: "Resumos, tarefas e relatórios automáticos de cada reunião",
    ucVoiceNotes: "Transforme pensamentos passageiros em texto organizado e estruturado",
    ucBrainstorming: "Capture e categorize ideias de discussões em grupo",
    ucLectures: "Notas de estudo, conceitos-chave e resumos para estudantes",
    ucClientCalls: "Documentação com acordos e acompanhamentos",
    whoTitle: "Quem usa o Sythio",
    whoStudents: "Notas de aula e material de estudo com IA",
    whoFounders: "Transforme notas de voz em prioridades organizadas",
    whoPMs: "Tarefas de reunião e responsabilidade",
    pricingTitle: "Preços",
    pricingP: "Plano gratuito com 5 gravações por mês. Premium a $15/mês para gravações ilimitadas e todos os 9 formatos de saída. Planos empresariais com preços personalizados para equipes.",
    compareTitle: "Compare o Sythio",
    featureSummaries: "Resumos com IA",
    featureKeyPoints: "Pontos-chave",
    featureTasks: "Tarefas",
    featureActionPlans: "Planos de ação",
    featureCleanText: "Texto limpo",
    featureReports: "Relatórios executivos",
    featureMessages: "Mensagens de acompanhamento",
    featureStudyNotes: "Notas de estudo",
    featureIdeas: "Ideias",
    featureSpeaker: "A detecção de falantes do Sythio",
    ucMeetingsLabel: "Notas de reunião",
    ucVoiceNotesLabel: "Notas de voz",
    ucBrainstormingLabel: "Sessões de brainstorming",
    ucLecturesLabel: "Aulas",
    ucClientCallsLabel: "Chamadas com clientes",
    whoStudentsLabel: "Estudantes",
    whoFoundersLabel: "Fundadores",
    whoPMsLabel: "Gerentes de projeto",
    pricingLink: "Preços do Sythio",
  },
  it: {
    h1: "Sythio \u2014 App per note vocali con IA: Trasforma l\u2019audio in riassunti, attività e piani d\u2019azione",
    introP: "Sythio è un\u2019app per note vocali basata sull\u2019IA che trasforma qualsiasi registrazione audio in 9 formati di output strutturati. A differenza degli strumenti di trascrizione tradizionali, Sythio va oltre la conversione del parlato in testo \u2014 analizza il contesto, rileva i parlanti e genera riassunti, attività, piani d\u2019azione, report esecutivi, messaggi di follow-up, appunti di studio, punti chiave, idee e testo pulito da una singola registrazione.",
    howTitle: "Come funziona Sythio",
    howP: "Registra o carica audio da qualsiasi fonte \u2014 riunioni, note vocali, lezioni, sessioni di brainstorming o chiamate clienti. Sythio elabora l\u2019audio in meno di 30 secondi, identifica i parlanti, comprende il contesto e genera output strutturati su misura per le tue esigenze.",
    outputsTitle: "9 formati di output da una sola registrazione",
    outputSummaries: "Sintesi concise delle discussioni",
    outputKeyPoints: "Informazioni essenziali estratte",
    outputTasks: "Attività con attribuzione per parlante",
    outputActionPlans: "Piani strutturati passo dopo passo",
    outputCleanText: "Trascrizione curata e leggibile",
    outputReports: "Documenti pronti per la presentazione",
    outputMessages: "Bozze pronte da inviare",
    outputStudyNotes: "Materiale didattico organizzato",
    outputIdeas: "Brainstorming categorizzato",
    speakerTitle: "Rilevamento parlanti con attribuzione",
    speakerP: "identifica chi ha detto cosa in ogni registrazione. Le attività sono attribuite a parlanti specifici, le decisioni sono tracciate per chi le ha prese e i messaggi di follow-up fanno riferimento alle persone giuste.",
    useCasesTitle: "Casi d\u2019uso",
    ucMeetings: "Riassunti, attività e report automatici da ogni riunione",
    ucVoiceNotes: "Trasforma pensieri fugaci in testo organizzato e strutturato",
    ucBrainstorming: "Cattura e categorizza le idee dalle discussioni di gruppo",
    ucLectures: "Appunti, concetti chiave e riassunti per studenti",
    ucClientCalls: "Documentazione con accordi e follow-up",
    whoTitle: "Chi usa Sythio",
    whoStudents: "Appunti delle lezioni e materiale di studio con IA",
    whoFounders: "Trasforma i memo vocali in priorità organizzate",
    whoPMs: "Attività delle riunioni e responsabilità",
    pricingTitle: "Prezzi",
    pricingP: "Piano gratuito con 5 registrazioni al mese. Premium a $15/mese per registrazioni illimitate e tutti i 9 formati di output. Piani aziendali con prezzi personalizzati per i team.",
    compareTitle: "Confronta Sythio",
    featureSummaries: "Riassunti IA",
    featureKeyPoints: "Punti chiave",
    featureTasks: "Attività",
    featureActionPlans: "Piani d\u2019azione",
    featureCleanText: "Testo pulito",
    featureReports: "Report esecutivi",
    featureMessages: "Messaggi di follow-up",
    featureStudyNotes: "Appunti di studio",
    featureIdeas: "Idee",
    featureSpeaker: "Il rilevamento parlanti di Sythio",
    ucMeetingsLabel: "Note di riunione",
    ucVoiceNotesLabel: "Note vocali",
    ucBrainstormingLabel: "Sessioni di brainstorming",
    ucLecturesLabel: "Lezioni",
    ucClientCallsLabel: "Chiamate clienti",
    whoStudentsLabel: "Studenti",
    whoFoundersLabel: "Fondatori",
    whoPMsLabel: "Project manager",
    pricingLink: "Prezzi di Sythio",
  },
};

export function HomeSEOContent({ locale = "en" }: { locale?: string }) {
  const t = content[locale] || content.en;

  return (
    <div className="sr-only" aria-hidden="false">
      <h1>{t.h1}</h1>
      <p>{t.introP}</p>

      <h2>{t.howTitle}</h2>
      <p>{t.howP}</p>

      <h2>{t.outputsTitle}</h2>
      <ul>
        <li><Link href="/features/ai-summaries">{t.featureSummaries}</Link> — {t.outputSummaries}</li>
        <li><Link href="/features/key-points">{t.featureKeyPoints}</Link> — {t.outputKeyPoints}</li>
        <li><Link href="/features/task-extraction">{t.featureTasks}</Link> — {t.outputTasks}</li>
        <li><Link href="/features/action-plans">{t.featureActionPlans}</Link> — {t.outputActionPlans}</li>
        <li><Link href="/features/clean-text">{t.featureCleanText}</Link> — {t.outputCleanText}</li>
        <li><Link href="/features/reports">{t.featureReports}</Link> — {t.outputReports}</li>
        <li><Link href="/features/messages">{t.featureMessages}</Link> — {t.outputMessages}</li>
        <li><Link href="/features/study-notes">{t.featureStudyNotes}</Link> — {t.outputStudyNotes}</li>
        <li><Link href="/features/ideas">{t.featureIdeas}</Link> — {t.outputIdeas}</li>
      </ul>

      <h2>{t.speakerTitle}</h2>
      <p>
        <Link href="/features/speaker-detection">{t.featureSpeaker}</Link> {t.speakerP}
      </p>

      <h2>{t.useCasesTitle}</h2>
      <ul>
        <li><Link href="/use-cases/meetings">{t.ucMeetingsLabel}</Link> — {t.ucMeetings}</li>
        <li><Link href="/use-cases/voice-notes">{t.ucVoiceNotesLabel}</Link> — {t.ucVoiceNotes}</li>
        <li><Link href="/use-cases/brainstorming">{t.ucBrainstormingLabel}</Link> — {t.ucBrainstorming}</li>
        <li><Link href="/use-cases/lectures">{t.ucLecturesLabel}</Link> — {t.ucLectures}</li>
        <li><Link href="/use-cases/client-calls">{t.ucClientCallsLabel}</Link> — {t.ucClientCalls}</li>
      </ul>

      <h2>{t.whoTitle}</h2>
      <ul>
        <li><Link href="/for/students">{t.whoStudentsLabel}</Link> — {t.whoStudents}</li>
        <li><Link href="/for/founders">{t.whoFoundersLabel}</Link> — {t.whoFounders}</li>
        <li><Link href="/for/project-managers">{t.whoPMsLabel}</Link> — {t.whoPMs}</li>
        <li><Link href="/for/salespeople">Salespeople</Link> — Document client interactions and follow up faster</li>
        <li><Link href="/for/consultants">Consultants</Link> — Structured documentation from every engagement</li>
        <li><Link href="/for/lawyers">Lawyers</Link> — Detailed records of depositions, hearings, and calls</li>
      </ul>

      <h2>{t.pricingTitle}</h2>
      <p>
        <Link href="/pricing">{t.pricingLink}</Link>: {t.pricingP}
      </p>

      <h2>{t.compareTitle}</h2>
      <ul>
        <li><Link href="/compare/otter">Sythio vs Otter.ai</Link></li>
        <li><Link href="/compare/fireflies">Sythio vs Fireflies.ai</Link></li>
        <li><Link href="/compare/tldv">Sythio vs tl;dv</Link></li>
        <li><Link href="/compare/audiopen">Sythio vs AudioPen</Link></li>
        <li><Link href="/compare/notta">Sythio vs Notta</Link></li>
      </ul>

      <h2>Audio Transformation</h2>
      <ul>
        <li><Link href="/audio-to-transcript">Audio to Transcript</Link> — Accurate transcription with speaker detection</li>
        <li><Link href="/audio-to-summary">Audio to Summary</Link> — Concise overviews from recordings</li>
        <li><Link href="/audio-to-tasks">Audio to Tasks</Link> — Extract action items automatically</li>
        <li><Link href="/audio-to-action-plan">Audio to Action Plan</Link> — Step-by-step plans from conversations</li>
        <li><Link href="/audio-to-report">Audio to Report</Link> — Executive-ready documents</li>
        <li><Link href="/audio-to-study-notes">Audio to Study Notes</Link> — Study material from lectures</li>
        <li><Link href="/audio-to-clean-text">Audio to Clean Text</Link> — Polished, readable text</li>
        <li><Link href="/audio-to-key-points">Audio to Key Points</Link> — Essential information extracted</li>
        <li><Link href="/audio-to-ideas">Audio to Ideas</Link> — Categorized brainstorming output</li>
        <li><Link href="/audio-to-messages">Audio to Messages</Link> — Ready-to-send follow-ups</li>
      </ul>

      <nav aria-label="Additional resources">
        <ul>
          <li><Link href="/blog">Sythio Blog</Link></li>
          <li><Link href="/enterprise">Enterprise</Link></li>
          <li><Link href="/integrations">Integrations</Link></li>
          <li><Link href="/security">Security</Link></li>
          <li><Link href="/glossary">Glossary</Link></li>
          <li><Link href="/case-studies">Case Studies</Link></li>
        </ul>
      </nav>
    </div>
  );
}
