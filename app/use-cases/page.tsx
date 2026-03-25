"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../components/i18n/language-context";
import RotatingText from "../components/rotating-text";
import { motion } from "framer-motion";
import {
  TextReveal,
  GsapStagger,
  MagneticHover,
  PageReveal,
} from "../components/gsap-effects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Use case definitions ─── */
const useCases = [
  {
    titleKey: "usecases.meetings",
    descKey: "usecases.meetingsDesc",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    color: "#6366f1",
    bgColor: "from-indigo-50 to-violet-50",
    mockup: {
      label: "Meeting Summary",
      items: [
        { type: "heading", text: "Q4 Planning Meeting" },
        { type: "bullet", text: "Revenue targets agreed: $2.4M" },
        { type: "bullet", text: "New hire approved for engineering" },
        { type: "bullet", text: "Launch date moved to March 15" },
        { type: "task", text: "Alex: Prepare budget proposal by Friday" },
        { type: "task", text: "Maria: Schedule client demos" },
      ],
    },
  },
  {
    titleKey: "usecases.voiceNotes",
    descKey: "usecases.voiceNotesDesc",
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
    color: "#8b5cf6",
    bgColor: "from-violet-50 to-purple-50",
    mockup: {
      label: "Voice Note",
      items: [
        { type: "heading", text: "Product Idea: Smart Templates" },
        { type: "bullet", text: "Auto-detect meeting type" },
        { type: "bullet", text: "Suggest output format based on content" },
        { type: "bullet", text: "Learn user preferences over time" },
        { type: "idea", text: "Could integrate with calendar for context" },
      ],
    },
  },
  {
    titleKey: "usecases.brainstorming",
    descKey: "usecases.brainstormingDesc",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    color: "#f59e0b",
    bgColor: "from-amber-50 to-yellow-50",
    mockup: {
      label: "Brainstorm Output",
      items: [
        { type: "heading", text: "App Redesign Ideas" },
        { type: "category", text: "UX Improvements" },
        { type: "bullet", text: "Simplified onboarding flow" },
        { type: "bullet", text: "Dark mode support" },
        { type: "category", text: "New Features" },
        { type: "bullet", text: "Real-time collaboration" },
        { type: "bullet", text: "AI-powered suggestions" },
      ],
    },
  },
  {
    titleKey: "usecases.study",
    descKey: "usecases.studyDesc",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    color: "#f97316",
    bgColor: "from-orange-50 to-amber-50",
    mockup: {
      label: "Study Notes",
      items: [
        { type: "heading", text: "Behavioral Economics - Lecture 7" },
        { type: "key", text: "Key Concept: Loss aversion" },
        { type: "bullet", text: "People feel losses ~2x more than gains" },
        { type: "bullet", text: "Applies to pricing, negotiation, UX design" },
        { type: "key", text: "Key Concept: Anchoring effect" },
        { type: "bullet", text: "First number seen influences decisions" },
      ],
    },
  },
  {
    titleKey: "usecases.clientCalls",
    descKey: "usecases.clientCallsDesc",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    color: "#22c55e",
    bgColor: "from-emerald-50 to-green-50",
    mockup: {
      label: "Client Call Summary",
      items: [
        { type: "heading", text: "Acme Corp - Project Review" },
        { type: "bullet", text: "Client satisfied with Phase 1 delivery" },
        { type: "bullet", text: "Requested timeline extension for Phase 2" },
        { type: "task", text: "Send revised SOW by Wednesday" },
        { type: "task", text: "Schedule follow-up for next Tuesday" },
        { type: "bullet", text: "Budget increase approved: +15%" },
      ],
    },
  },
  {
    titleKey: "usecases.followUps",
    descKey: "usecases.followUpsDesc",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "#0ea5e9",
    bgColor: "from-sky-50 to-cyan-50",
    mockup: {
      label: "Follow-up Message",
      items: [
        { type: "heading", text: "Re: Project Kickoff Meeting" },
        { type: "bullet", text: "Hi team, thanks for the productive session." },
        { type: "bullet", text: "Attached: summary of decisions made" },
        { type: "task", text: "Action items assigned to each team lead" },
        { type: "bullet", text: "Next check-in: Thursday 2pm" },
        { type: "bullet", text: "Please confirm your deliverables by EOD." },
      ],
    },
  },
  {
    title: "Founder Brain Dumps",
    desc: "Record your stream of consciousness. Sythio structures your thoughts into organized ideas, priorities, and next steps.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "#d946ef",
    bgColor: "from-fuchsia-50 to-pink-50",
    mockup: {
      label: "Brain Dump Output",
      items: [
        { type: "heading", text: "Startup Strategy Notes" },
        { type: "category", text: "Product Direction" },
        { type: "bullet", text: "Focus on SMB market first" },
        { type: "bullet", text: "Build self-serve onboarding" },
        { type: "category", text: "Hiring" },
        { type: "bullet", text: "Senior engineer needed Q1" },
        { type: "task", text: "Draft job description this week" },
      ],
    },
  },
  {
    title: "Capturing Decisions",
    desc: "Never lose a decision again. Sythio identifies agreements, commitments, and conclusions from any conversation.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    color: "#f43f5e",
    bgColor: "from-rose-50 to-pink-50",
    mockup: {
      label: "Decision Log",
      items: [
        { type: "heading", text: "Board Meeting Decisions" },
        { type: "decision", text: "Approved: Series A fundraise timeline" },
        { type: "decision", text: "Approved: New office lease agreement" },
        { type: "decision", text: "Deferred: International expansion" },
        { type: "task", text: "CFO: Prepare investor materials" },
        { type: "task", text: "CEO: Schedule partner meetings" },
      ],
    },
  },
];

