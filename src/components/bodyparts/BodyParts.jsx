import { CgGym } from "react-icons/cg";
import "./bodyparts.css";
import { useState, useEffect } from "react";

const BodyParts = ({ item, setBodyPart, bodyPart }) => {
  const handleClick = () => {
    // window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    setBodyPart(item);
  };
  return (
    <button
      className={`bodyPart-card ${
        bodyPart === item ? "selected" : "notselected"
      }`}
      onClick={handleClick}
    >
      <CgGym alt="dumbbell" className="bodyPart-icon" />
      <span className="bodyPart-text">{item}</span>
    </button>
  );
};

export default BodyParts;
