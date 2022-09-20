//rafce
import React from 'react'
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
    const navigate =useNavigate()
    const user={
        name: "",
        isAdmin: false
    };



  return (
    <div className='navbar'>
        <h2>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            {user.isAdmin ? <button>Add Pet</button> : null}
            {user.name ? <button>Welcome, {user.name}</button> : <button onClick={()=>navigate('/login')}>Login / Signup</button>}
        </h2>
    </div>
  )
}

export default NavBar