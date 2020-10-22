import React from "react";
import "./about.css";
import { getCopy } from "../../languages/languages";

const About = props => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={"/images/profile.jpg"} alt="me" />
        <div className="about-links">
          <a
            href="https://www.linkedin.com/in/miguel-jimenez-benajes-2a2a9752"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={"/images/linkedin.svg"} alt="linked-in-link" />
          </a>
          <a
            href="https://github.com/mijim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={"/images/github.svg"} alt="github-in-link" />
          </a>
          <a
            href="https://dev.to/mijim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={"/images/dev-to.svg"} alt="dev-to-in-link" />
          </a>
        </div>
      </div>
      <div className="about-text">
        <div className="about-title">{`Software Engineer \n& Front-End DEV`}</div>
        <div className="colored-b">{getCopy("about0")}</div> {getCopy("about1")}
        <br />
        <br />
        {getCopy("about2")} <div className="colored-b">{getCopy("about3")}</div>{" "}
        {getCopy("about4")} <div className="colored-b">{getCopy("about5")}</div>
        <br />
        <br />
        {getCopy("about6")} <div className="colored-b">{getCopy("about7")}</div>{" "}
        {getCopy("about8")}
      </div>
    </div>
  );
};

export default About;
