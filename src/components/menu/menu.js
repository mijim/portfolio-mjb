import React from "react";
import "./menu.css";

const Menu = props => {
  const { hoveredSection, onClickSection } = props;
  return (
    <div className="menu-container">
      <div
        className={`menu-section ${
          hoveredSection === "projects" ? "hovered" : ""
        }`}
        onClick={() => onClickSection("projects")}
      >
        Proyectos
      </div>
      <div
        className={`menu-section ${
          hoveredSection === "about" ? "hovered" : ""
        }`}
        onClick={() => onClickSection("about")}
      >
        Sobre mí
      </div>
      <div
        className={`menu-section ${
          hoveredSection === "contact" ? "hovered" : ""
        }`}
        onClick={() => onClickSection("contact")}
      >
        Contacto
      </div>
      <div
        className={`menu-section ${
          hoveredSection === "links" ? "hovered" : ""
        }`}
        onClick={() => onClickSection("links")}
      >
        Enlaces
      </div>
    </div>
  );
};

export default Menu;
