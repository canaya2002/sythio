"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Use Cases",
    title: "AI Interview Notes — Transcripts, Summaries & Key Insights",
    subtitle:
      "Interviews are full of valuable insights, but reviewing recordings is slow and painful. Sythio transcribes interviews, detects speakers, and extracts key findings — so you get structured, usable notes instead of hours of audio to replay.",
    howTitle: "How It Works",
    howSubtitle:
      "From raw interview audio to structured notes in three steps.",
    step1Title: "Upload the Recording",
    step1Desc:
      "Drop in any interview recording — in-person, phone, video call, or field interview. MP3, WAV, M4A, and all common formats supported.",
    step2Title: "AI Analyzes the Interview",
    step2Desc:
      "Sythio transcribes every word, identifies the interviewer and interviewee, and analyzes the content for key themes, insights, and quotable moments.",
    step3Title: "Get Structured Notes",
    step3Desc:
      "Receive a full transcript with speaker labels, a summary of key findings, clean quotes attributed to the right person, and organized themes — ready in seconds.",
    whatTitle: "What You Get from Every Interview",
    whatSubtitle:
      "One recording. Multiple outputs. Everything you need to work with interview content efficiently.",
    transcriptTitle: "Full Transcript",
    transcriptDesc:
      "Every word, accurately transcribed with clear speaker attribution. Interviewer and interviewee statements are labeled and easy to follow.",
    speakerTitle: "Speaker Attribution",
    speakerDesc:
      "Who said what, clearly identified throughout. Quotes, insights, and key statements are connected to the right person automatically.",
    findingsTitle: "Key Findings",
    findingsDesc:
      "The most important insights, themes, and conclusions extracted from the interview. The substance distilled into clear, scannable points.",
    quotesTitle: "Clean Quotes",
    quotesDesc:
      "Notable statements cleaned up and attributed. Ready to use in articles, reports, or research papers without manual transcription.",
    whoTitle: "Who It's For",
    whoSubtitle:
      "Interviews happen across every field. Sythio turns any interview recording into structured, actionable output.",
    journalistsTitle: "Journalists",
    journalistsDesc:
      "Conduct interviews and get accurate transcripts with attributed quotes in seconds. Focus on asking great questions instead of worrying about your notes.",
    researchersTitle: "Researchers",
    researchersDesc:
      "Process qualitative research interviews at scale. Get transcripts, coded themes, and key findings without hours of manual transcription and analysis.",
    hrTitle: "HR & Recruiters",
    hrDesc:
      "Review candidate interviews with structured summaries and key highlights. Compare candidates based on substance, not memory. Keep consistent records.",
    podcastersTitle: "Podcasters & Content Creators",
    podcastersDesc:
      "Turn interview episodes into show notes, pull quotes, and article-ready content. Repurpose interview content across formats without replaying the full recording.",
    relatedMeetings: "Meetings",
    relatedClientCalls: "Client Calls",
    relatedSpeakerDetection: "Speaker Detection",
    relatedKeyPoints: "Key Points",
    ctaTitle: "Every Interview, Captured and Structured",
    ctaSubtitle:
      "Stop spending hours transcribing and reviewing interview recordings. Sythio gives you structured notes in seconds.",
  },
  es: {
    label: "Casos de uso",
    title: "Notas de entrevistas con IA — Transcripciones, resúmenes e ideas clave",
    subtitle:
      "Las entrevistas están llenas de ideas valiosas, pero revisar grabaciones es lento y tedioso. Sythio transcribe entrevistas, detecta hablantes y extrae hallazgos clave — para que obtengas notas estructuradas y útiles en vez de horas de audio por reproducir.",
    howTitle: "Cómo funciona",
    howSubtitle:
      "Del audio de la entrevista en bruto a notas estructuradas en tres pasos.",
    step1Title: "Sube la grabación",
    step1Desc:
      "Arrastra cualquier grabación de entrevista — presencial, telefónica, videollamada o entrevista de campo. MP3, WAV, M4A y todos los formatos comunes compatibles.",
    step2Title: "La IA analiza la entrevista",
    step2Desc:
      "Sythio transcribe cada palabra, identifica al entrevistador y al entrevistado, y analiza el contenido en busca de temas clave, ideas y momentos citables.",
    step3Title: "Obtén notas estructuradas",
    step3Desc:
      "Recibe una transcripción completa con etiquetas de hablante, un resumen de hallazgos clave, citas limpias atribuidas a la persona correcta y temas organizados — listo en segundos.",
    whatTitle: "Lo que obtienes de cada entrevista",
    whatSubtitle:
      "Una grabación. Múltiples resultados. Todo lo que necesitas para trabajar con el contenido de entrevistas de manera eficiente.",
    transcriptTitle: "Transcripción completa",
    transcriptDesc:
      "Cada palabra, transcrita con precisión y atribución clara de hablante. Las declaraciones del entrevistador y el entrevistado están etiquetadas y son fáciles de seguir.",
    speakerTitle: "Atribución de hablantes",
    speakerDesc:
      "Quién dijo qué, claramente identificado en todo momento. Citas, ideas y declaraciones clave se conectan automáticamente con la persona correcta.",
    findingsTitle: "Hallazgos clave",
    findingsDesc:
      "Las ideas, temas y conclusiones más importantes extraídos de la entrevista. La sustancia destilada en puntos claros y escaneables.",
    quotesTitle: "Citas limpias",
    quotesDesc:
      "Declaraciones notables limpiadas y atribuidas. Listas para usar en artículos, informes o trabajos de investigación sin transcripción manual.",
    whoTitle: "Para quién es",
    whoSubtitle:
      "Las entrevistas ocurren en todos los campos. Sythio convierte cualquier grabación de entrevista en resultados estructurados y accionables.",
    journalistsTitle: "Periodistas",
    journalistsDesc:
      "Realiza entrevistas y obtén transcripciones precisas con citas atribuidas en segundos. Concéntrate en hacer grandes preguntas en vez de preocuparte por tus notas.",
    researchersTitle: "Investigadores",
    researchersDesc:
      "Procesa entrevistas de investigación cualitativa a escala. Obtén transcripciones, temas codificados y hallazgos clave sin horas de transcripción y análisis manual.",
    hrTitle: "RRHH y reclutadores",
    hrDesc:
      "Revisa entrevistas de candidatos con resúmenes estructurados y puntos destacados. Compara candidatos basándote en sustancia, no en memoria. Mantén registros consistentes.",
    podcastersTitle: "Podcasters y creadores de contenido",
    podcastersDesc:
      "Convierte episodios de entrevistas en notas del programa, citas destacadas y contenido listo para artículos. Reutiliza contenido de entrevistas sin reproducir la grabación completa.",
    relatedMeetings: "Reuniones",
    relatedClientCalls: "Llamadas con clientes",
    relatedSpeakerDetection: "Detección de hablantes",
    relatedKeyPoints: "Puntos clave",
    ctaTitle: "Cada entrevista, capturada y estructurada",
    ctaSubtitle:
      "Deja de pasar horas transcribiendo y revisando grabaciones de entrevistas. Sythio te da notas estructuradas en segundos.",
  },
  fr: {
    label: "Cas d'usage",
    title: "Notes d'entretien avec IA — Transcriptions, resumes et idees cles",
    subtitle:
      "Les entretiens regorgent d'idees precieuses, mais revoir les enregistrements est lent et penible. Sythio transcrit les entretiens, detecte les locuteurs et extrait les conclusions cles — pour que vous obteniez des notes structurees et utilisables au lieu d'heures d'audio a reecouter.",
    howTitle: "Comment ca fonctionne",
    howSubtitle:
      "De l'audio brut de l'entretien aux notes structurees en trois etapes.",
    step1Title: "Telechargez l'enregistrement",
    step1Desc:
      "Deposez n'importe quel enregistrement d'entretien — en personne, telephonique, visioconference ou entretien de terrain. MP3, WAV, M4A et tous les formats courants supportes.",
    step2Title: "L'IA analyse l'entretien",
    step2Desc:
      "Sythio transcrit chaque mot, identifie l'intervieweur et l'interviewe, et analyse le contenu pour les themes cles, les idees et les moments citables.",
    step3Title: "Obtenez des notes structurees",
    step3Desc:
      "Recevez une transcription complete avec etiquettes de locuteur, un resume des conclusions cles, des citations propres attribuees a la bonne personne et des themes organises — pret en quelques secondes.",
    whatTitle: "Ce que vous obtenez de chaque entretien",
    whatSubtitle:
      "Un enregistrement. Plusieurs resultats. Tout ce dont vous avez besoin pour travailler efficacement avec le contenu des entretiens.",
    transcriptTitle: "Transcription complete",
    transcriptDesc:
      "Chaque mot, transcrit avec precision et attribution claire du locuteur. Les declarations de l'intervieweur et de l'interviewe sont etiquetees et faciles a suivre.",
    speakerTitle: "Attribution des locuteurs",
    speakerDesc:
      "Qui a dit quoi, clairement identifie tout au long. Citations, idees et declarations cles sont automatiquement connectees a la bonne personne.",
    findingsTitle: "Conclusions cles",
    findingsDesc:
      "Les idees, themes et conclusions les plus importants extraits de l'entretien. La substance distillee en points clairs et faciles a parcourir.",
    quotesTitle: "Citations propres",
    quotesDesc:
      "Declarations notables nettoyees et attribuees. Pretes a utiliser dans des articles, rapports ou travaux de recherche sans transcription manuelle.",
    whoTitle: "Pour qui c'est fait",
    whoSubtitle:
      "Les entretiens ont lieu dans tous les domaines. Sythio transforme n'importe quel enregistrement d'entretien en resultats structures et exploitables.",
    journalistsTitle: "Journalistes",
    journalistsDesc:
      "Menez des entretiens et obtenez des transcriptions precises avec citations attribuees en quelques secondes. Concentrez-vous sur poser de bonnes questions au lieu de vous soucier de vos notes.",
    researchersTitle: "Chercheurs",
    researchersDesc:
      "Traitez les entretiens de recherche qualitative a grande echelle. Obtenez transcriptions, themes codes et conclusions cles sans heures de transcription et d'analyse manuelles.",
    hrTitle: "RH et recruteurs",
    hrDesc:
      "Revoyez les entretiens de candidats avec des resumes structures et des points saillants. Comparez les candidats sur la substance, pas sur la memoire. Maintenez des dossiers coherents.",
    podcastersTitle: "Podcasters et createurs de contenu",
    podcastersDesc:
      "Transformez les episodes d'entretiens en notes d'emission, citations et contenu pret pour des articles. Reutilisez le contenu sans reecouter l'enregistrement complet.",
    relatedMeetings: "Reunions",
    relatedClientCalls: "Appels clients",
    relatedSpeakerDetection: "Detection des locuteurs",
    relatedKeyPoints: "Points cles",
    ctaTitle: "Chaque entretien, capture et structure",
    ctaSubtitle:
      "Arretez de passer des heures a transcrire et revoir les enregistrements d'entretiens. Sythio vous donne des notes structurees en quelques secondes.",
  },
  pt: {
    label: "Casos de uso",
    title: "Notas de entrevista com IA — Transcricoes, resumos e insights-chave",
    subtitle:
      "Entrevistas estao cheias de insights valiosos, mas revisar gravacoes e lento e doloroso. O Sythio transcreve entrevistas, detecta falantes e extrai conclusoes-chave — para que voce tenha notas estruturadas e uteis em vez de horas de audio para reproduzir.",
    howTitle: "Como funciona",
    howSubtitle:
      "Do audio bruto da entrevista a notas estruturadas em tres passos.",
    step1Title: "Envie a gravacao",
    step1Desc:
      "Arraste qualquer gravacao de entrevista — presencial, telefonica, videochamada ou entrevista de campo. MP3, WAV, M4A e todos os formatos comuns suportados.",
    step2Title: "A IA analisa a entrevista",
    step2Desc:
      "O Sythio transcreve cada palavra, identifica o entrevistador e o entrevistado, e analisa o conteudo em busca de temas-chave, insights e momentos citaveis.",
    step3Title: "Receba notas estruturadas",
    step3Desc:
      "Receba uma transcricao completa com rotulos de falante, um resumo das conclusoes-chave, citacoes limpas atribuidas a pessoa correta e temas organizados — pronto em segundos.",
    whatTitle: "O que voce recebe de cada entrevista",
    whatSubtitle:
      "Uma gravacao. Multiplos resultados. Tudo o que voce precisa para trabalhar com conteudo de entrevistas de forma eficiente.",
    transcriptTitle: "Transcricao completa",
    transcriptDesc:
      "Cada palavra, transcrita com precisao e atribuicao clara de falante. As declaracoes do entrevistador e do entrevistado sao rotuladas e faceis de acompanhar.",
    speakerTitle: "Atribuicao de falantes",
    speakerDesc:
      "Quem disse o que, claramente identificado ao longo da entrevista. Citacoes, insights e declaracoes-chave sao conectadas automaticamente a pessoa correta.",
    findingsTitle: "Conclusoes-chave",
    findingsDesc:
      "As ideias, temas e conclusoes mais importantes extraidos da entrevista. A substancia destilada em pontos claros e escaneveis.",
    quotesTitle: "Citacoes limpas",
    quotesDesc:
      "Declaracoes notaveis limpas e atribuidas. Prontas para uso em artigos, relatorios ou trabalhos de pesquisa sem transcricao manual.",
    whoTitle: "Para quem e",
    whoSubtitle:
      "Entrevistas acontecem em todos os campos. O Sythio transforma qualquer gravacao de entrevista em resultados estruturados e acionaveis.",
    journalistsTitle: "Jornalistas",
    journalistsDesc:
      "Conduza entrevistas e obtenha transcricoes precisas com citacoes atribuidas em segundos. Concentre-se em fazer otimas perguntas em vez de se preocupar com suas anotacoes.",
    researchersTitle: "Pesquisadores",
    researchersDesc:
      "Processe entrevistas de pesquisa qualitativa em escala. Obtenha transcricoes, temas codificados e conclusoes-chave sem horas de transcricao e analise manual.",
    hrTitle: "RH e recrutadores",
    hrDesc:
      "Revise entrevistas de candidatos com resumos estruturados e destaques-chave. Compare candidatos com base em substancia, nao em memoria. Mantenha registros consistentes.",
    podcastersTitle: "Podcasters e criadores de conteudo",
    podcastersDesc:
      "Transforme episodios de entrevistas em notas do programa, citacoes destacadas e conteudo pronto para artigos. Reutilize conteudo de entrevistas sem reproduzir a gravacao completa.",
    relatedMeetings: "Reunioes",
    relatedClientCalls: "Chamadas com clientes",
    relatedSpeakerDetection: "Deteccao de falantes",
    relatedKeyPoints: "Pontos-chave",
    ctaTitle: "Cada entrevista, capturada e estruturada",
    ctaSubtitle:
      "Pare de gastar horas transcrevendo e revisando gravacoes de entrevistas. O Sythio te da notas estruturadas em segundos.",
  },
  it: {
    label: "Casi d'uso",
    title: "Note di intervista con IA — Trascrizioni, riassunti e insight chiave",
    subtitle:
      "Le interviste sono piene di spunti preziosi, ma riascoltare le registrazioni e lento e faticoso. Sythio trascrive le interviste, rileva i parlanti ed estrae le conclusioni chiave — cosi ottieni note strutturate e utilizzabili invece di ore di audio da riascoltare.",
    howTitle: "Come funziona",
    howSubtitle:
      "Dall'audio grezzo dell'intervista a note strutturate in tre passaggi.",
    step1Title: "Carica la registrazione",
    step1Desc:
      "Trascina qualsiasi registrazione di intervista — di persona, telefonica, videochiamata o intervista sul campo. MP3, WAV, M4A e tutti i formati comuni supportati.",
    step2Title: "L'IA analizza l'intervista",
    step2Desc:
      "Sythio trascrive ogni parola, identifica l'intervistatore e l'intervistato, e analizza il contenuto per temi chiave, spunti e momenti citabili.",
    step3Title: "Ottieni note strutturate",
    step3Desc:
      "Ricevi una trascrizione completa con etichette dei parlanti, un riepilogo delle conclusioni chiave, citazioni pulite attribuite alla persona giusta e temi organizzati — pronto in pochi secondi.",
    whatTitle: "Cosa ottieni da ogni intervista",
    whatSubtitle:
      "Una registrazione. Molteplici risultati. Tutto cio che ti serve per lavorare con il contenuto delle interviste in modo efficiente.",
    transcriptTitle: "Trascrizione completa",
    transcriptDesc:
      "Ogni parola, trascritta con precisione e chiara attribuzione del parlante. Le dichiarazioni dell'intervistatore e dell'intervistato sono etichettate e facili da seguire.",
    speakerTitle: "Attribuzione dei parlanti",
    speakerDesc:
      "Chi ha detto cosa, chiaramente identificato dall'inizio alla fine. Citazioni, spunti e dichiarazioni chiave sono automaticamente collegati alla persona giusta.",
    findingsTitle: "Conclusioni chiave",
    findingsDesc:
      "Le idee, i temi e le conclusioni piu importanti estratti dall'intervista. La sostanza distillata in punti chiari e facili da scansionare.",
    quotesTitle: "Citazioni pulite",
    quotesDesc:
      "Dichiarazioni notevoli ripulite e attribuite. Pronte per l'uso in articoli, report o lavori di ricerca senza trascrizione manuale.",
    whoTitle: "Per chi e pensato",
    whoSubtitle:
      "Le interviste avvengono in ogni settore. Sythio trasforma qualsiasi registrazione di intervista in risultati strutturati e azionabili.",
    journalistsTitle: "Giornalisti",
    journalistsDesc:
      "Conduci interviste e ottieni trascrizioni accurate con citazioni attribuite in pochi secondi. Concentrati sulle domande giuste invece di preoccuparti degli appunti.",
    researchersTitle: "Ricercatori",
    researchersDesc:
      "Elabora interviste di ricerca qualitativa su larga scala. Ottieni trascrizioni, temi codificati e conclusioni chiave senza ore di trascrizione e analisi manuale.",
    hrTitle: "HR e recruiter",
    hrDesc:
      "Rivedi le interviste ai candidati con riassunti strutturati e punti salienti. Confronta i candidati sulla sostanza, non sulla memoria. Mantieni registri coerenti.",
    podcastersTitle: "Podcaster e creatori di contenuti",
    podcastersDesc:
      "Trasforma episodi di interviste in note dello show, citazioni e contenuto pronto per articoli. Riutilizza il contenuto delle interviste senza riascoltare l'intera registrazione.",
    relatedMeetings: "Riunioni",
    relatedClientCalls: "Chiamate clienti",
    relatedSpeakerDetection: "Rilevamento parlanti",
    relatedKeyPoints: "Punti chiave",
    ctaTitle: "Ogni intervista, catturata e strutturata",
    ctaSubtitle:
      "Smetti di passare ore a trascrivere e rivedere registrazioni di interviste. Sythio ti fornisce note strutturate in pochi secondi.",
  },
};

