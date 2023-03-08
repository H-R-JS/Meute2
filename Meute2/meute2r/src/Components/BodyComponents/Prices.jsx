import React from "react";
import {
  MotionMultipleAnimationImg,
  MotionMultipleAnimationText,
  MotionOnePageAnimation,
} from "../MotionDiv/AllMotionDiv";

const imgPrices = require("../../Images/ratTar.jpeg");

export const Prices = () => {
  return (
    <MotionOnePageAnimation className="prices-page">
      <div className="prices-container">
        <MotionMultipleAnimationImg className="prices-img-content">
          <img src={imgPrices} className="prices-img" alt="" />
        </MotionMultipleAnimationImg>
        <MotionMultipleAnimationText className="prices-unit-content">
          <div className="unit">
            <p>Prix par raton couleur(s) classique(s):</p>
            <span>10 €</span>
          </div>

          <div className="unit">
            <p>Prix par raton husky et dumbo:</p>
            <span>13 €</span>
          </div>
        </MotionMultipleAnimationText>
      </div>
    </MotionOnePageAnimation>
  );
};
