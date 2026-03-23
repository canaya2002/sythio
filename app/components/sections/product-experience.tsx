"use client";

import { TextReveal, ScrollSlide, AnimatedCounter, ScrollScale } from "../gsap-effects";
import { MacBookFrame, IPhoneFrame } from "../devices";
import { ActionPlanMockup, SummaryMockup } from "../mockups";
import RotatingText from "../rotating-text";

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

function MobileOutputScreen() {
  return (
    <div className="bg-background pb-4">
      <div className="px-4 pt-3 pb-2">
        <h3 className="text-[13px] font-semibold text-foreground">Quick Summary</h3>
        <p className="text-[9px] text-muted">From: Sprint Planning · 3:42</p>
      </div>
      <div className="px-4">
        <div className="bg-white rounded-xl border border-border-light p-3 mb-3">
          <p className="text-[10px] text-muted leading-relaxed">
            The team agreed to focus on onboarding improvements this sprint.
            Alex handles UI redesign, Maria takes email sequence. Thursday sync
            to review progress.
          </p>
        </div>
        <p className="text-[9px] font-semibold text-foreground mb-2">Key Decisions</p>
        {["Onboarding is top priority", "Maria owns email copy", "Thursday sync planned"].map((item, i) => (
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
            Share
          </div>
          <div className="flex-1 py-2 rounded-lg bg-white border border-border-light text-[10px] font-medium text-muted text-center">
            Export
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductExperience() {
  return (
    <section className="py-32 md:py-44 bg-background overflow-hidden animated-gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center mb-28">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
              The experience
            </span>
            <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Designed to feel <RotatingText words={["effortless", "natural", "seamless", "intuitive"]} className="text-zinc-400" />.
            </TextReveal>
            <TextReveal tag="p" className="mt-7 text-lg md:text-xl text-muted leading-relaxed max-w-lg">
              Sythio isn&apos;t built to impress with complexity. It&apos;s built to
              disappear into your workflow. Clean interface. Fast processing.
              Outputs that are genuinely useful.
            </TextReveal>

            <div className="mt-14 grid grid-cols-2 gap-8">
              {[
                { value: 30, suffix: "s", prefix: "< ", label: "Processing time" },
                { value: 8, suffix: "+", prefix: "", label: "Output formats" },
                { value: 6, suffix: "", prefix: "", label: "Speakers supported" },
                { value: 1, suffix: "-click", prefix: "", label: "Export & share" },
              ].map((stat) => (
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
            <div className="flex justify-center">
                <IPhoneFrame>
                  <MobileOutputScreen />
                </IPhoneFrame>
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
