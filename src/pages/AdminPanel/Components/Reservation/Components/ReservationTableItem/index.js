import React, { useState } from "react";
import moment from "moment/moment";
import { isAuthenticated } from "api/auth";
import { getReservationTableByDate } from "api/reservationTable";

const ReservationTableItem = () => {
  const [reservationTableItem, setReservationtableItem] = useState([]);

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

  return (
    <section className="reservationTableItem">
      <div className="row">
        <h4 className="adminPanel-right-table-head-h3-value">
          {`${moment().format("DD")}-${moment().format("MM")}-${moment().format(
            "YYYY"
          )}-${moment().format("dddd")}`}
        </h4>
      </div>
      <div className="row">
        <div className="adminPanel-right-table-body-sec"></div>
      </div>
      <div className="row reservationTableItemTable-row"></div>
    </section>
  );
};

export default ReservationTableItem;
