import React from "react";
import s from "./index.modules.css";

const Hello = ({ title, github }) => {
  return (
    <div className={s.hello}>
      <div className={s.title}>{title}</div>
      <a href={github} className={s.github} target="_blank">
        {github}
      </a>
    </div>
  );
};

export default Hello;
