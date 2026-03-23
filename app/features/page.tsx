"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../components/i18n/language-context";
import {
  TextReveal,
  ScrollSlide,
  ScrollScale,
  GsapStagger,
  TiltCard,
  MagneticHover,
  ParallaxFloat,
  PageReveal,
} from "../components/gsap-effects";
import {
  TranscriptMockup,
  ActionPlanMockup,
  SummaryMockup,
  ChecklistMockup,
  MessageMockup,
  StudyNotesMockup,
  SpeakerBadges,
} from "../components/mockups";
import { BrowserFrame, IPhoneFrame } from "../components/devices";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Feature definitions ─── */
const features = [
  {
    title: "Summaries",
    desc: "Concise overview of what was discussed. Key points, context, and takeaways in one clear read.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    color: "from-blue-50 to-indigo-50",
    accent: "#6366f1",
  },
  {
    title: "Tasks",
    desc: "Automatically extract action items with owners. Every commitment captured, every deadline noted.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    color: "from-emerald-50 to-green-50",
    accent: "#22c55e",
  },
  {
    title: "Action Plans",
    desc: "Structured step-by-step plans derived from conversations. Who does what, by when, toward what goal.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "from-violet-50 to-purple-50",
    accent: "#8b5cf6",
  },
  {
    title: "Speaker Detection",
    desc: "Know who said what. Multi-speaker conversations understood, attributed, and organized by person.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    color: "from-amber-50 to-yellow-50",
    accent: "#f59e0b",
  },
  {
    title: "Clean Text",
    desc: "Polished, readable text from raw audio. Filler words removed, grammar corrected, structure added.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    color: "from-sky-50 to-cyan-50",
    accent: "#0ea5e9",
  },
  {
    title: "Executive Reports",
    desc: "Formal, presentation-ready documents. Decisions, risks, and next steps in professional format.",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 01-2 2h-2z",
    color: "from-rose-50 to-pink-50",
    accent: "#f43f5e",
  },
  {
    title: "Messages",
    desc: "Draft follow-up emails and messages directly from conversations. Ready to copy, paste, and send.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "from-teal-50 to-emerald-50",
    accent: "#14b8a6",
  },
  {
    title: "Study Notes",
    desc: "Organized by topic with key concepts highlighted. Perfect for lectures, workshops, and learning sessions.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    color: "from-orange-50 to-amber-50",
    accent: "#f97316",
  },
  {
    title: "Ideas",
    desc: "Capture and categorize brainstorming output. Grouped by theme, ranked by potential, ready to act on.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    color: "from-fuchsia-50 to-pink-50",
    accent: "#d946ef",
  },
  {
    title: "Exports",
    desc: "Copy, share, or export in any format. PDF, text, clipboard, or direct integrations with your tools.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
    color: "from-indigo-50 to-blue-50",
    accent: "#6366f1",
  },
  {
    title: "Searchable History",
    desc: "All recordings organized and searchable. Find any conversation, any insight, at any time.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    color: "from-zinc-50 to-gray-100",
    accent: "#71717a",
  },
];

