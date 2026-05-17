import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ansari Huzair — ML Engineer & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Gradient blobs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(217,70,239,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#888",
            marginBottom: 48,
            fontFamily: "monospace",
          }}
        >
          ansari.huzair12233@gmail.com
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ededed",
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          Ansari Huzair
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            background: "linear-gradient(to right, #3b82f6, #8b5cf6, #d946ef)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 40,
          }}
        >
          ML Engineer & Full-Stack Developer
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 18,
            color: "#888",
            maxWidth: 700,
            lineHeight: 1.6,
          }}
        >
          CS graduate building AI-powered applications and full-stack platforms.
          IIT Madras + JNTUH.
        </div>
      </div>
    ),
    { ...size }
  );
}
