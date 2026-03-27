"use client";

import Link from "next/link";
import { useLanguage } from "../components/i18n/language-context";
import type { Locale } from "../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Audio to Clean Text",
    title: "Convert Audio into Clean, Readable Text",
    subtitle:
      "Record a conversation, upload a file, or capture a voice note. Sythio removes filler words, fixes grammar, and delivers polished text that reads naturally — not like a raw transcript.",
    howTitle: "Three steps to polished text",
    howSubtitle:
      "No manual editing. No cleaning up messy transcripts. Sythio transforms spoken audio into text that is ready to share, publish, or use.",
    step1Title: "Record or upload",
    step1Desc:
      "Capture audio directly inside Sythio or upload an existing file. Voice memos, interviews, dictations — any format works.",
    step2Title: "Sythio cleans the content",
    step2Desc:
      "Filler words are removed. Grammar is corrected. Sentence structure is improved. The meaning stays intact while the delivery becomes polished.",
    step3Title: "Get your clean text",
    step3Desc:
      "Readable, well-structured text is ready in seconds. Copy it, export it, or use it directly — no further editing needed.",
    whatLabel: "What You Get",
    whatTitle: "What Sythio Clean Text Delivers",
    whatSubtitle:
      "Not a word-for-word transcript. Clean, professional text that preserves your meaning while removing the rough edges of spoken language.",
    feat1Title: "Filler words removed",
    feat1Desc:
      "All the ums, uhs, like, you know, and false starts are stripped out, leaving only the substance of what was said.",
    feat2Title: "Grammar corrected",
    feat2Desc:
      "Sentence fragments, subject-verb disagreements, and awkward phrasing are cleaned up while preserving your voice.",
    feat3Title: "Natural flow",
    feat3Desc:
      "The text reads as if it were written, not spoken. Proper paragraphing, punctuation, and sentence structure throughout.",
    feat4Title: "Meaning preserved",
    feat4Desc:
      "Sythio cleans up how something was said without changing what was said. Your ideas and intent stay intact.",
    moreLabel: "One Recording, Many Outputs",
    moreTitle: "Not Just Clean Text",
    moreSubtitle:
      "Clean text is one lens on a recording. The same audio can also produce summaries, key points, study notes, and more — all from a single upload.",
    more1Title: "Summaries",
    more1Desc:
      "A clear overview of the full conversation — decisions, topics, and takeaways.",
    more2Title: "Key points",
    more2Desc:
      "The most important points distilled into a concise, scannable list.",
    more3Title: "Organized ideas",
    more3Desc:
      "Raw brainstorming sessions turned into structured, grouped ideas.",
    more4Title: "All 9 formats",
    more4Desc:
      "Summaries, tasks, action plans, reports, messages, study notes, ideas, and more.",
    versatileLabel: "Versatile by Design",
    versatileTitle: "Works with Any Audio",
    versatileSubtitle:
      "Sythio adapts to the content. Whether it is a quick voice memo or a long interview, the clean text preserves the depth while improving the readability.",
    use1Title: "Voice memos",
    use1Desc:
      "Quick spoken thoughts turned into well-written text you can drop into emails, documents, or notes.",
    use2Title: "Interviews",
    use2Desc:
      "Rambling interview audio cleaned up into professional, quotable text ready for articles or reports.",
    use3Title: "Dictations",
    use3Desc:
      "Dictated drafts of documents, emails, or essays polished into final-ready prose.",
    use4Title: "Meetings",
    use4Desc:
      "Spoken discussions transformed into clean written records that read naturally and professionally.",
    outcome: "Outcome",
    rel1Name: "Clean Text",
    rel2Name: "Audio to Summary",
    rel3Name: "Audio to Key Points",
    rel4Name: "Voice Notes",
    ctaTitle: "Stop editing transcripts. Start with clean text.",
    ctaSubtitle:
      "Every recording becomes polished, readable text — in seconds, not hours.",
  },
  es: {
    label: "Audio a Texto Limpio",
    title: "Convierte audio en texto limpio y legible",
    subtitle:
      "Graba una conversacion, sube un archivo o captura una nota de voz. Sythio elimina muletillas, corrige la gramatica y entrega texto pulido que se lee naturalmente — no como una transcripcion cruda.",
    howTitle: "Tres pasos para texto pulido",
    howSubtitle:
      "Sin edicion manual. Sin limpiar transcripciones desordenadas. Sythio transforma audio hablado en texto listo para compartir, publicar o usar.",
    step1Title: "Graba o sube",
    step1Desc:
      "Captura audio directamente en Sythio o sube un archivo existente. Notas de voz, entrevistas, dictados — cualquier formato funciona.",
    step2Title: "Sythio limpia el contenido",
    step2Desc:
      "Las muletillas se eliminan. La gramatica se corrige. La estructura de las frases se mejora. El significado permanece intacto mientras la entrega se pule.",
    step3Title: "Obtiene tu texto limpio",
    step3Desc:
      "Texto legible y bien estructurado esta listo en segundos. Copialo, exportalo o usalo directamente — sin necesidad de mas edicion.",
    whatLabel: "Lo que obtienes",
    whatTitle: "Lo que entrega el texto limpio de Sythio",
    whatSubtitle:
      "No es una transcripcion palabra por palabra. Texto limpio y profesional que preserva tu significado mientras elimina las asperezas del lenguaje hablado.",
    feat1Title: "Muletillas eliminadas",
    feat1Desc:
      "Todos los ehs, ums, o sea, ya sabes y falsos comienzos se eliminan, dejando solo la sustancia de lo que se dijo.",
    feat2Title: "Gramatica corregida",
    feat2Desc:
      "Fragmentos de oraciones, desacuerdos sujeto-verbo y frases incmodas se limpian mientras se preserva tu voz.",
    feat3Title: "Flujo natural",
    feat3Desc:
      "El texto se lee como si hubiera sido escrito, no hablado. Parrafos adecuados, puntuacion y estructura de oraciones en todo momento.",
    feat4Title: "Significado preservado",
    feat4Desc:
      "Sythio limpia como se dijo algo sin cambiar lo que se dijo. Tus ideas e intencion permanecen intactas.",
    moreLabel: "Una grabacion, muchos resultados",
    moreTitle: "No solo texto limpio",
    moreSubtitle:
      "El texto limpio es una perspectiva de una grabacion. El mismo audio tambien puede producir resumenes, puntos clave, notas de estudio y mas — todo desde una sola carga.",
    more1Title: "Resumenes",
    more1Desc:
      "Una vision clara de toda la conversacion — decisiones, temas y conclusiones.",
    more2Title: "Puntos clave",
    more2Desc:
      "Los puntos mas importantes destilados en una lista concisa y facil de escanear.",
    more3Title: "Ideas organizadas",
    more3Desc:
      "Sesiones de lluvia de ideas convertidas en ideas estructuradas y agrupadas.",
    more4Title: "Los 9 formatos",
    more4Desc:
      "Resumenes, tareas, planes de accion, informes, mensajes, notas de estudio, ideas y mas.",
    versatileLabel: "Versatil por diseno",
    versatileTitle: "Funciona con cualquier audio",
    versatileSubtitle:
      "Sythio se adapta al contenido. Ya sea una nota de voz rapida o una entrevista larga, el texto limpio preserva la profundidad mientras mejora la legibilidad.",
    use1Title: "Notas de voz",
    use1Desc:
      "Pensamientos hablados rapidos convertidos en texto bien escrito que puedes usar en correos, documentos o notas.",
    use2Title: "Entrevistas",
    use2Desc:
      "Audio de entrevistas desordenadas limpiado en texto profesional y citable listo para articulos o informes.",
    use3Title: "Dictados",
    use3Desc:
      "Borradores dictados de documentos, correos o ensayos pulidos en prosa lista para la version final.",
    use4Title: "Reuniones",
    use4Desc:
      "Discusiones habladas transformadas en registros escritos limpios que se leen natural y profesionalmente.",
    outcome: "Resultado",
    rel1Name: "Texto Limpio",
    rel2Name: "Audio a Resumen",
    rel3Name: "Audio a Puntos Clave",
    rel4Name: "Notas de Voz",
    ctaTitle: "Deja de editar transcripciones. Empieza con texto limpio.",
    ctaSubtitle:
      "Cada grabacion se convierte en texto pulido y legible — en segundos, no en horas.",
  },
  fr: {
    label: "Audio en Texte nettoye",
    title: "Convertissez l'audio en texte propre et lisible",
    subtitle:
      "Enregistrez une conversation, telechargez un fichier ou capturez une note vocale. Sythio supprime les mots de remplissage, corrige la grammaire et fournit un texte poli qui se lit naturellement — pas comme une transcription brute.",
    howTitle: "Trois etapes pour un texte poli",
    howSubtitle:
      "Pas d'edition manuelle. Pas de nettoyage de transcriptions desordonnees. Sythio transforme l'audio parle en texte pret a partager, publier ou utiliser.",
    step1Title: "Enregistrez ou telechargez",
    step1Desc:
      "Capturez l'audio directement dans Sythio ou telechargez un fichier existant. Notes vocales, entretiens, dictees — tout format fonctionne.",
    step2Title: "Sythio nettoie le contenu",
    step2Desc:
      "Les mots de remplissage sont supprimes. La grammaire est corrigee. La structure des phrases est amelioree. Le sens reste intact tandis que la forme devient polie.",
    step3Title: "Obtenez votre texte propre",
    step3Desc:
      "Un texte lisible et bien structure est pret en quelques secondes. Copiez-le, exportez-le ou utilisez-le directement — aucune edition supplementaire necessaire.",
    whatLabel: "Ce que vous obtenez",
    whatTitle: "Ce que le texte nettoye de Sythio fournit",
    whatSubtitle:
      "Pas une transcription mot a mot. Un texte propre et professionnel qui preserve votre sens tout en supprimant les imperfections du langage parle.",
    feat1Title: "Mots de remplissage supprimes",
    feat1Desc:
      "Tous les euh, hum, genre, tu sais et faux departs sont supprimes, ne laissant que la substance de ce qui a ete dit.",
    feat2Title: "Grammaire corrigee",
    feat2Desc:
      "Fragments de phrases, desaccords sujet-verbe et formulations maladroites sont corriges tout en preservant votre voix.",
    feat3Title: "Flux naturel",
    feat3Desc:
      "Le texte se lit comme s'il avait ete ecrit, pas parle. Paragraphes adequats, ponctuation et structure de phrases partout.",
    feat4Title: "Sens preserve",
    feat4Desc:
      "Sythio nettoie comment quelque chose a ete dit sans changer ce qui a ete dit. Vos idees et intentions restent intactes.",
    moreLabel: "Un enregistrement, plusieurs resultats",
    moreTitle: "Pas que du texte nettoye",
    moreSubtitle:
      "Le texte nettoye est un angle de vue sur un enregistrement. Le meme audio peut aussi produire des resumes, points cles, notes d'etude et plus — le tout a partir d'un seul envoi.",
    more1Title: "Resumes",
    more1Desc:
      "Une vue d'ensemble claire de toute la conversation — decisions, sujets et conclusions.",
    more2Title: "Points cles",
    more2Desc:
      "Les points les plus importants distilles en une liste concise et facile a parcourir.",
    more3Title: "Idees organisees",
    more3Desc:
      "Sessions de brainstorming transformees en idees structurees et groupees.",
    more4Title: "Les 9 formats",
    more4Desc:
      "Resumes, taches, plans d'action, rapports, messages, notes d'etude, idees et plus.",
    versatileLabel: "Polyvalent par conception",
    versatileTitle: "Fonctionne avec tout audio",
    versatileSubtitle:
      "Sythio s'adapte au contenu. Qu'il s'agisse d'une note vocale rapide ou d'un long entretien, le texte nettoye preserve la profondeur tout en ameliorant la lisibilite.",
    use1Title: "Notes vocales",
    use1Desc:
      "Pensees parlees rapides transformees en texte bien ecrit que vous pouvez utiliser dans des emails, documents ou notes.",
    use2Title: "Entretiens",
    use2Desc:
      "Audio d'entretiens desordonnes nettoye en texte professionnel et citable pret pour des articles ou rapports.",
    use3Title: "Dictees",
    use3Desc:
      "Brouillons dictes de documents, emails ou essais polis en prose prete pour la version finale.",
    use4Title: "Reunions",
    use4Desc:
      "Discussions parlees transformees en comptes rendus ecrits propres qui se lisent naturellement et professionnellement.",
    outcome: "Resultat",
    rel1Name: "Texte nettoye",
    rel2Name: "Audio en Resume",
    rel3Name: "Audio en Points cles",
    rel4Name: "Notes vocales",
    ctaTitle: "Arretez d'editer les transcriptions. Commencez avec du texte propre.",
    ctaSubtitle:
      "Chaque enregistrement devient un texte poli et lisible — en secondes, pas en heures.",
  },
  pt: {
    label: "Audio para Texto Limpo",
    title: "Converta audio em texto limpo e legivel",
    subtitle:
      "Grave uma conversa, envie um arquivo ou capture uma nota de voz. Sythio remove palavras de preenchimento, corrige a gramatica e entrega texto polido que se le naturalmente — nao como uma transcricao bruta.",
    howTitle: "Tres passos para texto polido",
    howSubtitle:
      "Sem edicao manual. Sem limpar transcricoes bagunadas. Sythio transforma audio falado em texto pronto para compartilhar, publicar ou usar.",
    step1Title: "Grave ou envie",
    step1Desc:
      "Capture audio diretamente no Sythio ou envie um arquivo existente. Notas de voz, entrevistas, ditados — qualquer formato funciona.",
    step2Title: "Sythio limpa o conteudo",
    step2Desc:
      "Palavras de preenchimento sao removidas. A gramatica e corrigida. A estrutura das frases e melhorada. O significado permanece intacto enquanto a forma fica polida.",
    step3Title: "Receba seu texto limpo",
    step3Desc:
      "Texto legivel e bem estruturado esta pronto em segundos. Copie-o, exporte-o ou use-o diretamente — sem necessidade de mais edicao.",
    whatLabel: "O que voce recebe",
    whatTitle: "O que o texto limpo do Sythio entrega",
    whatSubtitle:
      "Nao e uma transcricao palavra por palavra. Texto limpo e profissional que preserva seu significado enquanto remove as asperezas da linguagem falada.",
    feat1Title: "Palavras de preenchimento removidas",
    feat1Desc:
      "Todos os ehs, ums, tipo, sabe e falsos comecos sao removidos, deixando apenas a substancia do que foi dito.",
    feat2Title: "Gramatica corrigida",
    feat2Desc:
      "Fragmentos de frases, discordancias sujeito-verbo e fraseado estranho sao limpos enquanto preservam sua voz.",
    feat3Title: "Fluxo natural",
    feat3Desc:
      "O texto se le como se tivesse sido escrito, nao falado. Paragrafacao adequada, pontuacao e estrutura de frases em todo o texto.",
    feat4Title: "Significado preservado",
    feat4Desc:
      "Sythio limpa como algo foi dito sem mudar o que foi dito. Suas ideias e intencao permanecem intactas.",
    moreLabel: "Uma gravacao, muitos resultados",
    moreTitle: "Nao apenas texto limpo",
    moreSubtitle:
      "Texto limpo e uma perspectiva de uma gravacao. O mesmo audio tambem pode produzir resumos, pontos-chave, notas de estudo e mais — tudo a partir de um unico envio.",
    more1Title: "Resumos",
    more1Desc:
      "Uma visao clara de toda a conversa — decisoes, temas e conclusoes.",
    more2Title: "Pontos-chave",
    more2Desc:
      "Os pontos mais importantes destilados em uma lista concisa e facil de escanear.",
    more3Title: "Ideias organizadas",
    more3Desc:
      "Sessoes de brainstorming transformadas em ideias estruturadas e agrupadas.",
    more4Title: "Todos os 9 formatos",
    more4Desc:
      "Resumos, tarefas, planos de acao, relatorios, mensagens, notas de estudo, ideias e mais.",
    versatileLabel: "Versatil por design",
    versatileTitle: "Funciona com qualquer audio",
    versatileSubtitle:
      "Sythio se adapta ao conteudo. Seja uma nota de voz rapida ou uma entrevista longa, o texto limpo preserva a profundidade enquanto melhora a legibilidade.",
    use1Title: "Notas de voz",
    use1Desc:
      "Pensamentos falados rapidos transformados em texto bem escrito que voce pode usar em emails, documentos ou notas.",
    use2Title: "Entrevistas",
    use2Desc:
      "Audio de entrevistas desorganizado limpo em texto profissional e citavel pronto para artigos ou relatorios.",
    use3Title: "Ditados",
    use3Desc:
      "Rascunhos ditados de documentos, emails ou ensaios polidos em prosa pronta para a versao final.",
    use4Title: "Reunioes",
    use4Desc:
      "Discussoes faladas transformadas em registros escritos limpos que se leem natural e profissionalmente.",
    outcome: "Resultado",
    rel1Name: "Texto Limpo",
    rel2Name: "Audio para Resumo",
    rel3Name: "Audio para Pontos-chave",
    rel4Name: "Notas de Voz",
    ctaTitle: "Pare de editar transcricoes. Comece com texto limpo.",
    ctaSubtitle:
      "Cada gravacao se torna texto polido e legivel — em segundos, nao em horas.",
  },
  it: {
    label: "Audio in Testo Pulito",
    title: "Converti l'audio in testo pulito e leggibile",
    subtitle:
      "Registra una conversazione, carica un file o cattura una nota vocale. Sythio rimuove le parole riempitive, corregge la grammatica e fornisce testo raffinato che si legge naturalmente — non come una trascrizione grezza.",
    howTitle: "Tre passaggi per un testo raffinato",
    howSubtitle:
      "Nessuna modifica manuale. Nessuna pulizia di trascrizioni disordinate. Sythio trasforma l'audio parlato in testo pronto per essere condiviso, pubblicato o utilizzato.",
    step1Title: "Registra o carica",
    step1Desc:
      "Cattura l'audio direttamente in Sythio o carica un file esistente. Note vocali, interviste, dettature — qualsiasi formato funziona.",
    step2Title: "Sythio pulisce il contenuto",
    step2Desc:
      "Le parole riempitive vengono rimosse. La grammatica viene corretta. La struttura delle frasi viene migliorata. Il significato resta intatto mentre la forma diventa raffinata.",
    step3Title: "Ottieni il tuo testo pulito",
    step3Desc:
      "Testo leggibile e ben strutturato e pronto in pochi secondi. Copialo, esportalo o usalo direttamente — nessuna ulteriore modifica necessaria.",
    whatLabel: "Cosa ottieni",
    whatTitle: "Cosa fornisce il testo pulito di Sythio",
    whatSubtitle:
      "Non una trascrizione parola per parola. Testo pulito e professionale che preserva il tuo significato rimuovendo le imperfezioni del linguaggio parlato.",
    feat1Title: "Parole riempitive rimosse",
    feat1Desc:
      "Tutti gli ehm, uhm, tipo, sai e false partenze vengono eliminati, lasciando solo la sostanza di cio che e stato detto.",
    feat2Title: "Grammatica corretta",
    feat2Desc:
      "Frammenti di frasi, discordanze soggetto-verbo e formulazioni goffe vengono corretti preservando la tua voce.",
    feat3Title: "Flusso naturale",
    feat3Desc:
      "Il testo si legge come se fosse stato scritto, non parlato. Paragrafi adeguati, punteggiatura e struttura delle frasi in tutto il testo.",
    feat4Title: "Significato preservato",
    feat4Desc:
      "Sythio pulisce come qualcosa e stato detto senza cambiare cosa e stato detto. Le tue idee e intenzioni restano intatte.",
    moreLabel: "Una registrazione, molti risultati",
    moreTitle: "Non solo testo pulito",
    moreSubtitle:
      "Il testo pulito e una prospettiva su una registrazione. Lo stesso audio puo anche produrre riassunti, punti chiave, note di studio e altro — il tutto da un singolo caricamento.",
    more1Title: "Riassunti",
    more1Desc:
      "Una panoramica chiara dell'intera conversazione — decisioni, argomenti e conclusioni.",
    more2Title: "Punti chiave",
    more2Desc:
      "I punti piu importanti distillati in una lista concisa e facilmente consultabile.",
    more3Title: "Idee organizzate",
    more3Desc:
      "Sessioni di brainstorming trasformate in idee strutturate e raggruppate.",
    more4Title: "Tutti i 9 formati",
    more4Desc:
      "Riassunti, attivita, piani d'azione, report, messaggi, note di studio, idee e altro.",
    versatileLabel: "Versatile per design",
    versatileTitle: "Funziona con qualsiasi audio",
    versatileSubtitle:
      "Sythio si adatta al contenuto. Che si tratti di una nota vocale rapida o di una lunga intervista, il testo pulito preserva la profondita migliorando la leggibilita.",
    use1Title: "Note vocali",
    use1Desc:
      "Pensieri parlati rapidi trasformati in testo ben scritto da usare in email, documenti o appunti.",
    use2Title: "Interviste",
    use2Desc:
      "Audio di interviste disordinato pulito in testo professionale e citabile pronto per articoli o report.",
    use3Title: "Dettature",
    use3Desc:
      "Bozze dettate di documenti, email o saggi raffinate in prosa pronta per la versione finale.",
    use4Title: "Riunioni",
    use4Desc:
      "Discussioni parlate trasformate in registrazioni scritte pulite che si leggono in modo naturale e professionale.",
    outcome: "Risultato",
    rel1Name: "Testo Pulito",
    rel2Name: "Audio in Riassunto",
    rel3Name: "Audio in Punti chiave",
    rel4Name: "Note Vocali",
    ctaTitle: "Smetti di modificare le trascrizioni. Inizia con testo pulito.",
    ctaSubtitle:
      "Ogni registrazione diventa testo raffinato e leggibile — in secondi, non in ore.",
  },
};

export default function AudioToCleanTextPage() {
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
              { title: c.more3Title, description: c.more3Desc, href: "/audio-to-ideas" },
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
            <ScrollScale><Link href="/features/clean-text" className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel1Name}</p></Link></ScrollScale>
            <ScrollScale><Link href="/audio-to-summary" className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel2Name}</p></Link></ScrollScale>
            <ScrollScale><Link href="/audio-to-key-points" className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel3Name}</p></Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/voice-notes" className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel4Name}</p></Link></ScrollScale>
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
