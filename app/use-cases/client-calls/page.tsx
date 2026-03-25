import Link from "next/link";

export default function ClientCallsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">Use Cases</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Client Calls That Lead to Clear Action
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Every client call contains decisions, commitments, and context that shapes the project. Sythio turns those calls into structured summaries, attributed tasks, and professional follow-up messages — so nothing gets lost between the call and the work.
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
              The Follow-up That Never Happened
            </h2>
            <div className="mt-8 space-y-6 text-lg md:text-xl text-muted leading-relaxed">
              <p>
                You hang up from a client call. You had a productive conversation. The client approved a budget increase, asked for a revised timeline, and mentioned a new stakeholder who needs to be looped in.
              </p>
              <p>
                Three hours later, you are deep in other work. The follow-up email still is not sent. By tomorrow, the details are fuzzy. Was the budget increase 10% or 15%? Did they want the revised SOW by Wednesday or Thursday?
              </p>
              <p>
                Client relationships depend on follow-through. When details slip, trust erodes — not because of bad intentions, but because the information never made it from the call to the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sythio Creates */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            What Sythio Creates from Client Calls
          </h2>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-14">
            Record the call. Get structured output within seconds. Send the follow-up before you move on to the next task.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Summary</h3>
              <p className="text-sm text-muted leading-relaxed">A structured overview of the call: what was discussed, what was decided, and what the client expects next. Share it with your team so everyone has the same context.</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Tasks</h3>
              <p className="text-sm text-muted leading-relaxed">Every commitment extracted from the conversation. What you promised the client, what the client needs to provide, and the deadlines attached to each.</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Follow-up Message</h3>
              <p className="text-sm text-muted leading-relaxed">A professional follow-up email drafted from the call content. Includes key decisions, next steps, and action items. Review, adjust, and send.</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Executive Report</h3>
              <p className="text-sm text-muted leading-relaxed">A polished report suitable for stakeholders and leadership. Client feedback, project status, and decisions formatted for executive review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Detection for Client Calls */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Speaker Detection for Client Calls
              </h2>
              <div className="mt-8 space-y-5 text-lg md:text-xl text-muted leading-relaxed">
                <p>
                  In client conversations, knowing who said what is not a nice-to-have — it is essential. The client approved the budget. Your account manager committed to a delivery date. The technical lead flagged a dependency.
                </p>
                <p>
                  Sythio identifies individual speakers throughout the call. Tasks are attributed to the person who took them on. Decisions are connected to the person who made them. The follow-up message reflects who committed to what.
                </p>
                <p>
                  No more ambiguity about who said what. No more guessing after the call.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/features/speaker-detection" className="text-base font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">
                  Learn more about speaker detection
                </Link>
              </div>
            </div>
            <div className="bg-background rounded-2xl border border-border-light p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-5">Call Attribution</p>
              <div className="space-y-5">
                <div className="bg-white rounded-xl border border-border-light p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="text-[10px] font-semibold text-emerald-700">C</span>
                    </div>
                    <p className="text-xs font-medium text-emerald-600">Client</p>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">&quot;We can increase the budget by 15%. I need the revised SOW by Wednesday.&quot;</p>
                </div>
                <div className="bg-white rounded-xl border border-border-light p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-[10px] font-semibold text-indigo-700">Y</span>
                    </div>
                    <p className="text-xs font-medium text-indigo-600">You</p>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">&quot;I will have the revised SOW to you by end of day Wednesday. I will also loop in our new design lead.&quot;</p>
                </div>
                <div className="mt-4 pt-4 border-t border-border-light">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-3">Extracted Tasks</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded border-2 border-indigo-400 shrink-0" />
                      <p className="text-sm text-foreground">You: Send revised SOW by Wednesday EOD</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded border-2 border-indigo-400 shrink-0" />
                      <p className="text-sm text-foreground">You: Introduce design lead to client</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded border-2 border-emerald-400 shrink-0" />
                      <p className="text-sm text-foreground">Client: Confirm budget approval internally</p>
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
            <Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Meetings</p>
            </Link>
            <Link href="/for/consultants" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Audience</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Sythio for Consultants</p>
            </Link>
            <Link href="/features/speaker-detection" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Speaker Detection</p>
            </Link>
            <Link href="/features/messages" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Follow-up Messages</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Turn Every Client Call into Clear Next Steps
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Stop letting client context slip through the cracks. Let Sythio turn your calls into structured output that builds trust and drives projects forward.
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
