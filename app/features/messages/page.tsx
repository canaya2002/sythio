"use client";
import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Features", title: "Follow-Up Messages Written for You",
    subtitle: "Sythio drafts professional follow-up emails, recap messages, and thank-you notes directly from your recordings. The message captures what was discussed, what was agreed, and what comes next — ready to send.",
    probLabel: "The Problem", probTitle: "Follow-Ups That Never Get Sent",
    probDesc1: "You leave a meeting knowing you should send a recap. You plan to do it right after. But something else comes up. An hour later, the details are fuzzy. A day later, it feels too late. The follow-up never happens.",
    probDesc2: "Sythio solves this by drafting the follow-up immediately after the recording is processed. The message is ready before you even think about it.",
    exLabel: "Example Message",
    exGreeting: "Hi team,", exIntro: "Thanks for the productive session today. Here's a quick recap:",
    exBody: "We agreed to move the launch date to August 1 to accommodate the design review. Sarah will lead the vendor evaluation and share findings by Friday. The Q3 budget was approved at $240K.",
    exNext: "Next steps: Carlos to prep the board deck by March 28. Everyone to review the updated timeline by EOD Wednesday.",
    exClose: "Let me know if I missed anything.",
    diffLabel: "What Makes It Different", diffTitle: "Not a Generic Template. Your Conversation.",
    diffDesc: "Every message is generated from what was actually said. Sythio does not fill in blanks. It writes a message that accurately reflects the specific conversation, decisions, and next steps.",
    d1Title: "Accurate Recaps", d1Desc: "The message reflects what was actually discussed. Key decisions, agreements, and commitments are included. Nothing is fabricated.",
    d2Title: "Professional Tone", d2Desc: "Messages are written in a professional but human tone. Ready to send to clients, colleagues, or leadership without awkward phrasing.",
    d3Title: "Action Items Included", d3Desc: "Next steps and owner assignments are woven into the message naturally. Recipients know exactly what is expected of them.",
    processLabel: "Process", processTitle: "How It Works",
    s1Title: "Record or Upload", s1Desc: "Record your meeting, client call, or conversation directly in Sythio, or upload an existing recording.",
    s2Title: "Sythio Drafts", s2Desc: "The conversation is analyzed for key outcomes, decisions, and next steps. A professional follow-up message is drafted automatically.",
    s3Title: "Review and Send", s3Desc: "Review the drafted message, make any personal adjustments, and send. Copy to your clipboard or export to your email client.",
    ucLabel: "Use Cases", ucTitle: "Every Conversation Deserves a Follow-Up",
    uc1Title: "Meeting Recaps", uc1Desc: "Send a clear recap to all attendees within minutes of the meeting ending. Decisions documented, next steps assigned, everyone aligned.",
    uc2Title: "Client Follow-Ups", uc2Desc: "Professional follow-up emails that show clients you were listening. Requirements acknowledged, timeline confirmed, next meeting proposed.",
    uc3Title: "Thank-You Notes", uc3Desc: "After interviews, sales calls, or introductions, send a thoughtful thank-you that references specific points from the conversation.",
    uc4Title: "Status Updates", uc4Desc: "Turn a quick voice check-in into a written status update for your team or manager. Professional, concise, and complete.",
    otherLabel: "One Recording, Many Outputs", otherTitle: "Messages Are Just One Output",
    otherDesc: "A follow-up message captures the essence quickly. For deeper documentation, the same recording can produce full reports, task lists, or action plans.",
    oRep: "Executive Reports", oRepDesc: "When a quick message is not enough. Reports provide formal, comprehensive documentation of the conversation.",
    oTask: "Task Extraction", oTaskDesc: "When the follow-up needs to be tracked. Tasks are extracted with owners and deadlines for project management integration.",
    oAI: "AI Summaries", oAIDesc: "A structured overview for internal use. Summaries are more detailed than a message but less formal than a report.",
    relRep: "Executive Reports", relCT: "Clean Text", relClient: "Client Calls", relProd: "Product",
    ctaTitle: "The Follow-Up That Writes Itself", ctaDesc: "Every conversation deserves a proper follow-up. Sythio writes it in seconds.",
  },
  es: {
    label: "Funciones", title: "Mensajes de seguimiento escritos para ti",
    subtitle: "Sythio redacta correos de seguimiento profesionales, mensajes de recapitulacion y notas de agradecimiento directamente de tus grabaciones. El mensaje captura lo que se discutio, lo que se acordo y lo que sigue — listo para enviar.",
    probLabel: "El problema", probTitle: "Seguimientos que nunca se envian",
    probDesc1: "Sales de una reunion sabiendo que deberias enviar un resumen. Planeas hacerlo justo despues. Pero surge algo mas. Una hora despues, los detalles son borrosos. Un dia despues, parece demasiado tarde.",
    probDesc2: "Sythio resuelve esto redactando el seguimiento inmediatamente despues de que se procesa la grabacion. El mensaje esta listo antes de que siquiera pienses en ello.",
    exLabel: "Ejemplo de mensaje",
    exGreeting: "Hola equipo,", exIntro: "Gracias por la sesion productiva de hoy. Aqui va un breve resumen:",
    exBody: "Acordamos mover la fecha de lanzamiento al 1 de agosto para acomodar la revision de diseno. Sarah liderara la evaluacion de proveedores y compartira hallazgos para el viernes. El presupuesto del Q3 se aprobo en $240K.",
    exNext: "Proximos pasos: Carlos preparara la presentacion para la junta antes del 28 de marzo. Todos deben revisar el cronograma actualizado antes del fin del dia miercoles.",
    exClose: "Avisame si me falto algo.",
    diffLabel: "Lo que lo hace diferente", diffTitle: "No es una plantilla generica. Es tu conversacion.",
    diffDesc: "Cada mensaje se genera a partir de lo que realmente se dijo. Sythio no rellena espacios en blanco. Escribe un mensaje que refleja con precision la conversacion, decisiones y proximos pasos.",
    d1Title: "Recapitulaciones precisas", d1Desc: "El mensaje refleja lo que realmente se discutio. Decisiones clave, acuerdos y compromisos estan incluidos. Nada es fabricado.",
    d2Title: "Tono profesional", d2Desc: "Los mensajes se escriben en un tono profesional pero humano. Listos para enviar a clientes, colegas o la direccion sin frases incomodas.",
    d3Title: "Elementos de accion incluidos", d3Desc: "Los proximos pasos y asignaciones de responsables se integran naturalmente en el mensaje. Los destinatarios saben exactamente que se espera de ellos.",
    processLabel: "Proceso", processTitle: "Como funciona",
    s1Title: "Graba o sube", s1Desc: "Graba tu reunion, llamada con cliente o conversacion directamente en Sythio, o sube una grabacion existente.",
    s2Title: "Sythio redacta", s2Desc: "La conversacion se analiza para resultados clave, decisiones y proximos pasos. Un mensaje de seguimiento profesional se redacta automaticamente.",
    s3Title: "Revisa y envia", s3Desc: "Revisa el mensaje redactado, haz ajustes personales y envia. Copia al portapapeles o exporta a tu cliente de correo.",
    ucLabel: "Casos de uso", ucTitle: "Cada conversacion merece un seguimiento",
    uc1Title: "Recapitulaciones de reuniones", uc1Desc: "Envia un resumen claro a todos los asistentes dentro de minutos de que termine la reunion. Decisiones documentadas, proximos pasos asignados.",
    uc2Title: "Seguimientos con clientes", uc2Desc: "Correos de seguimiento profesionales que muestran a los clientes que los escuchaste. Requisitos reconocidos, cronograma confirmado.",
    uc3Title: "Notas de agradecimiento", uc3Desc: "Despues de entrevistas, llamadas de ventas o presentaciones, envia un agradecimiento reflexivo que haga referencia a puntos especificos de la conversacion.",
    uc4Title: "Actualizaciones de estado", uc4Desc: "Convierte un check-in rapido de voz en una actualizacion de estado escrita para tu equipo o gerente. Profesional, conciso y completo.",
    otherLabel: "Una grabacion, muchas salidas", otherTitle: "Los mensajes son solo una salida",
    otherDesc: "Un mensaje de seguimiento captura la esencia rapidamente. Para documentacion mas profunda, la misma grabacion puede producir informes completos, listas de tareas o planes de accion.",
    oRep: "Informes ejecutivos", oRepDesc: "Cuando un mensaje rapido no es suficiente. Los informes proporcionan documentacion formal y completa de la conversacion.",
    oTask: "Extraccion de tareas", oTaskDesc: "Cuando el seguimiento necesita ser rastreado. Las tareas se extraen con responsables y plazos para integracion con gestion de proyectos.",
    oAI: "Resumenes IA", oAIDesc: "Una vision estructurada para uso interno. Los resumenes son mas detallados que un mensaje pero menos formales que un informe.",
    relRep: "Informes ejecutivos", relCT: "Texto limpio", relClient: "Llamadas con clientes", relProd: "Producto",
    ctaTitle: "El seguimiento que se escribe solo", ctaDesc: "Cada conversacion merece un seguimiento adecuado. Sythio lo escribe en segundos.",
  },
  fr: {
    label: "Fonctionnalites", title: "Messages de suivi rediges pour vous",
    subtitle: "Sythio redige des emails de suivi professionnels, des messages recapitulatifs et des notes de remerciement directement a partir de vos enregistrements. Le message capture ce qui a ete discute, convenu et ce qui suit — pret a envoyer.",
    probLabel: "Le probleme", probTitle: "Des suivis qui ne sont jamais envoyes",
    probDesc1: "Vous quittez une reunion en sachant que vous devriez envoyer un recap. Vous prevoyez de le faire juste apres. Mais quelque chose d'autre survient. Une heure plus tard, les details sont flous.",
    probDesc2: "Sythio resout ce probleme en redigeant le suivi immediatement apres le traitement de l'enregistrement.",
    exLabel: "Exemple de message",
    exGreeting: "Bonjour l'equipe,", exIntro: "Merci pour la session productive d'aujourd'hui. Voici un bref recap :",
    exBody: "Nous avons convenu de deplacer la date de lancement au 1er aout pour accommoder la revue design. Sarah dirigera l'evaluation des fournisseurs et partagera ses conclusions d'ici vendredi. Le budget T3 a ete approuve a 240K$.",
    exNext: "Prochaines etapes : Carlos preparera le deck pour le conseil avant le 28 mars. Tout le monde doit revoir le calendrier mis a jour avant mercredi soir.",
    exClose: "Dites-moi si j'ai oublie quelque chose.",
    diffLabel: "Ce qui le rend different", diffTitle: "Pas un modele generique. Votre conversation.",
    diffDesc: "Chaque message est genere a partir de ce qui a reellement ete dit. Sythio n'e remplit pas des blancs. Il ecrit un message qui reflete precisement la conversation.",
    d1Title: "Recaps precis", d1Desc: "Le message reflete ce qui a reellement ete discute. Decisions cles, accords et engagements sont inclus.",
    d2Title: "Ton professionnel", d2Desc: "Les messages sont rediges dans un ton professionnel mais humain. Prets a envoyer aux clients, collegues ou direction.",
    d3Title: "Elements d'action inclus", d3Desc: "Les prochaines etapes et attributions sont integrees naturellement dans le message.",
    processLabel: "Processus", processTitle: "Comment ca fonctionne",
    s1Title: "Enregistrez ou telechargez", s1Desc: "Enregistrez votre reunion, appel client ou conversation directement dans Sythio.",
    s2Title: "Sythio redige", s2Desc: "La conversation est analysee pour les resultats cles. Un message de suivi professionnel est redige automatiquement.",
    s3Title: "Revisez et envoyez", s3Desc: "Revisez le message redige, faites vos ajustements et envoyez. Copiez ou exportez vers votre client email.",
    ucLabel: "Cas d'utilisation", ucTitle: "Chaque conversation merite un suivi",
    uc1Title: "Recaps de reunion", uc1Desc: "Envoyez un recap clair a tous les participants dans les minutes suivant la fin de la reunion.",
    uc2Title: "Suivis clients", uc2Desc: "Des emails de suivi professionnels qui montrent aux clients que vous etiez a l'ecoute.",
    uc3Title: "Notes de remerciement", uc3Desc: "Apres des entretiens ou appels commerciaux, envoyez un remerciement reflechi referençant des points specifiques de la conversation.",
    uc4Title: "Mises a jour de statut", uc4Desc: "Transformez un check-in vocal rapide en mise a jour ecrite pour votre equipe ou manager.",
    otherLabel: "Un enregistrement, plusieurs sorties", otherTitle: "Les messages ne sont qu'une sortie",
    otherDesc: "Un message de suivi capture l'essentiel rapidement. Pour une documentation plus approfondie, le meme enregistrement peut produire des rapports, listes de taches ou plans d'action.",
    oRep: "Rapports executifs", oRepDesc: "Quand un message rapide ne suffit pas. Les rapports fournissent une documentation formelle et complete.",
    oTask: "Extraction de taches", oTaskDesc: "Quand le suivi doit etre suivi. Les taches sont extraites avec responsables et echeances.",
    oAI: "Resumes IA", oAIDesc: "Un apercu structure pour usage interne. Plus detaille qu'un message mais moins formel qu'un rapport.",
    relRep: "Rapports executifs", relCT: "Texte propre", relClient: "Appels clients", relProd: "Produit",
    ctaTitle: "Le suivi qui s'ecrit tout seul", ctaDesc: "Chaque conversation merite un suivi correct. Sythio l'ecrit en secondes.",
  },
  pt: {
    label: "Recursos", title: "Mensagens de follow-up escritas para voce",
    subtitle: "O Sythio redige emails de follow-up profissionais, mensagens de recapitulacao e notas de agradecimento diretamente das suas gravacoes. A mensagem captura o que foi discutido, acordado e o que vem a seguir — pronta para enviar.",
    probLabel: "O problema", probTitle: "Follow-ups que nunca sao enviados",
    probDesc1: "Voce sai de uma reuniao sabendo que deveria enviar um recap. Planeja fazer logo depois. Mas algo mais surge. Uma hora depois, os detalhes estao vagos.",
    probDesc2: "O Sythio resolve isso redigindo o follow-up imediatamente apos o processamento da gravacao.",
    exLabel: "Exemplo de mensagem",
    exGreeting: "Ola equipe,", exIntro: "Obrigado pela sessao produtiva de hoje. Aqui vai um breve recap:",
    exBody: "Concordamos em mover a data de lancamento para 1 de agosto para acomodar a revisao de design. Sarah liderara a avaliacao de fornecedores e compartilhara as conclusoes ate sexta. O orcamento do T3 foi aprovado em $240K.",
    exNext: "Proximos passos: Carlos preparara o deck para o conselho ate 28 de marco. Todos devem revisar o cronograma atualizado ate quarta-feira.",
    exClose: "Me avisem se esqueci de algo.",
    diffLabel: "O que o torna diferente", diffTitle: "Nao e um modelo generico. E sua conversa.",
    diffDesc: "Cada mensagem e gerada a partir do que realmente foi dito. O Sythio nao preenche lacunas. Ele escreve uma mensagem que reflete com precisao a conversa.",
    d1Title: "Recaps precisos", d1Desc: "A mensagem reflete o que realmente foi discutido. Decisoes-chave, acordos e compromissos estao incluidos.",
    d2Title: "Tom profissional", d2Desc: "As mensagens sao escritas em tom profissional mas humano. Prontas para enviar a clientes, colegas ou lideranca.",
    d3Title: "Itens de acao incluidos", d3Desc: "Proximos passos e atribuicoes de responsaveis sao integrados naturalmente na mensagem.",
    processLabel: "Processo", processTitle: "Como funciona",
    s1Title: "Grave ou envie", s1Desc: "Grave sua reuniao, chamada com cliente ou conversa diretamente no Sythio.",
    s2Title: "Sythio redige", s2Desc: "A conversa e analisada para resultados-chave. Uma mensagem de follow-up profissional e redigida automaticamente.",
    s3Title: "Revise e envie", s3Desc: "Revise a mensagem redigida, faca ajustes pessoais e envie. Copie ou exporte para seu cliente de email.",
    ucLabel: "Casos de uso", ucTitle: "Cada conversa merece um follow-up",
    uc1Title: "Recaps de reuniao", uc1Desc: "Envie um recap claro a todos os participantes minutos apos a reuniao terminar.",
    uc2Title: "Follow-ups com clientes", uc2Desc: "Emails de follow-up profissionais que mostram aos clientes que voce estava ouvindo.",
    uc3Title: "Notas de agradecimento", uc3Desc: "Apos entrevistas ou chamadas de vendas, envie um agradecimento reflexivo referenciando pontos especificos da conversa.",
    uc4Title: "Atualizacoes de status", uc4Desc: "Transforme um check-in de voz rapido em atualizacao de status escrita para sua equipe ou gestor.",
    otherLabel: "Uma gravacao, varias saidas", otherTitle: "Mensagens sao apenas uma saida",
    otherDesc: "Uma mensagem de follow-up captura a essencia rapidamente. Para documentacao mais profunda, a mesma gravacao pode produzir relatorios, listas de tarefas ou planos de acao.",
    oRep: "Relatorios executivos", oRepDesc: "Quando uma mensagem rapida nao e suficiente. Relatorios fornecem documentacao formal e completa.",
    oTask: "Extracao de tarefas", oTaskDesc: "Quando o follow-up precisa ser rastreado. Tarefas sao extraidas com responsaveis e prazos.",
    oAI: "Resumos IA", oAIDesc: "Uma visao estruturada para uso interno. Mais detalhada que uma mensagem, menos formal que um relatorio.",
    relRep: "Relatorios executivos", relCT: "Texto limpo", relClient: "Chamadas com clientes", relProd: "Produto",
    ctaTitle: "O follow-up que se escreve sozinho", ctaDesc: "Cada conversa merece um follow-up adequado. O Sythio o escreve em segundos.",
  },
  it: {
    label: "Funzionalita", title: "Messaggi di follow-up scritti per te",
    subtitle: "Sythio redige email di follow-up professionali, messaggi di riepilogo e note di ringraziamento direttamente dalle tue registrazioni. Il messaggio cattura cio che e stato discusso, concordato e cosa viene dopo — pronto da inviare.",
    probLabel: "Il problema", probTitle: "Follow-up che non vengono mai inviati",
    probDesc1: "Esci da una riunione sapendo che dovresti inviare un recap. Pianifichi di farlo subito dopo. Ma qualcos'altro si presenta. Un'ora dopo, i dettagli sono sfocati.",
    probDesc2: "Sythio risolve questo redigendo il follow-up immediatamente dopo l'elaborazione della registrazione.",
    exLabel: "Esempio di messaggio",
    exGreeting: "Ciao team,", exIntro: "Grazie per la sessione produttiva di oggi. Ecco un breve recap:",
    exBody: "Abbiamo concordato di spostare la data di lancio al 1 agosto per accommodare la revisione del design. Sarah guidera la valutazione dei fornitori e condividera i risultati entro venerdi. Il budget T3 e stato approvato a $240K.",
    exNext: "Prossimi passi: Carlos preparera il deck per il consiglio entro il 28 marzo. Tutti devono rivedere la timeline aggiornata entro mercoledi sera.",
    exClose: "Fatemi sapere se mi sono perso qualcosa.",
    diffLabel: "Cosa lo rende diverso", diffTitle: "Non un modello generico. La tua conversazione.",
    diffDesc: "Ogni messaggio e generato da cio che e stato realmente detto. Sythio non riempie spazi vuoti. Scrive un messaggio che riflette accuratamente la conversazione.",
    d1Title: "Recap accurati", d1Desc: "Il messaggio riflette cio che e stato realmente discusso. Decisioni chiave, accordi e impegni sono inclusi.",
    d2Title: "Tono professionale", d2Desc: "I messaggi sono scritti in tono professionale ma umano. Pronti da inviare a clienti, colleghi o leadership.",
    d3Title: "Elementi d'azione inclusi", d3Desc: "Prossimi passi e assegnazioni di responsabili sono integrati naturalmente nel messaggio.",
    processLabel: "Processo", processTitle: "Come funziona",
    s1Title: "Registra o carica", s1Desc: "Registra la tua riunione, chiamata cliente o conversazione direttamente in Sythio.",
    s2Title: "Sythio redige", s2Desc: "La conversazione viene analizzata per risultati chiave. Un messaggio di follow-up professionale viene redatto automaticamente.",
    s3Title: "Rivedi e invia", s3Desc: "Rivedi il messaggio redatto, fai aggiustamenti personali e invia. Copia o esporta nel tuo client email.",
    ucLabel: "Casi d'uso", ucTitle: "Ogni conversazione merita un follow-up",
    uc1Title: "Recap di riunione", uc1Desc: "Invia un recap chiaro a tutti i partecipanti entro minuti dalla fine della riunione.",
    uc2Title: "Follow-up clienti", uc2Desc: "Email di follow-up professionali che mostrano ai clienti che stavi ascoltando.",
    uc3Title: "Note di ringraziamento", uc3Desc: "Dopo interviste o chiamate commerciali, invia un ringraziamento premuroso che fa riferimento a punti specifici della conversazione.",
    uc4Title: "Aggiornamenti di stato", uc4Desc: "Trasforma un check-in vocale rapido in aggiornamento di stato scritto per il tuo team o manager.",
    otherLabel: "Una registrazione, molti output", otherTitle: "I messaggi sono solo un output",
    otherDesc: "Un messaggio di follow-up cattura l'essenza rapidamente. Per documentazione piu approfondita, la stessa registrazione puo produrre report, liste di attivita o piani d'azione.",
    oRep: "Report esecutivi", oRepDesc: "Quando un messaggio rapido non basta. I report forniscono documentazione formale e completa.",
    oTask: "Estrazione attivita", oTaskDesc: "Quando il follow-up deve essere tracciato. Le attivita vengono estratte con responsabili e scadenze.",
    oAI: "Riassunti IA", oAIDesc: "Una panoramica strutturata per uso interno. Piu dettagliata di un messaggio, meno formale di un report.",
    relRep: "Report esecutivi", relCT: "Testo pulito", relClient: "Chiamate clienti", relProd: "Prodotto",
    ctaTitle: "Il follow-up che si scrive da solo", ctaDesc: "Ogni conversazione merita un follow-up adeguato. Sythio lo scrive in pochi secondi.",
  },
};

