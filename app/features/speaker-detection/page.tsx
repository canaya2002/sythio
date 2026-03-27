"use client";
import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Features",
    title: "Know Who Said What. Automatically.",
    subtitle: "Sythio detects and separates speakers in your recordings. Every summary, task, and action item is attributed to the right person — no manual tagging required.",
    processLabel: "Process",
    processTitle: "How Speaker Detection Works",
    processDesc: "No setup, no training, no pre-registration. Sythio identifies distinct voices from the first recording and improves with every interaction.",
    card1Title: "Automatic Detection",
    card1Desc: "Sythio analyzes voice characteristics — pitch, cadence, tone — and separates speakers without any prior information about who is in the room.",
    card2Title: "Voice Separation",
    card2Desc: "Even when speakers talk over each other or switch rapidly, Sythio maintains accurate separation. Crosstalk and interruptions are handled gracefully.",
    card3Title: "Speaker Labels",
    card3Desc: "Each speaker is assigned a consistent label throughout the recording. Transcripts, summaries, and outputs all reference the same speaker identity.",
    card4Title: "Rename Anytime",
    card4Desc: "Replace generic labels with real names. Once renamed, every output — from summaries to task lists — updates to reflect the correct person.",
    smarterLabel: "Smarter Outputs",
    smarterTitle: "Every Output Knows Who Said It",
    smarterDesc: "Speaker detection is not a standalone feature. It enriches everything Sythio produces. When you know who said what, every output becomes more useful.",
    smart1Title: "Tasks Assigned Correctly",
    smart1Desc: "When someone commits to a task in a conversation, Sythio attributes it to them. No ambiguity about who owns what.",
    smart2Title: "Decisions Attributed",
    smart2Desc: "Summaries reflect who proposed an idea, who agreed, and who raised concerns. When decisions need revisiting, you know exactly who was involved and what they said.",
    smart3Title: "Per-Speaker Summaries",
    smart3Desc: "Need to know what a specific person contributed? Sythio can generate speaker-specific breakdowns so you can review individual contributions without scanning the full recording.",
    scaleLabel: "Scale",
    scaleTitle: "Handles Complex Conversations",
    scaleDesc: "Sythio supports recordings with 10 or more speakers. Team meetings, panel discussions, group interviews, and large calls are all handled with consistent accuracy.",
    scaleBullet1: "Accurate with 2 speakers or 12",
    scaleBullet2: "Works with varying audio quality",
    scaleBullet3: "Handles overlapping speech and quick exchanges",
    scaleBullet4: "Consistent labels across long recordings",
    scaleVisualCaption: "Speakers detected and separated automatically",
    useCasesLabel: "Use Cases",
    useCasesTitle: "Where Speaker Detection Matters",
    uc1Title: "Team Meetings",
    uc1Desc: "Know who committed to what. Speaker-attributed tasks and decisions mean no one can say they were not in the loop.",
    uc2Title: "Client Calls",
    uc2Desc: "Separate client feedback from internal discussion. Attribute requirements and decisions to the right stakeholder for clear follow-up.",
    uc3Title: "Interviews",
    uc3Desc: "Clearly separate interviewer and interviewee. Review responses by person, compare candidates, and create structured interview notes.",
    relAISummaries: "AI Summaries",
    relTaskExtraction: "Task Extraction",
    relMeetings: "Meetings",
    relClientCalls: "Client Calls",
    ctaTitle: "Every Voice Identified. Every Word Attributed.",
    ctaDesc: "Speaker detection is built into every Sythio output. Record a conversation and see the difference.",
  },
  es: {
    label: "Funciones",
    title: "Sabe quien dijo que. Automaticamente.",
    subtitle: "Sythio detecta y separa hablantes en tus grabaciones. Cada resumen, tarea y elemento de accion se atribuye a la persona correcta, sin etiquetado manual.",
    processLabel: "Proceso",
    processTitle: "Como funciona la deteccion de hablantes",
    processDesc: "Sin configuracion, sin entrenamiento, sin preinscripcion. Sythio identifica voces distintas desde la primera grabacion y mejora con cada interaccion.",
    card1Title: "Deteccion automatica",
    card1Desc: "Sythio analiza las caracteristicas de la voz — tono, cadencia, timbre — y separa los hablantes sin informacion previa sobre quien esta en la sala.",
    card2Title: "Separacion de voces",
    card2Desc: "Incluso cuando los hablantes hablan al mismo tiempo o cambian rapidamente, Sythio mantiene una separacion precisa. Las interrupciones se manejan con naturalidad.",
    card3Title: "Etiquetas de hablantes",
    card3Desc: "Cada hablante recibe una etiqueta consistente durante toda la grabacion. Transcripciones, resumenes y salidas hacen referencia a la misma identidad.",
    card4Title: "Renombra en cualquier momento",
    card4Desc: "Reemplaza las etiquetas genericas con nombres reales. Una vez renombrado, cada salida — desde resumenes hasta listas de tareas — se actualiza con la persona correcta.",
    smarterLabel: "Salidas mas inteligentes",
    smarterTitle: "Cada salida sabe quien lo dijo",
    smarterDesc: "La deteccion de hablantes no es una funcion independiente. Enriquece todo lo que Sythio produce. Cuando sabes quien dijo que, cada salida es mas util.",
    smart1Title: "Tareas asignadas correctamente",
    smart1Desc: "Cuando alguien se compromete con una tarea en una conversacion, Sythio se la atribuye. Sin ambiguedad sobre quien es responsable de que.",
    smart2Title: "Decisiones atribuidas",
    smart2Desc: "Los resumenes reflejan quien propuso una idea, quien estuvo de acuerdo y quien planteo dudas. Cuando las decisiones necesitan revision, sabes exactamente quien participo.",
    smart3Title: "Resumenes por hablante",
    smart3Desc: "Necesitas saber que aporto una persona especifica? Sythio puede generar desgloses por hablante para revisar contribuciones individuales sin escanear toda la grabacion.",
    scaleLabel: "Escala",
    scaleTitle: "Maneja conversaciones complejas",
    scaleDesc: "Sythio admite grabaciones con 10 o mas hablantes. Reuniones de equipo, paneles de discusion, entrevistas grupales y llamadas grandes se manejan con precision consistente.",
    scaleBullet1: "Preciso con 2 hablantes o 12",
    scaleBullet2: "Funciona con calidad de audio variable",
    scaleBullet3: "Maneja habla superpuesta e intercambios rapidos",
    scaleBullet4: "Etiquetas consistentes en grabaciones largas",
    scaleVisualCaption: "Hablantes detectados y separados automaticamente",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Donde importa la deteccion de hablantes",
    uc1Title: "Reuniones de equipo",
    uc1Desc: "Sabe quien se comprometio a que. Tareas y decisiones atribuidas a hablantes significan que nadie puede decir que no estaba enterado.",
    uc2Title: "Llamadas con clientes",
    uc2Desc: "Separa la retroalimentacion del cliente de la discusion interna. Atribuye requisitos y decisiones al interesado correcto para un seguimiento claro.",
    uc3Title: "Entrevistas",
    uc3Desc: "Separa claramente al entrevistador del entrevistado. Revisa respuestas por persona, compara candidatos y crea notas estructuradas de entrevista.",
    relAISummaries: "Resumenes IA",
    relTaskExtraction: "Extraccion de tareas",
    relMeetings: "Reuniones",
    relClientCalls: "Llamadas con clientes",
    ctaTitle: "Cada voz identificada. Cada palabra atribuida.",
    ctaDesc: "La deteccion de hablantes esta integrada en cada salida de Sythio. Graba una conversacion y nota la diferencia.",
  },
  fr: {
    label: "Fonctionnalites",
    title: "Sachez qui a dit quoi. Automatiquement.",
    subtitle: "Sythio detecte et separe les intervenants dans vos enregistrements. Chaque resume, tache et element d'action est attribue a la bonne personne — sans etiquetage manuel.",
    processLabel: "Processus",
    processTitle: "Comment fonctionne la detection des intervenants",
    processDesc: "Aucune configuration, aucun entrainement, aucune pre-inscription. Sythio identifie les voix distinctes des le premier enregistrement et s'ameliore a chaque interaction.",
    card1Title: "Detection automatique",
    card1Desc: "Sythio analyse les caracteristiques vocales — hauteur, cadence, ton — et separe les intervenants sans aucune information prealable.",
    card2Title: "Separation des voix",
    card2Desc: "Meme quand les intervenants se chevauchent ou changent rapidement, Sythio maintient une separation precise. Les interruptions sont gerees naturellement.",
    card3Title: "Etiquettes d'intervenants",
    card3Desc: "Chaque intervenant recoit une etiquette coherente tout au long de l'enregistrement. Transcriptions, resumes et sorties font reference a la meme identite.",
    card4Title: "Renommez a tout moment",
    card4Desc: "Remplacez les etiquettes generiques par de vrais noms. Une fois renomme, chaque sortie — des resumes aux listes de taches — se met a jour avec la bonne personne.",
    smarterLabel: "Sorties plus intelligentes",
    smarterTitle: "Chaque sortie sait qui l'a dit",
    smarterDesc: "La detection des intervenants n'est pas une fonctionnalite isolee. Elle enrichit tout ce que Sythio produit. Quand vous savez qui a dit quoi, chaque sortie devient plus utile.",
    smart1Title: "Taches correctement attribuees",
    smart1Desc: "Quand quelqu'un s'engage sur une tache dans une conversation, Sythio l'attribue. Aucune ambiguite sur qui est responsable de quoi.",
    smart2Title: "Decisions attribuees",
    smart2Desc: "Les resumes refletent qui a propose une idee, qui a approuve et qui a souleve des preoccupations. Quand les decisions doivent etre revisitees, vous savez exactement qui etait implique.",
    smart3Title: "Resumes par intervenant",
    smart3Desc: "Besoin de savoir ce qu'une personne specifique a apporte ? Sythio peut generer des ventilations par intervenant pour examiner les contributions individuelles.",
    scaleLabel: "Echelle",
    scaleTitle: "Gere les conversations complexes",
    scaleDesc: "Sythio prend en charge les enregistrements avec 10 intervenants ou plus. Reunions d'equipe, tables rondes, entretiens de groupe et grandes conferences sont geres avec precision.",
    scaleBullet1: "Precis avec 2 intervenants ou 12",
    scaleBullet2: "Fonctionne avec une qualite audio variable",
    scaleBullet3: "Gere les chevauchements de parole et les echanges rapides",
    scaleBullet4: "Etiquettes coherentes sur les longs enregistrements",
    scaleVisualCaption: "Intervenants detectes et separes automatiquement",
    useCasesLabel: "Cas d'utilisation",
    useCasesTitle: "Ou la detection des intervenants compte",
    uc1Title: "Reunions d'equipe",
    uc1Desc: "Sachez qui s'est engage a quoi. Les taches et decisions attribuees signifient que personne ne peut dire qu'il n'etait pas au courant.",
    uc2Title: "Appels clients",
    uc2Desc: "Separee les retours clients de la discussion interne. Attribuez les exigences et les decisions au bon interlocuteur pour un suivi clair.",
    uc3Title: "Entretiens",
    uc3Desc: "Separee clairement l'intervieweur de l'interviewe. Examinez les reponses par personne, comparez les candidats et creez des notes d'entretien structurees.",
    relAISummaries: "Resumes IA",
    relTaskExtraction: "Extraction de taches",
    relMeetings: "Reunions",
    relClientCalls: "Appels clients",
    ctaTitle: "Chaque voix identifiee. Chaque mot attribue.",
    ctaDesc: "La detection des intervenants est integree a chaque sortie de Sythio. Enregistrez une conversation et constatez la difference.",
  },
  pt: {
    label: "Recursos",
    title: "Saiba quem disse o que. Automaticamente.",
    subtitle: "O Sythio detecta e separa falantes nas suas gravacoes. Cada resumo, tarefa e item de acao e atribuido a pessoa certa — sem marcacao manual.",
    processLabel: "Processo",
    processTitle: "Como funciona a deteccao de falantes",
    processDesc: "Sem configuracao, sem treinamento, sem pre-registro. O Sythio identifica vozes distintas desde a primeira gravacao e melhora a cada interacao.",
    card1Title: "Deteccao automatica",
    card1Desc: "O Sythio analisa caracteristicas vocais — tom, cadencia, timbre — e separa os falantes sem nenhuma informacao previa sobre quem esta na sala.",
    card2Title: "Separacao de vozes",
    card2Desc: "Mesmo quando os falantes se sobrepoe ou mudam rapidamente, o Sythio mantem uma separacao precisa. Interrupcoes sao tratadas naturalmente.",
    card3Title: "Etiquetas de falantes",
    card3Desc: "Cada falante recebe uma etiqueta consistente ao longo da gravacao. Transcricoes, resumos e saidas referenciam a mesma identidade.",
    card4Title: "Renomeie a qualquer momento",
    card4Desc: "Substitua etiquetas genericas por nomes reais. Uma vez renomeado, cada saida — de resumos a listas de tarefas — se atualiza com a pessoa correta.",
    smarterLabel: "Saidas mais inteligentes",
    smarterTitle: "Cada saida sabe quem disse",
    smarterDesc: "A deteccao de falantes nao e um recurso independente. Ela enriquece tudo que o Sythio produz. Quando voce sabe quem disse o que, cada saida se torna mais util.",
    smart1Title: "Tarefas atribuidas corretamente",
    smart1Desc: "Quando alguem se compromete com uma tarefa em uma conversa, o Sythio atribui a ela. Sem ambiguidade sobre quem e responsavel pelo que.",
    smart2Title: "Decisoes atribuidas",
    smart2Desc: "Os resumos refletem quem propos uma ideia, quem concordou e quem levantou preocupacoes. Quando decisoes precisam ser revisitadas, voce sabe exatamente quem esteve envolvido.",
    smart3Title: "Resumos por falante",
    smart3Desc: "Precisa saber o que uma pessoa especifica contribuiu? O Sythio pode gerar detalhamentos por falante para revisar contribuicoes individuais.",
    scaleLabel: "Escala",
    scaleTitle: "Lida com conversas complexas",
    scaleDesc: "O Sythio suporta gravacoes com 10 ou mais falantes. Reunioes de equipe, paineis de discussao, entrevistas em grupo e grandes chamadas sao tratados com precisao consistente.",
    scaleBullet1: "Preciso com 2 falantes ou 12",
    scaleBullet2: "Funciona com qualidade de audio variavel",
    scaleBullet3: "Lida com fala sobreposta e trocas rapidas",
    scaleBullet4: "Etiquetas consistentes em gravacoes longas",
    scaleVisualCaption: "Falantes detectados e separados automaticamente",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Onde a deteccao de falantes importa",
    uc1Title: "Reunioes de equipe",
    uc1Desc: "Saiba quem se comprometeu com o que. Tarefas e decisoes atribuidas significam que ninguem pode dizer que nao estava informado.",
    uc2Title: "Chamadas com clientes",
    uc2Desc: "Separe o feedback do cliente da discussao interna. Atribua requisitos e decisoes ao stakeholder correto para um acompanhamento claro.",
    uc3Title: "Entrevistas",
    uc3Desc: "Separe claramente entrevistador e entrevistado. Revise respostas por pessoa, compare candidatos e crie notas de entrevista estruturadas.",
    relAISummaries: "Resumos IA",
    relTaskExtraction: "Extracao de tarefas",
    relMeetings: "Reunioes",
    relClientCalls: "Chamadas com clientes",
    ctaTitle: "Cada voz identificada. Cada palavra atribuida.",
    ctaDesc: "A deteccao de falantes esta integrada em cada saida do Sythio. Grave uma conversa e veja a diferenca.",
  },
  it: {
    label: "Funzionalita",
    title: "Sapere chi ha detto cosa. Automaticamente.",
    subtitle: "Sythio rileva e separa i parlanti nelle tue registrazioni. Ogni riassunto, attivita ed elemento d'azione e attribuito alla persona giusta — senza tagging manuale.",
    processLabel: "Processo",
    processTitle: "Come funziona il rilevamento dei parlanti",
    processDesc: "Nessuna configurazione, nessun addestramento, nessuna pre-registrazione. Sythio identifica voci distinte dalla prima registrazione e migliora a ogni interazione.",
    card1Title: "Rilevamento automatico",
    card1Desc: "Sythio analizza le caratteristiche vocali — tono, cadenza, timbro — e separa i parlanti senza alcuna informazione preventiva su chi e nella stanza.",
    card2Title: "Separazione delle voci",
    card2Desc: "Anche quando i parlanti si sovrappongono o cambiano rapidamente, Sythio mantiene una separazione precisa. Interruzioni e sovrapposizioni sono gestite con naturalezza.",
    card3Title: "Etichette dei parlanti",
    card3Desc: "Ogni parlante riceve un'etichetta coerente per tutta la registrazione. Trascrizioni, riassunti e output fanno tutti riferimento alla stessa identita.",
    card4Title: "Rinomina in qualsiasi momento",
    card4Desc: "Sostituisci le etichette generiche con nomi reali. Una volta rinominato, ogni output — dai riassunti alle liste di attivita — si aggiorna con la persona corretta.",
    smarterLabel: "Output piu intelligenti",
    smarterTitle: "Ogni output sa chi l'ha detto",
    smarterDesc: "Il rilevamento dei parlanti non e una funzionalita autonoma. Arricchisce tutto cio che Sythio produce. Quando sai chi ha detto cosa, ogni output diventa piu utile.",
    smart1Title: "Attivita assegnate correttamente",
    smart1Desc: "Quando qualcuno si impegna in un'attivita durante una conversazione, Sythio la attribuisce. Nessuna ambiguita su chi e responsabile di cosa.",
    smart2Title: "Decisioni attribuite",
    smart2Desc: "I riassunti riflettono chi ha proposto un'idea, chi ha concordato e chi ha sollevato preoccupazioni. Quando le decisioni devono essere riviste, sai esattamente chi era coinvolto.",
    smart3Title: "Riassunti per parlante",
    smart3Desc: "Hai bisogno di sapere cosa ha contribuito una persona specifica? Sythio puo generare dettagli per parlante per esaminare i contributi individuali.",
    scaleLabel: "Scala",
    scaleTitle: "Gestisce conversazioni complesse",
    scaleDesc: "Sythio supporta registrazioni con 10 o piu parlanti. Riunioni di team, tavole rotonde, interviste di gruppo e grandi chiamate sono gestite con precisione costante.",
    scaleBullet1: "Preciso con 2 parlanti o 12",
    scaleBullet2: "Funziona con qualita audio variabile",
    scaleBullet3: "Gestisce sovrapposizioni vocali e scambi rapidi",
    scaleBullet4: "Etichette coerenti nelle registrazioni lunghe",
    scaleVisualCaption: "Parlanti rilevati e separati automaticamente",
    useCasesLabel: "Casi d'uso",
    useCasesTitle: "Dove conta il rilevamento dei parlanti",
    uc1Title: "Riunioni di team",
    uc1Desc: "Sapere chi si e impegnato in cosa. Attivita e decisioni attribuite significano che nessuno puo dire di non essere stato informato.",
    uc2Title: "Chiamate clienti",
    uc2Desc: "Separa il feedback del cliente dalla discussione interna. Attribuisci requisiti e decisioni allo stakeholder corretto per un follow-up chiaro.",
    uc3Title: "Interviste",
    uc3Desc: "Separa chiaramente intervistatore e intervistato. Esamina le risposte per persona, confronta candidati e crea note di intervista strutturate.",
    relAISummaries: "Riassunti IA",
    relTaskExtraction: "Estrazione attivita",
    relMeetings: "Riunioni",
    relClientCalls: "Chiamate clienti",
    ctaTitle: "Ogni voce identificata. Ogni parola attribuita.",
    ctaDesc: "Il rilevamento dei parlanti e integrato in ogni output di Sythio. Registra una conversazione e nota la differenza.",
  },
};

