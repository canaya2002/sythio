"use client";

import Link from "next/link";
import { TextReveal, PageReveal } from "../components/gsap-effects";
import { useLanguage } from "../components/i18n/language-context";
import type { Locale } from "../components/i18n/translations";

/* ─── Section Component ─── */
function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-xs font-mono text-muted-light tracking-wider">
          {number}
        </span>
        <h2 className="text-xl font-semibold text-foreground tracking-tight">
          {title}
        </h2>
      </div>
      <div className="text-[15px] text-muted leading-[1.8] space-y-4 pl-10">
        {children}
      </div>
    </section>
  );
}

/* ─── Types ─── */
type LabeledItem = { label: string; desc: string };

type SectionData = {
  id: string;
  number: string;
  title: string;
};

type Content = {
  legal: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  lastUpdatedDate: string;
  effective: string;
  toc: string;
  backToTop: string;
  allRights: string;
  sections: SectionData[];
  s01: { intro: string; items: LabeledItem[] };
  s02: { intro: string; items: string[] };
  s03: { intro: string; items: string[] };
  s04: { intro: string; items: string[]; outro: string };
  s05: { text: string; linkText: string };
  s06: { intro: string; items: string[]; outro: string };
  s07: { intro: string; items: LabeledItem[] };
  s08: { intro: string; items: LabeledItem[]; outro: string };
  s09: { intro: string; items: LabeledItem[]; outro: string };
  s10: { intro: string; items: string[]; outro: string };
  s11: { intro: string; items: string[] };
  s12: { p1: string; p2pre: string; p2post: string };
  s13: { intro: string; emailLabel: string; generalLabel: string; websiteLabel: string };
  s14: { intro: string; items: string[]; outro: string };
};

