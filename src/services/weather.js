import axios from "axios";

const weatherApi = axios.create({
  baseURL: "http://pro.openweathermap.org/data/2.5/forecast/",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default weatherApi;
