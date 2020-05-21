import axios from "axios";
const baseURL = `${window.location.origin}/rest`;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  ({response}) => {
    const {status, config} = response;
    if (status === 401 && config.url !== "login") {
      window.location.href = "/login";
    }
    return Promise.reject(response);
  },
);

export default axiosInstance;
