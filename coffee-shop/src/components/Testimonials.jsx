import React, { useState } from "react";
import { testimonials } from "../data/testimonialsData";
import "../styles/Testimonials.css";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="testimonials">
      <div className="container testimonials__inner">

        {/* Label */}
        <p className="section-label testimonials__label">What People Say</p>

        {/* Quote — key forces re-animation on change */}
        <blockquote className="testimonials__quote" key={active}>
          <span className="testimonials__mark">"</span>
          {current.quote}
        </blockquote>

        {/* Author Info */}
        <div className="testimonials__author">
          <div
            className="testimonials__stars"
            aria-label={`${current.stars} out of 5 stars`}
          >
            {"★".repeat(current.stars)}
          </div>
          <strong className="testimonials__name">{current.name}</strong>
          <span className="testimonials__role">{current.role}</span>
        </div>

        {/* Dot Navigation */}
        <div className="testimonials__dots" role="tablist" aria-label="Testimonials navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`testimonials__dot ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
