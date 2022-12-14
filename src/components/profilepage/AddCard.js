import React from "react";

const AddCard = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="container kotak">
        <p className="text-center py-3">Add new bank account</p>
        <hr />
        <div className="row">
          <form>
            <div>
              <label for="bankName">Bank Name</label>
              <div class="dropdown">
                <a
                  class="btn btn-outline-dark dropdown-toggle form-control"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Choose Your Bank
                </a>
                <ul class="dropdown-menu form-control">
                  <li>
                    <a class="dropdown-item" href="/">
                      Bank BCA
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Bank BNI
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Bank MANDIRI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-3">
              <label for="cardNumber">Card Number</label>
              <input
                type="number"
                className="form-control"
                id="cardNumber"
                placeholder="1234-5678-900"
              ></input>
            </div>

            <div className="mt-3">
              <label for="cardHolderName">Card Holder Name</label>
              <input
                type="text"
                className="form-control"
                id="cardHolderName"
                placeholder="e.g Alvin W"
              ></input>
            </div>

            <div className="mt-3">
              <button type="submit" className="form-control btn btn-primary">
                Add Card
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
