import React from "react";
import "../styles/Story.css";

export default function Story() {
  return (
    <section id="story" className="story">
      <div className="container story__inner">

        {/* Left: Text */}
        <div className="story__text">
          <p className="section-label">Our Story</p>
          <h2 className="section-heading story__heading">
            Born from a <em>Late-Night Obsession</em>
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
          <a href="#visit" className="btn-primary story__cta">
            Visit Us
          </a>
        </div>

        {/* Right: Feature Cards */}
        <div className="story__visuals">
          <div className="story__card story__card--large">
            <div className="story__card-content">
              <span className="story__card-emoji">🌱</span>
              <p>Single-Origin</p>
              <small>Sourced directly from farmers</small>
            </div>
          </div>

          <div className="story__card story__card--small">
            <div className="story__card-content">
              <span className="story__card-emoji">🔥</span>
              <p>Small-Batch Roasted</p>
              <small>Weekly, in-house</small>
            </div>
          </div>

          <div className="story__card story__card--small story__card--accent">
            <div className="story__card-content">
              <span className="story__card-emoji">♻️</span>
              <p>Sustainable</p>
              <small>100% compostable cups</small>
            </div>
          </div>

          <div className="story__card story__card--medium">
            <div className="story__card-content">
              <span className="story__card-emoji">🏆</span>
              <p>Award Winning</p>
              <small>Best Independent Cafe 2023</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
