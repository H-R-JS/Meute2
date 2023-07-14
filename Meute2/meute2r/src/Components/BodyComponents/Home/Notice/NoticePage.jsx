import React, { useState } from "react";
import { motion } from "framer-motion";
import { auth, googleProvider, db } from "../../../../FirebaseConfig/Config";
import { signInWithPopup } from "firebase/auth";
import { Connect } from "./Connect/Connect";
import { NotConnect } from "./Connect/NotConnect";
import { NoticeDataDisplay } from "./NoticeDataDisplay";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const NoticePage = () => {
  const [textSub, setTextSub] = useState("");

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
        user: auth.currentUser.displayName,
        text: textSub,
      });
      getNoticeList();
    } catch (err) {
      console.error(err);
    }
  };

  const [forbidClass, setForbidClass] = useState("forbid-box none");
  const [writeClass, setWriteClass] = useState("write-box");

  const logWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setDisplay("notice-connect none");
      setConnectClass("interface-box-connect");
      const dataUserValide = [];
      for (let i = 0; i < noticeList.length; i++) {
        dataUserValide.push(noticeList[i].user);
      }
      if (dataUserValide.includes(auth.currentUser.displayName)) {
        setWriteClass("write-box none");
        setForbidClass("forbid-box");
      } else {
        return null;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const variNotice = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "inline-block",
      transition: {
        duration: 0.3,
        staggerChildren: 0.3,
        delay: 0.3,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } },
  };

  const variNoticeChildrenY = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
        when: "beforeChildren",
        ease: "easeIn",
      },
    },
    exit: { scaleY: 0, transition: { duration: 0.3 } },
  };

  const variNoticeChildrenX = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.6, when: "beforeChildren", ease: "easeOut" },
    },
    exit: { scaleX: 0, transition: { duration: 0.3 } },
  };

  const variNoticeText = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };

  return (
    <motion.main
      variants={variNotice}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="notice-page"
    >
      <NoticeDataDisplay {...{ getNoticeList, noticeList }} />
      <motion.aside
        variants={variNoticeChildrenY}
        className="notice-descript-box"
      >
        <motion.p variants={variNoticeText} className="p1">
          Connectez-vous à votre compte google et dites ce que vous pensez de
          mon élevage, si vous en avez envie ! <br />
          <br />
          Les avis constructifs me font plaisir, et aide à l’amélioration, alors
          n’hésitez pas !
        </motion.p>
        <motion.p variants={variNoticeText} className="p2">
          Attention : Si l’avis est considéré comme insultant, hors sujet, ou
          haineux ( dénonciateur d’autres élévages, ou autres ... ), il sera
          supprimé dans les minutes ou l’heure qui suit, avec privation d’en
          écrire un nouveau.
        </motion.p>
      </motion.aside>
      <motion.section variants={variNoticeChildrenX} className="interface">
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
      </motion.section>
    </motion.main>
  );
};
