import React from "react";
import Myprofile from "../../assets/image/Myprofile.png";
// import Pencil from "../../assets/image/Pencil.png";

const ProfilePageBody = () => {
  return (
    // Profile page
    <div className="container-fluid">
      <div className="container">
        <h1>My Profile</h1>
        <hr />
        <form>
          <div className="row">
            <div className="col-6">
              <div>
                <label for="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Alvinwira"
                  required
                  className="form-control mt-2"
                ></input>
              </div>

              <div className="mt-3">
                <label for="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="wiraprathamaalvin@gmail.com"
                  required
                  className="form-control mt-2"
                ></input>
              </div>

              <div className="mt-3 col-4">
                <button
                  className="form-control bg bg-primary text-white"
                  type="submit"
                  name="update"
                >
                  Update Profile
                </button>
              </div>
            </div>

            <div className="col-4 mx-5">
              <div className="row">
                <div>
                  <label>Profile Picture</label>
                </div>
                <div>
                  <img src={Myprofile} alt="myprofile" class="img-profile" />
                </div>
              </div>
            </div>
          </div>
        </form>
        {/*  End of Profile Page */}
        {/* Merchant Detail */}
        <h1 className="mt-3">Merchant Details</h1>
        <hr />
        <form>
          <div className="row">
            <div className="col-4">
              <label for="merchantName">merchant Name</label>
              <input
                type="text"
                className="form-control mt-2"
                id="merchantName"
                name="merchantName"
                placeholder="Toko Sejahtera"
              ></input>
            </div>
            <div className="col-4">
              <label for="primaryBank">Primary Bank Account</label>
              <input
                type="number"
                className="form-control mt-2"
                placeholder="712312728"
                id="primaryBank"
                name="primaryBank"
              ></input>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-4">
              <label for="merchantAddress">Merchant Address</label>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Jalan sumatra no 2"
                id="merchantAddress"
                name="merchantAddress"
              ></input>
            </div>
            <div className="col-4">
              <label for="additionalBank">Additional Bank Account</label>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Add Bank for your account"
                id="additionalBank"
                name="additionalBank"
              ></input>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-4">
              <label for="phoneNumber">Phone Number</label>
              <input
                type="number"
                className="form-control mt-2"
                placeholder="086788874555"
                id="phoneNumber"
                name="phoneNumber"
              ></input>
            </div>
          </div>

          <div className="col-4 mt-3">
            <button
              type="submit"
              className="btn btn-primary text-white"
              name="updateDetails"
            >
              Update Details
            </button>
          </div>
        </form>
        {/* End of Merchants */}

        <h1 className="mt-3">Change Password</h1>
        <hr />
        <div className="row mt-3">
          <div className="col-4">
            <label for="currentPassword">Current Password</label>
            <input
              type="password"
              className="form-control mt-2"
              placeholder="086788874555"
              id="currentPassword"
              name="currentPassword"
            ></input>
          </div>
          <div className="col-4">
            <label for="newPassword">New Password</label>
            <input
              type="password"
              className="form-control mt-2"
              placeholder="086788874555"
              id="newPassword"
              name="newPassword"
            ></input>
          </div>
          <div className="col-4">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control mt-2"
              placeholder="086788874555"
              id="confirmPassword"
              name="confirmPassword"
            ></input>
          </div>
          <div className="col-4 mt-3">
            <button type="submit" className="btn btn-primary">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageBody;
