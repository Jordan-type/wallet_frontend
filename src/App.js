import React from "react";
// import { LandingPage, LogIn, SignUp, DashBoard } from './pages';
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/DashBoard";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<LogIn />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/account-verification/:token" element={<DashBoard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
