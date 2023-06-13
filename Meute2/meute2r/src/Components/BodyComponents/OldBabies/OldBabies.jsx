import React, { useEffect } from "react";
import { oldArray } from "./ArrayOldBabies";
import { motion, useAnimation } from "framer-motion";

export const OldBabies = () => {
  const control = useAnimation();

  const variantOld = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  useEffect(() => {
    control.start("hidden");
  }, [control]);

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
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const variOld = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 0.4,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },

    exit: {
      x: -100,
      transition: { duration: 0.2 },
    },
  };

  const variOldChildren = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.main
      variants={onePageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="old-container"
    >
      <motion.ul variants={variOld} className="old-content">
        {oldArray.map((item, index) => {
          return (
            <motion.li
              variants={variOldChildren}
              key={index}
              className="li-old"
              onMouseEnter={() => {
                console.log("YEEEES");
                control.start("show");
              }}
              onMouseLeave={() => {
                control.start("hidden");
              }}
            >
              <header className="old-text">
                {item.title}
                <span>{item.date}</span>
              </header>
              <motion.section
                className="info-box"
                variants={variantOld}
                animate={control}
              >
                {item.infoBox}
              </motion.section>
              <img className="old-img" src={item.img} />
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.main>
  );
};
