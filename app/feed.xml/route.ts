import { posts } from "../blog/lib/posts";

const SITE_URL = "https://sythio.com";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const items = sortedPosts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <author>support@sythio.com (Carlos Anaya Ruiz)</author>
      <enclosure url="${SITE_URL}/blog/${post.slug}/opengraph-image" type="image/png" length="0" />
    </item>`,
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Sythio Blog — Voice Notes AI, Audio Intelligence &amp; Productivity</title>
    <link>${SITE_URL}/blog</link>
    <description>Insights on voice notes AI, audio intelligence, speaker detection, and productivity. Learn how to turn voice recordings into summaries, tasks, action plans, and more.</description>
    <language>en</language>
    <copyright>Copyright ${new Date().getFullYear()} Sythio. All rights reserved.</copyright>
    <managingEditor>support@sythio.com (Carlos Anaya Ruiz)</managingEditor>
    <webMaster>support@sythio.com (Sythio)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Sythio / Next.js</generator>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <ttl>60</ttl>
    <image>
      <url>${SITE_URL}/logo.png</url>
      <title>Sythio Blog</title>
      <link>${SITE_URL}/blog</link>
      <width>512</width>
      <height>512</height>
    </image>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
