import { customerLoginVerify, customerSignupVerify } from "api/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCustomerStore from "setup/state-manager/customerStore";
import useReservationStore from "setup/state-manager/reservationStore";
import "./style.css";

const OtpVerify = () => {
  const [userOtp, setUserOtp] = useState(0);

  const Navigate= useNavigate(); 

  const {
    customerPhoneNumber,
    customerFirstName,
    customerLastName,
    customerEmail,
    customerIsCustomer,
  } = useCustomerStore((state) => ({
    customerPhoneNumber: state.customerPhoneNumber,
    customerFirstName: state.customerFirstName,
    customerLastName: state.customerLastName,
    customerEmail: state.customerEmail,
    customerIsCustomer: state.customerIsCustomer,
  }));

  // reservationCustomer: "string";
  //     reservationTable: "string";
  //     reservationTime: "string";
  //     reservationOrder: "array";

  const { reservationTable, reservationTime, reservationOrders } =
    useReservationStore((state) => ({
      reservationTable: state.reservationTable,
      reservationTime: state.reservationTime,
      reservationOrders: state.reservationOrders,
    }));

  const onSubmit = async (event) => {
    event.preventDefault();
    const userPhoneNumber = customerPhoneNumber;
    console.log("typeof customerPhoneNumberOTP", typeof userPhoneNumber);
    console.log("typeof customerOTPOTp", typeof userOtp);
    try {
      if (customerIsCustomer === true) {
        const data = await customerLoginVerify(userPhoneNumber, userOtp, reservationTable, reservationTime, reservationOrders);

        if (data.error) {
          return console.log(data.error);
        }
      } else {
        const userFirstName = customerFirstName;
        const userLastName = customerLastName;
        const userEmail = customerEmail;
        const data = await customerSignupVerify(
          userPhoneNumber,
          userFirstName,
          userLastName,
          userEmail,
          userOtp,
          reservationTable, reservationTime, reservationOrders
        );

        if (data.error) {
          return console.log(data.error);
        }
        console.log(data);
      }
      return Navigate("/");
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
              <button
                className="btn form-button"
                type="submit"
                onClick={onSubmit}
              >
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
