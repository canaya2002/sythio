"use client";

import { motion } from "framer-motion";

/* ─── Transcript with Speaker Detection ─── */
export function TranscriptMockup({ className = "" }: { className?: string }) {
  const lines = [
    { speaker: "Alex", color: "#6366f1", text: "I think we should prioritize the onboarding flow this sprint." },
    { speaker: "Maria", color: "#8b5cf6", text: "Agreed. The current drop-off rate is too high after signup." },
    { speaker: "Alex", color: "#6366f1", text: "Let's also revisit the welcome email sequence." },
    { speaker: "Maria", color: "#8b5cf6", text: "I can take the email copy. Can you handle the UI updates?" },
    { speaker: "Alex", color: "#6366f1", text: "Done. Let's sync on Thursday to review progress." },
  ];

  return (
    <div className={`bg-white rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      {/* Window chrome */}
      <div className="px-5 py-3.5 border-b border-border-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <span className="text-[11px] font-medium text-muted-light tracking-wide uppercase">
          Transcript
        </span>
        <div className="w-14" />
      </div>
      {/* Content */}
      <div className="p-5 space-y-4">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex gap-3"
          >
            <div
              className="mt-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
              style={{ background: line.color }}
            >
              {line.speaker[0]}
            </div>
            <div>
              <span className="text-[11px] font-semibold text-foreground">
                {line.speaker}
              </span>
              <p className="text-[13px] text-muted leading-relaxed mt-0.5">
                {line.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Action Plan Card ─── */
export function ActionPlanMockup({ className = "" }: { className?: string }) {
  const items = [
    { owner: "Alex", task: "Redesign onboarding screens", priority: "High" },
    { owner: "Maria", task: "Rewrite welcome email sequence", priority: "High" },
    { owner: "Alex", task: "Review analytics dashboard setup", priority: "Medium" },
    { owner: "Team", task: "Sync on Thursday for progress review", priority: "Normal" },
  ];

  return (
    <div className={`bg-white rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      <div className="px-5 py-3.5 border-b border-border-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <span className="text-[11px] font-medium text-muted-light tracking-wide uppercase">
          Action Plan
        </span>
        <div className="w-14" />
      </div>
      <div className="p-5 space-y-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-start gap-3 p-3 rounded-xl bg-background/60 border border-border-light"
          >
            <div className="mt-0.5 w-4 h-4 rounded border-2 border-muted-light shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-foreground leading-snug">
                {item.task}
              </p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-border-light text-muted font-medium">
                  {item.owner}
                </span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    item.priority === "High"
                      ? "bg-red-50 text-red-600"
                      : item.priority === "Medium"
                      ? "bg-amber-50 text-amber-600"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {item.priority}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Summary Card ─── */
export function SummaryMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      <div className="px-5 py-3.5 border-b border-border-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <span className="text-[11px] font-medium text-muted-light tracking-wide uppercase">
          Executive Summary
        </span>
        <div className="w-14" />
      </div>
      <div className="p-6 space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h4 className="text-sm font-semibold text-foreground mb-2">
            Sprint Planning — March 20
          </h4>
          <p className="text-[13px] text-muted leading-relaxed">
            The team agreed to focus on improving the onboarding experience this sprint.
            Key areas include redesigning the signup flow, optimizing the welcome email
            sequence, and setting up better analytics tracking for user activation.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-3 border-t border-border-light"
        >
          <h5 className="text-[11px] font-semibold uppercase tracking-wider text-muted-light mb-2">
            Key Decisions
          </h5>
          <ul className="space-y-1.5">
            {[
              "Onboarding redesign is the top priority",
              "Maria owns email copy updates",
              "Thursday sync to review early progress",
            ].map((item, i) => (
              <li key={i} className="text-[13px] text-muted flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-light shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Output Mode Selector ─── */
export function OutputModesMockup({ className = "" }: { className?: string }) {
  const modes = [
    { icon: "doc", label: "Summary", active: true },
    { icon: "list", label: "Key Points", active: false },
    { icon: "check", label: "Tasks", active: false },
    { icon: "zap", label: "Action Plan", active: false },
    { icon: "text", label: "Clean Text", active: false },
    { icon: "mail", label: "Message", active: false },
    { icon: "book", label: "Study Notes", active: false },
    { icon: "bulb", label: "Ideas", active: false },
  ];

  const iconMap: Record<string, string> = {
    doc: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    list: "M4 6h16M4 10h16M4 14h16M4 18h16",
    check: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    zap: "M13 10V3L4 14h7v7l9-11h-7z",
    text: "M4 6h16M4 12h16M4 18h12",
    mail: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    bulb: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  };

  return (
    <div className={`bg-white rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      <div className="px-5 py-3.5 border-b border-border-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <span className="text-[11px] font-medium text-muted-light tracking-wide uppercase">
          Output Modes
        </span>
        <div className="w-14" />
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 gap-2.5">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className={`flex items-center gap-2.5 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                mode.active
                  ? "bg-foreground text-white shadow-md"
                  : "bg-background/60 border border-border-light text-muted hover:border-border hover:bg-background"
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <path d={iconMap[mode.icon]} />
              </svg>
              <span className="text-[12px] font-medium">{mode.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Message Draft Card ─── */
export function MessageMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      <div className="px-5 py-3.5 border-b border-border-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <span className="text-[11px] font-medium text-muted-light tracking-wide uppercase">
          Ready-to-Send Message
        </span>
        <div className="w-14" />
      </div>
      <div className="p-5 space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] text-muted-light font-medium">To:</span>
            <span className="text-[12px] text-foreground font-medium px-2 py-0.5 bg-background rounded-md">
              team@company.com
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] text-muted-light font-medium">Subject:</span>
            <span className="text-[12px] text-foreground font-medium">
              Sprint Planning Recap — Action Items
            </span>
          </div>
          <div className="text-[13px] text-muted leading-relaxed space-y-2">
            <p>Hi team,</p>
            <p>
              Quick recap from today&apos;s sprint planning. We&apos;re focusing on
              the onboarding flow redesign this sprint. Alex is handling the UI
              updates, and Maria is taking on the email sequence.
            </p>
            <p>
              Let&apos;s plan to sync Thursday to check on early progress. Looking
              forward to seeing what we ship.
            </p>
            <p className="text-muted-light">Best,<br />Your name</p>
          </div>
        </motion.div>
        <div className="flex gap-2 pt-2">
          <div className="px-4 py-2 rounded-lg bg-foreground text-white text-[12px] font-medium">
            Copy
          </div>
          <div className="px-4 py-2 rounded-lg bg-background border border-border-light text-[12px] font-medium text-muted">
            Edit
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Checklist Card ─── */
export function ChecklistMockup({ className = "" }: { className?: string }) {
  const tasks = [
    { text: "Redesign onboarding flow wireframes", checked: true },
    { text: "Draft welcome email sequence (3 emails)", checked: true },
    { text: "Set up conversion tracking events", checked: false },
    { text: "Review and test new signup form", checked: false },
    { text: "Prepare Thursday sync presentation", checked: false },
  ];

  return (
    <div className={`bg-white rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      <div className="px-5 py-3.5 border-b border-border-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <span className="text-[11px] font-medium text-muted-light tracking-wide uppercase">
          Task List
        </span>
        <div className="w-14" />
      </div>
      <div className="p-5 space-y-2.5">
        {tasks.map((task, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + i * 0.1, duration: 0.4 }}
            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-background/60 transition-colors"
          >
            <div
              className={`mt-0.5 w-4.5 h-4.5 rounded flex items-center justify-center shrink-0 ${
                task.checked
                  ? "bg-foreground"
                  : "border-2 border-muted-light"
              }`}
            >
              {task.checked && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </div>
            <span
              className={`text-[13px] leading-snug ${
                task.checked
                  ? "text-muted-light line-through"
                  : "text-foreground"
              }`}
            >
              {task.text}
            </span>
          </motion.div>
        ))}
        <div className="pt-2 flex items-center justify-between text-[11px] text-muted-light">
          <span>2 of 5 completed</span>
          <span>40%</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Study Notes Card ─── */
export function StudyNotesMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}>
      <div className="px-5 py-3.5 border-b border-border-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <span className="text-[11px] font-medium text-muted-light tracking-wide uppercase">
          Study Notes
        </span>
        <div className="w-14" />
      </div>
      <div className="p-5 space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h4 className="text-sm font-semibold text-foreground mb-1">
            User Onboarding Best Practices
          </h4>
          <span className="text-[10px] text-muted-light uppercase tracking-wider font-medium">
            Lecture — March 20
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="space-y-3"
        >
          {[
            {
              title: "Progressive Disclosure",
              body: "Don't overwhelm users. Show features gradually as they become relevant.",
            },
            {
              title: "Activation Metrics",
              body: "Define the 'aha moment' — the first action where users see core value.",
            },
            {
              title: "Friction Reduction",
              body: "Every field, step, or decision point is a chance for drop-off. Minimize them.",
            },
          ].map((note, i) => (
            <div
              key={i}
              className="pl-3 border-l-2 border-border"
            >
              <h5 className="text-[12px] font-semibold text-foreground mb-0.5">
                {note.title}
              </h5>
              <p className="text-[12px] text-muted leading-relaxed">
                {note.body}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Audio Waveform Visual ─── */
export function WaveformMockup({ className = "" }: { className?: string }) {
  // Pre-computed integer heights to avoid SSR/client hydration mismatch
  const bars = [
    8,8,9,10,12,14,16,18,20,22,23,25,27,28,30,31,32,33,34,35,36,37,38,39,
    40,39,38,37,36,35,34,33,32,31,30,28,27,25,23,22,20,18,16,14,12,10,9,8,
  ];

  return (
    <div className={`flex items-center justify-center gap-[2px] ${className}`}>
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            delay: 0.1 + i * 0.02,
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="w-[3px] rounded-full bg-gradient-to-t from-zinc-300 to-zinc-400 origin-center"
          style={{ height: h }}
        />
      ))}
    </div>
  );
}

/* ─── Speaker Badge Group ─── */
export function SpeakerBadges({ className = "" }: { className?: string }) {
  const speakers = [
    { name: "Alex M.", color: "#6366f1" },
    { name: "Maria R.", color: "#8b5cf6" },
    { name: "Jordan K.", color: "#a78bfa" },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {speakers.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border-light shadow-sm"
        >
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
            style={{ background: s.color }}
          >
            {s.name[0]}
          </div>
          <span className="text-[11px] font-medium text-foreground">{s.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
