import Link from "next/link";

const outputs = [
  {
    title: "Action Plans",
    description:
      "Every meeting, brainstorm, and call becomes a structured action plan. Sythio identifies what needs to happen next, who is responsible, and how the work should be prioritized — so decisions translate into momentum.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "#8b5cf6",
  },
  {
    title: "Executive Reports",
    description:
      "Share what happened without writing it yourself. Sythio creates polished executive reports from your meetings — ready to share with co-founders, investors, or advisors. The context they need, without the work of writing it.",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 01-2 2h-2z",
    color: "#f43f5e",
  },
  {
    title: "Tasks",
    description:
      "Sythio extracts every task, commitment, and next step from your conversations — with speaker attribution. You know who committed to what, so accountability is built into every interaction.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    color: "#22c55e",
  },
  {
    title: "Ideas",
    description:
      "Founders think constantly. Sythio captures and categorizes the ideas buried in your voice notes and brainstorms — so the good ones do not get lost between the moment of inspiration and your next meeting.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    color: "#f59e0b",
  },
  {
    title: "Follow-up Messages",
    description:
      "After a client call or investor meeting, Sythio drafts a follow-up message that captures what was discussed, what was agreed, and what comes next. Review, adjust, and send — minutes after the call ends.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "#0ea5e9",
  },
  {
    title: "Summaries",
    description:
      "Every conversation distilled to its essence. Share a two-minute read with anyone who was not in the room — or review it yourself when you need to recall what was decided last week.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    color: "#6366f1",
  },
];

const scenarios = [
  {
    title: "Team meetings",
    description:
      "Your standup, planning session, or all-hands becomes a structured summary with clear action items and accountability. Everyone knows what was decided and what they own — without you writing the recap.",
  },
  {
    title: "Brainstorming sessions",
    description:
      "The best ideas come fast and unstructured. Record the brainstorm, and Sythio organizes the ideas by theme, captures the decisions, and creates an action plan from the chaos.",
  },
  {
    title: "Client and investor calls",
    description:
      "Every promise, commitment, and next step captured and attributed. Send a professional follow-up message within minutes of the call ending — drafted by Sythio, refined by you.",
  },
  {
    title: "Voice notes between meetings",
    description:
      "Founders context-switch constantly. When an idea strikes between meetings, record a quick voice note. Sythio captures the thought, structures it, and makes sure it is waiting for you when you have time to act.",
  },
  {
    title: "Board and advisory sessions",
    description:
      "Capture the advice, direction, and decisions from board meetings and advisory calls. Sythio creates executive reports that document what was discussed and what was agreed — a reference you will return to.",
  },
];

export default function FoundersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              For Founders
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Capture Every Decision, Idea, and Next Step
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              You are in meetings all day, thinking between them, and moving too
              fast to write things down. Sythio turns your conversations and
              voice notes into action plans, tasks, follow-ups, and structured
              summaries — so nothing gets lost.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/pricing"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                Start Free
              </Link>
              <Link
                href="/product"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Founder Problem */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              The challenge
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              The Founder&apos;s Information Problem
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Founders operate at the intersection of every function — product,
              sales, engineering, hiring, fundraising. Critical decisions happen
              in rapid succession across meetings, calls, and spontaneous
              conversations. The information load is immense, and the cost of
              losing context is real.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Decisions get lost",
                description:
                  "You made an important decision in a meeting yesterday, but nobody documented it clearly. Now the team is asking what was agreed, and you are reconstructing it from memory.",
                color: "#f43f5e",
              },
              {
                title: "Follow-through gaps",
                description:
                  "Tasks and commitments are made in conversations, but without structured capture, they fall into the gap between what was said and what gets done.",
                color: "#f59e0b",
              },
              {
                title: "Context evaporates",
                description:
                  "You switch contexts a dozen times a day. The brilliant idea from your morning voice note, the nuanced feedback from an investor, the subtle concern from a client — gone by evening.",
                color: "#6366f1",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-background border border-border-light"
              >
                <div
                  className="w-3 h-3 rounded-full mb-6"
                  style={{ background: item.color }}
                />
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sythio Creates for Founders */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              Your outputs
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              What Sythio Creates for Founders
            </h2>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              One recording becomes multiple structured outputs — each designed
              for a different need in your day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {outputs.map((output) => (
              <div
                key={output.title}
                className="p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${output.color}10` }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={output.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={output.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {output.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {output.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Founders Use Sythio */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              In your day
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              How Founders Use Sythio
            </h2>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {scenarios.map((scenario) => (
              <div
                key={scenario.title}
                className="p-8 rounded-2xl bg-background border border-border-light"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {scenario.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Explore More
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "For Project Managers", href: "/for/project-managers" },
              { label: "Use Cases", href: "/use-cases" },
              { label: "All Features", href: "/features" },
              { label: "Pricing", href: "/pricing" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group p-5 rounded-xl bg-white border border-border-light hover:border-border hover:shadow-md transition-all duration-300 text-center"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Move fast without
              <br />
              losing context
            </h2>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              Try Sythio free and see how your meetings, brainstorms, and voice
              notes become structured outputs you can act on immediately.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                Start Free
              </Link>
              <Link
                href="/product"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
              >
                See How It Works
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-light">
              Free plan includes 5 recordings per month. No credit card needed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
