import Link from "next/link";

export default function AudioToSummaryPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              Audio to Summary
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Turn Any Audio into a Clear, Structured Summary
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Record a conversation, upload a file, or capture a voice note. Sythio listens, analyzes context, and delivers a summary that captures what actually matters — decisions, ideas, and next steps.
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
            Three steps to a finished summary
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            No templates. No manual editing. Sythio does the heavy lifting so you can focus on what comes next.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Record or upload",
                description:
                  "Capture audio directly inside Sythio or upload an existing file. Meetings, voice notes, lectures — any format works.",
              },
              {
                step: "02",
                title: "Sythio analyzes context",
                description:
                  "Speaker detection identifies who said what. The content is processed for topic structure, key decisions, and important details.",
              },
              {
                step: "03",
                title: "Get your summary",
                description:
                  "A clean, structured summary is ready in seconds. Review it, export it, or share it — the information is organized and ready to use.",
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

      {/* ─── What a Sythio Summary Includes ─── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            What You Get
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            What a Sythio Summary Includes
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            Not a rough transcript with bullet points. A genuine summary — structured, readable, and built from real understanding of the conversation.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Key decisions",
                description:
                  "Every decision made during the conversation is surfaced and clearly stated, so nothing slips through the cracks.",
              },
              {
                title: "Main topics covered",
                description:
                  "Topics are identified and grouped logically, giving you a clear picture of what was discussed and in what order.",
              },
              {
                title: "Action items mentioned",
                description:
                  "Commitments and follow-ups referenced in the conversation are highlighted, even if they weren't formally assigned.",
              },
              {
                title: "Context preserved",
                description:
                  "Important nuance, reasoning, and background context are retained — not just the conclusions, but why they were reached.",
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

      {/* ─── Not Just a Summary ─── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              One Recording, Many Outputs
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Not Just a Summary
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              Every recording you process with Sythio can produce multiple outputs. A summary is often the starting point — but the same audio can also give you tasks, action plans, reports, and more.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Task lists",
                description: "Extract every commitment and action item, with owners when speakers are detected.",
                href: "/audio-to-tasks",
              },
              {
                title: "Action plans",
                description: "Structured, phased plans with priorities and responsibilities — built from your conversation.",
                href: "/audio-to-action-plan",
              },
              {
                title: "Clean text",
                description: "Polished, readable text with filler words removed and grammar corrected.",
                href: "/features/clean-text",
              },
              {
                title: "All 9 formats",
                description: "Summaries, tasks, action plans, reports, messages, study notes, ideas, and more.",
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

      {/* ─── Works with Any Audio ─── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            Versatile by Design
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Works with Any Audio
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            Sythio adapts to the content. Whether it is a 30-second voice note or a two-hour strategy session, the summary reflects the depth and format of the original recording.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Meetings",
                description: "Team syncs, project reviews, one-on-ones — capture decisions and outcomes without taking notes.",
              },
              {
                title: "Voice notes",
                description: "Quick thoughts, ideas on the go, personal reminders — summarized into something actionable.",
              },
              {
                title: "Lectures & workshops",
                description: "Long-form educational content distilled into organized, study-ready summaries.",
              },
              {
                title: "Calls & interviews",
                description: "Client conversations, sales calls, interviews — key points pulled out and structured.",
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
              href="/features/ai-summaries"
              className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">AI Summaries</p>
            </Link>
            <Link
              href="/audio-to-tasks"
              className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Outcome</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Audio to Tasks</p>
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
            Stop re-listening. Start summarizing.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Every recording becomes a clear, structured summary — in seconds, not hours.
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
