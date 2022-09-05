import React, { useState, useEffect } from "react";
import moment from "moment";
import Menu from "./Componenets/Menu";
import "./style.css";
import ReservationTimeTable from "./Componenets/ReservationTimeTable";
import ReservationTable from "./Componenets/ReservationTable";
import ReservationList from "./Componenets/ReservationList";
import useReservationStore from "setup/state-manager/reservationStore";

const Reservation = () => {
  const { initialReservationDetails } = useReservationStore((state) => ({
    initialReservationDetails: state.initialReservationDetails,
  }));

  useEffect(() => {
    initialReservationDetails();
  }, []);

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
          <ReservationTimeTable />
          <ReservationTable />
          <Menu />
          <ReservationList />
        </div>
      </section>
    </div>
  );
};

export default Reservation;
