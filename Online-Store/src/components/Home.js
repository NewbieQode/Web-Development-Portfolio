// import react, useState and useNavigate hooks //
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// create Home component //
export default function Home() {
  // Create login state variables //
  const [login, setLogin] = useState("");
  const navigate = useNavigate();

  // create loginbtn function to check if the input field is empty and throw alert to notify user //
  function loginBtn() {
    if (!login) {
      alert("please enter user login");
      return;
    }
  }

  // create handleClick function to handle the click event of the login button and prevent login if the input field is empty //
  function handleClick() {
    if (!login) {
      alert("please enter user login");
      return;
    }
    loginBtn();
  }

  return (
    <div>
      <header className="Pages">
        <h1>Welcome to the Homepage</h1>
        <div>
          <label>
            Name:
            {/* Input field for user's login */}
            <input
              className="name"
              style={{ height: "25px" }}
              type="text"
              defaultValue={login}
              placeholder="Enter Login here"
              onChange={(e) => setLogin(e.target.value)}
            />
            {/* login button to execute handleClick and useNavigate function */}
            <button
              style={{
                border: "5px",
                borderRadius: "5px",
                height: "25px",
                display: "inline-block",
                textAlign: "center",
                fontSize: "15px",
              }}
              onClick={() => {
                handleClick(
                  navigate("/LoginPage", { state: { login: login } })
                );
              }}
            >
              Login
            </button>
          </label>
        </div>
      </header>
    </div>
  );
}
