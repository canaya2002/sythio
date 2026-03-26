import Link from "next/link";

const alternatives = [
  {
    rank: 1,
    name: "Sythio",
    tagline: "AI audio intelligence that turns any recording into 9 structured outputs.",
    bestFor: "Anyone who needs more than a transcript — tasks, action plans, reports, follow-ups, and more from a single recording.",
    pricing: "Free (5 recordings/mo) | Pro $12/mo",
    compareHref: "/product",
    highlighted: true,
    features: [
      "9 structured output formats from one recording",
      "Speaker detection with task attribution",
      "Works with any audio source (meetings, voice notes, lectures)",
      "Action plans, executive reports, follow-up messages",
      "Clean text, key points, and ideas extraction",
    ],
  },
  {
    rank: 2,
    name: "Fireflies.ai",
    tagline: "AI meeting assistant that records, transcribes, and summarizes meetings.",
    bestFor: "Teams focused on meeting documentation with CRM integrations.",
    pricing: "Free (limited) | Pro $18/mo",
    compareHref: "/compare/fireflies",
    highlighted: false,
    features: [
      "Automated meeting recording via bot",
      "Searchable transcript library",
      "CRM and collaboration integrations",
    ],
  },
  {
    rank: 3,
    name: "tl;dv",
    tagline: "Video meeting recorder with AI-powered highlights and summaries.",
    bestFor: "Sales and product teams who record video calls and need timestamped highlights.",
    pricing: "Free (limited) | Pro $20/mo",
    compareHref: "/compare/tldv",
    highlighted: false,
    features: [
      "Records Google Meet, Zoom, and Teams",
      "AI-generated summaries and highlights",
      "Clips and reels from meetings",
    ],
  },
  {
    rank: 4,
    name: "Notta",
    tagline: "Real-time transcription tool with multi-language support.",
    bestFor: "Users who need fast, accurate transcription across multiple languages.",
    pricing: "Free (limited) | Pro $14.99/mo",
    compareHref: null,
    highlighted: false,
    features: [
      "Real-time transcription in 100+ languages",
      "Audio and video file transcription",
      "Calendar integrations for meetings",
    ],
  },
  {
    rank: 5,
    name: "AudioPen",
    tagline: "Turns rambling voice notes into polished text.",
    bestFor: "Individual creators and thinkers who capture ideas via voice notes.",
    pricing: "Free (limited) | Prime $99/year",
    compareHref: null,
    highlighted: false,
    features: [
      "Voice-to-polished-text conversion",
      "Multiple writing styles and tones",
      "Simple, distraction-free interface",
    ],
  },
];

const comparisonRows = [
  {
    feature: "Primary output",
    sythio: "9 structured formats",
    fireflies: "Transcript + summary",
    tldv: "Video highlights",
    notta: "Transcript",
    audiopen: "Polished text",
  },
  {
    feature: "Audio-first design",
    sythio: "\u2713",
    fireflies: "Meeting-only",
    tldv: "Video-only",
    notta: "\u2713",
    audiopen: "\u2713",
  },
  {
    feature: "Task extraction",
    sythio: "\u2713",
    fireflies: "\u2713",
    tldv: "\u2014",
    notta: "\u2014",
    audiopen: "\u2014",
  },
  {
    feature: "Action plans",
    sythio: "\u2713",
    fireflies: "\u2014",
    tldv: "\u2014",
    notta: "\u2014",
    audiopen: "\u2014",
  },
  {
    feature: "Speaker detection",
    sythio: "\u2713",
    fireflies: "\u2713",
    tldv: "\u2713",
    notta: "\u2713",
    audiopen: "\u2014",
  },
  {
    feature: "Voice notes support",
    sythio: "\u2713",
    fireflies: "\u2014",
    tldv: "\u2014",
    notta: "\u2713",
    audiopen: "\u2713",
  },
  {
    feature: "Free plan",
    sythio: "5 recordings/mo",
    fireflies: "Limited minutes",
    tldv: "Limited recordings",
    notta: "Limited minutes",
    audiopen: "Limited notes",
  },
  {
    feature: "Starting price",
    sythio: "$12/mo",
    fireflies: "$18/mo",
    tldv: "$20/mo",
    notta: "$14.99/mo",
    audiopen: "$99/year",
  },
];

