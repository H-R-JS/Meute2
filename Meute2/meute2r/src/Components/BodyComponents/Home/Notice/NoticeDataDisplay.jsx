import React, { useState, useEffect } from "react";
import { db } from "../../../../FirebaseConfig/Config";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const NoticeDataDisplay = () => {
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

  useEffect(() => {
    getNoticeList();
    console.log(noticeList);
  }, []);

  return (
    <div>
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
