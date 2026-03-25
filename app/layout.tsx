import type { Metadata } from "next";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import ClientProviders from "./components/client-providers";
import AnalyticsProvider from "./components/analytics-provider";
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
    languages: {
      "en": "https://sythio.com",
      "es": "https://sythio.com/es",
      "fr": "https://sythio.com/fr",
      "pt": "https://sythio.com/pt",
      "it": "https://sythio.com/it",
      "x-default": "https://sythio.com",
    },
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TL52VWSG');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TL52VWSG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <OrganizationSchema />
        <WebSiteSchema />
        <SoftwareAppSchema />
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
