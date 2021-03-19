import axios from "axios";

const api = axios.create({
  baseURL: "http://094edbcbfb04.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
