import React from "react";

const backgroundImg1 = require("../../Images/ratPro1");
const backgroundImg2 = require("../../Images/ratPro2");

export const About = () => {
  return (
    <div>
      <div className="about-container">
        <img src={backgroundImg1} />
        <img src={backgroundImg2} />
        <div className="about-content">
          <div className="about-text"></div>
          <div className="about-parent"></div>
        </div>
      </div>
    </div>
  );
};
