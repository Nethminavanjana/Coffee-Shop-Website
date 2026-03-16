import React from "react";
import "../styles/MenuCard.css";

export default function MenuCard({ item }) {
  return (
    <article className="menu-card">

      {/* Emoji Icon */}
      <div className="menu-card__icon" aria-hidden="true">
        {item.emoji}
      </div>

      {/* Badge Tag */}
      {item.tag && (
        <span className="menu-card__tag">{item.tag}</span>
      )}

      {/* Body */}
      <div className="menu-card__body">
        <h3 className="menu-card__name">{item.name}</h3>
        <p className="menu-card__desc">{item.description}</p>
      </div>

      {/* Footer */}
      <div className="menu-card__footer">
        <span className="menu-card__price">{item.price}</span>
        <button
          className="menu-card__btn"
          aria-label={`Add ${item.name} to order`}
        >
          + Add
        </button>
      </div>

    </article>
  );
}
