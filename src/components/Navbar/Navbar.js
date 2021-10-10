import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import * as ReactBootStrap from "react-bootstrap";

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
    <>
      {/* <div className={navbar ? "navbar active" : "navbar"}>
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
      </div> */}
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className={navbar ? "navbar active" : "navbar"}
      >
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="#home">
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
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto"></ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link>
                <Link to="/">
                  {" "}
                  <li>Home</li>
                </Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link>
                <Link to="/categories">
                  {" "}
                  <li>Categories</li>
                </Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link>
                <Link to="/random">
                  {" "}
                  <li>Random</li>
                </Link>
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </>
  );
};

export default Navbar;
