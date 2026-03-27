"use client";
import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Features", title: "Study Notes That Actually Help You Learn",
    subtitle: "Sythio turns lectures, classes, and study recordings into organized notes with key concepts, definitions, examples, and takeaways. Structured for review, optimized for retention.",
    probLabel: "The Problem", probTitle: "Listening and Note-Taking Don't Mix",
    probDesc1: "You are either listening or writing. Doing both means you miss things. Recorded lectures help, but re-listening to a 90-minute class just to find one concept is not an efficient way to study.",
    probDesc2: "Sythio solves this by turning the entire recording into organized, topic-based notes that are ready for review the moment the class ends.",
    incLabel: "What Study Notes Include",
    inc1: "Key concepts organized by topic", inc2: "Definitions and explanations highlighted", inc3: "Important examples and illustrations", inc4: "Connections between related ideas", inc5: "Summary of main takeaways",
    diffLabel: "What Makes It Different", diffTitle: "Notes That Understand the Material",
    diffDesc: "Sythio does not just transcribe and format. It identifies the educational structure of the content — distinguishing concepts from examples, definitions from commentary, and core ideas from supporting details.",
    d1Title: "Topic Organization", d1Desc: "Content is grouped by topic, even when the lecturer jumped between subjects. Related information is brought together logically.",
    d2Title: "Concept Highlighting", d2Desc: "Key terms and definitions are identified and surfaced clearly. No more digging through paragraphs to find the one definition you need.",
    d3Title: "Study-Ready Format", d3Desc: "Notes are structured for efficient review. Skim the headings, dive into details where needed, and test your understanding with the takeaway section.",
    processLabel: "Process", processTitle: "How It Works",
    s1Title: "Record Your Lecture", s1Desc: "Record directly in Sythio during class, or upload a recording afterward. Works with any lecture, seminar, or study session.",
    s2Title: "Sythio Understands", s2Desc: "The audio is analyzed for educational content. Topics are identified, concepts are extracted, and the material is organized into a clear structure.",
    s3Title: "Get Your Notes", s3Desc: "Receive organized study notes you can review immediately. Export them, combine with your own notes, or use them as your primary study material.",
    ucLabel: "Use Cases", ucTitle: "Built for Learners",
    ucDesc: "Whether you are a student, a professional in training, or a lifelong learner, study notes turn any educational audio into a powerful learning resource.",
    uc1Title: "University Lectures", uc1Desc: "Record every lecture and get structured notes by the time you get home. Focus on understanding during class, not on writing everything down.",
    uc2Title: "Online Courses", uc2Desc: "Taking an online course? Upload the video audio and get organized notes for each module. Review at your pace without rewatching.",
    uc3Title: "Professional Training", uc3Desc: "Workshops, certifications, and training sessions become reference material. Study notes capture what you need to retain and apply.",
    uc4Title: "Podcasts & Talks", uc4Desc: "Turn insightful podcasts, TED talks, and conference sessions into structured notes you can revisit and share.",
    otherLabel: "One Recording, Many Outputs", otherTitle: "Notes Are Just the Start",
    otherDesc: "From the same recording, you can also get summaries for a quick overview, key points for focused review, or clean text for a polished written version of the lecture.",
    oKP: "Key Points", oKPDesc: "When you need just the essential takeaways. Key points give you the most important items in a scannable list.",
    oAI: "AI Summaries", oAIDesc: "A quick overview of the entire lecture. Great for refreshing your memory before an exam without re-reading everything.",
    oCT: "Clean Text", oCTDesc: "The full lecture content as polished, readable text. Useful when you want to read the material in its entirety without filler.",
    relKP: "Key Points", relAI: "AI Summaries", relLec: "Lectures", relStu: "For Students",
    ctaTitle: "Focus on Learning. Sythio Takes the Notes.", ctaDesc: "Every lecture deserves organized notes. Sythio creates them for you in seconds.",
  },
  es: {
    label: "Funciones", title: "Notas de estudio que realmente te ayudan a aprender",
    subtitle: "Sythio convierte clases, cursos y grabaciones de estudio en notas organizadas con conceptos clave, definiciones, ejemplos y conclusiones. Estructuradas para repasar, optimizadas para la retencion.",
    probLabel: "El problema", probTitle: "Escuchar y tomar notas no se mezclan",
    probDesc1: "O estas escuchando o estas escribiendo. Hacer ambas cosas significa que te pierdes cosas. Las clases grabadas ayudan, pero reescuchar 90 minutos de clase solo para encontrar un concepto no es eficiente.",
    probDesc2: "Sythio resuelve esto convirtiendo toda la grabacion en notas organizadas por tema, listas para repasar en el momento que termina la clase.",
    incLabel: "Que incluyen las notas de estudio",
    inc1: "Conceptos clave organizados por tema", inc2: "Definiciones y explicaciones destacadas", inc3: "Ejemplos e ilustraciones importantes", inc4: "Conexiones entre ideas relacionadas", inc5: "Resumen de conclusiones principales",
    diffLabel: "Lo que lo hace diferente", diffTitle: "Notas que entienden el material",
    diffDesc: "Sythio no solo transcribe y formatea. Identifica la estructura educativa del contenido — distinguiendo conceptos de ejemplos, definiciones de comentarios e ideas centrales de detalles de apoyo.",
    d1Title: "Organizacion por temas", d1Desc: "El contenido se agrupa por tema, incluso cuando el profesor salto entre materias. La informacion relacionada se reune logicamente.",
    d2Title: "Conceptos destacados", d2Desc: "Los terminos y definiciones clave se identifican y presentan claramente. No mas buscar entre parrafos para encontrar la definicion que necesitas.",
    d3Title: "Formato listo para estudiar", d3Desc: "Las notas estan estructuradas para una revision eficiente. Escanea los titulos, profundiza en los detalles donde sea necesario.",
    processLabel: "Proceso", processTitle: "Como funciona",
    s1Title: "Graba tu clase", s1Desc: "Graba directamente en Sythio durante la clase, o sube una grabacion despues. Funciona con cualquier clase, seminario o sesion de estudio.",
    s2Title: "Sythio entiende", s2Desc: "El audio se analiza para contenido educativo. Los temas se identifican, los conceptos se extraen y el material se organiza en una estructura clara.",
    s3Title: "Obtiene tus notas", s3Desc: "Recibe notas de estudio organizadas que puedes revisar de inmediato. Exportalas, combinalas con tus propias notas o usalas como tu material de estudio principal.",
    ucLabel: "Casos de uso", ucTitle: "Hecho para estudiantes",
    ucDesc: "Ya seas estudiante, profesional en formacion o aprendiz de por vida, las notas de estudio convierten cualquier audio educativo en un recurso de aprendizaje poderoso.",
    uc1Title: "Clases universitarias", uc1Desc: "Graba cada clase y obtiene notas estructuradas para cuando llegues a casa. Concentrate en entender durante la clase, no en escribir todo.",
    uc2Title: "Cursos en linea", uc2Desc: "Estas tomando un curso en linea? Sube el audio del video y obtiene notas organizadas para cada modulo. Repasa a tu ritmo sin volver a ver.",
    uc3Title: "Formacion profesional", uc3Desc: "Talleres, certificaciones y sesiones de capacitacion se convierten en material de referencia. Las notas capturan lo que necesitas retener y aplicar.",
    uc4Title: "Podcasts y charlas", uc4Desc: "Convierte podcasts, charlas TED y sesiones de conferencia en notas estructuradas que puedes revisitar y compartir.",
    otherLabel: "Una grabacion, muchas salidas", otherTitle: "Las notas son solo el comienzo",
    otherDesc: "De la misma grabacion, tambien puedes obtener resumenes para una vision rapida, puntos clave para revision enfocada o texto limpio para una version escrita pulida.",
    oKP: "Puntos clave", oKPDesc: "Cuando solo necesitas las conclusiones esenciales. Los puntos clave te dan los elementos mas importantes en una lista escaneable.",
    oAI: "Resumenes IA", oAIDesc: "Una vision rapida de toda la clase. Ideal para refrescar la memoria antes de un examen sin releer todo.",
    oCT: "Texto limpio", oCTDesc: "El contenido completo de la clase como texto pulido y legible. Util cuando quieres leer el material completo sin relleno.",
    relKP: "Puntos clave", relAI: "Resumenes IA", relLec: "Clases", relStu: "Para estudiantes",
    ctaTitle: "Concentrate en aprender. Sythio toma las notas.", ctaDesc: "Cada clase merece notas organizadas. Sythio las crea para ti en segundos.",
  },
  fr: {
    label: "Fonctionnalites", title: "Des notes d'etude qui vous aident vraiment a apprendre",
    subtitle: "Sythio transforme les cours et les enregistrements d'etude en notes organisees avec concepts cles, definitions, exemples et points a retenir.",
    probLabel: "Le probleme", probTitle: "Ecouter et prendre des notes ne font pas bon menage",
    probDesc1: "Vous ecoutez ou vous ecrivez. Faire les deux signifie que vous ratez des choses. Les cours enregistres aident, mais reecouter 90 minutes de cours pour trouver un concept n'est pas efficace.",
    probDesc2: "Sythio resout ce probleme en transformant l'enregistrement entier en notes organisees par sujet, pretes a etre revisees des la fin du cours.",
    incLabel: "Ce qu'incluent les notes d'etude",
    inc1: "Concepts cles organises par sujet", inc2: "Definitions et explications mises en evidence", inc3: "Exemples et illustrations importants", inc4: "Liens entre idees connexes", inc5: "Resume des points a retenir",
    diffLabel: "Ce qui le rend different", diffTitle: "Des notes qui comprennent le materiel",
    diffDesc: "Sythio ne se contente pas de transcrire et formater. Il identifie la structure educative du contenu — distinguant concepts d'exemples, definitions de commentaires.",
    d1Title: "Organisation par sujets", d1Desc: "Le contenu est groupe par sujet, meme quand le professeur a saute entre les matieres. L'information connexe est regroupee logiquement.",
    d2Title: "Concepts mis en evidence", d2Desc: "Les termes et definitions cles sont identifies et presentes clairement. Plus besoin de chercher dans les paragraphes.",
    d3Title: "Format pret pour l'etude", d3Desc: "Les notes sont structurees pour une revision efficace. Parcourez les titres, approfondissez les details ou necessaire.",
    processLabel: "Processus", processTitle: "Comment ca fonctionne",
    s1Title: "Enregistrez votre cours", s1Desc: "Enregistrez directement dans Sythio pendant le cours, ou telechargez un enregistrement apres. Fonctionne avec tout cours ou seminaire.",
    s2Title: "Sythio comprend", s2Desc: "L'audio est analyse pour le contenu educatif. Les sujets sont identifies, les concepts extraits et le materiel organise clairement.",
    s3Title: "Obtenez vos notes", s3Desc: "Recevez des notes d'etude organisees a reviser immediatement. Exportez-les ou combinez-les avec vos propres notes.",
    ucLabel: "Cas d'utilisation", ucTitle: "Concu pour les apprenants",
    ucDesc: "Etudiant, professionnel en formation ou apprenant permanent, les notes d'etude transforment tout audio educatif en ressource d'apprentissage puissante.",
    uc1Title: "Cours universitaires", uc1Desc: "Enregistrez chaque cours et obtenez des notes structurees en rentrant chez vous. Concentrez-vous sur la comprehension, pas sur l'ecriture.",
    uc2Title: "Cours en ligne", uc2Desc: "Vous suivez un cours en ligne ? Telechargez l'audio et obtenez des notes organisees pour chaque module.",
    uc3Title: "Formation professionnelle", uc3Desc: "Ateliers, certifications et sessions de formation deviennent du materiel de reference.",
    uc4Title: "Podcasts et conferences", uc4Desc: "Transformez des podcasts et conferences en notes structurees que vous pouvez revisiter et partager.",
    otherLabel: "Un enregistrement, plusieurs sorties", otherTitle: "Les notes ne sont que le debut",
    otherDesc: "Du meme enregistrement, obtenez aussi des resumes, points cles ou texte propre.",
    oKP: "Points cles", oKPDesc: "Quand vous avez juste besoin des points essentiels. Une liste scannable des elements les plus importants.",
    oAI: "Resumes IA", oAIDesc: "Un apercu rapide du cours entier. Ideal pour rafraichir sa memoire avant un examen.",
    oCT: "Texte propre", oCTDesc: "Le contenu complet du cours en texte soigne et lisible.",
    relKP: "Points cles", relAI: "Resumes IA", relLec: "Cours", relStu: "Pour les etudiants",
    ctaTitle: "Concentrez-vous sur l'apprentissage. Sythio prend les notes.", ctaDesc: "Chaque cours merite des notes organisees. Sythio les cree en secondes.",
  },
  pt: {
    label: "Recursos", title: "Notas de estudo que realmente ajudam a aprender",
    subtitle: "O Sythio transforma aulas, cursos e gravacoes de estudo em notas organizadas com conceitos-chave, definicoes, exemplos e conclusoes.",
    probLabel: "O problema", probTitle: "Ouvir e anotar nao combinam",
    probDesc1: "Voce esta ouvindo ou escrevendo. Fazer os dois significa perder coisas. Aulas gravadas ajudam, mas reouvir 90 minutos de aula para achar um conceito nao e eficiente.",
    probDesc2: "O Sythio resolve isso transformando toda a gravacao em notas organizadas por topico, prontas para revisao assim que a aula termina.",
    incLabel: "O que as notas de estudo incluem",
    inc1: "Conceitos-chave organizados por topico", inc2: "Definicoes e explicacoes destacadas", inc3: "Exemplos e ilustracoes importantes", inc4: "Conexoes entre ideias relacionadas", inc5: "Resumo das principais conclusoes",
    diffLabel: "O que o torna diferente", diffTitle: "Notas que entendem o material",
    diffDesc: "O Sythio nao apenas transcreve e formata. Identifica a estrutura educacional do conteudo — distinguindo conceitos de exemplos, definicoes de comentarios.",
    d1Title: "Organizacao por topicos", d1Desc: "O conteudo e agrupado por topico, mesmo quando o professor pulou entre assuntos. Informacoes relacionadas sao reunidas logicamente.",
    d2Title: "Conceitos destacados", d2Desc: "Termos e definicoes-chave sao identificados e apresentados claramente.",
    d3Title: "Formato pronto para estudo", d3Desc: "As notas sao estruturadas para revisao eficiente. Escaneie os titulos, aprofunde nos detalhes onde necessario.",
    processLabel: "Processo", processTitle: "Como funciona",
    s1Title: "Grave sua aula", s1Desc: "Grave diretamente no Sythio durante a aula, ou envie uma gravacao depois. Funciona com qualquer aula ou seminario.",
    s2Title: "Sythio entende", s2Desc: "O audio e analisado para conteudo educacional. Topicos sao identificados, conceitos extraidos e o material organizado em estrutura clara.",
    s3Title: "Receba suas notas", s3Desc: "Receba notas de estudo organizadas para revisar imediatamente. Exporte, combine com suas proprias notas ou use como material principal.",
    ucLabel: "Casos de uso", ucTitle: "Feito para estudantes",
    ucDesc: "Seja estudante, profissional em treinamento ou aprendiz permanente, as notas transformam qualquer audio educacional em recurso de aprendizado.",
    uc1Title: "Aulas universitarias", uc1Desc: "Grave cada aula e tenha notas estruturadas ao chegar em casa. Foque em entender durante a aula.",
    uc2Title: "Cursos online", uc2Desc: "Fazendo um curso online? Envie o audio e receba notas organizadas para cada modulo.",
    uc3Title: "Treinamento profissional", uc3Desc: "Workshops, certificacoes e sessoes de treinamento viram material de referencia.",
    uc4Title: "Podcasts e palestras", uc4Desc: "Transforme podcasts e palestras em notas estruturadas para revisitar e compartilhar.",
    otherLabel: "Uma gravacao, varias saidas", otherTitle: "As notas sao apenas o comeco",
    otherDesc: "Da mesma gravacao, obtenha tambem resumos, pontos-chave ou texto limpo.",
    oKP: "Pontos-chave", oKPDesc: "Quando voce precisa apenas das conclusoes essenciais em lista escaneavel.",
    oAI: "Resumos IA", oAIDesc: "Uma visao rapida de toda a aula. Ideal para refrescar a memoria antes de uma prova.",
    oCT: "Texto limpo", oCTDesc: "O conteudo completo da aula como texto polido e legivel.",
    relKP: "Pontos-chave", relAI: "Resumos IA", relLec: "Aulas", relStu: "Para estudantes",
    ctaTitle: "Foque em aprender. O Sythio faz as anotacoes.", ctaDesc: "Cada aula merece notas organizadas. O Sythio as cria em segundos.",
  },
  it: {
    label: "Funzionalita", title: "Appunti di studio che ti aiutano davvero a imparare",
    subtitle: "Sythio trasforma lezioni, corsi e registrazioni di studio in appunti organizzati con concetti chiave, definizioni, esempi e conclusioni.",
    probLabel: "Il problema", probTitle: "Ascoltare e prendere appunti non vanno d'accordo",
    probDesc1: "O stai ascoltando o stai scrivendo. Fare entrambe le cose significa perdere qualcosa. Le lezioni registrate aiutano, ma riascoltare 90 minuti per trovare un concetto non e efficiente.",
    probDesc2: "Sythio risolve questo trasformando l'intera registrazione in appunti organizzati per argomento, pronti per la revisione.",
    incLabel: "Cosa includono gli appunti di studio",
    inc1: "Concetti chiave organizzati per argomento", inc2: "Definizioni e spiegazioni evidenziate", inc3: "Esempi e illustrazioni importanti", inc4: "Connessioni tra idee correlate", inc5: "Riepilogo delle conclusioni principali",
    diffLabel: "Cosa lo rende diverso", diffTitle: "Appunti che comprendono il materiale",
    diffDesc: "Sythio non si limita a trascrivere e formattare. Identifica la struttura educativa del contenuto — distinguendo concetti da esempi, definizioni da commenti.",
    d1Title: "Organizzazione per argomenti", d1Desc: "Il contenuto e raggruppato per argomento, anche quando il docente ha saltato tra materie. Le informazioni correlate sono riunite logicamente.",
    d2Title: "Concetti evidenziati", d2Desc: "Termini e definizioni chiave sono identificati e presentati chiaramente.",
    d3Title: "Formato pronto per lo studio", d3Desc: "Gli appunti sono strutturati per una revisione efficiente. Scorri i titoli, approfondisci i dettagli dove necessario.",
    processLabel: "Processo", processTitle: "Come funziona",
    s1Title: "Registra la tua lezione", s1Desc: "Registra direttamente in Sythio durante la lezione, o carica una registrazione dopo. Funziona con qualsiasi lezione o seminario.",
    s2Title: "Sythio comprende", s2Desc: "L'audio viene analizzato per contenuto educativo. Gli argomenti vengono identificati, i concetti estratti e il materiale organizzato.",
    s3Title: "Ottieni i tuoi appunti", s3Desc: "Ricevi appunti di studio organizzati da revisionare immediatamente. Esportali o combinali con i tuoi appunti.",
    ucLabel: "Casi d'uso", ucTitle: "Fatto per chi impara",
    ucDesc: "Che tu sia studente, professionista in formazione o studente permanente, gli appunti trasformano qualsiasi audio educativo in risorsa di apprendimento.",
    uc1Title: "Lezioni universitarie", uc1Desc: "Registra ogni lezione e ottieni appunti strutturati tornando a casa. Concentrati sulla comprensione durante la lezione.",
    uc2Title: "Corsi online", uc2Desc: "Stai seguendo un corso online? Carica l'audio e ottieni appunti organizzati per ogni modulo.",
    uc3Title: "Formazione professionale", uc3Desc: "Workshop, certificazioni e sessioni di formazione diventano materiale di riferimento.",
    uc4Title: "Podcast e conferenze", uc4Desc: "Trasforma podcast e conferenze in appunti strutturati da rivisitare e condividere.",
    otherLabel: "Una registrazione, molti output", otherTitle: "Gli appunti sono solo l'inizio",
    otherDesc: "Dalla stessa registrazione, ottieni anche riassunti, punti chiave o testo pulito.",
    oKP: "Punti chiave", oKPDesc: "Quando hai bisogno solo delle conclusioni essenziali in lista scansionabile.",
    oAI: "Riassunti IA", oAIDesc: "Una panoramica rapida dell'intera lezione. Ideale per rinfrescare la memoria prima di un esame.",
    oCT: "Testo pulito", oCTDesc: "Il contenuto completo della lezione come testo curato e leggibile.",
    relKP: "Punti chiave", relAI: "Riassunti IA", relLec: "Lezioni", relStu: "Per studenti",
    ctaTitle: "Concentrati sull'apprendimento. Sythio prende gli appunti.", ctaDesc: "Ogni lezione merita appunti organizzati. Sythio li crea in pochi secondi.",
  },
};

