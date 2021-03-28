import axios from "axios";

const api = axios.create({
  baseURL: "http://eaf6bc401fe5.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
