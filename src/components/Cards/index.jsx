import React from "react";
import Card from "../Card";
import s from "./index.modules.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Cards = ({ data, refresh }) => {
  const navigate = useNavigate();
  const handleOpenAddPostPage = () => {
    navigate("/newPost");
  };
  return (
    <>
      <div className={s.create_post_btn}>
        <Button text="Создать пост" onClick={handleOpenAddPostPage} />
      </div>
      <div className={s.cards}>
        {data?.map((card) => (
          <Card key={card._id} postData={card} refresh={refresh} />
        ))}
      </div>
    </>
  );
};

export default Cards;
