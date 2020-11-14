import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <>
      <div className="col-1"></div>
      <div className="col-10">
        <h1 className="center">Member Information</h1>
        <div className="container">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputFirstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputLastName">Last Name</label>
                <input type="ext" className="form-control" id="inputLastName" />
              </div>
            </div>
            <hr />
            <div className="form-row">
              <div className="form-group col-md-2">
                <label for="inputRank">Rank</label>
                <select id="inputRank" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputShield">Shield</label>
                <input type="text" className="form-control" id="inputShield" />
              </div>
              <div className="form-group col-md-2">
                <label for="inputTour">Tour</label>
                <select id="inputTour" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputPlatoon">Platoon</label>
                <select id="inputPlatoon" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputUnit">Unit</label>
                <select id="inputUnit" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputStatus">Duty Status</label>
                <select id="inputStatus" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="State Number">State Number</label>
                <input type="text" className="form-control" id="StateNumber" />
              </div>
              <div className="form-group col-md-4">
                <label for="StateExp">State Expiration Date</label>
                <input type="text" className="form-control" id="StateExp" />
              </div>
              <div className="form-group col-md-4">
                <label for="REMACExp">
                  REMAC Expiration Date (Medics Only)
                </label>
                <input type="text" className="form-control" id="REMACExp" />
              </div>
            </div>
            <hr />
            <div className="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-2">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>State</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              <div className="col-4 form-group">
                <label for="EmerPhone">Phone Number</label>
                <input type="text" className="form-control" id="EmerPhone" />
              </div>
            </div>
            <hr />
            <h1 className="center">Emergency Contact</h1>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputFirstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputLastName">Last Name</label>
                <input type="ext" className="form-control" id="inputLastName" />
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-1">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>State</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-1">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              <div className="col-3 form-group">
                <label for="EmerPhone">Phone Number</label>
                <input type="text" className="form-control" id="EmerPhone" />
              </div>
              <div className="form-group col-md-4">
                <label for="EmerRel">Relationship</label>
                <input type="text" className="form-control" id="EmerRel" />
              </div>
            </div>
            <hr />
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div className="col-1"></div>
    </>
  );
}
