"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal, ScrollScale } from "../gsap-effects";
import { IPhoneFrame, BrowserFrame } from "../devices";
import {
  SummaryMockup,
  ActionPlanMockup,
  ChecklistMockup,
  MessageMockup,
  StudyNotesMockup,
} from "../mockups";
import RotatingText from "../rotating-text";
import { useLanguage } from "../i18n/language-context";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ------------------------------------------------------------------ */
/*  Translations                                                       */
/* ------------------------------------------------------------------ */

const content: Record<string, {
  sectionLabel: string;
  headingPrefix: string;
  rotatingWords: string[];
  headingSuffix: string;
  subtitle: string;
  yourRecording: string;
  outputMode: string;
  outcomes: {
    title: string;
    desc: string;
    expandedDesc: string;
  }[];
  cleanTextTitle: string;
  cleanTextP1: string;
  cleanTextP2: string;
  ideasTitle: string;
  ideasThemes: {
    theme: string;
    items: string[];
  }[];
}> = {
  en: {
    sectionLabel: "One audio, multiple outcomes",
    headingPrefix: "Record once. ",
    rotatingWords: ["Use", "Share", "Transform", "Apply"],
    headingSuffix: " it everywhere",
    subtitle: "The same recording becomes whatever you need it to be. No re-recording. No reprocessing. Just pick your output.",
    yourRecording: "Your recording",
    outputMode: "Output mode",
    outcomes: [
      {
        title: "Summary",
        desc: "Concise overview of what was said",
        expandedDesc: "Get a concise overview of everything discussed. Key points, decisions, and takeaways — distilled into a clear, readable summary that saves you from replaying the entire recording.",
      },
      {
        title: "Tasks",
        desc: "Actionable items with owners",
        expandedDesc: "Automatically extract action items with clear ownership. Every 'I'll do this' and 'Can you handle that' becomes a trackable task — no manual note-taking required.",
      },
      {
        title: "Action Plan",
        desc: "Steps toward outcomes",
        expandedDesc: "Transform conversations into structured step-by-step plans. Who does what, by when, and in what order — organized and ready to execute.",
      },
      {
        title: "Clean Text",
        desc: "Polished transcription",
        expandedDesc: "Raw audio becomes polished, readable text. Filler words removed, grammar corrected, paragraphs formed — ready to share or archive.",
      },
      {
        title: "Report",
        desc: "Executive-ready document",
        expandedDesc: "Generate executive-ready documents from any conversation. Formal structure, key metrics, decisions, and recommendations — presentation-ready in seconds.",
      },
      {
        title: "Message",
        desc: "Ready-to-send follow-up",
        expandedDesc: "Draft follow-up emails and messages directly from conversations. Context-aware, professionally worded, ready to copy and send.",
      },
      {
        title: "Study Notes",
        desc: "Organized for learning",
        expandedDesc: "Transform lectures and discussions into organized study material. Key concepts highlighted, structured by topic, optimized for review and retention.",
      },
      {
        title: "Ideas",
        desc: "Captured organized thoughts",
        expandedDesc: "Capture brainstorming sessions and turn them into categorized, organized concepts. Group by theme, rank by potential, never lose a creative thought.",
      },
    ],
    cleanTextTitle: "Clean Text",
    cleanTextP1: "The team agreed to prioritize the onboarding flow this sprint. The current drop-off rate after signup is too high and needs immediate attention.",
    cleanTextP2: "Alex will handle the UI updates while Maria takes ownership of the email copy and welcome sequence. A sync meeting is scheduled for Thursday to review progress and adjust priorities if needed.",
    ideasTitle: "Ideas",
    ideasThemes: [
      { theme: "User Experience", items: ["Simplified onboarding wizard", "Interactive product tour"] },
      { theme: "Growth", items: ["Referral incentive program", "Community-driven templates"] },
      { theme: "Product", items: ["AI-powered suggestions", "Custom output templates"] },
    ],
  },
  es: {
    sectionLabel: "Un audio, múltiples resultados",
    headingPrefix: "Graba una vez. ",
    rotatingWords: ["Úsalo", "Compártelo", "Transfórmalo", "Aplícalo"],
    headingSuffix: " en todas partes",
    subtitle: "La misma grabación se convierte en lo que necesites. Sin regrabar. Sin reprocesar. Solo elige tu formato.",
    yourRecording: "Tu grabación",
    outputMode: "Modo de salida",
    outcomes: [
      {
        title: "Resumen",
        desc: "Visión concisa de lo discutido",
        expandedDesc: "Obtén una visión concisa de todo lo discutido. Puntos clave, decisiones y conclusiones — destilados en un resumen claro y legible que te ahorra reproducir toda la grabación.",
      },
      {
        title: "Tareas",
        desc: "Elementos accionables con responsables",
        expandedDesc: "Extrae automáticamente elementos de acción con responsables claros. Cada 'yo me encargo' y 'puedes hacer eso' se convierte en una tarea rastreable — sin necesidad de tomar notas manualmente.",
      },
      {
        title: "Plan de acción",
        desc: "Pasos hacia los resultados",
        expandedDesc: "Transforma conversaciones en planes estructurados paso a paso. Quién hace qué, para cuándo y en qué orden — organizado y listo para ejecutar.",
      },
      {
        title: "Texto limpio",
        desc: "Transcripción pulida",
        expandedDesc: "El audio sin procesar se convierte en texto pulido y legible. Muletillas eliminadas, gramática corregida, párrafos formados — listo para compartir o archivar.",
      },
      {
        title: "Informe",
        desc: "Documento ejecutivo",
        expandedDesc: "Genera documentos ejecutivos a partir de cualquier conversación. Estructura formal, métricas clave, decisiones y recomendaciones — listo para presentar en segundos.",
      },
      {
        title: "Mensaje",
        desc: "Seguimiento listo para enviar",
        expandedDesc: "Redacta correos y mensajes de seguimiento directamente desde conversaciones. Con contexto, redacción profesional, listos para copiar y enviar.",
      },
      {
        title: "Notas de estudio",
        desc: "Organizadas para el aprendizaje",
        expandedDesc: "Transforma clases y discusiones en material de estudio organizado. Conceptos clave resaltados, estructurados por tema, optimizados para la revisión y retención.",
      },
      {
        title: "Ideas",
        desc: "Pensamientos capturados y organizados",
        expandedDesc: "Captura sesiones de lluvia de ideas y conviértelas en conceptos categorizados y organizados. Agrupa por tema, clasifica por potencial, nunca pierdas un pensamiento creativo.",
      },
    ],
    cleanTextTitle: "Texto limpio",
    cleanTextP1: "El equipo acordó priorizar el flujo de incorporación en este sprint. La tasa de abandono actual después del registro es demasiado alta y necesita atención inmediata.",
    cleanTextP2: "Alex se encargará de las actualizaciones de la interfaz mientras María toma la responsabilidad del correo de bienvenida y la secuencia de emails. Se programó una reunión de sincronización para el jueves para revisar el progreso y ajustar prioridades si es necesario.",
    ideasTitle: "Ideas",
    ideasThemes: [
      { theme: "Experiencia de usuario", items: ["Asistente de incorporación simplificado", "Tour interactivo del producto"] },
      { theme: "Crecimiento", items: ["Programa de incentivos por referidos", "Plantillas impulsadas por la comunidad"] },
      { theme: "Producto", items: ["Sugerencias con inteligencia artificial", "Plantillas de salida personalizadas"] },
    ],
  },
  fr: {
    sectionLabel: "Un audio, de multiples résultats",
    headingPrefix: "Enregistrez une fois. ",
    rotatingWords: ["Utilisez", "Partagez", "Transformez", "Appliquez"],
    headingSuffix: "-le partout",
    subtitle: "Le même enregistrement devient tout ce dont vous avez besoin. Pas de réenregistrement. Pas de retraitement. Choisissez simplement votre format.",
    yourRecording: "Votre enregistrement",
    outputMode: "Mode de sortie",
    outcomes: [
      {
        title: "Résumé",
        desc: "Aperçu concis de ce qui a été dit",
        expandedDesc: "Obtenez un aperçu concis de tout ce qui a été discuté. Points clés, décisions et conclusions — distillés en un résumé clair et lisible qui vous évite de réécouter l'intégralité de l'enregistrement.",
      },
      {
        title: "Tâches",
        desc: "Éléments d'action avec responsables",
        expandedDesc: "Extrayez automatiquement les éléments d'action avec des responsables clairement définis. Chaque 'je m'en occupe' et 'peux-tu gérer cela' devient une tâche traçable — sans prise de notes manuelle.",
      },
      {
        title: "Plan d'action",
        desc: "Étapes vers les résultats",
        expandedDesc: "Transformez les conversations en plans structurés étape par étape. Qui fait quoi, pour quand et dans quel ordre — organisé et prêt à exécuter.",
      },
      {
        title: "Texte propre",
        desc: "Transcription soignée",
        expandedDesc: "L'audio brut devient un texte soigné et lisible. Mots de remplissage supprimés, grammaire corrigée, paragraphes formés — prêt à partager ou archiver.",
      },
      {
        title: "Rapport",
        desc: "Document prêt pour la direction",
        expandedDesc: "Générez des documents prêts pour la direction à partir de n'importe quelle conversation. Structure formelle, indicateurs clés, décisions et recommandations — prêt à présenter en quelques secondes.",
      },
      {
        title: "Message",
        desc: "Suivi prêt à envoyer",
        expandedDesc: "Rédigez des e-mails et messages de suivi directement à partir des conversations. Contextualisés, rédigés professionnellement, prêts à copier et envoyer.",
      },
      {
        title: "Notes d'étude",
        desc: "Organisées pour l'apprentissage",
        expandedDesc: "Transformez les cours et discussions en matériel d'étude organisé. Concepts clés mis en évidence, structurés par thème, optimisés pour la révision et la rétention.",
      },
      {
        title: "Idées",
        desc: "Pensées capturées et organisées",
        expandedDesc: "Capturez les sessions de brainstorming et transformez-les en concepts catégorisés et organisés. Regroupez par thème, classez par potentiel, ne perdez jamais une pensée créative.",
      },
    ],
    cleanTextTitle: "Texte propre",
    cleanTextP1: "L'équipe a convenu de prioriser le flux d'intégration pour ce sprint. Le taux d'abandon actuel après l'inscription est trop élevé et nécessite une attention immédiate.",
    cleanTextP2: "Alex s'occupera des mises à jour de l'interface tandis que Maria prend en charge la rédaction des e-mails et la séquence de bienvenue. Une réunion de synchronisation est prévue jeudi pour examiner les progrès et ajuster les priorités si nécessaire.",
    ideasTitle: "Idées",
    ideasThemes: [
      { theme: "Expérience utilisateur", items: ["Assistant d'intégration simplifié", "Visite interactive du produit"] },
      { theme: "Croissance", items: ["Programme d'incitation au parrainage", "Modèles créés par la communauté"] },
      { theme: "Produit", items: ["Suggestions alimentées par l'IA", "Modèles de sortie personnalisés"] },
    ],
  },
  pt: {
    sectionLabel: "Um áudio, múltiplos resultados",
    headingPrefix: "Grave uma vez. ",
    rotatingWords: ["Use", "Compartilhe", "Transforme", "Aplique"],
    headingSuffix: " em todo lugar",
    subtitle: "A mesma gravação se transforma no que você precisar. Sem regravar. Sem reprocessar. Apenas escolha seu formato.",
    yourRecording: "Sua gravação",
    outputMode: "Modo de saída",
    outcomes: [
      {
        title: "Resumo",
        desc: "Visão concisa do que foi dito",
        expandedDesc: "Obtenha uma visão concisa de tudo o que foi discutido. Pontos-chave, decisões e conclusões — destilados em um resumo claro e legível que evita que você precise reproduzir toda a gravação.",
      },
      {
        title: "Tarefas",
        desc: "Itens acionáveis com responsáveis",
        expandedDesc: "Extraia automaticamente itens de ação com responsáveis claros. Cada 'eu cuido disso' e 'você pode resolver aquilo' se torna uma tarefa rastreável — sem necessidade de anotações manuais.",
      },
      {
        title: "Plano de ação",
        desc: "Passos rumo aos resultados",
        expandedDesc: "Transforme conversas em planos estruturados passo a passo. Quem faz o quê, até quando e em que ordem — organizado e pronto para executar.",
      },
      {
        title: "Texto limpo",
        desc: "Transcrição polida",
        expandedDesc: "O áudio bruto se torna texto polido e legível. Palavras de preenchimento removidas, gramática corrigida, parágrafos formados — pronto para compartilhar ou arquivar.",
      },
      {
        title: "Relatório",
        desc: "Documento executivo",
        expandedDesc: "Gere documentos executivos a partir de qualquer conversa. Estrutura formal, métricas-chave, decisões e recomendações — pronto para apresentar em segundos.",
      },
      {
        title: "Mensagem",
        desc: "Acompanhamento pronto para enviar",
        expandedDesc: "Redija e-mails e mensagens de acompanhamento diretamente das conversas. Com contexto, redigidos profissionalmente, prontos para copiar e enviar.",
      },
      {
        title: "Notas de estudo",
        desc: "Organizadas para o aprendizado",
        expandedDesc: "Transforme aulas e discussões em material de estudo organizado. Conceitos-chave destacados, estruturados por tema, otimizados para revisão e retenção.",
      },
      {
        title: "Ideias",
        desc: "Pensamentos capturados e organizados",
        expandedDesc: "Capture sessões de brainstorming e transforme-as em conceitos categorizados e organizados. Agrupe por tema, classifique por potencial, nunca perca um pensamento criativo.",
      },
    ],
    cleanTextTitle: "Texto limpo",
    cleanTextP1: "A equipe concordou em priorizar o fluxo de integração neste sprint. A taxa de abandono atual após o cadastro está muito alta e precisa de atenção imediata.",
    cleanTextP2: "Alex cuidará das atualizações da interface enquanto Maria assume a responsabilidade pelo texto do e-mail e a sequência de boas-vindas. Uma reunião de alinhamento está agendada para quinta-feira para revisar o progresso e ajustar prioridades se necessário.",
    ideasTitle: "Ideias",
    ideasThemes: [
      { theme: "Experiência do usuário", items: ["Assistente de integração simplificado", "Tour interativo do produto"] },
      { theme: "Crescimento", items: ["Programa de incentivo por indicação", "Modelos criados pela comunidade"] },
      { theme: "Produto", items: ["Sugestões com inteligência artificial", "Modelos de saída personalizados"] },
    ],
  },
  it: {
    sectionLabel: "Un audio, molteplici risultati",
    headingPrefix: "Registra una volta. ",
    rotatingWords: ["Usalo", "Condividilo", "Trasformalo", "Applicalo"],
    headingSuffix: " ovunque",
    subtitle: "La stessa registrazione diventa tutto ciò di cui hai bisogno. Nessuna ri-registrazione. Nessuna rielaborazione. Scegli semplicemente il tuo formato.",
    yourRecording: "La tua registrazione",
    outputMode: "Modalità di output",
    outcomes: [
      {
        title: "Riepilogo",
        desc: "Panoramica concisa di ciò che è stato detto",
        expandedDesc: "Ottieni una panoramica concisa di tutto ciò che è stato discusso. Punti chiave, decisioni e conclusioni — distillati in un riepilogo chiaro e leggibile che ti evita di riascoltare l'intera registrazione.",
      },
      {
        title: "Attività",
        desc: "Elementi azionabili con responsabili",
        expandedDesc: "Estrai automaticamente gli elementi d'azione con responsabili chiari. Ogni 'me ne occupo io' e 'puoi gestire tu' diventa un'attività tracciabile — senza bisogno di prendere appunti manualmente.",
      },
      {
        title: "Piano d'azione",
        desc: "Passi verso i risultati",
        expandedDesc: "Trasforma le conversazioni in piani strutturati passo dopo passo. Chi fa cosa, entro quando e in che ordine — organizzato e pronto per l'esecuzione.",
      },
      {
        title: "Testo pulito",
        desc: "Trascrizione curata",
        expandedDesc: "L'audio grezzo diventa testo curato e leggibile. Parole di riempimento rimosse, grammatica corretta, paragrafi formati — pronto da condividere o archiviare.",
      },
      {
        title: "Report",
        desc: "Documento per la dirigenza",
        expandedDesc: "Genera documenti pronti per la dirigenza da qualsiasi conversazione. Struttura formale, metriche chiave, decisioni e raccomandazioni — pronto da presentare in pochi secondi.",
      },
      {
        title: "Messaggio",
        desc: "Follow-up pronto da inviare",
        expandedDesc: "Redigi e-mail e messaggi di follow-up direttamente dalle conversazioni. Contestualizzati, redatti professionalmente, pronti da copiare e inviare.",
      },
      {
        title: "Note di studio",
        desc: "Organizzate per l'apprendimento",
        expandedDesc: "Trasforma lezioni e discussioni in materiale di studio organizzato. Concetti chiave evidenziati, strutturati per argomento, ottimizzati per il ripasso e la memorizzazione.",
      },
      {
        title: "Idee",
        desc: "Pensieri catturati e organizzati",
        expandedDesc: "Cattura le sessioni di brainstorming e trasformale in concetti categorizzati e organizzati. Raggruppa per tema, classifica per potenziale, non perdere mai un pensiero creativo.",
      },
    ],
    cleanTextTitle: "Testo pulito",
    cleanTextP1: "Il team ha concordato di dare priorità al flusso di onboarding in questo sprint. L'attuale tasso di abbandono dopo la registrazione è troppo alto e richiede attenzione immediata.",
    cleanTextP2: "Alex si occuperà degli aggiornamenti dell'interfaccia mentre Maria prende in carico la redazione dell'e-mail e la sequenza di benvenuto. Una riunione di sincronizzazione è prevista per giovedì per verificare i progressi e adattare le priorità se necessario.",
    ideasTitle: "Idee",
    ideasThemes: [
      { theme: "Esperienza utente", items: ["Procedura di onboarding semplificata", "Tour interattivo del prodotto"] },
      { theme: "Crescita", items: ["Programma di incentivi per referral", "Modelli creati dalla community"] },
      { theme: "Prodotto", items: ["Suggerimenti basati sull'IA", "Modelli di output personalizzati"] },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Static outcome metadata (icons, gradients, mockup types)           */
/* ------------------------------------------------------------------ */

const outcomeMeta = [
  {
    gradient: "from-zinc-800 to-zinc-900",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    mockupType: "browser" as const,
    mockup: "summary",
  },
  {
    gradient: "from-indigo-600 to-indigo-700",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    mockupType: "browser" as const,
    mockup: "checklist",
  },
  {
    gradient: "from-violet-600 to-violet-700",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    mockupType: "browser" as const,
    mockup: "actionplan",
  },
  {
    gradient: "from-zinc-700 to-zinc-800",
    icon: "M4 6h16M4 12h16M4 18h12",
    mockupType: "card" as const,
    mockup: "cleantext",
  },
  {
    gradient: "from-slate-700 to-slate-800",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    mockupType: "browser" as const,
    mockup: "summary",
  },
  {
    gradient: "from-zinc-800 to-zinc-900",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    mockupType: "iphone" as const,
    mockup: "message",
  },
  {
    gradient: "from-purple-600 to-purple-700",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    mockupType: "browser" as const,
    mockup: "studynotes",
  },
  {
    gradient: "from-amber-600 to-amber-700",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    mockupType: "card" as const,
    mockup: "ideas",
  },
];

function CleanTextPreview({ locale }: { locale: string }) {
  const t = content[locale] ?? content.en;
  return (
    <div className="bg-white rounded-2xl border border-border-light shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.06)] p-6 max-w-md">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h12" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-foreground">{t.cleanTextTitle}</span>
      </div>
      <div className="space-y-3 text-sm text-muted leading-relaxed">
        <p>{t.cleanTextP1}</p>
        <p>{t.cleanTextP2}</p>
      </div>
    </div>
  );
}

function IdeasPreview({ locale }: { locale: string }) {
  const t = content[locale] ?? content.en;
  const colors = ["#6366f1", "#8b5cf6", "#a78bfa"];
  const ideas = t.ideasThemes.map((group, i) => ({ ...group, color: colors[i] }));

  return (
    <div className="bg-white rounded-2xl border border-border-light shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.06)] p-6 max-w-md">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-foreground">{t.ideasTitle}</span>
      </div>
      <div className="space-y-4">
        {ideas.map((group) => (
          <div key={group.theme}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider">{group.theme}</span>
            </div>
            {group.items.map((item, i) => (
              <div key={i} className="flex items-center gap-2 ml-4 mb-1">
                <span className="w-1 h-1 rounded-full bg-muted-light" />
                <span className="text-sm text-muted">{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function RenderMockup({ outcome, locale }: { outcome: (typeof outcomeMeta)[number] & { title: string }; locale: string }) {
  if (outcome.mockupType === "iphone") {
    return (
      <div className="flex justify-center">
        <IPhoneFrame>
          <div className="bg-background p-2">
            <MessageMockup />
          </div>
        </IPhoneFrame>
      </div>
    );
  }

  if (outcome.mockupType === "card") {
    if (outcome.mockup === "cleantext") return <CleanTextPreview locale={locale} />;
    if (outcome.mockup === "ideas") return <IdeasPreview locale={locale} />;
  }

  // Browser frame mockups
  return (
    <BrowserFrame url={`app.sythio.com/output/${outcome.title.toLowerCase().replace(" ", "-")}`}>
      {outcome.mockup === "summary" && <SummaryMockup />}
      {outcome.mockup === "checklist" && <ChecklistMockup />}
      {outcome.mockup === "actionplan" && <ActionPlanMockup />}
      {outcome.mockup === "studynotes" && <StudyNotesMockup />}
    </BrowserFrame>
  );
}

export default function MultipleOutcomes() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { locale } = useLanguage();
  const t = content[locale] ?? content.en;

  // Merge translated text with static metadata
  const outcomes = outcomeMeta.map((meta, i) => ({
    ...meta,
    title: t.outcomes[i].title,
    desc: t.outcomes[i].desc,
    expandedDesc: t.outcomes[i].expandedDesc,
  }));

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".outcome-card");
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0, scale: 0.92 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          once: true,
        },
      }
    );
  }, []);

  const handleCardClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-32 md:py-44 bg-white section-float-bg-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
            {t.sectionLabel}
          </span>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {t.headingPrefix}<RotatingText words={t.rotatingWords} className="text-zinc-400" />{t.headingSuffix}
          </TextReveal>
          <TextReveal tag="p" className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </TextReveal>
        </div>

        {/* Central audio indicator */}
        <ScrollScale className="flex justify-center mb-16">
          <div className="relative inline-flex items-center gap-4 px-8 py-4 rounded-full bg-foreground text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
            <div className="w-3.5 h-3.5 rounded-full bg-red-400 animate-pulse" />
            <span className="text-base font-medium">{t.yourRecording}</span>
            <span className="text-sm text-zinc-400 font-mono">3:42</span>
            {/* Connecting lines */}
            <div className="absolute -bottom-8 left-1/2 w-px h-8 bg-gradient-to-b from-zinc-400 to-transparent" />
          </div>
        </ScrollScale>

        {/* Cards grid */}
        <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`outcome-card group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                activeIndex === index
                  ? "bg-foreground/[0.03] border-foreground/20 shadow-[0_4px_16px_rgba(0,0,0,0.06),0_16px_48px_rgba(0,0,0,0.08)]"
                  : "bg-background border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)]"
              }`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-50/20 via-violet-50/10 to-transparent transition-opacity duration-500" />
              <div className="relative">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${outcome.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d={outcome.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">
                  {outcome.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {outcome.desc}
                </p>
                {/* Active indicator */}
                {activeIndex === index && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute top-4 right-4 w-2 h-2 rounded-full bg-foreground"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Expanded panel */}
        <AnimatePresence mode="wait">
          {activeIndex !== null && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="rounded-3xl border border-border-light bg-background p-8 md:p-12">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${outcomes[activeIndex].gradient} flex items-center justify-center shadow-lg`}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d={outcomes[activeIndex].icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {outcomes[activeIndex].title}
                      </h3>
                      <p className="text-sm text-muted">{t.outputMode}</p>
                    </div>
                  </div>
                  <button
                    aria-label="Close"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(null);
                    }}
                    className="w-10 h-10 rounded-full bg-white border border-border-light flex items-center justify-center text-muted hover:text-foreground hover:border-border transition-all duration-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <p className="text-base md:text-lg text-muted leading-relaxed">
                      {outcomes[activeIndex].expandedDesc}
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                  >
                    <RenderMockup outcome={outcomes[activeIndex]} locale={locale} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
