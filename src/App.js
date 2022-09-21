import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import Home from './components/general/Home.jsx'
import SinglePet from "./components/pets/SinglePet.jsx";
import NavBar from "./components/general/NavBar.jsx"
import Login from "./components/general/Login.jsx";
import Signup from "./components/users/Signup.jsx";
import AddPet from "./components/pets/AddPet.jsx";
import User from "./components/users/User.jsx";
import Contact from "./components/general/Contact.jsx";
import About from "./components/general/About.jsx";


function App() {
 

  return (
    <>
      <NavBar />
      <div id="main">
        <Routes>  
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addpet" element={<AddPet />} />
          <Route path="/pet/:petId" element={<SinglePet />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
