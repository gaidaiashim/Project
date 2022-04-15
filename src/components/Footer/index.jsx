import React from "react";
import s from "./index.modules.css";

const Footer = ({ children }) => {
  return <footer className={s.footer}>{children}</footer>;
};

export default Footer;
