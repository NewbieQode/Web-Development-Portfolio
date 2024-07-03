// importing react and useState into the component //
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// create a DepositeInput component //
export default function DepositInput(props) {
  // Create the Deposite state variable //
  const [deposit, setDeposit] = useState(0);

  // Create function to add user's input amount to the current bank balance //
  function addMoney() {
    props.changeBalance(parseFloat(deposit) + parseFloat(props.balance));
  }
  return (
    <div>
      {/*creating an input box to allow user input*/}
      <input
        type="number"
        onChange={(event) => setDeposit(event.target.value)}
        id="balanceInput"
        placeholder="Enter balance here"
        defaultValue={deposit}
      />
      {/*button to deposite into bank balance*/}
      <Button
        className="btn btn-light"
        style={{
          padding: "4px",
          margin: "3px",
          color: "rgb(150, 101, 109)",
        }}
        onClick={addMoney}
      >
        Deposit
      </Button>
    </div>
  );
}
