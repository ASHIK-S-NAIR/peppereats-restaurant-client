import React, { useState } from "react";
import closeIcon from "assets/images/icons/close.svg";
import "./style.css";
import { deleteCategory } from "api/category";
import { isAuthenticated } from "api/auth";

const DeleteCategory = ({ category, setSubSection }) => {
  const [deleteValue, setDeleteValue] = useState("");

  const { admin, token } = isAuthenticated();

  const onSubmit = async () => {
    try {
      const data = await deleteCategory(category._id, admin._id, token);
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
    <div className="deleteCategory-section">
      <div className="cover-bg">
        <div className="subSection delete-subSection deleteCategory-subSection">
          <div className="subSection-header-section">
            <h3 className="subSection-header">Delete Category</h3>
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
            <div className="subSection-body-details-detail-section">
              <p className="subSection-body-details-p">
                This action <span>cannot</span> be undone. This will permanently
                delete the <span>{category.categoryName}</span> category from
                your database.
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <p className="subSection-body-details-p">
                Please type{" "}
                <span>{`${category.categoryName}-${category._id}`}</span> to
                confirm.
              </p>
              <input
                type="text"
                id="addCategory-categoryName"
                value={deleteValue}
                onChange={(e) => setDeleteValue(e.target.value)}
                className="subSection-body-form-input"
              />
            </div>
            <div className="subSection-body-form-btn-section">
              <button
                className={`btn subSection-body-form-btn ${
                  deleteValue === category.categoryName + '-' + category._id
                    ? ""
                    : "btn-unclickable"
                } `}
                onClick={onSubmit}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteCategory;
