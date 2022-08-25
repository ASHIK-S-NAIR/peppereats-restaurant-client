import React, { useState, useEffect } from "react";
import closeIcon from "assets/images/icons/close.svg";
import "./style.css";
import { getCustomer, updateCustomer } from "api/customer";
import { isAuthenticated } from "api/auth";

const UpdateCustomer = ({ customer, setSubSection }) => {
  const [values, setValues] = useState({
    customerFirstName: "",
    customerLastName: "",
    customerPhoneNumber: "",
    customerEmail: "",
  });

  console.log("values", values);

  const {
    customerFirstName,
    customerLastName,
    customerPhoneNumber,
    customerEmail,
  } = values;

  const { admin, token } = isAuthenticated();

  const loadCustomer = async () => {
    try {
      const data = await getCustomer(customer._id, admin._id, token);
      if (data.error) {
        return console.log(data.error);
      } else {
        return setValues({
          ...values,
          customerFirstName: data.customerFirstName,
          customerLastName: data.customerLastName,
          customerPhoneNumber: data.customerPhoneNumber,
          customerEmail: data.customerEmail,
        });
      }
    } catch (error) {
      return console.log(error);
    }
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async () => {
    try {
      const data = await updateCustomer(customer._id, admin._id, values, token);
      if (data.error) {
        return console.log(data.error);
      } else {
        return setSubSection("");
      }
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    loadCustomer();
  }, []);

  return (
    <div className="updateCustomer-section">
      <div className="cover-bg">
        <div className="subSection updateCustomer-subSection">
          <div className="subSection-header-section">
            <h3 className="subSection-header">Update Customer</h3>
            <button
              className="subSection-header-close-btn"
              onClick={() => setSubSection("")}
            >
              <img
                src={closeIcon}
                alt="Close"
                className="subSection-header-close-btn-img"
              />
            </button>
          </div>

          <form className="subSection-body-form" onSubmit={onSubmit}>
            <div className="subSection-body-form-input-section">
              <label
                htmlFor="updateCustomer-CustomerFirstName"
                className="subSection-body-form-label"
              >
                Customer FirstName
              </label>
              <input
                type="text"
                id="updateCustomer-CustomerFisrtName"
                value={customerFirstName}
                onChange={handleChange("customerFirstName")}
                className="subSection-body-form-input"
              />
            </div>
            <div className="subSection-body-form-input-section">
              <label
                htmlFor="updateCustomer-CustomerLastName"
                className="subSection-body-form-label"
              >
                Customer LastName
              </label>
              <input
                type="text"
                id="updateCustomer-CustomerLastName"
                value={customerLastName}
                onChange={handleChange("customerLasttName")}
                className="subSection-body-form-input"
              />
            </div>
            <div className="subSection-body-form-input-section">
              <label
                htmlFor="updateCustomer-CustomerPhoneNumber"
                className="subSection-body-form-label"
              >
                Customer PhoneNumber
              </label>
              <input
                type="text"
                id="updateCustomer-CustomerPhoneNumber"
                value={customerPhoneNumber}
                onChange={handleChange("customerPhoneNumber")}
                className="subSection-body-form-input"
              />
            </div>
            <div className="subSection-body-form-input-section">
              <label
                htmlFor="updateCustomer-CustomerEmail"
                className="subSection-body-form-label"
              >
                Customer Email
              </label>
              <input
                type="text"
                id="updateCustomer-CustomerEmail"
                value={customerEmail}
                onChange={handleChange("customerEmail")}
                className="subSection-body-form-input"
              />
            </div>
            <div className="subSection-body-form-btn-section">
              <button
                className="btn subSection-body-form-btn"
                onClick={onSubmit}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCustomer;
