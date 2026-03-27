"use client";
import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Features",
    title: "From Raw Audio to Polished, Readable Text",
    subtitle: "Sythio transforms spoken audio into clean, well-structured text. Filler words removed. Grammar corrected. Paragraphs formed. The result reads like it was written, not spoken.",
    problemLabel: "The Problem",
    problemTitle: "Raw Transcripts Are Not Readable",
    problemDesc1: "A word-for-word transcript captures everything you said — including the parts you wish you had not. False starts, repeated words, filler phrases, and incomplete thoughts make raw transcripts painful to read and impossible to share professionally.",
    problemDesc2: "Clean text solves this. It preserves your meaning while removing the noise that comes with natural speech.",
    rawLabel: "Raw Transcript",
    rawText: "\"So, um, basically what we need to do is, like, we need to figure out the, the timeline for this because, you know, the client is, uh, they're expecting something by, I think it was Friday? Yeah, Friday. So we should probably, um, get the team together and, and sort that out.\"",
    cleanLabel: "Clean Text",
    cleanText: "\"We need to finalize the project timeline. The client expects delivery by Friday. The team should align on this as soon as possible.\"",
    capLabel: "Capabilities",
    capTitle: "What Clean Text Does",
    capDesc: "Clean text is not about shortening. It is about clarifying. Every transformation preserves your original meaning while making the text professional and easy to read.",
    cap1Title: "Filler Words Removed",
    cap1Desc: "\"Um,\" \"uh,\" \"like,\" \"you know,\" and other verbal fillers are stripped out. What remains is the substance of what you said.",
    cap2Title: "Grammar Corrected",
    cap2Desc: "Spoken grammar is rarely written grammar. Sythio fixes tense inconsistencies, subject-verb agreement, and sentence fragments without changing your meaning.",
    cap3Title: "Structure Added",
    cap3Desc: "Continuous speech becomes organized paragraphs. Topic shifts are recognized and separated. The text flows logically from one point to the next.",
    cap4Title: "Repetition Eliminated",
    cap4Desc: "When you say the same thing three different ways, Sythio keeps the clearest version. No redundancy, no circular phrasing.",
    cap5Title: "Meaning Preserved",
    cap5Desc: "Clean text is faithful to your intent. Technical terms, proper nouns, and specific details are kept intact. Only the noise is removed.",
    cap6Title: "Ready to Use",
    cap6Desc: "The output is publication-ready. Use it in emails, documents, reports, or social posts. No further editing required.",
    processLabel: "Process",
    processTitle: "How It Works",
    step1Title: "Record or Upload",
    step1Desc: "Capture your thoughts, dictate a memo, record a conversation, or upload any existing audio file. Any spoken content works.",
    step2Title: "Sythio Processes",
    step2Desc: "The audio is transcribed, then refined. Filler is removed, grammar is corrected, and the text is reorganized into a clean, readable format.",
    step3Title: "Get Clean Text",
    step3Desc: "Receive polished text you can copy, export, or share. Use it as-is or as a starting point for longer documents, articles, or messages.",
    useCasesLabel: "Use Cases",
    useCasesTitle: "Where Clean Text Shines",
    useCasesDesc: "Anytime you need spoken words in written form, clean text delivers a result that reads naturally and looks professional.",
    uc1Title: "Voice Notes to Written Content",
    uc1Desc: "Dictate ideas on the go and get clean written text back. Perfect for drafting emails, blog posts, journal entries, or documentation without sitting at a keyboard.",
    uc2Title: "Meeting Notes for the Record",
    uc2Desc: "Produce clean, professional meeting notes that can be shared with stakeholders who were not present. No one needs to know they started as a messy recording.",
    uc3Title: "Lecture Notes",
    uc3Desc: "Turn recorded lectures into readable study material. Clean text captures the core content without the verbal detours and repetitions of live teaching.",
    uc4Title: "Content Drafting",
    uc4Desc: "Speak your first draft and let Sythio clean it up. Writers, founders, and creators use clean text to go from idea to polished draft in minutes.",
    otherLabel: "One Recording, Many Outputs",
    otherTitle: "Clean Text Is Just One Output",
    otherDesc: "From the same recording, Sythio can also produce summaries, task lists, action plans, and more. Choose clean text when you need a polished written version of what was said. Choose other formats when you need structured output.",
    otherAISummaries: "AI Summaries",
    otherAISummariesDesc: "When you need the essence, not the full text. Summaries distill long recordings into concise overviews with key points and decisions.",
    otherTaskExtraction: "Task Extraction",
    otherTaskExtractionDesc: "When what you need is a checklist, not prose. Tasks are pulled directly from the conversation with owners and deadlines attached.",
    otherActionPlans: "Action Plans",
    otherActionPlansDesc: "When the conversation produced a direction that needs structure. Action plans organize next steps into phased, prioritized sequences.",
    relAISummaries: "AI Summaries",
    relSpeakerDetection: "Speaker Detection",
    relVoiceNotes: "Voice Notes",
    relProduct: "Product",
    ctaTitle: "Speak It. Sythio Writes It.",
    ctaDesc: "Turn any spoken audio into polished, publication-ready text. No editing required.",
  },
  es: {
    label: "Funciones",
    title: "De audio crudo a texto pulido y legible",
    subtitle: "Sythio transforma el audio hablado en texto limpio y bien estructurado. Muletillas eliminadas. Gramatica corregida. Parrafos formados. El resultado se lee como si fuera escrito, no hablado.",
    problemLabel: "El problema",
    problemTitle: "Las transcripciones crudas no son legibles",
    problemDesc1: "Una transcripcion palabra por palabra captura todo lo que dijiste — incluyendo las partes que desearias no haber dicho. Falsos comienzos, palabras repetidas, frases de relleno y pensamientos incompletos hacen que las transcripciones crudas sean dolorosas de leer e imposibles de compartir profesionalmente.",
    problemDesc2: "El texto limpio resuelve esto. Preserva tu significado mientras elimina el ruido que viene con el habla natural.",
    rawLabel: "Transcripcion cruda",
    rawText: "\"Entonces, eh, basicamente lo que necesitamos hacer es, como, necesitamos resolver el, el cronograma para esto porque, tu sabes, el cliente esta, eh, esperando algo para, creo que era viernes? Si, viernes. Asi que probablemente deberiamos, um, reunir al equipo y, y resolver eso.\"",
    cleanLabel: "Texto limpio",
    cleanText: "\"Necesitamos finalizar el cronograma del proyecto. El cliente espera la entrega para el viernes. El equipo deberia alinearse en esto lo antes posible.\"",
    capLabel: "Capacidades",
    capTitle: "Que hace el texto limpio",
    capDesc: "El texto limpio no se trata de acortar. Se trata de clarificar. Cada transformacion preserva tu significado original mientras hace el texto profesional y facil de leer.",
    cap1Title: "Muletillas eliminadas",
    cap1Desc: "\"Um\", \"eh\", \"como\", \"tu sabes\" y otras muletillas verbales se eliminan. Lo que queda es la sustancia de lo que dijiste.",
    cap2Title: "Gramatica corregida",
    cap2Desc: "La gramatica hablada raramente es gramatica escrita. Sythio corrige inconsistencias de tiempo, concordancia sujeto-verbo y fragmentos de oracion sin cambiar tu significado.",
    cap3Title: "Estructura agregada",
    cap3Desc: "El habla continua se convierte en parrafos organizados. Los cambios de tema se reconocen y separan. El texto fluye logicamente de un punto al siguiente.",
    cap4Title: "Repeticion eliminada",
    cap4Desc: "Cuando dices lo mismo de tres formas diferentes, Sythio mantiene la version mas clara. Sin redundancia, sin frases circulares.",
    cap5Title: "Significado preservado",
    cap5Desc: "El texto limpio es fiel a tu intencion. Terminos tecnicos, nombres propios y detalles especificos se mantienen intactos. Solo se elimina el ruido.",
    cap6Title: "Listo para usar",
    cap6Desc: "La salida esta lista para publicar. Usalo en correos, documentos, informes o publicaciones sociales. Sin edicion adicional requerida.",
    processLabel: "Proceso",
    processTitle: "Como funciona",
    step1Title: "Graba o sube",
    step1Desc: "Captura tus pensamientos, dicta un memo, graba una conversacion o sube cualquier archivo de audio existente. Cualquier contenido hablado funciona.",
    step2Title: "Sythio procesa",
    step2Desc: "El audio se transcribe y luego se refina. Las muletillas se eliminan, la gramatica se corrige y el texto se reorganiza en un formato limpio y legible.",
    step3Title: "Obtiene texto limpio",
    step3Desc: "Recibe texto pulido que puedes copiar, exportar o compartir. Usalo tal cual o como punto de partida para documentos, articulos o mensajes mas largos.",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Donde brilla el texto limpio",
    useCasesDesc: "Cada vez que necesites palabras habladas en forma escrita, el texto limpio entrega un resultado que se lee naturalmente y se ve profesional.",
    uc1Title: "Notas de voz a contenido escrito",
    uc1Desc: "Dicta ideas en movimiento y recibe texto escrito limpio. Perfecto para redactar correos, publicaciones de blog, entradas de diario o documentacion sin sentarte ante un teclado.",
    uc2Title: "Notas de reunion para el registro",
    uc2Desc: "Produce notas de reunion limpias y profesionales que pueden compartirse con interesados que no estuvieron presentes.",
    uc3Title: "Notas de clase",
    uc3Desc: "Convierte clases grabadas en material de estudio legible. El texto limpio captura el contenido central sin los desvios verbales y repeticiones de la ensenanza en vivo.",
    uc4Title: "Redaccion de contenido",
    uc4Desc: "Habla tu primer borrador y deja que Sythio lo limpie. Escritores, fundadores y creadores usan texto limpio para ir de la idea al borrador pulido en minutos.",
    otherLabel: "Una grabacion, muchas salidas",
    otherTitle: "El texto limpio es solo una salida",
    otherDesc: "De la misma grabacion, Sythio tambien puede producir resumenes, listas de tareas, planes de accion y mas. Elige texto limpio cuando necesites una version escrita pulida de lo que se dijo.",
    otherAISummaries: "Resumenes IA",
    otherAISummariesDesc: "Cuando necesitas la esencia, no el texto completo. Los resumenes destilan grabaciones largas en panoramas concisos con puntos clave y decisiones.",
    otherTaskExtraction: "Extraccion de tareas",
    otherTaskExtractionDesc: "Cuando lo que necesitas es una lista de verificacion, no prosa. Las tareas se extraen directamente de la conversacion con responsables y plazos adjuntos.",
    otherActionPlans: "Planes de accion",
    otherActionPlansDesc: "Cuando la conversacion produjo una direccion que necesita estructura. Los planes de accion organizan los proximos pasos en secuencias priorizadas por fases.",
    relAISummaries: "Resumenes IA",
    relSpeakerDetection: "Deteccion de hablantes",
    relVoiceNotes: "Notas de voz",
    relProduct: "Producto",
    ctaTitle: "Hablalo. Sythio lo escribe.",
    ctaDesc: "Convierte cualquier audio hablado en texto pulido listo para publicar. Sin edicion requerida.",
  },
  fr: {
    label: "Fonctionnalites",
    title: "De l'audio brut au texte soigne et lisible",
    subtitle: "Sythio transforme l'audio parle en texte propre et bien structure. Mots de remplissage supprimes. Grammaire corrigee. Paragraphes formes. Le resultat se lit comme s'il avait ete ecrit, pas parle.",
    problemLabel: "Le probleme",
    problemTitle: "Les transcriptions brutes ne sont pas lisibles",
    problemDesc1: "Une transcription mot a mot capture tout ce que vous avez dit — y compris les parties que vous auriez prefere ne pas dire. Les faux departs, les mots repetes et les pensees incompletes rendent les transcriptions brutes penibles a lire.",
    problemDesc2: "Le texte propre resout ce probleme. Il preserve votre sens tout en eliminant le bruit qui accompagne la parole naturelle.",
    rawLabel: "Transcription brute",
    rawText: "\"Alors, euh, en gros ce qu'on doit faire c'est, genre, on doit resoudre le, le calendrier pour ca parce que, tu sais, le client est, euh, il attend quelque chose pour, je crois que c'etait vendredi ? Oui, vendredi. Donc on devrait probablement, euh, reunir l'equipe et, et regler ca.\"",
    cleanLabel: "Texte propre",
    cleanText: "\"Nous devons finaliser le calendrier du projet. Le client attend la livraison pour vendredi. L'equipe devrait s'aligner la-dessus des que possible.\"",
    capLabel: "Capacites",
    capTitle: "Ce que fait le texte propre",
    capDesc: "Le texte propre ne consiste pas a raccourcir. Il s'agit de clarifier. Chaque transformation preserve votre sens original tout en rendant le texte professionnel et facile a lire.",
    cap1Title: "Mots de remplissage supprimes",
    cap1Desc: "\"Euh\", \"genre\", \"tu sais\" et autres remplissages verbaux sont elimines. Ce qui reste est la substance de ce que vous avez dit.",
    cap2Title: "Grammaire corrigee",
    cap2Desc: "La grammaire orale est rarement la grammaire ecrite. Sythio corrige les incoherences de temps, la concordance sujet-verbe et les fragments de phrase sans changer votre sens.",
    cap3Title: "Structure ajoutee",
    cap3Desc: "La parole continue devient des paragraphes organises. Les changements de sujet sont reconnus et separes. Le texte coule logiquement d'un point a l'autre.",
    cap4Title: "Repetitions eliminees",
    cap4Desc: "Quand vous dites la meme chose de trois facons differentes, Sythio garde la version la plus claire. Pas de redondance.",
    cap5Title: "Sens preserve",
    cap5Desc: "Le texte propre est fidele a votre intention. Termes techniques, noms propres et details specifiques sont preserves. Seul le bruit est supprime.",
    cap6Title: "Pret a utiliser",
    cap6Desc: "Le resultat est pret a publier. Utilisez-le dans des emails, documents, rapports ou publications. Aucune edition supplementaire requise.",
    processLabel: "Processus",
    processTitle: "Comment ca fonctionne",
    step1Title: "Enregistrez ou telechargez",
    step1Desc: "Capturez vos pensees, dictez un memo, enregistrez une conversation ou telechargez tout fichier audio existant.",
    step2Title: "Sythio traite",
    step2Desc: "L'audio est transcrit puis affine. Les remplissages sont supprimes, la grammaire corrigee et le texte reorganise dans un format propre et lisible.",
    step3Title: "Obtenez du texte propre",
    step3Desc: "Recevez un texte soigne que vous pouvez copier, exporter ou partager. Utilisez-le tel quel ou comme point de depart pour des documents plus longs.",
    useCasesLabel: "Cas d'utilisation",
    useCasesTitle: "Ou le texte propre brille",
    useCasesDesc: "Chaque fois que vous avez besoin de mots parles sous forme ecrite, le texte propre fournit un resultat qui se lit naturellement et a l'air professionnel.",
    uc1Title: "Notes vocales en contenu ecrit",
    uc1Desc: "Dictez des idees en deplacement et recevez du texte ecrit propre. Parfait pour rediger des emails, articles de blog ou documentation.",
    uc2Title: "Notes de reunion pour le dossier",
    uc2Desc: "Produisez des notes de reunion propres et professionnelles partageables avec les parties prenantes absentes.",
    uc3Title: "Notes de cours",
    uc3Desc: "Transformez des cours enregistres en materiel d'etude lisible. Le texte propre capture le contenu essentiel sans les detours verbaux.",
    uc4Title: "Redaction de contenu",
    uc4Desc: "Parlez votre premier brouillon et laissez Sythio le nettoyer. Ecrivains, fondateurs et createurs utilisent le texte propre pour passer de l'idee au brouillon soigne en minutes.",
    otherLabel: "Un enregistrement, plusieurs sorties",
    otherTitle: "Le texte propre n'est qu'une sortie",
    otherDesc: "Du meme enregistrement, Sythio peut aussi produire des resumes, listes de taches, plans d'action et plus. Choisissez le texte propre quand vous avez besoin d'une version ecrite soignee.",
    otherAISummaries: "Resumes IA",
    otherAISummariesDesc: "Quand vous avez besoin de l'essentiel, pas du texte complet. Les resumes distillent de longs enregistrements en apercu concis.",
    otherTaskExtraction: "Extraction de taches",
    otherTaskExtractionDesc: "Quand ce dont vous avez besoin est une checklist, pas de la prose. Les taches sont extraites avec responsables et echeances.",
    otherActionPlans: "Plans d'action",
    otherActionPlansDesc: "Quand la conversation a produit une direction qui a besoin de structure. Les plans d'action organisent les prochaines etapes en sequences priorisees.",
    relAISummaries: "Resumes IA",
    relSpeakerDetection: "Detection des intervenants",
    relVoiceNotes: "Notes vocales",
    relProduct: "Produit",
    ctaTitle: "Parlez-le. Sythio l'ecrit.",
    ctaDesc: "Transformez tout audio parle en texte soigne pret a publier. Sans edition requise.",
  },
  pt: {
    label: "Recursos",
    title: "De audio bruto a texto polido e legivel",
    subtitle: "O Sythio transforma audio falado em texto limpo e bem estruturado. Palavras de preenchimento removidas. Gramatica corrigida. Paragrafos formados. O resultado se le como se fosse escrito, nao falado.",
    problemLabel: "O problema",
    problemTitle: "Transcricoes brutas nao sao legiveis",
    problemDesc1: "Uma transcricao palavra por palavra captura tudo o que voce disse — incluindo as partes que voce gostaria de nao ter dito. Falsos comecos, palavras repetidas e pensamentos incompletos tornam transcricoes brutas dolorosas de ler.",
    problemDesc2: "O texto limpo resolve isso. Ele preserva seu significado enquanto remove o ruido que vem com a fala natural.",
    rawLabel: "Transcricao bruta",
    rawText: "\"Entao, hm, basicamente o que precisamos fazer e, tipo, precisamos resolver o, o cronograma para isso porque, sabe, o cliente esta, hm, esperando algo para, acho que era sexta? Sim, sexta. Entao provavelmente deveriamos, hm, reunir a equipe e, e resolver isso.\"",
    cleanLabel: "Texto limpo",
    cleanText: "\"Precisamos finalizar o cronograma do projeto. O cliente espera a entrega ate sexta-feira. A equipe deve se alinhar nisso o mais rapido possivel.\"",
    capLabel: "Capacidades",
    capTitle: "O que o texto limpo faz",
    capDesc: "Texto limpo nao e sobre encurtar. E sobre clarificar. Cada transformacao preserva seu significado original enquanto torna o texto profissional e facil de ler.",
    cap1Title: "Palavras de preenchimento removidas",
    cap1Desc: "\"Hm\", \"tipo\", \"sabe\" e outros preenchimentos verbais sao eliminados. O que resta e a substancia do que voce disse.",
    cap2Title: "Gramatica corrigida",
    cap2Desc: "A gramatica falada raramente e gramatica escrita. O Sythio corrige inconsistencias de tempo, concordancia sujeito-verbo e fragmentos de frase sem alterar seu significado.",
    cap3Title: "Estrutura adicionada",
    cap3Desc: "A fala continua se torna paragrafos organizados. Mudancas de topico sao reconhecidas e separadas. O texto flui logicamente de um ponto ao seguinte.",
    cap4Title: "Repeticao eliminada",
    cap4Desc: "Quando voce diz a mesma coisa de tres formas diferentes, o Sythio mantem a versao mais clara. Sem redundancia.",
    cap5Title: "Significado preservado",
    cap5Desc: "O texto limpo e fiel a sua intencao. Termos tecnicos, nomes proprios e detalhes especificos sao mantidos intactos. Apenas o ruido e removido.",
    cap6Title: "Pronto para usar",
    cap6Desc: "O resultado esta pronto para publicacao. Use em emails, documentos, relatorios ou posts sociais. Sem edicao adicional necessaria.",
    processLabel: "Processo",
    processTitle: "Como funciona",
    step1Title: "Grave ou envie",
    step1Desc: "Capture seus pensamentos, dite um memorando, grave uma conversa ou envie qualquer arquivo de audio existente.",
    step2Title: "Sythio processa",
    step2Desc: "O audio e transcrito e depois refinado. Preenchimentos sao removidos, gramatica corrigida e o texto reorganizado em formato limpo e legivel.",
    step3Title: "Receba texto limpo",
    step3Desc: "Receba texto polido que voce pode copiar, exportar ou compartilhar. Use como esta ou como ponto de partida para documentos mais longos.",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Onde o texto limpo brilha",
    useCasesDesc: "Sempre que voce precisar de palavras faladas em forma escrita, o texto limpo entrega um resultado que se le naturalmente e parece profissional.",
    uc1Title: "Notas de voz para conteudo escrito",
    uc1Desc: "Dite ideias em movimento e receba texto escrito limpo de volta. Perfeito para rascunhar emails, posts de blog ou documentacao.",
    uc2Title: "Notas de reuniao para registro",
    uc2Desc: "Produza notas de reuniao limpas e profissionais compartilhaveis com stakeholders que nao estiveram presentes.",
    uc3Title: "Notas de aula",
    uc3Desc: "Transforme aulas gravadas em material de estudo legivel. O texto limpo captura o conteudo central sem os desvios verbais do ensino ao vivo.",
    uc4Title: "Redacao de conteudo",
    uc4Desc: "Fale seu primeiro rascunho e deixe o Sythio limpa-lo. Escritores, fundadores e criadores usam texto limpo para ir da ideia ao rascunho polido em minutos.",
    otherLabel: "Uma gravacao, varias saidas",
    otherTitle: "Texto limpo e apenas uma saida",
    otherDesc: "Da mesma gravacao, o Sythio tambem pode produzir resumos, listas de tarefas, planos de acao e mais. Escolha texto limpo quando precisar de uma versao escrita polida.",
    otherAISummaries: "Resumos IA",
    otherAISummariesDesc: "Quando voce precisa da essencia, nao do texto completo. Resumos destilam gravacoes longas em panoramas concisos.",
    otherTaskExtraction: "Extracao de tarefas",
    otherTaskExtractionDesc: "Quando o que voce precisa e um checklist, nao prosa. Tarefas sao extraidas com responsaveis e prazos.",
    otherActionPlans: "Planos de acao",
    otherActionPlansDesc: "Quando a conversa produziu uma direcao que precisa de estrutura. Planos de acao organizam proximos passos em sequencias priorizadas.",
    relAISummaries: "Resumos IA",
    relSpeakerDetection: "Deteccao de falantes",
    relVoiceNotes: "Notas de voz",
    relProduct: "Produto",
    ctaTitle: "Fale. O Sythio escreve.",
    ctaDesc: "Transforme qualquer audio falado em texto polido pronto para publicacao. Sem edicao necessaria.",
  },
  it: {
    label: "Funzionalita",
    title: "Da audio grezzo a testo curato e leggibile",
    subtitle: "Sythio trasforma l'audio parlato in testo pulito e ben strutturato. Parole riempitive rimosse. Grammatica corretta. Paragrafi formati. Il risultato si legge come se fosse scritto, non parlato.",
    problemLabel: "Il problema",
    problemTitle: "Le trascrizioni grezze non sono leggibili",
    problemDesc1: "Una trascrizione parola per parola cattura tutto cio che hai detto — comprese le parti che avresti preferito non dire. Falsi inizi, parole ripetute e pensieri incompleti rendono le trascrizioni grezze dolorose da leggere.",
    problemDesc2: "Il testo pulito risolve questo. Preserva il tuo significato rimuovendo il rumore che accompagna il parlato naturale.",
    rawLabel: "Trascrizione grezza",
    rawText: "\"Allora, ehm, praticamente quello che dobbiamo fare e, tipo, dobbiamo capire il, il calendario per questo perche, sai, il cliente sta, ehm, aspettando qualcosa per, credo fosse venerdi? Si, venerdi. Quindi dovremmo probabilmente, ehm, riunire il team e, e risolvere la cosa.\"",
    cleanLabel: "Testo pulito",
    cleanText: "\"Dobbiamo finalizzare il calendario del progetto. Il cliente si aspetta la consegna entro venerdi. Il team dovrebbe allinearsi su questo il prima possibile.\"",
    capLabel: "Capacita",
    capTitle: "Cosa fa il testo pulito",
    capDesc: "Il testo pulito non riguarda l'accorciamento. Riguarda la chiarificazione. Ogni trasformazione preserva il significato originale rendendo il testo professionale e facile da leggere.",
    cap1Title: "Parole riempitive rimosse",
    cap1Desc: "\"Ehm\", \"tipo\", \"sai\" e altri riempitivi verbali vengono eliminati. Cio che resta e la sostanza di cio che hai detto.",
    cap2Title: "Grammatica corretta",
    cap2Desc: "La grammatica parlata e raramente grammatica scritta. Sythio corregge incongruenze temporali, concordanza soggetto-verbo e frammenti di frase senza cambiare il significato.",
    cap3Title: "Struttura aggiunta",
    cap3Desc: "Il parlato continuo diventa paragrafi organizzati. I cambi di argomento vengono riconosciuti e separati. Il testo scorre logicamente da un punto all'altro.",
    cap4Title: "Ripetizioni eliminate",
    cap4Desc: "Quando dici la stessa cosa in tre modi diversi, Sythio mantiene la versione piu chiara. Nessuna ridondanza.",
    cap5Title: "Significato preservato",
    cap5Desc: "Il testo pulito e fedele alla tua intenzione. Termini tecnici, nomi propri e dettagli specifici sono mantenuti intatti. Solo il rumore viene rimosso.",
    cap6Title: "Pronto all'uso",
    cap6Desc: "Il risultato e pronto per la pubblicazione. Usalo in email, documenti, report o post social. Nessuna modifica aggiuntiva necessaria.",
    processLabel: "Processo",
    processTitle: "Come funziona",
    step1Title: "Registra o carica",
    step1Desc: "Cattura i tuoi pensieri, detta un promemoria, registra una conversazione o carica qualsiasi file audio esistente.",
    step2Title: "Sythio elabora",
    step2Desc: "L'audio viene trascritto e poi raffinato. I riempitivi vengono rimossi, la grammatica corretta e il testo riorganizzato in un formato pulito e leggibile.",
    step3Title: "Ottieni testo pulito",
    step3Desc: "Ricevi testo curato che puoi copiare, esportare o condividere. Usalo cosi com'e o come punto di partenza per documenti piu lunghi.",
    useCasesLabel: "Casi d'uso",
    useCasesTitle: "Dove brilla il testo pulito",
    useCasesDesc: "Ogni volta che hai bisogno di parole parlate in forma scritta, il testo pulito fornisce un risultato che si legge naturalmente e appare professionale.",
    uc1Title: "Note vocali in contenuto scritto",
    uc1Desc: "Detta idee in movimento e ricevi testo scritto pulito. Perfetto per redigere email, post di blog o documentazione.",
    uc2Title: "Note di riunione per il verbale",
    uc2Desc: "Produci note di riunione pulite e professionali condivisibili con stakeholder che non erano presenti.",
    uc3Title: "Appunti di lezione",
    uc3Desc: "Trasforma lezioni registrate in materiale di studio leggibile. Il testo pulito cattura il contenuto essenziale senza le divagazioni verbali.",
    uc4Title: "Redazione di contenuti",
    uc4Desc: "Parla la tua prima bozza e lascia che Sythio la pulisca. Scrittori, fondatori e creatori usano il testo pulito per passare dall'idea alla bozza curata in minuti.",
    otherLabel: "Una registrazione, molti output",
    otherTitle: "Il testo pulito e solo un output",
    otherDesc: "Dalla stessa registrazione, Sythio puo anche produrre riassunti, liste di attivita, piani d'azione e altro. Scegli il testo pulito quando hai bisogno di una versione scritta curata.",
    otherAISummaries: "Riassunti IA",
    otherAISummariesDesc: "Quando hai bisogno dell'essenza, non del testo completo. I riassunti distillano lunghe registrazioni in panoramiche concise.",
    otherTaskExtraction: "Estrazione attivita",
    otherTaskExtractionDesc: "Quando cio di cui hai bisogno e una checklist, non prosa. Le attivita vengono estratte con responsabili e scadenze.",
    otherActionPlans: "Piani d'azione",
    otherActionPlansDesc: "Quando la conversazione ha prodotto una direzione che ha bisogno di struttura. I piani d'azione organizzano i prossimi passi in sequenze prioritarie.",
    relAISummaries: "Riassunti IA",
    relSpeakerDetection: "Rilevamento parlanti",
    relVoiceNotes: "Note vocali",
    relProduct: "Prodotto",
    ctaTitle: "Parlalo. Sythio lo scrive.",
    ctaDesc: "Trasforma qualsiasi audio parlato in testo curato pronto per la pubblicazione. Nessuna modifica necessaria.",
  },
};