/* ─── Mockup Card Component ─── */
function MockupCard({ mockup, color }: { mockup: (typeof useCases)[0]["mockup"]; color: string }) {
  return (
    <div className="bg-white rounded-2xl border border-border-light shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden">
      {/* Window chrome */}
      <div className="px-4 py-2.5 border-b border-border-light flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-300" />
        <div className="w-2 h-2 rounded-full bg-amber-300" />
        <div className="w-2 h-2 rounded-full bg-green-300" />
        <span className="ml-2 text-[10px] font-medium text-muted-light uppercase tracking-wider">
          {mockup.label}
        </span>
      </div>
      {/* Content */}
      <div className="p-4 space-y-2.5">
        {mockup.items.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            {item.type === "heading" && (
              <p className="text-[13px] font-semibold text-foreground">{item.text}</p>
            )}
            {item.type === "bullet" && (
              <>
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                <p className="text-[12px] text-muted leading-relaxed">{item.text}</p>
              </>
            )}
            {item.type === "task" && (
              <>
                <div className="mt-0.5 w-3.5 h-3.5 rounded border-2 shrink-0" style={{ borderColor: color }} />
                <p className="text-[12px] text-foreground font-medium leading-relaxed">{item.text}</p>
              </>
            )}
            {item.type === "idea" && (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" className="shrink-0 mt-0.5">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-[12px] text-muted italic leading-relaxed">{item.text}</p>
              </>
            )}
            {item.type === "category" && (
              <p className="text-[11px] font-semibold uppercase tracking-wider mt-1" style={{ color }}>
                {item.text}
              </p>
            )}
            {item.type === "key" && (
              <div className="flex items-center gap-1.5">
                <div className="w-1 h-4 rounded-full" style={{ background: color }} />
                <p className="text-[12px] font-semibold text-foreground">{item.text}</p>
              </div>
            )}
            {item.type === "decision" && (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" className="shrink-0 mt-0.5">
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <p className="text-[12px] text-foreground font-medium leading-relaxed">{item.text}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Use Case Card (large, alternating layout) ─── */
function UseCaseGrid() {
  const { s } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll(".uc-card");
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      }
    );
  }, []);

  return (
    <div ref={ref} className="space-y-8">
      {useCases.map((uc, index) => {
        const isReversed = index % 2 !== 0;
        const title = uc.titleKey ? s(uc.titleKey) : uc.title;
        const desc = uc.descKey ? s(uc.descKey) : uc.desc;

        return (
          <div
            key={index}
            className="uc-card group rounded-3xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
          >
            <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? "lg:direction-rtl" : ""}`}>
              {/* Text side */}
              <div className={`p-8 md:p-12 flex flex-col justify-center ${isReversed ? "lg:order-2" : ""}`}>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${uc.color}10` }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={uc.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={uc.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">
                  {title}
                </h3>
                <p className="text-base text-muted leading-relaxed max-w-md">
                  {desc}
                </p>
              </div>

              {/* Mockup side */}
              <div className={`p-6 md:p-8 bg-gradient-to-br ${uc.bgColor} flex items-center justify-center ${isReversed ? "lg:order-1" : ""}`}>
                <div className="w-full max-w-sm transform group-hover:scale-[1.02] transition-transform duration-500">
                  <MockupCard mockup={uc.mockup} color={uc.color} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Stats ─── */
function StatsBar() {
  return (
    <section className="py-20 md:py-28 bg-background animated-gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <GsapStagger className="grid grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
          {[
            { value: "9", label: "Output formats", suffix: "" },
            { value: "30", label: "Seconds average processing", suffix: "s" },
            { value: "10", label: "Speakers supported", suffix: "+" },
            { value: "5", label: "Languages available", suffix: "" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-white border border-border-light">
              <p className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                {stat.value}{stat.suffix}
              </p>
              <p className="text-sm text-muted mt-2">{stat.label}</p>
            </div>
          ))}
        </GsapStagger>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function UseCasesCTA() {
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
              href="/features"
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

/* ─── Use Cases Page ─── */
export default function UseCasesPage() {
  const { s } = useLanguage();

  return (
    <PageReveal>
      {/* Hero */}
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
                <span className="text-xs font-medium text-muted">{s("usecasesPage.hero.label")}</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
            >
              Works the way you <RotatingText words={["work", "think", "create", "learn"]} className="text-zinc-400" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto"
            >
              {s("usecasesPage.hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticHover>
                <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
                  Get Started
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">
                  See Features
                </Link>
              </MagneticHover>
            </motion.div>
          </div>

          {/* Hero visual — floating output mode pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
          >
            {[
              { label: "Meetings", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", color: "#6366f1" },
              { label: "Voice Notes", icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z", color: "#8b5cf6" },
              { label: "Brainstorming", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", color: "#f59e0b" },
              { label: "Study Sessions", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", color: "#f97316" },
              { label: "Client Calls", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", color: "#22c55e" },
              { label: "Follow-ups", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "#0ea5e9" },
              { label: "Brain Dumps", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "#d946ef" },
              { label: "Decisions", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", color: "#f43f5e" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-border-light shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
                <span className="text-xs font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Use Cases Grid */}
      <section className="py-20 md:py-28 bg-white section-float-bg">
        <div className="max-w-5xl mx-auto px-6">
          <UseCaseGrid />
        </div>
      </section>

      <UseCasesCTA />
    </PageReveal>
  );
}
