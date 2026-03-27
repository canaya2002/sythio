"use client";

import Link from "next/link";
import { useLanguage } from "../components/i18n/language-context";
import type { Locale } from "../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Audio to Key Points",
    title: "Extract Key Points from Any Audio",
    subtitle:
      "Record a meeting, upload a call, or capture a voice note. Sythio identifies the most important points and delivers a concise, scannable list — the essence of the conversation without the noise.",
    howTitle: "Three steps to the key points",
    howSubtitle:
      "No scanning through long transcripts. No guessing what mattered most. Sythio surfaces what is important so you can act on it immediately.",
    step1Title: "Record or upload",
    step1Desc:
      "Capture audio directly inside Sythio or upload an existing file. Meetings, calls, lectures, voice notes — any format works.",
    step2Title: "Sythio identifies what matters",
    step2Desc:
      "The content is analyzed for decisions, insights, important statements, and critical details. Context is used to rank significance.",
    step3Title: "Get your key points",
    step3Desc:
      "A clean, prioritized list of key points is ready in seconds. Each point is clear, self-contained, and captures the essential meaning.",
    whatLabel: "What You Get",
    whatTitle: "What Sythio Key Points Include",
    whatSubtitle:
      "Not every sentence labeled as important. A curated set of the most significant points — ranked by relevance, grouped by topic, and written for clarity.",
    feat1Title: "Critical decisions",
    feat1Desc:
      "Every key decision made during the conversation is surfaced as a standalone point — clear, specific, and actionable.",
    feat2Title: "Important insights",
    feat2Desc:
      "Significant observations, data points, and conclusions are highlighted so the most valuable ideas stand out.",
    feat3Title: "Priority ranking",
    feat3Desc:
      "Points are ordered by significance, so the most critical information appears first — perfect for quick scanning.",
    feat4Title: "Concise and scannable",
    feat4Desc:
      "Each key point is written to be self-contained and immediately understandable, even without full context.",
    moreLabel: "One Recording, Many Outputs",
    moreTitle: "Not Just Key Points",
    moreSubtitle:
      "Key points give you the highlights. But the same recording can also produce full summaries, task lists, action plans, and more — all from a single upload.",
    more1Title: "Summaries",
    more1Desc:
      "A clear overview of the full conversation — decisions, topics, and takeaways.",
    more2Title: "Task lists",
    more2Desc:
      "Extract every commitment and action item, with owners when speakers are detected.",
    more3Title: "Study notes",
    more3Desc:
      "Organized notes with key concepts, definitions, and examples — structured for learning.",
    more4Title: "All 9 formats",
    more4Desc:
      "Summaries, tasks, action plans, reports, messages, study notes, ideas, and more.",
    versatileLabel: "Versatile by Design",
    versatileTitle: "Works with Any Audio",
    versatileSubtitle:
      "Sythio adapts to the content. Whether it is a five-minute standup or a two-hour workshop, the key points capture what matters most from the recording.",
    use1Title: "Meetings",
    use1Desc:
      "Team syncs, project reviews, one-on-ones — the most important decisions and outcomes extracted instantly.",
    use2Title: "Calls and interviews",
    use2Desc:
      "Client conversations, sales calls, and interviews distilled into the points that drive follow-up.",
    use3Title: "Lectures",
    use3Desc:
      "Long-form educational content reduced to the key concepts and takeaways worth remembering.",
    use4Title: "Voice notes",
    use4Desc:
      "Quick spoken ideas and reminders turned into clear, prioritized points ready to act on.",
    outcome: "Outcome",
    rel1Name: "Key Points",
    rel2Name: "Audio to Summary",
    rel3Name: "Audio to Clean Text",
    rel4Name: "Meetings",
    ctaTitle: "Stop guessing what mattered. Get the key points.",
    ctaSubtitle:
      "Every recording becomes a clear list of key points — in seconds, not hours.",
  },
  es: {
    label: "Audio a Puntos Clave",
    title: "Extrae los puntos clave de cualquier audio",
    subtitle:
      "Graba una reunion, sube una llamada o captura una nota de voz. Sythio identifica los puntos mas importantes y entrega una lista concisa y facil de escanear — la esencia de la conversacion sin el ruido.",
    howTitle: "Tres pasos para los puntos clave",
    howSubtitle:
      "Sin recorrer transcripciones largas. Sin adivinar que fue lo mas importante. Sythio destaca lo importante para que puedas actuar inmediatamente.",
    step1Title: "Graba o sube",
    step1Desc:
      "Captura audio directamente en Sythio o sube un archivo existente. Reuniones, llamadas, clases, notas de voz — cualquier formato funciona.",
    step2Title: "Sythio identifica lo que importa",
    step2Desc:
      "El contenido se analiza para decisiones, insights, declaraciones importantes y detalles criticos. El contexto se usa para clasificar la importancia.",
    step3Title: "Obtiene tus puntos clave",
    step3Desc:
      "Una lista limpia y priorizada de puntos clave esta lista en segundos. Cada punto es claro, independiente y captura el significado esencial.",
    whatLabel: "Lo que obtienes",
    whatTitle: "Lo que incluyen los puntos clave de Sythio",
    whatSubtitle:
      "No cada oracion etiquetada como importante. Un conjunto curado de los puntos mas significativos — clasificados por relevancia, agrupados por tema y escritos con claridad.",
    feat1Title: "Decisiones criticas",
    feat1Desc:
      "Cada decision clave tomada durante la conversacion se presenta como un punto independiente — claro, especifico y accionable.",
    feat2Title: "Insights importantes",
    feat2Desc:
      "Observaciones significativas, datos y conclusiones se destacan para que las ideas mas valiosas resalten.",
    feat3Title: "Clasificacion por prioridad",
    feat3Desc:
      "Los puntos se ordenan por importancia, asi la informacion mas critica aparece primero — perfecto para escaneo rapido.",
    feat4Title: "Conciso y escaneable",
    feat4Desc:
      "Cada punto clave esta escrito para ser independiente e inmediatamente comprensible, incluso sin el contexto completo.",
    moreLabel: "Una grabacion, muchos resultados",
    moreTitle: "No solo puntos clave",
    moreSubtitle:
      "Los puntos clave te dan los highlights. Pero la misma grabacion tambien puede producir resumenes completos, listas de tareas, planes de accion y mas — todo desde una sola carga.",
    more1Title: "Resumenes",
    more1Desc:
      "Una vision clara de toda la conversacion — decisiones, temas y conclusiones.",
    more2Title: "Listas de tareas",
    more2Desc:
      "Extrae cada compromiso y elemento de accion, con responsables cuando se detectan hablantes.",
    more3Title: "Notas de estudio",
    more3Desc:
      "Notas organizadas con conceptos clave, definiciones y ejemplos — estructuradas para el aprendizaje.",
    more4Title: "Los 9 formatos",
    more4Desc:
      "Resumenes, tareas, planes de accion, informes, mensajes, notas de estudio, ideas y mas.",
    versatileLabel: "Versatil por diseno",
    versatileTitle: "Funciona con cualquier audio",
    versatileSubtitle:
      "Sythio se adapta al contenido. Ya sea un standup de cinco minutos o un taller de dos horas, los puntos clave capturan lo que mas importa de la grabacion.",
    use1Title: "Reuniones",
    use1Desc:
      "Sincronizaciones de equipo, revisiones de proyecto, uno a uno — las decisiones y resultados mas importantes extraidos al instante.",
    use2Title: "Llamadas y entrevistas",
    use2Desc:
      "Conversaciones con clientes, llamadas de ventas y entrevistas destiladas en los puntos que impulsan el seguimiento.",
    use3Title: "Clases",
    use3Desc:
      "Contenido educativo de larga duracion reducido a los conceptos clave y aprendizajes que vale la pena recordar.",
    use4Title: "Notas de voz",
    use4Desc:
      "Ideas habladas rapidas y recordatorios convertidos en puntos claros y priorizados listos para actuar.",
    outcome: "Resultado",
    rel1Name: "Puntos Clave",
    rel2Name: "Audio a Resumen",
    rel3Name: "Audio a Texto Limpio",
    rel4Name: "Reuniones",
    ctaTitle: "Deja de adivinar que importo. Obtiene los puntos clave.",
    ctaSubtitle:
      "Cada grabacion se convierte en una lista clara de puntos clave — en segundos, no en horas.",
  },
  fr: {
    label: "Audio en Points cles",
    title: "Extrayez les points cles de tout audio",
    subtitle:
      "Enregistrez une reunion, telechargez un appel ou capturez une note vocale. Sythio identifie les points les plus importants et fournit une liste concise et facile a parcourir — l'essentiel de la conversation sans le bruit.",
    howTitle: "Trois etapes pour les points cles",
    howSubtitle:
      "Plus besoin de parcourir de longues transcriptions. Plus besoin de deviner ce qui comptait le plus. Sythio fait remonter l'important pour que vous puissiez agir immediatement.",
    step1Title: "Enregistrez ou telechargez",
    step1Desc:
      "Capturez l'audio directement dans Sythio ou telechargez un fichier existant. Reunions, appels, cours, notes vocales — tout format fonctionne.",
    step2Title: "Sythio identifie ce qui compte",
    step2Desc:
      "Le contenu est analyse pour les decisions, insights, declarations importantes et details critiques. Le contexte est utilise pour classer la signification.",
    step3Title: "Obtenez vos points cles",
    step3Desc:
      "Une liste propre et priorisee de points cles est prete en quelques secondes. Chaque point est clair, autonome et capture le sens essentiel.",
    whatLabel: "Ce que vous obtenez",
    whatTitle: "Ce qu'incluent les points cles Sythio",
    whatSubtitle:
      "Pas chaque phrase etiquetee comme importante. Un ensemble curate des points les plus significatifs — classes par pertinence, regroupes par sujet et rediges pour la clarte.",
    feat1Title: "Decisions critiques",
    feat1Desc:
      "Chaque decision cle prise lors de la conversation est presentee comme un point autonome — clair, specifique et actionnable.",
    feat2Title: "Insights importants",
    feat2Desc:
      "Les observations significatives, donnees et conclusions sont mises en evidence pour que les idees les plus precieuses ressortent.",
    feat3Title: "Classement par priorite",
    feat3Desc:
      "Les points sont ordonnes par signification, donc l'information la plus critique apparait en premier — parfait pour un scan rapide.",
    feat4Title: "Concis et scannable",
    feat4Desc:
      "Chaque point cle est redige pour etre autonome et immediatement comprehensible, meme sans le contexte complet.",
    moreLabel: "Un enregistrement, plusieurs resultats",
    moreTitle: "Pas que des points cles",
    moreSubtitle:
      "Les points cles vous donnent les faits saillants. Mais le meme enregistrement peut aussi produire des resumes complets, listes de taches, plans d'action et plus — le tout a partir d'un seul envoi.",
    more1Title: "Resumes",
    more1Desc:
      "Une vue d'ensemble claire de toute la conversation — decisions, sujets et conclusions.",
    more2Title: "Listes de taches",
    more2Desc:
      "Extrayez chaque engagement et element d'action, avec les responsables quand les locuteurs sont detectes.",
    more3Title: "Notes d'etude",
    more3Desc:
      "Notes organisees avec concepts cles, definitions et exemples — structurees pour l'apprentissage.",
    more4Title: "Les 9 formats",
    more4Desc:
      "Resumes, taches, plans d'action, rapports, messages, notes d'etude, idees et plus.",
    versatileLabel: "Polyvalent par conception",
    versatileTitle: "Fonctionne avec tout audio",
    versatileSubtitle:
      "Sythio s'adapte au contenu. Qu'il s'agisse d'un standup de cinq minutes ou d'un atelier de deux heures, les points cles capturent ce qui compte le plus de l'enregistrement.",
    use1Title: "Reunions",
    use1Desc:
      "Synchronisations d'equipe, revues de projet, tete-a-tete — les decisions et resultats les plus importants extraits instantanement.",
    use2Title: "Appels et entretiens",
    use2Desc:
      "Conversations clients, appels commerciaux et entretiens distilles en points qui guident le suivi.",
    use3Title: "Cours",
    use3Desc:
      "Contenu educatif long reduit aux concepts cles et enseignements a retenir.",
    use4Title: "Notes vocales",
    use4Desc:
      "Idees parlees rapides et rappels transformes en points clairs et priorises prets a etre utilises.",
    outcome: "Resultat",
    rel1Name: "Points cles",
    rel2Name: "Audio en Resume",
    rel3Name: "Audio en Texte nettoye",
    rel4Name: "Reunions",
    ctaTitle: "Arretez de deviner ce qui comptait. Obtenez les points cles.",
    ctaSubtitle:
      "Chaque enregistrement devient une liste claire de points cles — en secondes, pas en heures.",
  },
  pt: {
    label: "Audio para Pontos-chave",
    title: "Extraia os pontos-chave de qualquer audio",
    subtitle:
      "Grave uma reuniao, envie uma chamada ou capture uma nota de voz. Sythio identifica os pontos mais importantes e entrega uma lista concisa e facil de escanear — a essencia da conversa sem o ruido.",
    howTitle: "Tres passos para os pontos-chave",
    howSubtitle:
      "Sem percorrer transcricoes longas. Sem adivinhar o que mais importou. Sythio destaca o que e importante para que voce possa agir imediatamente.",
    step1Title: "Grave ou envie",
    step1Desc:
      "Capture audio diretamente no Sythio ou envie um arquivo existente. Reunioes, chamadas, aulas, notas de voz — qualquer formato funciona.",
    step2Title: "Sythio identifica o que importa",
    step2Desc:
      "O conteudo e analisado para decisoes, insights, declaracoes importantes e detalhes criticos. O contexto e usado para classificar a importancia.",
    step3Title: "Receba seus pontos-chave",
    step3Desc:
      "Uma lista limpa e priorizada de pontos-chave esta pronta em segundos. Cada ponto e claro, independente e captura o significado essencial.",
    whatLabel: "O que voce recebe",
    whatTitle: "O que os pontos-chave do Sythio incluem",
    whatSubtitle:
      "Nao cada frase rotulada como importante. Um conjunto curado dos pontos mais significativos — classificados por relevancia, agrupados por tema e escritos com clareza.",
    feat1Title: "Decisoes criticas",
    feat1Desc:
      "Cada decisao-chave tomada durante a conversa e apresentada como um ponto independente — claro, especifico e acionavel.",
    feat2Title: "Insights importantes",
    feat2Desc:
      "Observacoes significativas, dados e conclusoes sao destacados para que as ideias mais valiosas se destaquem.",
    feat3Title: "Classificacao por prioridade",
    feat3Desc:
      "Os pontos sao ordenados por importancia, assim a informacao mais critica aparece primeiro — perfeito para escaneamento rapido.",
    feat4Title: "Conciso e escaneavel",
    feat4Desc:
      "Cada ponto-chave e escrito para ser independente e imediatamente compreensivel, mesmo sem o contexto completo.",
    moreLabel: "Uma gravacao, muitos resultados",
    moreTitle: "Nao apenas pontos-chave",
    moreSubtitle:
      "Os pontos-chave dao os destaques. Mas a mesma gravacao tambem pode produzir resumos completos, listas de tarefas, planos de acao e mais — tudo a partir de um unico envio.",
    more1Title: "Resumos",
    more1Desc:
      "Uma visao clara de toda a conversa — decisoes, temas e conclusoes.",
    more2Title: "Listas de tarefas",
    more2Desc:
      "Extraia cada compromisso e item de acao, com responsaveis quando falantes sao detectados.",
    more3Title: "Notas de estudo",
    more3Desc:
      "Notas organizadas com conceitos-chave, definicoes e exemplos — estruturadas para aprendizado.",
    more4Title: "Todos os 9 formatos",
    more4Desc:
      "Resumos, tarefas, planos de acao, relatorios, mensagens, notas de estudo, ideias e mais.",
    versatileLabel: "Versatil por design",
    versatileTitle: "Funciona com qualquer audio",
    versatileSubtitle:
      "Sythio se adapta ao conteudo. Seja um standup de cinco minutos ou um workshop de duas horas, os pontos-chave capturam o que mais importa da gravacao.",
    use1Title: "Reunioes",
    use1Desc:
      "Sincronizacoes de equipe, revisoes de projeto, individuais — as decisoes e resultados mais importantes extraidos instantaneamente.",
    use2Title: "Chamadas e entrevistas",
    use2Desc:
      "Conversas com clientes, chamadas de vendas e entrevistas destiladas nos pontos que impulsionam o acompanhamento.",
    use3Title: "Aulas",
    use3Desc:
      "Conteudo educacional longo reduzido aos conceitos-chave e aprendizados que valem a pena lembrar.",
    use4Title: "Notas de voz",
    use4Desc:
      "Ideias faladas rapidas e lembretes transformados em pontos claros e priorizados prontos para agir.",
    outcome: "Resultado",
    rel1Name: "Pontos-chave",
    rel2Name: "Audio para Resumo",
    rel3Name: "Audio para Texto Limpo",
    rel4Name: "Reunioes",
    ctaTitle: "Pare de adivinhar o que importou. Obtenha os pontos-chave.",
    ctaSubtitle:
      "Cada gravacao se torna uma lista clara de pontos-chave — em segundos, nao em horas.",
  },
  it: {
    label: "Audio in Punti chiave",
    title: "Estrai i punti chiave da qualsiasi audio",
    subtitle:
      "Registra una riunione, carica una chiamata o cattura una nota vocale. Sythio identifica i punti piu importanti e fornisce una lista concisa e consultabile — l'essenza della conversazione senza il rumore.",
    howTitle: "Tre passaggi per i punti chiave",
    howSubtitle:
      "Niente scorrimento di lunghe trascrizioni. Niente ipotesi su cosa contava di piu. Sythio fa emergere cio che e importante cosi puoi agire immediatamente.",
    step1Title: "Registra o carica",
    step1Desc:
      "Cattura l'audio direttamente in Sythio o carica un file esistente. Riunioni, chiamate, lezioni, note vocali — qualsiasi formato funziona.",
    step2Title: "Sythio identifica cio che conta",
    step2Desc:
      "Il contenuto viene analizzato per decisioni, insight, dichiarazioni importanti e dettagli critici. Il contesto viene usato per classificare la rilevanza.",
    step3Title: "Ottieni i tuoi punti chiave",
    step3Desc:
      "Una lista pulita e prioritizzata di punti chiave e pronta in pochi secondi. Ogni punto e chiaro, autonomo e cattura il significato essenziale.",
    whatLabel: "Cosa ottieni",
    whatTitle: "Cosa includono i punti chiave Sythio",
    whatSubtitle:
      "Non ogni frase etichettata come importante. Un insieme curato dei punti piu significativi — classificati per rilevanza, raggruppati per argomento e scritti per chiarezza.",
    feat1Title: "Decisioni critiche",
    feat1Desc:
      "Ogni decisione chiave presa durante la conversazione viene presentata come un punto autonomo — chiaro, specifico e azionabile.",
    feat2Title: "Insight importanti",
    feat2Desc:
      "Osservazioni significative, dati e conclusioni vengono evidenziati cosi le idee piu preziose risaltano.",
    feat3Title: "Classificazione per priorita",
    feat3Desc:
      "I punti sono ordinati per importanza, cosi l'informazione piu critica appare per prima — perfetto per una scansione rapida.",
    feat4Title: "Conciso e scansionabile",
    feat4Desc:
      "Ogni punto chiave e scritto per essere autonomo e immediatamente comprensibile, anche senza il contesto completo.",
    moreLabel: "Una registrazione, molti risultati",
    moreTitle: "Non solo punti chiave",
    moreSubtitle:
      "I punti chiave ti danno i highlights. Ma la stessa registrazione puo anche produrre riassunti completi, liste di attivita, piani d'azione e altro — il tutto da un singolo caricamento.",
    more1Title: "Riassunti",
    more1Desc:
      "Una panoramica chiara dell'intera conversazione — decisioni, argomenti e conclusioni.",
    more2Title: "Liste di attivita",
    more2Desc:
      "Estrai ogni impegno e elemento d'azione, con responsabili quando i parlanti vengono rilevati.",
    more3Title: "Note di studio",
    more3Desc:
      "Note organizzate con concetti chiave, definizioni ed esempi — strutturate per l'apprendimento.",
    more4Title: "Tutti i 9 formati",
    more4Desc:
      "Riassunti, attivita, piani d'azione, report, messaggi, note di studio, idee e altro.",
    versatileLabel: "Versatile per design",
    versatileTitle: "Funziona con qualsiasi audio",
    versatileSubtitle:
      "Sythio si adatta al contenuto. Che si tratti di uno standup di cinque minuti o di un workshop di due ore, i punti chiave catturano cio che conta di piu dalla registrazione.",
    use1Title: "Riunioni",
    use1Desc:
      "Sincronizzazioni di team, revisioni di progetto, incontri individuali — le decisioni e i risultati piu importanti estratti istantaneamente.",
    use2Title: "Chiamate e interviste",
    use2Desc:
      "Conversazioni con clienti, chiamate commerciali e interviste distillate nei punti che guidano il follow-up.",
    use3Title: "Lezioni",
    use3Desc:
      "Contenuto educativo lungo ridotto ai concetti chiave e insegnamenti che vale la pena ricordare.",
    use4Title: "Note vocali",
    use4Desc:
      "Idee parlate rapide e promemoria trasformati in punti chiari e prioritizzati pronti per l'azione.",
    outcome: "Risultato",
    rel1Name: "Punti chiave",
    rel2Name: "Audio in Riassunto",
    rel3Name: "Audio in Testo Pulito",
    rel4Name: "Riunioni",
    ctaTitle: "Smetti di indovinare cosa contava. Ottieni i punti chiave.",
    ctaSubtitle:
      "Ogni registrazione diventa una lista chiara di punti chiave — in secondi, non in ore.",
  },
};

