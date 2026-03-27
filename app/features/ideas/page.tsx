"use client";
import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Features", title: "Capture Every Idea Before It Disappears",
    subtitle: "Brainstorming sessions are full of potential. But without structure, great ideas get lost in the noise. Sythio captures them all, groups them by theme, and ranks them by potential.",
    probLabel: "The Problem", probTitle: "Great Ideas Deserve More Than a Forgotten Recording",
    probDesc1: "You brainstorm with your team. Twenty ideas fly around the room. Maybe someone writes a few on a whiteboard. The session ends, the energy fades, and a week later no one remembers what was said.",
    probDesc2: "Sythio makes sure every idea is captured, categorized, and ready for evaluation. The creative energy stays alive long after the session ends.",
    orgLabel: "How Sythio Organizes Ideas",
    org1: "Ideas grouped by theme or category", org2: "Each idea described with context from the conversation", org3: "Ranked by group energy and consensus", org4: "Attributed to the person who proposed it", org5: "Connected to related ideas and next steps",
    diffLabel: "What Makes It Different", diffTitle: "More Than a List of Random Thoughts",
    diffDesc: "A raw transcript of a brainstorming session is chaos. Sythio imposes structure without losing creativity. Ideas are preserved in their original spirit but organized for action.",
    d1Title: "Thematic Grouping", d1Desc: "Ideas that relate to the same topic or problem are grouped together, even if they were mentioned at different points in the conversation.",
    d2Title: "Context Preserved", d2Desc: "Each idea includes the reasoning or context that was discussed. You do not just get the idea — you get why it came up and what sparked it.",
    d3Title: "Ready for Evaluation", d3Desc: "Ideas are presented in a format that makes it easy to evaluate, prioritize, and decide which ones to pursue. No re-listening required.",
    processLabel: "Process", processTitle: "How It Works",
    s1Title: "Record Your Session", s1Desc: "Hit record during your brainstorming session, creative meeting, or solo idea dump. Let the ideas flow naturally.",
    s2Title: "Sythio Extracts", s2Desc: "Every distinct idea is identified, described, and categorized. Related concepts are linked. Tangents are separated from core proposals.",
    s3Title: "Get Organized Ideas", s3Desc: "Receive a structured collection of all ideas from the session. Share with your team, evaluate individually, or use as input for your next planning cycle.",
    ucLabel: "Use Cases", ucTitle: "Where Idea Capture Shines",
    uc1Title: "Team Brainstorming", uc1Desc: "Every participant's ideas are captured equally. No more relying on whoever had the pen. The quiet contributor's idea is preserved alongside the loudest voice.",
    uc2Title: "Solo Idea Dumps", uc2Desc: "Record your stream of consciousness and get it back as organized, categorized ideas. Perfect for founders, writers, and creators who think out loud.",
    uc3Title: "Product Discovery", uc3Desc: "Capture feature ideas, user feedback themes, and product direction conversations. Every suggestion is documented and ready for roadmap planning.",
    uc4Title: "Creative Sessions", uc4Desc: "Marketing campaigns, content ideas, design concepts — any creative session produces ideas worth keeping. Sythio makes sure none are lost.",
    otherLabel: "One Recording, Many Outputs", otherTitle: "Ideas Lead to Action",
    otherDesc: "Once ideas are captured, turn the same session into action plans, task lists, or summaries. Ideas become plans become progress.",
    oAP: "Action Plans", oAPDesc: "Turn the best ideas into structured plans with phases, priorities, and ownership. From brainstorm to roadmap in one step.",
    oTask: "Task Extraction", oTaskDesc: "When ideas turn into commitments. Tasks are pulled with owners so every good idea gets someone responsible for it.",
    oAI: "AI Summaries", oAIDesc: "A high-level overview of the entire brainstorming session. Great for sharing with people who were not in the room.",
    relAP: "Action Plans", relKP: "Key Points", relBrain: "Brainstorming", relProd: "Product",
    ctaTitle: "Never Lose a Good Idea Again", ctaDesc: "Every brainstorm produces something worth keeping. Sythio makes sure you keep it all.",
  },
  es: {
    label: "Funciones", title: "Captura cada idea antes de que desaparezca",
    subtitle: "Las sesiones de lluvia de ideas estan llenas de potencial. Pero sin estructura, las grandes ideas se pierden en el ruido. Sythio las captura todas, las agrupa por tema y las clasifica por potencial.",
    probLabel: "El problema", probTitle: "Las grandes ideas merecen mas que una grabacion olvidada",
    probDesc1: "Haces una lluvia de ideas con tu equipo. Veinte ideas vuelan por la sala. Quiza alguien escribe algunas en una pizarra. La sesion termina, la energia se desvanece, y una semana despues nadie recuerda que se dijo.",
    probDesc2: "Sythio se asegura de que cada idea sea capturada, categorizada y lista para evaluacion. La energia creativa se mantiene viva mucho despues de que termine la sesion.",
    orgLabel: "Como Sythio organiza las ideas",
    org1: "Ideas agrupadas por tema o categoria", org2: "Cada idea descrita con contexto de la conversacion", org3: "Clasificadas por energia del grupo y consenso", org4: "Atribuidas a la persona que las propuso", org5: "Conectadas con ideas relacionadas y proximos pasos",
    diffLabel: "Lo que lo hace diferente", diffTitle: "Mas que una lista de pensamientos aleatorios",
    diffDesc: "Una transcripcion cruda de una sesion de lluvia de ideas es caos. Sythio impone estructura sin perder creatividad. Las ideas se preservan en su espiritu original pero organizadas para la accion.",
    d1Title: "Agrupacion tematica", d1Desc: "Ideas relacionadas con el mismo tema o problema se agrupan, incluso si se mencionaron en momentos diferentes de la conversacion.",
    d2Title: "Contexto preservado", d2Desc: "Cada idea incluye el razonamiento o contexto discutido. No solo obtienes la idea — obtienes por que surgio y que la inspiro.",
    d3Title: "Lista para evaluacion", d3Desc: "Las ideas se presentan en un formato que facilita evaluar, priorizar y decidir cuales perseguir. Sin necesidad de reescuchar.",
    processLabel: "Proceso", processTitle: "Como funciona",
    s1Title: "Graba tu sesion", s1Desc: "Presiona grabar durante tu sesion de lluvia de ideas, reunion creativa o volcado de ideas individual. Deja que las ideas fluyan naturalmente.",
    s2Title: "Sythio extrae", s2Desc: "Cada idea distinta se identifica, describe y categoriza. Conceptos relacionados se vinculan. Las tangentes se separan de las propuestas centrales.",
    s3Title: "Obtiene ideas organizadas", s3Desc: "Recibe una coleccion estructurada de todas las ideas de la sesion. Comparte con tu equipo, evalua individualmente o usa como input para tu proximo ciclo de planificacion.",
    ucLabel: "Casos de uso", ucTitle: "Donde brilla la captura de ideas",
    uc1Title: "Lluvia de ideas en equipo", uc1Desc: "Las ideas de cada participante se capturan por igual. No mas depender de quien tenia el marcador. La idea del colaborador silencioso se preserva junto a la voz mas fuerte.",
    uc2Title: "Volcado de ideas individual", uc2Desc: "Graba tu flujo de conciencia y recibelo como ideas organizadas y categorizadas. Perfecto para fundadores, escritores y creadores que piensan en voz alta.",
    uc3Title: "Descubrimiento de producto", uc3Desc: "Captura ideas de funciones, temas de feedback de usuarios y conversaciones sobre direccion del producto. Cada sugerencia esta documentada y lista para planificar.",
    uc4Title: "Sesiones creativas", uc4Desc: "Campanas de marketing, ideas de contenido, conceptos de diseno — cualquier sesion creativa produce ideas que vale la pena guardar. Sythio se asegura de que ninguna se pierda.",
    otherLabel: "Una grabacion, muchas salidas", otherTitle: "Las ideas llevan a la accion",
    otherDesc: "Una vez capturadas las ideas, convierte la misma sesion en planes de accion, listas de tareas o resumenes. Las ideas se convierten en planes que se convierten en progreso.",
    oAP: "Planes de accion", oAPDesc: "Convierte las mejores ideas en planes estructurados con fases, prioridades y responsables. De la lluvia de ideas a la hoja de ruta en un paso.",
    oTask: "Extraccion de tareas", oTaskDesc: "Cuando las ideas se convierten en compromisos. Las tareas se extraen con responsables para que cada buena idea tenga a alguien a cargo.",
    oAI: "Resumenes IA", oAIDesc: "Una vision general de toda la sesion de lluvia de ideas. Ideal para compartir con personas que no estuvieron en la sala.",
    relAP: "Planes de accion", relKP: "Puntos clave", relBrain: "Lluvia de ideas", relProd: "Producto",
    ctaTitle: "Nunca pierdas una buena idea", ctaDesc: "Cada lluvia de ideas produce algo que vale la pena conservar. Sythio se asegura de que lo conserves todo.",
  },
  fr: {
    label: "Fonctionnalites", title: "Capturez chaque idee avant qu'elle ne disparaisse",
    subtitle: "Les sessions de brainstorming sont pleines de potentiel. Mais sans structure, les grandes idees se perdent dans le bruit. Sythio les capture toutes, les regroupe par theme et les classe par potentiel.",
    probLabel: "Le probleme", probTitle: "Les grandes idees meritent mieux qu'un enregistrement oublie",
    probDesc1: "Vous brainstormez avec votre equipe. Vingt idees fusent. Peut-etre que quelqu'un en note quelques-unes. La session se termine, l'energie s'estompe, et une semaine plus tard personne ne se souvient.",
    probDesc2: "Sythio s'assure que chaque idee est capturee, categorisee et prete pour l'evaluation.",
    orgLabel: "Comment Sythio organise les idees",
    org1: "Idees groupees par theme ou categorie", org2: "Chaque idee decrite avec le contexte de la conversation", org3: "Classees par energie du groupe et consensus", org4: "Attribuees a la personne qui les a proposees", org5: "Connectees aux idees liees et prochaines etapes",
    diffLabel: "Ce qui le rend different", diffTitle: "Plus qu'une liste de pensees aleatoires",
    diffDesc: "Une transcription brute d'un brainstorming est du chaos. Sythio impose de la structure sans perdre la creativite.",
    d1Title: "Regroupement thematique", d1Desc: "Les idees liees au meme sujet sont regroupees, meme si elles ont ete mentionnees a des moments differents.",
    d2Title: "Contexte preserve", d2Desc: "Chaque idee inclut le raisonnement ou contexte discute. Vous n'obtenez pas juste l'idee — vous comprenez pourquoi elle a emerge.",
    d3Title: "Prete pour l'evaluation", d3Desc: "Les idees sont presentees dans un format qui facilite l'evaluation, la priorisation et la decision.",
    processLabel: "Processus", processTitle: "Comment ca fonctionne",
    s1Title: "Enregistrez votre session", s1Desc: "Lancez l'enregistrement pendant votre brainstorming. Laissez les idees couler naturellement.",
    s2Title: "Sythio extrait", s2Desc: "Chaque idee distincte est identifiee, decrite et categorisee. Les concepts lies sont connectes.",
    s3Title: "Obtenez des idees organisees", s3Desc: "Recevez une collection structuree de toutes les idees de la session.",
    ucLabel: "Cas d'utilisation", ucTitle: "Ou la capture d'idees brille",
    uc1Title: "Brainstorming d'equipe", uc1Desc: "Les idees de chaque participant sont capturees equitablement. L'idee du contributeur discret est preservee.",
    uc2Title: "Decharge d'idees solo", uc2Desc: "Enregistrez votre flux de conscience et recuperez-le sous forme d'idees organisees. Parfait pour les fondateurs et createurs.",
    uc3Title: "Decouverte produit", uc3Desc: "Capturez les idees de fonctionnalites, les themes de feedback et les conversations sur la direction produit.",
    uc4Title: "Sessions creatives", uc4Desc: "Campagnes marketing, idees de contenu, concepts de design — Sythio s'assure qu'aucune idee n'est perdue.",
    otherLabel: "Un enregistrement, plusieurs sorties", otherTitle: "Les idees menent a l'action",
    otherDesc: "Une fois les idees capturees, transformez la meme session en plans d'action, listes de taches ou resumes.",
    oAP: "Plans d'action", oAPDesc: "Transformez les meilleures idees en plans structures avec phases, priorites et responsables.",
    oTask: "Extraction de taches", oTaskDesc: "Quand les idees deviennent des engagements. Les taches sont extraites avec des responsables.",
    oAI: "Resumes IA", oAIDesc: "Un apercu de haut niveau de toute la session de brainstorming.",
    relAP: "Plans d'action", relKP: "Points cles", relBrain: "Brainstorming", relProd: "Produit",
    ctaTitle: "Ne perdez plus jamais une bonne idee", ctaDesc: "Chaque brainstorm produit quelque chose qui vaut la peine d'etre garde. Sythio s'en assure.",
  },
  pt: {
    label: "Recursos", title: "Capture cada ideia antes que ela desapareca",
    subtitle: "Sessoes de brainstorming sao cheias de potencial. Mas sem estrutura, grandes ideias se perdem no ruido. O Sythio captura todas, agrupa por tema e classifica por potencial.",
    probLabel: "O problema", probTitle: "Grandes ideias merecem mais que uma gravacao esquecida",
    probDesc1: "Voce faz brainstorming com sua equipe. Vinte ideias voam pela sala. Talvez alguem anote algumas. A sessao termina, a energia se dissipa, e uma semana depois ninguem lembra o que foi dito.",
    probDesc2: "O Sythio garante que cada ideia seja capturada, categorizada e pronta para avaliacao.",
    orgLabel: "Como o Sythio organiza ideias",
    org1: "Ideias agrupadas por tema ou categoria", org2: "Cada ideia descrita com contexto da conversa", org3: "Classificadas por energia do grupo e consenso", org4: "Atribuidas a pessoa que as propos", org5: "Conectadas a ideias relacionadas e proximos passos",
    diffLabel: "O que o torna diferente", diffTitle: "Mais que uma lista de pensamentos aleatorios",
    diffDesc: "Uma transcricao bruta de brainstorming e caos. O Sythio impoe estrutura sem perder criatividade.",
    d1Title: "Agrupamento tematico", d1Desc: "Ideias relacionadas ao mesmo topico sao agrupadas, mesmo mencionadas em momentos diferentes.",
    d2Title: "Contexto preservado", d2Desc: "Cada ideia inclui o raciocinio ou contexto discutido. Voce nao recebe so a ideia — entende por que ela surgiu.",
    d3Title: "Pronta para avaliacao", d3Desc: "Ideias sao apresentadas em formato que facilita avaliar, priorizar e decidir quais perseguir.",
    processLabel: "Processo", processTitle: "Como funciona",
    s1Title: "Grave sua sessao", s1Desc: "Pressione gravar durante seu brainstorming. Deixe as ideias fluirem naturalmente.",
    s2Title: "Sythio extrai", s2Desc: "Cada ideia distinta e identificada, descrita e categorizada. Conceitos relacionados sao vinculados.",
    s3Title: "Receba ideias organizadas", s3Desc: "Receba uma colecao estruturada de todas as ideias da sessao.",
    ucLabel: "Casos de uso", ucTitle: "Onde a captura de ideias brilha",
    uc1Title: "Brainstorming em equipe", uc1Desc: "As ideias de cada participante sao capturadas igualmente. A ideia do contribuidor quieto e preservada.",
    uc2Title: "Despejo de ideias solo", uc2Desc: "Grave seu fluxo de consciencia e receba de volta como ideias organizadas. Perfeito para fundadores e criadores.",
    uc3Title: "Descoberta de produto", uc3Desc: "Capture ideias de funcionalidades, temas de feedback e conversas sobre direcao do produto.",
    uc4Title: "Sessoes criativas", uc4Desc: "Campanhas de marketing, ideias de conteudo, conceitos de design — o Sythio garante que nenhuma ideia se perca.",
    otherLabel: "Uma gravacao, varias saidas", otherTitle: "Ideias levam a acao",
    otherDesc: "Uma vez capturadas, transforme a mesma sessao em planos de acao, listas de tarefas ou resumos.",
    oAP: "Planos de acao", oAPDesc: "Transforme as melhores ideias em planos estruturados com fases, prioridades e responsaveis.",
    oTask: "Extracao de tarefas", oTaskDesc: "Quando ideias viram compromissos. Tarefas sao extraidas com responsaveis.",
    oAI: "Resumos IA", oAIDesc: "Uma visao geral de toda a sessao de brainstorming.",
    relAP: "Planos de acao", relKP: "Pontos-chave", relBrain: "Brainstorming", relProd: "Produto",
    ctaTitle: "Nunca perca uma boa ideia novamente", ctaDesc: "Cada brainstorm produz algo que vale guardar. O Sythio garante que voce guarde tudo.",
  },
  it: {
    label: "Funzionalita", title: "Cattura ogni idea prima che scompaia",
    subtitle: "Le sessioni di brainstorming sono piene di potenziale. Ma senza struttura, le grandi idee si perdono nel rumore. Sythio le cattura tutte, le raggruppa per tema e le classifica per potenziale.",
    probLabel: "Il problema", probTitle: "Le grandi idee meritano piu di una registrazione dimenticata",
    probDesc1: "Fai brainstorming con il tuo team. Venti idee volano per la stanza. Forse qualcuno ne scrive alcune. La sessione finisce, l'energia sfuma, e una settimana dopo nessuno ricorda cosa e stato detto.",
    probDesc2: "Sythio si assicura che ogni idea sia catturata, categorizzata e pronta per la valutazione.",
    orgLabel: "Come Sythio organizza le idee",
    org1: "Idee raggruppate per tema o categoria", org2: "Ogni idea descritta con contesto dalla conversazione", org3: "Classificate per energia del gruppo e consenso", org4: "Attribuite alla persona che le ha proposte", org5: "Collegate a idee correlate e prossimi passi",
    diffLabel: "Cosa lo rende diverso", diffTitle: "Piu di una lista di pensieri casuali",
    diffDesc: "Una trascrizione grezza di un brainstorming e caos. Sythio impone struttura senza perdere creativita.",
    d1Title: "Raggruppamento tematico", d1Desc: "Idee correlate allo stesso argomento vengono raggruppate, anche se menzionate in momenti diversi.",
    d2Title: "Contesto preservato", d2Desc: "Ogni idea include il ragionamento o contesto discusso. Non ottieni solo l'idea — capisci perche e emersa.",
    d3Title: "Pronta per la valutazione", d3Desc: "Le idee sono presentate in formato che facilita valutare, prioritizzare e decidere quali perseguire.",
    processLabel: "Processo", processTitle: "Come funziona",
    s1Title: "Registra la tua sessione", s1Desc: "Premi registra durante il brainstorming. Lascia che le idee fluiscano naturalmente.",
    s2Title: "Sythio estrae", s2Desc: "Ogni idea distinta viene identificata, descritta e categorizzata. Concetti correlati vengono collegati.",
    s3Title: "Ottieni idee organizzate", s3Desc: "Ricevi una collezione strutturata di tutte le idee della sessione.",
    ucLabel: "Casi d'uso", ucTitle: "Dove brilla la cattura delle idee",
    uc1Title: "Brainstorming di team", uc1Desc: "Le idee di ogni partecipante vengono catturate equamente. L'idea del contributore silenzioso e preservata.",
    uc2Title: "Scarico di idee individuale", uc2Desc: "Registra il tuo flusso di coscienza e ricevilo come idee organizzate. Perfetto per fondatori e creatori.",
    uc3Title: "Scoperta di prodotto", uc3Desc: "Cattura idee di funzionalita, temi di feedback e conversazioni sulla direzione del prodotto.",
    uc4Title: "Sessioni creative", uc4Desc: "Campagne marketing, idee di contenuto, concetti di design — Sythio si assicura che nessuna idea vada persa.",
    otherLabel: "Una registrazione, molti output", otherTitle: "Le idee portano all'azione",
    otherDesc: "Una volta catturate, trasforma la stessa sessione in piani d'azione, liste di attivita o riassunti.",
    oAP: "Piani d'azione", oAPDesc: "Trasforma le migliori idee in piani strutturati con fasi, priorita e responsabili.",
    oTask: "Estrazione attivita", oTaskDesc: "Quando le idee diventano impegni. Le attivita vengono estratte con responsabili.",
    oAI: "Riassunti IA", oAIDesc: "Una panoramica di alto livello dell'intera sessione di brainstorming.",
    relAP: "Piani d'azione", relKP: "Punti chiave", relBrain: "Brainstorming", relProd: "Prodotto",
    ctaTitle: "Non perdere mai piu una buona idea", ctaDesc: "Ogni brainstorm produce qualcosa che vale la pena tenere. Sythio si assicura che tu tenga tutto.",
  },
};

