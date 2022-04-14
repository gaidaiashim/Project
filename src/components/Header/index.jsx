import React from "react";
import Hello from "./Hello";
import s from "./index.modules.css";
import User from "./User";

const Header = () => {
  return (
    <header className={s.header}>
      <Hello
        title="Дипломный проект"
        github="https://github.com/gaidaiashim/Project"
      />
      <User />
    </header>
  );
};

export default Header;
