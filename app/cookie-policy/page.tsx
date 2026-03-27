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

/* ─── Cookie Table Row ─── */
function CookieRow({
  name,
  purpose,
  duration,
}: {
  name: string;
  purpose: string;
  duration: string;
}) {
  return (
    <tr className="border-b border-border-light last:border-0">
      <td className="py-3 pr-4 text-sm font-mono text-foreground whitespace-nowrap">
        {name}
      </td>
      <td className="py-3 pr-4 text-sm text-muted">{purpose}</td>
      <td className="py-3 text-sm text-muted-light whitespace-nowrap">
        {duration}
      </td>
    </tr>
  );
}

/* ─── Full i18n content ─── */
const content: Record<
  Locale,
  {
    legal: string;
    title: string;
    subtitle: string;
    lastUpdated: string;
    lastUpdatedDate: string;
    effective: string;
    toc: string;
    backToTop: string;
    allRights: string;
    /* Table headers */
    thCategory: string;
    thPurpose: string;
    thRequired: string;
    thCookie: string;
    thDuration: string;
    /* Section titles */
    s1Title: string;
    s2Title: string;
    s3Title: string;
    s4Title: string;
    s5Title: string;
    s6Title: string;
    s7Title: string;
    s8Title: string;
    /* Section 1 - What Are Cookies */
    s1p1: string;
    s1p2: string;
    /* Section 2 - Types of Cookies */
    s2p1: string;
    s2catEssential: string;
    s2catEssentialDesc: string;
    s2catEssentialReq: string;
    s2catAnalytics: string;
    s2catAnalyticsDesc: string;
    s2catAnalyticsReq: string;
    s2catFunctionality: string;
    s2catFunctionalityDesc: string;
    s2catFunctionalityReq: string;
    /* Section 3 - Essential Cookies */
    s3p1: string;
    s3sessionPurpose: string;
    s3sessionDuration: string;
    s3csrfPurpose: string;
    s3csrfDuration: string;
    s3authPurpose: string;
    s3authDuration: string;
    s3consentPurpose: string;
    s3consentDuration: string;
    s3p2: string;
    /* Section 4 - Analytics Cookies */
    s4p1: string;
    s4idPurpose: string;
    s4idDuration: string;
    s4sessionPurpose: string;
    s4sessionDuration: string;
    s4utmPurpose: string;
    s4utmDuration: string;
    s4p2: string;
    /* Section 5 - Functionality Cookies */
    s5p1: string;
    s5langPurpose: string;
    s5langDuration: string;
    s5themePurpose: string;
    s5themeDuration: string;
    s5recentPurpose: string;
    s5recentDuration: string;
    s5p2: string;
    /* Section 6 - How to Manage */
    s6p1: string;
    s6browserLabel: string;
    s6browserDesc: string;
    s6prefLabel: string;
    s6prefDesc: string;
    s6dntLabel: string;
    s6dntDesc: string;
    s6p2: string;
    s6browserTitle: string;
    s6chrome: string;
    s6firefox: string;
    s6safari: string;
    s6edge: string;
    /* Section 7 - Updates */
    s7p1: string;
    s7li1: string;
    s7li2: string;
    s7li3: string;
    /* Section 8 - Contact Us */
    s8p1: string;
    s8email: string;
    s8website: string;
    s8p2: string;
    s8privacyLink: string;
  }
