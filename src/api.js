import axios from 'axios';

const productos = axios.create({
  baseURL: 'http://192.168.2.192:3001', // URL base de tu API
  withCredentials: false, // Esto es para CORS
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  get(endpoint) {
    return productos.get(endpoint);
  }
};