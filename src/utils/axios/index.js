import axios from "axios";
import { API_URL, DEFAULT_TIMEOUT } from "./constants";

import { requestHandler, requestErrorHandler, responseHandler, responseErrorHandler } from "./handlers";

axios.defaults.baseURL = API_URL;
axios.defaults.timeout = DEFAULT_TIMEOUT;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(requestHandler, requestErrorHandler);
axios.interceptors.response.use(responseHandler, responseErrorHandler);

export default axios;
