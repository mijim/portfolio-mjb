import React, { useEffect, useRef } from "react";
import "./section-container.css";
import debounce from "../../utils/debounce";

const SectionContainer = props => {
  const containerRef = useRef();

  useEffect(
    () => {
      if (containerRef.current) {
        const handleScroll = ev => props.setScrollY(ev.target.scrollTop);
        containerRef.current.addEventListener("scroll", debounce(handleScroll));
        return () =>
          window.removeEventListener("scroll", debounce(handleScroll));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debounce]
  );

  return (
    <div
      ref={containerRef}
      className={`section-container ${props.show ? "show" : ""}`}
    >
      {props.children}
    </div>
  );
};

export default SectionContainer;
