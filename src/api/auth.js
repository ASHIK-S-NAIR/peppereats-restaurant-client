import axios from "axios";
import { API } from "../setup/backend-manager";

export const adminLogin = async (userEmail, userPassword) => {
  try {
    const { data } = await axios.post(`${API}/adminlogin`, {
      userEmail,
      userPassword,
    });

    return data;
  } catch (error) {
    return error;
  }
};

export const authenticate = (data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("peppereats_jwt", JSON.stringify(data));
  }
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("peppereats_jwt")) {
    return localStorage.getItem("peppereats_jwt");
  } else {
    return false;
  }
};