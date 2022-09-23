import React from 'react'
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    let [form, setForm] = useState({ userName: '', password: '' })

    const attemptTokenLogin = async () => {
        const token = window.localStorage.getItem('token');
        console.log('this is token:', token)
        if (token) {
            const { data: auth } = await axios.get('/api/users/signin', {
                headers: {
                    authorization: token
                }
            });
            const { id } = auth
            console.log('id:', id)
        }
    }
    const signIn = async (credentials) => {
        const response = await axios.post('/api/users/signin', credentials);
        const { token } = response.data;
        window.localStorage.setItem('token', token);
        attemptTokenLogin();
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        signIn(form)
    }


    const handleChange = (prop) => (event) => {
        setForm({
            ...form,
<<<<<<< HEAD
            [prop]: e.target.value,
        });
    };

    return (
        <div className='loginPage'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    name="username"
                    value={form.userName || ""}
                    onChange={handleChange('userName')}
                /> <br />
                <label htmlFor="password">Password:</label>
                <input
                    name="password"
                    value={form.password || ""}
                    onChange={handleChange('password')}
                /> <br />
                <input type="submit" value={"Login"} />
            </form>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
    )
=======
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
>>>>>>> db8cc92a6c6e412f45a715d61ba3476d09191f28
}

export default Login