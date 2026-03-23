"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal, ScrollScale } from "../gsap-effects";
import { IPhoneFrame, BrowserFrame } from "../devices";
import {
  SummaryMockup,
  ActionPlanMockup,
  ChecklistMockup,
  MessageMockup,
  StudyNotesMockup,
} from "../mockups";
import RotatingText from "../rotating-text";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const outcomes = [
  {
    title: "Summary",
    desc: "Concise overview of what was said",
    gradient: "from-zinc-800 to-zinc-900",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    expandedDesc:
      "Get a concise overview of everything discussed. Key points, decisions, and takeaways — distilled into a clear, readable summary that saves you from replaying the entire recording.",
    mockupType: "browser" as const,
    mockup: "summary",
  },
  {
    title: "Tasks",
    desc: "Actionable items with owners",
    gradient: "from-indigo-600 to-indigo-700",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    expandedDesc:
      "Automatically extract action items with clear ownership. Every 'I'll do this' and 'Can you handle that' becomes a trackable task — no manual note-taking required.",
    mockupType: "browser" as const,
    mockup: "checklist",
  },
  {
    title: "Action Plan",
    desc: "Steps toward outcomes",
    gradient: "from-violet-600 to-violet-700",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    expandedDesc:
      "Transform conversations into structured step-by-step plans. Who does what, by when, and in what order — organized and ready to execute.",
    mockupType: "browser" as const,
    mockup: "actionplan",
  },
  {
    title: "Clean Text",
    desc: "Polished transcription",
    gradient: "from-zinc-700 to-zinc-800",
    icon: "M4 6h16M4 12h16M4 18h12",
    expandedDesc:
      "Raw audio becomes polished, readable text. Filler words removed, grammar corrected, paragraphs formed — ready to share or archive.",
    mockupType: "card" as const,
    mockup: "cleantext",
  },
  {
    title: "Report",
    desc: "Executive-ready document",
    gradient: "from-slate-700 to-slate-800",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    expandedDesc:
      "Generate executive-ready documents from any conversation. Formal structure, key metrics, decisions, and recommendations — presentation-ready in seconds.",
    mockupType: "browser" as const,
    mockup: "summary",
  },
  {
    title: "Message",
    desc: "Ready-to-send follow-up",
    gradient: "from-zinc-800 to-zinc-900",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    expandedDesc:
      "Draft follow-up emails and messages directly from conversations. Context-aware, professionally worded, ready to copy and send.",
    mockupType: "iphone" as const,
    mockup: "message",
  },
  {
    title: "Study Notes",
    desc: "Organized for learning",
    gradient: "from-purple-600 to-purple-700",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    expandedDesc:
      "Transform lectures and discussions into organized study material. Key concepts highlighted, structured by topic, optimized for review and retention.",
    mockupType: "browser" as const,
    mockup: "studynotes",
  },
  {
    title: "Ideas",
    desc: "Captured organized thoughts",
    gradient: "from-amber-600 to-amber-700",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    expandedDesc:
      "Capture brainstorming sessions and turn them into categorized, organized concepts. Group by theme, rank by potential, never lose a creative thought.",
    mockupType: "card" as const,
    mockup: "ideas",
  },
];

function CleanTextPreview() {
  return (
    <div className="bg-white rounded-2xl border border-border-light shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.06)] p-6 max-w-md">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h12" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-foreground">Clean Text</span>
      </div>
      <div className="space-y-3 text-sm text-muted leading-relaxed">
        <p>
          The team agreed to prioritize the onboarding flow this sprint. The current
          drop-off rate after signup is too high and needs immediate attention.
        </p>
        <p>
          Alex will handle the UI updates while Maria takes ownership of the email
          copy and welcome sequence. A sync meeting is scheduled for Thursday to
          review progress and adjust priorities if needed.
        </p>
      </div>
    </div>
  );
}

