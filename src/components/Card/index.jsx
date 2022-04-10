import React, { useCallback } from "react";
import Button from "../Button";
import s from "./index.modules.css";
import api from "../../Utils/Api";

const Card = ({
  id,
  title,
  img,
  mail,
  about,
  tag,
  date,
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
          <img src={img}></img>
        </div>
        <div className="mail">{mail}</div>
      </div>
      <div className={`${s.card_item} ${s.about}`}>{about}</div>
      <div className={s.card_item}>{tag.join(",")}</div>
      <div className={s.card_item}>{date}</div>
      {author_id === user_id ? (
        <Button text={"Удалить пост"} onClick={handleDelete} />
      ) : null}
    </div>
  );
};

export default Card;
