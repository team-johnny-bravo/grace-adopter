//rafce
import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ user }) => {
  const navigate = useNavigate();
  // const user = {
  //   name: "Jeff",
  //   isAdmin: true,
  // };

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    // setAuth({});
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
          <button onClick={() => navigate("/addpet")}>Add Pet</button>
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
