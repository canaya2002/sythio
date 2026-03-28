"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./i18n/language-context";

const content: Record<string, {
  transcript: {
    title: string;
    lines: { speaker: string; color: string; text: string }[];
  };
  actionPlan: {
    title: string;
    items: { owner: string; task: string; priority: string }[];
    priorityLabels: { high: string; medium: string; normal: string };
  };
  summary: {
    title: string;
    subtitle: string;
    paragraph: string;
    keyDecisionsHeading: string;
    decisions: string[];
  };
  outputModes: {
    title: string;
    labels: Record<string, string>;
  };
  message: {
    title: string;
    to: string;
    subject: string;
    subjectLine: string;
    greeting: string;
    bodyP1: string;
    bodyP2: string;
    signoff: string;
    signoffName: string;
    copyBtn: string;
    editBtn: string;
  };
  taskList: {
    title: string;
    tasks: { text: string; checked: boolean }[];
    completed: string;
  };
  studyNotes: {
    title: string;
    heading: string;
    lectureDate: string;
    notes: { title: string; body: string }[];
  };
}> = {
  en: {
    transcript: {
      title: "Transcript",
      lines: [
        { speaker: "Alex", color: "#6366f1", text: "I think we should prioritize the onboarding flow this sprint." },
        { speaker: "Maria", color: "#8b5cf6", text: "Agreed. The current drop-off rate is too high after signup." },
        { speaker: "Alex", color: "#6366f1", text: "Let's also revisit the welcome email sequence." },
        { speaker: "Maria", color: "#8b5cf6", text: "I can take the email copy. Can you handle the UI updates?" },
        { speaker: "Alex", color: "#6366f1", text: "Done. Let's sync on Thursday to review progress." },
      ],
    },
    actionPlan: {
      title: "Action Plan",
      items: [
        { owner: "Alex", task: "Redesign onboarding screens", priority: "High" },
        { owner: "Maria", task: "Rewrite welcome email sequence", priority: "High" },
        { owner: "Alex", task: "Review analytics dashboard setup", priority: "Medium" },
        { owner: "Team", task: "Sync on Thursday for progress review", priority: "Normal" },
      ],
      priorityLabels: { high: "High", medium: "Medium", normal: "Normal" },
    },
    summary: {
      title: "Executive Summary",
      subtitle: "Sprint Planning — March 20",
      paragraph: "The team agreed to focus on improving the onboarding experience this sprint. Key areas include redesigning the signup flow, optimizing the welcome email sequence, and setting up better analytics tracking for user activation.",
      keyDecisionsHeading: "Key Decisions",
      decisions: [
        "Onboarding redesign is the top priority",
        "Maria owns email copy updates",
        "Thursday sync to review early progress",
      ],
    },
    outputModes: {
      title: "Output Modes",
      labels: {
        doc: "Summary",
        list: "Key Points",
        check: "Tasks",
        zap: "Action Plan",
        text: "Clean Text",
        mail: "Message",
        book: "Study Notes",
        bulb: "Ideas",
      },
    },
    message: {
      title: "Ready-to-Send Message",
      to: "To:",
      subject: "Subject:",
      subjectLine: "Sprint Planning Recap — Action Items",
      greeting: "Hi team,",
      bodyP1: "Quick recap from today\u2019s sprint planning. We\u2019re focusing on the onboarding flow redesign this sprint. Alex is handling the UI updates, and Maria is taking on the email sequence.",
      bodyP2: "Let\u2019s plan to sync Thursday to check on early progress. Looking forward to seeing what we ship.",
      signoff: "Best,",
      signoffName: "Your name",
      copyBtn: "Copy",
      editBtn: "Edit",
    },
    taskList: {
      title: "Task List",
      tasks: [
        { text: "Redesign onboarding flow wireframes", checked: true },
        { text: "Draft welcome email sequence (3 emails)", checked: true },
        { text: "Set up conversion tracking events", checked: false },
        { text: "Review and test new signup form", checked: false },
        { text: "Prepare Thursday sync presentation", checked: false },
      ],
      completed: "2 of 5 completed",
    },
    studyNotes: {
      title: "Study Notes",
      heading: "User Onboarding Best Practices",
      lectureDate: "Lecture — March 20",
      notes: [
        { title: "Progressive Disclosure", body: "Don\u2019t overwhelm users. Show features gradually as they become relevant." },
        { title: "Activation Metrics", body: "Define the \u2018aha moment\u2019 \u2014 the first action where users see core value." },
        { title: "Friction Reduction", body: "Every field, step, or decision point is a chance for drop-off. Minimize them." },
      ],
    },
  },
  es: {
    transcript: {
      title: "Transcripci\u00f3n",
      lines: [
        { speaker: "Alex", color: "#6366f1", text: "Creo que deber\u00edamos priorizar el flujo de incorporaci\u00f3n en este sprint." },
        { speaker: "Maria", color: "#8b5cf6", text: "De acuerdo. La tasa de abandono actual tras el registro es demasiado alta." },
        { speaker: "Alex", color: "#6366f1", text: "Tambi\u00e9n revisemos la secuencia de correos de bienvenida." },
        { speaker: "Maria", color: "#8b5cf6", text: "Yo me encargo del texto de los correos. \u00bfPuedes ocuparte de las actualizaciones de la interfaz?" },
        { speaker: "Alex", color: "#6366f1", text: "Hecho. Sincronicemos el jueves para revisar el progreso." },
      ],
    },
    actionPlan: {
      title: "Plan de Acci\u00f3n",
      items: [
        { owner: "Alex", task: "Redise\u00f1ar pantallas de incorporaci\u00f3n", priority: "Alta" },
        { owner: "Maria", task: "Reescribir secuencia de correos de bienvenida", priority: "Alta" },
        { owner: "Alex", task: "Revisar configuraci\u00f3n del panel de an\u00e1lisis", priority: "Media" },
        { owner: "Equipo", task: "Sincronizaci\u00f3n el jueves para revisar progreso", priority: "Normal" },
      ],
      priorityLabels: { high: "Alta", medium: "Media", normal: "Normal" },
    },
    summary: {
      title: "Resumen Ejecutivo",
      subtitle: "Planificaci\u00f3n del Sprint \u2014 20 de marzo",
      paragraph: "El equipo acord\u00f3 centrarse en mejorar la experiencia de incorporaci\u00f3n en este sprint. Las \u00e1reas clave incluyen el redise\u00f1o del flujo de registro, la optimizaci\u00f3n de la secuencia de correos de bienvenida y la implementaci\u00f3n de un mejor seguimiento anal\u00edtico de la activaci\u00f3n de usuarios.",
      keyDecisionsHeading: "Decisiones Clave",
      decisions: [
        "El redise\u00f1o de la incorporaci\u00f3n es la prioridad principal",
        "Maria se encarga de las actualizaciones del texto de los correos",
        "Sincronizaci\u00f3n el jueves para revisar el progreso inicial",
      ],
    },
    outputModes: {
      title: "Modos de Salida",
      labels: {
        doc: "Resumen",
        list: "Puntos Clave",
        check: "Tareas",
        zap: "Plan de Acci\u00f3n",
        text: "Texto Limpio",
        mail: "Mensaje",
        book: "Apuntes",
        bulb: "Ideas",
      },
    },
    message: {
      title: "Mensaje Listo para Enviar",
      to: "Para:",
      subject: "Asunto:",
      subjectLine: "Resumen del Sprint \u2014 Acciones Pendientes",
      greeting: "Hola equipo,",
      bodyP1: "Breve resumen de la planificaci\u00f3n del sprint de hoy. Nos centraremos en el redise\u00f1o del flujo de incorporaci\u00f3n este sprint. Alex se encarga de las actualizaciones de la interfaz y Maria del texto de los correos.",
      bodyP2: "Planifiquemos una sincronizaci\u00f3n el jueves para revisar el progreso inicial. Deseando ver lo que logramos.",
      signoff: "Saludos,",
      signoffName: "Tu nombre",
      copyBtn: "Copiar",
      editBtn: "Editar",
    },
    taskList: {
      title: "Lista de Tareas",
      tasks: [
        { text: "Redise\u00f1ar wireframes del flujo de incorporaci\u00f3n", checked: true },
        { text: "Redactar secuencia de correos de bienvenida (3 correos)", checked: true },
        { text: "Configurar eventos de seguimiento de conversiones", checked: false },
        { text: "Revisar y probar el nuevo formulario de registro", checked: false },
        { text: "Preparar presentaci\u00f3n para la sincronizaci\u00f3n del jueves", checked: false },
      ],
      completed: "2 de 5 completadas",
    },
    studyNotes: {
      title: "Apuntes de Estudio",
      heading: "Mejores Pr\u00e1cticas de Incorporaci\u00f3n de Usuarios",
      lectureDate: "Clase \u2014 20 de marzo",
      notes: [
        { title: "Revelaci\u00f3n Progresiva", body: "No abrumes a los usuarios. Muestra funciones gradualmente a medida que se vuelven relevantes." },
        { title: "M\u00e9tricas de Activaci\u00f3n", body: "Define el \u2018momento aha\u2019 \u2014 la primera acci\u00f3n en la que los usuarios ven el valor principal." },
        { title: "Reducci\u00f3n de Fricci\u00f3n", body: "Cada campo, paso o punto de decisi\u00f3n es una oportunidad de abandono. Minim\u00edzalos." },
      ],
    },
  },
  fr: {
    transcript: {
      title: "Transcription",
      lines: [
        { speaker: "Alex", color: "#6366f1", text: "Je pense qu\u2019on devrait prioriser le parcours d\u2019int\u00e9gration pour ce sprint." },
        { speaker: "Maria", color: "#8b5cf6", text: "D\u2019accord. Le taux d\u2019abandon actuel apr\u00e8s l\u2019inscription est trop \u00e9lev\u00e9." },
        { speaker: "Alex", color: "#6366f1", text: "Revoyons aussi la s\u00e9quence d\u2019e-mails de bienvenue." },
        { speaker: "Maria", color: "#8b5cf6", text: "Je m\u2019occupe du texte des e-mails. Tu peux g\u00e9rer les mises \u00e0 jour de l\u2019interface ?" },
        { speaker: "Alex", color: "#6366f1", text: "C\u2019est not\u00e9. On se synchronise jeudi pour faire le point." },
      ],
    },
    actionPlan: {
      title: "Plan d\u2019Action",
      items: [
        { owner: "Alex", task: "Repenser les \u00e9crans d\u2019int\u00e9gration", priority: "\u00c9lev\u00e9e" },
        { owner: "Maria", task: "R\u00e9\u00e9crire la s\u00e9quence d\u2019e-mails de bienvenue", priority: "\u00c9lev\u00e9e" },
        { owner: "Alex", task: "V\u00e9rifier la configuration du tableau de bord analytique", priority: "Moyenne" },
        { owner: "\u00c9quipe", task: "Synchronisation jeudi pour revue de l\u2019avancement", priority: "Normale" },
      ],
      priorityLabels: { high: "\u00c9lev\u00e9e", medium: "Moyenne", normal: "Normale" },
    },
    summary: {
      title: "R\u00e9sum\u00e9 Ex\u00e9cutif",
      subtitle: "Planification du Sprint \u2014 20 mars",
      paragraph: "L\u2019\u00e9quipe a convenu de se concentrer sur l\u2019am\u00e9lioration de l\u2019exp\u00e9rience d\u2019int\u00e9gration pour ce sprint. Les axes prioritaires comprennent la refonte du parcours d\u2019inscription, l\u2019optimisation de la s\u00e9quence d\u2019e-mails de bienvenue et la mise en place d\u2019un meilleur suivi analytique de l\u2019activation des utilisateurs.",
      keyDecisionsHeading: "D\u00e9cisions Cl\u00e9s",
      decisions: [
        "La refonte de l\u2019int\u00e9gration est la priorit\u00e9 absolue",
        "Maria prend en charge la mise \u00e0 jour du texte des e-mails",
        "Synchronisation jeudi pour \u00e9valuer les premiers progr\u00e8s",
      ],
    },
    outputModes: {
      title: "Modes de Sortie",
      labels: {
        doc: "R\u00e9sum\u00e9",
        list: "Points Cl\u00e9s",
        check: "T\u00e2ches",
        zap: "Plan d\u2019Action",
        text: "Texte Brut",
        mail: "Message",
        book: "Notes d\u2019\u00c9tude",
        bulb: "Id\u00e9es",
      },
    },
    message: {
      title: "Message Pr\u00eat \u00e0 Envoyer",
      to: "\u00c0 :",
      subject: "Objet :",
      subjectLine: "R\u00e9cap du Sprint \u2014 Actions \u00e0 Suivre",
      greeting: "Bonjour \u00e0 tous,",
      bodyP1: "Bref r\u00e9cap de la planification du sprint d\u2019aujourd\u2019hui. Nous nous concentrons sur la refonte du parcours d\u2019int\u00e9gration ce sprint. Alex s\u2019occupe des mises \u00e0 jour de l\u2019interface et Maria prend en charge la s\u00e9quence d\u2019e-mails.",
      bodyP2: "Pr\u00e9voyons une synchronisation jeudi pour v\u00e9rifier les premiers avancements. H\u00e2te de voir ce que nous livrons.",
      signoff: "Cordialement,",
      signoffName: "Votre nom",
      copyBtn: "Copier",
      editBtn: "Modifier",
    },
    taskList: {
      title: "Liste des T\u00e2ches",
      tasks: [
        { text: "Repenser les maquettes du parcours d\u2019int\u00e9gration", checked: true },
        { text: "R\u00e9diger la s\u00e9quence d\u2019e-mails de bienvenue (3 e-mails)", checked: true },
        { text: "Configurer les \u00e9v\u00e9nements de suivi des conversions", checked: false },
        { text: "V\u00e9rifier et tester le nouveau formulaire d\u2019inscription", checked: false },
        { text: "Pr\u00e9parer la pr\u00e9sentation pour la synchronisation de jeudi", checked: false },
      ],
      completed: "2 sur 5 termin\u00e9es",
    },
    studyNotes: {
      title: "Notes d\u2019\u00c9tude",
      heading: "Bonnes Pratiques d\u2019Int\u00e9gration Utilisateur",
      lectureDate: "Cours \u2014 20 mars",
      notes: [
        { title: "Divulgation Progressive", body: "Ne submergez pas les utilisateurs. Montrez les fonctionnalit\u00e9s progressivement, au moment o\u00f9 elles deviennent pertinentes." },
        { title: "M\u00e9triques d\u2019Activation", body: "D\u00e9finissez le \u00ab moment eureka \u00bb \u2014 la premi\u00e8re action o\u00f9 les utilisateurs per\u00e7oivent la valeur principale." },
        { title: "R\u00e9duction des Frictions", body: "Chaque champ, \u00e9tape ou point de d\u00e9cision est une occasion d\u2019abandon. R\u00e9duisez-les au minimum." },
      ],
    },
  },
  pt: {
    transcript: {
      title: "Transcri\u00e7\u00e3o",
      lines: [
        { speaker: "Alex", color: "#6366f1", text: "Acho que dever\u00edamos priorizar o fluxo de integra\u00e7\u00e3o neste sprint." },
        { speaker: "Maria", color: "#8b5cf6", text: "Concordo. A taxa de desist\u00eancia atual ap\u00f3s o cadastro est\u00e1 muito alta." },
        { speaker: "Alex", color: "#6366f1", text: "Vamos tamb\u00e9m revisar a sequ\u00eancia de e-mails de boas-vindas." },
        { speaker: "Maria", color: "#8b5cf6", text: "Eu cuido do texto dos e-mails. Voc\u00ea pode cuidar das atualiza\u00e7\u00f5es da interface?" },
        { speaker: "Alex", color: "#6366f1", text: "Feito. Vamos sincronizar na quinta-feira para revisar o progresso." },
      ],
    },
    actionPlan: {
      title: "Plano de A\u00e7\u00e3o",
      items: [
        { owner: "Alex", task: "Redesenhar telas de integra\u00e7\u00e3o", priority: "Alta" },
        { owner: "Maria", task: "Reescrever sequ\u00eancia de e-mails de boas-vindas", priority: "Alta" },
        { owner: "Alex", task: "Revisar configura\u00e7\u00e3o do painel de an\u00e1lise", priority: "M\u00e9dia" },
        { owner: "Equipe", task: "Sincroniza\u00e7\u00e3o na quinta para revis\u00e3o de progresso", priority: "Normal" },
      ],
      priorityLabels: { high: "Alta", medium: "M\u00e9dia", normal: "Normal" },
    },
    summary: {
      title: "Resumo Executivo",
      subtitle: "Planejamento do Sprint \u2014 20 de mar\u00e7o",
      paragraph: "A equipe concordou em focar na melhoria da experi\u00eancia de integra\u00e7\u00e3o neste sprint. As \u00e1reas-chave incluem o redesenho do fluxo de cadastro, a otimiza\u00e7\u00e3o da sequ\u00eancia de e-mails de boas-vindas e a implementa\u00e7\u00e3o de um melhor rastreamento anal\u00edtico da ativa\u00e7\u00e3o de usu\u00e1rios.",
      keyDecisionsHeading: "Decis\u00f5es-Chave",
      decisions: [
        "O redesenho da integra\u00e7\u00e3o \u00e9 a prioridade principal",
        "Maria \u00e9 respons\u00e1vel pelas atualiza\u00e7\u00f5es do texto dos e-mails",
        "Sincroniza\u00e7\u00e3o na quinta para avaliar o progresso inicial",
      ],
    },
    outputModes: {
      title: "Modos de Sa\u00edda",
      labels: {
        doc: "Resumo",
        list: "Pontos-Chave",
        check: "Tarefas",
        zap: "Plano de A\u00e7\u00e3o",
        text: "Texto Limpo",
        mail: "Mensagem",
        book: "Notas de Estudo",
        bulb: "Ideias",
      },
    },
    message: {
      title: "Mensagem Pronta para Enviar",
      to: "Para:",
      subject: "Assunto:",
      subjectLine: "Resumo do Sprint \u2014 Itens de A\u00e7\u00e3o",
      greeting: "Ol\u00e1 equipe,",
      bodyP1: "Breve resumo do planejamento do sprint de hoje. Estamos focando no redesenho do fluxo de integra\u00e7\u00e3o neste sprint. Alex cuida das atualiza\u00e7\u00f5es da interface e Maria assume a sequ\u00eancia de e-mails.",
      bodyP2: "Vamos planejar uma sincroniza\u00e7\u00e3o na quinta-feira para verificar o progresso inicial. Ansiosos para ver o que entregaremos.",
      signoff: "Abraços,",
      signoffName: "Seu nome",
      copyBtn: "Copiar",
      editBtn: "Editar",
    },
    taskList: {
      title: "Lista de Tarefas",
      tasks: [
        { text: "Redesenhar wireframes do fluxo de integra\u00e7\u00e3o", checked: true },
        { text: "Redigir sequ\u00eancia de e-mails de boas-vindas (3 e-mails)", checked: true },
        { text: "Configurar eventos de rastreamento de convers\u00f5es", checked: false },
        { text: "Revisar e testar novo formul\u00e1rio de cadastro", checked: false },
        { text: "Preparar apresenta\u00e7\u00e3o para a sincroniza\u00e7\u00e3o de quinta", checked: false },
      ],
      completed: "2 de 5 conclu\u00eddas",
    },
    studyNotes: {
      title: "Notas de Estudo",
      heading: "Melhores Pr\u00e1ticas de Integra\u00e7\u00e3o de Usu\u00e1rios",
      lectureDate: "Aula \u2014 20 de mar\u00e7o",
      notes: [
        { title: "Divulga\u00e7\u00e3o Progressiva", body: "N\u00e3o sobrecarregue os usu\u00e1rios. Mostre funcionalidades gradualmente, \u00e0 medida que se tornam relevantes." },
        { title: "M\u00e9tricas de Ativa\u00e7\u00e3o", body: "Defina o \u2018momento aha\u2019 \u2014 a primeira a\u00e7\u00e3o em que os usu\u00e1rios percebem o valor principal." },
        { title: "Redu\u00e7\u00e3o de Atrito", body: "Cada campo, etapa ou ponto de decis\u00e3o \u00e9 uma chance de desist\u00eancia. Minimize-os." },
      ],
    },
  },
  it: {
    transcript: {
      title: "Trascrizione",
      lines: [
        { speaker: "Alex", color: "#6366f1", text: "Penso che dovremmo dare priorit\u00e0 al flusso di onboarding in questo sprint." },
        { speaker: "Maria", color: "#8b5cf6", text: "D\u2019accordo. Il tasso di abbandono attuale dopo la registrazione \u00e8 troppo alto." },
        { speaker: "Alex", color: "#6366f1", text: "Rivediamo anche la sequenza di e-mail di benvenuto." },
        { speaker: "Maria", color: "#8b5cf6", text: "Mi occupo io del testo delle e-mail. Puoi gestire gli aggiornamenti dell\u2019interfaccia?" },
        { speaker: "Alex", color: "#6366f1", text: "Fatto. Sincronizziamoci gioved\u00ec per verificare i progressi." },
      ],
    },
    actionPlan: {
      title: "Piano d\u2019Azione",
      items: [
        { owner: "Alex", task: "Riprogettare le schermate di onboarding", priority: "Alta" },
        { owner: "Maria", task: "Riscrivere la sequenza di e-mail di benvenuto", priority: "Alta" },
        { owner: "Alex", task: "Verificare la configurazione della dashboard analitica", priority: "Media" },
        { owner: "Team", task: "Sincronizzazione gioved\u00ec per revisione dei progressi", priority: "Normale" },
      ],
      priorityLabels: { high: "Alta", medium: "Media", normal: "Normale" },
    },
    summary: {
      title: "Riepilogo Esecutivo",
      subtitle: "Pianificazione dello Sprint \u2014 20 marzo",
      paragraph: "Il team ha concordato di concentrarsi sul miglioramento dell\u2019esperienza di onboarding in questo sprint. Le aree chiave includono la riprogettazione del flusso di registrazione, l\u2019ottimizzazione della sequenza di e-mail di benvenuto e l\u2019implementazione di un migliore tracciamento analitico dell\u2019attivazione degli utenti.",
      keyDecisionsHeading: "Decisioni Chiave",
      decisions: [
        "La riprogettazione dell\u2019onboarding \u00e8 la priorit\u00e0 principale",
        "Maria si occupa degli aggiornamenti del testo delle e-mail",
        "Sincronizzazione gioved\u00ec per valutare i primi progressi",
      ],
    },
    outputModes: {
      title: "Modalit\u00e0 di Output",
      labels: {
        doc: "Riepilogo",
        list: "Punti Chiave",
        check: "Attivit\u00e0",
        zap: "Piano d\u2019Azione",
        text: "Testo Pulito",
        mail: "Messaggio",
        book: "Appunti",
        bulb: "Idee",
      },
    },
    message: {
      title: "Messaggio Pronto da Inviare",
      to: "A:",
      subject: "Oggetto:",
      subjectLine: "Riepilogo dello Sprint \u2014 Azioni da Completare",
      greeting: "Ciao team,",
      bodyP1: "Breve riepilogo della pianificazione dello sprint di oggi. Ci concentriamo sulla riprogettazione del flusso di onboarding in questo sprint. Alex si occupa degli aggiornamenti dell\u2019interfaccia e Maria della sequenza di e-mail.",
      bodyP2: "Pianifichiamo una sincronizzazione gioved\u00ec per verificare i primi progressi. Non vediamo l\u2019ora di vedere cosa realizzeremo.",
      signoff: "A presto,",
      signoffName: "Il tuo nome",
      copyBtn: "Copia",
      editBtn: "Modifica",
    },
    taskList: {
      title: "Lista Attivit\u00e0",
      tasks: [
        { text: "Riprogettare i wireframe del flusso di onboarding", checked: true },
        { text: "Redigere la sequenza di e-mail di benvenuto (3 e-mail)", checked: true },
        { text: "Configurare gli eventi di tracciamento delle conversioni", checked: false },
        { text: "Verificare e testare il nuovo modulo di registrazione", checked: false },
        { text: "Preparare la presentazione per la sincronizzazione di gioved\u00ec", checked: false },
      ],
      completed: "2 di 5 completate",
    },
    studyNotes: {
      title: "Appunti di Studio",
      heading: "Migliori Pratiche di Onboarding Utente",
      lectureDate: "Lezione \u2014 20 marzo",
      notes: [
        { title: "Divulgazione Progressiva", body: "Non sovraccaricare gli utenti. Mostra le funzionalit\u00e0 gradualmente man mano che diventano rilevanti." },
        { title: "Metriche di Attivazione", body: "Definisci il \u2018momento aha\u2019 \u2014 la prima azione in cui gli utenti percepiscono il valore principale." },
        { title: "Riduzione dell\u2019Attrito", body: "Ogni campo, passaggio o punto decisionale \u00e8 un\u2019occasione di abbandono. Riducili al minimo." },
      ],
    },
  },
};

