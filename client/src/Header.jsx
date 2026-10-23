import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Übersicht", end: true },
  { to: "/transactions", label: "Transaktionen" },
  { to: "/categories", label: "Kategorien" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="brand">
          <span className="brand__mark">₣</span>
          <span className="brand__name">FinTrack</span>
        </NavLink>

        <nav className="nav">
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
