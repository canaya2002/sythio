"use client";

import { TextReveal, ScrollScale, GsapStagger } from "../gsap-effects";
import RotatingText from "../rotating-text";
import { useLanguage } from "../i18n/language-context";

const content: Record<string, {
  sectionLabel: string;
  heading: string;
  rotatingWords: string[];
  subtitle: string;
  cards: { title: string; description: string; icon: string; color: string; bgColor: string }[];
}> = {
  en: {
    sectionLabel: "Integrations",
    heading: "Connected to your ",
    rotatingWords: ["workflow", "tools", "team", "stack"],
    subtitle: "Sythio works where you work. Connect your favorite tools and let your notes flow automatically.",
    cards: [
      {
        title: "Slack",
        description: "Receive automatic summaries of every note in your Slack channel.",
        icon: "M14.5 2c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5S20.33 7 19.5 7H16V3.5c0-.83-.67-1.5-1.5-1.5zM9.5 2C8.67 2 8 2.67 8 3.5V7H4.5C3.67 7 3 7.67 3 8.5S3.67 10 4.5 10h5c.83 0 1.5-.67 1.5-1.5v-5C11 2.67 10.33 2 9.5 2zM4.5 14c-.83 0-1.5.67-1.5 1.5S3.67 17 4.5 17H8v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5zm10 0c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V17h3.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-5z",
        color: "#E01E5A",
        bgColor: "bg-pink-50",
      },
      {
        title: "Google Calendar",
        description: "Connect your calendar and see your meetings with video call links.",
        icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        color: "#4285F4",
        bgColor: "bg-blue-50",
      },
      {
        title: "Public API",
        description: "Access your notes from any tool with your API key.",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        color: "#18181b",
        bgColor: "bg-zinc-100",
      },
      {
        title: "MCP Server",
        description: "Connect your notes with Claude Desktop, ChatGPT, or Cursor via AI.",
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        color: "#8b5cf6",
        bgColor: "bg-violet-50",
      },
    ],
  },
  es: {
    sectionLabel: "Integraciones",
    heading: "Conectado a tu ",
    rotatingWords: ["flujo", "herramientas", "equipo", "stack"],
    subtitle: "Sythio funciona donde tu trabajas. Conecta tus herramientas favoritas y deja que tus notas fluyan automáticamente.",
    cards: [
      {
        title: "Slack",
        description: "Recibe resúmenes automáticos de cada nota en tu canal de Slack.",
        icon: "M14.5 2c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5S20.33 7 19.5 7H16V3.5c0-.83-.67-1.5-1.5-1.5zM9.5 2C8.67 2 8 2.67 8 3.5V7H4.5C3.67 7 3 7.67 3 8.5S3.67 10 4.5 10h5c.83 0 1.5-.67 1.5-1.5v-5C11 2.67 10.33 2 9.5 2zM4.5 14c-.83 0-1.5.67-1.5 1.5S3.67 17 4.5 17H8v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5zm10 0c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V17h3.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-5z",
        color: "#E01E5A",
        bgColor: "bg-pink-50",
      },
      {
        title: "Google Calendar",
        description: "Conecta tu calendario y ve tus reuniones con links de videollamada.",
        icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        color: "#4285F4",
        bgColor: "bg-blue-50",
      },
      {
        title: "API Pública",
        description: "Accede a tus notas desde cualquier herramienta con tu API key.",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        color: "#18181b",
        bgColor: "bg-zinc-100",
      },
      {
        title: "MCP Server",
        description: "Conecta tus notas con Claude Desktop, ChatGPT o Cursor vía IA.",
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        color: "#8b5cf6",
        bgColor: "bg-violet-50",
      },
    ],
  },
  fr: {
    sectionLabel: "Intégrations",
    heading: "Connecté à votre ",
    rotatingWords: ["workflow", "outils", "équipe", "stack"],
    subtitle: "Sythio fonctionne là où vous travaillez. Connectez vos outils favoris et laissez vos notes circuler automatiquement.",
    cards: [
      {
        title: "Slack",
        description: "Recevez des résumés automatiques de chaque note dans votre canal Slack.",
        icon: "M14.5 2c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5S20.33 7 19.5 7H16V3.5c0-.83-.67-1.5-1.5-1.5zM9.5 2C8.67 2 8 2.67 8 3.5V7H4.5C3.67 7 3 7.67 3 8.5S3.67 10 4.5 10h5c.83 0 1.5-.67 1.5-1.5v-5C11 2.67 10.33 2 9.5 2zM4.5 14c-.83 0-1.5.67-1.5 1.5S3.67 17 4.5 17H8v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5zm10 0c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V17h3.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-5z",
        color: "#E01E5A",
        bgColor: "bg-pink-50",
      },
      {
        title: "Google Calendar",
        description: "Connectez votre calendrier et consultez vos réunions avec les liens de visio.",
        icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        color: "#4285F4",
        bgColor: "bg-blue-50",
      },
      {
        title: "API Publique",
        description: "Accédez à vos notes depuis n'importe quel outil avec votre clé API.",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        color: "#18181b",
        bgColor: "bg-zinc-100",
      },
      {
        title: "MCP Server",
        description: "Connectez vos notes avec Claude Desktop, ChatGPT ou Cursor via IA.",
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        color: "#8b5cf6",
        bgColor: "bg-violet-50",
      },
    ],
  },
  pt: {
    sectionLabel: "Integrações",
    heading: "Conectado ao seu ",
    rotatingWords: ["fluxo", "ferramentas", "time", "stack"],
    subtitle: "O Sythio funciona onde você trabalha. Conecte suas ferramentas favoritas e deixe suas notas fluírem automaticamente.",
    cards: [
      {
        title: "Slack",
        description: "Receba resumos automáticos de cada nota no seu canal do Slack.",
        icon: "M14.5 2c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5S20.33 7 19.5 7H16V3.5c0-.83-.67-1.5-1.5-1.5zM9.5 2C8.67 2 8 2.67 8 3.5V7H4.5C3.67 7 3 7.67 3 8.5S3.67 10 4.5 10h5c.83 0 1.5-.67 1.5-1.5v-5C11 2.67 10.33 2 9.5 2zM4.5 14c-.83 0-1.5.67-1.5 1.5S3.67 17 4.5 17H8v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5zm10 0c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V17h3.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-5z",
        color: "#E01E5A",
        bgColor: "bg-pink-50",
      },
      {
        title: "Google Calendar",
        description: "Conecte seu calendário e veja suas reuniões com links de videochamada.",
        icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        color: "#4285F4",
        bgColor: "bg-blue-50",
      },
      {
        title: "API Pública",
        description: "Acesse suas notas de qualquer ferramenta com sua chave API.",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        color: "#18181b",
        bgColor: "bg-zinc-100",
      },
      {
        title: "MCP Server",
        description: "Conecte suas notas com Claude Desktop, ChatGPT ou Cursor via IA.",
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        color: "#8b5cf6",
        bgColor: "bg-violet-50",
      },
    ],
  },
  it: {
    sectionLabel: "Integrazioni",
    heading: "Connesso al tuo ",
    rotatingWords: ["workflow", "strumenti", "team", "stack"],
    subtitle: "Sythio funziona dove lavori tu. Connetti i tuoi strumenti preferiti e lascia che le tue note fluiscano automaticamente.",
    cards: [
      {
        title: "Slack",
        description: "Ricevi riepiloghi automatici di ogni nota nel tuo canale Slack.",
        icon: "M14.5 2c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5S20.33 7 19.5 7H16V3.5c0-.83-.67-1.5-1.5-1.5zM9.5 2C8.67 2 8 2.67 8 3.5V7H4.5C3.67 7 3 7.67 3 8.5S3.67 10 4.5 10h5c.83 0 1.5-.67 1.5-1.5v-5C11 2.67 10.33 2 9.5 2zM4.5 14c-.83 0-1.5.67-1.5 1.5S3.67 17 4.5 17H8v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5zm10 0c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V17h3.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-5z",
        color: "#E01E5A",
        bgColor: "bg-pink-50",
      },
      {
        title: "Google Calendar",
        description: "Connetti il tuo calendario e visualizza le riunioni con i link alla videochiamata.",
        icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        color: "#4285F4",
        bgColor: "bg-blue-50",
      },
      {
        title: "API Pubblica",
        description: "Accedi alle tue note da qualsiasi strumento con la tua chiave API.",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        color: "#18181b",
        bgColor: "bg-zinc-100",
      },
      {
        title: "MCP Server",
        description: "Connetti le tue note con Claude Desktop, ChatGPT o Cursor via IA.",
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        color: "#8b5cf6",
        bgColor: "bg-violet-50",
      },
    ],
  },
};

export default function Integrations() {
  const { locale } = useLanguage();
  const t = content[locale] ?? content.en;

  return (
    <section className="py-32 md:py-44 bg-background overflow-hidden animated-gradient-bg-cool section-float-bg-blue">
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

        <GsapStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
          {t.cards.map((card) => (
            <ScrollScale key={card.title}>
              <div className="group relative p-8 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-50/20 via-violet-50/10 to-transparent transition-opacity duration-500" />
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl ${card.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={card.color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d={card.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{card.description}</p>
                </div>
              </div>
            </ScrollScale>
          ))}
        </GsapStagger>
      </div>
    </section>
  );
}
