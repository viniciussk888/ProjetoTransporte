import axios from "axios";

const api = axios.create({
  baseURL: "http://f62939a865b0.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
