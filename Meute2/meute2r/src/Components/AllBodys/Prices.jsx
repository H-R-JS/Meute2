import React from "react";

const imgPrices = require("../../Images/ratTar.jpeg");

export const Prices = () => {
  return (
    <div classname="prices-page">
      <div className="prices-container">
        <div className="prices-img-content">
          <img src={imgPrices} className="prices-img" />
        </div>
        <div className="prices-unit-content">
          <div className="unit 1">
            <p>Prix par raton couleur(s) classique(s):</p>
            <span>10 €</span>
          </div>

          <div className="unit 2">
            <p>Prix par raton husky et dumbo:</p>
            <span>13 €</span>
          </div>
        </div>
      </div>
    </div>
  );
};
