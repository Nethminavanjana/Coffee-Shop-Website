import React from "react";
import "../styles/Visit.css";

const details = [
  { icon: "📍", text: "42 Roaster Lane, Midtown" },
  { icon: "🕐", text: "Mon – Fri: 6am – 8pm" },
  { icon: "🕐", text: "Sat – Sun: 7am – 6pm" },
  { icon: "📞", text: "+1 (555) 204-0918" },
  { icon: "✉️", text: "hello@brewnoir.com" },
];

export default function Visit() {
  return (
    <section id="visit" className="visit">
      <div className="container visit__inner">

        {/* Left: Text & Details */}
        <div className="visit__text">
          <p className="section-label">Find Us</p>
          <h2 className="section-heading visit__heading">
            Come Say <em>Hello</em>
          </h2>

          <ul className="visit__details">
            {details.map((d, i) => (
              <li key={i}>
                <span>{d.icon}</span>
                {d.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Map Placeholder */}
        <div className="visit__map-placeholder">
          <div className="visit__map-inner">
            <span>🗺️</span>
            <p>42 Roaster Lane, Midtown</p>
            <small>Open in Maps →</small>
          </div>
        </div>

      </div>
    </section>
  );
}
