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

/* ─── Content Type ─── */
interface TermsContent {
  /* Hero */
  legal: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  effective: string;
  /* Table of Contents */
  toc: string;
  /* Section titles */
  s01Title: string;
  s02Title: string;
  s03Title: string;
  s04Title: string;
  s05Title: string;
  s06Title: string;
  s07Title: string;
  s08Title: string;
  s09Title: string;
  s10Title: string;
  s11Title: string;
  s12Title: string;
  s13Title: string;
  s14Title: string;
  s15Title: string;
  /* 01 Acceptance */
  s01p1: string;
  s01p2: string;
  /* 02 Eligibility */
  s02p1: string;
  s02p2: string;
  /* 03 Accounts */
  s03p1: string;
  s03li1: string;
  s03li2: string;
  s03li3: string;
  s03li4: string;
  s03p2: string;
  /* 04 Subscriptions */
  s04p1: string;
  s04billingLabel: string;
  s04billingText: string;
  s04renewalLabel: string;
  s04renewalText: string;
  s04priceLabel: string;
  s04priceText: string;
  s04refundLabel: string;
  s04refundText: string;
  s04cancelLabel: string;
  s04cancelText: string;
  /* 05 Acceptable Use */
  s05p1: string;
  s05li1: string;
  s05li2: string;
  s05li3: string;
  s05li4: string;
  /* 06 User Content */
  s06p1: string;
  s06p2: string;
  s06p3: string;
  /* 07 AI Outputs */
  s07disclaimerTitle: string;
  s07disclaimerBody: string;
  s07li1: string;
  s07li2: string;
  s07li3: string;
  s07li4: string;
  s07li5: string;
  /* 08 Intellectual Property */
  s08p1: string;
  s08p2: string;
  s08p3: string;
  /* 09 Prohibited Conduct */
  s09p1: string;
  s09li1: string;
  s09li2: string;
  s09li3: string;
  s09li4: string;
  s09li5: string;
  s09li6: string;
  s09li7: string;
  s09li8: string;
  /* 10 Availability */
  s10p1: string;
  s10li1: string;
  s10li2: string;
  s10li3: string;
  s10p2: string;
  /* 11 Termination */
  s11p1: string;
  s11li1: string;
  s11li2: string;
  s11li3: string;
  s11li4: string;
  s11p2Before: string;
  s11privacyPolicy: string;
  /* 12 Disclaimers */
  s12preamble: string;
  s12p1: string;
  s12p2: string;
  /* 13 Liability */
  s13preamble: string;
  s13p1: string;
  s13li1: string;
  s13li2: string;
  s13li3: string;
  s13li4: string;
  s13p2: string;
  /* 14 Governing Law */
  s14p1: string;
  s14p2: string;
  s14noteLabel: string;
  s14noteText: string;
  /* 15 Contact */
  s15p1: string;
  s15emailLabel: string;
  s15supportLabel: string;
  s15websiteLabel: string;
  /* Footer */
  allRights: string;
  backToTop: string;
}

