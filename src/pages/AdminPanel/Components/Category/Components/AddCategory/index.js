import React, { useState } from "react";
import closeIcon from "assets/images/icons/close.svg";
import "./style.css";
import { createCategory } from "api/category";
import { isAuthenticated } from "api/auth";

const AddCategory = ({ setSubSection }) => {
  const [categoryName, setCategoryName] = useState("");

  const { admin, token } = isAuthenticated();

  const onSubmit = async () => {
    try {
      const data = await createCategory(admin._id, categoryName, token);
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
    <div className="addCategory-section">
      <div className="cover-bg">
        <div className="subSection addCategory-subSection">
          <div className="subSection-header-section">
            <h3 className="subSection-header">Add Category</h3>
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
                htmlFor="addCategory-categoryName"
                className="subSection-body-form-label"
              >
                Category Name
              </label>
              <input
                type="text"
                id="addCategory-categoryName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="subSection-body-form-input"
              />
            </div>
            <div className="subSection-body-form-btn-section">
              <button
                className="btn subSection-body-form-btn"
                onClick={onSubmit}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
