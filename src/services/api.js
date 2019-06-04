import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.18.54.76:3000',
});

export default api;
