"use client";

import { ScrollSlide, TextReveal, GsapStagger } from "../gsap-effects";
import RotatingText from "../rotating-text";

export default function Problem() {
  return (
    <section className="py-32 md:py-44 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
              The problem
            </span>
            <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Your voice notes are going <RotatingText words={["nowhere", "unheard", "forgotten", "wasted"]} className="text-zinc-400" />.
            </TextReveal>
            <TextReveal tag="p" className="mt-7 text-lg md:text-xl text-muted leading-relaxed max-w-lg">
              You record a meeting. You capture an idea. You leave yourself a reminder.
              Then it sits there — unlistened, unstructured, forgotten.
            </TextReveal>
            <TextReveal tag="p" className="mt-4 text-lg md:text-xl text-muted leading-relaxed max-w-lg">
              Sythio changes that. Every word you speak becomes something you can
              actually use.
            </TextReveal>
          </div>

          {/* Visual — before/after */}
          <ScrollSlide direction="right" distance={100}>
            <div className="space-y-5">
              {/* Before */}
              <div className="relative p-7 rounded-2xl bg-background border border-border-light hover:shadow-lg transition-shadow duration-500">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M15 9l-6 6M9 9l6 6" />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-foreground">Without Sythio</span>
                </div>
                <GsapStagger stagger={0.08}>
                  {["47 unplayed recordings", "No idea what was discussed", "Action items forgotten", "Key decisions lost forever"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-1.5 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-300 shrink-0" />
                      {item}
                    </div>
                  ))}
                </GsapStagger>
              </div>

              {/* After */}
              <div className="relative p-7 rounded-2xl bg-foreground text-white border border-zinc-700 hover:shadow-2xl transition-shadow duration-500">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-white">With Sythio</span>
                </div>
                <GsapStagger stagger={0.08}>
                  {["Clear summaries of every conversation", "Tasks assigned with owners", "Decisions documented automatically", "Ready-to-share reports and follow-ups"].map((item, i) => (
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
