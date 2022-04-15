import React, { useCallback, useContext } from "react";
import Button from "../Button";
import s from "./index.modules.css";
import api from "../../Utils/Api";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { HeartTwoTone } from "@ant-design/icons";
import UserContext from "../../UserContext";

const Card = ({ postData, refresh }) => {
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
  const user = useContext(UserContext);
  const userId = user != undefined ? user._id : "";
  const handleLikeClick = useCallback(
    (event) => {
      event.stopPropagation();
      if (likes.includes(userId)) {
        Promise.resolve(api.deleteLikeOnPost(id)).then(() => {
          refresh(true);
        });
      } else {
        Promise.resolve(api.addLikeOnPost(id)).then(() => {
          refresh(true);
        });
      }
    },
    [userId, likes, id]
  );
  const navigate = useNavigate();

  const handleDelete = useCallback((event) => {
    event.stopPropagation();
    Promise.resolve(api.deletePost(id)).then(() => {
      refresh(true);
    });
  });

  const handleNavigate = useCallback(() => {
    navigate(`/details/${id}`);
  }, [navigate, id]);

  const heartColor = likes.includes(userId) ? "red" : "grey";

  return (
    <div className={s.card} onClick={handleNavigate}>
      <div className={s.card_title}>{title}</div>
      <hr className={s.title_border}></hr>
      <div className={s.mail}>{author.email}</div>
      <div className={s.about}>{text}</div>
      <div className={s.card_img}>
        <img src={image}></img>
      </div>
      <div className={s.tag}>{`Теги: ${tags.join(",")}`}</div>
      <div className={s.date}>{`Создан: ${moment(date).format("L")}`}</div>
      <div className={s.date}>
        {`Изменен: ${moment(dateupdate).format("L")}`}
      </div>
      <div className={s.like} onClick={handleLikeClick}>
        <HeartTwoTone twoToneColor={heartColor} />
        {likes.length}
      </div>
      {author._id === userId ? (
        <div className={s.buttondelete}>
          <Button text={"Удалить пост"} onClick={handleDelete} />
        </div>
      ) : null}
    </div>
  );
};

export default Card;
