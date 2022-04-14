import React, { useState } from "react";
import Card from "../Card";
import s from "./index.modules.css";
import Button from "../Button";
import ModalCreatePost from "../ModalCreatePost";

const Cards = ({ data, refresh }) => {
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
      <div className={s.create_post_btn}>
        <Button text="Создать пост" onClick={handleOpenModal} />
      </div>
      <ModalCreatePost
        visible={addModalOpen}
        onOk={handleAddPost}
        onCancel={handleCloseModal}
      />
      <div className={s.cards}>
        {data?.map((card) => (
          <Card key={card._id} postData={card} refresh={refresh} />
        ))}
      </div>
    </>
  );
};

export default Cards;
