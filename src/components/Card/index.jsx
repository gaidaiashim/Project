import React, { useCallback } from "react";
import Button from "../Button";
import s from "./index.modules.css";
import api from "../../Utils/Api";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HeartTwoTone } from "@ant-design/icons";

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
      Promise.resolve(api.deleteLikeOnPost(id)).then(() => {
        refresh(true);
      });
    } else {
      Promise.resolve(api.addLikeOnPost(id)).then(() => {
        refresh(true);
      });
    }
  });
  const navigate = useNavigate();

  const handleDelete = useCallback(() => {
    Promise.resolve(api.deletePost(id)).then(() => {
      refresh(true);
    });
  });

  // const likeClass = likes.includes(user_id) ? s.liked : s.notliked;
  const heartColor = likes.includes(user_id) ? "red" : "grey";

  return (
    <div className={s.card}>
      <Link to={`/details/${id}`}>
        <div className={s.card_title}>{title}</div>
      </Link>
      <hr className={s.title_border}></hr>
      <div className={s.mail}>{author.email}</div>
      <div className={s.about}>{text}</div>
      <div className={s.card_img}>
        <img className={s.card_img} src={image}></img>
      </div>
      <div className={s.tag}>{`Tags: ${tags.join(",")}`}</div>
      <div className={s.date}>{`Создан: ${moment(date).format("L")}`}</div>
      <div className={s.date}>
        {`Изменен: ${moment(dateupdate).format("L")}`}
      </div>
      {/* <div className={likeClass} onClick={handleLikeClick}>
        {likes.length}
      </div> */}
      <div className={s.like} onClick={handleLikeClick}>
        <HeartTwoTone twoToneColor={heartColor} />
        {/* <div className={s.liketext}>{`Нравится: ${likes.length}`}</div> */}
        {likes.length}
      </div>
      {author._id === user_id ? (
        <Button
          className={s.buttondelete}
          text={"Удалить пост"}
          onClick={handleDelete}
        />
      ) : null}
    </div>
  );
};

export default Card;
