"use client";
import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Features",
    title: "Audio Summaries That Capture What Matters",
    subtitle: "Sythio listens to your recordings and delivers concise, context-aware summaries. Not a shortened transcript. A clear overview of what was discussed, what was decided, and what comes next.",
    diffLabel: "What Makes It Different",
    diffTitle: "Not a Shorter Transcript",
    diffDesc: "Most tools compress your words. Sythio understands them. The result is a summary that reads like it was written by someone who was in the room and knew what mattered.",
    card1Title: "Understands Context",
    card1Desc: "Sythio recognizes the difference between casual remarks and critical decisions. Your summary reflects what actually mattered, not just what was said the most.",
    card2Title: "Identifies Themes",
    card2Desc: "Related points scattered across a long conversation are grouped together. The summary organizes topics logically, even when the conversation did not.",
    card3Title: "Highlights Decisions",
    card3Desc: "Key decisions and agreements surface clearly in every summary. No more re-listening to figure out what was actually agreed upon.",
    processLabel: "Process",
    processTitle: "How It Works",
    step1Title: "Record or Upload",
    step1Desc: "Capture audio directly in Sythio or upload an existing recording. Meetings, voice notes, lectures, interviews — any audio works.",
    step2Title: "Sythio Analyzes",
    step2Desc: "The audio is processed in seconds. Sythio identifies speakers, understands context, separates topics, and determines what is most important.",
    step3Title: "Get Your Summary",
    step3Desc: "Receive a structured summary with key points, decisions, and context. Share it, export it, or use it as a starting point for action items and follow-ups.",
    useCasesLabel: "Use Cases",
    useCasesTitle: "Where Summaries Help",
    useCasesDesc: "Every recording tells a story. Summaries make that story accessible in seconds, regardless of how long or complex the original audio was.",
    meetingsTitle: "Meetings",
    meetingsDesc: "A 60-minute meeting becomes a two-paragraph summary. Decisions are highlighted, action items are surfaced, and everyone stays aligned without re-watching the recording.",
    lecturesTitle: "Lectures",
    lecturesDesc: "Capture the core concepts from any lecture. Sythio identifies key arguments, examples, and conclusions so you can review in minutes instead of hours.",
    voiceNotesTitle: "Voice Notes",
    voiceNotesDesc: "Rambling thoughts become structured notes. Record whatever comes to mind and let Sythio organize it into something clear and actionable.",
    clientCallsTitle: "Client Calls",
    clientCallsDesc: "Every client conversation is summarized with requirements, feedback, and next steps. Share with your team or archive for reference.",
    beyondLabel: "One Recording, Many Outputs",
    beyondTitle: "Beyond Summaries",
    beyondDesc: "A summary is just the beginning. From the same recording, Sythio can also generate task lists, structured action plans, executive reports, and more. Choose the output that fits the moment.",
    taskExTitle: "Task Extraction",
    taskExDesc: "Automatically pull action items, owners, and deadlines from conversations. Every commitment becomes a trackable task.",
    actionPlansTitle: "Action Plans",
    actionPlansDesc: "Go beyond a flat list. Get structured, step-by-step plans with priorities and dependencies, built from what was actually discussed.",
    cleanTextTitle: "Clean Text",
    cleanTextDesc: "Get polished, readable text from your audio. Filler words removed, grammar corrected, structure added. Ready to publish or share.",
    relSpeakerDetection: "Speaker Detection",
    relTaskExtraction: "Task Extraction",
    relMeetings: "Meetings",
    relProduct: "Product",
    ctaTitle: "Stop Re-Listening. Start Reading.",
    ctaDesc: "Every recording deserves a clear summary. Sythio delivers one in seconds.",
  },
  es: {
    label: "Funciones",
    title: "Resumenes de audio que capturan lo importante",
    subtitle: "Sythio escucha tus grabaciones y entrega resumenes concisos y contextuales. No es una transcripcion acortada. Es una vision clara de lo que se discutio, lo que se decidio y lo que viene a continuacion.",
    diffLabel: "Lo que lo hace diferente",
    diffTitle: "No es una transcripcion mas corta",
    diffDesc: "La mayoria de herramientas comprimen tus palabras. Sythio las entiende. El resultado es un resumen que parece escrito por alguien que estuvo en la sala y sabia que era importante.",
    card1Title: "Entiende el contexto",
    card1Desc: "Sythio reconoce la diferencia entre comentarios casuales y decisiones criticas. Tu resumen refleja lo que realmente importo, no solo lo que mas se dijo.",
    card2Title: "Identifica temas",
    card2Desc: "Los puntos relacionados dispersos en una conversacion larga se agrupan. El resumen organiza los temas logicamente, incluso cuando la conversacion no lo hizo.",
    card3Title: "Destaca decisiones",
    card3Desc: "Las decisiones y acuerdos clave aparecen claramente en cada resumen. No mas reescuchar para descubrir que se acordo.",
    processLabel: "Proceso",
    processTitle: "Como funciona",
    step1Title: "Graba o sube",
    step1Desc: "Captura audio directamente en Sythio o sube una grabacion existente. Reuniones, notas de voz, clases, entrevistas: cualquier audio funciona.",
    step2Title: "Sythio analiza",
    step2Desc: "El audio se procesa en segundos. Sythio identifica hablantes, entiende el contexto, separa temas y determina lo mas importante.",
    step3Title: "Obtiene tu resumen",
    step3Desc: "Recibe un resumen estructurado con puntos clave, decisiones y contexto. Compartelo, exportalo o usalo como punto de partida para tareas y seguimientos.",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Donde ayudan los resumenes",
    useCasesDesc: "Cada grabacion cuenta una historia. Los resumenes hacen esa historia accesible en segundos, sin importar cuan larga o compleja fue la grabacion original.",
    meetingsTitle: "Reuniones",
    meetingsDesc: "Una reunion de 60 minutos se convierte en un resumen de dos parrafos. Las decisiones se destacan, las tareas se identifican y todos se mantienen alineados sin volver a ver la grabacion.",
    lecturesTitle: "Clases",
    lecturesDesc: "Captura los conceptos centrales de cualquier clase. Sythio identifica argumentos clave, ejemplos y conclusiones para que puedas repasar en minutos en lugar de horas.",
    voiceNotesTitle: "Notas de voz",
    voiceNotesDesc: "Los pensamientos desordenados se convierten en notas estructuradas. Graba lo que se te ocurra y deja que Sythio lo organice en algo claro y accionable.",
    clientCallsTitle: "Llamadas con clientes",
    clientCallsDesc: "Cada conversacion con un cliente se resume con requisitos, retroalimentacion y proximos pasos. Comparte con tu equipo o archiva como referencia.",
    beyondLabel: "Una grabacion, muchas salidas",
    beyondTitle: "Mas alla de los resumenes",
    beyondDesc: "Un resumen es solo el comienzo. De la misma grabacion, Sythio tambien puede generar listas de tareas, planes de accion estructurados, informes ejecutivos y mas. Elige la salida que se ajuste al momento.",
    taskExTitle: "Extraccion de tareas",
    taskExDesc: "Extrae automaticamente elementos de accion, responsables y plazos de las conversaciones. Cada compromiso se convierte en una tarea rastreable.",
    actionPlansTitle: "Planes de accion",
    actionPlansDesc: "Ve mas alla de una lista plana. Obtiene planes estructurados paso a paso con prioridades y dependencias, construidos a partir de lo que realmente se discutio.",
    cleanTextTitle: "Texto limpio",
    cleanTextDesc: "Obtiene texto pulido y legible de tu audio. Muletillas eliminadas, gramatica corregida, estructura agregada. Listo para publicar o compartir.",
    relSpeakerDetection: "Deteccion de hablantes",
    relTaskExtraction: "Extraccion de tareas",
    relMeetings: "Reuniones",
    relProduct: "Producto",
    ctaTitle: "Deja de reescuchar. Empieza a leer.",
    ctaDesc: "Cada grabacion merece un resumen claro. Sythio lo entrega en segundos.",
  },
  fr: {
    label: "Fonctionnalites",
    title: "Des resumes audio qui capturent l'essentiel",
    subtitle: "Sythio ecoute vos enregistrements et fournit des resumes concis et contextuels. Pas une transcription raccourcie. Un apercu clair de ce qui a ete discute, decide et de ce qui suit.",
    diffLabel: "Ce qui le rend different",
    diffTitle: "Pas une transcription plus courte",
    diffDesc: "La plupart des outils compriment vos mots. Sythio les comprend. Le resultat est un resume qui semble ecrit par quelqu'un qui etait dans la salle et savait ce qui comptait.",
    card1Title: "Comprend le contexte",
    card1Desc: "Sythio reconnait la difference entre les remarques decontractees et les decisions critiques. Votre resume reflete ce qui comptait vraiment, pas seulement ce qui a ete dit le plus souvent.",
    card2Title: "Identifie les themes",
    card2Desc: "Les points lies disperses dans une longue conversation sont regroupes. Le resume organise les sujets logiquement, meme quand la conversation ne l'a pas fait.",
    card3Title: "Met en evidence les decisions",
    card3Desc: "Les decisions et accords cles apparaissent clairement dans chaque resume. Plus besoin de reecouter pour comprendre ce qui a ete convenu.",
    processLabel: "Processus",
    processTitle: "Comment ca fonctionne",
    step1Title: "Enregistrez ou telechargez",
    step1Desc: "Capturez l'audio directement dans Sythio ou telechargez un enregistrement existant. Reunions, notes vocales, cours, entretiens — tout audio fonctionne.",
    step2Title: "Sythio analyse",
    step2Desc: "L'audio est traite en quelques secondes. Sythio identifie les intervenants, comprend le contexte, separe les sujets et determine ce qui est le plus important.",
    step3Title: "Obtenez votre resume",
    step3Desc: "Recevez un resume structure avec les points cles, les decisions et le contexte. Partagez-le, exportez-le ou utilisez-le comme point de depart pour les actions et les suivis.",
    useCasesLabel: "Cas d'utilisation",
    useCasesTitle: "Ou les resumes aident",
    useCasesDesc: "Chaque enregistrement raconte une histoire. Les resumes rendent cette histoire accessible en quelques secondes, quelle que soit la duree ou la complexite de l'audio original.",
    meetingsTitle: "Reunions",
    meetingsDesc: "Une reunion de 60 minutes devient un resume de deux paragraphes. Les decisions sont mises en evidence, les actions identifiees et tout le monde reste aligne sans revoir l'enregistrement.",
    lecturesTitle: "Cours",
    lecturesDesc: "Capturez les concepts cles de tout cours. Sythio identifie les arguments principaux, les exemples et les conclusions pour une revision en minutes au lieu d'heures.",
    voiceNotesTitle: "Notes vocales",
    voiceNotesDesc: "Les pensees desordonnees deviennent des notes structurees. Enregistrez ce qui vous vient a l'esprit et laissez Sythio l'organiser en quelque chose de clair et actionnable.",
    clientCallsTitle: "Appels clients",
    clientCallsDesc: "Chaque conversation client est resumee avec les exigences, les retours et les prochaines etapes. Partagez avec votre equipe ou archivez pour reference.",
    beyondLabel: "Un enregistrement, plusieurs sorties",
    beyondTitle: "Au-dela des resumes",
    beyondDesc: "Un resume n'est que le debut. A partir du meme enregistrement, Sythio peut aussi generer des listes de taches, des plans d'action structures, des rapports executifs et plus encore. Choisissez la sortie qui convient au moment.",
    taskExTitle: "Extraction de taches",
    taskExDesc: "Extrayez automatiquement les elements d'action, les responsables et les echeances des conversations. Chaque engagement devient une tache suivie.",
    actionPlansTitle: "Plans d'action",
    actionPlansDesc: "Allez au-dela d'une simple liste. Obtenez des plans structures etape par etape avec des priorites et des dependances, construits a partir de ce qui a reellement ete discute.",
    cleanTextTitle: "Texte propre",
    cleanTextDesc: "Obtenez un texte poli et lisible a partir de votre audio. Mots de remplissage supprimes, grammaire corrigee, structure ajoutee. Pret a publier ou partager.",
    relSpeakerDetection: "Detection des intervenants",
    relTaskExtraction: "Extraction de taches",
    relMeetings: "Reunions",
    relProduct: "Produit",
    ctaTitle: "Arretez de reecouter. Commencez a lire.",
    ctaDesc: "Chaque enregistrement merite un resume clair. Sythio le fournit en quelques secondes.",
  },
  pt: {
    label: "Recursos",
    title: "Resumos de audio que capturam o que importa",
    subtitle: "O Sythio ouve suas gravacoes e entrega resumos concisos e contextuais. Nao e uma transcricao encurtada. E uma visao clara do que foi discutido, decidido e do que vem a seguir.",
    diffLabel: "O que o torna diferente",
    diffTitle: "Nao e uma transcricao mais curta",
    diffDesc: "A maioria das ferramentas comprime suas palavras. O Sythio as entende. O resultado e um resumo que parece ter sido escrito por alguem que estava na sala e sabia o que importava.",
    card1Title: "Entende o contexto",
    card1Desc: "O Sythio reconhece a diferenca entre comentarios casuais e decisoes criticas. Seu resumo reflete o que realmente importou, nao apenas o que foi mais dito.",
    card2Title: "Identifica temas",
    card2Desc: "Pontos relacionados espalhados por uma conversa longa sao agrupados. O resumo organiza os topicos logicamente, mesmo quando a conversa nao o fez.",
    card3Title: "Destaca decisoes",
    card3Desc: "Decisoes e acordos importantes aparecem claramente em cada resumo. Sem precisar reouvir para descobrir o que foi realmente acordado.",
    processLabel: "Processo",
    processTitle: "Como funciona",
    step1Title: "Grave ou envie",
    step1Desc: "Capture audio diretamente no Sythio ou envie uma gravacao existente. Reunioes, notas de voz, aulas, entrevistas — qualquer audio funciona.",
    step2Title: "Sythio analisa",
    step2Desc: "O audio e processado em segundos. O Sythio identifica falantes, entende o contexto, separa topicos e determina o mais importante.",
    step3Title: "Receba seu resumo",
    step3Desc: "Receba um resumo estruturado com pontos-chave, decisoes e contexto. Compartilhe, exporte ou use como ponto de partida para acoes e acompanhamentos.",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Onde os resumos ajudam",
    useCasesDesc: "Cada gravacao conta uma historia. Os resumos tornam essa historia acessivel em segundos, independentemente da duracao ou complexidade do audio original.",
    meetingsTitle: "Reunioes",
    meetingsDesc: "Uma reuniao de 60 minutos vira um resumo de dois paragrafos. Decisoes sao destacadas, itens de acao sao identificados e todos ficam alinhados sem rever a gravacao.",
    lecturesTitle: "Aulas",
    lecturesDesc: "Capture os conceitos centrais de qualquer aula. O Sythio identifica argumentos-chave, exemplos e conclusoes para revisao em minutos em vez de horas.",
    voiceNotesTitle: "Notas de voz",
    voiceNotesDesc: "Pensamentos desordenados se tornam notas estruturadas. Grave o que vier a mente e deixe o Sythio organizar em algo claro e acionavel.",
    clientCallsTitle: "Chamadas com clientes",
    clientCallsDesc: "Cada conversa com cliente e resumida com requisitos, feedback e proximos passos. Compartilhe com sua equipe ou arquive para referencia.",
    beyondLabel: "Uma gravacao, varias saidas",
    beyondTitle: "Alem dos resumos",
    beyondDesc: "Um resumo e apenas o comeco. Da mesma gravacao, o Sythio tambem pode gerar listas de tarefas, planos de acao estruturados, relatorios executivos e mais. Escolha a saida que se encaixa no momento.",
    taskExTitle: "Extracao de tarefas",
    taskExDesc: "Extraia automaticamente itens de acao, responsaveis e prazos das conversas. Cada compromisso se torna uma tarefa rastreavel.",
    actionPlansTitle: "Planos de acao",
    actionPlansDesc: "Va alem de uma lista simples. Obtenha planos estruturados passo a passo com prioridades e dependencias, construidos a partir do que realmente foi discutido.",
    cleanTextTitle: "Texto limpo",
    cleanTextDesc: "Obtenha texto polido e legivel do seu audio. Palavras de preenchimento removidas, gramatica corrigida, estrutura adicionada. Pronto para publicar ou compartilhar.",
    relSpeakerDetection: "Deteccao de falantes",
    relTaskExtraction: "Extracao de tarefas",
    relMeetings: "Reunioes",
    relProduct: "Produto",
    ctaTitle: "Pare de reouvir. Comece a ler.",
    ctaDesc: "Cada gravacao merece um resumo claro. O Sythio entrega em segundos.",
  },
  it: {
    label: "Funzionalita",
    title: "Riassunti audio che catturano cio che conta",
    subtitle: "Sythio ascolta le tue registrazioni e fornisce riassunti concisi e contestuali. Non una trascrizione abbreviata. Una panoramica chiara di cio che e stato discusso, deciso e di cosa viene dopo.",
    diffLabel: "Cosa lo rende diverso",
    diffTitle: "Non una trascrizione piu corta",
    diffDesc: "La maggior parte degli strumenti comprime le tue parole. Sythio le capisce. Il risultato e un riassunto che sembra scritto da qualcuno che era nella stanza e sapeva cosa contava.",
    card1Title: "Comprende il contesto",
    card1Desc: "Sythio riconosce la differenza tra commenti casuali e decisioni critiche. Il tuo riassunto riflette cio che contava davvero, non solo cio che e stato detto di piu.",
    card2Title: "Identifica i temi",
    card2Desc: "I punti correlati sparsi in una lunga conversazione vengono raggruppati. Il riassunto organizza gli argomenti logicamente, anche quando la conversazione non lo ha fatto.",
    card3Title: "Evidenzia le decisioni",
    card3Desc: "Le decisioni e gli accordi chiave emergono chiaramente in ogni riassunto. Non serve piu riascoltare per capire cosa e stato concordato.",
    processLabel: "Processo",
    processTitle: "Come funziona",
    step1Title: "Registra o carica",
    step1Desc: "Cattura l'audio direttamente in Sythio o carica una registrazione esistente. Riunioni, note vocali, lezioni, interviste — qualsiasi audio funziona.",
    step2Title: "Sythio analizza",
    step2Desc: "L'audio viene elaborato in pochi secondi. Sythio identifica i parlanti, comprende il contesto, separa gli argomenti e determina cio che e piu importante.",
    step3Title: "Ottieni il tuo riassunto",
    step3Desc: "Ricevi un riassunto strutturato con punti chiave, decisioni e contesto. Condividilo, esportalo o usalo come punto di partenza per azioni e follow-up.",
    useCasesLabel: "Casi d'uso",
    useCasesTitle: "Dove i riassunti aiutano",
    useCasesDesc: "Ogni registrazione racconta una storia. I riassunti rendono quella storia accessibile in pochi secondi, indipendentemente dalla durata o complessita dell'audio originale.",
    meetingsTitle: "Riunioni",
    meetingsDesc: "Una riunione di 60 minuti diventa un riassunto di due paragrafi. Le decisioni sono evidenziate, le azioni identificate e tutti restano allineati senza rivedere la registrazione.",
    lecturesTitle: "Lezioni",
    lecturesDesc: "Cattura i concetti chiave di qualsiasi lezione. Sythio identifica argomenti principali, esempi e conclusioni per una revisione in minuti anziche ore.",
    voiceNotesTitle: "Note vocali",
    voiceNotesDesc: "I pensieri disordinati diventano note strutturate. Registra cio che ti viene in mente e lascia che Sythio lo organizzi in qualcosa di chiaro e attuabile.",
    clientCallsTitle: "Chiamate clienti",
    clientCallsDesc: "Ogni conversazione con il cliente viene riassunta con requisiti, feedback e prossimi passi. Condividi con il tuo team o archivia per riferimento.",
    beyondLabel: "Una registrazione, molti output",
    beyondTitle: "Oltre i riassunti",
    beyondDesc: "Un riassunto e solo l'inizio. Dalla stessa registrazione, Sythio puo anche generare liste di attivita, piani d'azione strutturati, report esecutivi e altro. Scegli l'output adatto al momento.",
    taskExTitle: "Estrazione attivita",
    taskExDesc: "Estrai automaticamente elementi d'azione, responsabili e scadenze dalle conversazioni. Ogni impegno diventa un'attivita tracciabile.",
    actionPlansTitle: "Piani d'azione",
    actionPlansDesc: "Vai oltre una semplice lista. Ottieni piani strutturati passo dopo passo con priorita e dipendenze, costruiti da cio che e stato realmente discusso.",
    cleanTextTitle: "Testo pulito",
    cleanTextDesc: "Ottieni testo curato e leggibile dal tuo audio. Parole riempitive rimosse, grammatica corretta, struttura aggiunta. Pronto da pubblicare o condividere.",
    relSpeakerDetection: "Rilevamento parlanti",
    relTaskExtraction: "Estrazione attivita",
    relMeetings: "Riunioni",
    relProduct: "Prodotto",
    ctaTitle: "Smetti di riascoltare. Inizia a leggere.",
    ctaDesc: "Ogni registrazione merita un riassunto chiaro. Sythio lo fornisce in pochi secondi.",
  },
};

