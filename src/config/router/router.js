import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Services from "../../pages/services";
import Login from "../../Components/login";
import Signup from "../../Components/signup";
import Dashboard from "../../Components/dashboard";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
    </Router>
  );
}
