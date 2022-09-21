import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import Home from './components/Home.jsx'
import SinglePetPage from "./components/SinglePetPage.jsx";
import NavBar from "./components/NavBar.jsx"
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import AddPet from "./components/AddPet.jsx";
import { Routes, Route, Link } from "react-router-dom";


function App() {
 

  return (
    <>
      <NavBar />
      <div id="main">
        <Routes>  
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addpet" element={<AddPet />} />
          <Route path="/pet/:petId" element={<SinglePetPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
