"use client";
import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Features",
    title: "Action Items, Extracted Automatically from Any Conversation",
    subtitle: "Sythio listens for commitments, promises, and next steps in your recordings — then turns them into a clear, actionable task list with owners and context.",
    problemLabel: "The Problem",
    problemTitle: "Tasks Agreed. Never Documented.",
    problemDesc1: "In every meeting, people make commitments. Someone agrees to send a document. Another person promises to follow up with a client. A deadline is set for next Wednesday.",
    problemDesc2: "Then the meeting ends. People move on. And those commitments disappear into the ether — until someone realizes, days later, that nothing was done.",
    task1: "Send updated proposal to client",
    task1Note: "Mentioned at 12:34 — never written down",
    task2: "Review Q3 numbers before Friday",
    task2Note: "Agreed by two people — forgotten by both",
    task3: "Schedule follow-up with design team",
    task3Note: "Said out loud — never captured",
    soundFamiliar: "Sound familiar?",
    processLabel: "Process",
    processTitle: "How Task Extraction Works",
    processDesc: "Sythio does not just listen for the word \"task.\" It understands the language of commitment — promises, deadlines, assignments, and follow-ups — and extracts them into structured items.",
    step1Title: "Listens for Commitments",
    step1Desc: "Phrases like \"I will handle that,\" \"let us do this by Thursday,\" or \"can you send me that?\" are recognized as actionable commitments, not just conversation.",
    step2Title: "Identifies Owners",
    step2Desc: "Each task is attributed to the person who committed to it. No guessing, no manual assignment.",
    step3Title: "Creates a Checklist",
    step3Desc: "The output is a clean, structured task list. Each item includes the task description, the owner, any mentioned deadline, and the context from the conversation.",
    betterLabel: "Better Together",
    betterTitle: "Tasks With Names Attached",
    betterDesc: "Task extraction and speaker detection work together. When someone says \"I will take care of the budget review,\" Sythio knows who \"I\" is and assigns the task accordingly.",
    bullet1: "Each task tied to the speaker who committed",
    bullet2: "Deadlines extracted from natural conversation",
    bullet3: "Context preserved so tasks make sense in isolation",
    bullet4: "Export to your workflow — copy, share, or integrate",
    extractedLabel: "Extracted Tasks",
    exTask1: "Send updated proposal to Acme Corp",
    exTask1Note: "Alex — by Wednesday",
    exTask2: "Review Q3 financial numbers",
    exTask2Note: "Morgan — before Friday standup",
    exTask3: "Schedule follow-up with design team",
    exTask3Note: "Jordan — this week",
    useCasesLabel: "Use Cases",
    useCasesTitle: "Where Task Extraction Helps",
    uc1Title: "Team Meetings",
    uc1Desc: "Every standup, planning session, and review meeting generates tasks. Sythio captures them all so nothing agreed upon goes unfulfilled.",
    uc2Title: "Client Calls",
    uc2Desc: "Client requests become documented tasks the moment they are spoken. Follow through becomes systematic, not accidental.",
    uc3Title: "Team Standups",
    uc3Desc: "Quick daily check-ins generate a stream of micro-commitments. Sythio turns them into a running task list so nothing slips between the cracks.",
    relActionPlans: "Action Plans",
    relSpeakerDetection: "Speaker Detection",
    relMeetings: "Meetings",
    relAISummaries: "AI Summaries",
    ctaTitle: "Never Lose an Action Item Again",
    ctaDesc: "Every conversation contains tasks. Sythio finds them and delivers a checklist you can act on immediately.",
  },
  es: {
    label: "Funciones",
    title: "Elementos de accion, extraidos automaticamente de cualquier conversacion",
    subtitle: "Sythio escucha compromisos, promesas y proximos pasos en tus grabaciones — luego los convierte en una lista de tareas clara y accionable con responsables y contexto.",
    problemLabel: "El problema",
    problemTitle: "Tareas acordadas. Nunca documentadas.",
    problemDesc1: "En cada reunion, las personas asumen compromisos. Alguien acepta enviar un documento. Otra persona promete hacer seguimiento con un cliente. Se establece una fecha limite para el proximo miercoles.",
    problemDesc2: "Luego la reunion termina. Las personas siguen adelante. Y esos compromisos desaparecen — hasta que alguien se da cuenta, dias despues, de que nada se hizo.",
    task1: "Enviar propuesta actualizada al cliente",
    task1Note: "Mencionado a las 12:34 — nunca anotado",
    task2: "Revisar numeros del Q3 antes del viernes",
    task2Note: "Acordado por dos personas — olvidado por ambos",
    task3: "Programar seguimiento con el equipo de diseno",
    task3Note: "Dicho en voz alta — nunca capturado",
    soundFamiliar: "Te suena familiar?",
    processLabel: "Proceso",
    processTitle: "Como funciona la extraccion de tareas",
    processDesc: "Sythio no solo escucha la palabra \"tarea\". Entiende el lenguaje del compromiso — promesas, plazos, asignaciones y seguimientos — y los extrae en elementos estructurados.",
    step1Title: "Escucha compromisos",
    step1Desc: "Frases como \"yo me encargo\", \"hagamos esto para el jueves\" o \"puedes enviarme eso?\" se reconocen como compromisos accionables, no solo conversacion.",
    step2Title: "Identifica responsables",
    step2Desc: "Cada tarea se atribuye a la persona que se comprometio. Sin adivinanzas, sin asignacion manual.",
    step3Title: "Crea una lista de verificacion",
    step3Desc: "La salida es una lista de tareas limpia y estructurada. Cada elemento incluye la descripcion, el responsable, cualquier plazo mencionado y el contexto de la conversacion.",
    betterLabel: "Mejor juntos",
    betterTitle: "Tareas con nombres adjuntos",
    betterDesc: "La extraccion de tareas y la deteccion de hablantes trabajan juntas. Cuando alguien dice \"yo me encargo de la revision del presupuesto\", Sythio sabe quien es \"yo\" y asigna la tarea en consecuencia.",
    bullet1: "Cada tarea vinculada al hablante que se comprometio",
    bullet2: "Plazos extraidos de la conversacion natural",
    bullet3: "Contexto preservado para que las tareas tengan sentido por separado",
    bullet4: "Exporta a tu flujo de trabajo — copia, comparte o integra",
    extractedLabel: "Tareas extraidas",
    exTask1: "Enviar propuesta actualizada a Acme Corp",
    exTask1Note: "Alex — para el miercoles",
    exTask2: "Revisar numeros financieros del Q3",
    exTask2Note: "Morgan — antes del standup del viernes",
    exTask3: "Programar seguimiento con equipo de diseno",
    exTask3Note: "Jordan — esta semana",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Donde ayuda la extraccion de tareas",
    uc1Title: "Reuniones de equipo",
    uc1Desc: "Cada standup, sesion de planificacion y reunion de revision genera tareas. Sythio las captura todas para que nada de lo acordado quede sin cumplir.",
    uc2Title: "Llamadas con clientes",
    uc2Desc: "Las solicitudes de clientes se convierten en tareas documentadas en el momento en que se dicen. El seguimiento se vuelve sistematico, no accidental.",
    uc3Title: "Standups de equipo",
    uc3Desc: "Los check-ins diarios rapidos generan una corriente de micro-compromisos. Sythio los convierte en una lista de tareas continua para que nada se escape.",
    relActionPlans: "Planes de accion",
    relSpeakerDetection: "Deteccion de hablantes",
    relMeetings: "Reuniones",
    relAISummaries: "Resumenes IA",
    ctaTitle: "Nunca pierdas un elemento de accion",
    ctaDesc: "Cada conversacion contiene tareas. Sythio las encuentra y entrega una lista de verificacion sobre la que puedes actuar de inmediato.",
  },
  fr: {
    label: "Fonctionnalites",
    title: "Elements d'action, extraits automatiquement de toute conversation",
    subtitle: "Sythio ecoute les engagements, promesses et prochaines etapes dans vos enregistrements — puis les transforme en une liste de taches claire et actionnable avec responsables et contexte.",
    problemLabel: "Le probleme",
    problemTitle: "Taches convenues. Jamais documentees.",
    problemDesc1: "Dans chaque reunion, les gens prennent des engagements. Quelqu'un accepte d'envoyer un document. Une autre personne promet de faire un suivi avec un client. Une echeance est fixee pour mercredi prochain.",
    problemDesc2: "Puis la reunion se termine. Les gens passent a autre chose. Et ces engagements disparaissent — jusqu'a ce que quelqu'un realise, des jours plus tard, que rien n'a ete fait.",
    task1: "Envoyer la proposition mise a jour au client",
    task1Note: "Mentionne a 12h34 — jamais note",
    task2: "Revoir les chiffres du T3 avant vendredi",
    task2Note: "Convenu par deux personnes — oublie par les deux",
    task3: "Planifier un suivi avec l'equipe design",
    task3Note: "Dit a voix haute — jamais capture",
    soundFamiliar: "Ca vous dit quelque chose ?",
    processLabel: "Processus",
    processTitle: "Comment fonctionne l'extraction de taches",
    processDesc: "Sythio n'ecoute pas seulement le mot \"tache\". Il comprend le langage de l'engagement — promesses, echeances, attributions et suivis — et les extrait en elements structures.",
    step1Title: "Ecoute les engagements",
    step1Desc: "Des phrases comme \"je m'en charge\", \"faisons ca pour jeudi\" ou \"peux-tu m'envoyer ca ?\" sont reconnues comme des engagements actionnables.",
    step2Title: "Identifie les responsables",
    step2Desc: "Chaque tache est attribuee a la personne qui s'est engagee. Pas de devinette, pas d'attribution manuelle.",
    step3Title: "Cree une checklist",
    step3Desc: "Le resultat est une liste de taches propre et structuree. Chaque element inclut la description, le responsable, toute echeance mentionnee et le contexte de la conversation.",
    betterLabel: "Mieux ensemble",
    betterTitle: "Des taches avec des noms attaches",
    betterDesc: "L'extraction de taches et la detection des intervenants fonctionnent ensemble. Quand quelqu'un dit \"je m'occupe de la revue du budget\", Sythio sait qui est \"je\" et attribue la tache en consequence.",
    bullet1: "Chaque tache liee a l'intervenant qui s'est engage",
    bullet2: "Echeances extraites de la conversation naturelle",
    bullet3: "Contexte preserve pour que les taches aient du sens isolement",
    bullet4: "Exportez vers votre workflow — copiez, partagez ou integrez",
    extractedLabel: "Taches extraites",
    exTask1: "Envoyer la proposition mise a jour a Acme Corp",
    exTask1Note: "Alex — d'ici mercredi",
    exTask2: "Revoir les chiffres financiers du T3",
    exTask2Note: "Morgan — avant le standup de vendredi",
    exTask3: "Planifier un suivi avec l'equipe design",
    exTask3Note: "Jordan — cette semaine",
    useCasesLabel: "Cas d'utilisation",
    useCasesTitle: "Ou l'extraction de taches aide",
    uc1Title: "Reunions d'equipe",
    uc1Desc: "Chaque standup, session de planification et reunion de revue genere des taches. Sythio les capture toutes pour que rien de convenu ne reste inacheve.",
    uc2Title: "Appels clients",
    uc2Desc: "Les demandes clients deviennent des taches documentees au moment ou elles sont prononcees. Le suivi devient systematique, pas accidentel.",
    uc3Title: "Standups d'equipe",
    uc3Desc: "Les check-ins quotidiens rapides generent un flux de micro-engagements. Sythio les transforme en une liste de taches continue.",
    relActionPlans: "Plans d'action",
    relSpeakerDetection: "Detection des intervenants",
    relMeetings: "Reunions",
    relAISummaries: "Resumes IA",
    ctaTitle: "Ne perdez plus jamais un element d'action",
    ctaDesc: "Chaque conversation contient des taches. Sythio les trouve et fournit une checklist sur laquelle vous pouvez agir immediatement.",
  },
  pt: {
    label: "Recursos",
    title: "Itens de acao extraidos automaticamente de qualquer conversa",
    subtitle: "O Sythio escuta compromissos, promessas e proximos passos nas suas gravacoes — e os transforma em uma lista de tarefas clara e acionavel com responsaveis e contexto.",
    problemLabel: "O problema",
    problemTitle: "Tarefas acordadas. Nunca documentadas.",
    problemDesc1: "Em cada reuniao, as pessoas assumem compromissos. Alguem concorda em enviar um documento. Outra pessoa promete fazer follow-up com um cliente. Um prazo e definido para a proxima quarta-feira.",
    problemDesc2: "Entao a reuniao termina. As pessoas seguem em frente. E esses compromissos desaparecem — ate que alguem percebe, dias depois, que nada foi feito.",
    task1: "Enviar proposta atualizada ao cliente",
    task1Note: "Mencionado as 12:34 — nunca anotado",
    task2: "Revisar numeros do T3 antes de sexta",
    task2Note: "Acordado por duas pessoas — esquecido por ambas",
    task3: "Agendar follow-up com a equipe de design",
    task3Note: "Dito em voz alta — nunca capturado",
    soundFamiliar: "Parece familiar?",
    processLabel: "Processo",
    processTitle: "Como funciona a extracao de tarefas",
    processDesc: "O Sythio nao apenas escuta a palavra \"tarefa\". Ele entende a linguagem do compromisso — promessas, prazos, atribuicoes e acompanhamentos — e os extrai em itens estruturados.",
    step1Title: "Escuta compromissos",
    step1Desc: "Frases como \"eu cuido disso\", \"vamos fazer isso ate quinta\" ou \"pode me enviar aquilo?\" sao reconhecidas como compromissos acionaveis, nao apenas conversa.",
    step2Title: "Identifica responsaveis",
    step2Desc: "Cada tarefa e atribuida a pessoa que se comprometeu. Sem adivinhacoes, sem atribuicao manual.",
    step3Title: "Cria um checklist",
    step3Desc: "O resultado e uma lista de tarefas limpa e estruturada. Cada item inclui a descricao, o responsavel, qualquer prazo mencionado e o contexto da conversa.",
    betterLabel: "Melhor juntos",
    betterTitle: "Tarefas com nomes anexados",
    betterDesc: "A extracao de tarefas e a deteccao de falantes trabalham juntas. Quando alguem diz \"eu cuido da revisao do orcamento\", o Sythio sabe quem e \"eu\" e atribui a tarefa de acordo.",
    bullet1: "Cada tarefa vinculada ao falante que se comprometeu",
    bullet2: "Prazos extraidos da conversa natural",
    bullet3: "Contexto preservado para que as tarefas faccam sentido isoladamente",
    bullet4: "Exporte para seu fluxo de trabalho — copie, compartilhe ou integre",
    extractedLabel: "Tarefas extraidas",
    exTask1: "Enviar proposta atualizada para a Acme Corp",
    exTask1Note: "Alex — ate quarta-feira",
    exTask2: "Revisar numeros financeiros do T3",
    exTask2Note: "Morgan — antes do standup de sexta",
    exTask3: "Agendar follow-up com equipe de design",
    exTask3Note: "Jordan — esta semana",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Onde a extracao de tarefas ajuda",
    uc1Title: "Reunioes de equipe",
    uc1Desc: "Cada standup, sessao de planejamento e reuniao de revisao gera tarefas. O Sythio captura todas para que nada do acordado fique sem cumprimento.",
    uc2Title: "Chamadas com clientes",
    uc2Desc: "Solicitacoes de clientes se tornam tarefas documentadas no momento em que sao ditas. O acompanhamento se torna sistematico, nao acidental.",
    uc3Title: "Standups de equipe",
    uc3Desc: "Check-ins diarios rapidos geram um fluxo de micro-compromissos. O Sythio os transforma em uma lista de tarefas continua.",
    relActionPlans: "Planos de acao",
    relSpeakerDetection: "Deteccao de falantes",
    relMeetings: "Reunioes",
    relAISummaries: "Resumos IA",
    ctaTitle: "Nunca perca um item de acao novamente",
    ctaDesc: "Cada conversa contem tarefas. O Sythio as encontra e entrega um checklist no qual voce pode agir imediatamente.",
  },
  it: {
    label: "Funzionalita",
    title: "Elementi d'azione estratti automaticamente da qualsiasi conversazione",
    subtitle: "Sythio ascolta impegni, promesse e prossimi passi nelle tue registrazioni — poi li trasforma in una lista di attivita chiara e attuabile con responsabili e contesto.",
    problemLabel: "Il problema",
    problemTitle: "Attivita concordate. Mai documentate.",
    problemDesc1: "In ogni riunione, le persone prendono impegni. Qualcuno accetta di inviare un documento. Un'altra persona promette di fare follow-up con un cliente. Una scadenza viene fissata per mercoledi prossimo.",
    problemDesc2: "Poi la riunione finisce. Le persone vanno avanti. E quegli impegni svaniscono — finche qualcuno non si rende conto, giorni dopo, che nulla e stato fatto.",
    task1: "Inviare proposta aggiornata al cliente",
    task1Note: "Menzionato alle 12:34 — mai annotato",
    task2: "Rivedere i numeri del T3 prima di venerdi",
    task2Note: "Concordato da due persone — dimenticato da entrambe",
    task3: "Programmare follow-up con il team di design",
    task3Note: "Detto ad alta voce — mai catturato",
    soundFamiliar: "Ti suona familiare?",
    processLabel: "Processo",
    processTitle: "Come funziona l'estrazione delle attivita",
    processDesc: "Sythio non ascolta solo la parola \"attivita\". Comprende il linguaggio dell'impegno — promesse, scadenze, assegnazioni e follow-up — e li estrae in elementi strutturati.",
    step1Title: "Ascolta gli impegni",
    step1Desc: "Frasi come \"me ne occupo io\", \"facciamolo entro giovedi\" o \"puoi inviarmi quello?\" vengono riconosciute come impegni attuabili, non solo conversazione.",
    step2Title: "Identifica i responsabili",
    step2Desc: "Ogni attivita viene attribuita alla persona che si e impegnata. Nessuna supposizione, nessuna assegnazione manuale.",
    step3Title: "Crea una checklist",
    step3Desc: "Il risultato e una lista di attivita pulita e strutturata. Ogni elemento include la descrizione, il responsabile, qualsiasi scadenza menzionata e il contesto dalla conversazione.",
    betterLabel: "Meglio insieme",
    betterTitle: "Attivita con nomi allegati",
    betterDesc: "L'estrazione delle attivita e il rilevamento dei parlanti lavorano insieme. Quando qualcuno dice \"mi occupo della revisione del budget\", Sythio sa chi e \"io\" e assegna l'attivita di conseguenza.",
    bullet1: "Ogni attivita legata al parlante che si e impegnato",
    bullet2: "Scadenze estratte dalla conversazione naturale",
    bullet3: "Contesto preservato perche le attivita abbiano senso isolatamente",
    bullet4: "Esporta nel tuo workflow — copia, condividi o integra",
    extractedLabel: "Attivita estratte",
    exTask1: "Inviare proposta aggiornata ad Acme Corp",
    exTask1Note: "Alex — entro mercoledi",
    exTask2: "Rivedere i numeri finanziari del T3",
    exTask2Note: "Morgan — prima dello standup di venerdi",
    exTask3: "Programmare follow-up con il team di design",
    exTask3Note: "Jordan — questa settimana",
    useCasesLabel: "Casi d'uso",
    useCasesTitle: "Dove l'estrazione delle attivita aiuta",
    uc1Title: "Riunioni di team",
    uc1Desc: "Ogni standup, sessione di pianificazione e riunione di revisione genera attivita. Sythio le cattura tutte in modo che nulla di concordato resti incompiuto.",
    uc2Title: "Chiamate clienti",
    uc2Desc: "Le richieste dei clienti diventano attivita documentate nel momento in cui vengono pronunciate. Il follow-through diventa sistematico, non accidentale.",
    uc3Title: "Standup di team",
    uc3Desc: "I check-in giornalieri rapidi generano un flusso di micro-impegni. Sythio li trasforma in una lista di attivita continua.",
    relActionPlans: "Piani d'azione",
    relSpeakerDetection: "Rilevamento parlanti",
    relMeetings: "Riunioni",
    relAISummaries: "Riassunti IA",
    ctaTitle: "Non perdere mai piu un elemento d'azione",
    ctaDesc: "Ogni conversazione contiene attivita. Sythio le trova e fornisce una checklist su cui puoi agire immediatamente.",
  },
};

