import { connections } from "@/content/home";

export default function ElsewhereSection() {
  const malosound = connections[0];
  return <section className="panel elsewhere" id="malosound" aria-labelledby="elsewhere-title"><div className="container">
    <div className="workbench">
      <p className="eyebrow">{malosound.name}</p>
      <h2 id="elsewhere-title">{malosound.description}</h2>
      <a className="text-link" href={malosound.href} target="_blank" rel="noreferrer">{malosound.linkLabel} <span aria-hidden="true">↗</span></a>
    </div>
  </div></section>;
}
