import type { Metadata } from "next";
import { getPost, getAllSlugs } from "../lib/posts";
import { BreadcrumbSchema } from "../../components/json-ld";

const SITE_URL = "https://sythio.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: url,
      languages: {
        "en": `${SITE_URL}/blog/${post.slug}`,
        "es": `${SITE_URL}/es/blog/${post.slug}`,
        "fr": `${SITE_URL}/fr/blog/${post.slug}`,
        "pt": `${SITE_URL}/pt/blog/${post.slug}`,
        "it": `${SITE_URL}/it/blog/${post.slug}`,
        "x-default": `${SITE_URL}/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: `${post.title} | Sythio Blog`,
      description: post.description,
      url,
      siteName: "Sythio",
      type: "article",
      locale: "en_US",
      alternateLocale: ["es_ES", "fr_FR", "pt_BR", "it_IT"],
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["Carlos Anaya Ruiz"],
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@sabordetiburon",
      creator: "@sabordetiburon",
      title: `${post.title} | Sythio Blog`,
      description: post.description,
      images: [`${SITE_URL}/og-image.png`],
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
  };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
