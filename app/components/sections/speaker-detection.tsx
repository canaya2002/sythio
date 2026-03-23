"use client";

import { TextReveal, ScrollSlide, ScrollScale, ParallaxFloat } from "../gsap-effects";
import RotatingText from "../rotating-text";
import { SpeakerBadges } from "../mockups";
import { IPhoneFrame } from "../devices";

function SpeakerPhoneScreen() {
  return (
    <div className="bg-background pb-4">
      <div className="px-4 pt-3 pb-2">
        <h3 className="text-[13px] font-semibold text-foreground">Meeting transcript</h3>
        <p className="text-[9px] text-muted">3 speakers detected</p>
      </div>
      <div className="px-4 space-y-3">
        {[
          { speaker: "Alex", color: "#6366f1", text: "Let's go over the client feedback.", time: "0:00" },
          { speaker: "Maria", color: "#8b5cf6", text: "Main concern was export functionality.", time: "0:24" },
          { speaker: "Jordan", color: "#a78bfa", text: "I can prioritize that next sprint.", time: "0:51" },
          { speaker: "Alex", color: "#6366f1", text: "Great. Let's document the timeline.", time: "1:08" },
          { speaker: "Maria", color: "#8b5cf6", text: "I'll send the recap email today.", time: "1:32" },
        ].map((item, i) => (
          <div key={i} className="flex gap-2">
            <div
              className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white shrink-0"
              style={{ background: item.color }}
            >
              {item.speaker[0]}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[10px] font-semibold text-foreground">{item.speaker}</span>
                <span className="text-[8px] text-muted-light font-mono">{item.time}</span>
              </div>
              <p className="text-[10px] text-muted leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Speaker time bars */}
      <div className="px-4 mt-4 pt-3 border-t border-border-light">
        <p className="text-[9px] font-semibold text-muted-light uppercase tracking-wider mb-2">Speaking time</p>
        {[
          { name: "Alex", pct: 40, color: "#6366f1" },
          { name: "Maria", pct: 35, color: "#8b5cf6" },
          { name: "Jordan", pct: 25, color: "#a78bfa" },
        ].map((s) => (
          <div key={s.name} className="flex items-center gap-2 mb-1.5">
            <span className="text-[9px] text-muted w-10">{s.name}</span>
            <div className="flex-1 h-1.5 rounded-full bg-border-light overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
            </div>
            <span className="text-[8px] text-muted-light w-6 text-right">{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SpeakerDetection() {
  const features = [
    { title: "Automatic detection", description: "Identifies when different people are speaking — no setup required." },
    { title: "Speaker separation", description: "See exactly who said what. Every statement attributed to the right person." },
    { title: "Rename speakers", description: "Label speakers with real names for clearer outputs and better context." },
    { title: "Smarter outputs", description: "Summaries, tasks, and follow-ups organized by speaker — who agreed to what." },
  ];

  return (
    <section className="py-32 md:py-44 bg-background overflow-hidden animated-gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Visual */}
          <ScrollSlide direction="left" distance={100}>
            <div className="relative flex justify-center">
              {/* Background glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-violet-100/40 via-indigo-50/30 to-transparent rounded-full blur-3xl" />

              {/* iPhone */}
              <ParallaxFloat speed={0.1}>
                <IPhoneFrame>
                  <SpeakerPhoneScreen />
                </IPhoneFrame>
              </ParallaxFloat>

              {/* Floating speaker badges */}
              <div className="absolute -right-4 top-20 md:right-0">
                <SpeakerBadges className="flex-col" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -left-4 bottom-20 md:left-0 bg-white rounded-xl border border-border-light shadow-xl px-4 py-3">
                <p className="text-[10px] text-muted-light font-semibold uppercase tracking-wider mb-1">Accuracy</p>
                <p className="text-2xl font-bold text-foreground tracking-tight">98.4%</p>
                <p className="text-[10px] text-emerald-600 font-medium">Speaker identification</p>
              </div>
            </div>
          </ScrollSlide>

          {/* Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
              Speaker detection
            </span>
            <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Know who said <RotatingText words={["what", "when", "which", "everything"]} className="text-zinc-400" />.
            </TextReveal>
            <TextReveal tag="p" className="mt-7 text-lg md:text-xl text-muted leading-relaxed max-w-lg">
              Multi-speaker conversations are common. Sythio understands them.
              Every voice is identified, every statement attributed, every
              responsibility clearly assigned.
            </TextReveal>
            <div className="mt-12 space-y-6">
              {features.map((feature, i) => (
                <ScrollScale key={i}>
                  <div className="flex gap-4 group">
                    <div className="mt-1.5 w-6 h-6 rounded-full bg-foreground/5 border border-border-light flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-foreground group-hover:text-white transition-colors duration-300">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted leading-relaxed mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollScale>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
