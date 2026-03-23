"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal } from "../gsap-effects";
import RotatingText from "../rotating-text";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useCases = [
  {
    title: "Meetings",
    description: "Turn every meeting into clear summaries, decisions, and assigned action items.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    gradient: "from-indigo-500/10 to-violet-500/10",
  },
  {
    title: "Voice notes",
    description: "Capture fleeting thoughts and turn them into organized, usable text instantly.",
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
    gradient: "from-violet-500/10 to-purple-500/10",
  },
  {
    title: "Brainstorming",
    description: "Let ideas flow freely, then get them back as structured, categorized concepts.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    gradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    title: "Client calls",
    description: "Document client conversations with full context, agreements, and follow-ups.",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "Study sessions",
    description: "Transform lectures and study audio into organized notes and key takeaways.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    title: "Follow-ups",
    description: "Generate ready-to-send messages and recap emails directly from conversations.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    gradient: "from-pink-500/10 to-rose-500/10",
  },
];

export default function UseCases() {
  const gridRef = useRef<HTMLDivElement>(null);

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
    <section className="py-32 md:py-44 bg-white animated-gradient-bg-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
            Use cases
          </span>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Built for how you actually <RotatingText words={["work", "think", "create", "learn"]} className="text-zinc-400" />
          </TextReveal>
          <TextReveal tag="p" className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Whether it&apos;s a team meeting or a solo idea, Sythio turns every
            audio moment into structured progress.
          </TextReveal>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="usecase-card group relative p-8 rounded-3xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
            >
              {/* Color gradient on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white border border-border-light flex items-center justify-center mb-6 text-muted group-hover:text-foreground group-hover:border-border group-hover:shadow-sm transition-all duration-300">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={useCase.icon} />
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
