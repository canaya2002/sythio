"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Use Cases",
    title: "AI Meeting Notes That Actually Move Work Forward",
    subtitle:
      "Meetings produce decisions, tasks, and commitments. Sythio turns every meeting recording into a structured summary, clear action items, and ready-to-send follow-ups — so nothing falls through the cracks.",
    problemTitle: "Meetings End. Then What?",
    problemP1:
      "You leave a 45-minute meeting with a vague sense of what was decided. Notes are scattered across notebooks and chat threads. Half the action items never get assigned. The follow-up email takes 20 minutes to write — if it gets written at all.",
    problemP2:
      "Two days later, someone asks what was agreed. Nobody remembers exactly. The meeting might as well not have happened.",
    problemP3:
      "The problem is not the meeting itself. It is what happens — or does not happen — after.",
    transformTitle: "How Sythio Transforms Meetings",
    step1Title: "Record or Upload",
    step1Desc:
      "Record directly in Sythio or upload an existing meeting recording. Supports any audio format, any length, any number of speakers.",
    step2Title: "Sythio Processes",
    step2Desc:
      "Speaker detection identifies who said what. The content is analyzed for decisions, commitments, tasks, and key discussion points.",
    step3Title: "Get Structured Output",
    step3Desc:
      "Choose the outputs you need — summary, tasks, action plan, follow-up message — and get them in seconds. Copy, share, or export.",
    whatYouGetTitle: "What You Get from Every Meeting",
    whatYouGetSubtitle:
      "Each meeting recording produces multiple output formats. Use one or all of them, depending on what the situation calls for.",
    summaryTitle: "Summary",
    summaryDesc:
      "A concise overview of what was discussed, what was decided, and what matters most. Skip the 45-minute replay.",
    tasksTitle: "Tasks",
    tasksDesc:
      "Every task, assignment, and commitment extracted from the conversation. Attributed to the right person when speaker detection is on.",
    actionPlanTitle: "Action Plan",
    actionPlanDesc:
      "A structured plan of next steps, organized by priority and owner. Not just what to do — what to do first.",
    followUpTitle: "Follow-up Message",
    followUpDesc:
      "A professional follow-up ready to send. Includes key decisions, assigned tasks, and next steps. No more drafting from memory.",
    speakerTitle: "Speaker Detection — Who Said What",
    speakerP1:
      "In a meeting with five people, knowing that someone volunteered for a task is only useful if you know who. Sythio identifies individual speakers throughout the recording.",
    speakerP2:
      "Tasks get attributed to the right person. Decisions are connected to who made them. When you send the follow-up, everyone knows exactly what they committed to.",
    speakerLink: "Learn more about speaker detection",
    speakerAlexQuote:
      '"I can have the budget proposal ready by Friday."',
    speakerMariaQuote:
      '"I will schedule the client demos for next week."',
    speakerJamesQuote:
      '"We should move the launch to March 15 — gives us two more weeks."',
    extractedTasks: "Extracted Tasks",
    taskAlex: "Alex: Prepare budget proposal by Friday",
    taskMaria: "Maria: Schedule client demos for next week",
    relatedVoiceNotes: "Voice Notes",
    relatedClientCalls: "Client Calls",
    relatedTaskExtraction: "Task Extraction",
    relatedSpeakerDetection: "Speaker Detection",
    ctaTitle: "Make Every Meeting Count",
    ctaSubtitle:
      "Stop spending time reconstructing what happened. Let Sythio turn your meetings into structured output that drives action.",
  },
  es: {
    label: "Casos de uso",
    title: "Notas de reuniones con IA que realmente impulsan el trabajo",
    subtitle:
      "Las reuniones producen decisiones, tareas y compromisos. Sythio convierte cada grabación de reunión en un resumen estructurado, elementos de acción claros y seguimientos listos para enviar — para que nada se pierda.",
    problemTitle: "Las reuniones terminan. ¿Y luego qué?",
    problemP1:
      "Sales de una reunión de 45 minutos con una vaga idea de lo que se decidió. Las notas están dispersas entre cuadernos e hilos de chat. La mitad de los elementos de acción nunca se asignan. El correo de seguimiento tarda 20 minutos en escribirse — si es que se escribe.",
    problemP2:
      "Dos días después, alguien pregunta qué se acordó. Nadie recuerda exactamente. La reunión podría no haber ocurrido.",
    problemP3:
      "El problema no es la reunión en sí. Es lo que sucede — o no sucede — después.",
    transformTitle: "Cómo Sythio transforma las reuniones",
    step1Title: "Graba o sube",
    step1Desc:
      "Graba directamente en Sythio o sube una grabación existente. Compatible con cualquier formato de audio, cualquier duración, cualquier número de participantes.",
    step2Title: "Sythio procesa",
    step2Desc:
      "La detección de hablantes identifica quién dijo qué. El contenido se analiza en busca de decisiones, compromisos, tareas y puntos clave de discusión.",
    step3Title: "Obtén resultados estructurados",
    step3Desc:
      "Elige los resultados que necesitas — resumen, tareas, plan de acción, mensaje de seguimiento — y obtenlos en segundos. Copia, comparte o exporta.",
    whatYouGetTitle: "Lo que obtienes de cada reunión",
    whatYouGetSubtitle:
      "Cada grabación de reunión produce múltiples formatos de salida. Usa uno o todos, dependiendo de lo que la situación requiera.",
    summaryTitle: "Resumen",
    summaryDesc:
      "Una visión concisa de lo que se discutió, lo que se decidió y lo que más importa. Evita reproducir los 45 minutos.",
    tasksTitle: "Tareas",
    tasksDesc:
      "Cada tarea, asignación y compromiso extraído de la conversación. Atribuido a la persona correcta cuando la detección de hablantes está activada.",
    actionPlanTitle: "Plan de acción",
    actionPlanDesc:
      "Un plan estructurado de próximos pasos, organizado por prioridad y responsable. No solo qué hacer — sino qué hacer primero.",
    followUpTitle: "Mensaje de seguimiento",
    followUpDesc:
      "Un seguimiento profesional listo para enviar. Incluye decisiones clave, tareas asignadas y próximos pasos. Sin más redacción de memoria.",
    speakerTitle: "Detección de hablantes — Quién dijo qué",
    speakerP1:
      "En una reunión con cinco personas, saber que alguien se ofreció para una tarea solo es útil si sabes quién. Sythio identifica a los hablantes individuales a lo largo de la grabación.",
    speakerP2:
      "Las tareas se atribuyen a la persona correcta. Las decisiones se conectan con quien las tomó. Cuando envías el seguimiento, todos saben exactamente a qué se comprometieron.",
    speakerLink: "Más información sobre la detección de hablantes",
    speakerAlexQuote:
      '"Puedo tener la propuesta de presupuesto lista para el viernes."',
    speakerMariaQuote:
      '"Programaré las demos para clientes la próxima semana."',
    speakerJamesQuote:
      '"Deberíamos mover el lanzamiento al 15 de marzo — nos da dos semanas más."',
    extractedTasks: "Tareas extraídas",
    taskAlex: "Alex: Preparar propuesta de presupuesto para el viernes",
    taskMaria: "Maria: Programar demos para clientes la próxima semana",
    relatedVoiceNotes: "Notas de voz",
    relatedClientCalls: "Llamadas con clientes",
    relatedTaskExtraction: "Extracción de tareas",
    relatedSpeakerDetection: "Detección de hablantes",
    ctaTitle: "Haz que cada reunión cuente",
    ctaSubtitle:
      "Deja de perder tiempo reconstruyendo lo que pasó. Deja que Sythio convierta tus reuniones en resultados estructurados que impulsen la acción.",
  },
  fr: {
    label: "Cas d'usage",
    title: "Des notes de réunion IA qui font vraiment avancer le travail",
    subtitle:
      "Les réunions produisent des décisions, des tâches et des engagements. Sythio transforme chaque enregistrement de réunion en un résumé structuré, des actions claires et des suivis prêts à envoyer — pour que rien ne passe entre les mailles.",
    problemTitle: "Les réunions se terminent. Et après ?",
    problemP1:
      "Vous quittez une réunion de 45 minutes avec une vague idée de ce qui a été décidé. Les notes sont éparpillées entre carnets et fils de discussion. La moitié des actions ne sont jamais assignées. L'e-mail de suivi prend 20 minutes à rédiger — s'il est rédigé.",
    problemP2:
      "Deux jours plus tard, quelqu'un demande ce qui a été convenu. Personne ne se souvient exactement. La réunion aurait aussi bien pu ne pas avoir lieu.",
    problemP3:
      "Le problème n'est pas la réunion elle-même. C'est ce qui se passe — ou ne se passe pas — après.",
    transformTitle: "Comment Sythio transforme les réunions",
    step1Title: "Enregistrez ou importez",
    step1Desc:
      "Enregistrez directement dans Sythio ou importez un enregistrement existant. Compatible avec tout format audio, toute durée, tout nombre de participants.",
    step2Title: "Sythio analyse",
    step2Desc:
      "La détection des intervenants identifie qui a dit quoi. Le contenu est analysé pour les décisions, engagements, tâches et points de discussion clés.",
    step3Title: "Obtenez un résultat structuré",
    step3Desc:
      "Choisissez les résultats dont vous avez besoin — résumé, tâches, plan d'action, message de suivi — et obtenez-les en quelques secondes. Copiez, partagez ou exportez.",
    whatYouGetTitle: "Ce que vous obtenez de chaque réunion",
    whatYouGetSubtitle:
      "Chaque enregistrement de réunion produit plusieurs formats de sortie. Utilisez-en un ou tous, selon ce que la situation exige.",
    summaryTitle: "Résumé",
    summaryDesc:
      "Un aperçu concis de ce qui a été discuté, décidé et de ce qui compte le plus. Évitez de réécouter les 45 minutes.",
    tasksTitle: "Tâches",
    tasksDesc:
      "Chaque tâche, attribution et engagement extrait de la conversation. Attribué à la bonne personne lorsque la détection des intervenants est activée.",
    actionPlanTitle: "Plan d'action",
    actionPlanDesc:
      "Un plan structuré des prochaines étapes, organisé par priorité et responsable. Pas seulement quoi faire — mais quoi faire en premier.",
    followUpTitle: "Message de suivi",
    followUpDesc:
      "Un suivi professionnel prêt à envoyer. Inclut les décisions clés, les tâches assignées et les prochaines étapes. Plus besoin de rédiger de mémoire.",
    speakerTitle: "Détection des intervenants — Qui a dit quoi",
    speakerP1:
      "Dans une réunion à cinq personnes, savoir que quelqu'un s'est porté volontaire pour une tâche n'est utile que si vous savez qui. Sythio identifie les intervenants individuels tout au long de l'enregistrement.",
    speakerP2:
      "Les tâches sont attribuées à la bonne personne. Les décisions sont liées à leur auteur. Lorsque vous envoyez le suivi, chacun sait exactement ce à quoi il s'est engagé.",
    speakerLink: "En savoir plus sur la détection des intervenants",
    speakerAlexQuote:
      '"Je peux avoir la proposition de budget prête pour vendredi."',
    speakerMariaQuote:
      '"Je vais programmer les démos clients pour la semaine prochaine."',
    speakerJamesQuote:
      '"On devrait décaler le lancement au 15 mars — ça nous donne deux semaines de plus."',
    extractedTasks: "Tâches extraites",
    taskAlex: "Alex : Préparer la proposition de budget pour vendredi",
    taskMaria: "Maria : Programmer les démos clients pour la semaine prochaine",
    relatedVoiceNotes: "Notes vocales",
    relatedClientCalls: "Appels clients",
    relatedTaskExtraction: "Extraction de tâches",
    relatedSpeakerDetection: "Détection des intervenants",
    ctaTitle: "Faites compter chaque réunion",
    ctaSubtitle:
      "Arrêtez de passer du temps à reconstruire ce qui s'est passé. Laissez Sythio transformer vos réunions en résultats structurés qui mènent à l'action.",
  },
  pt: {
    label: "Casos de uso",
    title: "Notas de reunião com IA que realmente impulsionam o trabalho",
    subtitle:
      "Reuniões produzem decisões, tarefas e compromissos. O Sythio transforma cada gravação de reunião em um resumo estruturado, itens de ação claros e acompanhamentos prontos para enviar — para que nada se perca.",
    problemTitle: "As reuniões acabam. E depois?",
    problemP1:
      "Você sai de uma reunião de 45 minutos com uma vaga noção do que foi decidido. As anotações estão espalhadas entre cadernos e conversas. Metade dos itens de ação nunca são atribuídos. O e-mail de acompanhamento leva 20 minutos para ser escrito — se for escrito.",
    problemP2:
      "Dois dias depois, alguém pergunta o que foi acordado. Ninguém lembra exatamente. A reunião poderia nem ter acontecido.",
    problemP3:
      "O problema não é a reunião em si. É o que acontece — ou não acontece — depois.",
    transformTitle: "Como o Sythio transforma reuniões",
    step1Title: "Grave ou envie",
    step1Desc:
      "Grave diretamente no Sythio ou envie uma gravação existente. Compatível com qualquer formato de áudio, qualquer duração, qualquer número de participantes.",
    step2Title: "O Sythio processa",
    step2Desc:
      "A detecção de falantes identifica quem disse o quê. O conteúdo é analisado em busca de decisões, compromissos, tarefas e pontos-chave de discussão.",
    step3Title: "Obtenha resultados estruturados",
    step3Desc:
      "Escolha os resultados que você precisa — resumo, tarefas, plano de ação, mensagem de acompanhamento — e obtenha-os em segundos. Copie, compartilhe ou exporte.",
    whatYouGetTitle: "O que você obtém de cada reunião",
    whatYouGetSubtitle:
      "Cada gravação de reunião produz múltiplos formatos de saída. Use um ou todos, dependendo do que a situação exigir.",
    summaryTitle: "Resumo",
    summaryDesc:
      "Uma visão concisa do que foi discutido, decidido e do que mais importa. Evite reproduzir os 45 minutos.",
    tasksTitle: "Tarefas",
    tasksDesc:
      "Cada tarefa, atribuição e compromisso extraído da conversa. Atribuído à pessoa certa quando a detecção de falantes está ativada.",
    actionPlanTitle: "Plano de ação",
    actionPlanDesc:
      "Um plano estruturado dos próximos passos, organizado por prioridade e responsável. Não apenas o que fazer — mas o que fazer primeiro.",
    followUpTitle: "Mensagem de acompanhamento",
    followUpDesc:
      "Um acompanhamento profissional pronto para enviar. Inclui decisões-chave, tarefas atribuídas e próximos passos. Sem mais redação de memória.",
    speakerTitle: "Detecção de falantes — Quem disse o quê",
    speakerP1:
      "Em uma reunião com cinco pessoas, saber que alguém se voluntariou para uma tarefa só é útil se você souber quem. O Sythio identifica falantes individuais ao longo da gravação.",
    speakerP2:
      "As tarefas são atribuídas à pessoa certa. As decisões são conectadas a quem as tomou. Quando você envia o acompanhamento, todos sabem exatamente com o que se comprometeram.",
    speakerLink: "Saiba mais sobre a detecção de falantes",
    speakerAlexQuote:
      '"Posso ter a proposta de orçamento pronta até sexta-feira."',
    speakerMariaQuote:
      '"Vou agendar as demos para clientes na próxima semana."',
    speakerJamesQuote:
      '"Devemos mover o lançamento para 15 de março — nos dá mais duas semanas."',
    extractedTasks: "Tarefas extraídas",
    taskAlex: "Alex: Preparar proposta de orçamento até sexta-feira",
    taskMaria: "Maria: Agendar demos para clientes na próxima semana",
    relatedVoiceNotes: "Notas de voz",
    relatedClientCalls: "Chamadas com clientes",
    relatedTaskExtraction: "Extração de tarefas",
    relatedSpeakerDetection: "Detecção de falantes",
    ctaTitle: "Faça cada reunião valer",
    ctaSubtitle:
      "Pare de gastar tempo reconstruindo o que aconteceu. Deixe o Sythio transformar suas reuniões em resultados estruturados que impulsionam a ação.",
  },
  it: {
    label: "Casi d'uso",
    title: "Note di riunione con IA che fanno davvero progredire il lavoro",
    subtitle:
      "Le riunioni producono decisioni, compiti e impegni. Sythio trasforma ogni registrazione di riunione in un riassunto strutturato, elementi d'azione chiari e follow-up pronti da inviare — perché nulla vada perso.",
    problemTitle: "Le riunioni finiscono. E poi?",
    problemP1:
      "Esci da una riunione di 45 minuti con una vaga idea di cosa è stato deciso. Gli appunti sono sparsi tra taccuini e thread di chat. Metà degli elementi d'azione non vengono mai assegnati. L'e-mail di follow-up richiede 20 minuti per essere scritta — se viene scritta.",
    problemP2:
      "Due giorni dopo, qualcuno chiede cosa è stato concordato. Nessuno ricorda esattamente. La riunione potrebbe non essere mai avvenuta.",
    problemP3:
      "Il problema non è la riunione in sé. È ciò che succede — o non succede — dopo.",
    transformTitle: "Come Sythio trasforma le riunioni",
    step1Title: "Registra o carica",
    step1Desc:
      "Registra direttamente in Sythio o carica una registrazione esistente. Supporta qualsiasi formato audio, qualsiasi durata, qualsiasi numero di partecipanti.",
    step2Title: "Sythio elabora",
    step2Desc:
      "Il rilevamento dei parlanti identifica chi ha detto cosa. Il contenuto viene analizzato per decisioni, impegni, compiti e punti chiave di discussione.",
    step3Title: "Ottieni risultati strutturati",
    step3Desc:
      "Scegli i risultati di cui hai bisogno — riassunto, compiti, piano d'azione, messaggio di follow-up — e ottienili in pochi secondi. Copia, condividi o esporta.",
    whatYouGetTitle: "Cosa ottieni da ogni riunione",
    whatYouGetSubtitle:
      "Ogni registrazione di riunione produce più formati di output. Usane uno o tutti, a seconda di ciò che la situazione richiede.",
    summaryTitle: "Riassunto",
    summaryDesc:
      "Una panoramica concisa di ciò che è stato discusso, deciso e di ciò che conta di più. Evita di riascoltare i 45 minuti.",
    tasksTitle: "Compiti",
    tasksDesc:
      "Ogni compito, assegnazione e impegno estratto dalla conversazione. Attribuito alla persona giusta quando il rilevamento dei parlanti è attivo.",
    actionPlanTitle: "Piano d'azione",
    actionPlanDesc:
      "Un piano strutturato dei prossimi passi, organizzato per priorità e responsabile. Non solo cosa fare — ma cosa fare prima.",
    followUpTitle: "Messaggio di follow-up",
    followUpDesc:
      "Un follow-up professionale pronto da inviare. Include decisioni chiave, compiti assegnati e prossimi passi. Niente più redazione a memoria.",
    speakerTitle: "Rilevamento dei parlanti — Chi ha detto cosa",
    speakerP1:
      "In una riunione con cinque persone, sapere che qualcuno si è offerto per un compito è utile solo se sai chi. Sythio identifica i singoli parlanti durante tutta la registrazione.",
    speakerP2:
      "I compiti vengono attribuiti alla persona giusta. Le decisioni sono collegate a chi le ha prese. Quando invii il follow-up, tutti sanno esattamente a cosa si sono impegnati.",
    speakerLink: "Scopri di più sul rilevamento dei parlanti",
    speakerAlexQuote:
      '"Posso avere la proposta di budget pronta per venerdì."',
    speakerMariaQuote:
      '"Programmerò le demo per i clienti la prossima settimana."',
    speakerJamesQuote:
      '"Dovremmo spostare il lancio al 15 marzo — ci dà due settimane in più."',
    extractedTasks: "Compiti estratti",
    taskAlex: "Alex: Preparare la proposta di budget entro venerdì",
    taskMaria: "Maria: Programmare le demo clienti per la prossima settimana",
    relatedVoiceNotes: "Note vocali",
    relatedClientCalls: "Chiamate clienti",
    relatedTaskExtraction: "Estrazione compiti",
    relatedSpeakerDetection: "Rilevamento dei parlanti",
    ctaTitle: "Fai contare ogni riunione",
    ctaSubtitle:
      "Smetti di perdere tempo a ricostruire ciò che è successo. Lascia che Sythio trasformi le tue riunioni in risultati strutturati che guidano l'azione.",
  },
};

