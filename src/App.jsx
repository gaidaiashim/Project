import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import api from "./Utils/Api";
import Cards from "./components/Cards";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    Promise.all([api.getAllPosts(), api.getUserInfo()]).then(
      ([posts, user]) => {
        setPosts(posts);
        setUser(user);
      }
    );
  }, []);

  return (
    <>
      <Header user={user} />
      <Body>
        <Cards data={posts} />
      </Body>
      <Footer>{"© Misha"}</Footer>
    </>
  );
};

export default App;
