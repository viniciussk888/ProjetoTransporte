import axios from "axios";

const api = axios.create({
  baseURL: "http://252810d37d76.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
