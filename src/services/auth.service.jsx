import axios from 'axios';

export const login = (data) => {
  return axios.post('https://fakestoreapi.com/auth/login', data);
}