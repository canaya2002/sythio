import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Key Points from Audio — Essential Takeaways",
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
      {children}
    </>
  );
}
