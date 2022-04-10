import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import api from "./Utils/Api";
import Cards from "./components/Cards";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  const [needUpdate, setNeedUpdate] = useState(true);

  useEffect(() => {
    if (needUpdate === true) {
      Promise.all([api.getAllPosts(), api.getUserInfo()]).then(
        ([posts, user]) => {
          setPosts(posts);
          setUser(user);
          setNeedUpdate(false);
        }
      );
    }
  }, [needUpdate]);
  const userId = user != undefined ? user._id : "";
  return (
    <>
      <Header user={user} />
      <Body>
        <Cards data={posts} userId={userId} refresh={setNeedUpdate}/>
      </Body>
      <Footer>{"© Misha"}</Footer>
    </>
  );
};

export default App;
