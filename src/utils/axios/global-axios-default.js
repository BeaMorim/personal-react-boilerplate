import axios from 'axios';
import API_URL from './constants';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('authorization');
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;