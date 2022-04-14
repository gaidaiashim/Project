import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import api from "./Utils/Api";
import Cards from "./components/Cards";
import { Routes, Route, useLocation } from "react-router-dom";
import PostPage from "./components/PostPage";
import UserContext from "./UserContext";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  const [needUpdate, setNeedUpdate] = useState(true);
  const location = useLocation();

  const state = location.state;
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (needUpdate === true) {
      Promise.all([api.getAllPosts(), api.getUserInfo()]).then(
        ([posts, user]) => {
          setPosts(posts);
          setUser(user);
          setNeedUpdate(false);
          setLoggedIn(true);
        }
      );
    }
  }, [needUpdate]);
   return (
    <UserContext.Provider value={user}>
      <Header />
      <Body>
        <Routes
          location={
            (state && {
              ...state?.backgroundLocation,
              pathname: state?.initialPath,
            }) ||
            location
          }
        >
          <Route
            path="/"
            element={
              loggedIn && (
                <Cards data={posts} refresh={setNeedUpdate} />
              )
            }
          />
          <Route path="details/:post_id" element={loggedIn && <PostPage />} />
        </Routes>
      </Body>
      <Footer>{"© Misha"}</Footer>
    </UserContext.Provider>
  );
};

export default App;
