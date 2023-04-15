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
      <div className="old-container">
        <div className="old-content">
          {oldArray.map((item, index) => {
            return (
              <div
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
                <div className="old-text">
                  {item.title}
                  <span>{item.date}</span>
                </div>
                <motion.div
                  className="info-box"
                  variants={variantOld}
                  animate={control}
                >
                  {item.infoBox}
                </motion.div>
                <div
                  className="old-img"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </MotionOnePageAnimation>
  );
};
