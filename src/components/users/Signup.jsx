import React from "react";
import { useDispatch, useSelector} from 'react-redux';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addUserAsync, selectUsers } from "../../redux/users/users";
// import { useDispatch } from "react-redux";
// import { fromByteArray } from "ipaddr.js";
import { fetchUsersAsync } from "../../redux/users/users";


const validator = require("email-validator");

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(selectUsers);
  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, []);

  let [form, setForm] = useState({
    userName: "",
    password: "",
    checkPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    yearsOfExperience: 0,
  });

  const handleChange = (prop) => (event) => {
    setForm({
      ...form,
      [prop]: event.target.value,
    });
  };

  // console.log("users bufore submit", users);
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('sign up form:', form)

    if(!validator.validate(form.email)){
      alert("Please fill out the right email");
      return;
    }
    if(form.userName.length === 0 || form.userName.startsWith(" ")){
      alert("Please fill the Username");
      return;
    }
    if(form.password.length < 6){
      alert("Password length must be at least 6");
      return;
    }
    if(form.checkPassword !== form.password){
      alert("Retype Password not matched");
      return;
    }
    if(form.firstName.length === 0 ||form.firstName.startsWith(" ")){
      alert("Please fill the First Name");
      return;
    }
    if(form.lastName.length === 0 ||form.lastName.startsWith(" ")){
      alert("Please fill the last Name");
      return;
    }
    if(form.address.length === 0){
      alert("Please fill the address");
      return;
    }
    const existed = users.filter(user =>user.userName === form.userName);
    console.log(existed);
    if(existed.length > 0){
      alert("User already exists");
      return;
    }

    dispatch(addUserAsync(form));
    navigate('/login')
  };

  return (
    <div className="signupPage">
      <div className="form-title">Sign Up</div>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            name="email"
            id="email"
            placeholder="Email Address"
            value={form.email || ""}
            onChange={handleChange("email")}
          />
          <span className="form-error">Please enter an email</span>
        </div>
        <div className="form-item">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="username"
            className="form-input"
            name="username"
            id="username"
            placeholder="Username"
            value={form.userName || ""}
            onChange={handleChange("userName")}
          />
          <span className="form-error">Please enter a username</span>
        </div>
        <div className="form-item">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            name="password"
            id="password"
            placeholder="Password"
            value={form.password || ""}
            onChange={handleChange("password")}
          />
          <span className="form-error">Please enter a password</span>
        </div>
        <div className="form-item">
          <label htmlFor="checkPassword" className="form-label">
            Retype Password
          </label>
          <input
            type="password"
            className="form-input"
            name="checkPassword"
            id="checkPassword"
            placeholder="Retype Password"
            value={form.checkPassword || ""}
            onChange={handleChange("checkPassword")}
          />
          <span className="form-error">Please retype password</span>
        </div>
        <div className="form-item">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            className="form-input"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={form.firstName || ""}
            onChange={handleChange("firstName")}
          />
          <span className="form-error">Please enter your first name</span>
        </div>
        <div className="form-item">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            className="form-input"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={form.lastName || ""}
            onChange={handleChange("lastName")}
          />
          <span className="form-error">Please enter your last name</span>
        </div>
        <div className="form-item">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            className="form-input"
            name="address"
            id="address"
            placeholder="Address"
            value={form.address || ""}
            onChange={handleChange("address")}
          />
          <span className="form-error">Please enter your address</span>
        </div>
        <div className="form-item">
          <label htmlFor="experience" className="form-label">
            Experience
          </label>
          <input
            type="number"
            className="form-input form-input-small"
            name="experience"
            id="experience"
            placeholder="Years of experience"
            min="0"
            value={form.yearsOfExperience || ""}
            onChange={handleChange("yearsOfExperience")}
          />
          <span className="form-error">Enter a valid number</span>
        </div>
        <div id="button">
          <button type="submit" id="submit">
            Sign Up
          </button>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
