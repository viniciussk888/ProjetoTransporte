import axios from "axios";

const api = axios.create({
  baseURL: "http://2e613be425d4.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
