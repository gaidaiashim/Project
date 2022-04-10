import React from "react";
import s from "./index.modules.css";

const User = ({ user }) => {
  if (!user) {
    return <></>;
  }
  return (
    <div className={s.user}>
      <img src={user.avatar} alt={user.name} className={s["user_item"]} />
      <div>
        <div className={s["user_item"]}>{user.email}</div>
        <div className={s["user_item"]}>
          {user.name}: {user.about}
        </div>
      </div>
    </div>
  );
};

export default User;
