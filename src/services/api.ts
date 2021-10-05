import axios from 'axios';

const api = axios.create({
  baseURL: 'https://earth-search.aws.element84.com/v0',
})

export default api;