import { connections } from "@/content/home";
export default function ElsewhereSection() {
  return (
    <section className="panel elsewhere" id="elsewhere" aria-labelledby="elsewhere-title">
      <div className="container">
        <div className="connection-heading"><h2 id="elsewhere-title">How it connects</h2></div>
        <div className="connection-map">{connections.map((connection) => (
          <article className={`connection-part${connection.current ? " current-part" : ""}`} key={connection.name}>
            <p className="connection-role">{connection.role}</p>
            <h3>{connection.name}</h3>
            <a className="text-link" href={connection.href} target={connection.current ? undefined : "_blank"} rel={connection.current ? undefined : "noreferrer"}>
              {connection.linkLabel}<span aria-hidden="true">{connection.current ? "↑" : "↗"}</span>
            </a>
          </article>
        ))}</div>
      </div>
    </section>
  );
}
