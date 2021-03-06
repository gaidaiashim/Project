import React from "react";
import { useForm } from "react-hook-form";
import api from "../../Utils/Api";
import { useNavigate } from "react-router-dom";
import s from "./index.modules.css";
import Button from "../../components/Button";

const NewPostPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleAddPost = (data) => {
    console.log(data);

    const tags = data.tags.split(",");

    Promise.resolve(api.addNewPost({ ...data, tags })).then((newpostdata) => {
      navigate(`/details/${newpostdata._id}`);
    });
  };

  const handleback = () => {
    navigate("/");
  };

  return (
    <div className={s.main}>
      <div>
        <Button text={"Все посты"} onClick={handleback} />
      </div>
      <div>
        <h3>Создание поста</h3>
        <form onSubmit={handleSubmit(handleAddPost)}>
          <div className={s.inputs}>
            <p>Заголовок</p>
            <input
              className={s.input}
              placeholder="Мой первый пост..."
              {...register("title", { required: true })}
            />
          </div>
          <div className={s.inputs}>
            <p>Ссылка на картинку поста</p>
            <input
              className={s.input}
              placeholder="https://..."
              {...register("image")}
            />
          </div>
          <div className={s.inputs}>
            <p>Текст вашего поста</p>
            <textarea
              rows="10"
              cols="33"
              className={s.input}
              placeholder="Пост о том как..."
              {...register("text", { required: true })}
            />
          </div>
          <div className={s.inputs}>
            <p>Теги</p>
            <input
              className={s.input}
              placeholder="POST, BEST, HIPE..."
              {...register("tags")}
            />
          </div>
          <input className={s.button} type="submit" value="Создать" />
        </form>
      </div>
    </div>
  );
};

export default NewPostPage;
