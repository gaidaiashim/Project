import React from "react";
import Card from "../Card";
import s from "./index.modules.css";

const Cards = ({ data, userId, refresh }) => {
  return (
    <div className={s.cards}>
      {data?.map((card) => (
        <Card
          key={card._id}
          postData={card}
          user_id={userId}
          refresh={refresh}
        />
      ))}
    </div>
  );
};

export default Cards;
