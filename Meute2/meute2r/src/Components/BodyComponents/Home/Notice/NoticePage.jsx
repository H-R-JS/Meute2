import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MotionOnePageAnimation } from "../../../MotionDiv/AllMotionDiv";
import { auth, googleProvider } from "../../../../FirebaseConfig/Config";
import { signInWithPopup } from "firebase/auth";
import { Connect } from "./Connect/Connect";
import { NotConnect } from "./Connect/NotConnect";
import { NoticeDataDisplay } from "./NoticeDataDisplay";

export const NoticePage = () => {
  const [textSub, setTextSub] = useState("");

  const [connectComponent, setConnectComponent] = useState(null);
  const [display, setDisplay] = useState("notice-connect");

  const logWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log(auth.currentUser.photoURL);
      setConnectComponent(<Connect />);
      setDisplay("notice-connect none");
    } catch (err) {
      console.error(err);
    }
  };

  /*const ConnectOrNot = () => {
    if (!auth.currentUser) {
      return <NotConnect logWithGoogle={logWithGoogle} />;
    } else {
      return <Connect setTetxSub={setTextSub} />;
    }
  };*/

  return (
    <MotionOnePageAnimation>
      <motion.section>
        <div className="notice-box-display">
          <NoticeDataDisplay />
        </div>

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
          <NotConnect {...{ logWithGoogle, display }} />
          {connectComponent}
        </div>
      </motion.section>
    </MotionOnePageAnimation>
  );
};
