import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Sythio collects, uses, and protects your personal information. Our privacy policy covers audio data, transcripts, cookies, and your rights.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
