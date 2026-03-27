"use client";

import Link from "next/link";
import { useLanguage } from "../components/i18n/language-context";
import type { Locale } from "../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Audio to Ideas",
    title: "Turn Any Audio into Organized Ideas",
    subtitle:
      "Record a brainstorm, upload a creative session, or capture thoughts on the go. Sythio listens, identifies every idea, and organizes them by theme — so nothing gets lost in the flow of conversation.",
    howTitle: "Three steps to organized ideas",
    howSubtitle:
      "No sticky notes. No messy whiteboards. Sythio captures every idea from your conversation and gives them structure automatically.",
    step1Title: "Record or upload",
    step1Desc:
      "Capture a brainstorming session inside Sythio or upload an existing recording. Team ideation, solo thinking, creative workshops — any format works.",
    step2Title: "Sythio captures every idea",
    step2Desc:
      "Each idea mentioned in the conversation is identified, regardless of how casually it was raised. Related ideas are grouped by theme automatically.",
    step3Title: "Get your organized ideas",
    step3Desc:
      "A structured collection of ideas, grouped by theme and ready to evaluate. Review them, prioritize them, or share them with the team.",
    whatLabel: "What You Get",
    whatTitle: "What Sythio Idea Output Includes",
    whatSubtitle:
      "Not a disorganized brain dump. A curated, themed collection of ideas — each one clearly described and grouped with related concepts.",
    feat1Title: "Every idea captured",
    feat1Desc:
      "Even casually mentioned or half-formed ideas are identified and included. Nothing is left behind from the conversation.",
    feat2Title: "Grouped by theme",
    feat2Desc:
      "Related ideas are automatically clustered together, making it easy to see patterns and connections across the conversation.",
    feat3Title: "Speaker attribution",
    feat3Desc:
      "When multiple people contribute, each idea is linked to the person who raised it — useful for credit and follow-up.",
    feat4Title: "Ready to evaluate",
    feat4Desc:
      "Ideas are described clearly enough to be evaluated on their own, even by someone who was not in the original conversation.",
    moreLabel: "One Recording, Many Outputs",
    moreTitle: "Not Just Ideas",
    moreSubtitle:
      "Organized ideas are one output. The same recording can also produce summaries, action plans, task lists, and more — all from a single upload.",
    more1Title: "Summaries",
    more1Desc:
      "A clear overview of the full conversation — decisions, topics, and takeaways.",
    more2Title: "Action plans",
    more2Desc:
      "Structured, phased plans with priorities and responsibilities — built from your conversation.",
    more3Title: "Task lists",
    more3Desc:
      "Extract every commitment and action item, with owners when speakers are detected.",
    more4Title: "All 9 formats",
    more4Desc:
      "Summaries, tasks, action plans, reports, messages, study notes, ideas, and more.",
    versatileLabel: "Versatile by Design",
    versatileTitle: "Works with Any Creative Audio",
    versatileSubtitle:
      "Sythio adapts to the content. Whether it is a rapid-fire brainstorm or a long strategic discussion, every idea is captured and organized.",
    use1Title: "Brainstorming sessions",
    use1Desc:
      "Rapid idea generation captured in full — every suggestion, variation, and tangent preserved and organized.",
    use2Title: "Creative workshops",
    use2Desc:
      "Multi-person creative sessions where ideas build on each other, all captured with proper attribution.",
    use3Title: "Solo thinking",
    use3Desc:
      "Voice notes where you think out loud, turned into a structured collection of ideas you can act on later.",
    use4Title: "Strategy discussions",
    use4Desc:
      "Strategic conversations where new directions and possibilities are explored, organized by theme and opportunity.",
    outcome: "Outcome",
    rel1Name: "Ideas",
    rel2Name: "Audio to Summary",
    rel3Name: "Audio to Action Plan",
    rel4Name: "Brainstorming",
    ctaTitle: "Stop losing ideas. Start organizing them.",
    ctaSubtitle:
      "Every brainstorm becomes a structured collection of ideas — in seconds, not hours.",
  },
  es: {
    label: "Audio a Ideas",
    title: "Convierte cualquier audio en ideas organizadas",
    subtitle:
      "Graba una lluvia de ideas, sube una sesion creativa o captura pensamientos en movimiento. Sythio escucha, identifica cada idea y las organiza por tema — para que nada se pierda en el flujo de la conversacion.",
    howTitle: "Tres pasos para ideas organizadas",
    howSubtitle:
      "Sin notas adhesivas. Sin pizarras desordenadas. Sythio captura cada idea de tu conversacion y les da estructura automaticamente.",
    step1Title: "Graba o sube",
    step1Desc:
      "Captura una sesion de lluvia de ideas en Sythio o sube una grabacion existente. Ideacion en equipo, pensamiento individual, talleres creativos — cualquier formato funciona.",
    step2Title: "Sythio captura cada idea",
    step2Desc:
      "Cada idea mencionada en la conversacion se identifica, sin importar que tan casualmente se planteo. Las ideas relacionadas se agrupan por tema automaticamente.",
    step3Title: "Obtiene tus ideas organizadas",
    step3Desc:
      "Una coleccion estructurada de ideas, agrupadas por tema y listas para evaluar. Revisalas, priorizalas o compartelas con el equipo.",
    whatLabel: "Lo que obtienes",
    whatTitle: "Lo que incluye la salida de ideas de Sythio",
    whatSubtitle:
      "No es un volcado de cerebro desorganizado. Una coleccion curada y tematica de ideas — cada una claramente descrita y agrupada con conceptos relacionados.",
    feat1Title: "Cada idea capturada",
    feat1Desc:
      "Incluso las ideas mencionadas casualmente o a medio formar se identifican e incluyen. Nada se queda atras de la conversacion.",
    feat2Title: "Agrupadas por tema",
    feat2Desc:
      "Las ideas relacionadas se agrupan automaticamente, facilitando ver patrones y conexiones a traves de la conversacion.",
    feat3Title: "Atribucion por hablante",
    feat3Desc:
      "Cuando multiples personas contribuyen, cada idea se vincula a la persona que la planteo — util para credito y seguimiento.",
    feat4Title: "Listas para evaluar",
    feat4Desc:
      "Las ideas se describen con suficiente claridad para ser evaluadas por si solas, incluso por alguien que no estuvo en la conversacion original.",
    moreLabel: "Una grabacion, muchos resultados",
    moreTitle: "No solo ideas",
    moreSubtitle:
      "Las ideas organizadas son un resultado. La misma grabacion tambien puede producir resumenes, planes de accion, listas de tareas y mas — todo desde una sola carga.",
    more1Title: "Resumenes",
    more1Desc:
      "Una vision clara de toda la conversacion — decisiones, temas y conclusiones.",
    more2Title: "Planes de accion",
    more2Desc:
      "Planes estructurados y por fases con prioridades y responsabilidades — construidos desde tu conversacion.",
    more3Title: "Listas de tareas",
    more3Desc:
      "Extrae cada compromiso y elemento de accion, con responsables cuando se detectan hablantes.",
    more4Title: "Los 9 formatos",
    more4Desc:
      "Resumenes, tareas, planes de accion, informes, mensajes, notas de estudio, ideas y mas.",
    versatileLabel: "Versatil por diseno",
    versatileTitle: "Funciona con cualquier audio creativo",
    versatileSubtitle:
      "Sythio se adapta al contenido. Ya sea una lluvia de ideas rapida o una discusion estrategica larga, cada idea se captura y organiza.",
    use1Title: "Sesiones de lluvia de ideas",
    use1Desc:
      "Generacion rapida de ideas capturada en su totalidad — cada sugerencia, variacion y tangente preservada y organizada.",
    use2Title: "Talleres creativos",
    use2Desc:
      "Sesiones creativas con multiples personas donde las ideas se construyen unas sobre otras, todas capturadas con atribucion adecuada.",
    use3Title: "Pensamiento individual",
    use3Desc:
      "Notas de voz donde piensas en voz alta, convertidas en una coleccion estructurada de ideas sobre las que puedes actuar despues.",
    use4Title: "Discusiones estrategicas",
    use4Desc:
      "Conversaciones estrategicas donde se exploran nuevas direcciones y posibilidades, organizadas por tema y oportunidad.",
    outcome: "Resultado",
    rel1Name: "Ideas",
    rel2Name: "Audio a Resumen",
    rel3Name: "Audio a Plan de Accion",
    rel4Name: "Lluvia de Ideas",
    ctaTitle: "Deja de perder ideas. Empieza a organizarlas.",
    ctaSubtitle:
      "Cada lluvia de ideas se convierte en una coleccion estructurada — en segundos, no en horas.",
  },
  fr: {
    label: "Audio en Idees",
    title: "Transformez tout audio en idees organisees",
    subtitle:
      "Enregistrez un brainstorming, telechargez une session creative ou capturez des pensees en deplacement. Sythio ecoute, identifie chaque idee et les organise par theme — pour que rien ne se perde dans le flux de la conversation.",
    howTitle: "Trois etapes pour des idees organisees",
    howSubtitle:
      "Plus de post-it. Plus de tableaux blancs desordonnees. Sythio capture chaque idee de votre conversation et leur donne une structure automatiquement.",
    step1Title: "Enregistrez ou telechargez",
    step1Desc:
      "Capturez une session de brainstorming dans Sythio ou telechargez un enregistrement existant. Ideation en equipe, reflexion solo, ateliers creatifs — tout format fonctionne.",
    step2Title: "Sythio capture chaque idee",
    step2Desc:
      "Chaque idee mentionnee dans la conversation est identifiee, peu importe la desinvolture avec laquelle elle a ete evoquee. Les idees liees sont regroupees par theme automatiquement.",
    step3Title: "Obtenez vos idees organisees",
    step3Desc:
      "Une collection structuree d'idees, regroupees par theme et pretes a evaluer. Consultez-les, priorisez-les ou partagez-les avec l'equipe.",
    whatLabel: "Ce que vous obtenez",
    whatTitle: "Ce qu'inclut la sortie d'idees Sythio",
    whatSubtitle:
      "Pas un deversement cerebral desorganise. Une collection curatee et thematique d'idees — chacune clairement decrite et regroupee avec des concepts lies.",
    feat1Title: "Chaque idee capturee",
    feat1Desc:
      "Meme les idees mentionnees casualmente ou a moitie formees sont identifiees et incluses. Rien n'est laisse derriere de la conversation.",
    feat2Title: "Regroupees par theme",
    feat2Desc:
      "Les idees liees sont automatiquement regroupees, facilitant la vision des patterns et connexions a travers la conversation.",
    feat3Title: "Attribution par locuteur",
    feat3Desc:
      "Quand plusieurs personnes contribuent, chaque idee est liee a la personne qui l'a evoquee — utile pour le credit et le suivi.",
    feat4Title: "Pretes a evaluer",
    feat4Desc:
      "Les idees sont decrites assez clairement pour etre evaluees seules, meme par quelqu'un qui n'etait pas dans la conversation originale.",
    moreLabel: "Un enregistrement, plusieurs resultats",
    moreTitle: "Pas que des idees",
    moreSubtitle:
      "Les idees organisees sont un resultat. Le meme enregistrement peut aussi produire des resumes, plans d'action, listes de taches et plus — le tout a partir d'un seul envoi.",
    more1Title: "Resumes",
    more1Desc:
      "Une vue d'ensemble claire de toute la conversation — decisions, sujets et conclusions.",
    more2Title: "Plans d'action",
    more2Desc:
      "Plans structures et phases avec priorites et responsabilites — construits a partir de votre conversation.",
    more3Title: "Listes de taches",
    more3Desc:
      "Extrayez chaque engagement et element d'action, avec les responsables quand les locuteurs sont detectes.",
    more4Title: "Les 9 formats",
    more4Desc:
      "Resumes, taches, plans d'action, rapports, messages, notes d'etude, idees et plus.",
    versatileLabel: "Polyvalent par conception",
    versatileTitle: "Fonctionne avec tout audio creatif",
    versatileSubtitle:
      "Sythio s'adapte au contenu. Qu'il s'agisse d'un brainstorming rapide ou d'une longue discussion strategique, chaque idee est capturee et organisee.",
    use1Title: "Sessions de brainstorming",
    use1Desc:
      "Generation rapide d'idees capturee en totalite — chaque suggestion, variation et tangente preservee et organisee.",
    use2Title: "Ateliers creatifs",
    use2Desc:
      "Sessions creatives multi-personnes ou les idees se construisent les unes sur les autres, toutes capturees avec attribution correcte.",
    use3Title: "Reflexion solo",
    use3Desc:
      "Notes vocales ou vous pensez a voix haute, transformees en une collection structuree d'idees sur lesquelles vous pouvez agir plus tard.",
    use4Title: "Discussions strategiques",
    use4Desc:
      "Conversations strategiques ou de nouvelles directions et possibilites sont explorees, organisees par theme et opportunite.",
    outcome: "Resultat",
    rel1Name: "Idees",
    rel2Name: "Audio en Resume",
    rel3Name: "Audio en Plan d'action",
    rel4Name: "Brainstorming",
    ctaTitle: "Arretez de perdre des idees. Commencez a les organiser.",
    ctaSubtitle:
      "Chaque brainstorming devient une collection structuree d'idees — en secondes, pas en heures.",
  },
  pt: {
    label: "Audio para Ideias",
    title: "Transforme qualquer audio em ideias organizadas",
    subtitle:
      "Grave um brainstorming, envie uma sessao criativa ou capture pensamentos em movimento. Sythio ouve, identifica cada ideia e as organiza por tema — para que nada se perca no fluxo da conversa.",
    howTitle: "Tres passos para ideias organizadas",
    howSubtitle:
      "Sem post-its. Sem quadros brancos bagunados. Sythio captura cada ideia da sua conversa e lhes da estrutura automaticamente.",
    step1Title: "Grave ou envie",
    step1Desc:
      "Capture uma sessao de brainstorming no Sythio ou envie uma gravacao existente. Ideacao em equipe, pensamento solo, workshops criativos — qualquer formato funciona.",
    step2Title: "Sythio captura cada ideia",
    step2Desc:
      "Cada ideia mencionada na conversa e identificada, independentemente de quao casualmente foi levantada. Ideias relacionadas sao agrupadas por tema automaticamente.",
    step3Title: "Receba suas ideias organizadas",
    step3Desc:
      "Uma colecao estruturada de ideias, agrupadas por tema e prontas para avaliar. Revise-as, priorize-as ou compartilhe-as com a equipe.",
    whatLabel: "O que voce recebe",
    whatTitle: "O que a saida de ideias do Sythio inclui",
    whatSubtitle:
      "Nao e um despejo cerebral desorganizado. Uma colecao curada e tematica de ideias — cada uma claramente descrita e agrupada com conceitos relacionados.",
    feat1Title: "Cada ideia capturada",
    feat1Desc:
      "Mesmo ideias mencionadas casualmente ou parcialmente formadas sao identificadas e incluidas. Nada fica para tras da conversa.",
    feat2Title: "Agrupadas por tema",
    feat2Desc:
      "Ideias relacionadas sao automaticamente agrupadas, facilitando ver padroes e conexoes atraves da conversa.",
    feat3Title: "Atribuicao por falante",
    feat3Desc:
      "Quando varias pessoas contribuem, cada ideia e vinculada a pessoa que a levantou — util para credito e acompanhamento.",
    feat4Title: "Prontas para avaliar",
    feat4Desc:
      "As ideias sao descritas com clareza suficiente para serem avaliadas por conta propria, mesmo por alguem que nao estava na conversa original.",
    moreLabel: "Uma gravacao, muitos resultados",
    moreTitle: "Nao apenas ideias",
    moreSubtitle:
      "Ideias organizadas sao um resultado. A mesma gravacao tambem pode produzir resumos, planos de acao, listas de tarefas e mais — tudo a partir de um unico envio.",
    more1Title: "Resumos",
    more1Desc:
      "Uma visao clara de toda a conversa — decisoes, temas e conclusoes.",
    more2Title: "Planos de acao",
    more2Desc:
      "Planos estruturados e faseados com prioridades e responsabilidades — construidos a partir da sua conversa.",
    more3Title: "Listas de tarefas",
    more3Desc:
      "Extraia cada compromisso e item de acao, com responsaveis quando falantes sao detectados.",
    more4Title: "Todos os 9 formatos",
    more4Desc:
      "Resumos, tarefas, planos de acao, relatorios, mensagens, notas de estudo, ideias e mais.",
    versatileLabel: "Versatil por design",
    versatileTitle: "Funciona com qualquer audio criativo",
    versatileSubtitle:
      "Sythio se adapta ao conteudo. Seja um brainstorming rapido ou uma discussao estrategica longa, cada ideia e capturada e organizada.",
    use1Title: "Sessoes de brainstorming",
    use1Desc:
      "Geracao rapida de ideias capturada por completo — cada sugestao, variacao e tangente preservada e organizada.",
    use2Title: "Workshops criativos",
    use2Desc:
      "Sessoes criativas com varias pessoas onde as ideias se constroem umas sobre as outras, todas capturadas com atribuicao adequada.",
    use3Title: "Pensamento solo",
    use3Desc:
      "Notas de voz onde voce pensa em voz alta, transformadas em uma colecao estruturada de ideias sobre as quais pode agir depois.",
    use4Title: "Discussoes estrategicas",
    use4Desc:
      "Conversas estrategicas onde novas direcoes e possibilidades sao exploradas, organizadas por tema e oportunidade.",
    outcome: "Resultado",
    rel1Name: "Ideias",
    rel2Name: "Audio para Resumo",
    rel3Name: "Audio para Plano de Acao",
    rel4Name: "Brainstorming",
    ctaTitle: "Pare de perder ideias. Comece a organiza-las.",
    ctaSubtitle:
      "Cada brainstorming se torna uma colecao estruturada de ideias — em segundos, nao em horas.",
  },
  it: {
    label: "Audio in Idee",
    title: "Trasforma qualsiasi audio in idee organizzate",
    subtitle:
      "Registra un brainstorming, carica una sessione creativa o cattura pensieri in movimento. Sythio ascolta, identifica ogni idea e le organizza per tema — cosi nulla si perde nel flusso della conversazione.",
    howTitle: "Tre passaggi per idee organizzate",
    howSubtitle:
      "Niente post-it. Niente lavagne disordinate. Sythio cattura ogni idea dalla tua conversazione e le da struttura automaticamente.",
    step1Title: "Registra o carica",
    step1Desc:
      "Cattura una sessione di brainstorming in Sythio o carica una registrazione esistente. Ideazione di team, pensiero individuale, workshop creativi — qualsiasi formato funziona.",
    step2Title: "Sythio cattura ogni idea",
    step2Desc:
      "Ogni idea menzionata nella conversazione viene identificata, indipendentemente da quanto casualmente sia stata sollevata. Le idee correlate vengono raggruppate per tema automaticamente.",
    step3Title: "Ottieni le tue idee organizzate",
    step3Desc:
      "Una collezione strutturata di idee, raggruppate per tema e pronte per essere valutate. Consultale, stabilisci le priorita o condividile con il team.",
    whatLabel: "Cosa ottieni",
    whatTitle: "Cosa include l'output delle idee Sythio",
    whatSubtitle:
      "Non un brain dump disorganizzato. Una collezione curata e tematica di idee — ciascuna chiaramente descritta e raggruppata con concetti correlati.",
    feat1Title: "Ogni idea catturata",
    feat1Desc:
      "Anche le idee menzionate casualmente o parzialmente formate vengono identificate e incluse. Nulla viene lasciato indietro dalla conversazione.",
    feat2Title: "Raggruppate per tema",
    feat2Desc:
      "Le idee correlate vengono automaticamente raggruppate, facilitando la visione di pattern e connessioni attraverso la conversazione.",
    feat3Title: "Attribuzione per parlante",
    feat3Desc:
      "Quando piu persone contribuiscono, ogni idea e collegata alla persona che l'ha sollevata — utile per il credito e il follow-up.",
    feat4Title: "Pronte per la valutazione",
    feat4Desc:
      "Le idee sono descritte con sufficiente chiarezza per essere valutate da sole, anche da qualcuno che non era nella conversazione originale.",
    moreLabel: "Una registrazione, molti risultati",
    moreTitle: "Non solo idee",
    moreSubtitle:
      "Le idee organizzate sono un risultato. La stessa registrazione puo anche produrre riassunti, piani d'azione, liste di attivita e altro — il tutto da un singolo caricamento.",
    more1Title: "Riassunti",
    more1Desc:
      "Una panoramica chiara dell'intera conversazione — decisioni, argomenti e conclusioni.",
    more2Title: "Piani d'azione",
    more2Desc:
      "Piani strutturati e per fasi con priorita e responsabilita — costruiti dalla tua conversazione.",
    more3Title: "Liste di attivita",
    more3Desc:
      "Estrai ogni impegno e elemento d'azione, con responsabili quando i parlanti vengono rilevati.",
    more4Title: "Tutti i 9 formati",
    more4Desc:
      "Riassunti, attivita, piani d'azione, report, messaggi, note di studio, idee e altro.",
    versatileLabel: "Versatile per design",
    versatileTitle: "Funziona con qualsiasi audio creativo",
    versatileSubtitle:
      "Sythio si adatta al contenuto. Che si tratti di un brainstorming rapido o di una lunga discussione strategica, ogni idea viene catturata e organizzata.",
    use1Title: "Sessioni di brainstorming",
    use1Desc:
      "Generazione rapida di idee catturata per intero — ogni suggerimento, variazione e tangente preservata e organizzata.",
    use2Title: "Workshop creativi",
    use2Desc:
      "Sessioni creative multi-persona dove le idee si costruiscono l'una sull'altra, tutte catturate con attribuzione corretta.",
    use3Title: "Pensiero individuale",
    use3Desc:
      "Note vocali dove pensi ad alta voce, trasformate in una collezione strutturata di idee su cui puoi agire in seguito.",
    use4Title: "Discussioni strategiche",
    use4Desc:
      "Conversazioni strategiche dove nuove direzioni e possibilita vengono esplorate, organizzate per tema e opportunita.",
    outcome: "Risultato",
    rel1Name: "Idee",
    rel2Name: "Audio in Riassunto",
    rel3Name: "Audio in Piano d'azione",
    rel4Name: "Brainstorming",
    ctaTitle: "Smetti di perdere idee. Inizia a organizzarle.",
    ctaSubtitle:
      "Ogni brainstorming diventa una collezione strutturata di idee — in secondi, non in ore.",
  },
};

