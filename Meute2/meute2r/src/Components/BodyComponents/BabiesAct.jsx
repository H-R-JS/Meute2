import React, { useState } from "react";
import {
  MotionMultipleAnimationImg,
  MotionMultipleAnimationText,
  MotionOnePageAnimation,
} from "../MotionDiv/AllMotionDiv";
import Axios, * as others from "axios";

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
  // add email in sql db
  const [email, setEmail] = useState("");
  const addEmail = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:7000/api/m2r", {
      email: email,
    }).then(() => {
      console.log("succes");
    });
  };

  return (
    <MotionOnePageAnimation className="babiesAc-page">
      <div className="babiesAc-container">
        <MotionMultipleAnimationImg>
          <img src={imgBabiesAc} className="babiesAc-img" alt="" />
        </MotionMultipleAnimationImg>
        <MotionMultipleAnimationText className="babiesAc-content">
          <p className="babiesAc-port-actu">
            Portée actuelle: <span> 16/11/2023</span>
          </p>
          <div className="act-babies">
            <NoActu />
          </div>
          <div className="act-sign">
            <p>
              Si vous souhaitez être informé de la prochaine portée,
              <span> écrivez votre adresse email dans le champ ci-dessous</span>
              , un email vous sera envoyé lors de la prochaine portée.
            </p>
            <form className="act-form">
              <input
                type="email"
                className="champ-email"
                placeholder="Votre email :)"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button
                type="submit"
                className="champ-btn-submit"
                onClick={addEmail}
              >
                M'avertir
              </button>
            </form>
          </div>
        </MotionMultipleAnimationText>
      </div>
    </MotionOnePageAnimation>
  );
};
