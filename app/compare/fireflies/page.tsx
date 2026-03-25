import Link from "next/link";

const comparisonRows = [
  {
    feature: "Primary output",
    sythio: "9 structured formats",
    fireflies: "Transcript + summary",
  },
  {
    feature: "How it works",
    sythio: "Upload or record any audio",
    fireflies: "Bot joins your meetings",
  },
  {
    feature: "Audio sources",
    sythio: "\u2713 Any audio — meetings, voice notes, lectures",
    fireflies: "Meetings (Zoom, Teams, Meet)",
  },
  {
    feature: "Summaries",
    sythio: "\u2713 From audio directly",
    fireflies: "\u2713 AI-generated from transcript",
  },
  {
    feature: "Task extraction",
    sythio: "\u2713 Automatic with speaker attribution",
    fireflies: "\u2713 Action items from transcript",
  },
  {
    feature: "Action plans",
    sythio: "\u2713 Structured and prioritized",
    fireflies: "\u2014",
  },
  {
    feature: "Executive reports",
    sythio: "\u2713 Shareable reports",
    fireflies: "\u2014",
  },
  {
    feature: "Speaker detection",
    sythio: "\u2713 With task attribution",
    fireflies: "\u2713 Speaker labels",
  },
  {
    feature: "Study notes",
    sythio: "\u2713 Structured for review",
    fireflies: "\u2014",
  },
  {
    feature: "Follow-up messages",
    sythio: "\u2713 Ready-to-send drafts",
    fireflies: "\u2014",
  },
  {
    feature: "Clean text",
    sythio: "\u2713 Polished prose from audio",
    fireflies: "\u2014",
  },
  {
    feature: "Key points",
    sythio: "\u2713 Extracted and organized",
    fireflies: "\u2713 Highlights",
  },
  {
    feature: "Ideas extraction",
    sythio: "\u2713 Captured and categorized",
    fireflies: "\u2014",
  },
  {
    feature: "Works without meeting integration",
    sythio: "\u2713 Upload any audio file",
    fireflies: "Requires calendar integration",
  },
  {
    feature: "Voice notes & brainstorms",
    sythio: "\u2713 Built for any audio",
    fireflies: "\u2014",
  },
  {
    feature: "Free plan",
    sythio: "$0 — 5 recordings/mo",
    fireflies: "$0 — limited credits",
  },
  {
    feature: "Pro plan",
    sythio: "$12/mo",
    fireflies: "$18/mo",
  },
];

export default function FirefliesComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              Comparison
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Sythio vs Fireflies.ai
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Fireflies.ai sends a bot to join your meetings and transcribe
              them. Sythio works with any audio and transforms it into 9
              structured outputs — no bot required.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/pricing"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                Try Sythio Free
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

      {/* The Core Difference */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              Two approaches
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              The Core Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-background border border-border-light">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">
                Fireflies.ai&apos;s approach
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Meeting bot
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                Fireflies sends an AI assistant — named Fred — to join your
                scheduled meetings on Zoom, Teams, or Google Meet. It records the
                meeting, generates a transcript, and provides a summary with
                action items. It is purpose-built for meeting workflows with
                calendar and CRM integrations.
              </p>
              <ul className="space-y-3">
                {[
                  "Bot joins meetings automatically",
                  "Transcript + AI summary",
                  "Action items from conversations",
                  "CRM and calendar integrations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-light shrink-0" />
                    <span className="text-sm text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-foreground text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">
                Sythio&apos;s approach
              </p>
              <h3 className="text-xl font-semibold text-white mb-4">
                Audio intelligence for anything
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Sythio does not need to join your meetings. Record with any
                device, upload any audio file, and Sythio transforms it into 9
                structured formats. It works with meetings, but also voice notes,
                lectures, brainstorming sessions, client calls, and any other
                audio you capture throughout your day.
              </p>
              <ul className="space-y-3">
                {[
                  "9 structured output formats",
                  "Works with any audio source",
                  "No bot in your meetings",
                  "Speaker detection with attribution",
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
      </section>

      {/* Comparison Table */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Feature-by-Feature Comparison
            </h2>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              An honest look at what each tool offers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-border-light overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border-light">
                    <th className="text-left p-4 text-sm font-semibold text-foreground">
                      Feature
                    </th>
                    <th className="text-center p-4 text-sm font-semibold text-foreground">
                      Sythio
                    </th>
                    <th className="text-center p-4 text-sm font-semibold text-muted">
                      Fireflies.ai
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-border-light last:border-0"
                    >
                      <td className="p-4 text-sm text-muted">{row.feature}</td>
                      <td className="p-4 text-center text-sm text-foreground">
                        {row.sythio}
                      </td>
                      <td className="p-4 text-center text-sm text-muted">
                        {row.fireflies}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* When to Choose Sythio */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                When to Choose Sythio
              </h2>
              <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
                Sythio is the better fit when your audio life goes beyond
                scheduled meetings.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "You don't want a bot in your meetings",
                  description:
                    "Some participants find meeting bots intrusive or distracting. Sythio works from a recording you already have — no bot presence, no permissions needed from other attendees.",
                },
                {
                  title: "Your audio isn't limited to meetings",
                  description:
                    "Voice notes on your commute, lecture recordings, interview tapes, brainstorming sessions — Sythio processes any audio, not just scheduled calendar events.",
                },
                {
                  title: "You want more than a transcript and a summary",
                  description:
                    "Fireflies gives you a transcript and a summary. Sythio gives you 9 structured formats — including action plans, executive reports, follow-up messages, and study notes.",
                },
                {
                  title: "You value structured outputs over raw transcription",
                  description:
                    "If you want your audio turned into organized, actionable information — not a long text document — Sythio's multi-output approach is purpose-built for that.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-background border border-border-light"
                >
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Comparisons */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              More Comparisons
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                label: "vs Otter.ai",
                href: "/compare/otter",
              },
              {
                label: "vs tl;dv",
                href: "/compare/tldv",
              },
              {
                label: "All Features",
                href: "/features",
              },
              {
                label: "Pricing",
                href: "/pricing",
              },
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
              Audio intelligence
              <br />
              without the meeting bot
            </h2>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              Try Sythio free and experience what happens when your audio is
              truly transformed — not just transcribed and summarized.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                Start Free
              </Link>
              <Link
                href="/features"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
              >
                Explore Features
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
