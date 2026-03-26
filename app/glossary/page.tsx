import Link from "next/link";

/* ─── Glossary Terms ─── */

type GlossaryTerm = {
  id: string;
  term: string;
  definition: string;
  link?: { href: string; label: string };
};

const glossaryTerms: GlossaryTerm[] = [
  {
    id: "acoustic-model",
    term: "Acoustic Model",
    definition:
      "An acoustic model is a component of speech recognition systems that maps audio signals to phonetic units. Trained on large datasets of speech, it learns the relationship between sound waves and the sounds of a language. Acoustic models are foundational to accurate audio-to-text conversion and are continuously refined to handle diverse accents and noisy environments.",
  },
  {
    id: "action-plan-generation",
    term: "Action Plan Generation",
    definition:
      "Action plan generation is the AI-driven process of analyzing a conversation and producing a structured plan with clear steps, responsibilities, and timelines. It automatically extracts commitments and decisions from meetings and organizes them into a followable roadmap — eliminating the need for manual post-meeting planning.",
    link: { href: "/features/action-plans", label: "See Action Plans feature" },
  },
  {
    id: "audio-intelligence",
    term: "Audio Intelligence",
    definition:
      "Audio intelligence is the use of AI and machine learning to extract meaningful, structured information from audio recordings. It goes beyond simple transcription to understand context, identify speakers, detect sentiment, and generate actionable outputs like summaries, tasks, and action plans from spoken content.",
    link: { href: "/product", label: "Explore Sythio's audio intelligence" },
  },
  {
    id: "audio-library",
    term: "Audio Library",
    definition:
      "An audio library is a searchable, organized collection of processed audio recordings and their generated outputs. It allows users to revisit, search, and retrieve past recordings, transcripts, summaries, and extracted information — turning audio history into a valuable, always-accessible knowledge base.",
    link: { href: "/product", label: "Explore the Sythio library" },
  },
  {
    id: "audio-processing-pipeline",
    term: "Audio Processing Pipeline",
    definition:
      "An audio processing pipeline is the sequence of stages an audio recording passes through to produce final outputs. A typical pipeline includes noise reduction, voice activity detection, transcription, speaker diarization, NLP analysis, and output generation — each stage building on the previous one to deliver accurate, structured results.",
  },
  {
    id: "audio-summarization",
    term: "Audio Summarization",
    definition:
      "Audio summarization uses AI to condense a long audio recording into a brief, coherent summary that captures the essence of the conversation. Rather than reading an entire transcript, users receive the most important points in a concise format — saving significant time while preserving critical information.",
    link: { href: "/features/ai-summaries", label: "See AI Summaries feature" },
  },
  {
    id: "audio-to-text",
    term: "Audio-to-Text",
    definition:
      "Audio-to-text refers to the broad category of technologies that convert audio recordings into written text. This encompasses basic transcription, but also includes more advanced transformations like summarization, task extraction, and multi-format structured output generation from audio sources.",
    link: { href: "/product", label: "See Sythio's audio-to-text capabilities" },
  },
  {
    id: "clean-text-processing",
    term: "Clean Text Processing",
    definition:
      "Clean text processing transforms raw, verbatim transcription into polished, readable prose. It removes filler words (um, uh), false starts, repetitions, and grammatical artifacts of speech while preserving the original meaning — producing text that reads as naturally as if it had been written.",
    link: { href: "/features/clean-text", label: "See Clean Text feature" },
  },
  {
    id: "export-formats",
    term: "Export Formats",
    definition:
      "Export formats are the file types and structures available for saving and sharing processed audio outputs. Common formats include plain text, PDF, Markdown, and structured data — allowing users to integrate audio intelligence results into their existing workflows, documents, and collaboration tools.",
    link: { href: "/pricing", label: "See export options by plan" },
  },
  {
    id: "key-points-extraction",
    term: "Key Points Extraction",
    definition:
      "Key points extraction identifies and highlights the most important ideas, decisions, and facts from an audio recording. It distills lengthy conversations into a scannable list of essential takeaways, helping users quickly understand what matters without listening to or reading the full content.",
    link: { href: "/features/key-points", label: "See Key Points feature" },
  },
  {
    id: "language-model",
    term: "Language Model",
    definition:
      "A language model is an AI system that predicts the probability of word sequences, helping speech recognition choose the most likely transcription. In audio intelligence, language models also power the generation of summaries, action plans, and other structured outputs by understanding the meaning and context of transcribed text.",
  },
  {
    id: "meeting-notes",
    term: "Meeting Notes",
    definition:
      "Meeting notes are structured records of what was discussed, decided, and assigned during a meeting. AI-powered meeting notes go beyond manual note-taking by automatically capturing key points, action items, and speaker-attributed summaries from recorded conversations — ensuring nothing important is missed.",
    link: { href: "/use-cases", label: "See meeting use cases" },
  },
  {
    id: "multi-output-transformation",
    term: "Multi-output Transformation",
    definition:
      "Multi-output transformation is the ability to generate multiple structured formats from a single audio input in one processing step. Instead of only a transcript, the system simultaneously creates summaries, key points, tasks, action plans, reports, and more — maximizing the value extracted from every recording.",
    link: { href: "/features", label: "See all output formats" },
  },
  {
    id: "natural-language-processing",
    term: "Natural Language Processing (NLP)",
    definition:
      "Natural Language Processing (NLP) is a branch of artificial intelligence that enables computers to understand, interpret, and generate human language. In audio intelligence, NLP powers the understanding layer — analyzing transcribed text to extract meaning, sentiment, topics, tasks, and structured information from conversations.",
  },
  {
    id: "real-time-transcription",
    term: "Real-time Transcription",
    definition:
      "Real-time transcription converts speech to text as it is being spoken, with minimal latency. Unlike batch transcription that processes a completed recording, real-time transcription streams results within seconds — enabling live captions, instant meeting notes, and immediate documentation of spoken content.",
  },
  {
    id: "speaker-attribution",
    term: "Speaker Attribution",
    definition:
      "Speaker attribution assigns each spoken statement to the correct speaker in a multi-person conversation. It combines speaker diarization with contextual understanding to label who said what, enabling features like per-speaker summaries, accurate task assignment, and clear accountability in meeting records.",
    link: { href: "/features/speaker-detection", label: "See Speaker Detection feature" },
  },
  {
    id: "speaker-detection",
    term: "Speaker Detection",
    definition:
      "Speaker detection is the ability to identify and distinguish between different speakers in an audio recording. It automatically recognizes when a new person is talking, attributes statements to the correct speaker, and uses that context to produce smarter outputs like assigning tasks to the right person.",
    link: { href: "/features/speaker-detection", label: "See Speaker Detection feature" },
  },
  {
    id: "speaker-diarization",
    term: "Speaker Diarization",
    definition:
      "Speaker diarization is the process of partitioning an audio stream into segments according to who is speaking. It answers the question 'who spoke when?' by detecting speaker changes and grouping speech segments by individual voices — even without prior knowledge of who the speakers are.",
    link: { href: "/features/speaker-detection", label: "See Speaker Detection feature" },
  },
  {
    id: "speech-to-text",
    term: "Speech-to-Text",
    definition:
      "Speech-to-text (STT), also known as automatic speech recognition (ASR), is the technology that converts human speech into written words. Modern STT systems use deep neural networks to achieve high accuracy across diverse accents, vocabularies, and acoustic environments.",
  },
  {
    id: "task-extraction",
    term: "Task Extraction",
    definition:
      "Task extraction is the automated identification and listing of action items, to-dos, and assignments from spoken conversations. AI analyzes the context of what was said to determine which statements represent tasks, who is responsible, and what deadlines were mentioned — turning talk into trackable work.",
    link: { href: "/features/task-extraction", label: "See Task Extraction feature" },
  },
  {
    id: "transcription",
    term: "Transcription",
    definition:
      "Transcription is the process of converting spoken language in an audio recording into written text. Modern AI-powered transcription uses deep learning models to achieve high accuracy across accents, languages, and noisy environments — producing a complete text record of everything that was said.",
  },
  {
    id: "voice-activity-detection",
    term: "Voice Activity Detection (VAD)",
    definition:
      "Voice Activity Detection (VAD) is a signal processing technique that determines whether a given segment of audio contains human speech or silence and background noise. VAD is a critical preprocessing step in audio pipelines, improving transcription accuracy and reducing processing time by filtering out non-speech segments.",
  },
  {
    id: "voice-fingerprint",
    term: "Voice Fingerprint / Voiceprint",
    definition:
      "A voice fingerprint (or voiceprint) is a unique digital representation of an individual's voice characteristics, including pitch, tone, cadence, and speech patterns. Voiceprints are used in speaker identification and verification systems to recognize specific individuals across multiple recordings.",
  },
  {
    id: "voice-notes",
    term: "Voice Notes",
    definition:
      "Voice notes are short audio recordings used to capture thoughts, ideas, reminders, or information on the go. In the context of audio intelligence, voice notes are transformed by AI into structured text outputs — summaries, tasks, or organized notes — making spoken ideas instantly actionable and searchable.",
    link: { href: "/product", label: "See how Sythio transforms voice notes" },
  },
  {
    id: "word-error-rate",
    term: "Word Error Rate (WER)",
    definition:
      "Word Error Rate (WER) is the standard metric for measuring transcription accuracy. It calculates the percentage of words incorrectly transcribed — including substitutions, insertions, and deletions — compared to a reference transcript. Lower WER indicates higher accuracy; state-of-the-art systems achieve WER below 5%.",
  },
];

