import axios from 'axios';

// define o endpoint da API

export default axios.create({
  baseURL: 'http://localhost:5656/api',
});