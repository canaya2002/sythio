"use client";

import { TextReveal, ScrollSlide, AnimatedCounter, ScrollScale, FloatingBadge, SoundWave } from "../gsap-effects";
import { MacBookFrame, IPhoneFrame } from "../devices";
import { ActionPlanMockup, SummaryMockup } from "../mockups";
import RotatingText from "../rotating-text";
import { useLanguage } from "../i18n/language-context";

const content: Record<string, {
  sectionLabel: string;
  heading: string;
  rotatingWords: string[];
  subtitle: string;
  quickSummary: string;
  fromLabel: string;
  summaryText: string;
  keyDecisions: string;
  decisions: string[];
  shareBtn: string;
  exportBtn: string;
  stats: { value: number; suffix: string; prefix: string; label: string }[];
}> = {
  en: {
    sectionLabel: "The experience",
    heading: "Designed to feel ",
    rotatingWords: ["effortless", "natural", "seamless", "intuitive"],
    subtitle: "Sythio isn\u2019t built to impress with complexity. It\u2019s built to disappear into your workflow. Clean interface. Fast processing. Outputs that are genuinely useful.",
    quickSummary: "Quick Summary",
    fromLabel: "From: Sprint Planning \u00b7 3:42",
    summaryText: "The team agreed to focus on onboarding improvements this sprint. Alex handles UI redesign, Maria takes email sequence. Thursday sync to review progress.",
    keyDecisions: "Key Decisions",
    decisions: ["Onboarding is top priority", "Maria owns email copy", "Thursday sync planned"],
    shareBtn: "Share",
    exportBtn: "Export",
    stats: [
      { value: 30, suffix: "s", prefix: "< ", label: "Processing time" },
      { value: 9, suffix: "", prefix: "", label: "Output formats" },
      { value: 6, suffix: "", prefix: "", label: "Speakers supported" },
      { value: 1, suffix: "-click", prefix: "", label: "Export & share" },
    ],
  },
  es: {
    sectionLabel: "La experiencia",
    heading: "Dise\u00f1ado para sentirse ",
    rotatingWords: ["f\u00e1cil", "natural", "fluido", "intuitivo"],
    subtitle: "Sythio no est\u00e1 hecho para impresionar con complejidad. Est\u00e1 hecho para integrarse en tu flujo de trabajo. Interfaz limpia. Procesamiento r\u00e1pido. Resultados realmente \u00fatiles.",
    quickSummary: "Resumen r\u00e1pido",
    fromLabel: "De: Planificaci\u00f3n del sprint \u00b7 3:42",
    summaryText: "El equipo acord\u00f3 centrarse en mejoras de onboarding este sprint. Alex se encarga del redise\u00f1o de UI, Mar\u00eda de la secuencia de emails. Sincronizaci\u00f3n el jueves para revisar el progreso.",
    keyDecisions: "Decisiones clave",
    decisions: ["El onboarding es prioridad", "Mar\u00eda gestiona el copy de emails", "Sincronizaci\u00f3n el jueves planificada"],
    shareBtn: "Compartir",
    exportBtn: "Exportar",
    stats: [
      { value: 30, suffix: "s", prefix: "< ", label: "Tiempo de procesamiento" },
      { value: 9, suffix: "", prefix: "", label: "Formatos de salida" },
      { value: 6, suffix: "", prefix: "", label: "Hablantes soportados" },
      { value: 1, suffix: " clic", prefix: "", label: "Exportar y compartir" },
    ],
  },
  fr: {
    sectionLabel: "L\u2019exp\u00e9rience",
    heading: "Con\u00e7u pour sembler ",
    rotatingWords: ["sans effort", "naturel", "fluide", "intuitif"],
    subtitle: "Sythio n\u2019est pas con\u00e7u pour impressionner par sa complexit\u00e9. Il est con\u00e7u pour s\u2019int\u00e9grer \u00e0 votre flux de travail. Interface \u00e9pur\u00e9e. Traitement rapide. Des r\u00e9sultats v\u00e9ritablement utiles.",
    quickSummary: "R\u00e9sum\u00e9 rapide",
    fromLabel: "De : Planification du sprint \u00b7 3:42",
    summaryText: "L\u2019\u00e9quipe a convenu de se concentrer sur l\u2019am\u00e9lioration de l\u2019onboarding ce sprint. Alex s\u2019occupe du redesign UI, Maria de la s\u00e9quence d\u2019e-mails. Synchronisation jeudi pour examiner les progr\u00e8s.",
    keyDecisions: "D\u00e9cisions cl\u00e9s",
    decisions: ["L\u2019onboarding est la priorit\u00e9", "Maria g\u00e8re le texte des e-mails", "Synchronisation jeudi pr\u00e9vue"],
    shareBtn: "Partager",
    exportBtn: "Exporter",
    stats: [
      { value: 30, suffix: "s", prefix: "< ", label: "Temps de traitement" },
      { value: 9, suffix: "", prefix: "", label: "Formats de sortie" },
      { value: 6, suffix: "", prefix: "", label: "Locuteurs pris en charge" },
      { value: 1, suffix: " clic", prefix: "", label: "Exporter et partager" },
    ],
  },
  pt: {
    sectionLabel: "A experi\u00eancia",
    heading: "Projetado para parecer ",
    rotatingWords: ["sem esfor\u00e7o", "natural", "fluido", "intuitivo"],
    subtitle: "O Sythio n\u00e3o foi feito para impressionar com complexidade. Foi feito para se integrar ao seu fluxo de trabalho. Interface limpa. Processamento r\u00e1pido. Resultados genuinamente \u00fateis.",
    quickSummary: "Resumo r\u00e1pido",
    fromLabel: "De: Planejamento do sprint \u00b7 3:42",
    summaryText: "A equipe concordou em focar nas melhorias de onboarding neste sprint. Alex cuida do redesign da UI, Maria da sequ\u00eancia de e-mails. Sincroniza\u00e7\u00e3o na quinta para revisar o progresso.",
    keyDecisions: "Decis\u00f5es-chave",
    decisions: ["Onboarding \u00e9 prioridade m\u00e1xima", "Maria gerencia o texto dos e-mails", "Sincroniza\u00e7\u00e3o na quinta planejada"],
    shareBtn: "Compartilhar",
    exportBtn: "Exportar",
    stats: [
      { value: 30, suffix: "s", prefix: "< ", label: "Tempo de processamento" },
      { value: 9, suffix: "", prefix: "", label: "Formatos de sa\u00edda" },
      { value: 6, suffix: "", prefix: "", label: "Falantes suportados" },
      { value: 1, suffix: " clique", prefix: "", label: "Exportar e compartilhar" },
    ],
  },
  it: {
    sectionLabel: "L\u2019esperienza",
    heading: "Progettato per sembrare ",
    rotatingWords: ["semplice", "naturale", "fluido", "intuitivo"],
    subtitle: "Sythio non \u00e8 fatto per impressionare con la complessit\u00e0. \u00c8 fatto per integrarsi nel tuo flusso di lavoro. Interfaccia pulita. Elaborazione veloce. Risultati davvero utili.",
    quickSummary: "Riepilogo rapido",
    fromLabel: "Da: Pianificazione sprint \u00b7 3:42",
    summaryText: "Il team ha concordato di concentrarsi sui miglioramenti dell\u2019onboarding in questo sprint. Alex gestisce il redesign UI, Maria la sequenza e-mail. Sincronizzazione gioved\u00ec per verificare i progressi.",
    keyDecisions: "Decisioni chiave",
    decisions: ["L\u2019onboarding \u00e8 la priorit\u00e0", "Maria gestisce il testo delle e-mail", "Sincronizzazione gioved\u00ec pianificata"],
    shareBtn: "Condividi",
    exportBtn: "Esporta",
    stats: [
      { value: 30, suffix: "s", prefix: "< ", label: "Tempo di elaborazione" },
      { value: 9, suffix: "", prefix: "", label: "Formati di output" },
      { value: 6, suffix: "", prefix: "", label: "Speaker supportati" },
      { value: 1, suffix: " clic", prefix: "", label: "Esporta e condividi" },
    ],
  },
};

