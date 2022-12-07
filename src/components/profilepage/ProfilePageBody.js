import React from "react";
import Myprofile from "../../assets/image/Myprofile.png";
// import Pencil from "../../assets/image/Pencil.png";

const ProfilePageBody = () => {
  return (
    <div className="container-fluid bg-color">
      <div className="container py-3 px-3">
        <h1 className="profile">My Profile</h1>
        <div className="row">
          <div className="col-md-2">
            <div>
              <img className="img-profile" src={Myprofile} alt="img" />
            </div>
            <div>
              <button className="button-profile">Change Avatar</button>
            </div>
          </div>

          <div className="col-md-10">
            <div className="row mx-4">
              <div className="col-md-4">
                <label className="label-profile" for="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="name form-control"
                  placeholder="Alvin"
                ></input>
              </div>
              <div className="col-md-4">
                <label className="label-profile" for="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="name form-control"
                  placeholder="Wiraprathama"
                ></input>
              </div>
              <div className="col-md-6 mx-1 mt-3">
                <label className="label-profile" for="email">
                  Email
                </label>
                <input
                  type="email"
                  className="email form-control"
                  placeholder="wiraprathamaalvin@gmail.com"
                  id="email"
                ></input>
              </div>
            </div>
          </div>
        </div>

        <h1 className="profile mt-3">Merchant Details</h1>
        <div className="row">
          <div className="col-md-5">
            <label className="label-profile" for="merchantName">
              Merchant Name
            </label>
            <input
              type="text"
              id="merchantName"
              className="merchant form-control"
              placeholder=" Toko Sejahtera"
            ></input>
          </div>
          <div className="col-md-5 mx-4">
            <label className="label-profile" for="bank-primary">
              Primary Bank Account
            </label>
            <input
              type="text"
              id="bank-primary"
              className="merchant form-control"
              placeholder="712312827"
            ></input>
          </div>
          <div className="col-md-5 mt-3">
            <label className="label-profile" for="merchantAddress">
              Merchant Address
            </label>
            <input
              type="text"
              id="merchantAddress"
              className="merchant form-control"
              placeholder=" Jalan Sumatra no 2"
            ></input>
          </div>
          <div className="col-md-5 mx-4 mt-3">
            <label className="label-profile" for="bank-additional">
              Additional Bank Account
            </label>
            <input
              type="text"
              id="bank-additional"
              className="merchant form-control"
              placeholder="Add bank for your account"
            ></input>
          </div>
          <div className="col-md-5 mt-3">
            <label className="label-profile" for="phoneNumber">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="merchant form-control"
              placeholder="0821338102989"
            ></input>
          </div>
        </div>

        <h1 className="profile mt-4">Change Password</h1>
        <div className="row mb-4">
          <div className="col-md-3">
            <label className="label-profile" for="currentPassword">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              className="password form-control"
            ></input>
          </div>

          <div className="col-md-3">
            <label className="label-profile" for="newPassword">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="password form-control"
            ></input>
          </div>

          <div className="col-md-3">
            <label className="label-profile" for="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="password form-control"
            ></input>
          </div>

          <div className="col-md-3 button-margin">
            <button type="submit" className="button-password">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageBody;
