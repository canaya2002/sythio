"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../components/i18n/language-context";
import type { Locale } from "../components/i18n/translations";
import RotatingText from "../components/rotating-text";
import {
  TextReveal,
  ScrollScale,
  GsapStagger,
  MagneticHover,
  AnimatedCounter,
  TiltCard,
  PageReveal,
} from "../components/gsap-effects";

/* ─── SVG icon paths ─── */
const icons = {
  user: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  chart: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  clipboard: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  quote: "M7.5 8.25h9m-9 3H12M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802",
};

/* ─── Accent colors per card ─── */
const accents = [
  { bg: "from-indigo-50 to-violet-50", border: "border-indigo-100", text: "text-indigo-600", glow: "from-indigo-100/60 to-violet-100/40", stat: "text-indigo-600", dot: "bg-indigo-500" },
  { bg: "from-emerald-50 to-teal-50", border: "border-emerald-100", text: "text-emerald-600", glow: "from-emerald-100/60 to-teal-100/40", stat: "text-emerald-600", dot: "bg-emerald-500" },
  { bg: "from-amber-50 to-orange-50", border: "border-amber-100", text: "text-amber-600", glow: "from-amber-100/60 to-orange-100/40", stat: "text-amber-600", dot: "bg-amber-500" },
  { bg: "from-sky-50 to-cyan-50", border: "border-sky-100", text: "text-sky-600", glow: "from-sky-100/60 to-cyan-100/40", stat: "text-sky-600", dot: "bg-sky-500" },
  { bg: "from-rose-50 to-pink-50", border: "border-rose-100", text: "text-rose-600", glow: "from-rose-100/60 to-pink-100/40", stat: "text-rose-600", dot: "bg-rose-500" },
];

/* ─── Rotating words ─── */
const rotatingWords: Record<Locale, string[]> = {
  en: ["founders", "consultants", "sales teams", "students", "managers"],
  es: ["fundadores", "consultores", "equipos de ventas", "estudiantes", "gerentes"],
  fr: ["fondateurs", "consultants", "commerciaux", "étudiants", "managers"],
  pt: ["fundadores", "consultores", "equipes de vendas", "estudantes", "gerentes"],
  it: ["fondatori", "consulenti", "team di vendita", "studenti", "manager"],
};