export default function OtterAlternativesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              Alternatives
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Looking for an Otter.ai alternative?
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Otter.ai is a solid transcription tool, but it&apos;s not the only
              option. Whether you need more output formats, better pricing, or
              audio-first flexibility, here are the best Otter.ai alternatives
              in 2026.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/pricing"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                Try Sythio Free
              </Link>
              <Link
                href="/compare/otter"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
              >
                Sythio vs Otter.ai
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Look for Alternatives */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
                Common frustrations
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Why People Switch from Otter.ai
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Transcription-only output",
                  description:
                    "Otter.ai gives you a transcript and a basic summary. But if you need tasks, action plans, follow-up messages, or executive reports, you have to create those manually from the transcript.",
                },
                {
                  title: "Expensive for what you get",
                  description:
                    "At $16.99/month for the Pro plan, Otter.ai charges a premium for what is primarily transcription with AI summaries layered on top. Several alternatives offer more output formats at a lower price.",
                },
                {
                  title: "No multi-output transformation",
                  description:
                    "Modern audio tools can generate multiple structured outputs from a single recording. Otter.ai still follows the legacy model: record, transcribe, and leave the rest to you.",
                },
                {
                  title: "Meeting-focused, not audio-first",
                  description:
                    "Otter.ai is built around meetings. If you record voice notes, lectures, brainstorming sessions, or client calls outside of Zoom/Meet/Teams, it may not be the best fit.",
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

      {/* What to Look For */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              Evaluation criteria
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              What to Look for in an Otter.ai Alternative
            </h2>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              Not all alternatives are created equal. Here&apos;s what matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Multiple output formats",
                description:
                  "Beyond transcription — look for summaries, tasks, action plans, and reports from a single recording.",
              },
              {
                title: "Audio-first flexibility",
                description:
                  "The tool should work with any audio source, not just calendar-connected meetings.",
              },
              {
                title: "Speaker detection",
                description:
                  "Knowing who said what is essential for accountability and follow-up.",
              },
              {
                title: "Fair pricing",
                description:
                  "Compare what you get per dollar. More outputs at a lower price means better value.",
              },
              {
                title: "Ease of use",
                description:
                  "Record or upload, and get results in seconds. No complex setup or bot configuration needed.",
              },
              {
                title: "Privacy and control",
                description:
                  "Your audio should stay secure. Look for tools with clear privacy policies and data handling.",
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
      </section>

      {/* Top Alternatives List */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              Top picks for 2026
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Best Otter.ai Alternatives
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {alternatives.map((alt) => (
              <div
                key={alt.name}
                className={
                  alt.highlighted
                    ? "p-8 rounded-2xl bg-foreground text-white"
                    : "p-8 rounded-2xl bg-background border border-border-light"
                }
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p
                      className={
                        alt.highlighted
                          ? "text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-2"
                          : "text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-2"
                      }
                    >
                      #{alt.rank}
                    </p>
                    <h3
                      className={
                        alt.highlighted
                          ? "text-xl font-semibold text-white"
                          : "text-xl font-semibold text-foreground"
                      }
                    >
                      {alt.name}
                    </h3>
                  </div>
                  <span
                    className={
                      alt.highlighted
                        ? "text-xs font-medium text-white/60 bg-white/10 px-3 py-1 rounded-full"
                        : "text-xs font-medium text-muted-light bg-white px-3 py-1 rounded-full border border-border-light"
                    }
                  >
                    {alt.pricing}
                  </span>
                </div>

                <p
                  className={
                    alt.highlighted
                      ? "text-sm text-white/70 leading-relaxed mb-4"
                      : "text-sm text-muted leading-relaxed mb-4"
                  }
                >
                  {alt.tagline}
                </p>

                <p
                  className={
                    alt.highlighted
                      ? "text-sm text-white/80 mb-6"
                      : "text-sm text-foreground mb-6"
                  }
                >
                  <span className="font-medium">Best for:</span> {alt.bestFor}
                </p>

                <ul className="space-y-3 mb-6">
                  {alt.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={
                          alt.highlighted
                            ? "mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
                            : "mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-light shrink-0"
                        }
                      />
                      <span
                        className={
                          alt.highlighted
                            ? "text-sm text-white/80"
                            : "text-sm text-muted"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {alt.compareHref && (
                  <Link
                    href={alt.compareHref}
                    className={
                      alt.highlighted
                        ? "inline-flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors"
                        : "inline-flex items-center text-sm font-medium text-foreground hover:text-accent-muted transition-colors"
                    }
                  >
                    {alt.highlighted ? "See how Sythio works" : `Compare Sythio vs ${alt.name}`}
                    <span className="ml-1">&rarr;</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Quick Comparison
            </h2>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              How the top Otter.ai alternatives stack up at a glance.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-border-light overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-border-light">
                    <th className="text-left p-4 text-sm font-semibold text-foreground">
                      Feature
                    </th>
                    <th className="text-center p-4 text-sm font-semibold text-foreground">
                      Sythio
                    </th>
                    <th className="text-center p-4 text-sm font-semibold text-muted">
                      Fireflies
                    </th>
                    <th className="text-center p-4 text-sm font-semibold text-muted">
                      tl;dv
                    </th>
                    <th className="text-center p-4 text-sm font-semibold text-muted">
                      Notta
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
                        {row.fireflies}
                      </td>
                      <td className="p-4 text-center text-sm text-muted">
                        {row.tldv}
                      </td>
                      <td className="p-4 text-center text-sm text-muted">
                        {row.notta}
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

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Ready to go beyond transcription?
            </h2>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              Try Sythio free and discover what it&apos;s like to get 9
              structured outputs from a single recording — not just a
              transcript.
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
