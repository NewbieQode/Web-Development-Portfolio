import { IconContext } from "react-icons/lib";
import { AiFillHome, AiOutlinePlaySquare } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { SiYoutubeshorts } from "react-icons/si";

function SideBar() {
  return (
    <IconContext.Provider
      value={{ color: `rgba(7, 7, 7, 0.82)`, size: "23px" }}
    >
      <nav>
        <div
          style={{
            display: "inline-block",
            position: "absolute",
            top: "85px",
            marginLeft: "20px",
          }}
        >
          <AiFillHome />
        </div>
        <p
          className="side"
          style={{
            display: "inline-block",
            position: "absolute",
            top: "98px",
            marginLeft: "11px",
          }}
        >
          Home
        </p>
        <div
          style={{
            display: "inline-block",
            position: "absolute",
            top: "150px",
            marginLeft: "20px",
          }}
        >
          <SiYoutubeshorts />
        </div>
        <p
          className="side"
          style={{
            display: "inline-block",
            position: "absolute",
            top: "168px",
            marginLeft: "11px",
          }}
        >
          Shorts
        </p>
        <div
          style={{
            display: "inline-block",
            position: "absolute",
            top: "215px",
            marginLeft: "20px",
          }}
        >
          <MdOutlineSubscriptions />
        </div>
        <p
          className="side"
          style={{
            display: "inline-block",
            position: "absolute",
            top: "228px",
            marginLeft: "2px",
          }}
        >
          Subscriptions
        </p>
        <div
          style={{
            display: "inline-block",
            position: "absolute",
            top: "280px",
            marginLeft: "20px",
          }}
        >
          <AiOutlinePlaySquare />
        </div>
        <p
          className="side"
          style={{
            display: "inline-block",
            position: "absolute",
            top: "293px",
            marginLeft: "17px",
          }}
        >
          You
        </p>
        <div
          style={{
            display: "inline-block",
            position: "absolute",
            top: "345px",
            marginLeft: "20px",
          }}
        >
          <BsClockHistory />
        </div>
        <p
          className="side"
          style={{
            display: "inline-block",
            position: "absolute",
            top: "358px",
            marginLeft: "11px",
          }}
        >
          History
        </p>
      </nav>
    </IconContext.Provider>
  );
}

export default SideBar;
