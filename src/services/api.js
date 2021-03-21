import axios from "axios";

const api = axios.create({
  baseURL: "http://77d47ee71fe8.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
