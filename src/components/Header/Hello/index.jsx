import React from "react";
// import "./index.css";
import s from "./index.modules.css";

const Hello = ({ title, github }) => {
  return (
    <div className={s.hello}>
      <div className="title">{title}</div>
      <a href={github} className="github">
        {github}
      </a>
    </div>
  );
};

export default Hello;
