"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  TextReveal,
  ScrollSlide,
  ScrollScale,
  GsapStagger,
  MagneticHover,
  ParallaxFloat,
} from "../components/gsap-effects";
import RotatingText from "../components/rotating-text";
import {
  ActionPlanMockup,
  ChecklistMockup,
  SummaryMockup,
  MessageMockup,
  StudyNotesMockup,
  TranscriptMockup,
  SpeakerBadges,
} from "../components/mockups";
import { MacBookFrame, IPhoneFrame, BrowserFrame } from "../components/devices";
import { useLanguage } from "../components/i18n/language-context";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Output Modes Section ─── */
function OutputModes() {
  const { s } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll(".mode-card");
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0, scale: 0.93 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.6, stagger: 0.06, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%", once: true },
      }
    );
  }, []);

  const modes = [
    { title: "Summary", desc: "Get a concise, clear overview of what was discussed — key points, context, and takeaways in one read." },
    { title: "Key Points", desc: "Extract the essential information — no fluff, no filler. Just the facts that matter." },
    { title: "Tasks", desc: "Automatically generate a checklist of action items, complete with owners when speakers are detected." },
    { title: "Action Plan", desc: "A structured, step-by-step plan derived from the conversation — who does what, by when." },
    { title: "Clean Text", desc: "Polished, readable text from raw audio. Filler words removed, grammar corrected, structure added." },
    { title: "Executive Report", desc: "Formal, presentation-ready document summarizing decisions, risks, and next steps." },
    { title: "Ready-to-Send Message", desc: "Draft follow-up emails or messages directly from conversations — ready to copy and send." },
    { title: "Study Notes", desc: "Organized by topic with key concepts highlighted — perfect for lectures, workshops, and learning." },
    { title: "Ideas", desc: "Capture and categorize brainstorming output — grouped by theme, ranked by potential." },
  ];

  return (
    <section id="outputs" className="py-32 md:py-44 bg-white section-float-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">{s("product.outputModes.label")}</span>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Nine ways to use every recording
          </TextReveal>
          <TextReveal tag="p" className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {s("product.outputModes.subtitle")}
          </TextReveal>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-5">
          {modes.map((mode) => (
            <div
              key={mode.title}
              className="mode-card group p-7 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-foreground group-hover:scale-150 transition-transform duration-300" />
                <h3 className="text-base font-semibold text-foreground">{mode.title}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{mode.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Speaker Detection Deep Dive ─── */
function SpeakerDeepDive() {
  const { s } = useLanguage();
  return (
    <section id="speakers" className="py-32 md:py-44 bg-background animated-gradient-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          <ScrollSlide direction="left" distance={100}>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-violet-100/40 via-indigo-50/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative">
                  <BrowserFrame url="app.sythio.com/transcript">
                    <TranscriptMockup />
                  </BrowserFrame>
                <div className="mt-5">
                  <SpeakerBadges />
                </div>
              </div>
            </div>
          </ScrollSlide>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">{s("product.speaker.label")}</span>
            <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              {s("product.speaker.title")}
            </TextReveal>
            <TextReveal tag="p" className="mt-7 text-lg md:text-xl text-muted leading-relaxed max-w-lg">
              {s("product.speaker.subtitle")}
            </TextReveal>
            <GsapStagger className="mt-10 space-y-4" stagger={0.1}>
              {[
                s("product.speaker.f1"),
                s("product.speaker.f2"),
                s("product.speaker.f3"),
                s("product.speaker.f4"),
                s("product.speaker.f5"),
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-foreground shrink-0" />
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

/* ─── Reuse Audio ─── */
function ReuseAudio() {
  const { s } = useLanguage();
  return (
    <section className="py-32 md:py-44 bg-white section-float-bg-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">{s("product.reuse.label")}</span>
            <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Record once. Transform endlessly.
            </TextReveal>
            <TextReveal tag="p" className="mt-7 text-lg md:text-xl text-muted leading-relaxed max-w-lg">
              {s("product.reuse.subtitle")}
            </TextReveal>
          </div>

          <ScrollSlide direction="right" distance={80}>
            <div className="space-y-5">
                <SummaryMockup />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-border shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.06)] p-5 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-foreground">Tasks</span>
                  </div>
                  <p className="text-xs text-muted">4 items extracted</p>
                </div>
                <div className="bg-white rounded-2xl border border-border shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.06)] p-5 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-violet-50 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-foreground">Message</span>
                  </div>
                  <p className="text-xs text-muted">Draft ready</p>
                </div>
              </div>
            </div>
          </ScrollSlide>
        </div>
      </div>
    </section>
  );
}

/* ─── Detailed Feature Cards with Device Frames ─── */
function DetailedFeatures() {
  const { s } = useLanguage();
  return (
    <section className="py-32 md:py-44 bg-background animated-gradient-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">{s("product.details.label")}</span>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {s("product.details.title")}
          </TextReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollSlide direction="left" distance={60}>
              <ChecklistMockup className="h-full" />
          </ScrollSlide>
          <ScrollSlide direction="right" distance={60}>
              <MessageMockup className="h-full" />
          </ScrollSlide>
          <ScrollSlide direction="left" distance={60}>
              <ActionPlanMockup className="h-full" />
          </ScrollSlide>
          <ScrollSlide direction="right" distance={60}>
              <StudyNotesMockup className="h-full" />
          </ScrollSlide>
        </div>

        {/* Full width MacBook showing dashboard */}
        <ScrollScale className="mt-20">
            <MacBookFrame>
              <div className="bg-background p-4 grid grid-cols-2 gap-4">
                <ChecklistMockup />
                <ActionPlanMockup />
              </div>
            </MacBookFrame>
        </ScrollScale>
      </div>
    </section>
  );
}

/* ─── Workflow ─── */
function Workflow() {
  const { s } = useLanguage();
  return (
    <section className="py-32 md:py-44 bg-white section-float-bg-green">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">{s("product.workflow.label")}</span>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {s("product.workflow.title")}
          </TextReveal>
          <TextReveal tag="p" className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {s("product.workflow.subtitle")}
          </TextReveal>
        </div>

        <GsapStagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
          {[
            { title: s("product.workflow.fast"), desc: s("product.workflow.fastDesc"), icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { title: s("product.workflow.exports"), desc: s("product.workflow.exportsDesc"), icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" },
            { title: s("product.workflow.library"), desc: s("product.workflow.libraryDesc"), icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
            { title: s("product.workflow.ux"), desc: s("product.workflow.uxDesc"), icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
          ].map((item) => (
            <ScrollScale key={item.title}>
              <div className="group p-8 rounded-3xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-white border border-border-light flex items-center justify-center mb-6 text-muted group-hover:text-foreground group-hover:border-border group-hover:shadow-sm transition-all duration-300">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            </ScrollScale>
          ))}
        </GsapStagger>

        {/* iPhone at bottom */}
        <ScrollScale className="mt-20 flex justify-center">
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
                  {["Client Call — 12:30", "Quick Note — 0:45", "Team Sync — 23:10"].map((item) => (
                    <div key={item} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-border-light">
                      <div className="w-2 h-2 rounded-full bg-indigo-400" />
                      <span className="text-[10px] text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </IPhoneFrame>
          </ParallaxFloat>
        </ScrollScale>
      </div>
    </section>
  );
}

/* ─── Product CTA ─── */
function ProductCTA() {
  const { s } = useLanguage();
  return (
    <section className="py-32 md:py-44 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto">
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {s("product.cta")}
          </TextReveal>
          <TextReveal tag="p" className="mt-7 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            {s("product.ctaSub")}
          </TextReveal>
          <div className="mt-14">
            <MagneticHover>
              <Link
                href="/pricing"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                Start Using Sythio
              </Link>
            </MagneticHover>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Product Page ─── */
export default function ProductPage() {
  const { s } = useLanguage();
  return (
    <>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-animated-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border-light mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-muted">{s("product.hero.label")}</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
            >
              Everything your audio <RotatingText words={["becomes", "creates", "unlocks", "reveals"]} className="text-zinc-400" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto"
            >
              Sythio transforms voice into structure. Record once, and get
              summaries, tasks, action plans, reports, and more — all from
              the same recording.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticHover>
                <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
                  Start Using Sythio
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">
                  Explore Features
                </Link>
              </MagneticHover>
            </motion.div>
          </div>

          {/* Hero visual — device frames */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <BrowserFrame url="app.sythio.com/dashboard">
              <div className="bg-background p-4 grid grid-cols-2 gap-4">
                <SummaryMockup />
                <ActionPlanMockup />
              </div>
            </BrowserFrame>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-4 -left-2 md:left-8 bg-white rounded-xl border border-border-light shadow-xl p-4 z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-foreground flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">9 output formats</p>
                  <p className="text-[10px] text-muted">From a single recording</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute -top-4 -right-2 md:right-8 bg-white rounded-xl border border-border-light shadow-xl p-4 z-10 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Processing complete</p>
                  <p className="text-[10px] text-muted">&lt; 30s average</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <OutputModes />
      <SpeakerDeepDive />
      <ReuseAudio />
      <DetailedFeatures />
      <Workflow />
      <ProductCTA />
    </>
  );
}
