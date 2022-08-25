import React, { useState } from "react";
import closeIcon from "assets/images/icons/close.svg";
import "./style.css";

import { isAuthenticated } from "api/auth";
import { deleteMenu } from "api/menu";

const DeleteMenu = ({ menu, setSubSection }) => {
    console.log("menu", menu)
  const [deleteValue, setDeleteValue] = useState("");

  const { admin, token } = isAuthenticated();

  const onSubmit = async () => {
    try {
      const data = await deleteMenu(menu._id, admin._id, token);
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
    <div className="deleteMenu-section">
      <div className="cover-bg">
        <div className="subSection delete-subSection deleteMenu-subSection">
          <div className="subSection-header-section">
            <h3 className="subSection-header">Delete Menu</h3>
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
                delete the{" "}
                <span>{`${menu.menuName}`}</span> Menu
                from your database.
              </p>
            </div>
            <div className="subSection-body-details-detail-section">
              <p className="subSection-body-details-p">
                Please type{" "}
                <span>{`${menu.menuName}-${menu._id}`}</span>{" "}
                to confirm.
              </p>
              <input
                type="text"
                id="addMenu-menuName"
                value={deleteValue}
                onChange={(e) => setDeleteValue(e.target.value)}
                className="subSection-body-form-input"
              />
            </div>
            <div className="subSection-body-form-btn-section">
              <button
                className={`btn subSection-body-form-btn ${
                  deleteValue ===
                  menu.menuName + "-" + menu._id
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

export default DeleteMenu;
