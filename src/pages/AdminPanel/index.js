import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Category from "./Components/Category";
import Customers from "./Components/Customers";
import Mail from "./Components/Mail";
import Menu from "./Components/Menu";
import Reservation from "./Components/Reservation";
import "./style.css";

const AdminPanel = () => {
  const { currentTab } = useParams();
  const [tabActive, setTabActive] = useState(currentTab);

  useEffect(() => {
    setTabActive(currentTab);
  }, [currentTab])

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
                    {/* <img
                    src={
                      tabActive === "dashboard"
                        ? DashboardActiveIcon
                        : DashboardIcon
                    }
                    alt=""
                    className="adminDashPanel-left-img"
                  /> */}
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
                    {/* <img
                    src={
                      tabActive === "dashboard"
                        ? DashboardActiveIcon
                        : DashboardIcon
                    }
                    alt=""
                    className="adminDashPanel-left-img"
                  /> */}
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
                    {/* <img
                    src={
                      tabActive === "dashboard"
                        ? DashboardActiveIcon
                        : DashboardIcon
                    }
                    alt=""
                    className="adminDashPanel-left-img"
                  /> */}
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
                    {/* <img
                    src={
                      tabActive === "dashboard"
                        ? DashboardActiveIcon
                        : DashboardIcon
                    }
                    alt=""
                    className="adminDashPanel-left-img"
                  /> */}
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
                    {/* <img
                    src={
                      tabActive === "dashboard"
                        ? DashboardActiveIcon
                        : DashboardIcon
                    }
                    alt=""
                    className="adminDashPanel-left-img"
                  /> */}
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
      </div>
    </section>
  );
};

export default AdminPanel;
