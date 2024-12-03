import React from "react";
import { NavLink } from "react-router";
import BannerImage from "../assets/banneryeni.jpg";
import "./Home.css";
function Home() {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="order">
        <div>
          <NavLink to={"menu"}>
            <button>Sipariş Ver</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
