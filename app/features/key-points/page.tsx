"use client";
import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Features", title: "Key Points from Any Recording, in Seconds",
    subtitle: "Sythio identifies the most important points from your recordings and presents them as a clear, scannable list. No fluff. No filler. Just the essentials.",
    probLabel: "The Problem", probTitle: "Too Long to Read, Too Short to Skip",
    probDesc1: "A full summary is sometimes more than you need. You just want to know: What were the three most important things? What decisions were made? What should I remember?",
    probDesc2: "Key points give you exactly that. The signal without the noise. Scan in 30 seconds and know what matters.",
    exLabel: "Example Output",
    ex1: "Q3 budget approved at $240K — $40K over initial ask", ex2: "Mobile launch moved from July 15 to August 1 (design dependency)", ex3: "Sarah owns the vendor evaluation — report due by Friday", ex4: "Customer churn rate dropped to 4.2% — below target for first time", ex5: "Board presentation scheduled for March 28 — Carlos to prep deck",
    diffLabel: "What Makes It Different", diffTitle: "Not Random Highlights. True Key Points.",
    diffDesc: "Sythio does not just pull the most frequently mentioned topics. It understands what constitutes a key point — decisions, conclusions, commitments, turning points — and surfaces those specifically.",
    d1Title: "Decisions Surfaced", d1Desc: "When a group reaches agreement or makes a call, that moment is captured. No more guessing what was actually decided.",
    d2Title: "Commitments Tracked", d2Desc: "When someone says they will do something, it becomes a key point. Who committed, what they committed to, and any mentioned timeline.",
    d3Title: "Insights Captured", d3Desc: "New information, surprising data, and important observations are identified. The points you would circle in a notebook.",
    processLabel: "Process", processTitle: "How It Works",
    s1Title: "Record or Upload", s1Desc: "Capture any conversation — meeting, call, lecture, brainstorm — or upload an existing recording.",
    s2Title: "Sythio Identifies", s2Desc: "The audio is analyzed for content significance. Decisions, commitments, data points, and pivotal moments are identified and ranked.",
    s3Title: "Get Key Points", s3Desc: "Receive a ranked list of the most important points from the conversation. Clear, concise, and immediately useful.",
    ucLabel: "Use Cases", ucTitle: "When Key Points Hit the Mark",
    uc1Title: "Quick Meeting Recap", uc1Desc: "Share the five most important points from a meeting in Slack or email. No one needs to read a full report for a 15-minute standup.",
    uc2Title: "Pre-Exam Review", uc2Desc: "Review the key concepts from each lecture in minutes, not hours. Key points give you the flashcard-level overview you need before a test.",
    uc3Title: "Client Call Highlights", uc3Desc: "What did the client want? What did we agree to? Key points give you the answer in seconds without re-listening.",
    uc4Title: "Brainstorm Takeaways", uc4Desc: "A creative session produces many ideas. Key points surface the ones that had the most energy and consensus.",
    otherLabel: "One Recording, Many Outputs", otherTitle: "Need More Than Key Points?",
    otherDesc: "Key points are perfect for a quick scan. For deeper context, switch to a full summary, structured action plan, or detailed report — all from the same recording.",
    oAI: "AI Summaries", oAIDesc: "When key points are not enough context. Summaries give you a fuller picture with narrative flow and supporting details.",
    oRep: "Executive Reports", oRepDesc: "When you need a formal, shareable document. Reports include structure, attribution, and professional formatting.",
    oTask: "Task Extraction", oTaskDesc: "When the key points are action items. Tasks are pulled with owners and deadlines for immediate execution.",
    relAI: "AI Summaries", relTask: "Task Extraction", relMeet: "Meetings", relProd: "Product",
    ctaTitle: "Know What Matters. Skip What Doesn't.", ctaDesc: "Every recording has key moments. Sythio finds them for you instantly.",
  },
  es: {
    label: "Funciones", title: "Puntos clave de cualquier grabacion, en segundos",
    subtitle: "Sythio identifica los puntos mas importantes de tus grabaciones y los presenta como una lista clara y escaneable. Sin relleno. Solo lo esencial.",
    probLabel: "El problema", probTitle: "Demasiado largo para leer, demasiado corto para omitir",
    probDesc1: "Un resumen completo a veces es mas de lo que necesitas. Solo quieres saber: Cuales fueron las tres cosas mas importantes? Que decisiones se tomaron? Que debo recordar?",
    probDesc2: "Los puntos clave te dan exactamente eso. La senal sin el ruido. Escanea en 30 segundos y sabe que importa.",
    exLabel: "Ejemplo de salida",
    ex1: "Presupuesto Q3 aprobado en $240K — $40K sobre la solicitud inicial", ex2: "Lanzamiento movil movido del 15 de julio al 1 de agosto (dependencia de diseno)", ex3: "Sarah es responsable de la evaluacion de proveedores — informe para el viernes", ex4: "Tasa de abandono de clientes bajo a 4.2% — por debajo del objetivo por primera vez", ex5: "Presentacion a la junta programada para el 28 de marzo — Carlos prepara la presentacion",
    diffLabel: "Lo que lo hace diferente", diffTitle: "No son destacados aleatorios. Son puntos clave reales.",
    diffDesc: "Sythio no solo extrae los temas mas mencionados. Entiende que constituye un punto clave — decisiones, conclusiones, compromisos, puntos de inflexion — y los presenta especificamente.",
    d1Title: "Decisiones identificadas", d1Desc: "Cuando un grupo llega a un acuerdo o toma una decision, ese momento se captura. No mas adivinar que se decidio realmente.",
    d2Title: "Compromisos rastreados", d2Desc: "Cuando alguien dice que hara algo, se convierte en un punto clave. Quien se comprometio, a que y cualquier plazo mencionado.",
    d3Title: "Perspectivas capturadas", d3Desc: "Informacion nueva, datos sorprendentes y observaciones importantes se identifican. Los puntos que encerrarias en un circulo en tu cuaderno.",
    processLabel: "Proceso", processTitle: "Como funciona",
    s1Title: "Graba o sube", s1Desc: "Captura cualquier conversacion — reunion, llamada, clase, lluvia de ideas — o sube una grabacion existente.",
    s2Title: "Sythio identifica", s2Desc: "El audio se analiza para significancia del contenido. Decisiones, compromisos, datos y momentos clave se identifican y clasifican.",
    s3Title: "Obtiene puntos clave", s3Desc: "Recibe una lista clasificada de los puntos mas importantes de la conversacion. Clara, concisa e inmediatamente util.",
    ucLabel: "Casos de uso", ucTitle: "Cuando los puntos clave dan en el blanco",
    uc1Title: "Resumen rapido de reunion", uc1Desc: "Comparte los cinco puntos mas importantes de una reunion en Slack o correo. Nadie necesita leer un informe completo para un standup de 15 minutos.",
    uc2Title: "Repaso pre-examen", uc2Desc: "Repasa los conceptos clave de cada clase en minutos, no horas. Los puntos clave te dan la vision de tarjeta de estudio que necesitas.",
    uc3Title: "Destacados de llamadas con clientes", uc3Desc: "Que queria el cliente? A que nos comprometimos? Los puntos clave te dan la respuesta en segundos.",
    uc4Title: "Conclusiones de lluvia de ideas", uc4Desc: "Una sesion creativa produce muchas ideas. Los puntos clave destacan las que tuvieron mas energia y consenso.",
    otherLabel: "Una grabacion, muchas salidas", otherTitle: "Necesitas mas que puntos clave?",
    otherDesc: "Los puntos clave son perfectos para un escaneo rapido. Para mas contexto, cambia a un resumen completo, plan de accion o informe — todo de la misma grabacion.",
    oAI: "Resumenes IA", oAIDesc: "Cuando los puntos clave no dan suficiente contexto. Los resumenes te dan una imagen mas completa.",
    oRep: "Informes ejecutivos", oRepDesc: "Cuando necesitas un documento formal y compartible. Los informes incluyen estructura, atribucion y formato profesional.",
    oTask: "Extraccion de tareas", oTaskDesc: "Cuando los puntos clave son elementos de accion. Las tareas se extraen con responsables y plazos.",
    relAI: "Resumenes IA", relTask: "Extraccion de tareas", relMeet: "Reuniones", relProd: "Producto",
    ctaTitle: "Sabe que importa. Omite lo que no.", ctaDesc: "Cada grabacion tiene momentos clave. Sythio los encuentra al instante.",
  },
  fr: {
    label: "Fonctionnalites", title: "Points cles de tout enregistrement, en quelques secondes",
    subtitle: "Sythio identifie les points les plus importants de vos enregistrements et les presente sous forme de liste claire et scannable. Pas de superflu. Juste l'essentiel.",
    probLabel: "Le probleme", probTitle: "Trop long a lire, trop court a ignorer",
    probDesc1: "Un resume complet est parfois plus que necessaire. Vous voulez juste savoir : quelles etaient les trois choses les plus importantes ? Quelles decisions ont ete prises ?",
    probDesc2: "Les points cles vous donnent exactement ca. Le signal sans le bruit. Scannez en 30 secondes et sachez ce qui compte.",
    exLabel: "Exemple de sortie",
    ex1: "Budget T3 approuve a 240K$ — 40K$ au-dessus de la demande initiale", ex2: "Lancement mobile deplace du 15 juillet au 1er aout (dependance design)", ex3: "Sarah responsable de l'evaluation fournisseurs — rapport pour vendredi", ex4: "Taux de desabonnement client tombe a 4,2% — sous l'objectif pour la premiere fois", ex5: "Presentation au conseil prevue le 28 mars — Carlos prepare le deck",
    diffLabel: "Ce qui le rend different", diffTitle: "Pas des surlignages aleatoires. De vrais points cles.",
    diffDesc: "Sythio ne se contente pas d'extraire les sujets les plus mentionnes. Il comprend ce qui constitue un point cle — decisions, conclusions, engagements, tournants.",
    d1Title: "Decisions identifiees", d1Desc: "Quand un groupe atteint un accord ou prend une decision, ce moment est capture.",
    d2Title: "Engagements suivis", d2Desc: "Quand quelqu'un dit qu'il fera quelque chose, ca devient un point cle. Qui s'est engage, a quoi et quel delai.",
    d3Title: "Insights captures", d3Desc: "Nouvelles informations, donnees surprenantes et observations importantes sont identifiees.",
    processLabel: "Processus", processTitle: "Comment ca fonctionne",
    s1Title: "Enregistrez ou telechargez", s1Desc: "Capturez toute conversation — reunion, appel, cours, brainstorm — ou telechargez un enregistrement.",
    s2Title: "Sythio identifie", s2Desc: "L'audio est analyse pour la significativite du contenu. Decisions, engagements et moments pivots sont identifies et classes.",
    s3Title: "Obtenez les points cles", s3Desc: "Recevez une liste classee des points les plus importants. Claire, concise et immediatement utile.",
    ucLabel: "Cas d'utilisation", ucTitle: "Quand les points cles font mouche",
    uc1Title: "Recap rapide de reunion", uc1Desc: "Partagez les cinq points les plus importants d'une reunion sur Slack ou par email.",
    uc2Title: "Revision pre-examen", uc2Desc: "Revisez les concepts cles de chaque cours en minutes. Les points cles vous donnent l'apercu dont vous avez besoin.",
    uc3Title: "Points forts des appels clients", uc3Desc: "Que voulait le client ? A quoi avons-nous convenu ? Les points cles donnent la reponse en secondes.",
    uc4Title: "Points a retenir du brainstorming", uc4Desc: "Une session creative produit de nombreuses idees. Les points cles font ressortir celles qui avaient le plus d'energie.",
    otherLabel: "Un enregistrement, plusieurs sorties", otherTitle: "Besoin de plus que des points cles ?",
    otherDesc: "Les points cles sont parfaits pour un scan rapide. Pour plus de contexte, passez a un resume complet, plan d'action ou rapport.",
    oAI: "Resumes IA", oAIDesc: "Quand les points cles ne donnent pas assez de contexte. Les resumes offrent une image plus complete.",
    oRep: "Rapports executifs", oRepDesc: "Quand vous avez besoin d'un document formel. Les rapports incluent structure, attribution et formatage professionnel.",
    oTask: "Extraction de taches", oTaskDesc: "Quand les points cles sont des elements d'action. Les taches sont extraites avec responsables et echeances.",
    relAI: "Resumes IA", relTask: "Extraction de taches", relMeet: "Reunions", relProd: "Produit",
    ctaTitle: "Sachez ce qui compte. Ignorez le reste.", ctaDesc: "Chaque enregistrement a des moments cles. Sythio les trouve instantanement.",
  },
  pt: {
    label: "Recursos", title: "Pontos-chave de qualquer gravacao, em segundos",
    subtitle: "O Sythio identifica os pontos mais importantes das suas gravacoes e os apresenta como uma lista clara e escaneavel. Sem enrolacao. Apenas o essencial.",
    probLabel: "O problema", probTitle: "Longo demais para ler, curto demais para pular",
    probDesc1: "Um resumo completo as vezes e mais do que voce precisa. Voce so quer saber: quais foram as tres coisas mais importantes? Que decisoes foram tomadas?",
    probDesc2: "Os pontos-chave te dao exatamente isso. O sinal sem o ruido. Escaneie em 30 segundos e saiba o que importa.",
    exLabel: "Exemplo de saida",
    ex1: "Orcamento do T3 aprovado em $240K — $40K acima da solicitacao inicial", ex2: "Lancamento mobile movido de 15 de julho para 1 de agosto (dependencia de design)", ex3: "Sarah responsavel pela avaliacao de fornecedores — relatorio ate sexta", ex4: "Taxa de churn caiu para 4,2% — abaixo da meta pela primeira vez", ex5: "Apresentacao ao conselho agendada para 28 de marco — Carlos prepara o deck",
    diffLabel: "O que o torna diferente", diffTitle: "Nao sao destaques aleatorios. Sao pontos-chave reais.",
    diffDesc: "O Sythio nao apenas extrai os topicos mais mencionados. Ele entende o que constitui um ponto-chave — decisoes, conclusoes, compromissos, pontos de virada.",
    d1Title: "Decisoes identificadas", d1Desc: "Quando um grupo chega a um acordo ou toma uma decisao, esse momento e capturado.",
    d2Title: "Compromissos rastreados", d2Desc: "Quando alguem diz que fara algo, isso se torna um ponto-chave. Quem se comprometeu, com o que e qualquer prazo.",
    d3Title: "Insights capturados", d3Desc: "Novas informacoes, dados surpreendentes e observacoes importantes sao identificados.",
    processLabel: "Processo", processTitle: "Como funciona",
    s1Title: "Grave ou envie", s1Desc: "Capture qualquer conversa — reuniao, chamada, aula, brainstorm — ou envie uma gravacao.",
    s2Title: "Sythio identifica", s2Desc: "O audio e analisado para significancia do conteudo. Decisoes, compromissos e momentos cruciais sao identificados e classificados.",
    s3Title: "Receba pontos-chave", s3Desc: "Receba uma lista classificada dos pontos mais importantes. Clara, concisa e imediatamente util.",
    ucLabel: "Casos de uso", ucTitle: "Quando os pontos-chave acertam o alvo",
    uc1Title: "Resumo rapido de reuniao", uc1Desc: "Compartilhe os cinco pontos mais importantes de uma reuniao no Slack ou email.",
    uc2Title: "Revisao pre-prova", uc2Desc: "Revise os conceitos-chave de cada aula em minutos. Os pontos-chave dao a visao geral que voce precisa.",
    uc3Title: "Destaques de chamadas com clientes", uc3Desc: "O que o cliente queria? Com o que concordamos? Os pontos-chave dao a resposta em segundos.",
    uc4Title: "Conclusoes do brainstorming", uc4Desc: "Uma sessao criativa produz muitas ideias. Os pontos-chave destacam as que tiveram mais energia e consenso.",
    otherLabel: "Uma gravacao, varias saidas", otherTitle: "Precisa de mais que pontos-chave?",
    otherDesc: "Os pontos-chave sao perfeitos para um scan rapido. Para mais contexto, mude para um resumo completo, plano de acao ou relatorio.",
    oAI: "Resumos IA", oAIDesc: "Quando os pontos-chave nao dao contexto suficiente. Os resumos oferecem uma visao mais completa.",
    oRep: "Relatorios executivos", oRepDesc: "Quando voce precisa de um documento formal. Os relatorios incluem estrutura, atribuicao e formatacao profissional.",
    oTask: "Extracao de tarefas", oTaskDesc: "Quando os pontos-chave sao itens de acao. Tarefas sao extraidas com responsaveis e prazos.",
    relAI: "Resumos IA", relTask: "Extracao de tarefas", relMeet: "Reunioes", relProd: "Produto",
    ctaTitle: "Saiba o que importa. Pule o que nao importa.", ctaDesc: "Cada gravacao tem momentos-chave. O Sythio os encontra instantaneamente.",
  },
  it: {
    label: "Funzionalita", title: "Punti chiave da qualsiasi registrazione, in pochi secondi",
    subtitle: "Sythio identifica i punti piu importanti dalle tue registrazioni e li presenta come lista chiara e scansionabile. Niente fronzoli. Solo l'essenziale.",
    probLabel: "Il problema", probTitle: "Troppo lungo da leggere, troppo breve da saltare",
    probDesc1: "Un riassunto completo a volte e piu del necessario. Vuoi solo sapere: quali erano le tre cose piu importanti? Quali decisioni sono state prese?",
    probDesc2: "I punti chiave ti danno esattamente questo. Il segnale senza il rumore. Scansiona in 30 secondi e sappi cosa conta.",
    exLabel: "Esempio di output",
    ex1: "Budget T3 approvato a $240K — $40K sopra la richiesta iniziale", ex2: "Lancio mobile spostato dal 15 luglio al 1 agosto (dipendenza design)", ex3: "Sarah responsabile della valutazione fornitori — report entro venerdi", ex4: "Tasso di abbandono clienti sceso al 4,2% — sotto l'obiettivo per la prima volta", ex5: "Presentazione al consiglio programmata per il 28 marzo — Carlos prepara il deck",
    diffLabel: "Cosa lo rende diverso", diffTitle: "Non evidenziazioni casuali. Veri punti chiave.",
    diffDesc: "Sythio non estrae semplicemente gli argomenti piu menzionati. Comprende cosa costituisce un punto chiave — decisioni, conclusioni, impegni, punti di svolta.",
    d1Title: "Decisioni identificate", d1Desc: "Quando un gruppo raggiunge un accordo o prende una decisione, quel momento viene catturato.",
    d2Title: "Impegni tracciati", d2Desc: "Quando qualcuno dice che fara qualcosa, diventa un punto chiave. Chi si e impegnato, a cosa e qualsiasi tempistica.",
    d3Title: "Insight catturati", d3Desc: "Nuove informazioni, dati sorprendenti e osservazioni importanti vengono identificati.",
    processLabel: "Processo", processTitle: "Come funziona",
    s1Title: "Registra o carica", s1Desc: "Cattura qualsiasi conversazione — riunione, chiamata, lezione, brainstorm — o carica una registrazione.",
    s2Title: "Sythio identifica", s2Desc: "L'audio viene analizzato per significativita del contenuto. Decisioni, impegni e momenti cruciali vengono identificati e classificati.",
    s3Title: "Ottieni i punti chiave", s3Desc: "Ricevi una lista classificata dei punti piu importanti. Chiara, concisa e immediatamente utile.",
    ucLabel: "Casi d'uso", ucTitle: "Quando i punti chiave centrano il bersaglio",
    uc1Title: "Recap rapido della riunione", uc1Desc: "Condividi i cinque punti piu importanti di una riunione su Slack o email.",
    uc2Title: "Revisione pre-esame", uc2Desc: "Rivedi i concetti chiave di ogni lezione in minuti. I punti chiave ti danno la panoramica che ti serve.",
    uc3Title: "Punti salienti delle chiamate clienti", uc3Desc: "Cosa voleva il cliente? A cosa abbiamo concordato? I punti chiave danno la risposta in secondi.",
    uc4Title: "Conclusioni del brainstorming", uc4Desc: "Una sessione creativa produce molte idee. I punti chiave evidenziano quelle con piu energia e consenso.",
    otherLabel: "Una registrazione, molti output", otherTitle: "Hai bisogno di piu dei punti chiave?",
    otherDesc: "I punti chiave sono perfetti per una scansione rapida. Per piu contesto, passa a un riassunto completo, piano d'azione o report.",
    oAI: "Riassunti IA", oAIDesc: "Quando i punti chiave non danno abbastanza contesto. I riassunti offrono un quadro piu completo.",
    oRep: "Report esecutivi", oRepDesc: "Quando hai bisogno di un documento formale. I report includono struttura, attribuzione e formattazione professionale.",
    oTask: "Estrazione attivita", oTaskDesc: "Quando i punti chiave sono elementi d'azione. Le attivita vengono estratte con responsabili e scadenze.",
    relAI: "Riassunti IA", relTask: "Estrazione attivita", relMeet: "Riunioni", relProd: "Prodotto",
    ctaTitle: "Sappi cosa conta. Salta il resto.", ctaDesc: "Ogni registrazione ha momenti chiave. Sythio li trova istantaneamente.",
  },
};