export default function CleanTextPage() {
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
            <TextReveal tag="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">{c.title}</TextReveal>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">{c.subtitle}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <MagneticHover><Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">{s("common.startFree")}</Link></MagneticHover>
              <Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">{s("common.allFeatures")}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem with Raw Transcripts */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.problemLabel}</p>
              <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.problemTitle}</TextReveal>
              <p className="mt-6 text-lg text-muted leading-relaxed">{c.problemDesc1}</p>
              <p className="mt-4 text-lg text-muted leading-relaxed">{c.problemDesc2}</p>
            </div>
            <div className="space-y-6">
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-4">{c.rawLabel}</p>
                <p className="text-sm text-muted leading-relaxed italic">{c.rawText}</p>
              </div>
              <div className="bg-background rounded-2xl border border-foreground/10 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground mb-4">{c.cleanLabel}</p>
                <p className="text-sm text-foreground leading-relaxed">{c.cleanText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Clean Text Does */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.capLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.capTitle}</TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">{c.capDesc}</p>
          </div>
          <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
            {[
              { t: c.cap1Title, d: c.cap1Desc }, { t: c.cap2Title, d: c.cap2Desc }, { t: c.cap3Title, d: c.cap3Desc },
              { t: c.cap4Title, d: c.cap4Desc }, { t: c.cap5Title, d: c.cap5Desc }, { t: c.cap6Title, d: c.cap6Desc },
            ].map((item) => (
              <div key={item.t} className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.d}</p>
              </div>
            ))}
          </GsapStagger>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.processLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.processTitle}</TextReveal>
          </div>
          <GsapStagger className="grid md:grid-cols-3 gap-8" stagger={0.08}>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.step1Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.step1Desc}</p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.step2Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.step2Desc}</p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.step3Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.step3Desc}</p>
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* Where Clean Text Shines */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.useCasesLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.useCasesTitle}</TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">{c.useCasesDesc}</p>
          </div>
          <GsapStagger className="grid sm:grid-cols-2 gap-6" stagger={0.08}>
            <ScrollScale><Link href="/use-cases/voice-notes" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc1Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.uc1Desc}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc2Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.uc2Desc}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/lectures" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc3Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.uc3Desc}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/brainstorming" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc4Title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.uc4Desc}</p>
            </Link></ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* Works With Other Features */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.otherLabel}</p>
            <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.otherTitle}</TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">{c.otherDesc}</p>
          </div>
          <GsapStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>
            <ScrollScale><Link href="/features/ai-summaries" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.otherAISummaries}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.otherAISummariesDesc}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/features/task-extraction" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.otherTaskExtraction}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.otherTaskExtractionDesc}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/features/action-plans" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.otherActionPlans}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.otherActionPlansDesc}</p>
            </Link></ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* Related */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">{s("common.related")}</h2>
          <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
            <ScrollScale><Link href="/features/ai-summaries" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relAISummaries}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/features/speaker-detection" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relSpeakerDetection}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/use-cases/voice-notes" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relVoiceNotes}</p>
            </Link></ScrollScale>
            <ScrollScale><Link href="/product" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.overview")}</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relProduct}</p>
            </Link></ScrollScale>
          </GsapStagger>
        </div>
      </section>

      {/* CTA */}
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
        </div>
      </section>
    </PageReveal>
  );
}
