import React from "react";

import Image1 from '../assets/image/image1.png'

const Home = () => {
  return (
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6">
          <p class="text1">Kirim invoice lebih cepat dan mudah</p>
          <h1 class="text2">Software Invoice Untuk Semua Jenis Bisnis</h1>
          <p class="text3">
            MyINVOICE merupakan software online yang berguna untuk membantu
            usahamu untuk membuat invoice, mengirim notifikasi pembayaran, serta
            menerima pembayaran dengan lebih cepat dan mudah!
          </p>
          <button class="button-lg-primary">Coba Gratis</button>
        </div>
        <div class="col-md-5">
          <div class="box1"></div>
          
          <img class="my-image1 ms-5 ps-2" src={Image1} alt="Logo" />
        </div>

      </div>

      <div class="section-title1 text-center pt-5">
        <h1 class="font1">Ratusan bisnis telah menggunakan MyINVOICE </h1>
          </div>
    </div>
  );
};

export default Home;
