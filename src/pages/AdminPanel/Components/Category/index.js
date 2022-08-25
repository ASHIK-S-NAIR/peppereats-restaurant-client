import React, { useState, useEffect } from "react";
import { getCategories } from "api/category";
import moment from "moment";

import ViewIcon from "assets/images/temp/View.svg";
import EditIcon from "assets/images/temp/Edit.svg";
import RemoveIcon from "assets/images/temp/Remove.svg";
import AddCategory from "./Components/AddCategory";
import UpdateCategory from "./Components/UpdateCategory";
import ViewCategory from "./Components/ViewCategory";
import DeleteCategory from "./Components/DeleteCategory";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [subSection, setSubSection] = useState("");
  const [category, setCategory] = useState();

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

  const handleAdd = () => {
    return setSubSection("addCategory");
  };

  const handleUpdate = (category) => {
    return setSubSection("updateCategory"), setCategory(category);
  };

  const handleDelete = (category) => {
    return setSubSection("deleteCategory"), setCategory(category);
  };

  const handleView = (category) => {
    return setSubSection("viewCategory"), setCategory(category);
  };

  useEffect(() => {
    loadcategory();
  }, [subSection]);

  return (
    <section className="adminPanel-right-section">
      <div className="row">
        <div className="adminPanel-right-header-section">
          <h1 className="adminPanel-right-header">Category</h1>
          <button
            className="btn adminPanel-right-addBtn"
            onClick={() => handleAdd()}
          >
            Add Category
          </button>
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
                      <button
                        className="adminPanel-right-table-button"
                        onClick={() => handleView(category)}
                      >
                        <img
                          src={ViewIcon}
                          alt=""
                          className="adminPanel-right-table-icon "
                        />
                      </button>
                      <button
                        className="adminPanel-right-table-button"
                        onClick={() => handleUpdate(category)}
                      >
                        <img
                          src={EditIcon}
                          alt=""
                          className="adminPanel-right-table-icon "
                        />
                      </button>
                      <button
                        className="adminPanel-right-table-button"
                        onClick={() => handleDelete(category)}
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

      {subSection === "addCategory" && (
        <AddCategory setSubSection={setSubSection} />
      )}
      {subSection === "updateCategory" && (
        <UpdateCategory category={category} setSubSection={setSubSection} />
      )}
      {subSection === "viewCategory" && (
        <ViewCategory category={category} setSubSection={setSubSection} />
      )}
      {subSection === "deleteCategory" && (
        <DeleteCategory category={category} setSubSection={setSubSection} />
      )}
    </section>
  );
};

export default Category;
