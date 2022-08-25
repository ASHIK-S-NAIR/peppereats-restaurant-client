import axios from "axios";
import { API } from "../setup/backend-manager";

export const createMenu = async (
  userId,
  { menuName, menuCategory, menuPrice, menuDescription },
  token
) => {
  try {
    const { data } = await axios.post(
      `${API}/menu/createmenu/${userId}`,
      {
        menuName,
        menuCategory,
        menuPrice,
        menuDescription,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getMenuByCategory = async (menuCategoryId) => {
  try {
    const { data } = await axios.get(
      `${API}/menu/getmenubycategory/${menuCategoryId}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getAllMenu = async () => {
  try {
    const { data } = await axios.get(`${API}/menu/getallmenu`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getMenu = async (menuId) => {
  try {
    const { data } = await axios.get(`${API}/menu/getmenu/${menuId}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const updateMenu = async (menuId, userId, body, token) => {
  try {
    const { data } = await axios.put(
      `${API}/menu/updatemenu/${menuId}/${userId}`,
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

export const updateMenuImage = async (menuId, userId, token) => {
  try {
    const { data } = await axios.put(
      `${API}/menu/updatemenuimage/${menuId}/${userId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteMenu = async (menuId, userId, token) => {
  try {
    const { data } = await axios.delete(
      `${API}/menu/deletemenu/${menuId}/${userId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};
