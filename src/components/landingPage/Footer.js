import React from "react";
import Symbol1 from "../../assets/image/Symbol1.png";
import Facebook from "../../assets/image/Facebook.png";
import Instagram from "../../assets/image/Instagram.png";
import Twitter from "../../assets/image/Twitter.png";
import Whatsapp from "../../assets/image/Whatsapp.png";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container my-auto">
        <div className="row">
          <div className="img-footer col-12 text-center">
          <a className="navbar-brand" href="#home">
            <img
              src={Symbol1}
              alt="Logo"
              width="30"
              height="30"
              className="img-fluid me-2"
            />
            My<span className="spanfooter">INVOICE</span>
            </a>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-3 offset-1">
            <p className="text7">Tentang MyINVOICE</p>
          </div>
          <div className="col-md-3 offset-1">
            <p className="text8">Terms of Service</p>
          </div>
          <div className="col-md-3 offset-1">
            <p className="text9">Privacy Policy</p>
          </div>
        </div>
        <div className="row">
          <div className="social-media col-12 d-flex justify-content-center ">
            <img src={Facebook} alt="Facebook" width="92" height="92" className="img-fluid"/>
            <img src={Instagram} alt="Instagram" width="92" height="92" className="img-fluid"/>
            <img src={Twitter} alt="Twitter" width="92" height="92" className="img-fluid"/>
            <img src={Whatsapp} alt="Whatsapp" width="92" height="92" className="img-fluid"/>
          </div>
          </div>
          <hr className="line" width="auto" />
        </div>
        <div className="row">
          <div className="col-12"></div>
        </div>
        <div className="row">
          <div className="copy-footer col-12 text-center">
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
