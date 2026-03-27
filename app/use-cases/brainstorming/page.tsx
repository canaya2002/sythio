"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Use Cases",
    title: "Brainstorm Without Losing a Single Idea",
    subtitle:
      "Brainstorming works best when ideas flow freely. Sythio captures the entire session and turns it into categorized ideas, clear priorities, and structured action plans — so the best thinking survives the room.",
    problemTitle: "Great Ideas, Gone in Seconds",
    problemP1:
      "A brainstorming session produces a burst of creative energy. Ideas build on each other, tangents lead to breakthroughs, and the best concepts often emerge in the middle of a fast-moving conversation.",
    problemP2:
      "Then the session ends. Someone volunteers to write up the notes. Half the ideas are already forgotten. The whiteboard photo is unreadable. The shared document captures a fraction of what was discussed.",
    problemP3:
      "The problem is not the brainstorming. It is the capture. When people are busy writing things down, they stop thinking freely. When they think freely, nothing gets written down.",
    createsTitle: "What Sythio Creates from Brainstorming Sessions",
    createsSubtitle:
      "Record the session. Let Sythio handle the organization. Get output that makes the ideas usable.",
    ideasTitle: "Ideas (Categorized)",
    ideasDesc:
      "Every idea pulled from the conversation and organized into logical categories. No duplicates, no overlap — just a clean list you can prioritize.",
    keyPointsTitle: "Key Points",
    keyPointsDesc:
      "The most important insights and conclusions from the session. What rose to the top, distilled into scannable points.",
    actionPlanTitle: "Action Plan",
    actionPlanDesc:
      "Ideas are only valuable if they lead to action. Sythio generates a prioritized plan of next steps based on what was discussed.",
    summaryTitle: "Summary",
    summaryDesc:
      "A concise summary of the entire brainstorming session. Share it with stakeholders who were not in the room.",
    soloTeamTitle: "For Solo and Team Brainstorming",
    soloTitle: "Solo Sessions",
    soloP1:
      "Thinking out loud is one of the most effective ways to work through complex problems. But spoken thoughts are disorganized by nature — that is what makes them productive.",
    soloP2:
      "Record your solo brainstorm. Sythio structures the output into categorized ideas and clear next steps. You think freely; Sythio organizes the result.",
    teamTitle: "Team Sessions",
    teamP1:
      "Group brainstorming generates more ideas but makes capture harder. Multiple voices, overlapping thoughts, ideas that build on each other in real time.",
    teamP2:
      "With speaker detection, Sythio can attribute ideas to the person who proposed them. The team gets a shared record of who suggested what — and a structured plan for moving forward.",
    relatedVoiceNotes: "Voice Notes",
    relatedMeetings: "Meetings",
    relatedIdeas: "Ideas",
    relatedActionPlans: "Action Plans",
    ctaTitle: "Capture Every Idea. Lose Nothing.",
    ctaSubtitle:
      "Your best ideas deserve more than a forgotten whiteboard. Let Sythio turn brainstorming sessions into structured, actionable output.",
  },
  es: {
    label: "Casos de uso",
    title: "Lluvia de ideas sin perder ni una sola",
    subtitle:
      "La lluvia de ideas funciona mejor cuando las ideas fluyen libremente. Sythio captura toda la sesión y la convierte en ideas categorizadas, prioridades claras y planes de acción estructurados — para que el mejor pensamiento sobreviva a la sala.",
    problemTitle: "Grandes ideas, perdidas en segundos",
    problemP1:
      "Una sesión de lluvia de ideas produce una explosión de energía creativa. Las ideas se construyen unas sobre otras, los desvíos llevan a avances, y los mejores conceptos a menudo surgen en medio de una conversación rápida.",
    problemP2:
      "Luego la sesión termina. Alguien se ofrece a escribir las notas. La mitad de las ideas ya se olvidaron. La foto de la pizarra es ilegible. El documento compartido captura una fracción de lo que se discutió.",
    problemP3:
      "El problema no es la lluvia de ideas. Es la captura. Cuando la gente está ocupada escribiendo, deja de pensar libremente. Cuando piensan libremente, nada se escribe.",
    createsTitle: "Lo que Sythio crea a partir de sesiones de lluvia de ideas",
    createsSubtitle:
      "Graba la sesión. Deja que Sythio se encargue de la organización. Obtén resultados que hacen las ideas utilizables.",
    ideasTitle: "Ideas (Categorizadas)",
    ideasDesc:
      "Cada idea extraída de la conversación y organizada en categorías lógicas. Sin duplicados, sin superposición — solo una lista limpia que puedes priorizar.",
    keyPointsTitle: "Puntos clave",
    keyPointsDesc:
      "Las conclusiones e ideas más importantes de la sesión. Lo que destacó, destilado en puntos fáciles de escanear.",
    actionPlanTitle: "Plan de acción",
    actionPlanDesc:
      "Las ideas solo son valiosas si llevan a la acción. Sythio genera un plan priorizado de próximos pasos basado en lo que se discutió.",
    summaryTitle: "Resumen",
    summaryDesc:
      "Un resumen conciso de toda la sesión de lluvia de ideas. Compártelo con las partes interesadas que no estuvieron en la sala.",
    soloTeamTitle: "Para lluvia de ideas individual y en equipo",
    soloTitle: "Sesiones individuales",
    soloP1:
      "Pensar en voz alta es una de las formas más efectivas de resolver problemas complejos. Pero los pensamientos hablados son desorganizados por naturaleza — eso es lo que los hace productivos.",
    soloP2:
      "Graba tu lluvia de ideas individual. Sythio estructura el resultado en ideas categorizadas y próximos pasos claros. Tú piensas libremente; Sythio organiza el resultado.",
    teamTitle: "Sesiones en equipo",
    teamP1:
      "La lluvia de ideas en grupo genera más ideas pero dificulta la captura. Múltiples voces, pensamientos superpuestos, ideas que se construyen unas sobre otras en tiempo real.",
    teamP2:
      "Con la detección de hablantes, Sythio puede atribuir ideas a la persona que las propuso. El equipo obtiene un registro compartido de quién sugirió qué — y un plan estructurado para avanzar.",
    relatedVoiceNotes: "Notas de voz",
    relatedMeetings: "Reuniones",
    relatedIdeas: "Ideas",
    relatedActionPlans: "Planes de acción",
    ctaTitle: "Captura cada idea. No pierdas nada.",
    ctaSubtitle:
      "Tus mejores ideas merecen más que una pizarra olvidada. Deja que Sythio convierta las sesiones de lluvia de ideas en resultados estructurados y accionables.",
  },
  fr: {
    label: "Cas d'usage",
    title: "Brainstormez sans perdre une seule idée",
    subtitle:
      "Le brainstorming fonctionne mieux quand les idées circulent librement. Sythio capture toute la session et la transforme en idées catégorisées, priorités claires et plans d'action structurés — pour que les meilleures réflexions survivent à la salle.",
    problemTitle: "De grandes idées, disparues en quelques secondes",
    problemP1:
      "Une session de brainstorming produit une explosion d'énergie créative. Les idées s'enrichissent mutuellement, les digressions mènent à des percées, et les meilleurs concepts émergent souvent au milieu d'une conversation rapide.",
    problemP2:
      "Puis la session se termine. Quelqu'un se porte volontaire pour rédiger les notes. La moitié des idées sont déjà oubliées. La photo du tableau blanc est illisible. Le document partagé ne capture qu'une fraction de ce qui a été discuté.",
    problemP3:
      "Le problème n'est pas le brainstorming. C'est la capture. Quand les gens sont occupés à écrire, ils arrêtent de penser librement. Quand ils pensent librement, rien n'est écrit.",
    createsTitle: "Ce que Sythio crée à partir des sessions de brainstorming",
    createsSubtitle:
      "Enregistrez la session. Laissez Sythio gérer l'organisation. Obtenez un résultat qui rend les idées exploitables.",
    ideasTitle: "Idées (Catégorisées)",
    ideasDesc:
      "Chaque idée extraite de la conversation et organisée en catégories logiques. Pas de doublons, pas de chevauchement — juste une liste claire à prioriser.",
    keyPointsTitle: "Points clés",
    keyPointsDesc:
      "Les enseignements et conclusions les plus importants de la session. Ce qui a émergé, distillé en points faciles à parcourir.",
    actionPlanTitle: "Plan d'action",
    actionPlanDesc:
      "Les idées n'ont de valeur que si elles mènent à l'action. Sythio génère un plan priorisé des prochaines étapes basé sur ce qui a été discuté.",
    summaryTitle: "Résumé",
    summaryDesc:
      "Un résumé concis de l'ensemble de la session de brainstorming. Partagez-le avec les parties prenantes qui n'étaient pas dans la salle.",
    soloTeamTitle: "Pour le brainstorming solo et en équipe",
    soloTitle: "Sessions solo",
    soloP1:
      "Penser à voix haute est l'un des moyens les plus efficaces de résoudre des problèmes complexes. Mais les pensées parlées sont désorganisées par nature — c'est ce qui les rend productives.",
    soloP2:
      "Enregistrez votre brainstorming solo. Sythio structure le résultat en idées catégorisées et prochaines étapes claires. Vous pensez librement ; Sythio organise le résultat.",
    teamTitle: "Sessions en équipe",
    teamP1:
      "Le brainstorming en groupe génère plus d'idées mais rend la capture plus difficile. Plusieurs voix, des pensées qui se chevauchent, des idées qui s'enrichissent en temps réel.",
    teamP2:
      "Avec la détection des intervenants, Sythio peut attribuer les idées à la personne qui les a proposées. L'équipe obtient un registre partagé de qui a suggéré quoi — et un plan structuré pour avancer.",
    relatedVoiceNotes: "Notes vocales",
    relatedMeetings: "Réunions",
    relatedIdeas: "Idées",
    relatedActionPlans: "Plans d'action",
    ctaTitle: "Capturez chaque idée. Ne perdez rien.",
    ctaSubtitle:
      "Vos meilleures idées méritent mieux qu'un tableau blanc oublié. Laissez Sythio transformer les sessions de brainstorming en résultats structurés et exploitables.",
  },
  pt: {
    label: "Casos de uso",
    title: "Faça brainstorming sem perder uma única ideia",
    subtitle:
      "O brainstorming funciona melhor quando as ideias fluem livremente. O Sythio captura toda a sessão e a transforma em ideias categorizadas, prioridades claras e planos de ação estruturados — para que o melhor pensamento sobreviva à sala.",
    problemTitle: "Grandes ideias, perdidas em segundos",
    problemP1:
      "Uma sessão de brainstorming produz uma explosão de energia criativa. As ideias se constroem umas sobre as outras, tangentes levam a descobertas, e os melhores conceitos geralmente surgem no meio de uma conversa rápida.",
    problemP2:
      "Então a sessão termina. Alguém se voluntaria para escrever as notas. Metade das ideias já foram esquecidas. A foto do quadro branco é ilegível. O documento compartilhado captura uma fração do que foi discutido.",
    problemP3:
      "O problema não é o brainstorming. É a captura. Quando as pessoas estão ocupadas escrevendo, param de pensar livremente. Quando pensam livremente, nada é escrito.",
    createsTitle: "O que o Sythio cria a partir de sessões de brainstorming",
    createsSubtitle:
      "Grave a sessão. Deixe o Sythio cuidar da organização. Obtenha resultados que tornam as ideias utilizáveis.",
    ideasTitle: "Ideias (Categorizadas)",
    ideasDesc:
      "Cada ideia extraída da conversa e organizada em categorias lógicas. Sem duplicatas, sem sobreposição — apenas uma lista limpa que você pode priorizar.",
    keyPointsTitle: "Pontos-chave",
    keyPointsDesc:
      "Os insights e conclusões mais importantes da sessão. O que se destacou, destilado em pontos fáceis de escanear.",
    actionPlanTitle: "Plano de ação",
    actionPlanDesc:
      "Ideias só são valiosas se levam à ação. O Sythio gera um plano priorizado de próximos passos baseado no que foi discutido.",
    summaryTitle: "Resumo",
    summaryDesc:
      "Um resumo conciso de toda a sessão de brainstorming. Compartilhe com as partes interessadas que não estavam na sala.",
    soloTeamTitle: "Para brainstorming individual e em equipe",
    soloTitle: "Sessões individuais",
    soloP1:
      "Pensar em voz alta é uma das formas mais eficazes de resolver problemas complexos. Mas pensamentos falados são desorganizados por natureza — é isso que os torna produtivos.",
    soloP2:
      "Grave seu brainstorming individual. O Sythio estrutura o resultado em ideias categorizadas e próximos passos claros. Você pensa livremente; o Sythio organiza o resultado.",
    teamTitle: "Sessões em equipe",
    teamP1:
      "O brainstorming em grupo gera mais ideias, mas dificulta a captura. Múltiplas vozes, pensamentos sobrepostos, ideias que se constroem umas sobre as outras em tempo real.",
    teamP2:
      "Com a detecção de falantes, o Sythio pode atribuir ideias à pessoa que as propôs. A equipe obtém um registro compartilhado de quem sugeriu o quê — e um plano estruturado para avançar.",
    relatedVoiceNotes: "Notas de voz",
    relatedMeetings: "Reuniões",
    relatedIdeas: "Ideias",
    relatedActionPlans: "Planos de ação",
    ctaTitle: "Capture cada ideia. Não perca nada.",
    ctaSubtitle:
      "Suas melhores ideias merecem mais do que um quadro branco esquecido. Deixe o Sythio transformar sessões de brainstorming em resultados estruturados e acionáveis.",
  },
  it: {
    label: "Casi d'uso",
    title: "Fai brainstorming senza perdere una singola idea",
    subtitle:
      "Il brainstorming funziona meglio quando le idee fluiscono liberamente. Sythio cattura l'intera sessione e la trasforma in idee categorizzate, priorità chiare e piani d'azione strutturati — perché il miglior pensiero sopravviva alla stanza.",
    problemTitle: "Grandi idee, perse in pochi secondi",
    problemP1:
      "Una sessione di brainstorming produce un'esplosione di energia creativa. Le idee si costruiscono l'una sull'altra, le divagazioni portano a scoperte, e i migliori concetti spesso emergono nel mezzo di una conversazione rapida.",
    problemP2:
      "Poi la sessione finisce. Qualcuno si offre di scrivere le note. Metà delle idee sono già dimenticate. La foto della lavagna è illeggibile. Il documento condiviso cattura una frazione di ciò che è stato discusso.",
    problemP3:
      "Il problema non è il brainstorming. È la cattura. Quando le persone sono impegnate a scrivere, smettono di pensare liberamente. Quando pensano liberamente, nulla viene scritto.",
    createsTitle: "Cosa crea Sythio dalle sessioni di brainstorming",
    createsSubtitle:
      "Registra la sessione. Lascia che Sythio gestisca l'organizzazione. Ottieni risultati che rendono le idee utilizzabili.",
    ideasTitle: "Idee (Categorizzate)",
    ideasDesc:
      "Ogni idea estratta dalla conversazione e organizzata in categorie logiche. Nessun duplicato, nessuna sovrapposizione — solo una lista pulita da prioritizzare.",
    keyPointsTitle: "Punti chiave",
    keyPointsDesc:
      "Gli insight e le conclusioni più importanti della sessione. Ciò che è emerso, distillato in punti facili da scansionare.",
    actionPlanTitle: "Piano d'azione",
    actionPlanDesc:
      "Le idee hanno valore solo se portano all'azione. Sythio genera un piano prioritizzato dei prossimi passi basato su ciò che è stato discusso.",
    summaryTitle: "Riassunto",
    summaryDesc:
      "Un riassunto conciso dell'intera sessione di brainstorming. Condividilo con gli stakeholder che non erano nella stanza.",
    soloTeamTitle: "Per brainstorming individuale e di squadra",
    soloTitle: "Sessioni individuali",
    soloP1:
      "Pensare ad alta voce è uno dei modi più efficaci per risolvere problemi complessi. Ma i pensieri parlati sono disorganizzati per natura — è ciò che li rende produttivi.",
    soloP2:
      "Registra il tuo brainstorming individuale. Sythio struttura il risultato in idee categorizzate e prossimi passi chiari. Tu pensi liberamente; Sythio organizza il risultato.",
    teamTitle: "Sessioni di squadra",
    teamP1:
      "Il brainstorming di gruppo genera più idee ma rende la cattura più difficile. Più voci, pensieri sovrapposti, idee che si costruiscono l'una sull'altra in tempo reale.",
    teamP2:
      "Con il rilevamento dei parlanti, Sythio può attribuire le idee alla persona che le ha proposte. Il team ottiene un registro condiviso di chi ha suggerito cosa — e un piano strutturato per andare avanti.",
    relatedVoiceNotes: "Note vocali",
    relatedMeetings: "Riunioni",
    relatedIdeas: "Idee",
    relatedActionPlans: "Piani d'azione",
    ctaTitle: "Cattura ogni idea. Non perdere nulla.",
    ctaSubtitle:
      "Le tue migliori idee meritano più di una lavagna dimenticata. Lascia che Sythio trasformi le sessioni di brainstorming in risultati strutturati e azionabili.",
  },
};

export default function BrainstormingPage() {
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

      {/* What Sythio Creates */}
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
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.ideasTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.ideasDesc}</p>
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
                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.actionPlanTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.actionPlanDesc}</p>
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
          </GsapStagger>
        </div>
      </section>

      {/* For Solo and Team Brainstorming */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-14">
            {c.soloTeamTitle}
          </TextReveal>
          <GsapStagger stagger={0.08} className="grid lg:grid-cols-2 gap-8">
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-10">
                <h3 className="text-2xl font-semibold text-foreground mb-4">{c.soloTitle}</h3>
                <div className="space-y-4 text-base text-muted leading-relaxed">
                  <p>{c.soloP1}</p>
                  <p>{c.soloP2}</p>
                </div>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-10">
                <h3 className="text-2xl font-semibold text-foreground mb-4">{c.teamTitle}</h3>
                <div className="space-y-4 text-base text-muted leading-relaxed">
                  <p>{c.teamP1}</p>
                  <p>{c.teamP2}</p>
                </div>
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
              <Link href="/use-cases/voice-notes" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedVoiceNotes}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedMeetings}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/features/ideas" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedIdeas}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/features/action-plans" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedActionPlans}</p>
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
