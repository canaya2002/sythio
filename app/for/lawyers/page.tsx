"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "For Lawyers",
    heroTitle: "Built for How Legal Professionals Actually Work",
    heroDesc:
      "Stop spending billable hours on note transcription. Record your consultations, depositions, and case discussions — Sythio turns them into structured case notes, key points, and clean records you can rely on.",
    problemLabel: "The problem",
    problemTitle: "The Legal Documentation Problem",
    problemDesc:
      "Legal professionals deal with conversations where every word matters. But the reality is that critical details get lost between the meeting room and the case file — and billable hours drain away on manual note-writing.",
    problem1Title: "Conversations go unstructured",
    problem1Desc:
      "Client consultations and depositions are rich with detail, but capturing them accurately in real time is nearly impossible. Key facts, dates, and admissions get lost in the volume of what was said.",
    problem2Title: "Billable hours on notes",
    problem2Desc:
      "Writing up consultation notes, deposition summaries, and meeting records consumes hours that could be spent on higher-value legal work. The documentation burden is real and relentless.",
    problem3Title: "Details missed under pressure",
    problem3Desc:
      "In fast-moving discussions — especially depositions and mediations — you are simultaneously listening, strategizing, and responding. Important details slip through when your attention is split.",
    outputsLabel: "Your outputs",
    outputsTitle: "What Sythio Creates for You",
    outputsDesc:
      "One recorded conversation becomes multiple structured outputs — each designed for a different part of your legal workflow.",
    output1Title: "Clean Text",
    output1Desc:
      "The full content of the consultation or deposition as polished, readable prose — without the pauses, false starts, and filler. Ideal for creating formal records, populating case files, or preparing documents for review.",
    output2Title: "Key Points",
    output2Desc:
      "Every critical fact, admission, date, and legal argument extracted and organized. No more rewinding recordings to find what was said — Sythio captures the substantive points and presents them clearly for case preparation.",
    output3Title: "Summary",
    output3Desc:
      "A concise overview of the entire conversation — the context, the substance, and the outcomes. Perfect for updating colleagues on case progress, briefing partners, or refreshing your memory before the next hearing.",
    output4Title: "Tasks",
    output4Desc:
      "Every action item, filing deadline, document request, and follow-up commitment extracted automatically — with speaker attribution. You know exactly what you committed to and what the client needs to provide.",
    useCasesLabel: "Use cases",
    useCasesTitle: "How Legal Professionals Use Sythio",
    useCase1Title: "Client Consultations",
    useCase1Desc:
      "Record your client consultations and let Sythio capture every detail. Facts, timelines, concerns, and instructions are documented accurately — so you can focus on advising your client rather than scribbling notes that you will struggle to read later.",
    useCase2Title: "Depositions",
    useCase2Desc:
      "Depositions contain critical testimony that shapes case strategy. Sythio structures the content by speaker and topic, extracts key admissions and contradictions, and produces clean text — giving you a searchable, organized record to reference during preparation.",
    useCase3Title: "Case Discussions",
    useCase3Desc:
      "Internal case discussions with colleagues generate strategy, analysis, and task assignments. Sythio captures the reasoning, the decisions, and the next steps — creating a record that keeps the entire team aligned as the matter evolves.",
    useCase4Title: "Mediations",
    useCase4Desc:
      "Mediation sessions involve nuanced positions, concessions, and proposals from multiple parties. Sythio documents each party's stance with speaker attribution, captures settlement terms discussed, and produces a structured summary — essential for post-mediation follow-through.",
    pricingTitle: "Free for Legal Professionals to Start",
    pricingDesc:
      "The free plan gives you 5 recordings per month — enough to test Sythio with your next consultation. No credit card required. When you need more, the Premium plan is $12/month for unlimited recordings and all 9 output formats.",
    exploreTitle: "Explore More",
    relatedUseCases: "Use Cases",
    relatedFeatures: "All Features",
    relatedCompare: "Compare Tools",
    relatedPricing: "Pricing",
    ctaTitle1: "Focus on the case.",
    ctaTitle2: "Let Sythio handle the notes.",
    ctaDesc:
      "Record your next consultation and see what Sythio creates. Clean text, key points, summaries, and tasks — from one recording.",
    ctaFooter:
      "Free plan includes 5 recordings per month. No credit card needed.",
  },
  es: {
    label: "Para Abogados",
    heroTitle: "Diseñado para Como los Profesionales Legales Realmente Trabajan",
    heroDesc:
      "Deja de gastar horas facturables en transcripción de notas. Graba tus consultas, deposiciones y discusiones de casos — Sythio las convierte en notas de caso estructuradas, puntos clave y registros limpios en los que puedes confiar.",
    problemLabel: "El problema",
    problemTitle: "El Problema de Documentación Legal",
    problemDesc:
      "Los profesionales legales lidian con conversaciones donde cada palabra importa. Pero la realidad es que los detalles críticos se pierden entre la sala de reuniones y el expediente del caso — y las horas facturables se drenan en la escritura manual de notas.",
    problem1Title: "Conversaciones desestructuradas",
    problem1Desc:
      "Las consultas con clientes y deposiciones son ricas en detalles, pero capturarlas con precisión en tiempo real es casi imposible. Hechos clave, fechas y admisiones se pierden en el volumen de lo dicho.",
    problem2Title: "Horas facturables en notas",
    problem2Desc:
      "Redactar notas de consulta, resúmenes de deposiciones y actas de reuniones consume horas que podrían dedicarse a trabajo legal de mayor valor. La carga de documentación es real e implacable.",
    problem3Title: "Detalles perdidos bajo presión",
    problem3Desc:
      "En discusiones rápidas — especialmente deposiciones y mediaciones — estás simultáneamente escuchando, estrategizando y respondiendo. Los detalles importantes se escapan cuando tu atención está dividida.",
    outputsLabel: "Tus resultados",
    outputsTitle: "Lo que Sythio Crea para Ti",
    outputsDesc:
      "Una conversación grabada se convierte en múltiples resultados estructurados — cada uno diseñado para una parte diferente de tu flujo de trabajo legal.",
    output1Title: "Texto Limpio",
    output1Desc:
      "El contenido completo de la consulta o deposición como prosa pulida y legible — sin las pausas, comienzos en falso y relleno. Ideal para crear registros formales, poblar expedientes de casos o preparar documentos para revisión.",
    output2Title: "Puntos Clave",
    output2Desc:
      "Cada hecho crítico, admisión, fecha y argumento legal extraído y organizado. No más rebobinar grabaciones para encontrar lo que se dijo — Sythio captura los puntos sustantivos y los presenta claramente para la preparación del caso.",
    output3Title: "Resumen",
    output3Desc:
      "Una visión general concisa de toda la conversación — el contexto, la sustancia y los resultados. Perfecto para actualizar a colegas sobre el progreso del caso, informar a socios o refrescar tu memoria antes de la próxima audiencia.",
    output4Title: "Tareas",
    output4Desc:
      "Cada elemento de acción, plazo de presentación, solicitud de documentos y compromiso de seguimiento extraído automáticamente — con atribución de hablante. Sabes exactamente a qué te comprometiste y qué necesita proporcionar el cliente.",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Cómo los Profesionales Legales Usan Sythio",
    useCase1Title: "Consultas con Clientes",
    useCase1Desc:
      "Graba tus consultas con clientes y deja que Sythio capture cada detalle. Hechos, cronologías, preocupaciones e instrucciones se documentan con precisión — para que puedas concentrarte en asesorar a tu cliente en lugar de garabatear notas que lucharás por leer.",
    useCase2Title: "Deposiciones",
    useCase2Desc:
      "Las deposiciones contienen testimonio crítico que moldea la estrategia del caso. Sythio estructura el contenido por hablante y tema, extrae admisiones y contradicciones clave, y produce texto limpio — dándote un registro organizado y buscable para referenciar durante la preparación.",
    useCase3Title: "Discusiones de Caso",
    useCase3Desc:
      "Las discusiones internas de caso con colegas generan estrategia, análisis y asignaciones de tareas. Sythio captura el razonamiento, las decisiones y los próximos pasos — creando un registro que mantiene a todo el equipo alineado mientras el asunto evoluciona.",
    useCase4Title: "Mediaciones",
    useCase4Desc:
      "Las sesiones de mediación involucran posiciones matizadas, concesiones y propuestas de múltiples partes. Sythio documenta la postura de cada parte con atribución de hablante, captura los términos de acuerdo discutidos y produce un resumen estructurado — esencial para el seguimiento post-mediación.",
    pricingTitle: "Gratis para que los Profesionales Legales Empiecen",
    pricingDesc:
      "El plan gratuito te da 5 grabaciones al mes — suficiente para probar Sythio con tu próxima consulta. Sin tarjeta de crédito. Cuando necesites más, el plan Pro es $12/mes para grabaciones ilimitadas y los 9 formatos de salida.",
    exploreTitle: "Explorar Más",
    relatedUseCases: "Casos de Uso",
    relatedFeatures: "Todas las Funciones",
    relatedCompare: "Comparar Herramientas",
    relatedPricing: "Precios",
    ctaTitle1: "Concéntrate en el caso.",
    ctaTitle2: "Deja que Sythio se encargue de las notas.",
    ctaDesc:
      "Graba tu próxima consulta y mira lo que Sythio crea. Texto limpio, puntos clave, resúmenes y tareas — de una sola grabación.",
    ctaFooter:
      "El plan gratuito incluye 5 grabaciones al mes. Sin tarjeta de crédito.",
  },
  fr: {
    label: "Pour Avocats",
    heroTitle: "Conçu pour la Façon dont les Professionnels du Droit Travaillent Vraiment",
    heroDesc:
      "Arrêtez de dépenser des heures facturables en transcription de notes. Enregistrez vos consultations, dépositions et discussions de dossier — Sythio les transforme en notes de dossier structurées, points clés et registres propres sur lesquels vous pouvez compter.",
    problemLabel: "Le problème",
    problemTitle: "Le Problème de Documentation Juridique",
    problemDesc:
      "Les professionnels du droit traitent des conversations où chaque mot compte. Mais la réalité est que les détails critiques se perdent entre la salle de réunion et le dossier — et les heures facturables s'écoulent en rédaction manuelle de notes.",
    problem1Title: "Conversations non structurées",
    problem1Desc:
      "Les consultations clients et dépositions sont riches en détails, mais les capturer avec précision en temps réel est quasi impossible. Faits clés, dates et aveux se perdent dans le volume de ce qui a été dit.",
    problem2Title: "Heures facturables sur les notes",
    problem2Desc:
      "Rédiger des notes de consultation, résumés de déposition et comptes rendus de réunion consume des heures qui pourraient être consacrées à un travail juridique à plus haute valeur. Le fardeau de la documentation est réel et incessant.",
    problem3Title: "Détails manqués sous pression",
    problem3Desc:
      "Dans les discussions rapides — surtout les dépositions et médiations — vous écoutez, stratégisez et répondez simultanément. Les détails importants échappent quand votre attention est divisée.",
    outputsLabel: "Vos résultats",
    outputsTitle: "Ce que Sythio Crée pour Vous",
    outputsDesc:
      "Une conversation enregistrée devient plusieurs résultats structurés — chacun conçu pour une partie différente de votre workflow juridique.",
    output1Title: "Texte Propre",
    output1Desc:
      "Le contenu complet de la consultation ou déposition sous forme de prose soignée et lisible — sans les pauses, faux départs et remplissage. Idéal pour créer des registres formels, alimenter les dossiers ou préparer des documents pour révision.",
    output2Title: "Points Clés",
    output2Desc:
      "Chaque fait critique, aveu, date et argument juridique extrait et organisé. Plus besoin de rembobiner les enregistrements pour trouver ce qui a été dit — Sythio capture les points substantifs et les présente clairement pour la préparation du dossier.",
    output3Title: "Résumé",
    output3Desc:
      "Un aperçu concis de toute la conversation — le contexte, la substance et les résultats. Parfait pour mettre à jour les collègues sur l'avancement du dossier, briefer les associés ou rafraîchir votre mémoire avant la prochaine audience.",
    output4Title: "Tâches",
    output4Desc:
      "Chaque action, échéance de dépôt, demande de document et engagement de suivi extrait automatiquement — avec attribution de locuteur. Vous savez exactement ce à quoi vous vous êtes engagé et ce que le client doit fournir.",
    useCasesLabel: "Cas d'utilisation",
    useCasesTitle: "Comment les Professionnels du Droit Utilisent Sythio",
    useCase1Title: "Consultations Clients",
    useCase1Desc:
      "Enregistrez vos consultations clients et laissez Sythio capturer chaque détail. Faits, chronologies, préoccupations et instructions sont documentés avec précision — pour que vous puissiez vous concentrer sur le conseil plutôt que griffonner des notes illisibles.",
    useCase2Title: "Dépositions",
    useCase2Desc:
      "Les dépositions contiennent des témoignages critiques qui façonnent la stratégie du dossier. Sythio structure le contenu par locuteur et sujet, extrait les aveux et contradictions clés, et produit un texte propre — vous donnant un registre organisé et consultable.",
    useCase3Title: "Discussions de Dossier",
    useCase3Desc:
      "Les discussions internes de dossier avec les collègues génèrent stratégie, analyse et attribution de tâches. Sythio capture le raisonnement, les décisions et les prochaines étapes — créant un registre qui garde toute l'équipe alignée.",
    useCase4Title: "Médiations",
    useCase4Desc:
      "Les sessions de médiation impliquent des positions nuancées, concessions et propositions de multiples parties. Sythio documente la position de chaque partie avec attribution de locuteur, capture les termes de règlement discutés et produit un résumé structuré — essentiel pour le suivi post-médiation.",
    pricingTitle: "Gratuit pour les Professionnels du Droit pour Commencer",
    pricingDesc:
      "Le plan gratuit vous donne 5 enregistrements par mois — assez pour tester Sythio avec votre prochaine consultation. Sans carte bancaire. Quand vous en avez besoin de plus, le plan Pro est à 12$/mois pour des enregistrements illimités et les 9 formats de sortie.",
    exploreTitle: "Explorer Plus",
    relatedUseCases: "Cas d'Utilisation",
    relatedFeatures: "Toutes les Fonctionnalités",
    relatedCompare: "Comparer les Outils",
    relatedPricing: "Tarifs",
    ctaTitle1: "Concentrez-vous sur l'affaire.",
    ctaTitle2: "Laissez Sythio gérer les notes.",
    ctaDesc:
      "Enregistrez votre prochaine consultation et voyez ce que Sythio crée. Texte propre, points clés, résumés et tâches — à partir d'un enregistrement.",
    ctaFooter:
      "Le plan gratuit inclut 5 enregistrements par mois. Sans carte bancaire.",
  },
  pt: {
    label: "Para Advogados",
    heroTitle: "Feito para Como os Profissionais Jurídicos Realmente Trabalham",
    heroDesc:
      "Pare de gastar horas faturáveis em transcrição de notas. Grave suas consultas, depoimentos e discussões de caso — Sythio transforma em notas de caso estruturadas, pontos-chave e registros limpos nos quais você pode confiar.",
    problemLabel: "O problema",
    problemTitle: "O Problema da Documentação Jurídica",
    problemDesc:
      "Profissionais jurídicos lidam com conversas onde cada palavra importa. Mas a realidade é que detalhes críticos se perdem entre a sala de reunião e o arquivo do caso — e horas faturáveis são drenadas em escrita manual de notas.",
    problem1Title: "Conversas desestruturadas",
    problem1Desc:
      "Consultas com clientes e depoimentos são ricos em detalhes, mas capturá-los com precisão em tempo real é quase impossível. Fatos-chave, datas e admissões se perdem no volume do que foi dito.",
    problem2Title: "Horas faturáveis em notas",
    problem2Desc:
      "Redigir notas de consulta, resumos de depoimentos e atas de reuniões consome horas que poderiam ser dedicadas a trabalho jurídico de maior valor. O fardo da documentação é real e implacável.",
    problem3Title: "Detalhes perdidos sob pressão",
    problem3Desc:
      "Em discussões rápidas — especialmente depoimentos e mediações — você está simultaneamente ouvindo, estrategizando e respondendo. Detalhes importantes escapam quando sua atenção está dividida.",
    outputsLabel: "Seus resultados",
    outputsTitle: "O que o Sythio Cria para Você",
    outputsDesc:
      "Uma conversa gravada se torna múltiplos resultados estruturados — cada um projetado para uma parte diferente do seu fluxo de trabalho jurídico.",
    output1Title: "Texto Limpo",
    output1Desc:
      "O conteúdo completo da consulta ou depoimento como prosa polida e legível — sem as pausas, falsos começos e preenchimentos. Ideal para criar registros formais, popular arquivos de caso ou preparar documentos para revisão.",
    output2Title: "Pontos-Chave",
    output2Desc:
      "Cada fato crítico, admissão, data e argumento jurídico extraído e organizado. Não precisa mais rebobinar gravações para encontrar o que foi dito — Sythio captura os pontos substantivos e os apresenta claramente para preparação do caso.",
    output3Title: "Resumo",
    output3Desc:
      "Uma visão geral concisa de toda a conversa — o contexto, a substância e os resultados. Perfeito para atualizar colegas sobre o progresso do caso, informar sócios ou refrescar sua memória antes da próxima audiência.",
    output4Title: "Tarefas",
    output4Desc:
      "Cada item de ação, prazo de protocolo, solicitação de documentos e compromisso de follow-up extraído automaticamente — com atribuição de falante. Você sabe exatamente o que se comprometeu e o que o cliente precisa fornecer.",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Como os Profissionais Jurídicos Usam o Sythio",
    useCase1Title: "Consultas com Clientes",
    useCase1Desc:
      "Grave suas consultas com clientes e deixe o Sythio capturar cada detalhe. Fatos, cronologias, preocupações e instruções são documentados com precisão — para que você possa focar em aconselhar seu cliente em vez de rabiscar notas ilegíveis.",
    useCase2Title: "Depoimentos",
    useCase2Desc:
      "Depoimentos contêm testemunho crítico que molda a estratégia do caso. Sythio estrutura o conteúdo por falante e tópico, extrai admissões e contradições-chave, e produz texto limpo — dando um registro organizado e pesquisável para referência durante a preparação.",
    useCase3Title: "Discussões de Caso",
    useCase3Desc:
      "Discussões internas de caso com colegas geram estratégia, análise e atribuições de tarefas. Sythio captura o raciocínio, as decisões e os próximos passos — criando um registro que mantém toda a equipe alinhada enquanto o caso evolui.",
    useCase4Title: "Mediações",
    useCase4Desc:
      "Sessões de mediação envolvem posições nuançadas, concessões e propostas de múltiplas partes. Sythio documenta a posição de cada parte com atribuição de falante, captura termos de acordo discutidos e produz um resumo estruturado — essencial para o acompanhamento pós-mediação.",
    pricingTitle: "Grátis para Profissionais Jurídicos Começarem",
    pricingDesc:
      "O plano gratuito oferece 5 gravações por mês — suficiente para testar o Sythio com sua próxima consulta. Sem cartão de crédito. Quando precisar de mais, o plano Pro custa $12/mês para gravações ilimitadas e todos os 9 formatos de saída.",
    exploreTitle: "Explorar Mais",
    relatedUseCases: "Casos de Uso",
    relatedFeatures: "Todos os Recursos",
    relatedCompare: "Comparar Ferramentas",
    relatedPricing: "Preços",
    ctaTitle1: "Foque no caso.",
    ctaTitle2: "Deixe o Sythio cuidar das notas.",
    ctaDesc:
      "Grave sua próxima consulta e veja o que o Sythio cria. Texto limpo, pontos-chave, resumos e tarefas — de uma única gravação.",
    ctaFooter:
      "O plano gratuito inclui 5 gravações por mês. Sem cartão de crédito.",
  },
  it: {
    label: "Per Avvocati",
    heroTitle: "Progettato per Come i Professionisti Legali Lavorano Davvero",
    heroDesc:
      "Smetti di spendere ore fatturabili nella trascrizione di appunti. Registra le tue consulenze, deposizioni e discussioni di caso — Sythio li trasforma in note di caso strutturate, punti chiave e registri puliti su cui puoi fare affidamento.",
    problemLabel: "Il problema",
    problemTitle: "Il Problema della Documentazione Legale",
    problemDesc:
      "I professionisti legali trattano conversazioni dove ogni parola conta. Ma la realtà è che i dettagli critici si perdono tra la sala riunioni e il fascicolo — e le ore fatturabili si prosciugano nella scrittura manuale di appunti.",
    problem1Title: "Conversazioni non strutturate",
    problem1Desc:
      "Le consulenze con i clienti e le deposizioni sono ricche di dettagli, ma catturarli con precisione in tempo reale è quasi impossibile. Fatti chiave, date e ammissioni si perdono nel volume di ciò che è stato detto.",
    problem2Title: "Ore fatturabili sugli appunti",
    problem2Desc:
      "Redigere note di consulenza, riassunti di deposizioni e verbali di riunioni consuma ore che potrebbero essere dedicate a lavoro legale di maggior valore. Il peso della documentazione è reale e inesorabile.",
    problem3Title: "Dettagli persi sotto pressione",
    problem3Desc:
      "Nelle discussioni rapide — specialmente deposizioni e mediazioni — stai simultaneamente ascoltando, elaborando strategie e rispondendo. I dettagli importanti sfuggono quando la tua attenzione è divisa.",
    outputsLabel: "I tuoi risultati",
    outputsTitle: "Cosa Crea Sythio per Te",
    outputsDesc:
      "Una conversazione registrata diventa molteplici risultati strutturati — ciascuno progettato per una parte diversa del tuo workflow legale.",
    output1Title: "Testo Pulito",
    output1Desc:
      "Il contenuto completo della consulenza o deposizione come prosa curata e leggibile — senza le pause, i falsi inizi e i riempitivi. Ideale per creare registri formali, popolare fascicoli o preparare documenti per la revisione.",
    output2Title: "Punti Chiave",
    output2Desc:
      "Ogni fatto critico, ammissione, data e argomento legale estratto e organizzato. Non serve più riavvolgere le registrazioni per trovare ciò che è stato detto — Sythio cattura i punti sostanziali e li presenta chiaramente per la preparazione del caso.",
    output3Title: "Riassunto",
    output3Desc:
      "Una panoramica concisa dell'intera conversazione — il contesto, la sostanza e i risultati. Perfetto per aggiornare i colleghi sui progressi del caso, informare i partner o rinfrescare la memoria prima della prossima udienza.",
    output4Title: "Attività",
    output4Desc:
      "Ogni elemento d'azione, scadenza di deposito, richiesta di documenti e impegno di follow-up estratto automaticamente — con attribuzione del parlante. Sai esattamente a cosa ti sei impegnato e cosa il cliente deve fornire.",
    useCasesLabel: "Casi d'uso",
    useCasesTitle: "Come i Professionisti Legali Usano Sythio",
    useCase1Title: "Consulenze con i Clienti",
    useCase1Desc:
      "Registra le tue consulenze con i clienti e lascia che Sythio catturi ogni dettaglio. Fatti, cronologie, preoccupazioni e istruzioni sono documentati con precisione — così puoi concentrarti sul consigliare il tuo cliente invece di scarabocchiare appunti illeggibili.",
    useCase2Title: "Deposizioni",
    useCase2Desc:
      "Le deposizioni contengono testimonianze critiche che plasmano la strategia del caso. Sythio struttura il contenuto per parlante e argomento, estrae ammissioni e contraddizioni chiave, e produce testo pulito — dandoti un registro organizzato e ricercabile da consultare durante la preparazione.",
    useCase3Title: "Discussioni di Caso",
    useCase3Desc:
      "Le discussioni interne di caso con i colleghi generano strategia, analisi e assegnazioni di attività. Sythio cattura il ragionamento, le decisioni e i prossimi passi — creando un registro che mantiene l'intero team allineato mentre il caso evolve.",
    useCase4Title: "Mediazioni",
    useCase4Desc:
      "Le sessioni di mediazione coinvolgono posizioni sfumate, concessioni e proposte da più parti. Sythio documenta la posizione di ogni parte con attribuzione del parlante, cattura i termini di accordo discussi e produce un riassunto strutturato — essenziale per il follow-through post-mediazione.",
    pricingTitle: "Gratis per i Professionisti Legali per Iniziare",
    pricingDesc:
      "Il piano gratuito ti offre 5 registrazioni al mese — abbastanza per testare Sythio con la tua prossima consulenza. Senza carta di credito. Quando hai bisogno di più, il piano Pro costa $12/mese per registrazioni illimitate e tutti i 9 formati di output.",
    exploreTitle: "Esplora di Più",
    relatedUseCases: "Casi d'Uso",
    relatedFeatures: "Tutte le Funzionalità",
    relatedCompare: "Confronta Strumenti",
    relatedPricing: "Prezzi",
    ctaTitle1: "Concentrati sul caso.",
    ctaTitle2: "Lascia che Sythio gestisca gli appunti.",
    ctaDesc:
      "Registra la tua prossima consulenza e guarda cosa crea Sythio. Testo pulito, punti chiave, riassunti e attività — da una sola registrazione.",
    ctaFooter:
      "Il piano gratuito include 5 registrazioni al mese. Senza carta di credito.",
  },
};

export default function LawyersPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

  const outputs = [
    {
      title: c.output1Title,
      description: c.output1Desc,
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      color: "#0ea5e9",
    },
    {
      title: c.output2Title,
      description: c.output2Desc,
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      color: "#f97316",
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
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      color: "#22c55e",
    },
  ];

  const useCases = [
    {
      title: c.useCase1Title,
      description: c.useCase1Desc,
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      title: c.useCase2Title,
      description: c.useCase2Desc,
      icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 01-2 2h-2z",
    },
    {
      title: c.useCase3Title,
      description: c.useCase3Desc,
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    },
    {
      title: c.useCase4Title,
      description: c.useCase4Desc,
      icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
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

      {/* The Legal Problem */}
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

      {/* What Sythio Creates for Lawyers */}
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

      {/* How Lawyers Use Sythio */}
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
