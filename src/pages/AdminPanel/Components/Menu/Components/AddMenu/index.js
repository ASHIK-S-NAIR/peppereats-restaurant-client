import React, { useState, useEffect } from "react";
import closeIcon from "assets/images/icons/close.svg";
import "./style.css";
import { isAuthenticated } from "api/auth";
import { createMenu } from "api/menu";
import { getCategories } from "api/category";

const AddMenu = ({ setSubSection }) => {
  const [values, setValues] = useState({
    menuName: "",
    menuDescription: "",
    menuPrice: "",
    menuCategory: "",
  });
  const [categories, setCategories] = useState([]);

  const [menuFile, setMenuFile] = useState();

  const { menuName, menuDescription, menuPrice, menuCategory } = values;

  const { admin, token } = isAuthenticated();

  const loadCategory = async () => {
    try {
      const data = await getCategories();
      if (data.error) {
        return console.log(data.error);
      }
      console.log("Categories", data);
      return setCategories(data);
    } catch (error) {
      return console.log(error);
    }
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setMenuFile(file);
  };

  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("menuName", menuName);
    formData.append("menuDescription", menuDescription);
    formData.append("menuPrice", menuPrice);
    formData.append("menuCategory", menuCategory);
    formData.append("menuImage", menuFile);
    try {
      const data = await createMenu(admin._id, formData, token);
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
  }, [])

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
                htmlFor="addMenu-menuName"
                className="subSection-body-form-label"
              >
                Menu Name
              </label>
              <input
                type="text"
                id="addMenu-menuName"
                value={menuName}
                onChange={handleChange("menuName")}
                className="subSection-body-form-input"
              />
            </div>
            <div className="subSection-body-form-input-section">
              <label
                htmlFor="addMenu-menuName"
                className="subSection-body-form-label"
              >
                Menu Category
              </label>
              <select
                name="menucategory"
                id="menucategory"
                className="subSection-body-form-input subSection-body-form-input-select"
                onChange={handleChange("menuCategory")}
              >
                <option value="" >Select Category</option>
                {categories.length !== 0 &&
                  categories.map((category, index) => {
                    return (
                      <option key={index} value={category._id} className="subSection-body-form-input-options">
                        {category.categoryName}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="subSection-body-form-input-section">
              <label
                htmlFor="addMenu-menuPrice"
                className="subSection-body-form-label"
              >
                Menu Price
              </label>
              <input
                type="number"
                id="addMenu-menuPrice"
                value={menuPrice}
                onChange={handleChange("menuPrice")}
                className="subSection-body-form-input"
              />
            </div>
            <div className="subSection-body-form-input-section">
              <label
                htmlFor="addMenu-menuDescription"
                className="subSection-body-form-label"
              >
                Menu Description
              </label>
              <input
                type="text"
                id="addMenu-menuDescription"
                value={menuDescription}
                onChange={handleChange("menuDescription")}
                className="subSection-body-form-input"
              />
            </div>
            <div className="subSection-body-form-input-section">
              <label
                htmlFor="addMenu-menuImage"
                className="subSection-body-form-label"
              >
                Menu Image
              </label>
              <input
                type="file"
                id="addMenu-menuImage"
                name="menuImage"
                accept="image/*"
                className="subSection-body-form-input"
                onChange={handleFileChange}
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

export default AddMenu;
