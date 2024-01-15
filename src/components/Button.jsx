import React, { useState } from "react";

export default function Button(props) {
  const [isHovered, setHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered
      ? props.hoverColor || "#E89B93"
      : props.color || "#DFB2A9",
    border: "none",
    color: "white",
    fontSize: "20px",
    padding: "2vh",
    borderRadius: "1.5rem",
    textAlign: "center",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
    "box-shadow": isHovered? " 0 0 10px rgba(0, 0, 0, 0.3)": "0 0 0 0"
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.buttonText}
    </button>
  );
}