/* ─── Translations ─── */
const content: Record<Locale, TermsContent> = {
  /* ══════════════════════════════════════ ENGLISH ══════════════════════════════════════ */
  en: {
    legal: "Legal",
    title: "Terms of Service",
    subtitle: "These terms govern your use of Sythio. By using the platform, you agree to these terms.",
    lastUpdated: "Last updated",
    effective: "Effective",
    toc: "Table of Contents",

    s01Title: "Acceptance of Terms",
    s02Title: "Eligibility",
    s03Title: "Accounts",
    s04Title: "Subscriptions & Billing",
    s05Title: "Acceptable Use",
    s06Title: "User Content",
    s07Title: "AI-Generated Outputs",
    s08Title: "Intellectual Property",
    s09Title: "Prohibited Conduct",
    s10Title: "Service Availability",
    s11Title: "Termination",
    s12Title: "Disclaimers",
    s13Title: "Limitation of Liability",
    s14Title: "Governing Law",
    s15Title: "Contact",

    s01p1: "By creating an account, accessing, or using Sythio (the \"Service\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, you may not use the Service.",
    s01p2: "These Terms constitute a legally binding agreement between you and Sythio. We may update these Terms from time to time. We will notify you of material changes via email or in-app notification. Your continued use of the Service after such changes constitutes acceptance of the updated Terms.",

    s02p1: "To use Sythio, you must be at least 16 years old and have the legal capacity to enter into a binding agreement. By using the Service, you represent and warrant that you meet these requirements.",
    s02p2: "If you are using Sythio on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.",

    s03p1: "You are responsible for maintaining the security of your account credentials. You agree to:",
    s03li1: "Provide accurate and complete information when creating your account.",
    s03li2: "Keep your password secure and not share your account credentials with others.",
    s03li3: "Notify us immediately of any unauthorized access to your account.",
    s03li4: "Accept responsibility for all activity that occurs under your account.",
    s03p2: "We reserve the right to suspend or terminate accounts that violate these Terms or that we reasonably believe have been compromised.",

    s04p1: "Sythio offers both free and paid subscription plans. By subscribing to a paid plan, you agree to the following:",
    s04billingLabel: "Billing Cycle:",
    s04billingText: "Subscriptions are billed monthly or annually, depending on the plan you select. Charges are processed at the beginning of each billing cycle.",
    s04renewalLabel: "Auto-Renewal:",
    s04renewalText: "Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date.",
    s04priceLabel: "Price Changes:",
    s04priceText: "We may adjust pricing with at least 30 days' notice. Updated prices take effect at the start of your next billing cycle.",
    s04refundLabel: "Refunds:",
    s04refundText: "Refund requests are evaluated on a case-by-case basis. You may request a refund within 14 days of your initial subscription purchase.",
    s04cancelLabel: "Cancellation:",
    s04cancelText: "You may cancel your subscription at any time. You will retain access to paid features until the end of your current billing period.",

    s05p1: "You agree to use Sythio in compliance with all applicable laws and regulations. You are solely responsible for the content you record, upload, and process through the Service. You agree to:",
    s05li1: "Obtain all necessary consents before recording conversations with other individuals.",
    s05li2: "Comply with all applicable recording and wiretapping laws in your jurisdiction.",
    s05li3: "Not use the Service for any unlawful, harmful, or fraudulent purpose.",
    s05li4: "Not attempt to reverse-engineer, decompile, or extract the source code of our AI models or algorithms.",

    s06p1: "You retain ownership of all content you upload to or create through Sythio, including audio recordings, text inputs, and any materials you provide (\"User Content\").",
    s06p2: "By using the Service, you grant Sythio a limited, non-exclusive, worldwide license to process, store, and transmit your User Content solely for the purpose of providing and improving the Service. This license ends when you delete your content or close your account.",
    s06p3: "You represent that you have all necessary rights to your User Content and that its use through Sythio does not infringe on the rights of any third party.",

    s07disclaimerTitle: "Important Disclaimer",
    s07disclaimerBody: "Sythio uses artificial intelligence to generate transcripts, summaries, action items, and other outputs. While we strive for accuracy, AI-generated outputs may contain errors, inaccuracies, or omissions. You should always review and verify AI-generated content before relying on it for important decisions.",
    s07li1: "AI-generated outputs are provided \"as is\" and should not be treated as professional, legal, medical, or financial advice.",
    s07li2: "Transcription accuracy depends on audio quality, speaker clarity, background noise, and language complexity.",
    s07li3: "Speaker detection and attribution are probabilistic and may not always be accurate.",
    s07li4: "You are responsible for verifying the accuracy and completeness of all AI-generated outputs.",
    s07li5: "Sythio is not liable for any decisions made or actions taken based on AI-generated outputs.",

    s08p1: "Sythio and its associated trademarks, logos, designs, code, algorithms, AI models, and documentation are the exclusive property of Sythio and are protected by intellectual property laws.",
    s08p2: "Nothing in these Terms grants you any right, title, or interest in Sythio's intellectual property except for the limited license to use the Service as described herein.",
    s08p3: "You may not copy, modify, distribute, sell, or lease any part of our Service or its underlying technology without our prior written consent.",

    s09p1: "When using Sythio, you agree not to:",
    s09li1: "Use the Service to record or process content that is illegal, harassing, defamatory, obscene, or otherwise objectionable.",
    s09li2: "Attempt to gain unauthorized access to other users' accounts or data.",
    s09li3: "Use automated tools (bots, scrapers, etc.) to access the Service in a manner that exceeds reasonable use.",
    s09li4: "Interfere with or disrupt the Service, its servers, or networks connected to the Service.",
    s09li5: "Upload content that contains malware, viruses, or any harmful code.",
    s09li6: "Resell, sublicense, or commercially exploit the Service without authorization.",
    s09li7: "Use the Service to develop competing products or services.",
    s09li8: "Circumvent any technical measures we use to protect the Service.",

    s10p1: "We strive to maintain high availability of the Sythio Service. However, we do not guarantee uninterrupted or error-free operation. The Service may be temporarily unavailable due to:",
    s10li1: "Scheduled maintenance (we will provide advance notice when possible).",
    s10li2: "Unscheduled outages caused by technical issues or force majeure events.",
    s10li3: "Updates, upgrades, or improvements to the Service.",
    s10p2: "We will make reasonable efforts to restore service promptly and communicate any significant disruptions to users.",

    s11p1: "You may close your account and stop using Sythio at any time. We may also suspend or terminate your access to the Service if:",
    s11li1: "You violate these Terms or any applicable law.",
    s11li2: "Your use of the Service poses a security risk or could cause harm to other users.",
    s11li3: "Your account has been inactive for an extended period (we will notify you before taking any action).",
    s11li4: "We are required to do so by law or legal process.",
    s11p2Before: "Upon termination, your right to use the Service ceases immediately. We will retain your data for a reasonable period to allow you to export it, after which it will be deleted in accordance with our",
    s11privacyPolicy: "Privacy Policy",

    s12preamble: "The following disclaimers apply to the fullest extent permitted by applicable law:",
    s12p1: "The Service is provided on an \"as is\" and \"as available\" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
    s12p2: "Sythio does not warrant that the Service will be uninterrupted, secure, or error-free, that AI-generated outputs will be accurate or complete, or that defects will be corrected.",

    s13preamble: "To the maximum extent permitted by applicable law:",
    s13p1: "Sythio and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:",
    s13li1: "Your use of or inability to use the Service.",
    s13li2: "Any errors, inaccuracies, or omissions in AI-generated outputs.",
    s13li3: "Unauthorized access to or alteration of your data or transmissions.",
    s13li4: "Any third-party conduct on the Service.",
    s13p2: "In no event shall Sythio's total liability exceed the amount you paid to Sythio in the twelve (12) months preceding the event giving rise to the claim.",

    s14p1: "These Terms shall be governed by and construed in accordance with the laws of [Governing Jurisdiction], without regard to its conflict of law provisions.",
    s14p2: "Any disputes arising out of or relating to these Terms or the Service shall be resolved exclusively in the courts located in [Governing Jurisdiction]. You consent to the personal jurisdiction of such courts.",
    s14noteLabel: "Note:",
    s14noteText: "Bracketed items such as [Governing Jurisdiction] are placeholders that will be finalized upon legal review.",

    s15p1: "If you have any questions about these Terms of Service, please contact us:",
    s15emailLabel: "Email:",
    s15supportLabel: "Support:",
    s15websiteLabel: "Website:",

    allRights: "All rights reserved.",
    backToTop: "Back to top",
  },

  /* ══════════════════════════════════════ SPANISH ══════════════════════════════════════ */
  es: {
    legal: "Legal",
    title: "Términos de Servicio",
    subtitle: "Estos términos rigen el uso de Sythio. Al usar la plataforma, aceptas estos términos.",
    lastUpdated: "Última actualización",
    effective: "Vigente desde",
    toc: "Tabla de Contenidos",

    s01Title: "Aceptación de los Términos",
    s02Title: "Elegibilidad",
    s03Title: "Cuentas",
    s04Title: "Suscripciones y Facturación",
    s05Title: "Uso Aceptable",
    s06Title: "Contenido del Usuario",
    s07Title: "Resultados Generados por IA",
    s08Title: "Propiedad Intelectual",
    s09Title: "Conducta Prohibida",
    s10Title: "Disponibilidad del Servicio",
    s11Title: "Terminación",
    s12Title: "Descargos de Responsabilidad",
    s13Title: "Limitación de Responsabilidad",
    s14Title: "Legislación Aplicable",
    s15Title: "Contacto",

    s01p1: "Al crear una cuenta, acceder o utilizar Sythio (el \"Servicio\"), aceptas quedar vinculado por estos Términos de Servicio (\"Términos\"). Si no estás de acuerdo con estos Términos, no podrás utilizar el Servicio.",
    s01p2: "Estos Términos constituyen un acuerdo legalmente vinculante entre tú y Sythio. Podemos actualizar estos Términos periódicamente. Te notificaremos de cambios importantes por correo electrónico o mediante una notificación dentro de la aplicación. El uso continuado del Servicio después de dichos cambios constituye la aceptación de los Términos actualizados.",

    s02p1: "Para utilizar Sythio, debes tener al menos 16 años y la capacidad legal para celebrar un acuerdo vinculante. Al utilizar el Servicio, declaras y garantizas que cumples con estos requisitos.",
    s02p2: "Si utilizas Sythio en nombre de una organización, declaras que tienes la autoridad para vincular a dicha organización a estos Términos.",

    s03p1: "Eres responsable de mantener la seguridad de las credenciales de tu cuenta. Aceptas:",
    s03li1: "Proporcionar información precisa y completa al crear tu cuenta.",
    s03li2: "Mantener tu contraseña segura y no compartir las credenciales de tu cuenta con terceros.",
    s03li3: "Notificarnos de inmediato sobre cualquier acceso no autorizado a tu cuenta.",
    s03li4: "Aceptar la responsabilidad de toda la actividad que ocurra en tu cuenta.",
    s03p2: "Nos reservamos el derecho de suspender o cancelar cuentas que violen estos Términos o que razonablemente creamos que han sido comprometidas.",

    s04p1: "Sythio ofrece planes de suscripción gratuitos y de pago. Al suscribirte a un plan de pago, aceptas lo siguiente:",
    s04billingLabel: "Ciclo de Facturación:",
    s04billingText: "Las suscripciones se facturan mensual o anualmente, según el plan que selecciones. Los cargos se procesan al inicio de cada ciclo de facturación.",
    s04renewalLabel: "Renovación Automática:",
    s04renewalText: "Las suscripciones se renuevan automáticamente al final de cada período de facturación, a menos que canceles antes de la fecha de renovación.",
    s04priceLabel: "Cambios de Precio:",
    s04priceText: "Podemos ajustar los precios con al menos 30 días de antelación. Los precios actualizados entran en vigor al inicio de tu próximo ciclo de facturación.",
    s04refundLabel: "Reembolsos:",
    s04refundText: "Las solicitudes de reembolso se evalúan caso por caso. Puedes solicitar un reembolso dentro de los 14 días posteriores a la compra inicial de tu suscripción.",
    s04cancelLabel: "Cancelación:",
    s04cancelText: "Puedes cancelar tu suscripción en cualquier momento. Conservarás el acceso a las funciones de pago hasta el final de tu período de facturación actual.",

    s05p1: "Aceptas utilizar Sythio en cumplimiento con todas las leyes y regulaciones aplicables. Eres el único responsable del contenido que grabas, subes y procesas a través del Servicio. Aceptas:",
    s05li1: "Obtener todos los consentimientos necesarios antes de grabar conversaciones con otras personas.",
    s05li2: "Cumplir con todas las leyes aplicables sobre grabación e interceptación de comunicaciones en tu jurisdicción.",
    s05li3: "No utilizar el Servicio para ningún propósito ilegal, dañino o fraudulento.",
    s05li4: "No intentar realizar ingeniería inversa, descompilar o extraer el código fuente de nuestros modelos de IA o algoritmos.",

    s06p1: "Conservas la propiedad de todo el contenido que subes o creas a través de Sythio, incluyendo grabaciones de audio, entradas de texto y cualquier material que proporciones (\"Contenido del Usuario\").",
    s06p2: "Al utilizar el Servicio, otorgas a Sythio una licencia limitada, no exclusiva y mundial para procesar, almacenar y transmitir tu Contenido del Usuario con el único fin de proporcionar y mejorar el Servicio. Esta licencia finaliza cuando eliminas tu contenido o cierras tu cuenta.",
    s06p3: "Declaras que tienes todos los derechos necesarios sobre tu Contenido del Usuario y que su uso a través de Sythio no infringe los derechos de ningún tercero.",

    s07disclaimerTitle: "Aviso Importante",
    s07disclaimerBody: "Sythio utiliza inteligencia artificial para generar transcripciones, resúmenes, elementos de acción y otros resultados. Aunque nos esforzamos por lograr precisión, los resultados generados por IA pueden contener errores, inexactitudes u omisiones. Siempre debes revisar y verificar el contenido generado por IA antes de confiar en él para decisiones importantes.",
    s07li1: "Los resultados generados por IA se proporcionan \"tal cual\" y no deben considerarse como asesoramiento profesional, legal, médico o financiero.",
    s07li2: "La precisión de la transcripción depende de la calidad del audio, la claridad del hablante, el ruido de fondo y la complejidad del idioma.",
    s07li3: "La detección e identificación de hablantes son probabilísticas y pueden no ser siempre precisas.",
    s07li4: "Eres responsable de verificar la exactitud e integridad de todos los resultados generados por IA.",
    s07li5: "Sythio no es responsable de las decisiones tomadas o acciones realizadas basándose en resultados generados por IA.",

    s08p1: "Sythio y sus marcas comerciales, logotipos, diseños, código, algoritmos, modelos de IA y documentación asociados son propiedad exclusiva de Sythio y están protegidos por las leyes de propiedad intelectual.",
    s08p2: "Nada en estos Términos te otorga ningún derecho, título o interés sobre la propiedad intelectual de Sythio, excepto la licencia limitada para utilizar el Servicio según se describe en el presente documento.",
    s08p3: "No puedes copiar, modificar, distribuir, vender ni arrendar ninguna parte de nuestro Servicio o su tecnología subyacente sin nuestro consentimiento previo por escrito.",

    s09p1: "Al utilizar Sythio, aceptas no:",
    s09li1: "Utilizar el Servicio para grabar o procesar contenido que sea ilegal, acosador, difamatorio, obsceno o de otro modo objetable.",
    s09li2: "Intentar obtener acceso no autorizado a las cuentas o datos de otros usuarios.",
    s09li3: "Utilizar herramientas automatizadas (bots, scrapers, etc.) para acceder al Servicio de manera que exceda un uso razonable.",
    s09li4: "Interferir o interrumpir el Servicio, sus servidores o las redes conectadas al Servicio.",
    s09li5: "Subir contenido que contenga malware, virus o cualquier código dañino.",
    s09li6: "Revender, sublicenciar o explotar comercialmente el Servicio sin autorización.",
    s09li7: "Utilizar el Servicio para desarrollar productos o servicios competidores.",
    s09li8: "Eludir cualquier medida técnica que utilicemos para proteger el Servicio.",

    s10p1: "Nos esforzamos por mantener una alta disponibilidad del Servicio Sythio. Sin embargo, no garantizamos un funcionamiento ininterrumpido o libre de errores. El Servicio puede no estar disponible temporalmente debido a:",
    s10li1: "Mantenimiento programado (proporcionaremos aviso previo cuando sea posible).",
    s10li2: "Interrupciones no programadas causadas por problemas técnicos o eventos de fuerza mayor.",
    s10li3: "Actualizaciones, mejoras o perfeccionamientos del Servicio.",
    s10p2: "Realizaremos esfuerzos razonables para restaurar el servicio con prontitud y comunicar cualquier interrupción significativa a los usuarios.",

    s11p1: "Puedes cerrar tu cuenta y dejar de usar Sythio en cualquier momento. También podemos suspender o cancelar tu acceso al Servicio si:",
    s11li1: "Violas estos Términos o cualquier ley aplicable.",
    s11li2: "Tu uso del Servicio representa un riesgo de seguridad o podría causar daño a otros usuarios.",
    s11li3: "Tu cuenta ha estado inactiva durante un período prolongado (te notificaremos antes de tomar cualquier acción).",
    s11li4: "La ley o un proceso legal nos obliga a hacerlo.",
    s11p2Before: "Tras la terminación, tu derecho a utilizar el Servicio cesa de inmediato. Conservaremos tus datos durante un período razonable para permitirte exportarlos, después de lo cual serán eliminados de acuerdo con nuestra",
    s11privacyPolicy: "Política de Privacidad",

    s12preamble: "Los siguientes descargos de responsabilidad se aplican en la máxima medida permitida por la ley aplicable:",
    s12p1: "El Servicio se proporciona \"tal cual\" y \"según disponibilidad\" sin garantías de ningún tipo, ya sean expresas o implícitas, incluyendo pero sin limitarse a las garantías implícitas de comerciabilidad, idoneidad para un propósito particular y no infracción.",
    s12p2: "Sythio no garantiza que el Servicio sea ininterrumpido, seguro o libre de errores, que los resultados generados por IA sean precisos o completos, o que los defectos sean corregidos.",

    s13preamble: "En la máxima medida permitida por la ley aplicable:",
    s13p1: "Sythio y sus directivos, directores, empleados y agentes no serán responsables de ningún daño indirecto, incidental, especial, consecuente o punitivo, incluyendo pero sin limitarse a la pérdida de beneficios, datos, uso, fondo de comercio u otras pérdidas intangibles, resultantes de:",
    s13li1: "Tu uso o incapacidad de usar el Servicio.",
    s13li2: "Cualquier error, inexactitud u omisión en los resultados generados por IA.",
    s13li3: "Acceso no autorizado o alteración de tus datos o transmisiones.",
    s13li4: "Cualquier conducta de terceros en el Servicio.",
    s13p2: "En ningún caso la responsabilidad total de Sythio excederá la cantidad que pagaste a Sythio en los doce (12) meses anteriores al evento que dio origen a la reclamación.",

    s14p1: "Estos Términos se regirán e interpretarán de acuerdo con las leyes de [Jurisdicción Aplicable], sin tener en cuenta sus disposiciones sobre conflictos de leyes.",
    s14p2: "Cualquier disputa que surja de o esté relacionada con estos Términos o el Servicio se resolverá exclusivamente en los tribunales ubicados en [Jurisdicción Aplicable]. Consientes a la jurisdicción personal de dichos tribunales.",
    s14noteLabel: "Nota:",
    s14noteText: "Los elementos entre corchetes como [Jurisdicción Aplicable] son marcadores de posición que se finalizarán tras la revisión legal.",

    s15p1: "Si tienes alguna pregunta sobre estos Términos de Servicio, contáctanos:",
    s15emailLabel: "Correo electrónico:",
    s15supportLabel: "Soporte:",
    s15websiteLabel: "Sitio web:",

    allRights: "Todos los derechos reservados.",
    backToTop: "Volver arriba",
  },

  /* ══════════════════════════════════════ FRENCH ══════════════════════════════════════ */
  fr: {
    legal: "Mentions Légales",
    title: "Conditions d'Utilisation",
    subtitle: "Ces conditions régissent votre utilisation de Sythio. En utilisant la plateforme, vous acceptez ces conditions.",
    lastUpdated: "Dernière mise à jour",
    effective: "En vigueur",
    toc: "Table des Matières",

    s01Title: "Acceptation des Conditions",
    s02Title: "Éligibilité",
    s03Title: "Comptes",
    s04Title: "Abonnements et Facturation",
    s05Title: "Utilisation Acceptable",
    s06Title: "Contenu de l'Utilisateur",
    s07Title: "Résultats Générés par l'IA",
    s08Title: "Propriété Intellectuelle",
    s09Title: "Conduite Interdite",
    s10Title: "Disponibilité du Service",
    s11Title: "Résiliation",
    s12Title: "Avertissements",
    s13Title: "Limitation de Responsabilité",
    s14Title: "Droit Applicable",
    s15Title: "Contact",

    s01p1: "En créant un compte, en accédant ou en utilisant Sythio (le « Service »), vous acceptez d'être lié par ces Conditions d'Utilisation (« Conditions »). Si vous n'acceptez pas ces Conditions, vous ne pouvez pas utiliser le Service.",
    s01p2: "Ces Conditions constituent un accord juridiquement contraignant entre vous et Sythio. Nous pouvons mettre à jour ces Conditions de temps à autre. Nous vous informerons des modifications importantes par e-mail ou par notification dans l'application. Votre utilisation continue du Service après de telles modifications constitue l'acceptation des Conditions mises à jour.",

    s02p1: "Pour utiliser Sythio, vous devez avoir au moins 16 ans et la capacité juridique de conclure un accord contraignant. En utilisant le Service, vous déclarez et garantissez que vous remplissez ces conditions.",
    s02p2: "Si vous utilisez Sythio au nom d'une organisation, vous déclarez que vous avez l'autorité pour engager cette organisation aux présentes Conditions.",

    s03p1: "Vous êtes responsable du maintien de la sécurité de vos identifiants de compte. Vous acceptez de :",
    s03li1: "Fournir des informations exactes et complètes lors de la création de votre compte.",
    s03li2: "Garder votre mot de passe sécurisé et ne pas partager vos identifiants de compte avec des tiers.",
    s03li3: "Nous informer immédiatement de tout accès non autorisé à votre compte.",
    s03li4: "Accepter la responsabilité de toute activité qui se produit sous votre compte.",
    s03p2: "Nous nous réservons le droit de suspendre ou de résilier les comptes qui violent ces Conditions ou que nous croyons raisonnablement avoir été compromis.",

    s04p1: "Sythio propose des abonnements gratuits et payants. En souscrivant à un abonnement payant, vous acceptez ce qui suit :",
    s04billingLabel: "Cycle de Facturation :",
    s04billingText: "Les abonnements sont facturés mensuellement ou annuellement, selon le plan que vous sélectionnez. Les frais sont traités au début de chaque cycle de facturation.",
    s04renewalLabel: "Renouvellement Automatique :",
    s04renewalText: "Les abonnements se renouvellent automatiquement à la fin de chaque période de facturation, sauf si vous annulez avant la date de renouvellement.",
    s04priceLabel: "Modifications de Prix :",
    s04priceText: "Nous pouvons ajuster les prix avec un préavis d'au moins 30 jours. Les prix mis à jour prennent effet au début de votre prochain cycle de facturation.",
    s04refundLabel: "Remboursements :",
    s04refundText: "Les demandes de remboursement sont évaluées au cas par cas. Vous pouvez demander un remboursement dans les 14 jours suivant l'achat initial de votre abonnement.",
    s04cancelLabel: "Annulation :",
    s04cancelText: "Vous pouvez annuler votre abonnement à tout moment. Vous conserverez l'accès aux fonctionnalités payantes jusqu'à la fin de votre période de facturation en cours.",

    s05p1: "Vous acceptez d'utiliser Sythio en conformité avec toutes les lois et réglementations applicables. Vous êtes seul responsable du contenu que vous enregistrez, téléchargez et traitez via le Service. Vous acceptez de :",
    s05li1: "Obtenir tous les consentements nécessaires avant d'enregistrer des conversations avec d'autres personnes.",
    s05li2: "Respecter toutes les lois applicables en matière d'enregistrement et d'écoutes téléphoniques dans votre juridiction.",
    s05li3: "Ne pas utiliser le Service à des fins illégales, nuisibles ou frauduleuses.",
    s05li4: "Ne pas tenter de procéder à l'ingénierie inverse, de décompiler ou d'extraire le code source de nos modèles d'IA ou algorithmes.",

    s06p1: "Vous conservez la propriété de tout le contenu que vous téléchargez ou créez via Sythio, y compris les enregistrements audio, les saisies de texte et tout matériel que vous fournissez (« Contenu de l'Utilisateur »).",
    s06p2: "En utilisant le Service, vous accordez à Sythio une licence limitée, non exclusive et mondiale pour traiter, stocker et transmettre votre Contenu de l'Utilisateur dans le seul but de fournir et d'améliorer le Service. Cette licence prend fin lorsque vous supprimez votre contenu ou fermez votre compte.",
    s06p3: "Vous déclarez que vous disposez de tous les droits nécessaires sur votre Contenu de l'Utilisateur et que son utilisation via Sythio ne porte pas atteinte aux droits de tiers.",

    s07disclaimerTitle: "Avertissement Important",
    s07disclaimerBody: "Sythio utilise l'intelligence artificielle pour générer des transcriptions, des résumés, des éléments d'action et d'autres résultats. Bien que nous nous efforcions d'être précis, les résultats générés par l'IA peuvent contenir des erreurs, des inexactitudes ou des omissions. Vous devez toujours vérifier et valider le contenu généré par l'IA avant de vous y fier pour des décisions importantes.",
    s07li1: "Les résultats générés par l'IA sont fournis « tels quels » et ne doivent pas être considérés comme des conseils professionnels, juridiques, médicaux ou financiers.",
    s07li2: "La précision de la transcription dépend de la qualité audio, de la clarté des locuteurs, du bruit de fond et de la complexité linguistique.",
    s07li3: "La détection et l'attribution des locuteurs sont probabilistes et peuvent ne pas toujours être précises.",
    s07li4: "Vous êtes responsable de la vérification de l'exactitude et de l'exhaustivité de tous les résultats générés par l'IA.",
    s07li5: "Sythio n'est pas responsable des décisions prises ou des actions entreprises sur la base des résultats générés par l'IA.",

    s08p1: "Sythio et ses marques commerciales, logos, designs, code, algorithmes, modèles d'IA et documentation associés sont la propriété exclusive de Sythio et sont protégés par les lois sur la propriété intellectuelle.",
    s08p2: "Rien dans ces Conditions ne vous accorde un quelconque droit, titre ou intérêt dans la propriété intellectuelle de Sythio, à l'exception de la licence limitée d'utilisation du Service telle que décrite dans les présentes.",
    s08p3: "Vous ne pouvez pas copier, modifier, distribuer, vendre ou louer toute partie de notre Service ou de sa technologie sous-jacente sans notre consentement écrit préalable.",

    s09p1: "En utilisant Sythio, vous acceptez de ne pas :",
    s09li1: "Utiliser le Service pour enregistrer ou traiter du contenu illégal, harcelant, diffamatoire, obscène ou autrement répréhensible.",
    s09li2: "Tenter d'obtenir un accès non autorisé aux comptes ou aux données d'autres utilisateurs.",
    s09li3: "Utiliser des outils automatisés (bots, scrapers, etc.) pour accéder au Service d'une manière qui dépasse une utilisation raisonnable.",
    s09li4: "Interférer avec ou perturber le Service, ses serveurs ou les réseaux connectés au Service.",
    s09li5: "Télécharger du contenu contenant des logiciels malveillants, des virus ou tout code nuisible.",
    s09li6: "Revendre, sous-licencier ou exploiter commercialement le Service sans autorisation.",
    s09li7: "Utiliser le Service pour développer des produits ou services concurrents.",
    s09li8: "Contourner les mesures techniques que nous utilisons pour protéger le Service.",

    s10p1: "Nous nous efforçons de maintenir une haute disponibilité du Service Sythio. Cependant, nous ne garantissons pas un fonctionnement ininterrompu ou sans erreur. Le Service peut être temporairement indisponible en raison de :",
    s10li1: "Maintenance programmée (nous fournirons un préavis lorsque possible).",
    s10li2: "Pannes imprévues causées par des problèmes techniques ou des événements de force majeure.",
    s10li3: "Mises à jour, améliorations ou perfectionnements du Service.",
    s10p2: "Nous déploierons des efforts raisonnables pour rétablir le service rapidement et communiquer toute perturbation significative aux utilisateurs.",

    s11p1: "Vous pouvez fermer votre compte et cesser d'utiliser Sythio à tout moment. Nous pouvons également suspendre ou résilier votre accès au Service si :",
    s11li1: "Vous violez ces Conditions ou toute loi applicable.",
    s11li2: "Votre utilisation du Service présente un risque de sécurité ou pourrait nuire à d'autres utilisateurs.",
    s11li3: "Votre compte est resté inactif pendant une période prolongée (nous vous en informerons avant de prendre toute mesure).",
    s11li4: "La loi ou une procédure judiciaire nous y oblige.",
    s11p2Before: "À la résiliation, votre droit d'utiliser le Service cesse immédiatement. Nous conserverons vos données pendant une période raisonnable pour vous permettre de les exporter, après quoi elles seront supprimées conformément à notre",
    s11privacyPolicy: "Politique de Confidentialité",

    s12preamble: "Les avertissements suivants s'appliquent dans toute la mesure permise par la loi applicable :",
    s12p1: "Le Service est fourni « tel quel » et « selon disponibilité » sans garantie d'aucune sorte, expresse ou implicite, y compris mais sans s'y limiter les garanties implicites de qualité marchande, d'adéquation à un usage particulier et de non-contrefaçon.",
    s12p2: "Sythio ne garantit pas que le Service sera ininterrompu, sécurisé ou sans erreur, que les résultats générés par l'IA seront exacts ou complets, ou que les défauts seront corrigés.",

    s13preamble: "Dans la mesure maximale permise par la loi applicable :",
    s13p1: "Sythio et ses dirigeants, directeurs, employés et agents ne sauraient être tenus responsables de tout dommage indirect, accessoire, spécial, consécutif ou punitif, y compris mais sans s'y limiter la perte de bénéfices, de données, d'utilisation, de clientèle ou d'autres pertes immatérielles, résultant de :",
    s13li1: "Votre utilisation ou votre incapacité à utiliser le Service.",
    s13li2: "Toute erreur, inexactitude ou omission dans les résultats générés par l'IA.",
    s13li3: "L'accès non autorisé ou l'altération de vos données ou transmissions.",
    s13li4: "Tout comportement de tiers sur le Service.",
    s13p2: "En aucun cas la responsabilité totale de Sythio ne pourra excéder le montant que vous avez payé à Sythio au cours des douze (12) mois précédant l'événement à l'origine de la réclamation.",

    s14p1: "Ces Conditions seront régies et interprétées conformément aux lois de [Juridiction Applicable], sans égard à ses dispositions en matière de conflit de lois.",
    s14p2: "Tout litige découlant de ou lié à ces Conditions ou au Service sera résolu exclusivement devant les tribunaux situés dans [Juridiction Applicable]. Vous consentez à la compétence personnelle de ces tribunaux.",
    s14noteLabel: "Note :",
    s14noteText: "Les éléments entre crochets tels que [Juridiction Applicable] sont des espaces réservés qui seront finalisés après examen juridique.",

    s15p1: "Si vous avez des questions concernant ces Conditions d'Utilisation, veuillez nous contacter :",
    s15emailLabel: "E-mail :",
    s15supportLabel: "Support :",
    s15websiteLabel: "Site web :",

    allRights: "Tous droits réservés.",
    backToTop: "Retour en haut",
  },

  /* ══════════════════════════════════════ PORTUGUESE ══════════════════════════════════════ */
  pt: {
    legal: "Legal",
    title: "Termos de Serviço",
    subtitle: "Estes termos regem o uso do Sythio. Ao usar a plataforma, você concorda com estes termos.",
    lastUpdated: "Última atualização",
    effective: "Vigente desde",
    toc: "Índice",

    s01Title: "Aceitação dos Termos",
    s02Title: "Elegibilidade",
    s03Title: "Contas",
    s04Title: "Assinaturas e Cobrança",
    s05Title: "Uso Aceitável",
    s06Title: "Conteúdo do Usuário",
    s07Title: "Resultados Gerados por IA",
    s08Title: "Propriedade Intelectual",
    s09Title: "Conduta Proibida",
    s10Title: "Disponibilidade do Serviço",
    s11Title: "Rescisão",
    s12Title: "Isenções de Responsabilidade",
    s13Title: "Limitação de Responsabilidade",
    s14Title: "Lei Aplicável",
    s15Title: "Contato",

    s01p1: "Ao criar uma conta, acessar ou utilizar o Sythio (o \"Serviço\"), você concorda em ficar vinculado a estes Termos de Serviço (\"Termos\"). Se você não concordar com estes Termos, não poderá utilizar o Serviço.",
    s01p2: "Estes Termos constituem um acordo juridicamente vinculante entre você e o Sythio. Podemos atualizar estes Termos periodicamente. Notificaremos você sobre alterações significativas por e-mail ou por notificação no aplicativo. O uso continuado do Serviço após tais alterações constitui aceitação dos Termos atualizados.",

    s02p1: "Para utilizar o Sythio, você deve ter pelo menos 16 anos e capacidade legal para celebrar um acordo vinculante. Ao utilizar o Serviço, você declara e garante que atende a esses requisitos.",
    s02p2: "Se você estiver utilizando o Sythio em nome de uma organização, declara que tem autoridade para vincular essa organização a estes Termos.",

    s03p1: "Você é responsável por manter a segurança das credenciais da sua conta. Você concorda em:",
    s03li1: "Fornecer informações precisas e completas ao criar sua conta.",
    s03li2: "Manter sua senha segura e não compartilhar as credenciais da sua conta com terceiros.",
    s03li3: "Nos notificar imediatamente sobre qualquer acesso não autorizado à sua conta.",
    s03li4: "Aceitar a responsabilidade por toda a atividade que ocorrer em sua conta.",
    s03p2: "Reservamo-nos o direito de suspender ou encerrar contas que violem estes Termos ou que acreditemos razoavelmente terem sido comprometidas.",

    s04p1: "O Sythio oferece planos de assinatura gratuitos e pagos. Ao assinar um plano pago, você concorda com o seguinte:",
    s04billingLabel: "Ciclo de Cobrança:",
    s04billingText: "As assinaturas são cobradas mensal ou anualmente, dependendo do plano que você selecionar. Os valores são processados no início de cada ciclo de cobrança.",
    s04renewalLabel: "Renovação Automática:",
    s04renewalText: "As assinaturas são renovadas automaticamente ao final de cada período de cobrança, a menos que você cancele antes da data de renovação.",
    s04priceLabel: "Alterações de Preço:",
    s04priceText: "Podemos ajustar os preços com pelo menos 30 dias de antecedência. Os preços atualizados entram em vigor no início do seu próximo ciclo de cobrança.",
    s04refundLabel: "Reembolsos:",
    s04refundText: "As solicitações de reembolso são avaliadas caso a caso. Você pode solicitar um reembolso dentro de 14 dias após a compra inicial da sua assinatura.",
    s04cancelLabel: "Cancelamento:",
    s04cancelText: "Você pode cancelar sua assinatura a qualquer momento. Você manterá o acesso aos recursos pagos até o final do seu período de cobrança atual.",

    s05p1: "Você concorda em utilizar o Sythio em conformidade com todas as leis e regulamentos aplicáveis. Você é o único responsável pelo conteúdo que grava, envia e processa através do Serviço. Você concorda em:",
    s05li1: "Obter todos os consentimentos necessários antes de gravar conversas com outras pessoas.",
    s05li2: "Cumprir todas as leis aplicáveis sobre gravação e interceptação de comunicações em sua jurisdição.",
    s05li3: "Não utilizar o Serviço para qualquer finalidade ilegal, prejudicial ou fraudulenta.",
    s05li4: "Não tentar fazer engenharia reversa, descompilar ou extrair o código-fonte dos nossos modelos de IA ou algoritmos.",

    s06p1: "Você mantém a propriedade de todo o conteúdo que envia ou cria através do Sythio, incluindo gravações de áudio, entradas de texto e quaisquer materiais que você forneça (\"Conteúdo do Usuário\").",
    s06p2: "Ao utilizar o Serviço, você concede ao Sythio uma licença limitada, não exclusiva e mundial para processar, armazenar e transmitir seu Conteúdo do Usuário exclusivamente com o propósito de fornecer e melhorar o Serviço. Esta licença termina quando você exclui seu conteúdo ou encerra sua conta.",
    s06p3: "Você declara que possui todos os direitos necessários sobre seu Conteúdo do Usuário e que seu uso através do Sythio não infringe os direitos de terceiros.",

    s07disclaimerTitle: "Aviso Importante",
    s07disclaimerBody: "O Sythio utiliza inteligência artificial para gerar transcrições, resumos, itens de ação e outros resultados. Embora nos esforcemos para alcançar precisão, os resultados gerados por IA podem conter erros, imprecisões ou omissões. Você deve sempre revisar e verificar o conteúdo gerado por IA antes de confiar nele para decisões importantes.",
    s07li1: "Os resultados gerados por IA são fornecidos \"como estão\" e não devem ser considerados como aconselhamento profissional, jurídico, médico ou financeiro.",
    s07li2: "A precisão da transcrição depende da qualidade do áudio, da clareza do falante, do ruído de fundo e da complexidade do idioma.",
    s07li3: "A detecção e atribuição de falantes são probabilísticas e podem nem sempre ser precisas.",
    s07li4: "Você é responsável por verificar a precisão e a integridade de todos os resultados gerados por IA.",
    s07li5: "O Sythio não é responsável por quaisquer decisões tomadas ou ações realizadas com base nos resultados gerados por IA.",

    s08p1: "O Sythio e suas marcas comerciais, logotipos, designs, código, algoritmos, modelos de IA e documentação associados são propriedade exclusiva do Sythio e estão protegidos pelas leis de propriedade intelectual.",
    s08p2: "Nada nestes Termos lhe concede qualquer direito, título ou interesse na propriedade intelectual do Sythio, exceto pela licença limitada para usar o Serviço conforme descrito neste documento.",
    s08p3: "Você não pode copiar, modificar, distribuir, vender ou alugar qualquer parte do nosso Serviço ou de sua tecnologia subjacente sem nosso consentimento prévio por escrito.",

    s09p1: "Ao utilizar o Sythio, você concorda em não:",
    s09li1: "Utilizar o Serviço para gravar ou processar conteúdo ilegal, assediante, difamatório, obsceno ou de outra forma questionável.",
    s09li2: "Tentar obter acesso não autorizado às contas ou dados de outros usuários.",
    s09li3: "Utilizar ferramentas automatizadas (bots, scrapers, etc.) para acessar o Serviço de maneira que exceda o uso razoável.",
    s09li4: "Interferir ou interromper o Serviço, seus servidores ou redes conectadas ao Serviço.",
    s09li5: "Enviar conteúdo que contenha malware, vírus ou qualquer código prejudicial.",
    s09li6: "Revender, sublicenciar ou explorar comercialmente o Serviço sem autorização.",
    s09li7: "Utilizar o Serviço para desenvolver produtos ou serviços concorrentes.",
    s09li8: "Contornar quaisquer medidas técnicas que utilizamos para proteger o Serviço.",

    s10p1: "Nos esforçamos para manter uma alta disponibilidade do Serviço Sythio. No entanto, não garantimos operação ininterrupta ou livre de erros. O Serviço pode ficar temporariamente indisponível devido a:",
    s10li1: "Manutenção programada (forneceremos aviso prévio quando possível).",
    s10li2: "Interrupções não programadas causadas por problemas técnicos ou eventos de força maior.",
    s10li3: "Atualizações, melhorias ou aperfeiçoamentos do Serviço.",
    s10p2: "Faremos esforços razoáveis para restaurar o serviço prontamente e comunicar quaisquer interrupções significativas aos usuários.",

    s11p1: "Você pode encerrar sua conta e parar de usar o Sythio a qualquer momento. Também podemos suspender ou encerrar seu acesso ao Serviço se:",
    s11li1: "Você violar estes Termos ou qualquer lei aplicável.",
    s11li2: "Seu uso do Serviço representar um risco de segurança ou puder causar danos a outros usuários.",
    s11li3: "Sua conta estiver inativa por um período prolongado (notificaremos você antes de tomar qualquer ação).",
    s11li4: "Formos obrigados a fazê-lo por lei ou processo legal.",
    s11p2Before: "Após a rescisão, seu direito de usar o Serviço cessa imediatamente. Reteremos seus dados por um período razoável para permitir que você os exporte, após o qual serão excluídos de acordo com nossa",
    s11privacyPolicy: "Política de Privacidade",

    s12preamble: "As seguintes isenções de responsabilidade se aplicam na máxima extensão permitida pela lei aplicável:",
    s12p1: "O Serviço é fornecido \"como está\" e \"conforme disponível\" sem garantias de qualquer tipo, expressas ou implícitas, incluindo, mas não se limitando a, garantias implícitas de comercialização, adequação a um propósito específico e não violação.",
    s12p2: "O Sythio não garante que o Serviço será ininterrupto, seguro ou livre de erros, que os resultados gerados por IA serão precisos ou completos, ou que os defeitos serão corrigidos.",

    s13preamble: "Na máxima extensão permitida pela lei aplicável:",
    s13p1: "O Sythio e seus diretores, administradores, funcionários e agentes não serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, mas não se limitando a, perda de lucros, dados, uso, fundo de comércio ou outras perdas intangíveis, resultantes de:",
    s13li1: "Seu uso ou incapacidade de usar o Serviço.",
    s13li2: "Quaisquer erros, imprecisões ou omissões nos resultados gerados por IA.",
    s13li3: "Acesso não autorizado ou alteração de seus dados ou transmissões.",
    s13li4: "Qualquer conduta de terceiros no Serviço.",
    s13p2: "Em nenhuma hipótese a responsabilidade total do Sythio excederá o valor que você pagou ao Sythio nos doze (12) meses anteriores ao evento que deu origem à reclamação.",

    s14p1: "Estes Termos serão regidos e interpretados de acordo com as leis de [Jurisdição Aplicável], sem considerar suas disposições sobre conflitos de leis.",
    s14p2: "Quaisquer disputas decorrentes de ou relacionadas a estes Termos ou ao Serviço serão resolvidas exclusivamente nos tribunais localizados em [Jurisdição Aplicável]. Você consente à jurisdição pessoal de tais tribunais.",
    s14noteLabel: "Nota:",
    s14noteText: "Os itens entre colchetes, como [Jurisdição Aplicável], são marcadores de posição que serão finalizados após revisão jurídica.",

    s15p1: "Se você tiver alguma dúvida sobre estes Termos de Serviço, entre em contato conosco:",
    s15emailLabel: "E-mail:",
    s15supportLabel: "Suporte:",
    s15websiteLabel: "Site:",

    allRights: "Todos os direitos reservados.",
    backToTop: "Voltar ao topo",
  },

  /* ══════════════════════════════════════ ITALIAN ══════════════════════════════════════ */
  it: {
    legal: "Legale",
    title: "Termini di Servizio",
    subtitle: "Questi termini regolano l'uso di Sythio. Utilizzando la piattaforma, accetti questi termini.",
    lastUpdated: "Ultimo aggiornamento",
    effective: "In vigore dal",
    toc: "Indice",

    s01Title: "Accettazione dei Termini",
    s02Title: "Idoneità",
    s03Title: "Account",
    s04Title: "Abbonamenti e Fatturazione",
    s05Title: "Uso Accettabile",
    s06Title: "Contenuti dell'Utente",
    s07Title: "Risultati Generati dall'IA",
    s08Title: "Proprietà Intellettuale",
    s09Title: "Condotta Vietata",
    s10Title: "Disponibilità del Servizio",
    s11Title: "Risoluzione",
    s12Title: "Esclusioni di Responsabilità",
    s13Title: "Limitazione di Responsabilità",
    s14Title: "Legge Applicabile",
    s15Title: "Contatti",

    s01p1: "Creando un account, accedendo o utilizzando Sythio (il \"Servizio\"), accetti di essere vincolato da questi Termini di Servizio (\"Termini\"). Se non accetti questi Termini, non puoi utilizzare il Servizio.",
    s01p2: "Questi Termini costituiscono un accordo legalmente vincolante tra te e Sythio. Potremmo aggiornare questi Termini di volta in volta. Ti informeremo di modifiche sostanziali tramite e-mail o notifica nell'applicazione. L'uso continuato del Servizio dopo tali modifiche costituisce l'accettazione dei Termini aggiornati.",

    s02p1: "Per utilizzare Sythio, devi avere almeno 16 anni e la capacità giuridica per stipulare un accordo vincolante. Utilizzando il Servizio, dichiari e garantisci di soddisfare questi requisiti.",
    s02p2: "Se utilizzi Sythio per conto di un'organizzazione, dichiari di avere l'autorità per vincolare tale organizzazione a questi Termini.",

    s03p1: "Sei responsabile del mantenimento della sicurezza delle credenziali del tuo account. Accetti di:",
    s03li1: "Fornire informazioni accurate e complete durante la creazione del tuo account.",
    s03li2: "Mantenere la tua password sicura e non condividere le credenziali del tuo account con terzi.",
    s03li3: "Informarci immediatamente di qualsiasi accesso non autorizzato al tuo account.",
    s03li4: "Accettare la responsabilità per tutta l'attività che si verifica sotto il tuo account.",
    s03p2: "Ci riserviamo il diritto di sospendere o terminare gli account che violano questi Termini o che ragionevolmente riteniamo siano stati compromessi.",

    s04p1: "Sythio offre piani di abbonamento gratuiti e a pagamento. Sottoscrivendo un piano a pagamento, accetti quanto segue:",
    s04billingLabel: "Ciclo di Fatturazione:",
    s04billingText: "Gli abbonamenti vengono fatturati mensilmente o annualmente, a seconda del piano selezionato. Gli addebiti vengono elaborati all'inizio di ogni ciclo di fatturazione.",
    s04renewalLabel: "Rinnovo Automatico:",
    s04renewalText: "Gli abbonamenti si rinnovano automaticamente alla fine di ogni periodo di fatturazione, a meno che non annulli prima della data di rinnovo.",
    s04priceLabel: "Variazioni di Prezzo:",
    s04priceText: "Potremmo modificare i prezzi con un preavviso di almeno 30 giorni. I prezzi aggiornati entrano in vigore all'inizio del prossimo ciclo di fatturazione.",
    s04refundLabel: "Rimborsi:",
    s04refundText: "Le richieste di rimborso vengono valutate caso per caso. Puoi richiedere un rimborso entro 14 giorni dall'acquisto iniziale dell'abbonamento.",
    s04cancelLabel: "Cancellazione:",
    s04cancelText: "Puoi annullare il tuo abbonamento in qualsiasi momento. Manterrai l'accesso alle funzionalità a pagamento fino alla fine del periodo di fatturazione corrente.",

    s05p1: "Accetti di utilizzare Sythio in conformità con tutte le leggi e i regolamenti applicabili. Sei l'unico responsabile dei contenuti che registri, carichi ed elabori tramite il Servizio. Accetti di:",
    s05li1: "Ottenere tutti i consensi necessari prima di registrare conversazioni con altre persone.",
    s05li2: "Rispettare tutte le leggi applicabili in materia di registrazione e intercettazione delle comunicazioni nella tua giurisdizione.",
    s05li3: "Non utilizzare il Servizio per scopi illegali, dannosi o fraudolenti.",
    s05li4: "Non tentare di effettuare ingegneria inversa, decompilare o estrarre il codice sorgente dei nostri modelli di IA o algoritmi.",

    s06p1: "Mantieni la proprietà di tutti i contenuti che carichi o crei tramite Sythio, incluse le registrazioni audio, gli input di testo e qualsiasi materiale che fornisci (\"Contenuti dell'Utente\").",
    s06p2: "Utilizzando il Servizio, concedi a Sythio una licenza limitata, non esclusiva e mondiale per elaborare, archiviare e trasmettere i tuoi Contenuti dell'Utente al solo scopo di fornire e migliorare il Servizio. Questa licenza termina quando elimini i tuoi contenuti o chiudi il tuo account.",
    s06p3: "Dichiari di possedere tutti i diritti necessari sui tuoi Contenuti dell'Utente e che il loro utilizzo tramite Sythio non viola i diritti di terzi.",

    s07disclaimerTitle: "Avviso Importante",
    s07disclaimerBody: "Sythio utilizza l'intelligenza artificiale per generare trascrizioni, riassunti, elementi d'azione e altri risultati. Sebbene ci impegniamo per la precisione, i risultati generati dall'IA possono contenere errori, imprecisioni o omissioni. Dovresti sempre rivedere e verificare i contenuti generati dall'IA prima di fare affidamento su di essi per decisioni importanti.",
    s07li1: "I risultati generati dall'IA sono forniti \"così come sono\" e non devono essere considerati come consulenza professionale, legale, medica o finanziaria.",
    s07li2: "La precisione della trascrizione dipende dalla qualità dell'audio, dalla chiarezza del parlante, dal rumore di fondo e dalla complessità linguistica.",
    s07li3: "Il rilevamento e l'attribuzione dei parlanti sono probabilistici e potrebbero non essere sempre accurati.",
    s07li4: "Sei responsabile della verifica dell'accuratezza e della completezza di tutti i risultati generati dall'IA.",
    s07li5: "Sythio non è responsabile per le decisioni prese o le azioni intraprese sulla base dei risultati generati dall'IA.",

    s08p1: "Sythio e i suoi marchi commerciali, loghi, design, codice, algoritmi, modelli di IA e documentazione associati sono proprietà esclusiva di Sythio e sono protetti dalle leggi sulla proprietà intellettuale.",
    s08p2: "Nulla in questi Termini ti concede alcun diritto, titolo o interesse nella proprietà intellettuale di Sythio, ad eccezione della licenza limitata per utilizzare il Servizio come descritto nel presente documento.",
    s08p3: "Non puoi copiare, modificare, distribuire, vendere o affittare qualsiasi parte del nostro Servizio o della sua tecnologia sottostante senza il nostro previo consenso scritto.",

    s09p1: "Utilizzando Sythio, accetti di non:",
    s09li1: "Utilizzare il Servizio per registrare o elaborare contenuti illegali, molesti, diffamatori, osceni o altrimenti discutibili.",
    s09li2: "Tentare di ottenere l'accesso non autorizzato agli account o ai dati di altri utenti.",
    s09li3: "Utilizzare strumenti automatizzati (bot, scraper, ecc.) per accedere al Servizio in modo che superi un uso ragionevole.",
    s09li4: "Interferire con o interrompere il Servizio, i suoi server o le reti connesse al Servizio.",
    s09li5: "Caricare contenuti che contengono malware, virus o qualsiasi codice dannoso.",
    s09li6: "Rivendere, sublicenziare o sfruttare commercialmente il Servizio senza autorizzazione.",
    s09li7: "Utilizzare il Servizio per sviluppare prodotti o servizi concorrenti.",
    s09li8: "Aggirare qualsiasi misura tecnica che utilizziamo per proteggere il Servizio.",

    s10p1: "Ci impegniamo a mantenere un'elevata disponibilità del Servizio Sythio. Tuttavia, non garantiamo un funzionamento ininterrotto o privo di errori. Il Servizio potrebbe essere temporaneamente non disponibile a causa di:",
    s10li1: "Manutenzione programmata (forniremo un preavviso quando possibile).",
    s10li2: "Interruzioni non programmate causate da problemi tecnici o eventi di forza maggiore.",
    s10li3: "Aggiornamenti, miglioramenti o perfezionamenti del Servizio.",
    s10p2: "Compiremo sforzi ragionevoli per ripristinare il servizio tempestivamente e comunicare eventuali interruzioni significative agli utenti.",

    s11p1: "Puoi chiudere il tuo account e smettere di utilizzare Sythio in qualsiasi momento. Potremmo anche sospendere o terminare il tuo accesso al Servizio se:",
    s11li1: "Violi questi Termini o qualsiasi legge applicabile.",
    s11li2: "Il tuo utilizzo del Servizio rappresenta un rischio per la sicurezza o potrebbe causare danni ad altri utenti.",
    s11li3: "Il tuo account è stato inattivo per un periodo prolungato (ti informeremo prima di intraprendere qualsiasi azione).",
    s11li4: "La legge o un procedimento giudiziario ce lo impone.",
    s11p2Before: "Alla risoluzione, il tuo diritto di utilizzare il Servizio cessa immediatamente. Conserveremo i tuoi dati per un periodo ragionevole per consentirti di esportarli, dopodiché saranno eliminati in conformità con la nostra",
    s11privacyPolicy: "Informativa sulla Privacy",

    s12preamble: "Le seguenti esclusioni di responsabilità si applicano nella massima misura consentita dalla legge applicabile:",
    s12p1: "Il Servizio è fornito \"così com'è\" e \"come disponibile\" senza garanzie di alcun tipo, espresse o implicite, incluse ma non limitate alle garanzie implicite di commerciabilità, idoneità per uno scopo particolare e non violazione.",
    s12p2: "Sythio non garantisce che il Servizio sarà ininterrotto, sicuro o privo di errori, che i risultati generati dall'IA saranno accurati o completi, o che i difetti saranno corretti.",

    s13preamble: "Nella massima misura consentita dalla legge applicabile:",
    s13p1: "Sythio e i suoi funzionari, direttori, dipendenti e agenti non saranno responsabili per danni indiretti, incidentali, speciali, consequenziali o punitivi, inclusi ma non limitati alla perdita di profitti, dati, utilizzo, avviamento o altre perdite immateriali, derivanti da:",
    s13li1: "Il tuo utilizzo o l'impossibilità di utilizzare il Servizio.",
    s13li2: "Qualsiasi errore, imprecisione o omissione nei risultati generati dall'IA.",
    s13li3: "Accesso non autorizzato o alterazione dei tuoi dati o trasmissioni.",
    s13li4: "Qualsiasi condotta di terze parti sul Servizio.",
    s13p2: "In nessun caso la responsabilità totale di Sythio potrà superare l'importo che hai pagato a Sythio nei dodici (12) mesi precedenti l'evento che ha dato origine alla richiesta.",

    s14p1: "Questi Termini saranno regolati e interpretati in conformità con le leggi di [Giurisdizione Applicabile], senza riguardo alle sue disposizioni in materia di conflitto di leggi.",
    s14p2: "Qualsiasi controversia derivante da o relativa a questi Termini o al Servizio sarà risolta esclusivamente nei tribunali situati in [Giurisdizione Applicabile]. Acconsenti alla giurisdizione personale di tali tribunali.",
    s14noteLabel: "Nota:",
    s14noteText: "Gli elementi tra parentesi quadre come [Giurisdizione Applicabile] sono segnaposto che saranno finalizzati dopo la revisione legale.",

    s15p1: "Se hai domande su questi Termini di Servizio, contattaci:",
    s15emailLabel: "E-mail:",
    s15supportLabel: "Supporto:",
    s15websiteLabel: "Sito web:",

    allRights: "Tutti i diritti riservati.",
    backToTop: "Torna in alto",
  },
};

