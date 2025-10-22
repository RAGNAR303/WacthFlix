import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "34654e9cf57e602d1f094457e5c705ec",
    language: "pt-BR",
    page: 1,
  },
});
export default api;
