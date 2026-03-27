"use client";

import Link from "next/link";
import { useLanguage } from "../components/i18n/language-context";
import type { Locale } from "../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Audio to Tasks",
    title: "Convert Audio into Actionable Task Lists",
    subtitle:
      "Conversations are full of commitments that never make it into a task manager. Sythio listens, identifies every action item, and delivers a structured checklist — with owners, when speakers are detected.",
    howTitle: "From conversation to checklist",
    howSubtitle:
      "No more scanning notes after a meeting trying to remember who agreed to do what. Sythio handles extraction automatically.",
    step1Title: "Record or upload",
    step1Desc:
      "Capture your meeting, standup, or call directly in Sythio — or upload a recording you already have.",
    step2Title: "Sythio identifies commitments",
    step2Desc:
      "Speaker detection determines who said what. Natural language analysis finds every commitment, follow-up, and action item in the conversation.",
    step3Title: "Get your task list with owners",
    step3Desc:
      "A clean checklist of action items, each attributed to the person who committed to it. Ready to review, export, or drop into your workflow.",
    whatLabel: "Intelligent Extraction",
    whatTitle: "Tasks with Context",
    whatSubtitle:
      "A task without context is a task that gets ignored. Sythio extracts not just the action, but who owns it, why it matters, and what level of urgency the conversation implied.",
    feat1Title: "Speaker attribution",
    feat1Desc:
      "When multiple people are in the conversation, Sythio uses speaker detection to assign each task to the person who committed to it.",
    feat2Title: "Priority inference",
    feat2Desc:
      "Language cues like urgency, deadlines, and emphasis help Sythio surface which tasks are most time-sensitive.",
    feat3Title: "Clear ownership",
    feat3Desc:
      "Each task is tied to a specific person — no ambiguity about who is responsible for follow-through.",
    feat4Title: "Grouped by topic",
    feat4Desc:
      "Tasks are organized by the subject they relate to, making it easy to see what needs to happen across different workstreams.",
    feat5Title: "Ready to export",
    feat5Desc:
      "Copy your task list, export it, or share it directly. The format is clean enough to paste into any project management tool.",
    feat6Title: "Nothing missed",
    feat6Desc:
      "Sythio catches commitments that are easy to overlook — casual agreements, implied follow-ups, and offhand promises.",
    moreLabel: "One Recording, Many Outputs",
    moreTitle: "Beyond Tasks",
    moreSubtitle:
      "A task list is one lens on a conversation. The same recording can also produce summaries, structured action plans, follow-up messages, and more — all from a single upload.",
    more1Title: "Summaries",
    more1Desc:
      "A clear overview of the full conversation — decisions, topics, and takeaways.",
    more2Title: "Action plans",
    more2Desc:
      "Phased, structured plans with priorities, timelines, and responsible parties.",
    more3Title: "Follow-up messages",
    more3Desc:
      "Draft emails and messages based on what was discussed — ready to send.",
    more4Title: "All 9 formats",
    more4Desc:
      "Tasks, summaries, action plans, reports, clean text, study notes, ideas, and more.",
    versatileLabel: "Built for Real Workflows",
    versatileTitle: "Where It's Most Useful",
    versatileSubtitle:
      "Any conversation where people agree to do things is a conversation where tasks get lost. Sythio makes sure they don't.",
    use1Title: "Team meetings",
    use1Desc:
      "Standups, retrospectives, planning sessions — every commitment captured and attributed to the right person.",
    use2Title: "Daily standups",
    use2Desc:
      "Short meetings move fast. Sythio catches the commitments so your team can stay focused on the conversation, not note-taking.",
    use3Title: "Client calls",
    use3Desc:
      "Deliverables, feedback, next steps — everything the client mentioned is extracted and organized for follow-through.",
    use4Title: "One-on-ones",
    use4Desc:
      "Manager check-ins and coaching sessions produce personal action items that are easy to forget. Sythio remembers.",
    use5Title: "Project reviews",
    use5Desc:
      "Long review sessions generate dozens of follow-ups. Get a complete, organized list without rewatching the recording.",
    use6Title: "Sales calls",
    use6Desc:
      "Capture prospect requirements, agreed next steps, and internal follow-ups — all in one clean task list.",
    outcome: "Outcome",
    rel1Name: "Task Extraction",
    rel2Name: "Audio to Summary",
    rel3Name: "Audio to Action Plan",
    rel4Name: "Meetings",
    ctaTitle: "Never lose a commitment again.",
    ctaSubtitle:
      "Every conversation becomes a clear task list — attributed, organized, and ready to act on.",
  },
  es: {
    label: "Audio a Tareas",
    title: "Convierte audio en listas de tareas accionables",
    subtitle:
      "Las conversaciones estan llenas de compromisos que nunca llegan a un gestor de tareas. Sythio escucha, identifica cada elemento de accion y entrega una lista estructurada — con responsables, cuando se detectan hablantes.",
    howTitle: "De conversacion a lista de verificacion",
    howSubtitle:
      "No mas revisar notas despues de una reunion intentando recordar quien se comprometio a que. Sythio maneja la extraccion automaticamente.",
    step1Title: "Graba o sube",
    step1Desc:
      "Captura tu reunion, standup o llamada directamente en Sythio — o sube una grabacion que ya tengas.",
    step2Title: "Sythio identifica compromisos",
    step2Desc:
      "La deteccion de hablantes determina quien dijo que. El analisis de lenguaje natural encuentra cada compromiso, seguimiento y elemento de accion en la conversacion.",
    step3Title: "Obtiene tu lista de tareas con responsables",
    step3Desc:
      "Una lista limpia de elementos de accion, cada uno atribuido a la persona que se comprometio. Lista para revisar, exportar o integrar en tu flujo de trabajo.",
    whatLabel: "Extraccion inteligente",
    whatTitle: "Tareas con contexto",
    whatSubtitle:
      "Una tarea sin contexto es una tarea que se ignora. Sythio extrae no solo la accion, sino quien es responsable, por que importa y que nivel de urgencia implico la conversacion.",
    feat1Title: "Atribucion por hablante",
    feat1Desc:
      "Cuando hay multiples personas en la conversacion, Sythio usa la deteccion de hablantes para asignar cada tarea a la persona que se comprometio.",
    feat2Title: "Inferencia de prioridad",
    feat2Desc:
      "Senales del lenguaje como urgencia, plazos y enfasis ayudan a Sythio a identificar que tareas son mas sensibles al tiempo.",
    feat3Title: "Responsabilidad clara",
    feat3Desc:
      "Cada tarea esta vinculada a una persona especifica — sin ambiguedad sobre quien es responsable del seguimiento.",
    feat4Title: "Agrupadas por tema",
    feat4Desc:
      "Las tareas se organizan por el tema al que se relacionan, facilitando ver que necesita suceder en diferentes areas de trabajo.",
    feat5Title: "Listas para exportar",
    feat5Desc:
      "Copia tu lista de tareas, exportala o compartela directamente. El formato es lo suficientemente limpio para pegar en cualquier herramienta de gestion de proyectos.",
    feat6Title: "Nada se pierde",
    feat6Desc:
      "Sythio captura compromisos que son faciles de pasar por alto — acuerdos casuales, seguimientos implicitos y promesas al paso.",
    moreLabel: "Una grabacion, muchos resultados",
    moreTitle: "Mas alla de las tareas",
    moreSubtitle:
      "Una lista de tareas es una perspectiva de una conversacion. La misma grabacion tambien puede producir resumenes, planes de accion estructurados, mensajes de seguimiento y mas — todo desde una sola carga.",
    more1Title: "Resumenes",
    more1Desc:
      "Una vision clara de toda la conversacion — decisiones, temas y conclusiones.",
    more2Title: "Planes de accion",
    more2Desc:
      "Planes estructurados y por fases con prioridades, cronogramas y responsables.",
    more3Title: "Mensajes de seguimiento",
    more3Desc:
      "Borradores de correos y mensajes basados en lo que se discutio — listos para enviar.",
    more4Title: "Los 9 formatos",
    more4Desc:
      "Tareas, resumenes, planes de accion, informes, texto limpio, notas de estudio, ideas y mas.",
    versatileLabel: "Disenado para flujos de trabajo reales",
    versatileTitle: "Donde es mas util",
    versatileSubtitle:
      "Cualquier conversacion donde la gente se compromete a hacer cosas es una conversacion donde las tareas se pierden. Sythio se asegura de que no.",
    use1Title: "Reuniones de equipo",
    use1Desc:
      "Standups, retrospectivas, sesiones de planificacion — cada compromiso capturado y atribuido a la persona correcta.",
    use2Title: "Standups diarios",
    use2Desc:
      "Las reuniones cortas van rapido. Sythio captura los compromisos para que tu equipo pueda enfocarse en la conversacion, no en tomar notas.",
    use3Title: "Llamadas con clientes",
    use3Desc:
      "Entregables, retroalimentacion, proximos pasos — todo lo que el cliente menciono se extrae y organiza para seguimiento.",
    use4Title: "Reuniones uno a uno",
    use4Desc:
      "Los check-ins con gerentes y sesiones de coaching producen elementos de accion personales que son faciles de olvidar. Sythio recuerda.",
    use5Title: "Revisiones de proyecto",
    use5Desc:
      "Las sesiones largas de revision generan docenas de seguimientos. Obtiene una lista completa y organizada sin volver a ver la grabacion.",
    use6Title: "Llamadas de ventas",
    use6Desc:
      "Captura requisitos del prospecto, proximos pasos acordados y seguimientos internos — todo en una lista de tareas limpia.",
    outcome: "Resultado",
    rel1Name: "Extraccion de Tareas",
    rel2Name: "Audio a Resumen",
    rel3Name: "Audio a Plan de Accion",
    rel4Name: "Reuniones",
    ctaTitle: "Nunca pierdas un compromiso de nuevo.",
    ctaSubtitle:
      "Cada conversacion se convierte en una lista de tareas clara — atribuida, organizada y lista para actuar.",
  },
  fr: {
    label: "Audio en Taches",
    title: "Convertissez l'audio en listes de taches actionnables",
    subtitle:
      "Les conversations sont pleines d'engagements qui n'arrivent jamais dans un gestionnaire de taches. Sythio ecoute, identifie chaque element d'action et fournit une liste structuree — avec les responsables, quand les locuteurs sont detectes.",
    howTitle: "De la conversation a la liste de taches",
    howSubtitle:
      "Plus besoin de parcourir vos notes apres une reunion en essayant de vous rappeler qui s'est engage a quoi. Sythio gere l'extraction automatiquement.",
    step1Title: "Enregistrez ou telechargez",
    step1Desc:
      "Capturez votre reunion, standup ou appel directement dans Sythio — ou telechargez un enregistrement existant.",
    step2Title: "Sythio identifie les engagements",
    step2Desc:
      "La detection des locuteurs determine qui a dit quoi. L'analyse du langage naturel trouve chaque engagement, suivi et element d'action dans la conversation.",
    step3Title: "Obtenez votre liste de taches avec responsables",
    step3Desc:
      "Une liste propre d'elements d'action, chacun attribue a la personne qui s'y est engagee. Prete a etre revue, exportee ou integree a votre flux de travail.",
    whatLabel: "Extraction intelligente",
    whatTitle: "Des taches avec contexte",
    whatSubtitle:
      "Une tache sans contexte est une tache qui est ignoree. Sythio extrait non seulement l'action, mais qui en est responsable, pourquoi c'est important et quel niveau d'urgence la conversation impliquait.",
    feat1Title: "Attribution par locuteur",
    feat1Desc:
      "Quand plusieurs personnes participent a la conversation, Sythio utilise la detection des locuteurs pour assigner chaque tache a la personne qui s'y est engagee.",
    feat2Title: "Inference de priorite",
    feat2Desc:
      "Les indices linguistiques comme l'urgence, les delais et l'emphase aident Sythio a identifier les taches les plus sensibles au temps.",
    feat3Title: "Responsabilite claire",
    feat3Desc:
      "Chaque tache est liee a une personne specifique — aucune ambiguite sur qui est responsable du suivi.",
    feat4Title: "Groupees par sujet",
    feat4Desc:
      "Les taches sont organisees par sujet, facilitant la vision de ce qui doit etre fait dans differents flux de travail.",
    feat5Title: "Pretes a exporter",
    feat5Desc:
      "Copiez votre liste de taches, exportez-la ou partagez-la directement. Le format est assez propre pour etre colle dans n'importe quel outil de gestion de projet.",
    feat6Title: "Rien n'est oublie",
    feat6Desc:
      "Sythio capture les engagements faciles a negliger — accords informels, suivis implicites et promesses en passant.",
    moreLabel: "Un enregistrement, plusieurs resultats",
    moreTitle: "Au-dela des taches",
    moreSubtitle:
      "Une liste de taches est un angle de vue sur une conversation. Le meme enregistrement peut aussi produire des resumes, des plans d'action structures, des messages de suivi et plus — le tout a partir d'un seul envoi.",
    more1Title: "Resumes",
    more1Desc:
      "Une vue d'ensemble claire de toute la conversation — decisions, sujets et conclusions.",
    more2Title: "Plans d'action",
    more2Desc:
      "Plans structures et phases avec priorites, calendriers et responsables.",
    more3Title: "Messages de suivi",
    more3Desc:
      "Brouillons d'emails et messages bases sur ce qui a ete discute — prets a envoyer.",
    more4Title: "Les 9 formats",
    more4Desc:
      "Taches, resumes, plans d'action, rapports, texte nettoye, notes d'etude, idees et plus.",
    versatileLabel: "Concu pour les vrais flux de travail",
    versatileTitle: "Ou c'est le plus utile",
    versatileSubtitle:
      "Toute conversation ou les gens s'engagent a faire des choses est une conversation ou des taches se perdent. Sythio s'assure que ce n'est pas le cas.",
    use1Title: "Reunions d'equipe",
    use1Desc:
      "Standups, retrospectives, sessions de planification — chaque engagement capture et attribue a la bonne personne.",
    use2Title: "Standups quotidiens",
    use2Desc:
      "Les reunions courtes vont vite. Sythio capture les engagements pour que votre equipe reste concentree sur la conversation, pas sur la prise de notes.",
    use3Title: "Appels clients",
    use3Desc:
      "Livrables, retours, prochaines etapes — tout ce que le client a mentionne est extrait et organise pour le suivi.",
    use4Title: "Tete-a-tete",
    use4Desc:
      "Les points avec les managers et les sessions de coaching produisent des elements d'action personnels faciles a oublier. Sythio se souvient.",
    use5Title: "Revues de projet",
    use5Desc:
      "Les longues sessions de revue generent des dizaines de suivis. Obtenez une liste complete et organisee sans revoir l'enregistrement.",
    use6Title: "Appels commerciaux",
    use6Desc:
      "Capturez les besoins du prospect, les prochaines etapes convenues et les suivis internes — le tout dans une liste de taches propre.",
    outcome: "Resultat",
    rel1Name: "Extraction de Taches",
    rel2Name: "Audio en Resume",
    rel3Name: "Audio en Plan d'action",
    rel4Name: "Reunions",
    ctaTitle: "Ne perdez plus jamais un engagement.",
    ctaSubtitle:
      "Chaque conversation devient une liste de taches claire — attribuee, organisee et prete a etre executee.",
  },
  pt: {
    label: "Audio para Tarefas",
    title: "Converta audio em listas de tarefas acionaveis",
    subtitle:
      "As conversas estao cheias de compromissos que nunca chegam a um gerenciador de tarefas. Sythio ouve, identifica cada item de acao e entrega uma lista estruturada — com responsaveis, quando falantes sao detectados.",
    howTitle: "Da conversa para a lista de verificacao",
    howSubtitle:
      "Chega de revisar anotacoes apos uma reuniao tentando lembrar quem concordou em fazer o que. Sythio lida com a extracao automaticamente.",
    step1Title: "Grave ou envie",
    step1Desc:
      "Capture sua reuniao, standup ou chamada diretamente no Sythio — ou envie uma gravacao que voce ja tenha.",
    step2Title: "Sythio identifica compromissos",
    step2Desc:
      "A deteccao de falantes determina quem disse o que. A analise de linguagem natural encontra cada compromisso, acompanhamento e item de acao na conversa.",
    step3Title: "Receba sua lista de tarefas com responsaveis",
    step3Desc:
      "Uma lista limpa de itens de acao, cada um atribuido a pessoa que se comprometeu. Pronta para revisar, exportar ou integrar ao seu fluxo de trabalho.",
    whatLabel: "Extracao inteligente",
    whatTitle: "Tarefas com contexto",
    whatSubtitle:
      "Uma tarefa sem contexto e uma tarefa que e ignorada. Sythio extrai nao apenas a acao, mas quem e responsavel, por que importa e que nivel de urgencia a conversa implicou.",
    feat1Title: "Atribuicao por falante",
    feat1Desc:
      "Quando varias pessoas participam da conversa, Sythio usa a deteccao de falantes para atribuir cada tarefa a pessoa que se comprometeu.",
    feat2Title: "Inferencia de prioridade",
    feat2Desc:
      "Sinais linguisticos como urgencia, prazos e enfase ajudam Sythio a identificar quais tarefas sao mais sensiveis ao tempo.",
    feat3Title: "Responsabilidade clara",
    feat3Desc:
      "Cada tarefa e vinculada a uma pessoa especifica — sem ambiguidade sobre quem e responsavel pelo acompanhamento.",
    feat4Title: "Agrupadas por tema",
    feat4Desc:
      "As tarefas sao organizadas pelo assunto ao qual se relacionam, facilitando ver o que precisa acontecer em diferentes frentes de trabalho.",
    feat5Title: "Prontas para exportar",
    feat5Desc:
      "Copie sua lista de tarefas, exporte-a ou compartilhe-a diretamente. O formato e limpo o suficiente para colar em qualquer ferramenta de gerenciamento de projetos.",
    feat6Title: "Nada e perdido",
    feat6Desc:
      "Sythio captura compromissos que sao faceis de ignorar — acordos casuais, acompanhamentos implicitos e promessas de passagem.",
    moreLabel: "Uma gravacao, muitos resultados",
    moreTitle: "Alem das tarefas",
    moreSubtitle:
      "Uma lista de tarefas e uma perspectiva de uma conversa. A mesma gravacao tambem pode produzir resumos, planos de acao estruturados, mensagens de acompanhamento e mais — tudo a partir de um unico envio.",
    more1Title: "Resumos",
    more1Desc:
      "Uma visao clara de toda a conversa — decisoes, temas e conclusoes.",
    more2Title: "Planos de acao",
    more2Desc:
      "Planos estruturados e faseados com prioridades, cronogramas e responsaveis.",
    more3Title: "Mensagens de acompanhamento",
    more3Desc:
      "Rascunhos de emails e mensagens baseados no que foi discutido — prontos para enviar.",
    more4Title: "Todos os 9 formatos",
    more4Desc:
      "Tarefas, resumos, planos de acao, relatorios, texto limpo, notas de estudo, ideias e mais.",
    versatileLabel: "Projetado para fluxos de trabalho reais",
    versatileTitle: "Onde e mais util",
    versatileSubtitle:
      "Qualquer conversa onde as pessoas se comprometem a fazer coisas e uma conversa onde tarefas se perdem. Sythio garante que isso nao aconteca.",
    use1Title: "Reunioes de equipe",
    use1Desc:
      "Standups, retrospectivas, sessoes de planejamento — cada compromisso capturado e atribuido a pessoa certa.",
    use2Title: "Standups diarios",
    use2Desc:
      "Reunioes curtas sao rapidas. Sythio captura os compromissos para que sua equipe possa focar na conversa, nao em tomar notas.",
    use3Title: "Chamadas com clientes",
    use3Desc:
      "Entregaveis, feedback, proximos passos — tudo que o cliente mencionou e extraido e organizado para acompanhamento.",
    use4Title: "Reunioes individuais",
    use4Desc:
      "Check-ins com gerentes e sessoes de coaching produzem itens de acao pessoais faceis de esquecer. Sythio lembra.",
    use5Title: "Revisoes de projeto",
    use5Desc:
      "Sessoes longas de revisao geram dezenas de acompanhamentos. Receba uma lista completa e organizada sem reassistir a gravacao.",
    use6Title: "Chamadas de vendas",
    use6Desc:
      "Capture requisitos do prospect, proximos passos acordados e acompanhamentos internos — tudo em uma lista de tarefas limpa.",
    outcome: "Resultado",
    rel1Name: "Extracao de Tarefas",
    rel2Name: "Audio para Resumo",
    rel3Name: "Audio para Plano de Acao",
    rel4Name: "Reunioes",
    ctaTitle: "Nunca perca um compromisso de novo.",
    ctaSubtitle:
      "Cada conversa se torna uma lista de tarefas clara — atribuida, organizada e pronta para agir.",
  },
  it: {
    label: "Audio in Attivita",
    title: "Converti l'audio in liste di attivita azionabili",
    subtitle:
      "Le conversazioni sono piene di impegni che non arrivano mai in un gestore di attivita. Sythio ascolta, identifica ogni elemento d'azione e fornisce una lista strutturata — con responsabili, quando i parlanti vengono rilevati.",
    howTitle: "Dalla conversazione alla checklist",
    howSubtitle:
      "Basta scorrere gli appunti dopo una riunione cercando di ricordare chi si e impegnato a fare cosa. Sythio gestisce l'estrazione automaticamente.",
    step1Title: "Registra o carica",
    step1Desc:
      "Cattura la tua riunione, standup o chiamata direttamente in Sythio — o carica una registrazione esistente.",
    step2Title: "Sythio identifica gli impegni",
    step2Desc:
      "Il rilevamento dei parlanti determina chi ha detto cosa. L'analisi del linguaggio naturale trova ogni impegno, follow-up e elemento d'azione nella conversazione.",
    step3Title: "Ottieni la tua lista di attivita con responsabili",
    step3Desc:
      "Una lista pulita di elementi d'azione, ciascuno attribuito alla persona che si e impegnata. Pronta per essere rivista, esportata o integrata nel tuo flusso di lavoro.",
    whatLabel: "Estrazione intelligente",
    whatTitle: "Attivita con contesto",
    whatSubtitle:
      "Un'attivita senza contesto e un'attivita che viene ignorata. Sythio estrae non solo l'azione, ma chi ne e responsabile, perche conta e quale livello di urgenza la conversazione ha implicato.",
    feat1Title: "Attribuzione per parlante",
    feat1Desc:
      "Quando piu persone partecipano alla conversazione, Sythio usa il rilevamento dei parlanti per assegnare ogni attivita alla persona che si e impegnata.",
    feat2Title: "Inferenza di priorita",
    feat2Desc:
      "Segnali linguistici come urgenza, scadenze e enfasi aiutano Sythio a identificare quali attivita sono piu sensibili al tempo.",
    feat3Title: "Responsabilita chiara",
    feat3Desc:
      "Ogni attivita e legata a una persona specifica — nessuna ambiguita su chi e responsabile del follow-through.",
    feat4Title: "Raggruppate per argomento",
    feat4Desc:
      "Le attivita sono organizzate per argomento, facilitando la visione di cio che deve accadere nei diversi flussi di lavoro.",
    feat5Title: "Pronte per l'esportazione",
    feat5Desc:
      "Copia la tua lista di attivita, esportala o condividila direttamente. Il formato e abbastanza pulito da essere incollato in qualsiasi strumento di gestione progetti.",
    feat6Title: "Nulla viene perso",
    feat6Desc:
      "Sythio cattura impegni facili da trascurare — accordi informali, follow-up impliciti e promesse fatte di passaggio.",
    moreLabel: "Una registrazione, molti risultati",
    moreTitle: "Oltre le attivita",
    moreSubtitle:
      "Una lista di attivita e una prospettiva su una conversazione. La stessa registrazione puo anche produrre riassunti, piani d'azione strutturati, messaggi di follow-up e altro — il tutto da un singolo caricamento.",
    more1Title: "Riassunti",
    more1Desc:
      "Una panoramica chiara dell'intera conversazione — decisioni, argomenti e conclusioni.",
    more2Title: "Piani d'azione",
    more2Desc:
      "Piani strutturati e per fasi con priorita, tempistiche e responsabili.",
    more3Title: "Messaggi di follow-up",
    more3Desc:
      "Bozze di email e messaggi basati su cio che e stato discusso — pronti per l'invio.",
    more4Title: "Tutti i 9 formati",
    more4Desc:
      "Attivita, riassunti, piani d'azione, report, testo pulito, note di studio, idee e altro.",
    versatileLabel: "Progettato per flussi di lavoro reali",
    versatileTitle: "Dove e piu utile",
    versatileSubtitle:
      "Qualsiasi conversazione in cui le persone si impegnano a fare qualcosa e una conversazione in cui le attivita si perdono. Sythio si assicura che non accada.",
    use1Title: "Riunioni di team",
    use1Desc:
      "Standup, retrospettive, sessioni di pianificazione — ogni impegno catturato e attribuito alla persona giusta.",
    use2Title: "Standup giornalieri",
    use2Desc:
      "Le riunioni brevi vanno veloci. Sythio cattura gli impegni cosi il tuo team puo restare concentrato sulla conversazione, non sugli appunti.",
    use3Title: "Chiamate con clienti",
    use3Desc:
      "Deliverable, feedback, prossimi passi — tutto cio che il cliente ha menzionato viene estratto e organizzato per il follow-up.",
    use4Title: "Incontri individuali",
    use4Desc:
      "I check-in con i manager e le sessioni di coaching producono elementi d'azione personali facili da dimenticare. Sythio ricorda.",
    use5Title: "Revisioni di progetto",
    use5Desc:
      "Le lunghe sessioni di revisione generano decine di follow-up. Ottieni una lista completa e organizzata senza rivedere la registrazione.",
    use6Title: "Chiamate commerciali",
    use6Desc:
      "Cattura i requisiti del prospect, i prossimi passi concordati e i follow-up interni — tutto in una lista di attivita pulita.",
    outcome: "Risultato",
    rel1Name: "Estrazione Attivita",
    rel2Name: "Audio in Riassunto",
    rel3Name: "Audio in Piano d'azione",
    rel4Name: "Riunioni",
    ctaTitle: "Non perdere mai piu un impegno.",
    ctaSubtitle:
      "Ogni conversazione diventa una lista di attivita chiara — attribuita, organizzata e pronta per l'azione.",
  },
};

