"use client";

import Link from "next/link";
import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { TextReveal, ScrollScale, GsapStagger, MagneticHover, PageReveal } from "../../components/gsap-effects";

const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "For Sales Teams",
    heroTitle: "Built for How Sales Teams Actually Close",
    heroDesc:
      "Stop losing deals to forgotten follow-ups and empty CRM fields. Record your sales calls and Sythio turns them into structured summaries, action items, follow-up drafts, and key points — so your pipeline keeps moving.",
    problemLabel: "The problem",
    problemTitle: "The Sales Documentation Gap",
    problemDesc:
      "Sales reps spend their days on calls but their evenings catching up on notes. Critical deal context lives in memory, CRM fields stay empty, and follow-ups arrive too late to matter.",
    problem1Title: "Calls not documented",
    problem1Desc:
      "You had a great discovery call, but by the time you open your CRM, the details have blurred. Objections, budget signals, and decision-maker dynamics fade from memory faster than you can type them.",
    problem2Title: "Follow-ups forgotten",
    problem2Desc:
      "You promised to send a recap, share a resource, or loop in a colleague. But back-to-back calls mean those commitments pile up — and the prospect who does not hear from you moves on to someone who follows through.",
    problem3Title: "CRM stays empty",
    problem3Desc:
      "Your manager needs pipeline visibility, but updating the CRM after every call feels like a second job. So fields stay blank, forecasts stay inaccurate, and coaching conversations lack the context they need.",
    outputsLabel: "Your outputs",
    outputsTitle: "What Sythio Creates for You",
    outputsDesc:
      "One recorded call becomes multiple sales assets — each designed to keep your deals moving forward.",
    output1Title: "Summary",
    output1Desc:
      "Every sales call distilled into a clear, structured summary. What was discussed, what the prospect cares about, where they are in the buying process, and what was agreed — ready to paste into your CRM or share with your manager.",
    output2Title: "Tasks",
    output2Desc:
      "Every commitment, next step, and action item extracted automatically — with speaker attribution. You know exactly what you promised the prospect and what they committed to, so nothing slips through the cracks between calls.",
    output3Title: "Follow-up Message",
    output3Desc:
      "A professional follow-up email drafted minutes after the call ends. It captures what was discussed, recaps agreements, and outlines next steps — review, adjust the tone, and send before the prospect forgets the conversation.",
    output4Title: "Key Points",
    output4Desc:
      "The objections raised, the budget signals, the timeline hints, and the decision-maker dynamics — all captured and organized. Review the key points before your next touchpoint to walk in fully prepared.",
    useCasesLabel: "Use cases",
    useCasesTitle: "How Sales Teams Use Sythio",
    useCase1Title: "Discovery Calls",
    useCase1Desc:
      "Record your discovery calls and let Sythio capture every pain point, requirement, and buying signal. You stay fully present with the prospect while Sythio documents the conversation — so your follow-up is precise and your CRM is accurate.",
    useCase2Title: "Product Demos",
    useCase2Desc:
      "During demos, every question the prospect asks reveals what they care about. Sythio captures those questions, your answers, and the features that resonated — giving you a clear picture of what to emphasize in your proposal.",
    useCase3Title: "Negotiation Calls",
    useCase3Desc:
      "Pricing discussions and contract negotiations move fast. Sythio captures every number mentioned, every concession offered, and every condition discussed — so you have an accurate record when it is time to draft the agreement.",
    useCase4Title: "Quarterly Business Reviews",
    useCase4Desc:
      "QBRs with existing clients are full of expansion signals, churn risks, and renewal context. Sythio structures the entire conversation into a summary with key points and action items — a reference you and your CSM can act on immediately.",
    pricingTitle: "Free for Sales Teams to Start",
    pricingDesc:
      "The free plan gives you 5 recordings per month — enough to test Sythio with your next sales call. No credit card required. When you need more, the Premium plan is $15/month for unlimited recordings and all 9 output formats.",
    exploreTitle: "Explore More",
    relatedUseCases: "Use Cases",
    relatedFeatures: "All Features",
    relatedCompare: "Compare Tools",
    relatedPricing: "Pricing",
    ctaTitle1: "Close more deals.",
    ctaTitle2: "Let Sythio handle the notes.",
    ctaDesc:
      "Record your next sales call and see what Sythio creates. Summaries, action items, follow-up drafts, and key points — from one recording.",
    ctaFooter:
      "Free plan includes 5 recordings per month. No credit card needed.",
  },
  es: {
    label: "Para Equipos de Ventas",
    heroTitle: "Diseñado para Como los Equipos de Ventas Realmente Cierran",
    heroDesc:
      "Deja de perder negocios por seguimientos olvidados y campos de CRM vacíos. Graba tus llamadas de ventas y Sythio las convierte en resúmenes estructurados, elementos de acción, borradores de seguimiento y puntos clave — para que tu pipeline siga avanzando.",
    problemLabel: "El problema",
    problemTitle: "La Brecha de Documentación en Ventas",
    problemDesc:
      "Los representantes de ventas pasan sus días en llamadas pero sus noches poniéndose al día con notas. El contexto crítico del negocio vive en la memoria, los campos del CRM quedan vacíos y los seguimientos llegan demasiado tarde para importar.",
    problem1Title: "Llamadas sin documentar",
    problem1Desc:
      "Tuviste una gran llamada de descubrimiento, pero cuando abres tu CRM, los detalles se han difuminado. Objeciones, señales de presupuesto y dinámicas de tomadores de decisiones se desvanecen de la memoria más rápido de lo que puedes escribirlas.",
    problem2Title: "Seguimientos olvidados",
    problem2Desc:
      "Prometiste enviar un resumen, compartir un recurso o involucrar a un colega. Pero las llamadas consecutivas hacen que esos compromisos se acumulen — y el prospecto que no tiene noticias tuyas pasa a alguien que sí cumple.",
    problem3Title: "El CRM queda vacío",
    problem3Desc:
      "Tu manager necesita visibilidad del pipeline, pero actualizar el CRM después de cada llamada se siente como un segundo trabajo. Así que los campos quedan en blanco, las previsiones son inexactas y las conversaciones de coaching carecen del contexto necesario.",
    outputsLabel: "Tus resultados",
    outputsTitle: "Lo que Sythio Crea para Ti",
    outputsDesc:
      "Una llamada grabada se convierte en múltiples activos de ventas — cada uno diseñado para mantener tus negocios avanzando.",
    output1Title: "Resumen",
    output1Desc:
      "Cada llamada de ventas destilada en un resumen claro y estructurado. Lo que se discutió, qué le importa al prospecto, dónde está en el proceso de compra y qué se acordó — listo para pegar en tu CRM o compartir con tu manager.",
    output2Title: "Tareas",
    output2Desc:
      "Cada compromiso, próximo paso y elemento de acción extraído automáticamente — con atribución de hablante. Sabes exactamente qué le prometiste al prospecto y a qué se comprometieron ellos, para que nada se escape entre llamadas.",
    output3Title: "Mensaje de Seguimiento",
    output3Desc:
      "Un email de seguimiento profesional redactado minutos después de terminar la llamada. Captura lo que se discutió, resume los acuerdos y delinea los próximos pasos — revisa, ajusta el tono y envía antes de que el prospecto olvide la conversación.",
    output4Title: "Puntos Clave",
    output4Desc:
      "Las objeciones planteadas, las señales de presupuesto, las pistas de cronograma y las dinámicas de tomadores de decisiones — todo capturado y organizado. Revisa los puntos clave antes de tu próximo contacto para llegar totalmente preparado.",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Cómo los Equipos de Ventas Usan Sythio",
    useCase1Title: "Llamadas de Descubrimiento",
    useCase1Desc:
      "Graba tus llamadas de descubrimiento y deja que Sythio capture cada punto de dolor, requisito y señal de compra. Tú te mantienes totalmente presente con el prospecto mientras Sythio documenta la conversación — para que tu seguimiento sea preciso y tu CRM exacto.",
    useCase2Title: "Demos de Producto",
    useCase2Desc:
      "Durante las demos, cada pregunta que hace el prospecto revela qué le importa. Sythio captura esas preguntas, tus respuestas y las funcionalidades que resonaron — dándote una imagen clara de qué enfatizar en tu propuesta.",
    useCase3Title: "Llamadas de Negociación",
    useCase3Desc:
      "Las discusiones de precios y negociaciones de contrato van rápido. Sythio captura cada número mencionado, cada concesión ofrecida y cada condición discutida — para que tengas un registro exacto cuando sea hora de redactar el acuerdo.",
    useCase4Title: "Revisiones Trimestrales de Negocio",
    useCase4Desc:
      "Las QBRs con clientes existentes están llenas de señales de expansión, riesgos de abandono y contexto de renovación. Sythio estructura toda la conversación en un resumen con puntos clave y elementos de acción — una referencia sobre la que tú y tu CSM pueden actuar inmediatamente.",
    pricingTitle: "Gratis para que los Equipos de Ventas Empiecen",
    pricingDesc:
      "El plan gratuito te da 5 grabaciones al mes — suficiente para probar Sythio con tu próxima llamada de ventas. Sin tarjeta de crédito. Cuando necesites más, el plan Pro es $15/mes para grabaciones ilimitadas y los 9 formatos de salida.",
    exploreTitle: "Explorar Más",
    relatedUseCases: "Casos de Uso",
    relatedFeatures: "Todas las Funciones",
    relatedCompare: "Comparar Herramientas",
    relatedPricing: "Precios",
    ctaTitle1: "Cierra más negocios.",
    ctaTitle2: "Deja que Sythio se encargue de las notas.",
    ctaDesc:
      "Graba tu próxima llamada de ventas y mira lo que Sythio crea. Resúmenes, elementos de acción, borradores de seguimiento y puntos clave — de una sola grabación.",
    ctaFooter:
      "El plan gratuito incluye 5 grabaciones al mes. Sin tarjeta de crédito.",
  },
  fr: {
    label: "Pour Équipes Commerciales",
    heroTitle: "Conçu pour la Façon dont les Équipes Commerciales Concluent Vraiment",
    heroDesc:
      "Arrêtez de perdre des affaires à cause de suivis oubliés et de champs CRM vides. Enregistrez vos appels commerciaux et Sythio les transforme en résumés structurés, actions, brouillons de suivi et points clés — pour que votre pipeline continue d'avancer.",
    problemLabel: "Le problème",
    problemTitle: "Le Fossé de Documentation Commerciale",
    problemDesc:
      "Les commerciaux passent leurs journées en appel mais leurs soirées à rattraper leurs notes. Le contexte critique des affaires vit dans la mémoire, les champs CRM restent vides et les suivis arrivent trop tard pour compter.",
    problem1Title: "Appels non documentés",
    problem1Desc:
      "Vous avez eu un super appel de découverte, mais quand vous ouvrez votre CRM, les détails se sont estompés. Objections, signaux de budget et dynamiques des décideurs s'effacent de la mémoire plus vite que vous ne pouvez les taper.",
    problem2Title: "Suivis oubliés",
    problem2Desc:
      "Vous avez promis d'envoyer un récapitulatif, partager une ressource ou impliquer un collègue. Mais les appels consécutifs font que ces engagements s'accumulent — et le prospect qui n'a pas de nouvelles passe à quelqu'un qui suit.",
    problem3Title: "Le CRM reste vide",
    problem3Desc:
      "Votre manager a besoin de visibilité sur le pipeline, mais mettre à jour le CRM après chaque appel ressemble à un second travail. Les champs restent vides, les prévisions inexactes et les conversations de coaching manquent de contexte.",
    outputsLabel: "Vos résultats",
    outputsTitle: "Ce que Sythio Crée pour Vous",
    outputsDesc:
      "Un appel enregistré devient plusieurs actifs commerciaux — chacun conçu pour faire avancer vos affaires.",
    output1Title: "Résumé",
    output1Desc:
      "Chaque appel commercial distillé en un résumé clair et structuré. Ce qui a été discuté, ce qui intéresse le prospect, où il en est dans le processus d'achat et ce qui a été convenu — prêt à coller dans votre CRM ou partager avec votre manager.",
    output2Title: "Tâches",
    output2Desc:
      "Chaque engagement, prochaine étape et action extraite automatiquement — avec attribution de locuteur. Vous savez exactement ce que vous avez promis au prospect et ce à quoi il s'est engagé, pour que rien ne glisse entre les appels.",
    output3Title: "Message de Suivi",
    output3Desc:
      "Un email de suivi professionnel rédigé minutes après la fin de l'appel. Il capture ce qui a été discuté, récapitule les accords et présente les prochaines étapes — révisez, ajustez le ton et envoyez avant que le prospect n'oublie la conversation.",
    output4Title: "Points Clés",
    output4Desc:
      "Les objections soulevées, les signaux de budget, les indices de calendrier et les dynamiques des décideurs — tout capturé et organisé. Révisez les points clés avant votre prochain contact pour arriver parfaitement préparé.",
    useCasesLabel: "Cas d'utilisation",
    useCasesTitle: "Comment les Équipes Commerciales Utilisent Sythio",
    useCase1Title: "Appels de Découverte",
    useCase1Desc:
      "Enregistrez vos appels de découverte et laissez Sythio capturer chaque point de douleur, exigence et signal d'achat. Vous restez pleinement présent avec le prospect pendant que Sythio documente la conversation — pour que votre suivi soit précis et votre CRM exact.",
    useCase2Title: "Démos Produit",
    useCase2Desc:
      "Pendant les démos, chaque question du prospect révèle ce qui lui importe. Sythio capture ces questions, vos réponses et les fonctionnalités qui ont résonné — vous donnant une image claire de ce qu'il faut souligner dans votre proposition.",
    useCase3Title: "Appels de Négociation",
    useCase3Desc:
      "Les discussions de prix et négociations de contrat vont vite. Sythio capture chaque chiffre mentionné, chaque concession offerte et chaque condition discutée — pour que vous ayez un dossier précis quand il est temps de rédiger l'accord.",
    useCase4Title: "Revues Trimestrielles",
    useCase4Desc:
      "Les QBRs avec les clients existants sont pleines de signaux d'expansion, risques de désabonnement et contexte de renouvellement. Sythio structure toute la conversation en un résumé avec points clés et actions — une référence sur laquelle vous et votre CSM pouvez agir immédiatement.",
    pricingTitle: "Gratuit pour les Équipes Commerciales pour Commencer",
    pricingDesc:
      "Le plan gratuit vous donne 5 enregistrements par mois — assez pour tester Sythio avec votre prochain appel commercial. Sans carte bancaire. Quand vous en avez besoin de plus, le plan Pro est à 12$/mois pour des enregistrements illimités et les 9 formats de sortie.",
    exploreTitle: "Explorer Plus",
    relatedUseCases: "Cas d'Utilisation",
    relatedFeatures: "Toutes les Fonctionnalités",
    relatedCompare: "Comparer les Outils",
    relatedPricing: "Tarifs",
    ctaTitle1: "Concluez plus d'affaires.",
    ctaTitle2: "Laissez Sythio gérer les notes.",
    ctaDesc:
      "Enregistrez votre prochain appel commercial et voyez ce que Sythio crée. Résumés, actions, brouillons de suivi et points clés — à partir d'un enregistrement.",
    ctaFooter:
      "Le plan gratuit inclut 5 enregistrements par mois. Sans carte bancaire.",
  },
  pt: {
    label: "Para Equipes de Vendas",
    heroTitle: "Feito para Como as Equipes de Vendas Realmente Fecham",
    heroDesc:
      "Pare de perder negócios por follow-ups esquecidos e campos de CRM vazios. Grave suas ligações de vendas e Sythio as transforma em resumos estruturados, itens de ação, rascunhos de follow-up e pontos-chave — para que seu pipeline continue avançando.",
    problemLabel: "O problema",
    problemTitle: "A Lacuna de Documentação em Vendas",
    problemDesc:
      "Representantes de vendas passam seus dias em ligações mas suas noites recuperando notas. O contexto crítico do negócio vive na memória, campos do CRM ficam vazios e follow-ups chegam tarde demais para importar.",
    problem1Title: "Ligações não documentadas",
    problem1Desc:
      "Você teve uma ótima ligação de descoberta, mas quando abre seu CRM, os detalhes já se turvaram. Objeções, sinais de orçamento e dinâmicas de tomadores de decisão desaparecem da memória mais rápido do que você consegue digitá-los.",
    problem2Title: "Follow-ups esquecidos",
    problem2Desc:
      "Você prometeu enviar um resumo, compartilhar um recurso ou envolver um colega. Mas ligações consecutivas fazem esses compromissos se acumularem — e o prospecto que não tem notícias suas segue para alguém que cumpre.",
    problem3Title: "O CRM fica vazio",
    problem3Desc:
      "Seu gerente precisa de visibilidade do pipeline, mas atualizar o CRM após cada ligação parece um segundo emprego. Os campos ficam em branco, previsões ficam imprecisas e conversas de coaching carecem do contexto necessário.",
    outputsLabel: "Seus resultados",
    outputsTitle: "O que o Sythio Cria para Você",
    outputsDesc:
      "Uma ligação gravada se torna múltiplos ativos de vendas — cada um projetado para manter seus negócios avançando.",
    output1Title: "Resumo",
    output1Desc:
      "Cada ligação de vendas destilada em um resumo claro e estruturado. O que foi discutido, o que o prospecto valoriza, onde está no processo de compra e o que foi acordado — pronto para colar no CRM ou compartilhar com seu gerente.",
    output2Title: "Tarefas",
    output2Desc:
      "Cada compromisso, próximo passo e item de ação extraído automaticamente — com atribuição de falante. Você sabe exatamente o que prometeu ao prospecto e o que eles se comprometeram, para que nada escape entre ligações.",
    output3Title: "Mensagem de Follow-up",
    output3Desc:
      "Um email de follow-up profissional redigido minutos após a ligação. Captura o que foi discutido, resume acordos e delineia próximos passos — revise, ajuste o tom e envie antes que o prospecto esqueça a conversa.",
    output4Title: "Pontos-Chave",
    output4Desc:
      "As objeções levantadas, sinais de orçamento, dicas de cronograma e dinâmicas de tomadores de decisão — tudo capturado e organizado. Revise os pontos-chave antes do próximo contato para chegar totalmente preparado.",
    useCasesLabel: "Casos de uso",
    useCasesTitle: "Como as Equipes de Vendas Usam o Sythio",
    useCase1Title: "Ligações de Descoberta",
    useCase1Desc:
      "Grave suas ligações de descoberta e deixe o Sythio capturar cada ponto de dor, requisito e sinal de compra. Você fica totalmente presente com o prospecto enquanto o Sythio documenta a conversa — para que seu follow-up seja preciso e seu CRM exato.",
    useCase2Title: "Demos de Produto",
    useCase2Desc:
      "Durante demos, cada pergunta que o prospecto faz revela o que lhe importa. Sythio captura essas perguntas, suas respostas e as funcionalidades que ressoaram — dando uma imagem clara do que enfatizar na proposta.",
    useCase3Title: "Ligações de Negociação",
    useCase3Desc:
      "Discussões de preço e negociações de contrato são rápidas. Sythio captura cada número mencionado, cada concessão oferecida e cada condição discutida — para que você tenha um registro exato quando for hora de redigir o acordo.",
    useCase4Title: "Revisões Trimestrais de Negócio",
    useCase4Desc:
      "QBRs com clientes existentes estão cheias de sinais de expansão, riscos de churn e contexto de renovação. Sythio estrutura toda a conversa em um resumo com pontos-chave e itens de ação — uma referência na qual você e seu CSM podem agir imediatamente.",
    pricingTitle: "Grátis para Equipes de Vendas Começarem",
    pricingDesc:
      "O plano gratuito oferece 5 gravações por mês — suficiente para testar o Sythio com sua próxima ligação de vendas. Sem cartão de crédito. Quando precisar de mais, o plano Pro custa $15/mês para gravações ilimitadas e todos os 9 formatos de saída.",
    exploreTitle: "Explorar Mais",
    relatedUseCases: "Casos de Uso",
    relatedFeatures: "Todos os Recursos",
    relatedCompare: "Comparar Ferramentas",
    relatedPricing: "Preços",
    ctaTitle1: "Feche mais negócios.",
    ctaTitle2: "Deixe o Sythio cuidar das notas.",
    ctaDesc:
      "Grave sua próxima ligação de vendas e veja o que o Sythio cria. Resumos, itens de ação, rascunhos de follow-up e pontos-chave — de uma única gravação.",
    ctaFooter:
      "O plano gratuito inclui 5 gravações por mês. Sem cartão de crédito.",
  },
  it: {
    label: "Per Team di Vendita",
    heroTitle: "Progettato per Come i Team di Vendita Chiudono Davvero",
    heroDesc:
      "Smetti di perdere affari per follow-up dimenticati e campi CRM vuoti. Registra le tue chiamate di vendita e Sythio le trasforma in riassunti strutturati, azioni, bozze di follow-up e punti chiave — così la tua pipeline continua a muoversi.",
    problemLabel: "Il problema",
    problemTitle: "Il Gap della Documentazione Commerciale",
    problemDesc:
      "I commerciali passano le giornate in chiamata ma le sere a recuperare le note. Il contesto critico dell'affare vive nella memoria, i campi CRM restano vuoti e i follow-up arrivano troppo tardi per contare.",
    problem1Title: "Chiamate non documentate",
    problem1Desc:
      "Hai avuto un'ottima chiamata di scoperta, ma quando apri il CRM, i dettagli si sono sfumati. Obiezioni, segnali di budget e dinamiche dei decisori svaniscono dalla memoria più velocemente di quanto riesci a digitarli.",
    problem2Title: "Follow-up dimenticati",
    problem2Desc:
      "Hai promesso di inviare un riepilogo, condividere una risorsa o coinvolgere un collega. Ma le chiamate consecutive fanno accumulare quegli impegni — e il prospect che non ha tue notizie passa a qualcuno che mantiene le promesse.",
    problem3Title: "Il CRM resta vuoto",
    problem3Desc:
      "Il tuo manager ha bisogno di visibilità sulla pipeline, ma aggiornare il CRM dopo ogni chiamata sembra un secondo lavoro. I campi restano vuoti, le previsioni imprecise e le conversazioni di coaching mancano del contesto necessario.",
    outputsLabel: "I tuoi risultati",
    outputsTitle: "Cosa Crea Sythio per Te",
    outputsDesc:
      "Una chiamata registrata diventa molteplici asset commerciali — ciascuno progettato per far avanzare i tuoi affari.",
    output1Title: "Riassunto",
    output1Desc:
      "Ogni chiamata commerciale distillata in un riassunto chiaro e strutturato. Cosa è stato discusso, cosa interessa al prospect, dove si trova nel processo d'acquisto e cosa è stato concordato — pronto per incollare nel CRM o condividere con il manager.",
    output2Title: "Attività",
    output2Desc:
      "Ogni impegno, prossimo passo e azione estratta automaticamente — con attribuzione del parlante. Sai esattamente cosa hai promesso al prospect e cosa si sono impegnati, così nulla sfugge tra le chiamate.",
    output3Title: "Messaggio di Follow-up",
    output3Desc:
      "Un'email di follow-up professionale redatta minuti dopo la fine della chiamata. Cattura ciò che è stato discusso, ricapitola gli accordi e delinea i prossimi passi — rivedi, aggiusta il tono e invia prima che il prospect dimentichi la conversazione.",
    output4Title: "Punti Chiave",
    output4Desc:
      "Le obiezioni sollevate, i segnali di budget, gli indizi temporali e le dinamiche dei decisori — tutto catturato e organizzato. Rivedi i punti chiave prima del prossimo contatto per presentarti perfettamente preparato.",
    useCasesLabel: "Casi d'uso",
    useCasesTitle: "Come i Team di Vendita Usano Sythio",
    useCase1Title: "Chiamate di Scoperta",
    useCase1Desc:
      "Registra le tue chiamate di scoperta e lascia che Sythio catturi ogni punto dolente, requisito e segnale d'acquisto. Tu resti completamente presente con il prospect mentre Sythio documenta la conversazione — così il tuo follow-up è preciso e il tuo CRM accurato.",
    useCase2Title: "Demo di Prodotto",
    useCase2Desc:
      "Durante le demo, ogni domanda del prospect rivela cosa gli interessa. Sythio cattura quelle domande, le tue risposte e le funzionalità che hanno risuonato — dandoti un quadro chiaro di cosa enfatizzare nella proposta.",
    useCase3Title: "Chiamate di Negoziazione",
    useCase3Desc:
      "Le discussioni sui prezzi e le negoziazioni contrattuali vanno veloci. Sythio cattura ogni numero menzionato, ogni concessione offerta e ogni condizione discussa — così hai un registro accurato quando è il momento di redigere l'accordo.",
    useCase4Title: "Revisioni Trimestrali",
    useCase4Desc:
      "Le QBR con clienti esistenti sono piene di segnali di espansione, rischi di churn e contesto di rinnovo. Sythio struttura l'intera conversazione in un riassunto con punti chiave e azioni — un riferimento su cui tu e il tuo CSM potete agire immediatamente.",
    pricingTitle: "Gratis per i Team di Vendita per Iniziare",
    pricingDesc:
      "Il piano gratuito ti offre 5 registrazioni al mese — abbastanza per testare Sythio con la tua prossima chiamata commerciale. Senza carta di credito. Quando hai bisogno di più, il piano Pro costa $15/mese per registrazioni illimitate e tutti i 9 formati di output.",
    exploreTitle: "Esplora di Più",
    relatedUseCases: "Casi d'Uso",
    relatedFeatures: "Tutte le Funzionalità",
    relatedCompare: "Confronta Strumenti",
    relatedPricing: "Prezzi",
    ctaTitle1: "Chiudi più affari.",
    ctaTitle2: "Lascia che Sythio gestisca le note.",
    ctaDesc:
      "Registra la tua prossima chiamata commerciale e guarda cosa crea Sythio. Riassunti, azioni, bozze di follow-up e punti chiave — da una sola registrazione.",
    ctaFooter:
      "Il piano gratuito include 5 registrazioni al mese. Senza carta di credito.",
  },
};

