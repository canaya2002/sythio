import Link from "next/link";

const outputs = [
  {
    title: "Tasks with Attribution",
    description:
      "Every action item extracted from your meetings with speaker attribution. No more guessing who committed to what — Sythio identifies the owner, the task, and the context. Ready to drop into your project management tool.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    color: "#22c55e",
  },
  {
    title: "Action Plans",
    description:
      "Meetings produce decisions, but decisions need plans. Sythio creates structured action plans from your discussions — organized by priority, grouped by workstream, and ready to execute.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "#8b5cf6",
  },
  {
    title: "Follow-up Messages",
    description:
      "After every meeting, Sythio drafts a follow-up message capturing what was discussed, what was decided, and what each person owns. Review it, adjust the tone, and send — within minutes of the meeting ending.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "#0ea5e9",
  },
  {
    title: "Executive Reports",
    description:
      "Stakeholders need updates, and writing them takes time you do not have. Sythio generates executive reports from your project meetings — concise, structured, and ready to share with leadership.",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 01-2 2h-2z",
    color: "#f43f5e",
  },
  {
    title: "Summaries",
    description:
      "Every meeting distilled to the essentials — decisions made, blockers identified, progress reported. Share with team members who could not attend, or use as your own reference before the next sync.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    color: "#6366f1",
  },
  {
    title: "Key Points",
    description:
      "The critical decisions, risks, blockers, and agreements from your conversations — extracted and organized. Perfect for a quick scan before a status update or when you need to recall what was resolved.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    color: "#f59e0b",
  },
];

const scenarios = [
  {
    title: "Daily standups and sprint planning",
    description:
      "Standups move fast. Sythio captures every update, blocker, and commitment from your daily syncs and sprint planning sessions. The result: a clean summary with action items, so nothing slips between one standup and the next.",
  },
  {
    title: "Stakeholder and client meetings",
    description:
      "When you meet with stakeholders or clients, the follow-up matters as much as the meeting itself. Sythio generates a professional follow-up message, an executive report, and a task list — all from one recording.",
  },
  {
    title: "Cross-functional coordination",
    description:
      "PMs sit at the intersection of engineering, design, marketing, and leadership. Sythio helps you capture decisions from every conversation and share structured updates with each group — without writing five different recaps.",
  },
  {
    title: "Retrospectives and reviews",
    description:
      "Capture what went well, what did not, and what needs to change. Sythio structures the discussion into organized insights, action items for improvement, and a summary you can reference next sprint.",
  },
  {
    title: "One-on-ones and feedback sessions",
    description:
      "Keep a clean record of career conversations, feedback, and commitments made in one-on-ones. Sythio creates a summary with action items, so both parties have a shared understanding of what was discussed.",
  },
];

export default function ProjectManagersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              For Project Managers
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Meeting Notes, Action Items & Follow-ups — Handled
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              You spend your days in meetings, and your evenings writing
              recaps. Sythio transforms your meetings into structured notes,
              task lists, action plans, and follow-up messages — automatically.
              Focus on leading, not documenting.
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

      {/* The PM Problem */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              The challenge
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              The Meeting Management Problem
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Project managers are the connective tissue of any organization.
              You coordinate across teams, align stakeholders, and keep projects
              moving. But the administrative overhead of meeting documentation
              consumes hours every week — time that should be spent on actual
              project leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Meeting overload",
                description:
                  "Back-to-back meetings leave no time to process, document, or follow up. By the time you sit down to write notes, the next meeting has already started.",
                color: "#f43f5e",
              },
              {
                title: "Action item gaps",
                description:
                  "Tasks are committed to verbally in meetings, but without structured capture, they fall into the gap between conversation and project tracking tools.",
                color: "#f59e0b",
              },
              {
                title: "Stakeholder updates",
                description:
                  "Different stakeholders need different levels of detail. Writing separate updates for executives, teams, and clients from the same meeting multiplies the documentation burden.",
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

      {/* What Sythio Creates for PMs */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              Your outputs
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              What Sythio Creates for PMs
            </h2>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              One meeting recording becomes everything you need — task lists,
              follow-ups, reports, and more. No manual note-taking required.
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

      {/* How PMs Use Sythio */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              In your workflow
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              How PMs Use Sythio
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

      {/* Speaker Detection Callout */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="p-10 md:p-14 rounded-3xl bg-foreground text-white">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">
                  Speaker intelligence
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  Know Who Owns What
                </h2>
                <p className="mt-6 text-base text-white/70 leading-relaxed">
                  In project management, accountability is everything. Sythio
                  does not just extract tasks — it attributes them to specific
                  speakers. When Sarah says &ldquo;I will have the design review
                  done by Thursday,&rdquo; Sythio captures that as Sarah&apos;s
                  task with a Thursday deadline. No ambiguity, no
                  misattribution.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "Tasks attributed to specific speakers",
                    "Decisions tracked with who proposed and who approved",
                    "Commitments captured with deadlines when mentioned",
                    "Blockers identified with the person who raised them",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span className="text-sm text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Explore More
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "For Founders", href: "/for/founders" },
              { label: "Use Cases", href: "/use-cases" },
              { label: "All Features", href: "/features" },
              { label: "Pricing", href: "/pricing" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group p-5 rounded-xl bg-background border border-border-light hover:border-border hover:shadow-md transition-all duration-300 text-center"
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
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Spend less time documenting.
              <br />
              Spend more time leading.
            </h2>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              Try Sythio free and see how your next meeting becomes structured
              notes, action items, and a follow-up message — without you
              writing a single word.
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
