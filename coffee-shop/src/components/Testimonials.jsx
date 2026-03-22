import React, { useState } from "react";
import "../styles/Testimonials.css";

// ── Inline data (or import from testimonialsData.js — see note below) ──
const testimonials = [
  {
    quote: "The flat white here is genuinely life-changing. I've been coming every morning for two years — it's part of my ritual now.",
    name: "Sarah M.",
    role: "Graphic Designer",
    initials: "SM",
    stars: 5,
  },
  {
    quote: "Best cold brew in the city, full stop. Steeped overnight, smooth as silk. Nothing else comes close.",
    name: "James K.",
    role: "Photographer",
    initials: "JK",
    stars: 5,
  },
  {
    quote: "The atmosphere is everything. Warm lighting, great music, and the chai latte is perfect on a slow Sunday.",
    name: "Priya R.",
    role: "Writer",
    initials: "PR",
    stars: 5,
  },
  {
    quote: "I work from here three days a week. Great Wi-Fi, incredible espresso, and the staff always remember my order.",
    name: "Tom H.",
    role: "Software Engineer",
    initials: "TH",
    stars: 5,
  },
  {
    quote: "The pastries alone are worth the trip. Buttery, fresh, and paired perfectly with their single-origin pour-over.",
    name: "Elena V.",
    role: "Food Blogger",
    initials: "EV",
    stars: 5,
  },
  {
    quote: "Discovered Brewnoir on a whim and never looked back. Rare to find a place this consistent, this good, this warm.",
    name: "Marcus B.",
    role: "Architect",
    initials: "MB",
    stars: 5,
  },
];

// ── If you prefer to keep your existing data file, replace the array above
// with: import { testimonials } from "../data/testimonialsData";
// and add `initials` to each entry in that file.

const AVATAR_COLORS = [
  "#b8732a", "#7a4e2d", "#a0621f",
  "#6b3f1f", "#c89050", "#8a5a2b",
];

const PAGE_SIZE = 3;

function StarIcon({ filled }) {
  return (
    <svg
      className="tm-star"
      viewBox="0 0 13 13"
      fill={filled ? "#b8732a" : "rgba(255,255,255,0.15)"}
      aria-hidden="true"
    >
      <path d="M6.5 1l1.5 3.1L11.5 4.6l-2.5 2.4.6 3.4L6.5 8.7 3.4 10.4l.6-3.4L1.5 4.6l3.5-.5z" />
    </svg>
  );
}

function TestimonialCard({ item, index, globalIndex }) {
  return (
    <div
      className="tm-card"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Stars */}
      <div className="tm-stars" aria-label={`${item.stars} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((s) => (
          <StarIcon key={s} filled={s <= item.stars} />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="tm-quote">"{item.quote}"</blockquote>

      {/* Author */}
      <div className="tm-author">
        <div
          className="tm-avatar"
          style={{ background: AVATAR_COLORS[globalIndex % AVATAR_COLORS.length] }}
          aria-hidden="true"
        >
          {item.initials}
        </div>
        <div>
          <div className="tm-name">{item.name}</div>
          <div className="tm-role">{item.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(testimonials.length / PAGE_SIZE);
  const slice = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="testimonials">
      <div className="container testimonials__inner">

        {/* Eyebrow */}
        <div className="testimonials__eyebrow">
          <span className="testimonials__eyebrow-line" />
          <span className="testimonials__eyebrow-text">What People Say</span>
          <span className="testimonials__eyebrow-line" />
        </div>

        {/* Heading */}
        <h2 className="testimonials__heading">
          Loved by Every <em>Kind of Morning</em>
        </h2>

        {/* Card grid — key forces remount+animation on page change */}
        <div className="testimonials__grid" key={page}>
          {slice.map((item, i) => (
            <TestimonialCard
              key={i}
              item={item}
              index={i}
              globalIndex={page * PAGE_SIZE + i}
            />
          ))}
        </div>

        {/* Page dots */}
        <div
          className="testimonials__dots"
          role="tablist"
          aria-label="Testimonials navigation"
        >
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === page}
              aria-label={`Page ${i + 1}`}
              className={`testimonials__dot ${i === page ? "active" : ""}`}
              onClick={() => setPage(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
