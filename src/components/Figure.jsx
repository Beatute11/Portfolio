import React from "react";

function Figure ({ rotation = 0, top, left, right, bottom, position = "absolute" }) {
  const figureStyle = {
    position: position,
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    width: "56px",
    height: "56px",
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <div className="svg-figure" style={figureStyle}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        viewBox="0 0 56 59" 
        fill="none"
      >
        <line y1="1.5" x2="56" y2="1.5" stroke="black" stroke-width="3"/>
        <line x1="1.5" y1="3" x2="1.5" y2="59" stroke="black" stroke-width="3"/>
      </svg>
    </div>
  );
}

export default Figure;