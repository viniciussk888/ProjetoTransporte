import axios from "axios";

const api = axios.create({
  baseURL: "http://fa9567180275.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
