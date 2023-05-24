import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MotionOnePageAnimation } from "../../../MotionDiv/AllMotionDiv";

export const NoticePage = () => {
  const [textSub, setTextSub] = useState("");

  return (
    <MotionOnePageAnimation>
      <motion.section>
        <div className="notice-descript-box">
          <p className="p1">
            Connectez-vous à votre compte google et dites ce que vous pensez de
            mon élevage, si vous en avez envie ! <br />
            <br />
            Les avis constructifs me font plaisir, et aide à l’amélioration,
            alors n’hésitez pas !
          </p>
          <p className="p2">
            Attention : Si l’avis est considéré comme insultant, hors sujet, ou
            haineux ( dénonciateur d’autres élévages, ou autres ... ), il sera
            supprimé dans les minutes ou l’heure qui suit, avec privation d’en
            écrire un nouveau.
          </p>
        </div>
        <div className="interface">
          <label forHtml="notice"> Écrivez votre avis</label>
          <textarea
            className="notice-input-text"
            name="notice"
            placeholder="Votre avis..."
            onChange={(e) => setTextSub(e.target.value)}
            max-rows="5"
            cols="64"
            rows="6"
          ></textarea>
        </div>
      </motion.section>
    </MotionOnePageAnimation>
  );
};
