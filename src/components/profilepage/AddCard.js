import React from "react";

const AddCard = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="kotak">
        <p className="text text-center mt-3">Add new bank account</p>
        <div className="col-md-10 offset-md-1">
          <hr className="hr" />
          <div>
            <label className="label" for="bankName">
              Bank Name
            </label>
            <input
              type="text"
              id="bankName"
              className="form-control"
              placeholder="Choose your bank name"
            ></input>
          </div>

          <div>
            <label className="label mt-3" for="cardNumber">
              Card Number
            </label>
            <input
              type="number"
              className="form-control"
              id="cardNumber"
              placeholder="1234-5678-4321"
            ></input>
          </div>

          <div>
            <label className="label mt-3" for="cHN">
              Card Holder Name
            </label>
            <input
              type="number"
              id="cHN"
              className="form-control"
              placeholder="e.g Alvin W"
            ></input>
          </div>

          <div className="mt-3">
            <button className="button-add form-control">Add Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
