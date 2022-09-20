import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import Home from './components/Home.jsx'
import SinglePetPage from "./components/SinglePetPage.jsx";
import NavBar from "./components/NavBar.jsx"
import { Routes, Route, Link } from "react-router-dom";

function App() {
 

  return (
    <>
      <NavBar />
      <Routes>  
        <Route index element={<Home />} />
        <Route path="pet/:petId" element={<SinglePetPage />} />
      </Routes>
    </>
  );
}

export default App;