> = {
  /* ══════════════════════════════════════════
     ENGLISH
     ══════════════════════════════════════════ */
  en: {
    legal: "Legal",
    title: "Cookie Policy",
    subtitle:
      "This policy explains how Sythio uses cookies and similar technologies.",
    lastUpdated: "Last updated",
    lastUpdatedDate: "March 23, 2026",
    effective: "Effective",
    toc: "Table of Contents",
    backToTop: "Back to top",
    allRights: "All rights reserved.",
    thCategory: "Category",
    thPurpose: "Purpose",
    thRequired: "Required",
    thCookie: "Cookie",
    thDuration: "Duration",

    s1Title: "What Are Cookies",
    s2Title: "Types of Cookies We Use",
    s3Title: "Essential Cookies",
    s4Title: "Analytics Cookies",
    s5Title: "Functionality Cookies",
    s6Title: "How to Manage Cookies",
    s7Title: "Updates to This Policy",
    s8Title: "Contact Us",

    s1p1: "Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work efficiently, provide a better user experience, and give website owners useful information.",
    s1p2: 'Cookies can be "persistent" (remaining on your device until they expire or you delete them) or "session" (deleted when you close your browser). They can be set by the website you are visiting ("first-party cookies") or by third-party services operating on that website ("third-party cookies").',

    s2p1: "Sythio uses the following categories of cookies. Each serves a specific purpose and is described in detail in the sections below.",
    s2catEssential: "Essential",
    s2catEssentialDesc: "Authentication, security, core functionality",
    s2catEssentialReq: "Yes",
    s2catAnalytics: "Analytics",
    s2catAnalyticsDesc: "Understanding usage patterns and improving services",
    s2catAnalyticsReq: "No",
    s2catFunctionality: "Functionality",
    s2catFunctionalityDesc:
      "Preferences, language settings, personalization",
    s2catFunctionalityReq: "No",

    s3p1: "Essential cookies are necessary for Sythio to function properly. They enable core features like user authentication, session management, and security protections. Without these cookies, the Service cannot operate as intended.",
    s3sessionPurpose: "Maintains your login session",
    s3sessionDuration: "Session",
    s3csrfPurpose: "Prevents cross-site request forgery attacks",
    s3csrfDuration: "Session",
    s3authPurpose: "Authenticates API requests",
    s3authDuration: "30 days",
    s3consentPurpose: "Stores your cookie preferences",
    s3consentDuration: "1 year",
    s3p2: "These cookies cannot be disabled as they are essential for the Service to function securely.",

    s4p1: "Analytics cookies help us understand how visitors interact with Sythio. They collect information about page visits, feature usage, and navigation patterns. All analytics data is aggregated and anonymized.",
    s4idPurpose: "Distinguishes unique visitors",
    s4idDuration: "1 year",
    s4sessionPurpose: "Groups page views into sessions",
    s4sessionDuration: "30 minutes",
    s4utmPurpose: "Tracks marketing campaign attribution",
    s4utmDuration: "90 days",
    s4p2: "You can opt out of analytics cookies through your browser settings or our cookie preferences menu.",

    s5p1: "Functionality cookies allow Sythio to remember your preferences and provide a more personalized experience. These cookies enhance usability but are not strictly necessary for the Service to operate.",
    s5langPurpose: "Stores your language preference",
    s5langDuration: "1 year",
    s5themePurpose: "Stores your display theme preference",
    s5themeDuration: "1 year",
    s5recentPurpose: "Remembers recently accessed outputs for quick access",
    s5recentDuration: "30 days",
    s5p2: "Disabling functionality cookies may result in a less personalized experience but will not prevent you from using the Service.",

    s6p1: "You have several options for managing cookies:",
    s6browserLabel: "Browser Settings:",
    s6browserDesc:
      "Most browsers allow you to block or delete cookies through their settings. Consult your browser's help documentation for specific instructions.",
    s6prefLabel: "Cookie Preferences:",
    s6prefDesc:
      "When available, use our in-app cookie preferences banner to manage non-essential cookies.",
    s6dntLabel: "Do Not Track:",
    s6dntDesc:
      'We respect "Do Not Track" browser signals. When enabled, we limit non-essential tracking.',
    s6p2: "Please note that blocking essential cookies may prevent Sythio from functioning properly.",
    s6browserTitle: "Browser-specific instructions",
    s6chrome: "Settings > Privacy and Security > Cookies",
    s6firefox: "Settings > Privacy & Security > Cookies",
    s6safari: "Preferences > Privacy > Manage Website Data",
    s6edge: "Settings > Cookies and Site Permissions",

    s7p1: "We may update this Cookie Policy from time to time to reflect changes in the cookies we use, our practices, or legal requirements. When we make changes:",
    s7li1: 'We will update the "Last Updated" date at the top of this policy.',
    s7li2: "For significant changes, we will provide notice through a banner on our website or via email.",
    s7li3: "We will give you the opportunity to review and update your cookie preferences.",

    s8p1: "If you have any questions about our use of cookies or this Cookie Policy, please reach out:",
    s8email: "Email",
    s8website: "Website",
    s8p2: "For more details on how we handle your personal data, please review our",
    s8privacyLink: "Privacy Policy",
  },

  /* ══════════════════════════════════════════
     SPANISH
     ══════════════════════════════════════════ */
  es: {
    legal: "Legal",
    title: "Política de Cookies",
    subtitle:
      "Esta política explica cómo Sythio usa cookies y tecnologías similares.",
    lastUpdated: "Última actualización",
    lastUpdatedDate: "23 de marzo de 2026",
    effective: "Vigente",
    toc: "Tabla de Contenidos",
    backToTop: "Volver arriba",
    allRights: "Todos los derechos reservados.",
    thCategory: "Categoría",
    thPurpose: "Propósito",
    thRequired: "Obligatoria",
    thCookie: "Cookie",
    thDuration: "Duración",

    s1Title: "Qué son las Cookies",
    s2Title: "Tipos de Cookies que Usamos",
    s3Title: "Cookies Esenciales",
    s4Title: "Cookies de Analítica",
    s5Title: "Cookies de Funcionalidad",
    s6Title: "Cómo Gestionar las Cookies",
    s7Title: "Actualizaciones de esta Política",
    s8Title: "Contacto",

    s1p1: "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tableta o teléfono móvil) cuando visita un sitio web. Se utilizan ampliamente para que los sitios web funcionen de manera eficiente, proporcionen una mejor experiencia de usuario y ofrezcan información útil a los propietarios del sitio.",
    s1p2: 'Las cookies pueden ser "persistentes" (permanecen en su dispositivo hasta que caducan o las elimina) o "de sesión" (se eliminan al cerrar el navegador). Pueden ser establecidas por el sitio web que visita ("cookies propias") o por servicios de terceros que operan en ese sitio ("cookies de terceros").',

    s2p1: "Sythio utiliza las siguientes categorías de cookies. Cada una tiene un propósito específico y se describe en detalle en las secciones siguientes.",
    s2catEssential: "Esenciales",
    s2catEssentialDesc: "Autenticación, seguridad, funcionalidad principal",
    s2catEssentialReq: "Sí",
    s2catAnalytics: "Analítica",
    s2catAnalyticsDesc:
      "Comprensión de patrones de uso y mejora de los servicios",
    s2catAnalyticsReq: "No",
    s2catFunctionality: "Funcionalidad",
    s2catFunctionalityDesc:
      "Preferencias, ajustes de idioma, personalización",
    s2catFunctionalityReq: "No",

    s3p1: "Las cookies esenciales son necesarias para que Sythio funcione correctamente. Habilitan funciones clave como la autenticación de usuarios, la gestión de sesiones y las protecciones de seguridad. Sin estas cookies, el Servicio no puede funcionar según lo previsto.",
    s3sessionPurpose: "Mantiene su sesión iniciada",
    s3sessionDuration: "Sesión",
    s3csrfPurpose: "Previene ataques de falsificación de solicitudes entre sitios",
    s3csrfDuration: "Sesión",
    s3authPurpose: "Autentica las solicitudes a la API",
    s3authDuration: "30 días",
    s3consentPurpose: "Almacena sus preferencias de cookies",
    s3consentDuration: "1 año",
    s3p2: "Estas cookies no se pueden desactivar, ya que son esenciales para el funcionamiento seguro del Servicio.",

    s4p1: "Las cookies de analítica nos ayudan a comprender cómo los visitantes interactúan con Sythio. Recopilan información sobre las visitas a páginas, el uso de funciones y los patrones de navegación. Todos los datos analíticos se agregan y anonimizan.",
    s4idPurpose: "Distingue visitantes únicos",
    s4idDuration: "1 año",
    s4sessionPurpose: "Agrupa las vistas de página en sesiones",
    s4sessionDuration: "30 minutos",
    s4utmPurpose: "Rastrea la atribución de campañas de marketing",
    s4utmDuration: "90 días",
    s4p2: "Puede optar por no recibir cookies de analítica a través de la configuración de su navegador o de nuestro menú de preferencias de cookies.",

    s5p1: "Las cookies de funcionalidad permiten a Sythio recordar sus preferencias y ofrecer una experiencia más personalizada. Estas cookies mejoran la usabilidad pero no son estrictamente necesarias para que el Servicio funcione.",
    s5langPurpose: "Almacena su preferencia de idioma",
    s5langDuration: "1 año",
    s5themePurpose: "Almacena su preferencia de tema de visualización",
    s5themeDuration: "1 año",
    s5recentPurpose:
      "Recuerda los resultados accedidos recientemente para un acceso rápido",
    s5recentDuration: "30 días",
    s5p2: "Desactivar las cookies de funcionalidad puede resultar en una experiencia menos personalizada, pero no le impedirá usar el Servicio.",

    s6p1: "Tiene varias opciones para gestionar las cookies:",
    s6browserLabel: "Configuración del Navegador:",
    s6browserDesc:
      "La mayoría de los navegadores permiten bloquear o eliminar cookies a través de su configuración. Consulte la documentación de ayuda de su navegador para obtener instrucciones específicas.",
    s6prefLabel: "Preferencias de Cookies:",
    s6prefDesc:
      "Cuando esté disponible, utilice nuestro banner de preferencias de cookies en la aplicación para gestionar las cookies no esenciales.",
    s6dntLabel: "No Rastrear:",
    s6dntDesc:
      'Respetamos las señales de "No Rastrear" del navegador. Cuando están habilitadas, limitamos el seguimiento no esencial.',
    s6p2: "Tenga en cuenta que bloquear las cookies esenciales puede impedir que Sythio funcione correctamente.",
    s6browserTitle: "Instrucciones específicas por navegador",
    s6chrome: "Configuración > Privacidad y Seguridad > Cookies",
    s6firefox: "Configuración > Privacidad y Seguridad > Cookies",
    s6safari: "Preferencias > Privacidad > Gestionar datos de sitios web",
    s6edge: "Configuración > Cookies y Permisos del sitio",

    s7p1: "Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en las cookies que utilizamos, nuestras prácticas o los requisitos legales. Cuando realicemos cambios:",
    s7li1: 'Actualizaremos la fecha de "Última actualización" en la parte superior de esta política.',
    s7li2: "Para cambios significativos, proporcionaremos aviso a través de un banner en nuestro sitio web o por correo electrónico.",
    s7li3: "Le daremos la oportunidad de revisar y actualizar sus preferencias de cookies.",

    s8p1: "Si tiene alguna pregunta sobre nuestro uso de cookies o esta Política de Cookies, no dude en contactarnos:",
    s8email: "Correo electrónico",
    s8website: "Sitio web",
    s8p2: "Para más detalles sobre cómo manejamos sus datos personales, consulte nuestra",
    s8privacyLink: "Política de Privacidad",
  },

  /* ══════════════════════════════════════════
     FRENCH
     ══════════════════════════════════════════ */
  fr: {
    legal: "Légal",
    title: "Politique de Cookies",
    subtitle:
      "Cette politique explique comment Sythio utilise les cookies et technologies similaires.",
    lastUpdated: "Dernière mise à jour",
    lastUpdatedDate: "23 mars 2026",
    effective: "En vigueur",
    toc: "Table des Matières",
    backToTop: "Retour en haut",
    allRights: "Tous droits réservés.",
    thCategory: "Catégorie",
    thPurpose: "Finalité",
    thRequired: "Obligatoire",
    thCookie: "Cookie",
    thDuration: "Durée",

    s1Title: "Qu'est-ce qu'un Cookie",
    s2Title: "Types de Cookies Utilisés",
    s3Title: "Cookies Essentiels",
    s4Title: "Cookies Analytiques",
    s5Title: "Cookies de Fonctionnalité",
    s6Title: "Comment Gérer les Cookies",
    s7Title: "Mises à Jour de cette Politique",
    s8Title: "Nous Contacter",

    s1p1: "Les cookies sont de petits fichiers texte stockés sur votre appareil (ordinateur, tablette ou téléphone mobile) lorsque vous visitez un site web. Ils sont largement utilisés pour assurer le bon fonctionnement des sites, offrir une meilleure expérience utilisateur et fournir des informations utiles aux propriétaires des sites.",
    s1p2: "Les cookies peuvent être « persistants » (restant sur votre appareil jusqu'à leur expiration ou leur suppression) ou « de session » (supprimés à la fermeture du navigateur). Ils peuvent être définis par le site que vous visitez (« cookies propriétaires ») ou par des services tiers opérant sur ce site (« cookies tiers »).",

    s2p1: "Sythio utilise les catégories de cookies suivantes. Chacune a une finalité spécifique et est décrite en détail dans les sections ci-dessous.",
    s2catEssential: "Essentiels",
    s2catEssentialDesc:
      "Authentification, sécurité, fonctionnalités principales",
    s2catEssentialReq: "Oui",
    s2catAnalytics: "Analytiques",
    s2catAnalyticsDesc:
      "Compréhension des habitudes d'utilisation et amélioration des services",
    s2catAnalyticsReq: "Non",
    s2catFunctionality: "Fonctionnalité",
    s2catFunctionalityDesc:
      "Préférences, paramètres de langue, personnalisation",
    s2catFunctionalityReq: "Non",

    s3p1: "Les cookies essentiels sont nécessaires au bon fonctionnement de Sythio. Ils permettent des fonctions clés comme l'authentification des utilisateurs, la gestion des sessions et les protections de sécurité. Sans ces cookies, le Service ne peut pas fonctionner comme prévu.",
    s3sessionPurpose: "Maintient votre session de connexion",
    s3sessionDuration: "Session",
    s3csrfPurpose:
      "Protège contre les attaques de falsification de requêtes intersites",
    s3csrfDuration: "Session",
    s3authPurpose: "Authentifie les requêtes API",
    s3authDuration: "30 jours",
    s3consentPurpose: "Enregistre vos préférences en matière de cookies",
    s3consentDuration: "1 an",
    s3p2: "Ces cookies ne peuvent pas être désactivés car ils sont essentiels au fonctionnement sécurisé du Service.",

    s4p1: "Les cookies analytiques nous aident à comprendre comment les visiteurs interagissent avec Sythio. Ils collectent des informations sur les pages visitées, l'utilisation des fonctionnalités et les habitudes de navigation. Toutes les données analytiques sont agrégées et anonymisées.",
    s4idPurpose: "Distingue les visiteurs uniques",
    s4idDuration: "1 an",
    s4sessionPurpose: "Regroupe les pages vues en sessions",
    s4sessionDuration: "30 minutes",
    s4utmPurpose: "Assure le suivi de l'attribution des campagnes marketing",
    s4utmDuration: "90 jours",
    s4p2: "Vous pouvez refuser les cookies analytiques via les paramètres de votre navigateur ou notre menu de préférences de cookies.",

    s5p1: "Les cookies de fonctionnalité permettent à Sythio de mémoriser vos préférences et de fournir une expérience plus personnalisée. Ces cookies améliorent l'ergonomie mais ne sont pas strictement nécessaires au fonctionnement du Service.",
    s5langPurpose: "Enregistre votre préférence de langue",
    s5langDuration: "1 an",
    s5themePurpose: "Enregistre votre préférence de thème d'affichage",
    s5themeDuration: "1 an",
    s5recentPurpose:
      "Mémorise les résultats récemment consultés pour un accès rapide",
    s5recentDuration: "30 jours",
    s5p2: "La désactivation des cookies de fonctionnalité peut entraîner une expérience moins personnalisée, mais ne vous empêchera pas d'utiliser le Service.",

    s6p1: "Vous disposez de plusieurs options pour gérer les cookies :",
    s6browserLabel: "Paramètres du Navigateur :",
    s6browserDesc:
      "La plupart des navigateurs permettent de bloquer ou de supprimer les cookies via leurs paramètres. Consultez la documentation d'aide de votre navigateur pour des instructions spécifiques.",
    s6prefLabel: "Préférences de Cookies :",
    s6prefDesc:
      "Lorsque disponible, utilisez notre bannière de préférences de cookies intégrée pour gérer les cookies non essentiels.",
    s6dntLabel: "Ne Pas Suivre :",
    s6dntDesc:
      "Nous respectons les signaux « Ne Pas Suivre » du navigateur. Lorsqu'ils sont activés, nous limitons le suivi non essentiel.",
    s6p2: "Veuillez noter que le blocage des cookies essentiels peut empêcher Sythio de fonctionner correctement.",
    s6browserTitle: "Instructions spécifiques par navigateur",
    s6chrome: "Paramètres > Confidentialité et Sécurité > Cookies",
    s6firefox: "Paramètres > Vie privée et Sécurité > Cookies",
    s6safari:
      "Préférences > Confidentialité > Gérer les données de sites web",
    s6edge: "Paramètres > Cookies et Autorisations de site",

    s7p1: "Nous pouvons mettre à jour cette Politique de Cookies de temps à autre pour refléter les changements dans les cookies que nous utilisons, nos pratiques ou les exigences légales. Lorsque nous apportons des modifications :",
    s7li1: "Nous mettrons à jour la date de « Dernière mise à jour » en haut de cette politique.",
    s7li2: "Pour les changements importants, nous vous informerons par le biais d'une bannière sur notre site web ou par e-mail.",
    s7li3: "Nous vous donnerons la possibilité de revoir et de mettre à jour vos préférences en matière de cookies.",

    s8p1: "Si vous avez des questions concernant notre utilisation des cookies ou cette Politique de Cookies, n'hésitez pas à nous contacter :",
    s8email: "E-mail",
    s8website: "Site web",
    s8p2: "Pour plus de détails sur la manière dont nous traitons vos données personnelles, veuillez consulter notre",
    s8privacyLink: "Politique de Confidentialité",
  },

  /* ══════════════════════════════════════════
     PORTUGUESE
     ══════════════════════════════════════════ */
  pt: {
    legal: "Legal",
    title: "Política de Cookies",
    subtitle:
      "Esta política explica como o Sythio usa cookies e tecnologias similares.",
    lastUpdated: "Última atualização",
    lastUpdatedDate: "23 de março de 2026",
    effective: "Vigente",
    toc: "Índice",
    backToTop: "Voltar ao topo",
    allRights: "Todos os direitos reservados.",
    thCategory: "Categoria",
    thPurpose: "Finalidade",
    thRequired: "Obrigatório",
    thCookie: "Cookie",
    thDuration: "Duração",

    s1Title: "O que são Cookies",
    s2Title: "Tipos de Cookies que Usamos",
    s3Title: "Cookies Essenciais",
    s4Title: "Cookies de Análise",
    s5Title: "Cookies de Funcionalidade",
    s6Title: "Como Gerenciar os Cookies",
    s7Title: "Atualizações desta Política",
    s8Title: "Fale Conosco",

    s1p1: "Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, tablet ou celular) quando você visita um site. Eles são amplamente utilizados para garantir o funcionamento eficiente dos sites, proporcionar uma melhor experiência ao usuário e fornecer informações úteis aos proprietários dos sites.",
    s1p2: "Os cookies podem ser \"persistentes\" (permanecendo no seu dispositivo até expirarem ou serem excluídos) ou \"de sessão\" (excluídos quando você fecha o navegador). Eles podem ser definidos pelo site que você está visitando (\"cookies próprios\") ou por serviços de terceiros que operam nesse site (\"cookies de terceiros\").",

    s2p1: "O Sythio utiliza as seguintes categorias de cookies. Cada uma tem uma finalidade específica e é descrita em detalhes nas seções abaixo.",
    s2catEssential: "Essenciais",
    s2catEssentialDesc:
      "Autenticação, segurança, funcionalidade principal",
    s2catEssentialReq: "Sim",
    s2catAnalytics: "Análise",
    s2catAnalyticsDesc:
      "Compreensão de padrões de uso e melhoria dos serviços",
    s2catAnalyticsReq: "Não",
    s2catFunctionality: "Funcionalidade",
    s2catFunctionalityDesc:
      "Preferências, configurações de idioma, personalização",
    s2catFunctionalityReq: "Não",

    s3p1: "Os cookies essenciais são necessários para que o Sythio funcione corretamente. Eles habilitam recursos principais como autenticação de usuários, gerenciamento de sessões e proteções de segurança. Sem esses cookies, o Serviço não pode funcionar como esperado.",
    s3sessionPurpose: "Mantém sua sessão de login",
    s3sessionDuration: "Sessão",
    s3csrfPurpose:
      "Previne ataques de falsificação de requisições entre sites",
    s3csrfDuration: "Sessão",
    s3authPurpose: "Autentica as requisições da API",
    s3authDuration: "30 dias",
    s3consentPurpose: "Armazena suas preferências de cookies",
    s3consentDuration: "1 ano",
    s3p2: "Esses cookies não podem ser desativados, pois são essenciais para o funcionamento seguro do Serviço.",

    s4p1: "Os cookies de análise nos ajudam a entender como os visitantes interagem com o Sythio. Eles coletam informações sobre visitas a páginas, uso de recursos e padrões de navegação. Todos os dados analíticos são agregados e anonimizados.",
    s4idPurpose: "Distingue visitantes únicos",
    s4idDuration: "1 ano",
    s4sessionPurpose: "Agrupa visualizações de página em sessões",
    s4sessionDuration: "30 minutos",
    s4utmPurpose: "Rastreia a atribuição de campanhas de marketing",
    s4utmDuration: "90 dias",
    s4p2: "Você pode recusar os cookies de análise através das configurações do seu navegador ou do nosso menu de preferências de cookies.",

    s5p1: "Os cookies de funcionalidade permitem que o Sythio lembre suas preferências e ofereça uma experiência mais personalizada. Esses cookies melhoram a usabilidade, mas não são estritamente necessários para o funcionamento do Serviço.",
    s5langPurpose: "Armazena sua preferência de idioma",
    s5langDuration: "1 ano",
    s5themePurpose: "Armazena sua preferência de tema de exibição",
    s5themeDuration: "1 ano",
    s5recentPurpose:
      "Lembra os resultados acessados recentemente para acesso rápido",
    s5recentDuration: "30 dias",
    s5p2: "Desativar os cookies de funcionalidade pode resultar em uma experiência menos personalizada, mas não impedirá você de usar o Serviço.",

    s6p1: "Você tem várias opções para gerenciar os cookies:",
    s6browserLabel: "Configurações do Navegador:",
    s6browserDesc:
      "A maioria dos navegadores permite bloquear ou excluir cookies através de suas configurações. Consulte a documentação de ajuda do seu navegador para instruções específicas.",
    s6prefLabel: "Preferências de Cookies:",
    s6prefDesc:
      "Quando disponível, use nosso banner de preferências de cookies no aplicativo para gerenciar cookies não essenciais.",
    s6dntLabel: "Não Rastrear:",
    s6dntDesc:
      "Respeitamos os sinais de \"Não Rastrear\" do navegador. Quando ativados, limitamos o rastreamento não essencial.",
    s6p2: "Observe que bloquear cookies essenciais pode impedir o funcionamento correto do Sythio.",
    s6browserTitle: "Instruções específicas por navegador",
    s6chrome: "Configurações > Privacidade e Segurança > Cookies",
    s6firefox: "Configurações > Privacidade e Segurança > Cookies",
    s6safari:
      "Preferências > Privacidade > Gerenciar dados de sites",
    s6edge: "Configurações > Cookies e Permissões do site",

    s7p1: "Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças nos cookies que utilizamos, em nossas práticas ou nos requisitos legais. Quando fizermos alterações:",
    s7li1: "Atualizaremos a data de \"Última atualização\" no topo desta política.",
    s7li2: "Para alterações significativas, forneceremos aviso por meio de um banner em nosso site ou por e-mail.",
    s7li3: "Daremos a você a oportunidade de revisar e atualizar suas preferências de cookies.",

    s8p1: "Se você tiver alguma dúvida sobre nosso uso de cookies ou esta Política de Cookies, entre em contato:",
    s8email: "E-mail",
    s8website: "Site",
    s8p2: "Para mais detalhes sobre como tratamos seus dados pessoais, consulte nossa",
    s8privacyLink: "Política de Privacidade",
  },

  /* ══════════════════════════════════════════
     ITALIAN
     ══════════════════════════════════════════ */
  it: {
    legal: "Legale",
    title: "Politica sui Cookie",
    subtitle:
      "Questa informativa spiega come Sythio utilizza i cookie e tecnologie simili.",
    lastUpdated: "Ultimo aggiornamento",
    lastUpdatedDate: "23 marzo 2026",
    effective: "In vigore",
    toc: "Indice",
    backToTop: "Torna in alto",
    allRights: "Tutti i diritti riservati.",
    thCategory: "Categoria",
    thPurpose: "Finalità",
    thRequired: "Obbligatorio",
    thCookie: "Cookie",
    thDuration: "Durata",

    s1Title: "Cosa sono i Cookie",
    s2Title: "Tipi di Cookie Utilizzati",
    s3Title: "Cookie Essenziali",
    s4Title: "Cookie Analitici",
    s5Title: "Cookie di Funzionalità",
    s6Title: "Come Gestire i Cookie",
    s7Title: "Aggiornamenti di questa Informativa",
    s8Title: "Contattaci",

    s1p1: "I cookie sono piccoli file di testo memorizzati sul tuo dispositivo (computer, tablet o telefono cellulare) quando visiti un sito web. Sono ampiamente utilizzati per far funzionare i siti in modo efficiente, offrire una migliore esperienza utente e fornire informazioni utili ai proprietari dei siti.",
    s1p2: "I cookie possono essere \"persistenti\" (rimangono sul dispositivo fino alla scadenza o alla cancellazione) o \"di sessione\" (cancellati alla chiusura del browser). Possono essere impostati dal sito che stai visitando (\"cookie proprietari\") o da servizi di terze parti che operano su quel sito (\"cookie di terze parti\").",

    s2p1: "Sythio utilizza le seguenti categorie di cookie. Ciascuna ha una finalità specifica ed è descritta in dettaglio nelle sezioni seguenti.",
    s2catEssential: "Essenziali",
    s2catEssentialDesc:
      "Autenticazione, sicurezza, funzionalità principali",
    s2catEssentialReq: "Sì",
    s2catAnalytics: "Analitici",
    s2catAnalyticsDesc:
      "Comprensione dei modelli di utilizzo e miglioramento dei servizi",
    s2catAnalyticsReq: "No",
    s2catFunctionality: "Funzionalità",
    s2catFunctionalityDesc:
      "Preferenze, impostazioni della lingua, personalizzazione",
    s2catFunctionalityReq: "No",

    s3p1: "I cookie essenziali sono necessari per il corretto funzionamento di Sythio. Abilitano funzioni chiave come l'autenticazione degli utenti, la gestione delle sessioni e le protezioni di sicurezza. Senza questi cookie, il Servizio non può funzionare come previsto.",
    s3sessionPurpose: "Mantiene la sessione di accesso",
    s3sessionDuration: "Sessione",
    s3csrfPurpose:
      "Previene attacchi di falsificazione delle richieste tra siti",
    s3csrfDuration: "Sessione",
    s3authPurpose: "Autentica le richieste API",
    s3authDuration: "30 giorni",
    s3consentPurpose: "Memorizza le tue preferenze sui cookie",
    s3consentDuration: "1 anno",
    s3p2: "Questi cookie non possono essere disattivati poiché sono essenziali per il funzionamento sicuro del Servizio.",

    s4p1: "I cookie analitici ci aiutano a capire come i visitatori interagiscono con Sythio. Raccolgono informazioni sulle visite alle pagine, sull'utilizzo delle funzionalità e sui modelli di navigazione. Tutti i dati analitici sono aggregati e anonimizzati.",
    s4idPurpose: "Distingue i visitatori unici",
    s4idDuration: "1 anno",
    s4sessionPurpose: "Raggruppa le visualizzazioni delle pagine in sessioni",
    s4sessionDuration: "30 minuti",
    s4utmPurpose:
      "Traccia l'attribuzione delle campagne di marketing",
    s4utmDuration: "90 giorni",
    s4p2: "Puoi rifiutare i cookie analitici tramite le impostazioni del tuo browser o il nostro menu delle preferenze dei cookie.",

    s5p1: "I cookie di funzionalità consentono a Sythio di ricordare le tue preferenze e offrire un'esperienza più personalizzata. Questi cookie migliorano l'usabilità ma non sono strettamente necessari per il funzionamento del Servizio.",
    s5langPurpose: "Memorizza la tua preferenza di lingua",
    s5langDuration: "1 anno",
    s5themePurpose: "Memorizza la tua preferenza di tema di visualizzazione",
    s5themeDuration: "1 anno",
    s5recentPurpose:
      "Ricorda i risultati consultati di recente per un accesso rapido",
    s5recentDuration: "30 giorni",
    s5p2: "Disattivare i cookie di funzionalità può comportare un'esperienza meno personalizzata, ma non ti impedirà di utilizzare il Servizio.",

    s6p1: "Hai diverse opzioni per gestire i cookie:",
    s6browserLabel: "Impostazioni del Browser:",
    s6browserDesc:
      "La maggior parte dei browser consente di bloccare o eliminare i cookie tramite le proprie impostazioni. Consulta la documentazione di aiuto del tuo browser per istruzioni specifiche.",
    s6prefLabel: "Preferenze Cookie:",
    s6prefDesc:
      "Quando disponibile, utilizza il nostro banner delle preferenze cookie integrato per gestire i cookie non essenziali.",
    s6dntLabel: "Non Tracciare:",
    s6dntDesc:
      "Rispettiamo i segnali \"Non Tracciare\" del browser. Quando attivati, limitiamo il tracciamento non essenziale.",
    s6p2: "Tieni presente che bloccare i cookie essenziali potrebbe impedire il corretto funzionamento di Sythio.",
    s6browserTitle: "Istruzioni specifiche per browser",
    s6chrome: "Impostazioni > Privacy e Sicurezza > Cookie",
    s6firefox: "Impostazioni > Privacy e Sicurezza > Cookie",
    s6safari:
      "Preferenze > Privacy > Gestisci dati siti web",
    s6edge: "Impostazioni > Cookie e Autorizzazioni sito",

    s7p1: "Potremmo aggiornare questa Informativa sui Cookie di tanto in tanto per riflettere i cambiamenti nei cookie che utilizziamo, nelle nostre pratiche o nei requisiti legali. Quando apportiamo modifiche:",
    s7li1: "Aggiorneremo la data di \"Ultimo aggiornamento\" in cima a questa informativa.",
    s7li2: "Per modifiche significative, forniremo una notifica tramite un banner sul nostro sito web o via e-mail.",
    s7li3: "Ti daremo la possibilità di rivedere e aggiornare le tue preferenze sui cookie.",

    s8p1: "Se hai domande sull'utilizzo dei cookie o su questa Informativa sui Cookie, non esitare a contattarci:",
    s8email: "E-mail",
    s8website: "Sito web",
    s8p2: "Per maggiori dettagli su come gestiamo i tuoi dati personali, consulta la nostra",
    s8privacyLink: "Informativa Privacy",
  },
};

