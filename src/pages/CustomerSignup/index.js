import { customerSignupOtp } from "api/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCustomerStore from "setup/state-manager/customerStore";
import "./style.css";

const CustomerSignup = () => {
  const {
    customerPhoneNumber,
    setCustomerFirstName,
    setCustomerLastName,
    setCustomerEmail,
  } = useCustomerStore((state) => ({
    customerPhoneNumber: state.customerPhoneNumber,
    setCustomerFirstName: state.customerFirstName,
    setCustomerLastName: state.customerLastName,
    setCustomerEmail: state.customerEmail,
  }));

  const [values, setValues] = useState({
    userPhoneNumber: customerPhoneNumber,
    userFirstName: "",
    userLastName: "",
    userEmail: "",
  });

  const { userPhoneNumber, userFirstName, userLastName, userEmail } = values;

  const Navigate = useNavigate();

  const onSubmit = async (event) => {
    console.log("enter");
    event.preventDefault();

    setCustomerFirstName(userFirstName);
    setCustomerLastName(userLastName);
    setCustomerEmail(userEmail);

    try {
      const data = await customerSignupOtp(userPhoneNumber);
      if (data.error) {
        return console.log(data.error);
      }

      return Navigate("/otpverify");
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <section className="customerSignup-section sec-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-aos="fade-up">How should we great You</h2>
          </div>
        </div>
        <div className="row">
          <form className="customerSignup-form form" onSubmit={onSubmit}>
            <div className="form-input-sec">
              <label htmlFor="" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-input"
                value={userFirstName}
                onChange={(e) =>
                  setValues({ ...values, userFirstName: e.target.value })
                }
              />
            </div>
            <div className="form-input-sec">
              <label htmlFor="" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-input"
                value={userLastName}
                onChange={(e) =>
                  setValues({ ...values, userLastName: e.target.value })
                }
              />
            </div>
            <div className="form-input-sec">
              <label htmlFor="" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-input"
                value={userEmail}
                onChange={(e) =>
                  setValues({ ...values, userEmail: e.target.value })
                }
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

export default CustomerSignup;
