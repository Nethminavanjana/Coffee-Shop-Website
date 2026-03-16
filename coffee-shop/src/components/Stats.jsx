import React from "react";
import "../styles/Stats.css";

const stats = [
  { number: "6+",   label: "Years Brewing" },
  { number: "12",   label: "Origin Beans" },
  { number: "4800+",label: "Happy Regulars" },
  { number: "1",    label: "Obsession: Quality" },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__inner container">
        {stats.map((s, i) => (
          <div className="stats__item" key={i}>
            <span className="stats__number">{s.number}</span>
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
