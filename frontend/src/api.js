import axios from "axios";

const api = axios.create({
  baseURL: "https://patient-tracker-fpk5.onrender.com", // local FastAPI
});

export default api;