/* ─── Full translations ─── */
const content: Record<Locale, Content> = {
  /* ================================================================
   * ENGLISH
   * ================================================================ */
  en: {
    legal: "Legal",
    title: "Privacy Policy",
    subtitle:
      "Your privacy matters to us. This policy explains how Sythio collects, uses, and protects your information when you use our services.",
    lastUpdated: "Last updated",
    lastUpdatedDate: "March 23, 2026",
    effective: "Effective",
    toc: "Table of Contents",
    backToTop: "Back to top",
    allRights: "All rights reserved.",
    sections: [
      { id: "information-collected", number: "01", title: "Information We Collect" },
      { id: "audio-data", number: "02", title: "Audio Data" },
      { id: "transcripts-outputs", number: "03", title: "Transcripts & Outputs" },
      { id: "usage-data", number: "04", title: "Usage Data" },
      { id: "cookies", number: "05", title: "Cookies & Similar Technologies" },
      { id: "how-we-use", number: "06", title: "How We Use Your Data" },
      { id: "data-retention", number: "07", title: "Data Retention" },
      { id: "deletion-rights", number: "08", title: "Your Rights & Deletion" },
      { id: "third-party", number: "09", title: "Third-Party Services" },
      { id: "security", number: "10", title: "Security" },
      { id: "international", number: "11", title: "International Transfers" },
      { id: "children", number: "12", title: "Children's Privacy" },
      { id: "contact", number: "13", title: "Contact Us" },
      { id: "updates", number: "14", title: "Policy Updates" },
    ],
    s01: {
      intro:
        "When you create an account or use Sythio, we may collect the following types of information:",
      items: [
        {
          label: "Account Information:",
          desc: "Your name, email address, and password when you register for an account.",
        },
        {
          label: "Profile Information:",
          desc: "Optional details you provide, such as your profile picture, job title, or organization.",
        },
        {
          label: "Payment Information:",
          desc: "Billing details processed securely through our third-party payment provider. We do not store your full credit card number.",
        },
        {
          label: "Communications:",
          desc: "Information you provide when contacting our support team or responding to surveys.",
        },
      ],
    },
    s02: {
      intro:
        "Sythio processes audio recordings you provide to generate transcripts, summaries, and other outputs. Here is how we handle your audio data:",
      items: [
        "Audio files are uploaded to our secure servers for processing and are encrypted both in transit (TLS 1.3) and at rest (AES-256).",
        "Audio is processed by our AI models to generate transcripts, summaries, tasks, and other structured outputs you request.",
        "We do not use your audio recordings to train our AI models unless you explicitly opt in to our improvement program.",
        "You may delete your audio recordings at any time through your account settings.",
      ],
    },
    s03: {
      intro:
        "When Sythio processes your audio, it generates various outputs including transcripts, summaries, action items, and structured notes. These outputs:",
      items: [
        "Are stored in your account and accessible only to you unless you choose to share them.",
        "May contain speaker identification labels based on voice characteristics detected in the audio.",
        "Are encrypted at rest and in transit using industry-standard protocols.",
        "Can be exported or deleted at any time through your account dashboard.",
      ],
    },
    s04: {
      intro:
        "We automatically collect certain information about how you interact with Sythio, including:",
      items: [
        "Device information (browser type, operating system, device model).",
        "Log data (IP address, access times, pages viewed, features used).",
        "Performance metrics (app load times, error reports, crash logs).",
        "Feature usage patterns (which outputs you generate most, recording frequency).",
      ],
      outro:
        "This data helps us improve Sythio, diagnose technical issues, and understand how our features are used.",
    },
    s05: {
      text: "Sythio uses cookies and similar technologies for authentication, preferences, and analytics. For complete details on the cookies we use and how to manage them, please see our",
      linkText: "Cookie Policy",
    },
    s06: {
      intro: "We use the information we collect to:",
      items: [
        "Provide, maintain, and improve the Sythio service.",
        "Process your audio recordings and generate requested outputs.",
        "Send you service-related communications, including account verification, security alerts, and billing notifications.",
        "Respond to your support requests and provide customer assistance.",
        "Analyze usage patterns to improve our AI models and user experience (using aggregated, anonymized data only).",
        "Detect, prevent, and address fraud, abuse, and security issues.",
        "Comply with legal obligations and enforce our Terms of Service.",
      ],
      outro: "We will never sell your personal information to third parties.",
    },
    s07: {
      intro:
        "We retain your data for as long as your account is active or as needed to provide you with our services. Specifically:",
      items: [
        {
          label: "Account data",
          desc: "is retained for the lifetime of your account.",
        },
        {
          label: "Audio recordings",
          desc: "are retained until you delete them or close your account.",
        },
        {
          label: "Generated outputs",
          desc: "(transcripts, summaries, etc.) are retained until you delete them or close your account.",
        },
        {
          label: "Usage data",
          desc: "is retained in identifiable form for up to 24 months, after which it is anonymized.",
        },
        {
          label: "Backup copies",
          desc: "may persist in our encrypted backup systems for up to 90 days after deletion.",
        },
      ],
    },
    s08: {
      intro:
        "Depending on your location, you may have the following rights regarding your personal data:",
      items: [
        { label: "Access:", desc: "Request a copy of the personal data we hold about you." },
        { label: "Correction:", desc: "Request correction of inaccurate or incomplete data." },
        { label: "Deletion:", desc: "Request deletion of your personal data and account." },
        {
          label: "Portability:",
          desc: "Request your data in a structured, machine-readable format.",
        },
        { label: "Objection:", desc: "Object to certain processing of your data." },
        { label: "Restriction:", desc: "Request that we limit how we use your data." },
      ],
      outro:
        "To exercise any of these rights, contact us at privacy@sythio.com. We will respond to your request within 30 days.",
    },
    s09: {
      intro:
        "Sythio integrates with or relies on the following types of third-party services:",
      items: [
        {
          label: "Cloud Infrastructure:",
          desc: "We use industry-leading cloud providers to host and process your data securely.",
        },
        {
          label: "Payment Processing:",
          desc: "Payments are handled by PCI-DSS compliant processors. We never see or store your full card details.",
        },
        {
          label: "Analytics:",
          desc: "We use privacy-focused analytics tools to understand aggregate usage patterns.",
        },
        {
          label: "AI Processing:",
          desc: "Audio processing may involve third-party AI services, which are bound by strict data processing agreements.",
        },
      ],
      outro:
        "We carefully vet all third-party providers and require them to maintain appropriate security and privacy standards.",
    },
    s10: {
      intro:
        "We take the security of your data seriously and implement industry-standard measures to protect it:",
      items: [
        "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.",
        "Access to user data is strictly limited to authorized personnel on a need-to-know basis.",
        "We conduct regular security audits and penetration testing.",
        "We maintain incident response procedures and will notify affected users of any data breach within 72 hours as required by applicable law.",
      ],
      outro:
        "While no system is 100% secure, we continuously work to protect your information and promptly address any vulnerabilities.",
    },
    s11: {
      intro:
        "Sythio operates globally, and your data may be transferred to and processed in countries other than your country of residence. When we transfer data internationally, we ensure appropriate safeguards are in place, including:",
      items: [
        "Standard Contractual Clauses (SCCs) approved by the European Commission.",
        "Data processing agreements with all service providers that handle personal data.",
        "Compliance with applicable data protection frameworks, including GDPR requirements for EU/EEA users.",
      ],
    },
    s12: {
      p1: "Sythio is not intended for use by children under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected data from a child under 16, we will take steps to delete that information promptly.",
      p2pre:
        "If you are a parent or guardian and believe your child has provided us with personal information, please contact us at",
      p2post: ".",
    },
    s13: {
      intro:
        "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
      emailLabel: "Email:",
      generalLabel: "General:",
      websiteLabel: "Website:",
    },
    s14: {
      intro:
        "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:",
      items: [
        'Post the updated policy on this page with a revised "Last Updated" date.',
        "Notify you via email or through an in-app notification if the changes are significant.",
        "Provide you with an opportunity to review the changes before they take effect, where required by law.",
      ],
      outro:
        "Your continued use of Sythio after the effective date of any changes constitutes your acceptance of the updated policy.",
    },
  },

  /* ================================================================
   * SPANISH
   * ================================================================ */
  es: {
    legal: "Legal",
    title: "Pol\u00edtica de Privacidad",
    subtitle:
      "Tu privacidad nos importa. Esta pol\u00edtica explica c\u00f3mo Sythio recopila, usa y protege tu informaci\u00f3n cuando utilizas nuestros servicios.",
    lastUpdated: "\u00daltima actualizaci\u00f3n",
    lastUpdatedDate: "23 de marzo de 2026",
    effective: "Vigente",
    toc: "Tabla de Contenidos",
    backToTop: "Volver arriba",
    allRights: "Todos los derechos reservados.",
    sections: [
      { id: "information-collected", number: "01", title: "Informaci\u00f3n que Recopilamos" },
      { id: "audio-data", number: "02", title: "Datos de Audio" },
      { id: "transcripts-outputs", number: "03", title: "Transcripciones y Resultados" },
      { id: "usage-data", number: "04", title: "Datos de Uso" },
      { id: "cookies", number: "05", title: "Cookies y Tecnolog\u00edas Similares" },
      { id: "how-we-use", number: "06", title: "C\u00f3mo Usamos tus Datos" },
      { id: "data-retention", number: "07", title: "Retenci\u00f3n de Datos" },
      { id: "deletion-rights", number: "08", title: "Tus Derechos y Eliminaci\u00f3n" },
      { id: "third-party", number: "09", title: "Servicios de Terceros" },
      { id: "security", number: "10", title: "Seguridad" },
      { id: "international", number: "11", title: "Transferencias Internacionales" },
      { id: "children", number: "12", title: "Privacidad de Menores" },
      { id: "contact", number: "13", title: "Cont\u00e1ctanos" },
      { id: "updates", number: "14", title: "Actualizaciones de la Pol\u00edtica" },
    ],
    s01: {
      intro:
        "Cuando creas una cuenta o usas Sythio, podemos recopilar los siguientes tipos de informaci\u00f3n:",
      items: [
        {
          label: "Informaci\u00f3n de Cuenta:",
          desc: "Tu nombre, direcci\u00f3n de correo electr\u00f3nico y contrase\u00f1a al registrarte.",
        },
        {
          label: "Informaci\u00f3n de Perfil:",
          desc: "Datos opcionales que proporcionas, como tu foto de perfil, cargo o empresa.",
        },
        {
          label: "Informaci\u00f3n de Pago:",
          desc: "Datos de facturaci\u00f3n procesados de forma segura a trav\u00e9s de nuestro proveedor de pagos externo. No almacenamos el n\u00famero completo de tu tarjeta de cr\u00e9dito.",
        },
        {
          label: "Comunicaciones:",
          desc: "Informaci\u00f3n que proporcionas al contactar a nuestro equipo de soporte o al responder encuestas.",
        },
      ],
    },
    s02: {
      intro:
        "Sythio procesa las grabaciones de audio que proporcionas para generar transcripciones, res\u00famenes y otros resultados. As\u00ed es como manejamos tus datos de audio:",
      items: [
        "Los archivos de audio se suben a nuestros servidores seguros para su procesamiento y se cifran tanto en tr\u00e1nsito (TLS 1.3) como en reposo (AES-256).",
        "El audio es procesado por nuestros modelos de IA para generar transcripciones, res\u00famenes, tareas y otros resultados estructurados que solicites.",
        "No usamos tus grabaciones de audio para entrenar nuestros modelos de IA a menos que aceptes expl\u00edcitamente participar en nuestro programa de mejora.",
        "Puedes eliminar tus grabaciones de audio en cualquier momento desde la configuraci\u00f3n de tu cuenta.",
      ],
    },
    s03: {
      intro:
        "Cuando Sythio procesa tu audio, genera diversos resultados como transcripciones, res\u00famenes, tareas pendientes y notas estructuradas. Estos resultados:",
      items: [
        "Se almacenan en tu cuenta y solo t\u00fa puedes acceder a ellos, a menos que decidas compartirlos.",
        "Pueden contener etiquetas de identificaci\u00f3n de hablantes basadas en las caracter\u00edsticas de voz detectadas en el audio.",
        "Est\u00e1n cifrados en reposo y en tr\u00e1nsito mediante protocolos est\u00e1ndar de la industria.",
        "Pueden exportarse o eliminarse en cualquier momento desde el panel de tu cuenta.",
      ],
    },
    s04: {
      intro:
        "Recopilamos autom\u00e1ticamente cierta informaci\u00f3n sobre c\u00f3mo interact\u00faas con Sythio, incluyendo:",
      items: [
        "Informaci\u00f3n del dispositivo (tipo de navegador, sistema operativo, modelo del dispositivo).",
        "Datos de registro (direcci\u00f3n IP, horarios de acceso, p\u00e1ginas visitadas, funciones utilizadas).",
        "M\u00e9tricas de rendimiento (tiempos de carga, informes de errores, registros de fallos).",
        "Patrones de uso de funciones (qu\u00e9 resultados generas m\u00e1s, frecuencia de grabaci\u00f3n).",
      ],
      outro:
        "Estos datos nos ayudan a mejorar Sythio, diagnosticar problemas t\u00e9cnicos y comprender c\u00f3mo se usan nuestras funciones.",
    },
    s05: {
      text: "Sythio utiliza cookies y tecnolog\u00edas similares para autenticaci\u00f3n, preferencias y an\u00e1lisis. Para obtener informaci\u00f3n completa sobre las cookies que usamos y c\u00f3mo administrarlas, consulta nuestra",
      linkText: "Pol\u00edtica de Cookies",
    },
    s06: {
      intro: "Usamos la informaci\u00f3n que recopilamos para:",
      items: [
        "Proporcionar, mantener y mejorar el servicio de Sythio.",
        "Procesar tus grabaciones de audio y generar los resultados solicitados.",
        "Enviarte comunicaciones relacionadas con el servicio, incluyendo verificaci\u00f3n de cuenta, alertas de seguridad y notificaciones de facturaci\u00f3n.",
        "Responder a tus solicitudes de soporte y brindarte asistencia.",
        "Analizar patrones de uso para mejorar nuestros modelos de IA y la experiencia del usuario (utilizando \u00fanicamente datos agregados y anonimizados).",
        "Detectar, prevenir y abordar fraudes, abusos y problemas de seguridad.",
        "Cumplir con obligaciones legales y hacer cumplir nuestros T\u00e9rminos de Servicio.",
      ],
      outro: "Nunca venderemos tu informaci\u00f3n personal a terceros.",
    },
    s07: {
      intro:
        "Conservamos tus datos mientras tu cuenta est\u00e9 activa o seg\u00fan sea necesario para brindarte nuestros servicios. En concreto:",
      items: [
        {
          label: "Datos de cuenta",
          desc: "se conservan durante toda la vida de tu cuenta.",
        },
        {
          label: "Grabaciones de audio",
          desc: "se conservan hasta que las elimines o cierres tu cuenta.",
        },
        {
          label: "Resultados generados",
          desc: "(transcripciones, res\u00famenes, etc.) se conservan hasta que los elimines o cierres tu cuenta.",
        },
        {
          label: "Datos de uso",
          desc: "se conservan en forma identificable durante un m\u00e1ximo de 24 meses, tras lo cual se anonimizan.",
        },
        {
          label: "Copias de seguridad",
          desc: "pueden permanecer en nuestros sistemas de respaldo cifrados hasta 90 d\u00edas despu\u00e9s de la eliminaci\u00f3n.",
        },
      ],
    },
    s08: {
      intro:
        "Dependiendo de tu ubicaci\u00f3n, puedes tener los siguientes derechos respecto a tus datos personales:",
      items: [
        { label: "Acceso:", desc: "Solicitar una copia de los datos personales que tenemos sobre ti." },
        { label: "Rectificaci\u00f3n:", desc: "Solicitar la correcci\u00f3n de datos inexactos o incompletos." },
        { label: "Eliminaci\u00f3n:", desc: "Solicitar la eliminaci\u00f3n de tus datos personales y tu cuenta." },
        {
          label: "Portabilidad:",
          desc: "Solicitar tus datos en un formato estructurado y legible por m\u00e1quina.",
        },
        { label: "Oposici\u00f3n:", desc: "Oponerte a ciertos tratamientos de tus datos." },
        { label: "Limitaci\u00f3n:", desc: "Solicitar que limitemos el uso de tus datos." },
      ],
      outro:
        "Para ejercer cualquiera de estos derechos, cont\u00e1ctanos en privacy@sythio.com. Responderemos a tu solicitud en un plazo de 30 d\u00edas.",
    },
    s09: {
      intro:
        "Sythio se integra o depende de los siguientes tipos de servicios de terceros:",
      items: [
        {
          label: "Infraestructura en la Nube:",
          desc: "Utilizamos proveedores l\u00edderes en la nube para alojar y procesar tus datos de forma segura.",
        },
        {
          label: "Procesamiento de Pagos:",
          desc: "Los pagos son gestionados por procesadores que cumplen con PCI-DSS. Nunca vemos ni almacenamos los datos completos de tu tarjeta.",
        },
        {
          label: "An\u00e1lisis:",
          desc: "Utilizamos herramientas de an\u00e1lisis centradas en la privacidad para comprender patrones de uso agregados.",
        },
        {
          label: "Procesamiento de IA:",
          desc: "El procesamiento de audio puede involucrar servicios de IA de terceros, sujetos a estrictos acuerdos de tratamiento de datos.",
        },
      ],
      outro:
        "Evaluamos cuidadosamente a todos los proveedores externos y les exigimos mantener est\u00e1ndares adecuados de seguridad y privacidad.",
    },
    s10: {
      intro:
        "Nos tomamos muy en serio la seguridad de tus datos e implementamos medidas est\u00e1ndar de la industria para protegerlos:",
      items: [
        "Todos los datos se cifran en tr\u00e1nsito mediante TLS 1.3 y en reposo mediante cifrado AES-256.",
        "El acceso a los datos de los usuarios est\u00e1 estrictamente limitado al personal autorizado que lo necesite.",
        "Realizamos auditor\u00edas de seguridad y pruebas de penetraci\u00f3n peri\u00f3dicas.",
        "Mantenemos procedimientos de respuesta a incidentes y notificaremos a los usuarios afectados de cualquier violaci\u00f3n de datos en un plazo de 72 horas, seg\u00fan lo exija la legislaci\u00f3n aplicable.",
      ],
      outro:
        "Aunque ning\u00fan sistema es 100% seguro, trabajamos continuamente para proteger tu informaci\u00f3n y abordar con rapidez cualquier vulnerabilidad.",
    },
    s11: {
      intro:
        "Sythio opera a nivel global y tus datos pueden transferirse y procesarse en pa\u00edses distintos al de tu residencia. Cuando transferimos datos internacionalmente, nos aseguramos de contar con las garant\u00edas adecuadas, incluyendo:",
      items: [
        "Cl\u00e1usulas Contractuales Tipo (CCT) aprobadas por la Comisi\u00f3n Europea.",
        "Acuerdos de tratamiento de datos con todos los proveedores de servicios que manejan datos personales.",
        "Cumplimiento de los marcos de protecci\u00f3n de datos aplicables, incluidos los requisitos del RGPD para usuarios de la UE/EEE.",
      ],
    },
    s12: {
      p1: "Sythio no est\u00e1 destinado a menores de 16 a\u00f1os. No recopilamos deliberadamente informaci\u00f3n personal de menores de 16 a\u00f1os. Si tenemos conocimiento de que hemos recopilado datos de un menor de 16 a\u00f1os, tomaremos medidas para eliminar esa informaci\u00f3n de inmediato.",
      p2pre:
        "Si eres padre, madre o tutor y crees que tu hijo nos ha proporcionado informaci\u00f3n personal, cont\u00e1ctanos en",
      p2post: ".",
    },
    s13: {
      intro:
        "Si tienes preguntas, inquietudes o solicitudes relacionadas con esta Pol\u00edtica de Privacidad o nuestras pr\u00e1cticas de datos, cont\u00e1ctanos:",
      emailLabel: "Correo:",
      generalLabel: "General:",
      websiteLabel: "Sitio web:",
    },
    s14: {
      intro:
        "Podemos actualizar esta Pol\u00edtica de Privacidad peri\u00f3dicamente para reflejar cambios en nuestras pr\u00e1cticas, tecnolog\u00eda, requisitos legales u otros factores. Cuando realicemos cambios significativos:",
      items: [
        'Publicaremos la pol\u00edtica actualizada en esta p\u00e1gina con una nueva fecha de "\u00daltima actualizaci\u00f3n".',
        "Te notificaremos por correo electr\u00f3nico o mediante una notificaci\u00f3n en la aplicaci\u00f3n si los cambios son significativos.",
        "Te daremos la oportunidad de revisar los cambios antes de que entren en vigor, cuando as\u00ed lo exija la ley.",
      ],
      outro:
        "Tu uso continuado de Sythio despu\u00e9s de la fecha de entrada en vigor de cualquier cambio constituye tu aceptaci\u00f3n de la pol\u00edtica actualizada.",
    },
  },

  /* ================================================================
   * FRENCH
   * ================================================================ */
  fr: {
    legal: "L\u00e9gal",
    title: "Politique de Confidentialit\u00e9",
    subtitle:
      "Votre vie priv\u00e9e nous tient \u00e0 c\u0153ur. Cette politique explique comment Sythio collecte, utilise et prot\u00e8ge vos informations lorsque vous utilisez nos services.",
    lastUpdated: "Derni\u00e8re mise \u00e0 jour",
    lastUpdatedDate: "23 mars 2026",
    effective: "En vigueur",
    toc: "Table des Mati\u00e8res",
    backToTop: "Retour en haut",
    allRights: "Tous droits r\u00e9serv\u00e9s.",
    sections: [
      { id: "information-collected", number: "01", title: "Informations que Nous Collectons" },
      { id: "audio-data", number: "02", title: "Donn\u00e9es Audio" },
      { id: "transcripts-outputs", number: "03", title: "Transcriptions et R\u00e9sultats" },
      { id: "usage-data", number: "04", title: "Donn\u00e9es d\u2019Utilisation" },
      { id: "cookies", number: "05", title: "Cookies et Technologies Similaires" },
      { id: "how-we-use", number: "06", title: "Comment Nous Utilisons vos Donn\u00e9es" },
      { id: "data-retention", number: "07", title: "Conservation des Donn\u00e9es" },
      { id: "deletion-rights", number: "08", title: "Vos Droits et Suppression" },
      { id: "third-party", number: "09", title: "Services Tiers" },
      { id: "security", number: "10", title: "S\u00e9curit\u00e9" },
      { id: "international", number: "11", title: "Transferts Internationaux" },
      { id: "children", number: "12", title: "Confidentialit\u00e9 des Mineurs" },
      { id: "contact", number: "13", title: "Nous Contacter" },
      { id: "updates", number: "14", title: "Mises \u00e0 Jour de la Politique" },
    ],
    s01: {
      intro:
        "Lorsque vous cr\u00e9ez un compte ou utilisez Sythio, nous pouvons collecter les types d\u2019informations suivants :",
      items: [
        {
          label: "Informations de Compte :",
          desc: "Votre nom, adresse e-mail et mot de passe lors de votre inscription.",
        },
        {
          label: "Informations de Profil :",
          desc: "D\u00e9tails facultatifs que vous fournissez, tels que votre photo de profil, votre poste ou votre organisation.",
        },
        {
          label: "Informations de Paiement :",
          desc: "Coordonn\u00e9es de facturation trait\u00e9es de mani\u00e8re s\u00e9curis\u00e9e par notre prestataire de paiement tiers. Nous ne stockons pas votre num\u00e9ro de carte bancaire complet.",
        },
        {
          label: "Communications :",
          desc: "Informations que vous fournissez lorsque vous contactez notre \u00e9quipe d\u2019assistance ou r\u00e9pondez \u00e0 des enqu\u00eates.",
        },
      ],
    },
    s02: {
      intro:
        "Sythio traite les enregistrements audio que vous fournissez pour g\u00e9n\u00e9rer des transcriptions, des r\u00e9sum\u00e9s et d\u2019autres r\u00e9sultats. Voici comment nous g\u00e9rons vos donn\u00e9es audio :",
      items: [
        "Les fichiers audio sont t\u00e9l\u00e9vers\u00e9s sur nos serveurs s\u00e9curis\u00e9s pour traitement et sont chiffr\u00e9s en transit (TLS 1.3) et au repos (AES-256).",
        "L\u2019audio est trait\u00e9 par nos mod\u00e8les d\u2019IA pour g\u00e9n\u00e9rer des transcriptions, r\u00e9sum\u00e9s, t\u00e2ches et autres r\u00e9sultats structur\u00e9s que vous demandez.",
        "Nous n\u2019utilisons pas vos enregistrements audio pour entra\u00eener nos mod\u00e8les d\u2019IA, sauf si vous acceptez explicitement de participer \u00e0 notre programme d\u2019am\u00e9lioration.",
        "Vous pouvez supprimer vos enregistrements audio \u00e0 tout moment depuis les param\u00e8tres de votre compte.",
      ],
    },
    s03: {
      intro:
        "Lorsque Sythio traite votre audio, il g\u00e9n\u00e8re divers r\u00e9sultats, notamment des transcriptions, des r\u00e9sum\u00e9s, des \u00e9l\u00e9ments d\u2019action et des notes structur\u00e9es. Ces r\u00e9sultats :",
      items: [
        "Sont stock\u00e9s dans votre compte et accessibles uniquement par vous, sauf si vous choisissez de les partager.",
        "Peuvent contenir des \u00e9tiquettes d\u2019identification des intervenants bas\u00e9es sur les caract\u00e9ristiques vocales d\u00e9tect\u00e9es dans l\u2019audio.",
        "Sont chiffr\u00e9s au repos et en transit \u00e0 l\u2019aide de protocoles conformes aux normes de l\u2019industrie.",
        "Peuvent \u00eatre export\u00e9s ou supprim\u00e9s \u00e0 tout moment depuis le tableau de bord de votre compte.",
      ],
    },
    s04: {
      intro:
        "Nous collectons automatiquement certaines informations sur la fa\u00e7on dont vous interagissez avec Sythio, notamment :",
      items: [
        "Informations sur l\u2019appareil (type de navigateur, syst\u00e8me d\u2019exploitation, mod\u00e8le de l\u2019appareil).",
        "Donn\u00e9es de journalisation (adresse IP, heures d\u2019acc\u00e8s, pages consult\u00e9es, fonctionnalit\u00e9s utilis\u00e9es).",
        "Indicateurs de performance (temps de chargement, rapports d\u2019erreurs, journaux de plantage).",
        "Habitudes d\u2019utilisation des fonctionnalit\u00e9s (r\u00e9sultats les plus g\u00e9n\u00e9r\u00e9s, fr\u00e9quence d\u2019enregistrement).",
      ],
      outro:
        "Ces donn\u00e9es nous aident \u00e0 am\u00e9liorer Sythio, \u00e0 diagnostiquer les probl\u00e8mes techniques et \u00e0 comprendre comment nos fonctionnalit\u00e9s sont utilis\u00e9es.",
    },
    s05: {
      text: "Sythio utilise des cookies et des technologies similaires pour l\u2019authentification, les pr\u00e9f\u00e9rences et l\u2019analyse. Pour plus de d\u00e9tails sur les cookies que nous utilisons et comment les g\u00e9rer, veuillez consulter notre",
      linkText: "Politique de Cookies",
    },
    s06: {
      intro: "Nous utilisons les informations collect\u00e9es pour :",
      items: [
        "Fournir, maintenir et am\u00e9liorer le service Sythio.",
        "Traiter vos enregistrements audio et g\u00e9n\u00e9rer les r\u00e9sultats demand\u00e9s.",
        "Vous envoyer des communications li\u00e9es au service, y compris la v\u00e9rification de compte, les alertes de s\u00e9curit\u00e9 et les notifications de facturation.",
        "R\u00e9pondre \u00e0 vos demandes d\u2019assistance et vous fournir une aide personnalis\u00e9e.",
        "Analyser les habitudes d\u2019utilisation pour am\u00e9liorer nos mod\u00e8les d\u2019IA et l\u2019exp\u00e9rience utilisateur (en utilisant uniquement des donn\u00e9es agr\u00e9g\u00e9es et anonymis\u00e9es).",
        "D\u00e9tecter, pr\u00e9venir et traiter les fraudes, abus et probl\u00e8mes de s\u00e9curit\u00e9.",
        "Respecter nos obligations l\u00e9gales et faire appliquer nos Conditions d\u2019Utilisation.",
      ],
      outro: "Nous ne vendrons jamais vos informations personnelles \u00e0 des tiers.",
    },
    s07: {
      intro:
        "Nous conservons vos donn\u00e9es tant que votre compte est actif ou que cela est n\u00e9cessaire pour vous fournir nos services. Plus pr\u00e9cis\u00e9ment :",
      items: [
        {
          label: "Donn\u00e9es de compte",
          desc: "conserv\u00e9es pendant toute la dur\u00e9e de vie de votre compte.",
        },
        {
          label: "Enregistrements audio",
          desc: "conserv\u00e9s jusqu\u2019\u00e0 ce que vous les supprimiez ou fermiez votre compte.",
        },
        {
          label: "R\u00e9sultats g\u00e9n\u00e9r\u00e9s",
          desc: "(transcriptions, r\u00e9sum\u00e9s, etc.) conserv\u00e9s jusqu\u2019\u00e0 ce que vous les supprimiez ou fermiez votre compte.",
        },
        {
          label: "Donn\u00e9es d\u2019utilisation",
          desc: "conserv\u00e9es sous forme identifiable pendant 24 mois maximum, apr\u00e8s quoi elles sont anonymis\u00e9es.",
        },
        {
          label: "Copies de sauvegarde",
          desc: "peuvent subsister dans nos syst\u00e8mes de sauvegarde chiffr\u00e9s jusqu\u2019\u00e0 90 jours apr\u00e8s la suppression.",
        },
      ],
    },
    s08: {
      intro:
        "Selon votre lieu de r\u00e9sidence, vous pouvez disposer des droits suivants concernant vos donn\u00e9es personnelles :",
      items: [
        { label: "Acc\u00e8s :", desc: "Demander une copie des donn\u00e9es personnelles que nous d\u00e9tenons \u00e0 votre sujet." },
        { label: "Rectification :", desc: "Demander la correction de donn\u00e9es inexactes ou incompl\u00e8tes." },
        { label: "Suppression :", desc: "Demander la suppression de vos donn\u00e9es personnelles et de votre compte." },
        {
          label: "Portabilit\u00e9 :",
          desc: "Demander vos donn\u00e9es dans un format structur\u00e9 et lisible par machine.",
        },
        { label: "Opposition :", desc: "Vous opposer \u00e0 certains traitements de vos donn\u00e9es." },
        { label: "Limitation :", desc: "Demander que nous limitions l\u2019utilisation de vos donn\u00e9es." },
      ],
      outro:
        "Pour exercer l\u2019un de ces droits, contactez-nous \u00e0 privacy@sythio.com. Nous r\u00e9pondrons \u00e0 votre demande dans un d\u00e9lai de 30 jours.",
    },
    s09: {
      intro:
        "Sythio s\u2019int\u00e8gre \u00e0 ou d\u00e9pend des types de services tiers suivants :",
      items: [
        {
          label: "Infrastructure Cloud :",
          desc: "Nous utilisons des fournisseurs cloud de premier plan pour h\u00e9berger et traiter vos donn\u00e9es en toute s\u00e9curit\u00e9.",
        },
        {
          label: "Traitement des Paiements :",
          desc: "Les paiements sont g\u00e9r\u00e9s par des processeurs conformes \u00e0 la norme PCI-DSS. Nous ne voyons ni ne stockons jamais les d\u00e9tails complets de votre carte.",
        },
        {
          label: "Analyse :",
          desc: "Nous utilisons des outils d\u2019analyse respectueux de la vie priv\u00e9e pour comprendre les tendances d\u2019utilisation agr\u00e9g\u00e9es.",
        },
        {
          label: "Traitement IA :",
          desc: "Le traitement audio peut impliquer des services d\u2019IA tiers, li\u00e9s par des accords stricts de traitement des donn\u00e9es.",
        },
      ],
      outro:
        "Nous s\u00e9lectionnons soigneusement tous les fournisseurs tiers et exigeons qu\u2019ils maintiennent des normes de s\u00e9curit\u00e9 et de confidentialit\u00e9 appropri\u00e9es.",
    },
    s10: {
      intro:
        "Nous prenons la s\u00e9curit\u00e9 de vos donn\u00e9es tr\u00e8s au s\u00e9rieux et mettons en \u0153uvre des mesures conformes aux normes de l\u2019industrie pour les prot\u00e9ger :",
      items: [
        "Toutes les donn\u00e9es sont chiffr\u00e9es en transit via TLS 1.3 et au repos via le chiffrement AES-256.",
        "L\u2019acc\u00e8s aux donn\u00e9es des utilisateurs est strictement limit\u00e9 au personnel autoris\u00e9 ayant un besoin l\u00e9gitime.",
        "Nous r\u00e9alisons r\u00e9guli\u00e8rement des audits de s\u00e9curit\u00e9 et des tests de p\u00e9n\u00e9tration.",
        "Nous disposons de proc\u00e9dures de r\u00e9ponse aux incidents et informerons les utilisateurs concern\u00e9s de toute violation de donn\u00e9es dans un d\u00e9lai de 72 heures, conform\u00e9ment \u00e0 la l\u00e9gislation applicable.",
      ],
      outro:
        "Bien qu\u2019aucun syst\u00e8me ne soit s\u00e9curis\u00e9 \u00e0 100 %, nous travaillons en permanence pour prot\u00e9ger vos informations et corriger rapidement toute vuln\u00e9rabilit\u00e9.",
    },
    s11: {
      intro:
        "Sythio op\u00e8re \u00e0 l\u2019\u00e9chelle mondiale et vos donn\u00e9es peuvent \u00eatre transf\u00e9r\u00e9es et trait\u00e9es dans des pays autres que votre pays de r\u00e9sidence. Lors de transferts internationaux de donn\u00e9es, nous veillons \u00e0 mettre en place des garanties appropri\u00e9es, notamment :",
      items: [
        "Les Clauses Contractuelles Types (CCT) approuv\u00e9es par la Commission europ\u00e9enne.",
        "Des accords de traitement des donn\u00e9es avec tous les prestataires de services qui traitent des donn\u00e9es personnelles.",
        "La conformit\u00e9 aux cadres de protection des donn\u00e9es applicables, y compris les exigences du RGPD pour les utilisateurs de l\u2019UE/EEE.",
      ],
    },
    s12: {
      p1: "Sythio n\u2019est pas destin\u00e9 aux enfants de moins de 16 ans. Nous ne collectons pas sciemment d\u2019informations personnelles aupr\u00e8s d\u2019enfants de moins de 16 ans. Si nous apprenons que nous avons collect\u00e9 des donn\u00e9es d\u2019un enfant de moins de 16 ans, nous prendrons des mesures pour supprimer ces informations dans les plus brefs d\u00e9lais.",
      p2pre:
        "Si vous \u00eates un parent ou tuteur et pensez que votre enfant nous a fourni des informations personnelles, veuillez nous contacter \u00e0",
      p2post: ".",
    },
    s13: {
      intro:
        "Si vous avez des questions, des pr\u00e9occupations ou des demandes concernant cette Politique de Confidentialit\u00e9 ou nos pratiques en mati\u00e8re de donn\u00e9es, veuillez nous contacter :",
      emailLabel: "E-mail :",
      generalLabel: "G\u00e9n\u00e9ral :",
      websiteLabel: "Site web :",
    },
    s14: {
      intro:
        "Nous pouvons mettre \u00e0 jour cette Politique de Confidentialit\u00e9 de temps \u00e0 autre pour refl\u00e9ter les \u00e9volutions de nos pratiques, de la technologie, des exigences l\u00e9gales ou d\u2019autres facteurs. En cas de modifications importantes, nous :",
      items: [
        "Publierons la politique mise \u00e0 jour sur cette page avec une date de \u00ab Derni\u00e8re mise \u00e0 jour \u00bb r\u00e9vis\u00e9e.",
        "Vous informerons par e-mail ou via une notification dans l\u2019application si les changements sont significatifs.",
        "Vous donnerons la possibilit\u00e9 de prendre connaissance des modifications avant leur entr\u00e9e en vigueur, lorsque la loi l\u2019exige.",
      ],
      outro:
        "Votre utilisation continue de Sythio apr\u00e8s la date d\u2019entr\u00e9e en vigueur de tout changement vaut acceptation de la politique mise \u00e0 jour.",
    },
  },

  /* ================================================================
   * PORTUGUESE
   * ================================================================ */
  pt: {
    legal: "Legal",
    title: "Pol\u00edtica de Privacidade",
    subtitle:
      "A sua privacidade \u00e9 importante para n\u00f3s. Esta pol\u00edtica explica como o Sythio recolhe, utiliza e protege as suas informa\u00e7\u00f5es quando utiliza os nossos servi\u00e7os.",
    lastUpdated: "\u00daltima atualiza\u00e7\u00e3o",
    lastUpdatedDate: "23 de mar\u00e7o de 2026",
    effective: "Vigente",
    toc: "\u00cdndice",
    backToTop: "Voltar ao topo",
    allRights: "Todos os direitos reservados.",
    sections: [
      { id: "information-collected", number: "01", title: "Informa\u00e7\u00f5es que Recolhemos" },
      { id: "audio-data", number: "02", title: "Dados de \u00c1udio" },
      { id: "transcripts-outputs", number: "03", title: "Transcri\u00e7\u00f5es e Resultados" },
      { id: "usage-data", number: "04", title: "Dados de Utiliza\u00e7\u00e3o" },
      { id: "cookies", number: "05", title: "Cookies e Tecnologias Semelhantes" },
      { id: "how-we-use", number: "06", title: "Como Utilizamos os Seus Dados" },
      { id: "data-retention", number: "07", title: "Reten\u00e7\u00e3o de Dados" },
      { id: "deletion-rights", number: "08", title: "Os Seus Direitos e Elimina\u00e7\u00e3o" },
      { id: "third-party", number: "09", title: "Servi\u00e7os de Terceiros" },
      { id: "security", number: "10", title: "Seguran\u00e7a" },
      { id: "international", number: "11", title: "Transfer\u00eancias Internacionais" },
      { id: "children", number: "12", title: "Privacidade de Menores" },
      { id: "contact", number: "13", title: "Contacte-nos" },
      { id: "updates", number: "14", title: "Atualiza\u00e7\u00f5es da Pol\u00edtica" },
    ],
    s01: {
      intro:
        "Quando cria uma conta ou utiliza o Sythio, podemos recolher os seguintes tipos de informa\u00e7\u00f5es:",
      items: [
        {
          label: "Informa\u00e7\u00f5es de Conta:",
          desc: "O seu nome, endere\u00e7o de e-mail e palavra-passe ao registar-se.",
        },
        {
          label: "Informa\u00e7\u00f5es de Perfil:",
          desc: "Detalhes opcionais que fornece, como a sua fotografia de perfil, cargo ou organiza\u00e7\u00e3o.",
        },
        {
          label: "Informa\u00e7\u00f5es de Pagamento:",
          desc: "Dados de fatura\u00e7\u00e3o processados de forma segura atrav\u00e9s do nosso prestador de pagamentos externo. N\u00e3o armazenamos o n\u00famero completo do seu cart\u00e3o de cr\u00e9dito.",
        },
        {
          label: "Comunica\u00e7\u00f5es:",
          desc: "Informa\u00e7\u00f5es que fornece ao contactar a nossa equipa de suporte ou ao responder a inqu\u00e9ritos.",
        },
      ],
    },
    s02: {
      intro:
        "O Sythio processa as grava\u00e7\u00f5es de \u00e1udio que fornece para gerar transcri\u00e7\u00f5es, resumos e outros resultados. Eis como tratamos os seus dados de \u00e1udio:",
      items: [
        "Os ficheiros de \u00e1udio s\u00e3o carregados nos nossos servidores seguros para processamento e s\u00e3o encriptados em tr\u00e2nsito (TLS 1.3) e em repouso (AES-256).",
        "O \u00e1udio \u00e9 processado pelos nossos modelos de IA para gerar transcri\u00e7\u00f5es, resumos, tarefas e outros resultados estruturados que solicitar.",
        "N\u00e3o utilizamos as suas grava\u00e7\u00f5es de \u00e1udio para treinar os nossos modelos de IA, a menos que aceite explicitamente participar no nosso programa de melhoria.",
        "Pode eliminar as suas grava\u00e7\u00f5es de \u00e1udio a qualquer momento atrav\u00e9s das defini\u00e7\u00f5es da sua conta.",
      ],
    },
    s03: {
      intro:
        "Quando o Sythio processa o seu \u00e1udio, gera diversos resultados, incluindo transcri\u00e7\u00f5es, resumos, tarefas e notas estruturadas. Estes resultados:",
      items: [
        "S\u00e3o armazenados na sua conta e acess\u00edveis apenas por si, a menos que opte por partilh\u00e1-los.",
        "Podem conter etiquetas de identifica\u00e7\u00e3o de interlocutores com base nas caracter\u00edsticas vocais detetadas no \u00e1udio.",
        "S\u00e3o encriptados em repouso e em tr\u00e2nsito utilizando protocolos padr\u00e3o da ind\u00fastria.",
        "Podem ser exportados ou eliminados a qualquer momento atrav\u00e9s do painel da sua conta.",
      ],
    },
    s04: {
      intro:
        "Recolhemos automaticamente determinadas informa\u00e7\u00f5es sobre a forma como interage com o Sythio, incluindo:",
      items: [
        "Informa\u00e7\u00f5es do dispositivo (tipo de navegador, sistema operativo, modelo do dispositivo).",
        "Dados de registo (endere\u00e7o IP, hor\u00e1rios de acesso, p\u00e1ginas visitadas, funcionalidades utilizadas).",
        "M\u00e9tricas de desempenho (tempos de carregamento, relat\u00f3rios de erros, registos de falhas).",
        "Padr\u00f5es de utiliza\u00e7\u00e3o de funcionalidades (quais resultados gera com mais frequ\u00eancia, frequ\u00eancia de grava\u00e7\u00e3o).",
      ],
      outro:
        "Estes dados ajudam-nos a melhorar o Sythio, a diagnosticar problemas t\u00e9cnicos e a compreender como as nossas funcionalidades s\u00e3o utilizadas.",
    },
    s05: {
      text: "O Sythio utiliza cookies e tecnologias semelhantes para autentica\u00e7\u00e3o, prefer\u00eancias e an\u00e1lises. Para obter informa\u00e7\u00f5es completas sobre os cookies que utilizamos e como geri-los, consulte a nossa",
      linkText: "Pol\u00edtica de Cookies",
    },
    s06: {
      intro: "Utilizamos as informa\u00e7\u00f5es que recolhemos para:",
      items: [
        "Fornecer, manter e melhorar o servi\u00e7o Sythio.",
        "Processar as suas grava\u00e7\u00f5es de \u00e1udio e gerar os resultados solicitados.",
        "Enviar-lhe comunica\u00e7\u00f5es relacionadas com o servi\u00e7o, incluindo verifica\u00e7\u00e3o de conta, alertas de seguran\u00e7a e notifica\u00e7\u00f5es de fatura\u00e7\u00e3o.",
        "Responder aos seus pedidos de suporte e fornecer assist\u00eancia ao cliente.",
        "Analisar padr\u00f5es de utiliza\u00e7\u00e3o para melhorar os nossos modelos de IA e a experi\u00eancia do utilizador (utilizando apenas dados agregados e anonimizados).",
        "Detetar, prevenir e resolver fraudes, abusos e problemas de seguran\u00e7a.",
        "Cumprir obriga\u00e7\u00f5es legais e fazer cumprir os nossos Termos de Servi\u00e7o.",
      ],
      outro: "Nunca venderemos as suas informa\u00e7\u00f5es pessoais a terceiros.",
    },
    s07: {
      intro:
        "Conservamos os seus dados enquanto a sua conta estiver ativa ou conforme necess\u00e1rio para lhe prestar os nossos servi\u00e7os. Especificamente:",
      items: [
        {
          label: "Dados de conta",
          desc: "s\u00e3o conservados durante toda a vida da sua conta.",
        },
        {
          label: "Grava\u00e7\u00f5es de \u00e1udio",
          desc: "s\u00e3o conservadas at\u00e9 que as elimine ou encerre a sua conta.",
        },
        {
          label: "Resultados gerados",
          desc: "(transcri\u00e7\u00f5es, resumos, etc.) s\u00e3o conservados at\u00e9 que os elimine ou encerre a sua conta.",
        },
        {
          label: "Dados de utiliza\u00e7\u00e3o",
          desc: "s\u00e3o conservados de forma identific\u00e1vel durante um m\u00e1ximo de 24 meses, ap\u00f3s os quais s\u00e3o anonimizados.",
        },
        {
          label: "C\u00f3pias de seguran\u00e7a",
          desc: "podem persistir nos nossos sistemas de backup encriptados durante at\u00e9 90 dias ap\u00f3s a elimina\u00e7\u00e3o.",
        },
      ],
    },
    s08: {
      intro:
        "Dependendo da sua localiza\u00e7\u00e3o, poder\u00e1 ter os seguintes direitos relativamente aos seus dados pessoais:",
      items: [
        { label: "Acesso:", desc: "Solicitar uma c\u00f3pia dos dados pessoais que detemos sobre si." },
        { label: "Retifica\u00e7\u00e3o:", desc: "Solicitar a corre\u00e7\u00e3o de dados inexatos ou incompletos." },
        { label: "Elimina\u00e7\u00e3o:", desc: "Solicitar a elimina\u00e7\u00e3o dos seus dados pessoais e da sua conta." },
        {
          label: "Portabilidade:",
          desc: "Solicitar os seus dados num formato estruturado e leg\u00edvel por m\u00e1quina.",
        },
        { label: "Oposi\u00e7\u00e3o:", desc: "Opor-se a determinados tratamentos dos seus dados." },
        { label: "Limita\u00e7\u00e3o:", desc: "Solicitar que limitemos a utiliza\u00e7\u00e3o dos seus dados." },
      ],
      outro:
        "Para exercer qualquer um destes direitos, contacte-nos em privacy@sythio.com. Responderemos ao seu pedido no prazo de 30 dias.",
    },
    s09: {
      intro:
        "O Sythio integra-se com ou depende dos seguintes tipos de servi\u00e7os de terceiros:",
      items: [
        {
          label: "Infraestrutura Cloud:",
          desc: "Utilizamos fornecedores cloud l\u00edderes de mercado para alojar e processar os seus dados de forma segura.",
        },
        {
          label: "Processamento de Pagamentos:",
          desc: "Os pagamentos s\u00e3o geridos por processadores em conformidade com a norma PCI-DSS. Nunca vemos nem armazenamos os dados completos do seu cart\u00e3o.",
        },
        {
          label: "An\u00e1lise:",
          desc: "Utilizamos ferramentas de an\u00e1lise focadas na privacidade para compreender padr\u00f5es de utiliza\u00e7\u00e3o agregados.",
        },
        {
          label: "Processamento de IA:",
          desc: "O processamento de \u00e1udio pode envolver servi\u00e7os de IA de terceiros, vinculados por acordos rigorosos de tratamento de dados.",
        },
      ],
      outro:
        "Avaliamos cuidadosamente todos os fornecedores terceiros e exigimos que mantenham padr\u00f5es adequados de seguran\u00e7a e privacidade.",
    },
    s10: {
      intro:
        "Levamos a seguran\u00e7a dos seus dados muito a s\u00e9rio e implementamos medidas padr\u00e3o da ind\u00fastria para os proteger:",
      items: [
        "Todos os dados s\u00e3o encriptados em tr\u00e2nsito atrav\u00e9s de TLS 1.3 e em repouso atrav\u00e9s de encripta\u00e7\u00e3o AES-256.",
        "O acesso aos dados dos utilizadores \u00e9 estritamente limitado ao pessoal autorizado com necessidade leg\u00edtima.",
        "Realizamos auditorias de seguran\u00e7a e testes de penetra\u00e7\u00e3o regulares.",
        "Mantemos procedimentos de resposta a incidentes e notificaremos os utilizadores afetados de qualquer viola\u00e7\u00e3o de dados no prazo de 72 horas, conforme exigido pela legisla\u00e7\u00e3o aplic\u00e1vel.",
      ],
      outro:
        "Embora nenhum sistema seja 100% seguro, trabalhamos continuamente para proteger as suas informa\u00e7\u00f5es e resolver prontamente quaisquer vulnerabilidades.",
    },
    s11: {
      intro:
        "O Sythio opera globalmente e os seus dados podem ser transferidos e processados em pa\u00edses diferentes do seu pa\u00eds de resid\u00eancia. Quando transferimos dados internacionalmente, garantimos que existem salvaguardas adequadas, incluindo:",
      items: [
        "Cl\u00e1usulas Contratuais Tipo (CCT) aprovadas pela Comiss\u00e3o Europeia.",
        "Acordos de tratamento de dados com todos os prestadores de servi\u00e7os que tratam dados pessoais.",
        "Conformidade com os enquadramentos de prote\u00e7\u00e3o de dados aplic\u00e1veis, incluindo os requisitos do RGPD para utilizadores da UE/EEE.",
      ],
    },
    s12: {
      p1: "O Sythio n\u00e3o se destina a menores de 16 anos. N\u00e3o recolhemos conscientemente informa\u00e7\u00f5es pessoais de menores de 16 anos. Se tivermos conhecimento de que recolhemos dados de uma crian\u00e7a menor de 16 anos, tomaremos medidas para eliminar essas informa\u00e7\u00f5es prontamente.",
      p2pre:
        "Se \u00e9 pai, m\u00e3e ou tutor e acredita que o seu filho nos forneceu informa\u00e7\u00f5es pessoais, contacte-nos em",
      p2post: ".",
    },
    s13: {
      intro:
        "Se tiver quest\u00f5es, preocupa\u00e7\u00f5es ou pedidos relativos a esta Pol\u00edtica de Privacidade ou \u00e0s nossas pr\u00e1ticas de dados, contacte-nos:",
      emailLabel: "E-mail:",
      generalLabel: "Geral:",
      websiteLabel: "Website:",
    },
    s14: {
      intro:
        "Podemos atualizar esta Pol\u00edtica de Privacidade periodicamente para refletir altera\u00e7\u00f5es nas nossas pr\u00e1ticas, tecnologia, requisitos legais ou outros fatores. Quando fizermos altera\u00e7\u00f5es significativas:",
      items: [
        'Publicaremos a pol\u00edtica atualizada nesta p\u00e1gina com uma nova data de "\u00daltima atualiza\u00e7\u00e3o".',
        "Notific\u00e1-lo-emos por e-mail ou atrav\u00e9s de uma notifica\u00e7\u00e3o na aplica\u00e7\u00e3o se as altera\u00e7\u00f5es forem significativas.",
        "Dar-lhe-emos a oportunidade de rever as altera\u00e7\u00f5es antes de entrarem em vigor, quando exigido por lei.",
      ],
      outro:
        "A sua utiliza\u00e7\u00e3o continuada do Sythio ap\u00f3s a data de entrada em vigor de quaisquer altera\u00e7\u00f5es constitui a sua aceita\u00e7\u00e3o da pol\u00edtica atualizada.",
    },
  },

  /* ================================================================
   * ITALIAN
   * ================================================================ */
  it: {
    legal: "Legale",
    title: "Informativa sulla Privacy",
    subtitle:
      "La tua privacy \u00e8 importante per noi. Questa informativa spiega come Sythio raccoglie, utilizza e protegge le tue informazioni quando usi i nostri servizi.",
    lastUpdated: "Ultimo aggiornamento",
    lastUpdatedDate: "23 marzo 2026",
    effective: "In vigore",
    toc: "Indice",
    backToTop: "Torna in alto",
    allRights: "Tutti i diritti riservati.",
    sections: [
      { id: "information-collected", number: "01", title: "Informazioni che Raccogliamo" },
      { id: "audio-data", number: "02", title: "Dati Audio" },
      { id: "transcripts-outputs", number: "03", title: "Trascrizioni e Risultati" },
      { id: "usage-data", number: "04", title: "Dati di Utilizzo" },
      { id: "cookies", number: "05", title: "Cookie e Tecnologie Simili" },
      { id: "how-we-use", number: "06", title: "Come Utilizziamo i Tuoi Dati" },
      { id: "data-retention", number: "07", title: "Conservazione dei Dati" },
      { id: "deletion-rights", number: "08", title: "I Tuoi Diritti e la Cancellazione" },
      { id: "third-party", number: "09", title: "Servizi di Terze Parti" },
      { id: "security", number: "10", title: "Sicurezza" },
      { id: "international", number: "11", title: "Trasferimenti Internazionali" },
      { id: "children", number: "12", title: "Privacy dei Minori" },
      { id: "contact", number: "13", title: "Contattaci" },
      { id: "updates", number: "14", title: "Aggiornamenti dell\u2019Informativa" },
    ],
    s01: {
      intro:
        "Quando crei un account o utilizzi Sythio, potremmo raccogliere i seguenti tipi di informazioni:",
      items: [
        {
          label: "Informazioni dell\u2019Account:",
          desc: "Il tuo nome, indirizzo e-mail e password al momento della registrazione.",
        },
        {
          label: "Informazioni del Profilo:",
          desc: "Dettagli facoltativi che fornisci, come la tua foto profilo, qualifica professionale o organizzazione.",
        },
        {
          label: "Informazioni di Pagamento:",
          desc: "Dati di fatturazione elaborati in modo sicuro tramite il nostro fornitore di pagamenti esterno. Non memorizziamo il numero completo della tua carta di credito.",
        },
        {
          label: "Comunicazioni:",
          desc: "Informazioni che fornisci quando contatti il nostro team di assistenza o rispondi a sondaggi.",
        },
      ],
    },
    s02: {
      intro:
        "Sythio elabora le registrazioni audio che fornisci per generare trascrizioni, riassunti e altri risultati. Ecco come gestiamo i tuoi dati audio:",
      items: [
        "I file audio vengono caricati sui nostri server sicuri per l\u2019elaborazione e sono crittografati sia in transito (TLS 1.3) che a riposo (AES-256).",
        "L\u2019audio viene elaborato dai nostri modelli di IA per generare trascrizioni, riassunti, attivit\u00e0 e altri risultati strutturati che richiedi.",
        "Non utilizziamo le tue registrazioni audio per addestrare i nostri modelli di IA, a meno che tu non acconsenta esplicitamente al nostro programma di miglioramento.",
        "Puoi eliminare le tue registrazioni audio in qualsiasi momento dalle impostazioni del tuo account.",
      ],
    },
    s03: {
      intro:
        "Quando Sythio elabora il tuo audio, genera vari risultati tra cui trascrizioni, riassunti, azioni da intraprendere e note strutturate. Questi risultati:",
      items: [
        "Sono archiviati nel tuo account e accessibili solo a te, a meno che tu non scelga di condividerli.",
        "Possono contenere etichette di identificazione degli interlocutori basate sulle caratteristiche vocali rilevate nell\u2019audio.",
        "Sono crittografati a riposo e in transito utilizzando protocolli standard del settore.",
        "Possono essere esportati o eliminati in qualsiasi momento dalla dashboard del tuo account.",
      ],
    },
    s04: {
      intro:
        "Raccogliamo automaticamente determinate informazioni su come interagisci con Sythio, tra cui:",
      items: [
        "Informazioni sul dispositivo (tipo di browser, sistema operativo, modello del dispositivo).",
        "Dati di log (indirizzo IP, orari di accesso, pagine visualizzate, funzionalit\u00e0 utilizzate).",
        "Metriche di prestazione (tempi di caricamento, segnalazioni di errori, registri di arresto anomalo).",
        "Abitudini di utilizzo delle funzionalit\u00e0 (quali risultati generi pi\u00f9 spesso, frequenza di registrazione).",
      ],
      outro:
        "Questi dati ci aiutano a migliorare Sythio, a diagnosticare problemi tecnici e a capire come vengono utilizzate le nostre funzionalit\u00e0.",
    },
    s05: {
      text: "Sythio utilizza cookie e tecnologie simili per autenticazione, preferenze e analisi. Per informazioni complete sui cookie che utilizziamo e su come gestirli, consulta la nostra",
      linkText: "Politica sui Cookie",
    },
    s06: {
      intro: "Utilizziamo le informazioni raccolte per:",
      items: [
        "Fornire, mantenere e migliorare il servizio Sythio.",
        "Elaborare le tue registrazioni audio e generare i risultati richiesti.",
        "Inviarti comunicazioni relative al servizio, incluse verifiche dell\u2019account, avvisi di sicurezza e notifiche di fatturazione.",
        "Rispondere alle tue richieste di assistenza e fornirti supporto.",
        "Analizzare le abitudini di utilizzo per migliorare i nostri modelli di IA e l\u2019esperienza utente (utilizzando solo dati aggregati e anonimizzati).",
        "Rilevare, prevenire e affrontare frodi, abusi e problemi di sicurezza.",
        "Adempiere agli obblighi di legge e far rispettare i nostri Termini di Servizio.",
      ],
      outro: "Non venderemo mai le tue informazioni personali a terze parti.",
    },
    s07: {
      intro:
        "Conserviamo i tuoi dati finch\u00e9 il tuo account \u00e8 attivo o per il tempo necessario a fornirti i nostri servizi. Nello specifico:",
      items: [
        {
          label: "Dati dell\u2019account",
          desc: "conservati per l\u2019intera durata del tuo account.",
        },
        {
          label: "Registrazioni audio",
          desc: "conservate fino a quando non le elimini o chiudi il tuo account.",
        },
        {
          label: "Risultati generati",
          desc: "(trascrizioni, riassunti, ecc.) conservati fino a quando non li elimini o chiudi il tuo account.",
        },
        {
          label: "Dati di utilizzo",
          desc: "conservati in forma identificabile per un massimo di 24 mesi, dopo i quali vengono anonimizzati.",
        },
        {
          label: "Copie di backup",
          desc: "possono persistere nei nostri sistemi di backup crittografati fino a 90 giorni dopo l\u2019eliminazione.",
        },
      ],
    },
    s08: {
      intro:
        "A seconda della tua posizione geografica, potresti avere i seguenti diritti riguardo ai tuoi dati personali:",
      items: [
        { label: "Accesso:", desc: "Richiedere una copia dei dati personali che deteniamo su di te." },
        { label: "Rettifica:", desc: "Richiedere la correzione di dati inesatti o incompleti." },
        { label: "Cancellazione:", desc: "Richiedere la cancellazione dei tuoi dati personali e del tuo account." },
        {
          label: "Portabilit\u00e0:",
          desc: "Richiedere i tuoi dati in un formato strutturato e leggibile da dispositivo automatico.",
        },
        { label: "Opposizione:", desc: "Opporti a determinati trattamenti dei tuoi dati." },
        { label: "Limitazione:", desc: "Richiedere che limitiamo l\u2019utilizzo dei tuoi dati." },
      ],
      outro:
        "Per esercitare uno qualsiasi di questi diritti, contattaci all\u2019indirizzo privacy@sythio.com. Risponderemo alla tua richiesta entro 30 giorni.",
    },
    s09: {
      intro:
        "Sythio si integra con o si affida ai seguenti tipi di servizi di terze parti:",
      items: [
        {
          label: "Infrastruttura Cloud:",
          desc: "Utilizziamo fornitori cloud leader del settore per ospitare ed elaborare i tuoi dati in modo sicuro.",
        },
        {
          label: "Elaborazione dei Pagamenti:",
          desc: "I pagamenti sono gestiti da processori conformi allo standard PCI-DSS. Non vediamo n\u00e9 memorizziamo mai i dati completi della tua carta.",
        },
        {
          label: "Analisi:",
          desc: "Utilizziamo strumenti di analisi attenti alla privacy per comprendere i modelli di utilizzo aggregati.",
        },
        {
          label: "Elaborazione IA:",
          desc: "L\u2019elaborazione audio pu\u00f2 coinvolgere servizi di IA di terze parti, vincolati da rigorosi accordi sul trattamento dei dati.",
        },
      ],
      outro:
        "Selezioniamo accuratamente tutti i fornitori terzi e richiediamo che mantengano adeguati standard di sicurezza e privacy.",
    },
    s10: {
      intro:
        "Prendiamo molto seriamente la sicurezza dei tuoi dati e implementiamo misure conformi agli standard del settore per proteggerli:",
      items: [
        "Tutti i dati sono crittografati in transito tramite TLS 1.3 e a riposo tramite crittografia AES-256.",
        "L\u2019accesso ai dati degli utenti \u00e8 strettamente limitato al personale autorizzato in base alla necessit\u00e0.",
        "Effettuiamo regolarmente audit di sicurezza e test di penetrazione.",
        "Manteniamo procedure di risposta agli incidenti e notificheremo gli utenti coinvolti di qualsiasi violazione dei dati entro 72 ore, come richiesto dalla normativa applicabile.",
      ],
      outro:
        "Sebbene nessun sistema sia sicuro al 100%, lavoriamo costantemente per proteggere le tue informazioni e risolvere tempestivamente qualsiasi vulnerabilit\u00e0.",
    },
    s11: {
      intro:
        "Sythio opera a livello globale e i tuoi dati possono essere trasferiti ed elaborati in paesi diversi dal tuo paese di residenza. Quando trasferiamo dati a livello internazionale, ci assicuriamo che siano in atto adeguate garanzie, tra cui:",
      items: [
        "Clausole Contrattuali Standard (CCS) approvate dalla Commissione Europea.",
        "Accordi sul trattamento dei dati con tutti i fornitori di servizi che gestiscono dati personali.",
        "Conformit\u00e0 ai quadri normativi sulla protezione dei dati applicabili, inclusi i requisiti del GDPR per gli utenti dell\u2019UE/SEE.",
      ],
    },
    s12: {
      p1: "Sythio non \u00e8 destinato all\u2019uso da parte di minori di 16 anni. Non raccogliamo consapevolmente informazioni personali da minori di 16 anni. Se veniamo a conoscenza di aver raccolto dati da un minore di 16 anni, adotteremo misure per eliminare tali informazioni tempestivamente.",
      p2pre:
        "Se sei un genitore o tutore e ritieni che tuo figlio ci abbia fornito informazioni personali, contattaci all\u2019indirizzo",
      p2post: ".",
    },
    s13: {
      intro:
        "Per qualsiasi domanda, dubbio o richiesta riguardante questa Informativa sulla Privacy o le nostre pratiche relative ai dati, contattaci:",
      emailLabel: "E-mail:",
      generalLabel: "Generale:",
      websiteLabel: "Sito web:",
    },
    s14: {
      intro:
        "Potremmo aggiornare periodicamente questa Informativa sulla Privacy per riflettere cambiamenti nelle nostre pratiche, nella tecnologia, nei requisiti legali o in altri fattori. In caso di modifiche sostanziali:",
      items: [
        'Pubblicheremo l\u2019informativa aggiornata su questa pagina con una nuova data di "Ultimo aggiornamento".',
        "Ti informeremo via e-mail o tramite una notifica nell\u2019app se le modifiche sono significative.",
        "Ti daremo l\u2019opportunit\u00e0 di esaminare le modifiche prima che entrino in vigore, ove richiesto dalla legge.",
      ],
      outro:
        "L\u2019uso continuato di Sythio dopo la data di entrata in vigore di qualsiasi modifica costituisce la tua accettazione dell\u2019informativa aggiornata.",
    },
  },
};

