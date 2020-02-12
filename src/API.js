import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crudcrud.com/api/92cc4edb071f4ff4b39d3aa39f95675a'
});

export default api;