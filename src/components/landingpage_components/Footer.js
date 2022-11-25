import React from "react";
import Symbol1 from "../../assets/image/Symbol1.png";
import Facebook from "../../assets/image/Facebook.png";
import Instagram from "../../assets/image/Instagram.png";
import Twitter from "../../assets/image/Twitter.png";
import Whatsapp from "../../assets/image/Whatsapp.png";

const Footer = () => {
  return (
    <div class="container-fluid footer">
      <div class="container my-auto">
        <div class="row">
          <div class="img-footer col-12 text-center">
            <img
              src={Symbol1}
              alt="Logo"
              width="30"
              height="30"
              class="img-fluid me-2"
            />
            My<span class="spanfooter">INVOICE</span>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-md-3 offset-1">
            <p class="text7">Tentang MyINVOICE</p>
          </div>
          <div class="col-md-3 offset-1">
            <p class="text8">Terms of Service</p>
          </div>
          <div class="col-md-3 offset-1">
            <p class="text9">Privacy Policy</p>
          </div>
        </div>
        <div class="row">
          <div class="social-media col-12 d-flex justify-content-center ">
            <img src={Facebook} alt="Facebook" width="92" height="92" class="img-fluid"/>
            <img src={Instagram} alt="Instagram" width="92" height="92" class="img-fluid"/>
            <img src={Twitter} alt="Twitter" width="92" height="92" class="img-fluid"/>
            <img src={Whatsapp} alt="Whatsapp" width="92" height="92" class="img-fluid"/>
          </div>
          </div>
          <hr class="line" width="auto" />
        </div>
        <div class="row">
          <div class="col-12"></div>
        </div>
        <div class="row">
          <div class="copy-footer col-12 text-center">
            <p>
              &copy; Copyright 2022 Kelompok 15 Capstone Project - Alterra
              Academy
            </p>
          </div>
        </div>
      </div>
  );
};

export default Footer;
