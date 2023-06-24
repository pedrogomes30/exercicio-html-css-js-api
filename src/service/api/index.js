import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://desafio.xlow.com.br/',
  timeout: 5000,
});

instance.interceptors.request.use(config => {  
  config.headers['Content-Type'] = 'application/json';
  return config;
}, error => {
  return Promise.reject(error);
});

export default instance;
