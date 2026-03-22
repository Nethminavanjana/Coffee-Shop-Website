import React, { useState } from "react";
import "../styles/Menu.css";

const menuCategories = ["All", "Espresso", "Cold", "Tea"];

const menuItems = [
  {
    id: 1,
    name: "Flat White",
    category: "Espresso",
    price: "$5.50",
    desc: "Velvety microfoam over a double ristretto shot. Our purist's pick.",
    img: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=600&q=80",
  },
  {
    id: 2,
    name: "Caramel Latte",
    category: "Espresso",
    price: "$6.00",
    desc: "House-made salted caramel swirled into smooth steamed milk.",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
  },
  {
    id: 3,
    name: "Cold Brew",
    category: "Cold",
    price: "$5.00",
    desc: "Steeped 18 hours. Low acidity, naturally sweet, dangerously smooth.",
    img: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=600&q=80",
  },
  {
    id: 4,
    name: "Matcha Latte",
    category: "Tea",
    price: "$5.50",
    desc: "Ceremonial-grade matcha whisked with oat milk. Earthy and calming.",
    img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80",
  },
  {
    id: 5,
    name: "Iced Espresso",
    category: "Cold",
    price: "$4.50",
    desc: "Double shot over crystal ice. Nothing extra. Nothing missing.",
    img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&q=80",
  },
  {
    id: 6,
    name: "Cappuccino",
    category: "Espresso",
    price: "$5.00",
    desc: "Equal thirds — espresso, steamed milk, and thick velvety foam.",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80",
  },
  {
    id: 7,
    name: "Chai Latte",
    category: "Tea",
    price: "$5.50",
    desc: "House-blend spiced chai with frothed whole milk and cinnamon dust.",
    img: "https://images.pexels.com/photos/5946630/pexels-photo-5946630.jpeg?w=600",
  },
  {
    id: 8,
    name: "Nitro Cold Brew",
    category: "Cold",
    price: "$6.00",
    desc: "Nitrogen-infused for a cascading creamy pour straight from the tap.",
    img: "https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg?auto=compress&w=600",
  },
];

function MenuCard({ item }) {
  return (
    <div className="ms-card">
      <img
        className="ms-card-img"
        src={item.img}
        alt={item.name}
        loading="lazy"
      />
      <div className="ms-card-body">
        <span className="ms-card-tag">{item.category}</span>
        <h3 className="ms-card-name">{item.name}</h3>
        <p className="ms-card-desc">{item.desc}</p>
        <div className="ms-card-footer">
          <span className="ms-card-price">{item.price}</span>
          <button className="ms-card-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
}

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
          <div className="menu-section__eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Our Menu</span>
            <span className="eyebrow-line" />
          </div>
          <h2 className="section-heading">
            Crafted for Every
            <br />
            <em>Kind of Morning</em>
          </h2>
          <p className="menu-section__sub">
            Each drink is made to order — single-origin beans, house-made
            syrups. No shortcuts. No compromises.
          </p>
        </div>

        {/* Filter Pills */}
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
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="menu-card-wrapper"
              style={{ "--i": i }}
            >
              <MenuCard item={item} />
            </div>
          ))}
        </div>

        {/* Footer accent */}
        <div className="menu-section__footer">
          <span className="footer-rule" />
          <span className="footer-note">Seasonal specials change weekly</span>
          <span className="footer-rule" />
        </div>

      </div>
    </section>
  );
}
