import React, { useEffect } from "react";
import { motion } from "framer-motion";

export const NoticeDataDisplay = ({ getNoticeList, noticeList }) => {
  useEffect(() => {
    if (noticeList.length === 0) {
      getNoticeList();
    }
  }, [noticeList]);

  const variNoticeDisplayText = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, delay: 1 } },
  };

  return (
    <motion.section
      variants={variNoticeDisplayText}
      className="notice-container"
    >
      {noticeList.map((notice, index) => {
        return (
          <article key={index} className="notice-content">
            <h6>{notice.user}</h6>
            <p>{notice.text}</p>
          </article>
        );
      })}
    </motion.section>
  );
};
