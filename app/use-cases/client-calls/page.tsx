"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Use Cases",
    title: "Client Calls That Lead to Clear Action",
    subtitle:
      "Every client call contains decisions, commitments, and context that shapes the project. Sythio turns those calls into structured summaries, attributed tasks, and professional follow-up messages — so nothing gets lost between the call and the work.",
    problemTitle: "The Follow-up That Never Happened",
    problemP1:
      "You hang up from a client call. You had a productive conversation. The client approved a budget increase, asked for a revised timeline, and mentioned a new stakeholder who needs to be looped in.",
    problemP2:
      "Three hours later, you are deep in other work. The follow-up email still is not sent. By tomorrow, the details are fuzzy. Was the budget increase 10% or 15%? Did they want the revised SOW by Wednesday or Thursday?",
    problemP3:
      "Client relationships depend on follow-through. When details slip, trust erodes — not because of bad intentions, but because the information never made it from the call to the work.",
    createsTitle: "What Sythio Creates from Client Calls",
    createsSubtitle:
      "Record the call. Get structured output within seconds. Send the follow-up before you move on to the next task.",
    summaryTitle: "Summary",
    summaryDesc:
      "A structured overview of the call: what was discussed, what was decided, and what the client expects next. Share it with your team so everyone has the same context.",
    tasksTitle: "Tasks",
    tasksDesc:
      "Every commitment extracted from the conversation. What you promised the client, what the client needs to provide, and the deadlines attached to each.",
    followUpTitle: "Follow-up Message",
    followUpDesc:
      "A professional follow-up email drafted from the call content. Includes key decisions, next steps, and action items. Review, adjust, and send.",
    executiveTitle: "Executive Report",
    executiveDesc:
      "A polished report suitable for stakeholders and leadership. Client feedback, project status, and decisions formatted for executive review.",
    speakerTitle: "Speaker Detection for Client Calls",
    speakerP1:
      "In client conversations, knowing who said what is not a nice-to-have — it is essential. The client approved the budget. Your account manager committed to a delivery date. The technical lead flagged a dependency.",
    speakerP2:
      "Sythio identifies individual speakers throughout the call. Tasks are attributed to the person who took them on. Decisions are connected to the person who made them. The follow-up message reflects who committed to what.",
    speakerP3:
      "No more ambiguity about who said what. No more guessing after the call.",
    speakerLink: "Learn more about speaker detection",
    callAttribution: "Call Attribution",
    clientLabel: "Client",
    youLabel: "You",
    clientQuote:
      '"We can increase the budget by 15%. I need the revised SOW by Wednesday."',
    youQuote:
      '"I will have the revised SOW to you by end of day Wednesday. I will also loop in our new design lead."',
    extractedTasks: "Extracted Tasks",
    taskYou1: "You: Send revised SOW by Wednesday EOD",
    taskYou2: "You: Introduce design lead to client",
    taskClient: "Client: Confirm budget approval internally",
    relatedMeetings: "Meetings",
    relatedAudience: "Audience",
    relatedConsultants: "Sythio for Consultants",
    relatedSpeakerDetection: "Speaker Detection",
    relatedFollowUp: "Follow-up Messages",
    ctaTitle: "Turn Every Client Call into Clear Next Steps",
    ctaSubtitle:
      "Stop letting client context slip through the cracks. Let Sythio turn your calls into structured output that builds trust and drives projects forward.",
  },
  es: {
    label: "Casos de uso",
    title: "Llamadas con clientes que llevan a acciones claras",
    subtitle:
      "Cada llamada con un cliente contiene decisiones, compromisos y contexto que moldea el proyecto. Sythio convierte esas llamadas en resúmenes estructurados, tareas atribuidas y mensajes de seguimiento profesionales — para que nada se pierda entre la llamada y el trabajo.",
    problemTitle: "El seguimiento que nunca ocurrió",
    problemP1:
      "Cuelgas de una llamada con un cliente. Tuviste una conversación productiva. El cliente aprobó un aumento de presupuesto, pidió un cronograma revisado y mencionó a un nuevo interesado que necesita ser incluido.",
    problemP2:
      "Tres horas después, estás inmerso en otro trabajo. El correo de seguimiento aún no se ha enviado. Para mañana, los detalles son borrosos. ¿El aumento de presupuesto era del 10% o del 15%? ¿Querían el SOW revisado para el miércoles o el jueves?",
    problemP3:
      "Las relaciones con los clientes dependen del seguimiento. Cuando los detalles se escapan, la confianza se erosiona — no por malas intenciones, sino porque la información nunca llegó de la llamada al trabajo.",
    createsTitle: "Lo que Sythio crea a partir de llamadas con clientes",
    createsSubtitle:
      "Graba la llamada. Obtén resultados estructurados en segundos. Envía el seguimiento antes de pasar a la siguiente tarea.",
    summaryTitle: "Resumen",
    summaryDesc:
      "Una visión estructurada de la llamada: qué se discutió, qué se decidió y qué espera el cliente a continuación. Compártelo con tu equipo para que todos tengan el mismo contexto.",
    tasksTitle: "Tareas",
    tasksDesc:
      "Cada compromiso extraído de la conversación. Lo que prometiste al cliente, lo que el cliente necesita proporcionar y los plazos de cada uno.",
    followUpTitle: "Mensaje de seguimiento",
    followUpDesc:
      "Un correo de seguimiento profesional redactado a partir del contenido de la llamada. Incluye decisiones clave, próximos pasos y elementos de acción. Revisa, ajusta y envía.",
    executiveTitle: "Informe ejecutivo",
    executiveDesc:
      "Un informe pulido adecuado para interesados y liderazgo. Retroalimentación del cliente, estado del proyecto y decisiones formateadas para revisión ejecutiva.",
    speakerTitle: "Detección de hablantes para llamadas con clientes",
    speakerP1:
      "En las conversaciones con clientes, saber quién dijo qué no es un lujo — es esencial. El cliente aprobó el presupuesto. Tu gerente de cuentas se comprometió con una fecha de entrega. El líder técnico señaló una dependencia.",
    speakerP2:
      "Sythio identifica a los hablantes individuales a lo largo de la llamada. Las tareas se atribuyen a la persona que las asumió. Las decisiones se conectan con la persona que las tomó. El mensaje de seguimiento refleja quién se comprometió a qué.",
    speakerP3:
      "Sin más ambigüedad sobre quién dijo qué. Sin más adivinanzas después de la llamada.",
    speakerLink: "Más información sobre la detección de hablantes",
    callAttribution: "Atribución de la llamada",
    clientLabel: "Cliente",
    youLabel: "Tú",
    clientQuote:
      '"Podemos aumentar el presupuesto un 15%. Necesito el SOW revisado para el miércoles."',
    youQuote:
      '"Tendré el SOW revisado para el final del día miércoles. También incluiré a nuestro nuevo líder de diseño."',
    extractedTasks: "Tareas extraídas",
    taskYou1: "Tú: Enviar SOW revisado para el miércoles al final del día",
    taskYou2: "Tú: Presentar al líder de diseño al cliente",
    taskClient: "Cliente: Confirmar aprobación del presupuesto internamente",
    relatedMeetings: "Reuniones",
    relatedAudience: "Audiencia",
    relatedConsultants: "Sythio para consultores",
    relatedSpeakerDetection: "Detección de hablantes",
    relatedFollowUp: "Mensajes de seguimiento",
    ctaTitle: "Convierte cada llamada con clientes en próximos pasos claros",
    ctaSubtitle:
      "Deja de permitir que el contexto del cliente se escape. Deja que Sythio convierta tus llamadas en resultados estructurados que generan confianza e impulsan los proyectos.",
  },
  fr: {
    label: "Cas d'usage",
    title: "Des appels clients qui mènent à des actions claires",
    subtitle:
      "Chaque appel client contient des décisions, des engagements et du contexte qui façonnent le projet. Sythio transforme ces appels en résumés structurés, tâches attribuées et messages de suivi professionnels — pour que rien ne se perde entre l'appel et le travail.",
    problemTitle: "Le suivi qui n'a jamais eu lieu",
    problemP1:
      "Vous raccrochez après un appel client. Vous avez eu une conversation productive. Le client a approuvé une augmentation de budget, demandé un calendrier révisé et mentionné une nouvelle partie prenante à inclure.",
    problemP2:
      "Trois heures plus tard, vous êtes plongé dans un autre travail. L'e-mail de suivi n'est toujours pas envoyé. Le lendemain, les détails sont flous. L'augmentation de budget était-elle de 10% ou 15% ? Voulaient-ils le SOW révisé pour mercredi ou jeudi ?",
    problemP3:
      "Les relations clients reposent sur le suivi. Quand les détails s'échappent, la confiance s'érode — pas à cause de mauvaises intentions, mais parce que l'information n'a jamais fait le chemin de l'appel au travail.",
    createsTitle: "Ce que Sythio crée à partir des appels clients",
    createsSubtitle:
      "Enregistrez l'appel. Obtenez un résultat structuré en quelques secondes. Envoyez le suivi avant de passer à la tâche suivante.",
    summaryTitle: "Résumé",
    summaryDesc:
      "Un aperçu structuré de l'appel : ce qui a été discuté, ce qui a été décidé et ce que le client attend ensuite. Partagez-le avec votre équipe pour que tout le monde ait le même contexte.",
    tasksTitle: "Tâches",
    tasksDesc:
      "Chaque engagement extrait de la conversation. Ce que vous avez promis au client, ce que le client doit fournir et les délais associés.",
    followUpTitle: "Message de suivi",
    followUpDesc:
      "Un e-mail de suivi professionnel rédigé à partir du contenu de l'appel. Inclut les décisions clés, les prochaines étapes et les actions. Relisez, ajustez et envoyez.",
    executiveTitle: "Rapport exécutif",
    executiveDesc:
      "Un rapport soigné adapté aux parties prenantes et à la direction. Retour client, état du projet et décisions formatés pour une revue de direction.",
    speakerTitle: "Détection des intervenants pour les appels clients",
    speakerP1:
      "Dans les conversations clients, savoir qui a dit quoi n'est pas un luxe — c'est essentiel. Le client a approuvé le budget. Votre responsable de compte s'est engagé sur une date de livraison. Le responsable technique a signalé une dépendance.",
    speakerP2:
      "Sythio identifie les intervenants individuels tout au long de l'appel. Les tâches sont attribuées à la personne qui les a prises en charge. Les décisions sont liées à la personne qui les a prises. Le message de suivi reflète qui s'est engagé sur quoi.",
    speakerP3:
      "Plus d'ambiguïté sur qui a dit quoi. Plus de devinettes après l'appel.",
    speakerLink: "En savoir plus sur la détection des intervenants",
    callAttribution: "Attribution de l'appel",
    clientLabel: "Client",
    youLabel: "Vous",
    clientQuote:
      '"Nous pouvons augmenter le budget de 15%. J\'ai besoin du SOW révisé pour mercredi."',
    youQuote:
      '"J\'aurai le SOW révisé pour vous mercredi en fin de journée. Je vais aussi intégrer notre nouveau responsable design."',
    extractedTasks: "Tâches extraites",
    taskYou1: "Vous : Envoyer le SOW révisé mercredi fin de journée",
    taskYou2: "Vous : Présenter le responsable design au client",
    taskClient: "Client : Confirmer l'approbation du budget en interne",
    relatedMeetings: "Réunions",
    relatedAudience: "Public",
    relatedConsultants: "Sythio pour les consultants",
    relatedSpeakerDetection: "Détection des intervenants",
    relatedFollowUp: "Messages de suivi",
    ctaTitle: "Transformez chaque appel client en prochaines étapes claires",
    ctaSubtitle:
      "Arrêtez de laisser le contexte client s'échapper. Laissez Sythio transformer vos appels en résultats structurés qui renforcent la confiance et font avancer les projets.",
  },
  pt: {
    label: "Casos de uso",
    title: "Chamadas com clientes que levam a ações claras",
    subtitle:
      "Cada chamada com cliente contém decisões, compromissos e contexto que moldam o projeto. O Sythio transforma essas chamadas em resumos estruturados, tarefas atribuídas e mensagens de acompanhamento profissionais — para que nada se perca entre a chamada e o trabalho.",
    problemTitle: "O acompanhamento que nunca aconteceu",
    problemP1:
      "Você desliga de uma chamada com o cliente. Teve uma conversa produtiva. O cliente aprovou um aumento de orçamento, pediu um cronograma revisado e mencionou um novo stakeholder que precisa ser incluído.",
    problemP2:
      "Três horas depois, você está imerso em outro trabalho. O e-mail de acompanhamento ainda não foi enviado. Até amanhã, os detalhes estão vagos. O aumento de orçamento era de 10% ou 15%? Queriam o SOW revisado para quarta ou quinta?",
    problemP3:
      "Relacionamentos com clientes dependem do acompanhamento. Quando detalhes escapam, a confiança se erode — não por más intenções, mas porque a informação nunca chegou da chamada ao trabalho.",
    createsTitle: "O que o Sythio cria a partir de chamadas com clientes",
    createsSubtitle:
      "Grave a chamada. Obtenha resultados estruturados em segundos. Envie o acompanhamento antes de passar para a próxima tarefa.",
    summaryTitle: "Resumo",
    summaryDesc:
      "Uma visão estruturada da chamada: o que foi discutido, o que foi decidido e o que o cliente espera a seguir. Compartilhe com sua equipe para que todos tenham o mesmo contexto.",
    tasksTitle: "Tarefas",
    tasksDesc:
      "Cada compromisso extraído da conversa. O que você prometeu ao cliente, o que o cliente precisa fornecer e os prazos associados.",
    followUpTitle: "Mensagem de acompanhamento",
    followUpDesc:
      "Um e-mail de acompanhamento profissional redigido a partir do conteúdo da chamada. Inclui decisões-chave, próximos passos e itens de ação. Revise, ajuste e envie.",
    executiveTitle: "Relatório executivo",
    executiveDesc:
      "Um relatório polido adequado para stakeholders e liderança. Feedback do cliente, status do projeto e decisões formatados para revisão executiva.",
    speakerTitle: "Detecção de falantes para chamadas com clientes",
    speakerP1:
      "Nas conversas com clientes, saber quem disse o quê não é um luxo — é essencial. O cliente aprovou o orçamento. Seu gerente de contas se comprometeu com uma data de entrega. O líder técnico sinalizou uma dependência.",
    speakerP2:
      "O Sythio identifica falantes individuais ao longo da chamada. Tarefas são atribuídas à pessoa que as assumiu. Decisões são conectadas à pessoa que as tomou. A mensagem de acompanhamento reflete quem se comprometeu com o quê.",
    speakerP3:
      "Sem mais ambiguidade sobre quem disse o quê. Sem mais suposições após a chamada.",
    speakerLink: "Saiba mais sobre a detecção de falantes",
    callAttribution: "Atribuição da chamada",
    clientLabel: "Cliente",
    youLabel: "Você",
    clientQuote:
      '"Podemos aumentar o orçamento em 15%. Preciso do SOW revisado até quarta-feira."',
    youQuote:
      '"Terei o SOW revisado para você até o final do dia de quarta-feira. Também vou incluir nosso novo líder de design."',
    extractedTasks: "Tarefas extraídas",
    taskYou1: "Você: Enviar SOW revisado até quarta-feira no final do dia",
    taskYou2: "Você: Apresentar o líder de design ao cliente",
    taskClient: "Cliente: Confirmar aprovação do orçamento internamente",
    relatedMeetings: "Reuniões",
    relatedAudience: "Público",
    relatedConsultants: "Sythio para consultores",
    relatedSpeakerDetection: "Detecção de falantes",
    relatedFollowUp: "Mensagens de acompanhamento",
    ctaTitle: "Transforme cada chamada com cliente em próximos passos claros",
    ctaSubtitle:
      "Pare de deixar o contexto do cliente escapar. Deixe o Sythio transformar suas chamadas em resultados estruturados que constroem confiança e impulsionam projetos.",
  },
  it: {
    label: "Casi d'uso",
    title: "Chiamate clienti che portano ad azioni chiare",
    subtitle:
      "Ogni chiamata con il cliente contiene decisioni, impegni e contesto che plasmano il progetto. Sythio trasforma quelle chiamate in riassunti strutturati, compiti attribuiti e messaggi di follow-up professionali — perché nulla si perda tra la chiamata e il lavoro.",
    problemTitle: "Il follow-up che non è mai avvenuto",
    problemP1:
      "Riattacchi da una chiamata con il cliente. Hai avuto una conversazione produttiva. Il cliente ha approvato un aumento di budget, chiesto una tempistica rivista e menzionato un nuovo stakeholder da coinvolgere.",
    problemP2:
      "Tre ore dopo, sei immerso in altro lavoro. L'e-mail di follow-up non è ancora stata inviata. Domani, i dettagli sono sfocati. L'aumento di budget era del 10% o del 15%? Volevano il SOW rivisto entro mercoledì o giovedì?",
    problemP3:
      "Le relazioni con i clienti dipendono dal follow-through. Quando i dettagli sfuggono, la fiducia si erode — non per cattive intenzioni, ma perché le informazioni non sono mai passate dalla chiamata al lavoro.",
    createsTitle: "Cosa crea Sythio dalle chiamate clienti",
    createsSubtitle:
      "Registra la chiamata. Ottieni risultati strutturati in pochi secondi. Invia il follow-up prima di passare al compito successivo.",
    summaryTitle: "Riassunto",
    summaryDesc:
      "Una panoramica strutturata della chiamata: cosa è stato discusso, cosa è stato deciso e cosa si aspetta il cliente. Condividilo con il tuo team perché tutti abbiano lo stesso contesto.",
    tasksTitle: "Compiti",
    tasksDesc:
      "Ogni impegno estratto dalla conversazione. Cosa hai promesso al cliente, cosa il cliente deve fornire e le scadenze associate.",
    followUpTitle: "Messaggio di follow-up",
    followUpDesc:
      "Un'e-mail di follow-up professionale redatta dal contenuto della chiamata. Include decisioni chiave, prossimi passi e azioni. Rivedi, modifica e invia.",
    executiveTitle: "Report esecutivo",
    executiveDesc:
      "Un report curato adatto a stakeholder e dirigenza. Feedback del cliente, stato del progetto e decisioni formattati per la revisione esecutiva.",
    speakerTitle: "Rilevamento dei parlanti per le chiamate clienti",
    speakerP1:
      "Nelle conversazioni con i clienti, sapere chi ha detto cosa non è un optional — è essenziale. Il cliente ha approvato il budget. Il tuo account manager si è impegnato su una data di consegna. Il responsabile tecnico ha segnalato una dipendenza.",
    speakerP2:
      "Sythio identifica i singoli parlanti durante tutta la chiamata. I compiti sono attribuiti alla persona che li ha assunti. Le decisioni sono collegate alla persona che le ha prese. Il messaggio di follow-up riflette chi si è impegnato per cosa.",
    speakerP3:
      "Niente più ambiguità su chi ha detto cosa. Niente più supposizioni dopo la chiamata.",
    speakerLink: "Scopri di più sul rilevamento dei parlanti",
    callAttribution: "Attribuzione della chiamata",
    clientLabel: "Cliente",
    youLabel: "Tu",
    clientQuote:
      '"Possiamo aumentare il budget del 15%. Ho bisogno del SOW rivisto entro mercoledì."',
    youQuote:
      '"Avrò il SOW rivisto per te entro mercoledì sera. Coinvolgerò anche il nostro nuovo responsabile design."',
    extractedTasks: "Compiti estratti",
    taskYou1: "Tu: Inviare SOW rivisto entro mercoledì fine giornata",
    taskYou2: "Tu: Presentare il responsabile design al cliente",
    taskClient: "Cliente: Confermare l'approvazione del budget internamente",
    relatedMeetings: "Riunioni",
    relatedAudience: "Pubblico",
    relatedConsultants: "Sythio per consulenti",
    relatedSpeakerDetection: "Rilevamento dei parlanti",
    relatedFollowUp: "Messaggi di follow-up",
    ctaTitle: "Trasforma ogni chiamata cliente in prossimi passi chiari",
    ctaSubtitle:
      "Smetti di lasciare che il contesto del cliente sfugga. Lascia che Sythio trasformi le tue chiamate in risultati strutturati che costruiscono fiducia e fanno avanzare i progetti.",
  },
};

