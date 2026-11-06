import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="monogram" href="#home" aria-label="Dion Bajrami home">DB.</a>
      <button className="menu-toggle" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen}>
        {isOpen ? "Close" : "Menu"}
      </button>
      <nav className={`site-nav${isOpen ? " is-open" : ""}`} aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
        ))}
      </nav>
    </header>
  );
}
