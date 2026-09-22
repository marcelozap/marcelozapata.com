import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Marcelo Zapata — Music, sound & everything connected";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OpenGraphImage() {
  const [orbit, serif, sans] = await Promise.all([
    readFile(join(process.cwd(), "public/images/malosound-orbit-social.png")),
    readFile(join(process.cwd(), "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-italic.woff")),
    readFile(join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/noto-sans-v27-latin-regular.ttf")),
  ]);

  return new ImageResponse(
    <div style={{ display: "flex", position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "#101114", color: "#edeae5", fontFamily: "Editorial Sans" }}>
      <img
        src={`data:image/png;base64,${orbit.toString("base64")}`}
        alt=""
        width={1080}
        height={608}
        style={{ position: "absolute", right: -270, top: 18, objectFit: "cover", opacity: 0.9 }}
      />
      <div style={{ display: "flex", position: "absolute", left: 0, top: 0, width: "100%", height: "100%", backgroundImage: "linear-gradient(90deg, #101114 0%, #101114 30%, rgba(16,17,20,0.88) 44%, rgba(16,17,20,0) 75%)" }} />
      <div style={{ display: "flex", position: "absolute", left: 0, top: 0, width: "100%", height: "100%", backgroundImage: "linear-gradient(0deg, #101114 0%, rgba(16,17,20,0) 32%, rgba(16,17,20,0) 78%, #101114 100%)" }} />
      <div style={{ display: "flex", position: "relative", flexDirection: "column", width: "100%", padding: "54px 64px 48px" }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 16, letterSpacing: 4, color: "#c3b5eb" }}>
          MUSIC / SOUND / MOTION
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 70 }}>
          <div style={{ fontFamily: "Cormorant", fontStyle: "italic", fontSize: 150, lineHeight: 0.84, letterSpacing: -5 }}>marcelo</div>
          <div style={{ display: "flex", fontSize: 140, fontWeight: 700, lineHeight: 1.1, letterSpacing: -8, marginTop: 7, WebkitTextStroke: "3px #edeae5" }}>
            zapata<span style={{ color: "#c3b5eb", WebkitTextStroke: "3px #c3b5eb" }}>.</span>
          </div>
        </div>
        <div style={{ marginTop: "auto", fontSize: 21, letterSpacing: 0.6, color: "#a5a39f" }}>marcelozapata.com</div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: serif, weight: 400, style: "italic" },
        { name: "Editorial Sans", data: sans, weight: 400, style: "normal" },
      ],
    },
  );
}
