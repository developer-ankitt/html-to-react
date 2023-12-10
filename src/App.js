import './App.css';
// import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Products from './pages/Product';
import Home from './pages/Home';
// import Blogs from './pages/Blogs';
// import Cart from './pages/Cart';
import { Routes, Route } from "react-router-dom"

//--------------------------------- http://localhost:3000/Yummy-Sandwich- -------------------------------------------


function App() {

  return (
    <>
      <Navbar title=" Yummy Sandwich" />
      <Routes>
        <Route path="/resp.rest-home" element={<Home />} />
        {/* <Route path="/resp.rest-products" element={<Product />} /> */}
        {/* <Route path="/resp.rest-blogs" element={<Blogs />} /> */}
        {/* <Route path="/resp.rest-cart" element={<Cart />} /> */}
      </Routes>
    </>
  );
}

export default App;