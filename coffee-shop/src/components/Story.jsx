import React from "react";
import "../styles/Story.css";

export default function Story() {
  return (
    <section id="story" className="story">
      <div className="container story__inner">

        {/* Left: Text */}
        <div className="story__text">
          <p className="story__label">Our Story</p>
          <h2 className="story__heading">
            Born from a
            <br />
            <em>Late-Night Obsession</em>
          </h2>
          <p className="story__body">
            Brewnoir started in 2018 in a 200 sq ft space with one espresso
            machine, two regulars, and a stubborn refusal to serve mediocre
            coffee. Our founder Mia spent three years traveling to Ethiopia,
            Colombia, and Sumatra — not as a tourist, but as a student.
          </p>
          <p className="story__body">
            She learned that great coffee isn't magic. It's obsessive care at
            every step: the farmer who picks only ripe cherries, the roaster who
            dials in curves by smell, the barista who respects the bean. We
            brought that entire chain to your neighborhood.
          </p>
          <a href="#visit" className="story__cta">
            Visit Us
          </a>
        </div>

        {/* Right: Photo + Cards */}
        <div className="story__visuals">

          {/* Real photo banner */}
          <div className="story__photo">
            <img
              src="https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&w=800"
              alt="Brewnoir coffee bar"
              loading="lazy"
            />
            <div className="story__photo-overlay" />
            <span className="story__photo-badge">Est. 2018 · Brewnoir</span>
          </div>

          {/* Stat cards */}
          <div className="story__card story__card--dark">
            <span className="story__card-icon">🌱</span>
            <p className="story__card-title">Single-Origin</p>
            <small className="story__card-sub">Sourced directly from farmers</small>
          </div>

          <div className="story__card story__card--cream">
            <span className="story__card-icon">🔥</span>
            <p className="story__card-title">Small-Batch Roasted</p>
            <small className="story__card-sub">Weekly, in-house</small>
          </div>

          <div className="story__card story__card--amber">
            <span className="story__card-icon">♻️</span>
            <p className="story__card-title">Sustainable</p>
            <small className="story__card-sub">100% compostable cups</small>
          </div>

          <div className="story__card story__card--cream">
            <span className="story__card-icon">🏆</span>
            <p className="story__card-title">Award Winning</p>
            <small className="story__card-sub">Best Independent Cafe 2023</small>
          </div>

        </div>

      </div>
    </section>
  );
}
