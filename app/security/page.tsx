"use client";

import Link from "next/link";
import { useLanguage } from "../components/i18n/language-context";
import type { Locale } from "../components/i18n/translations";
import {
  TextReveal,
  ScrollScale,
  GsapStagger,
  MagneticHover,
  PageReveal,
} from "../components/gsap-effects";

/* ─── Icons ─── */
const icons = {
  shield:
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  lock:
    "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  server:
    "M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
  document:
    "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  eye:
    "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  cloud:
    "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  trash:
    "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
  globe:
    "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  key:
    "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
  check:
    "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  download:
    "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
  fingerprint:
    "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4",
  user:
    "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
};

/* ─── Translations ─── */
const content: Record<Locale, {
  label: string;
  heroTitle: string;
  heroDesc: string;
  trustBadge: string;
  s1Label: string;
  s1Title: string;
  s1Desc: string;
  s1c1Title: string;
  s1c1Desc: string;
  s1c2Title: string;
  s1c2Desc: string;
  s1c3Title: string;
  s1c3Desc: string;
  s1c4Title: string;
  s1c4Desc: string;
  s2Label: string;
  s2Title: string;
  s2Desc: string;
  s2c1Title: string;
  s2c1Desc: string;
  s2c2Title: string;
  s2c2Desc: string;
  s2c3Title: string;
  s2c3Desc: string;
  s3Label: string;
  s3Title: string;
  s3Desc: string;
  s3c1Title: string;
  s3c1Desc: string;
  s3c2Title: string;
  s3c2Desc: string;
  s3c3Title: string;
  s3c3Desc: string;
  s4Label: string;
  s4Title: string;
  s4Desc: string;
  s4c1Title: string;
  s4c1Desc: string;
  s4c2Title: string;
  s4c2Desc: string;
  s4c3Title: string;
  s4c3Desc: string;
  s5Label: string;
  s5Title: string;
  s5Desc: string;
  s5c1Title: string;
  s5c1Desc: string;
  s5c2Title: string;
  s5c2Desc: string;
  s5c3Title: string;
  s5c3Desc: string;
  s5c4Title: string;
  s5c4Desc: string;
  ctaTitle1: string;
  ctaTitle2: string;
  ctaDesc: string;
  ctaFooter: string;
}> = {
  /* ================================================================
   * ENGLISH
   * ================================================================ */
  en: {
    label: "Security",
    heroTitle: "Your Audio Data, Fully Protected",
    heroDesc:
      "Sythio is built with enterprise-grade security from the ground up. Every recording, transcript, and output is encrypted, private, and under your control. We never train on your data.",
    trustBadge: "Enterprise-grade security",
    s1Label: "Data protection",
    s1Title: "Encrypted at Every Layer",
    s1Desc:
      "Your data is protected with industry-leading encryption standards, both when it moves through our systems and when it rests in our infrastructure.",
    s1c1Title: "TLS 1.3 In Transit",
    s1c1Desc:
      "All data transmitted between your device and Sythio is encrypted using TLS 1.3, the latest and strongest transport layer security protocol. No eavesdropping, no interception.",
    s1c2Title: "AES-256 At Rest",
    s1c2Desc:
      "Audio files, transcripts, and all generated outputs are encrypted at rest using AES-256 encryption — the same standard used by governments and financial institutions worldwide.",
    s1c3Title: "Encrypted Backups",
    s1c3Desc:
      "All backup data is encrypted with the same AES-256 standard. Even in disaster recovery scenarios, your data remains fully protected and inaccessible to unauthorized parties.",
    s1c4Title: "Key Management",
    s1c4Desc:
      "Encryption keys are managed through a dedicated key management service with automatic rotation, strict access controls, and complete audit trails for every key operation.",
    s2Label: "Privacy by design",
    s2Title: "Your Data Stays Yours",
    s2Desc:
      "Privacy is not an afterthought at Sythio. It is a foundational principle that shapes every product decision, every architecture choice, and every line of code we write.",
    s2c1Title: "No Training on Your Data",
    s2c1Desc:
      "We never use your audio, transcripts, or outputs to train AI models. Your content is processed to generate your results and nothing else. Period.",
    s2c2Title: "Delete Anytime",
    s2c2Desc:
      "You have full control over your data lifecycle. Delete individual recordings or your entire account at any time. Deletion is permanent and propagates to all backups within 30 days.",
    s2c3Title: "No Third-Party Sharing",
    s2c3Desc:
      "Your data is never sold, shared, or made available to third parties for marketing, analytics, or any other purpose. We make money from subscriptions, not your data.",
    s3Label: "Compliance",
    s3Title: "Built for Regulatory Requirements",
    s3Desc:
      "Sythio is designed to help your organization meet its compliance obligations. We maintain the certifications and processes that enterprise and regulated industries require.",
    s3c1Title: "GDPR Compliant",
    s3c1Desc:
      "Sythio is fully compliant with the General Data Protection Regulation. We support data subject rights, maintain lawful processing bases, and provide transparent data processing documentation.",
    s3c2Title: "SOC 2 Type II",
    s3c2Desc:
      "Our systems and processes are audited against the SOC 2 Trust Services Criteria. This covers security, availability, processing integrity, confidentiality, and privacy controls.",
    s3c3Title: "Data Processing Agreements",
    s3c3Desc:
      "We provide Data Processing Agreements (DPAs) for all enterprise customers. These agreements formalize our obligations as a data processor and document the technical and organizational measures we maintain.",
    s4Label: "Infrastructure",
    s4Title: "Secure Cloud Architecture",
    s4Desc:
      "Our infrastructure is designed with defense in depth. Multiple layers of security controls protect your data from external threats and internal misuse.",
    s4c1Title: "Cloud Security",
    s4c1Desc:
      "Sythio runs on enterprise cloud infrastructure with SOC 2 and ISO 27001 certified data centers. Network isolation, firewalls, and DDoS protection are active at all times.",
    s4c2Title: "Access Controls",
    s4c2Desc:
      "Internal access to production systems follows the principle of least privilege. All access requires multi-factor authentication, and every action is logged and auditable.",
    s4c3Title: "Continuous Monitoring",
    s4c3Desc:
      "Our security team monitors systems 24/7 with automated threat detection, anomaly alerts, and incident response procedures. Vulnerabilities are patched proactively.",
    s5Label: "Your rights",
    s5Title: "You Control Your Data",
    s5Desc:
      "We believe your data belongs to you. Sythio provides clear, simple tools for exercising your data rights — no support tickets, no waiting periods.",
    s5c1Title: "Right to Access",
    s5c1Desc:
      "Request a complete copy of all data Sythio holds about you at any time. We provide your data in standard, machine-readable formats within the timeframes required by applicable law.",
    s5c2Title: "Right to Deletion",
    s5c2Desc:
      "Delete your recordings, outputs, or your entire account. Deletion requests are processed immediately and propagated to all backup systems within 30 days.",
    s5c3Title: "Right to Portability",
    s5c3Desc:
      "Export all your data — recordings, transcripts, summaries, and every output — in standard formats. Your data is never locked in. Move it wherever you need.",
    s5c4Title: "Right to Data Export",
    s5c4Desc:
      "Download your complete data archive at any time through your account settings. We provide exports in commonly used formats so you can integrate with your existing workflows.",
    ctaTitle1: "Security should never be a question.",
    ctaTitle2: "With Sythio, it is the answer.",
    ctaDesc:
      "Start using Sythio for free and experience enterprise-grade security from your first recording. Your data is encrypted, private, and always under your control.",
    ctaFooter:
      "Free plan includes 5 recordings per month. No credit card needed.",
  },

  /* ================================================================
   * SPANISH
   * ================================================================ */
  es: {
    label: "Seguridad",
    heroTitle: "Tus Datos de Audio, Completamente Protegidos",
    heroDesc:
      "Sythio esta construido con seguridad de nivel empresarial desde cero. Cada grabacion, transcripcion y resultado esta cifrado, es privado y esta bajo tu control. Nunca entrenamos con tus datos.",
    trustBadge: "Seguridad de nivel empresarial",
    s1Label: "Proteccion de datos",
    s1Title: "Cifrado en Cada Capa",
    s1Desc:
      "Tus datos estan protegidos con estandares de cifrado lideres en la industria, tanto cuando se mueven por nuestros sistemas como cuando descansan en nuestra infraestructura.",
    s1c1Title: "TLS 1.3 en Transito",
    s1c1Desc:
      "Todos los datos transmitidos entre tu dispositivo y Sythio estan cifrados con TLS 1.3, el protocolo de seguridad de capa de transporte mas reciente y robusto. Sin espionaje, sin intercepcion.",
    s1c2Title: "AES-256 en Reposo",
    s1c2Desc:
      "Los archivos de audio, transcripciones y todos los resultados generados estan cifrados en reposo con AES-256 — el mismo estandar utilizado por gobiernos e instituciones financieras en todo el mundo.",
    s1c3Title: "Copias de Seguridad Cifradas",
    s1c3Desc:
      "Todos los datos de respaldo estan cifrados con el mismo estandar AES-256. Incluso en escenarios de recuperacion ante desastres, tus datos permanecen completamente protegidos.",
    s1c4Title: "Gestion de Claves",
    s1c4Desc:
      "Las claves de cifrado se gestionan mediante un servicio dedicado con rotacion automatica, controles de acceso estrictos y registros de auditoria completos.",
    s2Label: "Privacidad por diseno",
    s2Title: "Tus Datos Son Tuyos",
    s2Desc:
      "La privacidad no es un agregado en Sythio. Es un principio fundamental que define cada decision de producto, cada eleccion de arquitectura y cada linea de codigo.",
    s2c1Title: "Sin Entrenamiento con tus Datos",
    s2c1Desc:
      "Nunca usamos tu audio, transcripciones o resultados para entrenar modelos de IA. Tu contenido se procesa para generar tus resultados y nada mas.",
    s2c2Title: "Elimina Cuando Quieras",
    s2c2Desc:
      "Tienes control total sobre el ciclo de vida de tus datos. Elimina grabaciones individuales o tu cuenta completa en cualquier momento. La eliminacion es permanente.",
    s2c3Title: "Sin Compartir con Terceros",
    s2c3Desc:
      "Tus datos nunca se venden, comparten ni se ponen a disposicion de terceros para marketing, analisis ni ningun otro proposito. Ganamos dinero con suscripciones, no con tus datos.",
    s3Label: "Cumplimiento",
    s3Title: "Disenado para Requisitos Regulatorios",
    s3Desc:
      "Sythio esta disenado para ayudar a tu organizacion a cumplir sus obligaciones normativas. Mantenemos las certificaciones y procesos que las industrias empresariales y reguladas requieren.",
    s3c1Title: "Cumplimiento GDPR",
    s3c1Desc:
      "Sythio cumple completamente con el Reglamento General de Proteccion de Datos. Apoyamos los derechos de los sujetos de datos, mantenemos bases legales de procesamiento y proporcionamos documentacion transparente.",
    s3c2Title: "SOC 2 Tipo II",
    s3c2Desc:
      "Nuestros sistemas y procesos son auditados contra los Criterios de Servicios de Confianza SOC 2. Esto cubre seguridad, disponibilidad, integridad de procesamiento, confidencialidad y controles de privacidad.",
    s3c3Title: "Acuerdos de Procesamiento de Datos",
    s3c3Desc:
      "Proporcionamos Acuerdos de Procesamiento de Datos (DPA) para todos los clientes empresariales. Estos acuerdos formalizan nuestras obligaciones como procesador de datos.",
    s4Label: "Infraestructura",
    s4Title: "Arquitectura Cloud Segura",
    s4Desc:
      "Nuestra infraestructura esta disenada con defensa en profundidad. Multiples capas de controles de seguridad protegen tus datos de amenazas externas y uso indebido interno.",
    s4c1Title: "Seguridad en la Nube",
    s4c1Desc:
      "Sythio opera en infraestructura cloud empresarial con centros de datos certificados SOC 2 e ISO 27001. Aislamiento de red, firewalls y proteccion DDoS estan activos en todo momento.",
    s4c2Title: "Controles de Acceso",
    s4c2Desc:
      "El acceso interno a sistemas de produccion sigue el principio de menor privilegio. Todo acceso requiere autenticacion multifactor y cada accion queda registrada.",
    s4c3Title: "Monitoreo Continuo",
    s4c3Desc:
      "Nuestro equipo de seguridad monitorea los sistemas 24/7 con deteccion automatizada de amenazas, alertas de anomalias y procedimientos de respuesta a incidentes.",
    s5Label: "Tus derechos",
    s5Title: "Tu Controlas tus Datos",
    s5Desc:
      "Creemos que tus datos te pertenecen. Sythio proporciona herramientas claras y simples para ejercer tus derechos sobre tus datos.",
    s5c1Title: "Derecho de Acceso",
    s5c1Desc:
      "Solicita una copia completa de todos los datos que Sythio tiene sobre ti en cualquier momento. Proporcionamos tus datos en formatos estandar y legibles por maquina.",
    s5c2Title: "Derecho de Eliminacion",
    s5c2Desc:
      "Elimina tus grabaciones, resultados o tu cuenta completa. Las solicitudes de eliminacion se procesan inmediatamente y se propagan a todos los sistemas de respaldo en 30 dias.",
    s5c3Title: "Derecho de Portabilidad",
    s5c3Desc:
      "Exporta todos tus datos — grabaciones, transcripciones, resumenes y cada resultado — en formatos estandar. Tus datos nunca estan bloqueados.",
    s5c4Title: "Derecho de Exportacion",
    s5c4Desc:
      "Descarga tu archivo de datos completo en cualquier momento desde la configuracion de tu cuenta. Proporcionamos exportaciones en formatos de uso comun.",
    ctaTitle1: "La seguridad nunca deberia ser una pregunta.",
    ctaTitle2: "Con Sythio, es la respuesta.",
    ctaDesc:
      "Comienza a usar Sythio gratis y experimenta seguridad de nivel empresarial desde tu primera grabacion. Tus datos estan cifrados, son privados y siempre bajo tu control.",
    ctaFooter:
      "El plan gratuito incluye 5 grabaciones al mes. Sin tarjeta de credito.",
  },

  /* ================================================================
   * FRENCH
   * ================================================================ */
  fr: {
    label: "Securite",
    heroTitle: "Vos Donnees Audio, Entierement Protegees",
    heroDesc:
      "Sythio est concu avec une securite de niveau entreprise des le depart. Chaque enregistrement, transcription et resultat est chiffre, prive et sous votre controle. Nous n'entrainons jamais nos modeles sur vos donnees.",
    trustBadge: "Securite de niveau entreprise",
    s1Label: "Protection des donnees",
    s1Title: "Chiffrement a Chaque Niveau",
    s1Desc:
      "Vos donnees sont protegees par des standards de chiffrement leaders du secteur, tant lorsqu'elles transitent dans nos systemes que lorsqu'elles reposent dans notre infrastructure.",
    s1c1Title: "TLS 1.3 en Transit",
    s1c1Desc:
      "Toutes les donnees transmises entre votre appareil et Sythio sont chiffrees avec TLS 1.3, le protocole de securite de couche de transport le plus recent et le plus robuste.",
    s1c2Title: "AES-256 au Repos",
    s1c2Desc:
      "Les fichiers audio, transcriptions et tous les resultats generes sont chiffres au repos avec AES-256 — le meme standard utilise par les gouvernements et institutions financieres du monde entier.",
    s1c3Title: "Sauvegardes Chiffrees",
    s1c3Desc:
      "Toutes les donnees de sauvegarde sont chiffrees avec le meme standard AES-256. Meme dans les scenarios de reprise apres sinistre, vos donnees restent entierement protegees.",
    s1c4Title: "Gestion des Cles",
    s1c4Desc:
      "Les cles de chiffrement sont gerees par un service dedie avec rotation automatique, controles d'acces stricts et pistes d'audit completes.",
    s2Label: "Confidentialite par conception",
    s2Title: "Vos Donnees Restent les Votres",
    s2Desc:
      "La confidentialite n'est pas une reflexion apres coup chez Sythio. C'est un principe fondamental qui guide chaque decision produit, chaque choix d'architecture et chaque ligne de code.",
    s2c1Title: "Pas d'Entrainement sur vos Donnees",
    s2c1Desc:
      "Nous n'utilisons jamais votre audio, vos transcriptions ou vos resultats pour entrainer des modeles d'IA. Votre contenu est traite pour generer vos resultats et rien d'autre.",
    s2c2Title: "Supprimez a Tout Moment",
    s2c2Desc:
      "Vous avez un controle total sur le cycle de vie de vos donnees. Supprimez des enregistrements individuels ou votre compte entier a tout moment. La suppression est permanente.",
    s2c3Title: "Aucun Partage avec des Tiers",
    s2c3Desc:
      "Vos donnees ne sont jamais vendues, partagees ou mises a disposition de tiers pour le marketing, l'analyse ou tout autre objectif. Nous gagnons de l'argent avec les abonnements, pas vos donnees.",
    s3Label: "Conformite",
    s3Title: "Concu pour les Exigences Reglementaires",
    s3Desc:
      "Sythio est concu pour aider votre organisation a respecter ses obligations de conformite. Nous maintenons les certifications et processus requis par les industries reglementees.",
    s3c1Title: "Conforme au RGPD",
    s3c1Desc:
      "Sythio est entierement conforme au Reglement General sur la Protection des Donnees. Nous respectons les droits des personnes concernees et maintenons des bases legales de traitement.",
    s3c2Title: "SOC 2 Type II",
    s3c2Desc:
      "Nos systemes et processus sont audites selon les Criteres de Services de Confiance SOC 2. Cela couvre la securite, la disponibilite, l'integrite du traitement, la confidentialite et la vie privee.",
    s3c3Title: "Accords de Traitement des Donnees",
    s3c3Desc:
      "Nous fournissons des Accords de Traitement des Donnees (DPA) pour tous les clients entreprise. Ces accords formalisent nos obligations en tant que sous-traitant de donnees.",
    s4Label: "Infrastructure",
    s4Title: "Architecture Cloud Securisee",
    s4Desc:
      "Notre infrastructure est concue avec une defense en profondeur. Plusieurs couches de controles de securite protegent vos donnees contre les menaces externes et les abus internes.",
    s4c1Title: "Securite Cloud",
    s4c1Desc:
      "Sythio fonctionne sur une infrastructure cloud entreprise avec des centres de donnees certifies SOC 2 et ISO 27001. Isolation reseau, pare-feux et protection DDoS sont actifs en permanence.",
    s4c2Title: "Controles d'Acces",
    s4c2Desc:
      "L'acces interne aux systemes de production suit le principe du moindre privilege. Tout acces necessite une authentification multifacteur et chaque action est enregistree.",
    s4c3Title: "Surveillance Continue",
    s4c3Desc:
      "Notre equipe de securite surveille les systemes 24h/24 avec detection automatisee des menaces, alertes d'anomalies et procedures de reponse aux incidents.",
    s5Label: "Vos droits",
    s5Title: "Vous Controlez vos Donnees",
    s5Desc:
      "Nous croyons que vos donnees vous appartiennent. Sythio fournit des outils clairs et simples pour exercer vos droits sur vos donnees.",
    s5c1Title: "Droit d'Acces",
    s5c1Desc:
      "Demandez une copie complete de toutes les donnees que Sythio detient sur vous a tout moment. Nous fournissons vos donnees dans des formats standards lisibles par machine.",
    s5c2Title: "Droit de Suppression",
    s5c2Desc:
      "Supprimez vos enregistrements, resultats ou votre compte entier. Les demandes de suppression sont traitees immediatement et propagees a tous les systemes de sauvegarde sous 30 jours.",
    s5c3Title: "Droit a la Portabilite",
    s5c3Desc:
      "Exportez toutes vos donnees — enregistrements, transcriptions, resumes et chaque resultat — dans des formats standards. Vos donnees ne sont jamais verrouillees.",
    s5c4Title: "Droit a l'Export",
    s5c4Desc:
      "Telechargez votre archive de donnees complete a tout moment depuis les parametres de votre compte. Nous fournissons les exports dans des formats couramment utilises.",
    ctaTitle1: "La securite ne devrait jamais etre une question.",
    ctaTitle2: "Avec Sythio, c'est la reponse.",
    ctaDesc:
      "Commencez a utiliser Sythio gratuitement et beneficiez d'une securite de niveau entreprise des votre premier enregistrement. Vos donnees sont chiffrees, privees et toujours sous votre controle.",
    ctaFooter:
      "Le plan gratuit inclut 5 enregistrements par mois. Sans carte de credit.",
  },

  /* ================================================================
   * PORTUGUESE
   * ================================================================ */
  pt: {
    label: "Seguranca",
    heroTitle: "Seus Dados de Audio, Totalmente Protegidos",
    heroDesc:
      "O Sythio e construido com seguranca de nivel empresarial desde o inicio. Cada gravacao, transcricao e resultado e criptografado, privado e sob seu controle. Nunca treinamos com seus dados.",
    trustBadge: "Seguranca de nivel empresarial",
    s1Label: "Protecao de dados",
    s1Title: "Criptografado em Cada Camada",
    s1Desc:
      "Seus dados sao protegidos com padroes de criptografia lideres do setor, tanto quando se movem pelos nossos sistemas quanto quando descansam em nossa infraestrutura.",
    s1c1Title: "TLS 1.3 em Transito",
    s1c1Desc:
      "Todos os dados transmitidos entre seu dispositivo e o Sythio sao criptografados com TLS 1.3, o protocolo de seguranca de camada de transporte mais recente e robusto.",
    s1c2Title: "AES-256 em Repouso",
    s1c2Desc:
      "Arquivos de audio, transcricoes e todos os resultados gerados sao criptografados em repouso com AES-256 — o mesmo padrao usado por governos e instituicoes financeiras em todo o mundo.",
    s1c3Title: "Backups Criptografados",
    s1c3Desc:
      "Todos os dados de backup sao criptografados com o mesmo padrao AES-256. Mesmo em cenarios de recuperacao de desastres, seus dados permanecem totalmente protegidos.",
    s1c4Title: "Gerenciamento de Chaves",
    s1c4Desc:
      "As chaves de criptografia sao gerenciadas por um servico dedicado com rotacao automatica, controles de acesso rigorosos e trilhas de auditoria completas.",
    s2Label: "Privacidade por design",
    s2Title: "Seus Dados Continuam Seus",
    s2Desc:
      "A privacidade nao e um complemento no Sythio. E um principio fundamental que molda cada decisao de produto, cada escolha de arquitetura e cada linha de codigo.",
    s2c1Title: "Sem Treinamento com seus Dados",
    s2c1Desc:
      "Nunca usamos seu audio, transcricoes ou resultados para treinar modelos de IA. Seu conteudo e processado para gerar seus resultados e nada mais.",
    s2c2Title: "Exclua Quando Quiser",
    s2c2Desc:
      "Voce tem controle total sobre o ciclo de vida dos seus dados. Exclua gravacoes individuais ou sua conta completa a qualquer momento. A exclusao e permanente.",
    s2c3Title: "Sem Compartilhamento com Terceiros",
    s2c3Desc:
      "Seus dados nunca sao vendidos, compartilhados ou disponibilizados para terceiros para marketing, analise ou qualquer outro proposito. Ganhamos dinheiro com assinaturas, nao com seus dados.",
    s3Label: "Conformidade",
    s3Title: "Projetado para Requisitos Regulatorios",
    s3Desc:
      "O Sythio e projetado para ajudar sua organizacao a cumprir suas obrigacoes regulatorias. Mantemos as certificacoes e processos exigidos por industrias regulamentadas.",
    s3c1Title: "Conformidade GDPR",
    s3c1Desc:
      "O Sythio esta em total conformidade com o Regulamento Geral de Protecao de Dados. Apoiamos os direitos dos titulares de dados e mantemos bases legais de processamento.",
    s3c2Title: "SOC 2 Tipo II",
    s3c2Desc:
      "Nossos sistemas e processos sao auditados de acordo com os Criterios de Servicos de Confianca SOC 2. Isso cobre seguranca, disponibilidade, integridade de processamento, confidencialidade e privacidade.",
    s3c3Title: "Acordos de Processamento de Dados",
    s3c3Desc:
      "Fornecemos Acordos de Processamento de Dados (DPA) para todos os clientes empresariais. Esses acordos formalizam nossas obrigacoes como processador de dados.",
    s4Label: "Infraestrutura",
    s4Title: "Arquitetura Cloud Segura",
    s4Desc:
      "Nossa infraestrutura e projetada com defesa em profundidade. Multiplas camadas de controles de seguranca protegem seus dados contra ameacas externas e uso indevido interno.",
    s4c1Title: "Seguranca na Nuvem",
    s4c1Desc:
      "O Sythio opera em infraestrutura cloud empresarial com data centers certificados SOC 2 e ISO 27001. Isolamento de rede, firewalls e protecao DDoS estao ativos o tempo todo.",
    s4c2Title: "Controles de Acesso",
    s4c2Desc:
      "O acesso interno a sistemas de producao segue o principio do menor privilegio. Todo acesso requer autenticacao multifator e cada acao e registrada.",
    s4c3Title: "Monitoramento Continuo",
    s4c3Desc:
      "Nossa equipe de seguranca monitora os sistemas 24/7 com deteccao automatizada de ameacas, alertas de anomalias e procedimentos de resposta a incidentes.",
    s5Label: "Seus direitos",
    s5Title: "Voce Controla seus Dados",
    s5Desc:
      "Acreditamos que seus dados pertencem a voce. O Sythio fornece ferramentas claras e simples para exercer seus direitos sobre seus dados.",
    s5c1Title: "Direito de Acesso",
    s5c1Desc:
      "Solicite uma copia completa de todos os dados que o Sythio possui sobre voce a qualquer momento. Fornecemos seus dados em formatos padrao legiveis por maquina.",
    s5c2Title: "Direito de Exclusao",
    s5c2Desc:
      "Exclua suas gravacoes, resultados ou sua conta completa. As solicitacoes de exclusao sao processadas imediatamente e propagadas para todos os sistemas de backup em 30 dias.",
    s5c3Title: "Direito a Portabilidade",
    s5c3Desc:
      "Exporte todos os seus dados — gravacoes, transcricoes, resumos e cada resultado — em formatos padrao. Seus dados nunca estao bloqueados.",
    s5c4Title: "Direito a Exportacao",
    s5c4Desc:
      "Baixe seu arquivo de dados completo a qualquer momento nas configuracoes da sua conta. Fornecemos exportacoes em formatos de uso comum.",
    ctaTitle1: "A seguranca nunca deveria ser uma pergunta.",
    ctaTitle2: "Com o Sythio, e a resposta.",
    ctaDesc:
      "Comece a usar o Sythio gratuitamente e experimente seguranca de nivel empresarial desde sua primeira gravacao. Seus dados sao criptografados, privados e sempre sob seu controle.",
    ctaFooter:
      "O plano gratuito inclui 5 gravacoes por mes. Sem cartao de credito.",
  },

  /* ================================================================
   * ITALIAN
   * ================================================================ */
  it: {
    label: "Sicurezza",
    heroTitle: "I Tuoi Dati Audio, Completamente Protetti",
    heroDesc:
      "Sythio e costruito con sicurezza di livello enterprise fin dall'inizio. Ogni registrazione, trascrizione e risultato e crittografato, privato e sotto il tuo controllo. Non addestriamo mai i nostri modelli sui tuoi dati.",
    trustBadge: "Sicurezza di livello enterprise",
    s1Label: "Protezione dei dati",
    s1Title: "Crittografato ad Ogni Livello",
    s1Desc:
      "I tuoi dati sono protetti con standard di crittografia leader del settore, sia quando si muovono attraverso i nostri sistemi sia quando riposano nella nostra infrastruttura.",
    s1c1Title: "TLS 1.3 in Transito",
    s1c1Desc:
      "Tutti i dati trasmessi tra il tuo dispositivo e Sythio sono crittografati con TLS 1.3, il protocollo di sicurezza del livello di trasporto piu recente e robusto.",
    s1c2Title: "AES-256 a Riposo",
    s1c2Desc:
      "I file audio, le trascrizioni e tutti i risultati generati sono crittografati a riposo con AES-256 — lo stesso standard utilizzato da governi e istituzioni finanziarie in tutto il mondo.",
    s1c3Title: "Backup Crittografati",
    s1c3Desc:
      "Tutti i dati di backup sono crittografati con lo stesso standard AES-256. Anche negli scenari di disaster recovery, i tuoi dati rimangono completamente protetti.",
    s1c4Title: "Gestione delle Chiavi",
    s1c4Desc:
      "Le chiavi di crittografia sono gestite tramite un servizio dedicato con rotazione automatica, controlli di accesso rigorosi e audit trail completi.",
    s2Label: "Privacy by design",
    s2Title: "I Tuoi Dati Restano Tuoi",
    s2Desc:
      "La privacy non e un ripensamento in Sythio. E un principio fondamentale che plasma ogni decisione di prodotto, ogni scelta architetturale e ogni riga di codice.",
    s2c1Title: "Nessun Addestramento sui Tuoi Dati",
    s2c1Desc:
      "Non usiamo mai il tuo audio, le tue trascrizioni o i tuoi risultati per addestrare modelli di IA. Il tuo contenuto viene elaborato per generare i tuoi risultati e nient'altro.",
    s2c2Title: "Elimina Quando Vuoi",
    s2c2Desc:
      "Hai il pieno controllo sul ciclo di vita dei tuoi dati. Elimina singole registrazioni o il tuo intero account in qualsiasi momento. L'eliminazione e permanente.",
    s2c3Title: "Nessuna Condivisione con Terzi",
    s2c3Desc:
      "I tuoi dati non vengono mai venduti, condivisi o resi disponibili a terzi per marketing, analisi o qualsiasi altro scopo. Guadagniamo con gli abbonamenti, non con i tuoi dati.",
    s3Label: "Conformita",
    s3Title: "Progettato per i Requisiti Normativi",
    s3Desc:
      "Sythio e progettato per aiutare la tua organizzazione a rispettare i propri obblighi di conformita. Manteniamo le certificazioni e i processi richiesti dalle industrie regolamentate.",
    s3c1Title: "Conforme al GDPR",
    s3c1Desc:
      "Sythio e pienamente conforme al Regolamento Generale sulla Protezione dei Dati. Supportiamo i diritti degli interessati e manteniamo basi giuridiche di trattamento.",
    s3c2Title: "SOC 2 Tipo II",
    s3c2Desc:
      "I nostri sistemi e processi sono verificati secondo i Criteri dei Servizi di Fiducia SOC 2. Questo copre sicurezza, disponibilita, integrita del trattamento, riservatezza e privacy.",
    s3c3Title: "Accordi di Trattamento Dati",
    s3c3Desc:
      "Forniamo Accordi di Trattamento Dati (DPA) per tutti i clienti enterprise. Questi accordi formalizzano i nostri obblighi come responsabili del trattamento.",
    s4Label: "Infrastruttura",
    s4Title: "Architettura Cloud Sicura",
    s4Desc:
      "La nostra infrastruttura e progettata con difesa in profondita. Molteplici livelli di controlli di sicurezza proteggono i tuoi dati da minacce esterne e uso improprio interno.",
    s4c1Title: "Sicurezza Cloud",
    s4c1Desc:
      "Sythio funziona su infrastruttura cloud enterprise con data center certificati SOC 2 e ISO 27001. Isolamento di rete, firewall e protezione DDoS sono attivi in ogni momento.",
    s4c2Title: "Controlli di Accesso",
    s4c2Desc:
      "L'accesso interno ai sistemi di produzione segue il principio del minimo privilegio. Ogni accesso richiede autenticazione multifattore e ogni azione viene registrata.",
    s4c3Title: "Monitoraggio Continuo",
    s4c3Desc:
      "Il nostro team di sicurezza monitora i sistemi 24/7 con rilevamento automatizzato delle minacce, avvisi di anomalie e procedure di risposta agli incidenti.",
    s5Label: "I tuoi diritti",
    s5Title: "Tu Controlli i Tuoi Dati",
    s5Desc:
      "Crediamo che i tuoi dati ti appartengano. Sythio fornisce strumenti chiari e semplici per esercitare i tuoi diritti sui dati.",
    s5c1Title: "Diritto di Accesso",
    s5c1Desc:
      "Richiedi una copia completa di tutti i dati che Sythio detiene su di te in qualsiasi momento. Forniamo i tuoi dati in formati standard leggibili da macchina.",
    s5c2Title: "Diritto alla Cancellazione",
    s5c2Desc:
      "Elimina le tue registrazioni, i risultati o il tuo intero account. Le richieste di cancellazione vengono elaborate immediatamente e propagate a tutti i sistemi di backup entro 30 giorni.",
    s5c3Title: "Diritto alla Portabilita",
    s5c3Desc:
      "Esporta tutti i tuoi dati — registrazioni, trascrizioni, riassunti e ogni risultato — in formati standard. I tuoi dati non sono mai bloccati.",
    s5c4Title: "Diritto all'Esportazione",
    s5c4Desc:
      "Scarica il tuo archivio dati completo in qualsiasi momento dalle impostazioni del tuo account. Forniamo le esportazioni in formati di uso comune.",
    ctaTitle1: "La sicurezza non dovrebbe mai essere una domanda.",
    ctaTitle2: "Con Sythio, e la risposta.",
    ctaDesc:
      "Inizia a usare Sythio gratuitamente e sperimenta la sicurezza di livello enterprise dalla tua prima registrazione. I tuoi dati sono crittografati, privati e sempre sotto il tuo controllo.",
    ctaFooter:
      "Il piano gratuito include 5 registrazioni al mese. Senza carta di credito.",
  },
};

