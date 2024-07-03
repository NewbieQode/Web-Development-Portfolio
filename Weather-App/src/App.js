// Importing react hook - useState //
import React, { useState } from "react";
import "./App.css";

// Create the App component //
function App() {
  // Create search and weather state variables //
  const [search, setSearch] = useState(" ");
  const [weather, setWeather] = useState({});

  // Create searchRequest function to fetch the weather of location entered //
  const searchRequest = async () => {
    let response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API}&q=${search}&aqi=no`
    );
    let data = await response.json();
    setWeather(data);
    console.log(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather App</h2>

        <div>
          {/* Input field for location of user's choice */}
          <input
            type="text"
            placeholder="Enter city here"
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* Search button to execute searchRequest function */}
          <button onClick={searchRequest}>Search</button>
        </div>
        <div>
          {/* Displaying location name and temperature in celsius to the user on the webpage */}
          <p>Location: {weather?.location?.name}</p>
          <p>Current Weather: {weather?.current?.temp_c}°C</p>
        </div>
      </header>
    </div>
  );
}
export default App;
