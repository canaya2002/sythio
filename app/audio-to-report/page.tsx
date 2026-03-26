import Link from "next/link";

export default function AudioToReportPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              Audio to Report
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Convert Audio into Executive Reports
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Record a meeting, upload a call, or capture a briefing. Sythio listens, analyzes the content, and delivers a polished executive report — complete with findings, context, and recommendations.
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
            Three steps to a finished report
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            No formatting struggles. No manual writing. Sythio transforms raw audio into a report you can send to stakeholders immediately.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Record or upload",
                description:
                  "Capture audio directly inside Sythio or upload an existing recording. Strategy sessions, project reviews, client debriefs — any format works.",
              },
              {
                step: "02",
                title: "Sythio structures the content",
                description:
                  "Speaker detection identifies contributors. The content is analyzed for key findings, decisions, outcomes, and recommendations.",
              },
              {
                step: "03",
                title: "Get your executive report",
                description:
                  "A professional, structured report is ready in seconds. Review it, export it, or share it with leadership — the information is organized and presentation-ready.",
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

      {/* ─── What a Sythio Report Includes ─── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            What You Get
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            What a Sythio Report Includes
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            Not a raw transcript reformatted as paragraphs. A genuine executive report — structured, professional, and built from real understanding of the conversation.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Executive summary",
                description:
                  "A concise overview of the entire conversation, highlighting the most important outcomes and conclusions for quick reading.",
              },
              {
                title: "Key findings",
                description:
                  "Major insights, data points, and conclusions surfaced during the discussion are organized and clearly presented.",
              },
              {
                title: "Decisions and outcomes",
                description:
                  "Every decision reached during the conversation is documented with context, reasoning, and the parties involved.",
              },
              {
                title: "Recommendations",
                description:
                  "Suggested next steps and recommendations mentioned in the discussion are extracted and formatted for action.",
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

      {/* ─── Not Just a Report ─── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              One Recording, Many Outputs
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Not Just a Report
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              An executive report is one way to process a conversation. The same recording can also produce summaries, task lists, action plans, and more — all from a single upload.
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
            Sythio adapts to the content. Whether it is a quick debrief or a two-hour board meeting, the report reflects the depth and scope of the original recording.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Strategy sessions",
                description: "Long-form planning discussions turned into structured reports with clear outcomes and next steps.",
              },
              {
                title: "Client debriefs",
                description: "Project updates and client feedback organized into a professional report ready for stakeholders.",
              },
              {
                title: "Board meetings",
                description: "Comprehensive meeting coverage documented with decisions, action items, and strategic direction.",
              },
              {
                title: "Project reviews",
                description: "Status updates, blockers, and milestones captured in a clean report format for leadership.",
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
              href="/features/reports"
              className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Reports</p>
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
            Stop writing reports manually. Start generating them.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Every recording becomes a polished executive report — in seconds, not hours.
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
