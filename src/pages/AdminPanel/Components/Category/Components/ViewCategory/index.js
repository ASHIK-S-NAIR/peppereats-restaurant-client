import React from "react";
import closeIcon from "assets/images/icons/close.svg";
import moment from "moment";
import "./style.css";

const ViewCategory = ({ category, setSubSection }) => {
  return (
    <div className="viewCategory-section">
      <div className="cover-bg">
        <div className="subSection viewCategory-subSection">
          <div className="subSection-header-section">
            <h3 className="subSection-header">Category Details</h3>
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

          <div className="subSection-body-section">
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewCategory-categoryName"
                className="subSection-body-details-label"
              >
                Categroy Name
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewCategory-categoryName"
              >
                {category.categoryName}
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewCategory-categoryId"
                className="subSection-body-details-label"
              >
                Categroy Id
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewCategory-categoryId"
              >
                {category._id}
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewCategory-categoryMenuList"
                className="subSection-body-details-label"
              >
                Categroy MenuList
              </label>
              {category.menuList.length !== 0 ? (
                category.menuList.map((menu) => {
                  return (
                    <p
                      className="subSection-body-details-detail"
                      id="viewCategory-categoryMenuList"
                    >
                      {menu}
                    </p>
                  );
                })
              ) : (
                <p
                  className="subSection-body-details-detail"
                  id="viewCategory-categoryMenuList"
                >
                  0
                </p>
              )}
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewCategory-categoryCreatedOn"
                className="subSection-body-details-label"
              >
                Categroy CreatedOn
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewCategory-categoryCreatedOn"
              >
                {moment(category.createdAt).format("DD-MMM-yyyy")}
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewCategory-categoryUpdatedOn"
                className="subSection-body-details-label"
              >
                Categroy UpdatedOn
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewCategory-categoryUpdatedOn"
              >
                {moment(category.updatedAt).format("DD-MMM-yyyy")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCategory;