function DashboardScreen() {
  return (
    <div className="bg-background p-6">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="col-span-2">
          <SummaryMockup />
        </div>
        <div>
          <ActionPlanMockup />
        </div>
      </div>
    </div>
  );
}

function MobileOutputScreen({ c }: { c: typeof content.en }) {
  return (
    <div className="bg-background pb-4">
      <div className="px-4 pt-3 pb-2">
        <h3 className="text-[13px] font-semibold text-foreground">{c.quickSummary}</h3>
        <p className="text-[9px] text-muted">{c.fromLabel}</p>
      </div>
      <div className="px-4">
        <div className="bg-white rounded-xl border border-border-light p-3 mb-3">
          <p className="text-[10px] text-muted leading-relaxed">
            {c.summaryText}
          </p>
        </div>
        <p className="text-[9px] font-semibold text-foreground mb-2">{c.keyDecisions}</p>
        {c.decisions.map((item, i) => (
          <div key={i} className="flex items-center gap-2 mb-1.5">
            <div className="w-3.5 h-3.5 rounded bg-foreground flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="text-[10px] text-muted">{item}</span>
          </div>
        ))}
        <div className="mt-4 flex gap-2">
          <div className="flex-1 py-2 rounded-lg bg-foreground text-white text-[10px] font-medium text-center">
            {c.shareBtn}
          </div>
          <div className="flex-1 py-2 rounded-lg bg-white border border-border-light text-[10px] font-medium text-muted text-center">
            {c.exportBtn}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductExperience() {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;

  return (
    <section className="py-32 md:py-44 bg-background overflow-hidden animated-gradient-bg section-float-bg-green">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center mb-28">
          {/* Text */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-light mb-5 block">
              {c.sectionLabel}
            </span>
            <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.025em] text-foreground leading-[1.1]">
              {c.heading}<RotatingText words={c.rotatingWords} className="text-zinc-400" />
            </TextReveal>
            <TextReveal tag="p" className="mt-7 text-lg md:text-xl text-muted leading-relaxed max-w-lg">
              {c.subtitle}
            </TextReveal>

            <div className="mt-14 grid grid-cols-2 gap-8">
              {c.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </div>
                  <div className="text-sm text-muted-light mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* iPhone visual */}
          <ScrollSlide direction="right" distance={80}>
            <div className="flex justify-center relative">
                <IPhoneFrame>
                  <MobileOutputScreen c={c} />
                </IPhoneFrame>
                {/* Floating output badge */}
                <FloatingBadge delay={0.5} className="absolute -left-4 top-16 z-10 hidden lg:block float-y-medium">
                  <div className="bg-white rounded-xl border border-border-light shadow-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-emerald-50 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      </div>
                      <span className="text-[10px] font-semibold text-foreground">9 outputs ready</span>
                    </div>
                  </div>
                </FloatingBadge>
                {/* Floating wave */}
                <FloatingBadge delay={0.8} className="absolute -right-4 bottom-24 z-10 hidden lg:block float-y-slow">
                  <div className="bg-white rounded-lg border border-border-light shadow-lg px-3 py-2">
                    <SoundWave bars={10} color="#0a0a0a" />
                  </div>
                </FloatingBadge>
            </div>
          </ScrollSlide>
        </div>

        {/* Full MacBook showcase */}
        <ScrollScale>
            <MacBookFrame>
              <DashboardScreen />
            </MacBookFrame>
        </ScrollScale>
      </div>
    </section>
  );
}
