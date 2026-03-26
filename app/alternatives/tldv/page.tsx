import Link from "next/link";

const alternatives = [
  {
    rank: 1,
    name: "Sythio",
    tagline: "AI audio intelligence that turns any recording into 9 structured outputs.",
    bestFor: "Anyone who needs structured outputs from any audio source — meetings, voice notes, lectures, and more. Not limited to video calls.",
    pricing: "Free (5 recordings/mo) | Pro $12/mo",
    compareHref: "/product",
    highlighted: true,
    features: [
      "9 structured output formats from one recording",
      "Works with any audio source, not just video meetings",
      "Speaker detection with task attribution",
      "Action plans, executive reports, follow-up messages",
      "Clean text, key points, and ideas extraction",
    ],
  },
  {
    rank: 2,
    name: "Otter.ai",
    tagline: "AI-powered transcription tool with real-time meeting captions and searchable transcripts.",
    bestFor: "Users who prioritize accurate, real-time transcription with a searchable library.",
    pricing: "Free (limited) | Pro $16.99/mo",
    compareHref: "/compare/otter",
    highlighted: false,
    features: [
      "Real-time transcription and live captions",
      "Searchable transcript library",
      "Speaker identification and labeling",
    ],
  },
  {
    rank: 3,
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
    otter: "Transcript + summary",
    fireflies: "Transcript + summary",
    notta: "Transcript",
    audiopen: "Polished text",
  },
  {
    feature: "Audio file support",
    sythio: "\u2713",
    otter: "\u2713",
    fireflies: "\u2014",
    notta: "\u2713",
    audiopen: "\u2713",
  },
  {
    feature: "Voice notes support",
    sythio: "\u2713",
    otter: "\u2014",
    fireflies: "\u2014",
    notta: "\u2713",
    audiopen: "\u2713",
  },
  {
    feature: "Task extraction",
    sythio: "\u2713",
    otter: "\u2014",
    fireflies: "\u2713",
    notta: "\u2014",
    audiopen: "\u2014",
  },
  {
    feature: "Action plans",
    sythio: "\u2713",
    otter: "\u2014",
    fireflies: "\u2014",
    notta: "\u2014",
    audiopen: "\u2014",
  },
  {
    feature: "Executive reports",
    sythio: "\u2713",
    otter: "\u2014",
    fireflies: "\u2014",
    notta: "\u2014",
    audiopen: "\u2014",
  },
  {
    feature: "Speaker detection",
    sythio: "\u2713",
    otter: "\u2713",
    fireflies: "\u2713",
    notta: "\u2713",
    audiopen: "\u2014",
  },
  {
    feature: "Free plan",
    sythio: "5 recordings/mo",
    otter: "Limited minutes",
    fireflies: "Limited minutes",
    notta: "Limited minutes",
    audiopen: "Limited notes",
  },
  {
    feature: "Starting price",
    sythio: "$12/mo",
    otter: "$16.99/mo",
    fireflies: "$18/mo",
    notta: "$14.99/mo",
    audiopen: "$99/year",
  },
];

export default function TldvAlternativesPage() {
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
              Looking for a tl;dv alternative?
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              tl;dv is a great video meeting recorder, but it&apos;s not the
              right fit for everyone. If you need audio-first flexibility, more
              output formats, or support beyond video calls, here are the best
              tl;dv alternatives in 2026.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/pricing"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                Try Sythio Free
              </Link>
              <Link
                href="/compare/tldv"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
              >
                Sythio vs tl;dv
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
                Why People Switch from tl;dv
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Video-only focus",
                  description:
                    "tl;dv is designed specifically for video meetings on Google Meet, Zoom, and Teams. If you record voice notes, process audio files, or capture in-person conversations, tl;dv simply does not support those use cases.",
                },
                {
                  title: "No audio file support",
                  description:
                    "You cannot upload an audio file to tl;dv for processing. It only works with live video meetings. This makes it unusable for podcasters, researchers, students, and anyone working with recorded audio.",
                },
                {
                  title: "Limited output formats",
                  description:
                    "tl;dv gives you video highlights, clips, and basic summaries. But if you need structured action plans, executive reports, follow-up messages, or task lists, you will need to create those manually.",
                },
                {
                  title: "Higher price point",
                  description:
                    "At $20/month for the Pro plan, tl;dv is one of the more expensive options in this space. Alternatives that offer more output formats and broader audio support can deliver significantly more value.",
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
              What to Look for in a tl;dv Alternative
            </h2>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              If tl;dv falls short for your workflow, here&apos;s what to
              prioritize.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Audio file support",
                description:
                  "Upload recordings, voice memos, podcast episodes, or lecture audio. Not just live video meetings.",
              },
              {
                title: "Multiple output formats",
                description:
                  "Beyond clips and summaries — look for tasks, action plans, reports, follow-ups, and structured notes.",
              },
              {
                title: "Any audio source",
                description:
                  "The tool should work with voice notes, in-person recordings, phone calls, and uploaded files.",
              },
              {
                title: "Speaker detection",
                description:
                  "Accurate speaker identification matters for multi-person recordings, regardless of the source.",
              },
              {
                title: "Affordable pricing",
                description:
                  "Compare what you get per dollar. Broader functionality at a lower price is better value.",
              },
              {
                title: "Fast, simple workflow",
                description:
                  "Record or upload, and get structured results in seconds. No complex setup or calendar sync needed.",
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
              Best tl;dv Alternatives
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
              How the top tl;dv alternatives stack up at a glance.
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
                      Otter.ai
                    </th>
                    <th className="text-center p-4 text-sm font-semibold text-muted">
                      Fireflies
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
                        {row.otter}
                      </td>
                      <td className="p-4 text-center text-sm text-muted">
                        {row.fireflies}
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
              Beyond video meetings
            </h2>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              Try Sythio free and get 9 structured outputs from any audio source
              — voice notes, meetings, lectures, and more. No video-only
              limitations.
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
