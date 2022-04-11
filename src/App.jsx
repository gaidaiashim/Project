import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import api from "./Utils/Api";
import Cards from "./components/Cards";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import PostPage from "./components/PostPage";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  const [needUpdate, setNeedUpdate] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
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
  const userId = user != undefined ? user._id : "";
  return (
    <>
      <Header user={user} />
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
                <Cards data={posts} userId={userId} refresh={setNeedUpdate} />
              )
            }
          />
          <Route path="details/:post_id" element={loggedIn && <PostPage />} />
        </Routes>
      </Body>
      <Footer>{"© Misha"}</Footer>
    </>
  );
};

export default App;