export default function AudioToTasksPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

  return (
    <PageReveal>
      {/* ─── Hero ─── */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-animated-bg overflow-hidden">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.label}
            </p>
            <TextReveal>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                {c.title}
              </h1>
            </TextReveal>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              {c.subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <MagneticHover>
                <Link
                  href="/pricing"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  {s("common.startFree")}
                </Link>
              </MagneticHover>
              <Link
                href="/product"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
              >
                {s("common.seeHowItWorks")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            {s("common.howItWorks")}
          </p>
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.howTitle}
            </h2>
          </TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            {c.howSubtitle}
          </p>

          <GsapStagger stagger={0.08}>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
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
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── Tasks with Context ─── */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            {c.whatLabel}
          </p>
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.whatTitle}
            </h2>
          </TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            {c.whatSubtitle}
          </p>

          <GsapStagger stagger={0.08}>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: c.feat1Title, description: c.feat1Desc },
                { title: c.feat2Title, description: c.feat2Desc },
                { title: c.feat3Title, description: c.feat3Desc },
                { title: c.feat4Title, description: c.feat4Desc },
                { title: c.feat5Title, description: c.feat5Desc },
                { title: c.feat6Title, description: c.feat6Desc },
              ].map((item) => (
                <ScrollScale key={item.title}>
                  <div className="p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                    <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── Beyond Tasks ─── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.moreLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.moreTitle}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              {c.moreSubtitle}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: c.more1Title, description: c.more1Desc, href: "/audio-to-summary" },
                { title: c.more2Title, description: c.more2Desc, href: "/audio-to-action-plan" },
                { title: c.more3Title, description: c.more3Desc, href: "/features" },
                { title: c.more4Title, description: c.more4Desc, href: "/features" },
              ].map((item) => (
                <ScrollScale key={item.title}>
                  <Link
                    href={item.href}
                    className="group block p-7 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
                  >
                    <h3 className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">
                      {s("common.learnMore")} &rarr;
                    </span>
                  </Link>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── Where It's Most Useful ─── */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            {c.versatileLabel}
          </p>
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.versatileTitle}
            </h2>
          </TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            {c.versatileSubtitle}
          </p>

          <GsapStagger stagger={0.08}>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: c.use1Title, description: c.use1Desc },
                { title: c.use2Title, description: c.use2Desc },
                { title: c.use3Title, description: c.use3Desc },
                { title: c.use4Title, description: c.use4Desc },
                { title: c.use5Title, description: c.use5Desc },
                { title: c.use6Title, description: c.use6Desc },
              ].map((item) => (
                <ScrollScale key={item.title}>
                  <div className="p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                    <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── Related ─── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">
              {s("common.related")}
            </h2>
          </TextReveal>
          <GsapStagger stagger={0.08}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollScale>
                <Link
                  href="/features/task-extraction" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel1Name}</p>
                </Link>
              </ScrollScale>
              <ScrollScale>
                <Link
                  href="/audio-to-summary" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel2Name}</p>
                </Link>
              </ScrollScale>
              <ScrollScale>
                <Link
                  href="/audio-to-action-plan" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel3Name}</p>
                </Link>
              </ScrollScale>
              <ScrollScale>
                <Link
                  href="/use-cases/meetings" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel4Name}</p>
                </Link>
              </ScrollScale>
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-32 md:py-44 bg-background animated-gradient-bg overflow-hidden">
        <div className="hero-orb hero-orb-2" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.ctaTitle}
            </h2>
          </TextReveal>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {c.ctaSubtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticHover>
              <Link
                href="/pricing"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                {s("common.startFree")}
              </Link>
            </MagneticHover>
            <Link
              href="/product"
              className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
            >
              {s("common.exploreProduct")}
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">{s("common.freePlan")}</p>
        </div>
      </section>
    </PageReveal>
  );
}
