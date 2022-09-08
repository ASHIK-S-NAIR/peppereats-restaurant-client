import React, { useState, useEffect } from "react";
import { getAllReservationTables } from "api/reservationTable";
import { isAuthenticated } from "api/auth";
import ReservationTable from "pages/AdminPanel/Components/Reservation/Components/ReservationTable";
import ReservationTableItem from "pages/AdminPanel/Components/Reservation/Components/ReservationTableItem";


const Reservation = () => {
  const [reservationTable, setReservationTable] = useState([]);
  const [subSection, setSubSection] = useState("");
  const [reservationTableItem, setReservationTableItem] = useState();

  const { admin, token } = isAuthenticated();

  const loadReservationTables = async () => {
    try {
      const data = await getAllReservationTables(admin._id, token);
      if (data.error) {
        return console.log(data.error);
      }
      return setReservationTable(data);
    } catch (error) {
      return console.log(error);
    }
  };

  const handleAdd = () => {
    return setSubSection("addReservation");
  };

  // const handleUpdate = (reservationItem) => {
  //   return setSubSection("updateMenu"), setMenuItem(menuItem);
  // };

  // const handleDelete = (menuItem) => {
  //   return setSubSection("deleteMenu"), setMenuItem(menuItem);
  // };

  // const handleView = (menuItem) => {
  //   return setSubSection("viewMenu"), setMenuItem(menuItem);
  // };

  useEffect(() => {
    loadReservationTables();
  }, []);

  return (
    <section className="adminPanel-right-section">
      <div className="row">
        <div className="adminPanel-right-header-section">
          <h1 className="adminPanel-right-header">Reservation</h1>
          <button
            className="btn adminPanel-right-addBtn"
            onClick={() => handleAdd()}
          >
            Add Reservation
          </button>
        </div>
      </div>
      <ReservationTableItem />
      <ReservationTable reservationTable= {reservationTable}/>

      {/* {subSection === "addCategory" && (
        <AddCategory setSubSection={setSubSection} />
      )}
      {subSection === "updateCategory" && (
        <UpdateCategory category={category} setSubSection={setSubSection} />
      )}
      {subSection === "viewCategory" && (
        <ViewCategory category={category} setSubSection={setSubSection} />
      )}
      {subSection === "deleteCategory" && (
        <DeleteCategory category={category} setSubSection={setSubSection} />
      )} */}
    </section>
  );
};

export default Reservation;
