import React from "react";
import { IoStarOutline } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

export const Notice = () => {
  const controlNotice = useAnimation();

  const variNotice = {
    hidden: { y: -40 },
    visible: {
      y: -15,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="notice-link">
      <article className="box-notice-link">
        <Link
          to="notice"
          onMouseEnter={() => controlNotice.start("visible")}
          onMouseLeave={() => controlNotice.start("hidden")}
          className="link-notice"
        >
          <span>AVIS</span>
          <IoStarOutline className="star" />
        </Link>
      </article>

      <motion.p
        variants={variNotice}
        initial="hidden"
        animate={controlNotice}
        className="notice-hover-text"
      >
        Donnez le vôtre !
      </motion.p>
    </section>
  );
};
