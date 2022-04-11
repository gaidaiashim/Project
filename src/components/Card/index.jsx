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

  const navigate = useNavigate();

  const handleDelete = () => {
    Promise.all([api.deletePost(id)]).then(() => {
      console.log("deleted");
      refresh(true);
    });
  };

  return (
    <div className={s.card}>
      <Link to={`/details/${id}`}>
        <div className={s.card_item}>{title}</div>
        <div className="img">
          <img src={image}></img>
        </div>
      </Link>
      <div className="mail">{author.email}</div>
      <div className={`${s.card_item} ${s.about}`}>{text}</div>
      <div className={`${s.card_item} ${s.tag}`}>{`Tags: ${tags.join(
        ","
      )}`}</div>
      <div className={`${s.card_item}, ${s.date}`}>
        {moment(date).format("MMMM Do YYYY")}
      </div>
      <div className={`${s.card_item}, ${s.date}`}>
        {moment(dateupdate).format("MMMM Do YYYY")}
      </div>
      <div>{likes.length}</div>
      {author._id === user_id ? (
        <Button text={"Удалить пост"} onClick={handleDelete} />
      ) : null}
    </div>
  );
};

export default Card;
