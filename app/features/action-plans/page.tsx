import Link from "next/link";

export default function ActionPlansPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">Features</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              From Conversation to Structured Action Plan
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Conversations generate ideas, decisions, and direction. Sythio organizes all of it into a step-by-step action plan with clear owners, priorities, and sequencing.
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

      {/* More Than a Task List */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">The Difference</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                More Than a Task List
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                A task list tells you what needs to happen. An action plan tells you what needs to happen, in what order, who is responsible, and how the pieces connect.
              </p>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Sythio analyzes the full conversation and produces a plan that respects dependencies, highlights priorities, and groups related work together. The result is a document you can hand to a team and say: "Here is what we do next."
              </p>
            </div>
            <div className="bg-background rounded-2xl border border-border-light p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-5">Action Plan</p>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-3">Phase 1 — Immediate</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border-light">
                      <div className="w-6 h-6 rounded-full bg-foreground text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Finalize project scope document</p>
                        <p className="text-xs text-muted mt-0.5">Alex — by end of day</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border-light">
                      <div className="w-6 h-6 rounded-full bg-foreground text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Share scope with stakeholders for review</p>
                        <p className="text-xs text-muted mt-0.5">Alex — after step 1</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-3">Phase 2 — This Week</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border-light">
                      <div className="w-6 h-6 rounded-full bg-foreground text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Gather budget estimates from each team</p>
                        <p className="text-xs text-muted mt-0.5">Morgan — by Wednesday</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border-light">
                      <div className="w-6 h-6 rounded-full bg-foreground text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">4</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Draft initial timeline and resource plan</p>
                        <p className="text-xs text-muted mt-0.5">Jordan — by Friday</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              How Action Plans Are Built
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Sythio does not simply list what was said. It interprets the conversation, understands relationships between tasks, and creates a plan that reflects how the work should actually unfold.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Conversation Analysis</h3>
              <p className="text-sm text-muted leading-relaxed">
                Sythio processes the full recording, identifying decisions, commitments, blockers, and dependencies discussed across the conversation.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Structure and Sequence</h3>
              <p className="text-sm text-muted leading-relaxed">
                Tasks are organized into phases based on urgency, dependencies, and logical flow. What needs to happen first goes first.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Assign and Deliver</h3>
              <p className="text-sm text-muted leading-relaxed">
                Using <Link href="/features/speaker-detection" className="text-foreground underline underline-offset-2 hover:text-accent-muted transition-colors">speaker detection</Link>, each step is assigned to the right person. The finished plan is ready to share, export, or act on immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes a Good Action Plan */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Quality</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              What a Sythio Action Plan Includes
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Phased Steps</h3>
              <p className="text-sm text-muted leading-relaxed">
                Work is grouped into logical phases — immediate, short-term, and follow-up — so teams know what to tackle first and what can wait.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Clear Ownership</h3>
              <p className="text-sm text-muted leading-relaxed">
                Every step has a name attached. Combined with speaker detection, ownership is determined from who actually committed during the conversation.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Dependencies Mapped</h3>
              <p className="text-sm text-muted leading-relaxed">
                Steps that depend on other steps are sequenced correctly. The plan reflects the real order of operations, not just a flat list.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Priorities Highlighted</h3>
              <p className="text-sm text-muted leading-relaxed">
                Critical and time-sensitive items are flagged. Your team knows exactly where to focus energy and attention first.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Context Preserved</h3>
              <p className="text-sm text-muted leading-relaxed">
                Each step includes enough context from the original conversation so that anyone reading the plan understands why it exists and what it means.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Share</h3>
              <p className="text-sm text-muted leading-relaxed">
                Export as clean text, copy to your project management tool, or share directly with your team. The plan is formatted and ready to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Action Plans Help */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Use Cases</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Where Action Plans Make a Difference
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Strategy Meetings</h3>
              <p className="text-sm text-muted leading-relaxed">
                Strategic discussions often end with ambiguity. An action plan crystallizes the direction into concrete steps the team can execute on.
              </p>
            </Link>
            <Link href="/use-cases/client-calls" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Project Kickoffs</h3>
              <p className="text-sm text-muted leading-relaxed">
                Kickoff meetings set the stage. Sythio captures the agreed-upon plan, assigns responsibilities, and ensures everyone leaves aligned on what happens next.
              </p>
            </Link>
            <Link href="/use-cases/brainstorming" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Brainstorming Sessions</h3>
              <p className="text-sm text-muted leading-relaxed">
                Ideas generated in brainstorms need structure to become real. Sythio turns creative chaos into an organized plan with clear next steps.
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
            <Link href="/features/task-extraction" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Task Extraction</p>
            </Link>
            <Link href="/features/speaker-detection" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Speaker Detection</p>
            </Link>
            <Link href="/features/ai-summaries" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">AI Summaries</p>
            </Link>
            <Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Meetings</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Turn Talk Into a Plan That Works
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Every productive conversation deserves a structured follow-through. Sythio builds the plan so your team can focus on execution.
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
