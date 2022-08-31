import React, { useEffect } from "react";
import moment from "moment";
import useReservationStore from "setup/state-manager/reservationStore";
import { getMenu } from "api/menu";
import { useNavigate } from "react-router-dom";

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

  const Navigate = useNavigate();

  const loadMenu = async (menuId) => {
    try {
      const data = await getMenu(menuId);
      if (data.error) {
        return console.log(data.error);
      }
      // console.group("getMenu", data)
      return data;
    } catch (error) {
      return console.log(error);
    }
  };

  // console.log(loadMenu('62ed30f175ca4d3911f8344d')) 

  const onSubmit = async () => {
   if(reservationTable && reservationTime){
    return Navigate("/customerlogin");
   }
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
                    return ` ${reservationOrder.orderId},`;
                  })}
            </span>
          </p>
          <div className="reservation-list-preorders">
            {reservationOrders.length === 0
              ? ""
              : reservationOrders.map((reservationOrder, index) => {
                  return (
                    <div className="reservation-list-preorder" key={index}>
                      {/* <div className="menu-item-title ">
                        <img
                          src={getMenu(reservationOrder.orderId).menuImage.url}
                          alt="menu item thumbnail"
                        />
                        <div className="menu-item-title-sub">
                          <h3>{getMenu(reservationOrder.orderId).menuName}</h3>
                          <p>
                            {getMenu(reservationOrder.orderId).menuDescription}
                          </p>
                        </div>
                      </div>
                      <div className="menu-item-right">
                        <div className="menu-item-price">
                          ${getMenu(reservationOrder.orderId).menuPrice}
                        </div>
                        <button className="menu-item-add-btn">Add</button>
                      </div> */}
                      {/* { console.log(loadMenu(reservationOrder?.orderId)) } */}
                      {/* <p >{loadMenu(reservationOrder.orderId).menuPrice}</p> */}
                    </div>
                  );
                })}
          </div>
          <button
            className="btn reservation-list-confirm-btn"
            onClick={() => onSubmit()}
          >
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReservationList;
