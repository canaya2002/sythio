"use client";

import Link from "next/link";
import { useLanguage } from "../components/i18n/language-context";
import type { Locale } from "../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Audio to Report",
    title: "Convert Audio into Executive Reports",
    subtitle:
      "Record a meeting, upload a call, or capture a briefing. Sythio listens, analyzes the content, and delivers a polished executive report — complete with findings, context, and recommendations.",
    howTitle: "Three steps to a finished report",
    howSubtitle:
      "No formatting struggles. No manual writing. Sythio transforms raw audio into a report you can send to stakeholders immediately.",
    step1Title: "Record or upload",
    step1Desc:
      "Capture audio directly inside Sythio or upload an existing recording. Strategy sessions, project reviews, client debriefs — any format works.",
    step2Title: "Sythio structures the content",
    step2Desc:
      "Speaker detection identifies contributors. The content is analyzed for key findings, decisions, outcomes, and recommendations.",
    step3Title: "Get your executive report",
    step3Desc:
      "A professional, structured report is ready in seconds. Review it, export it, or share it with leadership — the information is organized and presentation-ready.",
    whatLabel: "What You Get",
    whatTitle: "What a Sythio Report Includes",
    whatSubtitle:
      "Not a raw transcript reformatted as paragraphs. A genuine executive report — structured, professional, and built from real understanding of the conversation.",
    feat1Title: "Executive summary",
    feat1Desc:
      "A concise overview of the entire conversation, highlighting the most important outcomes and conclusions for quick reading.",
    feat2Title: "Key findings",
    feat2Desc:
      "Major insights, data points, and conclusions surfaced during the discussion are organized and clearly presented.",
    feat3Title: "Decisions and outcomes",
    feat3Desc:
      "Every decision reached during the conversation is documented with context, reasoning, and the parties involved.",
    feat4Title: "Recommendations",
    feat4Desc:
      "Suggested next steps and recommendations mentioned in the discussion are extracted and formatted for action.",
    moreLabel: "One Recording, Many Outputs",
    moreTitle: "Not Just a Report",
    moreSubtitle:
      "An executive report is one way to process a conversation. The same recording can also produce summaries, task lists, action plans, and more — all from a single upload.",
    more1Title: "Summaries",
    more1Desc:
      "A clear overview of the full conversation — decisions, topics, and takeaways.",
    more2Title: "Task lists",
    more2Desc:
      "Extract every commitment and action item, with owners when speakers are detected.",
    more3Title: "Action plans",
    more3Desc:
      "Structured, phased plans with priorities and responsibilities — built from your conversation.",
    more4Title: "All 9 formats",
    more4Desc:
      "Summaries, tasks, action plans, reports, messages, study notes, ideas, and more.",
    versatileLabel: "Versatile by Design",
    versatileTitle: "Works with Any Audio",
    versatileSubtitle:
      "Sythio adapts to the content. Whether it is a quick debrief or a two-hour board meeting, the report reflects the depth and scope of the original recording.",
    use1Title: "Strategy sessions",
    use1Desc:
      "Long-form planning discussions turned into structured reports with clear outcomes and next steps.",
    use2Title: "Client debriefs",
    use2Desc:
      "Project updates and client feedback organized into a professional report ready for stakeholders.",
    use3Title: "Board meetings",
    use3Desc:
      "Comprehensive meeting coverage documented with decisions, action items, and strategic direction.",
    use4Title: "Project reviews",
    use4Desc:
      "Status updates, blockers, and milestones captured in a clean report format for leadership.",
    outcome: "Outcome",
    rel1Name: "Reports",
    rel2Name: "Audio to Summary",
    rel3Name: "Audio to Action Plan",
    rel4Name: "Meetings",
    ctaTitle: "Stop writing reports manually. Start generating them.",
    ctaSubtitle:
      "Every recording becomes a polished executive report — in seconds, not hours.",
  },
  es: {
    label: "Audio a Informe",
    title: "Convierte audio en informes ejecutivos",
    subtitle:
      "Graba una reunion, sube una llamada o captura un briefing. Sythio escucha, analiza el contenido y entrega un informe ejecutivo pulido — completo con hallazgos, contexto y recomendaciones.",
    howTitle: "Tres pasos para un informe terminado",
    howSubtitle:
      "Sin problemas de formato. Sin escritura manual. Sythio transforma audio crudo en un informe que puedes enviar a las partes interesadas inmediatamente.",
    step1Title: "Graba o sube",
    step1Desc:
      "Captura audio directamente en Sythio o sube una grabacion existente. Sesiones estrategicas, revisiones de proyecto, debriefings con clientes — cualquier formato funciona.",
    step2Title: "Sythio estructura el contenido",
    step2Desc:
      "La deteccion de hablantes identifica a los contribuyentes. El contenido se analiza para hallazgos clave, decisiones, resultados y recomendaciones.",
    step3Title: "Obtiene tu informe ejecutivo",
    step3Desc:
      "Un informe profesional y estructurado esta listo en segundos. Revisalo, exportalo o compartelo con la direccion — la informacion esta organizada y lista para presentar.",
    whatLabel: "Lo que obtienes",
    whatTitle: "Lo que incluye un informe de Sythio",
    whatSubtitle:
      "No es una transcripcion reformateada como parrafos. Un verdadero informe ejecutivo — estructurado, profesional y construido desde la comprension real de la conversacion.",
    feat1Title: "Resumen ejecutivo",
    feat1Desc:
      "Una vision concisa de toda la conversacion, destacando los resultados y conclusiones mas importantes para lectura rapida.",
    feat2Title: "Hallazgos clave",
    feat2Desc:
      "Ideas principales, datos y conclusiones surgidas durante la discusion se organizan y presentan claramente.",
    feat3Title: "Decisiones y resultados",
    feat3Desc:
      "Cada decision alcanzada durante la conversacion se documenta con contexto, razonamiento y las partes involucradas.",
    feat4Title: "Recomendaciones",
    feat4Desc:
      "Los proximos pasos sugeridos y recomendaciones mencionados en la discusion se extraen y formatean para la accion.",
    moreLabel: "Una grabacion, muchos resultados",
    moreTitle: "No solo un informe",
    moreSubtitle:
      "Un informe ejecutivo es una forma de procesar una conversacion. La misma grabacion tambien puede producir resumenes, listas de tareas, planes de accion y mas — todo desde una sola carga.",
    more1Title: "Resumenes",
    more1Desc:
      "Una vision clara de toda la conversacion — decisiones, temas y conclusiones.",
    more2Title: "Listas de tareas",
    more2Desc:
      "Extrae cada compromiso y elemento de accion, con responsables cuando se detectan hablantes.",
    more3Title: "Planes de accion",
    more3Desc:
      "Planes estructurados y por fases con prioridades y responsabilidades — construidos desde tu conversacion.",
    more4Title: "Los 9 formatos",
    more4Desc:
      "Resumenes, tareas, planes de accion, informes, mensajes, notas de estudio, ideas y mas.",
    versatileLabel: "Versatil por diseno",
    versatileTitle: "Funciona con cualquier audio",
    versatileSubtitle:
      "Sythio se adapta al contenido. Ya sea un debrief rapido o una reunion de directiva de dos horas, el informe refleja la profundidad y alcance de la grabacion original.",
    use1Title: "Sesiones estrategicas",
    use1Desc:
      "Discusiones de planificacion extensas convertidas en informes estructurados con resultados claros y proximos pasos.",
    use2Title: "Debriefings con clientes",
    use2Desc:
      "Actualizaciones de proyecto y retroalimentacion del cliente organizados en un informe profesional listo para las partes interesadas.",
    use3Title: "Reuniones de directiva",
    use3Desc:
      "Cobertura integral de la reunion documentada con decisiones, elementos de accion y direccion estrategica.",
    use4Title: "Revisiones de proyecto",
    use4Desc:
      "Actualizaciones de estado, bloqueos y hitos capturados en un formato de informe limpio para la direccion.",
    outcome: "Resultado",
    rel1Name: "Informes",
    rel2Name: "Audio a Resumen",
    rel3Name: "Audio a Plan de Accion",
    rel4Name: "Reuniones",
    ctaTitle: "Deja de escribir informes manualmente. Empieza a generarlos.",
    ctaSubtitle:
      "Cada grabacion se convierte en un informe ejecutivo pulido — en segundos, no en horas.",
  },
  fr: {
    label: "Audio en Rapport",
    title: "Convertissez l'audio en rapports executifs",
    subtitle:
      "Enregistrez une reunion, telechargez un appel ou capturez un briefing. Sythio ecoute, analyse le contenu et fournit un rapport executif soigne — complet avec conclusions, contexte et recommandations.",
    howTitle: "Trois etapes pour un rapport fini",
    howSubtitle:
      "Pas de problemes de mise en forme. Pas d'ecriture manuelle. Sythio transforme l'audio brut en un rapport que vous pouvez envoyer aux parties prenantes immediatement.",
    step1Title: "Enregistrez ou telechargez",
    step1Desc:
      "Capturez l'audio directement dans Sythio ou telechargez un enregistrement existant. Sessions strategiques, revues de projet, debriefings clients — tout format fonctionne.",
    step2Title: "Sythio structure le contenu",
    step2Desc:
      "La detection des locuteurs identifie les contributeurs. Le contenu est analyse pour les conclusions cles, decisions, resultats et recommandations.",
    step3Title: "Obtenez votre rapport executif",
    step3Desc:
      "Un rapport professionnel et structure est pret en quelques secondes. Consultez-le, exportez-le ou partagez-le avec la direction — l'information est organisee et prete a presenter.",
    whatLabel: "Ce que vous obtenez",
    whatTitle: "Ce qu'inclut un rapport Sythio",
    whatSubtitle:
      "Pas une transcription brute reformatee en paragraphes. Un veritable rapport executif — structure, professionnel et construit a partir d'une comprehension reelle de la conversation.",
    feat1Title: "Resume executif",
    feat1Desc:
      "Une vue d'ensemble concise de toute la conversation, mettant en evidence les resultats et conclusions les plus importants pour une lecture rapide.",
    feat2Title: "Conclusions cles",
    feat2Desc:
      "Les insights majeurs, donnees et conclusions qui ont emerge lors de la discussion sont organises et clairement presentes.",
    feat3Title: "Decisions et resultats",
    feat3Desc:
      "Chaque decision atteinte lors de la conversation est documentee avec contexte, raisonnement et parties impliquees.",
    feat4Title: "Recommandations",
    feat4Desc:
      "Les prochaines etapes suggerees et recommandations mentionnees dans la discussion sont extraites et formatees pour l'action.",
    moreLabel: "Un enregistrement, plusieurs resultats",
    moreTitle: "Pas qu'un rapport",
    moreSubtitle:
      "Un rapport executif est une facon de traiter une conversation. Le meme enregistrement peut aussi produire des resumes, listes de taches, plans d'action et plus — le tout a partir d'un seul envoi.",
    more1Title: "Resumes",
    more1Desc:
      "Une vue d'ensemble claire de toute la conversation — decisions, sujets et conclusions.",
    more2Title: "Listes de taches",
    more2Desc:
      "Extrayez chaque engagement et element d'action, avec les responsables quand les locuteurs sont detectes.",
    more3Title: "Plans d'action",
    more3Desc:
      "Plans structures et phases avec priorites et responsabilites — construits a partir de votre conversation.",
    more4Title: "Les 9 formats",
    more4Desc:
      "Resumes, taches, plans d'action, rapports, messages, notes d'etude, idees et plus.",
    versatileLabel: "Polyvalent par conception",
    versatileTitle: "Fonctionne avec tout audio",
    versatileSubtitle:
      "Sythio s'adapte au contenu. Qu'il s'agisse d'un debrief rapide ou d'une reunion du conseil de deux heures, le rapport reflete la profondeur et la portee de l'enregistrement original.",
    use1Title: "Sessions strategiques",
    use1Desc:
      "Discussions de planification longues transformees en rapports structures avec des resultats clairs et des prochaines etapes.",
    use2Title: "Debriefings clients",
    use2Desc:
      "Mises a jour de projet et retours clients organises en un rapport professionnel pret pour les parties prenantes.",
    use3Title: "Reunions du conseil",
    use3Desc:
      "Couverture complete de la reunion documentee avec decisions, elements d'action et direction strategique.",
    use4Title: "Revues de projet",
    use4Desc:
      "Mises a jour de statut, blocages et jalons captures dans un format de rapport propre pour la direction.",
    outcome: "Resultat",
    rel1Name: "Rapports",
    rel2Name: "Audio en Resume",
    rel3Name: "Audio en Plan d'action",
    rel4Name: "Reunions",
    ctaTitle: "Arretez de rediger des rapports manuellement. Generez-les.",
    ctaSubtitle:
      "Chaque enregistrement devient un rapport executif soigne — en secondes, pas en heures.",
  },
  pt: {
    label: "Audio para Relatorio",
    title: "Converta audio em relatorios executivos",
    subtitle:
      "Grave uma reuniao, envie uma chamada ou capture um briefing. Sythio ouve, analisa o conteudo e entrega um relatorio executivo polido — completo com descobertas, contexto e recomendacoes.",
    howTitle: "Tres passos para um relatorio pronto",
    howSubtitle:
      "Sem problemas de formatacao. Sem escrita manual. Sythio transforma audio bruto em um relatorio que voce pode enviar aos stakeholders imediatamente.",
    step1Title: "Grave ou envie",
    step1Desc:
      "Capture audio diretamente no Sythio ou envie uma gravacao existente. Sessoes estrategicas, revisoes de projeto, debriefings com clientes — qualquer formato funciona.",
    step2Title: "Sythio estrutura o conteudo",
    step2Desc:
      "A deteccao de falantes identifica os contribuidores. O conteudo e analisado para descobertas-chave, decisoes, resultados e recomendacoes.",
    step3Title: "Receba seu relatorio executivo",
    step3Desc:
      "Um relatorio profissional e estruturado esta pronto em segundos. Revise-o, exporte-o ou compartilhe-o com a lideranca — a informacao esta organizada e pronta para apresentacao.",
    whatLabel: "O que voce recebe",
    whatTitle: "O que um relatorio do Sythio inclui",
    whatSubtitle:
      "Nao e uma transcricao bruta reformatada como paragrafos. Um verdadeiro relatorio executivo — estruturado, profissional e construido a partir da compreensao real da conversa.",
    feat1Title: "Resumo executivo",
    feat1Desc:
      "Uma visao concisa de toda a conversa, destacando os resultados e conclusoes mais importantes para leitura rapida.",
    feat2Title: "Descobertas-chave",
    feat2Desc:
      "Insights importantes, dados e conclusoes que surgiram durante a discussao sao organizados e claramente apresentados.",
    feat3Title: "Decisoes e resultados",
    feat3Desc:
      "Cada decisao alcancada durante a conversa e documentada com contexto, raciocinio e as partes envolvidas.",
    feat4Title: "Recomendacoes",
    feat4Desc:
      "Proximos passos sugeridos e recomendacoes mencionados na discussao sao extraidos e formatados para acao.",
    moreLabel: "Uma gravacao, muitos resultados",
    moreTitle: "Nao apenas um relatorio",
    moreSubtitle:
      "Um relatorio executivo e uma forma de processar uma conversa. A mesma gravacao tambem pode produzir resumos, listas de tarefas, planos de acao e mais — tudo a partir de um unico envio.",
    more1Title: "Resumos",
    more1Desc:
      "Uma visao clara de toda a conversa — decisoes, temas e conclusoes.",
    more2Title: "Listas de tarefas",
    more2Desc:
      "Extraia cada compromisso e item de acao, com responsaveis quando falantes sao detectados.",
    more3Title: "Planos de acao",
    more3Desc:
      "Planos estruturados e faseados com prioridades e responsabilidades — construidos a partir da sua conversa.",
    more4Title: "Todos os 9 formatos",
    more4Desc:
      "Resumos, tarefas, planos de acao, relatorios, mensagens, notas de estudo, ideias e mais.",
    versatileLabel: "Versatil por design",
    versatileTitle: "Funciona com qualquer audio",
    versatileSubtitle:
      "Sythio se adapta ao conteudo. Seja um debrief rapido ou uma reuniao de conselho de duas horas, o relatorio reflete a profundidade e o escopo da gravacao original.",
    use1Title: "Sessoes estrategicas",
    use1Desc:
      "Discussoes de planejamento extensas transformadas em relatorios estruturados com resultados claros e proximos passos.",
    use2Title: "Debriefings com clientes",
    use2Desc:
      "Atualizacoes de projeto e feedback do cliente organizados em um relatorio profissional pronto para stakeholders.",
    use3Title: "Reunioes de conselho",
    use3Desc:
      "Cobertura abrangente da reuniao documentada com decisoes, itens de acao e direcao estrategica.",
    use4Title: "Revisoes de projeto",
    use4Desc:
      "Atualizacoes de status, bloqueios e marcos capturados em um formato de relatorio limpo para a lideranca.",
    outcome: "Resultado",
    rel1Name: "Relatorios",
    rel2Name: "Audio para Resumo",
    rel3Name: "Audio para Plano de Acao",
    rel4Name: "Reunioes",
    ctaTitle: "Pare de escrever relatorios manualmente. Comece a gera-los.",
    ctaSubtitle:
      "Cada gravacao se torna um relatorio executivo polido — em segundos, nao em horas.",
  },
  it: {
    label: "Audio in Report",
    title: "Converti l'audio in report esecutivi",
    subtitle:
      "Registra una riunione, carica una chiamata o cattura un briefing. Sythio ascolta, analizza il contenuto e fornisce un report esecutivo raffinato — completo di risultati, contesto e raccomandazioni.",
    howTitle: "Tre passaggi per un report completo",
    howSubtitle:
      "Nessun problema di formattazione. Nessuna scrittura manuale. Sythio trasforma l'audio grezzo in un report che puoi inviare agli stakeholder immediatamente.",
    step1Title: "Registra o carica",
    step1Desc:
      "Cattura l'audio direttamente in Sythio o carica una registrazione esistente. Sessioni strategiche, revisioni di progetto, debrief con clienti — qualsiasi formato funziona.",
    step2Title: "Sythio struttura il contenuto",
    step2Desc:
      "Il rilevamento dei parlanti identifica i contributori. Il contenuto viene analizzato per risultati chiave, decisioni, esiti e raccomandazioni.",
    step3Title: "Ottieni il tuo report esecutivo",
    step3Desc:
      "Un report professionale e strutturato e pronto in pochi secondi. Consultalo, esportalo o condividilo con la dirigenza — le informazioni sono organizzate e pronte per la presentazione.",
    whatLabel: "Cosa ottieni",
    whatTitle: "Cosa include un report Sythio",
    whatSubtitle:
      "Non una trascrizione grezza riformattata come paragrafi. Un vero report esecutivo — strutturato, professionale e costruito da una reale comprensione della conversazione.",
    feat1Title: "Sommario esecutivo",
    feat1Desc:
      "Una panoramica concisa dell'intera conversazione, evidenziando i risultati e le conclusioni piu importanti per una lettura rapida.",
    feat2Title: "Risultati chiave",
    feat2Desc:
      "Insight importanti, dati e conclusioni emerse durante la discussione sono organizzati e chiaramente presentati.",
    feat3Title: "Decisioni e risultati",
    feat3Desc:
      "Ogni decisione raggiunta durante la conversazione e documentata con contesto, ragionamento e parti coinvolte.",
    feat4Title: "Raccomandazioni",
    feat4Desc:
      "I prossimi passi suggeriti e le raccomandazioni menzionate nella discussione vengono estratti e formattati per l'azione.",
    moreLabel: "Una registrazione, molti risultati",
    moreTitle: "Non solo un report",
    moreSubtitle:
      "Un report esecutivo e un modo per elaborare una conversazione. La stessa registrazione puo anche produrre riassunti, liste di attivita, piani d'azione e altro — il tutto da un singolo caricamento.",
    more1Title: "Riassunti",
    more1Desc:
      "Una panoramica chiara dell'intera conversazione — decisioni, argomenti e conclusioni.",
    more2Title: "Liste di attivita",
    more2Desc:
      "Estrai ogni impegno e elemento d'azione, con responsabili quando i parlanti vengono rilevati.",
    more3Title: "Piani d'azione",
    more3Desc:
      "Piani strutturati e per fasi con priorita e responsabilita — costruiti dalla tua conversazione.",
    more4Title: "Tutti i 9 formati",
    more4Desc:
      "Riassunti, attivita, piani d'azione, report, messaggi, note di studio, idee e altro.",
    versatileLabel: "Versatile per design",
    versatileTitle: "Funziona con qualsiasi audio",
    versatileSubtitle:
      "Sythio si adatta al contenuto. Che si tratti di un debrief rapido o di una riunione del consiglio di due ore, il report riflette la profondita e la portata della registrazione originale.",
    use1Title: "Sessioni strategiche",
    use1Desc:
      "Discussioni di pianificazione lunghe trasformate in report strutturati con risultati chiari e prossimi passi.",
    use2Title: "Debrief con clienti",
    use2Desc:
      "Aggiornamenti di progetto e feedback dei clienti organizzati in un report professionale pronto per gli stakeholder.",
    use3Title: "Riunioni del consiglio",
    use3Desc:
      "Copertura completa della riunione documentata con decisioni, elementi d'azione e direzione strategica.",
    use4Title: "Revisioni di progetto",
    use4Desc:
      "Aggiornamenti di stato, blocchi e milestone catturati in un formato di report pulito per la dirigenza.",
    outcome: "Risultato",
    rel1Name: "Report",
    rel2Name: "Audio in Riassunto",
    rel3Name: "Audio in Piano d'azione",
    rel4Name: "Riunioni",
    ctaTitle: "Smetti di scrivere report manualmente. Inizia a generarli.",
    ctaSubtitle:
      "Ogni registrazione diventa un report esecutivo raffinato — in secondi, non in ore.",
  },
};

export default function AudioToReportPage() {
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

      {/* ─── How It Works ─── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{s("common.howItWorks")}</p>
          <TextReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.howTitle}</h2></TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">{c.howSubtitle}</p>
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

      {/* ─── What a Sythio Report Includes ─── */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.whatLabel}</p>
          <TextReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.whatTitle}</h2></TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">{c.whatSubtitle}</p>
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

      {/* ─── Not Just a Report ─── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.moreLabel}</p>
            <TextReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.moreTitle}</h2></TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">{c.moreSubtitle}</p>
          </div>
          <GsapStagger stagger={0.08}>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: c.more1Title, description: c.more1Desc, href: "/audio-to-summary" },
                { title: c.more2Title, description: c.more2Desc, href: "/audio-to-tasks" },
                { title: c.more3Title, description: c.more3Desc, href: "/audio-to-action-plan" },
                { title: c.more4Title, description: c.more4Desc, href: "/features" },
              ].map((item) => (
                <ScrollScale key={item.title}>
                  <Link href={item.href} className="group block p-7 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-3">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">{s("common.learnMore")} &rarr;</span>
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{c.versatileLabel}</p>
          <TextReveal><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.versatileTitle}</h2></TextReveal>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">{c.versatileSubtitle}</p>
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
          <TextReveal><h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">{s("common.related")}</h2></TextReveal>
          <GsapStagger stagger={0.08}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollScale><Link href="/features/reports" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel1Name}</p></Link></ScrollScale>
              <ScrollScale><Link href="/audio-to-summary" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel2Name}</p></Link></ScrollScale>
              <ScrollScale><Link href="/audio-to-action-plan" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{c.outcome}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel3Name}</p></Link></ScrollScale>
              <ScrollScale><Link href="/use-cases/meetings" className="h-full group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.rel4Name}</p></Link></ScrollScale>
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── CTA ─── */}
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