/* ─── Security Page ─── */
export default function SecurityPage() {
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

  const dataProtectionCards = [
    { title: c.s1c1Title, desc: c.s1c1Desc, icon: icons.lock, color: "#6366f1" },
    { title: c.s1c2Title, desc: c.s1c2Desc, icon: icons.shield, color: "#8b5cf6" },
    { title: c.s1c3Title, desc: c.s1c3Desc, icon: icons.cloud, color: "#0ea5e9" },
    { title: c.s1c4Title, desc: c.s1c4Desc, icon: icons.key, color: "#f59e0b" },
  ];

  const privacyCards = [
    { title: c.s2c1Title, desc: c.s2c1Desc, icon: icons.fingerprint, color: "#22c55e" },
    { title: c.s2c2Title, desc: c.s2c2Desc, icon: icons.trash, color: "#f43f5e" },
    { title: c.s2c3Title, desc: c.s2c3Desc, icon: icons.eye, color: "#6366f1" },
  ];

  const complianceCards = [
    { title: c.s3c1Title, desc: c.s3c1Desc, icon: icons.globe, color: "#8b5cf6" },
    { title: c.s3c2Title, desc: c.s3c2Desc, icon: icons.check, color: "#22c55e" },
    { title: c.s3c3Title, desc: c.s3c3Desc, icon: icons.document, color: "#0ea5e9" },
  ];

  const infrastructureCards = [
    { title: c.s4c1Title, desc: c.s4c1Desc, icon: icons.cloud, color: "#6366f1" },
    { title: c.s4c2Title, desc: c.s4c2Desc, icon: icons.key, color: "#f59e0b" },
    { title: c.s4c3Title, desc: c.s4c3Desc, icon: icons.eye, color: "#f43f5e" },
  ];

  const rightsCards = [
    { title: c.s5c1Title, desc: c.s5c1Desc, icon: icons.user, color: "#8b5cf6" },
    { title: c.s5c2Title, desc: c.s5c2Desc, icon: icons.trash, color: "#f43f5e" },
    { title: c.s5c3Title, desc: c.s5c3Desc, icon: icons.globe, color: "#22c55e" },
    { title: c.s5c4Title, desc: c.s5c4Desc, icon: icons.download, color: "#0ea5e9" },
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
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border-light mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-muted">{c.trustBadge}</span>
            </div>
            <TextReveal>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                {c.heroTitle}
              </h1>
            </TextReveal>
            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              {c.heroDesc}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticHover>
                <Link
                  href="/pricing"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  {s("common.startFree")}
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link
                  href="/privacy-policy"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
                >
                  {s("nav.privacy") || "Privacy Policy"}
                </Link>
              </MagneticHover>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Data Protection */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.s1Label}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.s1Title}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.s1Desc}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {dataProtectionCards.map((card) => (
                <ScrollScale key={card.title}>
                  <div className="p-8 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: `${card.color}10` }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={card.color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={card.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* Section 2: Privacy by Design */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.s2Label}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.s2Title}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.s2Desc}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {privacyCards.map((card) => (
                <ScrollScale key={card.title}>
                  <div className="p-8 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: `${card.color}10` }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={card.color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={card.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* Section 3: Compliance */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.s3Label}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.s3Title}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.s3Desc}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {complianceCards.map((card) => (
                <ScrollScale key={card.title}>
                  <div className="p-8 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: `${card.color}10` }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={card.color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={card.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* Section 4: Infrastructure */}
      <section className="py-32 md:py-44 bg-background animated-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.s4Label}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.s4Title}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.s4Desc}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {infrastructureCards.map((card) => (
                <ScrollScale key={card.title}>
                  <div className="p-8 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: `${card.color}10` }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={card.color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={card.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
        </div>
      </section>

      {/* Section 5: Your Rights */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              {c.s5Label}
            </p>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {c.s5Title}
              </h2>
            </TextReveal>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {c.s5Desc}
            </p>
          </div>

          <GsapStagger stagger={0.08}>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {rightsCards.map((card) => (
                <ScrollScale key={card.title}>
                  <div className="p-8 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: `${card.color}10` }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={card.color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={card.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </GsapStagger>
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
