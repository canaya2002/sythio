import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Sythio team for general inquiries, technical support, partnerships, and press requests. Whether you need help with the AI voice notes app or want to explore collaboration opportunities, we'd love to hear from you.",
  keywords: [
    "contact Sythio",
    "Sythio support",
    "AI voice notes help",
  ],
  openGraph: {
    title: "Contact | Sythio",
    description:
      "Get in touch with the Sythio team. General inquiries, support, partnerships, and press — we'd love to hear from you.",
    url: "https://sythio.com/contact",
    siteName: "Sythio",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
