import React, { useState } from "react";
import "./style.css";

const CustomerLogin = () => {
  const [userPhoneNumber, setUserPhoneNumber] = useState();

  const onSubmit = async () => {
    //
  };

  return (
    <section className="customerLogin-section sec-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-aos="fade-up">Customer Login</h2>
          </div>
        </div>
        <div className="row">
          <form className="customerLogin-form form" onSubmit={onSubmit}>
            <div className="form-input-sec">
              <label htmlFor="" className="form-label">
                Enter Phone Number
              </label>
              <input
                type="number"
                className="form-input"
                value={userPhoneNumber}
                onChange={(e) => setUserPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-input-sec">
              <button className="btn form-button" onClick={onSubmit}>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogin;
