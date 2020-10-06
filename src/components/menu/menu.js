import React from "react";
import "./menu.css";

const Menu = props => {
  const { hoveredSection, onClickSection, currentSection } = props;
  return (
    <>
      <div className={`menu-container ${currentSection === "" ? "home" : ""}`}>
        {currentSection === "" && (
          <div className="mjb-title">Miguel Jiménez Benajes</div>
        )}

        <div
          className={`menu-section ${
            hoveredSection === "projects" ? "hovered" : ""
          }
        ${currentSection === "projects" ? "clicked" : ""}
        `}
          onClick={() => onClickSection("projects")}
        >
          Proyectos
        </div>
        <div
          className={`menu-section ${
            hoveredSection === "contact" ? "hovered" : ""
          }
        ${currentSection === "contact" ? "clicked" : ""}`}
          onClick={() => onClickSection("contact")}
        >
          Contacto
        </div>
        <div
          className={`menu-section ${
            hoveredSection === "about" ? "hovered" : ""
          }
        ${currentSection === "about" ? "clicked" : ""}`}
          onClick={() => onClickSection("about")}
        >
          Sobre mí
        </div>
      </div>
    </>
  );
};

export default Menu;
