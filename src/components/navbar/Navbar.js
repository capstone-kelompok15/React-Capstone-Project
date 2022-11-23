import React from "react";
import { Link } from "react-router-dom";
import CobaGratis from '../../pages/CobaGratis';


function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-2 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fs-2"  to="/">
          {/* <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
      Bootstrap */}
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
