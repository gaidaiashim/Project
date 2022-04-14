import React, { useContext } from "react";
import s from "./index.modules.css";
import UserContext from "../../../UserContext";

const User = () => {
  const user = useContext(UserContext);
  if (!user) {
    return <div className={s.user}>Loading</div>;
  }
  return (
    <div className={s.user}>
      <div className={s.user_item}>
        {user.name}: {user.about}
        <div>{user.email}</div>
      </div>
      <img src={user.avatar} alt={user.name} className={s.avatar} />
    </div>
  );
};

export default User;
