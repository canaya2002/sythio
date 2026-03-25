import Link from "next/link";

export default function SpeakerDetectionPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">Features</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Know Who Said What. Automatically.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Sythio detects and separates speakers in your recordings. Every summary, task, and action item is attributed to the right person — no manual tagging required.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
                Start Free
              </Link>
              <Link href="/features" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">
                All Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Process</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              How Speaker Detection Works
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              No setup, no training, no pre-registration. Sythio identifies distinct voices from the first recording and improves with every interaction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Automatic Detection</h3>
              <p className="text-sm text-muted leading-relaxed">
                Sythio analyzes voice characteristics — pitch, cadence, tone — and separates speakers without any prior information about who is in the room.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Voice Separation</h3>
              <p className="text-sm text-muted leading-relaxed">
                Even when speakers talk over each other or switch rapidly, Sythio maintains accurate separation. Crosstalk and interruptions are handled gracefully.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Speaker Labels</h3>
              <p className="text-sm text-muted leading-relaxed">
                Each speaker is assigned a consistent label throughout the recording. Transcripts, summaries, and outputs all reference the same speaker identity.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Rename Anytime</h3>
              <p className="text-sm text-muted leading-relaxed">
                Replace generic labels with real names. Once renamed, every output — from summaries to task lists — updates to reflect the correct person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smarter Outputs with Speaker Context */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Smarter Outputs</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Every Output Knows Who Said It
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Speaker detection is not a standalone feature. It enriches everything Sythio produces. When you know who said what, every output becomes more useful.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Tasks Assigned Correctly</h3>
              <p className="text-sm text-muted leading-relaxed">
                When someone commits to a task in a conversation, Sythio attributes it to them. No ambiguity about who owns what. Combined with <Link href="/features/task-extraction" className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors">task extraction</Link>, every action item has a name attached.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Decisions Attributed</h3>
              <p className="text-sm text-muted leading-relaxed">
                Summaries reflect who proposed an idea, who agreed, and who raised concerns. When decisions need revisiting, you know exactly who was involved and what they said.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Per-Speaker Summaries</h3>
              <p className="text-sm text-muted leading-relaxed">
                Need to know what a specific person contributed? Sythio can generate speaker-specific breakdowns so you can review individual contributions without scanning the full recording.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10+ Speakers Supported */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Scale</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Handles Complex Conversations
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Sythio supports recordings with 10 or more speakers. Team meetings, panel discussions, group interviews, and large calls are all handled with consistent accuracy.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">Accurate with 2 speakers or 12</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">Works with varying audio quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">Handles overlapping speech and quick exchanges</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">Consistent labels across long recordings</span>
                </li>
              </ul>
            </div>
            <div className="bg-background rounded-2xl border border-border-light p-10">
              <div className="space-y-5">
                {[
                  { label: "Speaker 1", name: "Alex", color: "bg-indigo-500" },
                  { label: "Speaker 2", name: "Morgan", color: "bg-violet-500" },
                  { label: "Speaker 3", name: "Jordan", color: "bg-amber-500" },
                  { label: "Speaker 4", name: "Casey", color: "bg-emerald-500" },
                ].map((speaker) => (
                  <div key={speaker.label} className="flex items-center gap-4">
                    <div className={`w-9 h-9 rounded-full ${speaker.color} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                      {speaker.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground">{speaker.name}</p>
                      <div className="mt-1 h-2 bg-border-light rounded-full overflow-hidden">
                        <div className={`h-full ${speaker.color} rounded-full`} style={{ width: `${65 + Math.floor(speaker.name.length * 5)}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted-light text-center">Speakers detected and separated automatically</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Speaker Detection Matters */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Use Cases</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Where Speaker Detection Matters
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Team Meetings</h3>
              <p className="text-sm text-muted leading-relaxed">
                Know who committed to what. Speaker-attributed tasks and decisions mean no one can say they were not in the loop.
              </p>
            </Link>
            <Link href="/use-cases/client-calls" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Client Calls</h3>
              <p className="text-sm text-muted leading-relaxed">
                Separate client feedback from internal discussion. Attribute requirements and decisions to the right stakeholder for clear follow-up.
              </p>
            </Link>
            <Link href="/use-cases/lectures" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Interviews</h3>
              <p className="text-sm text-muted leading-relaxed">
                Clearly separate interviewer and interviewee. Review responses by person, compare candidates, and create structured interview notes.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">Related</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/features/ai-summaries" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">AI Summaries</p>
            </Link>
            <Link href="/features/task-extraction" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Task Extraction</p>
            </Link>
            <Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Meetings</p>
            </Link>
            <Link href="/use-cases/client-calls" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Client Calls</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Every Voice Identified. Every Word Attributed.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Speaker detection is built into every Sythio output. Record a conversation and see the difference.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300">Start Free</Link>
            <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">Explore the Product</Link>
          </div>
          <p className="mt-6 text-sm text-muted">Free plan available. No credit card required.</p>
        </div>
      </section>
    </>
  );
}