/* ─── Alphabet Index ─── */
const alphabet = Array.from(
  new Set(glossaryTerms.map((t) => t.term[0].toUpperCase()))
).sort();

/* ─── Glossary Page (Server Component) ─── */
export default function GlossaryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 hero-animated-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border-light mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-muted">
                Reference Guide
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-foreground">
              Audio Intelligence Glossary
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Key terms and concepts in audio AI, transcription, and voice
              intelligence — explained clearly so you can understand the
              technology behind smarter audio.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/product"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                Explore the Product
              </Link>
              <Link
                href="/features"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-base font-medium text-foreground hover:bg-white hover:border-muted-light hover:shadow-md transition-all duration-300"
              >
                See All Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Alphabet Quick Nav */}
      <section className="bg-white border-b border-border-light sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav
            aria-label="Alphabet navigation"
            className="flex flex-wrap items-center justify-center gap-1.5"
          >
            {alphabet.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-medium text-muted hover:text-foreground hover:bg-foreground/5 transition-colors duration-200"
              >
                {letter}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          {alphabet.map((letter) => {
            const termsForLetter = glossaryTerms.filter(
              (t) => t.term[0].toUpperCase() === letter
            );
            return (
              <div key={letter} id={`letter-${letter}`} className="mb-14 last:mb-0 scroll-mt-24">
                {/* Letter Header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground/15 select-none">
                    {letter}
                  </span>
                  <div className="h-px flex-1 bg-border-light" />
                </div>

                {/* Term Cards */}
                <div className="space-y-4">
                  {termsForLetter.map((item) => (
                    <div
                      key={item.id}
                      id={item.id}
                      className="scroll-mt-24 bg-white rounded-2xl border border-border-light p-6 sm:p-8 border-l-4 border-l-indigo-200 hover:border-l-indigo-400 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-300"
                    >
                      <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-3">
                        <a href={`#${item.id}`} className="hover:text-accent-muted transition-colors">
                          {item.term}
                        </a>
                      </h3>
                      <p className="text-sm sm:text-base text-muted leading-relaxed">
                        {item.definition}
                      </p>
                      {item.link && (
                        <Link
                          href={item.link.href}
                          className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                        >
                          {item.link.label}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 md:py-20 bg-white border-t border-border-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground tracking-tight">
                {glossaryTerms.length}
              </div>
              <div className="text-sm text-muted mt-1">Terms Defined</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground tracking-tight">
                {alphabet.length}
              </div>
              <div className="text-sm text-muted mt-1">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground tracking-tight">
                9+
              </div>
              <div className="text-sm text-muted mt-1">Output Formats</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground tracking-tight">
                5+
              </div>
              <div className="text-sm text-muted mt-1">Languages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Learn more about Sythio
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/product", label: "Explore the Product" },
              { href: "/features", label: "See All Features" },
              { href: "/faq", label: "Read the FAQ" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-center gap-2 p-6 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500 text-center"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">
                  {link.label}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted group-hover:translate-x-1 transition-transform duration-300"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Ready to experience
              <br />
              audio intelligence?
            </h2>
            <p className="mt-7 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
              Transform your audio into structured, actionable output. Start
              free — no credit card required.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                Get Started Free
              </Link>
              <Link
                href="/product"
                className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-border text-foreground text-base font-medium hover:bg-foreground hover:text-white transition-all duration-300"
              >
                Explore Product
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">
              Free plan available. No credit card required.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
