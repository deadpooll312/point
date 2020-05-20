import axios from "axios";
// const baseURL = "https://awp.gost-group.com/rest/";
const baseURL = "https://arm-park.gost-group.com/rest/";
// { "login":"parktestuser", "password": "park_test_user" }
const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // const headers = {};
    // eslint-disable-next-line no-useless-catch
    // try {
    //   const token = await localStorage.getItem(TOKEN);
    //   if (token) {
    //     headers["Authorization"] = `Token ${token}`;
    //   }
    // } catch (e) {
    //   throw e;
    // }
    // config.headers = headers;

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  ({response}) => {
    // if (response && response.status === 403) {
    //   alert("Не достаточно прав");
    // }
    //
    // if (response && response.data && response.status !== 403) {
    //   const {data} = response;
    //   const keys = Object.keys(data);
    //   alert(data[keys[0]]);
    // }
    return Promise.reject(response);
  }
);

export default axiosInstance;
