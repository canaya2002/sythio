import Link from "next/link";

export default function VoiceNotesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">Use Cases</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Voice Notes That Become Something Useful
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              You record voice memos to capture ideas, tasks, and thoughts on the go. Sythio turns those recordings into clean text, organized ideas, key points, and structured summaries — so your voice notes actually get used.
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
              The Voice Note Graveyard
            </h2>
            <div className="mt-8 space-y-6 text-lg md:text-xl text-muted leading-relaxed">
              <p>
                You had a great idea while driving. You recorded it. It is now sitting in a folder with 200 other voice memos you have never listened to again.
              </p>
              <p>
                Voice notes are fast to record but slow to use. Replaying a three-minute memo to find one key point is tedious. So most recordings just sit there — ideas trapped in audio files, waiting to be forgotten.
              </p>
              <p>
                The value was in the idea. The problem is the format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sythio Creates from Voice Notes */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            What Sythio Creates from Voice Notes
          </h2>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-14">
            Record once. Get structured output you can read, search, and act on immediately.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Clean Text</h3>
              <p className="text-sm text-muted leading-relaxed">Your spoken words, cleaned up. Filler removed, grammar corrected, structure added. Readable text from messy speech.</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Ideas</h3>
              <p className="text-sm text-muted leading-relaxed">Individual ideas extracted and listed separately. What was one long stream of thought becomes distinct, actionable concepts.</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Key Points</h3>
              <p className="text-sm text-muted leading-relaxed">The essential takeaways from your recording, distilled into clear, scannable points. No fluff, no filler.</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Summary</h3>
              <p className="text-sm text-muted leading-relaxed">A concise overview of your entire voice note. Read it in 15 seconds instead of replaying three minutes of audio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Every Kind of Voice Note */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            For Every Kind of Voice Note
          </h2>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-14">
            Whether it is a 20-second reminder or a 10-minute brain dump, Sythio adapts its output to match the content.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-background rounded-2xl border border-border-light p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Quick Ideas</h3>
              <p className="text-base text-muted leading-relaxed">
                A product feature, a gift idea, a solution to a problem — captured in a few seconds. Sythio cleans it up and gives you a clear, written version you can find later.
              </p>
            </div>
            <div className="bg-background rounded-2xl border border-border-light p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Reminders and To-dos</h3>
              <p className="text-base text-muted leading-relaxed">
                Spoke your to-do list into your phone while walking? Sythio extracts each task as a separate item, ready to be checked off.
              </p>
            </div>
            <div className="bg-background rounded-2xl border border-border-light p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Brain Dumps</h3>
              <p className="text-base text-muted leading-relaxed">
                When you need to get everything out of your head, just talk. Sythio takes the stream of consciousness and organizes it into categorized ideas and clear next steps.
              </p>
            </div>
            <div className="bg-background rounded-2xl border border-border-light p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Reflections and Journaling</h3>
              <p className="text-base text-muted leading-relaxed">
                Think through a decision, debrief after a conversation, or process your day out loud. Get a clean written version that captures the substance of your thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-10">Related</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/use-cases/brainstorming" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Brainstorming</p>
            </Link>
            <Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Meetings</p>
            </Link>
            <Link href="/features/clean-text" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Clean Text</p>
            </Link>
            <Link href="/features/ideas" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Ideas</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Your Voice Notes Deserve Better
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Stop recording ideas into a void. Let Sythio turn every voice note into structured output you will actually use.
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
