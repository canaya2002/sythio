"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Use Cases",
    title: "Voice Notes That Become Something Useful",
    subtitle:
      "You record voice memos to capture ideas, tasks, and thoughts on the go. Sythio turns those recordings into clean text, organized ideas, key points, and structured summaries — so your voice notes actually get used.",
    problemTitle: "The Voice Note Graveyard",
    problemP1:
      "You had a great idea while driving. You recorded it. It is now sitting in a folder with 200 other voice memos you have never listened to again.",
    problemP2:
      "Voice notes are fast to record but slow to use. Replaying a three-minute memo to find one key point is tedious. So most recordings just sit there — ideas trapped in audio files, waiting to be forgotten.",
    problemP3:
      "The value was in the idea. The problem is the format.",
    createsTitle: "What Sythio Creates from Voice Notes",
    createsSubtitle:
      "Record once. Get structured output you can read, search, and act on immediately.",
    cleanTextTitle: "Clean Text",
    cleanTextDesc:
      "Your spoken words, cleaned up. Filler removed, grammar corrected, structure added. Readable text from messy speech.",
    ideasTitle: "Ideas",
    ideasDesc:
      "Individual ideas extracted and listed separately. What was one long stream of thought becomes distinct, actionable concepts.",
    keyPointsTitle: "Key Points",
    keyPointsDesc:
      "The essential takeaways from your recording, distilled into clear, scannable points. No fluff, no filler.",
    summaryTitle: "Summary",
    summaryDesc:
      "A concise overview of your entire voice note. Read it in 15 seconds instead of replaying three minutes of audio.",
    kindsTitle: "For Every Kind of Voice Note",
    kindsSubtitle:
      "Whether it is a 20-second reminder or a 10-minute brain dump, Sythio adapts its output to match the content.",
    quickIdeasTitle: "Quick Ideas",
    quickIdeasDesc:
      "A product feature, a gift idea, a solution to a problem — captured in a few seconds. Sythio cleans it up and gives you a clear, written version you can find later.",
    remindersTitle: "Reminders and To-dos",
    remindersDesc:
      "Spoke your to-do list into your phone while walking? Sythio extracts each task as a separate item, ready to be checked off.",
    brainDumpsTitle: "Brain Dumps",
    brainDumpsDesc:
      "When you need to get everything out of your head, just talk. Sythio takes the stream of consciousness and organizes it into categorized ideas and clear next steps.",
    reflectionsTitle: "Reflections and Journaling",
    reflectionsDesc:
      "Think through a decision, debrief after a conversation, or process your day out loud. Get a clean written version that captures the substance of your thinking.",
    relatedBrainstorming: "Brainstorming",
    relatedMeetings: "Meetings",
    relatedCleanText: "Clean Text",
    relatedIdeas: "Ideas",
    ctaTitle: "Your Voice Notes Deserve Better",
    ctaSubtitle:
      "Stop recording ideas into a void. Let Sythio turn every voice note into structured output you will actually use.",
  },
  es: {
    label: "Casos de uso",
    title: "Notas de voz que se convierten en algo útil",
    subtitle:
      "Grabas notas de voz para capturar ideas, tareas y pensamientos en movimiento. Sythio convierte esas grabaciones en texto limpio, ideas organizadas, puntos clave y resúmenes estructurados — para que tus notas de voz realmente se usen.",
    problemTitle: "El cementerio de notas de voz",
    problemP1:
      "Tuviste una gran idea mientras conducías. La grabaste. Ahora está en una carpeta con otras 200 notas de voz que nunca volviste a escuchar.",
    problemP2:
      "Las notas de voz son rápidas de grabar pero lentas de usar. Reproducir un memo de tres minutos para encontrar un punto clave es tedioso. Así que la mayoría de las grabaciones simplemente se quedan ahí — ideas atrapadas en archivos de audio, esperando ser olvidadas.",
    problemP3:
      "El valor estaba en la idea. El problema es el formato.",
    createsTitle: "Lo que Sythio crea a partir de notas de voz",
    createsSubtitle:
      "Graba una vez. Obtén resultados estructurados que puedes leer, buscar y usar de inmediato.",
    cleanTextTitle: "Texto limpio",
    cleanTextDesc:
      "Tus palabras habladas, limpias. Muletillas eliminadas, gramática corregida, estructura añadida. Texto legible a partir de habla desordenada.",
    ideasTitle: "Ideas",
    ideasDesc:
      "Ideas individuales extraídas y listadas por separado. Lo que era un largo flujo de pensamiento se convierte en conceptos distintos y accionables.",
    keyPointsTitle: "Puntos clave",
    keyPointsDesc:
      "Las conclusiones esenciales de tu grabación, destiladas en puntos claros y fáciles de escanear. Sin relleno, sin muletillas.",
    summaryTitle: "Resumen",
    summaryDesc:
      "Una visión concisa de toda tu nota de voz. Léelo en 15 segundos en lugar de reproducir tres minutos de audio.",
    kindsTitle: "Para todo tipo de nota de voz",
    kindsSubtitle:
      "Ya sea un recordatorio de 20 segundos o un vaciado mental de 10 minutos, Sythio adapta su resultado al contenido.",
    quickIdeasTitle: "Ideas rápidas",
    quickIdeasDesc:
      "Una función de producto, una idea de regalo, una solución a un problema — capturada en segundos. Sythio la limpia y te da una versión escrita clara que puedes encontrar después.",
    remindersTitle: "Recordatorios y pendientes",
    remindersDesc:
      "¿Dictaste tu lista de tareas en el teléfono mientras caminabas? Sythio extrae cada tarea como un elemento separado, listo para ser marcado.",
    brainDumpsTitle: "Vaciados mentales",
    brainDumpsDesc:
      "Cuando necesitas sacar todo de tu cabeza, simplemente habla. Sythio toma el flujo de conciencia y lo organiza en ideas categorizadas y próximos pasos claros.",
    reflectionsTitle: "Reflexiones y diario",
    reflectionsDesc:
      "Piensa en una decisión, analiza una conversación o procesa tu día en voz alta. Obtén una versión escrita limpia que captura la esencia de tu pensamiento.",
    relatedBrainstorming: "Lluvia de ideas",
    relatedMeetings: "Reuniones",
    relatedCleanText: "Texto limpio",
    relatedIdeas: "Ideas",
    ctaTitle: "Tus notas de voz merecen algo mejor",
    ctaSubtitle:
      "Deja de grabar ideas en el vacío. Deja que Sythio convierta cada nota de voz en resultados estructurados que realmente usarás.",
  },
  fr: {
    label: "Cas d'usage",
    title: "Des notes vocales qui deviennent quelque chose d'utile",
    subtitle:
      "Vous enregistrez des mémos vocaux pour capturer des idées, des tâches et des pensées en déplacement. Sythio transforme ces enregistrements en texte propre, idées organisées, points clés et résumés structurés — pour que vos notes vocales soient vraiment utilisées.",
    problemTitle: "Le cimetière des notes vocales",
    problemP1:
      "Vous avez eu une excellente idée en conduisant. Vous l'avez enregistrée. Elle se trouve maintenant dans un dossier avec 200 autres mémos vocaux que vous n'avez jamais réécoutés.",
    problemP2:
      "Les notes vocales sont rapides à enregistrer mais lentes à utiliser. Réécouter un mémo de trois minutes pour trouver un point clé est fastidieux. Alors la plupart des enregistrements restent là — des idées piégées dans des fichiers audio, en attente d'être oubliées.",
    problemP3:
      "La valeur était dans l'idée. Le problème est le format.",
    createsTitle: "Ce que Sythio crée à partir des notes vocales",
    createsSubtitle:
      "Enregistrez une fois. Obtenez un résultat structuré que vous pouvez lire, rechercher et utiliser immédiatement.",
    cleanTextTitle: "Texte propre",
    cleanTextDesc:
      "Vos mots parlés, nettoyés. Remplissage supprimé, grammaire corrigée, structure ajoutée. Du texte lisible à partir d'un discours désordonné.",
    ideasTitle: "Idées",
    ideasDesc:
      "Les idées individuelles extraites et listées séparément. Ce qui était un long flux de pensée devient des concepts distincts et exploitables.",
    keyPointsTitle: "Points clés",
    keyPointsDesc:
      "Les enseignements essentiels de votre enregistrement, distillés en points clairs et faciles à parcourir. Pas de superflu, pas de remplissage.",
    summaryTitle: "Résumé",
    summaryDesc:
      "Un aperçu concis de l'ensemble de votre note vocale. Lisez-le en 15 secondes au lieu de réécouter trois minutes d'audio.",
    kindsTitle: "Pour tous les types de notes vocales",
    kindsSubtitle:
      "Qu'il s'agisse d'un rappel de 20 secondes ou d'un déversement mental de 10 minutes, Sythio adapte son résultat au contenu.",
    quickIdeasTitle: "Idées rapides",
    quickIdeasDesc:
      "Une fonctionnalité produit, une idée cadeau, une solution à un problème — capturée en quelques secondes. Sythio la nettoie et vous donne une version écrite claire que vous retrouverez plus tard.",
    remindersTitle: "Rappels et tâches",
    remindersDesc:
      "Vous avez dicté votre liste de tâches dans votre téléphone en marchant ? Sythio extrait chaque tâche comme un élément séparé, prêt à être coché.",
    brainDumpsTitle: "Déversements mentaux",
    brainDumpsDesc:
      "Quand vous devez tout sortir de votre tête, parlez simplement. Sythio prend le flux de conscience et l'organise en idées catégorisées et prochaines étapes claires.",
    reflectionsTitle: "Réflexions et journaling",
    reflectionsDesc:
      "Réfléchissez à une décision, débriefez après une conversation ou traitez votre journée à voix haute. Obtenez une version écrite propre qui capture la substance de votre réflexion.",
    relatedBrainstorming: "Brainstorming",
    relatedMeetings: "Réunions",
    relatedCleanText: "Texte propre",
    relatedIdeas: "Idées",
    ctaTitle: "Vos notes vocales méritent mieux",
    ctaSubtitle:
      "Arrêtez d'enregistrer des idées dans le vide. Laissez Sythio transformer chaque note vocale en résultat structuré que vous utiliserez vraiment.",
  },
  pt: {
    label: "Casos de uso",
    title: "Notas de voz que se tornam algo útil",
    subtitle:
      "Você grava notas de voz para capturar ideias, tarefas e pensamentos em movimento. O Sythio transforma essas gravações em texto limpo, ideias organizadas, pontos-chave e resumos estruturados — para que suas notas de voz realmente sejam usadas.",
    problemTitle: "O cemitério de notas de voz",
    problemP1:
      "Você teve uma ótima ideia enquanto dirigia. Gravou. Agora está em uma pasta com outras 200 notas de voz que você nunca mais ouviu.",
    problemP2:
      "Notas de voz são rápidas de gravar, mas lentas de usar. Reproduzir um memo de três minutos para encontrar um ponto-chave é tedioso. Então a maioria das gravações fica lá — ideias presas em arquivos de áudio, esperando para serem esquecidas.",
    problemP3:
      "O valor estava na ideia. O problema é o formato.",
    createsTitle: "O que o Sythio cria a partir de notas de voz",
    createsSubtitle:
      "Grave uma vez. Obtenha resultados estruturados que você pode ler, pesquisar e usar imediatamente.",
    cleanTextTitle: "Texto limpo",
    cleanTextDesc:
      "Suas palavras faladas, limpas. Preenchimentos removidos, gramática corrigida, estrutura adicionada. Texto legível a partir de fala desorganizada.",
    ideasTitle: "Ideias",
    ideasDesc:
      "Ideias individuais extraídas e listadas separadamente. O que era um longo fluxo de pensamento se torna conceitos distintos e acionáveis.",
    keyPointsTitle: "Pontos-chave",
    keyPointsDesc:
      "As conclusões essenciais da sua gravação, destiladas em pontos claros e fáceis de escanear. Sem enrolação, sem preenchimento.",
    summaryTitle: "Resumo",
    summaryDesc:
      "Uma visão concisa de toda a sua nota de voz. Leia em 15 segundos em vez de reproduzir três minutos de áudio.",
    kindsTitle: "Para todo tipo de nota de voz",
    kindsSubtitle:
      "Seja um lembrete de 20 segundos ou um despejo mental de 10 minutos, o Sythio adapta seu resultado ao conteúdo.",
    quickIdeasTitle: "Ideias rápidas",
    quickIdeasDesc:
      "Uma funcionalidade de produto, uma ideia de presente, uma solução para um problema — capturada em segundos. O Sythio limpa e te dá uma versão escrita clara que você pode encontrar depois.",
    remindersTitle: "Lembretes e tarefas",
    remindersDesc:
      "Ditou sua lista de tarefas no celular enquanto caminhava? O Sythio extrai cada tarefa como um item separado, pronto para ser marcado.",
    brainDumpsTitle: "Despejos mentais",
    brainDumpsDesc:
      "Quando você precisa tirar tudo da cabeça, apenas fale. O Sythio pega o fluxo de consciência e organiza em ideias categorizadas e próximos passos claros.",
    reflectionsTitle: "Reflexões e diário",
    reflectionsDesc:
      "Pense em uma decisão, analise uma conversa ou processe seu dia em voz alta. Obtenha uma versão escrita limpa que captura a essência do seu pensamento.",
    relatedBrainstorming: "Brainstorming",
    relatedMeetings: "Reuniões",
    relatedCleanText: "Texto limpo",
    relatedIdeas: "Ideias",
    ctaTitle: "Suas notas de voz merecem algo melhor",
    ctaSubtitle:
      "Pare de gravar ideias no vazio. Deixe o Sythio transformar cada nota de voz em resultados estruturados que você realmente usará.",
  },
  it: {
    label: "Casi d'uso",
    title: "Note vocali che diventano qualcosa di utile",
    subtitle:
      "Registri memo vocali per catturare idee, compiti e pensieri in movimento. Sythio trasforma quelle registrazioni in testo pulito, idee organizzate, punti chiave e riassunti strutturati — perché le tue note vocali vengano davvero usate.",
    problemTitle: "Il cimitero delle note vocali",
    problemP1:
      "Hai avuto un'ottima idea mentre guidavi. L'hai registrata. Ora si trova in una cartella con altre 200 note vocali che non hai mai più riascoltato.",
    problemP2:
      "Le note vocali sono veloci da registrare ma lente da usare. Riascoltare un memo di tre minuti per trovare un punto chiave è noioso. Così la maggior parte delle registrazioni resta lì — idee intrappolate in file audio, in attesa di essere dimenticate.",
    problemP3:
      "Il valore era nell'idea. Il problema è il formato.",
    createsTitle: "Cosa crea Sythio dalle note vocali",
    createsSubtitle:
      "Registra una volta. Ottieni risultati strutturati che puoi leggere, cercare e usare immediatamente.",
    cleanTextTitle: "Testo pulito",
    cleanTextDesc:
      "Le tue parole parlate, ripulite. Riempitivi rimossi, grammatica corretta, struttura aggiunta. Testo leggibile da un discorso disordinato.",
    ideasTitle: "Idee",
    ideasDesc:
      "Idee individuali estratte e elencate separatamente. Quello che era un lungo flusso di pensiero diventa concetti distinti e azionabili.",
    keyPointsTitle: "Punti chiave",
    keyPointsDesc:
      "Le conclusioni essenziali dalla tua registrazione, distillate in punti chiari e facili da scansionare. Niente fronzoli, niente riempitivi.",
    summaryTitle: "Riassunto",
    summaryDesc:
      "Una panoramica concisa dell'intera nota vocale. Leggila in 15 secondi invece di riascoltare tre minuti di audio.",
    kindsTitle: "Per ogni tipo di nota vocale",
    kindsSubtitle:
      "Che si tratti di un promemoria di 20 secondi o di uno sfogo mentale di 10 minuti, Sythio adatta il suo risultato al contenuto.",
    quickIdeasTitle: "Idee rapide",
    quickIdeasDesc:
      "Una funzionalità di prodotto, un'idea regalo, una soluzione a un problema — catturata in pochi secondi. Sythio la ripulisce e ti dà una versione scritta chiara che puoi ritrovare dopo.",
    remindersTitle: "Promemoria e cose da fare",
    remindersDesc:
      "Hai dettato la tua lista di cose da fare nel telefono mentre camminavi? Sythio estrae ogni compito come elemento separato, pronto per essere spuntato.",
    brainDumpsTitle: "Sfoghi mentali",
    brainDumpsDesc:
      "Quando hai bisogno di tirare fuori tutto dalla testa, parla e basta. Sythio prende il flusso di coscienza e lo organizza in idee categorizzate e prossimi passi chiari.",
    reflectionsTitle: "Riflessioni e diario",
    reflectionsDesc:
      "Rifletti su una decisione, analizza una conversazione o elabora la tua giornata ad alta voce. Ottieni una versione scritta pulita che cattura la sostanza del tuo pensiero.",
    relatedBrainstorming: "Brainstorming",
    relatedMeetings: "Riunioni",
    relatedCleanText: "Testo pulito",
    relatedIdeas: "Idee",
    ctaTitle: "Le tue note vocali meritano di meglio",
    ctaSubtitle:
      "Smetti di registrare idee nel vuoto. Lascia che Sythio trasformi ogni nota vocale in risultati strutturati che userai davvero.",
  },
};

export default function VoiceNotesPage() {
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

      {/* What Sythio Creates from Voice Notes */}
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
                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.cleanTextTitle}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.cleanTextDesc}</p>
              </div>
            </ScrollScale>
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

      {/* For Every Kind of Voice Note */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            {c.kindsTitle}
          </TextReveal>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-14">
            {c.kindsSubtitle}
          </p>
          <GsapStagger stagger={0.08} className="grid sm:grid-cols-2 gap-6">
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.quickIdeasTitle}</h3>
                <p className="text-base text-muted leading-relaxed">{c.quickIdeasDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.remindersTitle}</h3>
                <p className="text-base text-muted leading-relaxed">{c.remindersDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.brainDumpsTitle}</h3>
                <p className="text-base text-muted leading-relaxed">{c.brainDumpsDesc}</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.reflectionsTitle}</h3>
                <p className="text-base text-muted leading-relaxed">{c.reflectionsDesc}</p>
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
              <Link href="/use-cases/brainstorming" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedBrainstorming}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/use-cases/meetings" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedMeetings}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/features/clean-text" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedCleanText}</p>
              </Link>
            </ScrollScale>
            <ScrollScale>
              <Link href="/features/ideas" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p>
                <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relatedIdeas}</p>
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
