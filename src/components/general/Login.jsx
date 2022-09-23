import React from 'react'
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    let [form, setForm] = useState({ username: '', password: ''})

    const handleChange = (prop) => (event) => {
        setForm({
            ...form,
            [prop]: event.target.value,
        });
    };

  return (
    <div className='loginPage'>
        <h1>Login</h1>
        <form >
            <label htmlFor="username">Username:</label>
            <input
                name="username"
                value={form.username || ""}
                onChange={handleChange("username")}
            /> <br/>
            <label htmlFor="password">Password:</label>
            <input
                name="password"
                value={form.password || ""}
                onChange={handleChange("password")}
            /> <br/>
            <input type="submit" value={"Login"} />
        </form>
        <button onClick={() => navigate('/signup')}>Sign Up</button>
    </div>
  )
}

export default Login