import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { cookies, headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import ClientProviders from "./components/client-providers";
import AnalyticsProvider from "./components/analytics-provider";
import {
  OrganizationSchema,
  WebSiteSchema,
  SoftwareAppSchema,
  MobileAppSchema,
} from "./components/json-ld";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sythio.com"),
  title: {
    default: "Sythio — Voice Notes AI App | 9 Outputs from One Recording",
    template: "%s | Sythio",
  },
  description:
    "Sythio is the #1 voice notes AI app. Turn one recording into summaries, tasks, action plans, reports, and 5 more outputs. Speaker detection included. Free plan — no credit card required.",
  keywords: [
    /* ─── Core brand & product ─── */
    "voice notes AI",
    "voice notes AI app",
    "AI voice notes",
    "best voice notes AI app",
    "best voice notes AI app 2026",
    "voice notes AI free",
    "AI voice notes app",
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
    "best AI voice notes app",
    "audio to tasks AI",
    "meeting summary generator",
    "voice recorder to text",
    "AI audio to action items",
    "record and summarize meetings",
    "voice notes app free",
    "audio to structured notes",
    "best meeting notes app",
    "AI note taker",
    "voice to action plan",
    "audio summarizer free",
    "Otter alternative",
    "Fireflies alternative",
    "Audiopen alternative",
    "Notta alternative",
    "tldv alternative",
    "speech to text app",
    "meeting recorder app",
    "free voice notes app",
    "podcast transcription",
    "interview transcription",
    "voice memo organizer",
    "audio to text free",
    "Sythio",
    "Sythio app",
    "Sythio voice notes",
    /* ─── Voice notes long-tail & intent ─── */
    "voice note app for iPhone",
    "voice note app for Android",
    "voice memo to summary",
    "voice memo to text AI",
    "voice note transcription app",
    "record voice notes and get summary",
    "best app to organize voice memos",
    "AI app for voice recordings",
    "turn voice memo into action items",
    "voice diary app with AI",
    "voice journal app",
    "voice notes for productivity",
    "voice notes for students",
    "voice notes for meetings",
    "voice notes for founders",
    "voice notes for project managers",
    "voice notes for sales",
    /* ─── Voice search & conversational queries ─── */
    "how to summarize voice notes",
    "how to transcribe voice memos",
    "app that turns voice into notes",
    "app that summarizes recordings",
    "what is the best voice notes app",
    "how to organize voice recordings",
    "how to get tasks from a meeting recording",
    "how to take notes from audio",
    /* ─── Audio transformation ─── */
    "audio to study notes",
    "audio to key points",
    "audio to ideas",
    "audio to messages",
    "audio to clean transcript",
    "recording to summary AI",
    "recording to action items",
    "recording to report",
    "speech to summary",
    "speech to action plan",
    "speech to tasks",
    /* ─── Competitor & alternative queries ─── */
    "best Otter alternative 2026",
    "best Fireflies alternative 2026",
    "Otter.ai alternative free",
    "Fireflies.ai alternative free",
    "better than Otter",
    "better than Fireflies",
    "AudioPen alternative free",
    "Rev alternative AI",
    "Whisper alternative app",
    /* ─── Use-case specific ─── */
    "lecture recording to notes",
    "client call summary AI",
    "brainstorming session recorder",
    "podcast show notes generator",
    "interview summary AI",
    "sales call summary",
    "therapy session notes AI",
    "deposition transcription AI",
    "voice note to email",
    "voice note to report",
    "voice memo to study notes",
  ],
  authors: [{ name: "Carlos Anaya Ruiz" }, { name: "Sythio" }],
  creator: "Carlos Anaya Ruiz",
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
    title: "Sythio — Voice Notes AI App | 9 Outputs from One Recording",
    description:
      "Sythio transforms audio into summaries, tasks, action plans, and more. The best voice notes AI app with speaker detection.",
    type: "website",
    siteName: "Sythio",
    url: "https://sythio.com",
    locale: "en_US",
    alternateLocale: ["es_ES", "fr_FR", "pt_BR", "it_IT"],
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sythioai",
    creator: "@sythioai",
    title: "Sythio — Voice Notes AI App | 9 Outputs from One Recording",
    description:
      "Sythio transforms audio into summaries, tasks, action plans, and more. The best voice notes AI app with speaker detection.",
    images: ["https://sythio.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "apple-itunes-app": "app-id=sythio",
    "google-play-app": "app-id=com.sythio.app",
    "msapplication-TileColor": "#09090b",
    "msapplication-TileImage": "/android-chrome-192x192.png",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Sythio",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [headerStore, cookieStore] = await Promise.all([headers(), cookies()]);
  // Proxy sets x-locale on the request when rewriting locale-prefixed URLs
  const locale =
    headerStore.get("x-locale") ||
    cookieStore.get("NEXT_LOCALE")?.value ||
    "en";

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* RSS Feed for blog — helps Google News, Feedly, and AI crawlers discover content */}
        <link rel="alternate" type="application/rss+xml" title="Sythio Blog" href="https://sythio.com/feed.xml" />
        {/* Preconnect to external origins for faster resource loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
        {/* Knowledge Graph / Brand Entity hints — helps Google connect site with GMB */}
        <meta name="application-name" content="Sythio" />
        <meta name="author" content="Carlos Anaya Ruiz" />
        <meta name="geo.region" content="MX" />
        <meta name="geo.placename" content="Mexico" />
        {/* Bing / Yandex / Pinterest verification — replace with actual tokens */}
        {/* <meta name="google-site-verification" content="YOUR_TOKEN" /> */}
        {/* <meta name="msvalidate.01" content="YOUR_TOKEN" /> */}
        {/* <meta name="yandex-verification" content="YOUR_TOKEN" /> */}
        {/* <meta name="p:domain_verify" content="YOUR_TOKEN" /> */}
        {/* Crawler hints for rich snippets */}
        <meta name="format-detection" content="telephone=no" />
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
        <MobileAppSchema />
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>
        <ClientProviders initialLocale={locale as "en" | "es" | "fr" | "pt" | "it"}>{children}</ClientProviders>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
