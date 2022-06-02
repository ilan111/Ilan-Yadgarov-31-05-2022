import React from "react";
import FavCard from "../../Components/Fav Card/FavCard";
import "./FavoritesPage.css";

function FavoritesPage() {
  const dummy_data = [
    {
      city: "Tel Aviv",
      degrees: "40",
      weather: "Sunny",
    },
    {
      city: "London",
      degrees: "20",
      weather: "Windy",
    },
    {
      city: "Paris",
      degrees: "30",
      weather: "Rainy",
    },
  ];
  return (
    <div className="favoritesPage__container">
      <div className="favoritesPage__cards">
        {dummy_data.map((location) => {
          return (
            <FavCard
              city={location.city}
              degrees={location.degrees}
              weather={location.weather}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FavoritesPage;
