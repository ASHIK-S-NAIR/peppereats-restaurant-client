import React, { useState, useEffect } from "react";
import { getCategories } from "../../../../api/category";
import LunchImage from "../../../../assets/images/menu/1.jpg";
import DinnerImage from "../../../../assets/images/menu/2.jpg";
import DrinksImage from "../../../../assets/images/menu/3.jpg";
import DessertsImage from "../../../../assets/images/menu/4.jpg";
import "./style.css";

const Menu = () => {
  const [menuCategoryItems, setMenuCategoryItems] = useState([]);
  const [menuCategory, setMenuCategory] = useState(menuCategoryItems[0]);
  const [menu, setMenu] = useState([]);

  const menuItems = [
    {
      name: "Lunch item",
      description: "lunch item description",
      price: 40,
      image: LunchImage,
      category: "lunch",
    },
    {
      name: "Lunch item",
      description: "lunch item description",
      price: 40,
      image: LunchImage,
      category: "lunch",
    },
    {
      name: "Lunch item",
      description: "lunch item description",
      price: 40,
      image: LunchImage,
      category: "lunch",
    },
    {
      name: "Lunch item",
      description: "lunch item description",
      price: 40,
      image: LunchImage,
      category: "lunch",
    },
    {
      name: "Lunch item",
      description: "lunch item description",
      price: 40,
      image: LunchImage,
      category: "lunch",
    },
    {
      name: "Lunch item",
      description: "lunch item description",
      price: 40,
      image: LunchImage,
      category: "lunch",
    },
    {
      name: "Dinner item",
      description: "Dinner item description",
      price: 30,
      image: DinnerImage,
      category: "dinner",
    },
    {
      name: "Dinner item",
      description: "Dinner item description",
      price: 30,
      image: DinnerImage,
      category: "dinner",
    },
    {
      name: "Dinner item",
      description: "Dinner item description",
      price: 30,
      image: DinnerImage,
      category: "dinner",
    },
    {
      name: "Dinner item",
      description: "Dinner item description",
      price: 30,
      image: DinnerImage,
      category: "dinner",
    },
    {
      name: "Drinks item",
      description: "Drinks item description",
      price: 20,
      image: DrinksImage,
      category: "drinks",
    },
    {
      name: "Drinks item",
      description: "Drinks item description",
      price: 20,
      image: DrinksImage,
      category: "drinks",
    },
    {
      name: "Desserts item",
      description: "Desserts item description",
      price: 10,
      image: DessertsImage,
      category: "desserts",
    },
    {
      name: "Desserts item",
      description: "Desserts item description",
      price: 10,
      image: DessertsImage,
      category: "desserts",
    },
  ];

  // const menuCategoryItems = ["lunch", "dinner", "drinks", "desserts"];

  const fetchMenu = async () => {
    const tempMenu = menuItems.filter(
      (menuItem) => menuItem.category === menuCategory
    );
    return setMenu(tempMenu);
  };

  const loadMenuCategoryItems = async () => {
    try {
      const result = await getCategories();
      if (result.error) {
        return console.log(result.error);
      }
      return setMenuCategoryItems(result);
    } catch (error) {
      console.log(error);
    }
  };

  const menuBtn = (category, index) => {
    return (
      <button
        key={index}
        type="button"
        className={`menu-tab-item ${menuCategory === category ? "active" : ""}`}
        data-target={category}
        value={category}
        onClick={() => setMenuCategory(category)}
      >
        {category}
      </button>
    );
  };

  const menuItemD = (menuItem, index) => {
    return (
      <div key={index} className="menu-item" data-aos="fade-up-right">
        <div className="menu-item-title">
          <img src={menuItem.image} alt="menu item thumbnail" />
          <h3>{menuItem.name}</h3>
        </div>
        <div className="menu-item-price">${menuItem.price}</div>
      </div>
    );
  };

  useEffect(() => {
    fetchMenu();
  }, [menuCategory]);

  useEffect(() => {
    loadMenuCategoryItems();
  }, []);
  return (
    <section className="menu-section sec-padding" id="our-menu">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-title="order-now" data-aos="fade-up">
              Our menu
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="menu-tabs" data-aos="fade-up">
            {menuCategoryItems &&
              menuCategoryItems.map((menuCategoryItem, index) => {
                return menuBtn(menuCategoryItem.categoryName, index);
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
