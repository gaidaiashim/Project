import React from "react";
import "./index.css";

const Hello = ({ title, homepage, github }) => {
  return (
    <div className="hello">
      <div className="title">{title}</div>
      <a className="homepage">{homepage}</a>
      <a className="github">{github}</a>
    </div>
  );
};

export default Hello;
