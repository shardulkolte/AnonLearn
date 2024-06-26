import axios from "axios";
// config
// import { BASE_URL } from '../config';

// ----------------------------------------------------------------------
const BASE_URL = "http://localhost:3001";

const axiosInstance = axios.create({ baseURL: "http://localhost:3001" });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
