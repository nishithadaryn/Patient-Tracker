import axios from 'axios';

const api = axios.create({
  baseURL: 'https://patient-tracker-backend-9px0.onrender.com/', // No trailing slash
});

export default api;
