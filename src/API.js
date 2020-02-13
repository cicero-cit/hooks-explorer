import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5e4553afe85a4e001492c8b6.mockapi.io'
});

export default api;