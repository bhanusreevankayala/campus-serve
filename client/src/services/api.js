import axios from "axios";

const API = axios.create({
  baseURL:
    "https://campus-serve-backend.onrender.com/api",
});

export default API;