import React from "react";
import '../styles/Component.css';

function File({ label, color, isOpen, onClick, children, offset }) {
  return (
    <div 
      className={`file-container ${isOpen ? "is-open" : ""}`}
      style={{ 
        left: offset,
        '--file-color': color 
      }}
    >
      <div 
        className="file-tab"
        style={{ background: color }}
        onClick={onClick}
      >
        {label}
      </div>

      <div className="file-body" style={{ background: color }}>
        <div className="inner-data">
          {children} 
        </div>
      </div>
    </div>
  );
}

export default File;