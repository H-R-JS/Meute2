import React from "react";
import {
  MotionMultipleAnimationImg,
  MotionMultipleAnimationText,
  MotionOnePageAnimation,
} from "../../MotionDiv/AllMotionDiv";
import { EmailJS } from "./EmailJS";

const imgBabiesAc = require("../../../Images/ratPort.jpg");

const NoActu = () => {
  return (
    <section className="noActu-box">
      <p>
        Pour le moment aucune portée actuelle,
        <span> cela ne devrait pas tardée, rassurez-vous !</span>
      </p>
    </section>
  );
};

export const BabiesAct = () => {
  return (
    <MotionOnePageAnimation>
      <main className="babiesAc-container">
        <MotionMultipleAnimationImg>
          <figure>
            <img src={imgBabiesAc} className="babiesAc-img" alt="" />
          </figure>
        </MotionMultipleAnimationImg>
        <MotionMultipleAnimationText>
          <section>
            <p className="babiesAc-port-actu">
              Portée actuelle: <span> 18/04/2023</span>
            </p>
            <figure className="act-babies">
              <img
                src={require("../../../Images/actuImg.jpg")}
                className="actu-box"
              />
            </figure>
            <article className="act-sign">
              <p>
                Si vous souhaitez être informé de la prochaine portée,
                <span>
                  {" "}
                  écrivez votre adresse email dans le champ ci-dessous
                </span>
                , un email vous sera envoyé lors de la prochaine portée.
                <br /> Une fois envoyé cela peut prendre
                <span> quelques secondes </span> avant de se valider
              </p>
              <EmailJS />
            </article>
          </section>
        </MotionMultipleAnimationText>
      </main>
    </MotionOnePageAnimation>
  );
};
