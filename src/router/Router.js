import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "../page/DashboardPage";
import LandingPage from "../page/LandingPage";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
