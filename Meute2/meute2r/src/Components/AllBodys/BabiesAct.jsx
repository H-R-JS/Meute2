import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, display: "none" }}
      animate={{
        opacity: 1,
        display: "block",
        transition: { duration: 0.2, delay: 0.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="babiesAc-container">
        <img src={imgBabiesAc} className="babiesAc-img" />
        <div className="babiesAc-content">
          <p>
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
              />
              <button type="submit" className="champ-btn-submit">
                M'avertir
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
