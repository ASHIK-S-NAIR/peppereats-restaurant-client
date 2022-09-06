import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Category from "./Components/Category";
import Customers from "./Components/Customers";
import Mail from "./Components/Mail";
import Menu from "./Components/Menu";
import Reservation from "./Components/Reservation";

import CategoryInactiveIcon from "assets/images/icons/category_inactive.svg";
import CategoryActiveIcon from "assets/images/icons/category_active.svg";
import MenuInactiveIcon from "assets/images/icons/menu_inactive.svg";
import MenuActiveIcon from "assets/images/icons/menu_active.svg";
import CustomerInactiveIcon from "assets/images/icons/customer_inactive.svg";
import CustomerActiveIcon from "assets/images/icons/customer_active.svg";
import mailInactiveIcon from "assets/images/icons/mail_inactive.svg";
import mailActiveIcon from "assets/images/icons/mail_active.svg";

import "./style.css";

const AdminPanel = () => {
  const { currentTab } = useParams();
  const [tabActive, setTabActive] = useState(currentTab);

  useEffect(() => {
    setTabActive(currentTab);
  }, [currentTab]);

  return (
    <section className="adminPanel-section sec-padding">
      <div className="container">
        <div className="row adminPanel-row">
          <div className="adminPanel-left">
            <ul className="adminPanel-left-ul">
              <li className="adminPanel-left-li">
                <Link
                  to={`/adminpanel/reservation`}
                  className="adminPanel-left-link"
                >
                  <div
                    className={`adminPanel-left-tag ${
                      tabActive === "reservation" ? "active" : ""
                    }`}
                  >
                    {" "}
                    <img
                      src={
                        tabActive === "reservation"
                          ? CategoryActiveIcon
                          : CategoryInactiveIcon
                      }
                      alt=""
                      className="adminPanel-left-icon"
                    />
                    RESERVATION
                  </div>
                </Link>
              </li>
              <li className="adminPanel-left-li">
                <Link
                  to={`/adminpanel/category`}
                  className="adminPanel-left-link"
                >
                  <div
                    className={`adminPanel-left-tag ${
                      tabActive === "category" ? "active" : ""
                    }`}
                  >
                    {" "}
                    <img
                      src={
                        tabActive === "category"
                          ? CategoryActiveIcon
                          : CategoryInactiveIcon
                      }
                      alt=""
                      className="adminPanel-left-icon"
                    />
                    CATEGORY
                  </div>
                </Link>
              </li>
              <li className="adminPanel-left-li">
                <Link to={`/adminpanel/menu`} className="adminPanel-left-link">
                  <div
                    className={`adminPanel-left-tag ${
                      tabActive === "menu" ? "active" : ""
                    }`}
                  >
                    {" "}
                    <img
                      src={
                        tabActive === "menu" ? MenuActiveIcon : MenuInactiveIcon
                      }
                      alt=""
                      className="adminPanel-left-icon"
                    />
                    MENU
                  </div>
                </Link>
              </li>
              <li className="adminPanel-left-li">
                <Link
                  to={`/adminpanel/customers`}
                  className="adminPanel-left-link"
                >
                  <div
                    className={`adminPanel-left-tag ${
                      tabActive === "customers" ? "active" : ""
                    }`}
                  >
                    {" "}
                    <img
                      src={
                        tabActive === "customers"
                          ? CustomerActiveIcon
                          : CustomerInactiveIcon
                      }
                      alt=""
                      className="adminPanel-left-icon"
                    />
                    CUSTOMERS
                  </div>
                </Link>
              </li>
              <li className="adminPanel-left-li">
                <Link to={`/adminpanel/mail`} className="adminPanel-left-link">
                  <div
                    className={`adminPanel-left-tag ${
                      tabActive === "mail" ? "active" : ""
                    }`}
                  >
                    {" "}
                    <img
                      src={
                        tabActive === "mail" ? mailActiveIcon : mailInactiveIcon
                      }
                      alt=""
                      className="adminPanel-left-icon"
                    />
                    MAIL
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="adminPanel-right">
            {tabActive === "reservation" && <Reservation />}
            {tabActive === "category" && <Category />}
            {tabActive === "menu" && <Menu />}
            {tabActive === "customers" && <Customers />}
            {tabActive === "mail" && <Mail />}
          </div>
        </div>

        <div className="row mob-adminPanel-row">
          <div className="mob-adminPanel-top">
            {tabActive === "reservation" && <Reservation />}
            {tabActive === "category" && <Category />}
            {tabActive === "menu" && <Menu />}
            {tabActive === "customers" && <Customers />}
            {tabActive === "mail" && <Mail />}
          </div>

          <div className="mob-adminPanel-bottom">
            <ul className="mob-adminPanel-bottom-ul">
              <li className="adminPanel-left-li">
                <Link
                  to={`/adminpanel/reservation`}
                  className="adminPanel-left-link"
                >
                  <div
                    className={`adminPanel-left-tag ${
                      tabActive === "reservation" ? "active" : ""
                    }`}
                  >
                    {" "}
                    <img
                      src={
                        tabActive === "reservation"
                          ? CategoryActiveIcon
                          : CategoryInactiveIcon
                      }
                      alt=""
                      className="adminPanel-left-icon"
                    />
                  </div>
                </Link>
              </li>
              <li className="adminPanel-left-li">
                <Link
                  to={`/adminpanel/category`}
                  className="adminPanel-left-link"
                >
                  <div
                    className={`adminPanel-left-tag ${
                      tabActive === "category" ? "active" : ""
                    }`}
                  >
                    {" "}
                    <img
                      src={
                        tabActive === "category"
                          ? CategoryActiveIcon
                          : CategoryInactiveIcon
                      }
                      alt=""
                      className="adminPanel-left-icon"
                    />
                  </div>
                </Link>
              </li>
              <li className="adminPanel-left-li">
                <Link to={`/adminpanel/menu`} className="adminPanel-left-link">
                  <div
                    className={`adminPanel-left-tag ${
                      tabActive === "menu" ? "active" : ""
                    }`}
                  >
                    {" "}
                    <img
                      src={
                        tabActive === "menu" ? MenuActiveIcon : MenuInactiveIcon
                      }
                      alt=""
                      className="adminPanel-left-icon"
                    />
                  </div>
                </Link>
              </li>
              <li className="adminPanel-left-li">
                <Link
                  to={`/adminpanel/customers`}
                  className="adminPanel-left-link"
                >
                  <div
                    className={`adminPanel-left-tag ${
                      tabActive === "customers" ? "active" : ""
                    }`}
                  >
                    {" "}
                    <img
                      src={
                        tabActive === "customers"
                          ? CustomerActiveIcon
                          : CustomerInactiveIcon
                      }
                      alt=""
                      className="adminPanel-left-icon"
                    />
                  </div>
                </Link>
              </li>
              <li className="adminPanel-left-li">
                <Link to={`/adminpanel/mail`} className="adminPanel-left-link">
                  <div
                    className={`adminPanel-left-tag ${
                      tabActive === "mail" ? "active" : ""
                    }`}
                  >
                    {" "}
                    <img
                      src={
                        tabActive === "mail" ? mailActiveIcon : mailInactiveIcon
                      }
                      alt=""
                      className="adminPanel-left-icon"
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
