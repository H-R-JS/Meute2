import React from "react";

const imgAcc = require("../Images/ratAcc.jpeg");
const imgFoot = require("../Images/pattes.jpeg");

export const Body = () => {
  return (
    <div className="body-page">
      <div className="body-container">
        <div className="img-content">
          <img src={imgAcc} className="image-acc" />
          <img src={imgFoot} className="image-foot imf1" />
          <img src={imgFoot} className="image-foot imf2" />
          <img src={imgFoot} className="image-foot imf3" />
          <img src={imgFoot} className="image-foot imf4" />
        </div>
        <div className="main-content">
          <p>
            Bienvenue dans <span>ma meute de rat</span>, éléveuse de ceux-ci, je
            vous propose de <span>réserver les rats qui vous plaisent !</span>
          </p>
        </div>
      </div>
    </div>
  );
};
