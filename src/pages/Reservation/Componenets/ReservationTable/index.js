import React, { useState, useEffect } from "react";
import fourSeaterIcon from "assets/images/tables/4-seater.svg";
import fourSeaterSelectedIcon from "assets/images/tables/4-seater-selected.svg";
import fourSeaterAvailableIcon from "assets/images/tables/4-seater-Available.svg";
import threeSeaterIcon from "assets/images/tables/3-seater.svg";
import threeSeaterSelectedIcon from "assets/images/tables/3-seater-selected.svg";
import threeSeaterAvailableIcon from "assets/images/tables/3-seater-available.svg";
import twoSeaterIcon from "assets/images/tables/2-seater.svg";
import twoSeaterSelectedIcon from "assets/images/tables/2-seater-selected.svg";
import twoSeaterAvailableIcon from "assets/images/tables/2-seater-available.svg";
import useReservationStore from "setup/state-manager/reservationStore";

const ReservationTable = () => {
  const { reservationTable, setReservationTable } = useReservationStore(
    (state) => ({
      reservationTable: state.reservationTable,
      setReservationTable: state.setReservationTable,
    })
  );

  const fourSeaters = ["T1", "T2", "T3", "T4"];
  const threeSeaters = ["T5", "T6", "T7", "T8", "T9", "T10"];
  const twoSeaters = ["T11", "T12", "T13", "T14", "T15", "T16", "T17", "T18"];

  return (
    <section className="reservationTable">
      <div className="row">
        <div className="reservation-table" data-aos="fade-up">
          <div className="row reservation-table-4-seater-group-row">
            {fourSeaters &&
              fourSeaters.map((fourSeater, index) => {
                return (
                  <div
                    className={`reservation-table-seater-item reservation-table-4-seater-item ${
                      fourSeater === reservationTable ? "active" : ""
                    }  `}
                    data-table={fourSeater}
                    key={index}
                    onClick={() => setReservationTable(fourSeater)}
                  >
                    <img
                      src={
                        fourSeater === reservationTable
                          ? fourSeaterSelectedIcon
                          : fourSeaterIcon
                      }
                      alt="4 seater table"
                    />
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
                      threeSeater === reservationTable ? "active" : ""
                    }`}
                    onClick={() => setReservationTable(threeSeater)}
                    data-table={threeSeater}
                    key={index}
                  >
                    <img
                      src={
                        threeSeater === reservationTable
                          ? threeSeaterSelectedIcon
                          : threeSeaterIcon
                      }
                      alt="3 seater table"
                    />
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
                      twoSeater === reservationTable ? "active" : ""
                    }`}
                    data-table={twoSeater}
                    onClick={() => setReservationTable(twoSeater)}
                    key={index}
                  >
                    <img
                      src={
                        twoSeater === reservationTable
                          ? twoSeaterSelectedIcon
                          : twoSeaterIcon
                      }
                      alt="2 seater table"
                    />
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
    </section>
  );
};

export default ReservationTable;
