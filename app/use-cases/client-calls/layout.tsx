import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Client Call Notes — Summaries, Tasks & Follow-ups from Calls",
  description:
    "Never lose client context again. Sythio turns client calls into structured summaries, action items, and ready-to-send follow-up messages with speaker attribution.",
  path: "/use-cases/client-calls",
  keywords: [
    "client call notes AI",
    "client call summary",
    "client meeting follow-up",
    "AI for client calls",
    "call notes automation",
    "client call transcription",
  ],
});

export default function ClientCallsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Use Cases", href: "/use-cases" },
          { name: "Client Calls", href: "/use-cases/client-calls" },
        ]}
      />
      {children}
    </>
  );
}
