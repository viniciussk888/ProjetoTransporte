import axios from "axios";

const api = axios.create({
  baseURL: "http://9794f367c13a.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
