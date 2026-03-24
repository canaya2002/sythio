import { buildMetadata } from "../lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Sythio collects, uses, and protects your personal information. Our privacy policy covers audio data, transcripts, cookies, and your rights.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
