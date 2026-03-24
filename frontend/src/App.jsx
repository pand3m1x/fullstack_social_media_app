import { useEffect } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar";

function App(){
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('http://localhost:3000/api/protected',}
  //     const data = await {
  // }, [])

  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}