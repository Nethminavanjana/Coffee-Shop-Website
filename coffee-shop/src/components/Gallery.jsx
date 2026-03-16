import React from "react";
import "../styles/Gallery.css";

const items = [
  { emoji: "☕", label: "Espresso Art",        color: "#2e1a0e" },
  { emoji: "🌿", label: "Organic Beans",       color: "#3a5c2a" },
  { emoji: "🧁", label: "House Pastries",      color: "#8b5e3c" },
  { emoji: "🎵", label: "Live Jazz Fridays",   color: "#1a2a4a" },
  { emoji: "📚", label: "Work-Friendly Space", color: "#4a3a2a" },
  { emoji: "🌅", label: "Open 6am Daily",      color: "#7a4a20" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">

        <p className="section-label gallery__label">The Atmosphere</p>
        <h2 className="section-heading gallery__heading">
          More Than Just <em>Coffee</em>
        </h2>

        <div className="gallery__grid">
          {items.map((item, i) => (
            <div
              key={i}
              className="gallery__item"
              style={{ "--bg": item.color }}
              role="img"
              aria-label={item.label}
            >
              <span className="gallery__emoji" aria-hidden="true">
                {item.emoji}
              </span>
              <span className="gallery__item-label">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
