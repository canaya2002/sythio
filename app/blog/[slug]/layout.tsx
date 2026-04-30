import type { Metadata } from "next";
import { getPost, getAllSlugs } from "../lib/posts";
import { buildMetadata } from "../../lib/metadata";
import { defaultLocale, isValidLocale, type Locale } from "../../lib/i18n-config";
import { headers } from "next/headers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  /* Read the runtime locale set by the proxy so each translated blog post
     declares itself as canonical (e.g. /es/blog/foo → canonical /es/blog/foo). */
  const headerStore = await headers();
  const headerLocale = headerStore.get("x-locale") || defaultLocale;
  const locale: Locale = isValidLocale(headerLocale) ? headerLocale : defaultLocale;

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    ogType: "article",
    publishedTime: post.date,
    modifiedTime: post.date,
    locale,
  });
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
