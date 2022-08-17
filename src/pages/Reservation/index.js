import React from "react";
import moment from "moment";
import "./style.css";

const Reservation = () => {
  return (
    <div className="reservation">
      <section className="reservation-table sec-padding">
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
        </div>
      </section>
    </div>
  );
};

export default Reservation;
