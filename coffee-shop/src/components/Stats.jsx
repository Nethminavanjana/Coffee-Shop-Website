import React, { useState, useEffect } from "react";
import "../styles/Stats.css";

const stats = [
  { min: 0, max: 6, suffix: "+", label: "Years Brewing" },
  { min: 0, max: 12, suffix: "", label: "Origin Beans" },
  { min: 0, max: 4800, suffix: "+", label: "Happy Regulars" },
  { min: 0, max: 1, suffix: "", label: "Obsession: Quality" },
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [up, setUp] = useState(true);

  useEffect(() => {
    // slower update: 100ms instead of 50ms
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => {
          const step = Math.ceil(stats[i].max / 100); // smaller step → slower
          if (up) {
            if (val + step >= stats[i].max) return stats[i].max;
            return val + step;
          } else {
            if (val - step <= stats[i].min) return stats[i].min;
            return val - step;
          }
        })
      );
    }, 100); // slower interval

    // switch direction every 6 seconds
    const switchDirection = setInterval(() => setUp((prev) => !prev), 6000);

    return () => {
      clearInterval(interval);
      clearInterval(switchDirection);
    };
  }, [up]);

  return (
    <section className="stats">
      <div className="stats__inner container">
        {stats.map((s, i) => (
          <div className="stats__item" key={i}>
            <span className="stats__number">
              {counts[i]}
              {s.suffix}
            </span>
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}