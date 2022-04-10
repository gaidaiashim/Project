import React from "react";
import s from "./index.modules.css";

const Button = ({ text, onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
