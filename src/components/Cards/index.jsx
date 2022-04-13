import React, { useState } from "react";
import Card from "../Card";
import s from "./index.modules.css";
import Button from "../Button";
import ModalCreatePost from "../ModalCreatePost";

const Cards = ({ data, userId, refresh }) => {
  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleOpenModal = () => {
    setAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setAddModalOpen(false);
  };

  const handleAddPost = () => {
    Promise.resolve(api.deleteLikeOnPost(id)).then(() => {
      refresh(true);
    });
  };

  return (
    <>
      <Button
        className={s.cards}
        text="Создать пост"
        onClick={handleOpenModal}
      />
      <ModalCreatePost
        visible={addModalOpen}
        onOk={handleAddPost}
        onCancel={handleCloseModal}
      />
      <div className={s.cards}>
        {data?.map((card) => (
          <Card
            key={card._id}
            postData={card}
            user_id={userId}
            refresh={refresh}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
