import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>thandolwenkosidube21@gmail.com</span>
        <span>thadube021@student.wethinkcode.co.za</span>
        <span>https://github.com/Thandolwenkosi21</span>  
      </div>
    </div>
  );
};

export default Footer;
