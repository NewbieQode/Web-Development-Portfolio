// importing the components and files into App.js //
import "./App.css";
import DepositInput from "./Deposit.js";
import WithdrawInput from "./Withdraw.js";
import InterestInput from "./Interest.js";
import Charge from "./Charge.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

// create the App component //
function App() {
  // Create the bankBalance state variable //
  const [bankBalance, setBalance] = useState(0);

  return (
    <div className="App">
      {/* displays current bank balance to 2 decimal places */}
      <h2>Current Balance: £{bankBalance.toFixed(2)}</h2>
      {/* The bankBalance and setBalance state is passed to all 4 components as props */}
      <DepositInput balance={bankBalance} changeBalance={setBalance} />
      <WithdrawInput balance={bankBalance} changeBalance={setBalance} />
      <InterestInput balance={bankBalance} changeBalance={setBalance} />
      <Charge balance={bankBalance} changeBalance={setBalance} />
    </div>
  );
}

export default App;
