import axios from "axios";

const API = axios.create({
  baseURL:
    "https://campus-serve-backend.onrender.com",
});

export default API;