/* ─── Transcript with Speaker Detection ─── */
export function TranscriptMockup({ className = "" }: { className?: string }) {
  const { locale } = useLanguage();
  const t = content[locale]?.transcript ?? content.en.transcript;
  const lines = t.lines;

  return (
    <div className={`bg-white rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      {/* Window chrome */}
      <div className="px-5 py-3.5 border-b border-border-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <span className="text-[11px] font-medium text-muted-light tracking-wide uppercase">
          {t.title}
        </span>
        <div className="w-14" />
      </div>
      {/* Content */}
      <div className="p-5 space-y-4">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex gap-3"
          >
            <div
              className="mt-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
              style={{ background: line.color }}
            >
              {line.speaker[0]}
            </div>
            <div>
              <span className="text-[11px] font-semibold text-foreground">
                {line.speaker}
              </span>
              <p className="text-[13px] text-muted leading-relaxed mt-0.5">
                {line.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Action Plan Card ─── */
export function ActionPlanMockup({ className = "" }: { className?: string }) {
  const { locale } = useLanguage();
  const t = content[locale]?.actionPlan ?? content.en.actionPlan;
  const items = t.items;
  const pl = t.priorityLabels;

  return (
    <div className={`bg-white rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      <div className="px-5 py-3.5 border-b border-border-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <span className="text-[11px] font-medium text-muted-light tracking-wide uppercase">
          {t.title}
        </span>
        <div className="w-14" />
      </div>
      <div className="p-5 space-y-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-start gap-3 p-3 rounded-xl bg-background/60 border border-border-light"
          >
            <div className="mt-0.5 w-4 h-4 rounded border-2 border-muted-light shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-foreground leading-snug">
                {item.task}
              </p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-border-light text-muted font-medium">
                  {item.owner}
                </span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    item.priority === pl.high
                      ? "bg-red-50 text-red-600"
                      : item.priority === pl.medium
                      ? "bg-amber-50 text-amber-600"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {item.priority}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Summary Card ─── */
export function SummaryMockup({ className = "" }: { className?: string }) {
  const { locale } = useLanguage();
  const t = content[locale]?.summary ?? content.en.summary;

  return (
    <div className={`bg-white rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      <div className="px-5 py-3.5 border-b border-border-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <span className="text-[11px] font-medium text-muted-light tracking-wide uppercase">
          {t.title}
        </span>
        <div className="w-14" />
      </div>
      <div className="p-6 space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h4 className="text-sm font-semibold text-foreground mb-2">
            {t.subtitle}
          </h4>
          <p className="text-[13px] text-muted leading-relaxed">
            {t.paragraph}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-3 border-t border-border-light"
        >
          <h5 className="text-[11px] font-semibold uppercase tracking-wider text-muted-light mb-2">
            {t.keyDecisionsHeading}
          </h5>
          <ul className="space-y-1.5">
            {t.decisions.map((item, i) => (
              <li key={i} className="text-[13px] text-muted flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-light shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Output Mode Selector ─── */
export function OutputModesMockup({ className = "" }: { className?: string }) {
  const { locale } = useLanguage();
  const t = content[locale]?.outputModes ?? content.en.outputModes;

  const modeIcons = ["doc", "list", "check", "zap", "text", "mail", "book", "bulb"];
  const modes = modeIcons.map((icon, i) => ({
    icon,
    label: t.labels[icon],
    active: i === 0,
  }));

  const iconMap: Record<string, string> = {
    doc: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    list: "M4 6h16M4 10h16M4 14h16M4 18h16",
    check: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    zap: "M13 10V3L4 14h7v7l9-11h-7z",
    text: "M4 6h16M4 12h16M4 18h12",
    mail: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    bulb: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  };

  return (
    <div className={`bg-white rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      <div className="px-5 py-3.5 border-b border-border-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <span className="text-[11px] font-medium text-muted-light tracking-wide uppercase">
          {t.title}
        </span>
        <div className="w-14" />
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 gap-2.5">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className={`flex items-center gap-2.5 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                mode.active
                  ? "bg-foreground text-white shadow-md"
                  : "bg-background/60 border border-border-light text-muted hover:border-border hover:bg-background"
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <path d={iconMap[mode.icon]} />
              </svg>
              <span className="text-[12px] font-medium">{mode.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Message Draft Card ─── */
export function MessageMockup({ className = "" }: { className?: string }) {
  const { locale } = useLanguage();
  const t = content[locale]?.message ?? content.en.message;

  return (
    <div className={`bg-white rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      <div className="px-5 py-3.5 border-b border-border-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <span className="text-[11px] font-medium text-muted-light tracking-wide uppercase">
          {t.title}
        </span>
        <div className="w-14" />
      </div>
      <div className="p-5 space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] text-muted-light font-medium">{t.to}</span>
            <span className="text-[12px] text-foreground font-medium px-2 py-0.5 bg-background rounded-md">
              team@company.com
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] text-muted-light font-medium">{t.subject}</span>
            <span className="text-[12px] text-foreground font-medium">
              {t.subjectLine}
            </span>
          </div>
          <div className="text-[13px] text-muted leading-relaxed space-y-2">
            <p>{t.greeting}</p>
            <p>{t.bodyP1}</p>
            <p>{t.bodyP2}</p>
            <p className="text-muted-light">{t.signoff}<br />{t.signoffName}</p>
          </div>
        </motion.div>
        <div className="flex gap-2 pt-2">
          <div className="px-4 py-2 rounded-lg bg-foreground text-white text-[12px] font-medium">
            {t.copyBtn}
          </div>
          <div className="px-4 py-2 rounded-lg bg-background border border-border-light text-[12px] font-medium text-muted">
            {t.editBtn}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Checklist Card ─── */
export function ChecklistMockup({ className = "" }: { className?: string }) {
  const { locale } = useLanguage();
  const t = content[locale]?.taskList ?? content.en.taskList;
  const tasks = t.tasks;

  return (
    <div className={`bg-white rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      <div className="px-5 py-3.5 border-b border-border-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <span className="text-[11px] font-medium text-muted-light tracking-wide uppercase">
          {t.title}
        </span>
        <div className="w-14" />
      </div>
      <div className="p-5 space-y-2.5">
        {tasks.map((task, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + i * 0.1, duration: 0.4 }}
            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-background/60 transition-colors"
          >
            <div
              className={`mt-0.5 w-4.5 h-4.5 rounded flex items-center justify-center shrink-0 ${
                task.checked
                  ? "bg-foreground"
                  : "border-2 border-muted-light"
              }`}
            >
              {task.checked && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </div>
            <span
              className={`text-[13px] leading-snug ${
                task.checked
                  ? "text-muted-light line-through"
                  : "text-foreground"
              }`}
            >
              {task.text}
            </span>
          </motion.div>
        ))}
        <div className="pt-2 flex items-center justify-between text-[11px] text-muted-light">
          <span>{t.completed}</span>
          <span>40%</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Study Notes Card ─── */
export function StudyNotesMockup({ className = "" }: { className?: string }) {
  const { locale } = useLanguage();
  const t = content[locale]?.studyNotes ?? content.en.studyNotes;

  return (
    <div className={`bg-white rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      <div className="px-5 py-3.5 border-b border-border-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <span className="text-[11px] font-medium text-muted-light tracking-wide uppercase">
          {t.title}
        </span>
        <div className="w-14" />
      </div>
      <div className="p-5 space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h4 className="text-sm font-semibold text-foreground mb-1">
            {t.heading}
          </h4>
          <span className="text-[10px] text-muted-light uppercase tracking-wider font-medium">
            {t.lectureDate}
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="space-y-3"
        >
          {t.notes.map((note, i) => (
            <div
              key={i}
              className="pl-3 border-l-2 border-border"
            >
              <h5 className="text-[12px] font-semibold text-foreground mb-0.5">
                {note.title}
              </h5>
              <p className="text-[12px] text-muted leading-relaxed">
                {note.body}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Audio Waveform Visual ─── */
export function WaveformMockup({ className = "" }: { className?: string }) {
  // Pre-computed integer heights to avoid SSR/client hydration mismatch
  const bars = [
    8,8,9,10,12,14,16,18,20,22,23,25,27,28,30,31,32,33,34,35,36,37,38,39,
    40,39,38,37,36,35,34,33,32,31,30,28,27,25,23,22,20,18,16,14,12,10,9,8,
  ];

  return (
    <div className={`flex items-center justify-center gap-[2px] ${className}`}>
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            delay: 0.1 + i * 0.02,
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="w-[3px] rounded-full bg-gradient-to-t from-zinc-300 to-zinc-400 origin-center"
          style={{ height: h }}
        />
      ))}
    </div>
  );
}

/* ─── Speaker Badge Group ─── */
export function SpeakerBadges({ className = "" }: { className?: string }) {
  const speakers = [
    { name: "Alex M.", color: "#6366f1" },
    { name: "Maria R.", color: "#8b5cf6" },
    { name: "Jordan K.", color: "#a78bfa" },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {speakers.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border-light shadow-sm"
        >
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
            style={{ background: s.color }}
          >
            {s.name[0]}
          </div>
          <span className="text-[11px] font-medium text-foreground">{s.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
