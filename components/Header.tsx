export default function Header() {
  return (
    <header className="topbar"><div className="container header-inner">
      <a className="brand" href="/#top" aria-label="Marcelo Zapata, home">mz<span>·</span></a>
      <nav className="nav" aria-label="Main navigation"><a href="/#listen">Listen</a><a href="/#music">Music</a><a href="/#hello">Hello</a></nav>
    </div></header>
  );
}
