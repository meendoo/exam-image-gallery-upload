import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_DEV_SERVER_URL
});

export default api;