export default function StudyNotesPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;
  const includes = [c.inc1, c.inc2, c.inc3, c.inc4, c.inc5];

  return (
    <PageReveal>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-animated-bg overflow-hidden"><div className="hero-orb hero-orb-1" /><div className="hero-orb hero-orb-2" /><div className="hero-orb hero-orb-3" /><div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" /><div className="relative max-w-7xl mx-auto px-6"><div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.label}</p>
        <TextReveal tag="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">{c.title}</TextReveal>
        <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">{c.subtitle}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <MagneticHover><Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{s("common.startFree")}</Link></MagneticHover>
          <Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{s("common.allFeatures")}</Link>
        </div>
      </div></div></section>

      <section className="py-32 md:py-44 bg-white"><div className="max-w-7xl mx-auto px-6"><div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.probLabel}</p>
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.probTitle}</TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed">{c.probDesc1}</p>
          <p className="mt-4 text-lg text-muted leading-relaxed">{c.probDesc2}</p>
        </div>
        <div className="space-y-6"><div className="bg-background rounded-2xl border border-border-light p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-4">{c.incLabel}</p>
          <ul className="space-y-3">{includes.map((item) => (<li key={item} className="flex items-start gap-3"><div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" /><span className="text-sm text-muted leading-relaxed">{item}</span></li>))}</ul>
        </div></div>
      </div></div></section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.diffLabel}</p>
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.diffTitle}</TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed">{c.diffDesc}</p>
        </div>
        <GsapStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>{[{t:c.d1Title,d:c.d1Desc},{t:c.d2Title,d:c.d2Desc},{t:c.d3Title,d:c.d3Desc}].map(i=>(<div key={i.t} className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow"><h3 className="text-lg font-semibold text-foreground mb-2">{i.t}</h3><p className="text-sm text-muted leading-relaxed">{i.d}</p></div>))}</GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-white"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.processLabel}</p><TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.processTitle}</TextReveal></div>
        <GsapStagger className="grid md:grid-cols-3 gap-8" stagger={0.08}>{[{n:"1",t:c.s1Title,d:c.s1Desc},{n:"2",t:c.s2Title,d:c.s2Desc},{n:"3",t:c.s3Title,d:c.s3Desc}].map(i=>(<div key={i.n} className="relative"><div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">{i.n}</div><h3 className="text-lg font-semibold text-foreground mb-2">{i.t}</h3><p className="text-sm text-muted leading-relaxed">{i.d}</p></div>))}</GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.ucLabel}</p><TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.ucTitle}</TextReveal><p className="mt-6 text-lg text-muted leading-relaxed">{c.ucDesc}</p></div>
        <GsapStagger className="grid sm:grid-cols-2 gap-6" stagger={0.08}>
          <ScrollScale><Link href="/use-cases/lectures" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc1Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc1Desc}</p></Link></ScrollScale>
          <div className="bg-white rounded-2xl border border-border-light p-8"><h3 className="text-lg font-semibold text-foreground mb-2">{c.uc2Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc2Desc}</p></div>
          <div className="bg-white rounded-2xl border border-border-light p-8"><h3 className="text-lg font-semibold text-foreground mb-2">{c.uc3Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc3Desc}</p></div>
          <div className="bg-white rounded-2xl border border-border-light p-8"><h3 className="text-lg font-semibold text-foreground mb-2">{c.uc4Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc4Desc}</p></div>
        </GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-white"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.otherLabel}</p><TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.otherTitle}</TextReveal><p className="mt-6 text-lg text-muted leading-relaxed">{c.otherDesc}</p></div>
        <GsapStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>
          <ScrollScale><Link href="/features/key-points" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.oKP}</h3><p className="text-sm text-muted leading-relaxed">{c.oKPDesc}</p></Link></ScrollScale>
          <ScrollScale><Link href="/features/ai-summaries" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.oAI}</h3><p className="text-sm text-muted leading-relaxed">{c.oAIDesc}</p></Link></ScrollScale>
          <ScrollScale><Link href="/features/clean-text" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.oCT}</h3><p className="text-sm text-muted leading-relaxed">{c.oCTDesc}</p></Link></ScrollScale>
        </GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden"><div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">{s("common.related")}</h2>
        <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
          <ScrollScale><Link href="/features/key-points" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relKP}</p></Link></ScrollScale>
          <ScrollScale><Link href="/features/ai-summaries" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relAI}</p></Link></ScrollScale>
          <ScrollScale><Link href="/use-cases/lectures" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relLec}</p></Link></ScrollScale>
          <ScrollScale><Link href="/for/students" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.audience")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relStu}</p></Link></ScrollScale>
        </GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
        <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.ctaTitle}</TextReveal>
        <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">{c.ctaDesc}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300">{s("common.startFree")}</Link>
          <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{s("common.exploreProduct")}</Link>
        </div>
        <p className="mt-6 text-sm text-muted">{s("common.freePlan")}</p>
      </div></section>
    </PageReveal>
  );
}
