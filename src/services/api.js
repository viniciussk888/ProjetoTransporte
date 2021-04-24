import axios from "axios";

const api = axios.create({
  baseURL: "http://2582221f5657.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
