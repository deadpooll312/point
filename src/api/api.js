import axios from "axios";
const baseURL = `http://test.guardpoint.ru/`;

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
    }

    return Promise.reject(response);
  }
);

export default axiosInstance;
