import React, { useContext } from "react";
import "./Intro.css";
import Thando from "../../img/60-ThandolwenkosiDube.jpg";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Intro = () => {
  

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Thandolwenkosi Dube</span>
          <span>
          Aspiring Software Engineer eager to contribute to team success through hard work.I am a hard worker ,dedicated to improving my skills through development work.
          I am passionate about teamwork and technology.

          </span>
        </div>
        <Link to="Why SovTech" smooth={true} spy={true}>
        </Link>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Thando} class= "Thando" alt="" />

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
