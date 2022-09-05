import axios from "axios";
import { API } from "../setup/backend-manager";

export const getAllCustomers = async (adminId, token) => {
  try {
    const { data } = await axios.get(
      `${API}/customer/${adminId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getCustomer = async (customerId, adminId, token) => {
  try {
    const { data } = await axios.get(
      `${API}/customer/${customerId}/${adminId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const updateCustomer = async (customerId, adminId, body, token) => {
  try {
    const { data } = await axios.put(
      `${API}/customer/${customerId}/${adminId}`,
      body,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteCustomer = async (customerId, adminId, token) => {
  try {
    const { data } = await axios.delete(
      `${API}/customer/${customerId}/${adminId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};
