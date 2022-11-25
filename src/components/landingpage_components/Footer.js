import React from "react";
import Symbol1 from "../../assets/image/Symbol1.png";

const Footer = () => {
  return (
    <div class="container-fluid footer">
      <div class="row">
        <div class="col-12 text-center">
          <img
            src={Symbol1}
            alt="Logo"
            width="30"
            height="30"
            class="img-fluid"
          />
          My<span>INVOICE</span>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-3 offset-1">
          <p>Tentang MyINVOICE</p>
        </div>
        <div class="col-2 offset-1">
          <p>Terms of Service</p>
        </div>
        <div class="col-3 offset-1">
          <p>Privacy Policy</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <p>
            &copy; Copyright 2022 Kelompok 15 Capstone Project - Alterra Academy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
