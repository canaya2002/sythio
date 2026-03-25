import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Generates a branded OG image for a given page.
 * Use in opengraph-image.tsx files:
 *
 *   export { ogSize as size, ogContentType as contentType } from "../lib/og-image";
 *   export default () => generateOGImage({ title: "...", subtitle: "..." });
 */
export function generateOGImage({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
}) {
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
          background: "linear-gradient(135deg, #fafafa 0%, #f0f0f0 50%, #e8e8e8 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle gradient accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "6px",
            background: "linear-gradient(90deg, #1a1a1a 0%, #6366f1 50%, #8b5cf6 100%)",
            display: "flex",
          }}
        />

        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: badge ? "32px" : "40px",
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
            Sythio
          </span>
        </div>

        {/* Badge */}
        {badge && (
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
                color: "#888",
              }}
            >
              {badge}
            </span>
          </div>
        )}

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

        {/* Subtitle */}
        {subtitle && (
          <div
            style={{
              fontSize: "22px",
              color: "#666",
              marginTop: "20px",
              lineHeight: 1.5,
              maxWidth: "750px",
              display: "flex",
            }}
          >
            {subtitle}
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
          <span style={{ fontSize: "16px", color: "#999" }}>
            sythio.com
          </span>
          <span style={{ fontSize: "16px", color: "#999" }}>
            AI Voice Notes App
          </span>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
