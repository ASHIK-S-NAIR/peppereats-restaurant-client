import { API } from "setup/backend-manager";
import axios from "axios";
import moment from "moment";

export const getReservation = async (reservationId) => {
  try {
    const { data } = await axios.get(`${API}/reservation/${reservationId}`);
    return data;
  } catch (error) {
    return error;
  }
};
