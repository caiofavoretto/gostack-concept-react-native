import axios from 'axios';

const api = axios.create({
  baseURL: 'https://67dd1b86.ngrok.io',
});

export default api;
