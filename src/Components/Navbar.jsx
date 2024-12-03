import React from "react";
import { NavLink } from "react-router";
import BurgerLogo from "../assets/burgerlogo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="main">
        <img src={BurgerLogo} alt="" />
        <div className="mainLink">
          <nav>
            <NavLink to={"/"}>Anasayfa</NavLink>
            <NavLink to={"/Menu"}>Menü</NavLink>
            <NavLink to={"/About"}>Hakkımızda</NavLink>
            <NavLink to={"/Contact"}>İletişim</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
