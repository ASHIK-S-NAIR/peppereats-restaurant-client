import axios from "axios";
import { API } from "../setup/backend-manager";

export const getAllCustomers = async (adminId, token) => {
  try {
    const { data } = await axios.get(
      `${API}/customer/getallcustomers/${adminId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};