/* ─── Terms of Service Page ─── */
export default function TermsPage() {
  const { locale } = useLanguage();
  const t = content[locale] || content.en;
  const lastUpdated = "March 23, 2026";

  const sections = [
    { id: "acceptance", number: "01", title: t.s01Title },
    { id: "eligibility", number: "02", title: t.s02Title },
    { id: "accounts", number: "03", title: t.s03Title },
    { id: "subscriptions", number: "04", title: t.s04Title },
    { id: "acceptable-use", number: "05", title: t.s05Title },
    { id: "user-content", number: "06", title: t.s06Title },
    { id: "ai-outputs", number: "07", title: t.s07Title },
    { id: "intellectual-property", number: "08", title: t.s08Title },
    { id: "prohibited-conduct", number: "09", title: t.s09Title },
    { id: "availability", number: "10", title: t.s10Title },
    { id: "termination", number: "11", title: t.s11Title },
    { id: "disclaimers", number: "12", title: t.s12Title },
    { id: "liability", number: "13", title: t.s13Title },
    { id: "governing-law", number: "14", title: t.s14Title },
    { id: "contact", number: "15", title: t.s15Title },
  ];

  return (
    <PageReveal>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-neutral-50/60 via-neutral-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
            {t.legal}
          </span>
          <TextReveal
            tag="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            {t.title}
          </TextReveal>
          <TextReveal
            tag="p"
            className="mt-6 text-lg text-muted leading-relaxed"
          >
            {t.subtitle}
          </TextReveal>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-light">
            <span>{t.lastUpdated}: {lastUpdated}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{t.effective}: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="pb-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl border border-border-light bg-background/50 p-6 md:p-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-4">
              {t.toc}
            </h2>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sections.map((s) => (
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
          {/* 01 */}
          <Section id="acceptance" number="01" title={t.s01Title}>
            <p>{t.s01p1}</p>
            <p>{t.s01p2}</p>
          </Section>

          {/* 02 */}
          <Section id="eligibility" number="02" title={t.s02Title}>
            <p>{t.s02p1}</p>
            <p>{t.s02p2}</p>
          </Section>

          {/* 03 */}
          <Section id="accounts" number="03" title={t.s03Title}>
            <p>{t.s03p1}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t.s03li1}</li>
              <li>{t.s03li2}</li>
              <li>{t.s03li3}</li>
              <li>{t.s03li4}</li>
            </ul>
            <p>{t.s03p2}</p>
          </Section>

          {/* 04 */}
          <Section id="subscriptions" number="04" title={t.s04Title}>
            <p>{t.s04p1}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground font-medium">{t.s04billingLabel}</strong>{" "}
                {t.s04billingText}
              </li>
              <li>
                <strong className="text-foreground font-medium">{t.s04renewalLabel}</strong>{" "}
                {t.s04renewalText}
              </li>
              <li>
                <strong className="text-foreground font-medium">{t.s04priceLabel}</strong>{" "}
                {t.s04priceText}
              </li>
              <li>
                <strong className="text-foreground font-medium">{t.s04refundLabel}</strong>{" "}
                {t.s04refundText}
              </li>
              <li>
                <strong className="text-foreground font-medium">{t.s04cancelLabel}</strong>{" "}
                {t.s04cancelText}
              </li>
            </ul>
          </Section>

          {/* 05 */}
          <Section id="acceptable-use" number="05" title={t.s05Title}>
            <p>{t.s05p1}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t.s05li1}</li>
              <li>{t.s05li2}</li>
              <li>{t.s05li3}</li>
              <li>{t.s05li4}</li>
            </ul>
          </Section>

          {/* 06 */}
          <Section id="user-content" number="06" title={t.s06Title}>
            <p>{t.s06p1}</p>
            <p>{t.s06p2}</p>
            <p>{t.s06p3}</p>
          </Section>

          {/* 07 */}
          <Section id="ai-outputs" number="07" title={t.s07Title}>
            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
              <p className="text-foreground font-medium text-sm mb-2">
                {t.s07disclaimerTitle}
              </p>
              <p className="text-sm leading-relaxed">
                {t.s07disclaimerBody}
              </p>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t.s07li1}</li>
              <li>{t.s07li2}</li>
              <li>{t.s07li3}</li>
              <li>{t.s07li4}</li>
              <li>{t.s07li5}</li>
            </ul>
          </Section>

          {/* 08 */}
          <Section id="intellectual-property" number="08" title={t.s08Title}>
            <p>{t.s08p1}</p>
            <p>{t.s08p2}</p>
            <p>{t.s08p3}</p>
          </Section>

          {/* 09 */}
          <Section id="prohibited-conduct" number="09" title={t.s09Title}>
            <p>{t.s09p1}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t.s09li1}</li>
              <li>{t.s09li2}</li>
              <li>{t.s09li3}</li>
              <li>{t.s09li4}</li>
              <li>{t.s09li5}</li>
              <li>{t.s09li6}</li>
              <li>{t.s09li7}</li>
              <li>{t.s09li8}</li>
            </ul>
          </Section>

          {/* 10 */}
          <Section id="availability" number="10" title={t.s10Title}>
            <p>{t.s10p1}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t.s10li1}</li>
              <li>{t.s10li2}</li>
              <li>{t.s10li3}</li>
            </ul>
            <p>{t.s10p2}</p>
          </Section>

          {/* 11 */}
          <Section id="termination" number="11" title={t.s11Title}>
            <p>{t.s11p1}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t.s11li1}</li>
              <li>{t.s11li2}</li>
              <li>{t.s11li3}</li>
              <li>{t.s11li4}</li>
            </ul>
            <p>
              {t.s11p2Before}{" "}
              <Link
                href="/privacy-policy"
                className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors"
              >
                {t.s11privacyPolicy}
              </Link>
              .
            </p>
          </Section>

          {/* 12 */}
          <Section id="disclaimers" number="12" title={t.s12Title}>
            <p className="uppercase text-xs tracking-wider font-medium text-foreground">
              {t.s12preamble}
            </p>
            <p>{t.s12p1}</p>
            <p>{t.s12p2}</p>
          </Section>

          {/* 13 */}
          <Section id="liability" number="13" title={t.s13Title}>
            <p className="uppercase text-xs tracking-wider font-medium text-foreground">
              {t.s13preamble}
            </p>
            <p>{t.s13p1}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t.s13li1}</li>
              <li>{t.s13li2}</li>
              <li>{t.s13li3}</li>
              <li>{t.s13li4}</li>
            </ul>
            <p>{t.s13p2}</p>
          </Section>

          {/* 14 */}
          <Section id="governing-law" number="14" title={t.s14Title}>
            <p>{t.s14p1}</p>
            <p>{t.s14p2}</p>
            <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5">
              <p className="text-sm text-blue-900/70 leading-relaxed">
                <strong className="font-medium text-blue-900/90">{t.s14noteLabel}</strong>{" "}
                {t.s14noteText}
              </p>
            </div>
          </Section>

          {/* 15 */}
          <Section id="contact" number="15" title={t.s15Title}>
            <p>{t.s15p1}</p>
            <div className="rounded-xl border border-border-light bg-background/50 p-6 space-y-2 not-prose">
              <p className="text-sm">
                <strong className="text-foreground font-medium">{t.s15emailLabel}</strong>{" "}
                <a
                  href="mailto:legal@sythio.com"
                  className="text-muted hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  legal@sythio.com
                </a>
              </p>
              <p className="text-sm">
                <strong className="text-foreground font-medium">{t.s15supportLabel}</strong>{" "}
                <a
                  href="mailto:support@sythio.com"
                  className="text-muted hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  support@sythio.com
                </a>
              </p>
              <p className="text-sm">
                <strong className="text-foreground font-medium">{t.s15websiteLabel}</strong>{" "}
                <Link
                  href="/contact"
                  className="text-muted hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  sythio.com/contact
                </Link>
              </p>
            </div>
          </Section>

          {/* Divider & back to top */}
          <div className="pt-8 border-t border-border-light flex items-center justify-between">
            <p className="text-sm text-muted-light">
              &copy; {new Date().getFullYear()} Sythio. {t.allRights}
            </p>
            <button
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {t.backToTop}
            </button>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
