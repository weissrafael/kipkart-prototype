import axios from "axios";

const api = axios.create({
  baseURL: "https://api.kipkart.com.br",
});

export default api;
