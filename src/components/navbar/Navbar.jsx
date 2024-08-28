import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import slice from "../../assets/pizzaslice.png"
const Navbar = ({ className }) => {
  return (
    <nav className="navbarContainer">
      <img src={slice} alt="pizzaslice" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        {/* <li>
          <a href="#">Contact</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
