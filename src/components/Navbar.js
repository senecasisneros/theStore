import React, { Component } from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">Products</a>
          </li>
          <li className="nav-item">
            <a href="#">Our Story</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
