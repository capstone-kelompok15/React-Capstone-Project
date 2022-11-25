import React from "react";
import fleksibel from "../assets/image/fleksibel.png";
import kirim from "../assets/image/kirim.png";
import terpusat from "../assets/image/terpusat.png";
import myproject from "../assets/image/myproject.png";
import checkbox from "../assets/image/checkbox.png";
import hp from "../assets/image/hp.png";

const Fitur = () => {
  return (
    <div id="fitur">
      <section id="get-started" className="padd-section text-center" />
      <div className="fitur">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center pt-5">
            <h1 className="font2"> Lebih efisien dengan menggunakan MyINVOICE </h1>
            <p className="separator">
              {" "}
              MyINVOICE menyediakan fitur-fitur komprehensif yang memudahkan
              berbagai kebutuhan bisnis{" "}
            </p>
          </div>
        </div>

        <div className="container pb-5 d-flex justify-content-center">
          <div className="row">
            <div
              className="col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="feature-block">
                <img className="pic" src={terpusat} alt="img" />
                <h4 className="title4">Pengelolaan Terpusat</h4>
                <p>
                  Tak perlu lagi pusing mencari data untuk setiap invoice di
                  berbagai tempat
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="feature-block">
                <img className="pic" src={kirim} alt="img" />
                <h4 className="title4">Kirim Invoice Tepat Waktu</h4>
                <p>
                  Tidak ada lagi lupa kirim sehingga telat menerima pembayaran
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="feature-block">
                <img className="pic" src={fleksibel} alt="img" />
                <h4 className="title4">Fleksibel</h4>
                <p>Perbedaan metode pembayaran tidak jadi masalah</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 md-6">
            <h1 className="text5">Praktis dengan berbagai fitur untuk penagihan</h1>
            <ul className="list-group">
              <li className="list-item ms-3 mb-3">
                <div className="row">
                  <div className="col-sm-1">
                    <img className="check me-3" src={checkbox} alt="img" />
                  </div>
                  <div className="col-sm">
                    Penagihan praktis dari satu dasbor dengan fitur email atau link
                    faktur. Lengkap dengan pesan yang bisa dimodifikasi.
                  </div>
                </div>
              </li>
              <li className="list-item ms-3 mb-3">
                <div className="row">
                  <div className="col-sm-1">
                    <img className="check me-3" src={checkbox} alt="img" />
                  </div>
                  <div className="col-sm">
                    Kirim tepat waktu dengan menjadwalkan pengiriman invoice secara
                    otomatis maupun berulang.
                  </div>
                </div>
              </li>
              <li className="list-item ms-3 mb-3">
                <div className="row">
                  <div className="col-sm-1">
                    <img className="check me-3" src={checkbox} alt="img" />
                  </div>
                  <div className="col-sm">
                  Fleksibel dengan opsi pembayaran menggunakan berbagai platform
                hingga payment gateway
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 md-5">
            <img className="my-image3 ms-5" src={myproject} alt="project" />
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
        <div className="col-lg-6 md-5">
            <img className="my-image4 ms-5 mt-5" src={hp} alt="project" />
          </div>
          <div className="col-lg-6 md-6">
            <h1 className="text6">Terima invoie mudah dengan MyINVOICE mobile</h1>
            <ul className="list-group">
              <li className="list-item ms-3">
              <img className="check me-3" src={checkbox} alt="img" />
              Penerimaan invoice praktis dengan satu aplikasi mobile. Lengkap dengan detail dari invoice yang dapat disimpan
              </li>
              <li className="list-item ms-3">
              <img className="check me-3" src={checkbox} alt="img" />
              Notifikasi pembayaran sehingga tidak ada lagi pembayaran invoice yang terlewat ataupun menunggak
              </li>
              <li className="list-item ms-3">
              <img className="check me-3" src={checkbox} alt="img" />
              Fleksibel dengan opsi pembayaran menggunakan berbagai platform hingga payment gateway
              </li>
            </ul>
            <button className="download button-lg-primary">Download Sekarang</button>
          </div>
          
        </div>
      </div>

      <section />
    </div>
  );
};

export default Fitur;