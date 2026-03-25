import Link from "next/link";

const comparisons = [
  {
    name: "Otter.ai",
    href: "/compare/otter",
    tagline: "Transcription vs transformation",
    description:
      "Otter excels at real-time transcription. Sythio goes further — transforming audio into 9 structured outputs including action plans, executive reports, and follow-up messages.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    color: "#6366f1",
  },
  {
    name: "Fireflies.ai",
    href: "/compare/fireflies",
    tagline: "Meeting bot vs audio intelligence",
    description:
      "Fireflies joins your meetings to record and transcribe. Sythio works with any audio — meetings, voice notes, lectures, brainstorms — and delivers 9 structured output formats.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "#f59e0b",
  },
  {
    name: "tl;dv",
    href: "/compare/tldv",
    tagline: "Video recorder vs multi-output audio",
    description:
      "tl;dv is built for video meeting recording and summarization. Sythio is built for any audio source and delivers 9 structured outputs far beyond transcripts and summaries.",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    color: "#8b5cf6",
  },
];

const differentiators = [
  {
    title: "9 outputs from one recording",
    description:
      "Most tools give you a transcript and maybe a summary. Sythio creates summaries, tasks, action plans, executive reports, follow-up messages, study notes, clean text, key points, and ideas — all from a single recording.",
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    color: "#6366f1",
  },
  {
    title: "Speaker intelligence",
    description:
      "Sythio detects who said what and attributes tasks, decisions, and action items to specific speakers. Not just labels on a transcript — real understanding of multi-speaker conversations.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    color: "#22c55e",
  },
  {
    title: "Transformation, not transcription",
    description:
      "Transcription gives you a text wall. Sythio gives you structure — organized, prioritized, and ready to act on. The difference between reading a conversation and having it work for you.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "#8b5cf6",
  },
];

export default function ComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              Compare
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              How Sythio Compares
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Most voice and meeting tools stop at transcription. Sythio starts
              there and goes much further — transforming your audio into 9
              structured outputs that are ready to use, share, and act on.
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

      {/* What Makes Sythio Different */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              The difference
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              What Makes Sythio Different
            </h2>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Sythio is not another transcription tool with a summary feature
              bolted on. It was built from the ground up to transform audio into
              structured, actionable outputs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-background border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${item.color}10` }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
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

      {/* Compare with Specific Tools */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              Head-to-head
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Compare with Specific Tools
            </h2>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              See detailed, honest comparisons between Sythio and the most
              popular voice and meeting tools on the market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {comparisons.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="group p-8 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${tool.color}10` }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={tool.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={tool.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent-muted transition-colors">
                  Sythio vs {tool.name}
                </h3>
                <p className="text-sm font-medium text-muted-light mb-4">
                  {tool.tagline}
                </p>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {tool.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">
                  Read full comparison
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
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
              Ready to go beyond
              <br />
              transcription?
            </h2>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              Try Sythio free with 5 recordings. No credit card required. See
              what your audio becomes when it meets real intelligence.
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
