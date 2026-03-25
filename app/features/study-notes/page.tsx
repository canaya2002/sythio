import Link from "next/link";

export default function StudyNotesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">Features</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Study Notes That Actually Help You Learn
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Sythio turns lectures, classes, and study recordings into organized notes with key concepts, definitions, examples, and takeaways. Structured for review, optimized for retention.
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
                Listening and Note-Taking Don&apos;t Mix
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                You are either listening or writing. Doing both means you miss things. Recorded lectures help, but re-listening to a 90-minute class just to find one concept is not an efficient way to study.
              </p>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Sythio solves this by turning the entire recording into organized, topic-based notes that are ready for review the moment the class ends.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-4">What Study Notes Include</p>
                <ul className="space-y-3">
                  {[
                    "Key concepts organized by topic",
                    "Definitions and explanations highlighted",
                    "Important examples and illustrations",
                    "Connections between related ideas",
                    "Summary of main takeaways",
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
              Notes That Understand the Material
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Sythio does not just transcribe and format. It identifies the educational structure of the content — distinguishing concepts from examples, definitions from commentary, and core ideas from supporting details.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Topic Organization</h3>
              <p className="text-sm text-muted leading-relaxed">
                Content is grouped by topic, even when the lecturer jumped between subjects. Related information is brought together logically.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Concept Highlighting</h3>
              <p className="text-sm text-muted leading-relaxed">
                Key terms and definitions are identified and surfaced clearly. No more digging through paragraphs to find the one definition you need.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Study-Ready Format</h3>
              <p className="text-sm text-muted leading-relaxed">
                Notes are structured for efficient review. Skim the headings, dive into details where needed, and test your understanding with the takeaway section.
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
              <h3 className="text-lg font-semibold text-foreground mb-2">Record Your Lecture</h3>
              <p className="text-sm text-muted leading-relaxed">
                Record directly in Sythio during class, or upload a recording afterward. Works with any lecture, seminar, or study session.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Sythio Understands</h3>
              <p className="text-sm text-muted leading-relaxed">
                The audio is analyzed for educational content. Topics are identified, concepts are extracted, and the material is organized into a clear structure.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Get Your Notes</h3>
              <p className="text-sm text-muted leading-relaxed">
                Receive organized study notes you can review immediately. Export them, combine with your own notes, or use them as your primary study material.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Uses Study Notes */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Use Cases</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Built for Learners
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Whether you are a student, a professional in training, or a lifelong learner, study notes turn any educational audio into a powerful learning resource.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/use-cases/lectures" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">University Lectures</h3>
              <p className="text-sm text-muted leading-relaxed">
                Record every lecture and get structured notes by the time you get home. Focus on understanding during class, not on writing everything down.
              </p>
            </Link>
            <div className="bg-white rounded-2xl border border-border-light p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Online Courses</h3>
              <p className="text-sm text-muted leading-relaxed">
                Taking an online course? Upload the video audio and get organized notes for each module. Review at your pace without rewatching.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Professional Training</h3>
              <p className="text-sm text-muted leading-relaxed">
                Workshops, certifications, and training sessions become reference material. Study notes capture what you need to retain and apply.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Podcasts & Talks</h3>
              <p className="text-sm text-muted leading-relaxed">
                Turn insightful podcasts, TED talks, and conference sessions into structured notes you can revisit and share.
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
              Notes Are Just the Start
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              From the same recording, you can also get summaries for a quick overview, key points for focused review, or clean text for a polished written version of the lecture.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/features/key-points" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Key Points</h3>
              <p className="text-sm text-muted leading-relaxed">
                When you need just the essential takeaways. Key points give you the most important items in a scannable list.
              </p>
            </Link>
            <Link href="/features/ai-summaries" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">AI Summaries</h3>
              <p className="text-sm text-muted leading-relaxed">
                A quick overview of the entire lecture. Great for refreshing your memory before an exam without re-reading everything.
              </p>
            </Link>
            <Link href="/features/clean-text" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Clean Text</h3>
              <p className="text-sm text-muted leading-relaxed">
                The full lecture content as polished, readable text. Useful when you want to read the material in its entirety without filler.
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
            <Link href="/features/key-points" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Key Points</p>
            </Link>
            <Link href="/features/ai-summaries" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">AI Summaries</p>
            </Link>
            <Link href="/use-cases/lectures" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Lectures</p>
            </Link>
            <Link href="/for/students" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Audience</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">For Students</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Focus on Learning. Sythio Takes the Notes.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Every lecture deserves organized notes. Sythio creates them for you in seconds.
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
