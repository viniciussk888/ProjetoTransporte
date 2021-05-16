import axios from "axios";

const api = axios.create({
  baseURL: "http://57a2e0583a76.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