export default function MessagesPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

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
        <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.probLabel}</p><TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.probTitle}</TextReveal><p className="mt-6 text-lg text-muted leading-relaxed">{c.probDesc1}</p><p className="mt-4 text-lg text-muted leading-relaxed">{c.probDesc2}</p></div>
        <div className="space-y-6"><div className="bg-background rounded-2xl border border-foreground/10 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground mb-4">{c.exLabel}</p>
          <div className="text-sm text-foreground leading-relaxed space-y-3">
            <p>{c.exGreeting}</p><p>{c.exIntro}</p><p>{c.exBody}</p><p>{c.exNext}</p><p>{c.exClose}</p>
          </div>
        </div></div>
      </div></div></section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.diffLabel}</p><TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.diffTitle}</TextReveal><p className="mt-6 text-lg text-muted leading-relaxed">{c.diffDesc}</p></div>
        <GsapStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>{[{t:c.d1Title,d:c.d1Desc},{t:c.d2Title,d:c.d2Desc},{t:c.d3Title,d:c.d3Desc}].map(i=>(<div key={i.t} className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow"><h3 className="text-lg font-semibold text-foreground mb-2">{i.t}</h3><p className="text-sm text-muted leading-relaxed">{i.d}</p></div>))}</GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-white"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.processLabel}</p><TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.processTitle}</TextReveal></div>
        <GsapStagger className="grid md:grid-cols-3 gap-8" stagger={0.08}>{[{n:"1",t:c.s1Title,d:c.s1Desc},{n:"2",t:c.s2Title,d:c.s2Desc},{n:"3",t:c.s3Title,d:c.s3Desc}].map(i=>(<div key={i.n} className="relative"><div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">{i.n}</div><h3 className="text-lg font-semibold text-foreground mb-2">{i.t}</h3><p className="text-sm text-muted leading-relaxed">{i.d}</p></div>))}</GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.ucLabel}</p><TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.ucTitle}</TextReveal></div>
        <GsapStagger className="grid sm:grid-cols-2 gap-6" stagger={0.08}>
          <ScrollScale><Link href="/use-cases/meetings" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc1Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc1Desc}</p></Link></ScrollScale>
          <ScrollScale><Link href="/use-cases/client-calls" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.uc2Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc2Desc}</p></Link></ScrollScale>
          <div className="bg-white rounded-2xl border border-border-light p-8"><h3 className="text-lg font-semibold text-foreground mb-2">{c.uc3Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc3Desc}</p></div>
          <div className="bg-white rounded-2xl border border-border-light p-8"><h3 className="text-lg font-semibold text-foreground mb-2">{c.uc4Title}</h3><p className="text-sm text-muted leading-relaxed">{c.uc4Desc}</p></div>
        </GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-white"><div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">{c.otherLabel}</p><TextReveal tag="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{c.otherTitle}</TextReveal><p className="mt-6 text-lg text-muted leading-relaxed">{c.otherDesc}</p></div>
        <GsapStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>
          <ScrollScale><Link href="/features/reports" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.oRep}</h3><p className="text-sm text-muted leading-relaxed">{c.oRepDesc}</p></Link></ScrollScale>
          <ScrollScale><Link href="/features/task-extraction" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.oTask}</h3><p className="text-sm text-muted leading-relaxed">{c.oTaskDesc}</p></Link></ScrollScale>
          <ScrollScale><Link href="/features/ai-summaries" className="h-full group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">{c.oAI}</h3><p className="text-sm text-muted leading-relaxed">{c.oAIDesc}</p></Link></ScrollScale>
        </GsapStagger>
      </div></section>

      <section className="py-32 md:py-44 bg-background animated-gradient-bg relative overflow-hidden"><div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">{s("common.related")}</h2>
        <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
          <ScrollScale><Link href="/features/reports" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relRep}</p></Link></ScrollScale>
          <ScrollScale><Link href="/features/clean-text" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.feature")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relCT}</p></Link></ScrollScale>
          <ScrollScale><Link href="/use-cases/client-calls" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.useCase")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relClient}</p></Link></ScrollScale>
          <ScrollScale><Link href="/product" className="h-full group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">{s("common.overview")}</p><p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">{c.relProd}</p></Link></ScrollScale>
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
