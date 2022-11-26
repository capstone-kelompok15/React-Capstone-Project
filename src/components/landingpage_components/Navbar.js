import React from "react";
import { useNavigate } from "react-router-dom";
import Symbol from "../../assets/image/Symbol.png";

const Navbar = () => {

  const navigate = useNavigate();

  const cobaGratisOnClick = () => {
    navigate('/login');
  }

  return (
    <nav class="navbar sticky-top navbar-expand-lg bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img
            src={Symbol}
            alt="Logo"
            width="32"
            height="32"
            class="img-fluid me-2"
          />
          My<span class="span-invoice">INVOICE</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item mx-3">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#fitur">
                Fitur
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="/">
                Testimoni
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="/">
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
