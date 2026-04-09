import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sythio — AI Voice Notes App",
    short_name: "Sythio",
    description:
      "Turn voice into clarity, action, and structure. AI-powered audio intelligence with 9 output formats and speaker detection.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#09090b",
    orientation: "portrait-primary",
    categories: ["productivity", "utilities", "education"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
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
