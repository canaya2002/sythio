"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal, FloatingBadge, SoundWave } from "../gsap-effects";
import RotatingText from "../rotating-text";
import { useLanguage } from "../i18n/language-context";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const icons = [
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
];

const gradients = [
  "from-indigo-500/10 to-violet-500/10",
  "from-violet-500/10 to-purple-500/10",
  "from-amber-500/10 to-orange-500/10",
  "from-emerald-500/10 to-teal-500/10",
  "from-blue-500/10 to-indigo-500/10",
  "from-pink-500/10 to-rose-500/10",
];

const content: Record<string, {
  sectionLabel: string;
  heading: string;
  rotatingWords: string[];
  subtitle: string;
  cases: { title: string; description: string }[];
}> = {
  en: {
    sectionLabel: "Use cases",
    heading: "Built for how you actually ",
    rotatingWords: ["work", "think", "create", "learn"],
    subtitle: "Whether it\u2019s a team meeting or a solo idea, Sythio turns every audio moment into structured progress.",
    cases: [
      { title: "Meetings", description: "Turn every meeting into clear summaries, decisions, and assigned action items." },
      { title: "Voice notes", description: "Capture fleeting thoughts and turn them into organized, usable text instantly." },
      { title: "Brainstorming", description: "Let ideas flow freely, then get them back as structured, categorized concepts." },
      { title: "Client calls", description: "Document client conversations with full context, agreements, and follow-ups." },
      { title: "Study sessions", description: "Transform lectures and study audio into organized notes and key takeaways." },
      { title: "Follow-ups", description: "Generate ready-to-send messages and recap emails directly from conversations." },
    ],
  },
  es: {
    sectionLabel: "Casos de uso",
    heading: "Dise\u00f1ado para c\u00f3mo realmente ",
    rotatingWords: ["trabajas", "piensas", "creas", "aprendes"],
    subtitle: "Ya sea una reuni\u00f3n de equipo o una idea en solitario, Sythio convierte cada momento de audio en progreso estructurado.",
    cases: [
      { title: "Reuniones", description: "Convierte cada reuni\u00f3n en res\u00famenes claros, decisiones y tareas asignadas." },
      { title: "Notas de voz", description: "Captura pensamientos fugaces y transf\u00f3rmalos en texto organizado y \u00fatil al instante." },
      { title: "Lluvia de ideas", description: "Deja que las ideas fluyan libremente y recu\u00e9ralas como conceptos estructurados y categorizados." },
      { title: "Llamadas con clientes", description: "Documenta conversaciones con clientes con todo el contexto, acuerdos y seguimientos." },
      { title: "Sesiones de estudio", description: "Transforma clases y audio de estudio en apuntes organizados y puntos clave." },
      { title: "Seguimientos", description: "Genera mensajes listos para enviar y correos de resumen directamente de las conversaciones." },
    ],
  },
  fr: {
    sectionLabel: "Cas d\u2019utilisation",
    heading: "Con\u00e7u pour votre fa\u00e7on de ",
    rotatingWords: ["travailler", "penser", "cr\u00e9er", "apprendre"],
    subtitle: "Qu\u2019il s\u2019agisse d\u2019une r\u00e9union d\u2019\u00e9quipe ou d\u2019une id\u00e9e personnelle, Sythio transforme chaque moment audio en progr\u00e8s structur\u00e9.",
    cases: [
      { title: "R\u00e9unions", description: "Transformez chaque r\u00e9union en r\u00e9sum\u00e9s clairs, d\u00e9cisions et actions assign\u00e9es." },
      { title: "Notes vocales", description: "Capturez vos pens\u00e9es fugaces et transformez-les en texte organis\u00e9 et exploitable instantan\u00e9ment." },
      { title: "Brainstorming", description: "Laissez les id\u00e9es couler librement, puis retrouvez-les sous forme de concepts structur\u00e9s et cat\u00e9goris\u00e9s." },
      { title: "Appels clients", description: "Documentez les conversations clients avec tout le contexte, les accords et les suivis." },
      { title: "Sessions d\u2019\u00e9tude", description: "Transformez cours et audio d\u2019\u00e9tude en notes organis\u00e9es et points cl\u00e9s." },
      { title: "Suivis", description: "G\u00e9n\u00e9rez des messages pr\u00eats \u00e0 envoyer et des e-mails de r\u00e9cap directement \u00e0 partir des conversations." },
    ],
  },
  pt: {
    sectionLabel: "Casos de uso",
    heading: "Feito para como voc\u00ea realmente ",
    rotatingWords: ["trabalha", "pensa", "cria", "aprende"],
    subtitle: "Seja uma reuni\u00e3o de equipe ou uma ideia solo, o Sythio transforma cada momento de \u00e1udio em progresso estruturado.",
    cases: [
      { title: "Reuni\u00f5es", description: "Transforme cada reuni\u00e3o em resumos claros, decis\u00f5es e tarefas atribu\u00eddas." },
      { title: "Notas de voz", description: "Capture pensamentos fugazes e transforme-os em texto organizado e \u00fatil instantaneamente." },
      { title: "Brainstorming", description: "Deixe as ideias fluírem livremente e receba-as de volta como conceitos estruturados e categorizados." },
      { title: "Chamadas com clientes", description: "Documente conversas com clientes com todo o contexto, acordos e acompanhamentos." },
      { title: "Sess\u00f5es de estudo", description: "Transforme aulas e \u00e1udio de estudo em notas organizadas e pontos-chave." },
      { title: "Acompanhamentos", description: "Gere mensagens prontas para enviar e e-mails de resumo diretamente das conversas." },
    ],
  },
  it: {
    sectionLabel: "Casi d\u2019uso",
    heading: "Progettato per come realmente ",
    rotatingWords: ["lavori", "pensi", "crei", "impari"],
    subtitle: "Che si tratti di una riunione di team o di un\u2019idea personale, Sythio trasforma ogni momento audio in progresso strutturato.",
    cases: [
      { title: "Riunioni", description: "Trasforma ogni riunione in riassunti chiari, decisioni e azioni assegnate." },
      { title: "Note vocali", description: "Cattura pensieri fugaci e trasformali in testo organizzato e utilizzabile all\u2019istante." },
      { title: "Brainstorming", description: "Lascia che le idee fluiscano liberamente, poi recuperale come concetti strutturati e categorizzati." },
      { title: "Chiamate con clienti", description: "Documenta le conversazioni con i clienti con tutto il contesto, gli accordi e i follow-up." },
      { title: "Sessioni di studio", description: "Trasforma lezioni e audio di studio in appunti organizzati e punti chiave." },
      { title: "Follow-up", description: "Genera messaggi pronti da inviare ed e-mail di riepilogo direttamente dalle conversazioni." },
    ],
  },
};

export default function UseCases() {
  const gridRef = useRef<HTMLDivElement>(null);
  const { locale } = useLanguage();
  const c = content[locale] || content.en;

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".usecase-card");
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0, rotateX: 8 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 78%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className="py-32 md:py-44 bg-white animated-gradient-bg-warm section-float-bg-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
            {c.sectionLabel}
          </span>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {c.heading}<RotatingText words={c.rotatingWords} className="text-zinc-400" />
          </TextReveal>
          <TextReveal tag="p" className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {c.subtitle}
          </TextReveal>
        </div>

        <div className="relative mb-4">
          <FloatingBadge delay={0.2} className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 hidden md:block float-y-slow">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-border-light shadow-lg px-4 py-2 flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <SoundWave bars={16} color="#f59e0b" />
            </div>
          </FloatingBadge>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.cases.map((useCase, i) => (
            <div
              key={useCase.title}
              className="usecase-card group relative p-8 rounded-3xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
            >
              {/* Color gradient on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white border border-border-light flex items-center justify-center mb-6 text-muted group-hover:text-foreground group-hover:border-border group-hover:shadow-sm transition-all duration-300">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icons[i]} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {useCase.title}
                </h3>
                <p className="text-base text-muted leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
