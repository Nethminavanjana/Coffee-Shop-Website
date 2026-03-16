import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";

export default function Hero() {
  const titleRef = useRef(null);
  const subRef   = useRef(null);
  const ctaRef   = useRef(null);

  useEffect(() => {
    const items = [titleRef.current, subRef.current, ctaRef.current];
    items.forEach((el, i) => {
      if (!el) return;
      el.style.opacity   = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
        el.style.opacity    = "1";
        el.style.transform  = "translateY(0)";
      }, 300 + i * 200);
    });
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero__overlay" />

      {/* Floating bean decorations */}
      <div className="hero__beans" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="hero__bean" style={{ "--i": i }}>☕</span>
        ))}
      </div>

      <div className="hero__content container">
        <p className="section-label hero__label">Est. 2018 · Handcrafted Coffee</p>

        <h1 className="hero__title" ref={titleRef}>
          Every Cup Tells <br />
          <em>a Story.</em>
        </h1>

        <p className="hero__sub" ref={subRef}>
          Brewnoir is where dark roasts meet slow mornings. We source, roast, and
          brew with obsessive care — so your first sip feels like the only thing
          that matters right now.
        </p>

        <div className="hero__cta-row" ref={ctaRef}>
          <a href="#menu" className="btn-outline hero__btn">
            Explore Menu
          </a>
          <a href="#story" className="hero__text-link">
            Our Story →
          </a>
        </div>

        <div className="hero__scroll-indicator" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
