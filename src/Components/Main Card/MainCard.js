import React from "react";
import "./MainCard.css";

function MainCard() {
  const dummy_data = {
    city: "Tel Aviv",
    degrees: "38",
    weather: "Scattered clouds",
    image:
      "https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png",
    nextDays: {
      day1: { day: "Sun", degrees: "38" },
      day2: { day: "Mon", degrees: "39" },
      day3: { day: "Tue", degrees: "40" },
      day4: { day: "Wed", degrees: "30" },
      day5: { day: "Thu", degrees: "20" },
    },
  };

  return (
    <div className="card__container">
      <section className="card__top">
        <div className="card__cityInfo">
          <div className="card__img">
            <img src={dummy_data.image} alt="weather" />
          </div>
          <div className="card__cityWeather">
            <p className="city">{dummy_data.city}</p>
            <p className="degrees">{dummy_data.degrees}</p>
          </div>
        </div>
        <div className="card__favorites">
          <img
            src="https://www.nicepng.com/png/full/778-7786050_download-instagram-like-icon-png.png"
            alt="Like"
            className="card__likeIcon"
          ></img>
          <button>Add to favorites</button>
        </div>
      </section>

      <section className="card__middle">
        <p className="card__weatherText">{dummy_data.weather}</p>
      </section>

      <section className="card__bottom">
        <div className="card__nextDay">
          <p className="card__dayText">{dummy_data.nextDays.day1.day}</p>
          <p className="card__degreeText">{dummy_data.nextDays.day1.degrees}</p>
        </div>
        <div className="card__nextDay">
          <p className="card__dayText">{dummy_data.nextDays.day2.day}</p>
          <p className="card__degreeText">{dummy_data.nextDays.day2.degrees}</p>
        </div>
        <div className="card__nextDay">
          <p className="card__dayText">{dummy_data.nextDays.day3.day}</p>
          <p className="card__degreeText">{dummy_data.nextDays.day3.degrees}</p>
        </div>
        <div className="card__nextDay">
          <p className="card__dayText">{dummy_data.nextDays.day4.day}</p>
          <p className="card__degreeText">{dummy_data.nextDays.day4.degrees}</p>
        </div>
        <div className="card__nextDay">
          <p className="card__dayText">{dummy_data.nextDays.day5.day}</p>
          <p className="card__degreeText">{dummy_data.nextDays.day5.degrees}</p>
        </div>
      </section>
    </div>
  );
}

export default MainCard;
