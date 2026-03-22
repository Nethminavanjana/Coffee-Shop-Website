import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";
import heroImg from "../images/hero2-removebg-preview.png";

export default function Hero() {
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const subRef   = useRef(null);
  const ctaRef   = useRef(null);

  useEffect(() => {
    const items = [labelRef.current, titleRef.current, subRef.current, ctaRef.current];
    items.forEach((el, i) => {
      if (!el) return;
      el.style.opacity   = "0";
      el.style.transform = "translateY(28px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
        el.style.opacity    = "1";
        el.style.transform  = "translateY(0)";
      }, 200 + i * 180);
    });
  }, []);

  return (
    <section id="hero" className="hero">

      {/* Ambient blobs */}
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />

      {/* Floating dot particles */}
      <div className="hero__particles" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="hero__particle" style={{ "--i": i }} />
        ))}
      </div>

      {/* Full-width wrapper — NO container class here */}
      <div className="hero__wrapper">

        {/* LEFT — Text */}
        <div className="hero__content">
          <p className="hero__label" ref={labelRef}>
            <span className="hero__label-dot" />
            Est. 2018 · Handcrafted Coffee
          </p>

          <h1 className="hero__title" ref={titleRef}>
            Every Cup Tells
            <br />
            <em>a Story.</em>
          </h1>

          <p className="hero__sub" ref={subRef}>
            Brewnoir is where dark roasts meet slow mornings. We source,
            roast, and brew with obsessive care — so your first sip feels
            like the only thing that matters right now.
          </p>

          <div className="hero__cta-row" ref={ctaRef}>
            <a href="#menu" className="hero__btn-primary">
              Explore Menu
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#story" className="hero__btn-ghost">
              Our Story
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Scroll line */}
          <div className="hero__scroll" aria-hidden="true">
            <span className="hero__scroll-line" />
            <span className="hero__scroll-text">scroll</span>
          </div>
        </div>

        {/* RIGHT — Image */}
        <div className="hero__image-wrap">
          {/* Glow ring behind image */}
          <div className="hero__image-glow" aria-hidden="true" />
          <img
            className="hero__image"
            src={heroImg}
            alt="Brewnoir signature coffee cup"
          />
        </div>

      </div>
    </section>
  );
}
