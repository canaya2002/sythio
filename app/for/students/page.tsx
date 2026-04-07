"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "For Students",
    heroTitle: "Built for How Students Actually Learn",
    heroDesc:
      "Stop choosing between listening and note-taking. Record your lectures, study groups, and tutorials — Sythio turns them into organized study notes, key concepts, and summaries you can actually learn from.",
    problemLabel: "The problem",
    problemTitle: "The Note-Taking Tradeoff",
    problemDesc:
      "Every student faces the same impossible choice: focus on understanding the lecture, or focus on writing everything down. You cannot do both well at the same time.",
    problem1Title: "Divided attention",
    problem1Desc:
      "When you are writing, you are not listening. When you are listening, you are not writing. Important concepts slip through the gaps between the two.",
    problem2Title: "Unstructured notes",
    problem2Desc:
      "Even when you manage to take notes, they are often disorganized — a mix of half-sentences, abbreviations, and arrows that make little sense during revision.",
    problem3Title: "Poor revision material",
    problem3Desc:
      "When exams arrive, your notes are incomplete, your memory has faded, and you are left trying to reconstruct what was actually taught weeks ago.",
    outputsLabel: "Your outputs",
    outputsTitle: "What Sythio Creates for You",
    outputsDesc:
      "One recording becomes multiple study resources — each designed for a different part of your learning process.",
    output1Title: "Study Notes",
    output1Desc:
      "Sythio creates organized, structured study notes from your lectures and study sessions. Key concepts are highlighted, terms are defined in context, and information is grouped by topic — ready for review.",
    output2Title: "Key Points",
    output2Desc:
      "Every important concept, definition, and argument extracted and organized. No more rewinding to find what the professor emphasized — Sythio captures it all and presents it clearly.",
    output3Title: "Summary",
    output3Desc:
      "A concise summary of the entire lecture or study session. Perfect for quick revision before an exam or catching up on a class you missed. The big picture, captured clearly.",
    output4Title: "Clean Text",
    output4Desc:
      "The full content of the lecture as polished, readable prose — without the ums, pauses, tangents, and filler. Useful for creating reference documents or sharing notes with classmates.",
    useCasesLabel: "Use cases",
    useCasesTitle: "How Students Use Sythio",
    useCase1Title: "Lectures",
    useCase1Desc:
      "Record your lectures and let Sythio do the note-taking. You stay present and engaged while Sythio captures everything — study notes, key concepts, summary, and clean text. Review later with structured, organized content instead of scattered handwritten notes.",
    useCase2Title: "Study Groups",
    useCase2Desc:
      "Record your study group discussions and Sythio will organize the conversation by topic. Speaker detection means you know who raised each point, who asked which question, and what conclusions the group reached together.",
    useCase3Title: "Exam Revision",
    useCase3Desc:
      "Revisiting a semester of lectures before exams? Sythio's summaries and key points give you a structured revision path. Instead of re-watching hours of recordings, review the essential concepts in minutes.",
    useCase4Title: "Office Hours & Tutorials",
    useCase4Desc:
      "Record your office hours conversations with professors or tutoring sessions. Sythio captures the explanations, worked examples, and advice — so you can focus on understanding in the moment and review the details later.",
    pricingTitle: "Free for Students to Start",
    pricingDesc:
      "The free plan gives you 5 recordings per month — enough to test Sythio with your next lecture. No credit card required. When you need more, the Premium plan is $12/month for unlimited recordings and all 9 output formats.",
    exploreTitle: "Explore More",
    relatedUseCases: "Use Cases",
    relatedFeatures: "All Features",
    relatedCompare: "Compare Tools",
    relatedPricing: "Pricing",
    ctaTitle1: "Focus on learning.",
    ctaTitle2: "Let Sythio take the notes.",
    ctaDesc:
      "Record your next lecture and see what Sythio creates. Study notes, key points, summaries, and clean text — from one recording.",
    ctaFooter:
      "Free plan includes 5 recordings per month. No credit card needed.",
  },
  es: {
    label: "Para Estudiantes",
    heroTitle: "Diseñado para Como los Estudiantes Realmente Aprenden",
    heroDesc:
      "Deja de elegir entre escuchar y tomar apuntes. Graba tus clases, grupos de estudio y tutorías — Sythio los convierte en apuntes organizados, conceptos clave y resúmenes de los que realmente puedes aprender.",
    problemLabel: "El problema",
    problemTitle: "El Dilema de Tomar Apuntes",
    problemDesc:
      "Todos los estudiantes enfrentan la misma elección imposible: concentrarse en entender la clase o concentrarse en escribir todo. No puedes hacer ambas cosas bien al mismo tiempo.",
    problem1Title: "Atención dividida",
    problem1Desc:
      "Cuando escribes, no estás escuchando. Cuando escuchas, no estás escribiendo. Los conceptos importantes se pierden en los huecos entre ambos.",
    problem2Title: "Apuntes desestructurados",
    problem2Desc:
      "Incluso cuando logras tomar apuntes, a menudo están desorganizados — una mezcla de frases a medias, abreviaturas y flechas que tienen poco sentido durante la revisión.",
    problem3Title: "Material de revisión deficiente",
    problem3Desc:
      "Cuando llegan los exámenes, tus apuntes están incompletos, tu memoria se ha desvanecido y te quedas intentando reconstruir lo que realmente se enseñó semanas atrás.",
    outputsLabel: "Tus resultados",
    outputsTitle: "Lo que Sythio Crea para Ti",
    outputsDesc:
      "Una grabación se convierte en múltiples recursos de estudio — cada uno diseñado para una parte diferente de tu proceso de aprendizaje.",
    output1Title: "Apuntes de Estudio",
    output1Desc:
      "Sythio crea apuntes de estudio organizados y estructurados a partir de tus clases y sesiones de estudio. Los conceptos clave se resaltan, los términos se definen en contexto y la información se agrupa por tema — listos para revisar.",
    output2Title: "Puntos Clave",
    output2Desc:
      "Cada concepto, definición y argumento importante extraído y organizado. No más rebobinar para encontrar lo que el profesor enfatizó — Sythio lo captura todo y lo presenta claramente.",
    output3Title: "Resumen",
    output3Desc:
      "Un resumen conciso de toda la clase o sesión de estudio. Perfecto para una revisión rápida antes de un examen o para ponerte al día con una clase que te perdiste. La imagen general, capturada claramente.",
    output4Title: "Texto Limpio",
    output4Desc:
      "El contenido completo de la clase como prosa pulida y legible — sin los ehs, pausas, divagaciones y relleno. Útil para crear documentos de referencia o compartir apuntes con compañeros.",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Cómo los Estudiantes Usan Sythio",
    useCase1Title: "Clases",
    useCase1Desc:
      "Graba tus clases y deja que Sythio tome los apuntes. Tú te mantienes presente y comprometido mientras Sythio captura todo — apuntes de estudio, conceptos clave, resumen y texto limpio. Revisa después con contenido estructurado y organizado en lugar de apuntes escritos a mano dispersos.",
    useCase2Title: "Grupos de Estudio",
    useCase2Desc:
      "Graba las discusiones de tu grupo de estudio y Sythio organizará la conversación por tema. La detección de hablantes significa que sabes quién planteó cada punto, quién hizo cada pregunta y a qué conclusiones llegó el grupo.",
    useCase3Title: "Revisión para Exámenes",
    useCase3Desc:
      "¿Revisando un semestre de clases antes de los exámenes? Los resúmenes y puntos clave de Sythio te dan un camino de revisión estructurado. En lugar de volver a ver horas de grabaciones, revisa los conceptos esenciales en minutos.",
    useCase4Title: "Horas de Oficina y Tutorías",
    useCase4Desc:
      "Graba tus conversaciones en horas de oficina con profesores o sesiones de tutoría. Sythio captura las explicaciones, ejemplos resueltos y consejos — para que puedas concentrarte en entender en el momento y revisar los detalles después.",
    pricingTitle: "Gratis para que los Estudiantes Empiecen",
    pricingDesc:
      "El plan gratuito te da 5 grabaciones al mes — suficiente para probar Sythio con tu próxima clase. Sin tarjeta de crédito. Cuando necesites más, el plan Pro es $12/mes para grabaciones ilimitadas y los 9 formatos de salida.",
    exploreTitle: "Explorar Más",
    relatedUseCases: "Casos de Uso",
    relatedFeatures: "Todas las Funciones",
    relatedCompare: "Comparar Herramientas",
    relatedPricing: "Precios",
    ctaTitle1: "Concéntrate en aprender.",
    ctaTitle2: "Deja que Sythio tome los apuntes.",
    ctaDesc:
      "Graba tu próxima clase y mira lo que Sythio crea. Apuntes de estudio, puntos clave, resúmenes y texto limpio — de una sola grabación.",
    ctaFooter:
      "El plan gratuito incluye 5 grabaciones al mes. Sin tarjeta de crédito.",
  },
  fr: {
    label: "Pour Étudiants",
    heroTitle: "Conçu pour la Façon dont les Étudiants Apprennent Vraiment",
    heroDesc:
      "Arrêtez de choisir entre écouter et prendre des notes. Enregistrez vos cours, groupes d'étude et tutoriels — Sythio les transforme en notes d'étude organisées, concepts clés et résumés dont vous pouvez vraiment apprendre.",
    problemLabel: "Le problème",
    problemTitle: "Le Compromis de la Prise de Notes",
    problemDesc:
      "Chaque étudiant fait face au même choix impossible : se concentrer sur la compréhension du cours ou se concentrer sur tout écrire. Vous ne pouvez pas bien faire les deux en même temps.",
    problem1Title: "Attention divisée",
    problem1Desc:
      "Quand vous écrivez, vous n'écoutez pas. Quand vous écoutez, vous n'écrivez pas. Les concepts importants passent entre les mailles du filet.",
    problem2Title: "Notes non structurées",
    problem2Desc:
      "Même quand vous réussissez à prendre des notes, elles sont souvent désorganisées — un mélange de demi-phrases, d'abréviations et de flèches qui n'ont guère de sens lors de la révision.",
    problem3Title: "Matériel de révision médiocre",
    problem3Desc:
      "Quand les examens arrivent, vos notes sont incomplètes, votre mémoire s'est estompée et vous essayez de reconstruire ce qui a été réellement enseigné il y a des semaines.",
    outputsLabel: "Vos résultats",
    outputsTitle: "Ce que Sythio Crée pour Vous",
    outputsDesc:
      "Un enregistrement devient plusieurs ressources d'étude — chacune conçue pour une partie différente de votre processus d'apprentissage.",
    output1Title: "Notes d'Étude",
    output1Desc:
      "Sythio crée des notes d'étude organisées et structurées à partir de vos cours et sessions d'étude. Les concepts clés sont mis en évidence, les termes sont définis en contexte et les informations sont regroupées par sujet — prêtes pour la révision.",
    output2Title: "Points Clés",
    output2Desc:
      "Chaque concept, définition et argument important extrait et organisé. Plus besoin de rembobiner pour trouver ce que le professeur a souligné — Sythio capture tout et le présente clairement.",
    output3Title: "Résumé",
    output3Desc:
      "Un résumé concis de tout le cours ou session d'étude. Parfait pour une révision rapide avant un examen ou pour rattraper un cours manqué. La vue d'ensemble, capturée clairement.",
    output4Title: "Texte Propre",
    output4Desc:
      "Le contenu complet du cours sous forme de prose soignée et lisible — sans les euh, pauses, digressions et remplissage. Utile pour créer des documents de référence ou partager des notes avec vos camarades.",
    useCasesLabel: "Cas d'utilisation",
    useCasesTitle: "Comment les Étudiants Utilisent Sythio",
    useCase1Title: "Cours",
    useCase1Desc:
      "Enregistrez vos cours et laissez Sythio prendre les notes. Vous restez présent et engagé pendant que Sythio capture tout — notes d'étude, concepts clés, résumé et texte propre. Révisez ensuite avec un contenu structuré et organisé au lieu de notes manuscrites dispersées.",
    useCase2Title: "Groupes d'Étude",
    useCase2Desc:
      "Enregistrez les discussions de votre groupe d'étude et Sythio organisera la conversation par sujet. La détection des locuteurs signifie que vous savez qui a soulevé chaque point, qui a posé chaque question et quelles conclusions le groupe a atteintes.",
    useCase3Title: "Révision d'Examens",
    useCase3Desc:
      "Vous révisez un semestre de cours avant les examens ? Les résumés et points clés de Sythio vous donnent un parcours de révision structuré. Au lieu de revoir des heures d'enregistrements, révisez les concepts essentiels en minutes.",
    useCase4Title: "Heures de Bureau et Tutoriels",
    useCase4Desc:
      "Enregistrez vos conversations en heures de bureau avec les professeurs ou sessions de tutorat. Sythio capture les explications, exemples résolus et conseils — pour que vous puissiez vous concentrer sur la compréhension sur le moment et revoir les détails plus tard.",
    pricingTitle: "Gratuit pour les Étudiants pour Commencer",
    pricingDesc:
      "Le plan gratuit vous donne 5 enregistrements par mois — assez pour tester Sythio avec votre prochain cours. Sans carte bancaire. Quand vous en avez besoin de plus, le plan Pro est à 12$/mois pour des enregistrements illimités et les 9 formats de sortie.",
    exploreTitle: "Explorer Plus",
    relatedUseCases: "Cas d'Utilisation",
    relatedFeatures: "Toutes les Fonctionnalités",
    relatedCompare: "Comparer les Outils",
    relatedPricing: "Tarifs",
    ctaTitle1: "Concentrez-vous sur l'apprentissage.",
    ctaTitle2: "Laissez Sythio prendre les notes.",
    ctaDesc:
      "Enregistrez votre prochain cours et voyez ce que Sythio crée. Notes d'étude, points clés, résumés et texte propre — à partir d'un seul enregistrement.",
    ctaFooter:
      "Le plan gratuit inclut 5 enregistrements par mois. Sans carte bancaire.",
  },
  pt: {
    label: "Para Estudantes",
    heroTitle: "Feito para Como os Estudantes Realmente Aprendem",
    heroDesc:
      "Pare de escolher entre ouvir e fazer anotações. Grave suas aulas, grupos de estudo e tutorias — Sythio transforma em anotações organizadas, conceitos-chave e resumos dos quais você pode realmente aprender.",
    problemLabel: "O problema",
    problemTitle: "O Dilema das Anotações",
    problemDesc:
      "Todo estudante enfrenta a mesma escolha impossível: focar em entender a aula ou focar em escrever tudo. Você não consegue fazer ambos bem ao mesmo tempo.",
    problem1Title: "Atenção dividida",
    problem1Desc:
      "Quando você está escrevendo, não está ouvindo. Quando está ouvindo, não está escrevendo. Conceitos importantes escapam pelas lacunas entre os dois.",
    problem2Title: "Anotações desestruturadas",
    problem2Desc:
      "Mesmo quando você consegue fazer anotações, elas geralmente são desorganizadas — uma mistura de meias-frases, abreviações e setas que fazem pouco sentido durante a revisão.",
    problem3Title: "Material de revisão ruim",
    problem3Desc:
      "Quando os exames chegam, suas anotações estão incompletas, sua memória desvaneceu e você fica tentando reconstruir o que foi realmente ensinado semanas atrás.",
    outputsLabel: "Seus resultados",
    outputsTitle: "O que o Sythio Cria para Você",
    outputsDesc:
      "Uma gravação se transforma em múltiplos recursos de estudo — cada um projetado para uma parte diferente do seu processo de aprendizagem.",
    output1Title: "Notas de Estudo",
    output1Desc:
      "Sythio cria notas de estudo organizadas e estruturadas a partir de suas aulas e sessões de estudo. Conceitos-chave são destacados, termos são definidos em contexto e informações são agrupadas por tópico — prontas para revisão.",
    output2Title: "Pontos-Chave",
    output2Desc:
      "Cada conceito, definição e argumento importante extraído e organizado. Não precisa mais rebobinar para encontrar o que o professor enfatizou — Sythio captura tudo e apresenta claramente.",
    output3Title: "Resumo",
    output3Desc:
      "Um resumo conciso de toda a aula ou sessão de estudo. Perfeito para revisão rápida antes de uma prova ou para recuperar uma aula perdida. A visão geral, capturada claramente.",
    output4Title: "Texto Limpo",
    output4Desc:
      "O conteúdo completo da aula como prosa polida e legível — sem os éhs, pausas, divagações e preenchimentos. Útil para criar documentos de referência ou compartilhar anotações com colegas.",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Como os Estudantes Usam o Sythio",
    useCase1Title: "Aulas",
    useCase1Desc:
      "Grave suas aulas e deixe o Sythio fazer as anotações. Você fica presente e engajado enquanto o Sythio captura tudo — notas de estudo, conceitos-chave, resumo e texto limpo. Revise depois com conteúdo estruturado e organizado em vez de anotações manuscritas dispersas.",
    useCase2Title: "Grupos de Estudo",
    useCase2Desc:
      "Grave as discussões do seu grupo de estudo e o Sythio organizará a conversa por tópico. A detecção de falantes significa que você sabe quem levantou cada ponto, quem fez cada pergunta e quais conclusões o grupo chegou.",
    useCase3Title: "Revisão para Provas",
    useCase3Desc:
      "Revisando um semestre de aulas antes das provas? Os resumos e pontos-chave do Sythio dão um caminho de revisão estruturado. Em vez de rever horas de gravações, revise os conceitos essenciais em minutos.",
    useCase4Title: "Horários de Atendimento e Tutorias",
    useCase4Desc:
      "Grave suas conversas em horários de atendimento com professores ou sessões de tutoria. Sythio captura as explicações, exemplos resolvidos e conselhos — para que você possa focar em entender no momento e revisar os detalhes depois.",
    pricingTitle: "Grátis para Estudantes Começarem",
    pricingDesc:
      "O plano gratuito oferece 5 gravações por mês — suficiente para testar o Sythio com sua próxima aula. Sem cartão de crédito. Quando precisar de mais, o plano Pro custa $12/mês para gravações ilimitadas e todos os 9 formatos de saída.",
    exploreTitle: "Explorar Mais",
    relatedUseCases: "Casos de Uso",
    relatedFeatures: "Todos os Recursos",
    relatedCompare: "Comparar Ferramentas",
    relatedPricing: "Preços",
    ctaTitle1: "Foque no aprendizado.",
    ctaTitle2: "Deixe o Sythio fazer as anotações.",
    ctaDesc:
      "Grave sua próxima aula e veja o que o Sythio cria. Notas de estudo, pontos-chave, resumos e texto limpo — de uma única gravação.",
    ctaFooter:
      "O plano gratuito inclui 5 gravações por mês. Sem cartão de crédito.",
  },
  it: {
    label: "Per Studenti",
    heroTitle: "Progettato per Come gli Studenti Imparano Davvero",
    heroDesc:
      "Smetti di scegliere tra ascoltare e prendere appunti. Registra le tue lezioni, gruppi di studio e tutorial — Sythio li trasforma in appunti organizzati, concetti chiave e riassunti da cui puoi davvero imparare.",
    problemLabel: "Il problema",
    problemTitle: "Il Compromesso degli Appunti",
    problemDesc:
      "Ogni studente affronta la stessa scelta impossibile: concentrarsi sulla comprensione della lezione o concentrarsi sullo scrivere tutto. Non puoi fare bene entrambe le cose contemporaneamente.",
    problem1Title: "Attenzione divisa",
    problem1Desc:
      "Quando scrivi, non stai ascoltando. Quando ascolti, non stai scrivendo. I concetti importanti scivolano tra le lacune tra i due.",
    problem2Title: "Appunti non strutturati",
    problem2Desc:
      "Anche quando riesci a prendere appunti, spesso sono disorganizzati — un mix di mezze frasi, abbreviazioni e frecce che hanno poco senso durante la revisione.",
    problem3Title: "Materiale di revisione scadente",
    problem3Desc:
      "Quando arrivano gli esami, i tuoi appunti sono incompleti, la tua memoria è sbiadita e ti ritrovi a cercare di ricostruire ciò che è stato realmente insegnato settimane fa.",
    outputsLabel: "I tuoi risultati",
    outputsTitle: "Cosa Crea Sythio per Te",
    outputsDesc:
      "Una registrazione diventa molteplici risorse di studio — ciascuna progettata per una parte diversa del tuo processo di apprendimento.",
    output1Title: "Appunti di Studio",
    output1Desc:
      "Sythio crea appunti di studio organizzati e strutturati dalle tue lezioni e sessioni di studio. I concetti chiave sono evidenziati, i termini sono definiti nel contesto e le informazioni sono raggruppate per argomento — pronti per la revisione.",
    output2Title: "Punti Chiave",
    output2Desc:
      "Ogni concetto, definizione e argomento importante estratto e organizzato. Non serve più riavvolgere per trovare ciò che il professore ha enfatizzato — Sythio cattura tutto e lo presenta chiaramente.",
    output3Title: "Riassunto",
    output3Desc:
      "Un riassunto conciso dell'intera lezione o sessione di studio. Perfetto per una revisione rapida prima di un esame o per recuperare una lezione persa. Il quadro generale, catturato chiaramente.",
    output4Title: "Testo Pulito",
    output4Desc:
      "Il contenuto completo della lezione come prosa curata e leggibile — senza gli ehm, pause, divagazioni e riempitivi. Utile per creare documenti di riferimento o condividere appunti con i compagni.",
    useCasesLabel: "Casi d'uso",
    useCasesTitle: "Come gli Studenti Usano Sythio",
    useCase1Title: "Lezioni",
    useCase1Desc:
      "Registra le tue lezioni e lascia che Sythio prenda gli appunti. Tu rimani presente e coinvolto mentre Sythio cattura tutto — appunti di studio, concetti chiave, riassunto e testo pulito. Rivedi dopo con contenuto strutturato e organizzato invece di appunti scritti a mano sparsi.",
    useCase2Title: "Gruppi di Studio",
    useCase2Desc:
      "Registra le discussioni del tuo gruppo di studio e Sythio organizzerà la conversazione per argomento. Il rilevamento dei parlanti significa che sai chi ha sollevato ogni punto, chi ha posto ogni domanda e quali conclusioni ha raggiunto il gruppo.",
    useCase3Title: "Revisione Esami",
    useCase3Desc:
      "Stai ripassando un semestre di lezioni prima degli esami? I riassunti e punti chiave di Sythio ti danno un percorso di revisione strutturato. Invece di riguardare ore di registrazioni, rivedi i concetti essenziali in pochi minuti.",
    useCase4Title: "Ricevimento e Tutorial",
    useCase4Desc:
      "Registra le tue conversazioni durante il ricevimento con i professori o le sessioni di tutoraggio. Sythio cattura le spiegazioni, gli esempi svolti e i consigli — così puoi concentrarti sulla comprensione nel momento e rivedere i dettagli dopo.",
    pricingTitle: "Gratis per gli Studenti per Iniziare",
    pricingDesc:
      "Il piano gratuito ti offre 5 registrazioni al mese — abbastanza per testare Sythio con la tua prossima lezione. Senza carta di credito. Quando hai bisogno di più, il piano Pro costa $12/mese per registrazioni illimitate e tutti i 9 formati di output.",
    exploreTitle: "Esplora di Più",
    relatedUseCases: "Casi d'Uso",
    relatedFeatures: "Tutte le Funzionalità",
    relatedCompare: "Confronta Strumenti",
    relatedPricing: "Prezzi",
    ctaTitle1: "Concentrati sull'apprendimento.",
    ctaTitle2: "Lascia che Sythio prenda gli appunti.",
    ctaDesc:
      "Registra la tua prossima lezione e guarda cosa crea Sythio. Appunti di studio, punti chiave, riassunti e testo pulito — da una sola registrazione.",
    ctaFooter:
      "Il piano gratuito include 5 registrazioni al mese. Senza carta di credito.",
  },
};

export default function StudentsPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

  const outputs = [
    {
      title: c.output1Title,
      description: c.output1Desc,
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      color: "#f97316",
    },
    {
      title: c.output2Title,
      description: c.output2Desc,
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      color: "#6366f1",
    },
    {
      title: c.output3Title,
      description: c.output3Desc,
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      color: "#8b5cf6",
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
      icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 01-2 2h-2z",
    },
    {
      title: c.useCase2Title,
      description: c.useCase2Desc,
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      title: c.useCase3Title,
      description: c.useCase3Desc,
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    },
    {
      title: c.useCase4Title,
      description: c.useCase4Desc,
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    },
  ];

  const problems = [
    {
      title: c.problem1Title,
      description: c.problem1Desc,
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      color: "#f43f5e",
    },
    {
      title: c.problem2Title,
      description: c.problem2Desc,
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      color: "#f59e0b",
    },
    {
      title: c.problem3Title,
      description: c.problem3Desc,
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
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

      {/* The Student Problem */}
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

      {/* What Sythio Creates for Students */}
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

      {/* How Students Use Sythio */}
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
