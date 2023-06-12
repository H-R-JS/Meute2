import React, { useEffect } from "react";

export const NoticeDataDisplay = ({ getNoticeList, noticeList }) => {
  useEffect(() => {
    getNoticeList();
  }, []);

  return (
    <section className="notice-container">
      {noticeList.map((notice, index) => {
        return (
          <article key={index} className="notice-content">
            <h6>{notice.user}</h6>
            <p>{notice.text}</p>
          </article>
        );
      })}
    </section>
  );
};
