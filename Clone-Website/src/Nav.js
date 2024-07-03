import { IconContext } from "react-icons/lib";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import avatar from "./avatar.png";

function Nav() {
  return (
    <IconContext.Provider
      value={{ color: `rgba(7, 7, 7, 0.82)`, size: "28px" }}
    >
      <nav>
        <img
          className="nav_logo"
          src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
          alt="youtube logo"
        />
        <img className="avatar_logo" src={avatar} alt="avatar logo" />
        <input type="text" />{" "}
        <p
          className="nav"
          style={{ display: "inline-block", position: "absolute" }}
        >
          Search
        </p>
        <p
          className="login"
          style={{
            border: `2px solid rgba(4, 4, 4, 1)`,
            borderRadius: `23px`,
            padding: `11.5px`,
            width: `86px`,
          }}
        >
          Sign in
        </p>
        <div
          style={{
            display: "block",
            margin: "12px",
            position: "absolute",
            display: "inline-block",
            right: "147px",
            top: "2px",
          }}
        >
          <BsThreeDotsVertical />
        </div>
        <div
          style={{
            display: "block",
            margin: `18px`,
            // padding: `8px`,
            // top: `-5px`,
          }}
        >
          <AiOutlineMenu />
        </div>
        <div
          style={{
            display: "inline-block",
            margin: "12px",
            position: "absolute",
            right: "397px",
            top: "4px",
          }}
        >
          <AiOutlineSearch />
        </div>
      </nav>
    </IconContext.Provider>
  );
}

export default Nav;
