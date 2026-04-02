import { ImageResponse } from "next/og";
import { ogSize, ogContentType } from "../../lib/og-image";
import { getPost, getCategoryColor } from "../lib/posts";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  const title = post?.title ?? "Sythio Blog";
  const category = post?.category ?? "Blog";
  const readingTime = post?.readingTime ?? "";
  const categoryColor = post ? getCategoryColor(post.category) : "#6366f1";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #fafafa 0%, #f0f0f0 50%, #e8e8e8 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Gradient accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "6px",
            background:
              "linear-gradient(90deg, #1a1a1a 0%, #6366f1 50%, #8b5cf6 100%)",
            display: "flex",
          }}
        />

        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #1a1a1a, #333)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            S
          </div>
          <span
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
            }}
          >
            Sythio Blog
          </span>
        </div>

        {/* Category badge */}
        <div
          style={{
            display: "flex",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: categoryColor,
              background: `${categoryColor}18`,
              padding: "6px 16px",
              borderRadius: "100px",
              display: "flex",
            }}
          >
            {category}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 50 ? "48px" : "56px",
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            maxWidth: "900px",
            display: "flex",
          }}
        >
          {title}
        </div>

        {/* Reading time */}
        {readingTime && (
          <div
            style={{
              fontSize: "18px",
              color: "#888",
              marginTop: "24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {readingTime}
          </div>
        )}

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "16px", color: "#999" }}>sythio.com</span>
          <span style={{ fontSize: "16px", color: "#999" }}>
            AI Voice Notes App
          </span>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
