import React from "react";
import "./contact.css";
import BackArrow from "../../assets/images/back-arrow.svg";

const Contact = () => {
  return (
    <div className={`contact-container`}>
      <div className="contact-title">{"¿Hablamos?"}</div>
      <div className="contact-input">
        <input placeholder="Nombre..." />
      </div>
      <div className="contact-input">
        <input placeholder="Email..." />
      </div>
      <div className="contact-input">
        <input placeholder="Asunto..." />
      </div>
      <div className="contact-input">
        <textarea placeholder="Cuentame tu idea..." />
      </div>
      <div className="contact-button">Enviar</div>
    </div>
  );
};

export default Contact;
