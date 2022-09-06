import React, { useState } from "react";
import { customerLoginOtp } from "api/auth";
import { useNavigate } from "react-router-dom";
import useCustomerStore from "setup/state-manager/customerStore";
import "./style.css";

const CustomerLogin = () => {

  const { customerPhoneNumber, setCustomerPhoneNumber, setCustomerIsCustomer } =
    useCustomerStore((state) => ({
      customerPhoneNumber: state.customerPhoneNumber,
      setCustomerPhoneNumber: state.setCustomerPhoneNumber,
      setCustomerIsCustomer: state.setCustomerIsCustomer,
    }));

  const Navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await customerLoginOtp(customerPhoneNumber);
      if (data.error) {
        return console.log(data.error);
      }
      if (data.isCustomer === false) {
        return Navigate("/customersignup");
      }

      setCustomerIsCustomer(true);
      return Navigate("/otpverify");
    } catch (error) {
      return console.log(error);
    }
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
                value={customerPhoneNumber}
                onChange={(e) => setCustomerPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-input-sec">
              <button
                className="btn form-button"
                type="submit"
                onClick={onSubmit}
              >
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
