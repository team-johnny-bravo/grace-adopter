import React from "react";
// import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUserAsync } from '../../redux/users/users'
import { useDispatch } from 'react-redux'

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams()

  let [form, setForm] = useState({
    userId,
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
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(form)
    dispatch(editUserAsync(form))
    // editUserAsync(form)
  }

  return (
    <div className="signupPage">
      <div className="form-title">Edit your Details</div>
      <form>
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
          <span className="form-error">Update email</span>
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
          <span className="form-error">Update username</span>
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
          <span className="form-error">Update password</span>
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
          <span className="form-error">Retype password</span>
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
          <span className="form-error">Update first name</span>
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
          <span className="form-error">Update last name</span>
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
          <span className="form-error">Update address</span>
        </div>
        <div className="form-item">
          <label htmlFor="experience" className="form-label">
            Update experience
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
          {/* <button type="submit" id="submit"> */}
          <button type="submit" id="submit" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default User;
