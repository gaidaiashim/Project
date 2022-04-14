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
    event.stopPropagation(); // to prevent navigation when deleting
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
      {/* <Link to={`/details/${id}`}>
        <div className={s.card_title}>{title}</div>
      </Link> */}
      <div className={s.card_title}>{title}</div>
      <hr className={s.title_border}></hr>
      {/* линия под титлом */}

      <div className={s.mail}>{author.email}</div>
      <div className={s.about}>{text}</div>
      <div className={s.card_img}>
        {/* <img className={s.card_img} src={image}></img> */}
        <img src={image}></img>
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
      {author._id === userId ? (
        <Button
          // className={s.buttondelete}
          text={"Удалить пост"}
          onClick={handleDelete}
        />
      ) : null}
    </div>
  );
};

export default Card;
