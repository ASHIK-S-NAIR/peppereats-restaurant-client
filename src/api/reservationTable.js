import { API } from "setup/backend-manager";
import axios from "axios";
import moment from "moment";

export const getAllReservationTables = async (adminId, token) => {
  try {
    const { data } = await axios.get(`${API}/reservationtable/${adminId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const getReservationTableByDate = async (adminId, token) => {
  try {
    const { data } = await axios.get(
      `${API}/reservationtable/date/${adminId}/?reservationTableDate=${moment().format(
        "DD"
      )}-${moment().format("MM")}-${moment().format("YYYY")}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};
