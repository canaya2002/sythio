import Link from "next/link";

export default function TaskExtractionPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">Features</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Action Items, Extracted Automatically from Any Conversation
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Sythio listens for commitments, promises, and next steps in your recordings — then turns them into a clear, actionable task list with owners and context.
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

      {/* The Problem */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">The Problem</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Tasks Agreed. Never Documented.
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                In every meeting, people make commitments. Someone agrees to send a document. Another person promises to follow up with a client. A deadline is set for next Wednesday.
              </p>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Then the meeting ends. People move on. And those commitments disappear into the ether — until someone realizes, days later, that nothing was done.
              </p>
            </div>
            <div className="bg-background rounded-2xl border border-border-light p-10">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border-light">
                  <div className="w-5 h-5 rounded border-2 border-border shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Send updated proposal to client</p>
                    <p className="text-xs text-muted-light mt-1">Mentioned at 12:34 — never written down</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border-light">
                  <div className="w-5 h-5 rounded border-2 border-border shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Review Q3 numbers before Friday</p>
                    <p className="text-xs text-muted-light mt-1">Agreed by two people — forgotten by both</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border-light">
                  <div className="w-5 h-5 rounded border-2 border-border shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Schedule follow-up with design team</p>
                    <p className="text-xs text-muted-light mt-1">Said out loud — never captured</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-xs text-muted-light text-center">Sound familiar?</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Task Extraction Works */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Process</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              How Task Extraction Works
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Sythio does not just listen for the word "task." It understands the language of commitment — promises, deadlines, assignments, and follow-ups — and extracts them into structured items.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Listens for Commitments</h3>
              <p className="text-sm text-muted leading-relaxed">
                Phrases like "I will handle that," "let us do this by Thursday," or "can you send me that?" are recognized as actionable commitments, not just conversation.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Identifies Owners</h3>
              <p className="text-sm text-muted leading-relaxed">
                Using <Link href="/features/speaker-detection" className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors">speaker detection</Link>, each task is attributed to the person who committed to it. No guessing, no manual assignment.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Creates a Checklist</h3>
              <p className="text-sm text-muted leading-relaxed">
                The output is a clean, structured task list. Each item includes the task description, the owner, any mentioned deadline, and the context from the conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* With Speaker Detection */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Better Together</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Tasks With Names Attached
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Task extraction and <Link href="/features/speaker-detection" className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors">speaker detection</Link> work together. When someone says "I will take care of the budget review," Sythio knows who "I" is and assigns the task accordingly.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">Each task tied to the speaker who committed</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">Deadlines extracted from natural conversation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">Context preserved so tasks make sense in isolation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-base text-muted">Export to your workflow — copy, share, or integrate</span>
                </li>
              </ul>
            </div>
            <div className="bg-background rounded-2xl border border-border-light p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-5">Extracted Tasks</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border-light">
                  <div className="w-5 h-5 rounded border-2 border-emerald-400 bg-emerald-50 shrink-0 mt-0.5 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Send updated proposal to Acme Corp</p>
                    <p className="text-xs text-muted mt-1">Alex — by Wednesday</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border-light">
                  <div className="w-5 h-5 rounded border-2 border-border shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Review Q3 financial numbers</p>
                    <p className="text-xs text-muted mt-1">Morgan — before Friday standup</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border-light">
                  <div className="w-5 h-5 rounded border-2 border-border shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Schedule follow-up with design team</p>
                    <p className="text-xs text-muted mt-1">Jordan — this week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where It Helps */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Use Cases</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Where Task Extraction Helps
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Team Meetings</h3>
              <p className="text-sm text-muted leading-relaxed">
                Every standup, planning session, and review meeting generates tasks. Sythio captures them all so nothing agreed upon goes unfulfilled.
              </p>
            </Link>
            <Link href="/use-cases/client-calls" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Client Calls</h3>
              <p className="text-sm text-muted leading-relaxed">
                Client requests become documented tasks the moment they are spoken. Follow through becomes systematic, not accidental.
              </p>
            </Link>
            <Link href="/use-cases/brainstorming" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Team Standups</h3>
              <p className="text-sm text-muted leading-relaxed">
                Quick daily check-ins generate a stream of micro-commitments. Sythio turns them into a running task list so nothing slips between the cracks.
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
            <Link href="/features/action-plans" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Action Plans</p>
            </Link>
            <Link href="/features/speaker-detection" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Speaker Detection</p>
            </Link>
            <Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Meetings</p>
            </Link>
            <Link href="/features/ai-summaries" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">AI Summaries</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Never Lose an Action Item Again
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Every conversation contains tasks. Sythio finds them and delivers a checklist you can act on immediately.
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
