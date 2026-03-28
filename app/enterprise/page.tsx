"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../components/i18n/language-context";
import type { Locale } from "../components/i18n/translations";
import {
  TextReveal,
  ScrollScale,
  GsapStagger,
  MagneticHover,
  PageReveal,
} from "../components/gsap-effects";

/* ─── Translations ─── */
const content: Record<Locale, Record<string, string>> = {
  en: {
    label: "Enterprise",
    heroTitle: "AI Audio Intelligence for Your Entire Organization",
    heroDesc:
      "Deploy Sythio across your teams. Shared workspaces, enterprise security, powerful integrations, and dedicated support — so every conversation drives results.",
    heroCta: "Contact Sales",
    heroCtaSecondary: "Explore the Product",

    teamsLabel: "Collaboration",
    teamsTitle: "Built for Teams",
    teamsDesc:
      "Sythio Enterprise gives your organization a single platform for capturing, structuring, and sharing audio intelligence across every department.",
    teams1Title: "Team Workspaces",
    teams1Desc:
      "Organize recordings, outputs, and templates by team, project, or client. Everyone works from the same source of truth — no more scattered notes across individual accounts.",
    teams2Title: "Shared Audio Library",
    teams2Desc:
      "Every recording and its structured outputs are stored in a searchable, shared library. Find any meeting, decision, or action item instantly across your organization.",
    teams3Title: "Role-Based Access",
    teams3Desc:
      "Control who can view, edit, and share recordings with granular role-based permissions. Admins manage access at the team, project, and individual level.",
    teams4Title: "Collaboration Tools",
    teams4Desc:
      "Comment on recordings, tag colleagues, share outputs directly to channels, and collaborate on action plans — all within Sythio.",

    securityLabel: "Security",
    securityTitle: "Enterprise Security",
    securityDesc:
      "Your audio data is sensitive. Sythio Enterprise meets the security, compliance, and governance requirements that enterprise organizations demand.",
    security1Title: "SSO / SAML",
    security1Desc:
      "Single sign-on with SAML 2.0 and SCIM provisioning. Integrate with Okta, Azure AD, Google Workspace, or any SAML-compatible identity provider.",
    security2Title: "Encryption",
    security2Desc:
      "All data encrypted at rest with AES-256 and in transit with TLS 1.3. Audio files, transcriptions, and outputs are protected at every layer.",
    security3Title: "Audit Logs",
    security3Desc:
      "Complete audit trail of user activity — who accessed what, when, and from where. Export logs for compliance reviews and security investigations.",
    security4Title: "Data Residency",
    security4Desc:
      "Choose where your data is stored. Sythio supports regional data residency for organizations with geographic compliance requirements.",

    integrationsLabel: "Integrations",
    integrationsTitle: "Powerful Integrations",
    integrationsDesc:
      "Sythio Enterprise fits into your existing workflow. Push structured outputs where your team already works.",
    integration1Title: "Slack",
    integration1Desc: "Post summaries, action plans, and tasks directly to Slack channels after every recording.",
    integration2Title: "Notion",
    integration2Desc: "Send structured outputs to Notion databases and pages — auto-organized by meeting, project, or team.",
    integration3Title: "Salesforce",
    integration3Desc: "Log call summaries, key points, and follow-up tasks to Salesforce records automatically.",
    integration4Title: "Google Workspace",
    integration4Desc: "Sync with Google Calendar, Drive, and Docs. Outputs land where your team already collaborates.",
    integration5Title: "Microsoft 365",
    integration5Desc: "Integrate with Teams, Outlook, and OneDrive. Meeting outputs flow seamlessly into your Microsoft stack.",
    integration6Title: "API & Webhooks",
    integration6Desc: "Full REST API and configurable webhooks. Build custom workflows, connect internal tools, and automate audio processing at scale.",

    solutionsLabel: "Custom solutions",
    solutionsTitle: "Custom Solutions",
    solutionsDesc:
      "Every enterprise is different. Sythio adapts to your organization with custom configurations, dedicated support, and tailored onboarding.",
    solution1Title: "Custom Output Templates",
    solution1Desc:
      "Define custom output formats that match your organization's workflows — branded reports, internal memo structures, CRM-ready summaries, and more.",
    solution2Title: "Dedicated Account Manager",
    solution2Desc:
      "Your team gets a dedicated account manager who understands your organization, helps with rollout, and ensures you get maximum value from Sythio.",
    solution3Title: "Priority Support",
    solution3Desc:
      "Enterprise customers receive priority support with guaranteed response times, direct escalation paths, and proactive monitoring.",
    solution4Title: "Custom Onboarding",
    solution4Desc:
      "Tailored onboarding for your teams — training sessions, workflow configuration, integration setup, and best-practice guidance specific to your industry.",

    pricingLabel: "Pricing",
    pricingTitle: "Custom Pricing for Your Team",
    pricingDesc:
      "Sythio Enterprise pricing is based on team size, usage volume, and the features your organization needs. Every plan includes dedicated support and custom onboarding.",
    pricingCta: "Contact Sales",
    pricingNote: "For teams of 10+. Smaller teams can start with Premium at $12/month per user.",

    ctaTitle: "Ready to Deploy Sythio Across Your Organization?",
    ctaDesc:
      "Talk to our sales team and see how Sythio Enterprise turns every conversation in your organization into structured, actionable intelligence.",
    ctaCta: "Contact Sales",
    ctaSecondary: "Explore Features",
    ctaFooter: "Custom pricing. Dedicated support. No commitment to start the conversation.",
  },
  es: {
    label: "Empresa",
    heroTitle: "Inteligencia de Audio con IA para Toda Tu Organizacion",
    heroDesc:
      "Despliega Sythio en todos tus equipos. Espacios de trabajo compartidos, seguridad empresarial, integraciones potentes y soporte dedicado — para que cada conversacion genere resultados.",
    heroCta: "Contactar Ventas",
    heroCtaSecondary: "Explorar el Producto",

    teamsLabel: "Colaboracion",
    teamsTitle: "Creado para Equipos",
    teamsDesc:
      "Sythio Enterprise ofrece a tu organizacion una plataforma unica para capturar, estructurar y compartir inteligencia de audio en cada departamento.",
    teams1Title: "Espacios de Equipo",
    teams1Desc:
      "Organiza grabaciones, resultados y plantillas por equipo, proyecto o cliente. Todos trabajan desde la misma fuente de verdad — sin notas dispersas en cuentas individuales.",
    teams2Title: "Biblioteca de Audio Compartida",
    teams2Desc:
      "Cada grabacion y sus resultados estructurados se almacenan en una biblioteca compartida y buscable. Encuentra cualquier reunion, decision o accion al instante.",
    teams3Title: "Acceso por Roles",
    teams3Desc:
      "Controla quien puede ver, editar y compartir grabaciones con permisos granulares basados en roles. Los admins gestionan el acceso a nivel de equipo, proyecto e individual.",
    teams4Title: "Herramientas de Colaboracion",
    teams4Desc:
      "Comenta en grabaciones, etiqueta colegas, comparte resultados directamente a canales y colabora en planes de accion — todo dentro de Sythio.",

    securityLabel: "Seguridad",
    securityTitle: "Seguridad Empresarial",
    securityDesc:
      "Tus datos de audio son sensibles. Sythio Enterprise cumple con los requisitos de seguridad, cumplimiento y gobernanza que las organizaciones empresariales exigen.",
    security1Title: "SSO / SAML",
    security1Desc:
      "Inicio de sesion unico con SAML 2.0 y aprovisionamiento SCIM. Integra con Okta, Azure AD, Google Workspace o cualquier proveedor de identidad compatible con SAML.",
    security2Title: "Cifrado",
    security2Desc:
      "Todos los datos cifrados en reposo con AES-256 y en transito con TLS 1.3. Archivos de audio, transcripciones y resultados protegidos en cada capa.",
    security3Title: "Registros de Auditoria",
    security3Desc:
      "Registro completo de actividad de usuarios — quien accedio a que, cuando y desde donde. Exporta registros para revisiones de cumplimiento.",
    security4Title: "Residencia de Datos",
    security4Desc:
      "Elige donde se almacenan tus datos. Sythio soporta residencia de datos regional para organizaciones con requisitos de cumplimiento geografico.",

    integrationsLabel: "Integraciones",
    integrationsTitle: "Integraciones Potentes",
    integrationsDesc:
      "Sythio Enterprise se integra en tu flujo de trabajo existente. Envia resultados estructurados donde tu equipo ya trabaja.",
    integration1Title: "Slack",
    integration1Desc: "Publica resumenes, planes de accion y tareas directamente en canales de Slack despues de cada grabacion.",
    integration2Title: "Notion",
    integration2Desc: "Envia resultados estructurados a bases de datos y paginas de Notion — auto-organizados por reunion, proyecto o equipo.",
    integration3Title: "Salesforce",
    integration3Desc: "Registra resumenes de llamadas, puntos clave y tareas de seguimiento en registros de Salesforce automaticamente.",
    integration4Title: "Google Workspace",
    integration4Desc: "Sincroniza con Google Calendar, Drive y Docs. Los resultados llegan donde tu equipo ya colabora.",
    integration5Title: "Microsoft 365",
    integration5Desc: "Integra con Teams, Outlook y OneDrive. Los resultados de reuniones fluyen perfectamente en tu stack de Microsoft.",
    integration6Title: "API y Webhooks",
    integration6Desc: "API REST completa y webhooks configurables. Crea flujos personalizados, conecta herramientas internas y automatiza el procesamiento de audio a escala.",

    solutionsLabel: "Soluciones personalizadas",
    solutionsTitle: "Soluciones Personalizadas",
    solutionsDesc:
      "Cada empresa es diferente. Sythio se adapta a tu organizacion con configuraciones personalizadas, soporte dedicado e incorporacion a medida.",
    solution1Title: "Plantillas de Salida Personalizadas",
    solution1Desc:
      "Define formatos de salida personalizados que coincidan con los flujos de trabajo de tu organizacion — informes con marca, estructuras de memos internos, resumenes listos para CRM y mas.",
    solution2Title: "Gerente de Cuenta Dedicado",
    solution2Desc:
      "Tu equipo obtiene un gerente de cuenta dedicado que entiende tu organizacion, ayuda con el despliegue y asegura que obtengas el maximo valor de Sythio.",
    solution3Title: "Soporte Prioritario",
    solution3Desc:
      "Los clientes empresariales reciben soporte prioritario con tiempos de respuesta garantizados, rutas de escalacion directa y monitoreo proactivo.",
    solution4Title: "Incorporacion Personalizada",
    solution4Desc:
      "Incorporacion a medida para tus equipos — sesiones de capacitacion, configuracion de flujos, configuracion de integraciones y guia de mejores practicas especifica para tu industria.",

    pricingLabel: "Precios",
    pricingTitle: "Precios Personalizados para Tu Equipo",
    pricingDesc:
      "Los precios de Sythio Enterprise se basan en el tamano del equipo, el volumen de uso y las funciones que tu organizacion necesita. Cada plan incluye soporte dedicado e incorporacion personalizada.",
    pricingCta: "Contactar Ventas",
    pricingNote: "Para equipos de 10+. Equipos mas pequenos pueden empezar con Premium a $12/mes por usuario.",

    ctaTitle: "Listo para Desplegar Sythio en Tu Organizacion?",
    ctaDesc:
      "Habla con nuestro equipo de ventas y descubre como Sythio Enterprise convierte cada conversacion de tu organizacion en inteligencia estructurada y accionable.",
    ctaCta: "Contactar Ventas",
    ctaSecondary: "Explorar Funciones",
    ctaFooter: "Precios personalizados. Soporte dedicado. Sin compromiso para iniciar la conversacion.",
  },
  fr: {
    label: "Entreprise",
    heroTitle: "Intelligence Audio IA pour Toute Votre Organisation",
    heroDesc:
      "Deployez Sythio dans toutes vos equipes. Espaces de travail partages, securite entreprise, integrations puissantes et support dedie — pour que chaque conversation genere des resultats.",
    heroCta: "Contacter les Ventes",
    heroCtaSecondary: "Explorer le Produit",

    teamsLabel: "Collaboration",
    teamsTitle: "Concu pour les Equipes",
    teamsDesc:
      "Sythio Enterprise offre a votre organisation une plateforme unique pour capturer, structurer et partager l'intelligence audio dans chaque departement.",
    teams1Title: "Espaces d'Equipe",
    teams1Desc:
      "Organisez les enregistrements, resultats et modeles par equipe, projet ou client. Tout le monde travaille depuis la meme source de verite — fini les notes dispersees.",
    teams2Title: "Bibliotheque Audio Partagee",
    teams2Desc:
      "Chaque enregistrement et ses resultats structures sont stockes dans une bibliotheque partagee et interrogeable. Trouvez n'importe quelle reunion, decision ou action instantanement.",
    teams3Title: "Acces par Roles",
    teams3Desc:
      "Controlez qui peut voir, modifier et partager les enregistrements avec des permissions granulaires basees sur les roles. Les admins gerent l'acces au niveau equipe, projet et individuel.",
    teams4Title: "Outils de Collaboration",
    teams4Desc:
      "Commentez les enregistrements, mentionnez des collegues, partagez les resultats directement dans les canaux et collaborez sur les plans d'action — le tout dans Sythio.",

    securityLabel: "Securite",
    securityTitle: "Securite Entreprise",
    securityDesc:
      "Vos donnees audio sont sensibles. Sythio Enterprise repond aux exigences de securite, conformite et gouvernance des organisations entreprise.",
    security1Title: "SSO / SAML",
    security1Desc:
      "Authentification unique avec SAML 2.0 et provisionnement SCIM. Integrez avec Okta, Azure AD, Google Workspace ou tout fournisseur d'identite compatible SAML.",
    security2Title: "Chiffrement",
    security2Desc:
      "Toutes les donnees chiffrees au repos avec AES-256 et en transit avec TLS 1.3. Fichiers audio, transcriptions et resultats proteges a chaque couche.",
    security3Title: "Journaux d'Audit",
    security3Desc:
      "Piste d'audit complete de l'activite utilisateur — qui a accede a quoi, quand et d'ou. Exportez les journaux pour les revues de conformite.",
    security4Title: "Residence des Donnees",
    security4Desc:
      "Choisissez ou vos donnees sont stockees. Sythio supporte la residence regionale des donnees pour les organisations avec des exigences de conformite geographique.",

    integrationsLabel: "Integrations",
    integrationsTitle: "Integrations Puissantes",
    integrationsDesc:
      "Sythio Enterprise s'integre dans votre flux de travail existant. Envoyez les resultats structures la ou votre equipe travaille deja.",
    integration1Title: "Slack",
    integration1Desc: "Publiez des resumes, plans d'action et taches directement dans les canaux Slack apres chaque enregistrement.",
    integration2Title: "Notion",
    integration2Desc: "Envoyez des resultats structures vers les bases de donnees et pages Notion — auto-organises par reunion, projet ou equipe.",
    integration3Title: "Salesforce",
    integration3Desc: "Enregistrez les resumes d'appels, points cles et taches de suivi dans les enregistrements Salesforce automatiquement.",
    integration4Title: "Google Workspace",
    integration4Desc: "Synchronisez avec Google Calendar, Drive et Docs. Les resultats arrivent la ou votre equipe collabore deja.",
    integration5Title: "Microsoft 365",
    integration5Desc: "Integrez avec Teams, Outlook et OneDrive. Les resultats de reunions s'integrent parfaitement dans votre stack Microsoft.",
    integration6Title: "API et Webhooks",
    integration6Desc: "API REST complete et webhooks configurables. Creez des flux personnalises, connectez des outils internes et automatisez le traitement audio a grande echelle.",

    solutionsLabel: "Solutions personnalisees",
    solutionsTitle: "Solutions Personnalisees",
    solutionsDesc:
      "Chaque entreprise est differente. Sythio s'adapte a votre organisation avec des configurations personnalisees, un support dedie et une integration sur mesure.",
    solution1Title: "Modeles de Sortie Personnalises",
    solution1Desc:
      "Definissez des formats de sortie personnalises correspondant aux flux de travail de votre organisation — rapports de marque, structures de memos internes, resumes prets pour le CRM et plus.",
    solution2Title: "Gestionnaire de Compte Dedie",
    solution2Desc:
      "Votre equipe obtient un gestionnaire de compte dedie qui comprend votre organisation, aide au deploiement et s'assure que vous tirez le maximum de Sythio.",
    solution3Title: "Support Prioritaire",
    solution3Desc:
      "Les clients entreprise recoivent un support prioritaire avec des temps de reponse garantis, des chemins d'escalade directs et une surveillance proactive.",
    solution4Title: "Integration Personnalisee",
    solution4Desc:
      "Integration sur mesure pour vos equipes — sessions de formation, configuration des flux, mise en place des integrations et guide des meilleures pratiques specifique a votre industrie.",

    pricingLabel: "Tarifs",
    pricingTitle: "Tarifs Personnalises pour Votre Equipe",
    pricingDesc:
      "Les tarifs Sythio Enterprise sont bases sur la taille de l'equipe, le volume d'utilisation et les fonctionnalites dont votre organisation a besoin. Chaque plan inclut un support dedie et une integration personnalisee.",
    pricingCta: "Contacter les Ventes",
    pricingNote: "Pour les equipes de 10+. Les equipes plus petites peuvent commencer avec Premium a 12$/mois par utilisateur.",

    ctaTitle: "Pret a Deployer Sythio dans Votre Organisation ?",
    ctaDesc:
      "Parlez a notre equipe commerciale et decouvrez comment Sythio Enterprise transforme chaque conversation de votre organisation en intelligence structuree et actionnable.",
    ctaCta: "Contacter les Ventes",
    ctaSecondary: "Explorer les Fonctionnalites",
    ctaFooter: "Tarifs personnalises. Support dedie. Sans engagement pour demarrer la conversation.",
  },
  pt: {
    label: "Empresa",
    heroTitle: "Inteligencia de Audio com IA para Toda a Sua Organizacao",
    heroDesc:
      "Implante o Sythio em todas as suas equipes. Espacos de trabalho compartilhados, seguranca empresarial, integracoes poderosas e suporte dedicado — para que cada conversa gere resultados.",
    heroCta: "Contatar Vendas",
    heroCtaSecondary: "Explorar o Produto",

    teamsLabel: "Colaboracao",
    teamsTitle: "Criado para Equipes",
    teamsDesc:
      "Sythio Enterprise oferece a sua organizacao uma plataforma unica para capturar, estruturar e compartilhar inteligencia de audio em cada departamento.",
    teams1Title: "Espacos de Equipe",
    teams1Desc:
      "Organize gravacoes, resultados e modelos por equipe, projeto ou cliente. Todos trabalham a partir da mesma fonte de verdade — sem notas dispersas em contas individuais.",
    teams2Title: "Biblioteca de Audio Compartilhada",
    teams2Desc:
      "Cada gravacao e seus resultados estruturados sao armazenados em uma biblioteca compartilhada e pesquisavel. Encontre qualquer reuniao, decisao ou item de acao instantaneamente.",
    teams3Title: "Acesso por Funcoes",
    teams3Desc:
      "Controle quem pode ver, editar e compartilhar gravacoes com permissoes granulares baseadas em funcoes. Admins gerenciam o acesso no nivel de equipe, projeto e individual.",
    teams4Title: "Ferramentas de Colaboracao",
    teams4Desc:
      "Comente em gravacoes, marque colegas, compartilhe resultados diretamente em canais e colabore em planos de acao — tudo dentro do Sythio.",

    securityLabel: "Seguranca",
    securityTitle: "Seguranca Empresarial",
    securityDesc:
      "Seus dados de audio sao sensiveis. Sythio Enterprise atende aos requisitos de seguranca, conformidade e governanca que organizacoes empresariais exigem.",
    security1Title: "SSO / SAML",
    security1Desc:
      "Login unico com SAML 2.0 e provisionamento SCIM. Integre com Okta, Azure AD, Google Workspace ou qualquer provedor de identidade compativel com SAML.",
    security2Title: "Criptografia",
    security2Desc:
      "Todos os dados criptografados em repouso com AES-256 e em transito com TLS 1.3. Arquivos de audio, transcricoes e resultados protegidos em cada camada.",
    security3Title: "Logs de Auditoria",
    security3Desc:
      "Trilha completa de auditoria da atividade do usuario — quem acessou o que, quando e de onde. Exporte logs para revisoes de conformidade.",
    security4Title: "Residencia de Dados",
    security4Desc:
      "Escolha onde seus dados sao armazenados. Sythio suporta residencia de dados regional para organizacoes com requisitos de conformidade geografica.",

    integrationsLabel: "Integracoes",
    integrationsTitle: "Integracoes Poderosas",
    integrationsDesc:
      "Sythio Enterprise se encaixa no seu fluxo de trabalho existente. Envie resultados estruturados para onde sua equipe ja trabalha.",
    integration1Title: "Slack",
    integration1Desc: "Publique resumos, planos de acao e tarefas diretamente em canais do Slack apos cada gravacao.",
    integration2Title: "Notion",
    integration2Desc: "Envie resultados estruturados para bancos de dados e paginas do Notion — auto-organizados por reuniao, projeto ou equipe.",
    integration3Title: "Salesforce",
    integration3Desc: "Registre resumos de chamadas, pontos-chave e tarefas de acompanhamento em registros do Salesforce automaticamente.",
    integration4Title: "Google Workspace",
    integration4Desc: "Sincronize com Google Calendar, Drive e Docs. Os resultados chegam onde sua equipe ja colabora.",
    integration5Title: "Microsoft 365",
    integration5Desc: "Integre com Teams, Outlook e OneDrive. Os resultados de reunioes fluem perfeitamente na sua stack Microsoft.",
    integration6Title: "API e Webhooks",
    integration6Desc: "API REST completa e webhooks configuraveis. Crie fluxos personalizados, conecte ferramentas internas e automatize o processamento de audio em escala.",

    solutionsLabel: "Solucoes personalizadas",
    solutionsTitle: "Solucoes Personalizadas",
    solutionsDesc:
      "Cada empresa e diferente. Sythio se adapta a sua organizacao com configuracoes personalizadas, suporte dedicado e onboarding sob medida.",
    solution1Title: "Modelos de Saida Personalizados",
    solution1Desc:
      "Defina formatos de saida personalizados que correspondam aos fluxos de trabalho da sua organizacao — relatorios com marca, estruturas de memos internos, resumos prontos para CRM e mais.",
    solution2Title: "Gerente de Conta Dedicado",
    solution2Desc:
      "Sua equipe recebe um gerente de conta dedicado que entende sua organizacao, ajuda com a implantacao e garante que voce obtenha o maximo valor do Sythio.",
    solution3Title: "Suporte Prioritario",
    solution3Desc:
      "Clientes empresariais recebem suporte prioritario com tempos de resposta garantidos, caminhos de escalacao direta e monitoramento proativo.",
    solution4Title: "Onboarding Personalizado",
    solution4Desc:
      "Onboarding sob medida para suas equipes — sessoes de treinamento, configuracao de fluxos, configuracao de integracoes e guia de melhores praticas especifico para sua industria.",

    pricingLabel: "Precos",
    pricingTitle: "Precos Personalizados para Sua Equipe",
    pricingDesc:
      "Os precos do Sythio Enterprise sao baseados no tamanho da equipe, volume de uso e os recursos que sua organizacao precisa. Cada plano inclui suporte dedicado e onboarding personalizado.",
    pricingCta: "Contatar Vendas",
    pricingNote: "Para equipes de 10+. Equipes menores podem comecar com Premium a $12/mes por usuario.",

    ctaTitle: "Pronto para Implantar o Sythio em Toda a Sua Organizacao?",
    ctaDesc:
      "Fale com nossa equipe de vendas e veja como o Sythio Enterprise transforma cada conversa da sua organizacao em inteligencia estruturada e acionavel.",
    ctaCta: "Contatar Vendas",
    ctaSecondary: "Explorar Recursos",
    ctaFooter: "Precos personalizados. Suporte dedicado. Sem compromisso para iniciar a conversa.",
  },
  it: {
    label: "Azienda",
    heroTitle: "Intelligenza Audio IA per Tutta la Tua Organizzazione",
    heroDesc:
      "Distribuisci Sythio in tutti i tuoi team. Spazi di lavoro condivisi, sicurezza aziendale, integrazioni potenti e supporto dedicato — affinche ogni conversazione generi risultati.",
    heroCta: "Contatta le Vendite",
    heroCtaSecondary: "Esplora il Prodotto",

    teamsLabel: "Collaborazione",
    teamsTitle: "Creato per i Team",
    teamsDesc:
      "Sythio Enterprise offre alla tua organizzazione un'unica piattaforma per catturare, strutturare e condividere l'intelligenza audio in ogni dipartimento.",
    teams1Title: "Spazi di Team",
    teams1Desc:
      "Organizza registrazioni, risultati e modelli per team, progetto o cliente. Tutti lavorano dalla stessa fonte di verita — niente piu note sparse in account individuali.",
    teams2Title: "Libreria Audio Condivisa",
    teams2Desc:
      "Ogni registrazione e i suoi risultati strutturati sono archiviati in una libreria condivisa e ricercabile. Trova qualsiasi riunione, decisione o elemento d'azione istantaneamente.",
    teams3Title: "Accesso Basato sui Ruoli",
    teams3Desc:
      "Controlla chi puo visualizzare, modificare e condividere registrazioni con permessi granulari basati sui ruoli. Gli admin gestiscono l'accesso a livello di team, progetto e individuale.",
    teams4Title: "Strumenti di Collaborazione",
    teams4Desc:
      "Commenta le registrazioni, tagga colleghi, condividi risultati direttamente nei canali e collabora sui piani d'azione — tutto all'interno di Sythio.",

    securityLabel: "Sicurezza",
    securityTitle: "Sicurezza Aziendale",
    securityDesc:
      "I tuoi dati audio sono sensibili. Sythio Enterprise soddisfa i requisiti di sicurezza, conformita e governance che le organizzazioni aziendali richiedono.",
    security1Title: "SSO / SAML",
    security1Desc:
      "Single sign-on con SAML 2.0 e provisioning SCIM. Integra con Okta, Azure AD, Google Workspace o qualsiasi provider di identita compatibile SAML.",
    security2Title: "Crittografia",
    security2Desc:
      "Tutti i dati crittografati a riposo con AES-256 e in transito con TLS 1.3. File audio, trascrizioni e risultati protetti a ogni livello.",
    security3Title: "Log di Audit",
    security3Desc:
      "Traccia completa dell'attivita utente — chi ha acceduto a cosa, quando e da dove. Esporta i log per revisioni di conformita e indagini di sicurezza.",
    security4Title: "Residenza dei Dati",
    security4Desc:
      "Scegli dove vengono archiviati i tuoi dati. Sythio supporta la residenza regionale dei dati per organizzazioni con requisiti di conformita geografica.",

    integrationsLabel: "Integrazioni",
    integrationsTitle: "Integrazioni Potenti",
    integrationsDesc:
      "Sythio Enterprise si inserisce nel tuo flusso di lavoro esistente. Invia risultati strutturati dove il tuo team lavora gia.",
    integration1Title: "Slack",
    integration1Desc: "Pubblica riassunti, piani d'azione e attivita direttamente nei canali Slack dopo ogni registrazione.",
    integration2Title: "Notion",
    integration2Desc: "Invia risultati strutturati a database e pagine Notion — auto-organizzati per riunione, progetto o team.",
    integration3Title: "Salesforce",
    integration3Desc: "Registra riassunti delle chiamate, punti chiave e attivita di follow-up nei record Salesforce automaticamente.",
    integration4Title: "Google Workspace",
    integration4Desc: "Sincronizza con Google Calendar, Drive e Docs. I risultati arrivano dove il tuo team collabora gia.",
    integration5Title: "Microsoft 365",
    integration5Desc: "Integra con Teams, Outlook e OneDrive. I risultati delle riunioni fluiscono perfettamente nel tuo stack Microsoft.",
    integration6Title: "API e Webhooks",
    integration6Desc: "API REST completa e webhooks configurabili. Crea flussi personalizzati, collega strumenti interni e automatizza l'elaborazione audio su larga scala.",

    solutionsLabel: "Soluzioni personalizzate",
    solutionsTitle: "Soluzioni Personalizzate",
    solutionsDesc:
      "Ogni azienda e diversa. Sythio si adatta alla tua organizzazione con configurazioni personalizzate, supporto dedicato e onboarding su misura.",
    solution1Title: "Modelli di Output Personalizzati",
    solution1Desc:
      "Definisci formati di output personalizzati che corrispondono ai flussi di lavoro della tua organizzazione — report brandizzati, strutture di memo interni, riassunti pronti per il CRM e altro.",
    solution2Title: "Account Manager Dedicato",
    solution2Desc:
      "Il tuo team ottiene un account manager dedicato che comprende la tua organizzazione, aiuta con il rollout e garantisce che tu ottenga il massimo valore da Sythio.",
    solution3Title: "Supporto Prioritario",
    solution3Desc:
      "I clienti aziendali ricevono supporto prioritario con tempi di risposta garantiti, percorsi di escalation diretti e monitoraggio proattivo.",
    solution4Title: "Onboarding Personalizzato",
    solution4Desc:
      "Onboarding su misura per i tuoi team — sessioni di formazione, configurazione dei flussi, setup delle integrazioni e guida alle best practice specifica per il tuo settore.",

    pricingLabel: "Prezzi",
    pricingTitle: "Prezzi Personalizzati per il Tuo Team",
    pricingDesc:
      "I prezzi di Sythio Enterprise sono basati sulla dimensione del team, il volume di utilizzo e le funzionalita di cui la tua organizzazione ha bisogno. Ogni piano include supporto dedicato e onboarding personalizzato.",
    pricingCta: "Contatta le Vendite",
    pricingNote: "Per team di 10+. Team piu piccoli possono iniziare con Premium a $12/mese per utente.",

    ctaTitle: "Pronto a Distribuire Sythio in Tutta la Tua Organizzazione?",
    ctaDesc:
      "Parla con il nostro team commerciale e scopri come Sythio Enterprise trasforma ogni conversazione della tua organizzazione in intelligenza strutturata e azionabile.",
    ctaCta: "Contatta le Vendite",
    ctaSecondary: "Esplora le Funzionalita",
    ctaFooter: "Prezzi personalizzati. Supporto dedicato. Nessun impegno per iniziare la conversazione.",
  },
};

