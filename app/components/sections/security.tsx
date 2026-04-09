"use client";

import { TextReveal, ScrollScale, GsapStagger } from "../gsap-effects";
import RotatingText from "../rotating-text";
import { useLanguage } from "../i18n/language-context";

const content: Record<string, {
  sectionLabel: string;
  heading: string;
  rotatingWords: string[];
  subtitle: string;
  features: { title: string; description: string; icon: string }[];
}> = {
  en: {
    sectionLabel: "Security",
    heading: "Your data, ",
    rotatingWords: ["protected", "encrypted", "private", "yours"],
    subtitle: "Enterprise-grade security by default. Every layer of Sythio is built to keep your data safe.",
    features: [
      {
        title: "Two-factor authentication",
        description: "TOTP-based 2FA available for every account. An extra layer of protection for your audio intelligence.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      },
      {
        title: "Social login",
        description: "Sign in securely with Google or Apple. Fast access, no extra passwords to manage.",
        icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
      },
      {
        title: "Row-Level Security",
        description: "Every database query enforces row-level policies. Your data is isolated at the infrastructure level.",
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
      },
      {
        title: "AES-256 encryption",
        description: "All stored data is encrypted with AES-256. Industry standard, no compromises.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "GDPR compliant",
        description: "Full account and data deletion on request. You own your data — always.",
        icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
      },
      {
        title: "Hashed API keys",
        description: "API keys are hashed with SHA-256 before storage. The raw key is never stored on our servers.",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      },
    ],
  },
  es: {
    sectionLabel: "Seguridad",
    heading: "Tus datos, ",
    rotatingWords: ["protegidos", "cifrados", "privados", "tuyos"],
    subtitle: "Seguridad de nivel empresarial por defecto. Cada capa de Sythio está construida para proteger tus datos.",
    features: [
      {
        title: "Autenticación de dos factores",
        description: "2FA basado en TOTP disponible para todas las cuentas. Una capa extra de protección para tu inteligencia de audio.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      },
      {
        title: "Login social",
        description: "Inicia sesión con Google o Apple. Acceso rápido, sin contraseñas extra.",
        icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
      },
      {
        title: "Row-Level Security",
        description: "Cada consulta a la base de datos aplica políticas a nivel de fila. Tus datos están aislados a nivel de infraestructura.",
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
      },
      {
        title: "Cifrado AES-256",
        description: "Todos los datos almacenados están cifrados con AES-256. Estándar de la industria, sin compromisos.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "Cumplimiento GDPR",
        description: "Eliminación completa de cuenta y datos bajo solicitud. Tus datos son tuyos — siempre.",
        icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
      },
      {
        title: "API keys con hash",
        description: "Las API keys se hashean con SHA-256 antes de almacenarlas. La key nunca se guarda en nuestros servidores.",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      },
    ],
  },
  fr: {
    sectionLabel: "Sécurité",
    heading: "Vos données, ",
    rotatingWords: ["protégées", "chiffrées", "privées", "les vôtres"],
    subtitle: "Sécurité de niveau entreprise par défaut. Chaque couche de Sythio est construite pour protéger vos données.",
    features: [
      {
        title: "Authentification à deux facteurs",
        description: "2FA basé sur TOTP disponible pour chaque compte. Une couche de protection supplémentaire.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      },
      {
        title: "Connexion sociale",
        description: "Connectez-vous avec Google ou Apple. Accès rapide, sans mots de passe supplémentaires.",
        icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
      },
      {
        title: "Row-Level Security",
        description: "Chaque requête applique des politiques au niveau des lignes. Vos données sont isolées au niveau infrastructure.",
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
      },
      {
        title: "Chiffrement AES-256",
        description: "Toutes les données stockées sont chiffrées en AES-256. Standard industriel, sans compromis.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "Conformité RGPD",
        description: "Suppression complète du compte et des données sur demande. Vos données vous appartiennent — toujours.",
        icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
      },
      {
        title: "Clés API hashées",
        description: "Les clés API sont hashées en SHA-256 avant stockage. La clé brute n'est jamais stockée.",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      },
    ],
  },
  pt: {
    sectionLabel: "Segurança",
    heading: "Seus dados, ",
    rotatingWords: ["protegidos", "criptografados", "privados", "seus"],
    subtitle: "Segurança de nível empresarial por padrão. Cada camada do Sythio é construída para proteger seus dados.",
    features: [
      {
        title: "Autenticação de dois fatores",
        description: "2FA baseado em TOTP disponível para todas as contas. Uma camada extra de proteção.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      },
      {
        title: "Login social",
        description: "Entre com Google ou Apple. Acesso rápido, sem senhas extras.",
        icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
      },
      {
        title: "Row-Level Security",
        description: "Cada consulta ao banco aplica políticas em nível de linha. Seus dados são isolados na infraestrutura.",
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
      },
      {
        title: "Criptografia AES-256",
        description: "Todos os dados armazenados são criptografados com AES-256. Padrão da indústria, sem compromissos.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "Conformidade LGPD/GDPR",
        description: "Exclusão completa de conta e dados sob solicitação. Seus dados são seus — sempre.",
        icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
      },
      {
        title: "Chaves API com hash",
        description: "As chaves API são hasheadas com SHA-256 antes do armazenamento. A chave bruta nunca é armazenada.",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      },
    ],
  },
  it: {
    sectionLabel: "Sicurezza",
    heading: "I tuoi dati, ",
    rotatingWords: ["protetti", "crittografati", "privati", "tuoi"],
    subtitle: "Sicurezza di livello enterprise di default. Ogni livello di Sythio è costruito per proteggere i tuoi dati.",
    features: [
      {
        title: "Autenticazione a due fattori",
        description: "2FA basato su TOTP disponibile per ogni account. Un livello extra di protezione.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      },
      {
        title: "Login sociale",
        description: "Accedi con Google o Apple. Accesso rapido, nessuna password aggiuntiva.",
        icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
      },
      {
        title: "Row-Level Security",
        description: "Ogni query applica politiche a livello di riga. I tuoi dati sono isolati a livello infrastrutturale.",
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
      },
      {
        title: "Crittografia AES-256",
        description: "Tutti i dati archiviati sono crittografati con AES-256. Standard industriale, senza compromessi.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "Conformità GDPR",
        description: "Eliminazione completa dell'account e dei dati su richiesta. I tuoi dati sono tuoi — sempre.",
        icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
      },
      {
        title: "Chiavi API con hash",
        description: "Le chiavi API vengono sottoposte a hash SHA-256 prima dell'archiviazione. La chiave grezza non viene mai salvata.",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      },
    ],
  },
};

export default function Security() {
  const { locale } = useLanguage();
  const t = content[locale] ?? content.en;

  return (
    <section className="py-32 md:py-44 bg-background overflow-hidden animated-gradient-bg section-float-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-light mb-5 block">
            {t.sectionLabel}
          </span>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.025em] text-foreground">
            {t.heading}<RotatingText words={t.rotatingWords} className="text-zinc-400" />
          </TextReveal>
          <TextReveal tag="p" className="mt-5 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </TextReveal>
        </div>

        <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
          {t.features.map((feature) => (
            <ScrollScale key={feature.title}>
              <div className="group relative p-7 rounded-2xl bg-white border border-border-light hover:border-border/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-50/20 via-violet-50/10 to-transparent transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border-light flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-foreground group-hover:text-white transition-colors duration-300">
                      <path d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </ScrollScale>
          ))}
        </GsapStagger>
      </div>
    </section>
  );
}
