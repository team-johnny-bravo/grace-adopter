import React from 'react'
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUserAsync } from '../../redux/users/users'
import { useDispatch } from 'react-redux'


const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let [form, setForm] = useState({
        userName: '',
        password: '',
        checkPassword: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        yearsOfExperience: 0,
    })

    const handleChange = (prop) => (event) => {
        // console.log(event)
        setForm({
            ...form,
            [prop]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('sign up form:', form)
        dispatch(addUserAsync(form))

    }

    return (
        <div className='signupPage'>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address:</label>
                <input
                    name="email"
                    value={form.email || ""}
                    onChange={handleChange("email")}
                /> <br />
                <label htmlFor="username">Username:</label>
                <input
                    name="username"
                    value={form.userName || ""}
                    onChange={handleChange("userName")}
                /> <br />
                <label htmlFor="password">Password:</label>
                <input
                    name="password"
                    value={form.password || ""}
                    onChange={handleChange("password")}
                /> <br />
                <label htmlFor="checkPassword">Retype Password:</label>
                <input
                    name="checkPassword"
                    value={form.checkPassword || ""}
                    onChange={handleChange('checkPassword')}
                /> <br />
                <label htmlFor="fname">First Name:</label>
                <input
                    name="fname"
                    value={form.firstName || ""}
                    onChange={handleChange("firstName")}
                /> <br />
                <label htmlFor="lname">Last Name:</label>
                <input
                    name="lname"
                    value={form.lastName || ""}
                    onChange={handleChange("lastName")}
                /> <br />
                <label htmlFor="address">Address:</label>
                <input
                    name="address"
                    value={form.address || ""}
                    onChange={handleChange("address")}
                /> <br />
                <label htmlFor="experience">Years of Experience:</label>
                <input
                    name="experience"
                    value={form.yearsOfExperience || ""}
                    onChange={handleChange("yearsOfExperience")}
                /> <br />
                <input type="submit" value={"Signup"} />
            </form>
            <button onClick={() => navigate('/login')}>Login</button>
        </div>
    )
}

export default Signup