import React, { useState } from "react";
import {
  MotionMultipleAnimationImg,
  MotionMultipleAnimationText,
  MotionOnePageAnimation,
} from "../../MotionDiv/AllMotionDiv";
import Axios, * as others from "axios";
import { EmailJS } from "./EmailJS";

const imgBabiesAc = require("../../../Images/ratPort.jpg");

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
    <MotionOnePageAnimation>
      <div className="babiesAc-container">
        <MotionMultipleAnimationImg>
          <img src={imgBabiesAc} className="babiesAc-img" alt="" />
        </MotionMultipleAnimationImg>
        <MotionMultipleAnimationText>
          <p className="babiesAc-port-actu">
            Portée actuelle: <span> 18/04/2023</span>
          </p>
          <div className="act-babies">
            <div className="actu-box" />
          </div>
          <div className="act-sign">
            <p>
              Si vous souhaitez être informé de la prochaine portée,
              <span> écrivez votre adresse email dans le champ ci-dessous</span>
              , un email vous sera envoyé lors de la prochaine portée.
              <br /> Une fois envoyé cela peut prendre
              <span> quelques secondes </span> avant de se valider
            </p>
            <EmailJS />
          </div>
        </MotionMultipleAnimationText>
      </div>
    </MotionOnePageAnimation>
  );
};
