import Link from "next/link";

export default function IdeasPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">Features</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Capture Every Idea Before It Disappears
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Brainstorming sessions are full of potential. But without structure, great ideas get lost in the noise. Sythio captures them all, groups them by theme, and ranks them by potential.
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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">The Problem</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Great Ideas Deserve More Than a Forgotten Recording
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                You brainstorm with your team. Twenty ideas fly around the room. Maybe someone writes a few on a whiteboard. The session ends, the energy fades, and a week later no one remembers what was said.
              </p>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Sythio makes sure every idea is captured, categorized, and ready for evaluation. The creative energy stays alive long after the session ends.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-4">How Sythio Organizes Ideas</p>
                <ul className="space-y-3">
                  {[
                    "Ideas grouped by theme or category",
                    "Each idea described with context from the conversation",
                    "Ranked by group energy and consensus",
                    "Attributed to the person who proposed it",
                    "Connected to related ideas and next steps",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                      <span className="text-sm text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">What Makes It Different</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              More Than a List of Random Thoughts
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              A raw transcript of a brainstorming session is chaos. Sythio imposes structure without losing creativity. Ideas are preserved in their original spirit but organized for action.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Thematic Grouping</h3>
              <p className="text-sm text-muted leading-relaxed">
                Ideas that relate to the same topic or problem are grouped together, even if they were mentioned at different points in the conversation.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Context Preserved</h3>
              <p className="text-sm text-muted leading-relaxed">
                Each idea includes the reasoning or context that was discussed. You do not just get the idea — you get why it came up and what sparked it.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Ready for Evaluation</h3>
              <p className="text-sm text-muted leading-relaxed">
                Ideas are presented in a format that makes it easy to evaluate, prioritize, and decide which ones to pursue. No re-listening required.
              </p>
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
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Record Your Session</h3>
              <p className="text-sm text-muted leading-relaxed">
                Hit record during your brainstorming session, creative meeting, or solo idea dump. Let the ideas flow naturally.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Sythio Extracts</h3>
              <p className="text-sm text-muted leading-relaxed">
                Every distinct idea is identified, described, and categorized. Related concepts are linked. Tangents are separated from core proposals.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Get Organized Ideas</h3>
              <p className="text-sm text-muted leading-relaxed">
                Receive a structured collection of all ideas from the session. Share with your team, evaluate individually, or use as input for your next planning cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Use Cases</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Where Idea Capture Shines
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/use-cases/brainstorming" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Team Brainstorming</h3>
              <p className="text-sm text-muted leading-relaxed">
                Every participant&apos;s ideas are captured equally. No more relying on whoever had the pen. The quiet contributor&apos;s idea is preserved alongside the loudest voice.
              </p>
            </Link>
            <Link href="/use-cases/voice-notes" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Solo Idea Dumps</h3>
              <p className="text-sm text-muted leading-relaxed">
                Record your stream of consciousness and get it back as organized, categorized ideas. Perfect for founders, writers, and creators who think out loud.
              </p>
            </Link>
            <div className="bg-white rounded-2xl border border-border-light p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Product Discovery</h3>
              <p className="text-sm text-muted leading-relaxed">
                Capture feature ideas, user feedback themes, and product direction conversations. Every suggestion is documented and ready for roadmap planning.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Creative Sessions</h3>
              <p className="text-sm text-muted leading-relaxed">
                Marketing campaigns, content ideas, design concepts — any creative session produces ideas worth keeping. Sythio makes sure none are lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Outputs */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">One Recording, Many Outputs</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Ideas Lead to Action
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Once ideas are captured, turn the same session into action plans, task lists, or summaries. Ideas become plans become progress.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/features/action-plans" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Action Plans</h3>
              <p className="text-sm text-muted leading-relaxed">
                Turn the best ideas into structured plans with phases, priorities, and ownership. From brainstorm to roadmap in one step.
              </p>
            </Link>
            <Link href="/features/task-extraction" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Task Extraction</h3>
              <p className="text-sm text-muted leading-relaxed">
                When ideas turn into commitments. Tasks are pulled with owners so every good idea gets someone responsible for it.
              </p>
            </Link>
            <Link href="/features/ai-summaries" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">AI Summaries</h3>
              <p className="text-sm text-muted leading-relaxed">
                A high-level overview of the entire brainstorming session. Great for sharing with people who were not in the room.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">Related</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/features/action-plans" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Action Plans</p>
            </Link>
            <Link href="/features/key-points" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Key Points</p>
            </Link>
            <Link href="/use-cases/brainstorming" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Brainstorming</p>
            </Link>
            <Link href="/product" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Overview</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Product</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Never Lose a Good Idea Again
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Every brainstorm produces something worth keeping. Sythio makes sure you keep it all.
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
