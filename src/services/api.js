import axios from "axios";

const api = axios.create({
  baseURL: "https://65e61985a6d1.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
