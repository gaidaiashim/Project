import React from "react";
// import "./index.css";
import s from "./index.modules.css";

const Body = ({ children }) => {
  return <main className={s.body}>{children}</main>;
};

export default Body;
