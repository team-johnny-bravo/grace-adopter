//rafce
import React from 'react'

const NavBar = () => {
    const user={
        name: "jeff",
        isAdmin: true
    };

  return (
    <div className='navbar'>
        <h2>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            {user.isAdmin ? <button>Add Pet</button> : null}
            {user.name ? <button>Welcome, {user.name}</button> : <button>Login / Signup</button>}
        </h2>
    </div>
  )
}

export default NavBar