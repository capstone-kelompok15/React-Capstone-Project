import React from "react";
import Person from "../../assets/image/Person.png";
import Vector1 from "../../assets/image/Vector1.png";
import Vector2 from "../../assets/image/Vector2.png";

const Testimoni = () => {
  return (
    <div id="testimoni">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center pt-5">
          <h1 className="text10">Software kami telah membantu banyak pengguna</h1>
        </div>
      </div>
      <div className="row">
        <div className="testi pt-5 pb-5">
        <div className="text-testimoni col-6 offset-1">
        <div className="person">
          <img src={Person} alt="Person" className="img-fluid img-testimoni" />
        </div>
          <p className="text11">
            “ Dengan adanya Invoice, bisnis saya berkembang lebih baik lagi dan
            manajemen keuangan internal lebih terkendali, saya tak pernah merasa
            lebih efisien dari ini!”
          </p>
          <div className="sign">
          <img src={Vector2} alt="Vector2" className="vector2 img-fluid mx-2" />
          <img src={Vector1} alt="Vector1" className="vector1 img-fluid" />
          <p className="text12">Wayan Kulkas Pemilik UMKM BeeKella</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimoni;
