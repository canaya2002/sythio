"use client";
import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Features", title: "Executive Reports from Every Conversation",
    subtitle: "Sythio generates professional, stakeholder-ready reports from any recording. Decisions documented. Risks flagged. Recommendations structured. Ready to share with leadership in seconds.",
    probLabel: "The Problem", probTitle: "Nobody Reads a 45-Minute Transcript",
    probDesc1: "Stakeholders need to know what happened, what was decided, and what comes next. They do not need every word. A raw transcript buries the signal in noise. A summary is too short. A report hits the right balance.",
    probDesc2: "Sythio generates reports that look like they were written by someone who attended the meeting, understood the context, and knew what leadership needs to see.",
    includesLabel: "What a Report Includes",
    inc1: "Executive summary of the conversation", inc2: "Key decisions and their rationale", inc3: "Open risks and unresolved items", inc4: "Action items with owners and timelines", inc5: "Recommendations and next steps",
    diffLabel: "What Makes It Different", diffTitle: "Not a Template. A Tailored Report.",
    diffDesc: "Sythio does not fill in a generic template. Each report is generated from the actual content of your recording, reflecting the specific topics, decisions, and dynamics of the conversation.",
    d1Title: "Context-Aware Structure", d1Desc: "A strategy session produces a different report than a client call. Sythio adapts the structure to match the conversation type and content.",
    d2Title: "Speaker Attribution", d2Desc: "Decisions and statements are attributed to the people who made them. Every claim in the report is traceable to a specific speaker.",
    d3Title: "Professional Tone", d3Desc: "Reports are written in a clear, formal tone suitable for leadership, clients, or board-level communication. No casual language. No filler.",
    processLabel: "Process", processTitle: "How It Works",
    s1Title: "Record or Upload", s1Desc: "Capture a meeting, call, or presentation directly in Sythio, or upload an existing recording. Any audio format works.",
    s2Title: "Sythio Analyzes", s2Desc: "The recording is processed for context, speaker identification, and content hierarchy. Key topics, decisions, and open items are identified.",
    s3Title: "Get Your Report", s3Desc: "Receive a structured, professional report you can share with stakeholders, attach to a project, or archive for reference. Export as PDF or text.",
    ucLabel: "Use Cases", ucTitle: "Where Executive Reports Shine",
    ucDesc: "Anytime the outcome of a conversation needs to be documented, shared, or escalated, a report is the right format.",
    uc1Title: "Board & Leadership Meetings", uc1Desc: "Generate polished meeting reports with decisions, risks, and strategic takeaways. Share with leadership or board members who were not present.",
    uc2Title: "Client Engagement Reports", uc2Desc: "Document every client conversation with requirements, feedback, agreements, and next steps. Keep your team aligned on client expectations.",
    uc3Title: "Project Status Updates", uc3Desc: "Turn project check-ins into structured progress reports. Blockers, milestones, and ownership are surfaced automatically.",
    uc4Title: "Interview Debriefs", uc4Desc: "Capture interview conversations and generate structured debrief reports. Compare candidates objectively with consistent documentation.",
    otherLabel: "One Recording, Many Outputs", otherTitle: "Reports Are Just One Output",
    otherDesc: "From the same recording, Sythio can also produce summaries, task lists, action plans, and more. Choose a report when you need a formal, comprehensive document. Choose other formats when you need something lighter.",
    oAI: "AI Summaries", oAIDesc: "When you need a quick overview rather than a full report. Summaries capture what matters in a fraction of the length.",
    oTask: "Task Extraction", oTaskDesc: "When the focus is on action items. Tasks are pulled with owners and deadlines, ready for your project management tool.",
    oMsg: "Messages", oMsgDesc: "When you need a quick follow-up email instead of a formal report. Messages are concise and ready to send.",
    relAI: "AI Summaries", relAP: "Action Plans", relMeet: "Meetings", relProd: "Product",
    ctaTitle: "From Conversation to Boardroom-Ready Report", ctaDesc: "Every important conversation deserves a professional record. Sythio delivers one in seconds.",
  },
  es: {
    label: "Funciones", title: "Informes ejecutivos de cada conversacion",
    subtitle: "Sythio genera informes profesionales listos para interesados a partir de cualquier grabacion. Decisiones documentadas. Riesgos senalados. Recomendaciones estructuradas. Listos para compartir con la direccion en segundos.",
    probLabel: "El problema", probTitle: "Nadie lee una transcripcion de 45 minutos",
    probDesc1: "Los interesados necesitan saber que paso, que se decidio y que sigue. No necesitan cada palabra. Una transcripcion cruda entierra la senal en el ruido. Un resumen es demasiado corto. Un informe logra el equilibrio correcto.",
    probDesc2: "Sythio genera informes que parecen escritos por alguien que asistio a la reunion, entendio el contexto y sabia que necesita ver la direccion.",
    includesLabel: "Que incluye un informe",
    inc1: "Resumen ejecutivo de la conversacion", inc2: "Decisiones clave y su justificacion", inc3: "Riesgos abiertos y temas sin resolver", inc4: "Elementos de accion con responsables y plazos", inc5: "Recomendaciones y proximos pasos",
    diffLabel: "Lo que lo hace diferente", diffTitle: "No es una plantilla. Es un informe a medida.",
    diffDesc: "Sythio no rellena una plantilla generica. Cada informe se genera a partir del contenido real de tu grabacion, reflejando los temas, decisiones y dinamicas especificas de la conversacion.",
    d1Title: "Estructura consciente del contexto", d1Desc: "Una sesion estrategica produce un informe diferente a una llamada con cliente. Sythio adapta la estructura al tipo y contenido de la conversacion.",
    d2Title: "Atribucion de hablantes", d2Desc: "Las decisiones y declaraciones se atribuyen a quienes las hicieron. Cada afirmacion del informe es rastreable a un hablante especifico.",
    d3Title: "Tono profesional", d3Desc: "Los informes se escriben en un tono claro y formal adecuado para la direccion, clientes o comunicacion a nivel de junta. Sin lenguaje informal.",
    processLabel: "Proceso", processTitle: "Como funciona",
    s1Title: "Graba o sube", s1Desc: "Captura una reunion, llamada o presentacion directamente en Sythio, o sube una grabacion existente. Cualquier formato de audio funciona.",
    s2Title: "Sythio analiza", s2Desc: "La grabacion se procesa para contexto, identificacion de hablantes y jerarquia de contenido. Se identifican temas clave, decisiones y elementos abiertos.",
    s3Title: "Obtiene tu informe", s3Desc: "Recibe un informe estructurado y profesional que puedes compartir con interesados, adjuntar a un proyecto o archivar. Exporta como PDF o texto.",
    ucLabel: "Casos de uso", ucTitle: "Donde brillan los informes ejecutivos",
    ucDesc: "Cada vez que el resultado de una conversacion necesita ser documentado, compartido o escalado, un informe es el formato correcto.",
    uc1Title: "Reuniones de junta y direccion", uc1Desc: "Genera informes de reunion pulidos con decisiones, riesgos y conclusiones estrategicas. Comparte con la direccion o miembros de la junta ausentes.",
    uc2Title: "Informes de compromiso con clientes", uc2Desc: "Documenta cada conversacion con clientes con requisitos, retroalimentacion, acuerdos y proximos pasos. Mantiene a tu equipo alineado.",
    uc3Title: "Actualizaciones de estado del proyecto", uc3Desc: "Convierte las reuniones de seguimiento en informes de progreso estructurados. Bloqueos, hitos y responsabilidad se presentan automaticamente.",
    uc4Title: "Informes de entrevistas", uc4Desc: "Captura conversaciones de entrevista y genera informes de evaluacion estructurados. Compara candidatos objetivamente.",
    otherLabel: "Una grabacion, muchas salidas", otherTitle: "Los informes son solo una salida",
    otherDesc: "De la misma grabacion, Sythio tambien puede producir resumenes, listas de tareas, planes de accion y mas. Elige un informe cuando necesites un documento formal y completo.",
    oAI: "Resumenes IA", oAIDesc: "Cuando necesitas una vision rapida en lugar de un informe completo. Los resumenes capturan lo importante en una fraccion de la longitud.",
    oTask: "Extraccion de tareas", oTaskDesc: "Cuando el enfoque esta en los elementos de accion. Las tareas se extraen con responsables y plazos.",
    oMsg: "Mensajes", oMsgDesc: "Cuando necesitas un correo de seguimiento rapido en lugar de un informe formal. Los mensajes son concisos y listos para enviar.",
    relAI: "Resumenes IA", relAP: "Planes de accion", relMeet: "Reuniones", relProd: "Producto",
    ctaTitle: "De la conversacion al informe listo para la junta", ctaDesc: "Cada conversacion importante merece un registro profesional. Sythio lo entrega en segundos.",
  },
  fr: {
    label: "Fonctionnalites", title: "Rapports executifs de chaque conversation",
    subtitle: "Sythio genere des rapports professionnels prets pour les parties prenantes a partir de tout enregistrement. Decisions documentees. Risques signales. Recommandations structurees. Prets a partager en secondes.",
    probLabel: "Le probleme", probTitle: "Personne ne lit une transcription de 45 minutes",
    probDesc1: "Les parties prenantes ont besoin de savoir ce qui s'est passe, ce qui a ete decide et ce qui suit. Ils n'ont pas besoin de chaque mot. Une transcription brute enterre le signal dans le bruit. Un resume est trop court. Un rapport trouve le bon equilibre.",
    probDesc2: "Sythio genere des rapports qui semblent ecrits par quelqu'un qui a assiste a la reunion, compris le contexte et su ce que la direction doit voir.",
    includesLabel: "Ce qu'inclut un rapport",
    inc1: "Resume executif de la conversation", inc2: "Decisions cles et leur justification", inc3: "Risques ouverts et points non resolus", inc4: "Elements d'action avec responsables et delais", inc5: "Recommandations et prochaines etapes",
    diffLabel: "Ce qui le rend different", diffTitle: "Pas un modele. Un rapport sur mesure.",
    diffDesc: "Sythio ne remplit pas un modele generique. Chaque rapport est genere a partir du contenu reel de votre enregistrement.",
    d1Title: "Structure contextuelle", d1Desc: "Une session strategique produit un rapport different d'un appel client. Sythio adapte la structure au type de conversation.",
    d2Title: "Attribution des intervenants", d2Desc: "Les decisions sont attribuees aux personnes qui les ont prises. Chaque affirmation est tracable a un intervenant specifique.",
    d3Title: "Ton professionnel", d3Desc: "Les rapports sont rediges dans un ton clair et formel adapte a la direction, aux clients ou a la communication au niveau du conseil.",
    processLabel: "Processus", processTitle: "Comment ca fonctionne",
    s1Title: "Enregistrez ou telechargez", s1Desc: "Capturez une reunion, un appel ou une presentation directement dans Sythio, ou telechargez un enregistrement existant.",
    s2Title: "Sythio analyse", s2Desc: "L'enregistrement est traite pour le contexte, l'identification des intervenants et la hierarchie du contenu.",
    s3Title: "Obtenez votre rapport", s3Desc: "Recevez un rapport structure et professionnel a partager avec les parties prenantes. Exportez en PDF ou texte.",
    ucLabel: "Cas d'utilisation", ucTitle: "Ou les rapports executifs brillent",
    ucDesc: "Chaque fois que le resultat d'une conversation doit etre documente, partage ou escalade, un rapport est le bon format.",
    uc1Title: "Reunions du conseil et de la direction", uc1Desc: "Generez des rapports de reunion soignes avec decisions, risques et conclusions strategiques.",
    uc2Title: "Rapports d'engagement client", uc2Desc: "Documentez chaque conversation client avec exigences, retours, accords et prochaines etapes.",
    uc3Title: "Mises a jour de statut projet", uc3Desc: "Transformez les points projet en rapports de progres structures. Blocages, jalons et responsabilites sont surfacees automatiquement.",
    uc4Title: "Debriefings d'entretiens", uc4Desc: "Capturez les conversations d'entretien et generez des rapports de debriefing structures.",
    otherLabel: "Un enregistrement, plusieurs sorties", otherTitle: "Les rapports ne sont qu'une sortie",
    otherDesc: "Du meme enregistrement, Sythio peut aussi produire des resumes, listes de taches, plans d'action et plus.",
    oAI: "Resumes IA", oAIDesc: "Quand vous avez besoin d'un apercu rapide plutot qu'un rapport complet.",
    oTask: "Extraction de taches", oTaskDesc: "Quand le focus est sur les elements d'action. Les taches sont extraites avec responsables et echeances.",
    oMsg: "Messages", oMsgDesc: "Quand vous avez besoin d'un email de suivi rapide plutot qu'un rapport formel.",
    relAI: "Resumes IA", relAP: "Plans d'action", relMeet: "Reunions", relProd: "Produit",
    ctaTitle: "De la conversation au rapport pret pour le conseil", ctaDesc: "Chaque conversation importante merite un enregistrement professionnel. Sythio le fournit en secondes.",
  },
  pt: {
    label: "Recursos", title: "Relatorios executivos de cada conversa",
    subtitle: "O Sythio gera relatorios profissionais prontos para stakeholders a partir de qualquer gravacao. Decisoes documentadas. Riscos sinalizados. Recomendacoes estruturadas. Prontos para compartilhar em segundos.",
    probLabel: "O problema", probTitle: "Ninguem le uma transcricao de 45 minutos",
    probDesc1: "Stakeholders precisam saber o que aconteceu, o que foi decidido e o que vem a seguir. Eles nao precisam de cada palavra. Uma transcricao bruta enterra o sinal no ruido. Um resumo e curto demais. Um relatorio encontra o equilibrio certo.",
    probDesc2: "O Sythio gera relatorios que parecem escritos por alguem que participou da reuniao, entendeu o contexto e sabia o que a lideranca precisa ver.",
    includesLabel: "O que um relatorio inclui",
    inc1: "Resumo executivo da conversa", inc2: "Decisoes-chave e sua justificativa", inc3: "Riscos abertos e itens nao resolvidos", inc4: "Itens de acao com responsaveis e prazos", inc5: "Recomendacoes e proximos passos",
    diffLabel: "O que o torna diferente", diffTitle: "Nao e um modelo. E um relatorio sob medida.",
    diffDesc: "O Sythio nao preenche um modelo generico. Cada relatorio e gerado a partir do conteudo real da sua gravacao.",
    d1Title: "Estrutura consciente do contexto", d1Desc: "Uma sessao estrategica produz um relatorio diferente de uma chamada com cliente. O Sythio adapta a estrutura ao tipo de conversa.",
    d2Title: "Atribuicao de falantes", d2Desc: "Decisoes e declaracoes sao atribuidas a quem as fez. Cada afirmacao e rastreavel a um falante especifico.",
    d3Title: "Tom profissional", d3Desc: "Os relatorios sao escritos em tom claro e formal adequado para lideranca, clientes ou comunicacao de diretoria.",
    processLabel: "Processo", processTitle: "Como funciona",
    s1Title: "Grave ou envie", s1Desc: "Capture uma reuniao, chamada ou apresentacao diretamente no Sythio, ou envie uma gravacao existente.",
    s2Title: "Sythio analisa", s2Desc: "A gravacao e processada para contexto, identificacao de falantes e hierarquia de conteudo.",
    s3Title: "Receba seu relatorio", s3Desc: "Receba um relatorio estruturado e profissional para compartilhar com stakeholders. Exporte como PDF ou texto.",
    ucLabel: "Casos de uso", ucTitle: "Onde os relatorios executivos brilham",
    ucDesc: "Sempre que o resultado de uma conversa precisa ser documentado, compartilhado ou escalado, um relatorio e o formato certo.",
    uc1Title: "Reunioes de diretoria e lideranca", uc1Desc: "Gere relatorios de reuniao polidos com decisoes, riscos e conclusoes estrategicas.",
    uc2Title: "Relatorios de engajamento com clientes", uc2Desc: "Documente cada conversa com clientes com requisitos, feedback, acordos e proximos passos.",
    uc3Title: "Atualizacoes de status do projeto", uc3Desc: "Transforme reunioes de acompanhamento em relatorios de progresso estruturados.",
    uc4Title: "Debriefings de entrevistas", uc4Desc: "Capture conversas de entrevista e gere relatorios de avaliacao estruturados.",
    otherLabel: "Uma gravacao, varias saidas", otherTitle: "Relatorios sao apenas uma saida",
    otherDesc: "Da mesma gravacao, o Sythio tambem pode produzir resumos, listas de tarefas, planos de acao e mais.",
    oAI: "Resumos IA", oAIDesc: "Quando voce precisa de uma visao rapida em vez de um relatorio completo.",
    oTask: "Extracao de tarefas", oTaskDesc: "Quando o foco esta nos itens de acao. Tarefas sao extraidas com responsaveis e prazos.",
    oMsg: "Mensagens", oMsgDesc: "Quando voce precisa de um email de follow-up rapido em vez de um relatorio formal.",
    relAI: "Resumos IA", relAP: "Planos de acao", relMeet: "Reunioes", relProd: "Produto",
    ctaTitle: "Da conversa ao relatorio pronto para a diretoria", ctaDesc: "Cada conversa importante merece um registro profissional. O Sythio o entrega em segundos.",
  },
  it: {
    label: "Funzionalita", title: "Report esecutivi da ogni conversazione",
    subtitle: "Sythio genera report professionali pronti per gli stakeholder da qualsiasi registrazione. Decisioni documentate. Rischi segnalati. Raccomandazioni strutturate. Pronti da condividere in pochi secondi.",
    probLabel: "Il problema", probTitle: "Nessuno legge una trascrizione di 45 minuti",
    probDesc1: "Gli stakeholder hanno bisogno di sapere cosa e successo, cosa e stato deciso e cosa viene dopo. Non hanno bisogno di ogni parola. Una trascrizione grezza seppellisce il segnale nel rumore. Un riassunto e troppo breve. Un report trova il giusto equilibrio.",
    probDesc2: "Sythio genera report che sembrano scritti da qualcuno che ha partecipato alla riunione, ha compreso il contesto e sapeva cosa la leadership deve vedere.",
    includesLabel: "Cosa include un report",
    inc1: "Sommario esecutivo della conversazione", inc2: "Decisioni chiave e le loro motivazioni", inc3: "Rischi aperti ed elementi irrisolti", inc4: "Elementi d'azione con responsabili e tempistiche", inc5: "Raccomandazioni e prossimi passi",
    diffLabel: "Cosa lo rende diverso", diffTitle: "Non un modello. Un report su misura.",
    diffDesc: "Sythio non compila un modello generico. Ogni report e generato dal contenuto reale della tua registrazione.",
    d1Title: "Struttura contestuale", d1Desc: "Una sessione strategica produce un report diverso da una chiamata cliente. Sythio adatta la struttura al tipo di conversazione.",
    d2Title: "Attribuzione dei parlanti", d2Desc: "Decisioni e dichiarazioni sono attribuite a chi le ha fatte. Ogni affermazione e tracciabile a un parlante specifico.",
    d3Title: "Tono professionale", d3Desc: "I report sono scritti in tono chiaro e formale adatto alla leadership, ai clienti o alla comunicazione a livello di consiglio.",
    processLabel: "Processo", processTitle: "Come funziona",
    s1Title: "Registra o carica", s1Desc: "Cattura una riunione, chiamata o presentazione direttamente in Sythio, o carica una registrazione esistente.",
    s2Title: "Sythio analizza", s2Desc: "La registrazione viene elaborata per contesto, identificazione dei parlanti e gerarchia dei contenuti.",
    s3Title: "Ottieni il tuo report", s3Desc: "Ricevi un report strutturato e professionale da condividere con gli stakeholder. Esporta come PDF o testo.",
    ucLabel: "Casi d'uso", ucTitle: "Dove i report esecutivi brillano",
    ucDesc: "Ogni volta che il risultato di una conversazione deve essere documentato, condiviso o escalato, un report e il formato giusto.",
    uc1Title: "Riunioni di consiglio e leadership", uc1Desc: "Genera report di riunione curati con decisioni, rischi e conclusioni strategiche.",
    uc2Title: "Report di engagement clienti", uc2Desc: "Documenta ogni conversazione con i clienti con requisiti, feedback, accordi e prossimi passi.",
    uc3Title: "Aggiornamenti stato progetto", uc3Desc: "Trasforma i check-in di progetto in report di progresso strutturati.",
    uc4Title: "Debriefing interviste", uc4Desc: "Cattura conversazioni di intervista e genera report di valutazione strutturati.",
    otherLabel: "Una registrazione, molti output", otherTitle: "I report sono solo un output",
    otherDesc: "Dalla stessa registrazione, Sythio puo anche produrre riassunti, liste di attivita, piani d'azione e altro.",
    oAI: "Riassunti IA", oAIDesc: "Quando hai bisogno di una panoramica rapida piuttosto che un report completo.",
    oTask: "Estrazione attivita", oTaskDesc: "Quando il focus e sugli elementi d'azione. Le attivita vengono estratte con responsabili e scadenze.",
    oMsg: "Messaggi", oMsgDesc: "Quando hai bisogno di un'email di follow-up rapida invece di un report formale.",
    relAI: "Riassunti IA", relAP: "Piani d'azione", relMeet: "Riunioni", relProd: "Prodotto",
    ctaTitle: "Dalla conversazione al report pronto per il consiglio", ctaDesc: "Ogni conversazione importante merita un registro professionale. Sythio lo fornisce in pochi secondi.",
  },
};

