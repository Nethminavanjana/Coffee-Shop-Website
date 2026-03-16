import React from "react";
import "../styles/Footer.css";

const navLinks  = ["Menu", "Story", "Gallery", "Visit"];
const socials   = ["𝕏", "📸", "▶️"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* Brand */}
        <div className="footer__brand">
          <span className="footer__brand-icon">☕</span>
          <span className="footer__brand-name">Brewnoir</span>
          <p className="footer__brand-tagline">
            Dark roasts. Slow mornings. Good people.
          </p>
        </div>

        {/* Nav Links */}
        <ul className="footer__links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="footer__divider" aria-hidden="true" />

        {/* Social Icons */}
        <div className="footer__socials">
          {socials.map((icon, i) => (
            <button
              key={i}
              className="footer__social-btn"
              aria-label={`Social link ${i + 1}`}
            >
              {icon}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <p className="footer__copy">
          © {new Date().getFullYear()} Brewnoir Coffee. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
