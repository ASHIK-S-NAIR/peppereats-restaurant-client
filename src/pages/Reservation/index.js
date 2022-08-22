import React, { useState } from "react";
import moment from "moment";
import Menu from "./Componenets/Menu";
import fourSeaterIcon from "../../assets/images/tables/4-seater.svg";
import threeSeaterIcon from "../../assets/images/tables/3-seater.svg";
import twoSeaterIcon from "../../assets/images/tables/2-seater.svg";
import "./style.css";

const Reservation = () => {
  const [time, setTime] = useState("05:00PM");
  const [table, setTable] = useState("");
  const [preorders, setPreorders] = useState([]);

  const timings = [
    "05:00PM",
    "06:00PM",
    "07:00PM",
    "08:00PM",
    "09:00PM",
    "10:00PM",
  ];
  const fourSeaters = ["T1", "T2", "T3", "T4"];
  const threeSeaters = ["T5", "T6", "T7", "T8", "T9", "T10"];
  const twoSeaters = ["T11", "T12", "T13", "T14", "T15", "T16", "T17", "T18"];

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
              {timings &&
                timings.map((timing, index) => {
                  return (
                    <button
                      className={`btn reservation-timeTable-btn ${
                        time === timing ? "active" : ""
                      }`}
                      onClick={() => setTime(timing)}
                      key={index}
                    >
                      {timing}
                    </button>
                  );
                })}
            </div>
          </div>
          <div className="row">
            <div className="reservation-table" data-aos="fade-up">
              <div className="row reservation-table-4-seater-group-row">
                {fourSeaters &&
                  fourSeaters.map((fourSeater, index) => {
                    return (
                      <div
                        className={`reservation-table-seater-item reservation-table-4-seater-item ${
                          table === fourSeater ? "active" : ""
                        }  `}
                        data-table={fourSeater}
                        key={index}
                        onClick={() => setTable(fourSeater)}
                      >
                        <img src={fourSeaterIcon} alt="4 seater table" />
                      </div>
                    );
                  })}
              </div>
              <div className="row reservation-table-3-seater-group-row">
                {threeSeaters &&
                  threeSeaters.map((threeSeater, index) => {
                    return (
                      <div
                        className={`reservation-table-seater-item reservation-table-3-seater-item ${
                          table === threeSeater ? "active" : ""
                        }`}
                        onClick={() => setTable(threeSeater)}
                        data-table={threeSeater}
                        key={index}
                      >
                        <img src={threeSeaterIcon} alt="3 seater table" />
                      </div>
                    );
                  })}
              </div>
              <div className="row reservation-table-2-seater-group-row">
                {twoSeaters &&
                  twoSeaters.map((twoSeater, index) => {
                    return (
                      <div
                        className={`reservation-table-seater-item reservation-table-2-seater-item ${
                          table === twoSeater ? "active" : ""
                        }`}
                        data-table={twoSeater}
                        onClick={() => setTable(twoSeater)}
                        key={index}
                      >
                        <img src={twoSeaterIcon} alt="2 seater table" />
                      </div>
                    );
                  })}
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
                <img
                  src={fourSeaterIcon}
                  className="reservation-seater-config-image"
                  alt="4 seater table"
                />
                <p className="reservation-seater-config-name">4 Seater</p>
              </div>
              <div className="reservation-seater-config-item">
                <img
                  src={threeSeaterIcon}
                  className="reservation-seater-config-image"
                  alt="3 seater table"
                />
                <p className="reservation-seater-config-name">3 Seater</p>
              </div>
              <div className="reservation-seater-config-item">
                <img
                  src={twoSeaterIcon}
                  className="reservation-seater-config-image"
                  alt="2 seater table"
                />
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
                Selected teble : <span>{`${table}`}</span>
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
