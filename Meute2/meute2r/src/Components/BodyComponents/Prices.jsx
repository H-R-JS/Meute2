import React from "react";
import {
  MotionMultipleAnimationImg,
  MotionMultipleAnimationText,
  MotionOnePageAnimation,
} from "../MotionDiv/AllMotionDiv";

const imgPrices = require("../../Images/ratTar.jpeg");

export const Prices = () => {
  return (
    <section className="prices-page">
      <MotionOnePageAnimation>
        <MotionMultipleAnimationImg>
          <img src={imgPrices} className="prices-img" alt="" />
        </MotionMultipleAnimationImg>
        <div className="unit-container">
          <MotionMultipleAnimationText>
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
    </section>
  );
};
