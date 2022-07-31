import axios from "axios";

export const getCategories = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/v1/category");
    return response.data;
  } catch (error) {
    return error;
  }
};
