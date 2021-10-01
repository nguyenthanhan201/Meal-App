import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar-heading">
        <img
          src={"https://image.flaticon.com/icons/png/512/926/926255.png"}
          alt="logo"
        />
        <Link to="/">
          {" "}
          <h1>
            Meal <span>App</span>
          </h1>
        </Link>
      </div>
      <div className="navbar-links">
        <ul>
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/categories">
            {" "}
            <li>Categories</li>
          </Link>
          <Link to="/random">
            {" "}
            <li>Random</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
