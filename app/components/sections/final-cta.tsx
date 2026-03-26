"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal } from "../gsap-effects";
import { useLanguage } from "../i18n/language-context";
import RotatingText from "../rotating-text";
import Waitlist from "../waitlist";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { s } = useLanguage();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    gsap.to(el.querySelectorAll(".cta-orb"), {
      scale: 1.3, opacity: 0.5, duration: 4,
      repeat: -1, yoyo: true, ease: "sine.inOut", stagger: 0.8,
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-white relative overflow-hidden">
      <div className="cta-orb absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-50/60 via-violet-50/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="cta-orb absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-l from-purple-50/50 via-pink-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-4xl mx-auto">
          <TextReveal tag="h2" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            {s("cta.title1")}
          </TextReveal>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mt-2 bg-gradient-to-r from-foreground via-zinc-500 to-zinc-400 bg-clip-text text-transparent">
            Start turning them into <RotatingText words={["progress", "action", "clarity", "results"]} className="text-zinc-400" />
          </TextReveal>
          <TextReveal tag="p" className="mt-8 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {s("cta.subtitle")}
          </TextReveal>
          <div className="mt-14 max-w-md mx-auto">
            <Waitlist variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
