"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "For Founders",
    heroTitle: "Capture Every Decision, Idea, and Next Step",
    heroDesc:
      "You are in meetings all day, thinking between them, and moving too fast to write things down. Sythio turns your conversations and voice notes into action plans, tasks, follow-ups, and structured summaries — so nothing gets lost.",
    challengeLabel: "The challenge",
    challengeTitle: "The Founder\u2019s Information Problem",
    challengeDesc:
      "Founders operate at the intersection of every function — product, sales, engineering, hiring, fundraising. Critical decisions happen in rapid succession across meetings, calls, and spontaneous conversations. The information load is immense, and the cost of losing context is real.",
    challenge1Title: "Decisions get lost",
    challenge1Desc:
      "You made an important decision in a meeting yesterday, but nobody documented it clearly. Now the team is asking what was agreed, and you are reconstructing it from memory.",
    challenge2Title: "Follow-through gaps",
    challenge2Desc:
      "Tasks and commitments are made in conversations, but without structured capture, they fall into the gap between what was said and what gets done.",
    challenge3Title: "Context evaporates",
    challenge3Desc:
      "You switch contexts a dozen times a day. The brilliant idea from your morning voice note, the nuanced feedback from an investor, the subtle concern from a client — gone by evening.",
    outputsLabel: "Your outputs",
    outputsTitle: "What Sythio Creates for Founders",
    outputsDesc:
      "One recording becomes multiple structured outputs — each designed for a different need in your day.",
    output1Title: "Action Plans",
    output1Desc:
      "Every meeting, brainstorm, and call becomes a structured action plan. Sythio identifies what needs to happen next, who is responsible, and how the work should be prioritized — so decisions translate into momentum.",
    output2Title: "Executive Reports",
    output2Desc:
      "Share what happened without writing it yourself. Sythio creates polished executive reports from your meetings — ready to share with co-founders, investors, or advisors. The context they need, without the work of writing it.",
    output3Title: "Tasks",
    output3Desc:
      "Sythio extracts every task, commitment, and next step from your conversations — with speaker attribution. You know who committed to what, so accountability is built into every interaction.",
    output4Title: "Ideas",
    output4Desc:
      "Founders think constantly. Sythio captures and categorizes the ideas buried in your voice notes and brainstorms — so the good ones do not get lost between the moment of inspiration and your next meeting.",
    output5Title: "Follow-up Messages",
    output5Desc:
      "After a client call or investor meeting, Sythio drafts a follow-up message that captures what was discussed, what was agreed, and what comes next. Review, adjust, and send — minutes after the call ends.",
    output6Title: "Summaries",
    output6Desc:
      "Every conversation distilled to its essence. Share a two-minute read with anyone who was not in the room — or review it yourself when you need to recall what was decided last week.",
    scenariosLabel: "In your day",
    scenariosTitle: "How Founders Use Sythio",
    scenario1Title: "Team meetings",
    scenario1Desc:
      "Your standup, planning session, or all-hands becomes a structured summary with clear action items and accountability. Everyone knows what was decided and what they own — without you writing the recap.",
    scenario2Title: "Brainstorming sessions",
    scenario2Desc:
      "The best ideas come fast and unstructured. Record the brainstorm, and Sythio organizes the ideas by theme, captures the decisions, and creates an action plan from the chaos.",
    scenario3Title: "Client and investor calls",
    scenario3Desc:
      "Every promise, commitment, and next step captured and attributed. Send a professional follow-up message within minutes of the call ending — drafted by Sythio, refined by you.",
    scenario4Title: "Voice notes between meetings",
    scenario4Desc:
      "Founders context-switch constantly. When an idea strikes between meetings, record a quick voice note. Sythio captures the thought, structures it, and makes sure it is waiting for you when you have time to act.",
    scenario5Title: "Board and advisory sessions",
    scenario5Desc:
      "Capture the advice, direction, and decisions from board meetings and advisory calls. Sythio creates executive reports that document what was discussed and what was agreed — a reference you will return to.",
    exploreTitle: "Explore More",
    relatedPMs: "For Project Managers",
    relatedUseCases: "Use Cases",
    relatedFeatures: "All Features",
    relatedPricing: "Pricing",
    ctaTitle1: "Move fast without",
    ctaTitle2: "losing context",
    ctaDesc:
      "Try Sythio free and see how your meetings, brainstorms, and voice notes become structured outputs you can act on immediately.",
    ctaFooter:
      "Free plan includes 5 recordings per month. No credit card needed.",
  },
  es: {
    label: "Para Fundadores",
    heroTitle: "Captura Cada Decisión, Idea y Próximo Paso",
    heroDesc:
      "Estás en reuniones todo el día, pensando entre ellas y moviéndote demasiado rápido para escribir las cosas. Sythio convierte tus conversaciones y notas de voz en planes de acción, tareas, seguimientos y resúmenes estructurados — para que nada se pierda.",
    challengeLabel: "El desafío",
    challengeTitle: "El Problema de Información del Fundador",
    challengeDesc:
      "Los fundadores operan en la intersección de cada función — producto, ventas, ingeniería, contratación, recaudación. Las decisiones críticas ocurren en rápida sucesión entre reuniones, llamadas y conversaciones espontáneas. La carga de información es inmensa y el costo de perder contexto es real.",
    challenge1Title: "Las decisiones se pierden",
    challenge1Desc:
      "Tomaste una decisión importante en una reunión ayer, pero nadie la documentó claramente. Ahora el equipo pregunta qué se acordó y tú lo reconstruyes de memoria.",
    challenge2Title: "Brechas en el seguimiento",
    challenge2Desc:
      "Las tareas y compromisos se hacen en conversaciones, pero sin captura estructurada, caen en la brecha entre lo que se dijo y lo que se hace.",
    challenge3Title: "El contexto se evapora",
    challenge3Desc:
      "Cambias de contexto una docena de veces al día. La idea brillante de tu nota de voz matutina, el feedback matizado de un inversor, la preocupación sutil de un cliente — desaparecidos al anochecer.",
    outputsLabel: "Tus resultados",
    outputsTitle: "Lo que Sythio Crea para Fundadores",
    outputsDesc:
      "Una grabación se convierte en múltiples resultados estructurados — cada uno diseñado para una necesidad diferente en tu día.",
    output1Title: "Planes de Acción",
    output1Desc:
      "Cada reunión, lluvia de ideas y llamada se convierte en un plan de acción estructurado. Sythio identifica qué necesita suceder, quién es responsable y cómo priorizar el trabajo — para que las decisiones se traduzcan en impulso.",
    output2Title: "Informes Ejecutivos",
    output2Desc:
      "Comparte lo que pasó sin escribirlo tú mismo. Sythio crea informes ejecutivos pulidos de tus reuniones — listos para compartir con cofundadores, inversores o asesores. El contexto que necesitan, sin el trabajo de escribirlo.",
    output3Title: "Tareas",
    output3Desc:
      "Sythio extrae cada tarea, compromiso y próximo paso de tus conversaciones — con atribución de hablante. Sabes quién se comprometió a qué, así que la responsabilidad está incorporada en cada interacción.",
    output4Title: "Ideas",
    output4Desc:
      "Los fundadores piensan constantemente. Sythio captura y categoriza las ideas enterradas en tus notas de voz y lluvias de ideas — para que las buenas no se pierdan entre el momento de inspiración y tu próxima reunión.",
    output5Title: "Mensajes de Seguimiento",
    output5Desc:
      "Después de una llamada con un cliente o reunión con inversores, Sythio redacta un mensaje de seguimiento que captura lo discutido, lo acordado y lo que sigue. Revisa, ajusta y envía — minutos después de la llamada.",
    output6Title: "Resúmenes",
    output6Desc:
      "Cada conversación destilada a su esencia. Comparte una lectura de dos minutos con cualquiera que no estuvo en la sala — o revísala tú mismo cuando necesites recordar lo que se decidió la semana pasada.",
    scenariosLabel: "En tu día",
    scenariosTitle: "Cómo los Fundadores Usan Sythio",
    scenario1Title: "Reuniones de equipo",
    scenario1Desc:
      "Tu standup, sesión de planificación o all-hands se convierte en un resumen estructurado con elementos de acción claros y responsabilidad. Todos saben qué se decidió y qué les corresponde — sin que tú escribas el resumen.",
    scenario2Title: "Sesiones de lluvia de ideas",
    scenario2Desc:
      "Las mejores ideas llegan rápido y desestructuradas. Graba la lluvia de ideas y Sythio organiza las ideas por tema, captura las decisiones y crea un plan de acción del caos.",
    scenario3Title: "Llamadas con clientes e inversores",
    scenario3Desc:
      "Cada promesa, compromiso y próximo paso capturado y atribuido. Envía un mensaje de seguimiento profesional minutos después de terminar la llamada — redactado por Sythio, refinado por ti.",
    scenario4Title: "Notas de voz entre reuniones",
    scenario4Desc:
      "Los fundadores cambian de contexto constantemente. Cuando surge una idea entre reuniones, graba una nota de voz rápida. Sythio captura el pensamiento, lo estructura y se asegura de que te esté esperando cuando tengas tiempo para actuar.",
    scenario5Title: "Sesiones de junta y asesoría",
    scenario5Desc:
      "Captura los consejos, la dirección y las decisiones de reuniones de junta y llamadas de asesoría. Sythio crea informes ejecutivos que documentan lo discutido y lo acordado — una referencia a la que volverás.",
    exploreTitle: "Explorar Más",
    relatedPMs: "Para Project Managers",
    relatedUseCases: "Casos de Uso",
    relatedFeatures: "Todas las Funciones",
    relatedPricing: "Precios",
    ctaTitle1: "Muévete rápido sin",
    ctaTitle2: "perder contexto",
    ctaDesc:
      "Prueba Sythio gratis y mira cómo tus reuniones, lluvias de ideas y notas de voz se convierten en resultados estructurados sobre los que puedes actuar inmediatamente.",
    ctaFooter:
      "El plan gratuito incluye 5 grabaciones al mes. Sin tarjeta de crédito.",
  },
  fr: {
    label: "Pour Fondateurs",
    heroTitle: "Capturez Chaque Décision, Idée et Prochaine Étape",
    heroDesc:
      "Vous êtes en réunion toute la journée, vous réfléchissez entre elles et vous allez trop vite pour écrire. Sythio transforme vos conversations et notes vocales en plans d'action, tâches, suivis et résumés structurés — pour que rien ne se perde.",
    challengeLabel: "Le défi",
    challengeTitle: "Le Problème d'Information du Fondateur",
    challengeDesc:
      "Les fondateurs opèrent à l'intersection de chaque fonction — produit, ventes, ingénierie, recrutement, levée de fonds. Les décisions critiques se succèdent rapidement entre réunions, appels et conversations spontanées. La charge d'information est immense et le coût de la perte de contexte est réel.",
    challenge1Title: "Les décisions se perdent",
    challenge1Desc:
      "Vous avez pris une décision importante en réunion hier, mais personne ne l'a documentée clairement. L'équipe demande maintenant ce qui a été convenu et vous reconstruisez de mémoire.",
    challenge2Title: "Lacunes dans le suivi",
    challenge2Desc:
      "Les tâches et engagements sont pris lors de conversations, mais sans capture structurée, ils tombent dans l'écart entre ce qui a été dit et ce qui est fait.",
    challenge3Title: "Le contexte s'évapore",
    challenge3Desc:
      "Vous changez de contexte une douzaine de fois par jour. L'idée brillante de votre note vocale matinale, le retour nuancé d'un investisseur, l'inquiétude subtile d'un client — disparus le soir.",
    outputsLabel: "Vos résultats",
    outputsTitle: "Ce que Sythio Crée pour les Fondateurs",
    outputsDesc:
      "Un enregistrement devient plusieurs résultats structurés — chacun conçu pour un besoin différent de votre journée.",
    output1Title: "Plans d'Action",
    output1Desc:
      "Chaque réunion, brainstorm et appel devient un plan d'action structuré. Sythio identifie ce qui doit se passer ensuite, qui est responsable et comment prioriser le travail — pour que les décisions se traduisent en élan.",
    output2Title: "Rapports Exécutifs",
    output2Desc:
      "Partagez ce qui s'est passé sans l'écrire vous-même. Sythio crée des rapports exécutifs soignés à partir de vos réunions — prêts à partager avec cofondateurs, investisseurs ou conseillers.",
    output3Title: "Tâches",
    output3Desc:
      "Sythio extrait chaque tâche, engagement et prochaine étape de vos conversations — avec attribution de locuteur. Vous savez qui s'est engagé à quoi, la responsabilité est intégrée dans chaque interaction.",
    output4Title: "Idées",
    output4Desc:
      "Les fondateurs pensent constamment. Sythio capture et catégorise les idées enfouies dans vos notes vocales et brainstorms — pour que les bonnes ne se perdent pas entre le moment d'inspiration et votre prochaine réunion.",
    output5Title: "Messages de Suivi",
    output5Desc:
      "Après un appel client ou une réunion investisseur, Sythio rédige un message de suivi capturant ce qui a été discuté, convenu et ce qui suit. Révisez, ajustez et envoyez — minutes après la fin de l'appel.",
    output6Title: "Résumés",
    output6Desc:
      "Chaque conversation distillée à son essence. Partagez une lecture de deux minutes avec quiconque n'était pas dans la salle — ou révisez-la vous-même quand vous devez vous rappeler ce qui a été décidé la semaine dernière.",
    scenariosLabel: "Dans votre journée",
    scenariosTitle: "Comment les Fondateurs Utilisent Sythio",
    scenario1Title: "Réunions d'équipe",
    scenario1Desc:
      "Votre standup, session de planification ou all-hands devient un résumé structuré avec des actions claires et de la responsabilité. Tout le monde sait ce qui a été décidé et ce qui lui revient — sans que vous écriviez le récapitulatif.",
    scenario2Title: "Sessions de brainstorming",
    scenario2Desc:
      "Les meilleures idées arrivent vite et sans structure. Enregistrez le brainstorm et Sythio organise les idées par thème, capture les décisions et crée un plan d'action à partir du chaos.",
    scenario3Title: "Appels clients et investisseurs",
    scenario3Desc:
      "Chaque promesse, engagement et prochaine étape capturé et attribué. Envoyez un message de suivi professionnel minutes après la fin de l'appel — rédigé par Sythio, affiné par vous.",
    scenario4Title: "Notes vocales entre réunions",
    scenario4Desc:
      "Les fondateurs changent de contexte constamment. Quand une idée frappe entre les réunions, enregistrez une note vocale rapide. Sythio capture la pensée, la structure et s'assure qu'elle vous attend quand vous avez le temps d'agir.",
    scenario5Title: "Sessions de conseil et comité",
    scenario5Desc:
      "Capturez les conseils, la direction et les décisions des réunions de conseil et appels consultatifs. Sythio crée des rapports exécutifs documentant ce qui a été discuté et convenu — une référence à laquelle vous reviendrez.",
    exploreTitle: "Explorer Plus",
    relatedPMs: "Pour Chefs de Projet",
    relatedUseCases: "Cas d'Utilisation",
    relatedFeatures: "Toutes les Fonctionnalités",
    relatedPricing: "Tarifs",
    ctaTitle1: "Avancez vite sans",
    ctaTitle2: "perdre le contexte",
    ctaDesc:
      "Essayez Sythio gratuitement et voyez comment vos réunions, brainstorms et notes vocales deviennent des résultats structurés sur lesquels vous pouvez agir immédiatement.",
    ctaFooter:
      "Le plan gratuit inclut 5 enregistrements par mois. Sans carte bancaire.",
  },
  pt: {
    label: "Para Fundadores",
    heroTitle: "Capture Cada Decisão, Ideia e Próximo Passo",
    heroDesc:
      "Você está em reuniões o dia todo, pensando entre elas e se movendo rápido demais para anotar as coisas. Sythio transforma suas conversas e notas de voz em planos de ação, tarefas, follow-ups e resumos estruturados — para que nada se perca.",
    challengeLabel: "O desafio",
    challengeTitle: "O Problema de Informação do Fundador",
    challengeDesc:
      "Fundadores operam na intersecção de cada função — produto, vendas, engenharia, contratação, captação. Decisões críticas acontecem em rápida sucessão entre reuniões, ligações e conversas espontâneas. A carga de informação é imensa e o custo de perder contexto é real.",
    challenge1Title: "Decisões se perdem",
    challenge1Desc:
      "Você tomou uma decisão importante numa reunião ontem, mas ninguém a documentou claramente. Agora a equipe pergunta o que foi acordado e você está reconstruindo de memória.",
    challenge2Title: "Lacunas no acompanhamento",
    challenge2Desc:
      "Tarefas e compromissos são feitos em conversas, mas sem captura estruturada, caem na lacuna entre o que foi dito e o que é feito.",
    challenge3Title: "O contexto evapora",
    challenge3Desc:
      "Você muda de contexto uma dúzia de vezes por dia. A ideia brilhante da sua nota de voz matinal, o feedback nuançado de um investidor, a preocupação sutil de um cliente — desaparecidos à noite.",
    outputsLabel: "Seus resultados",
    outputsTitle: "O que o Sythio Cria para Fundadores",
    outputsDesc:
      "Uma gravação se torna múltiplos resultados estruturados — cada um projetado para uma necessidade diferente do seu dia.",
    output1Title: "Planos de Ação",
    output1Desc:
      "Cada reunião, brainstorm e ligação se torna um plano de ação estruturado. Sythio identifica o que precisa acontecer, quem é responsável e como priorizar o trabalho — para que decisões se traduzam em impulso.",
    output2Title: "Relatórios Executivos",
    output2Desc:
      "Compartilhe o que aconteceu sem escrever você mesmo. Sythio cria relatórios executivos polidos das suas reuniões — prontos para compartilhar com cofundadores, investidores ou conselheiros.",
    output3Title: "Tarefas",
    output3Desc:
      "Sythio extrai cada tarefa, compromisso e próximo passo das suas conversas — com atribuição de falante. Você sabe quem se comprometeu com o quê, a responsabilidade está incorporada em cada interação.",
    output4Title: "Ideias",
    output4Desc:
      "Fundadores pensam constantemente. Sythio captura e categoriza as ideias enterradas nas suas notas de voz e brainstorms — para que as boas não se percam entre o momento de inspiração e sua próxima reunião.",
    output5Title: "Mensagens de Follow-up",
    output5Desc:
      "Após uma ligação com cliente ou reunião com investidores, Sythio redige uma mensagem de follow-up capturando o que foi discutido, acordado e o que vem a seguir. Revise, ajuste e envie — minutos após a ligação.",
    output6Title: "Resumos",
    output6Desc:
      "Cada conversa destilada à sua essência. Compartilhe uma leitura de dois minutos com qualquer um que não estava na sala — ou revise você mesmo quando precisar lembrar o que foi decidido na semana passada.",
    scenariosLabel: "No seu dia",
    scenariosTitle: "Como Fundadores Usam o Sythio",
    scenario1Title: "Reuniões de equipe",
    scenario1Desc:
      "Seu standup, sessão de planejamento ou all-hands se torna um resumo estruturado com itens de ação claros e responsabilidade. Todos sabem o que foi decidido e o que é deles — sem você escrever o resumo.",
    scenario2Title: "Sessões de brainstorming",
    scenario2Desc:
      "As melhores ideias vêm rápido e desestruturadas. Grave o brainstorm e Sythio organiza as ideias por tema, captura as decisões e cria um plano de ação a partir do caos.",
    scenario3Title: "Ligações com clientes e investidores",
    scenario3Desc:
      "Cada promessa, compromisso e próximo passo capturado e atribuído. Envie uma mensagem de follow-up profissional minutos após a ligação — redigida pelo Sythio, refinada por você.",
    scenario4Title: "Notas de voz entre reuniões",
    scenario4Desc:
      "Fundadores mudam de contexto constantemente. Quando uma ideia surge entre reuniões, grave uma nota de voz rápida. Sythio captura o pensamento, estrutura e garante que esteja esperando quando você tiver tempo para agir.",
    scenario5Title: "Sessões de conselho e assessoria",
    scenario5Desc:
      "Capture os conselhos, direção e decisões de reuniões de conselho e ligações de assessoria. Sythio cria relatórios executivos documentando o que foi discutido e acordado — uma referência à qual você voltará.",
    exploreTitle: "Explorar Mais",
    relatedPMs: "Para Gerentes de Projeto",
    relatedUseCases: "Casos de Uso",
    relatedFeatures: "Todos os Recursos",
    relatedPricing: "Preços",
    ctaTitle1: "Mova-se rápido sem",
    ctaTitle2: "perder contexto",
    ctaDesc:
      "Experimente o Sythio grátis e veja como suas reuniões, brainstorms e notas de voz se tornam resultados estruturados nos quais você pode agir imediatamente.",
    ctaFooter:
      "O plano gratuito inclui 5 gravações por mês. Sem cartão de crédito.",
  },
  it: {
    label: "Per Fondatori",
    heroTitle: "Cattura Ogni Decisione, Idea e Prossimo Passo",
    heroDesc:
      "Sei in riunione tutto il giorno, pensi tra una e l'altra e ti muovi troppo veloce per scrivere le cose. Sythio trasforma le tue conversazioni e note vocali in piani d'azione, attività, follow-up e riassunti strutturati — così nulla si perde.",
    challengeLabel: "La sfida",
    challengeTitle: "Il Problema Informativo del Fondatore",
    challengeDesc:
      "I fondatori operano all'intersezione di ogni funzione — prodotto, vendite, ingegneria, assunzioni, raccolta fondi. Le decisioni critiche avvengono in rapida successione tra riunioni, chiamate e conversazioni spontanee. Il carico informativo è immenso e il costo della perdita di contesto è reale.",
    challenge1Title: "Le decisioni si perdono",
    challenge1Desc:
      "Hai preso una decisione importante in una riunione ieri, ma nessuno l'ha documentata chiaramente. Ora il team chiede cosa è stato concordato e tu stai ricostruendo a memoria.",
    challenge2Title: "Lacune nel follow-through",
    challenge2Desc:
      "Attività e impegni vengono presi nelle conversazioni, ma senza cattura strutturata, cadono nel divario tra ciò che è stato detto e ciò che viene fatto.",
    challenge3Title: "Il contesto evapora",
    challenge3Desc:
      "Cambi contesto una dozzina di volte al giorno. L'idea brillante dalla nota vocale mattutina, il feedback sfumato di un investitore, la preoccupazione sottile di un cliente — svaniti a sera.",
    outputsLabel: "I tuoi risultati",
    outputsTitle: "Cosa Crea Sythio per i Fondatori",
    outputsDesc:
      "Una registrazione diventa molteplici risultati strutturati — ciascuno progettato per un'esigenza diversa della tua giornata.",
    output1Title: "Piani d'Azione",
    output1Desc:
      "Ogni riunione, brainstorm e chiamata diventa un piano d'azione strutturato. Sythio identifica cosa deve accadere, chi è responsabile e come dare priorità al lavoro — così le decisioni si traducono in slancio.",
    output2Title: "Report Esecutivi",
    output2Desc:
      "Condividi ciò che è successo senza scriverlo tu stesso. Sythio crea report esecutivi curati dalle tue riunioni — pronti da condividere con cofondatori, investitori o consulenti.",
    output3Title: "Attività",
    output3Desc:
      "Sythio estrae ogni attività, impegno e prossimo passo dalle tue conversazioni — con attribuzione del parlante. Sai chi si è impegnato per cosa, la responsabilità è integrata in ogni interazione.",
    output4Title: "Idee",
    output4Desc:
      "I fondatori pensano costantemente. Sythio cattura e categorizza le idee sepolte nelle tue note vocali e brainstorm — così quelle buone non si perdono tra il momento di ispirazione e la prossima riunione.",
    output5Title: "Messaggi di Follow-up",
    output5Desc:
      "Dopo una chiamata con un cliente o una riunione con investitori, Sythio redige un messaggio di follow-up che cattura ciò che è stato discusso, concordato e cosa viene dopo. Rivedi, aggiusta e invia — minuti dopo la fine della chiamata.",
    output6Title: "Riassunti",
    output6Desc:
      "Ogni conversazione distillata alla sua essenza. Condividi una lettura di due minuti con chiunque non fosse nella stanza — o rileggila tu stesso quando devi ricordare cosa è stato deciso la settimana scorsa.",
    scenariosLabel: "Nella tua giornata",
    scenariosTitle: "Come i Fondatori Usano Sythio",
    scenario1Title: "Riunioni di team",
    scenario1Desc:
      "Il tuo standup, sessione di pianificazione o all-hands diventa un riassunto strutturato con azioni chiare e responsabilità. Tutti sanno cosa è stato deciso e cosa gli spetta — senza che tu scriva il riepilogo.",
    scenario2Title: "Sessioni di brainstorming",
    scenario2Desc:
      "Le migliori idee arrivano veloci e non strutturate. Registra il brainstorm e Sythio organizza le idee per tema, cattura le decisioni e crea un piano d'azione dal caos.",
    scenario3Title: "Chiamate con clienti e investitori",
    scenario3Desc:
      "Ogni promessa, impegno e prossimo passo catturato e attribuito. Invia un messaggio di follow-up professionale minuti dopo la fine della chiamata — redatto da Sythio, rifinito da te.",
    scenario4Title: "Note vocali tra riunioni",
    scenario4Desc:
      "I fondatori cambiano contesto costantemente. Quando un'idea colpisce tra le riunioni, registra una nota vocale veloce. Sythio cattura il pensiero, lo struttura e si assicura che ti stia aspettando quando hai tempo per agire.",
    scenario5Title: "Sessioni di consiglio e consulenza",
    scenario5Desc:
      "Cattura i consigli, la direzione e le decisioni dalle riunioni del consiglio e chiamate consultive. Sythio crea report esecutivi che documentano ciò che è stato discusso e concordato — un riferimento a cui tornerai.",
    exploreTitle: "Esplora di Più",
    relatedPMs: "Per Project Manager",
    relatedUseCases: "Casi d'Uso",
    relatedFeatures: "Tutte le Funzionalità",
    relatedPricing: "Prezzi",
    ctaTitle1: "Muoviti veloce senza",
    ctaTitle2: "perdere il contesto",
    ctaDesc:
      "Prova Sythio gratis e scopri come le tue riunioni, brainstorm e note vocali diventano risultati strutturati su cui puoi agire immediatamente.",
    ctaFooter:
      "Il piano gratuito include 5 registrazioni al mese. Senza carta di credito.",
  },
};

