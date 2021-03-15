import axios from "axios";

const api = axios.create({
  baseURL: "http://8bca57482fc2.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