export default function AudioToIdeasPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

  return (
    <PageReveal>
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
              <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{s("common.seeHowItWorks")}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{s("common.howItWorks")}</p>
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.howTitle}</TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">{c.howSubtitle}</p>
          <GsapStagger className="mt-16 grid md:grid-cols-3 gap-8" stagger={0.08}>
            {[
              { step: "01", title: c.step1Title, description: c.step1Desc },
              { step: "02", title: c.step2Title, description: c.step2Desc },
              { step: "03", title: c.step3Title, description: c.step3Desc },
            ].map((item) => (
              <ScrollScale key={item.step}>
                <div className="group p-8 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <span className="text-xs font-bold tracking-wider text-muted-light">{item.step}</span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </ScrollScale>
            ))}
          </GsapStagger>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.whatLabel}</p>
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.whatTitle}</TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">{c.whatSubtitle}</p>
          <GsapStagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
            {[
              { title: c.feat1Title, description: c.feat1Desc },
              { title: c.feat2Title, description: c.feat2Desc },
              { title: c.feat3Title, description: c.feat3Desc },
              { title: c.feat4Title, description: c.feat4Desc },
            ].map((item) => (
              <ScrollScale key={item.title}>
                <div className="p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </ScrollScale>
            ))}
          </GsapStagger>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.moreLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.moreTitle}</TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">{c.moreSubtitle}</p>
          </div>
          <GsapStagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
            {[
              { title: c.more1Title, description: c.more1Desc, href: "/audio-to-summary" },
              { title: c.more2Title, description: c.more2Desc, href: "/audio-to-action-plan" },
              { title: c.more3Title, description: c.more3Desc, href: "/audio-to-tasks" },
              { title: c.more4Title, description: c.more4Desc, href: "/features" },
            ].map((item) => (
              <ScrollScale key={item.title}>
                <Link href={item.href} className="group block p-7 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-3">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">{s("common.learnMore")} &rarr;</span>
                </Link>
              </ScrollScale>
            ))}
          </GsapStagger>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.versatileLabel}</p>
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.versatileTitle}</TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">{c.versatileSubtitle}</p>
          <GsapStagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
            {[
              { title: c.use1Title, description: c.use1Desc },
              { title: c.use2Title, description: c.use2Desc },
              { title: c.use3Title, description: c.use3Desc },
              { title: c.use4Title, description: c.use4Desc },
            ].map((item) => (
              <ScrollScale key={item.title}>
                <div className="p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </ScrollScale>
            ))}
          </GsapStagger>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal tag="h2" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">{s("common.related")}</TextReveal>
          <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
            <ScrollScale>
              <Link href="/features/ideas" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel1Name}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/audio-to-summary" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel2Name}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/audio-to-action-plan" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel3Name}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/use-cases/brainstorming" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel4Name}</p>
              </Link>
            </ScrollScale>
          </GsapStagger>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/10 via-purple-200/10 to-transparent blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.ctaTitle}</TextReveal>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">{c.ctaSubtitle}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticHover><Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{s("common.startFree")}</Link></MagneticHover>
            <MagneticHover><Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{s("common.exploreProduct")}</Link></MagneticHover>
          </div>
          <p className="mt-6 text-sm text-muted">{s("common.freePlan")}</p>
        </div>
      </section>
    </PageReveal>
  );
}
