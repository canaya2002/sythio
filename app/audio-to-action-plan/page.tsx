"use client";

import Link from "next/link";
import { useLanguage } from "../components/i18n/language-context";
import type { Locale } from "../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Audio to Action Plan",
    title: "From Conversation to Structured Action Plan",
    subtitle:
      "Discussions produce direction, but rarely a plan you can execute. Sythio analyzes your conversations and builds structured, step-by-step action plans — with phases, owners, and priorities already in place.",
    whyLabel: "Why Action Plans",
    whyTitle: "More Than Tasks",
    whySubtitle:
      "A task list tells you what to do. An action plan tells you how to get there. Sythio understands the difference — and builds plans that reflect the structure, sequencing, and priorities discussed in your conversations.",
    why1Title: "Phases, not just items",
    why1Desc:
      "Work is grouped into logical phases that reflect the natural progression discussed in the conversation — what happens first, what depends on what.",
    why2Title: "Priorities built in",
    why2Desc:
      "Urgency and importance are inferred from the conversation. High-priority items surface at the top, so your team knows where to focus.",
    why3Title: "Dependencies mapped",
    why3Desc:
      "When one step depends on another, the plan reflects that relationship — preventing bottlenecks before they happen.",
    why4Title: "Timeline awareness",
    why4Desc:
      "Deadlines and timeframes mentioned in the conversation are captured and integrated into the plan structure.",
    howTitle: "Three steps to a structured plan",
    howSubtitle:
      "Record a conversation about what needs to happen. Sythio turns the discussion into an organized, executable plan.",
    step1Title: "Record or upload",
    step1Desc:
      "Capture a planning session, strategy discussion, or project kickoff — directly in Sythio or by uploading an existing file.",
    step2Title: "Sythio maps the plan",
    step2Desc:
      "The conversation is analyzed for goals, responsibilities, sequencing, and priorities. Speaker detection attributes ownership to the right people.",
    step3Title: "Get your action plan",
    step3Desc:
      "A structured, phased plan is delivered in seconds. Review it, refine it, or share it with your team — the heavy lifting is done.",
    whatLabel: "What You Get",
    whatTitle: "What a Sythio Action Plan Includes",
    whatSubtitle:
      "Not a flat list of to-dos. A real plan — organized, layered, and structured for execution.",
    feat1Title: "Phases",
    feat1Desc:
      "Work is organized into distinct phases that reflect the natural progression of the project — from immediate actions to longer-term goals.",
    feat2Title: "Responsible parties",
    feat2Desc:
      "Each action is attributed to the person who owns it, using speaker detection to match commitments to voices.",
    feat3Title: "Priorities",
    feat3Desc:
      "Items are ranked by urgency and importance, drawn from language cues and context in the conversation itself.",
    feat4Title: "Clear next steps",
    feat4Desc:
      "Every phase ends with concrete next steps — no ambiguity about what happens next or who initiates it.",
    moreLabel: "One Recording, Many Outputs",
    moreTitle: "From the Same Recording",
    moreSubtitle:
      "An action plan is one way to use a recording. The same audio can also produce summaries, task lists, executive reports, and more — all processed from a single upload.",
    more1Title: "Summaries",
    more1Desc:
      "A concise overview of what was discussed — decisions, key topics, and takeaways.",
    more2Title: "Task lists",
    more2Desc:
      "Every commitment and action item, extracted and attributed to the right person.",
    more3Title: "Executive reports",
    more3Desc:
      "Formal, presentation-ready documents for stakeholders who were not in the room.",
    more4Title: "All 9 formats",
    more4Desc:
      "Summaries, tasks, plans, reports, messages, study notes, clean text, ideas, and more.",
    outcome: "Outcome",
    rel1Name: "Action Plans",
    rel2Name: "Audio to Summary",
    rel3Name: "Audio to Tasks",
    rel4Name: "Meetings",
    ctaTitle: "Turn discussions into direction.",
    ctaSubtitle:
      "Every conversation becomes a structured plan — phased, prioritized, and ready to execute.",
  },
  es: {
    label: "Audio a Plan de Accion",
    title: "De conversacion a plan de accion estructurado",
    subtitle:
      "Las discusiones producen direccion, pero rara vez un plan que puedas ejecutar. Sythio analiza tus conversaciones y construye planes de accion estructurados paso a paso — con fases, responsables y prioridades ya establecidas.",
    whyLabel: "Por que planes de accion",
    whyTitle: "Mas que tareas",
    whySubtitle:
      "Una lista de tareas te dice que hacer. Un plan de accion te dice como llegar ahi. Sythio entiende la diferencia — y construye planes que reflejan la estructura, secuenciacion y prioridades discutidas en tus conversaciones.",
    why1Title: "Fases, no solo elementos",
    why1Desc:
      "El trabajo se agrupa en fases logicas que reflejan la progresion natural discutida en la conversacion — que sucede primero, que depende de que.",
    why2Title: "Prioridades integradas",
    why2Desc:
      "La urgencia e importancia se infieren de la conversacion. Los elementos de alta prioridad aparecen primero, para que tu equipo sepa donde enfocarse.",
    why3Title: "Dependencias mapeadas",
    why3Desc:
      "Cuando un paso depende de otro, el plan refleja esa relacion — previniendo cuellos de botella antes de que ocurran.",
    why4Title: "Conciencia de plazos",
    why4Desc:
      "Los plazos y marcos temporales mencionados en la conversacion se capturan e integran en la estructura del plan.",
    howTitle: "Tres pasos para un plan estructurado",
    howSubtitle:
      "Graba una conversacion sobre lo que necesita suceder. Sythio convierte la discusion en un plan organizado y ejecutable.",
    step1Title: "Graba o sube",
    step1Desc:
      "Captura una sesion de planificacion, discusion estrategica o inicio de proyecto — directamente en Sythio o subiendo un archivo existente.",
    step2Title: "Sythio mapea el plan",
    step2Desc:
      "La conversacion se analiza para objetivos, responsabilidades, secuenciacion y prioridades. La deteccion de hablantes atribuye la responsabilidad a las personas correctas.",
    step3Title: "Obtiene tu plan de accion",
    step3Desc:
      "Un plan estructurado y por fases se entrega en segundos. Revisalo, refinalo o compartelo con tu equipo — el trabajo pesado esta hecho.",
    whatLabel: "Lo que obtienes",
    whatTitle: "Lo que incluye un plan de accion de Sythio",
    whatSubtitle:
      "No es una lista plana de pendientes. Un plan real — organizado, en capas y estructurado para la ejecucion.",
    feat1Title: "Fases",
    feat1Desc:
      "El trabajo se organiza en fases distintas que reflejan la progresion natural del proyecto — desde acciones inmediatas hasta objetivos a largo plazo.",
    feat2Title: "Partes responsables",
    feat2Desc:
      "Cada accion se atribuye a la persona responsable, usando la deteccion de hablantes para vincular compromisos con voces.",
    feat3Title: "Prioridades",
    feat3Desc:
      "Los elementos se clasifican por urgencia e importancia, extraidos de senales linguisticas y contexto de la conversacion.",
    feat4Title: "Proximos pasos claros",
    feat4Desc:
      "Cada fase termina con proximos pasos concretos — sin ambiguedad sobre que sigue o quien lo inicia.",
    moreLabel: "Una grabacion, muchos resultados",
    moreTitle: "De la misma grabacion",
    moreSubtitle:
      "Un plan de accion es una forma de usar una grabacion. El mismo audio tambien puede producir resumenes, listas de tareas, informes ejecutivos y mas — todo procesado desde una sola carga.",
    more1Title: "Resumenes",
    more1Desc:
      "Una vision concisa de lo que se discutio — decisiones, temas clave y conclusiones.",
    more2Title: "Listas de tareas",
    more2Desc:
      "Cada compromiso y elemento de accion, extraido y atribuido a la persona correcta.",
    more3Title: "Informes ejecutivos",
    more3Desc:
      "Documentos formales listos para presentar a partes interesadas que no estuvieron en la sala.",
    more4Title: "Los 9 formatos",
    more4Desc:
      "Resumenes, tareas, planes, informes, mensajes, notas de estudio, texto limpio, ideas y mas.",
    outcome: "Resultado",
    rel1Name: "Planes de Accion",
    rel2Name: "Audio a Resumen",
    rel3Name: "Audio a Tareas",
    rel4Name: "Reuniones",
    ctaTitle: "Convierte discusiones en direccion.",
    ctaSubtitle:
      "Cada conversacion se convierte en un plan estructurado — por fases, priorizado y listo para ejecutar.",
  },
  fr: {
    label: "Audio en Plan d'action",
    title: "De la conversation au plan d'action structure",
    subtitle:
      "Les discussions produisent une direction, mais rarement un plan executable. Sythio analyse vos conversations et construit des plans d'action structures etape par etape — avec des phases, des responsables et des priorites deja en place.",
    whyLabel: "Pourquoi les plans d'action",
    whyTitle: "Plus que des taches",
    whySubtitle:
      "Une liste de taches vous dit quoi faire. Un plan d'action vous dit comment y arriver. Sythio comprend la difference — et construit des plans qui refletent la structure, le sequencement et les priorites discutes dans vos conversations.",
    why1Title: "Des phases, pas juste des elements",
    why1Desc:
      "Le travail est regroupe en phases logiques qui refletent la progression naturelle discutee dans la conversation — ce qui se passe d'abord, ce qui depend de quoi.",
    why2Title: "Priorites integrees",
    why2Desc:
      "L'urgence et l'importance sont inferees de la conversation. Les elements haute priorite apparaissent en premier, pour que votre equipe sache ou se concentrer.",
    why3Title: "Dependances cartographiees",
    why3Desc:
      "Quand une etape depend d'une autre, le plan reflete cette relation — prevenant les goulots d'etranglement avant qu'ils ne surviennent.",
    why4Title: "Conscience des delais",
    why4Desc:
      "Les echeances et les delais mentionnes dans la conversation sont captures et integres dans la structure du plan.",
    howTitle: "Trois etapes pour un plan structure",
    howSubtitle:
      "Enregistrez une conversation sur ce qui doit se passer. Sythio transforme la discussion en un plan organise et executable.",
    step1Title: "Enregistrez ou telechargez",
    step1Desc:
      "Capturez une session de planification, une discussion strategique ou un lancement de projet — directement dans Sythio ou en telechargeant un fichier existant.",
    step2Title: "Sythio cartographie le plan",
    step2Desc:
      "La conversation est analysee pour les objectifs, responsabilites, sequencement et priorites. La detection des locuteurs attribue la responsabilite aux bonnes personnes.",
    step3Title: "Obtenez votre plan d'action",
    step3Desc:
      "Un plan structure et phase est livre en quelques secondes. Consultez-le, affinez-le ou partagez-le avec votre equipe — le gros du travail est fait.",
    whatLabel: "Ce que vous obtenez",
    whatTitle: "Ce qu'inclut un plan d'action Sythio",
    whatSubtitle:
      "Pas une liste plate de choses a faire. Un vrai plan — organise, en couches et structure pour l'execution.",
    feat1Title: "Phases",
    feat1Desc:
      "Le travail est organise en phases distinctes qui refletent la progression naturelle du projet — des actions immediates aux objectifs a long terme.",
    feat2Title: "Parties responsables",
    feat2Desc:
      "Chaque action est attribuee a la personne qui en est responsable, en utilisant la detection des locuteurs pour associer les engagements aux voix.",
    feat3Title: "Priorites",
    feat3Desc:
      "Les elements sont classes par urgence et importance, tires des indices linguistiques et du contexte de la conversation.",
    feat4Title: "Prochaines etapes claires",
    feat4Desc:
      "Chaque phase se termine par des prochaines etapes concretes — aucune ambiguite sur ce qui suit ou qui l'initie.",
    moreLabel: "Un enregistrement, plusieurs resultats",
    moreTitle: "A partir du meme enregistrement",
    moreSubtitle:
      "Un plan d'action est une facon d'utiliser un enregistrement. Le meme audio peut aussi produire des resumes, des listes de taches, des rapports executifs et plus — le tout traite a partir d'un seul envoi.",
    more1Title: "Resumes",
    more1Desc:
      "Une vue d'ensemble concise de ce qui a ete discute — decisions, sujets cles et conclusions.",
    more2Title: "Listes de taches",
    more2Desc:
      "Chaque engagement et element d'action, extrait et attribue a la bonne personne.",
    more3Title: "Rapports executifs",
    more3Desc:
      "Documents formels prets pour la presentation aux parties prenantes absentes.",
    more4Title: "Les 9 formats",
    more4Desc:
      "Resumes, taches, plans, rapports, messages, notes d'etude, texte nettoye, idees et plus.",
    outcome: "Resultat",
    rel1Name: "Plans d'action",
    rel2Name: "Audio en Resume",
    rel3Name: "Audio en Taches",
    rel4Name: "Reunions",
    ctaTitle: "Transformez les discussions en direction.",
    ctaSubtitle:
      "Chaque conversation devient un plan structure — phase, priorise et pret a executer.",
  },
  pt: {
    label: "Audio para Plano de Acao",
    title: "Da conversa ao plano de acao estruturado",
    subtitle:
      "Discussoes produzem direcao, mas raramente um plano que voce possa executar. Sythio analisa suas conversas e constroi planos de acao estruturados passo a passo — com fases, responsaveis e prioridades ja definidas.",
    whyLabel: "Por que planos de acao",
    whyTitle: "Mais que tarefas",
    whySubtitle:
      "Uma lista de tarefas diz o que fazer. Um plano de acao diz como chegar la. Sythio entende a diferenca — e constroi planos que refletem a estrutura, sequenciamento e prioridades discutidas em suas conversas.",
    why1Title: "Fases, nao apenas itens",
    why1Desc:
      "O trabalho e agrupado em fases logicas que refletem a progressao natural discutida na conversa — o que acontece primeiro, o que depende do que.",
    why2Title: "Prioridades integradas",
    why2Desc:
      "Urgencia e importancia sao inferidas da conversa. Itens de alta prioridade aparecem primeiro, para que sua equipe saiba onde focar.",
    why3Title: "Dependencias mapeadas",
    why3Desc:
      "Quando um passo depende de outro, o plano reflete essa relacao — prevenindo gargalos antes que acontecam.",
    why4Title: "Consciencia de prazos",
    why4Desc:
      "Prazos e cronogramas mencionados na conversa sao capturados e integrados na estrutura do plano.",
    howTitle: "Tres passos para um plano estruturado",
    howSubtitle:
      "Grave uma conversa sobre o que precisa acontecer. Sythio transforma a discussao em um plano organizado e executavel.",
    step1Title: "Grave ou envie",
    step1Desc:
      "Capture uma sessao de planejamento, discussao estrategica ou kickoff de projeto — diretamente no Sythio ou enviando um arquivo existente.",
    step2Title: "Sythio mapeia o plano",
    step2Desc:
      "A conversa e analisada para objetivos, responsabilidades, sequenciamento e prioridades. A deteccao de falantes atribui a responsabilidade as pessoas corretas.",
    step3Title: "Receba seu plano de acao",
    step3Desc:
      "Um plano estruturado e faseado e entregue em segundos. Revise-o, refine-o ou compartilhe-o com sua equipe — o trabalho pesado esta feito.",
    whatLabel: "O que voce recebe",
    whatTitle: "O que um plano de acao do Sythio inclui",
    whatSubtitle:
      "Nao e uma lista plana de pendencias. Um plano real — organizado, em camadas e estruturado para execucao.",
    feat1Title: "Fases",
    feat1Desc:
      "O trabalho e organizado em fases distintas que refletem a progressao natural do projeto — de acoes imediatas a objetivos de longo prazo.",
    feat2Title: "Partes responsaveis",
    feat2Desc:
      "Cada acao e atribuida a pessoa responsavel, usando a deteccao de falantes para associar compromissos a vozes.",
    feat3Title: "Prioridades",
    feat3Desc:
      "Os itens sao classificados por urgencia e importancia, extraidos de sinais linguisticos e contexto da conversa.",
    feat4Title: "Proximos passos claros",
    feat4Desc:
      "Cada fase termina com proximos passos concretos — sem ambiguidade sobre o que vem a seguir ou quem o inicia.",
    moreLabel: "Uma gravacao, muitos resultados",
    moreTitle: "Da mesma gravacao",
    moreSubtitle:
      "Um plano de acao e uma forma de usar uma gravacao. O mesmo audio tambem pode produzir resumos, listas de tarefas, relatorios executivos e mais — tudo processado a partir de um unico envio.",
    more1Title: "Resumos",
    more1Desc:
      "Uma visao concisa do que foi discutido — decisoes, temas-chave e conclusoes.",
    more2Title: "Listas de tarefas",
    more2Desc:
      "Cada compromisso e item de acao, extraido e atribuido a pessoa correta.",
    more3Title: "Relatorios executivos",
    more3Desc:
      "Documentos formais prontos para apresentacao a partes interessadas ausentes.",
    more4Title: "Todos os 9 formatos",
    more4Desc:
      "Resumos, tarefas, planos, relatorios, mensagens, notas de estudo, texto limpo, ideias e mais.",
    outcome: "Resultado",
    rel1Name: "Planos de Acao",
    rel2Name: "Audio para Resumo",
    rel3Name: "Audio para Tarefas",
    rel4Name: "Reunioes",
    ctaTitle: "Transforme discussoes em direcao.",
    ctaSubtitle:
      "Cada conversa se torna um plano estruturado — faseado, priorizado e pronto para executar.",
  },
  it: {
    label: "Audio in Piano d'azione",
    title: "Dalla conversazione al piano d'azione strutturato",
    subtitle:
      "Le discussioni producono direzione, ma raramente un piano eseguibile. Sythio analizza le tue conversazioni e costruisce piani d'azione strutturati passo dopo passo — con fasi, responsabili e priorita gia stabilite.",
    whyLabel: "Perche i piani d'azione",
    whyTitle: "Piu delle attivita",
    whySubtitle:
      "Una lista di attivita ti dice cosa fare. Un piano d'azione ti dice come arrivarci. Sythio capisce la differenza — e costruisce piani che riflettono la struttura, la sequenza e le priorita discusse nelle tue conversazioni.",
    why1Title: "Fasi, non solo elementi",
    why1Desc:
      "Il lavoro e raggruppato in fasi logiche che riflettono la progressione naturale discussa nella conversazione — cosa succede prima, cosa dipende da cosa.",
    why2Title: "Priorita integrate",
    why2Desc:
      "Urgenza e importanza vengono inferite dalla conversazione. Gli elementi ad alta priorita emergono in cima, cosi il tuo team sa dove concentrarsi.",
    why3Title: "Dipendenze mappate",
    why3Desc:
      "Quando un passo dipende da un altro, il piano riflette quella relazione — prevenendo i colli di bottiglia prima che accadano.",
    why4Title: "Consapevolezza delle scadenze",
    why4Desc:
      "Le scadenze e i tempi menzionati nella conversazione vengono catturati e integrati nella struttura del piano.",
    howTitle: "Tre passaggi per un piano strutturato",
    howSubtitle:
      "Registra una conversazione su cio che deve accadere. Sythio trasforma la discussione in un piano organizzato ed eseguibile.",
    step1Title: "Registra o carica",
    step1Desc:
      "Cattura una sessione di pianificazione, una discussione strategica o un kickoff di progetto — direttamente in Sythio o caricando un file esistente.",
    step2Title: "Sythio mappa il piano",
    step2Desc:
      "La conversazione viene analizzata per obiettivi, responsabilita, sequenziamento e priorita. Il rilevamento dei parlanti attribuisce la responsabilita alle persone giuste.",
    step3Title: "Ottieni il tuo piano d'azione",
    step3Desc:
      "Un piano strutturato e per fasi viene consegnato in pochi secondi. Consultalo, perfezionalo o condividilo con il tuo team — il lavoro pesante e fatto.",
    whatLabel: "Cosa ottieni",
    whatTitle: "Cosa include un piano d'azione Sythio",
    whatSubtitle:
      "Non una lista piatta di cose da fare. Un piano reale — organizzato, stratificato e strutturato per l'esecuzione.",
    feat1Title: "Fasi",
    feat1Desc:
      "Il lavoro e organizzato in fasi distinte che riflettono la progressione naturale del progetto — dalle azioni immediate agli obiettivi a lungo termine.",
    feat2Title: "Parti responsabili",
    feat2Desc:
      "Ogni azione e attribuita alla persona responsabile, usando il rilevamento dei parlanti per associare gli impegni alle voci.",
    feat3Title: "Priorita",
    feat3Desc:
      "Gli elementi sono classificati per urgenza e importanza, tratti da segnali linguistici e contesto nella conversazione.",
    feat4Title: "Prossimi passi chiari",
    feat4Desc:
      "Ogni fase si conclude con prossimi passi concreti — nessuna ambiguita su cosa succede dopo o chi lo inizia.",
    moreLabel: "Una registrazione, molti risultati",
    moreTitle: "Dalla stessa registrazione",
    moreSubtitle:
      "Un piano d'azione e un modo per utilizzare una registrazione. Lo stesso audio puo anche produrre riassunti, liste di attivita, report esecutivi e altro — il tutto elaborato da un singolo caricamento.",
    more1Title: "Riassunti",
    more1Desc:
      "Una panoramica concisa di cio che e stato discusso — decisioni, argomenti chiave e conclusioni.",
    more2Title: "Liste di attivita",
    more2Desc:
      "Ogni impegno e elemento d'azione, estratto e attribuito alla persona giusta.",
    more3Title: "Report esecutivi",
    more3Desc:
      "Documenti formali pronti per la presentazione agli stakeholder assenti.",
    more4Title: "Tutti i 9 formati",
    more4Desc:
      "Riassunti, attivita, piani, report, messaggi, note di studio, testo pulito, idee e altro.",
    outcome: "Risultato",
    rel1Name: "Piani d'azione",
    rel2Name: "Audio in Riassunto",
    rel3Name: "Audio in Attivita",
    rel4Name: "Riunioni",
    ctaTitle: "Trasforma le discussioni in direzione.",
    ctaSubtitle:
      "Ogni conversazione diventa un piano strutturato — per fasi, prioritizzato e pronto per l'esecuzione.",
  },
};

