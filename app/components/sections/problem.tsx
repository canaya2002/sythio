"use client";

import { ScrollSlide, TextReveal, GsapStagger, FloatingBadge, SoundWave } from "../gsap-effects";
import RotatingText from "../rotating-text";
import { useLanguage } from "../i18n/language-context";

const content: Record<string, {
  sectionLabel: string;
  heading: string;
  rotatingWords: string[];
  paragraph1: string;
  paragraph2: string;
  withoutTitle: string;
  withoutItems: string[];
  withTitle: string;
  withItems: string[];
}> = {
  en: {
    sectionLabel: "The problem",
    heading: "Your voice notes are going ",
    rotatingWords: ["nowhere", "unheard", "forgotten", "wasted"],
    paragraph1: "You record a meeting. You capture an idea. You leave yourself a reminder. Then it sits there — unlistened, unstructured, forgotten.",
    paragraph2: "Sythio changes that. Every word you speak becomes something you can actually use.",
    withoutTitle: "Without Sythio",
    withoutItems: [
      "47 unplayed recordings",
      "No idea what was discussed",
      "Action items forgotten",
      "Key decisions lost forever",
    ],
    withTitle: "With Sythio",
    withItems: [
      "Clear summaries of every conversation",
      "Tasks assigned with owners",
      "Decisions documented automatically",
      "Ready-to-share reports and follow-ups",
    ],
  },
  es: {
    sectionLabel: "El problema",
    heading: "Tus notas de voz van ",
    rotatingWords: ["a ninguna parte", "sin escuchar", "al olvido", "desperdiciadas"],
    paragraph1: "Grabas una reunión. Capturas una idea. Te dejas un recordatorio. Y ahí se queda — sin escuchar, sin estructura, olvidado.",
    paragraph2: "Sythio cambia eso. Cada palabra que dices se convierte en algo que realmente puedes usar.",
    withoutTitle: "Sin Sythio",
    withoutItems: [
      "47 grabaciones sin reproducir",
      "Sin idea de lo que se habló",
      "Tareas pendientes olvidadas",
      "Decisiones clave perdidas para siempre",
    ],
    withTitle: "Con Sythio",
    withItems: [
      "Resúmenes claros de cada conversación",
      "Tareas asignadas con responsables",
      "Decisiones documentadas automáticamente",
      "Informes y seguimientos listos para compartir",
    ],
  },
  fr: {
    sectionLabel: "Le problème",
    heading: "Vos notes vocales finissent ",
    rotatingWords: ["nulle part", "ignorées", "oubliées", "gaspillées"],
    paragraph1: "Vous enregistrez une réunion. Vous capturez une idée. Vous vous laissez un rappel. Puis tout reste là — non écouté, non structuré, oublié.",
    paragraph2: "Sythio change la donne. Chaque mot que vous prononcez devient quelque chose de réellement exploitable.",
    withoutTitle: "Sans Sythio",
    withoutItems: [
      "47 enregistrements jamais écoutés",
      "Aucune idée de ce qui a été dit",
      "Actions à mener oubliées",
      "Décisions clés perdues à jamais",
    ],
    withTitle: "Avec Sythio",
    withItems: [
      "Des résumés clairs de chaque conversation",
      "Des tâches attribuées avec leurs responsables",
      "Des décisions documentées automatiquement",
      "Des rapports et suivis prêts à partager",
    ],
  },
  pt: {
    sectionLabel: "O problema",
    heading: "Suas notas de voz estão indo ",
    rotatingWords: ["a lugar nenhum", "sem ouvir", "ao esquecimento", "desperdiçadas"],
    paragraph1: "Você grava uma reunião. Captura uma ideia. Deixa um lembrete para si mesmo. E tudo fica ali — sem ouvir, sem estrutura, esquecido.",
    paragraph2: "Sythio muda isso. Cada palavra que você fala se transforma em algo que você realmente pode usar.",
    withoutTitle: "Sem Sythio",
    withoutItems: [
      "47 gravações nunca reproduzidas",
      "Sem ideia do que foi discutido",
      "Tarefas pendentes esquecidas",
      "Decisões importantes perdidas para sempre",
    ],
    withTitle: "Com Sythio",
    withItems: [
      "Resumos claros de cada conversa",
      "Tarefas atribuídas com responsáveis",
      "Decisões documentadas automaticamente",
      "Relatórios e acompanhamentos prontos para compartilhar",
    ],
  },
  it: {
    sectionLabel: "Il problema",
    heading: "Le tue note vocali finiscono ",
    rotatingWords: ["nel nulla", "inascoltate", "dimenticate", "sprecate"],
    paragraph1: "Registri una riunione. Catturi un'idea. Ti lasci un promemoria. Poi resta tutto lì — mai riascoltato, non strutturato, dimenticato.",
    paragraph2: "Sythio cambia tutto questo. Ogni parola che pronunci diventa qualcosa che puoi davvero utilizzare.",
    withoutTitle: "Senza Sythio",
    withoutItems: [
      "47 registrazioni mai ascoltate",
      "Nessuna idea di cosa sia stato discusso",
      "Azioni da completare dimenticate",
      "Decisioni chiave perse per sempre",
    ],
    withTitle: "Con Sythio",
    withItems: [
      "Riassunti chiari di ogni conversazione",
      "Attività assegnate con responsabili",
      "Decisioni documentate automaticamente",
      "Report e follow-up pronti da condividere",
    ],
  },
};

export default function Problem() {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;

  return (
    <section className="py-32 md:py-44 bg-white section-float-bg noise-overlay">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Text */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-light mb-5 block">
              {c.sectionLabel}
            </span>
            <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.025em] text-foreground leading-[1.1]">
              {c.heading}<RotatingText words={c.rotatingWords} className="text-zinc-400" />
            </TextReveal>
            <TextReveal tag="p" className="mt-7 text-lg md:text-xl text-muted leading-relaxed max-w-lg">
              {c.paragraph1}
            </TextReveal>
            <TextReveal tag="p" className="mt-4 text-lg md:text-xl text-muted leading-relaxed max-w-lg">
              {c.paragraph2}
            </TextReveal>
          </div>

          {/* Visual — before/after */}
          <ScrollSlide direction="right" distance={100}>
            <div className="space-y-5 relative">
              {/* Floating sound wave badge */}
              <FloatingBadge delay={0.6} className="absolute -right-6 -top-6 z-10 hidden lg:block float-y-medium">
                <div className="bg-white rounded-xl border border-border-light shadow-lg px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-red-50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    </div>
                    <span className="text-[10px] font-semibold text-muted">Recording...</span>
                  </div>
                  <SoundWave bars={20} className="mt-1.5" color="#f87171" />
                </div>
              </FloatingBadge>
              {/* Before */}
              <div className="relative p-7 rounded-2xl bg-background border border-border-light hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M15 9l-6 6M9 9l6 6" />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-foreground">{c.withoutTitle}</span>
                </div>
                <GsapStagger stagger={0.08}>
                  {c.withoutItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-1.5 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-300 shrink-0" />
                      {item}
                    </div>
                  ))}
                </GsapStagger>
              </div>

              {/* After */}
              <div className="relative p-7 rounded-2xl bg-foreground text-white border border-zinc-700 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-white">{c.withTitle}</span>
                </div>
                <GsapStagger stagger={0.08}>
                  {c.withItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-1.5 text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </GsapStagger>
              </div>
            </div>
          </ScrollSlide>
        </div>
      </div>
    </section>
  );
}
