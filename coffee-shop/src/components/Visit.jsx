import React from "react";
import "../styles/Visit.css";

const details = [
  {
    label: "Address",
    text: "42 Roaster Lane, Midtown",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 1.5C6.515 1.5 4.5 3.515 4.5 6c0 3.375 4.5 10.5 4.5 10.5S13.5 9.375 13.5 6c0-2.485-2.015-4.5-4.5-4.5z"
          stroke="#b8732a"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="6" r="1.5" fill="#b8732a" />
      </svg>
    ),
  },
  {
    label: "Weekdays",
    text: "Mon – Fri: 6am – 8pm",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="#b8732a" strokeWidth="1.4" />
        <path
          d="M9 5v4l2.5 2.5"
          stroke="#b8732a"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Weekends",
    text: "Sat – Sun: 7am – 6pm",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="#b8732a" strokeWidth="1.4" />
        <path
          d="M9 5v4l2.5 2.5"
          stroke="#b8732a"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    text: "+1 (555) 204-0918",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M3 3.5h3l1.5 3.5-1.5 1c.8 1.6 2 2.7 3.5 3.5l1-1.5 3.5 1.5v3C14 15.3 11 16 9 16 5 16 2 13 2 9c0-2 .7-5 1.5-5.5z"
          stroke="#b8732a"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    text: "hello@brewnoir.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="2" stroke="#b8732a" strokeWidth="1.4" />
        <path d="M2 6l7 5 7-5" stroke="#b8732a" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Visit() {
  return (
    <section id="visit" className="visit">
      <div className="container visit__inner">

        {/* Left: Text & Details */}
        <div className="visit__text">
          <p className="visit__label">Find Us</p>
          <h2 className="visit__heading">
            Come Say <em>Hello</em>
          </h2>

          <ul className="visit__details">
            {details.map((d, i) => (
              <li key={i} className="visit__row">
                <div className="visit__icon-wrap">{d.icon}</div>
                <div className="visit__row-text">
                  <strong className="visit__row-label">{d.label}</strong>
                  <span className="visit__row-value">{d.text}</span>
                </div>
              </li>
            ))}
          </ul>

          <a href="https://maps.google.com" className="visit__cta" target="_blank" rel="noreferrer">
            Get Directions
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M2.5 6.5h8M6.5 2.5l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Right: Cafe photo + map card */}
        <div className="visit__map">
          <img
            className="visit__map-img"
            src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&w=800"
            alt="Brewnoir cafe exterior"
            loading="lazy"
          />
          <div className="visit__map-overlay" />
          <div className="visit__map-card">
            <div className="visit__map-addr">
              <small className="visit__map-addr-label">Brewnoir Coffee</small>
              <span className="visit__map-addr-text">42 Roaster Lane, Midtown</span>
            </div>
            <a
              href="https://maps.google.com"
              className="visit__map-btn"
              target="_blank"
              rel="noreferrer"
            >
              Open Maps
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path
                  d="M2 9L9 2M9 2H4M9 2v5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
