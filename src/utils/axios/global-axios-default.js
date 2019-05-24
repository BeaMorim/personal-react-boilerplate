import axios from 'axios';
import API_URL from './constants';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('authorization');
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(async (response) => {
  return response;
}, (error) => {
  // Default error handlers
  return Promise.reject(error);
});

export default axios;

