import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
function Navbar({click}) {
  return (
    <div className="navbar">
      <Link to='/' className="navbar__logo">MERNSHOP</Link>

      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link" to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
            Cart
            <span className="navbar__mount">0</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/">Home</Link>
        </li>
      </ul>

      <div onClick={click} className="navbar__menu">
            <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;
