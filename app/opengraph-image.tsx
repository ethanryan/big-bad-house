import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}. ${site.descriptor}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const anton = await readFile(
  join(process.cwd(), "assets/fonts/Anton-Regular.ttf"),
);

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "#f2ede3",
          color: "#16130f",
          fontFamily: "Anton",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 196,
            lineHeight: 0.86,
            textTransform: "uppercase",
          }}
        >
          <span>Big Bad</span>
          <span style={{ color: "#c22a1e" }}>House</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            borderTop: "8px solid #16130f",
            paddingTop: 20,
            fontSize: 40,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          <span>{site.descriptor}</span>
          <span>bigbadhouse.com</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Anton", data: anton, style: "normal", weight: 400 }],
    },
  );
}
