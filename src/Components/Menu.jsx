import React from "react";
import { Data } from "./Helpers/Data.jsx";
import MenuItem from "./MenuItem.jsx";
import "./Menu.css";
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItems, index) => {
          return (
            <MenuItem
              key={index}
              image={menuItems.image}
              content={menuItems.content}
              price={menuItems.price}
              name={menuItems.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
