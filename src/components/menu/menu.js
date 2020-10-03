import React from "react";
import "./menu.css";

const Menu = props => {
  const { hoveredSection } = props;
  return (
    <div className="menu-container">
      <div
        className={`menu-section ${
          hoveredSection === "projects" ? "hovered" : ""
        }`}
      >
        Proyectos
      </div>
      <div
        className={`menu-section ${
          hoveredSection === "about" ? "hovered" : ""
        }`}
      >
        Sobre mí
      </div>
      <div
        className={`menu-section ${
          hoveredSection === "contact" ? "hovered" : ""
        }`}
      >
        Contacto
      </div>
      <div
        className={`menu-section ${
          hoveredSection === "links" ? "hovered" : ""
        }`}
      >
        Enlaces
      </div>
    </div>
  );
};

export default Menu;
