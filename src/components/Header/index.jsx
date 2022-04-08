import React from "react";
import Hello from "./Hello";
import "./index.css";

const Header = ({ children }) => {
  return (
    <header className="header">
      {children}
      <Hello
        title="Дипломный проект"
        homepage="google.com"
        github="https://github.com/gaidaiashim/Project"
      />
    </header>
  );
};

export default Header;
