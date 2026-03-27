"use client";

import Link from "next/link";
import { useLanguage } from "../components/i18n/language-context";
import type { Locale } from "../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Audio to Messages",
    title: "Convert Audio into Follow-Up Messages",
    subtitle:
      "Record a meeting, upload a call, or capture a conversation. Sythio drafts professional follow-up messages based on what was discussed — with the right context, action items, and tone.",
    howTitle: "Three steps to a follow-up message",
    howSubtitle:
      "No more staring at a blank email after a meeting. Sythio drafts the follow-up based on what was actually discussed.",
    step1Title: "Record or upload",
    step1Desc:
      "Capture your meeting, call, or conversation directly in Sythio — or upload a recording you already have.",
    step2Title: "Sythio drafts the message",
    step2Desc:
      "Key decisions, action items, and next steps are identified. A professional follow-up message is drafted with the right tone and structure.",
    step3Title: "Review and send",
    step3Desc:
      "A ready-to-send message is waiting for you. Review it, make any adjustments, and send it — minutes after the conversation ends.",
    whatLabel: "What You Get",
    whatTitle: "What a Sythio Follow-Up Includes",
    whatSubtitle:
      "Not a generic template with blanks to fill. A contextual message drafted from your actual conversation — professional, complete, and ready to send.",
    feat1Title: "Conversation context",
    feat1Desc:
      "The message references what was actually discussed, so recipients immediately know which conversation it relates to.",
    feat2Title: "Decisions documented",
    feat2Desc:
      "Key decisions made during the conversation are clearly stated in the message, creating a written record everyone can reference.",
    feat3Title: "Action items included",
    feat3Desc:
      "Next steps and commitments are listed with clear ownership, so everyone knows what they are responsible for.",
    feat4Title: "Professional tone",
    feat4Desc:
      "The message is drafted with a professional, appropriate tone — ready to send to clients, teammates, or leadership.",
    moreLabel: "One Recording, Many Outputs",
    moreTitle: "Not Just Messages",
    moreSubtitle:
      "A follow-up message is one output from a conversation. The same recording can also produce summaries, task lists, reports, and more — all from a single upload.",
    more1Title: "Summaries",
    more1Desc:
      "A clear overview of the full conversation — decisions, topics, and takeaways.",
    more2Title: "Task lists",
    more2Desc:
      "Extract every commitment and action item, with owners when speakers are detected.",
    more3Title: "Reports",
    more3Desc:
      "Polished executive reports with findings, decisions, and recommendations.",
    more4Title: "All 9 formats",
    more4Desc:
      "Summaries, tasks, action plans, reports, messages, study notes, ideas, and more.",
    versatileLabel: "Versatile by Design",
    versatileTitle: "Works with Any Conversation",
    versatileSubtitle:
      "Sythio adapts to the context. Whether it is a quick sync or a formal client meeting, the follow-up message matches the tone and formality of the conversation.",
    use1Title: "Client meetings",
    use1Desc:
      "Professional follow-ups that reference specific discussion points, deliverables, and agreed timelines.",
    use2Title: "Team syncs",
    use2Desc:
      "Quick recap messages with action items and owners — sent minutes after the meeting ends.",
    use3Title: "Sales calls",
    use3Desc:
      "Follow-up emails that reference prospect needs, demo highlights, and proposed next steps.",
    use4Title: "One-on-ones",
    use4Desc:
      "Personal follow-ups documenting coaching feedback, goals discussed, and commitments made.",
    outcome: "Outcome",
    rel1Name: "Messages",
    rel2Name: "Audio to Summary",
    rel3Name: "Audio to Tasks",
    rel4Name: "Client Calls",
    ctaTitle: "Stop drafting follow-ups from memory. Let Sythio write them.",
    ctaSubtitle:
      "Every conversation becomes a professional follow-up message — in seconds, not hours.",
  },
  es: {
    label: "Audio a Mensajes",
    title: "Convierte audio en mensajes de seguimiento",
    subtitle:
      "Graba una reunion, sube una llamada o captura una conversacion. Sythio redacta mensajes de seguimiento profesionales basados en lo que se discutio — con el contexto adecuado, elementos de accion y tono.",
    howTitle: "Tres pasos para un mensaje de seguimiento",
    howSubtitle:
      "No mas mirar un correo en blanco despues de una reunion. Sythio redacta el seguimiento basado en lo que realmente se discutio.",
    step1Title: "Graba o sube",
    step1Desc:
      "Captura tu reunion, llamada o conversacion directamente en Sythio — o sube una grabacion que ya tengas.",
    step2Title: "Sythio redacta el mensaje",
    step2Desc:
      "Se identifican las decisiones clave, elementos de accion y proximos pasos. Se redacta un mensaje de seguimiento profesional con el tono y estructura adecuados.",
    step3Title: "Revisa y envia",
    step3Desc:
      "Un mensaje listo para enviar te esta esperando. Revisalo, haz ajustes y envialo — minutos despues de que termina la conversacion.",
    whatLabel: "Lo que obtienes",
    whatTitle: "Lo que incluye un seguimiento de Sythio",
    whatSubtitle:
      "No es una plantilla generica con espacios para llenar. Un mensaje contextual redactado desde tu conversacion real — profesional, completo y listo para enviar.",
    feat1Title: "Contexto de la conversacion",
    feat1Desc:
      "El mensaje hace referencia a lo que realmente se discutio, para que los destinatarios sepan inmediatamente a que conversacion se refiere.",
    feat2Title: "Decisiones documentadas",
    feat2Desc:
      "Las decisiones clave tomadas durante la conversacion se expresan claramente en el mensaje, creando un registro escrito al que todos pueden referirse.",
    feat3Title: "Elementos de accion incluidos",
    feat3Desc:
      "Los proximos pasos y compromisos se listan con responsabilidad clara, para que todos sepan de que son responsables.",
    feat4Title: "Tono profesional",
    feat4Desc:
      "El mensaje se redacta con un tono profesional y apropiado — listo para enviar a clientes, companeros de equipo o la direccion.",
    moreLabel: "Una grabacion, muchos resultados",
    moreTitle: "No solo mensajes",
    moreSubtitle:
      "Un mensaje de seguimiento es un resultado de una conversacion. La misma grabacion tambien puede producir resumenes, listas de tareas, informes y mas — todo desde una sola carga.",
    more1Title: "Resumenes",
    more1Desc:
      "Una vision clara de toda la conversacion — decisiones, temas y conclusiones.",
    more2Title: "Listas de tareas",
    more2Desc:
      "Extrae cada compromiso y elemento de accion, con responsables cuando se detectan hablantes.",
    more3Title: "Informes",
    more3Desc:
      "Informes ejecutivos pulidos con hallazgos, decisiones y recomendaciones.",
    more4Title: "Los 9 formatos",
    more4Desc:
      "Resumenes, tareas, planes de accion, informes, mensajes, notas de estudio, ideas y mas.",
    versatileLabel: "Versatil por diseno",
    versatileTitle: "Funciona con cualquier conversacion",
    versatileSubtitle:
      "Sythio se adapta al contexto. Ya sea una sincronizacion rapida o una reunion formal con clientes, el mensaje de seguimiento coincide con el tono y la formalidad de la conversacion.",
    use1Title: "Reuniones con clientes",
    use1Desc:
      "Seguimientos profesionales que hacen referencia a puntos de discusion especificos, entregables y cronogramas acordados.",
    use2Title: "Sincronizaciones de equipo",
    use2Desc:
      "Mensajes rapidos de recapitulacion con elementos de accion y responsables — enviados minutos despues de que termina la reunion.",
    use3Title: "Llamadas de ventas",
    use3Desc:
      "Correos de seguimiento que hacen referencia a necesidades del prospecto, puntos destacados de la demo y proximos pasos propuestos.",
    use4Title: "Reuniones uno a uno",
    use4Desc:
      "Seguimientos personales que documentan retroalimentacion de coaching, objetivos discutidos y compromisos hechos.",
    outcome: "Resultado",
    rel1Name: "Mensajes",
    rel2Name: "Audio a Resumen",
    rel3Name: "Audio a Tareas",
    rel4Name: "Llamadas con Clientes",
    ctaTitle: "Deja de redactar seguimientos de memoria. Deja que Sythio los escriba.",
    ctaSubtitle:
      "Cada conversacion se convierte en un mensaje de seguimiento profesional — en segundos, no en horas.",
  },
  fr: {
    label: "Audio en Messages",
    title: "Convertissez l'audio en messages de suivi",
    subtitle:
      "Enregistrez une reunion, telechargez un appel ou capturez une conversation. Sythio redige des messages de suivi professionnels bases sur ce qui a ete discute — avec le bon contexte, les elements d'action et le ton.",
    howTitle: "Trois etapes pour un message de suivi",
    howSubtitle:
      "Plus besoin de fixer un email vide apres une reunion. Sythio redige le suivi base sur ce qui a reellement ete discute.",
    step1Title: "Enregistrez ou telechargez",
    step1Desc:
      "Capturez votre reunion, appel ou conversation directement dans Sythio — ou telechargez un enregistrement existant.",
    step2Title: "Sythio redige le message",
    step2Desc:
      "Les decisions cles, elements d'action et prochaines etapes sont identifies. Un message de suivi professionnel est redige avec le bon ton et la bonne structure.",
    step3Title: "Relisez et envoyez",
    step3Desc:
      "Un message pret a envoyer vous attend. Relisez-le, ajustez-le et envoyez-le — quelques minutes apres la fin de la conversation.",
    whatLabel: "Ce que vous obtenez",
    whatTitle: "Ce qu'inclut un suivi Sythio",
    whatSubtitle:
      "Pas un modele generique avec des blancs a remplir. Un message contextuel redige a partir de votre conversation reelle — professionnel, complet et pret a envoyer.",
    feat1Title: "Contexte de la conversation",
    feat1Desc:
      "Le message fait reference a ce qui a reellement ete discute, pour que les destinataires sachent immediatement a quelle conversation il se rapporte.",
    feat2Title: "Decisions documentees",
    feat2Desc:
      "Les decisions cles prises lors de la conversation sont clairement enoncees dans le message, creant un enregistrement ecrit auquel chacun peut se referer.",
    feat3Title: "Elements d'action inclus",
    feat3Desc:
      "Les prochaines etapes et engagements sont listes avec une responsabilite claire, pour que chacun sache de quoi il est responsable.",
    feat4Title: "Ton professionnel",
    feat4Desc:
      "Le message est redige avec un ton professionnel et adapte — pret a etre envoye aux clients, collegues ou a la direction.",
    moreLabel: "Un enregistrement, plusieurs resultats",
    moreTitle: "Pas que des messages",
    moreSubtitle:
      "Un message de suivi est un resultat d'une conversation. Le meme enregistrement peut aussi produire des resumes, listes de taches, rapports et plus — le tout a partir d'un seul envoi.",
    more1Title: "Resumes",
    more1Desc:
      "Une vue d'ensemble claire de toute la conversation — decisions, sujets et conclusions.",
    more2Title: "Listes de taches",
    more2Desc:
      "Extrayez chaque engagement et element d'action, avec les responsables quand les locuteurs sont detectes.",
    more3Title: "Rapports",
    more3Desc:
      "Rapports executifs soignes avec conclusions, decisions et recommandations.",
    more4Title: "Les 9 formats",
    more4Desc:
      "Resumes, taches, plans d'action, rapports, messages, notes d'etude, idees et plus.",
    versatileLabel: "Polyvalent par conception",
    versatileTitle: "Fonctionne avec toute conversation",
    versatileSubtitle:
      "Sythio s'adapte au contexte. Qu'il s'agisse d'un sync rapide ou d'une reunion formelle avec un client, le message de suivi correspond au ton et a la formalite de la conversation.",
    use1Title: "Reunions clients",
    use1Desc:
      "Suivis professionnels qui font reference a des points de discussion specifiques, livrables et calendriers convenus.",
    use2Title: "Synchronisations d'equipe",
    use2Desc:
      "Messages rapides de recapitulation avec elements d'action et responsables — envoyes quelques minutes apres la fin de la reunion.",
    use3Title: "Appels commerciaux",
    use3Desc:
      "Emails de suivi qui font reference aux besoins du prospect, points forts de la demo et prochaines etapes proposees.",
    use4Title: "Tete-a-tete",
    use4Desc:
      "Suivis personnels documentant les retours de coaching, objectifs discutes et engagements pris.",
    outcome: "Resultat",
    rel1Name: "Messages",
    rel2Name: "Audio en Resume",
    rel3Name: "Audio en Taches",
    rel4Name: "Appels Clients",
    ctaTitle: "Arretez de rediger des suivis de memoire. Laissez Sythio les ecrire.",
    ctaSubtitle:
      "Chaque conversation devient un message de suivi professionnel — en secondes, pas en heures.",
  },
  pt: {
    label: "Audio para Mensagens",
    title: "Converta audio em mensagens de acompanhamento",
    subtitle:
      "Grave uma reuniao, envie uma chamada ou capture uma conversa. Sythio redige mensagens de acompanhamento profissionais baseadas no que foi discutido — com o contexto certo, itens de acao e tom.",
    howTitle: "Tres passos para uma mensagem de acompanhamento",
    howSubtitle:
      "Chega de encarar um email em branco depois de uma reuniao. Sythio redige o acompanhamento baseado no que realmente foi discutido.",
    step1Title: "Grave ou envie",
    step1Desc:
      "Capture sua reuniao, chamada ou conversa diretamente no Sythio — ou envie uma gravacao que voce ja tenha.",
    step2Title: "Sythio redige a mensagem",
    step2Desc:
      "Decisoes-chave, itens de acao e proximos passos sao identificados. Uma mensagem de acompanhamento profissional e redigida com o tom e estrutura certos.",
    step3Title: "Revise e envie",
    step3Desc:
      "Uma mensagem pronta para enviar esta esperando por voce. Revise-a, faca ajustes e envie-a — minutos apos a conversa terminar.",
    whatLabel: "O que voce recebe",
    whatTitle: "O que um acompanhamento do Sythio inclui",
    whatSubtitle:
      "Nao e um modelo generico com espacos para preencher. Uma mensagem contextual redigida a partir da sua conversa real — profissional, completa e pronta para enviar.",
    feat1Title: "Contexto da conversa",
    feat1Desc:
      "A mensagem faz referencia ao que realmente foi discutido, para que os destinatarios saibam imediatamente a qual conversa se refere.",
    feat2Title: "Decisoes documentadas",
    feat2Desc:
      "As decisoes-chave tomadas durante a conversa sao claramente expressas na mensagem, criando um registro escrito ao qual todos podem se referir.",
    feat3Title: "Itens de acao incluidos",
    feat3Desc:
      "Proximos passos e compromissos sao listados com responsabilidade clara, para que todos saibam do que sao responsaveis.",
    feat4Title: "Tom profissional",
    feat4Desc:
      "A mensagem e redigida com um tom profissional e apropriado — pronta para enviar a clientes, colegas ou lideranca.",
    moreLabel: "Uma gravacao, muitos resultados",
    moreTitle: "Nao apenas mensagens",
    moreSubtitle:
      "Uma mensagem de acompanhamento e um resultado de uma conversa. A mesma gravacao tambem pode produzir resumos, listas de tarefas, relatorios e mais — tudo a partir de um unico envio.",
    more1Title: "Resumos",
    more1Desc:
      "Uma visao clara de toda a conversa — decisoes, temas e conclusoes.",
    more2Title: "Listas de tarefas",
    more2Desc:
      "Extraia cada compromisso e item de acao, com responsaveis quando falantes sao detectados.",
    more3Title: "Relatorios",
    more3Desc:
      "Relatorios executivos polidos com descobertas, decisoes e recomendacoes.",
    more4Title: "Todos os 9 formatos",
    more4Desc:
      "Resumos, tarefas, planos de acao, relatorios, mensagens, notas de estudo, ideias e mais.",
    versatileLabel: "Versatil por design",
    versatileTitle: "Funciona com qualquer conversa",
    versatileSubtitle:
      "Sythio se adapta ao contexto. Seja uma sincronizacao rapida ou uma reuniao formal com clientes, a mensagem de acompanhamento corresponde ao tom e formalidade da conversa.",
    use1Title: "Reunioes com clientes",
    use1Desc:
      "Acompanhamentos profissionais que fazem referencia a pontos de discussao especificos, entregaveis e cronogramas acordados.",
    use2Title: "Sincronizacoes de equipe",
    use2Desc:
      "Mensagens rapidas de recapitulacao com itens de acao e responsaveis — enviadas minutos apos a reuniao terminar.",
    use3Title: "Chamadas de vendas",
    use3Desc:
      "Emails de acompanhamento que fazem referencia as necessidades do prospect, destaques da demo e proximos passos propostos.",
    use4Title: "Reunioes individuais",
    use4Desc:
      "Acompanhamentos pessoais documentando feedback de coaching, objetivos discutidos e compromissos feitos.",
    outcome: "Resultado",
    rel1Name: "Mensagens",
    rel2Name: "Audio para Resumo",
    rel3Name: "Audio para Tarefas",
    rel4Name: "Chamadas com Clientes",
    ctaTitle: "Pare de redigir acompanhamentos de memoria. Deixe o Sythio escreve-los.",
    ctaSubtitle:
      "Cada conversa se torna uma mensagem de acompanhamento profissional — em segundos, nao em horas.",
  },
  it: {
    label: "Audio in Messaggi",
    title: "Converti l'audio in messaggi di follow-up",
    subtitle:
      "Registra una riunione, carica una chiamata o cattura una conversazione. Sythio redige messaggi di follow-up professionali basati su cio che e stato discusso — con il contesto giusto, gli elementi d'azione e il tono.",
    howTitle: "Tre passaggi per un messaggio di follow-up",
    howSubtitle:
      "Basta fissare un'email vuota dopo una riunione. Sythio redige il follow-up basandosi su cio che e stato realmente discusso.",
    step1Title: "Registra o carica",
    step1Desc:
      "Cattura la tua riunione, chiamata o conversazione direttamente in Sythio — o carica una registrazione esistente.",
    step2Title: "Sythio redige il messaggio",
    step2Desc:
      "Decisioni chiave, elementi d'azione e prossimi passi vengono identificati. Un messaggio di follow-up professionale viene redatto con il tono e la struttura giusti.",
    step3Title: "Rivedi e invia",
    step3Desc:
      "Un messaggio pronto per l'invio ti aspetta. Rivedilo, apporta eventuali modifiche e invialo — pochi minuti dopo la fine della conversazione.",
    whatLabel: "Cosa ottieni",
    whatTitle: "Cosa include un follow-up Sythio",
    whatSubtitle:
      "Non un modello generico con spazi da riempire. Un messaggio contestuale redatto dalla tua conversazione reale — professionale, completo e pronto per l'invio.",
    feat1Title: "Contesto della conversazione",
    feat1Desc:
      "Il messaggio fa riferimento a cio che e stato realmente discusso, cosi i destinatari sanno immediatamente a quale conversazione si riferisce.",
    feat2Title: "Decisioni documentate",
    feat2Desc:
      "Le decisioni chiave prese durante la conversazione sono chiaramente espresse nel messaggio, creando un registro scritto a cui tutti possono fare riferimento.",
    feat3Title: "Elementi d'azione inclusi",
    feat3Desc:
      "I prossimi passi e gli impegni sono elencati con responsabilita chiara, cosi tutti sanno di cosa sono responsabili.",
    feat4Title: "Tono professionale",
    feat4Desc:
      "Il messaggio e redatto con un tono professionale e appropriato — pronto per essere inviato a clienti, colleghi o dirigenza.",
    moreLabel: "Una registrazione, molti risultati",
    moreTitle: "Non solo messaggi",
    moreSubtitle:
      "Un messaggio di follow-up e un risultato di una conversazione. La stessa registrazione puo anche produrre riassunti, liste di attivita, report e altro — il tutto da un singolo caricamento.",
    more1Title: "Riassunti",
    more1Desc:
      "Una panoramica chiara dell'intera conversazione — decisioni, argomenti e conclusioni.",
    more2Title: "Liste di attivita",
    more2Desc:
      "Estrai ogni impegno e elemento d'azione, con responsabili quando i parlanti vengono rilevati.",
    more3Title: "Report",
    more3Desc:
      "Report esecutivi raffinati con risultati, decisioni e raccomandazioni.",
    more4Title: "Tutti i 9 formati",
    more4Desc:
      "Riassunti, attivita, piani d'azione, report, messaggi, note di studio, idee e altro.",
    versatileLabel: "Versatile per design",
    versatileTitle: "Funziona con qualsiasi conversazione",
    versatileSubtitle:
      "Sythio si adatta al contesto. Che si tratti di un sync rapido o di una riunione formale con un cliente, il messaggio di follow-up corrisponde al tono e alla formalita della conversazione.",
    use1Title: "Riunioni con clienti",
    use1Desc:
      "Follow-up professionali che fanno riferimento a punti di discussione specifici, deliverable e tempistiche concordate.",
    use2Title: "Sincronizzazioni di team",
    use2Desc:
      "Messaggi rapidi di riepilogo con elementi d'azione e responsabili — inviati pochi minuti dopo la fine della riunione.",
    use3Title: "Chiamate commerciali",
    use3Desc:
      "Email di follow-up che fanno riferimento alle esigenze del prospect, punti salienti della demo e prossimi passi proposti.",
    use4Title: "Incontri individuali",
    use4Desc:
      "Follow-up personali che documentano feedback di coaching, obiettivi discussi e impegni presi.",
    outcome: "Risultato",
    rel1Name: "Messaggi",
    rel2Name: "Audio in Riassunto",
    rel3Name: "Audio in Attivita",
    rel4Name: "Chiamate Clienti",
    ctaTitle: "Smetti di scrivere follow-up a memoria. Lascia che Sythio li scriva.",
    ctaSubtitle:
      "Ogni conversazione diventa un messaggio di follow-up professionale — in secondi, non in ore.",
  },
};

export default function AudioToMessagesPage() {
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
              <MagneticHover>
                <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{s("common.startFree")}</Link>
              </MagneticHover>
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
              { title: c.more2Title, description: c.more2Desc, href: "/audio-to-tasks" },
              { title: c.more3Title, description: c.more3Desc, href: "/audio-to-report" },
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
              <Link href="/features/messages" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
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
              <Link href="/audio-to-tasks" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel3Name}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/use-cases/client-calls" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel4Name}</p>
              </Link>
            </ScrollScale>
          </GsapStagger>
        </div>
      </section>

      <section className="relative py-32 md:py-44 bg-background animated-gradient-bg overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.ctaTitle}</TextReveal>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">{c.ctaSubtitle}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticHover>
              <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{s("common.startFree")}</Link>
            </MagneticHover>
            <MagneticHover>
              <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{s("common.exploreProduct")}</Link>
            </MagneticHover>
          </div>
          <p className="mt-6 text-sm text-muted">{s("common.freePlan")}</p>
        </div>
      </section>
    </PageReveal>
  );
}
