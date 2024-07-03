import Header from "./Header.js";
import Nav from "./Nav.js";
import Content from "./Content.js";
import Card from "./Card.js";
import Card1 from "./Card1.js";
import Card2 from "./Card2.js";
import Card3 from "./Card3.js";
import Card4 from "./Card4.js";
import Card5 from "./Card5.js";
import SideBar from "./SideBar.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Content />
      <Card
        title="10 Hours EPIC THUNDER & RAIN"
        name="Rain Sounds for Sleeping"
        views="41K"
        date="3 months ago"
      />
      <Card1
        title="Burning Sun: Exposing the secret K-pop"
        name="BBC World Service"
        views="303K"
        date="23 hours ago"
      />
      <Card2
        title="Chipotle Conspiracy Investigation"
        name="Shane2"
        views="77K"
        date="3 hours ago"
      />
      <Card3
        title="Calm Nintendo games music"
        name="Vapid"
        views="1.7M"
        date="1 year ago"
      />
      <Card4
        title="1태버(Tabber) - 007 & Chi-Ka (Feat.DEAN)"
        name="Dingo Freestyle"
        views="1.1M"
        date="2 months ago"
      />
      <Card5
        title="Refreshing Early Summer Makeup"
        name="PONY Sydrome"
        views="38K"
        date="1 day ago"
      />
      <SideBar />
      <Footer />
      <Link
        to="https://www.youtube.com/"
        style={{
          position: `absolute`,
          display: `inline-block`,
          marginTop: `51%`,
          marginBottom: `50%`,
          left: `45%`,
        }}
      >
        Go to Youtube
      </Link>
    </div>
  );
}

export default App;
