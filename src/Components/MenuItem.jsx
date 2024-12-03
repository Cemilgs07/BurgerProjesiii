import React from "react";
import "./Menu.css";

function MenuItem({ image, content, price, name }) {
  console.log(price);
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <h6>{content}</h6>
      <p>
        <i style={{ color: "Red" }}>{price} TL</i>
      </p>
    </div>
  );
}

export default MenuItem;
