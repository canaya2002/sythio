import Link from "next/link";

export default function MeetingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">Use Cases</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              AI Meeting Notes That Actually Move Work Forward
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Meetings produce decisions, tasks, and commitments. Sythio turns every meeting recording into a structured summary, clear action items, and ready-to-send follow-ups — so nothing falls through the cracks.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
                Start Free
              </Link>
              <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Meetings End. Then What?
            </h2>
            <div className="mt-8 space-y-6 text-lg md:text-xl text-muted leading-relaxed">
              <p>
                You leave a 45-minute meeting with a vague sense of what was decided. Notes are scattered across notebooks and chat threads. Half the action items never get assigned. The follow-up email takes 20 minutes to write — if it gets written at all.
              </p>
              <p>
                Two days later, someone asks what was agreed. Nobody remembers exactly. The meeting might as well not have happened.
              </p>
              <p>
                The problem is not the meeting itself. It is what happens — or does not happen — after.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Sythio Transforms Meetings */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-16">
            How Sythio Transforms Meetings
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-5">
                <span className="text-lg font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Record or Upload</h3>
              <p className="text-base text-muted leading-relaxed">
                Record directly in Sythio or upload an existing meeting recording. Supports any audio format, any length, any number of speakers.
              </p>
            </div>
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-5">
                <span className="text-lg font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Sythio Processes</h3>
              <p className="text-base text-muted leading-relaxed">
                Speaker detection identifies who said what. The content is analyzed for decisions, commitments, tasks, and key discussion points.
              </p>
            </div>
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-5">
                <span className="text-lg font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Get Structured Output</h3>
              <p className="text-base text-muted leading-relaxed">
                Choose the outputs you need — summary, tasks, action plan, follow-up message — and get them in seconds. Copy, share, or export.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            What You Get from Every Meeting
          </h2>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-14">
            Each meeting recording produces multiple output formats. Use one or all of them, depending on what the situation calls for.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Summary</h3>
              <p className="text-sm text-muted leading-relaxed">A concise overview of what was discussed, what was decided, and what matters most. Skip the 45-minute replay.</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Tasks</h3>
              <p className="text-sm text-muted leading-relaxed">Every task, assignment, and commitment extracted from the conversation. Attributed to the right person when speaker detection is on.</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Action Plan</h3>
              <p className="text-sm text-muted leading-relaxed">A structured plan of next steps, organized by priority and owner. Not just what to do — what to do first.</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Follow-up Message</h3>
              <p className="text-sm text-muted leading-relaxed">A professional follow-up ready to send. Includes key decisions, assigned tasks, and next steps. No more drafting from memory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Detection */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Speaker Detection — Who Said What
              </h2>
              <div className="mt-8 space-y-5 text-lg md:text-xl text-muted leading-relaxed">
                <p>
                  In a meeting with five people, knowing that someone volunteered for a task is only useful if you know who. Sythio identifies individual speakers throughout the recording.
                </p>
                <p>
                  Tasks get attributed to the right person. Decisions are connected to who made them. When you send the follow-up, everyone knows exactly what they committed to.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/features/speaker-detection" className="text-base font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">
                  Learn more about speaker detection
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-semibold text-indigo-700">A</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-indigo-600 mb-1">Alex</p>
                    <p className="text-sm text-muted leading-relaxed">&quot;I can have the budget proposal ready by Friday.&quot;</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-semibold text-violet-700">M</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-violet-600 mb-1">Maria</p>
                    <p className="text-sm text-muted leading-relaxed">&quot;I will schedule the client demos for next week.&quot;</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-semibold text-emerald-700">J</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-emerald-600 mb-1">James</p>
                    <p className="text-sm text-muted leading-relaxed">&quot;We should move the launch to March 15 — gives us two more weeks.&quot;</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border-light">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-3">Extracted Tasks</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded border-2 border-indigo-400 shrink-0" />
                      <p className="text-sm text-foreground">Alex: Prepare budget proposal by Friday</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded border-2 border-violet-400 shrink-0" />
                      <p className="text-sm text-foreground">Maria: Schedule client demos for next week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">Related</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/use-cases/voice-notes" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Voice Notes</p>
            </Link>
            <Link href="/use-cases/client-calls" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Client Calls</p>
            </Link>
            <Link href="/features/task-extraction" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Task Extraction</p>
            </Link>
            <Link href="/features/speaker-detection" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Speaker Detection</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Make Every Meeting Count
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Stop spending time reconstructing what happened. Let Sythio turn your meetings into structured output that drives action.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300">
              Start Free
            </Link>
            <Link href="/product" className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300">
              Explore the Product
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">Free plan available. No credit card required.</p>
        </div>
      </section>
    </>
  );
}
