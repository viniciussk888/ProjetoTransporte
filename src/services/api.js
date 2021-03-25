import axios from "axios";

const api = axios.create({
  baseURL: "http://09e1f73ef9c0.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
