import { seoMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";

export const generateMetadata = seoMetadata({
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
      <FAQSchema items={[
        { question: "How does Sythio generate action plans from audio?", answer: "Sythio analyzes your recording to identify goals, decisions, and commitments, then organizes them into a structured action plan with phases, priorities, owners, and deadlines — all automatically." },
        { question: "What types of audio work for action plan generation?", answer: "Any audio where next steps are discussed: strategy meetings, planning sessions, project kickoffs, one-on-ones, or even solo voice notes. Sythio extracts actionable steps from any conversation." },
        { question: "Can I edit the action plan after Sythio generates it?", answer: "Yes. Sythio gives you a structured starting point that you can refine, reorder, or expand. You can also export it as text or PDF to share with your team." },
      ]} />
      {children}
    </>
  );
}
