"use client";

import Link from "next/link";
import { useLanguage } from "../components/i18n/language-context";
import type { Locale } from "../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Audio to Summary",
    title: "Turn Any Audio into a Clear, Structured Summary",
    subtitle:
      "Record a conversation, upload a file, or capture a voice note. Sythio listens, analyzes context, and delivers a summary that captures what actually matters — decisions, ideas, and next steps.",
    howTitle: "Three steps to a finished summary",
    howSubtitle:
      "No templates. No manual editing. Sythio does the heavy lifting so you can focus on what comes next.",
    step1Title: "Record or upload",
    step1Desc:
      "Capture audio directly inside Sythio or upload an existing file. Meetings, voice notes, lectures — any format works.",
    step2Title: "Sythio analyzes context",
    step2Desc:
      "Speaker detection identifies who said what. The content is processed for topic structure, key decisions, and important details.",
    step3Title: "Get your summary",
    step3Desc:
      "A clean, structured summary is ready in seconds. Review it, export it, or share it — the information is organized and ready to use.",
    whatLabel: "What You Get",
    whatTitle: "What a Sythio Summary Includes",
    whatSubtitle:
      "Not a rough transcript with bullet points. A genuine summary — structured, readable, and built from real understanding of the conversation.",
    feat1Title: "Key decisions",
    feat1Desc:
      "Every decision made during the conversation is surfaced and clearly stated, so nothing slips through the cracks.",
    feat2Title: "Main topics covered",
    feat2Desc:
      "Topics are identified and grouped logically, giving you a clear picture of what was discussed and in what order.",
    feat3Title: "Action items mentioned",
    feat3Desc:
      "Commitments and follow-ups referenced in the conversation are highlighted, even if they weren't formally assigned.",
    feat4Title: "Context preserved",
    feat4Desc:
      "Important nuance, reasoning, and background context are retained — not just the conclusions, but why they were reached.",
    moreLabel: "One Recording, Many Outputs",
    moreTitle: "Not Just a Summary",
    moreSubtitle:
      "Every recording you process with Sythio can produce multiple outputs. A summary is often the starting point — but the same audio can also give you tasks, action plans, reports, and more.",
    more1Title: "Task lists",
    more1Desc:
      "Extract every commitment and action item, with owners when speakers are detected.",
    more2Title: "Action plans",
    more2Desc:
      "Structured, phased plans with priorities and responsibilities — built from your conversation.",
    more3Title: "Clean text",
    more3Desc:
      "Polished, readable text with filler words removed and grammar corrected.",
    more4Title: "All 9 formats",
    more4Desc:
      "Summaries, tasks, action plans, reports, messages, study notes, ideas, and more.",
    versatileLabel: "Versatile by Design",
    versatileTitle: "Works with Any Audio",
    versatileSubtitle:
      "Sythio adapts to the content. Whether it is a 30-second voice note or a two-hour strategy session, the summary reflects the depth and format of the original recording.",
    use1Title: "Meetings",
    use1Desc:
      "Team syncs, project reviews, one-on-ones — capture decisions and outcomes without taking notes.",
    use2Title: "Voice notes",
    use2Desc:
      "Quick thoughts, ideas on the go, personal reminders — summarized into something actionable.",
    use3Title: "Lectures & workshops",
    use3Desc:
      "Long-form educational content distilled into organized, study-ready summaries.",
    use4Title: "Calls & interviews",
    use4Desc:
      "Client conversations, sales calls, interviews — key points pulled out and structured.",
    outcome: "Outcome",
    rel1Name: "AI Summaries",
    rel2Name: "Audio to Tasks",
    rel3Name: "Audio to Action Plan",
    rel4Name: "Meetings",
    ctaTitle: "Stop re-listening. Start summarizing.",
    ctaSubtitle:
      "Every recording becomes a clear, structured summary — in seconds, not hours.",
  },
  es: {
    label: "Audio a Resumen",
    title: "Convierte cualquier audio en un resumen claro y estructurado",
    subtitle:
      "Graba una conversacion, sube un archivo o captura una nota de voz. Sythio escucha, analiza el contexto y entrega un resumen que captura lo que realmente importa: decisiones, ideas y proximos pasos.",
    howTitle: "Tres pasos para un resumen terminado",
    howSubtitle:
      "Sin plantillas. Sin edicion manual. Sythio hace el trabajo pesado para que puedas enfocarte en lo que sigue.",
    step1Title: "Graba o sube",
    step1Desc:
      "Captura audio directamente en Sythio o sube un archivo existente. Reuniones, notas de voz, clases — cualquier formato funciona.",
    step2Title: "Sythio analiza el contexto",
    step2Desc:
      "La deteccion de hablantes identifica quien dijo que. El contenido se procesa para estructura tematica, decisiones clave y detalles importantes.",
    step3Title: "Obtiene tu resumen",
    step3Desc:
      "Un resumen limpio y estructurado esta listo en segundos. Revisalo, exportalo o compartelo — la informacion esta organizada y lista para usar.",
    whatLabel: "Lo que obtienes",
    whatTitle: "Lo que incluye un resumen de Sythio",
    whatSubtitle:
      "No es una transcripcion con puntos. Un resumen genuino — estructurado, legible y construido desde la comprension real de la conversacion.",
    feat1Title: "Decisiones clave",
    feat1Desc:
      "Cada decision tomada durante la conversacion se destaca y se expresa claramente, para que nada se escape.",
    feat2Title: "Temas principales cubiertos",
    feat2Desc:
      "Los temas se identifican y agrupan logicamente, dandote una imagen clara de lo que se discutio y en que orden.",
    feat3Title: "Elementos de accion mencionados",
    feat3Desc:
      "Los compromisos y seguimientos referenciados en la conversacion se resaltan, incluso si no fueron asignados formalmente.",
    feat4Title: "Contexto preservado",
    feat4Desc:
      "Matices importantes, razonamiento y contexto se conservan — no solo las conclusiones, sino por que se llegaron a ellas.",
    moreLabel: "Una grabacion, muchos resultados",
    moreTitle: "No solo un resumen",
    moreSubtitle:
      "Cada grabacion que procesas con Sythio puede producir multiples resultados. Un resumen es a menudo el punto de partida — pero el mismo audio tambien puede darte tareas, planes de accion, informes y mas.",
    more1Title: "Listas de tareas",
    more1Desc:
      "Extrae cada compromiso y elemento de accion, con responsables cuando se detectan hablantes.",
    more2Title: "Planes de accion",
    more2Desc:
      "Planes estructurados y por fases con prioridades y responsabilidades — construidos desde tu conversacion.",
    more3Title: "Texto limpio",
    more3Desc:
      "Texto pulido y legible con muletillas eliminadas y gramatica corregida.",
    more4Title: "Los 9 formatos",
    more4Desc:
      "Resumenes, tareas, planes de accion, informes, mensajes, notas de estudio, ideas y mas.",
    versatileLabel: "Versatil por diseno",
    versatileTitle: "Funciona con cualquier audio",
    versatileSubtitle:
      "Sythio se adapta al contenido. Ya sea una nota de voz de 30 segundos o una sesion estrategica de dos horas, el resumen refleja la profundidad y el formato de la grabacion original.",
    use1Title: "Reuniones",
    use1Desc:
      "Sincronizaciones de equipo, revisiones de proyecto, uno a uno — captura decisiones y resultados sin tomar notas.",
    use2Title: "Notas de voz",
    use2Desc:
      "Pensamientos rapidos, ideas en movimiento, recordatorios personales — resumidos en algo accionable.",
    use3Title: "Clases y talleres",
    use3Desc:
      "Contenido educativo de larga duracion destilado en resumenes organizados y listos para estudiar.",
    use4Title: "Llamadas y entrevistas",
    use4Desc:
      "Conversaciones con clientes, llamadas de ventas, entrevistas — puntos clave extraidos y estructurados.",
    outcome: "Resultado",
    rel1Name: "Resumenes con IA",
    rel2Name: "Audio a Tareas",
    rel3Name: "Audio a Plan de Accion",
    rel4Name: "Reuniones",
    ctaTitle: "Deja de volver a escuchar. Empieza a resumir.",
    ctaSubtitle:
      "Cada grabacion se convierte en un resumen claro y estructurado — en segundos, no en horas.",
  },
  fr: {
    label: "Audio en Resume",
    title: "Transformez tout audio en un resume clair et structure",
    subtitle:
      "Enregistrez une conversation, telechargez un fichier ou capturez une note vocale. Sythio ecoute, analyse le contexte et fournit un resume qui capture ce qui compte vraiment — decisions, idees et prochaines etapes.",
    howTitle: "Trois etapes pour un resume fini",
    howSubtitle:
      "Pas de modeles. Pas d'edition manuelle. Sythio fait le travail lourd pour que vous puissiez vous concentrer sur la suite.",
    step1Title: "Enregistrez ou telechargez",
    step1Desc:
      "Capturez l'audio directement dans Sythio ou telechargez un fichier existant. Reunions, notes vocales, cours — tout format fonctionne.",
    step2Title: "Sythio analyse le contexte",
    step2Desc:
      "La detection des locuteurs identifie qui a dit quoi. Le contenu est traite pour la structure thematique, les decisions cles et les details importants.",
    step3Title: "Obtenez votre resume",
    step3Desc:
      "Un resume clair et structure est pret en quelques secondes. Consultez-le, exportez-le ou partagez-le — l'information est organisee et prete a l'emploi.",
    whatLabel: "Ce que vous obtenez",
    whatTitle: "Ce qu'inclut un resume Sythio",
    whatSubtitle:
      "Pas une transcription brute avec des puces. Un veritable resume — structure, lisible et construit a partir d'une comprehension reelle de la conversation.",
    feat1Title: "Decisions cles",
    feat1Desc:
      "Chaque decision prise lors de la conversation est mise en evidence et clairement formulee, pour que rien ne passe a travers les mailles du filet.",
    feat2Title: "Sujets principaux couverts",
    feat2Desc:
      "Les sujets sont identifies et regroupes logiquement, vous donnant une image claire de ce qui a ete discute et dans quel ordre.",
    feat3Title: "Elements d'action mentionnes",
    feat3Desc:
      "Les engagements et suivis mentionnes dans la conversation sont mis en evidence, meme s'ils n'ont pas ete formellement assignes.",
    feat4Title: "Contexte preserve",
    feat4Desc:
      "Les nuances importantes, le raisonnement et le contexte sont conserves — pas seulement les conclusions, mais pourquoi elles ont ete atteintes.",
    moreLabel: "Un enregistrement, plusieurs resultats",
    moreTitle: "Pas qu'un resume",
    moreSubtitle:
      "Chaque enregistrement traite avec Sythio peut produire plusieurs resultats. Un resume est souvent le point de depart — mais le meme audio peut aussi vous donner des taches, des plans d'action, des rapports et plus encore.",
    more1Title: "Listes de taches",
    more1Desc:
      "Extrayez chaque engagement et element d'action, avec les responsables lorsque les locuteurs sont detectes.",
    more2Title: "Plans d'action",
    more2Desc:
      "Plans structures et phases avec priorites et responsabilites — construits a partir de votre conversation.",
    more3Title: "Texte nettoye",
    more3Desc:
      "Texte poli et lisible avec les mots de remplissage supprimes et la grammaire corrigee.",
    more4Title: "Les 9 formats",
    more4Desc:
      "Resumes, taches, plans d'action, rapports, messages, notes d'etude, idees et plus encore.",
    versatileLabel: "Polyvalent par conception",
    versatileTitle: "Fonctionne avec tout audio",
    versatileSubtitle:
      "Sythio s'adapte au contenu. Qu'il s'agisse d'une note vocale de 30 secondes ou d'une session strategique de deux heures, le resume reflete la profondeur et le format de l'enregistrement original.",
    use1Title: "Reunions",
    use1Desc:
      "Synchronisations d'equipe, revues de projet, tete-a-tete — capturez les decisions et resultats sans prendre de notes.",
    use2Title: "Notes vocales",
    use2Desc:
      "Pensees rapides, idees en deplacement, rappels personnels — resumes en quelque chose d'actionnable.",
    use3Title: "Cours et ateliers",
    use3Desc:
      "Contenu educatif long condense en resumes organises et prets pour l'etude.",
    use4Title: "Appels et entretiens",
    use4Desc:
      "Conversations clients, appels commerciaux, entretiens — points cles extraits et structures.",
    outcome: "Resultat",
    rel1Name: "Resumes IA",
    rel2Name: "Audio en Taches",
    rel3Name: "Audio en Plan d'action",
    rel4Name: "Reunions",
    ctaTitle: "Arretez de reecouter. Commencez a resumer.",
    ctaSubtitle:
      "Chaque enregistrement devient un resume clair et structure — en secondes, pas en heures.",
  },
  pt: {
    label: "Audio para Resumo",
    title: "Transforme qualquer audio em um resumo claro e estruturado",
    subtitle:
      "Grave uma conversa, envie um arquivo ou capture uma nota de voz. Sythio ouve, analisa o contexto e entrega um resumo que captura o que realmente importa — decisoes, ideias e proximos passos.",
    howTitle: "Tres passos para um resumo pronto",
    howSubtitle:
      "Sem modelos. Sem edicao manual. Sythio faz o trabalho pesado para que voce possa focar no que vem a seguir.",
    step1Title: "Grave ou envie",
    step1Desc:
      "Capture audio diretamente no Sythio ou envie um arquivo existente. Reunioes, notas de voz, aulas — qualquer formato funciona.",
    step2Title: "Sythio analisa o contexto",
    step2Desc:
      "A deteccao de falantes identifica quem disse o que. O conteudo e processado para estrutura tematica, decisoes-chave e detalhes importantes.",
    step3Title: "Receba seu resumo",
    step3Desc:
      "Um resumo limpo e estruturado esta pronto em segundos. Revise-o, exporte-o ou compartilhe-o — a informacao esta organizada e pronta para uso.",
    whatLabel: "O que voce recebe",
    whatTitle: "O que um resumo do Sythio inclui",
    whatSubtitle:
      "Nao e uma transcricao bruta com marcadores. Um resumo genuino — estruturado, legivel e construido a partir da compreensao real da conversa.",
    feat1Title: "Decisoes-chave",
    feat1Desc:
      "Cada decisao tomada durante a conversa e destacada e claramente expressa, para que nada passe despercebido.",
    feat2Title: "Temas principais cobertos",
    feat2Desc:
      "Os temas sao identificados e agrupados logicamente, dando uma imagem clara do que foi discutido e em que ordem.",
    feat3Title: "Itens de acao mencionados",
    feat3Desc:
      "Compromissos e acompanhamentos referenciados na conversa sao destacados, mesmo que nao tenham sido formalmente atribuidos.",
    feat4Title: "Contexto preservado",
    feat4Desc:
      "Nuances importantes, raciocinio e contexto sao mantidos — nao apenas as conclusoes, mas por que foram alcancadas.",
    moreLabel: "Uma gravacao, muitos resultados",
    moreTitle: "Nao apenas um resumo",
    moreSubtitle:
      "Cada gravacao processada com Sythio pode produzir multiplos resultados. Um resumo e frequentemente o ponto de partida — mas o mesmo audio tambem pode gerar tarefas, planos de acao, relatorios e mais.",
    more1Title: "Listas de tarefas",
    more1Desc:
      "Extraia cada compromisso e item de acao, com responsaveis quando falantes sao detectados.",
    more2Title: "Planos de acao",
    more2Desc:
      "Planos estruturados e faseados com prioridades e responsabilidades — construidos a partir da sua conversa.",
    more3Title: "Texto limpo",
    more3Desc:
      "Texto polido e legivel com palavras de preenchimento removidas e gramatica corrigida.",
    more4Title: "Todos os 9 formatos",
    more4Desc:
      "Resumos, tarefas, planos de acao, relatorios, mensagens, notas de estudo, ideias e mais.",
    versatileLabel: "Versatil por design",
    versatileTitle: "Funciona com qualquer audio",
    versatileSubtitle:
      "Sythio se adapta ao conteudo. Seja uma nota de voz de 30 segundos ou uma sessao estrategica de duas horas, o resumo reflete a profundidade e o formato da gravacao original.",
    use1Title: "Reunioes",
    use1Desc:
      "Sincronizacoes de equipe, revisoes de projeto, individuais — capture decisoes e resultados sem fazer anotacoes.",
    use2Title: "Notas de voz",
    use2Desc:
      "Pensamentos rapidos, ideias em movimento, lembretes pessoais — resumidos em algo acionavel.",
    use3Title: "Aulas e workshops",
    use3Desc:
      "Conteudo educacional longo destilado em resumos organizados e prontos para estudo.",
    use4Title: "Chamadas e entrevistas",
    use4Desc:
      "Conversas com clientes, chamadas de vendas, entrevistas — pontos-chave extraidos e estruturados.",
    outcome: "Resultado",
    rel1Name: "Resumos com IA",
    rel2Name: "Audio para Tarefas",
    rel3Name: "Audio para Plano de Acao",
    rel4Name: "Reunioes",
    ctaTitle: "Pare de reouvir. Comece a resumir.",
    ctaSubtitle:
      "Cada gravacao se torna um resumo claro e estruturado — em segundos, nao em horas.",
  },
  it: {
    label: "Audio in Riassunto",
    title: "Trasforma qualsiasi audio in un riassunto chiaro e strutturato",
    subtitle:
      "Registra una conversazione, carica un file o cattura una nota vocale. Sythio ascolta, analizza il contesto e fornisce un riassunto che cattura cio che conta davvero — decisioni, idee e prossimi passi.",
    howTitle: "Tre passaggi per un riassunto completo",
    howSubtitle:
      "Nessun modello. Nessuna modifica manuale. Sythio fa il lavoro pesante cosi puoi concentrarti su cio che viene dopo.",
    step1Title: "Registra o carica",
    step1Desc:
      "Cattura l'audio direttamente in Sythio o carica un file esistente. Riunioni, note vocali, lezioni — qualsiasi formato funziona.",
    step2Title: "Sythio analizza il contesto",
    step2Desc:
      "Il rilevamento dei parlanti identifica chi ha detto cosa. Il contenuto viene elaborato per struttura tematica, decisioni chiave e dettagli importanti.",
    step3Title: "Ottieni il tuo riassunto",
    step3Desc:
      "Un riassunto pulito e strutturato e pronto in pochi secondi. Consultalo, esportalo o condividilo — le informazioni sono organizzate e pronte all'uso.",
    whatLabel: "Cosa ottieni",
    whatTitle: "Cosa include un riassunto Sythio",
    whatSubtitle:
      "Non una trascrizione grezza con punti elenco. Un vero riassunto — strutturato, leggibile e costruito da una reale comprensione della conversazione.",
    feat1Title: "Decisioni chiave",
    feat1Desc:
      "Ogni decisione presa durante la conversazione viene evidenziata e chiaramente espressa, cosi nulla sfugge.",
    feat2Title: "Argomenti principali trattati",
    feat2Desc:
      "Gli argomenti sono identificati e raggruppati logicamente, offrendoti un quadro chiaro di cio che e stato discusso e in quale ordine.",
    feat3Title: "Elementi d'azione menzionati",
    feat3Desc:
      "Impegni e follow-up menzionati nella conversazione sono evidenziati, anche se non formalmente assegnati.",
    feat4Title: "Contesto preservato",
    feat4Desc:
      "Sfumature importanti, ragionamenti e contesto vengono conservati — non solo le conclusioni, ma perche sono state raggiunte.",
    moreLabel: "Una registrazione, molti risultati",
    moreTitle: "Non solo un riassunto",
    moreSubtitle:
      "Ogni registrazione elaborata con Sythio puo produrre molteplici risultati. Un riassunto e spesso il punto di partenza — ma lo stesso audio puo anche darti attivita, piani d'azione, report e altro.",
    more1Title: "Liste di attivita",
    more1Desc:
      "Estrai ogni impegno e elemento d'azione, con responsabili quando vengono rilevati i parlanti.",
    more2Title: "Piani d'azione",
    more2Desc:
      "Piani strutturati e per fasi con priorita e responsabilita — costruiti dalla tua conversazione.",
    more3Title: "Testo pulito",
    more3Desc:
      "Testo raffinato e leggibile con parole riempitive rimosse e grammatica corretta.",
    more4Title: "Tutti i 9 formati",
    more4Desc:
      "Riassunti, attivita, piani d'azione, report, messaggi, note di studio, idee e altro.",
    versatileLabel: "Versatile per design",
    versatileTitle: "Funziona con qualsiasi audio",
    versatileSubtitle:
      "Sythio si adatta al contenuto. Che si tratti di una nota vocale di 30 secondi o di una sessione strategica di due ore, il riassunto riflette la profondita e il formato della registrazione originale.",
    use1Title: "Riunioni",
    use1Desc:
      "Sincronizzazioni di team, revisioni di progetto, incontri individuali — cattura decisioni e risultati senza prendere appunti.",
    use2Title: "Note vocali",
    use2Desc:
      "Pensieri rapidi, idee in movimento, promemoria personali — riassunti in qualcosa di azionabile.",
    use3Title: "Lezioni e workshop",
    use3Desc:
      "Contenuto educativo lungo distillato in riassunti organizzati e pronti per lo studio.",
    use4Title: "Chiamate e interviste",
    use4Desc:
      "Conversazioni con clienti, chiamate commerciali, interviste — punti chiave estratti e strutturati.",
    outcome: "Risultato",
    rel1Name: "Riassunti IA",
    rel2Name: "Audio in Attivita",
    rel3Name: "Audio in Piano d'azione",
    rel4Name: "Riunioni",
    ctaTitle: "Smetti di riascoltare. Inizia a riassumere.",
    ctaSubtitle:
      "Ogni registrazione diventa un riassunto chiaro e strutturato — in secondi, non in ore.",
  },
};

