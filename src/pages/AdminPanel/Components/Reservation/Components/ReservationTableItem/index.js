import React from "react";
import moment from "moment/moment";

const index = () => {
  return (
    <section className="reservationTableItem">
      <div className="row">
        <h4 className="adminPanel-right-table-head-h3-value">
          {`${moment().format("DD")}-${moment().format("MM")}-${moment().format("YYYY")}-${moment().format("dddd")}`}
        </h4>
      </div>
      <div className="row reservationTableItemTable-row">

      </div>
    </section>
  );
};

export default index;