export default function AudioToActionPlanPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

  return (
    <PageReveal>
      {/* ─── Hero ─── */}
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

      {/* ─── More Than Tasks ─── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
                {c.whyLabel}
              </p>
              <TextReveal>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  {c.whyTitle}
                </h2>
              </TextReveal>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                {c.whySubtitle}
              </p>
            </div>
            <GsapStagger stagger={0.08}>
              <div className="space-y-6">
                {[
                  { title: c.why1Title, description: c.why1Desc },
                  { title: c.why2Title, description: c.why2Desc },
                  { title: c.why3Title, description: c.why3Desc },
                  { title: c.why4Title, description: c.why4Desc },
                ].map((item) => (
                  <ScrollScale key={item.title}>
                    <div className="p-6 rounded-2xl bg-background border border-border-light">
                      <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollScale>
                ))}
              </div>
            </GsapStagger>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            {s("common.howItWorks")}
          </p>
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.howTitle}
            </h2>
          </TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            {c.howSubtitle}
          </p>

          <GsapStagger stagger={0.08}>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: c.step1Title, description: c.step1Desc },
                { step: "02", title: c.step2Title, description: c.step2Desc },
                { step: "03", title: c.step3Title, description: c.step3Desc },
              ].map((item) => (
                <ScrollScale key={item.step}>
                  <div className="group p-8 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                    <span className="text-xs font-bold tracking-wider text-muted-light">{item.step}</span>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── What a Sythio Action Plan Includes ─── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            {c.whatLabel}
          </p>
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.whatTitle}
            </h2>
          </TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            {c.whatSubtitle}
          </p>

          <GsapStagger stagger={0.08}>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: c.feat1Title, description: c.feat1Desc },
                { title: c.feat2Title, description: c.feat2Desc },
                { title: c.feat3Title, description: c.feat3Desc },
                { title: c.feat4Title, description: c.feat4Desc },
              ].map((item) => (
                <ScrollScale key={item.title}>
                  <div className="p-7 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                    <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── From the Same Recording ─── */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.moreLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.moreTitle}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              {c.moreSubtitle}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: c.more1Title, description: c.more1Desc, href: "/audio-to-summary" },
                { title: c.more2Title, description: c.more2Desc, href: "/audio-to-tasks" },
                { title: c.more3Title, description: c.more3Desc, href: "/features" },
                { title: c.more4Title, description: c.more4Desc, href: "/features" },
              ].map((item) => (
                <ScrollScale key={item.title}>
                  <Link
                    href={item.href}
                    className="group block p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
                  >
                    <h3 className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">
                      {s("common.learnMore")} &rarr;
                    </span>
                  </Link>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── Related ─── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">
              {s("common.related")}
            </h2>
          </TextReveal>
          <GsapStagger stagger={0.08}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollScale>
                <Link href="/features/action-plans" className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel1Name}</p>
                </Link>
              </ScrollScale>
              <ScrollScale>
                <Link href="/audio-to-summary" className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel2Name}</p>
                </Link>
              </ScrollScale>
              <ScrollScale>
                <Link href="/audio-to-tasks" className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel3Name}</p>
                </Link>
              </ScrollScale>
              <ScrollScale>
                <Link href="/use-cases/meetings" className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel4Name}</p>
                </Link>
              </ScrollScale>
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-32 md:py-44 bg-background animated-gradient-bg overflow-hidden">
        <div className="hero-orb hero-orb-2" />
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
            <Link
              href="/product"
              className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
            >
              {s("common.exploreProduct")}
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">{s("common.freePlan")}</p>
        </div>
      </section>
    </PageReveal>
  );
}
