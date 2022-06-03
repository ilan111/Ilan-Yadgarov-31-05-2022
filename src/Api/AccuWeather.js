const axios = require("axios");

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

async function updateCity(city) {
  const cityData = await this.getCity(city);
  const weather = await this.getWeather(cityData.Key);
  return { cityData, weather };
}

async function getCity(city) {
  const query = `?apikey=${API_KEY}&q=${city}`;
  const response = await fetch(this.cityURI + query);
  const data = await response.json();
  return data[0];
}

// async function getCurrentWeather(key) {
//   const query = `${key}?apikey=${API_KEY}`;
//   const response = await fetch(
//     `http://dataservice.accuweather.com/currentconditions/v1/` + query
//   );
//   const data = await response.json();
//   return data[0];
// }

// async function getCurrentWeather(locationKey) {
//   const response = await axios.get(
//     `http://dataservice.accuweather.com/currentconditions/v1/${encodeURIComponent(
//       locationKey
//     )}?apikey=${API_KEY}`
//   );

//   const data = await response.json();
//   console.log(data);
// }

const getLocationAutoComplete = async (city) => {
  axios
    .get(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`
    )
    .then((response) => {
      console.log(response.data);
    });
};

export default getLocationAutoComplete;
