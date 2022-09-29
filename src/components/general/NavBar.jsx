import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { selectSingleUser, fetchSingleUser } from "../../redux/users/singleUser";


// const NavBar = ({ user }) => {
const NavBar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  // const user = {
  //   name: "Jeff",
  //   isAdmin: true,
  // };

  const user = useSelector(selectSingleUser)
  // let [user, setUser] = useState({});
  const attemptTokenLogin = async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const { data: authUser } = await axios.get("/api/users/auth/signin", {
        headers: {
          authorization: token,
        },
      });
      // setUser(authUser);
      dispatch(fetchSingleUser(authUser.id))
    } else {
      dispatch(fetchSingleUser(0))
    }
  };

  useEffect(() => {
    attemptTokenLogin()
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    // setUser({});
    dispatch(fetchSingleUser(0))
    navigate('/')
  };


  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src="https://i.imgur.com/TgUxx9u.png" alt="logo" />
        </a>
      </div>
      <div className="links">
        <a href="/about">About</a>
        {user.isAdmin ? (
          <>
            <button onClick={() => navigate("/addpet")}>Add Pet</button>
            <button onClick={() => navigate("/users")}>Users List</button>
          </>
        ) : null}
        {user.userName ? (
          <>
            {/* <button onClick={() => navigate("/user/:userId")}> */}
            <button onClick={() => navigate(`/user/${user.id}`)}>
              Welcome, {user.userName}
            </button>
            <button onClick={handleLogout}>Log out</button>
          </>
        ) : (
          <button onClick={() => navigate("/login")}>Login / Signup</button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
