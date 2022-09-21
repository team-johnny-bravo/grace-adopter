import React from 'react'
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    let [form, setForm] = useState({ 
        username: '',
         password: '',
         checkPassword:'',
         email: '',
         fname: '',
         lname: '',
         address: '',
         experience: 0,
        })

    const handleChange = (prop) => (event) => {
        console.log(event)
        setForm({
            ...form,
            [prop]: event.target.value,
        });
    }; 

  return (
    <div className='signupPage'>
        <h1>Signup</h1>
        <form >
            <label htmlFor="email">Email Address:</label>
            <input
                name="email"
                value={form.email || ""}
                onChange={handleChange("email")}
            /> <br/>
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
                onChange={handleChange("passord")}
            /> <br/>
            <label htmlFor="checkPassword">Retype Password:</label>
            <input
                name="checkPassword"
                value={form.checkPassword || ""}
                onChange={handleChange}
            /> <br/>
            <label htmlFor="fname">First Name:</label>
            <input
                name="fname"
                value={form.fname || ""}
                onChange={handleChange("fname")}
            /> <br/>
            <label htmlFor="lname">Last Name:</label>
            <input
                name="lname"
                value={form.lname || ""}
                onChange={handleChange("lname")}
            /> <br/>
            <label htmlFor="address">Address:</label>
            <input
                name="address"
                value={form.address || ""}
                onChange={handleChange("address")}
            /> <br/>
            <label htmlFor="experience">Years of Experience:</label>
            <input
                name="experience"
                value={form.experience || ""}
                onChange={handleChange("experience")}
            /> <br/>
            <input type="submit" value={"Signup"} />
        </form>
        <button onClick={() => navigate('/login')}>Login</button>
    </div>
  )
}

export default Signup