// Import React, useState and bootstrap components //
import React, { useState, useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../styling/Box.css";

// create Products component //
export default function DropDown(props) {
  // create value useState variables //
  const [value, setValue] = useState("Select Colour");
  // create colourChange useRef variable //
  const colourChange = useRef(null);

  // handleSelect function to select different dropdown options //
  const handleSelect = (eventKey) => {
    console.log(eventKey);
    setValue(eventKey);
  };

  // changeToSelect function to change font colour when a dropdown option is selected //
  const changeToSelected = () => {
    colourChange.current.style.color = "rgb(155, 72, 110)";
  };

  return (
    <div className="grid">
      {/* create dropdown component and pass props through each dropdown item */}
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle
          ref={colourChange}
          style={{
            backgroundColor: "rgb(171, 170, 170)",
            border: "2px, rgb(171, 170, 170)",
          }}
          id="dropdown-basic"
        >
          {value}
        </Dropdown.Toggle>
        {/* onClick event handler to call changeToSelected function and change font colour */}
        <Dropdown.Menu onClick={changeToSelected}>
          <Dropdown.Item
            eventKey={props.option}
            style={{
              backgroundColor: "rgb(155, 72, 110)",
              color: "rgb(252, 249, 250)",
            }}
            href="#/action-1"
          >
            {props.option}
          </Dropdown.Item>
          <Dropdown.Item
            eventKey={props.option1}
            style={{
              backgroundColor: "rgb(215, 104, 154)",
              color: "rgb(252, 249, 250)",
            }}
            href="#/action-2"
          >
            {props.option1}
          </Dropdown.Item>
          <Dropdown.Item
            eventKey={props.option2}
            style={{
              backgroundColor: "rgb(254, 125, 183)",
              color: "rgb(252, 249, 250)",
            }}
            href="#/action-3"
          >
            {props.option2}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
