import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const cards = [
  {
    id: 1,
    title: "Batman: Return Of The Joker",
    mail: "maxim_91@inbox.ru",
    about: "Change Other Device on Right Upper Arm",
    tag: "legendary, test",
    date: "12.03.2022, 02:23:20",
  },
  {
    id: 2,
    title: "Batman: Return Of The Joker",
    mail: "maxim_91@inbox.ru",
    about: "Change Other Device on Right Upper Arm",
    tag: "legendary, test",
    date: "12.03.2022, 02:23:20",
  },
  {
    id: 3,
    title: "Batman: Return Of The Joker",
    mail: "maxim_91@inbox.ru",
    about: "Change Other Device on Right Upper Arm",
    tag: "legendary, test",
    date: "12.03.2022, 02:23:20",
  },
];

const App = () => {
  return (
    <>
      <Header>{""}</Header>
      <Body>
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            mail={card.mail}
            about={card.about}
            tag={card.tag}
            date={card.date}
          />
        ))}
      </Body>
      <Footer>{"© You!"}</Footer>
    </>
  );
};

export default App;
