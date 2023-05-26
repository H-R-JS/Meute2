import React, { useState } from "react";
import { auth } from "../../../../../FirebaseConfig/Config";

export const Connect = ({
  setTextSub,
  submitNotice,
  connectClass,
  noticeList,
}) => {
  const [forbidClass, setForbidClass] = useState("forbid-box none");
  const [writeClass, setWriteClass] = useState("write-box ");

  const test = () => {
    if (auth.currentUser) {
      if (auth.currentUser.displayName === noticeList[1].user) {
        console.log("I DID IT");
        //setForbidClass("forbid-box ");
        // setWriteClass("write-box none");
      } else {
        console.log("FUCK");
      }
    } else {
      return null;
    }
  };

  test();

  //console.log(noticeList[0].user);

  /**CRéer une boucle if i++ de vérification, pour bloquer l'utilisateur ou non */

  return (
    <div className={connectClass}>
      <ForbiddenWrite {...{ forbidClass }} />
      <WriteNotice {...{ setTextSub, submitNotice, writeClass }} />
    </div>
  );
};

const WriteNotice = ({ setTextSub, submitNotice, writeClass }) => {
  return (
    <div
      className={writeClass}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <label htmlFor="notice"> Écrivez votre avis</label>
      <div className="text-write-submit">
        <textarea
          className="notice-input-text"
          name="notice"
          placeholder="Votre avis..."
          onChange={(e) => setTextSub(e.target.value)}
          max-rows="5"
          cols="64"
          rows="6"
        ></textarea>
        <button className="btn-submit" onClick={submitNotice}>
          Poster
        </button>
      </div>
    </div>
  );
};

const ForbiddenWrite = ({ forbidClass }) => {
  return (
    <div className={forbidClass}>
      <p>
        Vous avez déjà poster votre avis, une fois fait vous ne pouvez en poster
        un deuxième.
        <br />
        <span>En vous remerciant d'avoir prit le temps !</span>
      </p>
    </div>
  );
};
