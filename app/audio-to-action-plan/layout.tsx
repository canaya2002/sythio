import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio to Action Plan — Structured Plans from Any Conversation",
  description:
    "Transform conversations into structured, step-by-step action plans. Sythio analyzes discussions and creates organized plans with phases, owners, and priorities.",
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
      {children}
    </>
  );
}