export default function MeetingsPage() {
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

      {/* How Sythio Transforms Meetings */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-16">
            {c.transformTitle}
          </TextReveal>
          <GsapStagger stagger={0.08} className="grid md:grid-cols-3 gap-8">
            <ScrollScale>
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-5">
                  <span className="text-lg font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.step1Title}</h3>
                <p className="text-base text-muted leading-relaxed">{c.step1Desc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-5">
                  <span className="text-lg font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.step2Title}</h3>
                <p className="text-base text-muted leading-relaxed">{c.step2Desc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-5">
                  <span className="text-lg font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.step3Title}</h3>
                <p className="text-base text-muted leading-relaxed">{c.step3Desc}</p>
              </div>
            </ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            {c.whatYouGetTitle}
          </TextReveal>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-14">
            {c.whatYouGetSubtitle}
          </p>
          <GsapStagger stagger={0.08} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollScale>
              <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.actionPlanTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.actionPlanDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.followUpTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.followUpDesc}</p>
              </div>
            </ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* Speaker Detection */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.speakerTitle}
              </TextReveal>
              <div className="mt-8 space-y-5 text-lg md:text-xl text-muted leading-relaxed">
                <p>{c.speakerP1}</p>
                <p>{c.speakerP2}</p>
              </div>
              <div className="mt-8">
                <Link href="/features/speaker-detection" className="text-base font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">
                  {c.speakerLink}
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-semibold text-indigo-700">A</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-indigo-600 mb-1">Alex</p>
                    <p className="text-sm text-muted leading-relaxed">{c.speakerAlexQuote}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-semibold text-violet-700">M</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-violet-600 mb-1">Maria</p>
                    <p className="text-sm text-muted leading-relaxed">{c.speakerMariaQuote}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-semibold text-emerald-700">J</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-emerald-600 mb-1">James</p>
                    <p className="text-sm text-muted leading-relaxed">{c.speakerJamesQuote}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border-light">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-3">{c.extractedTasks}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded border-2 border-indigo-400 shrink-0" />
                      <p className="text-sm text-foreground">{c.taskAlex}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded border-2 border-violet-400 shrink-0" />
                      <p className="text-sm text-foreground">{c.taskMaria}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-32 md:py-44 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal tag="h2" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">{s("common.related")}</TextReveal>
          <GsapStagger stagger={0.08} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollScale>
              <Link href="/use-cases/voice-notes" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedVoiceNotes}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/use-cases/client-calls" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedClientCalls}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/features/task-extraction" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedTaskExtraction}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/features/speaker-detection" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedSpeakerDetection}</p>
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
