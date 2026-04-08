"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "For Consultants",
    heroTitle: "Built for How Consultants Actually Deliver",
    heroDesc:
      "Stop spending billable hours on meeting documentation. Record your client sessions, workshops, and interviews — Sythio turns them into executive reports, action plans, and clean documentation you can deliver immediately.",
    problemLabel: "The problem",
    problemTitle: "The Documentation Burden",
    problemDesc:
      "Consultants sell expertise, but a surprising amount of their time goes to writing up what happened in meetings. Every undocumented session is lost context, delayed deliverables, and eroded client trust.",
    problem1Title: "Meetings go undocumented",
    problem1Desc:
      "You run three client sessions in a day. By the time you sit down to write up the first one, the details of the third have already started to blur. Important nuances and client concerns slip through.",
    problem2Title: "Deliverables delayed",
    problem2Desc:
      "The gap between meeting and documentation means deliverables take longer than they should. Clients notice when the turnaround slows — and it reflects on your engagement quality.",
    problem3Title: "Context lost between sessions",
    problem3Desc:
      "Multi-week engagements involve dozens of conversations. Without structured records, you find yourself asking clients to repeat what they told you two weeks ago — eroding the confidence they placed in you.",
    outputsLabel: "Your outputs",
    outputsTitle: "What Sythio Creates for You",
    outputsDesc:
      "One recorded session becomes multiple deliverable-ready assets — each designed for a different part of your consulting workflow.",
    output1Title: "Executive Report",
    output1Desc:
      "Every client meeting becomes a polished executive report — ready to share with stakeholders. Sythio captures the discussion, decisions, and recommendations in a format that demonstrates your thoroughness and professionalism.",
    output2Title: "Action Plan",
    output2Desc:
      "Structured next steps extracted from every conversation. Who is responsible, what needs to happen, and by when — so client engagements maintain momentum and accountability is clear from the start.",
    output3Title: "Summary",
    output3Desc:
      "A concise overview of the entire session — the context, the discussion, and the outcomes. Perfect for updating team members who were not in the room or refreshing your memory before the next engagement.",
    output4Title: "Clean Text",
    output4Desc:
      "The full content of the meeting as polished, readable prose — without the tangents, filler, and repetition. Ideal for creating reference documents, populating knowledge bases, or building deliverable appendices.",
    useCasesLabel: "Use cases",
    useCasesTitle: "How Consultants Use Sythio",
    useCase1Title: "Strategy Sessions",
    useCase1Desc:
      "Record your strategy sessions with clients and let Sythio capture the full scope of the discussion. Priorities, trade-offs, and strategic decisions are documented clearly — giving you a comprehensive record to build your recommendations on.",
    useCase2Title: "Workshops",
    useCase2Desc:
      "Facilitated workshops generate a wealth of input from multiple participants. Sythio captures every voice, organizes contributions by speaker and theme, and produces a structured output that becomes the foundation for your deliverables.",
    useCase3Title: "Client Check-ins",
    useCase3Desc:
      "Regular check-in calls keep projects on track but generate documentation overhead. Sythio turns each check-in into a summary with action items — creating a running record of progress, decisions, and evolving priorities.",
    useCase4Title: "Stakeholder Interviews",
    useCase4Desc:
      "Interviews with stakeholders across the client organization are essential for discovery. Sythio captures each perspective accurately with speaker attribution — so you can compare viewpoints and identify patterns across conversations.",
    pricingTitle: "Free for Consultants to Start",
    pricingDesc:
      "The free plan gives you 5 recordings per month — enough to test Sythio with your next client session. No credit card required. When you need more, the Premium plan is $15/month for unlimited recordings and all 9 output formats.",
    exploreTitle: "Explore More",
    relatedUseCases: "Use Cases",
    relatedFeatures: "All Features",
    relatedCompare: "Compare Tools",
    relatedPricing: "Pricing",
    ctaTitle1: "Focus on delivering value.",
    ctaTitle2: "Let Sythio handle the documentation.",
    ctaDesc:
      "Record your next client session and see what Sythio creates. Executive reports, action plans, summaries, and clean text — from one recording.",
    ctaFooter:
      "Free plan includes 5 recordings per month. No credit card needed.",
  },
  es: {
    label: "Para Consultores",
    heroTitle: "Diseñado para Como los Consultores Realmente Entregan",
    heroDesc:
      "Deja de gastar horas facturables en documentación de reuniones. Graba tus sesiones con clientes, talleres y entrevistas — Sythio los convierte en informes ejecutivos, planes de acción y documentación limpia que puedes entregar inmediatamente.",
    problemLabel: "El problema",
    problemTitle: "La Carga de Documentación",
    problemDesc:
      "Los consultores venden experiencia, pero una cantidad sorprendente de su tiempo se dedica a escribir lo que pasó en las reuniones. Cada sesión sin documentar es contexto perdido, entregables retrasados y confianza del cliente erosionada.",
    problem1Title: "Reuniones sin documentar",
    problem1Desc:
      "Diriges tres sesiones con clientes en un día. Cuando te sientas a escribir la primera, los detalles de la tercera ya se han empezado a difuminar. Matices importantes y preocupaciones del cliente se escapan.",
    problem2Title: "Entregables retrasados",
    problem2Desc:
      "La brecha entre la reunión y la documentación significa que los entregables tardan más de lo debido. Los clientes notan cuando el tiempo de respuesta se ralentiza — y refleja la calidad de tu trabajo.",
    problem3Title: "Contexto perdido entre sesiones",
    problem3Desc:
      "Los proyectos de varias semanas implican docenas de conversaciones. Sin registros estructurados, te encuentras pidiendo a los clientes que repitan lo que te dijeron hace dos semanas — erosionando la confianza que depositaron en ti.",
    outputsLabel: "Tus resultados",
    outputsTitle: "Lo que Sythio Crea para Ti",
    outputsDesc:
      "Una sesión grabada se convierte en múltiples activos listos para entregar — cada uno diseñado para una parte diferente de tu flujo de trabajo de consultoría.",
    output1Title: "Informe Ejecutivo",
    output1Desc:
      "Cada reunión con cliente se convierte en un informe ejecutivo pulido — listo para compartir con los interesados. Sythio captura la discusión, decisiones y recomendaciones en un formato que demuestra tu minuciosidad y profesionalismo.",
    output2Title: "Plan de Acción",
    output2Desc:
      "Próximos pasos estructurados extraídos de cada conversación. Quién es responsable, qué necesita suceder y cuándo — para que los proyectos con clientes mantengan el impulso y la responsabilidad sea clara desde el inicio.",
    output3Title: "Resumen",
    output3Desc:
      "Una visión general concisa de toda la sesión — el contexto, la discusión y los resultados. Perfecto para actualizar a miembros del equipo que no estuvieron o refrescar tu memoria antes del próximo encuentro.",
    output4Title: "Texto Limpio",
    output4Desc:
      "El contenido completo de la reunión como prosa pulida y legible — sin las divagaciones, relleno y repeticiones. Ideal para crear documentos de referencia, poblar bases de conocimiento o construir apéndices de entregables.",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Cómo los Consultores Usan Sythio",
    useCase1Title: "Sesiones de Estrategia",
    useCase1Desc:
      "Graba tus sesiones de estrategia con clientes y deja que Sythio capture el alcance completo de la discusión. Prioridades, compensaciones y decisiones estratégicas se documentan claramente — dándote un registro completo sobre el cual construir tus recomendaciones.",
    useCase2Title: "Talleres",
    useCase2Desc:
      "Los talleres facilitados generan una riqueza de aportes de múltiples participantes. Sythio captura cada voz, organiza las contribuciones por hablante y tema, y produce un resultado estructurado que se convierte en la base de tus entregables.",
    useCase3Title: "Check-ins con Clientes",
    useCase3Desc:
      "Las llamadas regulares de seguimiento mantienen los proyectos en curso pero generan carga de documentación. Sythio convierte cada check-in en un resumen con elementos de acción — creando un registro continuo de progreso, decisiones y prioridades en evolución.",
    useCase4Title: "Entrevistas con Interesados",
    useCase4Desc:
      "Las entrevistas con interesados en la organización del cliente son esenciales para el descubrimiento. Sythio captura cada perspectiva con precisión con atribución de hablante — para que puedas comparar puntos de vista e identificar patrones entre conversaciones.",
    pricingTitle: "Gratis para que los Consultores Empiecen",
    pricingDesc:
      "El plan gratuito te da 5 grabaciones al mes — suficiente para probar Sythio con tu próxima sesión con un cliente. Sin tarjeta de crédito. Cuando necesites más, el plan Pro es $15/mes para grabaciones ilimitadas y los 9 formatos de salida.",
    exploreTitle: "Explorar Más",
    relatedUseCases: "Casos de Uso",
    relatedFeatures: "Todas las Funciones",
    relatedCompare: "Comparar Herramientas",
    relatedPricing: "Precios",
    ctaTitle1: "Concéntrate en entregar valor.",
    ctaTitle2: "Deja que Sythio se encargue de la documentación.",
    ctaDesc:
      "Graba tu próxima sesión con un cliente y mira lo que Sythio crea. Informes ejecutivos, planes de acción, resúmenes y texto limpio — de una sola grabación.",
    ctaFooter:
      "El plan gratuito incluye 5 grabaciones al mes. Sin tarjeta de crédito.",
  },
  fr: {
    label: "Pour Consultants",
    heroTitle: "Conçu pour la Façon dont les Consultants Livrent Vraiment",
    heroDesc:
      "Arrêtez de dépenser des heures facturables en documentation de réunion. Enregistrez vos sessions clients, ateliers et entretiens — Sythio les transforme en rapports exécutifs, plans d'action et documentation propre que vous pouvez livrer immédiatement.",
    problemLabel: "Le problème",
    problemTitle: "Le Fardeau de la Documentation",
    problemDesc:
      "Les consultants vendent leur expertise, mais une quantité surprenante de leur temps est consacrée à rédiger ce qui s'est passé en réunion. Chaque session non documentée est du contexte perdu, des livrables retardés et une confiance client érodée.",
    problem1Title: "Réunions non documentées",
    problem1Desc:
      "Vous animez trois sessions clients dans une journée. Quand vous vous asseyez pour rédiger la première, les détails de la troisième ont déjà commencé à se brouiller. Des nuances importantes et préoccupations clients passent entre les mailles.",
    problem2Title: "Livrables retardés",
    problem2Desc:
      "L'écart entre la réunion et la documentation signifie que les livrables prennent plus de temps que prévu. Les clients remarquent quand le délai de réponse ralentit — et cela se reflète sur la qualité de votre engagement.",
    problem3Title: "Contexte perdu entre les sessions",
    problem3Desc:
      "Les engagements de plusieurs semaines impliquent des dizaines de conversations. Sans dossiers structurés, vous vous retrouvez à demander aux clients de répéter ce qu'ils vous ont dit il y a deux semaines — érodant la confiance qu'ils ont placée en vous.",
    outputsLabel: "Vos résultats",
    outputsTitle: "Ce que Sythio Crée pour Vous",
    outputsDesc:
      "Une session enregistrée devient plusieurs actifs prêts à livrer — chacun conçu pour une partie différente de votre workflow de conseil.",
    output1Title: "Rapport Exécutif",
    output1Desc:
      "Chaque réunion client devient un rapport exécutif soigné — prêt à partager avec les parties prenantes. Sythio capture la discussion, les décisions et les recommandations dans un format qui démontre votre rigueur et professionnalisme.",
    output2Title: "Plan d'Action",
    output2Desc:
      "Prochaines étapes structurées extraites de chaque conversation. Qui est responsable, ce qui doit se passer et quand — pour que les engagements clients maintiennent leur élan et que la responsabilité soit claire dès le départ.",
    output3Title: "Résumé",
    output3Desc:
      "Un aperçu concis de toute la session — le contexte, la discussion et les résultats. Parfait pour mettre à jour les membres de l'équipe absents ou rafraîchir votre mémoire avant le prochain engagement.",
    output4Title: "Texte Propre",
    output4Desc:
      "Le contenu complet de la réunion sous forme de prose soignée et lisible — sans les digressions, remplissage et répétitions. Idéal pour créer des documents de référence, alimenter des bases de connaissances ou construire des annexes de livrables.",
    useCasesLabel: "Cas d'utilisation",
    useCasesTitle: "Comment les Consultants Utilisent Sythio",
    useCase1Title: "Sessions de Stratégie",
    useCase1Desc:
      "Enregistrez vos sessions de stratégie avec les clients et laissez Sythio capturer la portée complète de la discussion. Priorités, compromis et décisions stratégiques sont documentés clairement — vous donnant un dossier complet pour construire vos recommandations.",
    useCase2Title: "Ateliers",
    useCase2Desc:
      "Les ateliers facilités génèrent une richesse de contributions de multiples participants. Sythio capture chaque voix, organise les contributions par locuteur et thème, et produit un résultat structuré qui devient la base de vos livrables.",
    useCase3Title: "Points Réguliers",
    useCase3Desc:
      "Les appels de suivi réguliers maintiennent les projets sur les rails mais génèrent une charge de documentation. Sythio transforme chaque point en un résumé avec des actions — créant un registre continu de progrès, décisions et priorités évoluant.",
    useCase4Title: "Entretiens avec les Parties Prenantes",
    useCase4Desc:
      "Les entretiens avec les parties prenantes à travers l'organisation client sont essentiels pour la découverte. Sythio capture chaque perspective avec précision avec attribution de locuteur — pour que vous puissiez comparer les points de vue et identifier les tendances entre les conversations.",
    pricingTitle: "Gratuit pour les Consultants pour Commencer",
    pricingDesc:
      "Le plan gratuit vous donne 5 enregistrements par mois — assez pour tester Sythio avec votre prochaine session client. Sans carte bancaire. Quand vous en avez besoin de plus, le plan Pro est à 12$/mois pour des enregistrements illimités et les 9 formats de sortie.",
    exploreTitle: "Explorer Plus",
    relatedUseCases: "Cas d'Utilisation",
    relatedFeatures: "Toutes les Fonctionnalités",
    relatedCompare: "Comparer les Outils",
    relatedPricing: "Tarifs",
    ctaTitle1: "Concentrez-vous sur la création de valeur.",
    ctaTitle2: "Laissez Sythio gérer la documentation.",
    ctaDesc:
      "Enregistrez votre prochaine session client et voyez ce que Sythio crée. Rapports exécutifs, plans d'action, résumés et texte propre — à partir d'un enregistrement.",
    ctaFooter:
      "Le plan gratuit inclut 5 enregistrements par mois. Sans carte bancaire.",
  },
  pt: {
    label: "Para Consultores",
    heroTitle: "Feito para Como os Consultores Realmente Entregam",
    heroDesc:
      "Pare de gastar horas faturáveis em documentação de reuniões. Grave suas sessões com clientes, workshops e entrevistas — Sythio transforma em relatórios executivos, planos de ação e documentação limpa que você pode entregar imediatamente.",
    problemLabel: "O problema",
    problemTitle: "O Fardo da Documentação",
    problemDesc:
      "Consultores vendem expertise, mas uma quantidade surpreendente do seu tempo vai para escrever o que aconteceu nas reuniões. Cada sessão não documentada é contexto perdido, entregas atrasadas e confiança do cliente erodida.",
    problem1Title: "Reuniões não documentadas",
    problem1Desc:
      "Você conduz três sessões com clientes em um dia. Quando se senta para escrever sobre a primeira, os detalhes da terceira já começaram a se turvar. Nuances importantes e preocupações do cliente escapam.",
    problem2Title: "Entregas atrasadas",
    problem2Desc:
      "A lacuna entre a reunião e a documentação significa que as entregas demoram mais do que deveriam. Os clientes notam quando o tempo de resposta desacelera — e isso reflete na qualidade do seu engajamento.",
    problem3Title: "Contexto perdido entre sessões",
    problem3Desc:
      "Engajamentos de várias semanas envolvem dezenas de conversas. Sem registros estruturados, você se encontra pedindo aos clientes que repitam o que disseram duas semanas atrás — erodindo a confiança que depositaram em você.",
    outputsLabel: "Seus resultados",
    outputsTitle: "O que o Sythio Cria para Você",
    outputsDesc:
      "Uma sessão gravada se torna múltiplos ativos prontos para entrega — cada um projetado para uma parte diferente do seu fluxo de trabalho de consultoria.",
    output1Title: "Relatório Executivo",
    output1Desc:
      "Cada reunião com cliente se torna um relatório executivo polido — pronto para compartilhar com stakeholders. Sythio captura a discussão, decisões e recomendações em um formato que demonstra sua minuciosidade e profissionalismo.",
    output2Title: "Plano de Ação",
    output2Desc:
      "Próximos passos estruturados extraídos de cada conversa. Quem é responsável, o que precisa acontecer e quando — para que os engajamentos com clientes mantenham o impulso e a responsabilidade seja clara desde o início.",
    output3Title: "Resumo",
    output3Desc:
      "Uma visão geral concisa de toda a sessão — o contexto, a discussão e os resultados. Perfeito para atualizar membros da equipe que não estiveram presentes ou refrescar sua memória antes do próximo engajamento.",
    output4Title: "Texto Limpo",
    output4Desc:
      "O conteúdo completo da reunião como prosa polida e legível — sem as divagações, preenchimentos e repetições. Ideal para criar documentos de referência, popular bases de conhecimento ou construir apêndices de entregas.",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Como os Consultores Usam o Sythio",
    useCase1Title: "Sessões de Estratégia",
    useCase1Desc:
      "Grave suas sessões de estratégia com clientes e deixe o Sythio capturar o escopo completo da discussão. Prioridades, trade-offs e decisões estratégicas são documentadas claramente — dando um registro abrangente para construir suas recomendações.",
    useCase2Title: "Workshops",
    useCase2Desc:
      "Workshops facilitados geram uma riqueza de contribuições de múltiplos participantes. Sythio captura cada voz, organiza contribuições por falante e tema, e produz um resultado estruturado que se torna a base das suas entregas.",
    useCase3Title: "Check-ins com Clientes",
    useCase3Desc:
      "Ligações regulares de acompanhamento mantêm projetos nos trilhos mas geram carga de documentação. Sythio transforma cada check-in em um resumo com itens de ação — criando um registro contínuo de progresso, decisões e prioridades em evolução.",
    useCase4Title: "Entrevistas com Stakeholders",
    useCase4Desc:
      "Entrevistas com stakeholders pela organização do cliente são essenciais para descoberta. Sythio captura cada perspectiva com precisão com atribuição de falante — para que você possa comparar pontos de vista e identificar padrões entre conversas.",
    pricingTitle: "Grátis para Consultores Começarem",
    pricingDesc:
      "O plano gratuito oferece 5 gravações por mês — suficiente para testar o Sythio com sua próxima sessão com cliente. Sem cartão de crédito. Quando precisar de mais, o plano Pro custa $15/mês para gravações ilimitadas e todos os 9 formatos de saída.",
    exploreTitle: "Explorar Mais",
    relatedUseCases: "Casos de Uso",
    relatedFeatures: "Todos os Recursos",
    relatedCompare: "Comparar Ferramentas",
    relatedPricing: "Preços",
    ctaTitle1: "Foque em entregar valor.",
    ctaTitle2: "Deixe o Sythio cuidar da documentação.",
    ctaDesc:
      "Grave sua próxima sessão com cliente e veja o que o Sythio cria. Relatórios executivos, planos de ação, resumos e texto limpo — de uma única gravação.",
    ctaFooter:
      "O plano gratuito inclui 5 gravações por mês. Sem cartão de crédito.",
  },
  it: {
    label: "Per Consulenti",
    heroTitle: "Progettato per Come i Consulenti Consegnano Davvero",
    heroDesc:
      "Smetti di spendere ore fatturabili nella documentazione delle riunioni. Registra le tue sessioni con i clienti, workshop e interviste — Sythio li trasforma in report esecutivi, piani d'azione e documentazione pulita che puoi consegnare immediatamente.",
    problemLabel: "Il problema",
    problemTitle: "Il Peso della Documentazione",
    problemDesc:
      "I consulenti vendono competenza, ma una quantità sorprendente del loro tempo va nella stesura di ciò che è successo nelle riunioni. Ogni sessione non documentata è contesto perso, deliverable ritardati e fiducia del cliente erosa.",
    problem1Title: "Riunioni non documentate",
    problem1Desc:
      "Conduci tre sessioni con clienti in un giorno. Quando ti siedi per scrivere della prima, i dettagli della terza hanno già iniziato a sfumare. Sfumature importanti e preoccupazioni del cliente sfuggono.",
    problem2Title: "Deliverable ritardati",
    problem2Desc:
      "Il divario tra riunione e documentazione significa che i deliverable richiedono più tempo del dovuto. I clienti notano quando i tempi di risposta rallentano — e si riflette sulla qualità del tuo engagement.",
    problem3Title: "Contesto perso tra le sessioni",
    problem3Desc:
      "Gli engagement di più settimane coinvolgono decine di conversazioni. Senza registri strutturati, ti ritrovi a chiedere ai clienti di ripetere quello che ti hanno detto due settimane fa — erodendo la fiducia che hanno riposto in te.",
    outputsLabel: "I tuoi risultati",
    outputsTitle: "Cosa Crea Sythio per Te",
    outputsDesc:
      "Una sessione registrata diventa molteplici asset pronti per la consegna — ciascuno progettato per una parte diversa del tuo workflow di consulenza.",
    output1Title: "Report Esecutivo",
    output1Desc:
      "Ogni riunione con il cliente diventa un report esecutivo curato — pronto da condividere con gli stakeholder. Sythio cattura la discussione, le decisioni e le raccomandazioni in un formato che dimostra la tua accuratezza e professionalità.",
    output2Title: "Piano d'Azione",
    output2Desc:
      "Prossimi passi strutturati estratti da ogni conversazione. Chi è responsabile, cosa deve accadere e quando — così gli engagement con i clienti mantengono lo slancio e la responsabilità è chiara dall'inizio.",
    output3Title: "Riassunto",
    output3Desc:
      "Una panoramica concisa dell'intera sessione — il contesto, la discussione e i risultati. Perfetto per aggiornare i membri del team che non erano presenti o rinfrescare la memoria prima del prossimo engagement.",
    output4Title: "Testo Pulito",
    output4Desc:
      "Il contenuto completo della riunione come prosa curata e leggibile — senza le divagazioni, i riempitivi e le ripetizioni. Ideale per creare documenti di riferimento, popolare basi di conoscenza o costruire appendici dei deliverable.",
    useCasesLabel: "Casi d'uso",
    useCasesTitle: "Come i Consulenti Usano Sythio",
    useCase1Title: "Sessioni di Strategia",
    useCase1Desc:
      "Registra le tue sessioni di strategia con i clienti e lascia che Sythio catturi la portata completa della discussione. Priorità, compromessi e decisioni strategiche sono documentati chiaramente — dandoti un registro completo su cui costruire le tue raccomandazioni.",
    useCase2Title: "Workshop",
    useCase2Desc:
      "I workshop facilitati generano una ricchezza di contributi da molteplici partecipanti. Sythio cattura ogni voce, organizza i contributi per parlante e tema, e produce un output strutturato che diventa la base dei tuoi deliverable.",
    useCase3Title: "Check-in con i Clienti",
    useCase3Desc:
      "Le chiamate regolari di follow-up mantengono i progetti in carreggiata ma generano carico di documentazione. Sythio trasforma ogni check-in in un riassunto con elementi d'azione — creando un registro continuo di progressi, decisioni e priorità in evoluzione.",
    useCase4Title: "Interviste con gli Stakeholder",
    useCase4Desc:
      "Le interviste con gli stakeholder nell'organizzazione del cliente sono essenziali per la discovery. Sythio cattura ogni prospettiva con precisione con attribuzione del parlante — così puoi confrontare i punti di vista e identificare pattern tra le conversazioni.",
    pricingTitle: "Gratis per i Consulenti per Iniziare",
    pricingDesc:
      "Il piano gratuito ti offre 5 registrazioni al mese — abbastanza per testare Sythio con la tua prossima sessione con un cliente. Senza carta di credito. Quando hai bisogno di più, il piano Pro costa $15/mese per registrazioni illimitate e tutti i 9 formati di output.",
    exploreTitle: "Esplora di Più",
    relatedUseCases: "Casi d'Uso",
    relatedFeatures: "Tutte le Funzionalità",
    relatedCompare: "Confronta Strumenti",
    relatedPricing: "Prezzi",
    ctaTitle1: "Concentrati sul fornire valore.",
    ctaTitle2: "Lascia che Sythio gestisca la documentazione.",
    ctaDesc:
      "Registra la tua prossima sessione con un cliente e guarda cosa crea Sythio. Report esecutivi, piani d'azione, riassunti e testo pulito — da una sola registrazione.",
    ctaFooter:
      "Il piano gratuito include 5 registrazioni al mese. Senza carta di credito.",
  },
};

