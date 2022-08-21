import React, { useState, useEffect } from "react";
import { getCategories } from "api/category";
import moment from "moment";

import EditIcon from "assets/images/temp/Edit.svg";
import RemoveIcon from "assets/images/temp/Remove.svg";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const loadcategory = async () => {
    try {
      const data = await getCategories();
      if (data.error) {
        return console.log(data.error);
      } else {
        return setCategories(data);
      }
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    loadcategory();
  }, []);

  return (
    <section className="adminPanel-right-section">
      <div className="row">
        <div className="adminPanel-right-header-section">
          <h1 className="adminPanel-right-header">Category</h1>
          <button className="btn adminPanel-right-addBtn">Add Category</button>
        </div>
      </div>
      <div className="row">
        <table className="adminPanel-right-table">
          <thead className="adminPanel-right-table-head-sec">
            <tr>
              <th className="adminPanel-right-table-head-value">CategoryId</th>
              <th className="adminPanel-right-table-head-value">Name</th>
              <th className="adminPanel-right-table-head-value">Items</th>
              <th className="adminPanel-right-table-head-value">Created On</th>
              <th className="adminPanel-right-table-head-value">UpdatedOn</th>
              <th className="adminPanel-right-table-head-value">Action</th>
            </tr>
          </thead>
          <tbody className="adminPanel-right-table-body-sec">
            {categories &&
              categories.map((category, index) => {
                return (
                  <tr key={index} className="adminPanel-right-table-body-tr">
                    <td className="adminPanel-right-table-body-value">
                      {category._id}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {category.categoryName}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {category.menuList.length}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {moment(category.createdAt).format("DD-MMM-yyyy")}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {moment(category.updatedAt).format("DD-MMM-yyyy")}
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

export default Category;
