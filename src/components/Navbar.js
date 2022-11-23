import React from "react";
import { Link } from "react-router-dom";
import CobaGratis from "./CobaGratis";
import logo from '../assets/logo.png';


function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-2 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fs-2"  to="/">
            <img style={{width: 150, height: 60}} src={logo} className="App-logo" alt="logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fitur">
                  Fitur
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/testimoni">
                  Testimoni
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/harga">
                  Harga
                </Link>
              </li>
            </ul>
          </div>
          <CobaGratis/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
