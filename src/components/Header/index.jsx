import React from "react";
import Hello from "./Hello";
import s from "./index.modules.css";
import User from "./User";

const Header = ({ user }) => {
  return (
    <header className={s.header}>
      <Hello
        title="Дипломный проект"
        github="https://github.com/gaidaiashim/Project"
      />
      <User user={user} />
    </header>
  );
};

export default Header;