export default function AudioToSummaryPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

  return (
    <PageReveal>
      {/* ─── Hero ─── */}
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
                {c.title}
              </h1>
            </TextReveal>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              {c.subtitle}
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

      {/* ─── How It Works ─── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            {s("common.howItWorks")}
          </p>
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.howTitle}
            </h2>
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

      {/* ─── What a Sythio Summary Includes ─── */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            {c.whatLabel}
          </p>
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.whatTitle}
            </h2>
          </TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            {c.whatSubtitle}
          </p>

          <GsapStagger stagger={0.08}>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: c.feat1Title, description: c.feat1Desc },
                { title: c.feat2Title, description: c.feat2Desc },
                { title: c.feat3Title, description: c.feat3Desc },
                { title: c.feat4Title, description: c.feat4Desc },
              ].map((item) => (
                <ScrollScale key={item.title}>
                  <div className="p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                    <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── Not Just a Summary ─── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.moreLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.moreTitle}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              {c.moreSubtitle}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: c.more1Title, description: c.more1Desc, href: "/audio-to-tasks" },
                { title: c.more2Title, description: c.more2Desc, href: "/audio-to-action-plan" },
                { title: c.more3Title, description: c.more3Desc, href: "/features/clean-text" },
                { title: c.more4Title, description: c.more4Desc, href: "/features" },
              ].map((item) => (
                <ScrollScale key={item.title}>
                  <Link
                    href={item.href}
                    className="group block p-7 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
                  >
                    <h3 className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">
                      {s("common.learnMore")} &rarr;
                    </span>
                  </Link>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── Works with Any Audio ─── */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            {c.versatileLabel}
          </p>
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.versatileTitle}
            </h2>
          </TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            {c.versatileSubtitle}
          </p>

          <GsapStagger stagger={0.08}>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: c.use1Title, description: c.use1Desc },
                { title: c.use2Title, description: c.use2Desc },
                { title: c.use3Title, description: c.use3Desc },
                { title: c.use4Title, description: c.use4Desc },
              ].map((item) => (
                <ScrollScale key={item.title}>
                  <div className="p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                    <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── Related ─── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">
              {s("common.related")}
            </h2>
          </TextReveal>
          <GsapStagger stagger={0.08}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollScale>
                <Link
                  href="/features/ai-summaries" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel1Name}</p>
                </Link>
              </ScrollScale>
              <ScrollScale>
                <Link
                  href="/audio-to-tasks" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel2Name}</p>
                </Link>
              </ScrollScale>
              <ScrollScale>
                <Link
                  href="/audio-to-action-plan" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel3Name}</p>
                </Link>
              </ScrollScale>
              <ScrollScale>
                <Link
                  href="/use-cases/meetings" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel4Name}</p>
                </Link>
              </ScrollScale>
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-32 md:py-44 bg-background animated-gradient-bg overflow-hidden">
        <div className="hero-orb hero-orb-2" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {c.ctaTitle}
            </h2>
          </TextReveal>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {c.ctaSubtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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
              {s("common.exploreProduct")}
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">{s("common.freePlan")}</p>
        </div>
      </section>
    </PageReveal>
  );
}
