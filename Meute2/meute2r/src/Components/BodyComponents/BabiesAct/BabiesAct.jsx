import React, { useState } from "react";
import {
  MotionMultipleAnimationImg,
  MotionMultipleAnimationText,
  MotionOnePageAnimation,
} from "../../MotionDiv/AllMotionDiv";
import Axios, * as others from "axios";
import emailjs from "@emailjs/browser";
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

/**const [succes, setSucces] = useState("");
  const [email, setEmail] = useState("");

  const validation =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const addEmail = (e) => {
    e.preventDefault();
    if (validation.test(email)) {
      Axios.post("http://localhost:7000/api/m2r", {
        email: email,
      }).then(() => {
        console.log("succes");
        setSucces("L'Email est bien envoyé !");
      });
    } else {
      setSucces("L'Email n'est pas valide .");
    }
  }; 
  
  
   <form className="act-form">
              <div className="post-succes">{succes}</div>
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
            </form>*/