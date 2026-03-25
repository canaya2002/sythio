import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Action Plans — Structured Plans from Conversations",
  description:
    "Turn conversations into structured, step-by-step action plans. Sythio analyzes discussions and creates organized plans with clear steps, owners, and priorities.",
  path: "/features/action-plans",
  keywords: [
    "audio to action plan",
    "meeting action plan AI",
    "conversation to plan",
    "structured action plan from audio",
    "AI action plan generator",
  ],
});

export default function ActionPlansLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Action Plans", href: "/features/action-plans" },
        ]}
      />
      {children}
    </>
  );
}
