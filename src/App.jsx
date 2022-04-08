import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Button />
      <Card
        title={"Batman: Return Of The Joker"}
        mail={"maxim_91@inbox.ru"}
        about={"Change Other Device on Right Upper Arm"}
        tag={"legendary, test"}
        date={"12.03.2022, 02:23:20"}
      />
    </>
  );
};

export default App;
