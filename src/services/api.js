import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://adoni.herokuapp.com',
  baseURL: 'http://10.0.0.107:3333',
});

export default api;
