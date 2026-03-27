"use client";

import Link from "next/link";
import { useLanguage } from "../components/i18n/language-context";
import type { Locale } from "../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Audio to Study Notes",
    title: "Convert Audio into Study Notes",
    subtitle:
      "Record a lecture, upload a workshop, or capture a tutorial. Sythio listens, identifies key concepts, and delivers organized study notes — structured for learning and review.",
    howTitle: "Three steps to study-ready notes",
    howSubtitle:
      "No frantic scribbling during class. No re-listening to two-hour recordings. Sythio handles note-taking so you can focus on understanding.",
    step1Title: "Record or upload",
    step1Desc:
      "Capture a lecture directly inside Sythio or upload an existing recording. Lectures, seminars, tutorials, podcasts — any format works.",
    step2Title: "Sythio identifies key concepts",
    step2Desc:
      "The content is analyzed for topic structure, key terms, definitions, examples, and important explanations — the building blocks of effective notes.",
    step3Title: "Get your study notes",
    step3Desc:
      "Organized, structured notes are ready in seconds. Key concepts highlighted, topics grouped logically, and everything formatted for easy review.",
    whatLabel: "What You Get",
    whatTitle: "What Sythio Study Notes Include",
    whatSubtitle:
      "Not a messy transcript with timestamps. Genuine study notes — organized by topic, focused on what matters, and structured for retention.",
    feat1Title: "Key concepts",
    feat1Desc:
      "Central ideas and theories are identified and clearly explained, giving you a solid foundation for review.",
    feat2Title: "Definitions and terms",
    feat2Desc:
      "Important vocabulary and definitions mentioned during the lecture are extracted and organized for quick reference.",
    feat3Title: "Examples and illustrations",
    feat3Desc:
      "Real examples used by the instructor are captured and connected to the concepts they support.",
    feat4Title: "Topic structure",
    feat4Desc:
      "Content is grouped by subject and subtopic, creating a logical flow that mirrors the original lecture structure.",
    moreLabel: "One Recording, Many Outputs",
    moreTitle: "Not Just Study Notes",
    moreSubtitle:
      "Study notes are one way to process a lecture. The same recording can also produce summaries, key points, clean text, and more — all from a single upload.",
    more1Title: "Summaries",
    more1Desc:
      "A clear overview of the full lecture — main themes, conclusions, and takeaways.",
    more2Title: "Key points",
    more2Desc:
      "The most important points distilled into a concise, scannable list.",
    more3Title: "Clean text",
    more3Desc:
      "Polished, readable text with filler words removed and grammar corrected.",
    more4Title: "All 9 formats",
    more4Desc:
      "Summaries, tasks, action plans, reports, messages, study notes, ideas, and more.",
    versatileLabel: "Versatile by Design",
    versatileTitle: "Works with Any Educational Audio",
    versatileSubtitle:
      "Sythio adapts to the content. Whether it is a 15-minute tutorial or a three-hour seminar, the study notes reflect the depth and structure of the original recording.",
    use1Title: "University lectures",
    use1Desc:
      "Full-length lectures distilled into comprehensive, organized notes you can study from directly.",
    use2Title: "Online courses",
    use2Desc:
      "Video lessons and webinars turned into structured notes that complement your learning materials.",
    use3Title: "Workshops and seminars",
    use3Desc:
      "Interactive sessions captured with key takeaways, exercises, and concepts clearly organized.",
    use4Title: "Podcasts and talks",
    use4Desc:
      "Educational podcasts and conference talks converted into notes that capture the essential insights.",
    outcome: "Outcome",
    rel1Name: "Study Notes",
    rel2Name: "Audio to Summary",
    rel3Name: "Audio to Key Points",
    rel4Name: "Lectures",
    ctaTitle: "Stop scribbling. Start studying smarter.",
    ctaSubtitle:
      "Every lecture becomes organized study notes — in seconds, not hours.",
  },
  es: {
    label: "Audio a Notas de Estudio",
    title: "Convierte audio en notas de estudio",
    subtitle:
      "Graba una clase, sube un taller o captura un tutorial. Sythio escucha, identifica conceptos clave y entrega notas de estudio organizadas — estructuradas para el aprendizaje y la revision.",
    howTitle: "Tres pasos para notas listas para estudiar",
    howSubtitle:
      "Sin garabatear freneticamente durante la clase. Sin volver a escuchar grabaciones de dos horas. Sythio se encarga de tomar notas para que puedas enfocarte en entender.",
    step1Title: "Graba o sube",
    step1Desc:
      "Captura una clase directamente en Sythio o sube una grabacion existente. Clases, seminarios, tutoriales, podcasts — cualquier formato funciona.",
    step2Title: "Sythio identifica conceptos clave",
    step2Desc:
      "El contenido se analiza para estructura tematica, terminos clave, definiciones, ejemplos y explicaciones importantes — los bloques de construccion de notas efectivas.",
    step3Title: "Obtiene tus notas de estudio",
    step3Desc:
      "Notas organizadas y estructuradas estan listas en segundos. Conceptos clave resaltados, temas agrupados logicamente y todo formateado para facil revision.",
    whatLabel: "Lo que obtienes",
    whatTitle: "Lo que incluyen las notas de estudio de Sythio",
    whatSubtitle:
      "No es una transcripcion desordenada con marcas de tiempo. Verdaderas notas de estudio — organizadas por tema, enfocadas en lo que importa y estructuradas para la retencion.",
    feat1Title: "Conceptos clave",
    feat1Desc:
      "Las ideas centrales y teorias se identifican y explican claramente, dandote una base solida para la revision.",
    feat2Title: "Definiciones y terminos",
    feat2Desc:
      "El vocabulario importante y las definiciones mencionadas durante la clase se extraen y organizan para referencia rapida.",
    feat3Title: "Ejemplos e ilustraciones",
    feat3Desc:
      "Los ejemplos reales usados por el instructor se capturan y conectan con los conceptos que apoyan.",
    feat4Title: "Estructura tematica",
    feat4Desc:
      "El contenido se agrupa por tema y subtema, creando un flujo logico que refleja la estructura original de la clase.",
    moreLabel: "Una grabacion, muchos resultados",
    moreTitle: "No solo notas de estudio",
    moreSubtitle:
      "Las notas de estudio son una forma de procesar una clase. La misma grabacion tambien puede producir resumenes, puntos clave, texto limpio y mas — todo desde una sola carga.",
    more1Title: "Resumenes",
    more1Desc:
      "Una vision clara de toda la clase — temas principales, conclusiones y aprendizajes.",
    more2Title: "Puntos clave",
    more2Desc:
      "Los puntos mas importantes destilados en una lista concisa y facil de escanear.",
    more3Title: "Texto limpio",
    more3Desc:
      "Texto pulido y legible con muletillas eliminadas y gramatica corregida.",
    more4Title: "Los 9 formatos",
    more4Desc:
      "Resumenes, tareas, planes de accion, informes, mensajes, notas de estudio, ideas y mas.",
    versatileLabel: "Versatil por diseno",
    versatileTitle: "Funciona con cualquier audio educativo",
    versatileSubtitle:
      "Sythio se adapta al contenido. Ya sea un tutorial de 15 minutos o un seminario de tres horas, las notas de estudio reflejan la profundidad y estructura de la grabacion original.",
    use1Title: "Clases universitarias",
    use1Desc:
      "Clases completas destiladas en notas completas y organizadas de las que puedes estudiar directamente.",
    use2Title: "Cursos en linea",
    use2Desc:
      "Lecciones en video y webinars convertidos en notas estructuradas que complementan tus materiales de aprendizaje.",
    use3Title: "Talleres y seminarios",
    use3Desc:
      "Sesiones interactivas capturadas con conclusiones clave, ejercicios y conceptos claramente organizados.",
    use4Title: "Podcasts y charlas",
    use4Desc:
      "Podcasts educativos y charlas de conferencia convertidos en notas que capturan los insights esenciales.",
    outcome: "Resultado",
    rel1Name: "Notas de Estudio",
    rel2Name: "Audio a Resumen",
    rel3Name: "Audio a Puntos Clave",
    rel4Name: "Clases",
    ctaTitle: "Deja de garabatear. Empieza a estudiar mas inteligentemente.",
    ctaSubtitle:
      "Cada clase se convierte en notas de estudio organizadas — en segundos, no en horas.",
  },
  fr: {
    label: "Audio en Notes d'etude",
    title: "Convertissez l'audio en notes d'etude",
    subtitle:
      "Enregistrez un cours, telechargez un atelier ou capturez un tutoriel. Sythio ecoute, identifie les concepts cles et fournit des notes d'etude organisees — structurees pour l'apprentissage et la revision.",
    howTitle: "Trois etapes pour des notes pretes a etudier",
    howSubtitle:
      "Plus de gribouillage frenetique pendant le cours. Plus de reecoute d'enregistrements de deux heures. Sythio s'occupe de la prise de notes pour que vous puissiez vous concentrer sur la comprehension.",
    step1Title: "Enregistrez ou telechargez",
    step1Desc:
      "Capturez un cours directement dans Sythio ou telechargez un enregistrement existant. Cours, seminaires, tutoriels, podcasts — tout format fonctionne.",
    step2Title: "Sythio identifie les concepts cles",
    step2Desc:
      "Le contenu est analyse pour la structure thematique, les termes cles, definitions, exemples et explications importantes — les elements constitutifs de notes efficaces.",
    step3Title: "Obtenez vos notes d'etude",
    step3Desc:
      "Des notes organisees et structurees sont pretes en quelques secondes. Concepts cles mis en evidence, sujets regroupes logiquement et tout formate pour une revision facile.",
    whatLabel: "Ce que vous obtenez",
    whatTitle: "Ce qu'incluent les notes d'etude Sythio",
    whatSubtitle:
      "Pas une transcription desordonnee avec des horodatages. De veritables notes d'etude — organisees par sujet, concentrees sur l'essentiel et structurees pour la retention.",
    feat1Title: "Concepts cles",
    feat1Desc:
      "Les idees centrales et theories sont identifiees et clairement expliquees, vous donnant une base solide pour la revision.",
    feat2Title: "Definitions et termes",
    feat2Desc:
      "Le vocabulaire important et les definitions mentionnes pendant le cours sont extraits et organises pour reference rapide.",
    feat3Title: "Exemples et illustrations",
    feat3Desc:
      "Les exemples reels utilises par l'instructeur sont captures et connectes aux concepts qu'ils soutiennent.",
    feat4Title: "Structure thematique",
    feat4Desc:
      "Le contenu est regroupe par sujet et sous-sujet, creant un flux logique qui reflete la structure originale du cours.",
    moreLabel: "Un enregistrement, plusieurs resultats",
    moreTitle: "Pas que des notes d'etude",
    moreSubtitle:
      "Les notes d'etude sont une facon de traiter un cours. Le meme enregistrement peut aussi produire des resumes, points cles, texte nettoye et plus — le tout a partir d'un seul envoi.",
    more1Title: "Resumes",
    more1Desc:
      "Une vue d'ensemble claire de tout le cours — themes principaux, conclusions et enseignements.",
    more2Title: "Points cles",
    more2Desc:
      "Les points les plus importants distilles en une liste concise et facile a parcourir.",
    more3Title: "Texte nettoye",
    more3Desc:
      "Texte poli et lisible avec les mots de remplissage supprimes et la grammaire corrigee.",
    more4Title: "Les 9 formats",
    more4Desc:
      "Resumes, taches, plans d'action, rapports, messages, notes d'etude, idees et plus.",
    versatileLabel: "Polyvalent par conception",
    versatileTitle: "Fonctionne avec tout audio educatif",
    versatileSubtitle:
      "Sythio s'adapte au contenu. Qu'il s'agisse d'un tutoriel de 15 minutes ou d'un seminaire de trois heures, les notes d'etude refletent la profondeur et la structure de l'enregistrement original.",
    use1Title: "Cours universitaires",
    use1Desc:
      "Cours complets distilles en notes completes et organisees a partir desquelles vous pouvez etudier directement.",
    use2Title: "Cours en ligne",
    use2Desc:
      "Lecons video et webinaires transformes en notes structurees qui completent vos materiaux d'apprentissage.",
    use3Title: "Ateliers et seminaires",
    use3Desc:
      "Sessions interactives capturees avec les enseignements cles, exercices et concepts clairement organises.",
    use4Title: "Podcasts et conferences",
    use4Desc:
      "Podcasts educatifs et conferences convertis en notes qui capturent les insights essentiels.",
    outcome: "Resultat",
    rel1Name: "Notes d'etude",
    rel2Name: "Audio en Resume",
    rel3Name: "Audio en Points cles",
    rel4Name: "Cours",
    ctaTitle: "Arretez de gribouiller. Etudiez plus intelligemment.",
    ctaSubtitle:
      "Chaque cours devient des notes d'etude organisees — en secondes, pas en heures.",
  },
  pt: {
    label: "Audio para Notas de Estudo",
    title: "Converta audio em notas de estudo",
    subtitle:
      "Grave uma aula, envie um workshop ou capture um tutorial. Sythio ouve, identifica conceitos-chave e entrega notas de estudo organizadas — estruturadas para aprendizado e revisao.",
    howTitle: "Tres passos para notas prontas para estudar",
    howSubtitle:
      "Sem rabiscar freneticamente durante a aula. Sem reouvir gravacoes de duas horas. Sythio cuida das anotacoes para que voce possa focar em entender.",
    step1Title: "Grave ou envie",
    step1Desc:
      "Capture uma aula diretamente no Sythio ou envie uma gravacao existente. Aulas, seminarios, tutoriais, podcasts — qualquer formato funciona.",
    step2Title: "Sythio identifica conceitos-chave",
    step2Desc:
      "O conteudo e analisado para estrutura tematica, termos-chave, definicoes, exemplos e explicacoes importantes — os blocos de construcao de notas eficazes.",
    step3Title: "Receba suas notas de estudo",
    step3Desc:
      "Notas organizadas e estruturadas estao prontas em segundos. Conceitos-chave destacados, temas agrupados logicamente e tudo formatado para revisao facil.",
    whatLabel: "O que voce recebe",
    whatTitle: "O que as notas de estudo do Sythio incluem",
    whatSubtitle:
      "Nao e uma transcricao bagunada com marcas de tempo. Verdadeiras notas de estudo — organizadas por tema, focadas no que importa e estruturadas para retencao.",
    feat1Title: "Conceitos-chave",
    feat1Desc:
      "Ideias centrais e teorias sao identificadas e claramente explicadas, dando uma base solida para revisao.",
    feat2Title: "Definicoes e termos",
    feat2Desc:
      "Vocabulario importante e definicoes mencionados durante a aula sao extraidos e organizados para referencia rapida.",
    feat3Title: "Exemplos e ilustracoes",
    feat3Desc:
      "Exemplos reais usados pelo instrutor sao capturados e conectados aos conceitos que apoiam.",
    feat4Title: "Estrutura tematica",
    feat4Desc:
      "O conteudo e agrupado por assunto e subtema, criando um fluxo logico que espelha a estrutura original da aula.",
    moreLabel: "Uma gravacao, muitos resultados",
    moreTitle: "Nao apenas notas de estudo",
    moreSubtitle:
      "Notas de estudo sao uma forma de processar uma aula. A mesma gravacao tambem pode produzir resumos, pontos-chave, texto limpo e mais — tudo a partir de um unico envio.",
    more1Title: "Resumos",
    more1Desc:
      "Uma visao clara de toda a aula — temas principais, conclusoes e aprendizados.",
    more2Title: "Pontos-chave",
    more2Desc:
      "Os pontos mais importantes destilados em uma lista concisa e facil de escanear.",
    more3Title: "Texto limpo",
    more3Desc:
      "Texto polido e legivel com palavras de preenchimento removidas e gramatica corrigida.",
    more4Title: "Todos os 9 formatos",
    more4Desc:
      "Resumos, tarefas, planos de acao, relatorios, mensagens, notas de estudo, ideias e mais.",
    versatileLabel: "Versatil por design",
    versatileTitle: "Funciona com qualquer audio educacional",
    versatileSubtitle:
      "Sythio se adapta ao conteudo. Seja um tutorial de 15 minutos ou um seminario de tres horas, as notas de estudo refletem a profundidade e estrutura da gravacao original.",
    use1Title: "Aulas universitarias",
    use1Desc:
      "Aulas completas destiladas em notas abrangentes e organizadas das quais voce pode estudar diretamente.",
    use2Title: "Cursos online",
    use2Desc:
      "Aulas em video e webinars transformados em notas estruturadas que complementam seus materiais de aprendizado.",
    use3Title: "Workshops e seminarios",
    use3Desc:
      "Sessoes interativas capturadas com conclusoes-chave, exercicios e conceitos claramente organizados.",
    use4Title: "Podcasts e palestras",
    use4Desc:
      "Podcasts educacionais e palestras de conferencia convertidos em notas que capturam os insights essenciais.",
    outcome: "Resultado",
    rel1Name: "Notas de Estudo",
    rel2Name: "Audio para Resumo",
    rel3Name: "Audio para Pontos-chave",
    rel4Name: "Aulas",
    ctaTitle: "Pare de rabiscar. Comece a estudar de forma mais inteligente.",
    ctaSubtitle:
      "Cada aula se torna notas de estudo organizadas — em segundos, nao em horas.",
  },
  it: {
    label: "Audio in Note di Studio",
    title: "Converti l'audio in note di studio",
    subtitle:
      "Registra una lezione, carica un workshop o cattura un tutorial. Sythio ascolta, identifica i concetti chiave e fornisce note di studio organizzate — strutturate per l'apprendimento e il ripasso.",
    howTitle: "Tre passaggi per note pronte allo studio",
    howSubtitle:
      "Niente appunti frenetici durante la lezione. Niente riascolto di registrazioni di due ore. Sythio si occupa degli appunti cosi puoi concentrarti sulla comprensione.",
    step1Title: "Registra o carica",
    step1Desc:
      "Cattura una lezione direttamente in Sythio o carica una registrazione esistente. Lezioni, seminari, tutorial, podcast — qualsiasi formato funziona.",
    step2Title: "Sythio identifica i concetti chiave",
    step2Desc:
      "Il contenuto viene analizzato per struttura tematica, termini chiave, definizioni, esempi e spiegazioni importanti — i mattoni di note efficaci.",
    step3Title: "Ottieni le tue note di studio",
    step3Desc:
      "Note organizzate e strutturate sono pronte in pochi secondi. Concetti chiave evidenziati, argomenti raggruppati logicamente e tutto formattato per un ripasso facile.",
    whatLabel: "Cosa ottieni",
    whatTitle: "Cosa includono le note di studio Sythio",
    whatSubtitle:
      "Non una trascrizione disordinata con timestamp. Vere note di studio — organizzate per argomento, focalizzate su cio che conta e strutturate per la memorizzazione.",
    feat1Title: "Concetti chiave",
    feat1Desc:
      "Le idee centrali e le teorie vengono identificate e spiegate chiaramente, dandoti una base solida per il ripasso.",
    feat2Title: "Definizioni e termini",
    feat2Desc:
      "Il vocabolario importante e le definizioni menzionate durante la lezione vengono estratti e organizzati per un riferimento rapido.",
    feat3Title: "Esempi e illustrazioni",
    feat3Desc:
      "Gli esempi reali usati dall'istruttore vengono catturati e collegati ai concetti che supportano.",
    feat4Title: "Struttura tematica",
    feat4Desc:
      "Il contenuto e raggruppato per argomento e sottoargomento, creando un flusso logico che rispecchia la struttura originale della lezione.",
    moreLabel: "Una registrazione, molti risultati",
    moreTitle: "Non solo note di studio",
    moreSubtitle:
      "Le note di studio sono un modo per elaborare una lezione. La stessa registrazione puo anche produrre riassunti, punti chiave, testo pulito e altro — il tutto da un singolo caricamento.",
    more1Title: "Riassunti",
    more1Desc:
      "Una panoramica chiara dell'intera lezione — temi principali, conclusioni e insegnamenti.",
    more2Title: "Punti chiave",
    more2Desc:
      "I punti piu importanti distillati in una lista concisa e facilmente consultabile.",
    more3Title: "Testo pulito",
    more3Desc:
      "Testo raffinato e leggibile con parole riempitive rimosse e grammatica corretta.",
    more4Title: "Tutti i 9 formati",
    more4Desc:
      "Riassunti, attivita, piani d'azione, report, messaggi, note di studio, idee e altro.",
    versatileLabel: "Versatile per design",
    versatileTitle: "Funziona con qualsiasi audio educativo",
    versatileSubtitle:
      "Sythio si adatta al contenuto. Che si tratti di un tutorial di 15 minuti o di un seminario di tre ore, le note di studio riflettono la profondita e la struttura della registrazione originale.",
    use1Title: "Lezioni universitarie",
    use1Desc:
      "Lezioni complete distillate in note esaurienti e organizzate da cui puoi studiare direttamente.",
    use2Title: "Corsi online",
    use2Desc:
      "Lezioni video e webinar trasformati in note strutturate che completano i tuoi materiali di apprendimento.",
    use3Title: "Workshop e seminari",
    use3Desc:
      "Sessioni interattive catturate con insegnamenti chiave, esercizi e concetti chiaramente organizzati.",
    use4Title: "Podcast e conferenze",
    use4Desc:
      "Podcast educativi e conferenze convertiti in note che catturano gli insight essenziali.",
    outcome: "Risultato",
    rel1Name: "Note di Studio",
    rel2Name: "Audio in Riassunto",
    rel3Name: "Audio in Punti chiave",
    rel4Name: "Lezioni",
    ctaTitle: "Smetti di scarabocchiare. Inizia a studiare in modo piu intelligente.",
    ctaSubtitle:
      "Ogni lezione diventa note di studio organizzate — in secondi, non in ore.",
  },
};

export default function AudioToStudyNotesPage() {
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
              { title: c.more2Title, description: c.more2Desc, href: "/audio-to-key-points" },
              { title: c.more3Title, description: c.more3Desc, href: "/audio-to-clean-text" },
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
            <ScrollScale><Link href="/features/study-notes" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel1Name}</p></Link></ScrollScale>
            <ScrollScale><Link href="/audio-to-summary" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel2Name}</p></Link></ScrollScale>
            <ScrollScale><Link href="/audio-to-key-points" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel3Name}</p></Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/lectures" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel4Name}</p></Link></ScrollScale>
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
