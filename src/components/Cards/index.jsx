import React from "react";
import Card from "../Card";
// import "./index.css";
import s from "./index.modules.css";

const Cards = ({ data }) => {
  return (
    <div className={s.cards}>
      {data?.map((card) => (
        <Card
          key={card._id}
          title={card.title}
          mail={card.email}
          about={card.text}
          tag={card.tags}
          date={card.created_at}
        />
      ))}
    </div>
  );
};

export default Cards;
