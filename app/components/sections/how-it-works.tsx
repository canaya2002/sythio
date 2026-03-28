"use client";

import { TextReveal, GsapStagger, ScrollScale } from "../gsap-effects";
import RotatingText from "../rotating-text";
import { useLanguage } from "../i18n/language-context";

const content: Record<string, {
  label: string;
  headingPrefix: string;
  rotatingWords: string[];
  subtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
}> = {
  en: {
    label: "How it works",
    headingPrefix: "Three steps to ",
    rotatingWords: ["clarity", "action", "structure", "progress"],
    subtitle: "No complex setup. No learning curve. Record, process, use.",
    step1Title: "Record or upload",
    step1Desc: "Capture audio directly or upload a recording. Meetings, notes, lectures — anything goes.",
    step2Title: "Sythio understands",
    step2Desc: "The audio is analyzed in context. Speakers are detected. Meaning is extracted. Structure emerges.",
    step3Title: "Get useful output",
    step3Desc: "Choose what you need — summaries, tasks, action plans, reports, messages. One audio, many outcomes.",
  },
  es: {
    label: "Cómo funciona",
    headingPrefix: "Tres pasos hacia la ",
    rotatingWords: ["claridad", "acción", "estructura", "productividad"],
    subtitle: "Sin configuraciones complejas. Sin curva de aprendizaje. Graba, procesa, usa.",
    step1Title: "Graba o sube",
    step1Desc: "Captura audio directamente o sube una grabación. Reuniones, notas, clases — todo vale.",
    step2Title: "Sythio comprende",
    step2Desc: "El audio se analiza en contexto. Se detectan los hablantes. Se extrae el significado. Surge la estructura.",
    step3Title: "Obtén resultados útiles",
    step3Desc: "Elige lo que necesitas — resúmenes, tareas, planes de acción, informes, mensajes. Un audio, muchos resultados.",
  },
  fr: {
    label: "Comment ça marche",
    headingPrefix: "Trois étapes vers la ",
    rotatingWords: ["clarté", "action", "structure", "productivité"],
    subtitle: "Pas de configuration complexe. Pas de courbe d'apprentissage. Enregistrez, traitez, utilisez.",
    step1Title: "Enregistrez ou importez",
    step1Desc: "Capturez l'audio directement ou importez un enregistrement. Réunions, notes, cours — tout est possible.",
    step2Title: "Sythio comprend",
    step2Desc: "L'audio est analysé en contexte. Les intervenants sont détectés. Le sens est extrait. La structure émerge.",
    step3Title: "Obtenez des résultats utiles",
    step3Desc: "Choisissez ce dont vous avez besoin — résumés, tâches, plans d'action, rapports, messages. Un audio, de multiples résultats.",
  },
  pt: {
    label: "Como funciona",
    headingPrefix: "Três passos para a ",
    rotatingWords: ["clareza", "ação", "estrutura", "produtividade"],
    subtitle: "Sem configuração complexa. Sem curva de aprendizado. Grave, processe, use.",
    step1Title: "Grave ou envie",
    step1Desc: "Capture áudio diretamente ou envie uma gravação. Reuniões, anotações, aulas — vale tudo.",
    step2Title: "Sythio compreende",
    step2Desc: "O áudio é analisado em contexto. Os falantes são detectados. O significado é extraído. A estrutura emerge.",
    step3Title: "Obtenha resultados úteis",
    step3Desc: "Escolha o que precisa — resumos, tarefas, planos de ação, relatórios, mensagens. Um áudio, muitos resultados.",
  },
  it: {
    label: "Come funziona",
    headingPrefix: "Tre passi verso la ",
    rotatingWords: ["chiarezza", "azione", "struttura", "produttività"],
    subtitle: "Nessuna configurazione complessa. Nessuna curva di apprendimento. Registra, elabora, usa.",
    step1Title: "Registra o carica",
    step1Desc: "Cattura l'audio direttamente o carica una registrazione. Riunioni, appunti, lezioni — tutto è possibile.",
    step2Title: "Sythio comprende",
    step2Desc: "L'audio viene analizzato nel contesto. I parlanti vengono rilevati. Il significato viene estratto. La struttura emerge.",
    step3Title: "Ottieni risultati utili",
    step3Desc: "Scegli ciò che ti serve — riassunti, attività, piani d'azione, report, messaggi. Un audio, molteplici risultati.",
  },
};

export default function HowItWorks() {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;

  const steps = [
    {
      number: "01",
      title: c.step1Title,
      description: c.step1Desc,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
          <path d="M19 10v2a7 7 0 01-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      ),
    },
    {
      number: "02",
      title: c.step2Title,
      description: c.step2Desc,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: c.step3Title,
      description: c.step3Desc,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-32 md:py-44 bg-background animated-gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
            {c.label}
          </span>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {c.headingPrefix}<RotatingText words={c.rotatingWords} className="text-zinc-400" />
          </TextReveal>
          <TextReveal tag="p" className="mt-6 text-lg md:text-xl text-muted max-w-lg mx-auto leading-relaxed">
            {c.subtitle}
          </TextReveal>
        </div>

        <GsapStagger className="grid md:grid-cols-3 gap-8" stagger={0.15}>
          {steps.map((step) => (
            <ScrollScale key={step.number}>
              <div className="group relative p-10 rounded-3xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-50/0 via-violet-50/0 to-purple-50/0 group-hover:from-indigo-50/30 group-hover:via-violet-50/20 group-hover:to-purple-50/10 transition-all duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-background border border-border-light flex items-center justify-center text-muted group-hover:text-foreground group-hover:border-border group-hover:shadow-sm transition-all duration-300">
                      {step.icon}
                    </div>
                    <span className="text-sm font-mono font-semibold text-muted-light tracking-wider">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollScale>
          ))}
        </GsapStagger>
      </div>
    </section>
  );
}
