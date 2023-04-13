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
                  Bonjour à tous !<br /> <br /> Je m'appelle Alexandra et je
                  suis <span>une grande passionée d'animaux en générale.</span>{" "}
                  J'aime m'en occuper, leur apporter un peu d'amour et avoir une
                  complicité avec eux , c'est pourquoi j'ai eu l'idée de vouloir
                  travailler dans le domaine.{" "}
                  <span>
                    Pourquoi spécialement les rats ? Pour leurs petites tailles
                    ? Pour leurs petits yeux doux ? Pour leur soyeuse petite
                    fourrure ? Je ne serais dire exactement ce qui m'attire chez
                    eux, mais ils ont réussi à prendre mon coeur.
                  </span>{" "}
                  Ce n'est qu'il y a quelques années que j'ai décidé de prendre
                  des rats, les nourrires, les voir vivre et cohabiter entre
                  eux, tous en échangeant des caresses et des petits regards
                  doux.{" "}
                  <span>
                    Très vite, j'ai décidé de me renseigner sur le rat, c'est là
                    que j'ai appris qu'ils étaient grégaires donc une adoption
                    de rat peut aboutir à plusieurs adoptions, il est important
                    de le notifier.
                  </span>{" "}
                  C'est dans un élevage que je pris les rats,{" "}
                  <span>
                    que je recommande de priorisé si vous ne voulez pas de
                    mauvaises surprises.
                  </span>{" "}
                  C'est plus tard que je me suis tourner vers l'élévage, voir
                  une rate mettre bat et toujours aussi beau, ce moment me rend
                  toujours joyeuse et surtout très prudente de leur santé, même
                  si la mère gère très bien, les erreurs arrive, un petit
                  oublier par ci, un autre gesticulant par là, ils sont si
                  minuscule que le compte est parfois compliqué à avoir.{" "}
                  <span>Pourtant, je n'en retire que des bons moments !</span>{" "}
                  <br />
                  <br />
                  Mes rats sont élevées dans un bon environnement, entouré
                  d'autres rats il ne manque pas de vivre ni de bien être.{" "}
                  <span>
                    J'espère sincèrement que chacun de mes rats trouveront une
                    famille qui n'apportera que du bien être pour l'animal
                  </span>
                  , je vous peut vous donner des conseils si nécessaire ayant
                  fait des recherches et observer leur comportement.{" "}
                  <span>
                    {" "}
                    si vous avez besoin de me contacter, il suffit de m'envoyer
                    des messages privées sur mon instagram dans la catégorie
                    "Réseaux".
                  </span>{" "}
                  <br />
                  <br />
                  Je vous souhaite de trouver votre futur petit compagnon !
                </p>
              </div>
              <div className="about-parent">
                <h2 className="about-title">Les Rats reproducteurs</h2>
                <img className="parent 1" />
                <img className="parent 2" />
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
