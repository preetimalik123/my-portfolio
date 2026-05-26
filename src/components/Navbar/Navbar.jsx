// components/Navbar/Navbar.jsx

import "./Navbar.css";

const navItems = [
  {
    label: "About",
    href: "#about",
  },

  {
    label: "Experience",
    href: "#work",
  },

  {
    label: "Projects",
    href: "#projects",
  },

  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {

  return (
    <header className="navbarWrapper">

      <nav className="navbar container">

        {/* LOGO */}
        <a
          href="/"
          className="logo"
        >
          PREETI MALIK
        </a>

        {/* NAV LINKS */}
        <div className="navLinks">

          {navItems.map((item) => (

            <a
              key={item.label}
              href={item.href}
              className="navLink"
            >
              {item.label}
            </a>

          ))}

        </div>

      </nav>

    </header>
  );
}