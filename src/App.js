import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import Home from "./components/general/Home.jsx";
import SinglePet from "./components/pets/SinglePet.jsx";
import NavBar from "./components/general/NavBar.jsx";
import Login from "./components/general/Login.jsx";
import Signup from "./components/users/Signup.jsx";
import AddPet from "./components/pets/AddPet.jsx";
import User from "./components/users/User.jsx";
import Footer from "./components/general/Footer.jsx";
import About from "./components/general/About.jsx";
import AdoptPet from "./components/pets/AdoptPet.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchPetsAsync } from "./redux/pets/pets.js";
import { fetchProductsAsync } from "./redux/products/products.js";
import { fetchUsersAsync } from "./redux/users/users.js";
import { fetchOrdersAsync } from "./redux/orders/orders.js";
import CheckoutSuccess from "./components/general/CheckoutSuccess.jsx";
import Users from "./components/users/Users.jsx";
import axios from "axios";

import Checkout from "./components/general/Checkout.jsx";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPetsAsync());
    dispatch(fetchProductsAsync());
    dispatch(fetchUsersAsync());
    dispatch(fetchOrdersAsync());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div id="main">
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/addpet"} element={<AddPet />} />
          <Route path={"/pets/:petId"} element={<SinglePet />} />
          <Route path={"/adopt/:petId"} element={<AdoptPet />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/user/:userId"} element={<User />} />
          <Route path={"/checkout-success"} element={<CheckoutSuccess />} />
          <Route path={'/users'} element={<Users/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
