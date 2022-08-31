import React, { useState, useEffect } from "react";
import { getCategories } from "api/category";
import moment from "moment";

import ViewIcon from "assets/images/temp/View.svg";
import EditIcon from "assets/images/temp/Edit.svg";
import RemoveIcon from "assets/images/temp/Remove.svg";

const Reservation = () => {
  const [reservations, setReservations] = useState([]);
  const [subSection, setSubSection] = useState("");
  const [reservation, setReservation] = useState();

  return (
    <div>Reservation</div>
  )
}

export default Reservation