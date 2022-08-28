import React from "react";

const MenuItem = ({
  menuSelectedCategory,
  menuCategoryItem,
  setMenuSelectedCategory,
}) => {

  return (
    <button
      type="button"
      className={`menu-tab-item ${
        menuSelectedCategory.categoryName === menuCategoryItem.categoryName
          ? "active"
          : ""
      }`}
      data-target={menuCategoryItem.categoryName}
      value={menuCategoryItem.categoryName}
      onClick={() => setMenuSelectedCategory(menuCategoryItem)}
    >
      {menuCategoryItem.categoryName}
    </button>
  );
};

export default MenuItem;
