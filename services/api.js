import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/?i=tt3896198&apikey=3454bc81',
});

export default api;
