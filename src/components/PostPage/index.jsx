import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "./../../Utils/Api";
import s from "./index.modules.css";
import moment from "moment";

const PostPage = ({}) => {
  const { post_id } = useParams();
  const [post, setPost] = useState();
  const [error, setError] = useState();

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
  return (
    <div className={s.card}>
      <div className={s.card_item}>{post.title}</div>
      <div className="img">
        <img src={post.image}></img>
      </div>
      <div className="mail">{post.author.email}</div>
      <div className={`${s.card_item} ${s.about}`}>{post.about}</div>
      <div className={`${s.card_item} ${s.tag}`}>{`Tags: ${post.tags.join(
        ","
      )}`}</div>
      <div className={`${s.card_item}, ${s.date}`}>
        {moment(post.date).format("MMMM Do YYYY")}
      </div>
      <div className={`${s.card_item}, ${s.date}`}>
        {moment(post.dateupdate).format("MMMM Do YYYY")}
      </div>
    </div>
  );
};

export default PostPage;
