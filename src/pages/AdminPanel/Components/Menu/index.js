import React, { useState, useEffect } from "react";
import {getAllMenu} from  "api/menu";
import moment from "moment";

import EditIcon from "assets/images/temp/Edit.svg";
import RemoveIcon from "assets/images/temp/Remove.svg";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  const loadMenu = async () => {
    try {
      const data = await getAllMenu();
      if (data.error) {
        return console.log(data.error);
      } else {
        return setMenu(data);
      }
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    loadMenu();
  }, []);

  return (
    <section className="adminPanel-right-section">
      <div className="row">
        <div className="adminPanel-right-header-section">
          <h1 className="adminPanel-right-header">Menu</h1>
          <button className="btn adminPanel-right-addBtn">Add Menu</button>
        </div>
      </div>
      <div className="row">
        <table className="adminPanel-right-table">
          <thead className="adminPanel-right-table-head-sec">
            <tr>
              <th className="adminPanel-right-table-head-value">MenuId</th>
              <th className="adminPanel-right-table-head-value">Name</th>
              <th className="adminPanel-right-table-head-value">Price</th>
              <th className="adminPanel-right-table-head-value">Category</th>
              <th className="adminPanel-right-table-head-value">CreatedOn</th>
              <th className="adminPanel-right-table-head-value">Action</th>
            </tr>
          </thead>
          <tbody className="adminPanel-right-table-body-sec">
            {menu &&
              menu.map((menuItem, index) => {
                return (
                  <tr key={index} className="adminPanel-right-table-body-tr">
                    <td className="adminPanel-right-table-body-value">
                      {menuItem._id}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {menuItem.menuName}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {menuItem.menuPrice}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {menuItem.menuCategory}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {moment(menuItem.createdAt).format("DD-MMM-yyyy")}
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

export default Menu;
