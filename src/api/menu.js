import axios from "axios";
import { API } from "../setup/backend-manager";

export const createMenu = async (userId, formData, token) => {
  console.log("reached at api section starting");
  try {
    const { data } = await axios.post(`${API}/menu/${userId}`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("reached at api section ending");
    return data;
  } catch (error) {
    return error;
  }
};

export const getMenuByCategory = async (menuCategoryId) => {
  try {
    const { data } = await axios.get(`${API}/menu/${menuCategoryId}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getAllMenu = async () => {
  try {
    const { data } = await axios.get(`${API}/menu`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getMenu = async (menuId) => {
  try {
    const { data } = await axios.get(`${API}/menu/${menuId}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const updateMenu = async (menuId, userId, formData, token) => {
  try {
    const { data } = await axios.put(
      `${API}/menu/${menuId}/${userId}`,
      formData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const updateMenuImage = async (menuId, userId, token) => {
  try {
    const { data } = await axios.put(`${API}/menu/${menuId}/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteMenu = async (menuId, userId, token) => {
  try {
    const { data } = await axios.delete(`${API}/menu/${menuId}/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    return error;
  }
};
