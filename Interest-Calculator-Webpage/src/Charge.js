// importing react and useState into the component //
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// create a Charge component //
export default function Charge(props) {
  // Create the charge state variable //
  const [charge, setCharge] = useState(3.5);

  // Create a variable called “fee” and assign calcultion to calculate the charge amount //
  const fee = charge * (props.balance / 100);

  // Create function to charge a fixed amount to current bank balance //
  function feeCharge() {
    props.changeBalance(parseFloat(props.balance) - fee);
  }
  return (
    <div>
      {setCharge}
      {/*button to charge a fee to the bank balance*/}
      <Button
        className="btn  btn-light"
        style={{
          padding: "4px",
          color: "rgb(150, 101, 109)",
        }}
        onClick={feeCharge}
      >
        Charge fee
      </Button>
    </div>
  );
}
