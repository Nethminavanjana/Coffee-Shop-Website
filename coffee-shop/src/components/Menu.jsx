import React, { useState } from "react";
import { menuCategories, menuItems } from "../data/menuData";
import MenuCard from "./MenuCard";
import "../styles/Menu.css";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="menu-section">
      <div className="container">

        {/* Header */}
        <div className="menu-section__header">
          <p className="section-label">Our Menu</p>
          <h2 className="section-heading">
            Crafted for Every <em>Kind of Morning</em>
          </h2>
          <p className="menu-section__sub">
            Each drink is made to order, with single-origin beans and house-made
            syrups. No shortcuts. No compromises.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="menu-section__filters"
          role="tablist"
          aria-label="Menu categories"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`menu-filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="menu-section__grid">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
