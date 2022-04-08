import React from "react";
import Button from "../Button";

const Card = ({ title, img, mail, about, tag, date }) => {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="user">
        <div className="img">
          <img src={img}></img>
        </div>
        <div className="mail">{mail}</div>
        <div className="about">{about}</div>
        <div className="tag">{tag}</div>
        <div className="date">{date}</div>
        <Button
          text={"Удалить пост"}
          onClick={() => console.log("Есть контакт")}
        />
      </div>
    </div>
  );
};

export default Card;
