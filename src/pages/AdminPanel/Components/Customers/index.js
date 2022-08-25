import React, { useState, useEffect } from "react";
import { getAllCustomers } from "api/customer";

import ViewIcon from "assets/images/temp/View.svg";
import EditIcon from "assets/images/temp/Edit.svg";
import RemoveIcon from "assets/images/temp/Remove.svg";
import { isAuthenticated } from "api/auth";
import ViewCustomer from "./Components/ViewCustomer";
import DeleteCustomer from "./Components/DeleteCustomer";
import UpdateCustomer from "./Components/UpdateCustomer";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [subSection, setSubSection] = useState("");
  const [customer, setCustomer] = useState();

  const { admin, token } = isAuthenticated();

  const loadCustomers = async () => {
    try {
      const data = await getAllCustomers(admin._id, token);
      if (data.error) {
        return console.log(data.error);
      } else {
        return setCustomers(data);
      }
    } catch (error) {
      return console.log(error);
    }
  };

  const handleUpdate = (customer) => {
    return setSubSection("updateCustomer"), setCustomer(customer);
  };

  const handleDelete = (customer) => {
    return setSubSection("deleteCustomer"), setCustomer(customer);
  };

  const handleView = (customer) => {
    return setSubSection("viewCustomer"), setCustomer(customer);
  };

  useEffect(() => {
    loadCustomers();
  }, [subSection]);

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
              <th className="adminPanel-right-table-head-value">
                Reservations
              </th>
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
                      {customer.customerReservation.length}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      <button className="adminPanel-right-table-button">
                        <img
                          src={ViewIcon}
                          alt=""
                          className="adminPanel-right-table-icon "
                          onClick={() => handleView(customer)}
                        />
                      </button>
                      <button className="adminPanel-right-table-button">
                        <img
                          src={EditIcon}
                          alt=""
                          className="adminPanel-right-table-icon "
                          onClick={() => handleUpdate(customer)}
                        />
                      </button>
                      <button className="adminPanel-right-table-button">
                        <img
                          src={RemoveIcon}
                          alt=""
                          className="adminPanel-right-table-icon "
                          onClick={() => handleDelete(customer)}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {subSection === "viewCustomer" && (
        <ViewCustomer customer={customer} setSubSection={setSubSection} />
      )}
      {subSection === "deleteCustomer" && (
        <DeleteCustomer customer={customer} setSubSection={setSubSection} />
      )}
      {subSection === "updateCustomer" && (
        <UpdateCustomer customer={customer} setSubSection={setSubSection} />
      )}
    </section>
  );
};

export default Customers;
