"use client";
import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Features",
    title: "From Conversation to Structured Action Plan",
    subtitle: "Conversations generate ideas, decisions, and direction. Sythio organizes all of it into a step-by-step action plan with clear owners, priorities, and sequencing.",
    diffLabel: "The Difference",
    diffTitle: "More Than a Task List",
    diffDesc1: "A task list tells you what needs to happen. An action plan tells you what needs to happen, in what order, who is responsible, and how the pieces connect.",
    diffDesc2: "Sythio analyzes the full conversation and produces a plan that respects dependencies, highlights priorities, and groups related work together. The result is a document you can hand to a team and say: \"Here is what we do next.\"",
    planLabel: "Action Plan",
    phase1: "Phase 1 — Immediate",
    planTask1: "Finalize project scope document",
    planTask1Note: "Alex — by end of day",
    planTask2: "Share scope with stakeholders for review",
    planTask2Note: "Alex — after step 1",
    phase2: "Phase 2 — This Week",
    planTask3: "Gather budget estimates from each team",
    planTask3Note: "Morgan — by Wednesday",
    planTask4: "Draft initial timeline and resource plan",
    planTask4Note: "Jordan — by Friday",
    processLabel: "Process",
    processTitle: "How Action Plans Are Built",
    processDesc: "Sythio does not simply list what was said. It interprets the conversation, understands relationships between tasks, and creates a plan that reflects how the work should actually unfold.",
    step1Title: "Conversation Analysis",
    step1Desc: "Sythio processes the full recording, identifying decisions, commitments, blockers, and dependencies discussed across the conversation.",
    step2Title: "Structure and Sequence",
    step2Desc: "Tasks are organized into phases based on urgency, dependencies, and logical flow. What needs to happen first goes first.",
    step3Title: "Assign and Deliver",
    step3Desc: "Each step is assigned to the right person. The finished plan is ready to share, export, or act on immediately.",
    qualityLabel: "Quality",
    qualityTitle: "What a Sythio Action Plan Includes",
    q1Title: "Phased Steps",
    q1Desc: "Work is grouped into logical phases — immediate, short-term, and follow-up — so teams know what to tackle first and what can wait.",
    q2Title: "Clear Ownership",
    q2Desc: "Every step has a name attached. Combined with speaker detection, ownership is determined from who actually committed during the conversation.",
    q3Title: "Dependencies Mapped",
    q3Desc: "Steps that depend on other steps are sequenced correctly. The plan reflects the real order of operations, not just a flat list.",
    q4Title: "Priorities Highlighted",
    q4Desc: "Critical and time-sensitive items are flagged. Your team knows exactly where to focus energy and attention first.",
    q5Title: "Context Preserved",
    q5Desc: "Each step includes enough context from the original conversation so that anyone reading the plan understands why it exists and what it means.",
    q6Title: "Ready to Share",
    q6Desc: "Export as clean text, copy to your project management tool, or share directly with your team. The plan is formatted and ready to use.",
    useCasesLabel: "Use Cases",
    useCasesTitle: "Where Action Plans Make a Difference",
    uc1Title: "Strategy Meetings",
    uc1Desc: "Strategic discussions often end with ambiguity. An action plan crystallizes the direction into concrete steps the team can execute on.",
    uc2Title: "Project Kickoffs",
    uc2Desc: "Kickoff meetings set the stage. Sythio captures the agreed-upon plan, assigns responsibilities, and ensures everyone leaves aligned on what happens next.",
    uc3Title: "Brainstorming Sessions",
    uc3Desc: "Ideas generated in brainstorms need structure to become real. Sythio turns creative chaos into an organized plan with clear next steps.",
    relTaskExtraction: "Task Extraction",
    relSpeakerDetection: "Speaker Detection",
    relAISummaries: "AI Summaries",
    relMeetings: "Meetings",
    ctaTitle: "Turn Talk Into a Plan That Works",
    ctaDesc: "Every productive conversation deserves a structured follow-through. Sythio builds the plan so your team can focus on execution.",
  },
  es: {
    label: "Funciones",
    title: "De la conversacion al plan de accion estructurado",
    subtitle: "Las conversaciones generan ideas, decisiones y direccion. Sythio organiza todo en un plan de accion paso a paso con responsables claros, prioridades y secuenciacion.",
    diffLabel: "La diferencia",
    diffTitle: "Mas que una lista de tareas",
    diffDesc1: "Una lista de tareas te dice que hay que hacer. Un plan de accion te dice que hay que hacer, en que orden, quien es responsable y como se conectan las piezas.",
    diffDesc2: "Sythio analiza la conversacion completa y produce un plan que respeta dependencias, destaca prioridades y agrupa el trabajo relacionado. El resultado es un documento que puedes entregar a un equipo y decir: \"Esto es lo que hacemos a continuacion.\"",
    planLabel: "Plan de accion",
    phase1: "Fase 1 — Inmediato",
    planTask1: "Finalizar documento de alcance del proyecto",
    planTask1Note: "Alex — para fin del dia",
    planTask2: "Compartir alcance con interesados para revision",
    planTask2Note: "Alex — despues del paso 1",
    phase2: "Fase 2 — Esta semana",
    planTask3: "Reunir estimaciones de presupuesto de cada equipo",
    planTask3Note: "Morgan — para el miercoles",
    planTask4: "Elaborar cronograma inicial y plan de recursos",
    planTask4Note: "Jordan — para el viernes",
    processLabel: "Proceso",
    processTitle: "Como se construyen los planes de accion",
    processDesc: "Sythio no simplemente lista lo que se dijo. Interpreta la conversacion, entiende las relaciones entre tareas y crea un plan que refleja como deberia desarrollarse realmente el trabajo.",
    step1Title: "Analisis de la conversacion",
    step1Desc: "Sythio procesa la grabacion completa, identificando decisiones, compromisos, bloqueos y dependencias discutidas.",
    step2Title: "Estructura y secuencia",
    step2Desc: "Las tareas se organizan en fases segun urgencia, dependencias y flujo logico. Lo que necesita pasar primero va primero.",
    step3Title: "Asignar y entregar",
    step3Desc: "Cada paso se asigna a la persona correcta. El plan terminado esta listo para compartir, exportar o actuar de inmediato.",
    qualityLabel: "Calidad",
    qualityTitle: "Que incluye un plan de accion de Sythio",
    q1Title: "Pasos por fases",
    q1Desc: "El trabajo se agrupa en fases logicas — inmediato, corto plazo y seguimiento — para que los equipos sepan que abordar primero y que puede esperar.",
    q2Title: "Responsabilidad clara",
    q2Desc: "Cada paso tiene un nombre adjunto. Combinado con la deteccion de hablantes, la responsabilidad se determina a partir de quien realmente se comprometio.",
    q3Title: "Dependencias mapeadas",
    q3Desc: "Los pasos que dependen de otros se secuencian correctamente. El plan refleja el orden real de operaciones, no solo una lista plana.",
    q4Title: "Prioridades destacadas",
    q4Desc: "Los elementos criticos y sensibles al tiempo se marcan. Tu equipo sabe exactamente donde enfocar la energia y atencion primero.",
    q5Title: "Contexto preservado",
    q5Desc: "Cada paso incluye suficiente contexto de la conversacion original para que cualquiera que lea el plan entienda por que existe y que significa.",
    q6Title: "Listo para compartir",
    q6Desc: "Exporta como texto limpio, copia a tu herramienta de gestion de proyectos o comparte directamente con tu equipo. El plan esta formateado y listo para usar.",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Donde los planes de accion marcan la diferencia",
    uc1Title: "Reuniones estrategicas",
    uc1Desc: "Las discusiones estrategicas a menudo terminan con ambiguedad. Un plan de accion cristaliza la direccion en pasos concretos que el equipo puede ejecutar.",
    uc2Title: "Lanzamientos de proyectos",
    uc2Desc: "Las reuniones de lanzamiento establecen el escenario. Sythio captura el plan acordado, asigna responsabilidades y asegura que todos salgan alineados.",
    uc3Title: "Sesiones de lluvia de ideas",
    uc3Desc: "Las ideas generadas en lluvias de ideas necesitan estructura para hacerse realidad. Sythio convierte el caos creativo en un plan organizado con proximos pasos claros.",
    relTaskExtraction: "Extraccion de tareas",
    relSpeakerDetection: "Deteccion de hablantes",
    relAISummaries: "Resumenes IA",
    relMeetings: "Reuniones",
    ctaTitle: "Convierte la charla en un plan que funciona",
    ctaDesc: "Cada conversacion productiva merece un seguimiento estructurado. Sythio construye el plan para que tu equipo pueda enfocarse en la ejecucion.",
  },
  fr: {
    label: "Fonctionnalites",
    title: "De la conversation au plan d'action structure",
    subtitle: "Les conversations generent des idees, des decisions et une direction. Sythio organise tout cela en un plan d'action etape par etape avec des responsables clairs, des priorites et un sequencement.",
    diffLabel: "La difference",
    diffTitle: "Plus qu'une liste de taches",
    diffDesc1: "Une liste de taches vous dit ce qui doit etre fait. Un plan d'action vous dit ce qui doit etre fait, dans quel ordre, qui est responsable et comment les pieces s'assemblent.",
    diffDesc2: "Sythio analyse la conversation complete et produit un plan qui respecte les dependances, met en evidence les priorites et regroupe le travail lie. Le resultat est un document que vous pouvez remettre a une equipe.",
    planLabel: "Plan d'action",
    phase1: "Phase 1 — Immediat",
    planTask1: "Finaliser le document de portee du projet",
    planTask1Note: "Alex — avant la fin de la journee",
    planTask2: "Partager la portee avec les parties prenantes",
    planTask2Note: "Alex — apres l'etape 1",
    phase2: "Phase 2 — Cette semaine",
    planTask3: "Recueillir les estimations budgetaires de chaque equipe",
    planTask3Note: "Morgan — d'ici mercredi",
    planTask4: "Rediger le calendrier initial et le plan de ressources",
    planTask4Note: "Jordan — d'ici vendredi",
    processLabel: "Processus",
    processTitle: "Comment les plans d'action sont construits",
    processDesc: "Sythio ne se contente pas de lister ce qui a ete dit. Il interprete la conversation, comprend les relations entre les taches et cree un plan qui reflete comment le travail devrait reellement se derouler.",
    step1Title: "Analyse de la conversation",
    step1Desc: "Sythio traite l'enregistrement complet, identifiant les decisions, engagements, bloqueurs et dependances discutes.",
    step2Title: "Structure et sequence",
    step2Desc: "Les taches sont organisees en phases selon l'urgence, les dependances et le flux logique. Ce qui doit se passer en premier vient en premier.",
    step3Title: "Attribuer et livrer",
    step3Desc: "Chaque etape est attribuee a la bonne personne. Le plan fini est pret a etre partage, exporte ou mis en action immediatement.",
    qualityLabel: "Qualite",
    qualityTitle: "Ce qu'inclut un plan d'action Sythio",
    q1Title: "Etapes par phases",
    q1Desc: "Le travail est groupe en phases logiques — immediat, court terme et suivi — pour que les equipes sachent quoi aborder en premier.",
    q2Title: "Responsabilite claire",
    q2Desc: "Chaque etape a un nom attache. Combine avec la detection des intervenants, la responsabilite est determinee a partir de qui s'est reellement engage.",
    q3Title: "Dependances cartographiees",
    q3Desc: "Les etapes qui dependent d'autres sont sequencees correctement. Le plan reflete le veritable ordre des operations.",
    q4Title: "Priorites mises en evidence",
    q4Desc: "Les elements critiques et sensibles au temps sont signales. Votre equipe sait exactement ou concentrer l'energie en premier.",
    q5Title: "Contexte preserve",
    q5Desc: "Chaque etape inclut suffisamment de contexte de la conversation originale pour que quiconque lisant le plan comprenne pourquoi il existe.",
    q6Title: "Pret a partager",
    q6Desc: "Exportez en texte propre, copiez vers votre outil de gestion de projet ou partagez directement avec votre equipe. Le plan est formate et pret a l'emploi.",
    useCasesLabel: "Cas d'utilisation",
    useCasesTitle: "Ou les plans d'action font la difference",
    uc1Title: "Reunions strategiques",
    uc1Desc: "Les discussions strategiques se terminent souvent dans l'ambiguite. Un plan d'action cristallise la direction en etapes concretes executables.",
    uc2Title: "Lancements de projets",
    uc2Desc: "Les reunions de lancement posent le cadre. Sythio capture le plan convenu, attribue les responsabilites et s'assure que tout le monde repart aligne.",
    uc3Title: "Sessions de brainstorming",
    uc3Desc: "Les idees generees en brainstorming ont besoin de structure pour devenir realite. Sythio transforme le chaos creatif en un plan organise.",
    relTaskExtraction: "Extraction de taches",
    relSpeakerDetection: "Detection des intervenants",
    relAISummaries: "Resumes IA",
    relMeetings: "Reunions",
    ctaTitle: "Transformez la discussion en un plan qui fonctionne",
    ctaDesc: "Chaque conversation productive merite un suivi structure. Sythio construit le plan pour que votre equipe puisse se concentrer sur l'execution.",
  },
  pt: {
    label: "Recursos",
    title: "Da conversa ao plano de acao estruturado",
    subtitle: "Conversas geram ideias, decisoes e direcao. O Sythio organiza tudo em um plano de acao passo a passo com responsaveis claros, prioridades e sequenciamento.",
    diffLabel: "A diferenca",
    diffTitle: "Mais que uma lista de tarefas",
    diffDesc1: "Uma lista de tarefas diz o que precisa acontecer. Um plano de acao diz o que precisa acontecer, em que ordem, quem e responsavel e como as pecas se conectam.",
    diffDesc2: "O Sythio analisa a conversa completa e produz um plano que respeita dependencias, destaca prioridades e agrupa trabalho relacionado. O resultado e um documento que voce pode entregar a uma equipe.",
    planLabel: "Plano de acao",
    phase1: "Fase 1 — Imediato",
    planTask1: "Finalizar documento de escopo do projeto",
    planTask1Note: "Alex — ate o fim do dia",
    planTask2: "Compartilhar escopo com stakeholders para revisao",
    planTask2Note: "Alex — apos o passo 1",
    phase2: "Fase 2 — Esta semana",
    planTask3: "Reunir estimativas de orcamento de cada equipe",
    planTask3Note: "Morgan — ate quarta-feira",
    planTask4: "Elaborar cronograma inicial e plano de recursos",
    planTask4Note: "Jordan — ate sexta-feira",
    processLabel: "Processo",
    processTitle: "Como os planos de acao sao construidos",
    processDesc: "O Sythio nao apenas lista o que foi dito. Ele interpreta a conversa, entende as relacoes entre tarefas e cria um plano que reflete como o trabalho deveria realmente se desenrolar.",
    step1Title: "Analise da conversa",
    step1Desc: "O Sythio processa a gravacao completa, identificando decisoes, compromissos, bloqueios e dependencias discutidas.",
    step2Title: "Estrutura e sequencia",
    step2Desc: "As tarefas sao organizadas em fases com base em urgencia, dependencias e fluxo logico. O que precisa acontecer primeiro vem primeiro.",
    step3Title: "Atribuir e entregar",
    step3Desc: "Cada passo e atribuido a pessoa certa. O plano finalizado esta pronto para compartilhar, exportar ou agir imediatamente.",
    qualityLabel: "Qualidade",
    qualityTitle: "O que um plano de acao Sythio inclui",
    q1Title: "Passos por fases",
    q1Desc: "O trabalho e agrupado em fases logicas — imediato, curto prazo e acompanhamento — para que as equipes saibam o que abordar primeiro.",
    q2Title: "Responsabilidade clara",
    q2Desc: "Cada passo tem um nome anexado. Combinado com deteccao de falantes, a responsabilidade e determinada a partir de quem realmente se comprometeu.",
    q3Title: "Dependencias mapeadas",
    q3Desc: "Passos que dependem de outros sao sequenciados corretamente. O plano reflete a ordem real de operacoes.",
    q4Title: "Prioridades destacadas",
    q4Desc: "Itens criticos e sensiveis ao tempo sao sinalizados. Sua equipe sabe exatamente onde focar energia primeiro.",
    q5Title: "Contexto preservado",
    q5Desc: "Cada passo inclui contexto suficiente da conversa original para que qualquer pessoa lendo o plano entenda por que ele existe.",
    q6Title: "Pronto para compartilhar",
    q6Desc: "Exporte como texto limpo, copie para sua ferramenta de gestao de projetos ou compartilhe diretamente com sua equipe.",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Onde os planos de acao fazem a diferenca",
    uc1Title: "Reunioes estrategicas",
    uc1Desc: "Discussoes estrategicas frequentemente terminam com ambiguidade. Um plano de acao cristaliza a direcao em passos concretos executaveis.",
    uc2Title: "Lancamentos de projetos",
    uc2Desc: "Reunioes de lancamento estabelecem o cenario. O Sythio captura o plano acordado, atribui responsabilidades e garante alinhamento.",
    uc3Title: "Sessoes de brainstorming",
    uc3Desc: "Ideias geradas em brainstorms precisam de estrutura para se tornarem reais. O Sythio transforma o caos criativo em um plano organizado.",
    relTaskExtraction: "Extracao de tarefas",
    relSpeakerDetection: "Deteccao de falantes",
    relAISummaries: "Resumos IA",
    relMeetings: "Reunioes",
    ctaTitle: "Transforme a conversa em um plano que funciona",
    ctaDesc: "Cada conversa produtiva merece um acompanhamento estruturado. O Sythio constroi o plano para que sua equipe possa focar na execucao.",
  },
  it: {
    label: "Funzionalita",
    title: "Dalla conversazione al piano d'azione strutturato",
    subtitle: "Le conversazioni generano idee, decisioni e direzione. Sythio organizza tutto in un piano d'azione passo dopo passo con responsabili chiari, priorita e sequenziamento.",
    diffLabel: "La differenza",
    diffTitle: "Piu di una lista di attivita",
    diffDesc1: "Una lista di attivita ti dice cosa deve essere fatto. Un piano d'azione ti dice cosa deve essere fatto, in che ordine, chi e responsabile e come i pezzi si collegano.",
    diffDesc2: "Sythio analizza l'intera conversazione e produce un piano che rispetta le dipendenze, evidenzia le priorita e raggruppa il lavoro correlato. Il risultato e un documento da consegnare al team.",
    planLabel: "Piano d'azione",
    phase1: "Fase 1 — Immediato",
    planTask1: "Finalizzare il documento di ambito del progetto",
    planTask1Note: "Alex — entro fine giornata",
    planTask2: "Condividere l'ambito con gli stakeholder per revisione",
    planTask2Note: "Alex — dopo il passo 1",
    phase2: "Fase 2 — Questa settimana",
    planTask3: "Raccogliere stime di budget da ogni team",
    planTask3Note: "Morgan — entro mercoledi",
    planTask4: "Redigere la timeline iniziale e il piano risorse",
    planTask4Note: "Jordan — entro venerdi",
    processLabel: "Processo",
    processTitle: "Come vengono costruiti i piani d'azione",
    processDesc: "Sythio non elenca semplicemente cio che e stato detto. Interpreta la conversazione, comprende le relazioni tra le attivita e crea un piano che riflette come il lavoro dovrebbe effettivamente svolgersi.",
    step1Title: "Analisi della conversazione",
    step1Desc: "Sythio elabora l'intera registrazione, identificando decisioni, impegni, blocchi e dipendenze discusse.",
    step2Title: "Struttura e sequenza",
    step2Desc: "Le attivita sono organizzate in fasi in base a urgenza, dipendenze e flusso logico. Cio che deve accadere prima viene prima.",
    step3Title: "Assegnare e consegnare",
    step3Desc: "Ogni passo e assegnato alla persona giusta. Il piano finito e pronto per essere condiviso, esportato o messo in azione immediatamente.",
    qualityLabel: "Qualita",
    qualityTitle: "Cosa include un piano d'azione Sythio",
    q1Title: "Passi per fasi",
    q1Desc: "Il lavoro e raggruppato in fasi logiche — immediato, breve termine e follow-up — cosi i team sanno cosa affrontare prima.",
    q2Title: "Responsabilita chiara",
    q2Desc: "Ogni passo ha un nome allegato. Combinato con il rilevamento dei parlanti, la responsabilita e determinata da chi si e effettivamente impegnato.",
    q3Title: "Dipendenze mappate",
    q3Desc: "I passi che dipendono da altri sono sequenziati correttamente. Il piano riflette il vero ordine delle operazioni.",
    q4Title: "Priorita evidenziate",
    q4Desc: "Gli elementi critici e sensibili al tempo sono segnalati. Il tuo team sa esattamente dove concentrare l'energia per primo.",
    q5Title: "Contesto preservato",
    q5Desc: "Ogni passo include abbastanza contesto dalla conversazione originale perche chiunque legga il piano capisca perche esiste.",
    q6Title: "Pronto da condividere",
    q6Desc: "Esporta come testo pulito, copia nel tuo strumento di gestione progetti o condividi direttamente con il tuo team.",
    useCasesLabel: "Casi d'uso",
    useCasesTitle: "Dove i piani d'azione fanno la differenza",
    uc1Title: "Riunioni strategiche",
    uc1Desc: "Le discussioni strategiche spesso finiscono con ambiguita. Un piano d'azione cristallizza la direzione in passi concreti eseguibili.",
    uc2Title: "Lancio di progetti",
    uc2Desc: "Le riunioni di lancio preparano il terreno. Sythio cattura il piano concordato, assegna le responsabilita e assicura l'allineamento.",
    uc3Title: "Sessioni di brainstorming",
    uc3Desc: "Le idee generate nel brainstorming hanno bisogno di struttura per diventare reali. Sythio trasforma il caos creativo in un piano organizzato.",
    relTaskExtraction: "Estrazione attivita",
    relSpeakerDetection: "Rilevamento parlanti",
    relAISummaries: "Riassunti IA",
    relMeetings: "Riunioni",
    ctaTitle: "Trasforma il dialogo in un piano che funziona",
    ctaDesc: "Ogni conversazione produttiva merita un follow-through strutturato. Sythio costruisce il piano perche il tuo team possa concentrarsi sull'esecuzione.",
  },
};

