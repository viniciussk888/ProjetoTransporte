import axios from "axios";

const api = axios.create({
  baseURL: "http://2ee00109f6db.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
