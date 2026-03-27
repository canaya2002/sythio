"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Use Cases",
    title: "Lecture Notes, Automatically Structured and Ready to Study",
    subtitle:
      "Stop choosing between listening and writing. Sythio transforms lecture recordings into organized study notes, key concepts, clean text, and concise summaries — so you can focus on understanding, not transcribing.",
    problemTitle: "You Cannot Listen and Write at the Same Time",
    problemP1:
      "A lecturer explains a complex concept. You are writing down the previous point. By the time you look up, you have missed the explanation that tied everything together.",
    problemP2:
      "Manual note-taking forces a trade-off: capture the words or understand the ideas. Most students end up with incomplete notes and incomplete understanding.",
    problemP3:
      "Recording the lecture solves the capture problem but creates a new one — nobody wants to replay a 90-minute recording to find the three concepts they need for the exam.",
    createsTitle: "What Sythio Creates from Lectures",
    createsSubtitle:
      "Upload the recording. Get study-ready output in seconds. Review material that is structured for learning, not just transcription.",
    studyNotesTitle: "Study Notes",
    studyNotesDesc:
      "Lecture content organized into structured notes with headings, subpoints, and logical groupings. Ready for revision, not raw transcription.",
    keyPointsTitle: "Key Points",
    keyPointsDesc:
      "The core concepts, definitions, and frameworks from the lecture. The material most likely to appear on an exam or matter in practice.",
    summaryTitle: "Summary",
    summaryDesc:
      "A concise overview of the entire lecture. Read it in two minutes to refresh your memory before the next class or exam.",
    cleanTextTitle: "Clean Text",
    cleanTextDesc:
      "The full lecture content as clean, readable text. Filler words removed, sentences structured. A complete written record of what was taught.",
    builtForTitle: "Built for Learning",
    builtForSubtitle:
      "Whether you are in university, attending a professional workshop, or learning something new on your own — Sythio adapts to the content.",
    examTitle: "Exam Preparation",
    examDesc:
      "Use key points and summaries to build a revision guide from every lecture in the course. Study from structured output instead of scattered notes.",
    revisionTitle: "Revision and Review",
    revisionDesc:
      "Before each class, read the summary of the previous lecture to refresh your memory. In two minutes, you are caught up on what was covered last time.",
    workshopsTitle: "Workshops and Seminars",
    workshopsDesc:
      "Professional development sessions are full of practical insights. Sythio captures the actionable content so you can apply it immediately — not six months later when you find your notebook.",
    relatedVoiceNotes: "Voice Notes",
    relatedAudience: "Audience",
    relatedStudents: "Sythio for Students",
    relatedStudyNotes: "Study Notes",
    relatedKeyPoints: "Key Points",
    ctaTitle: "Focus on Learning. Sythio Handles the Notes.",
    ctaSubtitle:
      "Record the lecture. Get structured study notes in seconds. Spend your time understanding, not transcribing.",
  },
  es: {
    label: "Casos de uso",
    title: "Apuntes de clase, automáticamente estructurados y listos para estudiar",
    subtitle:
      "Deja de elegir entre escuchar y escribir. Sythio transforma las grabaciones de clases en apuntes organizados, conceptos clave, texto limpio y resúmenes concisos — para que puedas centrarte en entender, no en transcribir.",
    problemTitle: "No puedes escuchar y escribir al mismo tiempo",
    problemP1:
      "Un profesor explica un concepto complejo. Tú estás escribiendo el punto anterior. Para cuando levantas la vista, te has perdido la explicación que unía todo.",
    problemP2:
      "Tomar notas a mano obliga a un compromiso: capturar las palabras o entender las ideas. La mayoría de los estudiantes terminan con notas incompletas y comprensión incompleta.",
    problemP3:
      "Grabar la clase resuelve el problema de captura pero crea uno nuevo — nadie quiere reproducir una grabación de 90 minutos para encontrar los tres conceptos que necesita para el examen.",
    createsTitle: "Lo que Sythio crea a partir de clases",
    createsSubtitle:
      "Sube la grabación. Obtén material listo para estudiar en segundos. Revisa material estructurado para el aprendizaje, no solo transcripción.",
    studyNotesTitle: "Apuntes de estudio",
    studyNotesDesc:
      "Contenido de la clase organizado en notas estructuradas con títulos, subpuntos y agrupaciones lógicas. Listo para repasar, no transcripción en bruto.",
    keyPointsTitle: "Puntos clave",
    keyPointsDesc:
      "Los conceptos fundamentales, definiciones y marcos de la clase. El material con más probabilidad de aparecer en un examen o importar en la práctica.",
    summaryTitle: "Resumen",
    summaryDesc:
      "Una visión concisa de toda la clase. Léelo en dos minutos para refrescar tu memoria antes de la siguiente clase o examen.",
    cleanTextTitle: "Texto limpio",
    cleanTextDesc:
      "El contenido completo de la clase como texto limpio y legible. Muletillas eliminadas, oraciones estructuradas. Un registro escrito completo de lo que se enseñó.",
    builtForTitle: "Diseñado para el aprendizaje",
    builtForSubtitle:
      "Ya estés en la universidad, asistiendo a un taller profesional o aprendiendo algo nuevo por tu cuenta — Sythio se adapta al contenido.",
    examTitle: "Preparación de exámenes",
    examDesc:
      "Usa los puntos clave y resúmenes para construir una guía de repaso de cada clase del curso. Estudia a partir de resultados estructurados en lugar de notas dispersas.",
    revisionTitle: "Repaso y revisión",
    revisionDesc:
      "Antes de cada clase, lee el resumen de la clase anterior para refrescar tu memoria. En dos minutos, estás al día con lo que se cubrió la última vez.",
    workshopsTitle: "Talleres y seminarios",
    workshopsDesc:
      "Las sesiones de desarrollo profesional están llenas de ideas prácticas. Sythio captura el contenido accionable para que puedas aplicarlo de inmediato — no seis meses después cuando encuentres tu cuaderno.",
    relatedVoiceNotes: "Notas de voz",
    relatedAudience: "Audiencia",
    relatedStudents: "Sythio para estudiantes",
    relatedStudyNotes: "Apuntes de estudio",
    relatedKeyPoints: "Puntos clave",
    ctaTitle: "Concéntrate en aprender. Sythio se encarga de los apuntes.",
    ctaSubtitle:
      "Graba la clase. Obtén apuntes estructurados en segundos. Dedica tu tiempo a entender, no a transcribir.",
  },
  fr: {
    label: "Cas d'usage",
    title: "Notes de cours, automatiquement structurées et prêtes à étudier",
    subtitle:
      "Arrêtez de choisir entre écouter et écrire. Sythio transforme les enregistrements de cours en notes d'étude organisées, concepts clés, texte propre et résumés concis — pour que vous puissiez vous concentrer sur la compréhension, pas la transcription.",
    problemTitle: "Vous ne pouvez pas écouter et écrire en même temps",
    problemP1:
      "Un professeur explique un concept complexe. Vous êtes en train d'écrire le point précédent. Quand vous relevez la tête, vous avez manqué l'explication qui reliait tout.",
    problemP2:
      "La prise de notes manuelle impose un compromis : capturer les mots ou comprendre les idées. La plupart des étudiants se retrouvent avec des notes incomplètes et une compréhension incomplète.",
    problemP3:
      "Enregistrer le cours résout le problème de capture mais en crée un nouveau — personne ne veut réécouter un enregistrement de 90 minutes pour trouver les trois concepts nécessaires pour l'examen.",
    createsTitle: "Ce que Sythio crée à partir des cours",
    createsSubtitle:
      "Importez l'enregistrement. Obtenez du matériel prêt à étudier en quelques secondes. Révisez du contenu structuré pour l'apprentissage, pas une simple transcription.",
    studyNotesTitle: "Notes d'étude",
    studyNotesDesc:
      "Le contenu du cours organisé en notes structurées avec titres, sous-points et regroupements logiques. Prêt pour la révision, pas une transcription brute.",
    keyPointsTitle: "Points clés",
    keyPointsDesc:
      "Les concepts fondamentaux, définitions et cadres du cours. Le contenu le plus susceptible d'apparaître à l'examen ou de compter en pratique.",
    summaryTitle: "Résumé",
    summaryDesc:
      "Un aperçu concis de l'ensemble du cours. Lisez-le en deux minutes pour rafraîchir votre mémoire avant le prochain cours ou examen.",
    cleanTextTitle: "Texte propre",
    cleanTextDesc:
      "Le contenu complet du cours en texte propre et lisible. Mots de remplissage supprimés, phrases structurées. Un enregistrement écrit complet de ce qui a été enseigné.",
    builtForTitle: "Conçu pour l'apprentissage",
    builtForSubtitle:
      "Que vous soyez à l'université, dans un atelier professionnel ou en train d'apprendre quelque chose de nouveau par vous-même — Sythio s'adapte au contenu.",
    examTitle: "Préparation aux examens",
    examDesc:
      "Utilisez les points clés et les résumés pour construire un guide de révision à partir de chaque cours. Étudiez à partir de résultats structurés plutôt que de notes éparpillées.",
    revisionTitle: "Révision et relecture",
    revisionDesc:
      "Avant chaque cours, lisez le résumé du cours précédent pour rafraîchir votre mémoire. En deux minutes, vous êtes à jour sur ce qui a été couvert.",
    workshopsTitle: "Ateliers et séminaires",
    workshopsDesc:
      "Les sessions de développement professionnel regorgent d'idées pratiques. Sythio capture le contenu exploitable pour que vous puissiez l'appliquer immédiatement — pas six mois plus tard quand vous retrouvez votre carnet.",
    relatedVoiceNotes: "Notes vocales",
    relatedAudience: "Public",
    relatedStudents: "Sythio pour les étudiants",
    relatedStudyNotes: "Notes d'étude",
    relatedKeyPoints: "Points clés",
    ctaTitle: "Concentrez-vous sur l'apprentissage. Sythio gère les notes.",
    ctaSubtitle:
      "Enregistrez le cours. Obtenez des notes d'étude structurées en quelques secondes. Consacrez votre temps à comprendre, pas à transcrire.",
  },
  pt: {
    label: "Casos de uso",
    title: "Anotações de aula, automaticamente estruturadas e prontas para estudar",
    subtitle:
      "Pare de escolher entre ouvir e escrever. O Sythio transforma gravações de aulas em notas de estudo organizadas, conceitos-chave, texto limpo e resumos concisos — para que você possa focar em entender, não em transcrever.",
    problemTitle: "Você não consegue ouvir e escrever ao mesmo tempo",
    problemP1:
      "Um professor explica um conceito complexo. Você está escrevendo o ponto anterior. Quando levanta os olhos, perdeu a explicação que conectava tudo.",
    problemP2:
      "Tomar notas manualmente força um compromisso: capturar as palavras ou entender as ideias. A maioria dos estudantes acaba com notas incompletas e compreensão incompleta.",
    problemP3:
      "Gravar a aula resolve o problema de captura, mas cria um novo — ninguém quer reproduzir uma gravação de 90 minutos para encontrar os três conceitos necessários para a prova.",
    createsTitle: "O que o Sythio cria a partir de aulas",
    createsSubtitle:
      "Envie a gravação. Obtenha material pronto para estudar em segundos. Revise material estruturado para aprendizado, não apenas transcrição.",
    studyNotesTitle: "Notas de estudo",
    studyNotesDesc:
      "Conteúdo da aula organizado em notas estruturadas com títulos, subpontos e agrupamentos lógicos. Pronto para revisão, não transcrição bruta.",
    keyPointsTitle: "Pontos-chave",
    keyPointsDesc:
      "Os conceitos fundamentais, definições e frameworks da aula. O material com maior probabilidade de aparecer em uma prova ou importar na prática.",
    summaryTitle: "Resumo",
    summaryDesc:
      "Uma visão concisa de toda a aula. Leia em dois minutos para refrescar a memória antes da próxima aula ou prova.",
    cleanTextTitle: "Texto limpo",
    cleanTextDesc:
      "O conteúdo completo da aula como texto limpo e legível. Palavras de preenchimento removidas, frases estruturadas. Um registro escrito completo do que foi ensinado.",
    builtForTitle: "Feito para o aprendizado",
    builtForSubtitle:
      "Esteja você na universidade, em um workshop profissional ou aprendendo algo novo por conta própria — o Sythio se adapta ao conteúdo.",
    examTitle: "Preparação para provas",
    examDesc:
      "Use pontos-chave e resumos para construir um guia de revisão de cada aula do curso. Estude a partir de resultados estruturados em vez de notas dispersas.",
    revisionTitle: "Revisão e releitura",
    revisionDesc:
      "Antes de cada aula, leia o resumo da aula anterior para refrescar sua memória. Em dois minutos, você está atualizado sobre o que foi abordado.",
    workshopsTitle: "Workshops e seminários",
    workshopsDesc:
      "Sessões de desenvolvimento profissional estão cheias de insights práticos. O Sythio captura o conteúdo acionável para que você possa aplicá-lo imediatamente — não seis meses depois quando encontrar seu caderno.",
    relatedVoiceNotes: "Notas de voz",
    relatedAudience: "Público",
    relatedStudents: "Sythio para estudantes",
    relatedStudyNotes: "Notas de estudo",
    relatedKeyPoints: "Pontos-chave",
    ctaTitle: "Foque no aprendizado. O Sythio cuida das anotações.",
    ctaSubtitle:
      "Grave a aula. Obtenha notas de estudo estruturadas em segundos. Dedique seu tempo a entender, não a transcrever.",
  },
  it: {
    label: "Casi d'uso",
    title: "Appunti delle lezioni, automaticamente strutturati e pronti per studiare",
    subtitle:
      "Smetti di scegliere tra ascoltare e scrivere. Sythio trasforma le registrazioni delle lezioni in appunti organizzati, concetti chiave, testo pulito e riassunti concisi — perché tu possa concentrarti sulla comprensione, non sulla trascrizione.",
    problemTitle: "Non puoi ascoltare e scrivere allo stesso tempo",
    problemP1:
      "Un professore spiega un concetto complesso. Tu stai scrivendo il punto precedente. Quando alzi lo sguardo, hai perso la spiegazione che collegava tutto.",
    problemP2:
      "Prendere appunti a mano impone un compromesso: catturare le parole o capire le idee. La maggior parte degli studenti finisce con appunti incompleti e comprensione incompleta.",
    problemP3:
      "Registrare la lezione risolve il problema della cattura ma ne crea uno nuovo — nessuno vuole riascoltare una registrazione di 90 minuti per trovare i tre concetti necessari per l'esame.",
    createsTitle: "Cosa crea Sythio dalle lezioni",
    createsSubtitle:
      "Carica la registrazione. Ottieni materiale pronto per studiare in pochi secondi. Rivedi materiale strutturato per l'apprendimento, non solo trascrizione.",
    studyNotesTitle: "Appunti di studio",
    studyNotesDesc:
      "Contenuto della lezione organizzato in appunti strutturati con intestazioni, sottopunti e raggruppamenti logici. Pronto per il ripasso, non trascrizione grezza.",
    keyPointsTitle: "Punti chiave",
    keyPointsDesc:
      "I concetti fondamentali, le definizioni e i framework della lezione. Il materiale più probabile che appaia all'esame o che conti nella pratica.",
    summaryTitle: "Riassunto",
    summaryDesc:
      "Una panoramica concisa dell'intera lezione. Leggilo in due minuti per rinfrescare la memoria prima della prossima lezione o esame.",
    cleanTextTitle: "Testo pulito",
    cleanTextDesc:
      "L'intero contenuto della lezione come testo pulito e leggibile. Parole di riempimento rimosse, frasi strutturate. Un registro scritto completo di ciò che è stato insegnato.",
    builtForTitle: "Progettato per l'apprendimento",
    builtForSubtitle:
      "Che tu sia all'università, in un workshop professionale o stia imparando qualcosa di nuovo da solo — Sythio si adatta al contenuto.",
    examTitle: "Preparazione agli esami",
    examDesc:
      "Usa i punti chiave e i riassunti per costruire una guida di ripasso da ogni lezione del corso. Studia da risultati strutturati invece che da appunti sparsi.",
    revisionTitle: "Ripasso e revisione",
    revisionDesc:
      "Prima di ogni lezione, leggi il riassunto della lezione precedente per rinfrescare la memoria. In due minuti, sei aggiornato su ciò che è stato trattato.",
    workshopsTitle: "Workshop e seminari",
    workshopsDesc:
      "Le sessioni di sviluppo professionale sono piene di spunti pratici. Sythio cattura il contenuto azionabile perché tu possa applicarlo immediatamente — non sei mesi dopo quando ritrovi il tuo quaderno.",
    relatedVoiceNotes: "Note vocali",
    relatedAudience: "Pubblico",
    relatedStudents: "Sythio per studenti",
    relatedStudyNotes: "Appunti di studio",
    relatedKeyPoints: "Punti chiave",
    ctaTitle: "Concentrati sull'apprendimento. Sythio gestisce gli appunti.",
    ctaSubtitle:
      "Registra la lezione. Ottieni appunti di studio strutturati in pochi secondi. Dedica il tuo tempo a capire, non a trascrivere.",
  },
};

export default function LecturesPage() {
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

      {/* What Sythio Creates from Lectures */}
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
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.studyNotesTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.studyNotesDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.keyPointsTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.keyPointsDesc}</p>
              </div>
            </ScrollScale>
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
                    <path d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.cleanTextTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.cleanTextDesc}</p>
              </div>
            </ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* Built for Learning */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            {c.builtForTitle}
          </TextReveal>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-14">
            {c.builtForSubtitle}
          </p>
          <GsapStagger stagger={0.08} className="grid sm:grid-cols-3 gap-6">
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.examTitle}</h3>
                <p className="text-base text-muted leading-relaxed">{c.examDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.revisionTitle}</h3>
                <p className="text-base text-muted leading-relaxed">{c.revisionDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.workshopsTitle}</h3>
                <p className="text-base text-muted leading-relaxed">{c.workshopsDesc}</p>
              </div>
            </ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* Related */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
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
              <Link href="/for/students" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.relatedAudience}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedStudents}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/features/study-notes" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedStudyNotes}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/features/key-points" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedKeyPoints}</p>
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
