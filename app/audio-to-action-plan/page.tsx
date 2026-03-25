import Link from "next/link";

export default function AudioToActionPlanPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              Audio to Action Plan
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              From Conversation to Structured Action Plan
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Discussions produce direction, but rarely a plan you can execute. Sythio analyzes your conversations and builds structured, step-by-step action plans — with phases, owners, and priorities already in place.
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

      {/* ─── More Than Tasks ─── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
                Why Action Plans
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                More Than Tasks
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                A task list tells you what to do. An action plan tells you how to get there. Sythio understands the difference — and builds plans that reflect the structure, sequencing, and priorities discussed in your conversations.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Phases, not just items",
                  description:
                    "Work is grouped into logical phases that reflect the natural progression discussed in the conversation — what happens first, what depends on what.",
                },
                {
                  title: "Priorities built in",
                  description:
                    "Urgency and importance are inferred from the conversation. High-priority items surface at the top, so your team knows where to focus.",
                },
                {
                  title: "Dependencies mapped",
                  description:
                    "When one step depends on another, the plan reflects that relationship — preventing bottlenecks before they happen.",
                },
                {
                  title: "Timeline awareness",
                  description:
                    "Deadlines and timeframes mentioned in the conversation are captured and integrated into the plan structure.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-background border border-border-light"
                >
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Three steps to a structured plan
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            Record a conversation about what needs to happen. Sythio turns the discussion into an organized, executable plan.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Record or upload",
                description:
                  "Capture a planning session, strategy discussion, or project kickoff — directly in Sythio or by uploading an existing file.",
              },
              {
                step: "02",
                title: "Sythio maps the plan",
                description:
                  "The conversation is analyzed for goals, responsibilities, sequencing, and priorities. Speaker detection attributes ownership to the right people.",
              },
              {
                step: "03",
                title: "Get your action plan",
                description:
                  "A structured, phased plan is delivered in seconds. Review it, refine it, or share it with your team — the heavy lifting is done.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group p-8 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <span className="text-xs font-bold tracking-wider text-muted-light">{item.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What a Sythio Action Plan Includes ─── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            What You Get
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            What a Sythio Action Plan Includes
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            Not a flat list of to-dos. A real plan — organized, layered, and structured for execution.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Phases",
                description:
                  "Work is organized into distinct phases that reflect the natural progression of the project — from immediate actions to longer-term goals.",
              },
              {
                title: "Responsible parties",
                description:
                  "Each action is attributed to the person who owns it, using speaker detection to match commitments to voices.",
              },
              {
                title: "Priorities",
                description:
                  "Items are ranked by urgency and importance, drawn from language cues and context in the conversation itself.",
              },
              {
                title: "Clear next steps",
                description:
                  "Every phase ends with concrete next steps — no ambiguity about what happens next or who initiates it.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── From the Same Recording ─── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              One Recording, Many Outputs
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              From the Same Recording
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              An action plan is one way to use a recording. The same audio can also produce summaries, task lists, executive reports, and more — all processed from a single upload.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Summaries",
                description: "A concise overview of what was discussed — decisions, key topics, and takeaways.",
                href: "/audio-to-summary",
              },
              {
                title: "Task lists",
                description: "Every commitment and action item, extracted and attributed to the right person.",
                href: "/audio-to-tasks",
              },
              {
                title: "Executive reports",
                description: "Formal, presentation-ready documents for stakeholders who were not in the room.",
                href: "/features",
              },
              {
                title: "All 9 formats",
                description: "Summaries, tasks, plans, reports, messages, study notes, clean text, ideas, and more.",
                href: "/features",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block p-7 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
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

      {/* ─── Related ─── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">
            Related
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/features/action-plans"
              className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Action Plans</p>
            </Link>
            <Link
              href="/audio-to-summary"
              className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Outcome</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Audio to Summary</p>
            </Link>
            <Link
              href="/audio-to-tasks"
              className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Outcome</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Audio to Tasks</p>
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
            Turn discussions into direction.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Every conversation becomes a structured plan — phased, prioritized, and ready to execute.
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
