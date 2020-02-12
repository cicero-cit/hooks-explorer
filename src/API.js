import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crudcrud.com/api/67c87453f5a14a0c9e991120c68d412c'
});

export default api;