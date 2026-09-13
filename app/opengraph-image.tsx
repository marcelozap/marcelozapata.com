import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const alt = "Marcelo Zapata — Music & performances";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OpenGraphImage() {
  const [portrait, serif] = await Promise.all([
    readFile(join(process.cwd(), "public/images/marcelo-zapata.png")),
    readFile(join(process.cwd(), "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-normal.woff")),
  ]);

  return new ImageResponse(
    <div style={{ display: "flex", alignItems: "center", width: "100%", height: "100%", background: "#f6f1e7", color: "#241e17", padding: 48, gap: 48 }}>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, height: "100%", justifyContent: "center" }}>
        <div style={{ fontSize: 23, color: "#856634", marginBottom: 28 }}>{site.tagline}</div>
        <div style={{ fontFamily: "Cormorant", fontSize: 100, lineHeight: 0.96 }}>Marcelo Zapata</div>
        <div style={{ fontSize: 25, lineHeight: 1.5, marginTop: 32 }}>Piano, guitar, and voice.</div>
        <div style={{ fontSize: 20, color: "#6b6256", marginTop: 50 }}>marcelozapata.com</div>
      </div>
      <img
        src={`data:image/png;base64,${portrait.toString("base64")}`}
        alt=""
        width={510}
        height={510}
        style={{ objectFit: "cover" }}
      />
    </div>,
    { ...size, fonts: [{ name: "Cormorant", data: serif, weight: 400, style: "normal" }] },
  );
}
