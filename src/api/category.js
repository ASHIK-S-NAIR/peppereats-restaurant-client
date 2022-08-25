import axios from "axios";
import { API } from "../setup/backend-manager";

export const getCategories = async () => {
  try {
    const { data } = await axios.get(`${API}/category/getallcategory`);
    return data;
  } catch (error) {
    return error;
  }
};

export const createCategory = async (userId, categoryName, token) => {
  try {
    const { data } = await axios.post(
      `${API}/category/createcategory/${userId}`,
      {
        categoryName,
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

export const getCategory = async (categoryId) => {
  try {
    const { data } = await axios.get(
      `${API}/category/getCategory/${categoryId}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const updateCategory = async (categoryId, userId, body, token) => {
  try {
    const { data } = await axios.put(
      `${API}/category/updatecategory/${categoryId}/${userId}`,
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

export const deleteCategory = async (categoryId, userId, token) => {
  try {
    const { data } = await axios.delete(
      `${API}/category/deletecategory/${categoryId}/${userId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};
