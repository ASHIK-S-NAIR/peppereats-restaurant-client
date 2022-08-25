import React, { useState } from "react";
import closeIcon from "assets/images/icons/close.svg";
import "./style.css";

import { isAuthenticated } from "api/auth";
import { deleteCustomer } from "api/customer";

const DeleteCustomer = ({ customer, setSubSection }) => {
  const [deleteValue, setDeleteValue] = useState("");

  const { admin, token } = isAuthenticated();

  const onSubmit = async () => {
    try {
      const data = await deleteCustomer(customer._id, admin._id, token);
      if (data.error) {
        return console.log(data.error);
      } else {
        return setSubSection("");
      }
    } catch (error) {
      return console.log(error);
    }
  };
  return (
    <div className="deleteCustomer-section">
      <div className="cover-bg">
        <div className="subSection delete-subSection deleteCustomer-subSection">
          <div className="subSection-header-section">
            <h3 className="subSection-header">Delete Customer</h3>
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
            <div className="subSection-body-details-detail-section">
              <p className="subSection-body-details-p">
                This action <span>cannot</span> be undone. This will permanently
                delete the{" "}
                <span>{`${customer.customerFirstName} ${customer.customerLastName}`}</span>{" "}
                Customer from your database.
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <p className="subSection-body-details-p">
                Please type{" "}
                <span>{`${customer.customerFirstName} ${customer.customerLastName}-${customer._id}`}</span>{" "}
                to confirm.
              </p>
              <input
                type="text"
                id="addCustomer-CustomerName"
                value={deleteValue}
                onChange={(e) => setDeleteValue(e.target.value)}
                className="subSection-body-form-input"
              />
            </div>
            <div className="subSection-body-form-btn-section">
              <button
                className={`btn subSection-body-form-btn ${
                  deleteValue ===
                  customer.customerFirstName + " "+
                    customer.customerLastName +
                    "-" +
                    customer._id
                    ? ""
                    : "btn-unclickable"
                } `}
                onClick={onSubmit}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteCustomer;