export default function ActionPlansPage() {
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.label}</p>
            <TextReveal tag="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">{c.title}</TextReveal>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">{c.subtitle}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <MagneticHover><Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{s("common.startFree")}</Link></MagneticHover>
              <Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{s("common.allFeatures")}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* More Than a Task List */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.diffLabel}</p>
              <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.diffTitle}</TextReveal>
              <p className="mt-6 text-lg text-muted leading-relaxed">{c.diffDesc1}</p>
              <p className="mt-4 text-lg text-muted leading-relaxed">{c.diffDesc2}</p>
            </div>
            <div className="bg-background rounded-2xl border border-border-light p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-5">{c.planLabel}</p>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-3">{c.phase1}</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border-light">
                      <div className="w-6 h-6 rounded-full bg-foreground text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{c.planTask1}</p>
                        <p className="text-xs text-muted mt-0.5">{c.planTask1Note}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border-light">
                      <div className="w-6 h-6 rounded-full bg-foreground text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{c.planTask2}</p>
                        <p className="text-xs text-muted mt-0.5">{c.planTask2Note}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-3">{c.phase2}</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border-light">
                      <div className="w-6 h-6 rounded-full bg-foreground text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{c.planTask3}</p>
                        <p className="text-xs text-muted mt-0.5">{c.planTask3Note}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border-light">
                      <div className="w-6 h-6 rounded-full bg-foreground text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">4</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{c.planTask4}</p>
                        <p className="text-xs text-muted mt-0.5">{c.planTask4Note}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.processLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.processTitle}</TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">{c.processDesc}</p>
          </div>
          <GsapStagger className="grid md:grid-cols-3 gap-8" stagger={0.08}>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.step1Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.step1Desc}</p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.step2Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.step2Desc}</p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.step3Title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                <Link href="/features/speaker-detection" className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors">{c.relSpeakerDetection}</Link> — {c.step3Desc}
              </p>
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* What Makes a Good Action Plan */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.qualityLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.qualityTitle}</TextReveal>
          </div>
          <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
            {[
              { t: c.q1Title, d: c.q1Desc },
              { t: c.q2Title, d: c.q2Desc },
              { t: c.q3Title, d: c.q3Desc },
              { t: c.q4Title, d: c.q4Desc },
              { t: c.q5Title, d: c.q5Desc },
              { t: c.q6Title, d: c.q6Desc },
            ].map((item) => (
              <div key={item.t} className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.d}</p>
              </div>
            ))}
          </GsapStagger>
        </div>
      </section>

      {/* Where Action Plans Help */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.useCasesLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.useCasesTitle}</TextReveal>
          </div>
          <GsapStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>
            <ScrollScale><Link href="/use-cases/meetings" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc1Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.uc1Desc}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/client-calls" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc2Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.uc2Desc}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/brainstorming" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc3Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.uc3Desc}</p>
            </Link></ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* Related */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">{s("common.related")}</h2>
          <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
            <ScrollScale><Link href="/features/task-extraction" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relTaskExtraction}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/features/speaker-detection" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relSpeakerDetection}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/features/ai-summaries" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relAISummaries}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/meetings" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relMeetings}</p>
            </Link></ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.ctaTitle}</TextReveal>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">{c.ctaDesc}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300">{s("common.startFree")}</Link>
            <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{s("common.exploreProduct")}</Link>
          </div>
          <p className="mt-6 text-sm text-muted">{s("common.freePlan")}</p>
        </div>
      </section>
    </PageReveal>
  );
}
