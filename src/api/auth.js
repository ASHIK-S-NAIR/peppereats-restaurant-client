import axios from "axios";
import { API } from "../setup/backend-manager";

export const adminLogin = async (userEmail, userPassword) => {
  try {
    const { data } = await axios.post(`${API}/admin/login`, {
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
    return JSON.parse(localStorage.getItem("peppereats_jwt"));
  } else {
    return false;
  }
};

export const customerLoginOtp = async ( userPhoneNumber ) => {
  try {
    const { data } = await axios.post(`${API}/customer/loginotp`, {
      userPhoneNumber
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const customerLoginVerify = async ( userPhoneNumber, otp , reservationTable, reservationTime, reservationOrders) => {
  try {
    console.log("typeof customerPhoneNumber", typeof userPhoneNumber)
    console.log("typeof customerOTP", typeof otp)
    const { data } = await axios.post(`${API}/customer/loginverify`, {
      userPhoneNumber,
      otp,
      reservationTable, reservationTime, reservationOrders
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const customerSignupOtp = async ( userPhoneNumber ) => {
  try {
    const { data } = await axios.post(`${API}/customer/signupotp`, {
      userPhoneNumber,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const customerSignupVerify = async (
  userPhoneNumber,
  userFirstName,
  userLastName,
  userEmail,
  otp,
  reservationTable, reservationTime, reservationOrders
) => {
  try {
    const { data } = await axios.post(`${API}/customer/signupverify`, {
      userPhoneNumber,
      userFirstName,
      userLastName,
      userEmail,
      otp,
      reservationTable, reservationTime, reservationOrders
    });
    return data;
  } catch (error) {
    return error;
  }
};