function IdeasPreview() {
  const ideas = [
    { theme: "User Experience", items: ["Simplified onboarding wizard", "Interactive product tour"], color: "#6366f1" },
    { theme: "Growth", items: ["Referral incentive program", "Community-driven templates"], color: "#8b5cf6" },
    { theme: "Product", items: ["AI-powered suggestions", "Custom output templates"], color: "#a78bfa" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-border-light shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.06)] p-6 max-w-md">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-foreground">Ideas</span>
      </div>
      <div className="space-y-4">
        {ideas.map((group) => (
          <div key={group.theme}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider">{group.theme}</span>
            </div>
            {group.items.map((item, i) => (
              <div key={i} className="flex items-center gap-2 ml-4 mb-1">
                <span className="w-1 h-1 rounded-full bg-muted-light" />
                <span className="text-sm text-muted">{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function RenderMockup({ outcome }: { outcome: (typeof outcomes)[number] }) {
  if (outcome.mockupType === "iphone") {
    return (
      <div className="flex justify-center">
        <IPhoneFrame>
          <div className="bg-background p-2">
            <MessageMockup />
          </div>
        </IPhoneFrame>
      </div>
    );
  }

  if (outcome.mockupType === "card") {
    if (outcome.mockup === "cleantext") return <CleanTextPreview />;
    if (outcome.mockup === "ideas") return <IdeasPreview />;
  }

  // Browser frame mockups
  return (
    <BrowserFrame url={`app.sythio.com/output/${outcome.title.toLowerCase().replace(" ", "-")}`}>
      {outcome.mockup === "summary" && <SummaryMockup />}
      {outcome.mockup === "checklist" && <ChecklistMockup />}
      {outcome.mockup === "actionplan" && <ActionPlanMockup />}
      {outcome.mockup === "studynotes" && <StudyNotesMockup />}
    </BrowserFrame>
  );
}

export default function MultipleOutcomes() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".outcome-card");
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0, scale: 0.92 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          once: true,
        },
      }
    );
  }, []);

  const handleCardClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-32 md:py-44 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
            One audio, multiple outcomes
          </span>
          <TextReveal tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Record once. <RotatingText words={["Use", "Share", "Transform", "Apply"]} className="text-zinc-400" /> it everywhere.
          </TextReveal>
          <TextReveal tag="p" className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            The same recording becomes whatever you need it to be. No re-recording.
            No reprocessing. Just pick your output.
          </TextReveal>
        </div>

        {/* Central audio indicator */}
        <ScrollScale className="flex justify-center mb-16">
          <div className="relative inline-flex items-center gap-4 px-8 py-4 rounded-full bg-foreground text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
            <div className="w-3.5 h-3.5 rounded-full bg-red-400 animate-pulse" />
            <span className="text-base font-medium">Your recording</span>
            <span className="text-sm text-zinc-400 font-mono">3:42</span>
            {/* Connecting lines */}
            <div className="absolute -bottom-8 left-1/2 w-px h-8 bg-gradient-to-b from-zinc-400 to-transparent" />
          </div>
        </ScrollScale>

        {/* Cards grid */}
        <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.title}
              onClick={() => handleCardClick(index)}
              className={`outcome-card group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                activeIndex === index
                  ? "bg-foreground/[0.03] border-foreground/20 shadow-[0_4px_16px_rgba(0,0,0,0.06),0_16px_48px_rgba(0,0,0,0.08)]"
                  : "bg-background border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)]"
              }`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-50/20 via-violet-50/10 to-transparent transition-opacity duration-500" />
              <div className="relative">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${outcome.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d={outcome.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">
                  {outcome.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {outcome.desc}
                </p>
                {/* Active indicator */}
                {activeIndex === index && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute top-4 right-4 w-2 h-2 rounded-full bg-foreground"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Expanded panel */}
        <AnimatePresence mode="wait">
          {activeIndex !== null && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="rounded-3xl border border-border-light bg-background p-8 md:p-12">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${outcomes[activeIndex].gradient} flex items-center justify-center shadow-lg`}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d={outcomes[activeIndex].icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {outcomes[activeIndex].title}
                      </h3>
                      <p className="text-sm text-muted">Output mode</p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(null);
                    }}
                    className="w-10 h-10 rounded-full bg-white border border-border-light flex items-center justify-center text-muted hover:text-foreground hover:border-border transition-all duration-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <p className="text-base md:text-lg text-muted leading-relaxed">
                      {outcomes[activeIndex].expandedDesc}
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                  >
                    <RenderMockup outcome={outcomes[activeIndex]} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
