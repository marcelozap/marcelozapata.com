export default function Header({ listen = "Listen", music = "Music", hello = "Hello" }: { listen?: string; music?: string; hello?: string }) {
  return (
    <header className="topbar"><div className="container header-inner">
      <a className="brand" href="/#top" aria-label="Marcelo Zapata, home">mz<span>·</span></a>
      <nav className="nav" aria-label="Main navigation"><a href="/#listen">{listen}</a><a href="/#music">{music}</a><a href="/#hello">{hello}</a></nav>
    </div></header>
  );
}
