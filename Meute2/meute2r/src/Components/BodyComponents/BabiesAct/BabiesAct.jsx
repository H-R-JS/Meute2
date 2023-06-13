import React from "react";
import { EmailJS } from "./EmailJS";
import { motion } from "framer-motion";

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
  const onePageAnimation = {
    hidden: {
      display: "none",
      opacity: 0,
    },

    visible: {
      display: "flex",
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },

    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const variBabiesAct = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: { x: -100, opacity: 0, transition: { duration: 0.2 } },
  };

  const variPortActu = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const variPortActuChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.main
      variants={onePageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="babiesAc-page"
    >
      <motion.figure variants={variBabiesAct}>
        <img src={imgBabiesAc} className="babiesAc-img" alt="" />
      </motion.figure>
      <motion.section variants={variPortActu} className="babiesAc-container">
        <motion.p
          variants={variPortActuChildren}
          className="babiesAc-port-actu"
        >
          Portée actuelle: <span> 18/04/2023</span>
        </motion.p>
        <motion.figure variants={variPortActuChildren} className="act-babies">
          <img
            src={require("../../../Images/actuImg.jpg")}
            className="actu-box"
          />
        </motion.figure>
        <motion.article variants={variPortActuChildren} className="act-sign">
          <p>
            Si vous souhaitez être informé de la prochaine portée,
            <span> écrivez votre adresse email dans le champ ci-dessous</span>
            , un email vous sera envoyé lors de la prochaine portée.
            <br /> Une fois envoyé cela peut prendre
            <span> quelques secondes </span> avant de se valider
          </p>
          <EmailJS />
        </motion.article>
      </motion.section>
    </motion.main>
  );
};
