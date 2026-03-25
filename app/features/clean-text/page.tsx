import Link from "next/link";

export default function CleanTextPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6">Features</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              From Raw Audio to Polished, Readable Text
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Sythio transforms spoken audio into clean, well-structured text. Filler words removed. Grammar corrected. Paragraphs formed. The result reads like it was written, not spoken.
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

      {/* The Problem with Raw Transcripts */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">The Problem</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Raw Transcripts Are Not Readable
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                A word-for-word transcript captures everything you said — including the parts you wish you had not. False starts, repeated words, filler phrases, and incomplete thoughts make raw transcripts painful to read and impossible to share professionally.
              </p>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Clean text solves this. It preserves your meaning while removing the noise that comes with natural speech.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-background rounded-2xl border border-border-light p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-4">Raw Transcript</p>
                <p className="text-sm text-muted leading-relaxed italic">
                  &quot;So, um, basically what we need to do is, like, we need to figure out the, the timeline for this because, you know, the client is, uh, they&apos;re expecting something by, I think it was Friday? Yeah, Friday. So we should probably, um, get the team together and, and sort that out.&quot;
                </p>
              </div>
              <div className="bg-background rounded-2xl border border-foreground/10 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground mb-4">Clean Text</p>
                <p className="text-sm text-foreground leading-relaxed">
                  &quot;We need to finalize the project timeline. The client expects delivery by Friday. The team should align on this as soon as possible.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Clean Text Does */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Capabilities</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              What Clean Text Does
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Clean text is not about shortening. It is about clarifying. Every transformation preserves your original meaning while making the text professional and easy to read.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Filler Words Removed</h3>
              <p className="text-sm text-muted leading-relaxed">
                "Um," "uh," "like," "you know," and other verbal fillers are stripped out. What remains is the substance of what you said.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Grammar Corrected</h3>
              <p className="text-sm text-muted leading-relaxed">
                Spoken grammar is rarely written grammar. Sythio fixes tense inconsistencies, subject-verb agreement, and sentence fragments without changing your meaning.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Structure Added</h3>
              <p className="text-sm text-muted leading-relaxed">
                Continuous speech becomes organized paragraphs. Topic shifts are recognized and separated. The text flows logically from one point to the next.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Repetition Eliminated</h3>
              <p className="text-sm text-muted leading-relaxed">
                When you say the same thing three different ways, Sythio keeps the clearest version. No redundancy, no circular phrasing.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Meaning Preserved</h3>
              <p className="text-sm text-muted leading-relaxed">
                Clean text is faithful to your intent. Technical terms, proper nouns, and specific details are kept intact. Only the noise is removed.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border-light p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Use</h3>
              <p className="text-sm text-muted leading-relaxed">
                The output is publication-ready. Use it in emails, documents, reports, or social posts. No further editing required.
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
                Capture your thoughts, dictate a memo, record a conversation, or upload any existing audio file. Any spoken content works.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Sythio Processes</h3>
              <p className="text-sm text-muted leading-relaxed">
                The audio is transcribed, then refined. Filler is removed, grammar is corrected, and the text is reorganized into a clean, readable format.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold mb-5">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Get Clean Text</h3>
              <p className="text-sm text-muted leading-relaxed">
                Receive polished text you can copy, export, or share. Use it as-is or as a starting point for longer documents, articles, or messages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Clean Text Shines */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">Use Cases</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Where Clean Text Shines
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Anytime you need spoken words in written form, clean text delivers a result that reads naturally and looks professional.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/use-cases/voice-notes" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Voice Notes to Written Content</h3>
              <p className="text-sm text-muted leading-relaxed">
                Dictate ideas on the go and get clean written text back. Perfect for drafting emails, blog posts, journal entries, or documentation without sitting at a keyboard.
              </p>
            </Link>
            <Link href="/use-cases/meetings" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Meeting Notes for the Record</h3>
              <p className="text-sm text-muted leading-relaxed">
                Produce clean, professional meeting notes that can be shared with stakeholders who were not present. No one needs to know they started as a messy recording.
              </p>
            </Link>
            <Link href="/use-cases/lectures" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Lecture Notes</h3>
              <p className="text-sm text-muted leading-relaxed">
                Turn recorded lectures into readable study material. Clean text captures the core content without the verbal detours and repetitions of live teaching.
              </p>
            </Link>
            <Link href="/use-cases/brainstorming" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Content Drafting</h3>
              <p className="text-sm text-muted leading-relaxed">
                Speak your first draft and let Sythio clean it up. Writers, founders, and creators use clean text to go from idea to polished draft in minutes.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Works With Other Features */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-4">One Recording, Many Outputs</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Clean Text Is Just One Output
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              From the same recording, Sythio can also produce summaries, task lists, action plans, and more. Choose clean text when you need a polished written version of what was said. Choose other formats when you need structured output.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/features/ai-summaries" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">AI Summaries</h3>
              <p className="text-sm text-muted leading-relaxed">
                When you need the essence, not the full text. Summaries distill long recordings into concise overviews with key points and decisions.
              </p>
            </Link>
            <Link href="/features/task-extraction" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Task Extraction</h3>
              <p className="text-sm text-muted leading-relaxed">
                When what you need is a checklist, not prose. Tasks are pulled directly from the conversation with owners and deadlines attached.
              </p>
            </Link>
            <Link href="/features/action-plans" className="group block bg-white rounded-2xl border border-border-light p-8 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-muted transition-colors mb-2">Action Plans</h3>
              <p className="text-sm text-muted leading-relaxed">
                When the conversation produced a direction that needs structure. Action plans organize next steps into phased, prioritized sequences.
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
            <Link href="/features/speaker-detection" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Feature</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Speaker Detection</p>
            </Link>
            <Link href="/use-cases/voice-notes" className="group block bg-white rounded-2xl border border-border-light p-6 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-light mb-2">Use Case</p>
              <p className="text-base font-semibold text-foreground group-hover:text-accent-muted transition-colors">Voice Notes</p>
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
            Speak It. Sythio Writes It.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
            Turn any spoken audio into polished, publication-ready text. No editing required.
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
