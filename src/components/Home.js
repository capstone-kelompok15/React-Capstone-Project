import React from "react";
import Image1 from "../assets/image/Image1.png";
import Image2 from "../assets/image/Image2.png";

const Home = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-auto">
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
          <img class="my-image" src={Image1} alt="Logo" />
          <img class="my-image" src={Image2} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