/* ─── Cookie Policy Page ─── */
export default function CookiePolicyPage() {
  const { locale } = useLanguage();
  const t = content[locale] || content.en;

  const sections = [
    { id: "what-are-cookies", number: "01", title: t.s1Title },
    { id: "types-used", number: "02", title: t.s2Title },
    { id: "essential", number: "03", title: t.s3Title },
    { id: "analytics", number: "04", title: t.s4Title },
    { id: "functionality", number: "05", title: t.s5Title },
    { id: "manage", number: "06", title: t.s6Title },
    { id: "updates", number: "07", title: t.s7Title },
    { id: "contact", number: "08", title: t.s8Title },
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
            <span>{t.lastUpdated}: {t.lastUpdatedDate}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{t.effective}: {t.lastUpdatedDate}</span>
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
          {/* 01 - What Are Cookies */}
          <Section
            id="what-are-cookies"
            number="01"
            title={t.s1Title}
          >
            <p>{t.s1p1}</p>
            <p>{t.s1p2}</p>
          </Section>

          {/* 02 - Types of Cookies We Use */}
          <Section
            id="types-used"
            number="02"
            title={t.s2Title}
          >
            <p>{t.s2p1}</p>
            <div className="rounded-xl border border-border-light overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-background/70 border-b border-border-light">
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      {t.thCategory}
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      {t.thPurpose}
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      {t.thRequired}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-light">
                    <td className="py-3 px-4 text-sm font-medium text-foreground">
                      {t.s2catEssential}
                    </td>
                    <td className="py-3 px-4 text-sm text-muted">
                      {t.s2catEssentialDesc}
                    </td>
                    <td className="py-3 px-4 text-sm text-foreground">
                      {t.s2catEssentialReq}
                    </td>
                  </tr>
                  <tr className="border-b border-border-light">
                    <td className="py-3 px-4 text-sm font-medium text-foreground">
                      {t.s2catAnalytics}
                    </td>
                    <td className="py-3 px-4 text-sm text-muted">
                      {t.s2catAnalyticsDesc}
                    </td>
                    <td className="py-3 px-4 text-sm text-muted">
                      {t.s2catAnalyticsReq}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm font-medium text-foreground">
                      {t.s2catFunctionality}
                    </td>
                    <td className="py-3 px-4 text-sm text-muted">
                      {t.s2catFunctionalityDesc}
                    </td>
                    <td className="py-3 px-4 text-sm text-muted">
                      {t.s2catFunctionalityReq}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* 03 - Essential Cookies */}
          <Section id="essential" number="03" title={t.s3Title}>
            <p>{t.s3p1}</p>
            <div className="overflow-x-auto rounded-xl border border-border-light">
              <table className="w-full text-left min-w-[500px]">
                <thead>
                  <tr className="bg-background/70 border-b border-border-light">
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      {t.thCookie}
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      {t.thPurpose}
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      {t.thDuration}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <CookieRow
                    name="session_id"
                    purpose={t.s3sessionPurpose}
                    duration={t.s3sessionDuration}
                  />
                  <CookieRow
                    name="csrf_token"
                    purpose={t.s3csrfPurpose}
                    duration={t.s3csrfDuration}
                  />
                  <CookieRow
                    name="auth_token"
                    purpose={t.s3authPurpose}
                    duration={t.s3authDuration}
                  />
                  <CookieRow
                    name="cookie_consent"
                    purpose={t.s3consentPurpose}
                    duration={t.s3consentDuration}
                  />
                </tbody>
              </table>
            </div>
            <p>{t.s3p2}</p>
          </Section>

          {/* 04 - Analytics Cookies */}
          <Section id="analytics" number="04" title={t.s4Title}>
            <p>{t.s4p1}</p>
            <div className="overflow-x-auto rounded-xl border border-border-light">
              <table className="w-full text-left min-w-[500px]">
                <thead>
                  <tr className="bg-background/70 border-b border-border-light">
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      {t.thCookie}
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      {t.thPurpose}
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      {t.thDuration}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <CookieRow
                    name="_analytics_id"
                    purpose={t.s4idPurpose}
                    duration={t.s4idDuration}
                  />
                  <CookieRow
                    name="_analytics_session"
                    purpose={t.s4sessionPurpose}
                    duration={t.s4sessionDuration}
                  />
                  <CookieRow
                    name="utm_params"
                    purpose={t.s4utmPurpose}
                    duration={t.s4utmDuration}
                  />
                </tbody>
              </table>
            </div>
            <p>{t.s4p2}</p>
          </Section>

          {/* 05 - Functionality Cookies */}
          <Section id="functionality" number="05" title={t.s5Title}>
            <p>{t.s5p1}</p>
            <div className="overflow-x-auto rounded-xl border border-border-light">
              <table className="w-full text-left min-w-[500px]">
                <thead>
                  <tr className="bg-background/70 border-b border-border-light">
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      {t.thCookie}
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      {t.thPurpose}
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      {t.thDuration}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <CookieRow
                    name="language"
                    purpose={t.s5langPurpose}
                    duration={t.s5langDuration}
                  />
                  <CookieRow
                    name="theme"
                    purpose={t.s5themePurpose}
                    duration={t.s5themeDuration}
                  />
                  <CookieRow
                    name="recent_outputs"
                    purpose={t.s5recentPurpose}
                    duration={t.s5recentDuration}
                  />
                </tbody>
              </table>
            </div>
            <p>{t.s5p2}</p>
          </Section>

          {/* 06 - How to Manage Cookies */}
          <Section id="manage" number="06" title={t.s6Title}>
            <p>{t.s6p1}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground font-medium">
                  {t.s6browserLabel}
                </strong>{" "}
                {t.s6browserDesc}
              </li>
              <li>
                <strong className="text-foreground font-medium">
                  {t.s6prefLabel}
                </strong>{" "}
                {t.s6prefDesc}
              </li>
              <li>
                <strong className="text-foreground font-medium">
                  {t.s6dntLabel}
                </strong>{" "}
                {t.s6dntDesc}
              </li>
            </ul>
            <p>{t.s6p2}</p>
            <div className="rounded-xl border border-border-light bg-background/50 p-5">
              <p className="text-sm font-medium text-foreground mb-2">
                {t.s6browserTitle}
              </p>
              <div className="space-y-1.5">
                <p className="text-sm text-muted">
                  <strong className="font-medium text-foreground">Chrome:</strong>{" "}
                  {t.s6chrome}
                </p>
                <p className="text-sm text-muted">
                  <strong className="font-medium text-foreground">Firefox:</strong>{" "}
                  {t.s6firefox}
                </p>
                <p className="text-sm text-muted">
                  <strong className="font-medium text-foreground">Safari:</strong>{" "}
                  {t.s6safari}
                </p>
                <p className="text-sm text-muted">
                  <strong className="font-medium text-foreground">Edge:</strong>{" "}
                  {t.s6edge}
                </p>
              </div>
            </div>
          </Section>

          {/* 07 - Updates to This Policy */}
          <Section id="updates" number="07" title={t.s7Title}>
            <p>{t.s7p1}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t.s7li1}</li>
              <li>{t.s7li2}</li>
              <li>{t.s7li3}</li>
            </ul>
          </Section>

          {/* 08 - Contact Us */}
          <Section id="contact" number="08" title={t.s8Title}>
            <p>{t.s8p1}</p>
            <div className="rounded-xl border border-border-light bg-background/50 p-6 space-y-2 not-prose">
              <p className="text-sm">
                <strong className="text-foreground font-medium">{t.s8email}:</strong>{" "}
                <a
                  href="mailto:privacy@sythio.com"
                  className="text-muted hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  privacy@sythio.com
                </a>
              </p>
              <p className="text-sm">
                <strong className="text-foreground font-medium">{t.s8website}:</strong>{" "}
                <Link
                  href="/contact"
                  className="text-muted hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  sythio.com/contact
                </Link>
              </p>
            </div>
            <p>
              {t.s8p2}{" "}
              <Link
                href="/privacy-policy"
                className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors"
              >
                {t.s8privacyLink}
              </Link>
              .
            </p>
          </Section>

          {/* Divider & back to top */}
          <div className="pt-8 border-t border-border-light flex items-center justify-between">
            <p className="text-sm text-muted-light">
              &copy; {new Date().getFullYear()} Sythio. {t.allRights}
            </p>
            <button
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
