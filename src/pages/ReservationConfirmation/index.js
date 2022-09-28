import { getReservation } from "api/reservation";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import "./style.css";

const ReservationConfirmation = () => {
  const { reservationId } = useParams();
  const [reservation, setReservation] = useState();

  const loadReservationDetails = async () => {
    try {
      const data = await getReservation(reservationId);
      if (data.error) {
        return console.log(data.error);
      }
      console.log("data", data);
      setReservation(data);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    loadReservationDetails();
  }, []);

  return (
    <section className="reservationConfirmation-section sec-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-aos="fade-up">Reservation Confirmation</h2>
          </div>
        </div>
        <div className="row reservationConfirmation-sub-section-row">
          <div className="row reservationConfirmation-sub-upperSection"></div>
          <div className="row reservationConfirmation-sub-lowerSection"></div>
        </div>
      </div>
    </section>
  );
};

export default ReservationConfirmation;
