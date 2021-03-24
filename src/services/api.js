import axios from "axios";

const api = axios.create({
  baseURL: "http://9f87a42bb9c8.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
