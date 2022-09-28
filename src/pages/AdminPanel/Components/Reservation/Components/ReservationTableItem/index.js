import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import { isAuthenticated } from "api/auth";
import { getReservationTableByDate } from "api/reservationTable";
import "./style.css";

const ReservationTableItem = () => {
  const [reservationTableItem, setReservationtableItem] = useState();

  const { admin, token } = isAuthenticated();

  const loadReservationTableItem = async () => {
    try {
      const data = await getReservationTableByDate(admin._id, token);
      if (data.error) {
        return console.log(data.error);
      }
      return setReservationtableItem(data);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    loadReservationTableItem();
  }, []);

  return (
    <section className="reservationTableItem">
      <div className="row adminPanel-right-table-head-row">
        <h4 className="adminPanel-right-table-head-h3-value">
          {`${moment().format("DD")}-${moment().format("MM")}-${moment().format(
            "YYYY"
          )}-${moment().format("dddd")}`}
        </h4>
      </div>
      <div className="row">
        <div className="adminPanel-right-timeTable-body-sec">
          {reservationTableItem !== undefined &&
            reservationTableItem[0].reservationTableTimeTable.map(
              (reservationTableItemTimeItem, index) => {
                let reserved = 0;
                let available =
                  reservationTableItemTimeItem.reservationTable.length;
                reservationTableItemTimeItem.reservationTable.forEach(
                  (reservationTableItem) => {
                    if (reservationTableItem.reservation !== null) {
                      reserved += 1;
                      available -= 1;
                    }
                  }
                );
                return (
                  <div className="reservationTableItemTimeItem" key={index}>
                    <h5 className="reservationTableItemTimeItem-h5">
                      {reservationTableItemTimeItem.time}
                    </h5>
                    <p className="reservationTableItemTimeItem-p">Reserved : {reserved}</p>
                    <p className="reservationTableItemTimeItem-p">Available : {available}</p>
                    <p className="reservationTableItemTimeItem-p">
                      Total:{" "}
                      {reservationTableItemTimeItem.reservationTable.length}
                    </p>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </section>
  );
};

export default ReservationTableItem;
