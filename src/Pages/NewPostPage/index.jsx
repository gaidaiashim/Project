import React from "react";
import { useForm } from "react-hook-form";
import api from "../../Utils/Api";
import { useNavigate } from "react-router-dom";

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
      // todo handleError
      navigate(`/details/${newpostdata._id}`);
    });
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div>
      <form onSubmit={handleSubmit(handleAddPost)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div>
          <input
            placeholder="Заголовок"
            {...register("title", { required: true })}
          />
        </div>
        <div>
          <input placeholder="url картинки" {...register("image")} />
        </div>
        <div>
          <input placeholder="Описание" {...register("text")} />
        </div>
        {/* include validation with required or other standard HTML validation rules */}
        <div>
          <input placeholder="Тэги" {...register("tags")} />
        </div>
        {/* errors will return when field validation fails  */}
        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        <input type="submit" />
      </form>
    </div>
  );
};

export default NewPostPage;