export default function KeyPointsPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;
  const examples = [c.ex1, c.ex2, c.ex3, c.ex4, c.ex5];

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
        <div className="space-y-6"><div className="bg-background rounded-2xl border border-border-light p-8"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-4">{c.exLabel}</p><ul className="space-y-4">{examples.map((point, i) => (<li key={i} className="flex items-start gap-3"><span className="mt-0.5 w-6 h-6 rounded-full bg-foreground text-white flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span><span className="text-sm text-foreground leading-relaxed">{point}</span></li>))}</ul></div></div>
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
          <ScrollScale><Link href="/use-cases/meetings" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc1Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc1Desc}</p></Link></ScrollScale>
          <ScrollScale><Link href="/use-cases/lectures" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc2Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc2Desc}</p></Link></ScrollScale>
          <ScrollScale><Link href="/use-cases/client-calls" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc3Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc3Desc}</p></Link></ScrollScale>
          <ScrollScale><Link href="/use-cases/brainstorming" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc4Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc4Desc}</p></Link></ScrollScale>
        </GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-white"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.otherLabel}</p><TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.otherTitle}</TextReveal><p className="mt-6 text-lg text-muted leading-relaxed">{c.otherDesc}</p></div>
        <GsapStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>
          <ScrollScale><Link href="/features/ai-summaries" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.oAI}</h3><p className="text-sm text-muted leading-relaxed">{c.oAIDesc}</p></Link></ScrollScale>
          <ScrollScale><Link href="/features/reports" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.oRep}</h3><p className="text-sm text-muted leading-relaxed">{c.oRepDesc}</p></Link></ScrollScale>
          <ScrollScale><Link href="/features/task-extraction" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.oTask}</h3><p className="text-sm text-muted leading-relaxed">{c.oTaskDesc}</p></Link></ScrollScale>
        </GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden"><div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">{s("common.related")}</h2>
        <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
          <ScrollScale><Link href="/features/ai-summaries" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relAI}</p></Link></ScrollScale>
          <ScrollScale><Link href="/features/task-extraction" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relTask}</p></Link></ScrollScale>
          <ScrollScale><Link href="/use-cases/meetings" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relMeet}</p></Link></ScrollScale>
          <ScrollScale><Link href="/product" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.overview")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relProd}</p></Link></ScrollScale>
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
