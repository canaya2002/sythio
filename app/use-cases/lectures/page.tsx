import Link from "next/link";

export default function LecturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">Use Cases</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Lecture Notes, Automatically Structured and Ready to Study
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Stop choosing between listening and writing. Sythio transforms lecture recordings into organized study notes, key concepts, clean text, and concise summaries — so you can focus on understanding, not transcribing.
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
              You Cannot Listen and Write at the Same Time
            </h2>
            <div className="mt-8 space-y-6 text-lg md:text-xl text-muted leading-relaxed">
              <p>
                A lecturer explains a complex concept. You are writing down the previous point. By the time you look up, you have missed the explanation that tied everything together.
              </p>
              <p>
                Manual note-taking forces a trade-off: capture the words or understand the ideas. Most students end up with incomplete notes and incomplete understanding.
              </p>
              <p>
                Recording the lecture solves the capture problem but creates a new one — nobody wants to replay a 90-minute recording to find the three concepts they need for the exam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sythio Creates from Lectures */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            What Sythio Creates from Lectures
          </h2>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-14">
            Upload the recording. Get study-ready output in seconds. Review material that is structured for learning, not just transcription.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Study Notes</h3>
              <p className="text-sm text-muted leading-relaxed">Lecture content organized into structured notes with headings, subpoints, and logical groupings. Ready for revision, not raw transcription.</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Key Points</h3>
              <p className="text-sm text-muted leading-relaxed">The core concepts, definitions, and frameworks from the lecture. The material most likely to appear on an exam or matter in practice.</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Summary</h3>
              <p className="text-sm text-muted leading-relaxed">A concise overview of the entire lecture. Read it in two minutes to refresh your memory before the next class or exam.</p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Clean Text</h3>
              <p className="text-sm text-muted leading-relaxed">The full lecture content as clean, readable text. Filler words removed, sentences structured. A complete written record of what was taught.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Learning */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Built for Learning
          </h2>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-14">
            Whether you are in university, attending a professional workshop, or learning something new on your own — Sythio adapts to the content.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-background rounded-2xl border border-border-light p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Exam Preparation</h3>
              <p className="text-base text-muted leading-relaxed">
                Use key points and summaries to build a revision guide from every lecture in the course. Study from structured output instead of scattered notes.
              </p>
            </div>
            <div className="bg-background rounded-2xl border border-border-light p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Revision and Review</h3>
              <p className="text-base text-muted leading-relaxed">
                Before each class, read the summary of the previous lecture to refresh your memory. In two minutes, you are caught up on what was covered last time.
              </p>
            </div>
            <div className="bg-background rounded-2xl border border-border-light p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Workshops and Seminars</h3>
              <p className="text-base text-muted leading-relaxed">
                Professional development sessions are full of practical insights. Sythio captures the actionable content so you can apply it immediately — not six months later when you find your notebook.
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
            <Link href="/use-cases/voice-notes" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Voice Notes</p>
            </Link>
            <Link href="/for/students" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Audience</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Sythio for Students</p>
            </Link>
            <Link href="/features/study-notes" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Study Notes</p>
            </Link>
            <Link href="/features/key-points" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Key Points</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Focus on Learning. Sythio Handles the Notes.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Record the lecture. Get structured study notes in seconds. Spend your time understanding, not transcribing.
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
