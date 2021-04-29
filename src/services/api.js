import axios from "axios";

const api = axios.create({
  baseURL: "http://407d9c4a3d84.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
