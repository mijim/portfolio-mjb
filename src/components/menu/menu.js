import React from "react";
import "./menu.css";
import { getCopy } from "../../languages/languages";

const Menu = props => {
  const { hoveredSection, onClickSection, currentSection } = props;

  return (
    <>
      <div
        className={`menu-container ${currentSection === "" ? "home" : ""} ${
          currentSection !== "" &&
          window.innerWidth > 1000 &&
          window.innerWidth < 1260 &&
          props.sectionScrollY > 200
            ? "collapse"
            : ""
        }`}
      >
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
          {getCopy("menu0")}
        </div>
        <div
          className={`menu-section ${
            hoveredSection === "contact" ? "hovered" : ""
          }
        ${currentSection === "contact" ? "clicked" : ""}`}
          onClick={() => onClickSection("contact")}
        >
          {getCopy("menu1")}
        </div>
        <div
          className={`menu-section ${
            hoveredSection === "about" ? "hovered" : ""
          }
        ${currentSection === "about" ? "clicked" : ""}`}
          onClick={() => onClickSection("about")}
        >
          {getCopy("menu2")}
        </div>
      </div>
    </>
  );
};

export default Menu;
