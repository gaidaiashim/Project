import React, { useCallback } from "react";
import Button from "../Button";
import s from "./index.modules.css";
import api from "../../Utils/Api";
import moment from "moment";

const Card = ({
  id,
  title,
  image,
  email,
  about,
  tag,
  date,
  dateupdate,
  author_id,
  user_id,
  refresh,
}) => {
  const handleDelete = () => {
    Promise.all([api.deletePost(id)]).then(() => {
      console.log("deleted");
      refresh(true);
    });
  };

  return (
    <div className={s.card}>
      <div className={s.card_item}>{title}</div>
      <div className={s.card_item}>
        <div className="img">
          <img src={image}></img>
        </div>
        <div className="mail">{email}</div>
      </div>
      <div className={`${s.card_item} ${s.about}`}>{about}</div>
      <div className={`${s.card_item} ${s.tag}`}>{tag.join(",")}</div>
      <div className={`${s.card_item}, ${s.date}`}>
        {moment(date).format("MMMM Do YYYY")}
      </div>
      <div className={`${s.card_item}, ${s.date}`}>
        {moment(dateupdate).format("MMMM Do YYYY")}
      </div>
      {author_id === user_id ? (
        <Button text={"Удалить пост"} onClick={handleDelete} />
      ) : null}
    </div>
  );
};

export default Card;
