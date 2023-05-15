import React from "react";
import { motion } from "framer-motion";
import { MotionOnePageAnimation } from "../MotionDiv/AllMotionDiv";

const aboutImgFoot = require("../../Images/foot.png");

const imgFootArray2 = [
  { src: aboutImgFoot, class: "back-img-foot foot4" },
  { src: aboutImgFoot, class: "back-img-foot foot3" },
  { src: aboutImgFoot, class: "back-img-foot foot2" },
  { src: aboutImgFoot, class: "back-img-foot foot1" },
];

export const About = () => {
  const varianttest2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemo2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <MotionOnePageAnimation>
      <div className="about-container">
        <motion.div variants={varianttest2} initial="hidden" animate="visible">
          {imgFootArray2.map((item, index) => {
            return (
              <motion.div variants={itemo2} key={index}>
                <img src={item.src} className={item.class} />
              </motion.div>
            );
          })}
          <motion.div variants={itemo2}>
            <div className="back-img" />
          </motion.div>
          <motion.div variants={itemo2}>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Bonjour à tous ! Je m'appelle Alexandra et{" "}
                  <span>
                    je suis une grande passionée d'animaux en générale.
                  </span>{" "}
                  J'aime m'en occuper, leur apporter de l’amour et avoir une
                  complicité avec eux, c'est pourquoi faire{" "}
                  <span>mon élevage de rats était pour moi une évidence.</span>
                  <br /> Pourquoi spécialement les rats ? Pour leurs petites
                  tailles ? Pour leurs petits yeux doux ? Pour leur soyeuse
                  petite fourrure ? Je ne serais dire exactement ce qui m'attire
                  chez eux, mais ils ont réussi à prendre mon coeur.
                  <br /> Ce n'est qu'il y a quelques années que j'ai décidé de
                  prendre des rats.{" "}
                  <span>
                    C'est dans un élevage que je pris les rats, que je
                    recommande de priorisé
                  </span>{" "}
                  si vous ne voulez pas de mauvaises surprises (mauvais sevrage,
                  problème de santé, problème de comportement et j’en passe…)
                  <br /> C'est plus tard que je me suis tourner vers l'élévage,{" "}
                  <span>voir une rate mettre bat et toujours aussi beau</span>,
                  ce moment me rend toujours joyeuse et surtout très prudente de
                  leur santé, pourtant, je n'en retire que des bons moments !
                  <br />
                  <br />
                  <span>
                    Mes rats sont élevées dans un bon environnement, entouré
                    d'autres rats il ne manque pas de vivre ni de bien être.
                  </span>{" "}
                  J'espère sincèrement que chacun de mes rats trouveront une
                  famille qui n'apportera que du bien être pour l'animal, je
                  vous donne des conseils si nécessaire ayant fait des
                  recherches et observer leur comportement. si vous avez besoin
                  de me contacter, il suffit de m'envoyer des messages privées
                  sur <span>mon instagram dans la catégorie "Réseaux".</span>
                  <br />
                  <br /> Je vous souhaite de trouver{" "}
                  <span>votre futur petit compagnon !</span>
                </p>
              </div>
              <div className="about-parent">
                <h2 className="about-title">Les Rats reproducteurs</h2>
                <img className="parent one" />
                <img className="parent two" />
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div></div>
      </div>
    </MotionOnePageAnimation>
  );
};
/** */
