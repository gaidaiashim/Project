import React from "react";
import Card from "../Card";
import s from "./index.modules.css";

const Cards = ({ data, userId, refresh }) => {
  return (
    <div className={s.cards}>
      {data?.map((card) => (
        <Card
          id={card._id}
          key={card._id}
          title={card.title}
          image={card.image}
          email={card.author != undefined ? card.author.email : ""}
          about={card.text}
          tag={card.tags}
          date={card.created_at}
          dateupdate={card.updated_at}
          author_id={card.author != undefined ? card.author._id : ""}
          user_id={userId}
          refresh={refresh}
        />
      ))}
    </div>
  );
};

export default Cards;
