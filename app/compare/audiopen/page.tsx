import Link from "next/link";

const comparisonRows = [
  {
    feature: "Primary output",
    sythio: "9 structured formats",
    audiopen: "Cleaned text note",
  },
  {
    feature: "Summaries",
    sythio: "\u2713 From audio directly",
    audiopen: "\u2014",
  },
  {
    feature: "Task extraction",
    sythio: "\u2713 Automatic with attribution",
    audiopen: "\u2014",
  },
  {
    feature: "Action plans",
    sythio: "\u2713 Structured and prioritized",
    audiopen: "\u2014",
  },
  {
    feature: "Executive reports",
    sythio: "\u2713 Shareable reports",
    audiopen: "\u2014",
  },
  {
    feature: "Speaker detection",
    sythio: "\u2713 With task attribution",
    audiopen: "\u2014",
  },
  {
    feature: "Study notes",
    sythio: "\u2713 Structured for review",
    audiopen: "\u2014",
  },
  {
    feature: "Follow-up messages",
    sythio: "\u2713 Ready-to-send drafts",
    audiopen: "\u2014",
  },
  {
    feature: "Clean text",
    sythio: "\u2713 Polished prose from audio",
    audiopen: "\u2713 Rewritten text note",
  },
  {
    feature: "Key points",
    sythio: "\u2713 Extracted and organized",
    audiopen: "\u2014",
  },
  {
    feature: "Ideas extraction",
    sythio: "\u2713 Captured and categorized",
    audiopen: "\u2014",
  },
  {
    feature: "Multi-speaker audio",
    sythio: "\u2713 Built for conversations",
    audiopen: "Single-speaker focused",
  },
  {
    feature: "Audio sources",
    sythio: "\u2713 Any audio — meetings, lectures, calls",
    audiopen: "Voice memos",
  },
  {
    feature: "Free plan",
    sythio: "$0 — 5 recordings/mo",
    audiopen: "$0 — limited notes",
  },
  {
    feature: "Pro plan",
    sythio: "$12/mo",
    audiopen: "$99/yr",
  },
];

export default function AudioPenComparePage() {
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
              Sythio vs AudioPen
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              AudioPen is a simple voice-to-text tool that cleans up your spoken
              thoughts into neat notes. Sythio takes a different approach —
              transforming audio into 9 structured outputs, not just a single
              cleaned-up text.
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
                AudioPen&apos;s approach
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Voice-to-text simplicity
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                AudioPen is designed for a single purpose: turning rambling voice
                memos into clean, readable text notes. You speak, it rewrites
                your words into polished prose. It is a straightforward tool that
                does one thing well — converting messy speech into a tidy note.
              </p>
              <ul className="space-y-3">
                {[
                  "Voice memo to clean text",
                  "Simple, minimal interface",
                  "Single-output focus",
                  "Personal note-taking use case",
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
                Multi-output transformation
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Sythio was built on the belief that audio contains far more value
                than a single text note. One recording becomes 9 structured
                outputs — summaries, tasks, action plans, executive reports,
                follow-up messages, study notes, clean text, key points, and
                ideas. Each is purpose-built for a different need.
              </p>
              <ul className="space-y-3">
                {[
                  "9 structured output formats",
                  "Speaker detection with task attribution",
                  "Works with any audio source",
                  "Built for action, not just note-taking",
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
                      AudioPen
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
                        {row.audiopen}
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
                Sythio is the better fit when you need more than a cleaned-up
                note.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "You need structured outputs, not just clean text",
                  description:
                    "AudioPen gives you one output: a polished text note. Sythio gives you 9 formats — summaries, tasks, action plans, reports, follow-up messages, and more — all from the same recording.",
                },
                {
                  title: "You work with multi-speaker audio",
                  description:
                    "AudioPen is designed for solo voice memos. Sythio handles meetings, interviews, and group conversations with speaker detection and task attribution for each participant.",
                },
                {
                  title: "You want actionable results, not just documentation",
                  description:
                    "A clean note is nice, but it still requires you to manually extract tasks and next steps. Sythio does that automatically — giving you prioritized action plans and ready-to-send follow-ups.",
                },
                {
                  title: "You process diverse audio beyond voice memos",
                  description:
                    "Lectures, client calls, brainstorming sessions, team meetings — Sythio transforms any audio source into structured outputs. AudioPen is built specifically for personal voice notes.",
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
                label: "vs Fireflies.ai",
                href: "/compare/fireflies",
              },
              {
                label: "vs Notta.ai",
                href: "/compare/notta",
              },
              {
                label: "All Comparisons",
                href: "/compare",
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
              More than a voice note
            </h2>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              Try Sythio free and see the difference between getting a single
              text note and getting 9 structured, actionable outputs from your
              audio.
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
