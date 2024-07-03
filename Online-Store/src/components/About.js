// Import React, files and components //
import React from "react";
import Figure from "react-bootstrap/Figure";
import TotalPrice from "./TotalPrice";
import HeartLogo from "../images/HeartLogo.jpg";
import Etheral from "../images/Etheral.jpg";
import shop from "../images/shop.jpg";

// Create About component //
export default function About(props) {
  return (
    <div>
      <header className="Pages">
        <h1>About us</h1>
      </header>
      {/* Import TotalPrice component to display total in the top-right corner */}
      <TotalPrice />
      <h2 className="PriceT">{props.total.toFixed(2)}</h2>
      {/* Import figure component to display pictures and add captions and styling */}
      <Figure>
        <Figure.Image width={171} height={180} alt="171x180" src={HeartLogo} />
        <Figure.Caption className="figure">
          Indie makeup brand that specialises in fairycore <br /> inspired
          makeup to transform you into the fairy <br /> of your dreams.
        </Figure.Caption>
        <Figure.Image
          style={{ margin: "10px" }}
          width={171}
          height={180}
          alt="171x180"
          src={Etheral}
        />
        <Figure.Image
          style={{ margin: "5px" }}
          width={171}
          height={180}
          alt="171x180"
          src={shop}
        />
        <Figure.Caption className="figure">
          This is our Pink Paradise our store opened just about a year ago now{" "}
          <br />
          and we welcome all the fairies to come visit and get your fairy
          essentials.
        </Figure.Caption>
      </Figure>
      {/* Display Contact information to user */}
      <h3 className="contact">Contact Us -</h3>
      <p className="About">email: Tinkerdreams@gmail.com</p>
      <p className="About">Telephone: 0200 3647 982</p>
      <p className="About">Address: 116 Ebury St, London, SW1W 9QQ</p>
    </div>
  );
}
