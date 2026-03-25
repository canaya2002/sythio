import Link from "next/link";

const comparisonRows = [
  {
    feature: "Primary output",
    sythio: "9 structured formats",
    tldv: "Video recording + transcript",
  },
  {
    feature: "Input type",
    sythio: "Any audio source",
    tldv: "Video meetings only",
  },
  {
    feature: "Summaries",
    sythio: "\u2713 From audio directly",
    tldv: "\u2713 AI-generated from transcript",
  },
  {
    feature: "Task extraction",
    sythio: "\u2713 Automatic with speaker attribution",
    tldv: "\u2713 Basic action items",
  },
  {
    feature: "Action plans",
    sythio: "\u2713 Structured and prioritized",
    tldv: "\u2014",
  },
  {
    feature: "Executive reports",
    sythio: "\u2713 Shareable reports",
    tldv: "\u2014",
  },
  {
    feature: "Speaker detection",
    sythio: "\u2713 With task attribution",
    tldv: "\u2713 Speaker labels",
  },
  {
    feature: "Study notes",
    sythio: "\u2713 Structured for review",
    tldv: "\u2014",
  },
  {
    feature: "Follow-up messages",
    sythio: "\u2713 Ready-to-send drafts",
    tldv: "\u2014",
  },
  {
    feature: "Clean text",
    sythio: "\u2713 Polished prose from audio",
    tldv: "\u2014",
  },
  {
    feature: "Key points",
    sythio: "\u2713 Extracted and organized",
    tldv: "\u2713 Highlights and timestamps",
  },
  {
    feature: "Ideas extraction",
    sythio: "\u2713 Captured and categorized",
    tldv: "\u2014",
  },
  {
    feature: "Video recording",
    sythio: "\u2014 Audio-focused",
    tldv: "\u2713 Full video recording",
  },
  {
    feature: "Timestamped clips",
    sythio: "\u2014",
    tldv: "\u2713 Shareable video clips",
  },
  {
    feature: "Voice notes & brainstorms",
    sythio: "\u2713 Built for any audio",
    tldv: "\u2014",
  },
  {
    feature: "Lectures & study sessions",
    sythio: "\u2713 With study notes output",
    tldv: "\u2014",
  },
  {
    feature: "Free plan",
    sythio: "$0 — 5 recordings/mo",
    tldv: "$0 — limited recordings",
  },
  {
    feature: "Pro plan",
    sythio: "$12/mo",
    tldv: "$18/mo",
  },
];

export default function TldvComparePage() {
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
              Sythio vs tl;dv
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              tl;dv is a powerful video meeting recorder with transcription and
              summaries. Sythio takes a different path — transforming any audio
              into 9 structured outputs for people who need more than meeting
              playback.
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
                tl;dv&apos;s approach
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Video meeting recorder
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                tl;dv records your video meetings and makes them searchable. It
                creates transcripts, generates summaries, and lets you clip and
                share important moments from calls. Its strength is in video
                meeting documentation — reviewing, clipping, and sharing what was
                discussed on camera.
              </p>
              <ul className="space-y-3">
                {[
                  "Video meeting recording",
                  "Timestamped transcripts",
                  "AI summaries with action items",
                  "Shareable video clips and highlights",
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
                Multi-output audio intelligence
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Sythio is not a video recorder. It is an audio intelligence
                platform that transforms any spoken content — meetings, voice
                notes, lectures, brainstorms, client calls — into 9 structured
                output formats. Where tl;dv helps you review what happened,
                Sythio helps you act on it.
              </p>
              <ul className="space-y-3">
                {[
                  "9 structured output formats",
                  "Any audio source, not just meetings",
                  "Action plans, reports, and follow-ups",
                  "Built for transformation, not playback",
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
                      tl;dv
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
                        {row.tldv}
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
                Sythio is the better fit when you need structured outputs from
                any audio, not just meeting recordings.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Your audio goes beyond video meetings",
                  description:
                    "tl;dv is built for video calls. If you also capture voice notes, record lectures, brainstorm out loud, or have phone conversations you want to process — Sythio handles all of it.",
                },
                {
                  title: "You want structured outputs, not video playback",
                  description:
                    "tl;dv excels at letting you review meetings on video. Sythio is built for people who want to skip the playback and go straight to organized summaries, task lists, action plans, and reports.",
                },
                {
                  title: "You need action plans and executive reports",
                  description:
                    "Sythio creates outputs that tl;dv does not — structured action plans, executive reports ready for stakeholders, follow-up messages you can send immediately, and study notes for learning.",
                },
                {
                  title: "You prefer audio-first workflows",
                  description:
                    "If you think in voice, capture ideas by speaking, and want those thoughts organized — Sythio was designed for exactly that kind of audio-first productivity.",
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

      {/* When tl;dv Might Be Better */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                When tl;dv Might Be the Right Choice
              </h2>
              <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
                We believe in honest comparisons. Here is where tl;dv shines.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "You need video recording",
                  description:
                    "If you need to record the video of your meetings — not just the audio — tl;dv is built for that. Sythio is audio-only and does not capture video.",
                },
                {
                  title: "You want shareable video clips",
                  description:
                    "tl;dv lets you clip specific moments from meetings and share them as video snippets. This is a unique strength for teams that need to share visual context.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white border border-border-light"
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
      <section className="py-24 md:py-32 bg-white">
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
              Transform audio, not just
              <br />
              record it
            </h2>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              Try Sythio free and see what your audio becomes when it is
              transformed into structured, actionable outputs — not just a
              recording to replay.
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
