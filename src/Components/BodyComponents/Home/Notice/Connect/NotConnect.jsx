import React from "react";
import { motion } from "framer-motion";

export const NotConnect = ({ logWithGoogle, display }) => {
  const variNoticeText = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };
  return (
    <motion.article variants={variNoticeText} className={display}>
      <button onClick={logWithGoogle} className="btn-connect">
        Se connecter
      </button>
    </motion.article>
  );
};
