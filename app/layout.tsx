import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientProviders from "./components/client-providers";
import {
  OrganizationSchema,
  WebSiteSchema,
  SoftwareAppSchema,
} from "./components/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sythio.com"),
  title: {
    default: "Sythio — Turn Voice into Clarity, Action, and Structure",
    template: "%s | Sythio",
  },
  description:
    "Sythio transforms your audio into summaries, tasks, action plans, and structured outputs. AI voice notes app with speaker detection. One audio, multiple outcomes.",
  keywords: [
    "AI voice notes",
    "voice recorder with AI",
    "audio summarizer app",
    "voice notes to tasks",
    "speaker detection transcription",
    "meeting notes from audio",
    "voice note summarizer",
    "audio to action plan",
    "clean text from audio",
    "AI voice memo app",
    "transcribe and summarize audio",
    "audio to report",
    "convert voice notes into tasks",
    "organize voice notes with AI",
    "AI meeting notes",
    "voice to text AI app",
    "audio transcription with speakers",
    "AI audio summarizer",
    "smart voice recorder",
    "automatic meeting minutes",
    "audio note-taking app",
    "speech to structured text",
    "AI-powered transcription",
    "multi-speaker transcription",
    "audio intelligence platform",
  ],
  authors: [{ name: "Sythio" }],
  creator: "Sythio",
  publisher: "Sythio",
  category: "Productivity",
  applicationName: "Sythio",
  alternates: {
    canonical: "https://sythio.com",
  },
  openGraph: {
    title: "Sythio — Turn Voice into Clarity, Action, and Structure",
    description:
      "Transform audio into summaries, tasks, action plans, and more. AI-powered voice notes with speaker detection.",
    type: "website",
    siteName: "Sythio",
    url: "https://sythio.com",
    locale: "en_US",
    images: [
      {
        url: "https://sythio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sythio — AI Voice Notes App",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sythio — Turn Voice into Clarity, Action, and Structure",
    description:
      "Transform audio into summaries, tasks, action plans, and more.",
    images: ["https://sythio.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <OrganizationSchema />
        <WebSiteSchema />
        <SoftwareAppSchema />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
