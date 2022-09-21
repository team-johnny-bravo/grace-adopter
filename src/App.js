import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import Home from './components/general/Home.jsx'
import SinglePet from "./components/pets/SinglePet.jsx";
import NavBar from "./components/general/NavBar.jsx"
import Login from "./components/users/Login.jsx";
import Signup from "./components/users/Signup.jsx";
import AddPet from "./components/pets/AddPet.jsx";
import User from "./components/users/User.jsx";
import Contact from "./components/general/Contact.jsx";
import About from "./components/general/About.jsx";
import AdoptPet from "./components/pets/AdoptPet.jsx";
import SubmitApplication from "./components/pets/SubmitApplication.jsx";
import AdoptionSupplies from "./components/pets/AdoptionSupplies.jsx";


function App() {
 

  return (
    <>
      <NavBar />
      <div id="main">
        <Routes>  
          <Route index element={<AdoptPet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addpet" element={<AddPet />} />
          <Route path="/supplies" element={<AdoptionSupplies />} />
          <Route path="/submitapplication" element={<SubmitApplication />} />
          <Route path="/pet/:petId" element={<SinglePet />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