export default function IdeasPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;
  const orgItems = [c.org1, c.org2, c.org3, c.org4, c.org5];

  return (
    <PageReveal>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-animated-bg overflow-hidden"><div className="hero-orb hero-orb-1" /><div className="hero-orb hero-orb-2" /><div className="hero-orb hero-orb-3" /><div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" /><div className="relative max-w-7xl mx-auto px-6"><div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.label}</p>
        <TextReveal tag="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">{c.title}</TextReveal>
        <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">{c.subtitle}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <MagneticHover><Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{s("common.startFree")}</Link></MagneticHover>
          <Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{s("common.allFeatures")}</Link>
        </div>
      </div></div></section>

      <section className="py-32 md:py-44 bg-white"><div className="max-w-7xl mx-auto px-6"><div className="grid lg:grid-cols-2 gap-16 items-start">
        <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.probLabel}</p><TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.probTitle}</TextReveal><p className="mt-6 text-lg text-muted leading-relaxed">{c.probDesc1}</p><p className="mt-4 text-lg text-muted leading-relaxed">{c.probDesc2}</p></div>
        <div className="space-y-6"><div className="bg-background rounded-2xl border border-border-light p-8"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-4">{c.orgLabel}</p><ul className="space-y-3">{orgItems.map((item) => (<li key={item} className="flex items-start gap-3"><div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" /><span className="text-sm text-muted leading-relaxed">{item}</span></li>))}</ul></div></div>
      </div></div></section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.diffLabel}</p><TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.diffTitle}</TextReveal><p className="mt-6 text-lg text-muted leading-relaxed">{c.diffDesc}</p></div>
        <GsapStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>{[{t:c.d1Title,d:c.d1Desc},{t:c.d2Title,d:c.d2Desc},{t:c.d3Title,d:c.d3Desc}].map(i=>(<div key={i.t} className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow"><h3 className="text-lg font-semibold text-foreground mb-2">{i.t}</h3><p className="text-sm text-muted leading-relaxed">{i.d}</p></div>))}</GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-white"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.processLabel}</p><TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.processTitle}</TextReveal></div>
        <GsapStagger className="grid md:grid-cols-3 gap-8" stagger={0.08}>{[{n:"1",t:c.s1Title,d:c.s1Desc},{n:"2",t:c.s2Title,d:c.s2Desc},{n:"3",t:c.s3Title,d:c.s3Desc}].map(i=>(<div key={i.n} className="relative"><div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">{i.n}</div><h3 className="text-lg font-semibold text-foreground mb-2">{i.t}</h3><p className="text-sm text-muted leading-relaxed">{i.d}</p></div>))}</GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.ucLabel}</p><TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.ucTitle}</TextReveal></div>
        <GsapStagger className="grid sm:grid-cols-2 gap-6" stagger={0.08}>
          <ScrollScale><Link href="/use-cases/brainstorming" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc1Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc1Desc}</p></Link></ScrollScale>
          <ScrollScale><Link href="/use-cases/voice-notes" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc2Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc2Desc}</p></Link></ScrollScale>
          <div className="bg-white rounded-2xl border border-border-light p-8"><h3 className="text-lg font-semibold text-foreground mb-2">{c.uc3Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc3Desc}</p></div>
          <div className="bg-white rounded-2xl border border-border-light p-8"><h3 className="text-lg font-semibold text-foreground mb-2">{c.uc4Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc4Desc}</p></div>
        </GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-white"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.otherLabel}</p><TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.otherTitle}</TextReveal><p className="mt-6 text-lg text-muted leading-relaxed">{c.otherDesc}</p></div>
        <GsapStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>
          <ScrollScale><Link href="/features/action-plans" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.oAP}</h3><p className="text-sm text-muted leading-relaxed">{c.oAPDesc}</p></Link></ScrollScale>
          <ScrollScale><Link href="/features/task-extraction" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.oTask}</h3><p className="text-sm text-muted leading-relaxed">{c.oTaskDesc}</p></Link></ScrollScale>
          <ScrollScale><Link href="/features/ai-summaries" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.oAI}</h3><p className="text-sm text-muted leading-relaxed">{c.oAIDesc}</p></Link></ScrollScale>
        </GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden"><div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">{s("common.related")}</h2>
        <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
          <ScrollScale><Link href="/features/action-plans" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relAP}</p></Link></ScrollScale>
          <ScrollScale><Link href="/features/key-points" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relKP}</p></Link></ScrollScale>
          <ScrollScale><Link href="/use-cases/brainstorming" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relBrain}</p></Link></ScrollScale>
          <ScrollScale><Link href="/product" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.overview")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relProd}</p></Link></ScrollScale>
        </GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
        <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.ctaTitle}</TextReveal>
        <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">{c.ctaDesc}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300">{s("common.startFree")}</Link>
          <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{s("common.exploreProduct")}</Link>
        </div>
        <p className="mt-6 text-sm text-muted">{s("common.freePlan")}</p>
      </div></section>
    </PageReveal>
  );
}
