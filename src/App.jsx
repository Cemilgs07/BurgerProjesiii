import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import About from "./Components/About";
import NotFount from "./Components/NotFount";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" excat element={<Home />} />
        <Route path="/menu" excat element={<Menu />} />
        <Route path="/Contact" excat element={<Contact />} />
        <Route path="/About" excat element={<About />} />
        <Route path="*" excat element={<NotFount />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
