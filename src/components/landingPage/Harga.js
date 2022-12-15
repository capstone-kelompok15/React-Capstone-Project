import React from "react";
import checkbox from "../../assets/image/checkboxfix.png";
import crossbox from "../../assets/image/crossboxfix.png";


const Hargaa = () => {
  return (
    <div id="harga">
      <div className="harga">
        <div className="container">
          <div className="section-title text-center pt-5">
            <h1 className="font2 pb-5">
              {" "}
              Pilih paket sesuai dengan kebutuhan anda{" "}
            </h1>
          </div>
        </div>

        <div className="container pb-5 d-flex justify-content-center">
          <div className="row">
            <div
              className="col-md-6 col-lg-4 pb-5 mb-5"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="price-block">
                <h4 className="text13">Beginner</h4>
                <h2 className="text14 pt-3">100K/bulan</h2>
                <p className="text15 pt-3">Cocok untuk pemula</p>
                <hr />
                <ul className="list-group">
                  <li className="list-item ms-3 mb-1">
                    <div className="row">
                      <div className="list col-sm-1">
                        <img className="check2 me-3" src={checkbox} alt="img" />
                      </div>
                      <div className="text16 item-text col-sm">
                        Invoice tak terbatas
                      </div>
                    </div>
                  </li>
                  <li className="list-item ms-3 mb-1">
                    <div className="row">
                      <div className="list col-sm-1">
                        <img className="check2 me-3" src={checkbox} alt="img" />
                      </div>
                      <div className="text16 item-text col-sm">
                        Satu dashboard kendali
                      </div>
                    </div>
                  </li>
                  <li className="list-item ms-3 mb-1">
                    <div className="row">
                      <div className="list col-sm-1">
                        <img className="check3 me-3" src={crossbox} alt="img" />
                      </div>
                      <div className="text16 item-text col-sm">
                        Sistem pelacakan
                      </div>
                    </div>
                  </li>
                  <li className="list-item ms-3 mb-1">
                    <div className="row">
                      <div className="list col-sm-1">
                        <img className="check3 me-3" src={crossbox} alt="img" />
                      </div>
                      <div className="text16 item-text col-sm">
                        Modifikasi Template
                      </div>
                    </div>
                  </li>
                </ul>
                <button className="paket button-lg-primary mt-3">Pilih Paket</button>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="price-block">
                <h4 className="text13">Advanced</h4>
                <h2 className="text14 pt-3">150K/bulan</h2>
                <p className="text15 pt-3">Cocok untuk pemula</p>
                <div className="bgcolor">
                  <p className="text17 pt-3">Terbaik</p>
                </div>
                <hr />
                <ul className="list-group">
                  <li className="list-item ms-3 mb-1">
                    <div className="row">
                      <div className="list col-sm-1">
                        <img className="check2 me-3" src={checkbox} alt="img" />
                      </div>
                      <div className="text16 item-text col-sm">
                        Invoice tak terbatas
                      </div>
                    </div>
                  </li>
                  <li className="list-item ms-3 mb-1">
                    <div className="row">
                      <div className="list col-sm-1">
                        <img className="check2 me-3" src={checkbox} alt="img" />
                      </div>
                      <div className="text16 item-text col-sm">
                        Satu dashboard kendali
                      </div>
                    </div>
                  </li>
                  <li className="list-item ms-3 mb-1">
                    <div className="row">
                      <div className="list col-sm-1">
                        <img className="check2 me-3" src={checkbox} alt="img" />
                      </div>
                      <div className="text16 item-text col-sm">
                        Sistem pelacakan
                      </div>
                    </div>
                  </li>
                  <li className="list-item ms-3 mb-1">
                    <div className="row">
                      <div className="list col-sm-1">
                        <img className="check3 me-3" src={crossbox} alt="img" />
                      </div>
                      <div className="text16 item-text col-sm">
                        Modifikasi Template
                      </div>
                    </div>
                  </li>
                </ul>
                <button className="paket button-lg-primary mt-3">Pilih Paket</button>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="price-block">
                <h4 className="text13">Expert</h4>
                <h2 className="text14 pt-3">300K/bulan</h2>
                <p className="text15 pt-3">Cocok untuk pemula</p>
                <hr />
                <ul className="list-group">
                  <li className="list-item ms-3 mb-1">
                    <div className="row">
                      <div className="list col-sm-1">
                        <img className="check2 me-3" src={checkbox} alt="img" />
                      </div>
                      <div className="text16 item-text col-sm">
                        Invoice tak terbatas
                      </div>
                    </div>
                  </li>
                  <li className="list-item ms-3 mb-1">
                    <div className="row">
                      <div className="list col-sm-1">
                        <img className="check2 me-3" src={checkbox} alt="img" />
                      </div>
                      <div className="text16 item-text col-sm">
                        Satu dashboard kendali
                      </div>
                    </div>
                  </li>
                  <li className="list-item ms-3 mb-1">
                    <div className="row">
                      <div className="list col-sm-1">
                        <img className="check2 me-3" src={checkbox} alt="img" />
                      </div>
                      <div className="text16 item-text col-sm">
                        Sistem pelacakan
                      </div>
                    </div>
                  </li>
                  <li className="list-item ms-3 mb-1">
                    <div className="row">
                      <div className="list col-sm-1">
                        <img className="check2 me-3" src={checkbox} alt="img" />
                      </div>
                      <div className="text16 item-text col-sm">
                        Modifikasi Template
                      </div>
                    </div>
                  </li>
                </ul>
                <button className="paket button-lg-primary mt-3">Pilih Paket</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hargaa;
