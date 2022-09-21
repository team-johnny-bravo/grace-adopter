//rafce
import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate =useNavigate()
    const user={
        name: "Jeff",
        isAdmin: true
    };



  return (
    <div className='navbar'>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            {user.isAdmin ? <button>Add Pet</button> : null}
      {user.name ? (
        <button onClick={() => navigate("/user/:userId")}>Welcome, {user.name}</button>
      ) : (
        <button onClick={() => navigate("/login")}>Login / Signup</button>
      )}
    </div>
  );
};

export default NavBar;