/* ─── Full translations ─── */
const content: Record<Locale, {
  heroLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  heroPrefix: string;
  cases: {
    name: string;
    role: string;
    quote: string;
    challenge: string;
    solution: string;
    resultLabel: string;
    resultMetric: string;
    statNumber: number;
    statSuffix: string;
    statPrefix: string;
    statCaption: string;
    features: string[];
  }[];
  ctaTitle1: string;
  ctaTitle2: string;
  ctaSubtitle: string;
  ctaButton: string;
  ctaSecondary: string;
  ctaFooter: string;
}> = {
  en: {
    heroLabel: "Case Studies",
    heroTitle: "Real Results from Real Users",
    heroSubtitle: "See how professionals across industries use Sythio to turn spoken words into structured progress. Every story, a real workflow transformed.",
    heroPrefix: "Trusted by",
    cases: [
      {
        name: "Sarah",
        role: "Founder",
        quote: "I used to leave every meeting with a vague sense of what we decided. Now I get a structured summary before I even reach my desk.",
        challenge: "Running a growing startup meant back-to-back meetings all day. Decisions were made but never properly documented. Follow-ups were missed, context was lost, and the team kept relitigating the same topics.",
        solution: "Sarah records every meeting with Sythio. Within seconds, she gets a structured summary with decisions, action items, and key discussion points — all attributed to the right speakers.",
        resultLabel: "Result",
        resultMetric: "3 hours saved per week",
        statNumber: 3,
        statSuffix: "h",
        statPrefix: "",
        statCaption: "saved per week",
        features: ["AI Summaries", "Task Extraction", "Speaker Detection"],
      },
      {
        name: "James",
        role: "Consultant",
        quote: "What used to take me an entire evening now takes seconds. Sythio gives me client-ready documentation from every session.",
        challenge: "After every client session, James spent hours converting raw meeting notes into professional reports. The documentation bottleneck delayed deliverables and ate into his billable capacity.",
        solution: "Now James records client sessions and lets Sythio generate executive reports, action plans, and clean documentation — all formatted and ready for client delivery.",
        resultLabel: "Result",
        resultMetric: "5x faster documentation",
        statNumber: 5,
        statSuffix: "x",
        statPrefix: "",
        statCaption: "faster documentation",
        features: ["Reports", "Action Plans", "Clean Text"],
      },
      {
        name: "Maria",
        role: "Sales Lead",
        quote: "Before Sythio, half my follow-ups were late or generic. Now every prospect gets a personalized message within minutes of the call.",
        challenge: "Managing a pipeline of 50+ prospects meant Maria could not manually draft personalized follow-ups after every discovery call. Important details slipped through, and deals stalled.",
        solution: "Sythio auto-generates follow-up messages and key points from every sales call. Maria reviews, personalizes the tone, and sends — all within minutes of hanging up.",
        resultLabel: "Result",
        resultMetric: "23% more deals closed",
        statNumber: 23,
        statSuffix: "%",
        statPrefix: "+",
        statCaption: "more deals closed",
        features: ["Messages", "Key Points", "Speaker Detection"],
      },
      {
        name: "David",
        role: "Student",
        quote: "I used to panic during fast lectures. Now I just focus on understanding and let Sythio handle the notes.",
        challenge: "David struggled to keep up with dense, fast-paced university lectures. His handwritten notes were incomplete, disorganized, and hard to study from. Exam prep was stressful and inefficient.",
        solution: "David records lectures and gets AI-generated study notes with key concepts, definitions, and structured summaries. He reviews them on his commute and before exams.",
        resultLabel: "Result",
        resultMetric: "Grades improved by one letter",
        statNumber: 1,
        statSuffix: "",
        statPrefix: "+",
        statCaption: "letter grade improvement",
        features: ["Study Notes", "Key Points", "Clean Text"],
      },
      {
        name: "Alex",
        role: "Project Manager",
        quote: "We went from 'I thought you were handling that' to zero missed deadlines. Sythio made accountability automatic.",
        challenge: "Alex managed cross-functional teams with daily standups and weekly syncs. Action items were verbally assigned but rarely written down. Tasks fell through the cracks, and accountability was unclear.",
        solution: "Sythio extracts every action item from meetings with owner attribution and deadline context. Alex reviews the extracted tasks and pushes them directly into the team workflow.",
        resultLabel: "Result",
        resultMetric: "Zero missed deadlines",
        statNumber: 0,
        statSuffix: "",
        statPrefix: "",
        statCaption: "missed deadlines",
        features: ["Task Extraction", "Action Plans", "Summaries"],
      },
    ],
    ctaTitle1: "Your story could be next.",
    ctaTitle2: "Start transforming your audio today.",
    ctaSubtitle: "Join thousands of professionals who have already made Sythio part of their daily workflow.",
    ctaButton: "Start Using Sythio",
    ctaSecondary: "View Pricing",
    ctaFooter: "Free plan available. No credit card required.",
  },
  es: {
    heroLabel: "Casos de Estudio",
    heroTitle: "Resultados Reales de Usuarios Reales",
    heroSubtitle: "Descubre cómo profesionales de distintas industrias usan Sythio para convertir palabras habladas en progreso estructurado. Cada historia, un flujo de trabajo transformado.",
    heroPrefix: "Confiado por",
    cases: [
      {
        name: "Sarah",
        role: "Fundadora",
        quote: "Antes salía de cada reunión con una vaga idea de lo que decidimos. Ahora recibo un resumen estructurado antes de llegar a mi escritorio.",
        challenge: "Dirigir una startup en crecimiento significaba reuniones consecutivas todo el día. Las decisiones se tomaban pero nunca se documentaban adecuadamente. Los seguimientos se perdían, el contexto se desvanecía y el equipo repetía los mismos temas.",
        solution: "Sarah graba cada reunión con Sythio. En segundos obtiene un resumen estructurado con decisiones, elementos de acción y puntos clave de discusión — todo atribuido a los hablantes correctos.",
        resultLabel: "Resultado",
        resultMetric: "3 horas ahorradas por semana",
        statNumber: 3,
        statSuffix: "h",
        statPrefix: "",
        statCaption: "ahorradas por semana",
        features: ["Resúmenes IA", "Extracción de Tareas", "Detección de Hablantes"],
      },
      {
        name: "James",
        role: "Consultor",
        quote: "Lo que antes me tomaba toda una noche ahora toma segundos. Sythio me da documentación lista para el cliente de cada sesión.",
        challenge: "Después de cada sesión con clientes, James pasaba horas convirtiendo notas brutas en informes profesionales. El cuello de botella de documentación retrasaba entregables y consumía su capacidad facturable.",
        solution: "Ahora James graba las sesiones con clientes y deja que Sythio genere informes ejecutivos, planes de acción y documentación limpia — todo formateado y listo para entregar al cliente.",
        resultLabel: "Resultado",
        resultMetric: "Documentación 5x más rápida",
        statNumber: 5,
        statSuffix: "x",
        statPrefix: "",
        statCaption: "documentación más rápida",
        features: ["Informes", "Planes de Acción", "Texto Limpio"],
      },
      {
        name: "Maria",
        role: "Líder de Ventas",
        quote: "Antes de Sythio, la mitad de mis seguimientos llegaban tarde o eran genéricos. Ahora cada prospecto recibe un mensaje personalizado minutos después de la llamada.",
        challenge: "Gestionar un pipeline de más de 50 prospectos significaba que Maria no podía redactar manualmente seguimientos personalizados después de cada llamada de descubrimiento. Detalles importantes se escapaban y los tratos se estancaban.",
        solution: "Sythio auto-genera mensajes de seguimiento y puntos clave de cada llamada de ventas. Maria revisa, personaliza el tono y envía — todo en minutos después de colgar.",
        resultLabel: "Resultado",
        resultMetric: "23% más tratos cerrados",
        statNumber: 23,
        statSuffix: "%",
        statPrefix: "+",
        statCaption: "más tratos cerrados",
        features: ["Mensajes", "Puntos Clave", "Detección de Hablantes"],
      },
      {
        name: "David",
        role: "Estudiante",
        quote: "Antes entraba en pánico durante las clases rápidas. Ahora solo me concentro en entender y dejo que Sythio se encargue de los apuntes.",
        challenge: "David luchaba por seguir el ritmo de clases universitarias densas y rápidas. Sus apuntes escritos a mano eran incompletos, desorganizados y difíciles de estudiar. La preparación de exámenes era estresante e ineficiente.",
        solution: "David graba las clases y obtiene apuntes de estudio generados por IA con conceptos clave, definiciones y resúmenes estructurados. Los revisa en el camino y antes de los exámenes.",
        resultLabel: "Resultado",
        resultMetric: "Notas mejoraron una letra",
        statNumber: 1,
        statSuffix: "",
        statPrefix: "+",
        statCaption: "letra de mejora en notas",
        features: ["Apuntes de Estudio", "Puntos Clave", "Texto Limpio"],
      },
      {
        name: "Alex",
        role: "Gerente de Proyecto",
        quote: "Pasamos de 'pensé que tú te encargabas de eso' a cero plazos incumplidos. Sythio hizo que la responsabilidad sea automática.",
        challenge: "Alex gestionaba equipos multifuncionales con reuniones diarias y semanales. Los elementos de acción se asignaban verbalmente pero raramente se escribían. Las tareas se perdían y la responsabilidad era confusa.",
        solution: "Sythio extrae cada elemento de acción de las reuniones con atribución de responsable y contexto de plazos. Alex revisa las tareas extraídas y las envía directamente al flujo de trabajo del equipo.",
        resultLabel: "Resultado",
        resultMetric: "Cero plazos incumplidos",
        statNumber: 0,
        statSuffix: "",
        statPrefix: "",
        statCaption: "plazos incumplidos",
        features: ["Extracción de Tareas", "Planes de Acción", "Resúmenes"],
      },
    ],
    ctaTitle1: "Tu historia podría ser la siguiente.",
    ctaTitle2: "Empieza a transformar tu audio hoy.",
    ctaSubtitle: "Únete a miles de profesionales que ya han hecho de Sythio parte de su flujo de trabajo diario.",
    ctaButton: "Empezar a usar Sythio",
    ctaSecondary: "Ver Precios",
    ctaFooter: "Plan gratuito disponible. Sin tarjeta de crédito.",
  },
  fr: {
    heroLabel: "Études de Cas",
    heroTitle: "Des Résultats Réels d'Utilisateurs Réels",
    heroSubtitle: "Découvrez comment des professionnels de tous secteurs utilisent Sythio pour transformer la parole en progrès structuré. Chaque histoire, un workflow transformé.",
    heroPrefix: "Adopté par",
    cases: [
      {
        name: "Sarah",
        role: "Fondatrice",
        quote: "Avant, je quittais chaque réunion avec une vague idée de ce qu'on avait décidé. Maintenant je reçois un résumé structuré avant même d'atteindre mon bureau.",
        challenge: "Diriger une startup en croissance signifiait des réunions enchaînées toute la journée. Les décisions étaient prises mais jamais correctement documentées. Les suivis étaient manqués, le contexte perdu, et l'équipe revisitait les mêmes sujets.",
        solution: "Sarah enregistre chaque réunion avec Sythio. En quelques secondes, elle obtient un résumé structuré avec décisions, actions à mener et points clés — le tout attribué aux bons intervenants.",
        resultLabel: "Résultat",
        resultMetric: "3 heures économisées par semaine",
        statNumber: 3,
        statSuffix: "h",
        statPrefix: "",
        statCaption: "économisées par semaine",
        features: ["Résumés IA", "Extraction de Tâches", "Détection de Locuteurs"],
      },
      {
        name: "James",
        role: "Consultant",
        quote: "Ce qui me prenait une soirée entière ne prend maintenant que quelques secondes. Sythio me donne une documentation prête pour le client à chaque session.",
        challenge: "Après chaque session client, James passait des heures à convertir des notes brutes en rapports professionnels. Le goulet d'étranglement documentaire retardait les livrables et entamait sa capacité facturable.",
        solution: "Maintenant James enregistre ses sessions clients et laisse Sythio générer des rapports exécutifs, plans d'action et documentation propre — le tout formaté et prêt à livrer.",
        resultLabel: "Résultat",
        resultMetric: "Documentation 5x plus rapide",
        statNumber: 5,
        statSuffix: "x",
        statPrefix: "",
        statCaption: "documentation plus rapide",
        features: ["Rapports", "Plans d'Action", "Texte Propre"],
      },
      {
        name: "Maria",
        role: "Responsable Commerciale",
        quote: "Avant Sythio, la moitié de mes relances étaient tardives ou génériques. Maintenant chaque prospect reçoit un message personnalisé dans les minutes suivant l'appel.",
        challenge: "Gérer un pipeline de plus de 50 prospects signifiait que Maria ne pouvait pas rédiger manuellement des relances personnalisées après chaque appel de découverte. Des détails importants passaient à travers, et les affaires stagnaient.",
        solution: "Sythio génère automatiquement des messages de suivi et des points clés de chaque appel commercial. Maria révise, personnalise le ton et envoie — le tout en quelques minutes.",
        resultLabel: "Résultat",
        resultMetric: "23% de contrats en plus",
        statNumber: 23,
        statSuffix: "%",
        statPrefix: "+",
        statCaption: "de contrats en plus",
        features: ["Messages", "Points Clés", "Détection de Locuteurs"],
      },
      {
        name: "David",
        role: "Étudiant",
        quote: "Avant, je paniquais pendant les cours magistraux rapides. Maintenant je me concentre sur la compréhension et je laisse Sythio gérer les notes.",
        challenge: "David avait du mal à suivre des cours universitaires denses et rapides. Ses notes manuscrites étaient incomplètes, désorganisées et difficiles à réviser. La préparation aux examens était stressante et inefficace.",
        solution: "David enregistre ses cours et obtient des notes d'étude générées par IA avec concepts clés, définitions et résumés structurés. Il les révise dans les transports et avant les examens.",
        resultLabel: "Résultat",
        resultMetric: "Notes améliorées d'une lettre",
        statNumber: 1,
        statSuffix: "",
        statPrefix: "+",
        statCaption: "lettre d'amélioration",
        features: ["Notes d'Étude", "Points Clés", "Texte Propre"],
      },
      {
        name: "Alex",
        role: "Chef de Projet",
        quote: "On est passé de 'je pensais que tu t'en occupais' à zéro échéance manquée. Sythio a rendu la responsabilité automatique.",
        challenge: "Alex gérait des équipes transverses avec des daily standups et des syncs hebdomadaires. Les actions étaient assignées verbalement mais rarement notées. Les tâches tombaient dans l'oubli et la responsabilité était floue.",
        solution: "Sythio extrait chaque action de chaque réunion avec attribution du responsable et contexte de délai. Alex révise les tâches extraites et les intègre directement dans le workflow de l'équipe.",
        resultLabel: "Résultat",
        resultMetric: "Zéro échéance manquée",
        statNumber: 0,
        statSuffix: "",
        statPrefix: "",
        statCaption: "échéances manquées",
        features: ["Extraction de Tâches", "Plans d'Action", "Résumés"],
      },
    ],
    ctaTitle1: "Votre histoire pourrait être la prochaine.",
    ctaTitle2: "Commencez à transformer votre audio aujourd'hui.",
    ctaSubtitle: "Rejoignez des milliers de professionnels qui ont déjà intégré Sythio dans leur workflow quotidien.",
    ctaButton: "Commencer avec Sythio",
    ctaSecondary: "Voir les Tarifs",
    ctaFooter: "Plan gratuit disponible. Sans carte bancaire.",
  },
  pt: {
    heroLabel: "Estudos de Caso",
    heroTitle: "Resultados Reais de Usuários Reais",
    heroSubtitle: "Veja como profissionais de diversas indústrias usam o Sythio para transformar palavras faladas em progresso estruturado. Cada história, um fluxo de trabalho transformado.",
    heroPrefix: "Confiado por",
    cases: [
      {
        name: "Sarah",
        role: "Fundadora",
        quote: "Eu costumava sair de cada reunião com uma vaga noção do que decidimos. Agora recebo um resumo estruturado antes mesmo de chegar à minha mesa.",
        challenge: "Gerenciar uma startup em crescimento significava reuniões seguidas o dia todo. Decisões eram tomadas mas nunca documentadas adequadamente. Follow-ups eram perdidos, contexto se perdia, e a equipe revisitava os mesmos temas.",
        solution: "Sarah grava cada reunião com o Sythio. Em segundos, ela recebe um resumo estruturado com decisões, itens de ação e pontos-chave — tudo atribuído aos falantes corretos.",
        resultLabel: "Resultado",
        resultMetric: "3 horas economizadas por semana",
        statNumber: 3,
        statSuffix: "h",
        statPrefix: "",
        statCaption: "economizadas por semana",
        features: ["Resumos IA", "Extração de Tarefas", "Detecção de Falantes"],
      },
      {
        name: "James",
        role: "Consultor",
        quote: "O que antes levava uma noite inteira agora leva segundos. O Sythio me dá documentação pronta para o cliente de cada sessão.",
        challenge: "Após cada sessão com clientes, James passava horas convertendo notas brutas em relatórios profissionais. O gargalo de documentação atrasava entregas e consumia sua capacidade faturável.",
        solution: "Agora James grava sessões com clientes e deixa o Sythio gerar relatórios executivos, planos de ação e documentação limpa — tudo formatado e pronto para entrega.",
        resultLabel: "Resultado",
        resultMetric: "Documentação 5x mais rápida",
        statNumber: 5,
        statSuffix: "x",
        statPrefix: "",
        statCaption: "documentação mais rápida",
        features: ["Relatórios", "Planos de Ação", "Texto Limpo"],
      },
      {
        name: "Maria",
        role: "Líder de Vendas",
        quote: "Antes do Sythio, metade dos meus follow-ups eram atrasados ou genéricos. Agora cada prospect recebe uma mensagem personalizada minutos após a ligação.",
        challenge: "Gerenciar um pipeline de mais de 50 prospects significava que Maria não conseguia redigir manualmente follow-ups personalizados após cada ligação de descoberta. Detalhes importantes escapavam e negócios estagnavam.",
        solution: "O Sythio gera automaticamente mensagens de follow-up e pontos-chave de cada ligação de vendas. Maria revisa, personaliza o tom e envia — tudo em minutos após desligar.",
        resultLabel: "Resultado",
        resultMetric: "23% mais negócios fechados",
        statNumber: 23,
        statSuffix: "%",
        statPrefix: "+",
        statCaption: "mais negócios fechados",
        features: ["Mensagens", "Pontos-Chave", "Detecção de Falantes"],
      },
      {
        name: "David",
        role: "Estudante",
        quote: "Eu costumava entrar em pânico durante aulas rápidas. Agora apenas foco em entender e deixo o Sythio cuidar das anotações.",
        challenge: "David tinha dificuldade em acompanhar aulas universitárias densas e rápidas. Suas anotações manuscritas eram incompletas, desorganizadas e difíceis de estudar. A preparação para provas era estressante e ineficiente.",
        solution: "David grava as aulas e recebe notas de estudo geradas por IA com conceitos-chave, definições e resumos estruturados. Ele os revisa no transporte e antes das provas.",
        resultLabel: "Resultado",
        resultMetric: "Notas melhoraram uma letra",
        statNumber: 1,
        statSuffix: "",
        statPrefix: "+",
        statCaption: "letra de melhoria nas notas",
        features: ["Notas de Estudo", "Pontos-Chave", "Texto Limpo"],
      },
      {
        name: "Alex",
        role: "Gerente de Projeto",
        quote: "Saímos de 'achei que você estava cuidando disso' para zero prazos perdidos. O Sythio tornou a responsabilidade automática.",
        challenge: "Alex gerenciava equipes multifuncionais com reuniões diárias e semanais. Itens de ação eram atribuídos verbalmente mas raramente registrados. Tarefas se perdiam e a responsabilidade era confusa.",
        solution: "O Sythio extrai cada item de ação das reuniões com atribuição de responsável e contexto de prazo. Alex revisa as tarefas extraídas e as envia diretamente para o fluxo de trabalho da equipe.",
        resultLabel: "Resultado",
        resultMetric: "Zero prazos perdidos",
        statNumber: 0,
        statSuffix: "",
        statPrefix: "",
        statCaption: "prazos perdidos",
        features: ["Extração de Tarefas", "Planos de Ação", "Resumos"],
      },
    ],
    ctaTitle1: "Sua história pode ser a próxima.",
    ctaTitle2: "Comece a transformar seu áudio hoje.",
    ctaSubtitle: "Junte-se a milhares de profissionais que já fizeram do Sythio parte do seu fluxo de trabalho diário.",
    ctaButton: "Começar a usar Sythio",
    ctaSecondary: "Ver Preços",
    ctaFooter: "Plano gratuito disponível. Sem cartão de crédito.",
  },
  it: {
    heroLabel: "Casi di Studio",
    heroTitle: "Risultati Reali da Utenti Reali",
    heroSubtitle: "Scopri come professionisti di diversi settori usano Sythio per trasformare le parole dette in progresso strutturato. Ogni storia, un workflow trasformato.",
    heroPrefix: "Scelto da",
    cases: [
      {
        name: "Sarah",
        role: "Fondatrice",
        quote: "Prima uscivo da ogni riunione con una vaga idea di cosa avessimo deciso. Ora ricevo un riassunto strutturato prima ancora di raggiungere la mia scrivania.",
        challenge: "Gestire una startup in crescita significava riunioni consecutive tutto il giorno. Le decisioni venivano prese ma mai documentate adeguatamente. I follow-up venivano persi, il contesto svaniva, e il team rivisitava gli stessi argomenti.",
        solution: "Sarah registra ogni riunione con Sythio. In pochi secondi, ottiene un riassunto strutturato con decisioni, azioni da compiere e punti chiave — tutto attribuito ai giusti interlocutori.",
        resultLabel: "Risultato",
        resultMetric: "3 ore risparmiate a settimana",
        statNumber: 3,
        statSuffix: "h",
        statPrefix: "",
        statCaption: "risparmiate a settimana",
        features: ["Riassunti IA", "Estrazione Attività", "Rilevamento Parlanti"],
      },
      {
        name: "James",
        role: "Consulente",
        quote: "Quello che prima mi portava via un'intera serata ora richiede pochi secondi. Sythio mi fornisce documentazione pronta per il cliente da ogni sessione.",
        challenge: "Dopo ogni sessione con i clienti, James passava ore a convertire appunti grezzi in report professionali. Il collo di bottiglia documentale ritardava i deliverable e consumava la sua capacità fatturabile.",
        solution: "Ora James registra le sessioni con i clienti e lascia che Sythio generi report esecutivi, piani d'azione e documentazione pulita — tutto formattato e pronto per la consegna.",
        resultLabel: "Risultato",
        resultMetric: "Documentazione 5x più veloce",
        statNumber: 5,
        statSuffix: "x",
        statPrefix: "",
        statCaption: "documentazione più veloce",
        features: ["Report", "Piani d'Azione", "Testo Pulito"],
      },
      {
        name: "Maria",
        role: "Responsabile Vendite",
        quote: "Prima di Sythio, metà dei miei follow-up erano in ritardo o generici. Ora ogni prospect riceve un messaggio personalizzato entro pochi minuti dalla chiamata.",
        challenge: "Gestire una pipeline di oltre 50 prospect significava che Maria non riusciva a redigere manualmente follow-up personalizzati dopo ogni chiamata di discovery. Dettagli importanti sfuggivano e gli affari si bloccavano.",
        solution: "Sythio genera automaticamente messaggi di follow-up e punti chiave da ogni chiamata commerciale. Maria rivede, personalizza il tono e invia — tutto in pochi minuti.",
        resultLabel: "Risultato",
        resultMetric: "23% in più di affari chiusi",
        statNumber: 23,
        statSuffix: "%",
        statPrefix: "+",
        statCaption: "affari in più chiusi",
        features: ["Messaggi", "Punti Chiave", "Rilevamento Parlanti"],
      },
      {
        name: "David",
        role: "Studente",
        quote: "Prima andavo nel panico durante le lezioni veloci. Ora mi concentro sulla comprensione e lascio che Sythio gestisca gli appunti.",
        challenge: "David faticava a stare al passo con lezioni universitarie dense e veloci. I suoi appunti scritti a mano erano incompleti, disorganizzati e difficili da studiare. La preparazione agli esami era stressante e inefficiente.",
        solution: "David registra le lezioni e ottiene note di studio generate dall'IA con concetti chiave, definizioni e riassunti strutturati. Li rivede durante il tragitto e prima degli esami.",
        resultLabel: "Risultato",
        resultMetric: "Voti migliorati di una lettera",
        statNumber: 1,
        statSuffix: "",
        statPrefix: "+",
        statCaption: "lettera di miglioramento",
        features: ["Note di Studio", "Punti Chiave", "Testo Pulito"],
      },
      {
        name: "Alex",
        role: "Project Manager",
        quote: "Siamo passati da 'pensavo te ne occupassi tu' a zero scadenze mancate. Sythio ha reso la responsabilità automatica.",
        challenge: "Alex gestiva team interfunzionali con standup giornalieri e sync settimanali. Le azioni venivano assegnate verbalmente ma raramente annotate. Le attività cadevano nel vuoto e la responsabilità era poco chiara.",
        solution: "Sythio estrae ogni azione da ogni riunione con attribuzione del responsabile e contesto delle scadenze. Alex rivede le attività estratte e le inserisce direttamente nel workflow del team.",
        resultLabel: "Risultato",
        resultMetric: "Zero scadenze mancate",
        statNumber: 0,
        statSuffix: "",
        statPrefix: "",
        statCaption: "scadenze mancate",
        features: ["Estrazione Attività", "Piani d'Azione", "Riassunti"],
      },
    ],
    ctaTitle1: "La tua storia potrebbe essere la prossima.",
    ctaTitle2: "Inizia a trasformare il tuo audio oggi.",
    ctaSubtitle: "Unisciti a migliaia di professionisti che hanno già reso Sythio parte del loro workflow quotidiano.",
    ctaButton: "Inizia con Sythio",
    ctaSecondary: "Vedi Prezzi",
    ctaFooter: "Piano gratuito disponibile. Nessuna carta di credito richiesta.",
  },
};

