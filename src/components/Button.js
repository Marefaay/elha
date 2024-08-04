// src/Button.js
import React from "react";
import "./Button.css";

function Button({ category, handleClick }) {
  return (
    <button className={category} onClick={() => handleClick(category)}>
      {category}
    </button>
  );
}

export default Button;
