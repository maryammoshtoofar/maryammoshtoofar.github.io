import axios from "axios";
import { FORM_SUBMIT_URL } from "config/api";

export const axiosInstance = axios.create({
  baseURL: FORM_SUBMIT_URL,
});
axiosInstance.defaults.baseURL = FORM_SUBMIT_URL;

export default axiosInstance;