/* ─── Case Studies Page ─── */
export default function CaseStudiesPage() {
  const { locale } = useLanguage();
  const c = content[locale];

  return (
    <PageReveal>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-animated-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border-light mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-muted">{c.heroLabel}</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-foreground"
            >
              {c.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto"
            >
              {c.heroSubtitle}
            </motion.p>

            {/* Rotating text line */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex items-center justify-center gap-2 text-lg md:text-xl text-muted"
            >
              <span>{c.heroPrefix}</span>
              <RotatingText words={rotatingWords[locale]} className="text-foreground font-semibold" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 md:py-36 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <GsapStagger className="space-y-16 lg:space-y-24" stagger={0.15}>
            {c.cases.map((cs, i) => {
              const accent = accents[i];
              const isEven = i % 2 === 0;

              return (
                <ScrollScale key={cs.name + cs.role}>
                  <TiltCard className="cursor-default">
                    <div className={`group relative rounded-3xl bg-white border ${accent.border} overflow-hidden transition-all duration-500 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06),0_24px_64px_rgba(0,0,0,0.08)] hover:border-border`}>
                      {/* Glow background */}
                      <div className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-1/2 h-full bg-gradient-to-br ${accent.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                      <div className={`relative grid lg:grid-cols-5 gap-0`}>
                        {/* Stat panel */}
                        <div className={`lg:col-span-2 ${isEven ? "lg:order-1" : "lg:order-2"} p-10 lg:p-14 flex flex-col items-center justify-center text-center bg-gradient-to-br ${accent.bg} border-b lg:border-b-0 ${isEven ? "lg:border-r" : "lg:border-l"} border-inherit`}>
                          <div className="mb-4">
                            <div className={`w-16 h-16 rounded-2xl bg-white/80 border border-white shadow-sm flex items-center justify-center ${accent.text} mb-6 mx-auto`}>
                              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d={icons.user} />
                              </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">{cs.name}</h3>
                            <p className={`text-sm font-medium ${accent.text} mt-1`}>{cs.role}</p>
                          </div>

                          {/* Large stat */}
                          <div className="mt-6">
                            <div className={`text-6xl lg:text-7xl font-bold ${accent.stat} leading-none`}>
                              <AnimatedCounter
                                value={cs.statNumber}
                                prefix={cs.statPrefix}
                                suffix={cs.statSuffix}
                              />
                            </div>
                            <p className="text-sm text-muted mt-3 font-medium">{cs.statCaption}</p>
                          </div>

                          {/* Features used */}
                          <div className="mt-8 flex flex-wrap gap-2 justify-center">
                            {cs.features.map((f) => (
                              <span key={f} className="px-3 py-1 rounded-full bg-white/80 border border-white text-xs font-medium text-muted shadow-sm">
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Content panel */}
                        <div className={`lg:col-span-3 ${isEven ? "lg:order-2" : "lg:order-1"} p-10 lg:p-14 flex flex-col justify-center`}>
                          {/* Quote */}
                          <div className="mb-8">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className={`${accent.text} opacity-40 mb-4`}>
                              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.186 11 15c0 1.933-1.567 3.5-3.5 3.5-1.288 0-2.46-.657-2.917-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.186 21 15c0 1.933-1.567 3.5-3.5 3.5-1.288 0-2.46-.657-2.917-1.179z" fill="currentColor" />
                            </svg>
                            <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed tracking-tight">
                              &ldquo;{cs.quote}&rdquo;
                            </blockquote>
                          </div>

                          {/* Challenge */}
                          <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                              <div className={`w-2 h-2 rounded-full ${accent.dot}`} />
                              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light">Challenge</span>
                            </div>
                            <p className="text-base text-muted leading-relaxed">{cs.challenge}</p>
                          </div>

                          {/* Solution */}
                          <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                              <div className={`w-2 h-2 rounded-full ${accent.dot}`} />
                              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light">Solution</span>
                            </div>
                            <p className="text-base text-muted leading-relaxed">{cs.solution}</p>
                          </div>

                          {/* Result badge */}
                          <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${accent.bg} border ${accent.border} self-start`}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={accent.text}>
                              <path d={icons.chart} />
                            </svg>
                            <span className={`text-sm font-semibold ${accent.text}`}>{cs.resultLabel}: {cs.resultMetric}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollScale>
              );
            })}
          </GsapStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <TextReveal
              tag="h2"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            >
              {c.ctaTitle1}
              <br />
              {c.ctaTitle2}
            </TextReveal>
            <TextReveal
              tag="p"
              className="mt-7 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed"
            >
              {c.ctaSubtitle}
            </TextReveal>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticHover>
                <Link
                  href="/product"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  {c.ctaButton}
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link
                  href="/pricing"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-foreground text-base font-medium hover:bg-foreground hover:text-white transition-all duration-300"
                >
                  {c.ctaSecondary}
                </Link>
              </MagneticHover>
            </div>
            <p className="mt-6 text-sm text-muted">{c.ctaFooter}</p>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
