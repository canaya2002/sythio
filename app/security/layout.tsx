import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Security & Privacy | Audio Data Protection",
  description: "End-to-end encryption, SOC 2 compliance, GDPR-ready. Your audio data is secure with Sythio. Delete anytime. Try free.",
  path: "/security",
  keywords: ["secure transcription", "audio data privacy", "encrypted voice notes", "GDPR voice recording", "SOC 2 transcription", "HIPAA audio"],
});

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Security", href: "/security" }]} />
      <FAQSchema items={[
        { question: "Is my audio data encrypted with Sythio?", answer: "Yes. Sythio uses end-to-end encryption for all audio data in transit and at rest. Your recordings are protected with industry-standard encryption protocols throughout the entire processing pipeline." },
        { question: "Is Sythio GDPR compliant?", answer: "Yes. Sythio is GDPR-ready and gives users full control over their data. You can delete any recording and its associated outputs at any time. Data processing follows strict European privacy standards." },
        { question: "Can I delete my audio recordings from Sythio?", answer: "Yes. You have full control over your data. Delete individual recordings or your entire account at any time. Once deleted, audio data and all generated outputs are permanently removed from our servers." },
      ]} />
      {children}
    </>
  );
}
