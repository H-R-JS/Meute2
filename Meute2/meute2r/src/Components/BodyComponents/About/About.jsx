import React from "react";
import { motion } from "framer-motion";

const aboutImgFoot = require("../../../Images/foot.png");

const imgFootArray2 = [
  { src: aboutImgFoot, class: "back-img-foot foot4" },
  { src: aboutImgFoot, class: "back-img-foot foot3" },
  { src: aboutImgFoot, class: "back-img-foot foot2" },
  { src: aboutImgFoot, class: "back-img-foot foot1" },
];

export const About = () => {
  const onePageAnimation = {
    hidden: {
      display: "none",
      opacity: 0,
    },

    visible: {
      display: "flex",
      opacity: 1,
      transition: { duration: 0.2, delay: 0.4 },
    },

    exit: {
      backcgroundColor: "red",
      transition: { duration: 0.2 },
    },
  };

  const variAbout = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const variAboutChildren1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const variAboutChildren2 = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      x: -100,
      transtion: { duration: 0.2 },
    },
  };

  const variAboutChildren3 = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 1.1 },
    },
    exit: {
      x: 200,
      transtion: { duration: 0.2 },
    },
  };

  return (
    <motion.main
      variants={onePageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="about-container"
    >
      <motion.section
        variants={variAbout}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {imgFootArray2.map((item, index) => {
          return (
            <motion.figure variants={variAboutChildren1} key={index}>
              <img src={item.src} className={item.class} />
            </motion.figure>
          );
        })}
        <motion.figure variants={variAboutChildren1}>
          <img
            src={require("../../../Images/ratAbout1.jpg")}
            className="back-img"
          />
        </motion.figure>
        <motion.div variants={variAboutChildren2}>
          <article className="about-content">
            <section className="about-text">
              <p>
                Bonjour à tous ! Je m'appelle Alexandra et{" "}
                <span>je suis une grande passionée d'animaux en générale.</span>{" "}
                J'aime m'en occuper, leur apporter de l’amour et avoir une
                complicité avec eux, c'est pourquoi{" "}
                <span>
                  faire mon élevage de rats était pour moi une évidence.
                </span>{" "}
                Pourquoi spécialement les rats ? Pour leurs petites tailles ?
                Pour leurs petits yeux doux ? Pour leur soyeuse petite fourrure
                ? Je ne serais dire exactement ce qui m'attire chez eux, mais
                ils ont réussi à prendre mon coeur.
                <br />
                <br /> Ce n'est qu'il y a quelques années que j'ai décidé de
                prendre des rats. C'est plus tard que je me suis tourner vers
                l'élévage.{" "}
                <span>
                  Mes rats sont élevées dans un bon environnement, entouré
                  d'autres rats
                </span>{" "}
                il ne manque pas de vivre ni de bien être, manipuler tous les
                jours et en bonne santé.{" "}
                <span>
                  Je me réserve le droit d’accepter ou non votre demande
                  d’adoption.
                </span>{" "}
                Je vous donne des conseils si nécessaire. <br />
                Si vous avez besoin de me contacter, il suffit de m'envoyer des
                messages privées sur mon instagram ou par mail dans la catégorie
                "Réseaux".
                <br />
                <br /> Je vous souhaite de trouver{" "}
                <span>votre futur petit compagnon !</span>
              </p>
            </section>
            <motion.section
              variants={variAboutChildren3}
              className="about-parent"
            >
              <h2 className="about-h2">Les Rats reproducteurs</h2>
              <img
                src={require("../../../Images/parent1.jpg")}
                alt="Photo de rat"
                className="parent one"
              />
              <img
                src={require("../../../Images/parent2.jpg")}
                alt="Photo de rat"
                className="parent two"
              />
            </motion.section>
          </article>
        </motion.div>
      </motion.section>
    </motion.main>
  );
};
