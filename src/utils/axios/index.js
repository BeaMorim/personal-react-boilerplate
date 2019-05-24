import axios from "axios";
import API_URL from "./constants";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  async resquest => {
    if (localStorage.getItem("authorization")) {
      resquest.headers = {
        ...resquest.headers,
        Authorization: localStorage.getItem("authorization"),
      };
    }
    return resquest;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  async response => response,
  error => {
    // Default error handlers
    return Promise.reject(error);
  }
);

export default axios;
