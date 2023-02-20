import React from "react";

const imgBabiesAc = require("../../Images/ratPort.jpg");

const NoActu = () => {
  return (
    <div className="noActu-box">
      <p>
        Pour le moment aucune portée actuelle,
        <span> cela ne devrait pas tardée, rassurez-vous !</span>
      </p>
    </div>
  );
};

export const BabiesAct = () => {
  return (
    <div>
      <div className="babiesAc-container">
        <img src={imgBabiesAc} className="babiesAc-img" />
        <div className="babiesAc-content">
          <p>
            Portée actuelle: <span> 16/11/2023</span>
          </p>
          <div className="act-babies">
            <NoActu />
          </div>
        </div>
      </div>
    </div>
  );
};
