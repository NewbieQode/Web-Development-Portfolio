// Import React, useState and bootstrap components //
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DropDown from "./Dropdown";
import TotalPrice from "./TotalPrice";
import "../styling/Box.css";

// create Products component //
export default function Products(props) {
  // create showTotal useState variables //
  const [showTotal, setShowTotal] = useState(false);

  // Create productCards array of objects to store product information such as name, description, price etc //
  const productCards = [
    {
      image:
        "https://www.magicalmakeup.co.uk/cdn/shop/products/rose-champagne-main_1200x.jpg?v=1666704885",
      product_name: "Eye Twinkle",
      description:
        "Fine glitter topper to make any eye look pop and channel your inner fairy.",
      price: 12,
      option1: "Blue Lagoon",
      option2: "Fairy Spell",
      option3: "Enchanted Forest",
    },
    {
      image:
        "https://colourpop.com/cdn/shop/files/Bundle-CupidsCalling.jpg?v=1714417894&width=988",
      product_name: "Flutter Blusher",
      description:
        "Velvety baked blusher for that natural flush and innocent fairy essence.",
      price: 15,
      option1: "Pretty Petal",
      option2: "Pinched Peach",
      option3: "Pale Pink",
    },
    {
      image:
        "https://www.amorlashes.co.uk/cdn/shop/products/WINGINGIT_2048x2048.jpg?v=1680019595",
      product_name: "Wink Lashes",
      description:
        "Faux Mink lashes to give that ultimate doll eye look, wispy effect to your lashes.",
      price: 7,
      option1: "Cat Eye",
      option2: "Dolly Wing",
      option3: "Flutter Baby",
    },
    {
      image:
        "https://plouise.co.uk/cdn/shop/files/Magic-Dust-Twinkle-Toes.jpg?v=1705928290&width=700",
      product_name: "Sparkle dust",
      description:
        "Loose iridescent highlighter that is both for the face and body to give a magical glow.",
      price: 20,
      option1: "Pink Cosmo",
      option2: "Lilac Light",
      option3: "Golden Beam",
    },
    {
      image:
        "https://d1flfk77wl2xk4.cloudfront.net/Assets/15/968/XXL_p0199396815.jpg",
      product_name: "Fairy Tears Liner",
      description:
        "Disco ball like liquid liner with wet look dry down with precise felt tip.",
      price: 10,
      option1: "Dew Drops",
      option2: "Crystal Ice",
      option3: "Ocean spray",
    },
    {
      image:
        "https://colourpop.com/cdn/shop/files/CloudSpun_palette2.jpg?crop=center&height=300&v=1716397233&width=300",
      product_name: "Wisp Palette",
      description:
        "Bright and prigmented eyeshadow palette to decorate the eyes for that fairy aesthetic.",
      price: 18,
      option1: "Grunge Wisp",
      option2: "Pastel Wisp",
      option3: "Rainbow Wisp",
    },
    {
      image:
        "https://feelunique.com/cdn-cgi/image/quality=90,format=auto,metadata=none,dpr=1/img/products/173227/onesize_secure_the_sweat_primer-1682666295_main.jpg",
      product_name: "Mystical Pore Magic",
      description:
        "A magically pore vanishing primer that works like magic to smooth the skin for the perfect base.",
      price: 10,
      option1: "Porcelain",
      option2: "Tan",
      option3: "Deep",
    },
    {
      image:
        "https://colourpop.com/cdn/shop/products/Winx-Face-Crystals-in-UC.jpg?v=1672181944&width=988",
      product_name: "Pixie Jewels",
      description:
        "The finishing touches for any fairy with pearl stickers with self adhesion on the back to sprinkle over the face.",
      price: 6,
      option1: "Pink Pearls",
      option2: "Mother of Pearl",
      option3: "Onyx Pearl",
    },
    {
      image:
        "https://colourpop.com/cdn/shop/files/Cherry-Bite-Lip-Oil-Inline-Bulk-Stylized_1.jpg?crop=center&height=300&v=1687292486&width=300",
      product_name: "Whisper Lacqeur",
      description:
        "A thick gloss with extra shine inside to become the talk of the forest with a hydrating formula to nourish that pout.",
      price: 8,
      option1: "Cherry",
      option2: "Glacier",
      option3: "Amber",
    },
    {
      image:
        "https://clomana.com/cdn/shop/files/9daysleft.png?v=1710605140&width=1000",
      product_name: "Spell Sponge",
      description:
        "For the perfect application use this enchanted tool to blend and bounce product over the face with a seamless finish.",
      price: 7,
      option1: "Shape 1",
      option2: "Shape 2",
      option3: "Shape 3",
    },
  ];

  // toggle function to show the total price when the buy button is clicked //
  function toggle() {
    setShowTotal((showTotal) => !showTotal);
  }

  // create renderProducts function to render information in to assigned card and dropdown components //
  const renderProducts = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.product_name}</Card.Title>
          <Card.Text>{card.description}</Card.Text>
          <Card.Text>£{card.price}</Card.Text>
          {/* onClick event handle to toggle Total price to appear once a buy button has been clicked */}
          <Button
            style={{
              backgroundColor: "rgb(155, 72, 110)",
              border: "2px ,rgb(155, 72, 110)",
              margin: "4px",
            }}
            onClick={() => priceTotal(card.price)}
            value={card.price}
            variant="primary"
          >
            Add to cart
          </Button>
          <Button
            style={{
              backgroundColor: "rgb(212, 122, 162)",
              border: "2px , rgb(212, 122, 162)",
              margin: "4px",
            }}
            onClick={toggle}
            value={card.price}
            variant="primary"
          >
            Buy
          </Button>
          <DropDown
            option={card.option1}
            option1={card.option2}
            option2={card.option3}
          />
        </Card.Body>
      </Card>
    );
  };

  // priceTotal function to add to the total price amount //
  function priceTotal(increment) {
    props.changeTotal(increment + props.total);
  }

  return (
    <div>
      <header className="Pages">
        <h1>Products</h1>
      </header>
      {/* TotalPrice component to show when onClick function on button has been clicked*/}
      <div>
        {showTotal && <TotalPrice />}
        {showTotal && <h2 className="PriceT">{props.total.toFixed(2)}</h2>}
      </div>
      {/* Use .map method to render each product in productCards array */}
      <div className="grid">{productCards.map(renderProducts)}</div>
    </div>
  );
}
