"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "For Project Managers",
    heroTitle: "Meeting Notes, Action Items & Follow-ups — Handled",
    heroDesc:
      "You spend your days in meetings, and your evenings writing recaps. Sythio transforms your meetings into structured notes, task lists, action plans, and follow-up messages — automatically. Focus on leading, not documenting.",
    challengeLabel: "The challenge",
    challengeTitle: "The Meeting Management Problem",
    challengeDesc:
      "Project managers are the connective tissue of any organization. You coordinate across teams, align stakeholders, and keep projects moving. But the administrative overhead of meeting documentation consumes hours every week — time that should be spent on actual project leadership.",
    challenge1Title: "Meeting overload",
    challenge1Desc:
      "Back-to-back meetings leave no time to process, document, or follow up. By the time you sit down to write notes, the next meeting has already started.",
    challenge2Title: "Action item gaps",
    challenge2Desc:
      "Tasks are committed to verbally in meetings, but without structured capture, they fall into the gap between conversation and project tracking tools.",
    challenge3Title: "Stakeholder updates",
    challenge3Desc:
      "Different stakeholders need different levels of detail. Writing separate updates for executives, teams, and clients from the same meeting multiplies the documentation burden.",
    outputsLabel: "Your outputs",
    outputsTitle: "What Sythio Creates for PMs",
    outputsDesc:
      "One meeting recording becomes everything you need — task lists, follow-ups, reports, and more. No manual note-taking required.",
    output1Title: "Tasks with Attribution",
    output1Desc:
      "Every action item extracted from your meetings with speaker attribution. No more guessing who committed to what — Sythio identifies the owner, the task, and the context. Ready to drop into your project management tool.",
    output2Title: "Action Plans",
    output2Desc:
      "Meetings produce decisions, but decisions need plans. Sythio creates structured action plans from your discussions — organized by priority, grouped by workstream, and ready to execute.",
    output3Title: "Follow-up Messages",
    output3Desc:
      "After every meeting, Sythio drafts a follow-up message capturing what was discussed, what was decided, and what each person owns. Review it, adjust the tone, and send — within minutes of the meeting ending.",
    output4Title: "Executive Reports",
    output4Desc:
      "Stakeholders need updates, and writing them takes time you do not have. Sythio generates executive reports from your project meetings — concise, structured, and ready to share with leadership.",
    output5Title: "Summaries",
    output5Desc:
      "Every meeting distilled to the essentials — decisions made, blockers identified, progress reported. Share with team members who could not attend, or use as your own reference before the next sync.",
    output6Title: "Key Points",
    output6Desc:
      "The critical decisions, risks, blockers, and agreements from your conversations — extracted and organized. Perfect for a quick scan before a status update or when you need to recall what was resolved.",
    scenariosLabel: "In your workflow",
    scenariosTitle: "How PMs Use Sythio",
    scenario1Title: "Daily standups and sprint planning",
    scenario1Desc:
      "Standups move fast. Sythio captures every update, blocker, and commitment from your daily syncs and sprint planning sessions. The result: a clean summary with action items, so nothing slips between one standup and the next.",
    scenario2Title: "Stakeholder and client meetings",
    scenario2Desc:
      "When you meet with stakeholders or clients, the follow-up matters as much as the meeting itself. Sythio generates a professional follow-up message, an executive report, and a task list — all from one recording.",
    scenario3Title: "Cross-functional coordination",
    scenario3Desc:
      "PMs sit at the intersection of engineering, design, marketing, and leadership. Sythio helps you capture decisions from every conversation and share structured updates with each group — without writing five different recaps.",
    scenario4Title: "Retrospectives and reviews",
    scenario4Desc:
      "Capture what went well, what did not, and what needs to change. Sythio structures the discussion into organized insights, action items for improvement, and a summary you can reference next sprint.",
    scenario5Title: "One-on-ones and feedback sessions",
    scenario5Desc:
      "Keep a clean record of career conversations, feedback, and commitments made in one-on-ones. Sythio creates a summary with action items, so both parties have a shared understanding of what was discussed.",
    speakerLabel: "Speaker intelligence",
    speakerTitle: "Know Who Owns What",
    speakerDesc:
      "In project management, accountability is everything. Sythio does not just extract tasks — it attributes them to specific speakers. When Sarah says \u201cI will have the design review done by Thursday,\u201d Sythio captures that as Sarah\u2019s task with a Thursday deadline. No ambiguity, no misattribution.",
    speakerBullet1: "Tasks attributed to specific speakers",
    speakerBullet2: "Decisions tracked with who proposed and who approved",
    speakerBullet3: "Commitments captured with deadlines when mentioned",
    speakerBullet4: "Blockers identified with the person who raised them",
    exploreTitle: "Explore More",
    relatedFounders: "For Founders",
    relatedUseCases: "Use Cases",
    relatedFeatures: "All Features",
    relatedPricing: "Pricing",
    ctaTitle1: "Spend less time documenting.",
    ctaTitle2: "Spend more time leading.",
    ctaDesc:
      "Try Sythio free and see how your next meeting becomes structured notes, action items, and a follow-up message — without you writing a single word.",
    ctaFooter:
      "Free plan includes 5 recordings per month. No credit card needed.",
  },
  es: {
    label: "Para Project Managers",
    heroTitle: "Notas de Reunión, Elementos de Acción y Seguimientos — Resueltos",
    heroDesc:
      "Pasas tus días en reuniones y tus noches escribiendo resúmenes. Sythio transforma tus reuniones en notas estructuradas, listas de tareas, planes de acción y mensajes de seguimiento — automáticamente. Concéntrate en liderar, no en documentar.",
    challengeLabel: "El desafío",
    challengeTitle: "El Problema de la Gestión de Reuniones",
    challengeDesc:
      "Los project managers son el tejido conectivo de cualquier organización. Coordinas entre equipos, alineas a los interesados y mantienes los proyectos en movimiento. Pero la carga administrativa de documentar reuniones consume horas cada semana — tiempo que debería dedicarse al liderazgo real del proyecto.",
    challenge1Title: "Sobrecarga de reuniones",
    challenge1Desc:
      "Las reuniones consecutivas no dejan tiempo para procesar, documentar o hacer seguimiento. Cuando te sientas a escribir notas, la siguiente reunión ya ha comenzado.",
    challenge2Title: "Brechas en elementos de acción",
    challenge2Desc:
      "Las tareas se comprometen verbalmente en reuniones, pero sin captura estructurada, caen en la brecha entre la conversación y las herramientas de seguimiento de proyectos.",
    challenge3Title: "Actualizaciones para interesados",
    challenge3Desc:
      "Diferentes interesados necesitan diferentes niveles de detalle. Escribir actualizaciones separadas para ejecutivos, equipos y clientes de la misma reunión multiplica la carga de documentación.",
    outputsLabel: "Tus resultados",
    outputsTitle: "Lo que Sythio Crea para PMs",
    outputsDesc:
      "Una grabación de reunión se convierte en todo lo que necesitas — listas de tareas, seguimientos, informes y más. Sin necesidad de tomar notas manualmente.",
    output1Title: "Tareas con Atribución",
    output1Desc:
      "Cada elemento de acción extraído de tus reuniones con atribución de hablante. No más adivinar quién se comprometió a qué — Sythio identifica al responsable, la tarea y el contexto. Listo para agregar a tu herramienta de gestión de proyectos.",
    output2Title: "Planes de Acción",
    output2Desc:
      "Las reuniones producen decisiones, pero las decisiones necesitan planes. Sythio crea planes de acción estructurados de tus discusiones — organizados por prioridad, agrupados por flujo de trabajo y listos para ejecutar.",
    output3Title: "Mensajes de Seguimiento",
    output3Desc:
      "Después de cada reunión, Sythio redacta un mensaje de seguimiento capturando lo que se discutió, lo que se decidió y lo que le corresponde a cada persona. Revísalo, ajusta el tono y envía — minutos después de terminar la reunión.",
    output4Title: "Informes Ejecutivos",
    output4Desc:
      "Los interesados necesitan actualizaciones y escribirlas toma tiempo que no tienes. Sythio genera informes ejecutivos de tus reuniones de proyecto — concisos, estructurados y listos para compartir con la dirección.",
    output5Title: "Resúmenes",
    output5Desc:
      "Cada reunión destilada a lo esencial — decisiones tomadas, bloqueadores identificados, progreso reportado. Comparte con miembros del equipo que no pudieron asistir o úsalo como referencia antes del próximo sync.",
    output6Title: "Puntos Clave",
    output6Desc:
      "Las decisiones críticas, riesgos, bloqueadores y acuerdos de tus conversaciones — extraídos y organizados. Perfecto para un escaneo rápido antes de una actualización de estado o cuando necesitas recordar lo que se resolvió.",
    scenariosLabel: "En tu flujo de trabajo",
    scenariosTitle: "Cómo los PMs Usan Sythio",
    scenario1Title: "Standups diarios y planificación de sprint",
    scenario1Desc:
      "Los standups van rápido. Sythio captura cada actualización, bloqueador y compromiso de tus syncs diarios y sesiones de planificación de sprint. El resultado: un resumen limpio con elementos de acción, para que nada se escape entre un standup y el siguiente.",
    scenario2Title: "Reuniones con interesados y clientes",
    scenario2Desc:
      "Cuando te reúnes con interesados o clientes, el seguimiento importa tanto como la reunión misma. Sythio genera un mensaje de seguimiento profesional, un informe ejecutivo y una lista de tareas — todo desde una grabación.",
    scenario3Title: "Coordinación multifuncional",
    scenario3Desc:
      "Los PMs están en la intersección de ingeniería, diseño, marketing y liderazgo. Sythio te ayuda a capturar decisiones de cada conversación y compartir actualizaciones estructuradas con cada grupo — sin escribir cinco resúmenes diferentes.",
    scenario4Title: "Retrospectivas y revisiones",
    scenario4Desc:
      "Captura qué salió bien, qué no y qué necesita cambiar. Sythio estructura la discusión en insights organizados, elementos de acción para mejora y un resumen que puedes referenciar en el próximo sprint.",
    scenario5Title: "One-on-ones y sesiones de feedback",
    scenario5Desc:
      "Mantén un registro limpio de conversaciones de carrera, feedback y compromisos hechos en one-on-ones. Sythio crea un resumen con elementos de acción, para que ambas partes tengan un entendimiento compartido de lo discutido.",
    speakerLabel: "Inteligencia de hablante",
    speakerTitle: "Sabe Quién es Responsable de Qué",
    speakerDesc:
      "En la gestión de proyectos, la responsabilidad es todo. Sythio no solo extrae tareas — las atribuye a hablantes específicos. Cuando Sarah dice \u201cTendré la revisión de diseño lista para el jueves\u201d, Sythio lo captura como la tarea de Sarah con fecha límite el jueves. Sin ambigüedad, sin atribución errónea.",
    speakerBullet1: "Tareas atribuidas a hablantes específicos",
    speakerBullet2: "Decisiones rastreadas con quién propuso y quién aprobó",
    speakerBullet3: "Compromisos capturados con plazos cuando se mencionan",
    speakerBullet4: "Bloqueadores identificados con la persona que los planteó",
    exploreTitle: "Explorar Más",
    relatedFounders: "Para Fundadores",
    relatedUseCases: "Casos de Uso",
    relatedFeatures: "Todas las Funciones",
    relatedPricing: "Precios",
    ctaTitle1: "Pasa menos tiempo documentando.",
    ctaTitle2: "Pasa más tiempo liderando.",
    ctaDesc:
      "Prueba Sythio gratis y mira cómo tu próxima reunión se convierte en notas estructuradas, elementos de acción y un mensaje de seguimiento — sin que escribas una sola palabra.",
    ctaFooter:
      "El plan gratuito incluye 5 grabaciones al mes. Sin tarjeta de crédito.",
  },
  fr: {
    label: "Pour Chefs de Projet",
    heroTitle: "Notes de Réunion, Actions et Suivis — Gérés",
    heroDesc:
      "Vous passez vos journées en réunion et vos soirées à écrire des récapitulatifs. Sythio transforme vos réunions en notes structurées, listes de tâches, plans d'action et messages de suivi — automatiquement. Concentrez-vous sur le leadership, pas la documentation.",
    challengeLabel: "Le défi",
    challengeTitle: "Le Problème de Gestion des Réunions",
    challengeDesc:
      "Les chefs de projet sont le tissu connectif de toute organisation. Vous coordonnez entre les équipes, alignez les parties prenantes et maintenez les projets en mouvement. Mais la charge administrative de la documentation des réunions consume des heures chaque semaine — du temps qui devrait être consacré au vrai leadership de projet.",
    challenge1Title: "Surcharge de réunions",
    challenge1Desc:
      "Les réunions consécutives ne laissent pas le temps de traiter, documenter ou faire le suivi. Quand vous vous asseyez pour écrire des notes, la réunion suivante a déjà commencé.",
    challenge2Title: "Lacunes dans les actions",
    challenge2Desc:
      "Les tâches sont engagées verbalement en réunion, mais sans capture structurée, elles tombent dans l'écart entre la conversation et les outils de suivi de projet.",
    challenge3Title: "Mises à jour des parties prenantes",
    challenge3Desc:
      "Différentes parties prenantes ont besoin de différents niveaux de détail. Écrire des mises à jour séparées pour les dirigeants, les équipes et les clients d'une même réunion multiplie la charge de documentation.",
    outputsLabel: "Vos résultats",
    outputsTitle: "Ce que Sythio Crée pour les PMs",
    outputsDesc:
      "Un enregistrement de réunion devient tout ce dont vous avez besoin — listes de tâches, suivis, rapports et plus. Pas de prise de notes manuelle nécessaire.",
    output1Title: "Tâches avec Attribution",
    output1Desc:
      "Chaque action extraite de vos réunions avec attribution de locuteur. Plus besoin de deviner qui s'est engagé à quoi — Sythio identifie le responsable, la tâche et le contexte. Prêt à intégrer dans votre outil de gestion de projet.",
    output2Title: "Plans d'Action",
    output2Desc:
      "Les réunions produisent des décisions, mais les décisions ont besoin de plans. Sythio crée des plans d'action structurés à partir de vos discussions — organisés par priorité, groupés par flux de travail et prêts à exécuter.",
    output3Title: "Messages de Suivi",
    output3Desc:
      "Après chaque réunion, Sythio rédige un message de suivi capturant ce qui a été discuté, décidé et ce que chaque personne doit faire. Révisez, ajustez le ton et envoyez — minutes après la fin de la réunion.",
    output4Title: "Rapports Exécutifs",
    output4Desc:
      "Les parties prenantes ont besoin de mises à jour et les écrire prend du temps que vous n'avez pas. Sythio génère des rapports exécutifs de vos réunions de projet — concis, structurés et prêts à partager avec la direction.",
    output5Title: "Résumés",
    output5Desc:
      "Chaque réunion distillée à l'essentiel — décisions prises, bloqueurs identifiés, progrès rapportés. Partagez avec les membres de l'équipe qui n'ont pas pu assister ou utilisez comme référence avant le prochain sync.",
    output6Title: "Points Clés",
    output6Desc:
      "Les décisions critiques, risques, bloqueurs et accords de vos conversations — extraits et organisés. Parfait pour un scan rapide avant une mise à jour de statut ou quand vous devez vous rappeler ce qui a été résolu.",
    scenariosLabel: "Dans votre workflow",
    scenariosTitle: "Comment les PMs Utilisent Sythio",
    scenario1Title: "Standups quotidiens et planification de sprint",
    scenario1Desc:
      "Les standups vont vite. Sythio capture chaque mise à jour, bloqueur et engagement de vos syncs quotidiens et sessions de planification de sprint. Le résultat : un résumé propre avec des actions, pour que rien ne glisse entre un standup et le suivant.",
    scenario2Title: "Réunions parties prenantes et clients",
    scenario2Desc:
      "Quand vous rencontrez des parties prenantes ou des clients, le suivi compte autant que la réunion elle-même. Sythio génère un message de suivi professionnel, un rapport exécutif et une liste de tâches — le tout à partir d'un enregistrement.",
    scenario3Title: "Coordination interfonctionnelle",
    scenario3Desc:
      "Les PMs sont à l'intersection de l'ingénierie, du design, du marketing et du leadership. Sythio vous aide à capturer les décisions de chaque conversation et partager des mises à jour structurées avec chaque groupe — sans écrire cinq récapitulatifs différents.",
    scenario4Title: "Rétrospectives et revues",
    scenario4Desc:
      "Capturez ce qui a bien marché, ce qui n'a pas marché et ce qui doit changer. Sythio structure la discussion en insights organisés, actions d'amélioration et un résumé référençable au prochain sprint.",
    scenario5Title: "One-on-ones et sessions de feedback",
    scenario5Desc:
      "Gardez un registre propre des conversations de carrière, du feedback et des engagements pris en one-on-one. Sythio crée un résumé avec des actions, pour que les deux parties aient une compréhension partagée de ce qui a été discuté.",
    speakerLabel: "Intelligence des locuteurs",
    speakerTitle: "Sachez Qui est Responsable de Quoi",
    speakerDesc:
      "En gestion de projet, la responsabilité est tout. Sythio ne se contente pas d'extraire les tâches — il les attribue à des locuteurs spécifiques. Quand Sarah dit \u00abJ'aurai la revue de design prête pour jeudi\u00bb, Sythio capture cela comme la tâche de Sarah avec une échéance jeudi. Pas d'ambiguïté, pas de mauvaise attribution.",
    speakerBullet1: "Tâches attribuées à des locuteurs spécifiques",
    speakerBullet2: "Décisions suivies avec qui a proposé et qui a approuvé",
    speakerBullet3: "Engagements capturés avec les échéances mentionnées",
    speakerBullet4: "Bloqueurs identifiés avec la personne qui les a soulevés",
    exploreTitle: "Explorer Plus",
    relatedFounders: "Pour Fondateurs",
    relatedUseCases: "Cas d'Utilisation",
    relatedFeatures: "Toutes les Fonctionnalités",
    relatedPricing: "Tarifs",
    ctaTitle1: "Passez moins de temps à documenter.",
    ctaTitle2: "Passez plus de temps à diriger.",
    ctaDesc:
      "Essayez Sythio gratuitement et voyez comment votre prochaine réunion devient des notes structurées, des actions et un message de suivi — sans écrire un seul mot.",
    ctaFooter:
      "Le plan gratuit inclut 5 enregistrements par mois. Sans carte bancaire.",
  },
  pt: {
    label: "Para Gerentes de Projeto",
    heroTitle: "Notas de Reunião, Itens de Ação e Follow-ups — Resolvidos",
    heroDesc:
      "Você passa seus dias em reuniões e suas noites escrevendo resumos. Sythio transforma suas reuniões em notas estruturadas, listas de tarefas, planos de ação e mensagens de follow-up — automaticamente. Foque em liderar, não em documentar.",
    challengeLabel: "O desafio",
    challengeTitle: "O Problema da Gestão de Reuniões",
    challengeDesc:
      "Gerentes de projeto são o tecido conectivo de qualquer organização. Você coordena entre equipes, alinha stakeholders e mantém projetos em movimento. Mas a carga administrativa da documentação de reuniões consome horas toda semana — tempo que deveria ser gasto em liderança real de projeto.",
    challenge1Title: "Sobrecarga de reuniões",
    challenge1Desc:
      "Reuniões consecutivas não deixam tempo para processar, documentar ou fazer follow-up. Quando você se senta para escrever notas, a próxima reunião já começou.",
    challenge2Title: "Lacunas em itens de ação",
    challenge2Desc:
      "Tarefas são comprometidas verbalmente em reuniões, mas sem captura estruturada, caem na lacuna entre a conversa e as ferramentas de acompanhamento de projetos.",
    challenge3Title: "Atualizações para stakeholders",
    challenge3Desc:
      "Diferentes stakeholders precisam de diferentes níveis de detalhe. Escrever atualizações separadas para executivos, equipes e clientes da mesma reunião multiplica a carga de documentação.",
    outputsLabel: "Seus resultados",
    outputsTitle: "O que o Sythio Cria para PMs",
    outputsDesc:
      "Uma gravação de reunião se torna tudo que você precisa — listas de tarefas, follow-ups, relatórios e mais. Sem necessidade de tomar notas manualmente.",
    output1Title: "Tarefas com Atribuição",
    output1Desc:
      "Cada item de ação extraído das suas reuniões com atribuição de falante. Não precisa mais adivinhar quem se comprometeu com o quê — Sythio identifica o responsável, a tarefa e o contexto. Pronto para adicionar à sua ferramenta de gestão de projetos.",
    output2Title: "Planos de Ação",
    output2Desc:
      "Reuniões produzem decisões, mas decisões precisam de planos. Sythio cria planos de ação estruturados das suas discussões — organizados por prioridade, agrupados por fluxo de trabalho e prontos para executar.",
    output3Title: "Mensagens de Follow-up",
    output3Desc:
      "Após cada reunião, Sythio redige uma mensagem de follow-up capturando o que foi discutido, decidido e o que cada pessoa é responsável. Revise, ajuste o tom e envie — minutos após a reunião terminar.",
    output4Title: "Relatórios Executivos",
    output4Desc:
      "Stakeholders precisam de atualizações e escrevê-las toma tempo que você não tem. Sythio gera relatórios executivos das suas reuniões de projeto — concisos, estruturados e prontos para compartilhar com a liderança.",
    output5Title: "Resumos",
    output5Desc:
      "Cada reunião destilada ao essencial — decisões tomadas, bloqueadores identificados, progresso reportado. Compartilhe com membros da equipe que não puderam participar ou use como referência antes do próximo sync.",
    output6Title: "Pontos-Chave",
    output6Desc:
      "As decisões críticas, riscos, bloqueadores e acordos das suas conversas — extraídos e organizados. Perfeito para um scan rápido antes de uma atualização de status ou quando você precisa lembrar o que foi resolvido.",
    scenariosLabel: "No seu fluxo de trabalho",
    scenariosTitle: "Como os PMs Usam o Sythio",
    scenario1Title: "Standups diários e planejamento de sprint",
    scenario1Desc:
      "Standups são rápidos. Sythio captura cada atualização, bloqueador e compromisso dos seus syncs diários e sessões de planejamento de sprint. O resultado: um resumo limpo com itens de ação, para que nada escape entre um standup e o próximo.",
    scenario2Title: "Reuniões com stakeholders e clientes",
    scenario2Desc:
      "Quando você se reúne com stakeholders ou clientes, o follow-up importa tanto quanto a reunião em si. Sythio gera uma mensagem de follow-up profissional, um relatório executivo e uma lista de tarefas — tudo de uma gravação.",
    scenario3Title: "Coordenação multifuncional",
    scenario3Desc:
      "PMs estão na intersecção de engenharia, design, marketing e liderança. Sythio ajuda você a capturar decisões de cada conversa e compartilhar atualizações estruturadas com cada grupo — sem escrever cinco resumos diferentes.",
    scenario4Title: "Retrospectivas e revisões",
    scenario4Desc:
      "Capture o que deu certo, o que não deu e o que precisa mudar. Sythio estrutura a discussão em insights organizados, itens de ação para melhoria e um resumo que você pode referenciar no próximo sprint.",
    scenario5Title: "One-on-ones e sessões de feedback",
    scenario5Desc:
      "Mantenha um registro limpo de conversas de carreira, feedback e compromissos feitos em one-on-ones. Sythio cria um resumo com itens de ação, para que ambas as partes tenham um entendimento compartilhado do que foi discutido.",
    speakerLabel: "Inteligência de falantes",
    speakerTitle: "Saiba Quem é Responsável por O quê",
    speakerDesc:
      "Na gestão de projetos, responsabilidade é tudo. Sythio não apenas extrai tarefas — as atribui a falantes específicos. Quando Sarah diz \u201cVou ter a revisão de design pronta até quinta\u201d, Sythio captura isso como a tarefa da Sarah com prazo na quinta. Sem ambiguidade, sem atribuição errada.",
    speakerBullet1: "Tarefas atribuídas a falantes específicos",
    speakerBullet2: "Decisões rastreadas com quem propôs e quem aprovou",
    speakerBullet3: "Compromissos capturados com prazos quando mencionados",
    speakerBullet4: "Bloqueadores identificados com a pessoa que os levantou",
    exploreTitle: "Explorar Mais",
    relatedFounders: "Para Fundadores",
    relatedUseCases: "Casos de Uso",
    relatedFeatures: "Todos os Recursos",
    relatedPricing: "Preços",
    ctaTitle1: "Passe menos tempo documentando.",
    ctaTitle2: "Passe mais tempo liderando.",
    ctaDesc:
      "Experimente o Sythio grátis e veja como sua próxima reunião se torna notas estruturadas, itens de ação e uma mensagem de follow-up — sem você escrever uma única palavra.",
    ctaFooter:
      "O plano gratuito inclui 5 gravações por mês. Sem cartão de crédito.",
  },
  it: {
    label: "Per Project Manager",
    heroTitle: "Note delle Riunioni, Azioni e Follow-up — Gestiti",
    heroDesc:
      "Passi le tue giornate in riunione e le sere a scrivere riepiloghi. Sythio trasforma le tue riunioni in note strutturate, liste di attività, piani d'azione e messaggi di follow-up — automaticamente. Concentrati sulla leadership, non sulla documentazione.",
    challengeLabel: "La sfida",
    challengeTitle: "Il Problema della Gestione delle Riunioni",
    challengeDesc:
      "I project manager sono il tessuto connettivo di qualsiasi organizzazione. Coordini tra team, allinei gli stakeholder e mantieni i progetti in movimento. Ma il carico amministrativo della documentazione delle riunioni consuma ore ogni settimana — tempo che dovrebbe essere dedicato alla vera leadership di progetto.",
    challenge1Title: "Sovraccarico di riunioni",
    challenge1Desc:
      "Riunioni consecutive non lasciano tempo per elaborare, documentare o fare follow-up. Quando ti siedi per scrivere note, la riunione successiva è già iniziata.",
    challenge2Title: "Lacune negli elementi d'azione",
    challenge2Desc:
      "Le attività vengono impegnate verbalmente nelle riunioni, ma senza cattura strutturata, cadono nel divario tra la conversazione e gli strumenti di tracciamento dei progetti.",
    challenge3Title: "Aggiornamenti per gli stakeholder",
    challenge3Desc:
      "Diversi stakeholder necessitano di diversi livelli di dettaglio. Scrivere aggiornamenti separati per dirigenti, team e clienti dalla stessa riunione moltiplica il carico di documentazione.",
    outputsLabel: "I tuoi risultati",
    outputsTitle: "Cosa Crea Sythio per i PM",
    outputsDesc:
      "Una registrazione di riunione diventa tutto ciò di cui hai bisogno — liste di attività, follow-up, report e altro. Nessuna presa di appunti manuale necessaria.",
    output1Title: "Attività con Attribuzione",
    output1Desc:
      "Ogni elemento d'azione estratto dalle tue riunioni con attribuzione del parlante. Non devi più indovinare chi si è impegnato per cosa — Sythio identifica il responsabile, l'attività e il contesto. Pronto per essere inserito nel tuo strumento di gestione progetti.",
    output2Title: "Piani d'Azione",
    output2Desc:
      "Le riunioni producono decisioni, ma le decisioni hanno bisogno di piani. Sythio crea piani d'azione strutturati dalle tue discussioni — organizzati per priorità, raggruppati per flusso di lavoro e pronti per l'esecuzione.",
    output3Title: "Messaggi di Follow-up",
    output3Desc:
      "Dopo ogni riunione, Sythio redige un messaggio di follow-up che cattura ciò che è stato discusso, deciso e di cosa è responsabile ogni persona. Rivedi, aggiusta il tono e invia — minuti dopo la fine della riunione.",
    output4Title: "Report Esecutivi",
    output4Desc:
      "Gli stakeholder hanno bisogno di aggiornamenti e scriverli richiede tempo che non hai. Sythio genera report esecutivi dalle tue riunioni di progetto — concisi, strutturati e pronti da condividere con la dirigenza.",
    output5Title: "Riassunti",
    output5Desc:
      "Ogni riunione distillata all'essenziale — decisioni prese, bloccanti identificati, progressi riportati. Condividi con i membri del team che non hanno potuto partecipare o usalo come riferimento prima del prossimo sync.",
    output6Title: "Punti Chiave",
    output6Desc:
      "Le decisioni critiche, i rischi, i bloccanti e gli accordi dalle tue conversazioni — estratti e organizzati. Perfetto per un rapido controllo prima di un aggiornamento di stato o quando devi ricordare cosa è stato risolto.",
    scenariosLabel: "Nel tuo workflow",
    scenariosTitle: "Come i PM Usano Sythio",
    scenario1Title: "Standup giornalieri e pianificazione sprint",
    scenario1Desc:
      "Gli standup vanno veloci. Sythio cattura ogni aggiornamento, bloccante e impegno dai tuoi sync giornalieri e sessioni di pianificazione sprint. Il risultato: un riassunto pulito con elementi d'azione, così nulla sfugge tra uno standup e il successivo.",
    scenario2Title: "Riunioni con stakeholder e clienti",
    scenario2Desc:
      "Quando incontri stakeholder o clienti, il follow-up conta quanto la riunione stessa. Sythio genera un messaggio di follow-up professionale, un report esecutivo e una lista di attività — tutto da una registrazione.",
    scenario3Title: "Coordinamento interfunzionale",
    scenario3Desc:
      "I PM sono all'intersezione di ingegneria, design, marketing e leadership. Sythio ti aiuta a catturare decisioni da ogni conversazione e condividere aggiornamenti strutturati con ogni gruppo — senza scrivere cinque riepiloghi diversi.",
    scenario4Title: "Retrospettive e revisioni",
    scenario4Desc:
      "Cattura cosa è andato bene, cosa no e cosa deve cambiare. Sythio struttura la discussione in insight organizzati, azioni di miglioramento e un riassunto che puoi consultare nel prossimo sprint.",
    scenario5Title: "One-on-one e sessioni di feedback",
    scenario5Desc:
      "Mantieni un registro pulito delle conversazioni di carriera, feedback e impegni presi nei one-on-one. Sythio crea un riassunto con elementi d'azione, così entrambe le parti hanno una comprensione condivisa di ciò che è stato discusso.",
    speakerLabel: "Intelligenza dei parlanti",
    speakerTitle: "Sai Chi è Responsabile di Cosa",
    speakerDesc:
      "Nella gestione dei progetti, la responsabilità è tutto. Sythio non si limita a estrarre attività — le attribuisce a parlanti specifici. Quando Sarah dice \u201cAvrò la revisione del design pronta per giovedì\u201d, Sythio lo cattura come attività di Sarah con scadenza giovedì. Nessuna ambiguità, nessuna attribuzione errata.",
    speakerBullet1: "Attività attribuite a parlanti specifici",
    speakerBullet2: "Decisioni tracciate con chi ha proposto e chi ha approvato",
    speakerBullet3: "Impegni catturati con scadenze quando menzionate",
    speakerBullet4: "Bloccanti identificati con la persona che li ha sollevati",
    exploreTitle: "Esplora di Più",
    relatedFounders: "Per Fondatori",
    relatedUseCases: "Casi d'Uso",
    relatedFeatures: "Tutte le Funzionalità",
    relatedPricing: "Prezzi",
    ctaTitle1: "Passa meno tempo a documentare.",
    ctaTitle2: "Passa più tempo a guidare.",
    ctaDesc:
      "Prova Sythio gratis e scopri come la tua prossima riunione diventa note strutturate, elementi d'azione e un messaggio di follow-up — senza scrivere una singola parola.",
    ctaFooter:
      "Il piano gratuito include 5 registrazioni al mese. Senza carta di credito.",
  },
};

