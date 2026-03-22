import React from "react";
import "../styles/Footer.css";

const navLinks = [
  { label: "Menu",      href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Gallery",   href: "#gallery" },
  { label: "Visit Us",  href: "#visit" },
];

const socials = [
  {
    label: "X / Twitter",
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path
          d="M11.5 2h2l-4.5 5.1L14 13H9.8L6.8 9.3 3.4 13H1.4l4.8-5.5L1 2h4.3l2.7 3.4L11.5 2z"
          fill="rgba(245,240,232,0.6)"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="1.5" y="1.5" width="12" height="12" rx="3.5" stroke="rgba(245,240,232,0.6)" strokeWidth="1.3"/>
        <circle cx="7.5" cy="7.5" r="2.8" stroke="rgba(245,240,232,0.6)" strokeWidth="1.3"/>
        <circle cx="11" cy="4" r=".8" fill="rgba(245,240,232,0.6)"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path
          d="M10 2H8.5C7.1 2 6 3.1 6 4.5V6H4v2.5h2V13h2.5V8.5H10L10.5 6H8.5V4.5c0-.3.2-.5.5-.5H10V2z"
          fill="rgba(245,240,232,0.6)"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="1" y="3" width="13" height="9" rx="2.5" stroke="rgba(245,240,232,0.6)" strokeWidth="1.3"/>
        <path d="M6 5.5l4 2-4 2V5.5z" fill="rgba(245,240,232,0.6)"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* Top 4-column grid */}
        <div className="footer__top">

          {/* Brand column */}
          <div className="footer__brand-col">
            <div className="footer__brand-row">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="#b8732a" strokeWidth="1.5"/>
                <path d="M9 14c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#b8732a" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 9V7M10.5 10.5L9 9M17.5 10.5L19 9" stroke="#b8732a" strokeWidth="1.3" strokeLinecap="round"/>
                <path d="M8 18h12" stroke="#b8732a" strokeWidth="1.3" strokeLinecap="round"/>
                <path d="M10 18v1.5a1 1 0 001 1h6a1 1 0 001-1V18" stroke="#b8732a" strokeWidth="1.3" strokeLinejoin="round"/>
              </svg>
              <span className="footer__brand-name">Brewnoir</span>
            </div>
            <p className="footer__tagline">
              Dark roasts. Slow mornings. Good people.
            </p>
            <div className="footer__socials">
              {socials.map((s) => (
                <a key={s.label} href="/" className="footer__social" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate column */}
          <div className="footer__col">
            <p className="footer__col-title">Navigate</p>
            <div className="footer__col-links">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href}>{l.label}</a>
              ))}
            </div>
          </div>

          {/* Hours column */}
          <div className="footer__col">
            <p className="footer__col-title">Hours</p>
            <div className="footer__hours-row">
              Mon – Fri <span className="footer__dot-sep">·</span> 6am – 8pm
            </div>
            <div className="footer__hours-row">
              Sat – Sun <span className="footer__dot-sep">·</span> 7am – 6pm
            </div>
            <div className="footer__address">42 Roaster Lane, Midtown</div>
          </div>

          {/* Newsletter column */}
          <div className="footer__col">
            <p className="footer__col-title">Stay in the loop</p>
            <p className="footer__newsletter-sub">
              Weekly specials & new beans — straight to your inbox.
            </p>
            <div className="footer__input-row">
              <input
                className="footer__input"
                type="email"
                placeholder="your@email.com"
                aria-label="Email address"
              />
              <button className="footer__input-btn" aria-label="Subscribe">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M7 2l5 5-5 5"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Brewnoir Coffee
            <span className="footer__copy-dot" />
            All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Use</a>
            <a href="/">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
