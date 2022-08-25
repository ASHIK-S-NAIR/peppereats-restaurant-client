import React, { useState, useEffect } from "react";
import { getAllMenu } from "api/menu";
import moment from "moment";

import ViewIcon from "assets/images/temp/View.svg";
import EditIcon from "assets/images/temp/Edit.svg";
import RemoveIcon from "assets/images/temp/Remove.svg";
import DeleteMenu from "./Components/DeleteMenu";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [subSection, setSubSection] = useState("");
  const [menuItem, setMenuItem] = useState();

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

  const handleAdd = () => {
    return setSubSection("addMenu");
  };

  const handleUpdate = (menuItem) => {
    return setSubSection("updateMenu"), setMenuItem(menuItem);
  };

  const handleDelete = (menuItem) => {
    return setSubSection("deleteMenu"), setMenuItem(menuItem);
  };

  const handleView = (menuItem) => {
    return setSubSection("viewMenu"), setMenuItem(menuItem);
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
                      <button className="adminPanel-right-table-button">
                        <img
                          src={ViewIcon}
                          alt=""
                          className="adminPanel-right-table-icon "
                        />
                      </button>
                      <button className="adminPanel-right-table-button">
                        <img
                          src={EditIcon}
                          alt=""
                          className="adminPanel-right-table-icon "
                        />
                      </button>
                      <button
                        className="adminPanel-right-table-button"
                        onClick={() => handleDelete(menuItem)}
                      >
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
      {subSection === "deleteMenu" && (
        <DeleteMenu menu={menuItem} setSubSection={setSubSection} />
      )}
    </section>
  );
};

export default Menu;