/* ─── Icon Component ─── */
function FeatureIcon({ path, color }: { path: string; color: string }) {
  return (
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
      style={{ background: `${color}10` }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={path} />
      </svg>
    </div>
  );
}

/* ─── Enterprise Page ─── */
export default function EnterprisePage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

  const teamFeatures = [
    {
      title: c.teams1Title,
      desc: c.teams1Desc,
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      color: "#6366f1",
    },
    {
      title: c.teams2Title,
      desc: c.teams2Desc,
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      color: "#8b5cf6",
    },
    {
      title: c.teams3Title,
      desc: c.teams3Desc,
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      color: "#0ea5e9",
    },
    {
      title: c.teams4Title,
      desc: c.teams4Desc,
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
      color: "#22c55e",
    },
  ];

  const securityFeatures = [
    {
      title: c.security1Title,
      desc: c.security1Desc,
      icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
      color: "#f43f5e",
    },
    {
      title: c.security2Title,
      desc: c.security2Desc,
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      color: "#22c55e",
    },
    {
      title: c.security3Title,
      desc: c.security3Desc,
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      color: "#f59e0b",
    },
    {
      title: c.security4Title,
      desc: c.security4Desc,
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "#6366f1",
    },
  ];

  const integrations = [
    {
      title: c.integration1Title,
      desc: c.integration1Desc,
      icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
      color: "#e11d48",
    },
    {
      title: c.integration2Title,
      desc: c.integration2Desc,
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      color: "#171717",
    },
    {
      title: c.integration3Title,
      desc: c.integration3Desc,
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      color: "#0ea5e9",
    },
    {
      title: c.integration4Title,
      desc: c.integration4Desc,
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
      color: "#4285f4",
    },
    {
      title: c.integration5Title,
      desc: c.integration5Desc,
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      color: "#0078d4",
    },
    {
      title: c.integration6Title,
      desc: c.integration6Desc,
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      color: "#8b5cf6",
    },
  ];

  const solutions = [
    {
      title: c.solution1Title,
      desc: c.solution1Desc,
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      color: "#d946ef",
    },
    {
      title: c.solution2Title,
      desc: c.solution2Desc,
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      color: "#0ea5e9",
    },
    {
      title: c.solution3Title,
      desc: c.solution3Desc,
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      color: "#f59e0b",
    },
    {
      title: c.solution4Title,
      desc: c.solution4Desc,
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      color: "#22c55e",
    },
  ];

  return (
    <PageReveal>
      {/* ─── Hero ─── */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-animated-bg overflow-hidden">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border-light mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-muted">{c.label}</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
            >
              {c.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto"
            >
              {c.heroDesc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <MagneticHover>
                <Link
                  href="/contact"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  {c.heroCta}
                </Link>
              </MagneticHover>
              <Link
                href="/product"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
              >
                {c.heroCtaSecondary}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Built for Teams ─── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.teamsLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.teamsTitle}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              {c.teamsDesc}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {teamFeatures.map((item) => (
                <ScrollScale key={item.title}>
                  <div className="p-7 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500">
                    <FeatureIcon path={item.icon} color={item.color} />
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── Enterprise Security ─── */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.securityLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.securityTitle}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              {c.securityDesc}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {securityFeatures.map((item) => (
                <ScrollScale key={item.title}>
                  <div className="p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500">
                    <FeatureIcon path={item.icon} color={item.color} />
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── Powerful Integrations ─── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.integrationsLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.integrationsTitle}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              {c.integrationsDesc}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {integrations.map((item) => (
                <ScrollScale key={item.title}>
                  <div className="p-7 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500">
                    <FeatureIcon path={item.icon} color={item.color} />
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── Custom Solutions ─── */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.solutionsLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.solutionsTitle}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              {c.solutionsDesc}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {solutions.map((item) => (
                <ScrollScale key={item.title}>
                  <div className="p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500">
                    <FeatureIcon path={item.icon} color={item.color} />
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.pricingLabel}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.pricingTitle}
              </h2>
            </TextReveal>
          </div>

          <ScrollScale>
            <div className="max-w-2xl mx-auto">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative flex flex-col items-center rounded-3xl p-10 lg:p-14 bg-foreground text-white shadow-[0_8px_32px_rgba(0,0,0,0.12),0_32px_80px_rgba(0,0,0,0.16)] transition-all duration-500"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {c.label}
                </h3>
                <p className="text-base text-white/70 leading-relaxed text-center max-w-lg mb-10">
                  {c.pricingDesc}
                </p>
                <MagneticHover strength={0.15}>
                  <Link
                    href="/contact"
                    className="h-14 px-12 inline-flex items-center justify-center rounded-full bg-white text-foreground text-base font-medium hover:bg-white/90 transition-all duration-300 shadow-sm"
                  >
                    {c.pricingCta}
                  </Link>
                </MagneticHover>
                <p className="mt-6 text-sm text-white/50">
                  {c.pricingNote}
                </p>
              </motion.div>
            </div>
          </ScrollScale>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 md:py-44 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="hero-orb hero-orb-2" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.ctaTitle}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              {c.ctaDesc}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticHover>
                <Link
                  href="/contact"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  {c.ctaCta}
                </Link>
              </MagneticHover>
              <Link
                href="/features"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
              >
                {c.ctaSecondary}
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
