import React from "react";
import "./FavCard.css";

function FavCard({ city, degrees, weather }) {
  return (
    <div className="favCard__container">
      <p className="favCard__city">{city}</p>
      <p className="favCard__degrees">{degrees}</p>
      <p className="favCard__weather">{weather}</p>
    </div>
  );
}

export default FavCard;
