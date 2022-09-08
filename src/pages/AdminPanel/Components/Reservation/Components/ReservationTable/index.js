import React from "react";

const index = ({ reservationTable }) => {
  return (
    <section className="reservationTable">
      <div className="row">
        <table className="adminPanel-right-table">
          <thead className="adminPanel-right-table-head-sec">
            <tr>
              <th className="adminPanel-right-table-head-value">
                ReservationId
              </th>
              <th className="adminPanel-right-table-head-value">Date</th>
              <th className="adminPanel-right-table-head-value">05:00PM</th>
              <th className="adminPanel-right-table-head-value">06:00PM</th>
              <th className="adminPanel-right-table-head-value">07:00PM</th>
              <th className="adminPanel-right-table-head-value">08:00PM</th>
              <th className="adminPanel-right-table-head-value">09:00PM</th>
              <th className="adminPanel-right-table-head-value">10:00PM</th>
            </tr>
          </thead>
          <tbody className="adminPanel-right-table-body-sec">
            {reservationTable &&
              reservationTable.map((reservationTableItem, index) => {
                return (
                  <tr key={index} className="adminPanel-right-table-body-tr">
                    <td className="adminPanel-right-table-body-value">
                      {reservationTableItem._id}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {reservationTableItem.reservationTableDate}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {reservationTableItem.reservationTableTimeTable[0].time}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {reservationTableItem.reservationTableTimeTable[1].time}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {reservationTableItem.reservationTableTimeTable[2].time}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {reservationTableItem.reservationTableTimeTable[3].time}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {reservationTableItem.reservationTableTimeTable[4].time}
                    </td>
                    <td className="adminPanel-right-table-body-value">
                      {reservationTableItem.reservationTableTimeTable[5].time}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default index;
