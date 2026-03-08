import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Uganda Gold & Mineral Sector Investment Advisory — Diamond Capital Africa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0c0a09",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #0c0a09 0%, #1c1917 60%, #292524 100%)",
          }}
        />

        {/* Amber top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: "#f59e0b",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "#f59e0b",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            Investor Advisory · Kampala, Uganda · East Africa
          </div>

          <div
            style={{
              fontSize: "54px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "28px",
              maxWidth: "860px",
            }}
          >
            Uganda&apos;s mineral sector is open to serious investors.
          </div>

          <div
            style={{
              fontSize: "21px",
              color: "#a8a29e",
              marginBottom: "56px",
              maxWidth: "680px",
              lineHeight: 1.5,
            }}
          >
            Active gold traders in Kampala. Real regulatory access. Real
            government relationships.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                color: "#e7e5e4",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              Diamond Capital Africa
            </div>
            <div
              style={{
                background: "#b91c1c",
                color: "#ffffff",
                padding: "14px 32px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Book a discovery call →
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
