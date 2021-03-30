import axios from "axios";

const api = axios.create({
  baseURL: "https://ec49578bc6c4.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
