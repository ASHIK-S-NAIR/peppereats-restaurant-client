import React from "react";
import closeIcon from "assets/images/icons/close.svg";
import moment from "moment";
import "./style.css";

const ViewMenu = ({ menu, setSubSection }) => {
  return (
    <div className="viewMenu-section">
      <div className="cover-bg">
        <div className="subSection viewMenu-subSection">
          <div className="subSection-header-section">
            <h3 className="subSection-header">Menu Details</h3>
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
              <img src={menu.menuImage.url} alt="" className="subSection-body-details-img" />
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewMenu-menuName"
                className="subSection-body-details-label"
              >
                Menu Name
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewMenu-menuName"
              >
                {menu.menuName}
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewMenu-menuId"
                className="subSection-body-details-label"
              >
                Menu Id
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewMenu-menuId"
              >
                {menu._id}
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewMenu-menuCategory"
                className="subSection-body-details-label"
              >
                Menu Category
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewMenu-menuCategory"
              >
                {menu.menuCategory.categoryName}
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewMenu-menuPrice"
                className="subSection-body-details-label"
              >
                Menu Price
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewMenu-menuPrice"
              >
                {menu.menuPrice}
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewMenu-menuDescription"
                className="subSection-body-details-label"
              >
                Menu Description
              </label>

              <p
                className="subSection-body-details-detail"
                id="viewMenu-menuDescription"
              >
                {menu.menuDescription}
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewMenu-menuCreatedOn"
                className="subSection-body-details-label"
              >
                Menu CreatedOn
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewMenu-menuCreatedOn"
              >
                {moment(menu.createdAt).format("DD-MMM-yyyy")}
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <label
                htmlFor="viewMenu-menuUpdatedOn"
                className="subSection-body-details-label"
              >
                Menu UpdatedOn
              </label>
              <p
                className="subSection-body-details-detail"
                id="viewMenu-menuUpdatedOn"
              >
                {moment(menu.updatedAt).format("DD-MMM-yyyy")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMenu;
