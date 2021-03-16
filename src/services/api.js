import axios from "axios";

const api = axios.create({
  baseURL: "http://92e4ec8cb948.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
