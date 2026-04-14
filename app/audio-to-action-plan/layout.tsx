import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema, HowToSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio to Action Plan | Plans from Audio",
  description:
    "Transform conversations into step-by-step action plans. Sythio creates organized plans with phases, owners, and priorities. Try free.",
  path: "/audio-to-action-plan",
  keywords: [
    "audio to action plan",
    "convert recording to plan",
    "meeting to action plan",
    "audio action plan generator",
    "conversation to structured plan",
  ],
});

export default function AudioToActionPlanLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Audio to Action Plan", href: "/audio-to-action-plan" },
        ]}
      />
      <HowToSchema
        name="How to create an action plan from audio with Sythio"
        description="Transform any conversation into a structured step-by-step action plan in three steps."
        totalTime="PT1M"
        steps={[
          { name: "Record or upload audio", text: "Record a strategy meeting, planning session, or voice note in Sythio, or upload an existing recording." },
          { name: "AI builds your plan", text: "Sythio analyzes goals, decisions, and commitments discussed, then organizes them into phases with priorities and owners." },
          { name: "Get your action plan", text: "Receive a structured action plan with clear steps, responsibilities, and priorities. Refine, export, or share with your team." },
        ]}
      />
      <FAQSchema items={[
        { question: "How does Sythio generate action plans from audio?", answer: "Sythio analyzes your recording to identify goals, decisions, and commitments, then organizes them into a structured action plan with phases, priorities, owners, and deadlines — all automatically." },
        { question: "What types of audio work for action plan generation?", answer: "Any audio where next steps are discussed: strategy meetings, planning sessions, project kickoffs, one-on-ones, or even solo voice notes. Sythio extracts actionable steps from any conversation." },
        { question: "Can I edit the action plan after Sythio generates it?", answer: "Yes. Sythio gives you a structured starting point that you can refine, reorder, or expand. You can also export it as text or PDF to share with your team." },
      ]} />
      {children}
    </>
  );
}
