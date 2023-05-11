import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const EmailJS = () => {
  const form = useRef();
  const [succes, setSucces] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xp4usjr",
        "template_hwllotj",
        form.current,
        "O_H65SFpHBG6Wnph8"
      )
      .then(
        (result) => {
          setSucces("L'Email est bien envoyé !");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="act-form">
      <div className="post-succes">{succes}</div>
      <input
        type="email"
        className="champ-email"
        placeholder="Votre email :)"
        name="email_id"
      />
      <button type="submit" className="champ-btn-submit">
        M'avertir
      </button>
    </form>
  );
};

/***/

/** <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */
