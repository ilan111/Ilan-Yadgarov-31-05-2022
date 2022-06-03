import axios from "axios";
import React, { useEffect, useState } from "react";
import MainCard from "../../Components/Main Card/MainCard";
import Search from "../../Components/Search/Search";
import "./MainPage.css";

function MainPage() {
  const example = [
    {
      Version: 1,
      Key: "102255",
      Type: "City",
      Rank: 11,
      LocalizedName: "Guangzhou",
      Country: { ID: "CN", LocalizedName: "China" },
      AdministrativeArea: { ID: "GD", LocalizedName: "Guangdong" },
    },
    {
      Version: 1,
      Key: "102273",
      Type: "City",
      Rank: 11,
      LocalizedName: "Guiyang",
      Country: { ID: "CN", LocalizedName: "China" },
      AdministrativeArea: { ID: "GZ", LocalizedName: "Guizhou" },
    },
    {
      Version: 1,
      Key: "127047",
      Type: "City",
      Rank: 11,
      LocalizedName: "Giza",
      Country: { ID: "EG", LocalizedName: "Egypt" },
      AdministrativeArea: { ID: "GZ", LocalizedName: "Giza" },
    },
  ];

  const example2 = [
    {
      LocalObservationDateTime: "2022-06-03T18:55:00-04:00",
      EpochTime: 1654296900,
      WeatherText: "Clouds and sun",
      WeatherIcon: 4,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: { Value: 30.0, Unit: "C", UnitType: 17 },
        Imperial: { Value: 86.0, Unit: "F", UnitType: 18 },
      },
      MobileLink:
        "http://www.accuweather.com/en/aw/paradijs/12047/current-weather/12047?lang=en-us",
      Link: "http://www.accuweather.com/en/aw/paradijs/12047/current-weather/12047?lang=en-us",
    },
  ];

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [citySearch, setCitySearch] = useState(""); //The name of the first city that was found from API
  const [cityData, setCityData] = useState({}); // The weather data of the first city that was found from the API
  const [weather, setWeather] = useState("");
  const [degrees, setDegrees] = useState("");

  const API_KEY = `${process.env.REACT_APP_API_KEY}`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${location}`
        )
        .then((response) => {
          const result = response.data;
          setData(result);
          setCitySearch(result[0].LocalizedName);
          // console.log(result[0].LocalizedName);
        })
        .then(
          axios
            .get(
              `http://dataservice.accuweather.com/currentconditions/v1/${data[0].Key}?apikey=${API_KEY}`
            )
            .then((response) => {
              console.log(response.data);
              setCityData(response.data);
              setWeather(cityData[0].WeatherText);
              setDegrees(cityData[0].Temperature.Metric.Value);
            })
        );
      setLocation("");
      console.log(data);
    }
  };

  return (
    <div className="mainPage__container">
      {/* <Search /> */}

      <div className="search">
        <input
          type="text"
          value={location}
          placeholder="Enter Location"
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
        />
      </div>

      <MainCard city={citySearch} degrees={degrees} weather={weather} />
    </div>
  );
}

export default MainPage;