export default function ConsultantsPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

  const outputs = [
    {
      title: c.output1Title,
      description: c.output1Desc,
      icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 01-2 2h-2z",
      color: "#f43f5e",
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
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      color: "#6366f1",
    },
    {
      title: c.output4Title,
      description: c.output4Desc,
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      color: "#0ea5e9",
    },
  ];

  const useCases = [
    {
      title: c.useCase1Title,
      description: c.useCase1Desc,
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    },
    {
      title: c.useCase2Title,
      description: c.useCase2Desc,
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      title: c.useCase3Title,
      description: c.useCase3Desc,
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    },
    {
      title: c.useCase4Title,
      description: c.useCase4Desc,
      icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 01-2 2h-2z",
    },
  ];

  const problems = [
    {
      title: c.problem1Title,
      description: c.problem1Desc,
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      color: "#f43f5e",
    },
    {
      title: c.problem2Title,
      description: c.problem2Desc,
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "#f59e0b",
    },
    {
      title: c.problem3Title,
      description: c.problem3Desc,
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      color: "#6366f1",
    },
  ];

  const relatedLinks = [
    { label: c.relatedUseCases, href: "/use-cases" },
    { label: c.relatedFeatures, href: "/features" },
    { label: c.relatedCompare, href: "/compare" },
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

      {/* The Consultant Problem */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.problemLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.problemTitle}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.problemDesc}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {problems.map((item) => (
              <ScrollScale key={item.title}>
              <div
                className="p-8 rounded-2xl bg-background border border-border-light"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${item.color}10` }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
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

      {/* What Sythio Creates for Consultants */}
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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {outputs.map((output) => (
              <ScrollScale key={output.title}>
              <div
                className="p-8 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
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
                <h3 className="text-lg font-semibold text-foreground mb-3">
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

      {/* How Consultants Use Sythio */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.useCasesLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.useCasesTitle}
              </h2>
            </TextReveal>
          </div>

          <GsapStagger stagger={0.08}>
          <div className="space-y-6 max-w-3xl mx-auto">
            {useCases.map((useCase) => (
              <ScrollScale key={useCase.title}>
              <div
                className="p-8 rounded-2xl bg-background border border-border-light"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-border-light flex items-center justify-center shrink-0">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted"
                    >
                      <path d={useCase.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
              </ScrollScale>
            ))}
          </div>
          </GsapStagger>
        </div>
      </section>

      {/* Pricing Highlight */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {c.pricingTitle}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.pricingDesc}
            </p>
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
