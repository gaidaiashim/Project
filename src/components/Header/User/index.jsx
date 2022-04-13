import React from "react";
import s from "./index.modules.css";

const User = ({ user }) => {
  if (!user) {
    return <></>;
  }
  return (
    <div className={s.user}>
      <div className={s.user_item}>
        {user.name}: {user.about}
        <div>{user.email}</div>
      </div>
      <img src={user.avatar} alt={user.name} className={s.avatar} />
      <div></div>
    </div>
  );
};

export default User;