export default function ClientCallsPage() {
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
              <MagneticHover>
                <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">
                  {s("common.seeHowItWorks")}
                </Link>
              </MagneticHover>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.problemTitle}
            </TextReveal>
            <div className="mt-8 space-y-6 text-lg md:text-xl text-muted leading-relaxed">
              <p>{c.problemP1}</p>
              <p>{c.problemP2}</p>
              <p>{c.problemP3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sythio Creates */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            {c.createsTitle}
          </TextReveal>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-14">
            {c.createsSubtitle}
          </p>
          <GsapStagger stagger={0.08} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollScale>
              <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.summaryTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.summaryDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.tasksTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.tasksDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.followUpTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.followUpDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.executiveTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.executiveDesc}</p>
              </div>
            </ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* Speaker Detection for Client Calls */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.speakerTitle}
              </TextReveal>
              <div className="mt-8 space-y-5 text-lg md:text-xl text-muted leading-relaxed">
                <p>{c.speakerP1}</p>
                <p>{c.speakerP2}</p>
                <p>{c.speakerP3}</p>
              </div>
              <div className="mt-8">
                <Link href="/features/speaker-detection" className="text-base font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">
                  {c.speakerLink}
                </Link>
              </div>
            </div>
            <div className="bg-background rounded-2xl border border-border-light p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-5">{c.callAttribution}</p>
              <div className="space-y-5">
                <div className="bg-white rounded-xl border border-border-light p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="text-[10px] font-semibold text-emerald-700">C</span>
                    </div>
                    <p className="text-xs font-medium text-emerald-600">{c.clientLabel}</p>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{c.clientQuote}</p>
                </div>
                <div className="bg-white rounded-xl border border-border-light p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-[10px] font-semibold text-indigo-700">Y</span>
                    </div>
                    <p className="text-xs font-medium text-indigo-600">{c.youLabel}</p>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{c.youQuote}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-border-light">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-3">{c.extractedTasks}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded border-2 border-indigo-400 shrink-0" />
                      <p className="text-sm text-foreground">{c.taskYou1}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded border-2 border-indigo-400 shrink-0" />
                      <p className="text-sm text-foreground">{c.taskYou2}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded border-2 border-emerald-400 shrink-0" />
                      <p className="text-sm text-foreground">{c.taskClient}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal tag="h2" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">{s("common.related")}</TextReveal>
          <GsapStagger stagger={0.08} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollScale>
              <Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedMeetings}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/for/consultants" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.relatedAudience}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedConsultants}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/features/speaker-detection" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedSpeakerDetection}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/features/messages" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedFollowUp}</p>
              </Link>
            </ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-44 bg-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-50 via-violet-50 to-transparent opacity-60 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {c.ctaTitle}
          </TextReveal>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {c.ctaSubtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticHover>
              <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
                {s("common.startFree")}
              </Link>
            </MagneticHover>
            <MagneticHover>
              <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">
                {s("common.exploreProduct")}
              </Link>
            </MagneticHover>
          </div>
          <p className="mt-6 text-sm text-muted">{s("common.freePlan")}</p>
        </div>
      </section>
    </PageReveal>
  );
}