export default function ProjectManagersPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

  const outputs = [
    {
      title: c.output1Title,
      description: c.output1Desc,
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      color: "#22c55e",
    },
    {
      title: c.output2Title,
      description: c.output2Desc,
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      color: "#8b5cf6",
    },
    {
      title: c.output3Title,
      description: c.output3Desc,
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      color: "#0ea5e9",
    },
    {
      title: c.output4Title,
      description: c.output4Desc,
      icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 01-2 2h-2z",
      color: "#f43f5e",
    },
    {
      title: c.output5Title,
      description: c.output5Desc,
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      color: "#6366f1",
    },
    {
      title: c.output6Title,
      description: c.output6Desc,
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      color: "#f59e0b",
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

  const speakerBullets = [
    c.speakerBullet1,
    c.speakerBullet2,
    c.speakerBullet3,
    c.speakerBullet4,
  ];

  const relatedLinks = [
    { label: c.relatedFounders, href: "/for/founders" },
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

      {/* The PM Problem */}
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

      {/* What Sythio Creates for PMs */}
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

      {/* How PMs Use Sythio */}
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

      {/* Speaker Detection Callout */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="p-10 md:p-14 rounded-3xl bg-foreground text-white">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">
                  {c.speakerLabel}
                </p>
                <TextReveal>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                    {c.speakerTitle}
                  </h2>
                </TextReveal>
                <p className="mt-6 text-base text-white/70 leading-relaxed">
                  {c.speakerDesc}
                </p>
                <ul className="mt-8 space-y-3">
                  {speakerBullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span className="text-sm text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-32 md:py-44 bg-white">
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
                className="group p-5 rounded-xl bg-background border border-border-light hover:border-border hover:shadow-md transition-all duration-300 text-center"
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
      <section className="py-32 md:py-44 bg-background relative overflow-hidden">
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
