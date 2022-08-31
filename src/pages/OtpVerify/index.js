import { customerLoginVerify } from "api/auth";
import React, { useState } from "react";
import useCustomerStore from "setup/state-manager/customerStore";
import "./style.css";

const OtpVerify = () => {
  const [userOtp, setUserOtp] = useState(0);

  const customerPhoneNumber = useCustomerStore((state) => state.customerPhoneNumber);

  const onSubmit = async (event) => {
    event.preventDefault();
    const userPhoneNumber = customerPhoneNumber
    console.log("typeof customerPhoneNumberOTP", typeof userPhoneNumber)
    console.log("typeof customerOTPOTp", typeof userOtp)
    try {
      const data = await customerLoginVerify(userPhoneNumber , userOtp);
      if(data.error){
        return console.log(data.error);
      }
      return console.log(data);
    } catch (error) {
      console.log(error);
    }
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
                type="number"
                className="form-input"
                value={userOtp}
                onChange={(e) => setUserOtp(e.target.value)}
              />
            </div>
            <div className="form-input-sec">
              <button className="btn form-button" type="submit" onClick={onSubmit}>
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
