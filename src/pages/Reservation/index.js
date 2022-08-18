import React, { useState } from "react";
import moment from "moment";
import Menu from "./Componenets/Menu";
import fourSeater from "../../assets/images/tables/4-seater.svg";
import threeSeater from "../../assets/images/tables/3-seater.svg";
import twoSeater from "../../assets/images/tables/2-seater.svg";
import "./style.css";

const Reservation = () => {
  const [time, setTime] = useState("05:00PM");
  const [table, setTable] = useState("");
  const [preorders, setPreorders] = useState([]);

  const onSubmit = async () => {
    //
  };

  return (
    <div className="reservation">
      <section className="reservation-section sec-padding">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2 data-aos="fade-up">Reservation</h2>
            </div>
          </div>
          <div className="row reservation-date-row">
            <div className="section-title">
              <h4 data-aos="fade-up">{`${moment().format(
                "Do MMMM YYYY"
              )}, ${moment().format("dddd")}`}</h4>
            </div>
          </div>
          <div className="row">
            <div className="reservation-timeTable" data-aos="fade-up">
              <button className="reservation-timeTable-btn btn">05:00PM</button>
              <button className="reservation-timeTable-btn btn">06:00PM</button>
              <button className="reservation-timeTable-btn btn">07:00PM</button>
              <button className="reservation-timeTable-btn btn">08:00PM</button>
              <button className="reservation-timeTable-btn btn">09:00PM</button>
              <button className="reservation-timeTable-btn btn">10:00PM</button>
            </div>
          </div>
          <div className="row">
            <div className="reservation-table" data-aos="fade-up">
              <div className="row reservation-table-4-seater-group-row">
                <div className="reservation-table-4-seater-item">
                  <img src={fourSeater} alt="4 seater table" />
                </div>
                <div className="reservation-table-4-seater-item">
                  <img src={fourSeater} alt="4 seater table" />
                </div>
                <div className="reservation-table-4-seater-item">
                  <img src={fourSeater} alt="4 seater table" />
                </div>
                <div className="reservation-table-4-seater-item">
                  <img src={fourSeater} alt="4 seater table" />
                </div>
              </div>
              <div className="row reservation-table-3-seater-group-row">
                <div className="reservation-table-3-seater-item">
                  <img src={threeSeater} alt="3 seater table" />
                </div>
                <div className="reservation-table-3-seater-item">
                  <img src={threeSeater} alt="3 seater table" />
                </div>
                <div className="reservation-table-3-seater-item">
                  <img src={threeSeater} alt="3 seater table" />
                </div>
                <div className="reservation-table-3-seater-item">
                  <img src={threeSeater} alt="3 seater table" />
                </div>
                <div className="reservation-table-3-seater-item">
                  <img src={threeSeater} alt="3 seater table" />
                </div>
                <div className="reservation-table-3-seater-item">
                  <img src={threeSeater} alt="3 seater table" />
                </div>
              </div>
              <div className="row reservation-table-2-seater-group-row">
                <div className="reservation-table-2-seater-item">
                  <img src={twoSeater} alt="2 seater table" />
                </div>
                <div className="reservation-table-2-seater-item">
                  <img src={twoSeater} alt="2 seater table" />
                </div>
                <div className="reservation-table-2-seater-item">
                  <img src={twoSeater} alt="2 seater table" />
                </div>
                <div className="reservation-table-2-seater-item">
                  <img src={twoSeater} alt="2 seater table" />
                </div>
                <div className="reservation-table-2-seater-item">
                  <img src={twoSeater} alt="2 seater table" />
                </div>
                <div className="reservation-table-2-seater-item">
                  <img src={twoSeater} alt="2 seater table" />
                </div>
                <div className="reservation-table-2-seater-item">
                  <img src={twoSeater} alt="2 seater table" />
                </div>
                <div className="reservation-table-2-seater-item">
                  <img src={twoSeater} alt="2 seater table" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="reservation-color-code-group">
              <div className="reservation-color-code-item">
                <div className="reservation-color-code-color reservation-color-code-color-reserved "></div>
                <p className="reservation-color-code-name">Reservation</p>
              </div>
              <div className="reservation-color-code-item">
                <div className="reservation-color-code-color reservation-color-code-color-available "></div>
                <p className="reservation-color-code-name">Available</p>
              </div>
              <div className="reservation-color-code-item">
                <div className="reservation-color-code-color reservation-color-code-color-selected "></div>
                <p className="reservation-color-code-name">Selected</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="reservation-seater-config-group">
              <div className="reservation-seater-config-item">
                <img src={fourSeater} className="reservation-seater-config-image" alt="4 seater table" />
                <p className="reservation-seater-config-name">4 Seater</p>
              </div>
              <div className="reservation-seater-config-item">
                <img src={threeSeater} className="reservation-seater-config-image" alt="3 seater table" />
                <p className="reservation-seater-config-name">3 Seater</p>
              </div>
              <div className="reservation-seater-config-item">
                <img src={twoSeater} className="reservation-seater-config-image" alt="2 seater table" />
                <p className="reservation-seater-config-name">2 Seater</p>
              </div>
            </div>
          </div>

          {/* menu section */}
          <Menu />

          {/* reservation list */}
          <div className="row">
            <div className="section-title">
              <h3 data-aos="fade-up">Reservation List </h3>
            </div>
          </div>

          <div className="row">
            <div className="reservation-list-group">
              <p className="reservation-list-p">
                Your table reservation :{" "}
                <span>{`${moment().format("Do MMMM YYYY")}, ${moment().format(
                  "dddd"
                )}, ${time}`}</span>
              </p>
              <p className="reservation-list-p">
                selected teble : <span>{`${table}`}</span>
              </p>
              <p className="reservation-list-p">
                PreOrders :{" "}
                <span>
                  {preorders.length === 0 ? "No preOrders" : preorders}
                </span>
              </p>
              <button
                className="btn reservation-list-confirm-btn"
                onClick={onSubmit}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
