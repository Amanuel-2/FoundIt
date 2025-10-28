import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getNotices = () => API.get('/notice');
export const createNotice = (data) => API.post('/notice', data);
