import axios from "axios";

const api = axios.create({
  baseURL: "http://fdca93cf9b99.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
