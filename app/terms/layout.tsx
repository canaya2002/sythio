import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing your use of Sythio. Covers subscriptions, acceptable use, AI-generated outputs, intellectual property, and more.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
