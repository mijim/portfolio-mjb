import React, { useState } from "react";
import "./contact.css";
import axios from "axios";
import Loader from "../../components/loader/loader";
import { getCopy } from "../../languages/languages";

const Contact = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    body: ""
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(!!localStorage.getItem("contact-sent"));

  const handleChange = (field, value) => {
    const newFields = { ...fields };
    newFields[field] = value;
    setFields(newFields);
  };

  const handleSend = async () => {
    const { name, email, subject, body } = fields;
    if (email !== "" && name !== "" && subject !== "" && body !== "") {
      setLoading(true);
      try {
        await axios.get(
          `https://us-central1-mjb-portfolio.cloudfunctions.net/sendMail?name=${name}&email=${email}&subject=${subject}&body=${body}`
        );
      } catch (err) {
      } finally {
        localStorage.setItem("contact-sent", "true");
        setLoading(false);
        setSent(true);
      }
    }
  };

  return (
    <>
      <Loader loaded={!loading} fastTransition={true} />
      <div className={`contact-container`}>
        {sent ? (
          <>
            <div className="contact-success">{getCopy("contactMsg0")}</div>
            <div className="contact-success-sub">
              {getCopy("contactMsg1")}{" "}
              <span role="img" aria-label="emoji">
                💥👨🏼‍💻
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="contact-title">{getCopy("contactTitle")}</div>
            <div
              className={`contact-input ${fields.name === "" ? "" : "filled"}`}
            >
              <input
                placeholder={getCopy("contactName")}
                onChange={ev => {
                  handleChange("name", ev.target.value);
                }}
              />
            </div>
            <div
              className={`contact-input ${fields.email === "" ? "" : "filled"}`}
            >
              <input
                placeholder="Email..."
                onChange={ev => {
                  handleChange("email", ev.target.value);
                }}
              />
            </div>
            <div
              className={`contact-input ${
                fields.subject === "" ? "" : "filled"
              }`}
            >
              <input
                placeholder={getCopy("contactSubject")}
                onChange={ev => {
                  handleChange("subject", ev.target.value);
                }}
              />
            </div>
            <div
              className={`contact-input ${fields.body === "" ? "" : "filled"}`}
            >
              <textarea
                placeholder={getCopy("contactText")}
                onChange={ev => {
                  handleChange("body", ev.target.value);
                }}
              />
            </div>
            <div
              className={`contact-button ${
                fields.name === "" ||
                fields.email === "" ||
                fields.subject === "" ||
                fields.body === ""
                  ? "disabled"
                  : ""
              }`}
              onClick={() => handleSend()}
            >
              {getCopy("contactButton")}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Contact;
