import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema, HowToSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio to Ideas | Organize Brainstorms",
  description:
    "Transform brainstorms and voice notes into organized, themed ideas with AI. Sythio captures every idea and groups them by priority. Try free.",
  path: "/audio-to-ideas",
  keywords: [
    "audio to ideas",
    "convert audio to ideas",
    "brainstorm to organized ideas",
    "recording to ideas",
    "voice note to ideas",
    "audio idea organizer",
    "capture ideas from audio",
  ],
});

export default function AudioToIdeasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Audio to Ideas", href: "/audio-to-ideas" },
        ]}
      />
      <HowToSchema
        name="How to organize ideas from audio with Sythio"
        description="Capture and organize brainstorming ideas from any recording in three steps."
        totalTime="PT1M"
        steps={[
          { name: "Record or upload audio", text: "Record a brainstorming session, voice memo, or group discussion in Sythio, or upload an existing recording." },
          { name: "AI captures and groups ideas", text: "Sythio identifies distinct ideas and concepts, groups related ones by theme, and highlights which received the most emphasis." },
          { name: "Get your organized ideas", text: "Receive a structured list of ideas organized by theme and ranked by potential. Export or share with collaborators." },
        ]}
      />
      <FAQSchema items={[
        { question: "How does Sythio extract ideas from audio?", answer: "Sythio listens to your recording, identifies distinct ideas and concepts, groups related ones by theme, and presents them in an organized list. It works with brainstorming sessions, voice memos, and group discussions." },
        { question: "Does Sythio rank or prioritize extracted ideas?", answer: "Yes. Sythio organizes ideas by theme and can highlight which ones received the most discussion or emphasis during the conversation, helping you prioritize what to act on first." },
        { question: "Can I use Sythio to capture ideas from solo voice notes?", answer: "Absolutely. Record a stream-of-consciousness voice memo and Sythio will extract, organize, and group your ideas into a structured list — even if your thoughts were scattered." },
      ]} />
      {children}
    </>
  );
}
