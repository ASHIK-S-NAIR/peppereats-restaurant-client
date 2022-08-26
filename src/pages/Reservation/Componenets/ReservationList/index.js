import React, { useEffect } from "react";
import moment from "moment";
import useReservationStore from "setup/state-manager/reservationStore";

const ReservationList = () => {
  const {
    reservationOrders,
    reservationTable,
    reservationTime,
    setReservationTime,
  } = useReservationStore((state) => ({
    reservationOrders: state.reservationOrders,
    reservationTable: state.reservationTable,
    reservationTime: state.reservationTime,
    setReservationTime: state.setReservationTime,
  }));

  const onSubmit = async () => {
    //
  };

  useEffect(() => {
    setReservationTime("05:00PM");
  }, []);

  return (
    <section className="reservationList">
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
            )}, ${reservationTime}`}</span>
          </p>
          <p className="reservation-list-p">
            Selected table : <span>{`${reservationTable}`}</span>
          </p>
          <p className="reservation-list-p">
            PreOrders :{" "}
            <span>
              {reservationOrders.length === 0
                ? "No preOrders"
                : reservationOrders.map((reservationOrder, index) => {
                    return ` ${ reservationOrder.orderId},`;
                  })}
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
    </section>
  );
};

export default ReservationList;
