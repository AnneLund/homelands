import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Houses from "../../Pages/Houses/Houses";
import HouseDetails from "../../Pages/Houses/HouseDetails";
import Login from "../../Pages/Login/Login";
import Admin from "../../Pages/Admin/Admin";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boliger" element={<Houses />}>
        <Route path="/boliger/:id" element={<HouseDetails />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Router;
