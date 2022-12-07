import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://linkr-api-node.onrender.com',
});
