/* ─── Server-rendered SEO content for crawlers ─── */
/* This content is visually hidden but fully accessible to search engines */
/* It provides semantic context that client-rendered sections cannot guarantee */

import Link from "next/link";

export function HomeSEOContent() {
  return (
    <div className="sr-only" aria-hidden="false">
      <h1>Sythio — AI Voice Notes App: Turn Audio into Summaries, Tasks, and Action Plans</h1>
      <p>
        Sythio is an AI-powered voice notes app that transforms any audio recording into
        9 structured output formats. Unlike traditional transcription tools, Sythio goes
        beyond converting speech to text — it analyzes context, detects speakers, and generates
        summaries, tasks, action plans, executive reports, follow-up messages, study notes,
        key points, ideas, and clean text from a single recording.
      </p>

      <h2>How Sythio Works</h2>
      <p>
        Record or upload audio from any source — meetings, voice notes, lectures, brainstorming
        sessions, or client calls. Sythio processes the audio in under 30 seconds, identifies
        speakers, understands context, and generates structured outputs tailored to your needs.
      </p>

      <h2>9 Output Formats from One Recording</h2>
      <ul>
        <li><Link href="/features/ai-summaries">AI Summaries</Link> — Concise overviews of discussions</li>
        <li><Link href="/features/key-points">Key Points</Link> — Essential information extracted</li>
        <li><Link href="/features/task-extraction">Tasks</Link> — Action items with speaker attribution</li>
        <li><Link href="/features/action-plans">Action Plans</Link> — Structured step-by-step plans</li>
        <li><Link href="/features/clean-text">Clean Text</Link> — Polished, readable transcription</li>
        <li><Link href="/features/reports">Executive Reports</Link> — Presentation-ready documents</li>
        <li><Link href="/features/messages">Follow-up Messages</Link> — Ready-to-send drafts</li>
        <li><Link href="/features/study-notes">Study Notes</Link> — Organized learning material</li>
        <li><Link href="/features/ideas">Ideas</Link> — Categorized brainstorming output</li>
      </ul>

      <h2>Speaker Detection with Attribution</h2>
      <p>
        <Link href="/features/speaker-detection">Sythio&apos;s speaker detection</Link> identifies who said what
        in every recording. Tasks are attributed to specific speakers, decisions are tracked by
        who made them, and follow-up messages reference the right people.
      </p>

      <h2>Use Cases</h2>
      <ul>
        <li><Link href="/use-cases/meetings">Meeting notes</Link> — Automatic summaries, tasks, and reports from every meeting</li>
        <li><Link href="/use-cases/voice-notes">Voice notes</Link> — Turn fleeting thoughts into organized, structured text</li>
        <li><Link href="/use-cases/brainstorming">Brainstorming sessions</Link> — Capture and categorize ideas from group discussions</li>
        <li><Link href="/use-cases/lectures">Lectures</Link> — Study notes, key concepts, and summaries for students</li>
        <li><Link href="/use-cases/client-calls">Client calls</Link> — Documentation with agreements and follow-ups</li>
      </ul>

      <h2>Who Uses Sythio</h2>
      <ul>
        <li><Link href="/for/students">Students</Link> — AI-powered lecture notes and study material</li>
        <li><Link href="/for/founders">Founders</Link> — Turn voice memos into organized priorities</li>
        <li><Link href="/for/project-managers">Project managers</Link> — Meeting action items and accountability</li>
      </ul>

      <h2>Pricing</h2>
      <p>
        <Link href="/pricing">Sythio pricing</Link>: Free plan with 5 recordings per month.
        Premium at $12/month for unlimited recordings and all 9 output formats.
        Enterprise plans with custom pricing for teams.
      </p>

      <h2>Compare Sythio</h2>
      <ul>
        <li><Link href="/compare/otter">Sythio vs Otter.ai</Link></li>
        <li><Link href="/compare/fireflies">Sythio vs Fireflies.ai</Link></li>
        <li><Link href="/compare/tldv">Sythio vs tl;dv</Link></li>
      </ul>
    </div>
  );
}
