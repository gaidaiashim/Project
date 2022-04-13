import React from "react";
import s from "./index.modules.css";

const Body = ({ children }) => {
  return <main className={s.body}>{children}</main>;
};

export default Body;
