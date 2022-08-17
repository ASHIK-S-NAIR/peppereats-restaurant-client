import axios from "axios";
import { API } from "../setup/backend-manager";


export const getCategories = async () => {
  try {
    const {data} = await axios.get(`${API}/category/getallcategory`);
    return data;
  } catch (error) {
    return error;
  }
};