export default function SalespeoplePage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

  const outputs = [
    {
      title: c.output1Title,
      description: c.output1Desc,
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      color: "#6366f1",
    },
    {
      title: c.output2Title,
      description: c.output2Desc,
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      color: "#22c55e",
    },
    {
      title: c.output3Title,
      description: c.output3Desc,
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      color: "#0ea5e9",
    },
    {
      title: c.output4Title,
      description: c.output4Desc,
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      color: "#f97316",
    },
  ];

  const useCases = [
    {
      title: c.useCase1Title,
      description: c.useCase1Desc,
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    },
    {
      title: c.useCase2Title,
      description: c.useCase2Desc,
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      title: c.useCase3Title,
      description: c.useCase3Desc,
      icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
    },
    {
      title: c.useCase4Title,
      description: c.useCase4Desc,
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
  ];

  const problems = [
    {
      title: c.problem1Title,
      description: c.problem1Desc,
      icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
      color: "#f43f5e",
    },
    {
      title: c.problem2Title,
      description: c.problem2Desc,
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "#f59e0b",
    },
    {
      title: c.problem3Title,
      description: c.problem3Desc,
      icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
      color: "#6366f1",
    },
  ];

  const relatedLinks = [
    { label: c.relatedUseCases, href: "/use-cases" },
    { label: c.relatedFeatures, href: "/features" },
    { label: c.relatedCompare, href: "/compare" },
    { label: c.relatedPricing, href: "/pricing" },
  ];

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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.label}
            </p>
            <TextReveal>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                {c.heroTitle}
              </h1>
            </TextReveal>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              {c.heroDesc}
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

      {/* The Sales Problem */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.problemLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.problemTitle}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.problemDesc}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {problems.map((item) => (
              <ScrollScale key={item.title}>
              <div
                className="p-8 rounded-2xl bg-background border border-border-light"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${item.color}10` }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
              </ScrollScale>
            ))}
          </div>
          </GsapStagger>
        </div>
      </section>

      {/* What Sythio Creates for Sales Teams */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.outputsLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.outputsTitle}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              {c.outputsDesc}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {outputs.map((output) => (
              <ScrollScale key={output.title}>
              <div
                className="p-8 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${output.color}10` }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={output.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={output.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {output.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {output.description}
                </p>
              </div>
              </ScrollScale>
            ))}
          </div>
          </GsapStagger>
        </div>
      </section>

      {/* How Sales Teams Use Sythio */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.useCasesLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.useCasesTitle}
              </h2>
            </TextReveal>
          </div>

          <GsapStagger stagger={0.08}>
          <div className="space-y-6 max-w-3xl mx-auto">
            {useCases.map((useCase) => (
              <ScrollScale key={useCase.title}>
              <div
                className="p-8 rounded-2xl bg-background border border-border-light"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-border-light flex items-center justify-center shrink-0">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted"
                    >
                      <path d={useCase.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
              </ScrollScale>
            ))}
          </div>
          </GsapStagger>
        </div>
      </section>

      {/* Pricing Highlight */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {c.pricingTitle}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.pricingDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {c.exploreTitle}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {relatedLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group p-5 rounded-xl bg-background border border-border-light hover:border-border hover:shadow-md transition-all duration-300 text-center"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="hero-orb hero-orb-2" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.ctaTitle1}
                <br />
                {c.ctaTitle2}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              {c.ctaDesc}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
            <p className="mt-6 text-sm text-muted-light">
              {c.ctaFooter}
            </p>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
