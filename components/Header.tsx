export default function Header() {
  return (
    <header className="topbar"><div className="container header-inner">
      <a className="brand" href="/#top" aria-label="Marcelo Zapata, home">mz<span>·</span></a>
      <nav className="nav" aria-label="Main navigation"><a href="/#music">Music</a><a href="/#book">Get in touch <span aria-hidden="true">↗</span></a></nav>
    </div></header>
  );
}
