import Link from "next/link";

export default function AudioToCleanTextPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              Audio to Clean Text
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Convert Audio into Clean, Readable Text
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Record a conversation, upload a file, or capture a voice note. Sythio removes filler words, fixes grammar, and delivers polished text that reads naturally — not like a raw transcript.
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
            Three steps to polished text
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            No manual editing. No cleaning up messy transcripts. Sythio transforms spoken audio into text that is ready to share, publish, or use.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Record or upload",
                description:
                  "Capture audio directly inside Sythio or upload an existing file. Voice memos, interviews, dictations — any format works.",
              },
              {
                step: "02",
                title: "Sythio cleans the content",
                description:
                  "Filler words are removed. Grammar is corrected. Sentence structure is improved. The meaning stays intact while the delivery becomes polished.",
              },
              {
                step: "03",
                title: "Get your clean text",
                description:
                  "Readable, well-structured text is ready in seconds. Copy it, export it, or use it directly — no further editing needed.",
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

      {/* ─── What Sythio Clean Text Delivers ─── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
            What You Get
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            What Sythio Clean Text Delivers
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            Not a word-for-word transcript. Clean, professional text that preserves your meaning while removing the rough edges of spoken language.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Filler words removed",
                description:
                  "All the ums, uhs, like, you know, and false starts are stripped out, leaving only the substance of what was said.",
              },
              {
                title: "Grammar corrected",
                description:
                  "Sentence fragments, subject-verb disagreements, and awkward phrasing are cleaned up while preserving your voice.",
              },
              {
                title: "Natural flow",
                description:
                  "The text reads as if it were written, not spoken. Proper paragraphing, punctuation, and sentence structure throughout.",
              },
              {
                title: "Meaning preserved",
                description:
                  "Sythio cleans up how something was said without changing what was said. Your ideas and intent stay intact.",
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

      {/* ─── Not Just Clean Text ─── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">
              One Recording, Many Outputs
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Not Just Clean Text
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              Clean text is one lens on a recording. The same audio can also produce summaries, key points, study notes, and more — all from a single upload.
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
                title: "Key points",
                description: "The most important points distilled into a concise, scannable list.",
                href: "/audio-to-key-points",
              },
              {
                title: "Organized ideas",
                description: "Raw brainstorming sessions turned into structured, grouped ideas.",
                href: "/audio-to-ideas",
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
            Sythio adapts to the content. Whether it is a quick voice memo or a long interview, the clean text preserves the depth while improving the readability.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Voice memos",
                description: "Quick spoken thoughts turned into well-written text you can drop into emails, documents, or notes.",
              },
              {
                title: "Interviews",
                description: "Rambling interview audio cleaned up into professional, quotable text ready for articles or reports.",
              },
              {
                title: "Dictations",
                description: "Dictated drafts of documents, emails, or essays polished into final-ready prose.",
              },
              {
                title: "Meetings",
                description: "Spoken discussions transformed into clean written records that read naturally and professionally.",
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
              href="/features/clean-text"
              className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Clean Text</p>
            </Link>
            <Link
              href="/audio-to-summary"
              className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Outcome</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Audio to Summary</p>
            </Link>
            <Link
              href="/audio-to-key-points"
              className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Outcome</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Audio to Key Points</p>
            </Link>
            <Link
              href="/use-cases/voice-notes"
              className="group block bg-background rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Voice Notes</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 md:py-44 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Stop editing transcripts. Start with clean text.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Every recording becomes polished, readable text — in seconds, not hours.
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
