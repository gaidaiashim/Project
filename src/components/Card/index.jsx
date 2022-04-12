import React, { useCallback } from "react";
import Button from "../Button";
import s from "./index.modules.css";
import api from "../../Utils/Api";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Card = ({ postData, refresh, user_id }) => {
  const {
    _id: id,
    title,
    image,
    author,
    text,
    tags,
    created_at: date,
    updated_at: dateupdate,
    likes,
  } = postData;
  const handleLikeClick = useCallback(() => {
    if (likes.includes(user_id)) {
      Promise.all([api.deleteLikeOnPost(id)]).then(() => {
        refresh(true);
      });
    } else {
      Promise.all([api.addLikeOnPost(id)]).then(() => {
        refresh(true);
      });
    }
  });
  const navigate = useNavigate();

  const handleDelete = useCallback(() => {
    Promise.all([api.deletePost(id)]).then(() => {
      refresh(true);
    });
  });

  const likeClass = likes.includes(user_id) ? s.liked : s.notliked;

  return (
    <div className={s.card}>
      <Link to={`/details/${id}`}>
        <div className={s.card_title}>{title}</div>
        <div className="img">
          <img src={image}></img>
        </div>
      </Link>
      <div className="mail">{author.email}</div>
      <div className={s.about}>{text}</div>
      <div className={s.tag}>{`Tags: ${tags.join(",")}`}</div>
      <div className={s.date}>{`Создан: ${moment(date).format("L")}`}</div>
      <div className={s.date}>
        {`Изменен: ${moment(dateupdate).format("L")}`}
      </div>
      <div className={likeClass} onClick={handleLikeClick}>
        {likes.length}
      </div>
      {author._id === user_id ? (
        <Button text={"Удалить пост"} onClick={handleDelete} />
      ) : null}
    </div>
  );
};

export default Card;
