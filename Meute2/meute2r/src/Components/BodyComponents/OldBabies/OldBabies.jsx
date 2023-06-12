import React, { useEffect } from "react";
import { MotionOnePageAnimation } from "../../MotionDiv/AllMotionDiv";
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
  return (
    <MotionOnePageAnimation>
      <main className="old-container">
        <ul className="old-content">
          {oldArray.map((item, index) => {
            return (
              <li
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
              </li>
            );
          })}
        </ul>
      </main>
    </MotionOnePageAnimation>
  );
};
