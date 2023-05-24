import React from "react";
import {
  MotionMultipleAnimationImg,
  MotionMultipleAnimationText,
  MotionOnePageAnimation,
} from "../../MotionDiv/AllMotionDiv";

export const Prices = () => {
  return (
    <MotionOnePageAnimation>
      <div className="prices-container">
        <MotionMultipleAnimationImg>
          <div className="prices-img" />
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
      </div>
    </MotionOnePageAnimation>
  );
};