export default function FoundersPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

  const outputs = [
    {
      title: c.output1Title,
      description: c.output1Desc,
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      color: "#8b5cf6",
    },
    {
      title: c.output2Title,
      description: c.output2Desc,
      icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 01-2 2h-2z",
      color: "#f43f5e",
    },
    {
      title: c.output3Title,
      description: c.output3Desc,
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      color: "#22c55e",
    },
    {
      title: c.output4Title,
      description: c.output4Desc,
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      color: "#f59e0b",
    },
    {
      title: c.output5Title,
      description: c.output5Desc,
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      color: "#0ea5e9",
    },
    {
      title: c.output6Title,
      description: c.output6Desc,
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      color: "#6366f1",
    },
  ];

  const scenarios = [
    { title: c.scenario1Title, description: c.scenario1Desc },
    { title: c.scenario2Title, description: c.scenario2Desc },
    { title: c.scenario3Title, description: c.scenario3Desc },
    { title: c.scenario4Title, description: c.scenario4Desc },
    { title: c.scenario5Title, description: c.scenario5Desc },
  ];

  const challenges = [
    { title: c.challenge1Title, description: c.challenge1Desc, color: "#f43f5e" },
    { title: c.challenge2Title, description: c.challenge2Desc, color: "#f59e0b" },
    { title: c.challenge3Title, description: c.challenge3Desc, color: "#6366f1" },
  ];

  const relatedLinks = [
    { label: c.relatedPMs, href: "/for/project-managers" },
    { label: c.relatedUseCases, href: "/use-cases" },
    { label: c.relatedFeatures, href: "/features" },
    { label: c.relatedPricing, href: "/pricing" },
  ];

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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.label}
            </p>
            <TextReveal>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                {c.heroTitle}
              </h1>
            </TextReveal>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              {c.heroDesc}
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

      {/* The Founder Problem */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.challengeLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.challengeTitle}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.challengeDesc}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {challenges.map((item) => (
              <ScrollScale key={item.title}>
              <div
                className="p-8 rounded-2xl bg-background border border-border-light"
              >
                <div
                  className="w-3 h-3 rounded-full mb-6"
                  style={{ background: item.color }}
                />
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
              </ScrollScale>
            ))}
          </div>
          </GsapStagger>
        </div>
      </section>

      {/* What Sythio Creates for Founders */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.outputsLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.outputsTitle}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              {c.outputsDesc}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {outputs.map((output) => (
              <ScrollScale key={output.title}>
              <div
                className="p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${output.color}10` }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={output.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={output.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {output.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {output.description}
                </p>
              </div>
              </ScrollScale>
            ))}
          </div>
          </GsapStagger>
        </div>
      </section>

      {/* How Founders Use Sythio */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.scenariosLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.scenariosTitle}
              </h2>
            </TextReveal>
          </div>

          <GsapStagger stagger={0.08}>
          <div className="space-y-6 max-w-3xl mx-auto">
            {scenarios.map((scenario) => (
              <ScrollScale key={scenario.title}>
              <div
                className="p-8 rounded-2xl bg-background border border-border-light"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {scenario.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {scenario.description}
                </p>
              </div>
              </ScrollScale>
            ))}
          </div>
          </GsapStagger>
        </div>
      </section>

      {/* Related */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {c.exploreTitle}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {relatedLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group p-5 rounded-xl bg-white border border-border-light hover:border-border hover:shadow-md transition-all duration-300 text-center"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="hero-orb hero-orb-2" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.ctaTitle1}
                <br />
                {c.ctaTitle2}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              {c.ctaDesc}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
            <p className="mt-6 text-sm text-muted-light">
              {c.ctaFooter}
            </p>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
