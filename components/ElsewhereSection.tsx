import Image from "next/image";
import { connections } from "@/content/home";

export default function ElsewhereSection() {
  return <section className="panel elsewhere" id="elsewhere" aria-labelledby="elsewhere-title"><div className="container">
    <div className="section-heading"><p className="eyebrow">02—03 / The wider world</p><span className="section-aside">Sound, software, and a point of view.</span></div>
    <div className="world-heading"><h2 id="elsewhere-title">Different ways<br />of making something.</h2><p>Music leads the way. MaloSound connects it to creative technology. XIV is where I develop my trading work and approach to risk.</p></div>
    <div className="project-list">{connections.map((connection) => <a className={`project-row ${connection.name === "XIV" ? "xiv-project" : "sound-project"}`} id={connection.name === "XIV" ? "xiv" : "malosound"} key={connection.name} href={connection.href} target="_blank" rel="noreferrer">
      <div className="project-art" aria-hidden="true">{connection.name === "MaloSound" ? <Image src="/images/malosound-orbit.webp" alt="" width={1672} height={941} sizes="(max-width: 700px) 110px, 220px" /> : <span className="xiv-monogram">XIV<span className="xiv-orbit" /></span>}</div>
      <div className="project-name"><span className="eyebrow">{connection.role}</span><h3>{connection.name === "MaloSound" ? "malosound" : connection.name}</h3></div><p className="project-description">{connection.description}</p><span className="project-arrow" aria-label={connection.linkLabel}>↗</span>
    </a>)}</div>
    <figure className="future-vision"><Image src="/images/future-studio.webp" alt="An imagined coastal studio with guitars, music production equipment, and screens overlooking the ocean" width={1672} height={941} sizes="(max-width: 700px) 94vw, 1200px" /><figcaption><div><span className="eyebrow">A place I’m imagining</span><p>All of it, in one room.</p></div><span className="vision-note">Future studio concept<br />AI-generated visual</span></figcaption></figure>
  </div></section>;
}
