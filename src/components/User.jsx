import React from 'react'
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
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

    const handleChange = (prop) => (e) => {
        setForm({
            ...form,
            [prop]: +e.target.value,
        });
    }; 

  return (
    <div className='userPage'>
        <h1>User</h1>
        <form >
            <label htmlFor="email">Email Address:</label>
            <input
                name="email"
                value={form.email || ""}
                onChange={handleChange}
            /> <br/>
            <label htmlFor="username">Username:</label>
            <input
                name="username"
                value={form.username || ""}
                onChange={handleChange}
            /> <br/>
            <label htmlFor="password">Password:</label>
            <input
                name="password"
                value={form.password || ""}
                onChange={handleChange}
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
                onChange={handleChange}
            /> <br/>
            <label htmlFor="lname">Last Name:</label>
            <input
                name="lname"
                value={form.lname || ""}
                onChange={handleChange}
            /> <br/>
            <label htmlFor="address">Address:</label>
            <input
                name="address"
                value={form.address || ""}
                onChange={handleChange}
            /> <br/>
            <label htmlFor="experience">Years of Experience:</label>
            <input
                name="experience"
                value={form.experience || ""}
                onChange={handleChange}
            /> <br/>
            <input type="submit" value={"User"} />
        </form>
        <button onClick={() => navigate('/login')}>Login</button>
    </div>
  )
}

export default User