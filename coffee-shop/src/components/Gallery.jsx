import React from "react";
import "../styles/Gallery.css";

const items = [
  {
    label: "Espresso Art",
    tag: "Craft",
    img: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&w=900",
  },
  {
    label: "Organic Beans",
    tag: "Origin",
    img: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&w=600",
  },
  {
    label: "House Pastries",
    tag: "Baked",
    img: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&w=600",
  },
  {
    label: "Live Jazz Fridays",
    tag: "Events",
    img: "https://images.pexels.com/photos/4472545/pexels-photo-4472545.jpeg?auto=compress&w=600",
  },
  {
    label: "Work-Friendly Space",
    tag: "Space",
    img: "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&w=600",
  },
  {
    label: "Open 6am Daily",
    tag: "Hours",
    img: "https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&w=1200",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">

        {/* Header */}
        <div className="gallery__header">
          <div className="gallery__eyebrow">
            <span className="gallery__eyebrow-line" />
            <span className="gallery__eyebrow-text">The Atmosphere</span>
            <span className="gallery__eyebrow-line" />
          </div>
          <h2 className="gallery__heading">
            More Than Just <em>Coffee</em>
          </h2>
          <p className="gallery__sub">
            A space to slow down, connect, and savour every moment —
            from the first pour to the last crumb.
          </p>
        </div>

        {/* Editorial masonry-style grid */}
        <div className="gallery__grid">
          {items.map((item, i) => (
            <div className="gallery__item" key={i}>
              <img
                src={item.img}
                alt={item.label}
                loading="lazy"
                className="gallery__img"
              />
              <div className="gallery__overlay" />
              <div className="gallery__info">
                <span className="gallery__label">{item.label}</span>
                <span className="gallery__tag">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
