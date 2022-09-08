import { API } from "setup/backend-manager";
import axios from "axios";

export const getAllReservationTables = async (adminId, token) => {
  try {
    const {data} = await axios.get(`${API}/reservationtable/${adminId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    return error;
  }
};
