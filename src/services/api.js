import axios from "axios";

const api = axios.create({
  baseURL: "http://19b5b24bfacc.ngrok.io",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
