import { site } from "@/content/site";
export default function Header() {
  return (
    <header className="topbar">
      <div className="container header-inner">
        <a className="brand" href="/#top">{site.name}</a>
        <nav className="nav" aria-label="Main navigation">
          <a href="/#music">Listen</a><a href="/#about">My story</a><a href="/#elsewhere">Connections</a>
        </nav>
        <a className="booking-link" href="/#book">Bookings <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