export default function SpeakerDetectionPage() {
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
              <Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">
                {s("common.allFeatures")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.processLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.processTitle}
              </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.processDesc}
            </p>
          </div>
          <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.card1Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.card1Desc}</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.card2Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.card2Desc}</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.card3Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.card3Desc}</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.card4Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.card4Desc}</p>
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* Smarter Outputs with Speaker Context */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.smarterLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.smarterTitle}
              </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.smarterDesc}
            </p>
          </div>
          <GsapStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.smart1Title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {c.smart1Desc} <Link href="/features/task-extraction" className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors">{c.relTaskExtraction.toLowerCase()}</Link>
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.smart2Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.smart2Desc}</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.smart3Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.smart3Desc}</p>
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* 10+ Speakers Supported */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.scaleLabel}</p>
              <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.scaleTitle}
                </TextReveal>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                {c.scaleDesc}
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">{c.scaleBullet1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">{c.scaleBullet2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">{c.scaleBullet3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">{c.scaleBullet4}</span>
                </li>
              </ul>
            </div>
            <div className="bg-background rounded-2xl border border-border-light p-10">
              <div className="space-y-5">
                {[
                  { label: "Speaker 1", name: "Alex", color: "bg-indigo-500" },
                  { label: "Speaker 2", name: "Morgan", color: "bg-violet-500" },
                  { label: "Speaker 3", name: "Jordan", color: "bg-amber-500" },
                  { label: "Speaker 4", name: "Casey", color: "bg-emerald-500" },
                ].map((speaker) => (
                  <div key={speaker.label} className="flex items-center gap-4">
                    <div className={`w-9 h-9 rounded-full ${speaker.color} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                      {speaker.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground">{speaker.name}</p>
                      <div className="mt-1 h-2 bg-border-light rounded-full overflow-hidden">
                        <div className={`h-full ${speaker.color} rounded-full`} style={{ width: `${65 + Math.floor(speaker.name.length * 5)}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted-light text-center">{c.scaleVisualCaption}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Speaker Detection Matters */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.useCasesLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.useCasesTitle}
              </TextReveal>
          </div>
          <GsapStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>
            <ScrollScale><Link href="/use-cases/meetings" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc1Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.uc1Desc}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/client-calls" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc2Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.uc2Desc}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/lectures" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc3Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.uc3Desc}</p>
            </Link></ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* Related */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">{s("common.related")}</h2>
          <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
            <ScrollScale><Link href="/features/ai-summaries" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relAISummaries}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/features/task-extraction" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relTaskExtraction}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/meetings" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relMeetings}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/client-calls" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relClientCalls}</p>
            </Link></ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {c.ctaTitle}
            </TextReveal>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {c.ctaDesc}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300">{s("common.startFree")}</Link>
            <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{s("common.exploreProduct")}</Link>
          </div>
          <p className="mt-6 text-sm text-muted">{s("common.freePlan")}</p>
        </div>
      </section>
    </PageReveal>
  );
}
