import React from "react";
import "./about.css";

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
        <div className="colored-b">
          Ingeniero Informático con especialidad en el desarrollo de software.
        </div>{" "}
        Me cautivó la programación desde el principio y he decantado toda mi
        vida profesional en esta dirección.
        <br />
        <br />
        Pasando por trabajo de investigación en la universidad hasta un par de
        compañías de software de Madrid, he tenido tenido la oportunidad de
        trabajar en proyectos con grandes empresas como{" "}
        <div className="colored-b">Asisa, Samsung o HBO</div> entre otras,
        adquiriendo así amplios conocimientos en el área de{" "}
        <div className="colored-b">
          Front-End y desarrollo de aplicaciones tanto Web como Móvil.
        </div>
        <br />
        <br />
        Con un gran interés en generar experiencias inmersivas en 3D, mis
        últimos esfuerzos se han volcado en aprender a crear{" "}
        <div className="colored-b">entornos virtuales con WebGL</div> que
        aporten un gran valor al UX.
      </div>
    </div>
  );
};

export default About;
