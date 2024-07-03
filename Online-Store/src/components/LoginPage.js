// import react and useNavigate and useLocation hooks //
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// create the LoginPage component //
export default function LoginPage() {
  // create variables for the useNaviagte and useLocation functions //
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <header className="Pages">
        {/* Pass user input into welcome message after logging in */}
        <h1>Welcome {location.state.login} !</h1>
        <div>
          {/* logout button to execute useNavigate function */}
          <button onClick={() => navigate(-1)}>Logout</button>
        </div>
      </header>
    </div>
  );
}
