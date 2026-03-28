import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPost,
  getAllSlugs,
  getCategoryColor,
  getRelatedPosts,
  formatDate,
} from "../lib/posts";
import Waitlist from "../../components/waitlist";
import { ArticleSchema } from "../../components/json-ld-blog";
import {
  BackToArticles,
  SythioTeamLabel,
  KeepReadingHeading,
  TranslatedBreadcrumb,
} from "./blog-post-i18n";

/* ── Content imports ── */
import BestAIVoiceNotesApps from "../content/best-ai-voice-notes-apps";
import MeetingNotesAI from "../content/meeting-notes-ai";
import BeyondTranscription from "../content/beyond-transcription";
import VoiceNotesVsTypedNotes from "../content/voice-notes-vs-typed-notes";
import GuideAudioIntelligence from "../content/guide-audio-intelligence";
import SpeakerDetectionExplained from "../content/speaker-detection-explained";
import AudioToActionPlan from "../content/audio-to-action-plan";
import AILectureNotesStudents from "../content/ai-lecture-notes-students";
import MeetingRecordingsUnlistened from "../content/meeting-recordings-unlistened";
import OtterVsFireflies from "../content/otter-vs-fireflies";
import BestAIVoiceNoteAppsComparison2026 from "../content/best-ai-voice-note-apps-comparison-2026";
import SpeechToTextVsTranscription from "../content/speech-to-text-vs-transcription";
import RecordMeetingsZoomTeamsMeet from "../content/record-meetings-zoom-teams-meet";
import TooManyVoiceMemos from "../content/too-many-voice-memos";
import InterviewTranscriptionTools from "../content/interview-transcription-tools";
import PodcastTranscriptionAutomation from "../content/podcast-transcription-automation";
import AIForSalesCalls from "../content/ai-for-sales-calls";
import SpeakerDiarizationExplained from "../content/speaker-diarization-explained";
import AudioDataSecurityPrivacy from "../content/audio-data-security-privacy";
import MeetingNotesVsRecordings from "../content/meeting-notes-vs-recordings";

const contentMap: Record<string, React.ComponentType> = {
  "best-ai-voice-notes-apps": BestAIVoiceNotesApps,
  "meeting-notes-ai": MeetingNotesAI,
  "beyond-transcription": BeyondTranscription,
  "voice-notes-vs-typed-notes": VoiceNotesVsTypedNotes,
  "guide-audio-intelligence": GuideAudioIntelligence,
  "speaker-detection-explained": SpeakerDetectionExplained,
  "audio-to-action-plan": AudioToActionPlan,
  "ai-lecture-notes-students": AILectureNotesStudents,
  "meeting-recordings-unlistened": MeetingRecordingsUnlistened,
  "otter-vs-fireflies": OtterVsFireflies,
  "best-ai-voice-note-apps-comparison-2026": BestAIVoiceNoteAppsComparison2026,
  "speech-to-text-vs-transcription": SpeechToTextVsTranscription,
  "record-meetings-zoom-teams-meet": RecordMeetingsZoomTeamsMeet,
  "too-many-voice-memos": TooManyVoiceMemos,
  "interview-transcription-tools": InterviewTranscriptionTools,
  "podcast-transcription-automation": PodcastTranscriptionAutomation,
  "ai-for-sales-calls": AIForSalesCalls,
  "speaker-diarization-explained": SpeakerDiarizationExplained,
  "audio-data-security-privacy": AudioDataSecurityPrivacy,
  "meeting-notes-vs-recordings": MeetingNotesVsRecordings,
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const Content = contentMap[slug];
  if (!Content) notFound();

  const related = getRelatedPosts(slug, 3);
  const categoryColor = getCategoryColor(post.category);

  return (
    <>
      <TranslatedBreadcrumb postTitle={post.title} postSlug={post.slug} />
      <ArticleSchema
        title={post.title}
        description={post.description}
        slug={post.slug}
        datePublished={post.date}
        keywords={post.keywords}
      />

      {/* ── Article Header ── */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 hero-animated-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-background pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft /> <BackToArticles />
          </Link>

          <div className="mb-6">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
              style={{ background: `${categoryColor}10`, color: categoryColor }}
            >
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-3xl">
            {post.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-light">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                <span className="text-xs font-bold text-white">S</span>
              </div>
              <span className="font-medium text-foreground"><SythioTeamLabel /></span>
            </div>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{formatDate(post.date)}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      {/* ── Article Content ── */}
      <article className="pb-20 md:pb-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="blog-content">
            <Content />
          </div>
        </div>
      </article>

      {/* ── Inline Waitlist CTA ── */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <Waitlist variant="inline" />
        </div>
      </section>

      {/* ── Related Posts ── */}
      {related.length > 0 && (
        <section className="py-20 md:py-28 bg-white border-t border-border-light">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-12">
              <KeepReadingHeading />
            </h2>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex flex-col rounded-2xl bg-background border border-border-light overflow-hidden transition-all duration-500 hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] hover:-translate-y-1"
                >
                  <div
                    className="h-1 transition-all duration-500 group-hover:h-1.5"
                    style={{ background: getCategoryColor(r.category) }}
                  />
                  <div className="p-6">
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide mb-3"
                      style={{
                        background: `${getCategoryColor(r.category)}10`,
                        color: getCategoryColor(r.category),
                      }}
                    >
                      {r.category}
                    </span>
                    <h3 className="text-base font-bold text-foreground leading-snug mb-2 group-hover:text-accent-muted transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4">
                      {r.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-light">
                      <span>{r.readingTime}</span>
                      <span className="text-muted-light group-hover:text-foreground transition-colors">
                        <ArrowRight />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
