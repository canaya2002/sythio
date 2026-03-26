import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio Intelligence Glossary — Key Terms Explained",
  description:
    "Audio intelligence glossary covering transcription terms, speaker diarization definition, voice activity detection, and 20+ key concepts in audio AI and voice intelligence.",
  path: "/glossary",
  keywords: [
    "audio intelligence glossary",
    "transcription terms",
    "speaker diarization definition",
    "voice activity detection",
    "speech-to-text glossary",
    "audio AI terminology",
    "NLP audio terms",
    "voice fingerprint definition",
    "word error rate",
    "audio processing pipeline",
  ],
});

const glossaryFaqItems = [
  {
    question: "What is Audio Intelligence?",
    answer:
      "Audio intelligence is the use of AI and machine learning to extract meaningful, structured information from audio recordings. It goes beyond simple transcription to understand context, identify speakers, and generate actionable outputs like summaries, tasks, and action plans.",
  },
  {
    question: "What is Speaker Diarization?",
    answer:
      "Speaker diarization is the process of partitioning an audio stream into segments according to who is speaking. It answers the question 'who spoke when?' by detecting speaker changes and grouping speech segments by individual voices, even without prior knowledge of the speakers.",
  },
  {
    question: "What is Speaker Detection?",
    answer:
      "Speaker detection is the ability to identify and distinguish between different speakers in an audio recording. Sythio's speaker detection automatically recognizes when a new person is talking, attributes statements to the correct speaker, and uses that context to produce smarter outputs.",
  },
  {
    question: "What is Voice Activity Detection (VAD)?",
    answer:
      "Voice Activity Detection (VAD) is a technique that determines whether a given segment of audio contains human speech or silence/noise. VAD is a critical preprocessing step in audio pipelines, improving transcription accuracy and reducing processing time by filtering out non-speech segments.",
  },
  {
    question: "What is Transcription?",
    answer:
      "Transcription is the process of converting spoken language in an audio recording into written text. Modern AI transcription uses deep learning models to achieve high accuracy across accents, languages, and noisy environments, producing a text record of everything that was said.",
  },
  {
    question: "What is Real-time Transcription?",
    answer:
      "Real-time transcription is the process of converting speech to text as it is being spoken, with minimal delay. Unlike batch transcription that processes a completed recording, real-time transcription streams results within seconds, enabling live captions, meeting notes, and instant documentation.",
  },
  {
    question: "What is Audio Summarization?",
    answer:
      "Audio summarization is the process of using AI to condense a long audio recording into a brief, coherent summary. Rather than reading an entire transcript, audio summarization identifies the most important points and presents them in a concise format that captures the essence of the conversation.",
  },
  {
    question: "What is Multi-output Transformation?",
    answer:
      "Multi-output transformation is the ability to generate multiple structured formats from a single audio input. Instead of producing only a transcript, the system creates summaries, key points, tasks, action plans, reports, and more — all from the same recording in one processing step.",
  },
  {
    question: "What is Action Plan Generation?",
    answer:
      "Action plan generation is the AI-driven process of analyzing a conversation and producing a structured plan with steps, responsibilities, and timelines. It extracts commitments and decisions from meetings and organizes them into a clear, followable roadmap.",
  },
  {
    question: "What is Task Extraction?",
    answer:
      "Task extraction is the automated identification and listing of action items, to-dos, and assignments from spoken conversations. AI analyzes the context of what was said to determine which statements represent tasks, who is responsible, and what deadlines were mentioned.",
  },
  {
    question: "What is Key Points Extraction?",
    answer:
      "Key points extraction is the process of identifying and highlighting the most important ideas, decisions, and facts from an audio recording. It distills lengthy conversations into a scannable list of essential takeaways, saving time while preserving critical information.",
  },
  {
    question: "What is Clean Text Processing?",
    answer:
      "Clean text processing transforms raw, verbatim transcription into polished, readable text. It removes filler words, false starts, repetitions, and grammatical artifacts of speech while preserving the original meaning, producing text that reads naturally.",
  },
  {
    question: "What are Voice Notes?",
    answer:
      "Voice notes are audio recordings used to capture thoughts, ideas, reminders, or information on the go. In the context of audio intelligence, voice notes are transformed by AI into structured text outputs — summaries, tasks, or organized notes — making spoken ideas instantly actionable.",
  },
  {
    question: "What are Meeting Notes?",
    answer:
      "Meeting notes are structured records of what was discussed, decided, and assigned during a meeting. AI-powered meeting notes go beyond manual note-taking by automatically capturing key points, action items, and speaker-attributed summaries from the recorded conversation.",
  },
  {
    question: "What is Audio-to-Text?",
    answer:
      "Audio-to-text refers to the broad category of technologies that convert audio recordings into written text. This encompasses transcription, but also includes more advanced transformations like summarization, task extraction, and structured output generation from audio sources.",
  },
  {
    question: "What is Speech-to-Text?",
    answer:
      "Speech-to-text (STT) is the technology that converts human speech into written words using automatic speech recognition (ASR). Modern STT systems use deep neural networks to handle diverse accents, vocabularies, and acoustic environments with high accuracy.",
  },
  {
    question: "What is Natural Language Processing (NLP)?",
    answer:
      "Natural Language Processing (NLP) is a branch of AI that enables computers to understand, interpret, and generate human language. In audio intelligence, NLP powers the understanding layer — analyzing transcribed text to extract meaning, sentiment, topics, tasks, and structured information.",
  },
  {
    question: "What is a Voice Fingerprint / Voiceprint?",
    answer:
      "A voice fingerprint (or voiceprint) is a unique digital representation of an individual's voice characteristics, including pitch, tone, cadence, and speech patterns. It is used in speaker identification and verification systems to recognize specific individuals across recordings.",
  },
  {
    question: "What is an Audio Processing Pipeline?",
    answer:
      "An audio processing pipeline is the sequence of steps an audio recording passes through to produce final outputs. A typical pipeline includes noise reduction, voice activity detection, transcription, speaker diarization, NLP analysis, and output generation — each stage building on the previous one.",
  },
  {
    question: "What is an Acoustic Model?",
    answer:
      "An acoustic model is a component of speech recognition systems that maps audio signals to phonetic units. It is trained on large datasets of speech to learn the relationship between sound waves and the sounds of a language, enabling accurate conversion of audio to text.",
  },
  {
    question: "What is a Language Model?",
    answer:
      "A language model is an AI system that predicts the probability of word sequences, helping speech recognition choose the most likely transcription. In audio intelligence, language models also power the generation of summaries, action plans, and other structured outputs from transcribed text.",
  },
  {
    question: "What is Word Error Rate (WER)?",
    answer:
      "Word Error Rate (WER) is the standard metric for measuring transcription accuracy. It calculates the percentage of words that were incorrectly transcribed — including substitutions, insertions, and deletions — compared to a reference transcript. Lower WER indicates higher accuracy.",
  },
  {
    question: "What is Speaker Attribution?",
    answer:
      "Speaker attribution is the process of assigning each spoken statement to the correct speaker in a multi-person conversation. It combines speaker diarization with contextual understanding to label who said what, enabling features like per-speaker summaries and accurate task assignment.",
  },
  {
    question: "What is an Audio Library?",
    answer:
      "An audio library is a searchable collection of processed audio recordings and their generated outputs. It allows users to organize, search, and retrieve past recordings, transcripts, summaries, and extracted information — turning audio history into a valuable knowledge base.",
  },
  {
    question: "What are Export Formats?",
    answer:
      "Export formats are the file types and structures available for saving and sharing processed audio outputs. Common export formats include plain text, PDF, Markdown, and structured data formats, allowing users to integrate audio intelligence results into their existing workflows and tools.",
  },
];

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Glossary", href: "/glossary" },
        ]}
      />
      <FAQSchema items={glossaryFaqItems} />
      {children}
    </>
  );
}
