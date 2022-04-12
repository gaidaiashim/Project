import React from "react";
import s from "./index.modules.css";

const Hello = ({ title, github }) => {
  return (
    <div className={s.hello}>
      <div className="title">{title}</div>
      <a href={github} className={s.github}>
        {github}
      </a>
    </div>
  );
};

export default Hello;
