import React, { useState, useEffect } from "react";
import { getAllCustomers } from "api/customer";
import moment from "moment";

import EditIcon from "assets/images/temp/Edit.svg";
import RemoveIcon from "assets/images/temp/Remove.svg";
import { isAuthenticated } from "api/auth";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const {admin, token} = isAuthenticated();

  const loadCustomers = async () => {
    try {
      const data = await getAllCustomers(admin._id, token)
      if (data.error) {
        return console.log(data.error);
      } else {
        return setCustomers(data);
      }
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <section className="adminPanel-right-section">
      <div className="row">
        <div className="adminPanel-right-header-section">
          <h1 className="adminPanel-right-header">Customers</h1>
        </div>
      </div>
      <div className="row">
        <table className="adminPanel-right-table">
          <thead className="adminPanel-right-table-head-sec">
            <tr>
              <th className="adminPanel-right-table-head-value">CustomerId</th>
              <th className="adminPanel-right-table-head-value">Name</th>
              <th className="adminPanel-right-table-head-value">Email</th>
              <th className="adminPanel-right-table-head-value">PhoneNumber</th>
              <th className="adminPanel-right-table-head-value">Reservations</th>
              <th className="adminPanel-right-table-head-value">Action</th>
            </tr>
          </thead>
          <tbody className="adminPanel-right-table-body-sec">
            {customers &&
              customers.map((customer, index) => {
                return (
                  <tr key={index} className="adminPanel-right-table-body-tr">
                    <td className="adminPanel-right-table-body-value">
                      {customer._id}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {customer.customerFirstName}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {customer.customerEmail}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {customer.customerPhoneNumber}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {(customer.customerReservation).length}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      <button>
                        <img
                          src={EditIcon}
                          alt=""
                          className="adminPanel-right-table-icon "
                        />
                      </button>
                      <button>
                        <img
                          src={RemoveIcon}
                          alt=""
                          className="adminPanel-right-table-icon "
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Customers;
