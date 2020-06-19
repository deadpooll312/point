import axios from "axios";
import {showError} from "../services/notifications.service";
const baseURL = `${window.location.origin}/rest`;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  ({response}) => {
    const {status, config} = response || {};
    if (status === 401 && config.url !== "login") {
      window.location.href = "/#/login";
      localStorage.clear();
    } else {
      response && showError(response.data.message);
    }

    return Promise.reject(response);
  }
);

export default axiosInstance;
