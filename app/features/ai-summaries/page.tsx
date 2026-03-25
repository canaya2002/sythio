import Link from "next/link";

export default function AISummariesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">Features</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Audio Summaries That Capture What Matters
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Sythio listens to your recordings and delivers concise, context-aware summaries. Not a shortened transcript. A clear overview of what was discussed, what was decided, and what comes next.
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

      {/* Not a Shorter Transcript */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">What Makes It Different</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Not a Shorter Transcript
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Most tools compress your words. Sythio understands them. The result is a summary that reads like it was written by someone who was in the room and knew what mattered.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Understands Context</h3>
              <p className="text-sm text-muted leading-relaxed">
                Sythio recognizes the difference between casual remarks and critical decisions. Your summary reflects what actually mattered, not just what was said the most.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Identifies Themes</h3>
              <p className="text-sm text-muted leading-relaxed">
                Related points scattered across a long conversation are grouped together. The summary organizes topics logically, even when the conversation did not.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Highlights Decisions</h3>
              <p className="text-sm text-muted leading-relaxed">
                Key decisions and agreements surface clearly in every summary. No more re-listening to figure out what was actually agreed upon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Process</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Record or Upload</h3>
              <p className="text-sm text-muted leading-relaxed">
                Capture audio directly in Sythio or upload an existing recording. Meetings, voice notes, lectures, interviews — any audio works.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Sythio Analyzes</h3>
              <p className="text-sm text-muted leading-relaxed">
                The audio is processed in seconds. Sythio identifies speakers, understands context, separates topics, and determines what is most important.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Get Your Summary</h3>
              <p className="text-sm text-muted leading-relaxed">
                Receive a structured summary with key points, decisions, and context. Share it, export it, or use it as a starting point for action items and follow-ups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Summaries Help */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Use Cases</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Where Summaries Help
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Every recording tells a story. Summaries make that story accessible in seconds, regardless of how long or complex the original audio was.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Meetings</h3>
              <p className="text-sm text-muted leading-relaxed">
                A 60-minute meeting becomes a two-paragraph summary. Decisions are highlighted, action items are surfaced, and everyone stays aligned without re-watching the recording.
              </p>
            </Link>
            <Link href="/use-cases/lectures" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Lectures</h3>
              <p className="text-sm text-muted leading-relaxed">
                Capture the core concepts from any lecture. Sythio identifies key arguments, examples, and conclusions so you can review in minutes instead of hours.
              </p>
            </Link>
            <Link href="/use-cases/voice-notes" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Voice Notes</h3>
              <p className="text-sm text-muted leading-relaxed">
                Rambling thoughts become structured notes. Record whatever comes to mind and let Sythio organize it into something clear and actionable.
              </p>
            </Link>
            <Link href="/use-cases/client-calls" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Client Calls</h3>
              <p className="text-sm text-muted leading-relaxed">
                Every client conversation is summarized with requirements, feedback, and next steps. Share with your team or archive for reference.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Beyond Summaries */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">One Recording, Many Outputs</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Beyond Summaries
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              A summary is just the beginning. From the same recording, Sythio can also generate task lists, structured action plans, executive reports, and more. Choose the output that fits the moment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/features/task-extraction" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Task Extraction</h3>
              <p className="text-sm text-muted leading-relaxed">
                Automatically pull action items, owners, and deadlines from conversations. Every commitment becomes a trackable task.
              </p>
            </Link>
            <Link href="/features/action-plans" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Action Plans</h3>
              <p className="text-sm text-muted leading-relaxed">
                Go beyond a flat list. Get structured, step-by-step plans with priorities and dependencies, built from what was actually discussed.
              </p>
            </Link>
            <Link href="/features/clean-text" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Clean Text</h3>
              <p className="text-sm text-muted leading-relaxed">
                Get polished, readable text from your audio. Filler words removed, grammar corrected, structure added. Ready to publish or share.
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
            <Link href="/features/speaker-detection" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Speaker Detection</p>
            </Link>
            <Link href="/features/task-extraction" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Task Extraction</p>
            </Link>
            <Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Meetings</p>
            </Link>
            <Link href="/product" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Overview</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Product</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Stop Re-Listening. Start Reading.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Every recording deserves a clear summary. Sythio delivers one in seconds.
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
