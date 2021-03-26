import axios from "axios";

const api = axios.create({
  baseURL: "http://e5bdc480e2d5.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
