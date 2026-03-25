import Link from "next/link";

export default function MessagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">Features</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Follow-Up Messages Written for You
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Sythio drafts professional follow-up emails, recap messages, and thank-you notes directly from your recordings. The message captures what was discussed, what was agreed, and what comes next — ready to send.
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
                Follow-Ups That Never Get Sent
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                You leave a meeting knowing you should send a recap. You plan to do it right after. But something else comes up. An hour later, the details are fuzzy. A day later, it feels too late. The follow-up never happens.
              </p>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Sythio solves this by drafting the follow-up immediately after the recording is processed. The message is ready before you even think about it.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-background rounded-2xl border border-foreground/10 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground mb-4">Example Message</p>
                <div className="text-sm text-foreground leading-relaxed space-y-3">
                  <p>Hi team,</p>
                  <p>Thanks for the productive session today. Here&apos;s a quick recap:</p>
                  <p>We agreed to move the launch date to August 1 to accommodate the design review. Sarah will lead the vendor evaluation and share findings by Friday. The Q3 budget was approved at $240K.</p>
                  <p>Next steps: Carlos to prep the board deck by March 28. Everyone to review the updated timeline by EOD Wednesday.</p>
                  <p>Let me know if I missed anything.</p>
                </div>
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
              Not a Generic Template. Your Conversation.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Every message is generated from what was actually said. Sythio does not fill in blanks. It writes a message that accurately reflects the specific conversation, decisions, and next steps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Accurate Recaps</h3>
              <p className="text-sm text-muted leading-relaxed">
                The message reflects what was actually discussed. Key decisions, agreements, and commitments are included. Nothing is fabricated.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Professional Tone</h3>
              <p className="text-sm text-muted leading-relaxed">
                Messages are written in a professional but human tone. Ready to send to clients, colleagues, or leadership without awkward phrasing.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Action Items Included</h3>
              <p className="text-sm text-muted leading-relaxed">
                Next steps and owner assignments are woven into the message naturally. Recipients know exactly what is expected of them.
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
                Record your meeting, client call, or conversation directly in Sythio, or upload an existing recording.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Sythio Drafts</h3>
              <p className="text-sm text-muted leading-relaxed">
                The conversation is analyzed for key outcomes, decisions, and next steps. A professional follow-up message is drafted automatically.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Review and Send</h3>
              <p className="text-sm text-muted leading-relaxed">
                Review the drafted message, make any personal adjustments, and send. Copy to your clipboard or export to your email client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message Types */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Use Cases</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Every Conversation Deserves a Follow-Up
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Meeting Recaps</h3>
              <p className="text-sm text-muted leading-relaxed">
                Send a clear recap to all attendees within minutes of the meeting ending. Decisions documented, next steps assigned, everyone aligned.
              </p>
            </Link>
            <Link href="/use-cases/client-calls" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Client Follow-Ups</h3>
              <p className="text-sm text-muted leading-relaxed">
                Professional follow-up emails that show clients you were listening. Requirements acknowledged, timeline confirmed, next meeting proposed.
              </p>
            </Link>
            <div className="bg-white rounded-2xl border border-border-light p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Thank-You Notes</h3>
              <p className="text-sm text-muted leading-relaxed">
                After interviews, sales calls, or introductions, send a thoughtful thank-you that references specific points from the conversation.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Status Updates</h3>
              <p className="text-sm text-muted leading-relaxed">
                Turn a quick voice check-in into a written status update for your team or manager. Professional, concise, and complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Features */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">One Recording, Many Outputs</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Messages Are Just One Output
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              A follow-up message captures the essence quickly. For deeper documentation, the same recording can produce full reports, task lists, or action plans.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/features/reports" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Executive Reports</h3>
              <p className="text-sm text-muted leading-relaxed">
                When a quick message is not enough. Reports provide formal, comprehensive documentation of the conversation.
              </p>
            </Link>
            <Link href="/features/task-extraction" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Task Extraction</h3>
              <p className="text-sm text-muted leading-relaxed">
                When the follow-up needs to be tracked. Tasks are extracted with owners and deadlines for project management integration.
              </p>
            </Link>
            <Link href="/features/ai-summaries" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">AI Summaries</h3>
              <p className="text-sm text-muted leading-relaxed">
                A structured overview for internal use. Summaries are more detailed than a message but less formal than a report.
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
            <Link href="/features/reports" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Executive Reports</p>
            </Link>
            <Link href="/features/clean-text" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Clean Text</p>
            </Link>
            <Link href="/use-cases/client-calls" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Client Calls</p>
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
            The Follow-Up That Writes Itself
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Every conversation deserves a proper follow-up. Sythio writes it in seconds.
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
