import axios from "axios";

const api = axios.create({
  baseURL: "http://e7ec42c47823.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
