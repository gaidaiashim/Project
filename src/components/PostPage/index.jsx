import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "./../../Utils/Api";
import s from "./index.modules.css";
import moment from "moment";
import Button from "../Button";

const PostPage = ({}) => {
  const { post_id } = useParams();
  const [post, setPost] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([api.getPostById(post_id)]).then(([response]) => {
      const { message, err } = response;

      if (err) {
        setError(message);
      } else {
        setPost(response);
      }
    });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  if (!post) {
    return <div>Loading</div>;
  }

  const handleback = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        <Button text={"Назад"} onClick={handleback} />
      </div>
      <div className={s.card}>
        <div className={s.post_card_title}>{post.title}</div>
        <div className={s.post_image}>
          <img className={s.post_image} src={post.image}></img>
        </div>
        <div className={s.post_mail}>{post.author.email}</div>
        <div className={s.about}>{post.text}</div>
        <div className={s.tag}>{`Tags: ${post.tags.join(",")}`}</div>
        <div className={s.date}>
          {`Создан: ${moment(post.date).format("L, h:mm")}`}
        </div>
        <div className={s.date}>
          {`Изменен: ${moment(post.dateupdate).format("L, h:mm")}`}
        </div>
        <div>{`Likes: ${post.likes.length}`}</div>
      </div>
    </>
  );
};

export default PostPage;
