import { getMenuByCategory } from "api/menu";
import React, { useState, useEffect } from "react";
import { getCategories } from "api/category";
import MenuItem from "./components/MenuItem";
import "./style.css";

const Menu = () => {
  const [menuCategory, setMenuCategory] = useState([]);
  const [menuSelectedCategory, setMenuSelectedCategory] = useState();
  const [menu, setMenu] = useState([]);

  const fetchMenu = async () => {
    try {
      const data = await getMenuByCategory(menuSelectedCategory._id);
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
      return setMenuCategory(data);
    } catch (error) {
      console.log(error);
    }
  };

  const menuItemD = (menuItem, index) => {
    return (
      <div
        key={index}
        className="menu-item"
        data-aos="fade-up-right"
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
    setMenuSelectedCategory(menuCategory[0]);
  }, [menuCategory]);

  useEffect(() => {
    if (menuSelectedCategory) {
      fetchMenu();
    }
  }, [menuSelectedCategory]);

  return (
    <section className="menu-section sec-padding" id="our-menu">
      <div className="container">
        <div className="row">
          <div className="menu-tabs" data-aos="fade-up">
            {menuSelectedCategory &&
              menuCategory.map((menuCategoryItem, index) => {
                return (
                  <MenuItem
                    key={index}
                    menuCategoryItem={menuCategoryItem}
                    menuSelectedCategory={menuSelectedCategory}
                    setMenuSelectedCategory={setMenuSelectedCategory}
                  />
                );
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
