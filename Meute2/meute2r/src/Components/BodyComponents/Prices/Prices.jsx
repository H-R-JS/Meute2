import React from "react";
import {
  MotionMultipleAnimationImg,
  MotionMultipleAnimationText,
  MotionOnePageAnimation,
} from "../../MotionDiv/AllMotionDiv";

export const Prices = () => {
  return (
    <MotionOnePageAnimation>
      <main className="prices-container">
        <MotionMultipleAnimationImg>
          <figure>
            <img
              src={require("../../../Images/ratTar.jpeg")}
              className="prices-img"
            />
          </figure>
        </MotionMultipleAnimationImg>
        <setion className="unit-container">
          <MotionMultipleAnimationText>
            <article className="unit">
              <p>Prix par raton couleur(s) classique(s):</p>
              <span>10 €</span>
            </article>

            <article className="unit">
              <p>Prix par raton husky et dumbo:</p>
              <span>13 €</span>
            </article>
          </MotionMultipleAnimationText>
        </setion>
      </main>
    </MotionOnePageAnimation>
  );
};
