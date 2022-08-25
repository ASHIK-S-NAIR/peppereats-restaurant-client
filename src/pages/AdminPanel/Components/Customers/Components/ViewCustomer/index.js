import React from "react";
import closeIcon from "assets/images/icons/close.svg";
import moment from "moment";
import "./style.css";

const ViewCustomer = ({ customer, setSubSection }) => {
  return (
    <div className="viewCustomer-section">
      <div className="cover-bg">
        <div className="subSection viewCustomer-subSection">
          <div className="subSection-header-section">
            <h3 className="subSection-header">Customer Details</h3>
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

          <div className="subSection-body-section">
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewcustomer-customerName"
                className="subSection-body-details-label"
              >
                Customer Name
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewcustomer-customerName"
              >
                {`${customer.customerFirstName } ${customer.customerLastName}`}
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewcustomer-customerId"
                className="subSection-body-details-label"
              >
                Customer Id
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewcustomer-customerId"
              >
                {customer._id}
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewcustomer-customerMenuList"
                className="subSection-body-details-label"
              >
                Customer PhoneNumber
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewcustomer-customerId"
              >
                {customer.customerPhoneNumber}
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewcustomer-customerMenuList"
                className="subSection-body-details-label"
              >
                Customer Email
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewcustomer-customerId"
              >
                {customer.customerEmail}
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewcustomer-customerMenuList"
                className="subSection-body-details-label"
              >
                Customer Reservation
              </label>
              {customer.customerReservation.length !== 0 ? (
                customer.customerReservation.map((reservation) => {
                  return (
                    <p
                      className="subSection-body-details-detail"
                      id="viewcustomer-customerMenuList"
                    >
                      {reservation}
                    </p>
                  );
                })
              ) : (
                <p
                  className="subSection-body-details-detail"
                  id="viewcustomer-customerMenuList"
                >
                  0
                </p>
              )}
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewcustomer-customerCreatedOn"
                className="subSection-body-details-label"
              >
                Customer CreatedOn
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewcustomer-customerCreatedOn"
              >
                {moment(customer.createdAt).format("DD-MMM-yyyy")}
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewcustomer-customerUpdatedOn"
                className="subSection-body-details-label"
              >
                Customer UpdatedOn
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewcustomer-customerUpdatedOn"
              >
                {moment(customer.updatedAt).format("DD-MMM-yyyy")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCustomer;
