import Link from "next/link";

export default function AudioToTasksPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              Audio to Tasks
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Convert Audio into Actionable Task Lists
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Conversations are full of commitments that never make it into a task manager. Sythio listens, identifies every action item, and delivers a structured checklist — with owners, when speakers are detected.
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

      {/* ─── How It Works ─── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            From conversation to checklist
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            No more scanning notes after a meeting trying to remember who agreed to do what. Sythio handles extraction automatically.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Record or upload",
                description:
                  "Capture your meeting, standup, or call directly in Sythio — or upload a recording you already have.",
              },
              {
                step: "02",
                title: "Sythio identifies commitments",
                description:
                  "Speaker detection determines who said what. Natural language analysis finds every commitment, follow-up, and action item in the conversation.",
              },
              {
                step: "03",
                title: "Get your task list with owners",
                description:
                  "A clean checklist of action items, each attributed to the person who committed to it. Ready to review, export, or drop into your workflow.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group p-8 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <span className="text-xs font-bold tracking-wider text-muted-light">{item.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tasks with Context ─── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            Intelligent Extraction
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Tasks with Context
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            A task without context is a task that gets ignored. Sythio extracts not just the action, but who owns it, why it matters, and what level of urgency the conversation implied.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Speaker attribution",
                description:
                  "When multiple people are in the conversation, Sythio uses speaker detection to assign each task to the person who committed to it.",
              },
              {
                title: "Priority inference",
                description:
                  "Language cues like urgency, deadlines, and emphasis help Sythio surface which tasks are most time-sensitive.",
              },
              {
                title: "Clear ownership",
                description:
                  "Each task is tied to a specific person — no ambiguity about who is responsible for follow-through.",
              },
              {
                title: "Grouped by topic",
                description:
                  "Tasks are organized by the subject they relate to, making it easy to see what needs to happen across different workstreams.",
              },
              {
                title: "Ready to export",
                description:
                  "Copy your task list, export it, or share it directly. The format is clean enough to paste into any project management tool.",
              },
              {
                title: "Nothing missed",
                description:
                  "Sythio catches commitments that are easy to overlook — casual agreements, implied follow-ups, and offhand promises.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Beyond Tasks ─── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              One Recording, Many Outputs
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Beyond Tasks
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              A task list is one lens on a conversation. The same recording can also produce summaries, structured action plans, follow-up messages, and more — all from a single upload.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Summaries",
                description: "A clear overview of the full conversation — decisions, topics, and takeaways.",
                href: "/audio-to-summary",
              },
              {
                title: "Action plans",
                description: "Phased, structured plans with priorities, timelines, and responsible parties.",
                href: "/audio-to-action-plan",
              },
              {
                title: "Follow-up messages",
                description: "Draft emails and messages based on what was discussed — ready to send.",
                href: "/features",
              },
              {
                title: "All 9 formats",
                description: "Tasks, summaries, action plans, reports, clean text, study notes, ideas, and more.",
                href: "/features",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block p-7 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Where It's Most Useful ─── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            Built for Real Workflows
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Where It&apos;s Most Useful
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            Any conversation where people agree to do things is a conversation where tasks get lost. Sythio makes sure they don&apos;t.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Team meetings",
                description:
                  "Standups, retrospectives, planning sessions — every commitment captured and attributed to the right person.",
              },
              {
                title: "Daily standups",
                description:
                  "Short meetings move fast. Sythio catches the commitments so your team can stay focused on the conversation, not note-taking.",
              },
              {
                title: "Client calls",
                description:
                  "Deliverables, feedback, next steps — everything the client mentioned is extracted and organized for follow-through.",
              },
              {
                title: "One-on-ones",
                description:
                  "Manager check-ins and coaching sessions produce personal action items that are easy to forget. Sythio remembers.",
              },
              {
                title: "Project reviews",
                description:
                  "Long review sessions generate dozens of follow-ups. Get a complete, organized list without rewatching the recording.",
              },
              {
                title: "Sales calls",
                description:
                  "Capture prospect requirements, agreed next steps, and internal follow-ups — all in one clean task list.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Related ─── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">
            Related
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/features/task-extraction"
              className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Task Extraction</p>
            </Link>
            <Link
              href="/audio-to-summary"
              className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Outcome</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Audio to Summary</p>
            </Link>
            <Link
              href="/audio-to-action-plan"
              className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Outcome</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Audio to Action Plan</p>
            </Link>
            <Link
              href="/use-cases/meetings"
              className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Meetings</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 md:py-44 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Never lose a commitment again.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Every conversation becomes a clear task list — attributed, organized, and ready to act on.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300"
            >
              Start Free
            </Link>
            <Link
              href="/product"
              className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
            >
              Explore the Product
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">Free plan available. No credit card required.</p>
        </div>
      </section>
    </>
  );
}
