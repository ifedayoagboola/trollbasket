import React from "react";
import "./Navbar.css";
import g1 from "../../images/g1.svg";
import g2 from "../../images/g2.svg";
import g3 from "../../images/g3.svg";
import arrow from "../../images/arrow.png";

const Navbar = () => {
  return (
    <div className="nav">
      <h3>Trollbasket</h3>
      <div className="items flex">
        <div className="flex">
          <img src={g2} alt="" /> <p>Location </p> <img src={arrow} alt="" />
        </div>
        <div className="flex">
          <img src={g1} alt="" />
          <p> My orders</p>
        </div>
        <div className="flex">
          <img src={g3} alt="" />
          <p>Cart</p>
        </div>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search merchbuy" />
      </div>
    </div>
  );
};

export default Navbar;
