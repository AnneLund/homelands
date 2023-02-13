import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import Categories from "../../Pages/Products/Categories";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Categories />}>
        <Route path="/products/:id" element={<Products />} />
      </Route>
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
