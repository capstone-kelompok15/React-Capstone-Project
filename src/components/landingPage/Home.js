import React from "react";

import Image1 from "../../assets/image/image1.png";

const Home = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <p className="text1">Kirim invoice lebih cepat dan mudah</p>
          <h1 className="text2">Software Invoice Untuk Semua Jenis Bisnis</h1>
          <p className="text3">
            MyINVOICE merupakan software online yang berguna untuk membantu
            usahamu untuk membuat invoice, mengirim notifikasi pembayaran, serta
            menerima pembayaran dengan lebih cepat dan mudah!
          </p>
          <button className="button-lg-primary">Coba Gratis</button>
        </div>
        <div className="col-md-5">
          <div className="box1">
            <img className="my-image1 ms-5 ps-2" src={Image1} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="section-title1 text-center pt-5">
        <h1 className="font1">Ratusan bisnis telah menggunakan MyINVOICE </h1>
      </div>
    </div>
  );
};

export default Home;
