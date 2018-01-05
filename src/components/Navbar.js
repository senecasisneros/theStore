import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="header-basic-light">
        <div className="header-limiter">
          <h1>
            <a href="#">
              The<span>Store</span>
            </a>
          </h1>
          
          <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/story">Our Story</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
