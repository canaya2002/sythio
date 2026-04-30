"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal, SoundWave, FloatingBadge } from "../gsap-effects";
import { useLanguage } from "../i18n/language-context";
import type { Locale } from "../i18n/translations";
import RotatingText from "../rotating-text";
import Link from "next/link";
import { MagneticHover } from "../gsap-effects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const content: Record<Locale, {
  title2Prefix: string;
  rotatingWords: string[];
}> = {
  en: {
    title2Prefix: "Start turning them into ",
    rotatingWords: ["progress", "action", "clarity", "results"],
  },
  es: {
    title2Prefix: "Empieza a convertirlas en ",
    rotatingWords: ["progreso", "acción", "claridad", "resultados"],
  },
  fr: {
    title2Prefix: "Commencez à les transformer en ",
    rotatingWords: ["progrès", "action", "clarté", "résultats"],
  },
  pt: {
    title2Prefix: "Comece a transformá-las em ",
    rotatingWords: ["progresso", "ação", "clareza", "resultados"],
  },
  it: {
    title2Prefix: "Inizia a trasformarle in ",
    rotatingWords: ["progresso", "azione", "chiarezza", "risultati"],
  },
};

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { s, locale } = useLanguage();
  const c = content[locale] || content.en;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    gsap.to(el.querySelectorAll(".cta-orb"), {
      scale: 1.3, opacity: 0.5, duration: 4,
      repeat: -1, yoyo: true, ease: "sine.inOut", stagger: 0.8,
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-36 md:py-52 mesh-gradient relative overflow-hidden section-float-bg-rose">
      <div className="cta-orb absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-100/60 via-violet-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="cta-orb absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-l from-purple-100/50 via-pink-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="cta-orb absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-gradient-to-t from-blue-100/40 via-indigo-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Floating decorations */}
        <FloatingBadge delay={0.3} className="absolute left-8 top-8 hidden lg:block float-y-slow">
          <div className="glass-card rounded-xl px-4 py-2.5 relative">
            <SoundWave bars={18} color="#8b5cf6" />
          </div>
        </FloatingBadge>
        <FloatingBadge delay={0.6} className="absolute right-8 top-20 hidden lg:block float-y-medium">
          <div className="glass-card rounded-xl px-3 py-2 relative">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-50 to-violet-100 border border-indigo-100 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2" /></svg>
              </div>
              <span className="text-[10px] font-medium text-muted">Ready to record</span>
            </div>
          </div>
        </FloatingBadge>

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-70 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-500" />
            </span>
            <span className="text-xs font-medium text-muted tracking-wide">{s("common.freePlan")}</span>
          </div>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.025em] text-foreground leading-[1.08]">
            {s("cta.title1")}
          </TextReveal>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.025em] leading-[1.08] mt-2 gradient-text">
            {c.title2Prefix}<RotatingText words={c.rotatingWords} className="text-zinc-400" />
          </TextReveal>
          <TextReveal tag="p" className="mt-8 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {s("cta.subtitle")}
          </TextReveal>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticHover>
              <Link
                href="https://sythio.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-premium group h-14 px-10 inline-flex items-center justify-center rounded-full text-base font-medium"
              >
                {s("common.startUsingSythio")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </MagneticHover>
            <MagneticHover>
              <Link
                href="/product"
                className="btn-glass h-14 px-10 inline-flex items-center justify-center rounded-full text-foreground text-base font-medium"
              >
                {s("common.exploreProduct")}
              </Link>
            </MagneticHover>
          </div>
          <p className="mt-6 text-sm text-muted text-center">{s("common.freePlan")}</p>
        </div>
      </div>
    </section>
  );
}
