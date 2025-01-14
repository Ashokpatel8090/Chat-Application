import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-application-0nrh.onrender.com/api",
  withCredentials: true,
});