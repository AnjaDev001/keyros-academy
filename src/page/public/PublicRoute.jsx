import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PLayout from "./PLayout";
import Courses from "./Courses";
import ContactUs from "./ContactUs";
import Login from "./Login";

export default function PublicRoute() {
  return (
    <Routes>
      <Route element={<PLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
    </Routes>
  );
}