export default function AudioToKeyPointsPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

  return (
    <PageReveal>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-animated-bg overflow-hidden">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.label}</p>
            <TextReveal><h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">{c.title}</h1></TextReveal>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">{c.subtitle}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <MagneticHover><Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{s("common.startFree")}</Link></MagneticHover>
              <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{s("common.seeHowItWorks")}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{s("common.howItWorks")}</p>
          <TextReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.howTitle}</h2></TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">{c.howSubtitle}</p>
          <GsapStagger stagger={0.08}><div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: c.step1Title, description: c.step1Desc },
              { step: "02", title: c.step2Title, description: c.step2Desc },
              { step: "03", title: c.step3Title, description: c.step3Desc },
            ].map((item) => (
              <ScrollScale key={item.step}><div className="group p-8 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                <span className="text-xs font-bold tracking-wider text-muted-light">{item.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
              </div></ScrollScale>
            ))}
          </div></GsapStagger>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.whatLabel}</p>
          <TextReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.whatTitle}</h2></TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">{c.whatSubtitle}</p>
          <GsapStagger stagger={0.08}><div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: c.feat1Title, description: c.feat1Desc },
              { title: c.feat2Title, description: c.feat2Desc },
              { title: c.feat3Title, description: c.feat3Desc },
              { title: c.feat4Title, description: c.feat4Desc },
            ].map((item) => (
              <ScrollScale key={item.title}><div className="p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div></ScrollScale>
            ))}
          </div></GsapStagger>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.moreLabel}</p>
            <TextReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.moreTitle}</h2></TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">{c.moreSubtitle}</p>
          </div>
          <GsapStagger stagger={0.08}><div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: c.more1Title, description: c.more1Desc, href: "/audio-to-summary" },
              { title: c.more2Title, description: c.more2Desc, href: "/audio-to-tasks" },
              { title: c.more3Title, description: c.more3Desc, href: "/audio-to-study-notes" },
              { title: c.more4Title, description: c.more4Desc, href: "/features" },
            ].map((item) => (
              <ScrollScale key={item.title}><Link href={item.href} className="group block p-7 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                <h3 className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">{s("common.learnMore")} &rarr;</span>
              </Link></ScrollScale>
            ))}
          </div></GsapStagger>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.versatileLabel}</p>
          <TextReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.versatileTitle}</h2></TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">{c.versatileSubtitle}</p>
          <GsapStagger stagger={0.08}><div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: c.use1Title, description: c.use1Desc },
              { title: c.use2Title, description: c.use2Desc },
              { title: c.use3Title, description: c.use3Desc },
              { title: c.use4Title, description: c.use4Desc },
            ].map((item) => (
              <ScrollScale key={item.title}><div className="p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div></ScrollScale>
            ))}
          </div></GsapStagger>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal><h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">{s("common.related")}</h2></TextReveal>
          <GsapStagger stagger={0.08}><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollScale><Link href="/features/key-points" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel1Name}</p></Link></ScrollScale>
            <ScrollScale><Link href="/audio-to-summary" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel2Name}</p></Link></ScrollScale>
            <ScrollScale><Link href="/audio-to-clean-text" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel3Name}</p></Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/meetings" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel4Name}</p></Link></ScrollScale>
          </div></GsapStagger>
        </div>
      </section>

      <section className="relative py-32 md:py-44 bg-background animated-gradient-bg overflow-hidden">
        <div className="hero-orb hero-orb-2" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <TextReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.ctaTitle}</h2></TextReveal>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">{c.ctaSubtitle}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticHover><Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{s("common.startFree")}</Link></MagneticHover>
            <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{s("common.exploreProduct")}</Link>
          </div>
          <p className="mt-6 text-sm text-muted">{s("common.freePlan")}</p>
        </div>
      </section>
    </PageReveal>
  );
}
