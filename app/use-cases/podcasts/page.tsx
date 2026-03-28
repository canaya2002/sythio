"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Use Cases",
    title: "AI Podcast Notes — Transcripts, Chapters & Key Takeaways",
    subtitle:
      "You listen to podcasts to learn, stay informed, and find inspiration. Sythio turns episode recordings into full transcripts, chapter summaries, key takeaways, and show notes — so the value of every episode is captured and searchable.",
    howTitle: "How It Works",
    howSubtitle:
      "Three steps from episode audio to structured, usable notes.",
    step1Title: "Upload the Episode",
    step1Desc:
      "Drop in any podcast audio file — MP3, WAV, M4A, or any other format. No length limits. Full episodes or short clips both work.",
    step2Title: "AI Processes the Audio",
    step2Desc:
      "Sythio transcribes the episode, detects speakers (host and guests), identifies topics, and breaks the conversation into logical sections.",
    step3Title: "Get Your Podcast Notes",
    step3Desc:
      "Receive a full transcript, chapter-by-chapter summary, key takeaways, quotable moments, and clean show notes — ready in seconds.",
    whatTitle: "What You Get from Every Episode",
    whatSubtitle:
      "One upload. Multiple outputs. Everything you need to capture, recall, and repurpose podcast content.",
    transcriptTitle: "Full Transcript",
    transcriptDesc:
      "Every word, accurately transcribed with speaker labels. Search for any topic, quote, or moment across the entire episode.",
    summaryTitle: "Chapter Summaries",
    summaryDesc:
      "The episode broken into logical chapters with a summary for each. Skim the structure or dive into specific sections.",
    keyPointsTitle: "Key Takeaways",
    keyPointsDesc:
      "The most important insights, frameworks, and ideas distilled into clear, scannable points. The essence of the episode in two minutes.",
    showNotesTitle: "Show Notes",
    showNotesDesc:
      "Clean, structured notes with topics covered, key quotes, and references. Perfect for publishing alongside the episode or for personal reference.",
    whoTitle: "Who It's For",
    whoSubtitle:
      "Whether you create podcasts, consume them, or repurpose them — Sythio gives you structured output from raw audio.",
    podcastersTitle: "Podcasters",
    podcastersDesc:
      "Generate show notes, episode summaries, and transcripts automatically. Spend time creating great content instead of writing descriptions after the fact.",
    listenersTitle: "Listeners",
    listenersDesc:
      "Never lose a great insight again. Upload episodes you loved and get searchable notes you can reference, highlight, and revisit anytime.",
    repurposersTitle: "Content Repurposers",
    repurposersDesc:
      "Turn long podcast episodes into blog posts, social media threads, newsletters, and quotes. Sythio gives you the raw material, already structured.",
    researchersTitle: "Researchers & Students",
    researchersDesc:
      "Extract insights from interview-style podcasts, expert panels, and educational series. Get the knowledge without replaying hours of audio.",
    relatedMeetings: "Meetings",
    relatedVoiceNotes: "Voice Notes",
    relatedSpeakerDetection: "Speaker Detection",
    relatedSummaries: "AI Summaries",
    ctaTitle: "Every Podcast Episode, Captured and Structured",
    ctaSubtitle:
      "Stop letting great insights disappear after the episode ends. Sythio turns podcast audio into notes you will actually use.",
  },
  es: {
    label: "Casos de uso",
    title: "Notas de podcast con IA — Transcripciones, capítulos y conclusiones clave",
    subtitle:
      "Escuchas podcasts para aprender, mantenerte informado y encontrar inspiración. Sythio convierte las grabaciones de episodios en transcripciones completas, resúmenes por capítulos, conclusiones clave y notas del programa — para que el valor de cada episodio quede capturado y sea buscable.",
    howTitle: "Cómo funciona",
    howSubtitle:
      "Tres pasos del audio del episodio a notas estructuradas y utilizables.",
    step1Title: "Sube el episodio",
    step1Desc:
      "Arrastra cualquier archivo de audio de podcast — MP3, WAV, M4A o cualquier otro formato. Sin límites de duración. Episodios completos o clips cortos, ambos funcionan.",
    step2Title: "La IA procesa el audio",
    step2Desc:
      "Sythio transcribe el episodio, detecta hablantes (presentador e invitados), identifica temas y divide la conversación en secciones lógicas.",
    step3Title: "Obtén tus notas del podcast",
    step3Desc:
      "Recibe una transcripción completa, resumen capítulo por capítulo, conclusiones clave, momentos citables y notas del programa limpias — listo en segundos.",
    whatTitle: "Lo que obtienes de cada episodio",
    whatSubtitle:
      "Una subida. Múltiples resultados. Todo lo que necesitas para capturar, recordar y reutilizar contenido de podcasts.",
    transcriptTitle: "Transcripción completa",
    transcriptDesc:
      "Cada palabra, transcrita con precisión y etiquetas de hablante. Busca cualquier tema, cita o momento en todo el episodio.",
    summaryTitle: "Resúmenes por capítulos",
    summaryDesc:
      "El episodio dividido en capítulos lógicos con un resumen de cada uno. Revisa la estructura o profundiza en secciones específicas.",
    keyPointsTitle: "Conclusiones clave",
    keyPointsDesc:
      "Las ideas, marcos y conceptos más importantes destilados en puntos claros y escaneables. La esencia del episodio en dos minutos.",
    showNotesTitle: "Notas del programa",
    showNotesDesc:
      "Notas limpias y estructuradas con temas tratados, citas clave y referencias. Perfectas para publicar junto al episodio o como referencia personal.",
    whoTitle: "Para quién es",
    whoSubtitle:
      "Ya sea que crees podcasts, los consumas o los reutilices — Sythio te da resultados estructurados a partir de audio en bruto.",
    podcastersTitle: "Podcasters",
    podcastersDesc:
      "Genera notas del programa, resúmenes de episodios y transcripciones automáticamente. Dedica tu tiempo a crear gran contenido en vez de escribir descripciones después.",
    listenersTitle: "Oyentes",
    listenersDesc:
      "Nunca pierdas una gran idea. Sube los episodios que te gustaron y obtén notas buscables que puedes consultar, resaltar y revisitar en cualquier momento.",
    repurposersTitle: "Reutilizadores de contenido",
    repurposersDesc:
      "Convierte episodios largos en publicaciones de blog, hilos de redes sociales, newsletters y citas. Sythio te da la materia prima, ya estructurada.",
    researchersTitle: "Investigadores y estudiantes",
    researchersDesc:
      "Extrae ideas de podcasts de entrevistas, paneles de expertos y series educativas. Obtén el conocimiento sin reproducir horas de audio.",
    relatedMeetings: "Reuniones",
    relatedVoiceNotes: "Notas de voz",
    relatedSpeakerDetection: "Detección de hablantes",
    relatedSummaries: "Resúmenes con IA",
    ctaTitle: "Cada episodio de podcast, capturado y estructurado",
    ctaSubtitle:
      "Deja de dejar que las grandes ideas desaparezcan al terminar el episodio. Sythio convierte el audio de podcasts en notas que realmente usarás.",
  },
  fr: {
    label: "Cas d'usage",
    title: "Notes de podcast avec IA — Transcriptions, chapitres et points essentiels",
    subtitle:
      "Vous ecoutez des podcasts pour apprendre, rester informe et trouver de l'inspiration. Sythio transforme les enregistrements d'episodes en transcriptions completes, resumes par chapitres, points essentiels et notes d'emission — pour que la valeur de chaque episode soit capturee et recherchable.",
    howTitle: "Comment ca fonctionne",
    howSubtitle:
      "Trois etapes de l'audio de l'episode aux notes structurees et utilisables.",
    step1Title: "Telechargez l'episode",
    step1Desc:
      "Deposez n'importe quel fichier audio de podcast — MP3, WAV, M4A ou tout autre format. Pas de limite de duree. Les episodes complets ou les courts extraits fonctionnent.",
    step2Title: "L'IA traite l'audio",
    step2Desc:
      "Sythio transcrit l'episode, detecte les locuteurs (animateur et invites), identifie les sujets et decoupe la conversation en sections logiques.",
    step3Title: "Obtenez vos notes de podcast",
    step3Desc:
      "Recevez une transcription complete, un resume chapitre par chapitre, les points essentiels, les moments citables et des notes d'emission propres — pret en quelques secondes.",
    whatTitle: "Ce que vous obtenez de chaque episode",
    whatSubtitle:
      "Un seul telechargement. Plusieurs resultats. Tout ce dont vous avez besoin pour capturer, memoriser et reutiliser le contenu des podcasts.",
    transcriptTitle: "Transcription complete",
    transcriptDesc:
      "Chaque mot, transcrit avec precision et etiquettes de locuteur. Recherchez n'importe quel sujet, citation ou moment dans l'episode entier.",
    summaryTitle: "Resumes par chapitres",
    summaryDesc:
      "L'episode decoupe en chapitres logiques avec un resume pour chacun. Parcourez la structure ou plongez dans des sections specifiques.",
    keyPointsTitle: "Points essentiels",
    keyPointsDesc:
      "Les idees, cadres et concepts les plus importants distilles en points clairs et faciles a parcourir. L'essence de l'episode en deux minutes.",
    showNotesTitle: "Notes d'emission",
    showNotesDesc:
      "Notes propres et structurees avec les sujets abordes, les citations cles et les references. Parfaites pour publier avec l'episode ou pour reference personnelle.",
    whoTitle: "Pour qui c'est fait",
    whoSubtitle:
      "Que vous creiez des podcasts, les ecoutiez ou les reutilisiez — Sythio vous donne des resultats structures a partir d'audio brut.",
    podcastersTitle: "Podcasters",
    podcastersDesc:
      "Generez des notes d'emission, des resumes d'episodes et des transcriptions automatiquement. Consacrez votre temps a creer du super contenu au lieu d'ecrire des descriptions apres coup.",
    listenersTitle: "Auditeurs",
    listenersDesc:
      "Ne perdez plus jamais une excellente idee. Telechargez les episodes que vous avez aimes et obtenez des notes recherchables que vous pouvez consulter, surligner et revisiter a tout moment.",
    repurposersTitle: "Reutilisateurs de contenu",
    repurposersDesc:
      "Transformez de longs episodes de podcast en articles de blog, fils de reseaux sociaux, newsletters et citations. Sythio vous donne la matiere premiere, deja structuree.",
    researchersTitle: "Chercheurs et etudiants",
    researchersDesc:
      "Extrayez des idees de podcasts d'interviews, de panels d'experts et de series educatives. Obtenez les connaissances sans reecouter des heures d'audio.",
    relatedMeetings: "Reunions",
    relatedVoiceNotes: "Notes vocales",
    relatedSpeakerDetection: "Detection des locuteurs",
    relatedSummaries: "Resumes IA",
    ctaTitle: "Chaque episode de podcast, capture et structure",
    ctaSubtitle:
      "Arretez de laisser les grandes idees disparaitre apres l'episode. Sythio transforme l'audio de podcast en notes que vous utiliserez vraiment.",
  },
  pt: {
    label: "Casos de uso",
    title: "Notas de podcast com IA — Transcricoes, capitulos e conclusoes-chave",
    subtitle:
      "Voce ouve podcasts para aprender, se manter informado e encontrar inspiracao. O Sythio transforma gravacoes de episodios em transcricoes completas, resumos por capitulos, conclusoes-chave e notas do programa — para que o valor de cada episodio seja capturado e pesquisavel.",
    howTitle: "Como funciona",
    howSubtitle:
      "Tres passos do audio do episodio para notas estruturadas e utilizaveis.",
    step1Title: "Envie o episodio",
    step1Desc:
      "Arraste qualquer arquivo de audio de podcast — MP3, WAV, M4A ou qualquer outro formato. Sem limites de duracao. Episodios completos ou clips curtos, ambos funcionam.",
    step2Title: "A IA processa o audio",
    step2Desc:
      "O Sythio transcreve o episodio, detecta falantes (apresentador e convidados), identifica temas e divide a conversa em secoes logicas.",
    step3Title: "Receba suas notas do podcast",
    step3Desc:
      "Receba uma transcricao completa, resumo capitulo por capitulo, conclusoes-chave, momentos citaveis e notas do programa limpas — pronto em segundos.",
    whatTitle: "O que voce recebe de cada episodio",
    whatSubtitle:
      "Um envio. Multiplos resultados. Tudo o que voce precisa para capturar, relembrar e reutilizar conteudo de podcasts.",
    transcriptTitle: "Transcricao completa",
    transcriptDesc:
      "Cada palavra, transcrita com precisao e rotulos de falante. Pesquise qualquer tema, citacao ou momento em todo o episodio.",
    summaryTitle: "Resumos por capitulos",
    summaryDesc:
      "O episodio dividido em capitulos logicos com um resumo de cada um. Percorra a estrutura ou aprofunde-se em secoes especificas.",
    keyPointsTitle: "Conclusoes-chave",
    keyPointsDesc:
      "As ideias, frameworks e conceitos mais importantes destilados em pontos claros e escaneveis. A essencia do episodio em dois minutos.",
    showNotesTitle: "Notas do programa",
    showNotesDesc:
      "Notas limpas e estruturadas com temas abordados, citacoes-chave e referencias. Perfeitas para publicar junto ao episodio ou para referencia pessoal.",
    whoTitle: "Para quem e",
    whoSubtitle:
      "Seja voce criador de podcasts, ouvinte ou reutilizador de conteudo — o Sythio entrega resultados estruturados a partir de audio bruto.",
    podcastersTitle: "Podcasters",
    podcastersDesc:
      "Gere notas do programa, resumos de episodios e transcricoes automaticamente. Dedique seu tempo a criar otimo conteudo em vez de escrever descricoes depois.",
    listenersTitle: "Ouvintes",
    listenersDesc:
      "Nunca perca uma otima ideia novamente. Envie episodios que voce amou e obtenha notas pesquisaveis que pode consultar, destacar e revisitar a qualquer momento.",
    repurposersTitle: "Reutilizadores de conteudo",
    repurposersDesc:
      "Transforme episodios longos em posts de blog, threads de redes sociais, newsletters e citacoes. O Sythio fornece a materia-prima, ja estruturada.",
    researchersTitle: "Pesquisadores e estudantes",
    researchersDesc:
      "Extraia insights de podcasts de entrevistas, paineis de especialistas e series educacionais. Obtenha o conhecimento sem reproduzir horas de audio.",
    relatedMeetings: "Reunioes",
    relatedVoiceNotes: "Notas de voz",
    relatedSpeakerDetection: "Deteccao de falantes",
    relatedSummaries: "Resumos com IA",
    ctaTitle: "Cada episodio de podcast, capturado e estruturado",
    ctaSubtitle:
      "Pare de deixar grandes insights desaparecerem apos o episodio. O Sythio transforma audio de podcast em notas que voce realmente usara.",
  },
  it: {
    label: "Casi d'uso",
    title: "Note podcast con IA — Trascrizioni, capitoli e punti chiave",
    subtitle:
      "Ascolti podcast per imparare, restare informato e trovare ispirazione. Sythio trasforma le registrazioni degli episodi in trascrizioni complete, riassunti per capitoli, punti chiave e note dello show — perche il valore di ogni episodio venga catturato e sia ricercabile.",
    howTitle: "Come funziona",
    howSubtitle:
      "Tre passaggi dall'audio dell'episodio a note strutturate e utilizzabili.",
    step1Title: "Carica l'episodio",
    step1Desc:
      "Trascina qualsiasi file audio podcast — MP3, WAV, M4A o qualsiasi altro formato. Nessun limite di durata. Episodi completi o brevi clip, entrambi funzionano.",
    step2Title: "L'IA elabora l'audio",
    step2Desc:
      "Sythio trascrive l'episodio, rileva i parlanti (conduttore e ospiti), identifica gli argomenti e divide la conversazione in sezioni logiche.",
    step3Title: "Ottieni le tue note podcast",
    step3Desc:
      "Ricevi una trascrizione completa, riassunto capitolo per capitolo, punti chiave, momenti citabili e note dello show pulite — pronto in pochi secondi.",
    whatTitle: "Cosa ottieni da ogni episodio",
    whatSubtitle:
      "Un caricamento. Molteplici risultati. Tutto cio che ti serve per catturare, ricordare e riutilizzare contenuti podcast.",
    transcriptTitle: "Trascrizione completa",
    transcriptDesc:
      "Ogni parola, trascritta con precisione ed etichette dei parlanti. Cerca qualsiasi argomento, citazione o momento nell'intero episodio.",
    summaryTitle: "Riassunti per capitoli",
    summaryDesc:
      "L'episodio suddiviso in capitoli logici con un riassunto per ciascuno. Scorri la struttura o approfondisci sezioni specifiche.",
    keyPointsTitle: "Punti chiave",
    keyPointsDesc:
      "Le idee, i framework e i concetti piu importanti distillati in punti chiari e facili da scansionare. L'essenza dell'episodio in due minuti.",
    showNotesTitle: "Note dello show",
    showNotesDesc:
      "Note pulite e strutturate con argomenti trattati, citazioni chiave e riferimenti. Perfette per pubblicare insieme all'episodio o come riferimento personale.",
    whoTitle: "Per chi e pensato",
    whoSubtitle:
      "Che tu crei podcast, li ascolti o li riutilizzi — Sythio ti offre risultati strutturati da audio grezzo.",
    podcastersTitle: "Podcaster",
    podcastersDesc:
      "Genera note dello show, riassunti degli episodi e trascrizioni automaticamente. Dedica il tuo tempo a creare ottimi contenuti invece di scrivere descrizioni a posteriori.",
    listenersTitle: "Ascoltatori",
    listenersDesc:
      "Non perdere mai piu un'ottima idea. Carica gli episodi che ti sono piaciuti e ottieni note ricercabili che puoi consultare, evidenziare e rivisitare in qualsiasi momento.",
    repurposersTitle: "Riutilizzatori di contenuti",
    repurposersDesc:
      "Trasforma lunghi episodi podcast in articoli di blog, thread sui social, newsletter e citazioni. Sythio ti fornisce la materia prima, gia strutturata.",
    researchersTitle: "Ricercatori e studenti",
    researchersDesc:
      "Estrai spunti da podcast di interviste, panel di esperti e serie educative. Ottieni la conoscenza senza riascoltare ore di audio.",
    relatedMeetings: "Riunioni",
    relatedVoiceNotes: "Note vocali",
    relatedSpeakerDetection: "Rilevamento parlanti",
    relatedSummaries: "Riassunti IA",
    ctaTitle: "Ogni episodio podcast, catturato e strutturato",
    ctaSubtitle:
      "Smetti di lasciare che le grandi idee svaniscano alla fine dell'episodio. Sythio trasforma l'audio dei podcast in note che userai davvero.",
  },
};

export default function PodcastsPage() {
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
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.summaryTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.summaryDesc}</p>
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
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.showNotesTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.showNotesDesc}</p>
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
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.podcastersTitle}</h3>
                <p className="text-base text-muted leading-relaxed">{c.podcastersDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.listenersTitle}</h3>
                <p className="text-base text-muted leading-relaxed">{c.listenersDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.repurposersTitle}</h3>
                <p className="text-base text-muted leading-relaxed">{c.repurposersDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.researchersTitle}</h3>
                <p className="text-base text-muted leading-relaxed">{c.researchersDesc}</p>
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
              <Link href="/use-cases/voice-notes" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedVoiceNotes}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/features/speaker-detection" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedSpeakerDetection}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/features/ai-summaries" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedSummaries}</p>
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
