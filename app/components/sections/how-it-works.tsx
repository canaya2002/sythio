"use client";

import { TextReveal, GsapStagger, ScrollScale } from "../gsap-effects";
import RotatingText from "../rotating-text";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Record or upload",
      description:
        "Capture audio directly or upload a recording. Meetings, notes, lectures — anything goes.",
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
      title: "Sythio understands",
      description:
        "The audio is analyzed in context. Speakers are detected. Meaning is extracted. Structure emerges.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Get useful output",
      description:
        "Choose what you need — summaries, tasks, action plans, reports, messages. One audio, many outcomes.",
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
            How it works
          </span>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Three steps to <RotatingText words={["clarity", "action", "structure", "progress"]} className="text-zinc-400" />
          </TextReveal>
          <TextReveal tag="p" className="mt-6 text-lg md:text-xl text-muted max-w-lg mx-auto leading-relaxed">
            No complex setup. No learning curve. Record, process, use.
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