export default function AISummariesPage() {
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

      {/* Not a Shorter Transcript */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.diffLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.diffTitle}
              </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.diffDesc}
            </p>
          </div>
          <GsapStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.card1Title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {c.card1Desc}
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.card2Title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {c.card2Desc}
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.card3Title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {c.card3Desc}
              </p>
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.processLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.processTitle}
              </TextReveal>
          </div>
          <GsapStagger className="grid md:grid-cols-3 gap-8" stagger={0.08}>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.step1Title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {c.step1Desc}
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.step2Title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {c.step2Desc}
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.step3Title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {c.step3Desc}
              </p>
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* Where Summaries Help */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.useCasesLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.useCasesTitle}
              </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.useCasesDesc}
            </p>
          </div>
          <GsapStagger className="grid sm:grid-cols-2 gap-6" stagger={0.08}>
            <ScrollScale><Link href="/use-cases/meetings" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.meetingsTitle}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {c.meetingsDesc}
              </p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/lectures" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.lecturesTitle}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {c.lecturesDesc}
              </p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/voice-notes" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.voiceNotesTitle}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {c.voiceNotesDesc}
              </p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/client-calls" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.clientCallsTitle}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {c.clientCallsDesc}
              </p>
            </Link></ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* Beyond Summaries */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.beyondLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.beyondTitle}
              </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.beyondDesc}
            </p>
          </div>
          <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
            <ScrollScale><Link href="/features/task-extraction" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.taskExTitle}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {c.taskExDesc}
              </p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/features/action-plans" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.actionPlansTitle}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {c.actionPlansDesc}
              </p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/features/clean-text" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.cleanTextTitle}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {c.cleanTextDesc}
              </p>
            </Link></ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* Related */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">{s("common.related")}</h2>
          <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
            <ScrollScale><Link href="/features/speaker-detection" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relSpeakerDetection}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/features/task-extraction" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relTaskExtraction}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/meetings" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relMeetings}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/product" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.overview")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relProduct}</p>
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
