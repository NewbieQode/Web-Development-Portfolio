// weather API variable for the current weather in San fransico //
const sanWeath =
  "https://api.open-meteo.com/v1/forecast?latitude=37.7749&longitude=-122.4194&current=temperature_2m";

// async function to fetch the weather API data //
async function currentWeather() {
  try {
    let getWeather = await fetch(sanWeath);
    let data = await getWeather.json();
    let displayWeather = await data;
    const time = data.timezone;
    // JSON to convert data object into a string //
    const temp = JSON.stringify(data.current.temperature_2m);
    // display the fetched data on the webpage //
    document.getElementById("description").textContent = time;
    document.getElementById("temp").textContent = temp + " " + "°C";
    console.log(displayWeather);
  } catch (err) {
    console.log(err);
  }
}
// callback the currentWeather function //
currentWeather();

// currentWeather function to be executed once webpage in fully loaded //
window.onload = function () {
  currentWeather("San Fran");
};
