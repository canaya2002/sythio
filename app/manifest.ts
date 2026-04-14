import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sythio — AI Voice Notes App",
    short_name: "Sythio",
    description:
      "Turn voice into clarity, action, and structure. AI-powered audio intelligence with 9 output formats and speaker detection. Record voice notes, meetings, lectures, and calls — get summaries, tasks, action plans, reports, and more.",
    start_url: "/",
    id: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#09090b",
    orientation: "portrait-primary",
    lang: "en",
    dir: "ltr",
    categories: ["productivity", "utilities", "education", "business"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Record Voice Note",
        short_name: "Record",
        description: "Start a new voice recording",
        url: "https://sythio.app",
      },
      {
        name: "View Blog",
        short_name: "Blog",
        description: "Read latest articles on voice notes and audio AI",
        url: "/blog",
      },
      {
        name: "Pricing",
        short_name: "Pricing",
        description: "View Sythio plans and pricing",
        url: "/pricing",
      },
    ],
    prefer_related_applications: true,
    related_applications: [
      {
        platform: "webapp",
        url: "https://sythio.com/manifest.webmanifest",
      },
    ],
  };
}
