import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MotionOnePageAnimation } from "../../../MotionDiv/AllMotionDiv";
import { auth, googleProvider, db } from "../../../../FirebaseConfig/Config";
import { signInWithPopup } from "firebase/auth";
import { Connect } from "./Connect/Connect";
import { NotConnect } from "./Connect/NotConnect";
import { NoticeDataDisplay } from "./NoticeDataDisplay";
import {
  collection,
  getDocs,
  addDoc,
  connectFirestoreEmulator,
} from "firebase/firestore";
import { WriteNotice, ForbiddenWrite } from "./Connect/Connect";

export const NoticePage = () => {
  const [textSub, setTextSub] = useState("sfsf");

  const [connectClass, setConnectClass] = useState(
    "interface-box-connect none"
  );
  const [display, setDisplay] = useState("notice-connect");

  const [noticeList, setNoticeList] = useState([]);
  const noticeCollectRef = collection(db, "avis");

  const getNoticeList = async () => {
    try {
      const data = await getDocs(noticeCollectRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNoticeList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const submitNotice = async () => {
    try {
      await addDoc(noticeCollectRef, {
        text: textSub,
        user: auth.currentUser.displayName,
      });
      getNoticeList();
      console.log("yeeeeees");
    } catch (err) {
      console.error(err);
    }
  };

  const [forbidClass, setForbidClass] = useState("forbid-box none");
  const [writeClass, setWriteClass] = useState();

  const toggleClass = () => {
    setWriteClass("looool");
  };

  const logWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setDisplay("notice-connect none");
      setConnectClass("interface-box-connect");
      toggleClass();
      console.log(writeClass);

      for (let i = 0; i < noticeList.length; i++) {
        if (noticeList[i].user === auth.currentUser.displayName) {
          console.log(writeClass);
        } else {
          console.log(noticeList);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MotionOnePageAnimation>
      <motion.section>
        <div className="notice-box-display">
          <NoticeDataDisplay {...{ getNoticeList, noticeList }} />
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
          <Connect
            {...{
              textSub,
              setTextSub,
              submitNotice,
              connectClass,
              forbidClass,
              writeClass,
              noticeList,
            }}
          />
        </div>
      </motion.section>
    </MotionOnePageAnimation>
  );
};
