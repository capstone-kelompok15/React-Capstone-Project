import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Symbol from "../../assets/image/Symbol.png";
import { activeNavItem } from "../../redux/reducers/navbarSlice";

const Navbar = () => {

  const navigate = useNavigate();

  const currentActiveNavItem = useSelector(activeNavItem);

  const cobaGratisOnClick = () => {
    navigate('/register');
  }

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={Symbol}
            alt="Logo"
            width="32"
            height="32"
            className="img-fluid me-2"
          />
          My<span className="span-invoice">INVOICE</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-3">
              <a className={`nav-link ${currentActiveNavItem === 'home' ? 'active' : ''}`} aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className={`nav-link ${currentActiveNavItem === 'fitur' ? 'active' : ''}`} href="#fitur">
                Fitur
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className={`nav-link ${currentActiveNavItem === 'testimoni' ? 'active' : ''}`} href="#testimoni">
                Testimoni
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className={`nav-link ${currentActiveNavItem === 'harga' ? 'active' : ''}`} href="#harga">
                Harga
              </a>
            </li>
          </ul>
          <button class="button-primary" onClick={cobaGratisOnClick}>Coba Gratis</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