export default function ReportsPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;
  const includes = [c.inc1, c.inc2, c.inc3, c.inc4, c.inc5];

  return (
    <PageReveal>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-animated-bg overflow-hidden">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6"><div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.label}</p>
          <TextReveal tag="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">{c.title}</TextReveal>
          <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">{c.subtitle}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <MagneticHover><Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{s("common.startFree")}</Link></MagneticHover>
            <Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{s("common.allFeatures")}</Link>
          </div>
        </div></div>
      </section>

      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6"><div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.probLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.probTitle}</TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">{c.probDesc1}</p>
            <p className="mt-4 text-lg text-muted leading-relaxed">{c.probDesc2}</p>
          </div>
          <div className="space-y-6">
            <div className="bg-background rounded-2xl border border-border-light p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-4">{c.includesLabel}</p>
              <ul className="space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                    <span className="text-sm text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div></div>
      </section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.diffLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.diffTitle}</TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">{c.diffDesc}</p>
          </div>
          <GsapStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>
            {[{t:c.d1Title,d:c.d1Desc},{t:c.d2Title,d:c.d2Desc},{t:c.d3Title,d:c.d3Desc}].map(i=>(
              <div key={i.t} className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">{i.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{i.d}</p>
              </div>
            ))}
          </GsapStagger>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.processLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.processTitle}</TextReveal>
          </div>
          <GsapStagger className="grid md:grid-cols-3 gap-8" stagger={0.08}>
            {[{n:"1",t:c.s1Title,d:c.s1Desc},{n:"2",t:c.s2Title,d:c.s2Desc},{n:"3",t:c.s3Title,d:c.s3Desc}].map(i=>(
              <div key={i.n} className="relative">
                <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">{i.n}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{i.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{i.d}</p>
              </div>
            ))}
          </GsapStagger>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.ucLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.ucTitle}</TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">{c.ucDesc}</p>
          </div>
          <GsapStagger className="grid sm:grid-cols-2 gap-6" stagger={0.08}>
            <ScrollScale><Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc1Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.uc1Desc}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/client-calls" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc2Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.uc2Desc}</p>
            </Link></ScrollScale>
            <div className="bg-white rounded-2xl border border-border-light p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.uc3Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.uc3Desc}</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.uc4Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.uc4Desc}</p>
            </div>
          </GsapStagger>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.otherLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.otherTitle}</TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">{c.otherDesc}</p>
          </div>
          <GsapStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>
            <ScrollScale><Link href="/features/ai-summaries" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.oAI}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.oAIDesc}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/features/task-extraction" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.oTask}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.oTaskDesc}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/features/messages" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.oMsg}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.oMsgDesc}</p>
            </Link></ScrollScale>
          </GsapStagger>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">{s("common.related")}</h2>
          <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
            <ScrollScale><Link href="/features/ai-summaries" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relAI}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/features/action-plans" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relAP}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relMeet}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/product" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.overview")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relProd}</p>
            </Link></ScrollScale>
          </GsapStagger>
        </div>
      </section>

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
        </div>
      </section>
    </PageReveal>
  );
}
