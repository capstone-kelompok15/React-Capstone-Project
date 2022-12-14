import React from "react";
import Myprofile from "../../assets/image/Myprofile.png";
import Bca from "../../assets/image/Bca.png";
import Pencil from "../../assets/image/Pencil.png";
import Tambah from "../../assets/image/Tambah.png";

const ProfilePageBody = () => {
  return (
    // Profile page
    <div className="body-profile container-fluid">
      <div className="container">
        <h1 class="text-profile">My Profile</h1>
        <hr />
        <form>
          <div className="row">
            <div className="col-6">
              <div>
                <label className="label-text" for="username">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Alvinwira"
                  required
                  className="form-profile form-control mt-2"
                ></input>
              </div>

              <div className="mt-2">
                <label className="label-text" for="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="wiraprathamaalvin@gmail.com"
                  required
                  className="form-profile form-control mt-2"
                ></input>
              </div>

              <div className="mt-3 col-4">
                <button
                  className="button-profile form-control"
                  type="submit"
                  name="update"
                >
                  Update Profile
                </button>
              </div>
            </div>

            <div className="col-4 mx-4">
              <div className="row">
                <div>
                  <label className="label-text">Profile Picture</label>
                  <div>
                    <img src={Pencil} alt="pencil" class="pencil" />
                    <button
                      type="submit"
                      class="button-edit"
                      alt="edit"
                      name="edit"
                    >
                      Edit
                    </button>
                    <img src={Myprofile} alt="myprofile" class="img-profile" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/*  End of Profile Page */}
      {/* Merchant Detail */}
      <div class="container">
        <h1 class="text-merchant mt-3">Merchant Details</h1>
        <hr />
        <form>
          <div className="row">
            <div className="col-4">
              <label className="label-text" for="merchantName">
                Merchant Name
              </label>
              <input
                type="text"
                className="form-merchant form-control mt-2"
                id="merchantName"
                name="merchantName"
                placeholder="Toko Sejahtera"
              ></input>
            </div>
            <div className="col-4 mx-4">
              <label for="primaryBank">Primary Bank Account</label>
              <div>
                <img src={Bca} alt="bca" class="bca" />
                <input
                  type="number"
                  className="form-primary form-control mt-2"
                  placeholder="712312827"
                  id="primaryBank"
                  name="primaryBank"
                ></input>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-4">
              <label className="label-text" for="merchantAddress">
                Merchant Address
              </label>
              <input
                type="text"
                className="form-merchant form-control mt-2"
                placeholder="Jalan Sumatra no 2"
                id="merchantAddress"
                name="merchantAddress"
              ></input>
            </div>
            <div className="col-4 mx-4">
              <label className="label-text" for="additionalBank">
                Additional Bank Account
              </label>
              <div>
                <img src={Tambah} alt="tambah" class="tambah" />
                <input
                  type="text"
                  className="form-merchant form-control mt-2"
                  placeholder="Add Bank for your account"
                  id="additionalBank"
                  name="additionalBank"
                ></input>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-4">
              <label className="label-text" for="phoneNumber">
                Phone Number
              </label>
              <input
                type="number"
                className="form-merchant form-control mt-2"
                placeholder="0821338102989"
                id="phoneNumber"
                name="phoneNumber"
              ></input>
            </div>
          </div>

          <div className="col-4 mt-3">
            <button
              type="submit"
              className="button-merchant"
              name="updateDetails"
            >
              Update Details
            </button>
          </div>
        </form>
      </div>
      {/* End of Merchants */}
      <div class="container">
        <h1 className="text-password mt-3">Change Password</h1>
        <hr />
        <div className="row mt-3">
          <div className="col-4">
            <label className="label-text" for="currentPassword">
              Current Password
            </label>
            <input
              type="password"
              className="form-password form-control mt-2"
              placeholder="********"
              id="currentPassword"
              name="currentPassword"
            ></input>
          </div>
          <div className="col-4">
            <label className="label-text" for="newPassword">
              New Password
            </label>
            <input
              type="password"
              className="form-password form-control mt-2"
              placeholder="********"
              id="newPassword"
              name="newPassword"
            ></input>
          </div>
          <div className="col-4">
            <label className="label-text" for="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-password form-control mt-2"
              placeholder="********"
              id="confirmPassword"
              name="confirmPassword"
            ></input>
          </div>
          <div className="col-4 mt-3">
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
