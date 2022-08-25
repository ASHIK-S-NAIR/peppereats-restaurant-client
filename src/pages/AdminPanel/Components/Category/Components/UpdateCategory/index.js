import React, { useState, useEffect } from "react";
import closeIcon from "assets/images/icons/close.svg";
import "./style.css";
import { getCategory, updateCategory } from "api/category";
import { isAuthenticated } from "api/auth";

const UpdateCategory = ({ category, setSubSection }) => {
  const [categoryName, setCategoryName] = useState("");

  const { admin, token } = isAuthenticated();

  const loadCategory = async () => {
    try {
      const data = await getCategory(category._id);
      if (data.error) {
        return console.log(data.error);
      } else {
        return setCategoryName(data.categoryName);
      }
    } catch (error) {
      return console.log(error);
    }
  };

  const onSubmit = async () => {
    try {
      const data = await updateCategory(
        category._id,
        admin._id,
        { categoryName },
        token
      );
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
    loadCategory();
  }, []);

  return (
    <div className="updateCategory-section">
      <div className="cover-bg">
        <div className="subSection updateCategory-subSection">
          <div className="subSection-header-section">
            <h3 className="subSection-header">Update Category</h3>
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;
