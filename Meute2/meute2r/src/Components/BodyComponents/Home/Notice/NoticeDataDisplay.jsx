import React, { useState, useEffect } from "react";

export const NoticeDataDisplay = ({ getNoticeList, noticeList }) => {
  useEffect(() => {
    getNoticeList();
  }, []);

  return (
    <div className="notice-container">
      {noticeList.map((notice, index) => {
        return (
          <div key={index} className="notice-content">
            <h6>{notice.user}</h6>
            <p>{notice.text}</p>
          </div>
        );
      })}
    </div>
  );
};
