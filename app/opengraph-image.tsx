import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NextWe Studio - AI & Digital Transformation Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <img
          src="https://next-we.vercel.app/logo/Favicon.png"
          width={120}
          height={120}
          style={{ marginBottom: 30 }}
        />

        {/* Company Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.05em",
            marginBottom: 16,
          }}
        >
          NextWe Studio
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#a0ff4a",
            fontWeight: 500,
          }}
        >
          AI & Digital Transformation Partner
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 200,
            height: 3,
            backgroundColor: "#a0ff4a",
            marginTop: 30,
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
