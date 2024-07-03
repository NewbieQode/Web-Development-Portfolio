// Importing react hook - useState, useEffect, useRef //
import React, { useState, useEffect, useRef } from "react";
import "./App.css";

// Create the App component //
function App() {
  // Create predict and locations state variables //
  const [predict, setPredict] = useState(" ");
  const [locations, setLocations] = useState({});
  const inputRef = useRef(" ");

  // Create fetchDate function to fetch the predict country of the name entered //
  const fetchData = async () => {
    let response = await fetch(
      `https://api.allorigins.win/raw?url=https://api.nationalize.io?name=${predict}`
    );
    let data = await response.json();
    setLocations(data);
    console.log(data);
  };

  // focus function to execute everytime after the application renders //
  useEffect(() => {
    const autoFocus = () => {
      focus();
    };
    autoFocus();
  }, []);

  // Create focus function to auto-focus on an input field  //
  function focus() {
    inputRef.current.focus();
  }

  // Create handleClear function to clear the input field //
  const handleClear = () => {
    inputRef.current.value = ` `;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Nationality Prediction App</h2>

        <div>
          {/* Input field for location of user's choice */}
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter name here"
            onChange={(e) => setPredict(e.target.value)}
          />
          {/* predict button to execute fetchData function */}
          <button onClick={fetchData}>Predict</button>

          {/* claer button to execute handleClear function */}
          <button onClick={handleClear}>Clear</button>
        </div>
        <div>
          {/* Displaying country name to the user on the webpage */}
          <p>Predicted Country: {locations?.country?.[0]?.country_id}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
