// importing react and useState into the component //
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// create a InterestInput component //
export default function InterestInput(props) {
  // Create the Interest state variable //
  const [interest, setInterest] = useState(0);

  // Create a variable called “compound” and set the initial value to 100 //
  const compound = 100;

  // Create function to calculate the interest rate of current bank balance //
  function addInterest() {
    props.changeBalance(
      parseFloat(props.balance) * (1 + parseFloat(interest) / compound)
    );
  }
  return (
    <div>
      {/*creating an input box to allow user input*/}
      <input
        type="number"
        onChange={(event) => setInterest(event.target.value)}
        id="balanceInput"
        placeholder="Enter balance here"
        defaultValue={interest}
      />
      {/*button to add interest to bank balance*/}
      <Button
        className="btn btn-light"
        style={{
          padding: "4px",
          margin: "3px",
          color: "rgb(150, 101, 109)",
        }}
        onClick={addInterest}
      >
        Add interest
      </Button>
    </div>
  );
}
