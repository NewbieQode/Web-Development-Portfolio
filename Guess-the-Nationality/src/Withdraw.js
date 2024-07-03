// importing react and useState into the component //
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// create a WithdrawInput component //
export default function WithdrawInput(props) {
  // Create the Withdraw state variable //
  const [withdraw, setWithdraw] = useState(0);

  // Create function to withdraw user's input amount from current bank balance //
  function takeMoney() {
    props.changeBalance(parseFloat(props.balance) - parseFloat(withdraw));
  }
  return (
    <div>
      {/*creating an input box to allow user input*/}
      <input
        type="number"
        onChange={(event) => setWithdraw(event.target.value)}
        id="balanceInput"
        placeholder="Enter balance here"
        defaultValue={withdraw}
      />
      {/*button to withdraw from the bank balance*/}
      <Button
        className="btn btn-light"
        style={{
          padding: "4px",
          margin: "3px",
          color: "rgb(150, 101, 109)",
        }}
        onClick={takeMoney}
      >
        Withdraw
      </Button>
    </div>
  );
}
