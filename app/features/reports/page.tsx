import Link from "next/link";

export default function ReportsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">Features</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Executive Reports from Every Conversation
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Sythio generates professional, stakeholder-ready reports from any recording. Decisions documented. Risks flagged. Recommendations structured. Ready to share with leadership in seconds.
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

      {/* Why Reports Matter */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">The Problem</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Nobody Reads a 45-Minute Transcript
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Stakeholders need to know what happened, what was decided, and what comes next. They do not need every word. A raw transcript buries the signal in noise. A summary is too short. A report hits the right balance.
              </p>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Sythio generates reports that look like they were written by someone who attended the meeting, understood the context, and knew what leadership needs to see.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-4">What a Report Includes</p>
                <ul className="space-y-3">
                  {[
                    "Executive summary of the conversation",
                    "Key decisions and their rationale",
                    "Open risks and unresolved items",
                    "Action items with owners and timelines",
                    "Recommendations and next steps",
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
              Not a Template. A Tailored Report.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Sythio does not fill in a generic template. Each report is generated from the actual content of your recording, reflecting the specific topics, decisions, and dynamics of the conversation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Context-Aware Structure</h3>
              <p className="text-sm text-muted leading-relaxed">
                A strategy session produces a different report than a client call. Sythio adapts the structure to match the conversation type and content.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Speaker Attribution</h3>
              <p className="text-sm text-muted leading-relaxed">
                Decisions and statements are attributed to the people who made them. Every claim in the report is traceable to a specific speaker.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Professional Tone</h3>
              <p className="text-sm text-muted leading-relaxed">
                Reports are written in a clear, formal tone suitable for leadership, clients, or board-level communication. No casual language. No filler.
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
              <h3 className="text-lg font-semibold text-foreground mb-2">Record or Upload</h3>
              <p className="text-sm text-muted leading-relaxed">
                Capture a meeting, call, or presentation directly in Sythio, or upload an existing recording. Any audio format works.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Sythio Analyzes</h3>
              <p className="text-sm text-muted leading-relaxed">
                The recording is processed for context, speaker identification, and content hierarchy. Key topics, decisions, and open items are identified.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Get Your Report</h3>
              <p className="text-sm text-muted leading-relaxed">
                Receive a structured, professional report you can share with stakeholders, attach to a project, or archive for reference. Export as PDF or text.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Reports Help */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Use Cases</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Where Executive Reports Shine
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Anytime the outcome of a conversation needs to be documented, shared, or escalated, a report is the right format.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Board & Leadership Meetings</h3>
              <p className="text-sm text-muted leading-relaxed">
                Generate polished meeting reports with decisions, risks, and strategic takeaways. Share with leadership or board members who were not present.
              </p>
            </Link>
            <Link href="/use-cases/client-calls" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Client Engagement Reports</h3>
              <p className="text-sm text-muted leading-relaxed">
                Document every client conversation with requirements, feedback, agreements, and next steps. Keep your team aligned on client expectations.
              </p>
            </Link>
            <div className="bg-white rounded-2xl border border-border-light p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Project Status Updates</h3>
              <p className="text-sm text-muted leading-relaxed">
                Turn project check-ins into structured progress reports. Blockers, milestones, and ownership are surfaced automatically.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Interview Debriefs</h3>
              <p className="text-sm text-muted leading-relaxed">
                Capture interview conversations and generate structured debrief reports. Compare candidates objectively with consistent documentation.
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
              Reports Are Just One Output
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              From the same recording, Sythio can also produce summaries, task lists, action plans, and more. Choose a report when you need a formal, comprehensive document. Choose other formats when you need something lighter.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/features/ai-summaries" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">AI Summaries</h3>
              <p className="text-sm text-muted leading-relaxed">
                When you need a quick overview rather than a full report. Summaries capture what matters in a fraction of the length.
              </p>
            </Link>
            <Link href="/features/task-extraction" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Task Extraction</h3>
              <p className="text-sm text-muted leading-relaxed">
                When the focus is on action items. Tasks are pulled with owners and deadlines, ready for your project management tool.
              </p>
            </Link>
            <Link href="/features/messages" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Messages</h3>
              <p className="text-sm text-muted leading-relaxed">
                When you need a quick follow-up email instead of a formal report. Messages are concise and ready to send.
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
            <Link href="/features/ai-summaries" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">AI Summaries</p>
            </Link>
            <Link href="/features/action-plans" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Action Plans</p>
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
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            From Conversation to Boardroom-Ready Report
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Every important conversation deserves a professional record. Sythio delivers one in seconds.
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
