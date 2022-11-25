import React from "react";
import fleksibel from "../assets/image/fleksibel.png";
import kirim from "../assets/image/kirim.png";
import terpusat from "../assets/image/terpusat.png";
import myproject from "../assets/image/myproject.png";
import checkbox from "../assets/image/checkbox.png";
import hp from "../assets/image/hp.png";

const Fitur = () => {
  return (
    <div>
      <section id="fiturr" class="padd-section text-center" />
      <div class="fitur">
        <div class="container" data-aos="fade-up">
          <div class="section-title text-center pt-5">
            <h1 class="font2"> Lebih efisien dengan menggunakan MyINVOICE </h1>
            <p class="separator">
              {" "}
              MyINVOICE menyediakan fitur-fitur komprehensif yang memudahkan
              berbagai kebutuhan bisnis{" "}
            </p>
          </div>
        </div>

        <div class="container pb-5 d-flex justify-content-center">
          <div class="row">
            <div
              class="col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="feature-block">
                <img class="pic" src={terpusat} alt="img" />
                <h4 class="title4">Pengelolaan Terpusat</h4>
                <p>
                  Tak perlu lagi pusing mencari data untuk setiap invoice di
                  berbagai tempat
                </p>
              </div>
            </div>

            <div
              class="col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="feature-block">
                <img class="pic" src={kirim} alt="img" />
                <h4 class="title4">Kirim Invoice Tepat Waktu</h4>
                <p>
                  Tidak ada lagi lupa kirim sehingga telat menerima pembayaran
                </p>
              </div>
            </div>

            <div
              class="col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="feature-block">
                <img class="pic" src={fleksibel} alt="img" />
                <h4 class="title4">Fleksibel</h4>
                <p>Perbedaan metode pembayaran tidak jadi masalah</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6 md-6">
            <h1 class="text5">Praktis dengan berbagai fitur untuk penagihan</h1>
            <ul class="list-group">
              <li class="list-item ms-3">
              <img class="check me-3" src={checkbox} alt="img" />
                Penagihan praktis dari satu dasbor dengan fitur email atau link
                faktur. Lengkap dengan pesan yang bisa dimodifikasi.
              </li>
              <li class="list-item ms-3">
              <img class="check me-3" src={checkbox} alt="img" />
                Kirim tepat waktu dengan menjadwalkan pengiriman invoice secara
                otomatis maupun berulang.
              </li>
              <li class="list-item ms-3">
              <img class="check me-3" src={checkbox} alt="img" />
                Fleksibel dengan opsi pembayaran menggunakan berbagai platform
                hingga payment gateway
              </li>
            </ul>
          </div>
          <div class="col-lg-6 md-5">
            <img class="my-image3 ms-5" src={myproject} alt="project" />
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row">
        <div class="col-lg-6 md-5">
            <img class="my-image4 ms-5 mt-5" src={hp} alt="project" />
          </div>
          <div class="col-lg-6 md-6">
            <h1 class="text6">Terima invoie mudah dengan MyINVOICE mobile</h1>
            <ul class="list-group">
              <li class="list-item ms-3">
              <img class="check me-3" src={checkbox} alt="img" />
              Penerimaan invoice praktis dengan satu aplikasi mobile. Lengkap dengan detail dari invoice yang dapat disimpan
              </li>
              <li class="list-item ms-3">
              <img class="check me-3" src={checkbox} alt="img" />
              Notifikasi pembayaran sehingga tidak ada lagi pembayaran invoice yang terlewat ataupun menunggak
              </li>
              <li class="list-item ms-3">
              <img class="check me-3" src={checkbox} alt="img" />
              Fleksibel dengan opsi pembayaran menggunakan berbagai platform hingga payment gateway
              </li>
            </ul>
            <button class="download button-lg-primary">Download Sekarang</button>
          </div>
          
        </div>
      </div>

      <section />
    </div>
  );
};

export default Fitur;