export default function InterviewsPage() {
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

      {/* How It Works */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            {s("common.howItWorks")}
          </p>
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {c.howTitle}
          </TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            {c.howSubtitle}
          </p>

          <GsapStagger stagger={0.08}>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: c.step1Title, description: c.step1Desc },
                { step: "02", title: c.step2Title, description: c.step2Desc },
                { step: "03", title: c.step3Title, description: c.step3Desc },
              ].map((item) => (
                <ScrollScale key={item.step}>
                  <div className="group p-8 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                    <span className="text-xs font-bold tracking-wider text-muted-light">{item.step}</span>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            {c.whatTitle}
          </TextReveal>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-14">
            {c.whatSubtitle}
          </p>
          <GsapStagger stagger={0.08} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollScale>
              <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.transcriptTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.transcriptDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.speakerTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.speakerDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.findingsTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.findingsDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.quotesTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.quotesDesc}</p>
              </div>
            </ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            {c.whoTitle}
          </TextReveal>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-14">
            {c.whoSubtitle}
          </p>
          <GsapStagger stagger={0.08} className="grid sm:grid-cols-2 gap-6">
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.journalistsTitle}</h3>
                <p className="text-base text-muted leading-relaxed">{c.journalistsDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.researchersTitle}</h3>
                <p className="text-base text-muted leading-relaxed">{c.researchersDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.hrTitle}</h3>
                <p className="text-base text-muted leading-relaxed">{c.hrDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.podcastersTitle}</h3>
                <p className="text-base text-muted leading-relaxed">{c.podcastersDesc}</p>
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
              <Link href="/use-cases/meetings" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedMeetings}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/use-cases/client-calls" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedClientCalls}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/features/speaker-detection" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedSpeakerDetection}</p>
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
