import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <h1 className="titleHeader">
        Pizzeria <br /> Parco i Pini
      </h1>
      <div className="containerButtonHeader">
      <Link to="/menu"><button className="btnHeader">VIEW MENU</button></Link>
      </div>
    </header>
  );
};

export default Header;
