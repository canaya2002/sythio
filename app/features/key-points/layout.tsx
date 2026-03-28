import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Key Points from Audio | AI Takeaways",
  description:
    "Extract the most important points from any recording. Sythio identifies key decisions, insights, and takeaways so you never miss what matters most.",
  path: "/features/key-points",
  keywords: [
    "key points from audio",
    "extract key points AI",
    "audio key takeaways",
    "meeting key points",
    "AI highlight extraction",
    "important points from recording",
  ],
});

export default function KeyPointsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Key Points", href: "/features/key-points" },
        ]}
      />
      <HowToSchema name="How to Extract Key Points from Audio" description="Get the most important takeaways from any recording in seconds." steps={[
        { name: "Record or Upload", text: "Capture any conversation — meeting, call, lecture, brainstorm — or upload an existing recording." },
        { name: "Sythio Identifies", text: "The audio is analyzed for content significance. Decisions, commitments, data points, and pivotal moments are identified." },
        { name: "Get Key Points", text: "Receive a ranked list of the most important points from the conversation. Clear, concise, and immediately useful." },
      ]} />
      <FAQSchema items={[
        { question: "What counts as a key point in Sythio?", answer: "Key points include decisions made, commitments given, important data or figures mentioned, strategic insights, and pivotal moments in the conversation. Sythio filters out small talk and filler to surface what actually matters." },
        { question: "How many key points does Sythio extract?", answer: "The number depends on your recording. A short voice note might produce 3-5 key points, while a long meeting could yield 10-15. Sythio adapts to the content rather than imposing a fixed limit." },
        { question: "Can I use key points as meeting minutes?", answer: "Yes. Many teams use Sythio's key points as concise meeting minutes. They capture the essential decisions and takeaways without the overhead of full transcription or manual note-taking." },
      ]} />
      {children}
    </>
  );
}
