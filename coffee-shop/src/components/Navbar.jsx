import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const navLinks = ["Menu", "Story", "Gallery", "Visit"];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">

        {/* Logo */}
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-icon">☕</span>
          <span className="navbar__logo-text">Brewnoir</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="navbar__link">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#visit" className="navbar__cta btn-primary">
          Order Now
        </a>

        {/* Mobile Burger */}
        <button
          className={`navbar__burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__drawer ${menuOpen ? "navbar__drawer--open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="navbar__drawer-link"
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <a href="#visit" className="btn-primary" onClick={() => setMenuOpen(false)}>
          Order Now
        </a>
      </div>
    </nav>
  );
}
