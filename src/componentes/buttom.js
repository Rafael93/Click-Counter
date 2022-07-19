import React from "react";
import "../styles/button.css";

function Button({ text, isButtonClick, click }) {
  return (
    <button
      className={isButtonClick ? "click-button" : "restart-button"}
      onClick={click}
    >
      {text}
    </button>
  );
}

export default Button;