/* ─── Privacy Policy Page ─── */
export default function PrivacyPolicyPage() {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;

  return (
    <PageReveal>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-neutral-50/60 via-neutral-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
            {c.legal}
          </span>
          <TextReveal
            tag="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            {c.title}
          </TextReveal>
          <TextReveal
            tag="p"
            className="mt-6 text-lg text-muted leading-relaxed"
          >
            {c.subtitle}
          </TextReveal>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-light">
            <span>{c.lastUpdated}: {c.lastUpdatedDate}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{c.effective}: {c.lastUpdatedDate}</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="pb-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl border border-border-light bg-background/50 p-6 md:p-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-4">
              {c.toc}
            </h2>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {c.sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-baseline gap-2.5 text-sm text-muted hover:text-foreground transition-colors py-1"
                >
                  <span className="font-mono text-xs text-muted-light">
                    {s.number}
                  </span>
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 md:pb-44 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {/* 01 — Information We Collect */}
          <Section
            id={c.sections[0].id}
            number={c.sections[0].number}
            title={c.sections[0].title}
          >
            <p>{c.s01.intro}</p>
            <ul className="list-disc pl-5 space-y-2">
              {c.s01.items.map((item, i) => (
                <li key={i}>
                  <strong className="text-foreground font-medium">{item.label}</strong>{" "}
                  {item.desc}
                </li>
              ))}
            </ul>
          </Section>

          {/* 02 — Audio Data */}
          <Section
            id={c.sections[1].id}
            number={c.sections[1].number}
            title={c.sections[1].title}
          >
            <p>{c.s02.intro}</p>
            <ul className="list-disc pl-5 space-y-2">
              {c.s02.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          {/* 03 — Transcripts & Outputs */}
          <Section
            id={c.sections[2].id}
            number={c.sections[2].number}
            title={c.sections[2].title}
          >
            <p>{c.s03.intro}</p>
            <ul className="list-disc pl-5 space-y-2">
              {c.s03.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          {/* 04 — Usage Data */}
          <Section
            id={c.sections[3].id}
            number={c.sections[3].number}
            title={c.sections[3].title}
          >
            <p>{c.s04.intro}</p>
            <ul className="list-disc pl-5 space-y-2">
              {c.s04.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{c.s04.outro}</p>
          </Section>

          {/* 05 — Cookies */}
          <Section
            id={c.sections[4].id}
            number={c.sections[4].number}
            title={c.sections[4].title}
          >
            <p>
              {c.s05.text}{" "}
              <Link
                href="/cookie-policy"
                className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors"
              >
                {c.s05.linkText}
              </Link>
              .
            </p>
          </Section>

          {/* 06 — How We Use Your Data */}
          <Section
            id={c.sections[5].id}
            number={c.sections[5].number}
            title={c.sections[5].title}
          >
            <p>{c.s06.intro}</p>
            <ul className="list-disc pl-5 space-y-2">
              {c.s06.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{c.s06.outro}</p>
          </Section>

          {/* 07 — Data Retention */}
          <Section
            id={c.sections[6].id}
            number={c.sections[6].number}
            title={c.sections[6].title}
          >
            <p>{c.s07.intro}</p>
            <ul className="list-disc pl-5 space-y-2">
              {c.s07.items.map((item, i) => (
                <li key={i}>
                  <strong className="text-foreground font-medium">{item.label}</strong>{" "}
                  {item.desc}
                </li>
              ))}
            </ul>
          </Section>

          {/* 08 — Your Rights & Deletion */}
          <Section
            id={c.sections[7].id}
            number={c.sections[7].number}
            title={c.sections[7].title}
          >
            <p>{c.s08.intro}</p>
            <ul className="list-disc pl-5 space-y-2">
              {c.s08.items.map((item, i) => (
                <li key={i}>
                  <strong className="text-foreground font-medium">{item.label}</strong>{" "}
                  {item.desc}
                </li>
              ))}
            </ul>
            <p>
              {c.s08.outro.split("privacy@sythio.com")[0]}
              <a
                href="mailto:privacy@sythio.com"
                className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors"
              >
                privacy@sythio.com
              </a>
              {c.s08.outro.split("privacy@sythio.com")[1]}
            </p>
          </Section>

          {/* 09 — Third-Party Services */}
          <Section
            id={c.sections[8].id}
            number={c.sections[8].number}
            title={c.sections[8].title}
          >
            <p>{c.s09.intro}</p>
            <ul className="list-disc pl-5 space-y-2">
              {c.s09.items.map((item, i) => (
                <li key={i}>
                  <strong className="text-foreground font-medium">{item.label}</strong>{" "}
                  {item.desc}
                </li>
              ))}
            </ul>
            <p>{c.s09.outro}</p>
          </Section>

          {/* 10 — Security */}
          <Section
            id={c.sections[9].id}
            number={c.sections[9].number}
            title={c.sections[9].title}
          >
            <p>{c.s10.intro}</p>
            <ul className="list-disc pl-5 space-y-2">
              {c.s10.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{c.s10.outro}</p>
          </Section>

          {/* 11 — International Transfers */}
          <Section
            id={c.sections[10].id}
            number={c.sections[10].number}
            title={c.sections[10].title}
          >
            <p>{c.s11.intro}</p>
            <ul className="list-disc pl-5 space-y-2">
              {c.s11.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          {/* 12 — Children's Privacy */}
          <Section
            id={c.sections[11].id}
            number={c.sections[11].number}
            title={c.sections[11].title}
          >
            <p>{c.s12.p1}</p>
            <p>
              {c.s12.p2pre}{" "}
              <a
                href="mailto:privacy@sythio.com"
                className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors"
              >
                privacy@sythio.com
              </a>
              {c.s12.p2post}
            </p>
          </Section>

          {/* 13 — Contact Us */}
          <Section
            id={c.sections[12].id}
            number={c.sections[12].number}
            title={c.sections[12].title}
          >
            <p>{c.s13.intro}</p>
            <div className="rounded-xl border border-border-light bg-background/50 p-6 space-y-2 not-prose">
              <p className="text-sm">
                <strong className="text-foreground font-medium">{c.s13.emailLabel}</strong>{" "}
                <a
                  href="mailto:privacy@sythio.com"
                  className="text-muted hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  privacy@sythio.com
                </a>
              </p>
              <p className="text-sm">
                <strong className="text-foreground font-medium">{c.s13.generalLabel}</strong>{" "}
                <a
                  href="mailto:support@sythio.com"
                  className="text-muted hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  support@sythio.com
                </a>
              </p>
              <p className="text-sm">
                <strong className="text-foreground font-medium">{c.s13.websiteLabel}</strong>{" "}
                <Link
                  href="/contact"
                  className="text-muted hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  sythio.com/contact
                </Link>
              </p>
            </div>
          </Section>

          {/* 14 — Policy Updates */}
          <Section
            id={c.sections[13].id}
            number={c.sections[13].number}
            title={c.sections[13].title}
          >
            <p>{c.s14.intro}</p>
            <ul className="list-disc pl-5 space-y-2">
              {c.s14.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{c.s14.outro}</p>
          </Section>

          {/* Divider & back to top */}
          <div className="pt-8 border-t border-border-light flex items-center justify-between">
            <p className="text-sm text-muted-light">
              &copy; {new Date().getFullYear()} Sythio. {c.allRights}
            </p>
            <button
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {c.backToTop}
            </button>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
