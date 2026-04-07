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
  rolesLabel: string;
  roles: { name: string; description: string }[];
}> = {
  en: {
    sectionLabel: "Collaboration",
    heading: "Built for ",
    rotatingWords: ["teams", "groups", "organizations", "everyone"],
    subtitle: "Share knowledge, align on decisions, and keep your team in sync — all from the same audio.",
    features: [
      {
        title: "Workspaces",
        description: "Create dedicated spaces for your team. Centralize notes, recordings, and outputs in one place.",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      },
      {
        title: "Channels",
        description: "Share notes in topic-based channels within your workspace. Keep conversations organized.",
        icon: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14",
      },
      {
        title: "Comments",
        description: "Comment on notes and specific segments of the transcription. Collaborate in context.",
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      },
    ],
    rolesLabel: "Roles",
    roles: [
      { name: "Owner", description: "Full control of the workspace" },
      { name: "Admin", description: "Manage members and settings" },
      { name: "Member", description: "Create and edit notes" },
      { name: "Viewer", description: "View-only access" },
    ],
  },
  es: {
    sectionLabel: "Colaboración",
    heading: "Hecho para ",
    rotatingWords: ["equipos", "grupos", "organizaciones", "todos"],
    subtitle: "Comparte conocimiento, alinea decisiones y mantén a tu equipo sincronizado — todo desde el mismo audio.",
    features: [
      {
        title: "Workspaces",
        description: "Crea espacios de trabajo para tu equipo. Centraliza notas, grabaciones y resultados en un solo lugar.",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      },
      {
        title: "Channels",
        description: "Comparte notas en canales temáticos dentro de tu workspace. Mantén las conversaciones organizadas.",
        icon: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14",
      },
      {
        title: "Comentarios",
        description: "Comenta en notas y segmentos específicos de la transcripción. Colabora en contexto.",
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      },
    ],
    rolesLabel: "Roles",
    roles: [
      { name: "Propietario", description: "Control total del workspace" },
      { name: "Admin", description: "Gestiona miembros y configuración" },
      { name: "Miembro", description: "Crea y edita notas" },
      { name: "Visor", description: "Acceso solo lectura" },
    ],
  },
  fr: {
    sectionLabel: "Collaboration",
    heading: "Conçu pour les ",
    rotatingWords: ["équipes", "groupes", "organisations", "tous"],
    subtitle: "Partagez les connaissances, alignez les décisions et gardez votre équipe synchronisée — tout à partir du même audio.",
    features: [
      {
        title: "Workspaces",
        description: "Créez des espaces dédiés pour votre équipe. Centralisez notes, enregistrements et résultats.",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      },
      {
        title: "Channels",
        description: "Partagez des notes dans des canaux thématiques au sein de votre workspace.",
        icon: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14",
      },
      {
        title: "Commentaires",
        description: "Commentez les notes et segments spécifiques de la transcription. Collaborez en contexte.",
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      },
    ],
    rolesLabel: "Rôles",
    roles: [
      { name: "Propriétaire", description: "Contrôle total du workspace" },
      { name: "Admin", description: "Gérer les membres et paramètres" },
      { name: "Membre", description: "Créer et modifier des notes" },
      { name: "Lecteur", description: "Accès en lecture seule" },
    ],
  },
  pt: {
    sectionLabel: "Colaboração",
    heading: "Feito para ",
    rotatingWords: ["times", "grupos", "organizações", "todos"],
    subtitle: "Compartilhe conhecimento, alinhe decisões e mantenha seu time sincronizado — tudo a partir do mesmo áudio.",
    features: [
      {
        title: "Workspaces",
        description: "Crie espaços dedicados para seu time. Centralize notas, gravações e resultados em um só lugar.",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      },
      {
        title: "Channels",
        description: "Compartilhe notas em canais temáticos dentro do seu workspace.",
        icon: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14",
      },
      {
        title: "Comentários",
        description: "Comente em notas e segmentos específicos da transcrição. Colabore em contexto.",
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      },
    ],
    rolesLabel: "Funções",
    roles: [
      { name: "Proprietário", description: "Controle total do workspace" },
      { name: "Admin", description: "Gerenciar membros e configurações" },
      { name: "Membro", description: "Criar e editar notas" },
      { name: "Visualizador", description: "Acesso somente leitura" },
    ],
  },
  it: {
    sectionLabel: "Collaborazione",
    heading: "Progettato per ",
    rotatingWords: ["team", "gruppi", "organizzazioni", "tutti"],
    subtitle: "Condividi conoscenze, allinea le decisioni e mantieni il tuo team sincronizzato — tutto dallo stesso audio.",
    features: [
      {
        title: "Workspaces",
        description: "Crea spazi dedicati per il tuo team. Centralizza note, registrazioni e risultati in un unico posto.",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      },
      {
        title: "Channels",
        description: "Condividi note in canali tematici all'interno del tuo workspace.",
        icon: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14",
      },
      {
        title: "Commenti",
        description: "Commenta le note e i segmenti specifici della trascrizione. Collabora nel contesto.",
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      },
    ],
    rolesLabel: "Ruoli",
    roles: [
      { name: "Proprietario", description: "Controllo totale del workspace" },
      { name: "Admin", description: "Gestire membri e impostazioni" },
      { name: "Membro", description: "Creare e modificare note" },
      { name: "Visualizzatore", description: "Accesso in sola lettura" },
    ],
  },
};

export default function Collaboration() {
  const { locale } = useLanguage();
  const t = content[locale] ?? content.en;

  return (
    <section className="py-32 md:py-44 bg-background section-float-bg-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
            {t.sectionLabel}
          </span>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {t.heading}<RotatingText words={t.rotatingWords} className="text-zinc-400" />
          </TextReveal>
          <TextReveal tag="p" className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </TextReveal>
        </div>

        <GsapStagger className="grid md:grid-cols-3 gap-6 mb-16" stagger={0.1}>
          {t.features.map((feature) => (
            <ScrollScale key={feature.title}>
              <div className="group relative p-8 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-amber-50/20 via-orange-50/10 to-transparent transition-opacity duration-500" />
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

        {/* Roles strip */}
        <ScrollScale>
          <div className="rounded-2xl border border-border-light bg-background p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">{t.rolesLabel}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.roles.map((role, i) => (
                <div key={role.name} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-foreground flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-white">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{role.name}</p>
                    <p className="text-xs text-muted leading-relaxed mt-0.5">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollScale>
      </div>
    </section>
  );
}
