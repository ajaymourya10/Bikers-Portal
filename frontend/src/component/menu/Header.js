import React from "react";
import "../../css/style.css";

import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="container-fluid">
      <div className="row bg-dark">
        <div className="col col-11 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
              <NavLink
                className="nav-link header--element active text-white"
                to="/"
              >
                Biker's Portal
              </NavLink>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link menu--element" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link menu--element" to="/services">
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link menu--element" to="/about">
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link menu--element" to="/contact">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link menu--element" to="/">
                      Log in
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="btn btn-info menu--btn" to="/">
                      Sign Up
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
