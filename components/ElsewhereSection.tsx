import Image from "next/image";
import { connections } from "@/content/home";

export default function ElsewhereSection() {
  return <section className="panel elsewhere" id="elsewhere" aria-labelledby="elsewhere-title"><div className="container">
    <div className="section-heading"><p className="eyebrow">03 / Workbench</p><span className="section-aside">Optional.</span></div>
    <div className="world-heading"><h2 id="elsewhere-title">The workbench.</h2><p>MaloSound is the workbench — recording, sound, tools. The songs still come first.</p></div>
    <div className="project-list">{connections.map((connection) => <a className="project-row sound-project" id="malosound" key={connection.name} href={connection.href} target="_blank" rel="noreferrer">
      <div className="project-art" aria-hidden="true"><Image src="/images/malosound-orbit.webp" alt="" width={1672} height={941} sizes="(max-width: 700px) 110px, 220px" /></div>
      <div className="project-name"><span className="eyebrow">{connection.role}</span><h3>malosound</h3></div><p className="project-description">{connection.description}</p><span className="project-arrow" aria-label={connection.linkLabel}>↗</span>
    </a>)}</div>
  </div></section>;
}
