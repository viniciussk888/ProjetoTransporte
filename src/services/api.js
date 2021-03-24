import axios from "axios";

const api = axios.create({
  baseURL: "http://78585a2b38b5.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
