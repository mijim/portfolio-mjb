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
        Ingeniero Informático con especialidad en el desarrollo de software. Me
        he dedicado al desarrollo desde que descubrí el mundo de la programación
        y he decantado toda mi vida profesional en esta dirección. Pasando por
        trabajo de investigación en la universidad hasta un par de compañías de
        software de Madrid, adquiriendo así amplios conocimientos en el área de
        Front-End y desarrollo de aplicaciones tanto Web como Móvil. Con un gran
        interés en generar experiencias inmersivas en 3D, mis últimos esfuerzos
        se han volcado en aprender a crear entornos virtuales con WebGL que
        aporten un gran valor al UX.
      </div>
    </div>
  );
};

export default About;
