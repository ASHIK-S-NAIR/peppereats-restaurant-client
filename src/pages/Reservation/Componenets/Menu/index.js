import { getMenuByCategory } from "api/menu";
import React, { useState, useEffect } from "react";
import useReservationStore from "setup/state-manager/reservationStore";
import { getCategories } from "../../../../api/category";
import "./style.css";

const Menu = () => {
  const [menuCategoryItems, setMenuCategoryItems] = useState([]);
  const [menuCategory, setMenuCategory] = useState();
  const [menu, setMenu] = useState([]);

  const { addReservationOrder, removeReservationOrder } = useReservationStore(
    (state) => ({
      addReservationOrder: state.addReservationOrder,
      removeReservationOrder: state.removeReservationOrder,
    })
  );

  const fetchMenu = async () => {
    try {
      const data = await getMenuByCategory(menuCategory._id);
      if (data.error) {
        return console.log(data.error);
      }
      return setMenu(data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadMenuCategoryItems = async () => {
    try {
      const data = await getCategories();
      if (data.error) {
        return console.log(data.error);
      }
      return setMenuCategoryItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const menuBtn = (category, index) => {
    return (
      <button
        key={index}
        type="button"
        className={`menu-tab-item ${
          menuCategory.categoryName === category.categoryName ? "active" : ""
        }`}
        data-target={category.categoryName}
        value={category.categoryName}
        onClick={() => setMenuCategory(category)}
      >
        {category.categoryName}
      </button>
    );
  };

  const menuItemD = (menuItem, index) => {
    return (
      <div
        key={index}
        className="menu-item menu-item-border"
        data-aos="fade-up-right"
        onClick={() => removeReservationOrder(menuItem._id)}
      >
        {" "}
        <div className="menu-item-title ">
          <img src={menuItem.menuImage.url} alt="menu item thumbnail" />
          <div className="menu-item-title-sub">
            <h3>{menuItem.menuName}</h3>
            <p>{menuItem.menuDescription}</p>
          </div>
        </div>
        <div className="menu-item-price">${menuItem.menuPrice}</div>
      </div>
    );
  };

  useEffect(() => {
    loadMenuCategoryItems();
  }, []);

  useEffect(() => {
    setMenuCategory(menuCategoryItems[0]);
  }, [menuCategoryItems]);

  useEffect(() => {
    if (menuCategory) {
      fetchMenu();
    }
  }, [menuCategory]);

  return (
    <section className="menu-section sec-padding" id="our-menu">
      <div className="container">
        <div className="row">
          <div className="menu-tabs" data-aos="fade-up">
            {menuCategory &&
              menuCategoryItems.map((menuCategoryItem, index) => {
                return menuBtn(menuCategoryItem, index);
              })}
          </div>
        </div>
        <div className="row menu-tab-content active" id="lunch">
          {menu &&
            menu.map((menuItem, index) => {
              return menuItemD(menuItem, index);
            })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
