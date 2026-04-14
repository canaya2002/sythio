import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";
import { BlogListSchema } from "../components/json-ld-blog";
import { posts } from "./lib/posts";

export const metadata = buildMetadata({
  title: "Voice Notes AI Blog | Guides, Comparisons & Tips",
  description:
    "Expert guides on voice notes AI, audio intelligence, speaker detection, and meeting productivity. Compare tools, learn workflows, and master AI audio processing.",
  path: "/blog",
  keywords: [
    "voice notes AI blog",
    "AI voice notes blog",
    "audio intelligence articles",
    "meeting productivity tips",
    "AI transcription guide",
    "voice notes productivity",
    "audio AI insights",
    "best voice notes app reviews",
    "speaker detection guide",
  ],
});

function BlogItemListSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sythio Blog — Voice Notes AI & Audio Intelligence",
    description: "Expert articles on voice notes AI, audio intelligence, and meeting productivity.",
    numberOfItems: posts.length,
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `https://sythio.com/blog/${post.slug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
      <BlogItemListSchema />
      <BlogListSchema posts={posts} />
      {children}
    </>
  );
}
