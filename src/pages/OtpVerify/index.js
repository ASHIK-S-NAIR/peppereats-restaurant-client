import React, { useState } from "react";
import "./style.css";

const OtpVerify = () => {
  const [userOtp, setUserOtp] = useState("");

  const onSubmit = async () => {
    //
  };

  return (
    <section className="otpVerify-section sec-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-aos="fade-up">Verify OTP</h2>
          </div>
        </div>
        <div className="row">
          <form className="otpVerify-form form" onSubmit={onSubmit}>
            <div className="form-input-sec">
              <label htmlFor="" className="form-label">
                Enter the OTP code
              </label>
              <input
                type="password"
                className="form-input"
                value={userOtp}
                onChange={(e) => setUserOtp(e.target.value)}
              />
            </div>
            <div className="form-input-sec">
              <button className="btn form-button" onClick={onSubmit}>
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OtpVerify;