/* ─── Feature Grid with staggered animation ─── */
function FeatureGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll(".feat-card");
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0, scale: 0.93 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
      }
    );
  }, []);

  return (
    <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((feat) => (
        <div
          key={feat.title}
          className="feat-card group p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500"
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-sm"
            style={{ background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}
          >
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feat.color} flex items-center justify-center`}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke={feat.accent}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={feat.icon} />
              </svg>
            </div>
          </div>
          <h3 className="text-base font-semibold text-foreground mb-2">{feat.title}</h3>
          <p className="text-sm text-muted leading-relaxed">{feat.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Speaker Detection Highlight ─── */
function SpeakerHighlight() {
  return (
    <section className="py-32 md:py-44 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          <ScrollSlide direction="left" distance={100}>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-violet-100/40 via-indigo-50/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative">
                <TiltCard>
                  <BrowserFrame url="app.sythio.com/transcript">
                    <TranscriptMockup />
                  </BrowserFrame>
                </TiltCard>
                <div className="mt-5">
                  <SpeakerBadges />
                </div>
              </div>
            </div>
          </ScrollSlide>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
              Speaker intelligence
            </span>
            <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Every voice identified.
            </TextReveal>
            <TextReveal tag="p" className="mt-7 text-lg md:text-xl text-muted leading-relaxed max-w-lg">
              Sythio&apos;s speaker detection goes beyond labeling. It understands
              conversation dynamics — who proposed, who agreed, who owns the next step.
            </TextReveal>
            <GsapStagger className="mt-10 space-y-4" stagger={0.1}>
              {[
                "Automatic speaker identification across recordings",
                "Rename speakers for personalized outputs",
                "Speaker-aware summaries with clear attribution",
                "Responsibility tracking — who committed to what",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">{item}</span>
                </div>
              ))}
            </GsapStagger>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Output Showcase with Mockups ─── */
function OutputShowcase() {
  return (
    <section className="py-32 md:py-44 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
            Output formats
          </span>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            See what Sythio produces
          </TextReveal>
          <TextReveal tag="p" className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Every output is ready to use. Copy, export, or share — instantly.
          </TextReveal>
        </div>

        {/* Two column mockups */}
        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollSlide direction="left" distance={60}>
            <TiltCard>
              <SummaryMockup className="h-full" />
            </TiltCard>
          </ScrollSlide>
          <ScrollSlide direction="right" distance={60}>
            <TiltCard>
              <ActionPlanMockup className="h-full" />
            </TiltCard>
          </ScrollSlide>
          <ScrollSlide direction="left" distance={60}>
            <TiltCard>
              <ChecklistMockup className="h-full" />
            </TiltCard>
          </ScrollSlide>
          <ScrollSlide direction="right" distance={60}>
            <TiltCard>
              <MessageMockup className="h-full" />
            </TiltCard>
          </ScrollSlide>
        </div>

        {/* Study Notes full width */}
        <ScrollScale className="mt-8">
          <TiltCard>
            <StudyNotesMockup />
          </TiltCard>
        </ScrollScale>
      </div>
    </section>
  );
}

/* ─── Mobile Experience ─── */
function MobileExperience() {
  return (
    <section className="py-32 md:py-44 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
              Works everywhere
            </span>
            <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Capture on the go.
            </TextReveal>
            <TextReveal tag="p" className="mt-7 text-lg md:text-xl text-muted leading-relaxed max-w-lg">
              Record on your phone, process in seconds, and get structured outputs
              wherever you are. The full Sythio experience, in your pocket.
            </TextReveal>
            <GsapStagger className="mt-10 grid grid-cols-2 gap-4" stagger={0.08}>
              {[
                { label: "Fast processing", desc: "Seconds, not minutes" },
                { label: "All outputs", desc: "9 format options" },
                { label: "Offline recording", desc: "Process when connected" },
                { label: "Clean exports", desc: "Share from anywhere" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-white border border-border-light">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted mt-1">{item.desc}</p>
                </div>
              ))}
            </GsapStagger>
          </div>

          <ScrollSlide direction="right" distance={80}>
            <div className="flex justify-center">
              <ParallaxFloat speed={0.08}>
                <IPhoneFrame>
                  <div className="bg-background p-4 min-h-[300px]">
                    <div className="bg-white rounded-xl border border-border-light p-3 mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-foreground to-accent-muted flex items-center justify-center">
                          <span className="text-[10px] font-bold text-white">S</span>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-foreground">Sythio</p>
                          <p className="text-[9px] text-muted">Your audio workspace</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {["Record", "Upload", "Library"].map((label) => (
                          <div key={label} className="flex-1 py-2 rounded-lg bg-background border border-border-light text-[9px] font-medium text-center text-muted">
                            {label}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {["Team Standup — 8:23", "Client Review — 31:05", "Quick Note — 0:45"].map((item) => (
                        <div key={item} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-border-light">
                          <div className="w-2 h-2 rounded-full bg-indigo-400" />
                          <span className="text-[10px] text-foreground font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </IPhoneFrame>
              </ParallaxFloat>
            </div>
          </ScrollSlide>
        </div>
      </div>
    </section>
  );
}

/* ─── Features CTA ─── */
function FeaturesCTA() {
  const { s } = useLanguage();

  return (
    <section className="py-32 md:py-44 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto">
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {s("cta.title1")}
            <br />
            {s("cta.title2")}
          </TextReveal>
          <TextReveal tag="p" className="mt-7 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {s("cta.subtitle")}
          </TextReveal>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticHover>
              <Link
                href="/pricing"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                {s("cta.button")}
              </Link>
            </MagneticHover>
            <Link
              href="/use-cases"
              className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-foreground text-base font-medium hover:bg-background transition-all duration-300"
            >
              {s("cta.button2")}
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-light">{s("cta.free")}</p>
        </div>
      </div>
    </section>
  );
}

/* ─── Features Page ─── */
export default function FeaturesPage() {
  const { s } = useLanguage();

  return (
    <PageReveal>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-indigo-50/40 via-violet-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
              {s("features.hero.label")}
            </span>
            <TextReveal tag="h1" className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
              {s("features.hero.title")}
            </TextReveal>
            <TextReveal tag="p" className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              {s("features.hero.subtitle")}
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <FeatureGrid />
        </div>
      </section>

      <SpeakerHighlight />
      <OutputShowcase />
      <MobileExperience />
      <FeaturesCTA />
    </PageReveal>
  );
}
