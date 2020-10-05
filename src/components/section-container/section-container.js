import React from "react";
import "./section-container.css";

const SectionContainer = props => {
  return (
    <div className={`section-container ${props.show ? "show" : ""}`}>
      {props.children}
    </div>
  );
};

export default SectionContainer;
