import React from "react";
// import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { selectSingleUser, fetchSingleUser } from "../../redux/users/singleUser";
import {selectUsers, fetchUsersAsync } from "../../redux/users/users";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [form, setForm] = useState({ userName: "", password: "" });
  // let [auth, setAuth] = useState({});-------------
  const auth = useSelector(selectSingleUser)
  const users = useSelector(selectUsers)

  const attemptTokenLogin = async () => {
    const token = window.localStorage.getItem("token");

    if (token) {
      const { data: auth } = await axios.get("/api/users/auth/signin", {
        headers: {
          authorization: token,
        },
      });
      const { id } = auth;
      const { data: user } = await axios.get(`/api/users/${id}`);
      // setAuth(user);--------------
      dispatch(fetchSingleUser(user.id))
    }
  };
  const signIn = async (credentials) => {
    const response = await axios.post("/api/users/auth/signin", credentials);
    const { token } = response.data;
    window.localStorage.setItem("token", token);
    attemptTokenLogin();
  };

  React.useEffect(() => {
    attemptTokenLogin();
    dispatch(fetchUsersAsync());
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();

    const existed = users.filter(user =>user.userName === form.userName);
    if(existed.length === 0){
      alert("User not exists");
      return;
    }

    signIn(form);
    // navigate('/order-history')
    // dispatch(setCurrentUser({ test: "test" }));
  };

  const handleChange = (prop) => (event) => {
    setForm({
      ...form,
      [prop]: event.target.value,
    });
  };

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    // setAuth({});--------------------------
    dispatch(fetchSingleUser(0))
    navigate('/')
  };

  return !auth.id ? (
    <div className="loginPage">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            className="form-input"
            name="username"
            id="username"
            value={form.userName || ""}
            placeholder="username"
            onChange={handleChange("userName")}
          />
          <span className="form-error">Please enter your username</span>
        </div>
        <div className="form-item">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            value={form.password || ""}
            placeholder="password"
            onChange={handleChange("password")}
          />
          <span className="form-error">Please enter your password</span>
        </div>
        <div id="button">
          <button type="submit" id="submit">
            Log In
          </button>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </form>
    </div>
  ) : (
    <div>
      <h1>Hello {auth.userName}! Here is your order history:</h1>
      <h3>
        <ol style={{ textAlign: "left" }}>
          {auth.orders.map((order, orderIdx) => (
            <li key={orderIdx}>
              <ul>
                {order.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {item.name + " $" + item.price + " x " + item.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </h3>
      {/* <Link to={`/user/:userId`}>Edit profile</Link> */}
      <Link to={`/user/${auth.id}`}>Edit profile</Link>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Login;
