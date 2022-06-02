async function getCurrentWeather(url) {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
