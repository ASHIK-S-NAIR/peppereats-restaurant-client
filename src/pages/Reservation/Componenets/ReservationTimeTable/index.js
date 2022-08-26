import React, { useState } from "react";
import useReservationStore from "setup/state-manager/reservationStore";

const ReservationTimeTable = () => {
  const { reservationTime, setReservationTime } = useReservationStore(
    (state) => ({
      reservationTime: state.reservationTime,
      setReservationTime: state.setReservationTime,
    })
  );

  const timings = [
    "05:00PM",
    "06:00PM",
    "07:00PM",
    "08:00PM",
    "09:00PM",
    "10:00PM",
  ];
  return (
    <section className="reservationTimeTable">
      <div className="row">
        <div className="reservation-timeTable" data-aos="fade-up">
          {timings &&
            timings.map((timing, index) => {
              return (
                <button
                  className={`btn reservation-timeTable-btn ${
                    reservationTime === timing ? "active" : ""
                  }`}
                  onClick={() => setReservationTime(timing)}
                  key={index}
                >
                  {timing}
                </button>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ReservationTimeTable;