export default function TaskExtractionPage() {
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
            <TextReveal tag="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {c.title}
              </TextReveal>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              {c.subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <MagneticHover>
                <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
                  {s("common.startFree")}
                </Link>
              </MagneticHover>
              <Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">
                {s("common.allFeatures")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.problemLabel}</p>
              <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.problemTitle}
                </TextReveal>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                {c.problemDesc1}
              </p>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                {c.problemDesc2}
              </p>
            </div>
            <div className="bg-background rounded-2xl border border-border-light p-10">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border-light">
                  <div className="w-5 h-5 rounded border-2 border-border shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.task1}</p>
                    <p className="text-xs text-muted-light mt-1">{c.task1Note}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border-light">
                  <div className="w-5 h-5 rounded border-2 border-border shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.task2}</p>
                    <p className="text-xs text-muted-light mt-1">{c.task2Note}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border-light">
                  <div className="w-5 h-5 rounded border-2 border-border shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.task3}</p>
                    <p className="text-xs text-muted-light mt-1">{c.task3Note}</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-xs text-muted-light text-center">{c.soundFamiliar}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Task Extraction Works */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.processLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.processTitle}
              </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.processDesc}
            </p>
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
              <p className="text-sm text-muted leading-relaxed">
                <Link href="/features/speaker-detection" className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors">{c.relSpeakerDetection}</Link> {c.step2Desc}
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.step3Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.step3Desc}</p>
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* With Speaker Detection */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.betterLabel}</p>
              <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.betterTitle}
                </TextReveal>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                {c.betterDesc}
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">{c.bullet1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">{c.bullet2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">{c.bullet3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">{c.bullet4}</span>
                </li>
              </ul>
            </div>
            <div className="bg-background rounded-2xl border border-border-light p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-5">{c.extractedLabel}</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border-light">
                  <div className="w-5 h-5 rounded border-2 border-emerald-400 bg-emerald-50 shrink-0 mt-0.5 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.exTask1}</p>
                    <p className="text-xs text-muted mt-1">{c.exTask1Note}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border-light">
                  <div className="w-5 h-5 rounded border-2 border-border shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.exTask2}</p>
                    <p className="text-xs text-muted mt-1">{c.exTask2Note}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border-light">
                  <div className="w-5 h-5 rounded border-2 border-border shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.exTask3}</p>
                    <p className="text-xs text-muted mt-1">{c.exTask3Note}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where It Helps */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.useCasesLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.useCasesTitle}
              </TextReveal>
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
            <ScrollScale><Link href="/features/action-plans" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relActionPlans}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/features/speaker-detection" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relSpeakerDetection}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/meetings" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relMeetings}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/features/ai-summaries" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relAISummaries}</p>
            </Link></ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {c.ctaTitle}
            </TextReveal>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {c.ctaDesc}
          </p>
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
