import axios from "axios";
import { API } from "../setup/backend-manager";

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
